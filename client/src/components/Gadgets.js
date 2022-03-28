import {NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'
import GadgetsForm from './GadgetsForm'

function Gadgets({hero, gadgets, handleGadgets}) {

    const heroGadgets = gadgets.filter( g => g.hero_id === hero.id).map( gad => <div key={gad.id}><p>NAME: {gad.item_name} QUANTITY: {gad.quantity}</p></div> )

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

        Your tools :
        {heroGadgets}

        <hr></hr>
        
        Add To Your Arsenal
        <GadgetsForm hero={hero} gadgets={gadgets} handleGadgets={handleGadgets}/>

      </div>
    );
  }
  
  export default Gadgets;