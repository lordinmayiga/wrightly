import React, {useContext, useState} from 'react'
import Button from "../components/Button"
import Input from "../components/Input"
import {gql, useMutation} from "@apollo/client"
import {Navigate} from "react-router-dom"
import Loading from "../components/Loader2"


const {Link} =require("react-router-dom")


const MY_MUTATION = gql`
mutation($registerInput: RegisterInput){
    register(registerInput: $registerInput) {
      token
    }
  }
  
`

function Signup() {

    const [addUser, {data, loading, error}] = useMutation(MY_MUTATION, {errorPolicy: 'all' })
    
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    if(error){
        console.log(`there is an error, ${error}`)
        // console.log(error.graphQLErrors)
        // console.log(error.graphQLErrors[0].extensions.errors.email)
        // const c_errors = error.graphQLErrors[0].extensions.errors
        
    }if(data){
        console.log(data)
        // alert("YOu are now logged in!")
        
        localStorage.setItem("writetoken", data.register.token)
        return <Navigate to="/"/>
        
    }

    if(loading){
        return (
            <div div className="signup-outer gradient-background" style={{width: "100%", height: "100vh", display: "grid", placeContent: "center", backgroundColor: "#879e48ff"}}>
                <div style={{width: "100%", height: "100vh", backgroundColor: "rgba(255, 255, 255, .4)"}}>
                    <Loading/>
                </div>
            </div>
        )
    }
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email)
        console.log(password)
        const registerInput = {username, password, confirmPassword, email}
        addUser({variables: {registerInput}})
    }

    const checkError = (errorType) => {
        if(error){
            if(error.graphQLErrors[0].extensions.errors[errorType]){
                return true
            }else return false
        }return false
        
    }

    const errorShortHand = (arg) =>{
        let thisError = error.graphQLErrors[0].extensions.errors[arg]
        console.log(thisError)
        return error.graphQLErrors[0].extensions.errors[arg]
    }

    return (
        <div className="signup-outer gradient-background" style={{width: "100%", height: "100vh", display: "grid", placeContent: "center", backgroundColor: "#879e48ff"}}>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="leftside-logo" style={{borderRadius: "20px", display: "flex", backgroundColor: "rgba(0, 0, 0, 0)"}}>
		            <div>Wrightly</div>
	            </div>
                <div style={{width: "418px"}} className="login-container">
                <Input info={{placeholder:"username", label:"Username", value:username, setValue:setUsername,  error: checkError("username")?errorShortHand("username"): ""}}/>
                    <Input info={{placeholder:"Email", label:"Email", type: "email", value:email, setValue:setEmail,  error: checkError("email")?errorShortHand("email"): ""}}/>
                    <Input info={{placeholder:"password", type:"password", value: password, setValue: setPassword, label:"Password", error: checkError("password")?errorShortHand("password"): ""}}/>
                    
                    <Input info={{placeholder:"confirmPassword", type:"password", value: confirmPassword, setValue: setConfirmPassword, label:"confirmPassword", error: checkError("confirmPassword")?errorShortHand("confirmPassword"): ""}}/>
                    {checkError("general")?<div className="input-error h14">{errorShortHand("general")}</div>:""}
                    <Button info={{text:"Login", btnType:"primary"}}/>
                    <div style={{marginBottom: "35px", fontSize: "13px"}}>Already have an account?<div style={{marginLeft: "30px"}} className="nav-link"><Link to="/login">Login</Link></div></div>
                    
                </div>
            </form>
        </div>
    )
}

export default Signup
