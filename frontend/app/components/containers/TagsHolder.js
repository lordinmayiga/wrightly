import React from 'react'
import FlexRow from "./FlexRow"
import Tag from "../Tag"

function TagsHolder({tags, setTags, setChooseTags}) {
    const removeTag = (tag) =>{
        let currTags = tags
        currTags.splice(currTags.indexOf(tag), 1)
        setTags([...currTags])
    }
    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {tags.map(e=><Tag info={{value: e, checked: true}} removeTag={removeTag}/>)}
            <button onClick={(e)=> setChooseTags(true)} style={{backgroundColor: "#879e48ff", border: "1px solid #879e48ff", borderRadius: "5px", fontSize: "16px", color: "white", padding: "13px 7px 13px 7px"}}>Add Tags</button>
        </div>
    )
}

export default TagsHolder
