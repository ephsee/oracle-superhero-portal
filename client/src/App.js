import './App.css';
import React, {useState, useEffect} from 'react'
import { Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Start from './components/Start'
import Allies from './components/Allies'
import Gadgets from './components/Gadgets'
import Villains from './components/Villains'

function App() {

  const [showHero, setShowHero] = useState([])

  useEffect(()=>{
      fetch("/authorized_hero")
      .then(r => r.json())
      .then(setShowHero)
  }, [])

  console.log(showHero)

  return (
    <div className="App">
      <header className="App-header">       

        <main>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/authorized_hero">
            <Home hero={showHero} logout={setShowHero}/>
          </Route>
          <Route path="/allies">
            <Allies hero={showHero}/>
          </Route>
          <Route path="/gadgets">
            <Gadgets hero={showHero}/>
          </Route>
          <Route path="/villains">
            <Villains hero={showHero}/>
          </Route>
          <Route exact path="/">
            <Start />
          </Route>
        </Switch>
        </main>
        
      </header>
    </div>
  );
}

export default App;

// log in and redirect together on main page

// <Route exact path="/">
// {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
// </Route>

// if authorized redirect to hero home page else redirct to warning page