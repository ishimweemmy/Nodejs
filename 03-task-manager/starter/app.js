const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectToDb = require('./db/connection')
require('dotenv').config()
const port = process.env.PORT || 5000

app.use(express.json())

app.use('/api/v1/tasks', tasks)

const connectToDbAndThenServer = async() =>{
    await connectToDb(process.env.TASK_MANAGER_CONNECTION_STRING)
    app.listen(port, ()=>console.log('server is up and running'))
}

connectToDbAndThenServer()
