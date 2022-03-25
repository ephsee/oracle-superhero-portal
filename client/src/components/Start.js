// import {useEffect, useState} from 'react'

function Start ({heros}) {

    const showHeros = heros.map( h => <div key={h.id}><img src={h.image} alt="look at me"/><h3>{h.name}</h3></div> )

    return (

        <div>        
            
                {showHeros}
            
        </div>
    )
}

export default Start