import React from 'react'
import {useLocation, Navigate} from "react-router-dom"

function NotFound() {
    const location = useLocation()
    let identification = location.pathname
    console.log(identification)
    return (
        <div>
            Not Found
        </div>
    )
}

export default NotFound
