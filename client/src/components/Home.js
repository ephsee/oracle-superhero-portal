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

    // USE LOCATIONS TO MAP VILLAINS AT LARGE FOR TODOLIST

    // const toDoList = hero.villains.filter(v => v.at_large === true).map( vil => <div>{vil.name} in {hoods}</div>)

    // ask to make sure you want to log out

    // redirect to start page

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
        <h2>Happy Hunting {hero.alter_ego}</h2>
        {/* <h3>Villains At Large:</h3> */}
        {/* <p>{toDoList}</p> */}
        <img src={hero.image} alt={hero.name}/>
      </div>

      </>
    );
  }
  
  export default Home;