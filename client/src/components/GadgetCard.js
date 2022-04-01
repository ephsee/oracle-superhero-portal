import {useState} from 'react'

function GadgetCard({hero, gadgets, deleteGadget, handleGadgets}) {

    const [showEdit, setShowEdit] = useState(false)

    const [quantity, setQuantity] = useState("")
    const [itemId, setItemId] = useState("")
    const [heroId, setHeroId] = useState("")
    const [itemName, setItemName] = useState("")

    function handleQuantity(e){
        setQuantity(parseInt(e.target.value))
    }

    function editField(e){
        setShowEdit(true)
        setItemId(e.id)
        setHeroId(hero.id)
        setItemName(e.item_name)
    }

    function resetGadgets(){
        
        fetch('/gadgets')
        .then(r=>r.json())
        .then(handleGadgets)

    }

      function updateGadget(e) {
          e.preventDefault()
          
          const update = {
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
                alert(`${itemName} DETAILS UPDATED`)
                setShowEdit(false)
        }

    const gadget = gadgets.filter( g => g.hero_id === hero.id).map( gad => <div key={gad.id} ><img src={gad.image} alt={gad.item_name} width="200px" border="3px solid black"/><p>{gad.item_name} ~ {gad.quantity}</p> <button onClick={(e) => deleteGadget(gad.id)}>❌</button><button onClick={(e)=>editField(gad)}>🔢</button></div> )

    return (

        <div className="vil-det hero-info-background">
            <div className="gadgets ally-flash">
                {gadget}
            </div>
                <div> 
                    
                    { showEdit ? <form>
                        <p>{`Update ${itemName}`}</p>
                        <input onChange={(e) => handleQuantity(e)} type="number" placeholder="update quantity" name="quantity"></input>
                        <input onClick={updateGadget} type="submit" value="Accept"></input>
                    </form> : null}
                    
                </div>
        </div>

    )
}

export default GadgetCard