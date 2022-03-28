import {useState} from 'react'

function GadgetForm({hero}) {

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

    // when creating set hero_id to current authorized hero.id
    // console.log("from gadgets form: ", hero.id)

    function newGadget() {
     
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
            .then(console.log)
    }

    return (
      <div> 
        <h3>Add New Gadget</h3>
        <div>
            <form>
                <p>Image of Gadget</p>
                <input onChange={(e) => handleImage(e)} type="text" name="Gadget Image" placeholder="Enter URL for image here"/>
                <p>Gadget Name</p>
                <p><input onChange={(e) => handleItem(e)} type="text" name="Gadget Name" placeholder="Enter Gadget Name"/></p>
                <p>Gadget Quantity</p>
                <p><input onChange={(e) => handleQuantity(e)} type="number" name="Gadget Quantity" placeholder="Enter Gadget Quantity"/></p>
                <input onSubmit={newGadget} type="submit" value="Submit"></input>
            </form>
        </div>
      </div>
      
    );
  }
  
  export default GadgetForm