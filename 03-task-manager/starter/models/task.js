const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: [20, 'provide less than the characters you provided']
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task', taskSchema)