import React from 'react'
import { useState } from 'react'
import "./Dis_reg.css";
import { Link } from 'react-router-dom';

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
      <input className='Dreg' type="text" placeholder='Enter a distributor id' value={id} onChange={(e)=>{setId(e.target.value)}}/>
      <br />
      <input type="text" className='Dreg' placeholder='Enter Distributor name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <br />
      <input className='Dreg' type="password" placeholder='Create password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
      <br />
      <input className='Dreg' type="password" placeholder='Confirm password' value={cpass} onChange={(e)=>{setCpass(e.target.value)}}/>
      <br />
      <button onClick={handlesubmit}>Register</button>
      <div style={{marginTop:"50px",display:"flex"}} className="manu_login">
        <h5>Already have a account ?</h5>
        <Link to='/distributer_login'>Login</Link>
      </div>
    </div>
  )
}

export default Dis_reg
