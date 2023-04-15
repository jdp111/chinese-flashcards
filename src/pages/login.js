import React from "react";
import { Navigate, useNavigate}  from "react-router-dom";

import HskApi from '../api'
import '../styles/login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Container,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

function Login({username, setUsername}){
    const history = useNavigate()
  const [usernameInput, setUsernameInput] = React.useState("");
  const [password, setPassword] = React.useState("");

  if(username){
    history('/')
  }

  const loginHandler = async (ev) => {
    ev.preventDefault();
    try{
      if (!usernameInput || !password) {
        return;
      }

      
      const result = await HskApi.login({
        "username": usernameInput,
        "password": password
      })

      localStorage.setItem("username",usernameInput)
      localStorage.setItem("token", result.token)
      setUsername(usernameInput)
      history('/login')

    }catch(e){e.map((err)=>{toast.error(err, {className:"toast-message", position: toast.POSITION.TOP_CENTER})})}
  };
  console.log("e")
  return (
    <Container className="body-space">
      <ToastContainer/>
          <Card className="login-card">
            <CardBody>
              <Form onSubmit={loginHandler}>
                <FormGroup>
                  <Label for="usernameInput" className="mr-sm-2">
                    Email
                  </Label>
                  <Input className="text-box"
                    type="text"
                    name="usernameInput"
                    id="usernameInput"
                    placeholder="user345345"
                    onChange={(ev) => setUsernameInput(ev.currentTarget.value)}
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
                    placeholder="password"
                    onChange={(ev) => setPassword(ev.currentTarget.value)}
                  />
                </FormGroup>
                <Button type="submit" color="primary">
                  Login
                </Button>
              </Form>
            </CardBody>
          </Card>
        <br></br>
        <a href = "/register">Don't have an account? signup here</a>
    </Container>
  );
};

export default Login;
