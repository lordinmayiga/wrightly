import React, {useState} from 'react'
import {NavLink, Link} from "react-router-dom"
import "./Navigation.css"
import Button from "../Button"

function Nav({searchState}) {
    const [search, setSearch] = searchState
    const [searchBar, setSearchBar] = useState(false)
    
    return (
        <header className="nav-outer ">
                <nav>
                    
                    <div className="nav-search" onClick={(e)=>{setSearchBar(true)}}><svg style={{width: "24px", height: "24px"}} viewBox="0 0 24 24">
                        <path fill="#879e48ff" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                    </svg></div>
                    <div className="nav-logo">
                        <div>Wrightly</div>
                    </div>
                    {searchBar?<form className="nav-form" onSubmit={(e)=>{e.preventDefault(); setSearchBar(false)}}>
                    
                    <input type="text" placeholder="search" style={{width: '100%', padding: "10px", fontSize: "16px", color: "gray", border: "none"}} value={search} onChange={(e)=>setSearch(e.target.value)}/>

                </form>: ""}

                    <form className="nav-form hidden" >
                    
                        <input type="text" placeholder="search" style={{width: '100%', padding: "10px", fontSize: "16px", color: "gray", border: "none"}} value={search} onChange={(e)=>setSearch(e.target.value)}/>
                        <div style={{marginLeft: "30px"}} className="nav-link"><Link to="/logout">Logout</Link></div>
                    </form>
                    <div style={{marginLeft: "30px"}} className="nav-link"><Link to="/logout">Logout</Link></div>   
                </nav>
        </header>
    )
}

export default Nav
