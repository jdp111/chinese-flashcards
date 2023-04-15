import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import HskApi from "./api"
import './App.css';
import Navbar from "./elements/Navbar.js"
import Login from "./elements/login.js"
import Register from "./elements/Register.js"
import Home from "./elements/Home.js"

function App() {
  const defaultUser = null
  const [username, setUsername] = useState(defaultUser)

  useEffect(()=>{
    async function effect() {
    const localToken = localStorage.getItem('token') || null
    const localUser = localStorage.getItem('username') || null
    console.log("local storage username value", localUser)
    if (localToken && localUser) {
      setUsername(localUser )
    }
  } effect()
  },[])

  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar expand = {true} fixed = {"top"} username = {username}/>

        <main>
          <Routes>
            <Route/>
            <Route exact="true" path = '/' element={<Home username = {username}/>}/>
            <Route exact="true" path = '/login' element={<Login username = {username}/>}/>
            <Route exact="true" path = '/register' element = {<Register username = {username}/>}/>
            
            <Route/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}



export default App;
