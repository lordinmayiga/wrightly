
 import React from 'react' 
 import './LeftSideItem.css' 
 import {Link, NavLink} from "react-router-dom"
 
function LeftSideItem({info, children}){ 
return  (
<NavLink to={info.to} className={({isActive})=>isActive?"active-nav": "not-active-nav"}>

	<div className='leftsideitem-div-1' >
		<div className='leftsideitem-div-2' style={{marginRight: "16px", width: '24px', height: '24px'}}>{children}</div>
		<div className='leftsideitem-div-3' style={{fontSize: "15px", color: "white"}}>{info.text}</div>
	</div>
</NavLink>)} 

 export default LeftSideItem