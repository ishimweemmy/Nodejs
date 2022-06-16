const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const tasks = require('./routes/tasks')
const connectToDb = require('./db/connection')
require('dotenv').config()

app.use(express.json())
app.use('/api/v1/tasks', tasks)

const connectToDbAndThenToServer = async() =>{
    try{
        await connectToDb(process.env.TASK_MANAGER_CONNECTION_STRING)
        app.listen(port, ()=>console.log(`server is up and running on port ${port} ...`))
    }catch(err) {
        console.log(err)
    }
}

connectToDbAndThenToServer()
