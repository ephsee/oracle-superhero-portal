function VillainDetails({aVil, hero}) {

    // const whereIs = Object.values(aVil)
    console.log("villain: ", aVil)

    return(
        <div className="vil-det">
            <hr></hr>

            <div className='vil-info'>Name: {aVil.name}</div>
            <div className='vil-info'>Notes: {aVil.notes}</div>
            <div className='vil-info'>ID: {aVil.id}</div>
            
            {/* {whereIs} */}
            <hr></hr>
        </div>
    )
}

export default VillainDetails