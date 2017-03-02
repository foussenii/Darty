import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './header.js'

class App extends Component {
  render() {
    return (
      <div className="body">
        <Header></Header>
      </div>
    );
  }
}

export default App;
