import React, {useState} from 'react'
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
import { Navigate } from 'react-router-dom'

const token = localStorage.getItem("writetoken")
const {TAGS, TODOS, NOTES, CREATETODO, CREATENOTE} = require("../components/queries/index")
const {handleData, allTags, noDupes} = require("../components/queries/data")


function Home() {
    const tags = useQuery(TAGS, {variables: {getTagsToken2: token}})
    
    const todos = useQuery(TODOS, {variables: {getTodosToken2: token}})
    const [search, setSearch] = useState("")
    const [tagFilter, setTagFilter] = useState("All")
    const [createTodo, createTodoResult] = useMutation(CREATETODO)

    todos.refetch()

    if(createTodoResult.loading){
      return <Layout searchState={[search, setSearch]}><Loading/></Layout>
    }

    handleData([createTodoResult, todos, tags])

    if(createTodoResult.data){
      return <Navigate to={`/createtodo/${createTodoResult.data.createTodo.id}`}/>
    }

    const create = (e) =>{
      createTodo({variables: {token, title: "Untitled", items: [{content: "Sample Item", createdAt: new Date(), completed: false}], tags: []}})
    }
    
    return (
        <Layout searchState={[search, setSearch]}>
        <FlexCol>
          <div style={{display: "flex", justifyContent: "space-between", padding: "10px", width: "100%"}}>
              {tags.data && todos.data?<HomeTagsHolder tags={["All", ...noDupes([...tags.data.getTags, ...allTags(todos.data.getTodos)])]}/>: <TagSkeleton/>}
              <button style={{background: "transparent", color: "#879e48ff", border: "none"}} onClick={create}>+ Create More</button>
          </div>
          <div style={{width: "100%", marginLeft: "30px"}}>
          {(todos.data)?<ItemsHolder items={[...todos.data.getTodos]} search={search} tagFilter={tagFilter}/>: <SkeletonHolder/>}
          </div>
          </FlexCol>
      </Layout>
    )
}

export default Home
