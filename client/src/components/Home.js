import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'

function Home({hero, logout}) {

  console.log(hero)

  function signout(e) {

    fetch("/logout", {
      method: 'DELETE'})
      .then(r=>r.json())
      .then(logout)
      alert("LOG OUT COMPLETE - DATA SECURED")
    }

    if (hero.error === 'No Active Heros') {
      return (<h1 className="blank-page">nothing to see here</h1>)
    } else {
      return (
        <>
  
          <div>
            <NavLink
              to="/authorized_hero">
              Details
            </NavLink>
  
            <NavLink
              to="/allies">
              Allies
            </NavLink>
  
            <NavLink
              to="/gadgets">
              Gadgets
            </NavLink>
  
            <NavLink
              to="/villains">
              Villains
            </NavLink>
  
            <NavLink
              to="/"
              onClick={(e) => signout(e)}
              >
              Logout
            </NavLink>
          </div>
        
        <div>
          <div> 
            <hr></hr>
            <h2>{hero.alter_ego} from {hero.base}</h2>
            <hr></hr>
            <h3>Happy Hunting</h3>
            <div className="hero">
            <img src={hero.image} alt={hero.name} width="300px"/>
            {/* <p>{hero.name} has been vigilantly protecting the innocent and defending {where}</p> */}
            </div>
          </div>
        </div>
  
        </>
      );
    }

  }
  
  export default Home;