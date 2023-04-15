import React, { useState } from "react";
import '../styles/Home.css'
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText
} from 'reactstrap';


function Footer(){

    return(
      <Card
      body
      color="secondary"
      inverse
    >
      <CardTitle tag="h5">
        Auto-Add Cards
      </CardTitle>
      <CardText>
        If you are unsure which words to learn, an automatic deck will allow you to add cards to your deck based on your skill level  
      </CardText>
      <Button color='info' size="lg">
        Auto-Add
      </Button>
    </Card>

       )
  }

  export default Footer;