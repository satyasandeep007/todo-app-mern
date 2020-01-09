const Todo = require("../models/Todo");

const todos = (req, res) => {
    Todo.create({todo:req.body.todo}).then((todos) => {
      res.json(todos)
    }).catch((error) => {
        res.send(error)
    })
}

const gettodos = (req, res) => {
  Todo.find()
    .then((response) => {
      res.json(response)
    }).catch((error) => {
      res.send(error)
    });
}

module.exports = {todos, gettodos};