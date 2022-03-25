import {useEffect, useState} from 'react'

export default function ShowStuff() {

    const [heros, setHeros] = useState([])


    useEffect( () => {
    fetch("/heros")
    .then(r => r.json())
    .then(setHeros)

    }, [] )

    const showHeros = heros.map( h => <h3 key={h.id}>{h.name}</h3> )

    return (
        <div>
            {showHeros}
        </div>
    )
    
}