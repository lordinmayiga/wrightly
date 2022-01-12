import React from 'react'

function Button({info}) {
    const styles = {primary: {backgroundColor: "#879e48ff", color: "white", padding: "10px", margin: "10px", borderRadius: "5px", border: "1px solid #879e48ff", padding: "7px 15px 7px 15px"}, 
secondary: {border: "1px solid #879e48ff", color: "#879e48ff", padding: "7px 13px 7px 13px", margin: "10px", borderRadius: "5px"}}
    return (
        <button onClick={info.onClick} style={{...styles[info.btnType], fontSize: "16px"}}>
            {info.text}
        </button>
    )
}

export default Button
