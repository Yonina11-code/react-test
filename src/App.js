import logo from './logo.svg';
import React, {Component} from 'react'
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

class App extends Component{
  state = {
    todos: [
      {
        id: '001',
        name: '吃饭',
        done: true
      },
      {
        id: '002',
        name: '睡觉',
        done: true
      },
      {
        id: '003',
        name: '打代码',
        done: false
      }
    ]
  }
  addTodos = (value) => {
    console.log(value)
    // 追加一个todo
    const { todos } = this.state
    const newTodos = [value, ...todos]
    this.setState({
      todos: newTodos
    })
  }
  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj
    })
    this.setState({
      todos: newTodos
    })
  }
  deleteTodo = (id) => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter(item => item.id !== id)
    })
  }
  checkAllTodo = (check) => {
    const { todos } = this.state
    let newTodos = todos.map((todoObj) => {
      return { ...todoObj, done: check }
    })
    this.setState({ todos: newTodos })
  }
  clearAllDone = () => {
    const { todos } = this.state
    let newTodos = todos.filter((todoObj) => !todoObj.done)
    this.setState({
      todos: newTodos
    })
  }
  render() {
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodos={this.addTodos}></Header>
          <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
          <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}

export default App;
