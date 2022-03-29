import './App.css';
import React, {useState, useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Start from './components/Start'
import Allies from './components/Allies'
import Gadgets from './components/Gadgets'
import Villains from './components/Villains'

function App() {

  // const [loggedIn, setLoggedIn] = useState()

  const [showHero, setShowHero] = useState([])

  useEffect(()=>{
      fetch("/authorized_hero")
      .then(r => r.json())
      .then(setShowHero)
      // setLoggedIn(true)
  }, [])

  const [allies, setAllies] = useState([])

  useEffect(()=>{
    fetch("/allies")
    .then(r=> r.json())
    .then(setAllies)
  }, [])

  return (
    <div className="App">
      <header className="App-header">    

        <main>
        <Switch>
          <Route exact path="/authorized_hero">
            <Home hero={showHero} logout={setShowHero}/>
          </Route>
          <Route path="/allies">
            <Allies hero={showHero} allies={allies} handleAllies={setAllies}/>
          </Route>
          <Route path="/gadgets">
            <Gadgets hero={showHero}/>
          </Route>
          <Route path="/villains">
            <Villains hero={showHero}/>
          </Route>

          {/* <Route exact path="/">
          {loggedIn ? <Redirect to="/authorized_hero" /> : <Start />}
          </Route> */}

          <Route exact path="/">
            <Start login={setShowHero} hero={showHero}/>
          </Route>

        </Switch>
        </main>
        
      </header>
    </div>
  );
}

export default App;

// if authorized redirect to hero home page else redirct to warning page