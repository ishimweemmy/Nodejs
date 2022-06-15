const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.get('/hello', (req, res)=>{
    res.send('hello there')
})

app.listen(port, ()=>console.log(`server is up and running on port ${port} ...`))
