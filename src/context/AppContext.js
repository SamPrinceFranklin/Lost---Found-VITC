import React, { createContext, useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,

  signOut,
} from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";

export const AppContext = createContext();
export const AppProvider = ({children}) =>{

    const [loggedinstatus,setloggedinstatus] = useState(false);
    const [lostdata,setlostdata] = useState([]);
    const [founddata,setfounddata] = useState([]);
    const [userdata,setuserdata] = useState([]);
    const [loginerror,setloginerror] = useState(false)
    const config = {
        apiKey: "AIzaSyBKG1M55nwdRXyxzeKdj_Z3nicwBU_Y3PQ",
        authDomain: "laf-app-da157.firebaseapp.com",
        projectId: "laf-app-da157",
        storageBucket: "laf-app-da157.appspot.com",
        messagingSenderId: "18475991594",
        appId: "1:18475991594:web:8725c3e01c2de7cfc6b953",
        measurementId: "G-WZ954J3L0T"
      };
      const app = initializeApp(config);
      const auth = getAuth(app);
      const googleProvider = new GoogleAuthProvider();
      const [user,loading] = useAuthState(auth)
      const signInWithGoogle = async () => {
        try {
          const res = await signInWithPopup(auth, googleProvider);
          const user = res.user;
         if (user.email.includes("vitstudent.ac.in")||user.email.includes("vit.ac.in")  ){
            setloggedinstatus(true);
            setuserdata(user)
            console.log(userdata)
         }
         else{
            setloginerror(true)
            signOut(auth)
            
         }
       
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      };
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
     const signOut = async() =>{
      const res = await signOut(auth);
      setloggedinstatus(false)
     }
     useEffect(()=>{
        if (loading){
            return
        }
        if (user){
          if (user.email.includes("vitstudent.ac.in")||user.email.includes("vit.ac.in")  ){
            setloggedinstatus(true);
            setuserdata(user)
            console.log(userdata)
         }
         else{
          signOut(auth)
         }
        }
     },[user,loading])
     
     return(
        <AppContext.Provider value={{login,signup,userdata,lostdata,founddata,loggedinstatus,signInWithGoogle,loginerror}}> {children} </AppContext.Provider>
     )

     

}
