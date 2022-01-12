
 import React from 'react' 
 import './SmallTodoItem.css' 
 import FlexRow from '../containers/FlexRow'
 
function SmallTodoItem({info}){ 
return  (
	<FlexRow>
		<input type="checkbox" className='smalltodoitem-checkbox-2' checked={info.complete} style={{color: "gray"}}>
		</input>
		<div className='smalltodoitem-div-3' style={{marginLeft: "10px", textDecoration: info.complete?"line-through": "none", color: "white"}}>{info.item}</div>
	</FlexRow>
)} 

 export default SmallTodoItem