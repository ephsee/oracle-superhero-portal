import {NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'
import VillainsForm from './VillainsForm'
import VillainDetails from './VillainDetails'

function Villains({hero, setHero}) {

    const [villains, setVillains] = useState([])

    const [aVil, setAVil] = useState("")

    const [showDeets, setShowDeets] = useState(false)

    function toggleCard(v){
      setShowDeets(!showDeets)
      setAVil(v)
      console.log(v)
      console.log(aVil)
    }

    useEffect(()=>{
      fetch('/villains')
      .then(r=>r.json())
      .then(setVillains)
    }, [])

    const whereYaAt = villains.map( vl => <div key={vl.id}> <p>{vl.name} was last seen in {vl.location.name}{vl.at_large ? "~ Status:  CAPTURED" : null}</p> </div>)

    const heroVillains = villains.filter( v => v.hero_id === hero.id).map( v => <div key={v.id}><img src={v.image} alt={v.name} width="200px" onClick={() => toggleCard(v)}/><h3>{v.at_large!==true ? "GET EM ❓" : "GOT EM ✔️"}</h3></div>)

    // onClick={(e)=>editField(gad)

    // const aVillain = villains.filter( v => v.hero_id === hero.id)
    // console.log(aVillain)

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
        <div>
        {heroVillains} 
        {aVil ? <VillainDetails aVil={aVil} hero={hero}/> : null }
        </div>
        </div>

        <hr></hr>
        <button onClick={formHandler}>👺update your rouges gallery:</button>
        {showForm ? <VillainsForm hero={hero} villains={villains} handleVillains={setVillains} setHero={setHero} setShowForm={setShowForm} setAVil={setAVil}/> : null }
        
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