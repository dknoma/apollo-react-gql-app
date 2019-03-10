import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ChannelsList = () =>
  (<ul>
    <li>Channel 1</li>
    <li>Channel 2</li>
 </ul> )

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Apollo testing facility.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ChannelsList />
      </div>
    );
  }
}

export default App;
