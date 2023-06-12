import React, {Component} from 'react'
import axios from 'axios'
class App extends Component{
  getStudentData = () => {
    axios.get().then(res => {

    }).catch(err => {

    })
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>获取数据</button>
      </div>
    )
  }
}

export default App;