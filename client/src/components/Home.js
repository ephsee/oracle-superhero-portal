// import {useEffect, useState} from 'react'

function Home({hero, logout}) {

  console.log(hero)

  function signout(e) {

    fetch("/logout", {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(hero),
      })
      .then(r=>r.json())
      .then(logout)   
    }   

    return (
      <>
      <button onClick={(e) => signout(e)}>LOGOUT</button>
      <div> 
        <h2>Welcome, {hero.name}</h2>
        <h3>{hero.alter_ego} || {hero.base}</h3>
        <div><button> Allies </button></div>
        <div><button> Gadgets </button></div>
        <div><button> Villains </button></div>
      </div>
      </>
    );
  }
  
  export default Home;

