import React from 'react'

function Input({info}) {
    return (
        <div style={{margin: "10px"}} className='input-outer'>
            <div style={{marginBottom: "15px"}}>{info.label}</div>
            {info.error?<div style={{color: "rgba(255, 30, 30, 1)"}}>{info.error}</div>: ""}
            <input placeholder={info.placeholder} type={info.type?info.type: "text"} value={info.value?info.value: ""} style={{padding: "10px", width: "100%", ...info.style, borderRadius: "10px", border: "1px solid rgba(0, 0, 0, 0)"}} onChange={(e)=>info.setValue?info.setValue(e.target.value): ""}/>
        </div>
    )
}

export default Input
