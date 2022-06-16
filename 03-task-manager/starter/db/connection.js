const mongoose = require('mongoose');

const connectToDb = (url) =>{
    return mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true }).then(()=>console.log(`connected to the db successcully`)).catch(err=>console.log(err))
}

module.exports = connectToDb
