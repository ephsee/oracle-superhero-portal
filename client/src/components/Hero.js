import {useEffect, useState} from 'react'

function Hero () {

    const [showHero, setShowHero] = useState([])

    console.log(showHero)

    useEffect(()=>{
        fetch('/authorized_hero')
        .then(r => r.json())
        .then(setShowHero)
    }, [])

    return (

        <div>
            Welcome {showHero.name}
        </div>

    )
}

export default Hero