import {NavLink} from 'react-router-dom'
import GadgetsForm from './GadgetsForm'

function Gadgets({hero}) {

    const gadgets = hero.gadgets.map( g => <div key={g.id}>{g.item_name} {g.quantity}</div>)

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
        {gadgets}

        <hr></hr>
        
        Add To Your Arsenal
        <GadgetsForm hero={hero}/>

      </div>
    );
  }
  
  export default Gadgets;