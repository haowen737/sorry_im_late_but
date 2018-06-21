import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        app
        <Link to="/fancy-pick">fancy-pick</Link>
      </div>
    );
  }
}

export default App;
