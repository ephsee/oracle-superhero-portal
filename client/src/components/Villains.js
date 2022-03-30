import {NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'
import VillainsForm from './VillainsForm'

function Villains({hero, setHero}) {

    const [villains, setVillains] = useState([])

    const [showDeets, setShowDeets] = useState("")

    function toggleCard(){
      setShowDeets(!showDeets)
    }

    // console.log(showDeets)

    // const [where, setWhere] = useState([...villains])

    useEffect(()=>{
      fetch('/villains')
      .then(r=>r.json())
      .then(setVillains)
    }, [])

    // console.log(villains)

    // const findEm = villains.locations.map(l => )

    // console.log(hero)

    // console.log(where)

    // const tool = hero.gadgets.map( t => t.item_name)

    // console.log(tool)

    const whereYaAt = villains.map( vl => <div key={vl.id}> <p>{vl.name} was last seen in {vl.location.name}{vl.at_large ? "~ Status:  CAPTURED" : null}</p> </div>)
    // console.log(whereYaAt)

    const heroVillains = villains.filter( v => v.hero_id === hero.id).map( v => <div key={v.id}><img src={v.image} alt={v.name} width="200px"/>{showDeets ? <p>{v.name} ~ id: {v.id}</p> : <p>{v.notes}</p>}<h3>{v.at_large!==true ? "GET EM ❓" : "GOT EM ✔️"}</h3></div>)

    const [showForm, setShowForm] = useState(false)

    function formHandler(){
        setShowForm(!showForm)
    }

    return (
      <div className="Initial">

        <div>
          <NavLink
            to="/authorized_hero">
            Details
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
        
        <div>
        <hr></hr>
        Persons of Interest:
        <hr></hr>
        <div onClick={toggleCard}>
        {heroVillains}
        </div>
        </div>

        <hr></hr>
        <button onClick={formHandler}>👺update your rouges gallery:</button>
        {showForm ? <VillainsForm hero={hero} villains={villains} handleVillains={setVillains} setHero={setHero} setShowForm={setShowForm}/> : null }
        
        <div>
        <hr></hr>
        <p>See All Villain Activity:</p>
        <hr></hr>
        {whereYaAt}
  
        </div>
      </div>
    );
  }
  
  export default Villains;