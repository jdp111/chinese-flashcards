import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  useEffect(()=>{
    async function effect() {
    const localToken = localStorage.getItem('token') || null
    const localUser = localStorage.getItem('username') || null
    
    if (localToken && localUser) {
      const {username, firstName, lastName, email}  = await JoblyApi.getUser(localUser)
      setCurrentUser({username, firstName, lastName, email} )
    }
  } effect()
  },[])

  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit
        </p>
        <a>
        </a>
      </header>
    </div>
  );
}

export default App;
