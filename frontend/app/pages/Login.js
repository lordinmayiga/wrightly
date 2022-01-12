import React, {useContext, useState} from 'react'
import Button from "../components/Button"
import Input from "../components/Input"
import "./Login.css"
import {gql, useMutation} from "@apollo/client"
import {Navigate} from "react-router-dom"
import Loading from "../components/Loader2"



const {Link} = require("react-router-dom")


const MY_MUTATION = gql`
mutation($username: String!, $password: String!){
    login(username: $username, password: $password) {
      token
    }
  }
`

function Login() {

    const [addUser, {data, loading, error}] = useMutation(MY_MUTATION)
    
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    if(error){
        console.log("error")
        console.log(error.graphQLErrors)
        
    }if(data){
        console.log(data)
        // alert("YOu are now logged in!")
        // let loggedInUser = {username: data.login.username, token: data.login.token}
        localStorage.setItem("writetoken", data.login.token)
        
        return (<Navigate to="/"/>)
        
    }

    if(loading){
        return (
            <div div className="signup-outer gradient-background" style={{width: "100%", height: "100vh", display: "grid", placeContent: "center", backgroundColor: "#879e48ff"}}>
                <div style={{width: "100%", height: "100%", backgroundColor: "rgba(255, 255, 255, .4)"}}>
                    <Loading/>
                </div>
            </div>
        )
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(username)
        console.log(password)
        addUser({variables: {username, password: password}})
    }

    const checkError = (errorType) =>{
        if(error){
            if(error.graphQLErrors[0].extensions.errors[errorType]){
                return true
            }else return false
        }return false
        
    }

    const errorShortHand = (arg) =>{
        return error.graphQLErrors[0].extensions.errors[arg]
    }

    return (
        <div className="signup-outer gradient-background" style={{width: "100%", height: "100vh", display: "grid", placeContent: "center", backgroundColor: "#879e48ff"}}>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="leftside-logo" style={{borderRadius: "20px", display: "flex", backgroundColor: "rgba(0, 0, 0, 0)"}}>
		            <div>Wrightly</div>
	            </div>
                <div style={{width: "418px"}} className="login-container">
                    <Input info={{placeholder:"Username", label:"Username", value:username, setValue:setUsername,  error: checkError("username")?errorShortHand("username"): ""}}/>
                    <Input info={{placeholder:"password", type:"password", value: password, setValue: setPassword, label:"Password", error: checkError("password")?errorShortHand("password"): ""}}/>
                    {checkError("general")?<div className="input-error h14">{errorShortHand("general")}</div>:""}
                    <div style={{marginBottom: "35px", fontSize: "13px"}}>Don't have an account?<div style={{marginLeft: "30px"}} className="nav-link"><Link to="/signup">Signup</Link></div></div>
                    <Button info={{text:"Login", btnType:"primary"}}/>
                </div>
            </form>
        </div>
    )
}

export default Login
