// import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'

// build out routes for allies, gadgets and villains

function Home({hero, logout}) {

  // const [allies, setAllies] = useState([])
  // const [gadgets, setGadgets] = useState([])
  // const [villains, setVillains] = useState([])

  // console.log(gadgets)

  console.log(hero)

  // const villains = hero.villains.map((v) => <div><p>{v.name}</p><img src={v.image} alt={v.name}/></div> )

  function signout(e) {

    fetch("/logout", {
      method: 'DELETE'})
      .then(r=>r.json())
      .then(logout)
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

      <button onClick={(e) => signout(e)}>LOGOUT</button>

      <div> 
        <h2>Happy Hunting {hero.name}</h2>
        <img src={hero.image} alt={hero.name}/>
        {/* {villains} */}
        <div><button> Allies </button></div>
        <div><button> Gadgets </button></div>
        <div><button> Villains </button></div>
      </div>

      </>
    );
  }
  
  export default Home;