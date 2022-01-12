
 import React from 'react' 
 import './TodoCard.css' 
 import SmallTodoItem from "./SmallTodoItem"
 import {Link} from 'react-router-dom'
 
const {handleDate} = require('../queries/data')

function TodoCard({info}){ 
	// console.log(info)
	
	const manageTitle = (string) =>{
		if(string.length<60){
			return string
		}
		return `${string.splice(0, 60)}...`
	}
return  (
<div>

	<div className='notescard-div-1'>
	<div className="notescard-icon">
	<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#879e48ff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/></svg></div>
		<Link className='notescard-link-2'  to={`/createtodo${encodeURI(info.id)}`}>
			<div className="notescard-image" style={{width: "100%", height: "350px", backgroundColor: "gray"}}>
				<div className="todocard-todos">
					<SmallTodoItem className='todocard-smalltodoitem-5' info={{item: info.items[0].content, complete: info.items[0].complete}}>
					</SmallTodoItem>
					{info.items[1]?<SmallTodoItem className='todocard-smalltodoitem-5' info={{item: info.items[1].content, complete: info.items[1].complete}}>
					</SmallTodoItem>: ""}
					{info.items[2]?<SmallTodoItem className='todocard-smalltodoitem-5' info={{item: info.items[2].content, complete: info.items[2].complete}}>
					</SmallTodoItem>:""}
					{info.items[3]?<SmallTodoItem className='todocard-smalltodoitem-5' info={{item: info.items[3].content, complete: info.items[3].complete}}>
					</SmallTodoItem>:""}
				</div>
			</div>
			
			<div className="notescard-lower">
				<div className='notescard-div-4'  style={{marginBottom: "23px", fontSize: "16px", color: "rgba(0, 0, 0, 1)", fontWeight: "bold"}}>{manageTitle(info.title)}</div>
				<div className='notescard-div-3' style={{marginBottom: "23px", fontSize: "12px", color: "rgba(0, 0, 0, .7)"}}>{handleDate(info)}</div>
				
			</div>
		</Link>
	</div>
</div>)} 

 export default TodoCard