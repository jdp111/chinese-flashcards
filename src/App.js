import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./pages/Navbar.js"
import Login from "./pages/login.js"
import Register from "./pages/Register.js"
import Home from "./pages/Home.js"
import Add from "./pages/Add.js"
import AutoAdd from "./pages/AutoStart.js"
import Quiz from './pages/Quiz';
import CardList from './pages/CardList';
import DocumentSearch from './pages/DocumentSearch';

function App() {
  const [username, setUsername] = useState(0)

  useEffect(()=>{

    async function effect() {
    const localUser =   localStorage.getItem('username') || null
 
    setUsername(localUser)
    } 
    effect()
  })

  
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
            
            <Route exact = 'true' path = '/quiz' element= {
              <div>
                <Quiz username = {username}/>
              </div>}
            />

            <Route exact = 'true' path = '/cards/current' element= {
              <div>
                <Navbar expand = {true} fixed = {"top"} username = {username}/>
                <CardList username = {username} learned = {false}/>
              </div>}
            />

            <Route exact = 'true' path = '/cards/complete' element= {
              <div>
                <Navbar expand = {true} fixed = {"top"} username = {username}/>
                <CardList username = {username} learned = {true}/>
              </div>}
            />

            <Route exact = 'true' path = '/docsearch' element= {
              <div>
                <Navbar expand = {true} fixed = {"top"} username = {username}/>
                <DocumentSearch username = {username}/>
              </div>}
            />


            
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}



export default App;
