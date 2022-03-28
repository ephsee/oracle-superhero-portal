// import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'

function Home({hero, logout}) {

  function signout(e) {

    fetch("/logout", {
      method: 'DELETE'})
      .then(r=>r.json())
      .then(logout)
      alert("log out complete - data secured")
    }

    // redirect to start page

    return (
      <>

        <div>
          <NavLink
            to="/authorized_hero">
            Hero Page
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
        </div>

      {hero === {} ? <button to="/login">LOGIN</button> : <button onClick={(e) => signout(e)}>LOGOUT</button>}

      <div> 
        <h2>Happy Hunting {hero.name}</h2>
        <img src={hero.image} alt={hero.name}/>
        {/* <div><button> Allies </button></div>
        <div><button> Gadgets </button></div>
        <div><button> Villains </button></div> */}
      </div>

      </>
    );
  }
  
  export default Home;