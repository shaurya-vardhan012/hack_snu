import React from 'react'
import { useState } from 'react'
import "./Con_reg.css"

const Con_reg = () => {

    const handlesubmit = ()=>{
        console.log("a");
       console.log(name);
    }

    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [pass,setPass] = useState("");
    const [cpass,setCpass] = useState("");


  return (
    <div id='con_reg_detail'>
      <input className='Creg' type="text" placeholder='enter a consumer id' onChange={(e)=>{setId(e.target.value)}}/>
      <br />
      <input type="text" className='Creg' placeholder='enter consumer name' onChange={(e)=>{setName(e.target.value)}}/>
      <br />
      <input className='Creg' type="password" placeholder='create password' onChange={(e)=>{setPass(e.target.value)}}/>
      <br />
      <input className='Creg' type="password" placeholder='confirm password' onChange={(e)=>{setCpass(e.target.value)}}/>
      <br />
      <button onClick={handlesubmit}>Register</button>
    </div>
  )
}

export default Con_reg
