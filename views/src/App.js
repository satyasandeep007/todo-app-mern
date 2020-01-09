import React from "react";
import _ from "lodash";
import Header from "./components/Header";
import Create from "./components/Create";
import Todolist from "./components/Todolist";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from 'axios';

export default class App extends React.Component {
  
  state = {
    toDos: ''
  };

  componentDidMount() {
    axios.get("http://localhost:5000/gettodos")
      .then(res => {
        const toDos = res.data;
        const todo = toDos.todo;
        console.log(todo);
        
        console.log(toDos);
        
        this.setState({ toDos  : toDos});
      })
  }

  createTask = task => {
    this.toDos.push({
      task: task,
      isComplete: false
    });

    this.setState({ toDos: this.toDos });
  };

  deleteTask = tasktodelete => {
    _.remove(this.toDos, todo => todo.task === tasktodelete);

    this.setState({ toDos: this.toDos });
  };

  editTask = tasktoedit => {
    
    this.setState({ toDos: this.toDos });
  }

  handleCheck = taskFinished => {
    const foundTodo = _.find(this.toDos, todo => todo.task === taskFinished);
    foundTodo.isComplete = !foundTodo.isComplete;
    this.setState({ toDos: this.toDos });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Todolist
          toDos={this.state.toDos}
          deleteTask={this.deleteTask}
          editTask = {this.editTask}
          handleCheck={this.handleCheck}
        />
        <Create createTask={this.createTask} todos={this.state.toDos} />
        <Footer />
      </div>
    );
  }
}
