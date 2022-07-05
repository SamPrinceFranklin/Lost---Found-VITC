import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { LoginWarning } from '../Main/LoginWarning'
import { LostData } from './LostData'
import { testdata } from './testdata'
export const Lost = () => {
const {loggedinstatus} = useContext(AppContext)
  return (
    <>
    
    {loggedinstatus && (<div>
      <button>Add A LOST DATA</button>
      <div className='flex flex-col p-1 m-1'>
        {testdata.map((item,k)=>{
          return(
            <div key = {k}>

            <LostData itemName = {item.itemName} userEmail = {item.userEmail} contact = {item.contact} tag = {item.tag} imgUrl = {item.imgUrl} at = {item.at}/>
          </div>
          )
        

        })}
        
      </div>


    </div>)}
    {!loggedinstatus && <div>
      <LoginWarning/>
    </div> }
    
    </>

  
  )
}
