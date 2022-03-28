import {NavLink} from 'react-router-dom'
// import {useState, useEffect} from 'react'
import VillainsForm from './VillainsForm'

function Villains({hero, villains, handleVillains}) {

    const heroVillains = villains.filter( v => v.hero_id === hero.id).map( v => <div key={v.id}><p>NAME: {v.name} ~ ID: {v.id}</p></div> )

    return (
      <div className="Initial">

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
        </div>

        Persons of Interest:
        {heroVillains}

        <hr></hr>

        <VillainsForm hero={hero} villains={heroVillains} handleVillains={handleVillains}/>

      </div>
    );
  }
  
  export default Villains;