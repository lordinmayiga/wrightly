
 import React from 'react' 
 import './CreateNewTag.css' 
 import Modal from "./Modal"
 
function Delete({askDeleteState, deleteFunc}){ 
	const [askDelete, setAskDelete] = askDeleteState
    const options = ["Sure you want to delete this lovely file?",  "Always be sure first!", "Why are you deleting so many files today?", "See you in the afterlife!"]
return  (
<div>

	<Modal className='createnewtag-modal-1'  info={{setShow: setAskDelete}}>
    <div className="choosetags-outer">
		<h3 style={{fontSize: "25px", margin: "50px 0px 50px 0px"}}>{`${options[Math.floor(Math.random()*options.length)]}`}</h3>
		<button className='createtodo-save' style={{backgroundColor: "rgba(200, 50, 50)"}}  onClick={deleteFunc}>Delete</button>
        </div>
	</Modal>
</div>)} 

 export default Delete