import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export const Header = () => {
  const {signInWithGoogle,loginerror,loggedinstatus} = useContext(AppContext)
  
 
  return (
   
    <div className='flex flex-row justify-between'>
      <div className='text-black font-bold text-3xl m-5'>
        LOGO
      </div>
      <div>
{!loggedinstatus &&
      <button  className='bg-black p-2 rounded-md text-white text-semibold' onClick={signInWithGoogle}>Sign in with google</button>}
      {loggedinstatus && <button className='bg-black p-2 rounded-md text-white text-semibold' >Logout</button>  }
      </div>

     
    </div>
  )
}
