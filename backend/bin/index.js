#!/usr/bin/env node
import {addTask,removeTask,updateTask,listAll,listDone,listInProgress,markDone,markInProgress} from "./task.js"
const args = process.argv
console.log(args)

/* 
   All Possible commands
    addTask <description>
    removeTask <id>
    update <id> <description>
    mark done <id>
    mark inprogress <id>
    list 
    list done
    list inprogress
*/

if (args[2] === "addTask"){
    const description = args[3]
    if(description){
        addTask(args[3])
    }else{
        console.log("provide Description")
    }
}
if (args[2] === "removeTask"){
    const id = args[3]
    if(id){
        removeTask(id)
    }else{
        console.log("provide id")
    }
}
if (args[2] === "updateTask"){
    const id = args[3]
    const description = args[4]
    if(id && description){
        updateTask(id,description)
    }else{
        console.log("provide Description")
    }
}
if (args[2] === "mark"){
    const status = args[3]
    const id = args[4]
    if(status === "done" && id){
        markDone(id)
    }else if(status === "inprogress" && id){
        markInProgress(id)
    }else{
        console.log("provide task id")
    }
}

if (args[2] === "list"){
    const status = args[3]
    if(status ==="done"){
        listDone()
    }else if(status === "inprogress"){
        listInProgress()
    }else{
        listAll()
    }
}

