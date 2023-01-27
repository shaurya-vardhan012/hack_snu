import React,{useContext} from 'react'
import { useState } from 'react';
import loginContext from '../../context/usecontext'

const Warehouse = () => {

    const {user} = useContext(loginContext);
    const [id,setId] = useState("");
    const [location,setLocation] = useState("");
    const [capacity,setCapacity] = useState("");

    const handlesubmit = ()=>{
        
    }
  return (
    <div>
      <input type="text" placeholder='enter a Warehouse id'/>
      <input type="text" placeholder='enter the location of warehouse'/>
      <input type="text" placeholder='enter the capacity of the warehouse'/>
      <button onClick={handlesubmit}></button>
    </div>
  )
}

export default Warehouse
