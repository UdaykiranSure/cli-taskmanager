# CLI - Taskmanger

A backed based app that helps to manage your taks
It is a CLI based application
```bash
// to add a new task
tskm addtask <description>
// Returns the task id

// Updating a task description:
tskm update <taskId> <description> 

// Updating a task status: {done, inprogress}
tskm mark <status> <taksId>

//Listing tasks
tskm list all
// Listing based on status
tskm list done
tskm list inprogress

