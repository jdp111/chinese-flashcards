import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Auto.css'
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


function Add({username}){
  const history = useNavigate()
  return (
    <Container className="body-space">
    <h1> Auto Add</h1>
    <p className="subtitle">Choose your Chinese learning level:</p>
    <Row className=" g-0 align-items-center">
        <Col>
            <Button size = 'lg' color = "success"> 
              <h5>Level 1</h5>
              <p>Kindergarten</p>
            </Button>
        </Col>
        <Col>
            <Button size = 'lg' color = "success">
              <h5>Level 2</h5>
              <p>Third Grade</p>
            </Button>
        </Col>
        <Col>
            <Button size = 'lg' color = "success">
            <h5>Level 3</h5>
              <p>Sixth Grade</p>
            </Button>
        </Col>
        <Col>
            <Button size = 'lg' color = "success">
            <h5>Level 4</h5>
              <p>Middle School</p>
            </Button>
        </Col>
        <Col>
            <Button size = 'lg' color = "success">
            <h5>Level 5</h5>
              <p>High School</p>
            </Button>
        </Col>
        <Col>
            <Button size = 'lg' color = "success">
            <h5>Level 6</h5>
              <p>College</p>
            </Button>
        </Col>
        
    </Row>

    </Container>
  )

}

export default Add;