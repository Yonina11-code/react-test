import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state= {
    mouse: false
  }
  handleMouse = (flag) => {
    return () => {
      console.log(flag)
      this.setState({
        mouse: flag
      })
    }
  }
  handleCheck = (id) => {
    return (event) => {
      console.log(id, event.target.checked)
      this.props.updateTodo({
        id: id,
        done: event.target.checked
      })
    }
  }
  handleDelete = (id) => {
    console.log(this.props)
    this.props.deleteTodo(id)
  }
  render() {
    const { name, done, id } = this.props
    const { mouse } = this.state
    return (
      <li style={{backgroundColor: mouse ? '#ddd': 'white' }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type='checkbox' checked={done} onChange={this.handleCheck(id)}></input>
          <span>{name}</span>
        </label>
        <button className='btn btn-danger' style={{display: mouse ? 'block': 'none'}} onClick={() => this.handleDelete(id)}>删除</button>
      </li>
    )
  }
}
