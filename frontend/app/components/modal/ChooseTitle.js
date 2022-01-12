
 import React from 'react' 
 import './ChooseTitle.css'
 import Modal from "./Modal" 
 
function ChooseTitle({currTitleState, setChooseTitle}){ 
	const [currTitle, setCurrTitle] = currTitleState

	const save = (e)=>{
		if(currTitle.trim()===""){
			setCurrTitle("untitled")
			setChooseTitle(false)
			
		}
	}
return  (


	
	<Modal className='choosetags-modal-1' info={{setShow: setChooseTitle}}>
		<div className="choosetags-outer">
		<h3 style={{fontSize: "25px", margin: "50px 0px 50px 0px"}}>Choose Titlte</h3>
		<form onSubmit={(e)=>{e.preventDefault(); setChooseTitle(false)}} style={{display: "flex", marginBottom: "30px", flexWrap: "wrap"}} className="choosetitle-form">
			<input className='choosetags-input-3' value={currTitle} onChange={(e)=>setCurrTitle(e.target.value)} placeholder="Create New Tag">
			</input>
			<button style={{backgroundColor: "#1e0233ff", border: "1px solid #1e0233ff", borderRadius: "5px", fontSize: "16px", color: "white", padding: "7px 13px 7px 13px", marginLeft: "10px"}}>OK</button>
		</form>
		<button onClick={save} style={{backgroundColor: "#879e48ff", border: "1px solid #879e48ff", borderRadius: "5px", fontSize: "16px", color: "white", padding: "7px 13px 7px 13px", marginBottom: "50px", float: "right"}}>Save</button>
		</div>
		
	</Modal>
)} 

 export default ChooseTitle