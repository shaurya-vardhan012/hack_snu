import React from 'react'
import { useState } from 'react'
import "./Manu_log.css"

const Manu_log = () => {

    const handlesubmit = ()=>{
       console.log(name);
    }

    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [pass,setPass] = useState("");
    const [cpass,setCpass] = useState("");


  return (
    <div id='manu_reg_detail'>
      <input className='Mreg' type="text" placeholder='enter a manufacturer id' onChange={(e)=>{setId(e.target.value)}}/>
      <br />
      <input className='Mreg' type="password" placeholder='enter password' onChange={(e)=>{setPass(e.target.value)}}/>
      <br />
      <button onClick={handlesubmit}>Login</button>
    </div>
  )
}

export default Manu_log
