import "./App.css";
import Todoitem from "./components/Todoitem";
import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todoList: [],
    };
  }

  inputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  formSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.length > 0)
      this.setState({
        input: "",
        todoList: [...this.state.todoList, this.state.input],
      });
  };

  updateItem = (newItem, index) => {
    // created a copy of my todoList
    let arr = this.state.todoList;

    // update the element
    arr.splice(index, 1, newItem);

    // change the state
    this.setState({ todoList: arr });
  };

  deleteItem = (index) => {
    let arr = this.state.todoList;

    arr.splice(index, 1);
    this.setState({ todoList: arr });
  };
  componentDidUpdate() {
    console.log(this.state);
  }
  render() {
    return (
      <>
        <h1>TODO LIST</h1>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            onChange={this.inputChange}
            value={this.state.input}
          />
          <button>A D D</button>
        </form>
        <p>My Input : {this.state.input}</p>

        <div className="todoList">
          <h2>⬇️🌟 L I S T 🌠⬇️</h2>

          {this.state.todoList.map((e, i) => {
            return (
              <Todoitem
                e={e}
                i={i}
                deleteItem={this.deleteItem}
                updateItem={this.updateItem}
              />
            );
          })}
        </div>
      </>
    );
  }
}
