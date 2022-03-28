import {NavLink} from 'react-router-dom'
// import {useState, useEffect} from 'react'
import GadgetsForm from './GadgetsForm'
import GadgetCard from './GadgetCard'

function Gadgets({hero, gadgets, handleGadgets}) {       
          
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
            to="/villains">
            Villains
          </NavLink>
        </div>

        Your tools :
        <GadgetCard hero={hero} gadgets={gadgets} handleGadget={handleGadgets} />

        <hr></hr>
        
        Add To Your Arsenal:
        <GadgetsForm hero={hero} gadgets={gadgets} handleGadgets={handleGadgets}/>

      </div>
    );
  }
  
  export default Gadgets;