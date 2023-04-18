import React, { useState } from "react";
import '../styles/Home.css'
import 'react-toastify/dist/ReactToastify.css';
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
} from "reactstrap";




function ListCard({traditional, simplified, pinyin, english, inDeck}){

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
        <Button size='sm' color='success'>
        Add To Deck
        </Button>
        }
        </Col>
        </Row>
    </CardBody>
    </Card>)
  }

  export default ListCard;