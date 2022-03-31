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
      return ("nothing to see here")
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
          <hr></hr>
          <h2>{hero.alter_ego} from {hero.base}</h2>
          <hr></hr>
          <h3>Happy Hunting</h3>
          <img src={hero.image} alt={hero.name} width="300px"/>
          {/* <p>{hero.name} has been vigilantly protecting the innocent and defending {where}</p> */}
        </div>
  
        </>
      );
    }

  }
  
  export default Home;