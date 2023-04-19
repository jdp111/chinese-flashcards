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


function Add({username}){
  const history = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchBy, setSearchBy] = useState('english')
  const [searchedCards, setSearchedCards] = useState([])
  const [searched, setSearched] = useState(false)

  
  const handleSearch = async (evt) =>{
    setSearched(searchTerm)
    evt.preventDefault();
    let userCards = await HskApi.getCardsByUser(username)
    userCards = userCards.map((el)=>el.simplified)
    
    const cards = await HskApi.getWords(searchBy,searchTerm)
    for (let card of cards){
      if(userCards.includes(card.simplified)){
        card.inDeck = true
        continue
      }
      card.inDeck = false
    }
    setSearchedCards(cards)
    console.log(cards)
    return
  }

  return(
    <Container className="body-space">
    <Footer/>
  <Card className = 'search-bar'>
  <CardBody>
  <CardTitle tag = 'h4'>Manual Search Flashcards</CardTitle >
  <br></br>
  <Form onSubmit={handleSearch}>
  <Row>
    <Col>
    </Col>
    <Col>
    <Label>
        Search:
      </Label>
      </Col>

      <Col>
    <Label>
        Search By:
      </Label>
      </Col>

      <Col>
      </Col>
      <Col>
      </Col>
  </Row>

  <Row className=" g-0 align-items-center">
    <Col>
    </Col>
    <Col>
      
      <Input
        onChange={(ev) => setSearchTerm(ev.currentTarget.value)}
        name="password"
        placeholder="Ex. 'when'"
        type="text"
      />
    </Col>
    <Col>
      <FormGroup check>
    <Input
     onChange={(ev) => setSearchBy(ev.currentTarget.value)}
      id="exampleSelect"
      name="select"
      type="select"
      value={searchBy}
    >
      <option>
        english
      </option>
      <option>
       中文 (traditional)
      </option>
      <option>
       中文 (simplified)
      </option>
      <option>
        pinyin
      </option>
      </Input>
      </FormGroup>
    </Col>
    <Col>
      <label></label>
      <Button color = 'info' size='lg' className="">
        Submit
      </Button>
    </Col>
    <Col>
    </Col>
  </Row>
  </Form>
  </CardBody>
  </Card>
    { searched &&
    <div>
    <ListCard english = "English" 
      simplified='Simplified' 
      traditional='Traditional' 
      pinyin='Pinyin' 
      inDeck = {true} 
      username = {username} 
      id = {0}
      key = {0}/>
    
    {searchedCards.map((card)=>{
      return (<ListCard english = {card.english} 
                simplified = {card.simplified}
                traditional = {card.traditional} 
                pinyin = {card.pinyin} 
                inDeck = {card.inDeck} 
                username = {username} 
                key = {card.id} 
                id = {card.id}  />)
    })}
    
    {
      !searchedCards[0] &&
      <Card>
        <CardTitle tag = 'h5' style = {{'paddingTop': "10px"}}>
           No results found from search: '{searched}'
        </CardTitle>
       
      </Card>
    }
    </div>
    }
  </Container>
  
  )
}

export default Add;