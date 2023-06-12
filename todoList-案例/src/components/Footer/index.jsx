import React, { Component } from 'react'

export default class Footer extends Component {
  handleChange = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }
  // 清除已完成任务
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }
  render() {
    const { todos } = this.props
    const doneCount = todos.reduce((pre, item) => {
      if (item.done) return pre + 1
      return pre
    }, 0)
    const total = todos.length
    return (
      <div className='todo-footer'>
        <label>
          <input type='checkbox' checked = { doneCount === total && total !== 0 ? true: false } onChange={this.handleChange}></input>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className='btn btn-danger' onClick={this.handleClearAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
