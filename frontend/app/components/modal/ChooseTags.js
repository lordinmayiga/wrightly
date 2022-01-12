
 import React, {useState} from 'react' 
 import './ChooseTags.css' 
 import Modal from "./Modal"
 import CreateNewTag from "./CreateNewTag"
 import Tag from "../Tag"
 
function ChooseTags({setChooseTags, currTagsState}){ 
	const [currTags, setCurrTags] = currTagsState
	const [tagValue, setTagValue] = useState("")

	const handleClick = (e) =>{
		e.preventDefault()
		setCurrTags([...currTags, tagValue])
		setTagValue("")
	}
return  (

	<Modal className='choosetags-modal-1' info={{setShow: setChooseTags}}>
		<div className="choosetags-outer">
		<h3 style={{fontSize: "25px", margin: "50px 0px 50px 0px"}}>Choose Tags</h3>
		<div className='choosetags-div-2' style={{display: "flex", flexWrap: "wrap", marginBottom: "40px"}}>
			{currTags.map((e)=><Tag info={{value: e, checked: true}}/>)}
		</div>
		<form onSubmit={handleClick} style={{display: "flex", marginBottom: "30px", flexWrap: "wrap"}}>
			<input className='choosetags-input-3' value={tagValue} onChange={(e)=>setTagValue(e.target.value)} placeholder="Create New Tag">
			</input>
			<button style={{backgroundColor: "#1e0233ff", border: "1px solid #1e0233ff", borderRadius: "5px", fontSize: "16px", color: "white", padding: "7px 13px 7px 13px", marginLeft: "10px"}}>Create New</button>
		</form>
		<button onClick={(e)=>setChooseTags(false)} style={{backgroundColor: "#879e48ff", border: "1px solid #879e48ff", borderRadius: "5px", fontSize: "16px", color: "white", padding: "7px 13px 7px 13px", marginBottom: "50px", float: "right"}}>Save</button>
		</div>
		
	</Modal>
)} 

 export default ChooseTags