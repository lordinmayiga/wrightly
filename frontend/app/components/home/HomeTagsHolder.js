import React from 'react'
import FlexRow from '../containers/FlexRow'

function HomeTagsHolder({tags, setTagFilter, tagFilter}) {
    const selectedStyle = {backgroundColor: "#879e48ff", color: "white" }
    const unSelectedStyle = {backgroud: "transparent", border: "1px solid #879e48ff", color: "#879e48ff"}
    const btnStyle = {background: "transparent", color: "#879e48ff", border: "none"}

    const decide = (e) =>{
        return tagFilter==e?selectedStyle:unSelectedStyle
    }

    const btn = (text) =>{
        return <button style={btnStyle}>{text}</button>
    }
    return (
        <div className="hometags-outer" style={{display: "flex", alignItems: "top", flexWrap: "wrap"}}>
            {tags.map(e=><div onClick={(el)=>{setTagFilter(e); console.log(e)}} style={{padding: "10px", margin: "10px", borderRadius: "5px", ...decide(e)}}>{e}</div>)}
            {/* {!homePage?btn("+ Create More"): ["New Todo", "New Note"].map(e=>btn(e))} */}
        </div>
    )
}

export default HomeTagsHolder
