function GadgetForm() {

    // when creating set hero_id to current authorized hero.id

    return (
      <div> 
        <h3>Add New Gadget</h3>
        <div>
            <form>
                <p>Image of Gadget</p>
                <input type="text" name="Gadget Image" placeholder="Enter URL for image here"/>
                <p>Gadget Name</p>
                <p><input type="text" name="Gadget Name" placeholder="Enter Gadget Name"/></p>
                <p>Gadget Quantity</p>
                <p><input type="text" name="Gadget Quantity" placeholder="Enter Gadget Quantity"/></p>
            </form>
        </div>
      </div>
      
    );
  }
  
  export default GadgetForm;