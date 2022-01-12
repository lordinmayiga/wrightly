import React from 'react'

function TagSkeleton() {
    return (
        <div className="hometags-outer" style={{display: "flex", alignItems: "top", flexWrap: "wrap"}}>
            <div className="sk" style={{width: "100px", height: "40px", borderRadius: "7px", margin: "10px"}}>
                
            </div>
            <div className="sk" style={{width: "100px", height: "40px", borderRadius: "7px", margin: "10px"}}>
                
            </div>
            <div className="sk" style={{width: "100px", height: "40px", borderRadius: "7px", margin: "10px"}}>
                
            </div>
            <div className="sk" style={{width: "100px", height: "40px", borderRadius: "7px", margin: "10px"}}>
                
            </div>
        </div>
    )
}

export default TagSkeleton
