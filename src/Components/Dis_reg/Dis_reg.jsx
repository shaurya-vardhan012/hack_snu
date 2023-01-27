import React from 'react'
import { useState } from 'react'
import "./Dis_reg.css"

const Dis_reg = () => {

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
      <input className='Dreg' type="text" placeholder='enter a distributor id' onChange={(e)=>{setId(e.target.value)}}/>
      <br />
      <input type="text" className='Dreg' placeholder='enter Distributor name' onChange={(e)=>{setName(e.target.value)}}/>
      <br />
      <input className='Dreg' type="password" placeholder='create password' onChange={(e)=>{setPass(e.target.value)}}/>
      <br />
      <input className='Dreg' type="password" placeholder='confirm password' onChange={(e)=>{setCpass(e.target.value)}}/>
      <br />
      <button onClick={handlesubmit}>Register</button>
    </div>
  )
}

export default Dis_reg
