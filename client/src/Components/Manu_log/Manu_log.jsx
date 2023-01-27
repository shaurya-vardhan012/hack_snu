import React from 'react'
import { useState ,useContext} from 'react'
import "./Manu_log.css"
import axios from "axios"
import loginContext from '../../context/usecontext'


const Manu_log = () => {

    const [id,setId] = useState("");
    const [pass,setPass] = useState("");
    const {user,dispatch} = useContext(loginContext);

    const handlesubmit = async (e)=>{ 
        console.log("clicked");
        e.preventDefault();
        dispatch({type: "Login_Start"});
        try{
            const res = await axios.post("http://localhost:5000/manu_auth/login",{
                manu_id: id,
                password: pass,
               });
               dispatch({type: "Login_Success",payload: id});
               console.log(user);
        }catch(error){
            console.log(error);
        }
    }
   
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
