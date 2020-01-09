const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    isComplete : false,
    unique: true
  }
},
    {
        versionKey: false
    }
);

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;