import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './newsLetter.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NewsLetter from './newsLetter.js'

class App extends Component {
  render() {
    return (
      <div class="container">
        <NewsLetter></NewsLetter>
      </div>
    );
  }
}

export default App;
