import React, { useState } from "react";
import '../styles/Home.css'
import 'react-toastify/dist/ReactToastify.css';
import HskApi from "../api.js";
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
} from "reactstrap";





function ListCard({traditional, simplified, pinyin, english, inDeck, id, username}){


     const handleAdd = async (evt)=> {
      const result = await HskApi.addCards(username, [id])
      console.log(result)
      evt.target.style.display='none'
    }
    return(<Card>
        <CardBody>
        <Row className=" g-0 align-items-center">
        
        <Col>
        {traditional}
        </Col>
        <Col>
        {simplified}
        </Col>
        <Col>
        {pinyin}
        </Col>
        <Col md = {5} >
        {english}
        </Col>
        <Col>
        { !inDeck &&
        <Button size='sm' color='success' onClick={handleAdd}>
        Add To Deck
        </Button>
        }
        </Col>
        </Row>
    </CardBody>
    </Card>)
  }

  export default ListCard;