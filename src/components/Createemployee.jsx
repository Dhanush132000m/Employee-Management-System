import React, { useState } from 'react'
import Navbar from './Navbar'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Createemployee = () => {
    let [name,setName]=useState("")
    let nameData=(e)=>{setName(e.target.value)}

    let [email,setemail]=useState("")
    let [emailError,setEmailerror]=useState("")
    let[isevalid,setEisvalid]=useState(false)
    let emailData=(e)=>{
    const emailregex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const value = e.target.value;
    setemail(value)
    setEisvalid(emailregex.test(value))
    axios.get("http://localhost:3000/employees")
    .then((response)=>{
        const employees=response.data
        const exists = employees.some((employee)=>employee.email===value);
        if(exists){
            setEmailerror("Email already exists");
        }else{
            setEmailerror("")
        }
    })

}

    let [mobileno,setMobileno]=useState("")
    const[isvalid,setIsvalid]=useState(false)
    let mobilenoData=(e)=>{
        const mbnoregex=/^\d{10}$/;
        const value = e.target.value;
        setMobileno(value)
        setIsvalid(mbnoregex.test(value))
    }

    let [designation,setDesignation]=useState("")
    let desData=(e)=>{setDesignation(e.target.value)}

    let [gender,setGender]=useState(false)
    let genData=(e)=>{setGender(e.target.value)}

    let [course,setCourse]=useState("")
    let courseData=(e)=>{
        const{value,checked}=e.target;
        if(checked){
         setCourse(value)
        }
        else{
            setCourse("")
        }

    
    }

    let [image,setImage]=useState(null)
    let imgData=(e)=>{setImage(e.target.value)}

    let navigate= useNavigate()

    let formhandle =()=>{
        let load ={name,email ,mobileno,designation,gender,course,image}
        axios.post("http://localhost:3000/employees",load)
        .then(()=>{
            console.log("sent")
        })
        .catch(()=>{
            console.log("error");
        })
        navigate("/e")
        window.location.assign("/e")

    }

  return (
    <div>
        <Navbar></Navbar>
        <div id={style.nav}>
            Create Employee
        </div>
        <div>
            <tr>
                <td><label htmlFor="">Name</label></td>
                <td><input type="text" value={name} onChange={nameData} /></td>
            </tr>
            <tr>
                <td><label htmlFor="">Email</label></td>
                <td><input type="email" value={email} onChange={emailData}/>
                {isevalid ? <span style={{color:'green'}}>valid:{emailError}</span>:<span style={{color:'red'}}>invalid {emailError}</span>}</td>
            </tr>
            <tr>
                <td><label htmlFor="">Mobile No</label></td>
                <td><input type="tel" value={mobileno} onChange={mobilenoData} />
                {isvalid ? <span style={{color:'green'}}>valid</span>:<span style={{color:'red'}}>invalid number</span>}
                </td>
            </tr>
            <tr>
                <td><label htmlFor="">Designation</label></td>
                <select name="" id="" value={designation} onChange={desData}>
                    <option value="designation"></option>
                    <option value="HR">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales">Sales</option>
                </select>
            </tr>
            <tr>
                <td><label htmlFor="">gender</label></td>
                <td>
                <td><input type="radio" value="male" checked={gender==='male'} onChange={genData}/>male</td>
                <td><input type="radio" value="female" checked={gender==="female"} onChange={genData}/>female</td>
                </td>
            </tr>
            <tr>
                <td><label htmlFor="">Course</label></td> 
                 <td>
                <td><input type="checkbox" name="MCA" value="MCA" checked={course==='MCA'} onChange={courseData} /></td>
                <td>MCA</td> 
                <td><input type="checkbox" name="BCA" value="BCA" checked={course==='BCA'} onChange={courseData}/></td>
                <td>BCA</td> 
                <td><input type="checkbox" name="BSC"  value="BSC" checked={course==='BSC'} onChange={courseData}/></td>
                <td>BSC</td> 
                </td>
            </tr>
            <tr>
            <td><label htmlFor="">Img upload</label></td>
                <td><input type="file" onChange={imgData}/></td>
            </tr>
            <tr>
                <td><button onClick={formhandle}>Submit</button></td>
            </tr>
        </div>
    </div>
  )
}

export default Createemployee