import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'
import 'react-toastify/dist/ReactToastify.css';
import "../styles/Cards.css"
import {
  Row,
  Card,
  CardBody,
  Button,
} from "reactstrap";


function CardFront({startQuiz}){
  const history = useNavigate()

  return (
      <Card className="flashcard-front">
        <CardBody>
            <Row style={{height:"125px"}}>
            </Row>
            <Row style={{height:"130px"}}>
                <h2>You will be given flashcards for review. mark them correct if you got it right, and incorrect to study the word further</h2>
            </Row>
            <br></br>
            
            <br></br>
            <Row>
                <Button onClick={startQuiz}  size="lg" color="success" style = {{height:"100px"}}>
                    <p>Start Test</p>
                </Button>
            </Row>
            <Row style={{height:"70px"}}>
                
            </Row>
        </CardBody>
      </Card>
  )

}

export default CardFront