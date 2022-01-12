import React, {useState, useContext, useEffect} from 'react'
import TodoInput from "../components/todo/TodoInput"
import TodoItem from "../components/todo/TodoItem"
import FlexCol from '../components/containers/FlexCol'
import ChooseTitle from "../components/modal/ChooseTitle"
import ChooseTags from "../components/modal/ChooseTags"
import TagsHolder from "../components/containers/TagsHolder"
import {useLocation, Navigate} from "react-router-dom"
import { useQuery, gql, useMutation } from "@apollo/client"

import "./CreateTodo.css"
import CreateNewTag from '../components/modal/CreateNewTag'
import Layout from "../components/containers/Layout"
import Loading from "../components/Loader2"

import {TODO, EDITTODO} from '../components/queries/create'
import { noDupes } from '../components/queries/data'
import FlexRow from '../components/containers/FlexRow'
import Delete from "../components/modal/Delete"
import {DELETETODO} from "../components/queries/delete"

const removeDupes = (list) =>{
    let newList = []
    for(let i=0;i<list.length;i++){
        if(!newList.includes(list[i])){
            newList.push(list[i])
        }
    }
    console.log("new list")
    console.log(newList)
    return newList
}

const token = localStorage.getItem("writetoken")

function CreateTodo({title}) {
    const location = useLocation()
    let identification = location.pathname.split("/")[1].slice(10, 100)
    
    const todo = useQuery(TODO, {variables: {getTodoToken2: token, getTodoId: decodeURI(identification)}})
    const [editTodo, editTodoResult] = useMutation(EDITTODO)
    const [deleteNote, deleteNoteResult] = useMutation(DELETETODO)

    todo.refetch()
 
    const [items, setItems] = useState([])
    const [currTitle, setCurrTitle] = useState(title)
    const [currTags, setCurrTags] = useState(["inspiration", "boredom"])
    const [chooseTags, setChooseTags] = useState(false)
    const [chooseTitle, setChooseTitle] = useState(false)
    const [createNewTag, setCreateNewTag] = useState(false)
    const [search, setSearch] = useState("")
    const [askDelete, setaskDelete] = useState(false)

    
    useEffect(() => {
        if (decodeURI(identification).match(/^[0-9a-fA-F]{24}$/)) {
            console.log(`match: ${decodeURI(identification)}`)
          }
        if(todo.data){
            
            setItems([...items, ...filterObjects(todo.data.getTodo.items)])
            setCurrTitle(todo.data.getTodo.title)
            let newTags = noDupes([...todo.data.getTodo.tags, ...currTags])
            setCurrTags([...newTags])
            console.log(todo.data.getTodo.items)
        }
    }, [todo.data]);

    if(!token){
        return <Navigate to='/login'/>
    }

    if(todo.error){
        console.log(todo.error)
    }

    if(editTodoResult.loading){

        return <Layout searchState={[search, setSearch]}><Loading/></Layout>
    }

    if(deleteNoteResult.loading){
        return <h1>deleting...</h1>
    }

    if(deleteNoteResult.data){
        return <Navigate to="/"/>
    }

    if(deleteNoteResult.error){
        console.log(deleteNoteResult.error)
    }

    if(editTodoResult.error){
        console.log("\n Error! \n")
        console.log(typeof editTodoResult.error)
        console.log(editTodoResult.error)
        console.log("\n Error end! \n")
    }if(editTodoResult.data){
        return <Navigate to="/"/>
    }

    const deleteFunc = (e) =>{
        deleteNote({variables: {deleteTodoToken2: token, deleteTodoId: decodeURI(identification)}})
    }

    const filterObjects = (objects) =>{
        let list = []
        for(let i=0; i<objects.length; i++){
            let newValue = {createdAt: objects[i].createdAt, content: objects[i].content, completed: objects[i].completed} 
            if(!newValue.ide){
                newValue.ide = Math.random().toString()
            }
            
            list.push(newValue)
        }
        return removeDupes(list)
    }

    const filterFinal = (objects) =>{
        let list = []
        for(let i=0; i<objects.length; i++){
            list.push({createdAt: objects[i].createdAt, content: objects[i].content, completed: objects[i].completed})
        }
        console.log(list)
        return list
    }



    const save = (e) =>{
        
        console.log(items)
        let variables = {editTodoToken2: token, editTodoId: decodeURI(identification), newTitle: currTitle, editTodoTags2: currTags, newItems: items}
        console.log(variables)
        editTodo({variables})
    }
    
    // decodeURI(encoded)
    
    return (
        <Layout searchState={[search, setSearch]}>
            {chooseTags?<ChooseTags currTagsState={[currTags, setCurrTags]} setChooseTags={setChooseTags} setCreateNewTag={setCreateNewTag}/>: ""}
            {chooseTitle? <ChooseTitle currTitleState={[currTitle, setCurrTitle]} setChooseTitle={setChooseTitle}/>: ""}
            {askDelete?<Delete askDeleteState={[askDelete, setaskDelete]} deleteFunc={deleteFunc} />: ""}
            <FlexRow className="createtodo-container">
                <FlexCol className="createtodo-outer">
                    <h3 onClick={(e)=>setChooseTitle(true)}>{currTitle}</h3>
                    <TodoInput itemsState={[items, setItems]}/> 
                    <TagsHolder tags={currTags} setTags={setCurrTags} setChooseTags={setChooseTags}></TagsHolder>
                    <FlexCol>
                            {items.map((e)=><TodoItem key={Math.random().toString()} info={{...e}} itemsState={[items, setItems]}></TodoItem>)}
                    </FlexCol>
                    <button onClick={save} className="createtodo-save">Save</button>
                    <button onClick={(e)=>setaskDelete(true)} className="createtodo-save" style={{backgroundColor: "rgba(200, 50, 50)"}}>Delete</button>
                </FlexCol>
            </FlexRow>
        </Layout>
        
    )
}

export default CreateTodo
