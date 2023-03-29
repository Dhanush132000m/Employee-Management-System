import React from 'react'
import Navbar from './Navbar'
import style from "./home.module.css"

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div id={style.nav}>
        Dashboard
      </div>
      <div id={style.welcome}>
       <h1>welcome admin panel</h1>
      </div>
    </div>
  )
}

export default Dashboard