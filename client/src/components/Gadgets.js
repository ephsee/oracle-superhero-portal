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
        
        <div className="Initial">

        <div className='navbar'>
          <NavLink
            to="/authorized_hero">
            Details
          </NavLink>

          <NavLink
            to="/allies">
            Allies
          </NavLink>

          <NavLink
            to="/villains">
            Villains
          </NavLink>
        </div>
        <hr></hr>
        Your tools:
        <hr></hr>
        <GadgetCard hero={hero} gadgets={gadgets} deleteGadget={deleteGadget} handleGadgets={setGadgets}/>
        <hr></hr>
        <button onClick={formHandler}>🗡️add to your arsenal:</button>
        <hr></hr>
        <div>
        {showForm ? <GadgetsForm hero={hero} gadgets={gadgets} handleGadgets={setGadgets} setShowForm={setShowForm}/> : null}
        </div>
      </div>
    );
  }
  
  export default Gadgets;