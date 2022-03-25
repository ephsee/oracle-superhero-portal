import './App.css';
import React, {useState, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Hero from './components/Hero'
import Logout from './components/Logout'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div><h1>Welcome to ORACLE</h1></div>       

        <main>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/heros">
            <Home />
          </Route>
          <Route path="/authorized_hero">
            <Hero />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
        </main>
        
      </header>
    </div>
  );
}

export default App;
