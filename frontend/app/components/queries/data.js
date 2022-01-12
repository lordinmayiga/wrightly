const handleData = (list) =>{
    for(let i=0; i<list.length; i++){
        if(list[i].error){
            console.log(list[i].error)
        }
    }
}

const noDupes = (list) =>{
    var newList = []
    for (let i=0; i<list.length; i++){
      if(!newList.includes(list[i].trim().toLowerCase())){
        console.log(list[i])
        newList.push(list[i].trim().toLowerCase())
      }
    }
    return newList
  }

  const allTags = (item) =>{
    console.log(item)
    let list = []
    for(let i=0; i<item.length; i++){
      list = [...list, ...item[i].tags]
    }
    return list
  }

  const handleDate = (info) =>{
    let date = new Date(info.updatedAt)
    let currDate = new Date()
    let diff = (currDate - date)/(1000)
    if(diff<=60){
      return "1 min ago"
    }
    if(diff<(60)){
      return `${Math.floor(diff/60)} mins ago`
    }if(diff<(60*60)){
      return `${Math.floor(diff/60)} hours ago`
    }
    if(diff<(60*60*24)){
      return `${Math.floor(diff/(60*24))} days ago`
    }
    if(diff<(60*60*24*30)){
      return `${Math.floor(diff/(60*24*30))} months ago`
    }
    return date.toDateString()
  
   }

export {handleData, noDupes, allTags, handleDate}