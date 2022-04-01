import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'

function Home({hero, logout}) {

  console.log(hero)

  function signout(e) {

    fetch("/logout", {
      method: 'DELETE'})
      .then(r=>r.json())
      .then(logout)
      document.location.reload(true)
      alert("LOG OUT COMPLETE - DATA SECURED")
    }

    if (hero.error === 'No Active Heros') {
      return (<div className="start"><h1 className="blank-page">nothing to see here</h1> <div><img src="https://i.kym-cdn.com/photos/images/newsfeed/001/005/957/aa1.gif" alt="uh uh uh" width="700px"/></div> <h1 className="blank-page">you should probably sign in</h1> </div>)
    } else {
      return (
        <>
  
          <div >
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
  
            <NavLink
            className="links linksLOGOUT"
              to="/"
              onClick={(e) => signout(e)}
              >
              Logout
            </NavLink>
          </div>
        <div className="App padthis">
            <div className="hero-icontainer padthis">
                <div className="hero-subcontainer hero-info-background padthis"> 
                    
                    <h2>{hero.alter_ego} from {hero.base}</h2>
                    
                    <h3>Happy Hunting</h3>
                      <div className="hero-image ">
                        <img className="heroIcon" src={hero.image} alt={hero.name} width="300px"/>
                      </div>
                  <div>
                    <ul className="buttons lists hero-info-background">

                    <li><h3 style={{color: "green"}}>Allies Access: Granted</h3></li>
                    <li><h3 style={{color: "green"}}>Gadgets Access: Granted</h3></li>
                    <li><h3 style={{color: "green"}}>Villains Access: Granted</h3></li>
                    
                    </ul>
                  </div>
                </div>
            </div>
        </div>
  
        </>
      );
    }

  }
  
  export default Home;