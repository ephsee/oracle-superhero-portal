import {NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'
import GadgetsForm from './GadgetsForm'
import GadgetCard from './GadgetCard'

function Gadgets({hero}) {       
          
  const [gadgets, setGadgets] = useState([])

    useEffect(()=>{
      fetch('/gadgets')
      .then(r=>r.json())
      .then(setGadgets)
    }, [])

    function deleteGadget(id){
      console.log(id)
      fetch(`/gadgets/${id}`,{
          method: 'DELETE'})
      .then(r=>r.json())
      .then(console.log())
      alert('ITEM REMOVED FROM INVENTORY')
      const gadgetsAfterDelete = gadgets.filter( gad => id !== gad.id)
      setGadgets(gadgetsAfterDelete)
  }

    const [showForm, setShowForm] = useState(false)

    function formHandler() {
      setShowForm(!showForm)
    }
  
        return (
        <div>
        
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
            <div className="buttons padthis">
           
            Your tools:
           
            </div>
        <div>
            <GadgetCard hero={hero} gadgets={gadgets} deleteGadget={deleteGadget} handleGadgets={setGadgets}/>
        </div>
            <div className="buttons">
           
            <button className="formBTNfont" onClick={formHandler}>🗡️add to your arsenal:</button>

            </div>
           
            </div>
            <div className="buttons">
            {showForm ? <GadgetsForm hero={hero} gadgets={gadgets} handleGadgets={setGadgets} setShowForm={setShowForm}/> : null}
            </div>
      </div>
    );
  }
  
  export default Gadgets;