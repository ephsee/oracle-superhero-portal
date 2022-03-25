function Logout () {

    function signout () {

        fetch('/logout',{
            method: 'DELETE'})
        .then(r => r.json())
        .then(console.log)
        
    }

    

    return (

        <div>
            <button onClick={signout}>Sign Out</button>
        </div>
    )
}

export default Logout