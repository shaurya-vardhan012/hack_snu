import React from 'react'
import { useState } from 'react'
import "./Manu_log.css"

const Manu_log = () => {

    const handlesubmit = ()=>{
      //  console.log(name);
    }

    const [id,setId] = useState("");
    const [pass,setPass] = useState("");


  return (
    <div id='manu_reg_detail'>
      <input className='Mreg' type="text" placeholder='Enter a manufacturer id' value={id} onChange={(e)=>{setId(e.target.value)}}/>
      <br />
      <input className='Mreg' type="password" placeholder='Enter password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
      <br />
      <button onClick={handlesubmit}>Login</button>
    </div>
  )
}

export default Manu_log
