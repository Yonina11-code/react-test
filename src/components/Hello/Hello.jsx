import react, { Component } from 'react';
import './Hello.css'
export default class Hello extends Component {
  render () {
    return (
      <div>
        <h2 className='title'>
          hello, world
        </h2>
      </div>
    )
  }
}