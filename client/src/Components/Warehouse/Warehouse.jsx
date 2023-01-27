import axios from 'axios';
import React,{useContext} from 'react'
import { useState } from 'react';
import loginContext from '../../context/usecontext'

const Warehouse = () => {

    const {user} = useContext(loginContext);
    const [id,setId] = useState("");
    const [location,setLocation] = useState("");
    const [capacity,setCapacity] = useState("");

    const handlesubmit = async()=>{
        try{
            const res = await axios.post("http://localhost:5000/ware_detail/details",{
                ware_id: id,
                location: location,
                capacity: capacity,
                manu_id: user
            })
        }catch(error){
            console.log(error);
        }
        
    }
  return (
    <div>
      <input type="text" placeholder='enter a Warehouse id' onChange={(e)=>{setId(e.target.value)}}/>
      <input type="text" placeholder='enter the location of warehouse' onChange={(e)=>{setLocation(e.target.value)}}/>
      <input type="text" placeholder='enter the capacity of the warehouse' onChange={(e)=>{setCapacity(e.target.value)}}/>
      <button onClick={handlesubmit}></button>
    </div>
  )
}

export default Warehouse
