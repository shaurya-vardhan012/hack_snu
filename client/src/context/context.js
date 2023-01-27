import React ,{useReducer,useEffect} from 'react';
import reducer from './reducer';

import loginContext from './usecontext';
const initial_state = {
  user: JSON.parse(localStorage.getItem("user"))||null
}

const Context = (props) => {
  const [state,dispatch] = useReducer(reducer,initial_state);
  
  useEffect(()=>{
     localStorage.setItem("user",JSON.stringify(state.user))
  },[state.user]);
  return (
    <loginContext.Provider value={{
         user: state.user,
         dispatch,
    }}>
      {props.children}
    </loginContext.Provider>
  )
}

export default Context;
