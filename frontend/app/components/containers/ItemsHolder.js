import React, {useEffect, useState} from 'react'
import NotesCard from "../home/NotesCard"
import TodoCard from "../home/TodoCard"
import FlexRow from "./FlexRow"

const sortItems = (items) =>{
  return items.sort((a, b)=>{return new Date(b.updatedAt) - new Date(a.updatedAt)})
}

function ItemsHolder({items, search, tagFilter}) {
  const [displayItems, setDisplayItems] = useState(sortItems(items))

  
  useEffect(()=>{
    var searchTerm = search.slice(0, search.length)
    var filteredList;
    filteredList = items.filter(function(book){
      // ... Code to convert book object to a string ...
      // Return book objects where a match is found
      // console.log(book)
      return fit(book, tagFilter);
    });
    setDisplayItems(filteredList)
    console.log(filteredList)
    if (searchTerm.trim() == ""){
      return
    }
    var tokens = searchTerm
           .toLowerCase()
           .split(' ')
           .filter(function(token){
              return token.trim() !== '';
           });
    console.log(tokens)
    var searchTermRegex = new RegExp(tokens.join(`|`), `gim`)
    console.log(searchTermRegex)
    filteredList = items.filter(function(book){
      // ... Code to convert book object to a string ...
      // Return book objects where a match is found
      // console.log(book)
      return book.title.match(searchTermRegex) && fit(book, tagFilter);
    });
    console.log(`tagfilter: ${tagFilter}`)
    console.log(tagFilter)
    // console.log(filteredList)
    setDisplayItems(filteredList)
  }, [search, tagFilter])

  const fit = (book, tagFilter) =>{
    if(tagFilter.trim()===""){
      return true
    }

    if(tagFilter.toLowerCase() === "all"){
      return true
    }

    if(book.tags.find((e)=>e.toLowerCase()==tagFilter.toLowerCase())){
      return true
    }
    return false
  }

    const threes = (list) =>{
        const newList = []
        // console.log("threes !")
        let three =  []
        for(let i=0; i<list.length; i++){
          three.push(list[i]);
        //   console.log(three)
          if(three.length==3){
            newList.push([...three]);
            three.splice(0, three.length)
          }
        }
      
        newList.push([...three])
        return newList
      }

    const figureOut = (e) =>{
        if(!e.items){
            return <NotesCard info={e}/>
        }else{
            return <TodoCard info={e}/>
        }
    }

    


    return (
        <div className="items-outer">
          <div>
            {threes(displayItems).map((el)=><div style={{display: "flex", maxWidth: "100%", flexWrap: "wrap"}} className="itemsholder-flex">{el.map(e=>figureOut(e))}</div>)}
            </div>
        </div>
    )
}

export default ItemsHolder
