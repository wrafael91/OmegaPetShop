


import React from 'react'
import { Navigate } from 'react-router-dom'
import Home from '../pages/admin/home'

export default function PrivateRoute({children}) {
    const token = localStorage.getItem("token")
    if(token){
        return <Home />
    } else return (
        <Navigate to={"/login"}/>
    )
  
}
