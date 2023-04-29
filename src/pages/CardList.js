import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'
import 'react-toastify/dist/ReactToastify.css';
import HskApi from "../api.js";
import ListCard from "../elements/ListCard.js";
import {
  Container,
  Card,
  CardTitle,
  Button
} from "reactstrap";


function CardList({username, learned}){
  const history = useNavigate()

  useEffect(()=>{
    console.log("quiz",username)
    if(!username && username != 0 ){

      history('/login')
      
    }
  }, [username])
  
  const [userCards, setUserCards] = useState([])

  
    useEffect(()=>{
        if (username){
        try{
        async function getCards(){
            let cards = []
            if(learned){
                cards = await HskApi.getCardsByUserGroup(username,11)
            }else{
            const allCards = await HskApi.getCardsByUser(username)
            cards = allCards.filter(card => !(card.group_number == 11))
            }

            return cards
        }
        getCards().then((cards) =>{
        setUserCards(cards)
        console.log(cards)})
        }catch(e){console.log(e)}
    }
    },[username])


  return(
    <Container className="body-space">

    {(userCards[0] && learned) &&
        <Card color="secondary" inverse>
            <CardTitle tag = 'h1' style = {{'paddingTop': "15px", "paddingBottom": "15px"}}>
                 Congratulations! You have learned a total of <span style={{"color":"lightgreen"}}>{userCards.length}</span> Chinese words!
            </CardTitle>
        </Card>
    }

    {(userCards[0] && !learned) && 
        <Card body color = "secondary" inverse>
            <CardTitle tag = 'h5' style = {{'paddingTop': "10px"}}>
            Start a quiz with your current cards:
            </CardTitle>
        <Button style = {{width:"100%"}} color='info' size="lg" onClick={() => history('/quiz')}>
            開始
        </Button>
      </Card>
    }
    <br></br>
    <ListCard 
      
      english = "English" 
      simplified='Simplified' 
      traditional='Traditional' 
      pinyin='Pinyin' 
      inDeck = {true} 
      username = {username} 
      id = {0}
      key = {0}/>
    
    {userCards.map((card)=>{
      return (<ListCard english = {card.english} 
                simplified = {card.simplified}
                traditional = {card.traditional} 
                pinyin = {card.pinyin} 
                inDeck = {true} 
                username = {username} 
                key = {card.word_id} 
                id = {card.word_id}  
                group = {card.group_number}/>)
    })}
    
    {
      !userCards[0] &&
      <Card body color = "secondary" inverse>
        <CardTitle tag = 'h5' style = {{'paddingTop': "10px"}}>
           No cards to review, add new cards to continue learning:
        </CardTitle>
       <Button style = {{width:"100%"}} color='info' size="lg" onClick={() => history('/add')}>
            Add New Cards
       </Button>
      </Card>
    }
    
  </Container>
  
  )
}

export default CardList;