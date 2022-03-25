// import {useEffect, useState} from 'react'


function Home({hero}) {

  console.log(hero)

  function signout () {

    fetch("/logout",{
        method: 'DELETE'})
    .then(r => r.json())
    .then(console.log)
    
}

    return (
      <>
      <button onClick={signout}>LOGOUT</button>
      <div> 
        <h2>Welcome, {hero.name}</h2>
        <div><button> Allies </button></div>
        <div><button> Gadgets </button></div>
        <div><button> Villains </button></div>
      </div>
      </>
    );
  }
  
  export default Home;

