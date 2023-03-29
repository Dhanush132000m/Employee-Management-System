import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import style from"./home.module.css"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Login = (props) => {
  let [username,setUsername]=useState("")
  let [password,setPassword]=useState("")
  let [authenticate,setAuthenticate]=useState(false)

  let Nav=useNavigate()

  let nameData=(e)=>{
    setUsername(e.target.value)
    props.handleName(e.target.value)

    }
  
  let pswdData=(e)=>{
    setPassword(e.target.value)
}

  let loginhandle=()=>{
    axios.get("http://localhost:3000/users")
    .then((response)=>{
        const authenticatedUser = response.data.find(user=>user.username===username && user.password===password)
        if(authenticatedUser){
            setAuthenticate(true)
            alert("login successful")
            console.log(username)
            Nav("/d")
        }
        else
        {
            alert("incorrect user")
        }
    })
    .catch(()=>{
      console.log("unable to send");
    })

  }
  
  return (
    <div>
       <div id={style.nav}>
        login page
       </div>
<div id={style.login}>
       <div id={style.loginborder}>
        <tr>
            <td><label htmlFor="">User Name: </label></td>
            <td><input type="text" name="" id="" value={username} onChange={nameData} /></td>
        </tr>
        <tr>
            <td><label htmlFor="">Password: </label></td>
            <td><input type="password" value={password} onChange={pswdData} /></td>
        </tr>
        <tr>
            <td><button onClick={loginhandle}>Login</button></td>
        </tr>
        </div>
</div>
</div>
  )
}

export default Login