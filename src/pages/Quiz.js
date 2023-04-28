import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'
import 'react-toastify/dist/ReactToastify.css';
import HskApi from "../api.js";
import ListCard from "../elements/ListCard.js";

import {Container} from "reactstrap";
import CardFront from "../elements/CardFront";
import CardBack from "../elements/CardBack";
import StartCard from "../elements/StartCard.js"
import EndQuiz from "../elements/EndQuiz";

function Quiz({username}){
  const history = useNavigate()
  const [reveal, setReveal] = useState(false)
  const [current, setCurrent] = useState(1)
  const [cards, setCards] = useState([])
  const [start, setStart] = useState(false)
  const [end, setEnd] = useState(false)
  const [currCard, setCurrCard] = useState({"simplified":"", "traditional":"", "pinyin":"","english":""}) 
  const [session, setSession] = useState(0)


 /**
  * cycles to the next card, and handles where the previous card goes
  * if card marked incorrect, sets card group to zero
  * if card marked correct and is a new card, card is added to group corresponding to current user session
  * if card is marked correct and already asigned a group, card stays in group until a full user session cycle (ten review sessions)
  * 
  * increases session at the end of cards to review
  * 
  */
  async function nextCard(correct){
    console.log("condition for add to completed", correct, currCard.group_number, (session + 8)%10)
    if (!correct){
      console.log("marking false")
      const newGroup = await HskApi.updateGroup(username, currCard.word_id, 0 )
      console.log("marked incorrect, placing in group", newGroup.group_number)
    }
    else if(correct && currCard.group_number == 0){
      const newGroup = await HskApi.updateGroup(username, currCard.word_id, session)
      console.log("group was 0, setting to group ", newGroup.group_number)
    }
    
    else if(correct && currCard.group_number == (session + 8)%10){
      const newGroup = await HskApi.updateGroup(username, currCard.word_id, 11)
      console.log("you are done with this card, setting to group", newGroup.group_number)
    }

    if (current == cards.length){
      console.log("finished")
      await HskApi.IncreaseSession(username)
      setEnd(true)
      return
    }
    const nextCard = cards[current]
    console.log(nextCard)
    setCurrCard(nextCard)
    setCurrent(current+1)
    setReveal(false)
  }

/**
 * 
 * starts the quiz
 * adds cards to the quiz section, first from review boxes
 * if review cards less than 20, adds cards from the new card reserve 
 * 
 * if no review cards or new cards, ends session and prompts user to add cards
 * 
 * returns list of cards in session
 * 
 */
  async function startQuiz(){
    let allCards = []
    const userSession = await HskApi.GetSession(username)
    const session_number = userSession.session_number
    const quizBoxes = [
      (session_number + 1) %10+1,
      (session_number + 5) %10+1,
      (session_number + 7) %10+1
    ]
      
    for(let box of quizBoxes){
      const boxCards = await HskApi.getCardsByUserGroup(username, box)
      console.log("cards from box",box,boxCards)
      allCards = [...allCards, ...boxCards]
    }

    if (allCards.length <20){
      
      const unReviewed = await HskApi.getCardsByUserGroup(username, 0)
      for (let i=0; i <= 20-cards.length; i++){
        if(unReviewed[i]){
        allCards.push(unReviewed[i] )}
      }
      console.log("adding cards from unreviewed")
    }

    if(!allCards.length){
      console.log("triggered no flashcards")
      await HskApi.IncreaseSession(username)
      setStart(false)
      setEnd(true)
      return
    }

    setSession(session_number)
    console.log("session", session_number)
    setCards(allCards)
    setCurrCard(allCards[0])
    console.log(allCards)
    setStart(true)
    return allCards
  }



  
  /**
  *
  * get cards from relevant groups for the current session
  * this means that the study session includes the box of the same number
  * 
  * if more than 20 flashcards are added from review boxes, no new cards will be added
  */


  const toggleReveal = () => {
    setReveal(!reveal)
  }

  return (
    <Container className="body-space quiz">
      {(!end)
      ?  <div><h2>Memory Test</h2>
      <br></br>
      {(!start) 
        ? <StartCard startQuiz = {startQuiz}></StartCard>
        :<div>{reveal
            ? <CardBack simplified = {currCard.simplified}  
                traditional={currCard.traditional}
                pinyin = {currCard.pinyin} 
                english = {currCard.english}
                nextCard = {nextCard}
                number = {current-1}
                total = {cards.length}
                setCurrent = {setCurrent}

              />
            : <CardFront simplified = {currCard.simplified} 
                traditional={currCard.traditional} 
                number = {current-1} 
                total = {cards.length}
                toggle = {toggleReveal}
                />
          }</div>
      }</div>
      : <EndQuiz username = {username} emptyQuiz = {!cards.length}></EndQuiz>
    }
    </Container>
  )

}

export default Quiz