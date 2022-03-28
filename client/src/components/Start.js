import {NavLink} from 'react-router-dom'

function Start () {

    return (

        <div>

            <div><h1>Welcome to ORACLE</h1></div>

            <div>
            <NavLink
                to="/login">
                Login
            </NavLink>
            </div>

        </div>
    )
}

export default Start