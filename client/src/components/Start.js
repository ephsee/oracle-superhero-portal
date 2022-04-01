import {NavLink} from 'react-router-dom'
import {useState} from 'react'

function Start ({hero, login}) {

    function Login() {

        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
      
        // const [isAuthenticated, setIsAuthenticated] = useState(false);
        const [user, setUser] = useState("")
      
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
            .then( r => {
              if (r.ok){
                r.json().then(login)
                alert("AUTHORIZATION COMPLETE")
              }else {
                r.json().then(alert("NOT AUTHORIZED"))
              }
            })
            console.log(login)
            setUser(true)
        }
      
        // redirect to authorized_hero
        // if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;
      
          return (
            <div className="middle">
            <div className="start">
              <div className="start">Login for Access to Top Secret Data:</div><br></br>
                <div>
                  <form>
                  <input className="start" type="username"
                    id="username"
                    value={username}
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input className="start" type="password"
                    id="password"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input className="start" onClick={signin} type="submit" value="Submit"></input>
                  </form>
                </div>
                <br></br>
              <div className="link">
                  {!user ? <NavLink
                      to="/authorized_hero">
                      <h1>ENTER</h1>
                  </NavLink> : "AUTHORIZING"}
              </div>
      
            </div>
            </div>
          );
        }

    return (

        <div>
              <div className="start big">
                <h1>ORACLE TECHNOLOGIES</h1>
              </div>
            <Login />
        </div>
    )
}

export default Start