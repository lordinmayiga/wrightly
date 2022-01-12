
 import React from 'react' 
 import './TagItemChoose.css' 
 
function TagItemChoose({info}){ 
return  (
<div>

	<div className='tagitemchoose-div-1' >
		<checkbox className='tagitemchoose-checkbox-2' >
		</checkbox>
		<div className='tagitemchoose-div-3' >{info.text}</div>
	</div>
</div>)} 

 export default TagItemChoose