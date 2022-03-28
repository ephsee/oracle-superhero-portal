import {NavLink} from 'react-router-dom'
import VillainsForm from './VillainsForm'

function Villains({hero}) {

    const villains = hero.villains.map( v => <div key={v.id}><p>{v.name}</p></div>)

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
        {villains}

        <hr></hr>

        Add to your Most Wanted :
        <VillainsForm />

      </div>
    );
  }
  
  export default Villains;