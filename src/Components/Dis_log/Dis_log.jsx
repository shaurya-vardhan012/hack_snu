import React from 'react'
import { useState } from 'react'
import "./Dis_log.css"

const Dis_log = () => {

    const handlesubmit = ()=>{
        console.log("a");
       console.log(name);
    }

    const [id,setId] = useState("");
    const [pass,setPass] = useState("");


  return (
    <div id='dis_reg_detail'>
      <input className='Dreg' type="text" placeholder='Enter distributor id' value={id} onChange={(e)=>{setId(e.target.value)}}/>
      <br />
      <input className='Dreg' type="password" placeholder='Enter password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
      <br />
      <button onClick={handlesubmit}>Register</button>
      
    </div>
  )
}

export default Dis_log
