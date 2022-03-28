import {NavLink} from 'react-router-dom'

function Allies({hero}) {

    const allies = hero.allies.map( a => <div key={a.id}><h2>{a.name}</h2></div>)

    return(

        <div>

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

            ALLIES OF AUTHORIZED HERO

            {allies}

        </div>
    )
}

export default Allies