import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'
import 'react-toastify/dist/ReactToastify.css';
import HskApi from "../api.js";
import ListCard from "../elements/ListCard.js";
import Footer from "../elements/Footer.js"
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


function CardList({username, learned}){
  const history = useNavigate()
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

    {userCards[0] && 
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
      style = {{'fontWeight':"bolder"}}
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
                id = {card.word_id}  />)
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