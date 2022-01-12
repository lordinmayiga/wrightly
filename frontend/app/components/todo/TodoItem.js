
 import React, {useEffect, useState} from 'react' 
 import './TodoItem.css' 
 import FlexRow from "../containers/FlexRow"


function TodoItem({info, itemsState, key}){ 

	const [items, setItems] = itemsState
	const [completed, setCompleted] = useState(info.completed)
	// let backgroundColor = completed?"#879e48ff": "white"
	const handleClick = (e) =>{
		setCompleted(!completed)
		// info={...info, completed}
		// console.log(items.filter(e=>e.ide!=info.ide))
		let newItems = [...items.filter(e=>e.ide!==info.ide), {...info, completed: !completed}]
		setItems([...newItems.sort((a, b)=> new Date(b.createdAt)-new Date(a.createdAt))])
	}
return  (
<div className='todoitem-outer' key={key}>
	
	<div className='todoitem-div-1' >
	<FlexRow>
		<div className="todoitem-checkbox" onClick={handleClick} style={{width: "26px", height: "26px", borderRadius: "50%", backgroundColor: completed?"#879e48ff": "white", border: "1px solid #879e48ff"}}/>
		<div className={`todoitem-div-3 ${completed?"todoitem-complete": ""}`} >{info.content}</div>
	</FlexRow>
		
		<button style={{fontSize: "20px", border: "none", background: "transparent", color: "red", marginLeft: "10px"}} onClick={(e)=>setItems([...items.filter(e=>e.ide!==info.ide)])}>X</button>
	</div>
</div>)} 

 export default TodoItem