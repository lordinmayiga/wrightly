
 import React from 'react' 
 import './Modal.css' 
 
function Modal({info, children}){ 
return  (


	<div className='modal-div-1'>
		
		<div className='modal-div-2'  style={{padding: "40px 40px 40px 40px"}}>
		<button onClick={(e)=>info.setShow(false)} style={{float: "right"}} className="modal-x">X</button>{children}</div>
	</div>
)} 

 export default Modal