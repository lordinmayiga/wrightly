import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { useRoutes, BrowserRouter, Routes, Route } from 'react-router-dom';

import "./index.css";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

import ToImage from "./components/ToImage"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import CreateTodo from './pages/CreateTodo';
import CreateNote from "./pages/CreateNote"
import ContactUs from './pages/ContactUs';
import TodoList from "./pages/TodoList"
import NotesList from './pages/NotesList'
import Logout from "./pages/Logout"
import "@fontsource/roboto"; 

import CreateNewTag from './components/modal/CreateNewTag';
import ImageConvert from './pages/ImageConvert';
const client = new ApolloClient({
uri: 'http://localhost:4005/graphql',
cache: new InMemoryCache()
}); 

const App = function(){
    // {/* <Route path="/" element={<ProductCard info={{title: "Lordin Mayiga", img: "client.png", shortDescription: "Sint mollit labore enim proident sint sunt laboris voluptate enim in veniam", rating:"3"}}/>}/> */}
    return (
            <BrowserRouter>
                <Routes>
                {/* <Route path="createnote/61c9b2be29641fc8506356bc" element={<CreateNote/>}/> */}
                <Route path="/createnote:id" element={<CreateNote/>}/>
                    <Route path="/toimage" element={<ToImage/>}/>
                    <Route path="/test:id" element={<ImageConvert/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/notes" element={<NotesList/>}/>
                    <Route path="/todos" element={<TodoList/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/contactus" element={<ContactUs/>}/>
                    <Route path="/createtodo:id" element={<CreateTodo/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        )
    
}

ReactDOM.render(
    <ApolloProvider client={client}>
        
            <App/>
        
        
    </ApolloProvider>

, document.getElementById('app'));
