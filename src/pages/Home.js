import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'
import 'react-toastify/dist/ReactToastify.css';

import {Container,Button} from "reactstrap";

function Home({username}){
    const history = useNavigate()
    console.log("SDfesf")
    return(
        <Container className="body-space homepage">
            
            <h1 className="title">歡迎使用 CHINESELEARN!</h1>
                <br></br>
                {username
                ? <Button color = 'info' size = 'lg' onClick={() => history('/test')}>
                    Start flashcard test
                    <br></br>
                    開始
                  </Button>
                : 
                    <div>
                        <p style = {{fontSize:"25px"}}>login to make a custom flashcard deck</p>
                        <Button  color='info' size='lg' onClick={() => history('/login')}>
                            Login/Signup
                        </Button>
                    </div>
                }
        </Container>
    )
}

export default Home;