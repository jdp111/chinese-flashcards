import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Cards.css'
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Container,
  
} from "reactstrap";
import Navbar from '../pages/Navbar.js'

function EndQuiz({emptyQuiz, username}){
  const history = useNavigate()
    console.log(emptyQuiz)
  const handleClick = (isCorrect) => {
  }

  return (
    <div>
    <Navbar expand = {true} fixed = {"top"} username = {username}/>

     {emptyQuiz
     ? <div>
        <h1 className="title">没有</h1>
         <h2>You have no cards to study right now, add new cards to learn new words, or start new session to continue reviewing old cards</h2> 
         <br></br>
         <Button onClick={() => history('/add')} color = 'success' size = 'lg' className="end-button">
            Add Flashcards
            <br></br>
            多一点
          </Button>
          <Button onClick={() => window.location.reload(false)} color = 'info' size = 'lg' className="end-button">
            New Flashcard Quiz
            <br></br>
            再一次
          </Button>

       </div>      
     :<div><h1 className="title">结束!</h1>
        <h2> 
            You have no more cards to study for now, start another quiz session to continue your review and retry the cards you missed, or view your current flashcards deck
        </h2>
        <br></br>
         <Button onClick={() => history('/cards/current')} color = 'success' size = 'lg' className="end-button">
            View Flashcards
            <br></br>
            查看卡片
          </Button>
          <Button onClick={() => window.location.reload(false)} color = 'info' size = 'lg' className="end-button">
            New Flashcard Quiz
            <br></br>
            再一次
          </Button>
    </div>
    }
        
          
          
        
        
</div>
  )



}

export default EndQuiz