import React, {useState, useEffect} from 'react'
import Layout from "../components/containers/Layout"
import {useQuery, gql, useMutation} from "@apollo/client"
import Loading from "../components/Loader2"
import Button from "../components/Button"
import SkeletonHolder from "../components/containers/SkeletonHolder"
import TagSkeleton from '../components/TagSkeleton'

import FlexRow from '../components/containers/FlexRow'
import FlexCol from '../components/containers/FlexCol'
import TagsHolder from "../components/containers/TagsHolder"
import ItemsHolder from '../components/containers/ItemsHolder'
import HomeTagsHolder from '../components/home/HomeTagsHolder'
import {Navigate, useNavigate} from "react-router-dom"
const {TAGS, TODOS, NOTES, CREATETODO, CREATENOTE} = require("../components/queries/index")
const {handleData, noDupes} = require("../components/queries/data")



const token = localStorage.getItem("writetoken")

// window.location.reload()
function Home() {
  
  var tags = useQuery(TAGS, {variables: {getTagsToken2: token}}); 
  var notes = useQuery(NOTES, {variables: {getNotesToken2: token}})
  var todos = useQuery(TODOS, {variables: {getTodosToken2: token}})
  const [createTodo, createTodoResult] = useMutation(CREATETODO)
  const [createNote, createNoteResult] = useMutation(CREATENOTE)

  notes.refetch()
  todos.refetch()

  
  
    
    const [search, setSearch] = useState("")
    const [tagFilter, setTagFilter] = useState("All")

    if(!token){
      return <Navigate to="/login"/>
    }

    handleData([notes, todos, tags])
    
    const allTags = (item) =>{
      
      let list = []
      for(let i=0; i<item.length; i++){
        list = [...list, ...item[i].tags]
      }

      return list
    }

    if(createTodoResult.data){
      return <Navigate to={`/createtodo/${createTodoResult.data.createTodo.id}`}/>
    }

    if(createNoteResult.data){
      return <Navigate to={`/createnote/${createNoteResult.data.createNote.id}`}/>
    }

    const createTodoFunc = (e) =>{
      createTodo({variables: {token, title: "Untitled", items: [{content: "Sample Item", createdAt: new Date(), completed: false}], tags: []}})
    }
    const createNoteFunc = (e) =>{
      createNote({variables: {token, title: "Untitled", content: "Text goes here", tags: []}})
    }

    const btn = (onClick, string) =>{
      return <button style={{background: "transparent", color: "#879e48ff", border: "none"}} onClick={onClick}>{string}</button>
    }

    return (
        
            <Layout searchState={[search, setSearch]}>
            
              <FlexCol>
                <div style={{display: "flex", justifyContent: "space-between", padding: "10px", width: "100%"}}>
                    {tags.data && notes.data && todos.data?<HomeTagsHolder  tags={["All" , ...noDupes([...tags.data.getTags, ...allTags(notes.data.getNotes), ...allTags(todos.data.getTodos)])]} setTagFilter={setTagFilter} tagFilter={tagFilter}/>: <TagSkeleton/>}
                    {btn(createTodoFunc, "+ Create Todo")}
                    {btn(createNoteFunc, "+ Create Note")}
                </div>
                
                <div style={{width: "100%", marginLeft: "30px"}}>
                {(notes.data && todos.data)?<ItemsHolder items={[...notes.data.getNotes, ...todos.data.getTodos]} search={search} tagFilter={tagFilter}/>: <SkeletonHolder/>}
                </div>
                </FlexCol>
            </Layout>
        
    )
}

export default Home
