import React from 'react' 
import {Link} from 'react-router-dom'
import Nav from "../navigation/Navigation"
import LeftSide from "../navigation/LeftSide"
import $ from "jquery"


function Layout({children, searchState}){ 
    
return  (
<div style={{height: "100vh"}} onScroll={(e)=>{console.log(e); console.log("scroling!")}}>
    <Nav searchState={searchState}/>
    <div style={{display: "flex"}} className="layout-holder">
        <LeftSide/>
        <div style={{width:"300px", height: "100vh"}} className="layout-add"/>
        <div className="layout-children">
        {children}
        </div>
        
    </div>
</div>)} 

export default Layout