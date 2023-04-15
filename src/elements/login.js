import React from "react";
import { useNavigate } from "react-router-dom";
import HskApi from '../api'
import '../styles/login.css'
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

function Login(props){
    const history = useNavigate()
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  if (props.username){
    history('/')
  }

  const loginHandler = async (ev) => {
    ev.preventDefault();
    try{
      if (!username || !password) {
        return;
      }

      
      const result = await HskApi.login({
        "username": username,
        "password": password
      })

      console.log(result)

      
    }catch(e){e.map((err)=>{toast.error(err, {className:"toast-message", position: toast.POSITION.TOP_CENTER})})}
  };

  return (
    <Container className="login-container">
      <ToastContainer/>
          <Card className="login-card">
            <CardBody>
              <Form onSubmit={loginHandler}>
                <FormGroup>
                  <Label for="username" className="mr-sm-2">
                    Email
                  </Label>
                  <Input className="text-box"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="something@idk.cool"
                    onChange={(ev) => setUsername(ev.currentTarget.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword" className="mr-sm-2">
                    Password
                  </Label>
                  <Input className="text-box"
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="don't tell!"
                    onChange={(ev) => setPassword(ev.currentTarget.value)}
                  />
                </FormGroup>
                <Button type="submit" color="primary">
                  Login
                </Button>
              </Form>
            </CardBody>
          </Card>
    </Container>
  );
};

export default Login;