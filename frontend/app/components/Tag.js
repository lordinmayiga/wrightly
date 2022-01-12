import React, {useState} from 'react'
import FlexRow from "./containers/FlexRow"

function Tag({info, removeTag}) {
    const [checked, setChecked] = useState(info.checked)
    return (
        <div style={{display: 'flex', padding: "10px", borderRadius: "5px", border: "1px solid #879e48ff", alignItems: "center", margin: "10px"}}>
            {/* <input type="checkbox" checked={checked} onChange={(e)=>{setChecked(e.target.checked); info={...info, checked}}} value={info.value}/> */}
            {/* <div className="todoitem-checkbox" onClick={(e)=>{setChecked(!checked); info={...info, checked}}} style={{width: "24px", height: "24px", backgroundColor: checked?"#a9cc8aff": "white", border: "1px solid #a9cc8aff", borderRadius: "50%"}}/> */}


            <div style={{marginLeft: "10px", color: "#879e48ff"}}>{info.value}</div>
            <button style={{fontSize: "20px", border: "none", background: "transparent", color: "red", marginLeft: "10px"}} onClick={(e)=>removeTag(info.value)}>X</button>
        </div>
    )
}

export default Tag

