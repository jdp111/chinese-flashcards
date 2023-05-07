import React from "react";
import '../styles/Home.css'
import 'react-toastify/dist/ReactToastify.css';
import "../styles/Cards.css"
import {
  Row,
  Card,
  CardBody,
  Button,
} from "reactstrap";


function CardFront({simplified, traditional, number, total, toggle}){

  return (
      <Card className="flashcard-front">
        <CardBody>
            <Row className="card-head">
                <p> {number+1}/{total}</p>
            </Row>
            <Row style={{height:"150px"}}>
                <p>
                    Simplified:
                </p>
                <p className="flashcard-chinese">
                    {simplified}
                </p>
            </Row>
            <br></br>
            <Row style={{height:"150px"}}>
                <p>
                    Traditional:
                </p>
                <p className="flashcard-chinese">
                    {traditional}
                </p>
            </Row>
            <br></br>
            <Row>
                <Button onClick={toggle}  size="lg" outline color="info"style = {{height:"100px"}}>
                    Reveal Translation
                </Button>
            </Row>
        </CardBody>
      </Card>
  )



}

export default CardFront
