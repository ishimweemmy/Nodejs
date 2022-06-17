const Task = require('../models/task')
const asyncWrapper = require('../middlewares/asyncfunc')

const getTasks = asyncWrapper(async(req, res) =>{
    const tasks = await Task.find({})
    if(tasks.length  === 0) {
        return res.status(204).send({ success: true, message: 'not tasks found' })
    } 

    res.status(200).json({ success: true, tasks: tasks })
})

const createTask = asyncWrapper(async(req, res) =>{
        const task = await Task.create(req.body)

        if(!task) {
            const error = new Error('Not found')
            err.status = 404
            return next(error)
            return res.status(400).send({success: false, message: 'task creation failed'})
        }

        res.status(201).json({ success: true, task: task })
})

const getSingleTask = asyncWrapper(async(req, res) =>{
        const { id: taskId } = req.params

        const task = await Task.findOne({_id: taskId})

        if(!task) {
            return res.status(400).send({ success: true, message: 'task not found' })
        }

        res.status(200).json({ success: true, task: task})
  
})

const updateTask = asyncWrapper(async(req, res) =>{
        const { id: taskId } = req.params
        const task = await Task.findOneAndUpdate({_id: taskId }, req.body, {new: true, runValidators: true})

        if(!task) {
            return res.status(401).send({success: true, message: `sorry, task with the id ${taskId} was not found`})
        }
        res.status(200).json({success: true, task: task})
})

const deleteTask = asyncWrapper(async(req, res) =>{
        const { id: taskId } = req.params
        const task = await Task.findOneAndDelete({_id: taskId})
        
        if (!task) {
            return res.status(404).send({success: true, message: 'Task not found'})
        }
        res.status(200).json({success: true, message: 'Task deleted successfully'})
})

module.exports =  { getTasks, createTask, getSingleTask,updateTask, deleteTask }
