const { people } = require('../data')

const getPeople =  (req, res)=>{
    return res.status(200).json(people)
}

const getPersonById = (req, res)=>{
    const { id } = req.params
    const person = people.find(person=>person.id === Number(id))
    return person ? res.status(200).send(`welcome ${person.name}`) : res.status(400).send({success: true, message: 'please input the name'})
}

const postPerson = (req, res)=>{
    const { name } = req.body

    if(name) {
        const newUser = {
            name: name,
            id: people.length + 1
        }

        const newPeople = [...people, newUser]
        
        return res.status(201).send({success: true, data: newPeople})
    }
}

const updatePerson = (req, res) =>{
    const { name } = req.body
    const { id } = req.params

    const newPeople = name && people.map(person=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    return newPeople ? res.status(200).send({ success: true, data: newPeople}) : res.status(400).send(`no user with the id ${id} found`)
}

const deletePerson = (req, res) =>{
    const { id } =  req.params

    const newPeople = people.filter(person=>person.id != Number(id))
    return id ? res.status(200).json({success: true, data: newPeople}) : res.status(401).send(`person with id ${id} is not found`)

}

module.exports = { getPeople, getPersonById, postPerson, updatePerson, deletePerson }
