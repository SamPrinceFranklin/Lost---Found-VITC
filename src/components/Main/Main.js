import React from 'react'
import { Dashboard } from '../Dasboard/Dashboard'
import { Routes, Route} from "react-router-dom";
import { Login } from '../Authentication/Login';
import { Signup } from '../Authentication/Signup';
import { Lost } from '../Lost/Lost';
import { Founds } from '../Found/Founds';
import { Landing } from '../Landing/Landing';

export const Main = () => {
  return (
    <Routes>
        <Route path = "/" element = {<Dashboard/>}/>
<Route path="/home" element={<Dashboard />} />
<Route path="/explore" element={<Landing />} />
<Route path="/login" element={<Login />} />
<Route path = "/signup" element = { <Signup/> }/>
<Route path="/lost" element={<Lost />} />
<Route path="/found" element={<Founds />} />
    </Routes>
    
  )
}
