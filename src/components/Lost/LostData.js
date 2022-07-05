import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';

export const LostData = (props) => {
   
    const {userdata} = useContext(AppContext);
    const [expanded,setexpanded] = useState(false)
  return (
    <div className='bg-blue-200 mt-4'>
        <div className='flex flex-row justify-center m-3'>
            <div>
                <img src = {props.imgUrl} className='max-w-sm h-auto shadow-lg'/>
            </div>
            <div className='ml-4'>
                <div className='flex flex-col justify-evenly h-full'>
                    <div className='text-3xl font-bold '> {props.itemName}</div> 
                    <div className= 'text-xl font-semibold'>Posted by {props.userEmail === userdata.email ?'YOU' : props.userEmail }</div>
                    <div className= 'text-xl font-semibold'>Lost at {props.at} </div>
                    
                </div>
            </div>

        </div>
{  !expanded&&      <button  onClick={()=>setexpanded(true)} className='w-full bg-blue-700 text-white font-mono rounded-full'>KNOW MORE</button>}
{expanded &&  
<div className='flex flex-col'>
<div className='text-xl text-center font-mono  '> {props.tag}  </div>
<div className='text-xl text-center mt-3 '>Contact info :- {props.contact} </div>
{props.userEmail === userdata.email ?  <button className=' max-w-sm h-auto m-3 bg-red-700 p-2 text-white text-xl '>REMOVE</button> : <button className=' max-w-sm h-auto m-3 bg-black p-2 text-white text-xl '>REPORT FOUND</button> }
</div> }
{expanded &&  <button  onClick={()=>setexpanded(false)} className='w-full bg-blue-700 text-white font-mono rounded-full'> 🔼🔼🔼 </button> }
<br/><br/>
    </div>
  )
}
