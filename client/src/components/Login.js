import {useState} from 'react'
// import { Switch, Route, useHistory } from 'react-router-dom'

function Login() {

  // const history = useHistory()

  // function heroPage(){
  //     history.push('/authorized_user')
  // }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  console.log(username)
  console.log(password)
 
  // const [error, setError] = useState([])

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
      .then(res => {
        if(res.ok){
          res.json()
          .then(hero=>{
            // setUser(user)
            // setIsAuthenticated(true)
          console.log(hero)})
          
        }
        // else {
        //   res.json()
        //   .then(json => setError(json.error))
        // }
      })
  }

    return (
      <div className="Initial">
        Welcome to Oracle
        <form>
        <input type="text"
          id="username"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="text"
          id="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input onClick={signin} type="submit" value="Submit"></input>
        </form>

      </div>
    );
  }
  
export default Login;