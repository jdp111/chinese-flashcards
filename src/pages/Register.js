import React from "react";
import { useNavigate } from "react-router-dom";
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

function Register(props){
    const history = useNavigate()
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rePassword, setRePassword] = React.useState("");
  
  if (props.username){
    history('/')
  }

  const loginHandler = async (ev) => {
    ev.preventDefault();
    try{
      if (!username || !password) {
        return;
      }

      if (!(password == rePassword)){
        setPassword('')
        setRePassword('')
        throw ["re-typed password must match"]
      }

      
      const result = await HskApi.register({
        "username": username,
        "password": password
      })
      
      localStorage.setItem("username",username)
      localStorage.setItem("token", result.token)

      history('/')

    }catch(e){e.map((err)=>{toast.error(err, {className:"toast-message", position: toast.POSITION.TOP_CENTER})})}
  };

  return (
    <Container className="body-space">
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
                    placeholder="user345345"
                    onChange={(ev) => setUsername(ev.currentTarget.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Password" className="mr-sm-2">
                    Password
                  </Label>
                  <Input className="text-box"
                    type="password"
                    name="password"
                    id="Password"
                    placeholder="password"
                    onChange={(ev) => setPassword(ev.currentTarget.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="RePassword" className="mr-sm-2">
                    Re-type Password
                  </Label>
                  <Input className="text-box"
                    type="password"
                    name="repassword"
                    id="RePassword"
                    placeholder="password"
                    onChange={(ev) => setRePassword(ev.currentTarget.value)}
                  />
                </FormGroup>
                <Button type="submit" color="primary">
                  Signup
                </Button>
              </Form>
            </CardBody>
          </Card>
    </Container>
  );
};

export default Register;
