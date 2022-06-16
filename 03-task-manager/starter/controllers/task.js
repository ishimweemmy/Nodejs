const tasks = ''

const getTasks = (req, res)=>{
    res.send('on the tasks page')
}

const createTask = (req, res) =>{
    res.send(req.body)
}

const getSingleTask = (req, res) =>{
    res.send({id: req.params.id})
}

const updateTask = (req, res) =>{
    res.send(req.params)
}

const deleteTask = (req, res) =>{
    res.send(req.params)
}

module.exports =  { getTasks, createTask, getSingleTask, updateTask, deleteTask }
