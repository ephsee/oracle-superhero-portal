import {NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'
import VillainsForm from './VillainsForm'

function Villains({hero}) {

    const [villains, setVillains] = useState([])

    useEffect(()=>{
      fetch('/villains')
      .then(r=>r.json())
      .then(setVillains)
    }, [])

    const heroVillains = villains.filter( v => v.hero_id === hero.id).map( v => <div key={v.id}><p>NAME: {v.name} ~ ID: {v.id}</p></div> )

    const [showForm, setShowForm] = useState(false)

    function formHandler(){
        setShowForm(!showForm)
    }

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
        </div>

        Persons of Interest:
        {heroVillains}

        <hr></hr>
        <button onClick={formHandler}>👺click to update your rouges gallery</button>
        {showForm ? <VillainsForm hero={hero} villains={villains} handleVillains={setVillains}/> : null }
      </div>
    );
  }
  
  export default Villains;