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

function ListCard({traditional, simplified, pinyin, english, inDeck=true, id, username, group=12}){
    const [hidden, setHidden] = useState(false)

    const handleAdd = async (evt)=> {
      const result = await HskApi.addCards(username, [id])
      console.log(result)
      evt.target.style.display='none'
    }

    const handleDelete = async (evt) => {
      evt.preventDefault()
      await HskApi.deleteCards(username,[id])
      setHidden(true)
    }

    return(<Card hidden={hidden}>
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
        <Col md = {3}>
        { !inDeck &&
        <Button size='sm' color='success' onClick={handleAdd}>
        Add To Deck
        </Button>
        }
        {(group == 11) &&
          <span className="learned">learned</span>
        }
        {(group < 11) &&
          <Button className="remove-button" size='sm' color='danger' onClick={handleDelete}>
            Remove from deck
          </Button>
        }
        </Col>
        </Row>
    </CardBody>
    </Card>)
  }

  export default ListCard;