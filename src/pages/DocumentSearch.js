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
  ButtonGroup,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";


function DocumentSearch({username, learned}){
  const history = useNavigate()
  const [userCards, setUserCards] = useState([])
  const [traditional, setTraditional] = useState(false)


  
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

        <h2>Document Search</h2>
        <h4>this tool allows you to search a document for words you have learned. The words you know will be hilighted in green, the words in your collection that you are still practicing will be hilighted in yellow</h4>
        <br></br>
        
        <ButtonGroup>
          <Button outline = {traditional} color="primary" onClick={() => setTraditional(false)} active={!traditional}>Simplified (简体字)</Button>
          <Button outline = {!traditional} color="primary" onClick={() => setTraditional(true)} active={traditional}>Traditional (繁体字) </Button>
        </ButtonGroup>
        <br></br>
        <small>make sure you select the correct type of character for your pasted text, or the results will not be accurate</small>
    <br></br>
    <br></br>
    <Form>
        <Input type="textarea" name="text" id="exampleText" placeholder="Paste chinese text here"/>
    </Form>
    
  </Container>
  
  )
}

export default DocumentSearch;