import {NavLink} from 'react-router-dom'
// import {useEffect, useState} from 'react'

function Allies({hero, allies, handleAllies}) {
  
    const allyCity = allies.filter( a => a.hero_id).map( l => l.location.name)

    const heroAllies = allies.filter( a => a.hero_id === hero.id).map( ally => <div key={ally.id}><img src={ally.image} alt={ally.name} width="200"/>{ally.name} ~ {ally.alter_ego} ~ patrols {allyCity[0]} with {hero.name} </div>)

    return(

        <div className='navbar'>

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
            <hr></hr>
            Trusted Allies for: {hero.name}
            <hr></hr>
            <div className='allies'>
            {heroAllies}
            </div>
        </div>
    )
}

export default Allies