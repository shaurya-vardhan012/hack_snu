import React from 'react'
import { useState } from 'react'
import "./Con_reg.css";
import { Link } from 'react-router-dom';

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
      <input className='Creg' type="text" placeholder='Enter a consumer id' value={id} onChange={(e)=>{setId(e.target.value)}}/>
      <br />
      <input type="text" className='Creg' placeholder='Enter consumer name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <br />
      <input className='Creg' type="password" placeholder='Create password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
      <br />
      <input className='Creg' type="password" placeholder='Confirm password' value={cpass} onChange={(e)=>{setCpass(e.target.value)}}/>
      <br />
      <button onClick={handlesubmit}>Register</button>
      <div style={{marginTop:"50px",display:"flex"}} className="manu_login">
        <h5>Already have a account ?</h5>
        <Link to='/customer_login'>Login</Link>
      </div>
    </div>
  )
}

export default Con_reg
