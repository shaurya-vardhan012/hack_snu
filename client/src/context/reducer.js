const reducer = (state,action)=>{
    switch(action.type){
     case "Login_Start" :
        return{
         user : null 
     };
     case "Login_Success" :
        return{
         user : action.payload 
     };
     case "Login_failure":
         return {
         user : null
     };
     default:
         return{
            state
         };
    }
 }
 
 export default reducer;
 
 