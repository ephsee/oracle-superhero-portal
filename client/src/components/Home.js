import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'

function Home({hero, logout}) {

  function signout(e) {

    fetch("/logout", {
      method: 'DELETE'})
      .then(r=>r.json())
      .then(logout)
      alert("log out complete - data secured")
    }

    console.log(hero)

    // const where = hero.locations[0].name

    // console.log(where)

    // USE LOCATIONS TO MAP VILLAINS AT LARGE FOR TODOLIST

    // ask to make sure you want to log out

    // redirect to start page

    return (
      <>

        <div className="navbar">
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

      <div className='hero-info'> 
        {/* <hr></hr> */}
        <img className='hero-image' src={hero.image} alt={hero.name} width="300px"/>
        <h2>{hero.alter_ego} from {hero.base}</h2>
        {/* <hr></hr> */}
        <h3>Happy Hunting</h3>
        
        {/* <p>{hero.name} has been vigilantly protecting the innocent and defending {where}</p> */}
      </div>

      </>
    );
  }
  
  export default Home;