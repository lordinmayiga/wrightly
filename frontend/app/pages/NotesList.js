import React, {useState} from 'react'
import Layout from "../components/containers/Layout"
import {useQuery, gql, useMutation} from "@apollo/client"
import Loading from "../components/Loader2"
import Button from "../components/Button"
import SkeletonHolder from "../components/containers/SkeletonHolder"
import TagSkeleton from '../components/TagSkeleton'

import FlexRow from '../components/containers/FlexRow'
import TagsHolder from "../components/containers/TagsHolder"
import ItemsHolder from '../components/containers/ItemsHolder'
import FlexCol from '../components/containers/FlexCol'
import HomeTagsHolder from '../components/home/HomeTagsHolder'
import { Navigate } from 'react-router-dom'
const {handleData, allTags} = require("../components/queries/data")


const token = localStorage.getItem("writetoken")

const {TAGS, TODOS, NOTES, CREATETODO, CREATENOTE} = require("../components/queries/index")


function Home() {
    const tags = useQuery(TAGS, {variables: {getTagsToken2: token}})
    const notes = useQuery(NOTES, {variables: {getNotesToken2: token}})
    const [search, setSearch] = useState("")
    const [tagFilter, setTagFilter] = useState("All")
    const [createNote, createNoteResult] = useMutation(CREATENOTE)

    notes.refetch()
    

    handleData([notes, tags, createNoteResult])

    if(createNoteResult.loading){
      return <Layout searchState={[search, setSearch]}><Loading/></Layout>
    }

    if(createNoteResult.data){
      return <Navigate to={`/createnote/${createNoteResult.data.createNote.id}`}/>
    }

    const create = (e) =>{
      createNote({variables: {token, title: "Untitled", content: "Text goes here", tags: []}})
    }
    return (
      <Layout searchState={[search, setSearch]}>
      <FlexCol>
        <div style={{display: "flex", justifyContent: "space-between", padding: "10px", width: "100%"}}>
            {tags.data && notes.data?<HomeTagsHolder homePage={false} tags={["All", ...tags.data.getTags,  ...allTags(notes.data.getNotes)]}/>: <TagSkeleton/>}
            <button style={{background: "transparent", color: "#879e48ff", border: "none"}} onClick={create}>+ Create More</button>
        </div>
        <div style={{width: "100%", marginLeft: "30px"}}>
         {(notes.data)?<ItemsHolder items={[...notes.data.getNotes]} search={search} tagFilter={tagFilter}/>: <SkeletonHolder/>}
         </div>
        </FlexCol>
    </Layout>
    )
}

export default Home
