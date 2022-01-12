import React from 'react'
import {useLocation} from 'react-router-dom'

function ImageConvert() {
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <h1>Test</h1>
        </div>
    )
}

export default ImageConvert
