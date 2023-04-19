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
import CardFront from "../elements/CardFront";
import CardBack from "../elements/CardBack";


function Quiz({username}){
  const history = useNavigate()
  const [reveal, setReveal] = useState(false)
  const [current, setCurrent] = useState(0)
  const [correct, setCorrect] = useState(0)
  
  useEffect(()=> {
    //const fetchData = async () => {
      //await HskApi.
    //}
    console.log(correct)
    setCurrent(current+1)
    setReveal(false)
    setCorrect(0)
  },[correct])


  const toggleReveal = () => {
    setReveal(!reveal)
  }

  return (
    <Container className="body-space quiz">
      <h2>Memory Test</h2>
      <br></br>
      {reveal
      ? <CardBack simplified = "齐心协力力"  
          traditional="齊心協力力" 
          pinyin = "wēi bù zú dào zú dào" 
          english = "fig. lighthearted person; Daoist immortal; supernatural entity; (in modern fiction) fairy, elf, leprechaun, etc.; supernatural being, celestial being, immortal; a person who has the power of clairvoyance or who is free from worldly cares"
          setCorrect = {setCorrect}
        />
      : <CardFront simplified = "齐心协力力"  
          traditional="齊心協力力" 
          number = {current} 
          total = {20}
          toggle = {toggleReveal}
          />
      }
    </Container>
  )

}

export default Quiz