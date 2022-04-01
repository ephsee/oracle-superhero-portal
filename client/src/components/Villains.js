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

    const whereYaAt = villains.map( vl => <div key={vl.id}> <p>{vl.name} was last seen in {vl.location.name}{vl.at_large ? <p style={{color: "green"}}> Status:  CAPTURED</p> : <p style={{color: "red"}}> Status: AT LARGE</p> }</p> </div>)

    const heroVillains = villains.filter( v => v.hero_id === hero.id).map( v => <div className="hero-info-background padthis" key={v.id}><img src={v.image} alt={v.name} width="200px" onClick={() => toggleCard(v)} border="3px solid black"/><h3 className="buttons">{v.at_large!==true ? "GET EM ❓" : "GOT EM ✔️"}</h3></div>)

    // onClick={(e)=>editField(gad)

    // const aVillain = villains.filter( v => v.hero_id === hero.id)
    // console.log(aVillain)

    const [showForm, setShowForm] = useState(false)

    function formHandler(){
        setShowForm(!showForm)
    }

    return (
      <div className="something">

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
          
        Persons of Interest:
        
        </div>
        <div>
          <div className="villains villain-flash">
            {heroVillains} 
          </div>
          
          {aVil ? <VillainDetails aVil={aVil} hero={hero}/> : null }
          
        </div>

        
        <div className="buttons">
        <button className="formBTNfont" onClick={formHandler} >👺update your rouges gallery:</button>
        </div>
        
        <div className="forms">
        {showForm ? <VillainsForm hero={hero} villains={villains} handleVillains={setVillains} setHero={setHero} setShowForm={setShowForm} setAVil={setAVil}/> : null }
        </div>
        <div className="villains-info">
        
        <h1>See All Villain Activity:</h1>
        
        {whereYaAt}
        </div>
      </div>
    );
  }
  
  export default Villains;