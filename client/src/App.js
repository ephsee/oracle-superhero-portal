import './App.css';
import React, {useState, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Start from './components/Start'

function App() {

  const [heros, setHeros] = useState([])

    useEffect(()=>{
        fetch("/heros")
        .then(r => r.json())
        .then(setHeros)
    }, [])

    const [showHero, setShowHero] = useState([])

    useEffect(()=>{
        fetch("/authorized_hero")
        .then(r => r.json())
        .then(setShowHero)
    }, [])

  return (
    <div className="App">
      <header className="App-header">

        <div><h1>Welcome to ORACLE</h1></div>       

        <main>
        <Switch>
          <Route path="/authorized_hero">
            <Home hero={showHero}/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Start heros={heros}/>
          </Route>
        </Switch>
        </main>
        
      </header>
    </div>
  );
}

export default App;
