import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

export default class Header extends Component {
  static propTypes = {
    addTodos: PropTypes.func.isRequired
  }
  handleKeyUp = (event) => {
    const { keyCode, target } = event
    console.log(!target.value.trim())
    if (keyCode !== 13 || !target.value.trim()) return //
    // 13是回车
    console.log(target.value, keyCode)
    this.props.addTodos({
      id: nanoid(),
      name: target.value,
      done: false
    })
    target.value = ''
  }
  render() {
    return (
      <div className='todo-header'>
        <input type="text" placeholder="请输入" onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }
}
