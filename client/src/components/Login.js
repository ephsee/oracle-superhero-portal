import {useEffect, useState} from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Hero from './Hero'

function Login() {

  // const history = useHistory()

  // function heroPage(){
  //     history.push('/authorized_user')
  // }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(username);
  console.log(password);

  // function signin(e) {
  //   e.preventDefault();

  //   fetch("/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: username,
  //       password: password
  //     })
  //   }
  //   .then(r => r.json())
  //   .then(console.log)
  //   )
  //   // heroPage()
  // }

  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
 
  const [error, setError] = useState([])
  let history = useHistory();

  function signin(e){
      e.preventDefault()
      const user = {
          username: username,
          password
      }
     
      fetch(`/login`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res => {
        if(res.ok){
          res.json()
          .then(user=>{
            // setUser(user)
            // setIsAuthenticated(true)
          })
          
        } else {
          res.json()
          .then(json => setError(json.error))
        }
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