import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Auto.css'
import 'react-toastify/dist/ReactToastify.css';

import {
  Container,
  Row
} from "reactstrap";
import AddButton from "../elements/AddLevelButton";


function Add({username}){
  const history = useNavigate()

  return (
    <Container className="body-space">
    <h1> Auto Add</h1>
    <p className="subtitle">Choose your Chinese learning level:</p>
    <Row className=" g-0 align-items-center">
        <AddButton lvl = "1" grade = "Kindergarten" username = {username}/>
        <AddButton lvl = "2" grade = "Third Grade"  username = {username}/>
        <AddButton lvl = "3" grade = "Sixth Grade"  username = {username}/>
        <AddButton lvl = "4" grade = "Middle School"  username = {username}/>
        <AddButton lvl = "5" grade = "High School"  username = {username}/>
        <AddButton lvl = "6" grade = "College"  username = {username}/>
        
    </Row>
    <br></br>
    <br></br>
    <p >How it works:</p>
    <p>when you add from a level, it will automatically add cards to your collection from that level. You can only have up to 100 unlearned cards in your collection, so if you try to push a button a second time, it will not add any cards. If you have finished all cards in a level, no cards will be added to your collection</p>
    </Container>
  )

}

export default Add;