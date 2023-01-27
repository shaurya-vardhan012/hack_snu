import React from 'react'
import { useState } from 'react'
import "./Dis_log.css"

const Dis_log = () => {

    const handlesubmit = ()=>{
        console.log("a");
       console.log(name);
    }

    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [pass,setPass] = useState("");
    const [cpass,setCpass] = useState("");


  return (
    <div id='dis_reg_detail'>
      <input className='Dreg' type="text" placeholder='enter distributor id' onChange={(e)=>{setId(e.target.value)}}/>
      <br />
      <input className='Dreg' type="password" placeholder='enter password' onChange={(e)=>{setPass(e.target.value)}}/>
      <br />
      <button onClick={handlesubmit}>Register</button>
      
    </div>
  )
}

export default Dis_log
