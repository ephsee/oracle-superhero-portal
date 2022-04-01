function VillainDetails({aVil, hero}) {

    // const whereIs = Object.values(aVil)
    console.log("villain: ", aVil)

    return(
        <div className="vil-det hero-info-background">
            

            <div className="info">Name: {aVil.name}</div>
            <div className="info">Notes: {aVil.notes}</div>
            <div className="info">ID: {aVil.id}</div>
            
            {/* {whereIs} */}
            
        </div>
    )
}

export default VillainDetails