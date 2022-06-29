import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import Loader from '../loader/Loader';
import { useNavigate } from "react-router-dom";
export const Login = () => {
    const [email,setemail] = useState("")
    const [pwd,setpwd] = useState("")
    let navigate = useNavigate();
    const {login} = useContext(AppContext)
    const [error,seterror] = useState("");
    const [loading,setloading] = useState(false);
    const [mailerror,setmailerror] = useState(false)
    const [pwderror,setpwderror] = useState(false)
 
    const validated = ( email && pwd && (email.trim().endsWith("vitstudent.ac.in") || email.endsWith("vit.ac.in")))
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
            login()
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
    
    <div className=' m-10  rounded-full bg-'>  
       

    <br/><br/>
    <div className='flex justify-center text-4xl text-black font-bold  '>LOGIN </div>
  
  {error &&  <div className='bg-red-700 text-white font-semibold flex flex-row p-1 text-xl justify-center'> {error} </div> }


  
   <div className='m-10 ' >
   <div className='text-2xl font-semibold text-black'>Email</div>
                  <input
                    type="text"
                    name="first-name"
                    value={email}
                    onChange = {(e)=>setemail(e.target.value)}
                    id="first-name"
                    onBlur={validatemail}
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
                  {   !loading && validated &&    <button className='bg-black text-white text-3xl p-4 rounded-full ' onClick={submit} >LOGIN</button> }
             {loading && <Loader/> }
             {!validated && !loading &&  <button className='bg-gray-600 text-gray-300 text-3xl p-4 rounded-full cursor-not-allowed' >LOGIN</button>  }
     <br/><br/>

</div>
  )
}
