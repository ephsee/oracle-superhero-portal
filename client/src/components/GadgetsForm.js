import {useState} from 'react'

function GadgetForm({hero, gadgets, handleGadgets, setShowForm}) {

  console.log(gadgets)

    const [itemName, setItemName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [image, setImage] = useState("")

    function handleItem(e){
      setItemName(e.target.value)
      console.log(itemName)
    }
    function handleQuantity(e){
      setQuantity(e.target.value)
      console.log(quantity)
    }
    function handleImage(e){
      setImage(e.target.value)
      console.log(image)
    }

    
    function resetGadgets(){
        
      fetch('/gadgets')
      .then(r=>r.json())
      .then(handleGadgets)
      
    }

    function newGadget(e) {

      e.preventDefault()
     
      const gadget = {
        item_name: itemName,
        quantity: quantity,
        image: image,
        hero_id: hero.id
      }

      fetch("/gadgets",{
              method:'POST',
              headers:{'Content-Type': 'application/json'},
              body:JSON.stringify(gadget)
            })
            .then(r => {
              if (r.ok){
                r.json().then(resetGadgets)
                alert(`${gadget.item_name} CREATED`)
              }else{
                r.json().then(alert("INVALID ITEM"))
              }
            })
            setShowForm(false)
            console.log(gadget)
    }

    return (
      <div>
        <h3>Create New Item: </h3>
            <form>
                <p>Image of Gadget</p>
                <input className="formBTNfont" onChange={handleImage} type="text" name="Gadget Image" placeholder="Enter img URL"/>
                <p>Gadget Name</p>
                <p><input className="formBTNfont" onChange={handleItem} type="text" name="Gadget Name" placeholder="Enter Gadget Name"/></p>
                <p>Gadget Quantity</p>
                <p><input className="formBTNfont" onChange={handleQuantity} type="number" name="Gadget Quantity" placeholder="Enter Quantity"/></p>
                <input className="formBTNfont buttons"  onClick={newGadget} type="submit" value="Submit"></input>
            </form>
      </div>
      
    );
  }
  
  export default GadgetForm