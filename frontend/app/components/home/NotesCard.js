
 import React, {useState} from 'react' 
 import './NotesCard.css' 
 import {Link} from "react-router-dom"
 import ToImage from "../ToImage"

 const {handleDate} = require('../queries/data')
 
function NotesCard({info}){ 
	const [img, setImg] = useState("")

	const manageTitle = (string) =>{
		if(string.length<60){
			return string
		}
		return `${string.splice(0, 60)}...`
	}

	let content = info.content.replace(/<br>/g, "<br/>")
	// console.log(content)
return  (
<div>
	{/* <ToImage htmlString={`<div>${content}</div>`} imgState={[img, setImg]}/> */}
	<div className='notescard-div-1' onClick={(e)=>console.log(info)}>
	<div className="notescard-icon">
	<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#879e48ff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg></div>
		<Link className='notescard-link-2' to={`/createnote${encodeURI(info.id)}`}>
			
			{/* <div className='notescard-div-5'  style={{marginBottom: "23px", fontSize: "14px", color: "rgba(0, 0, 0, .9)"}}>{info.content.slice(0, 70)}</div> */}
			<div className="notescard-image" style={{width: "100%", height: "350px", backgroundColor: "gray", overflow: "none"}}>
				{/* <img src={img} className="notescard-img"></img> */}
			</div>
			<div className="notescard-lower">
				<div className='notescard-div-4'  style={{marginBottom: "23px", fontSize: "16px", color: "rgba(0, 0, 0, 1)", fontWeight: "bold"}}>{manageTitle(info.title)}</div>
				<div className='notescard-div-3' style={{marginBottom: "23px", fontSize: "12px", color: "rgba(0, 0, 0, .7)"}}>{handleDate(info)}</div>
				
			</div>
		</Link>
	</div>
</div>)} 



 export default NotesCard