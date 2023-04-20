import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'
import 'react-toastify/dist/ReactToastify.css';
import HskApi from "../api.js";
import ListCard from "../elements/ListCard.js";

import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import CardFront from "../elements/CardFront";
import CardBack from "../elements/CardBack";
import StartCard from "../elements/StartCard.js"

function Quiz({username}){
  const history = useNavigate()
  const [reveal, setReveal] = useState(false)
  const [current, setCurrent] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [cards, setCards] = useState([{}])
  const [start, setStart] = useState(false)
  const [currCard, setCurrCard] = useState({"simplified":"", "traditional":"", "pinyin":"","english":""}) 
  const [session, setSession] = useState(0)

  async function fetchData(user){
    let allCards = []
    const userSession = await HskApi.GetSession(user)

    setSession(userSession.session_number)

    const quizBoxes = [
      (session + 1) %10+1,
      (session + 5) %10+1,
      (session + 7) %10+1
    ]
      
    for(let box of quizBoxes){
      const boxCards = await HskApi.getCardsByUserGroup(user, box)
      allCards = [...allCards, ...boxCards]
        
    }


    if (allCards.length <20){
      const unReviewed = await HskApi.getCardsByUserGroup(user, 0)
      for (let i=0; i < 20-cards.length; i++){
        if(unReviewed[i]){
        allCards.push(unReviewed[i] )}
      }
    }
    if(!allCards[0] && start){
      await HskApi.IncreaseSession(username)
      setStart(false)
      return
    }

    await setCards(allCards)
    setCurrCard(allCards[0])
    console.log(allCards)
    return allCards
  }


  async function setCard(){
    if (!correct){
      console.log("marking false")
      const newGroup = await HskApi.updateGroup(username, currCard.word_id, 0 )
      console.log("placed in group", newGroup.group_number)
    }
    else if(correct && currCard.group_number == 0){
      const newGroup = await HskApi.updateGroup(username, currCard.word_id, session)
    }
    else if(correct && currCard.group_number == session - 1){
      const newGroup = await HskApi.updateGroup(username, currCard.word_id, 11)
    
    }
    console.log(current, cards.length)
    if (current == cards.length){
      console.log("finished")
      await HskApi.IncreaseSession(username)
      history('/quiz/end')
      return
    }
    const nextCard = cards[current]
    console.log(nextCard)
    setCurrCard(nextCard)
  }


  useEffect(()=> {
    if(current == 0 ) return
  
    setCard().then(()=>{
    setReveal(false)
    })

  },[current])



  
  /**
  *
  * get cards from relevant groups for the current session
  * this means that the study session includes the box of the same number
  * 
  * if more than 20 flashcards are added from review boxes, no new cards will be added
  */
  useEffect(()=> { 
    console.log("starting")
    const user = localStorage.getItem('username') || null
    if (!user) history('/')``
    fetchData(user)
  }, [start])


  const toggleReveal = () => {
    setReveal(!reveal)
  }

  return (
    <Container className="body-space quiz">
      <h2>Memory Test</h2>
      <br></br>
      {(!start) 
      ? <StartCard toggle = {setStart}></StartCard>
      :<div>
      {reveal
        ? <CardBack simplified = {currCard.simplified}  
            traditional={currCard.traditional}
            pinyin = {currCard.pinyin} 
            english = {currCard.english}
            setCorrect = {setCorrect}
            number = {current}
            total = {cards.length}
            setCurrent = {setCurrent}

          />
      : <CardFront simplified = {currCard.simplified} 
          traditional={currCard.traditional} 
          number = {current} 
          total = {cards.length}
          toggle = {toggleReveal}
          />
      }</div>
      }
    </Container>
  )

}

export default Quiz