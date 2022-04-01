import {useState} from 'react'

//   const initialState = {
//     id: "",
//     name: "",
//     alter_ego: "",
//     image: "",
//     most_wanted: "",
//     at_large: "",
//     hero_id: "",
//     location_id: "",
//     notes: ""
// }

function VillainForm({hero, villains, handleVillains, setHero, setShowForm, setAVil}) {

    // const [formState, setFormState] = useState(initialState)

    const [name, setName] = useState("")
    const [alterEgo, setAlterEgo] = useState("")
    const [image, setImage] = useState("")
    const [threat, setThreat] = useState("")
    const [atLarge, setAtLarge] = useState("")
    const [notes, setNotes] = useState("")
    const [id, setId] = useState("")

    // console.log(hero.locations)

    // const theSpot = hero.locations.map( l => l.id)
    // console.log(theSpot[0])

    // console.log(villains)

    function handleName(e){
        setName(e.target.value)
        // console.log(name)
    }
    function handleAlterEgo(e){
        setAlterEgo(e.target.value)
        // console.log(alterEgo)
    }
    function handleImage(e){
        setImage(e.target.value)
        // console.log(image)
    }
    function handleAtLarge(e){
        setAtLarge(e.target.value)
        // console.log(atLarge)
    }
    // function handleALTrue(){
    //     setAtLarge(true)
    //     console.log(atLarge)
    // }
    // function handleALFalse(){
    //     setAtLarge(false)
    //     console.log(atLarge)
    // }
    
    function handleThreat(e){
        setThreat(e.target.value)
        // console.log(threat)
    }
    function handleNotes(e){
        setNotes(e.target.value)
        // console.log(notes)
    }
    function handleId(e){
        setId(e.target.value)
        // console.log(id)
    }

    function resetVillains(){
        
        fetch('/villains')
        .then(r=>r.json())
        .then(handleVillains)

    }

    function updateVillain(e) {
        e.preventDefault()

        const update = {
            id: id,
            name: name,
            alter_ego: alterEgo,
            image: image,
            most_wanted: threat,
            at_large: atLarge,
            hero_id: hero.id,
            location_id: hero.id,
            notes: notes
        }

        fetch(`/villains/${id}`,{
                method:'PATCH',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(update)
            })
            .then(r => {
                if (r.ok){
                    r.json().then(resetVillains)
                    alert(`${update.name} DETAILS UPDATED`)
                } else {
                    r.json().then(alert("INVALID UPDATE"))
                }
                setShowForm(false)
                setAVil("")
            })
        }

    return (
      <div> 
        <h3>Modify Villain Information: </h3>
        <div>
            <form>
                <p>Villain ID</p>
                <input className="formBTNfont" onChange={handleId}type="number" name="Villain ID" placeholder="Enter Villain ID"/>
                <p>Image of Villain</p>
                <input className="formBTNfont" onChange={handleImage}type="text" name="Villain Image" placeholder="Enter url for image here"/>
                <p>Villain's Name</p>
                <input className="formBTNfont" onChange={handleName} type="text" name="Villain Name" placeholder="Enter Villain Name"/>
                <p>Villain's Alter Ego</p>
                <input className="formBTNfont" onChange={handleAlterEgo} type="text" name="Villain Alter-Ego" placeholder="Enter Villain's AlterEgo"/>
                <p>Threat Level</p>
                <input className="formBTNfont" onChange={handleThreat} type="number" name="Threat Level" placeholder="Enter Threat Level"/>
 
                    <p>Currently At Large?</p>
                    <label>
                        <input
                            type="radio"
                            value= 'false'
                            onChange={handleAtLarge}
                            checked={atLarge === 'false'}
                        />
                        True
                    </label>
                    <label>
                        <input
                            type="radio"
                            onChange={handleAtLarge}
                            value='true'
                            checked={atLarge === 'true'}
                        />
                        False
                    </label>

                <p>Notes:</p>
                <textarea className="formBTNfont" onChange={handleNotes} type="text" name="notes" placeholder="Enter Notes"/>
                <input className="formBTNfont buttons" onClick={updateVillain} type="submit" value="Submit"></input>
            </form>
        </div>
      </div>
      
    );
  };
  
  export default VillainForm;