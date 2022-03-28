import {NavLink} from 'react-router-dom'
// import {useState} from 'react'
import VillainsForm from './VillainsForm'

function Villains({hero}) {

    const villains = hero.villains.map( v => <div key={v.id}><p>NAME: {v.name} ~ ID: {v.id}</p></div>)

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

          <NavLink
            to="/villains">
            Villains
          </NavLink>
        </div>

        Persons of Interest :
        {villains} id: {villains.id}

        <hr></hr>

        <VillainsForm hero={hero}/>

      </div>
    );
  }
  
  export default Villains;