import React from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"

const Navbar = (props) => {
  return (
    <div id={style.navbar}>
    <Link to="/">Home</Link>
    <Link to="/e">Employee List</Link>
     <p>{props.name}</p>
    <Link to="/">Log out</Link>
</div>
  )
}

export default Navbar