import {useState} from 'react'

function GadgetForm({hero, gadgets, handleGadgets}) {

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
            .then(r => r.json())
            .then(handleGadgets(gadget, ...gadgets))
            alert('new item created')
    }

    return (
      <div> 
            <form>
                <p>Image of Gadget</p>
                <input onChange={handleImage} type="text" name="Gadget Image" placeholder="Enter URL for image here"/>
                <p>Gadget Name</p>
                <p><input onChange={handleItem} type="text" name="Gadget Name" placeholder="Enter Gadget Name"/></p>
                <p>Gadget Quantity</p>
                <p><input onChange={handleQuantity} type="number" name="Gadget Quantity" placeholder="Enter Gadget Quantity"/></p>
                <input onClick={newGadget} type="submit" value="Submit"></input>
            </form>
      </div>
      
    );
  }
  
  export default GadgetForm