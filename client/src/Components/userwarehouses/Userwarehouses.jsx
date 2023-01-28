import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { useContext } from 'react';
import loginContext from '../../context/usecontext';



const Userwarehouses = () => {

     const {user} = useContext(loginContext);
     const [warehouses,setWarehouses] = useState([]);
    useEffect(()=>{
        const fetch = async()=>{
            const res = await axios.post("http://localhost:5000/ware_detail/all",{
                manu_id: user
            })
            setWarehouses(res.data);
        }
        fetch();
    });

    function createCard(data,index){
        return(
       <Card
       location = {data.location}
       />)
    }

  return (
    <div>
       {warehouses.map(createCard)}
    </div>
  )
}

export default Userwarehouses
