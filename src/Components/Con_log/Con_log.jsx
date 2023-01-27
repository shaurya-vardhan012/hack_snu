import React from 'react'
import { useState } from 'react'
import "./Con_log.css"

const Con_log = () => {

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
      <input className='Creg' type="text" placeholder='Enter consumer id' onChange={(e)=>{setId(e.target.value)}}/>
      <br />
      <input className='Creg' type="password" placeholder='Enter password' onChange={(e)=>{setPass(e.target.value)}}/>
      <br />
      <button onClick={handlesubmit}>Register</button>
    </div>
  )
}

export default Con_log
