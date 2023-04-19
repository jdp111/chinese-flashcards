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


function CardBack({pinyin, english, simplified, traditional, number, total, setCorrect}){
  const history = useNavigate()

  return (
      <Card className="flashcard-front">
        <CardBody>
            <Row style={{height:"15px", textAlign: "left"}}>
                <p> {number}/{total}</p>
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
                    <Button size="lg"  onClick={() =>setCorrect(false)} outline color="danger"style = {{height:"100px"}}>
                        Mark Incorrect
                    </Button>
                </Col>
                <Col>
                    <Button size="lg" onClick={() =>setCorrect(true)} outline color="success"style = {{height:"100px"}}>
                        Mark Correct
                    </Button>
                </Col>
            </Row>
        </CardBody>
      </Card>
  )



}

export default CardBack