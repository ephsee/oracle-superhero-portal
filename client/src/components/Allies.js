import {NavLink} from 'react-router-dom'
// import {useEffect, useState} from 'react'

function Allies({hero, allies, handleAllies}) {
  
    const allyCity = allies.filter( a => a.hero_id).map( l => l.location.name)

    const heroAllies = allies.filter( a => a.hero_id === hero.id).map( ally => <div key={ally.id} ><img src={ally.image} alt={ally.name} width="200" border="3px solid black"/><div className="allies vil-det hero-info-background ally-flash"><ul className="lists"><li><h2>{ally.name}</h2></li><li>Name: {ally.alter_ego}</li><li>Location: {allyCity[0]}</li></ul></div> </div>)

    return(

        <div className ="something">

          <div>
          <NavLink
            className="links"
              to="/authorized_hero">
              Details
            </NavLink>
  
            <NavLink
            className="links"
              to="/allies">
              Allies
            </NavLink>
  
            <NavLink
            className="links"
              to="/gadgets">
              Gadgets
            </NavLink>
  
            <NavLink
            className="links"
              to="/villains">
              Villains
            </NavLink>
  
          </div>
          <div className="buttons padthis hero-info-background">
            
            Trusted Allies for: {hero.name}
            
            </div>
            <div className="villains hero-info-background ally-flash">
            {heroAllies}
            </div>
        </div>
    )
}

export default Allies