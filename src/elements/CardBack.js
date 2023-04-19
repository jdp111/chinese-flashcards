import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'
import 'react-toastify/dist/ReactToastify.css';
import HskApi from "../api.js";
import ListCard from "../elements/ListCard.js";
import Footer from "../elements/Footer.js"
import "../styles/Cards.css"
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


function CardBack({pinyin, english, simplified, traditional, number, total, setCorrect, setCurrent}){
  const history = useNavigate()

  const handleClick = (isCorrect) => {
    setCorrect(isCorrect)
    setCurrent(number+1)
  }

  return (
      <Card className="flashcard-front">
        <CardBody>
            <Row className="card-head">
                <p> {number+1}/{total}</p>
            </Row>
            <Row style={{height:"80px"}}>
                <p className="chinese">{simplified}({traditional})</p>
                <p className="pinyin"> {pinyin}</p>
            </Row>
            <br></br>
            <Row style={{height:"220px", textAlign: "left"}}>
                <p className="english">{english}</p>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <Button size="lg"  onClick={() =>handleClick(false)} outline color="danger" className="mark-button">
                        Mark Incorrect
                    </Button>
                </Col>
                <Col>
                    <Button size="lg" onClick={() =>handleClick(true)} outline color="success" className="mark-button">
                        Mark Correct
                    </Button>
                </Col>
            </Row>
        </CardBody>
      </Card>
  )



}

export default CardBack