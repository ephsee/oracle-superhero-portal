function VillainForm() {
    return (
      <div> 
        <h3>Add New Villain</h3>
        <div>
            <form>
                <p>Image of Villain</p>
                <input type="text" name="Villain Image" placeholder="enter url for image here"/>
                <p>Villain's Name</p>
                <p><input type="text" name="Villain Name" placeholder="Enter Villain Name"/></p>
                <p>Villain's Alter Ego</p>
                <p><input type="text" name="Villain Alter-Ego" placeholder="Enter Villain's AlterEgo"/></p>
                <p>Threat Level</p>
                <input type="text" name="Threat Level" placeholder="Enter Threat Level"/>
                <div>
                    <p>Currently At Large?</p>
                    <input 
                        id="True"
                        name="True"
                        type="radio"
                        value="True"    
                    />
                    <label for="True">True</label>
                    <input 
                        id="False"
                        name="False"
                        type="radio"
                        value="False"    
                    />
                    <label for="False">False</label>
                </div>
                <p>Notes:</p>
                <textarea type="text" name="notes" placeholder="Enter Notes"/>
            </form>
        </div>
      </div>
      
    );
  }
  
  export default VillainForm;