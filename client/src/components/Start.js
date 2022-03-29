import {NavLink} from 'react-router-dom'
import {useState} from 'react'

function Start ({hero, login}) {

    function Login() {

        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
      
        // const [isAuthenticated, setIsAuthenticated] = useState(false);
        // const [user, setUser] = useState(null);
      
        // console.log(username)
        // console.log(password)
       
        // const [error, setError] = useState(false)
      
        function signin(e){
            e.preventDefault()
            const hero = {
                username: username,
                password: password
            }
           
            fetch("/login",{
              method:'POST',
              headers:{'Content-Type': 'application/json'},
              body:JSON.stringify(hero)
            })
            .then( r => r.json())
            .then(login)
            
            alert("AUTHORIZATION COMPLETE")
        }
      
        // redirect to authorized_hero
        // if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;
      
          return (
            <div className="Initial">
              Login for Access to Top Secret Data
      
              <form>
              <input type="username"
                id="username"
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input type="password"
                id="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input onClick={signin} type="submit" value="Submit"></input>
              </form>
              <div>
                  <NavLink
                      to="/authorized_hero">
                      Enter
                  </NavLink>
              </div>
      
            </div>
          );
        }

    return (

        <div>
            <div><h1>ORACLE Technologies</h1></div>
            <Login />
        </div>
    )
}

export default Start