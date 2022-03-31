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
  
          <div className='navbar'>
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
        
        <div className='hero-icontainer'>
          <div className='hero-subcontainer'>
            <div className='hero-info'> 
              {/* <hr></hr> */}
              <img className='hero-image' src={hero.image} alt={hero.name} width="300px"/>
              <h2>{hero.alter_ego} from {hero.base}</h2>
              {/* <hr></hr> */}
              <h3>Happy Hunting</h3>
              
              <div className="hero">
              
              {/* <p>{hero.name} has been vigilantly protecting the innocent and defending {where}</p> */}
              </div>
            </div>
          </div>
        </div>
  
        </>
      );
    }

  }
  
  export default Home;