import React, { useContext, useState } from 'react'
import Loader from '../loader/Loader'
import { useNavigate } from "react-router-dom";

import { AppContext } from '../../context/AppContext';

export const Signup = () => {
    let navigate = useNavigate();
    const [loading,setloading] = useState(false);
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [pwd,setpwd] = useState("")
    const [error,seterror] = useState("")
    const [nameerror,setnamerror] = useState(false)
    const [mailerror,setmailerror] = useState(false)
    const [pwderror,setpwderror] = useState(false)
    const {signup} = useContext(AppContext)
    const validated = (name && email && pwd && (email.trim().endsWith("vitstudent.ac.in") || email.endsWith("vit.ac.in")))
    const validatename=()=>{
        name.length ? setnamerror(false) :setnamerror(true)
    }
    const validatemail =()=>{ 
     
     
        (email.trim().endsWith("vitstudent.ac.in") || email.trim().endsWith("vit.ac.in")) ?setmailerror(false) :setmailerror(true)
    }
    const validatepwd = () =>{
        pwd.length? setpwderror(false) :setpwderror(true)
    }


    const submit = () =>{
        setloading(true)
        
        

      seterror("");
        try {
            signup()
        } catch (error) {
            seterror("There was a error. Try after some time.");
            console.log(error);
            return ""
        }

      setloading(false);
      navigate('/dashboard');
      return ""
        
    }


  return (
    <div style={{'var(--image-url)': '../../assets/loginbg.jpg'}} 
    className=' m-10  rounded-full bg-'>  
       

        <br/><br/>
        <div className='flex justify-center text-4xl text-black font-bold  '>Sign Up </div>
      
      {error &&  <div className='bg-red-700 text-white font-semibold flex flex-row p-1 text-xl justify-center'> {error} </div> }

        <div className='m-10 ' >
       <div className='text-2xl font-semibold text-black'>Name</div>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        value={name}
                        onBlur={validatename}
                        onChange = {(e)=>setname(e.target.value)}
                        autoComplete="given-name"
                        className={nameerror?"border-2 mt-1 p-3  block w-full border-red shadow-sm border-rose-500" : "mt-1 p-3  block w-full border-red shadow-sm border-gray-300 rounded-md " } />
                   {nameerror&&   <div className='text-red-600' >Enter a name</div>}
                      </div>
      
       <div className='m-10 ' >
       <div className='text-2xl font-semibold text-black'>Email</div>
                      <input
                        type="text"
                        name="first-name"
                        value={email}
                        onBlur={validatemail}
                        onChange = {(e)=>setemail(e.target.value)}
                        id="first-name"
                        autoComplete="given-name"
                         className={mailerror ?"border-2 mt-1 p-3  block w-full border-red shadow-sm border-rose-500" : "mt-1 p-3  block w-full border-red shadow-sm border-gray-300 rounded-md " } 
                      />
                             {mailerror&&   <div className='text-red-600' >Enter VIT mail id only</div>}
                      </div>
     <div className='m-10 ' >
                        <div className='text-2xl font-semibold text-black'>Password</div>
                      <input
                        type="password"
                        name="first-name"
                        value={pwd}
                        onBlur={validatepwd}
                        onChange = {(e)=>setpwd(e.target.value)}
                        id="first-name"
                        autoComplete="given-name"
  className={pwderror?"border-2 mt-1 p-3  block w-full border-red shadow-sm border-rose-500" : "mt-1 p-3  block w-full border-red shadow-sm border-gray-300 rounded-md " } 
                      />
                        {pwderror&&   <div className='text-red-600' >Enter the password</div>}
                      </div>   

             {   !loading && validated &&    <button className='bg-black text-white text-3xl p-4 rounded-full ' onClick={submit} >SIGN UP</button> }
             {loading && <Loader/> }
             {!validated && !loading &&  <button className='bg-gray-600 text-gray-300 text-3xl p-4 rounded-full cursor-not-allowed' >SIGN UP</button>  }
         <br/><br/>

    </div>
  )
}

