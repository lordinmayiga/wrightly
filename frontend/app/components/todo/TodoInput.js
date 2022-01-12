
 import React, {useEffect, useState} from 'react' 
 import './TodoInput.css' 
 
function TodoInput({itemsState}){ 
	const [items, setItems] = itemsState
	const [currValue, setCurrValue] = useState("")

	const handleClick = (e) =>{
		e.preventDefault()
		setItems([{content: currValue, completed: false, createdAt: new Date(), ide: Math.random().toString()}, ...items])
		
		setCurrValue("")
	}
return  (
<div>

	<form className='todoinput-div-1' onSubmit={handleClick}>
		<input className='todoinput-input-2' placeholder='Write item here' value={currValue} onChange={(e)=>setCurrValue(e.target.value)} style={{padding: "10px", fontSize: "16px", borderRadius: "4px", border: "1px solid gray"}}>
		</input>
		<button className='todoinput-button-3'>Add</button>
	</form>
</div>)} 

 export default TodoInput