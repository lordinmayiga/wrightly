import React, {useState, useContext, useEffect} from 'react'
import TodoInput from "../components/todo/TodoInput"
import TodoItem from "../components/todo/TodoItem"
import FlexCol from '../components/containers/FlexCol'
import ChooseTitle from "../components/modal/ChooseTitle"
import ChooseTags from "../components/modal/ChooseTags"
import TagsHolder from "../components/containers/TagsHolder"
import TextEditor from "../components/TextEditor"
import {useLocation, Navigate} from "react-router-dom"
import { useQuery, gql, useMutation } from "@apollo/client"

import Layout from "../components/containers/Layout"
import Nav from '../components/navigation/Navigation'
import Loading from "../components/Loader2"
import Delete from "../components/modal/Delete"

import {NOTES, EDITNOTE} from '../components/queries/create'
import {DELETENOTE} from "../components/queries/delete"


const token = localStorage.getItem("writetoken")

function CreateNote({title}) {
    const location = useLocation()
    let identification = location.pathname.split("/")[1].slice(10, 100)
    
    const note = useQuery(NOTES, {variables: {getNoteToken2: token, getNoteId: decodeURI(identification)}})
    const [editNote, editNoteResult] = useMutation(EDITNOTE)
    const [deleteNote, deleteNoteResult] = useMutation(DELETENOTE)

    const [currTitle, setCurrTitle] = useState(title)
    const [currTags, setCurrTags] = useState([])
    const [chooseTags, setChooseTags] = useState(false)
    const [chooseTitle, setChooseTitle] = useState(false)
    const [content, setContent] = useState("")
    const [search, setSearch] = useState("")
    const [askDelete, setAskDelete] = useState(false)

    useEffect(() => {
        if(note.data){
            
            setContent(note.data.getNote.content)
            setCurrTitle(note.data.getNote.title)
            setCurrTags([...note.data.getNote.tags, ...currTags])
            
        }
    }, [note.data]);

    if(!token){
        return <Navigate to='/login'/>
    }

    if(note.error){
        console.log(note.error)
    }

    if(editNoteResult.loading){
        return <Layout searchState={[search, setSearch]}><Loading/></Layout>
    }

    if(deleteNoteResult.loading){
        return <h1>deleting...</h1>
    }

    if(deleteNoteResult.error){
        console.log(deleteNoteResult.error)
    }

    if(editNoteResult.error){
        console.log(editNoteResult.error)
    }if(editNoteResult.data){
        return <Navigate to="/"/>
    }

    if(deleteNoteResult.data){
        return <Navigate to="/"/>
    }

    const deleteFunc = (e) =>{
        deleteNote({variables: {token, deleteNoteId: decodeURI(identification)}})
    }

    const save = (e) =>{
        console.log("content: ")
        console.log(content)
        editNote({variables: {editNoteToken2: token, editNoteId: decodeURI(identification), newTitle: currTitle, tags: currTags, newContent: content}})
    }
    
    return (
        <Layout searchState={[search, setSearch]}>
            <div className="createnote-outer">
                {chooseTags?<ChooseTags currTagsState={[currTags, setCurrTags]} setChooseTags={setChooseTags}/>: ""}
                {chooseTitle? <ChooseTitle currTitleState={[currTitle, setCurrTitle]} setChooseTitle={setChooseTitle}/>: ""}
                {askDelete?<Delete askDeleteState={[askDelete, setAskDelete]} deleteFunc={deleteFunc} />: ""}
                
                <div>
                    <h3 onClick={(e)=>setChooseTitle(true)} style={{margin: "15px 10px 15px 10px", fontSize: "30px"}}>{currTitle}</h3>
                
                <TagsHolder tags={currTags} setTags={setCurrTags} setChooseTags={setChooseTags}></TagsHolder>
                <div><TextEditor contentState={[content, setContent]}/></div>
                
                <button onClick={save} className="createtodo-save">Save</button>
                <button onClick={(e)=>setAskDelete(true)} className="createtodo-save" style={{backgroundColor: "rgba(200, 50, 50)"}}>Delete</button>
                </div>
            </div>
        </Layout>
        
    )
}

export default CreateNote
