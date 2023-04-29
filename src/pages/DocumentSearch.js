import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'
import 'react-toastify/dist/ReactToastify.css';
import HskApi from "../api.js";
import ListCard from "../elements/ListCard.js";
import Footer from "../elements/Footer.js"
import "../styles/DocumentSearch.css"
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import searchDoc from "../logic_helpers/SearchDoc";


function DocumentSearch({username}){
  const history = useNavigate()
  const [userCards, setUserCards] = useState([])
  const [traditional, setTraditional] = useState(false)
  const [text, setText] = useState('')
  const [output, setOutput] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState(false)

  const handleSubmit = async (evt) =>{
    setSearch(true)
    setLoading(true)
    evt.preventDefault()
    console.log(text)
    const [charsArr, included] =  await searchDoc(text, username, traditional)
    setOutput(charsArr)
    setUserCards(included)
    setLoading(false)
    console.log("included", userCards)

  }

  return(
    
    <Container className="body-space">
    {!search && <div>
    
        <h2>Document Search</h2>
        <h4>this tool allows you to search a document for words you have learned. The words you know will be hilighted in green, the words in your collection that you are still practicing will be hilighted in yellow</h4>
        <br></br>
        
        <ButtonGroup>
          <Button outline = {traditional} color="primary" onClick={() => setTraditional(false)} active={!traditional}>Simplified (简体字)</Button>
          <Button outline = {!traditional} color="primary" onClick={() => setTraditional(true)} active={traditional}>Traditional (繁体字) </Button>
        </ButtonGroup>
        <br></br>
        <small>make sure you select the correct type of character for your pasted text, or the results may not be accurate</small>
    <br></br>
    <br></br>
    <Form onSubmit={handleSubmit} >
        <Input maxLength={2000} type="textarea" name="text" id="exampleText" placeholder="Paste chinese text here" onChange = {(ev)=>{setText(ev.currentTarget.value)}}/>
        <small>{text.length}/2000</small>
        <br></br>
        <Button type = "submit" color = "success">Search Document</Button>
    </Form>
    <br></br>
    </div>}
    {loading
    
    ? <div>
        </div>
    : <div>{search && 
        <Container>
            <h3>Your document</h3>
            <Card >
            
            <CardBody className="text-block">
            {output.map((char)=>{
                if(char.group){
                return (<span className={'group' + char.group} key = {char.char}>{char.char}</span>)
                }else{
                    return char.char
                }
            })}</CardBody>
            </Card>
            <br></br>
            <h3> your cards included in this document: </h3>

            { userCards[0]

            ? <Container>
                <ListCard english = "English" 
                    simplified='Simplified' 
                    traditional='Traditional' 
                    pinyin='Pinyin' 
                    inDeck = {true} 
                    username = {username} 
                    id = {0}
                    key = {0}/>
    
                {userCards.map((card)=>{
                    return <ListCard 
                        simplified={card.simplified} 
                        traditional={card.traditional} 
                        pinyin={card.pinyin} 
                        english={card.english}
                        id = {card.word_id}
                        key={card.simplified}
                        group={card.group_number}
                        username={username}/>
                })}
            </Container>

            :<p>
                There are no words from your flashcards in this article
            </p>
            }


            </Container>
        }</div>
    }
    
  </Container>
  
  )
}

export default DocumentSearch;