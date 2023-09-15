import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        todos: ['Learn React', 'Build a todo app', 'Master lifecycle methods'],
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos.length !== prevState.todos.length) {
      document.title = `Todos (${this.state.todos.length})`;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.todos !== nextState.todos;
  }

  componentWillUnmount() {
    document.title = 'React App';
  }

  componentWillReceiveProps(nextProps) {
    // Deprecated: This method is called when new props are received.
    console.log('Received new props:', nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    // Deprecated: This method is called just before the component updates.
    // In this example, we'll log the upcoming state changes for demonstration.
    console.log('Component will update. Next state:', nextState);
  }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = () => {
    if (this.state.newTodo.trim() !== '') {
      this.setState((prevState) => ({
        todos: [...prevState.todos, this.state.newTodo],
        newTodo: '',
      }));
    }
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add a new todo"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addTodo}>Add</button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
