function VillainDetails({aVil, hero}) {

    // const whereIs = Object.values(aVil)
    console.log("villain: ", aVil)

    return(
        <div>
            <hr></hr>

            <div>Name: {aVil.name}</div>
            <div>Notes: {aVil.notes}</div>
            <div>ID: {aVil.id}</div>
            
            {/* {whereIs} */}
            <hr></hr>
        </div>
    )
}

export default VillainDetails