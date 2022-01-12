const iterateObject = (object) =>{
    console.log("\n iterating \n")
    for(let i in object){
      console.log(`i: ${i} -> ${object[i]}`)
    }
    console.log("\n")
  }

module.exports = iterateObject