import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from "react-router-dom";
export const Dashboard = () => {
    const {loggedinstatus} = useContext(AppContext)
    let navigate = useNavigate();
    useEffect(()=>{
      console.log(loggedinstatus)
        if (!loggedinstatus){
            navigate("/login")
        }
    },[])
  return (
    <div>Dashboard</div>
  )
}
