import {useState, useEffect} from 'react'

function GadgetCard({hero, gadgets, deleteGadget, handleGadgets}) {

    const [showEdit, setShowEdit] = useState(false)

    const [quantity, setQuantity] = useState("")
    const [itemId, setItemId] = useState("")
    const [heroId, setHeroId] = useState("")

    function handleQuantity(e){
        // console.log(parseInt(e.target.value))
        setQuantity(parseInt(e.target.value))
    }

    console.log("item-id:", itemId)
    console.log("hero-id:", heroId)
    console.log("quantity:", quantity)

    function editField(e){
        setShowEdit(!showEdit)
        setItemId(e)
        setHeroId(hero.id)
    }

    function resetGadgets(){
        
        fetch('/gadgets')
        .then(r=>r.json())
        .then(handleGadgets)
        
      }

      function updateGadget(e) {
          e.preventDefault()
          
          const update = {
              id: itemId,  
              hero_id: heroId,
              quantity: quantity
          }
    
          fetch(`/gadgets/${itemId}`,{
                  method:'PATCH',
                  headers:{'Content-Type': 'application/json'},
                  body:JSON.stringify(update)
                })
                .then(r => r.json())
                .then(resetGadgets)
                // .then(console.log)
                alert(`${update.item_name} details updated`)
                setShowEdit(false)
        }

    const gadget = gadgets.filter( g => g.hero_id === hero.id).map( gad => <div key={gad.id}>{gad.item_name} ~ {gad.quantity} <button onClick={(e) => deleteGadget(gad.id)}>❌</button><button onClick={(e)=>editField(gad.id)}>🔢</button></div> )

    return (

        <div>
                {gadget}
                <div> 
                    
                    { showEdit ? <form>
                        <input onChange={(e) => handleQuantity(e)} type="number" placeholder="update quantity" name="quantity"></input>
                        <input onClick={updateGadget} type="submit" value="Update"></input>
                    </form> : null}
                    
                </div>
        </div>

    )
}

export default GadgetCard