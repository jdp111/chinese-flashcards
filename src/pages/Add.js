import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'
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

function Add({username}){
    const [searchTerm, setSearchTerm] = useState('')
    const [searchBy, setSearchBy] = useState('')



    const history = useNavigate()
    console.log("SDfesf")
    return(
    <div></div>
    )
}

export default Add;