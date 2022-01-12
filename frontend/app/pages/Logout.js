import React from 'react'
import {Navigate} from "react-router-dom"


function Logout() {
    localStorage.removeItem("writetoken")
    return (
        <Navigate to="/login"/>
    )
}

export default Logout
