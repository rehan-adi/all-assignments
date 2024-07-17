const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    done: Boolean,
    userId: String,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo
}