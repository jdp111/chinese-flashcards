import React from "react";
import '../styles/Home.css'
import HskApi from "../api";
import { useNavigate } from "react-router-dom";
import {Col, Button} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";



/**
 * 
 * this function handles button clicks
 * It takes the level, gets all words from level in the database,
 * then adds up to  100 cards to the collection until the number of unfinished cards
 * in a user's collection reaches exactly 100
 * 
 */

function AddButton({lvl, grade, username}){
    const history = useNavigate()


    const AddLvl = async (evt) => {
        try{
        evt.preventDefault()
        const userCards = await HskApi.getCardsByUser(username)
        const finishedCards  = await HskApi.getCardsByUserGroup(username, 11)
        const lvlWords = await HskApi.getWords("lvl", lvl)
        
        let cardsToAdd = []
        let wordIndex = 0
        let cardIndex = 0 
        let i = Math.max((userCards.length-finishedCards.length ), 0)
        if (i >=100){
            throw [`You already have 100 flashcards in your unlearned collection, you cannot add any more`]
        }

        while (i <= 100){
          if (wordIndex >= lvlWords.length){
            break
          }
    
          if (cardIndex >= userCards.length){
            cardsToAdd.push(lvlWords[wordIndex].id)
            wordIndex +=1
            i +=1
            continue
          }
    
          while(lvlWords[wordIndex].id > userCards[cardIndex].word_id){
          cardIndex +=1 
          }

          if (lvlWords[wordIndex].id == userCards[cardIndex].word_id){
            wordIndex += 1
            cardIndex +=1
            continue
          }

          cardsToAdd.push(lvlWords[wordIndex].id)
          wordIndex +=1
          i += 1
        }
        if(cardsToAdd.length == 0){
            throw ["You have already added all cards from this level to your "]
        }
        await HskApi.addCards(username, cardsToAdd)
        
        history('/quiz')

        }catch(e){e.map((err)=>{toast.error(err, {className:"toast-message", position: toast.POSITION.TOP_CENTER})})}
        
      }

    return(
    <Col>
        <ToastContainer/>
        <Button name = {lvl} size = 'lg' color = "success" onClick={AddLvl}> 
            <h5>Level {lvl}</h5>
            <p>{grade}</p>
        </Button>
    </Col>
)}

export default AddButton