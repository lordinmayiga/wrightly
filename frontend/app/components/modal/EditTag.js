
 import React from 'react' 
 import './EditTag.css' 
 
function EditTag({info}){ 
return  (
<div>

	<Modal className='edittag-modal-1' >
		<input className='edittag-input-2' value={info.value}>
		</input>
		<button className='edittag-button-3' >Save</button>
	</Modal>
</div>)} 

 export default EditTag