import  fs  from "fs";
import path from "path";

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));
const tasksPath = path.join(__dirname,"tasks.json")

const loadTasks = ()=>{
    console.log(1,tasksPath)
    try{
    const dataBuffer = fs.readFileSync(tasksPath)
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)}
    catch(e){
        return []
    }
}
const saveTask = (tasks)=>{
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(tasksPath,dataJSON)
}

const addTask = (description) =>{
    const tasks = loadTasks()
    const newTask = {
        id: tasks.length,
        description,
        timeCreated: new Date().toISOString(),
        timeUpdated: new Date().toISOString(),
        status: "todo",
    }
    tasks.push(newTask)
    saveTask(tasks)
    console.log("New task added into todo, ID: ",newTask.id)
}

const updateTask = (id,description) =>{
    const tasks = loadTasks()
    const task = tasks.find((t) => t.id === id);
    if (task){
        task.description  = description
        task.timeUpdated = new Date().toISOString()
        console.log("Taks updated")
        saveTask(tasks)
    }
    else{
        console.log("Task not found")
    }
}

const markDone = (id)=>{
    const tasks = loadTasks()
    const task = tasks.find(t => t.id == id)
    if(task){
        task.status = "Done"
        task.timeUpdated = new Date().toISOString()
        console.log("Task ", id, " marked as done")
        saveTask(tasks)
    }
    else{
        console.log("Task not found")
    }
}

const markInProgress = (id) =>{
    const tasks = loadTasks()
    console.log(tasks)
    const task = tasks.find((t) => t.id == id)
    console.log(task)
    if(task != null){
        task.status = "In Progress"
        task.timeUpdated = new Date().toISOString()
        console.log("Task ", id, " marked as InProgress")
        saveTask(tasks)
    }
    else{
        console.log("Task not found")
    }
}

const removeTask = (id) =>{
    const tasks = loadTasks()
    const taskIndex = tasks.findIndex(t => t.id === id)
    if(taskIndex !== -1){
        tasks.splice(taskIndex)  
        saveTask(tasks)   
    }

}
const listAll = ()=>{
    const tasks = loadTasks()
    if(tasks.length === 0){
        console.log("No taks available")
    }else{
        tasks.forEach(task => {
            console.log(`${task.id}.${task.description} -- ${task.status}`)
            console.log(` created: ${task.timeCreated} updated: ${task.timeUpdated}  `)
        });
    }
}

const listDone = () =>{
    const tasks = loadTasks().filter((task)=> task.status === "Done")
    if(tasks.length === 0){
        console.log("No taks available")
    }else{
        tasks.forEach(task => {
            console.log(`${task.id}.${task.description} -- ${task.status}`)
            console.log(` created: ${task.timeCreated} updated: ${task.timeUpdated}  `)
        });
    }
}

const listInProgress = ()=>{
    const tasks = loadTasks().filter(task => task.status === "In Progress")
    if(tasks.length === 0){
        console.log("No taks available")
    }else{
        tasks.forEach(task => {
            console.log(`${task.id}.${task.description} -- ${task.status}`)
            console.log(` created: ${task.timeCreated} updated: ${task.timeUpdated}  `)
        });
    }
}

export {addTask,removeTask,updateTask,listAll,listDone,listInProgress,markDone,markInProgress}