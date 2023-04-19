import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import HskApi from "./api"
import './App.css';
import Navbar from "./pages/Navbar.js"
import Login from "./pages/login.js"
import Register from "./pages/Register.js"
import Home from "./pages/Home.js"
import Add from "./pages/Add.js"
import AutoAdd from "./pages/AutoStart.js"
import Quiz from './pages/Quiz';

function App() {
  const defaultUser = null
  const [username, setUsername] = useState(defaultUser)

  useEffect(()=>{
    async function effect() {
    const localToken = localStorage.getItem('token') || null
    const localUser =  localStorage.getItem('username') || null
    
    if (localToken && localUser) {
      setUsername(localUser )
    }
  } effect()
  },[])

  
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route/>
            <Route exact="true" path = '/' element={
              <div>
                <Navbar expand = {true} fixed = {"top"} username = {username}/>
                <Home username = {username}/>
              </div>}
            />

            <Route exact="true" path = '/login' element={
              <div>
                <Navbar expand = {true} fixed = {"top"} username = {username}/>
                <Login username = {username} setUsername = {setUsername}/>
              </div>}
            />

            <Route exact="true" path = '/register' element = {
              <div>
                <Navbar expand = {true} fixed = {"top"} username = {username}/>
                <Register username = {username}/>
              </div>}
            />

            <Route exact = 'true' path = '/add' element= {
              <div>
                <Navbar expand = {true} fixed = {"top"} username = {username}/>
                <Add username = {username}/>
              </div>}
            />

            <Route exact = 'true' path = '/auto-add' element= {
              <div>
                <Navbar expand = {true} fixed = {"top"} username = {username}/>
                <AutoAdd username = {username}/>
              </div>}
            />
            
            <Route exact = 'true' path = '/test' element= {
              <div>
                <Quiz username = {username}/>
              </div>}
            />


            
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}



export default App;
