function GadgetForm() {
    return (
      <div> 
        <h3>Add New Gadget</h3>
        <div>
            <form>
                <p>Image of Gadget</p>
                <input type="text" name="Villain Image" placeholder="enter url for image here"/>
                <p>Gadget Name</p>
                <p><input type="text" name="Villain Name" placeholder="Enter Villain Name"/></p>
                <p>Gadget Quantity</p>
                <p><input type="text" name="Villain Alter-Ego" placeholder="Enter Villain's AlterEgo"/></p>
            </form>
        </div>
      </div>
      
    );
  }
  
  export default GadgetForm;