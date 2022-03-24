import {useEffect} from 'react'

export default function ShowStuff() {


    useEffect(()=>{

        
    fetch("/heros")
    .then(r => r.json())
    .then(console.log)

    },[])

    return (
        <div></div>
    )

    
}