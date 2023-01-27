import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
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
      <input className='Mreg' type="text" placeholder='Enter a manufacturer id' value={id} onChange={(e)=>{setId(e.target.value)}}/>
      <br />
      <input type="text" className='Mreg' placeholder='Enter manufacturer name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <br />
      <input className='Mreg' type="password" placeholder='Create password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
      <br />
      <input className='Mreg' type="password" placeholder='Confirm password' value={cpass } onChange={(e)=>{setCpass(e.target.value)}}/>
      <br />
      <button onClick={handlesubmit}>Register</button>
      <div style={{marginTop:"50px",display:"flex"}} className="manu_login">
        <h5>Already have a account ?</h5>
        <Link to='/manufacture_login'>Login</Link>
      </div>
    </div>
    
  )
}

export default Manu_Reg
