import logo from './logo.svg';
import React, {Component} from 'react'
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welbcome';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  render() {
    return (
      <div>
        <Hello></Hello>
        <Welcome></Welcome>
      </div>
    )
  }
}

export default App;
