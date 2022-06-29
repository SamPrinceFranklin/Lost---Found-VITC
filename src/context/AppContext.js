import React, { createContext, useState } from 'react'



export const AppContext = createContext();
export const AppProvider = ({children}) =>{

    const [loggedinstatus,setloggedinstatus] = useState(false);
    const [lostdata,setlostdata] = useState([]);
    const [founddata,setfounddata] = useState([]);
    const [userdata,setuserdata] = useState([]);

    const login = () =>{
        console.log("Login");
        setloggedinstatus(true)
    }

    const signup = () =>{
        console.log("Signing up");
    }
    const getLostData = () =>{
       setlostdata("Lost");

    }
    const getFoundData = () =>{
        setfounddata("Found");
        
     }
     
     return(
        <AppContext.Provider value={{login,signup,userdata,lostdata,founddata,loggedinstatus}}> {children} </AppContext.Provider>
     )

     

}
