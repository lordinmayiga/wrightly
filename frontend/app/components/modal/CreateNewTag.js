
 import React from 'react' 
 import './CreateNewTag.css' 
 
function CreateNewTag({currTagsState, setCreateNewTag}){ 
	const [currTags, setCurrTags] = currTagsState
return  (
<div>

	<Modal className='createnewtag-modal-1'  info={{setShow: setCreateNewTag}}>
		<input className='createnewtag-input-2' >
		</input>
		<button className='createnewtag-button-3'  onClick={(e)=>setCreateNewTag(false)}>Save</button>
	</Modal>
</div>)} 

 export default CreateNewTag