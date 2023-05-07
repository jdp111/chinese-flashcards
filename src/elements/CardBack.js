import React from "react";
import '../styles/Home.css'
import 'react-toastify/dist/ReactToastify.css';
import "../styles/Cards.css"
import {
  Row,
  Col,
  Card,
  CardBody,
  Button
} from "reactstrap";


function CardBack({pinyin, english, simplified, traditional, number, total, nextCard}){

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
            <Row style={{height:"220px"}}>
                <p className="english">{english}</p>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <Button size="lg"  onClick={() =>nextCard(false)} outline color="danger" className="mark-button">
                        Mark Incorrect
                    </Button>
                </Col>
                <Col>
                    <Button size="lg" onClick={() =>nextCard(true)} outline color="success" className="mark-button">
                        Mark Correct
                    </Button>
                </Col>
            </Row>
        </CardBody>
      </Card>
  )



}

export default CardBack
