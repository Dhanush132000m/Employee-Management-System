import React, { useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Createemployee from './components/Createemployee'
import Dashboard from './components/Dashboard'
import EditemployeeList from './components/EditemployeeList'
import EmployeeList from './components/EmployeeList'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'

const App = () => {
  const[name,setName]=useState("");

  const handleName=(username)=>{setName(username)}
  
  return (
    <div>
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route element={<Login handleName={handleName} />} path="/"/>
        <Route element={<Navbar name={name}/>} path="/u"/>
        <Route element={<Dashboard/>} path="/d"/>
        <Route element={<Home/>} path="/h"/>
        <Route element={<EmployeeList/>} path="/e"/>
        <Route element={<Createemployee/>} path="/cu"/>
        <Route element={<EditemployeeList/>} path="/eu/:index"/>
        <Route />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App