import React from 'react'
import { useState } from 'react'
import "./Manu_Reg.css"

const Manu_Reg = () => {

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
      <input type="text" className='Mreg' placeholder='enter manufacturer name' onChange={(e)=>{setName(e.target.value)}}/>
      <br />
      <input className='Mreg' type="password" placeholder='create password' onChange={(e)=>{setPass(e.target.value)}}/>
      <br />
      <input className='Mreg' type="password" placeholder='confirm password' onChange={(e)=>{setCpass(e.target.value)}}/>
      <br />
      <button onClick={handlesubmit}>Register</button>
    </div>
  )
}

export default Manu_Reg
