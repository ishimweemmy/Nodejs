const Task = require('../models/task')

const getTasks = async(req, res)=>{
    try{
        const allTasks = await Task.find({})
        res.status(200).json(allTasks)
    } catch(err) {
         res.status(500).json(err)
    }
}

const createTask = async(req, res) =>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({ success: true, data: task})
    } catch(err){
        res.status(500).json({ msg: err })
    }
}

const getSingleTask = async(req, res) =>{
    try{
        const { id: taskId } = req.params
        const singleTask = await Task.findOne({_id: taskId})

        if(!singleTask) {
            return res.status(404).send(`No task with the id ${taskId} found`)
        }
        res.status(200).json(singleTask)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const updateTask = (req, res) =>{
    res.send(req.params)
}

const deleteTask = async(req, res) =>{
    try{
        const { id: taskId } = req.params
        const task = await Task.findOneAndDelete({ _id: taskId })

        console.log(task)
        if(!task) {
            return res.status(404).send(`No task with the id ${taskId} found`)
        }

        res.status(200).json({ success: true, msg: `task has been removed successfully` })
    } catch (err) {
        res.status(500).json({ success: false, msg: err})
    }
}

module.exports =  { getTasks, createTask, getSingleTask,updateTask, deleteTask }
