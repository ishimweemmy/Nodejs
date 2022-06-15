const express = require('express')
const router = express.Router()

router.post('/', (req, res)=>{
    const { name } = req.body
    return name? res.status(201).send(`welcome ${name}`) : res.status(401).send({ success: true, message: `username is empty`})
})

module.exports = router