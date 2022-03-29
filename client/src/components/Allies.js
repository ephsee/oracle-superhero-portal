import {NavLink} from 'react-router-dom'
// import {useEffect, useState} from 'react'

function Allies({hero, allies, handleAllies}) {

    const heroAllies = allies.filter( a => a.hero_id === hero.id).map( ally => <div key={ally.id}>{ally.name} ~ {ally.alter_ego}</div>)

    return(

        <div>

          <div>
            <NavLink
              to="/authorized_hero">
              Details
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

            Trusted Allies for: {hero.name}
            <hr></hr>

            {heroAllies}

        </div>
    )
}

export default Allies