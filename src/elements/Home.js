import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import HskApi from '../api'
import '../styles/Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

function Home({username}){
    const history = useNavigate()
    console.log("SDfesf")
    return(
        <Container className="body-space homepage">
            
            <h1 className="title">歡迎使用 CHINESELEARN!</h1>
            
                {username
                ? <Button onClick={() => history('/test')}>
                    Start flashcard test
                  </Button>
                : <Button onClick={() => history('/test')}>
                    Click Me
                  </Button>
                }
        </Container>
    )
}

export default Home;