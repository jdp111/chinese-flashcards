import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'
import 'react-toastify/dist/ReactToastify.css';
import HskApi from "../api.js";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";




function ListCard({traditional, simplified, pinyin, english}){

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
        <Col>
        {english}
        </Col>
        <Col>
        <Button size='sm' color='success'>
        Add To Deck
        </Button>
        </Col>
        </Row>
    </CardBody>
    </Card>)
  }

  export default ListCard;