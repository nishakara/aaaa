import React,  {Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className= "app-header">
          <img src={logo} className = "App-logo" alt="logo"/>
          <h2>React Form</h2>
        </div>
      </div>
    )
  }
}

export default App;