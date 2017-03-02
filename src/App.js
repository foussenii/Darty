import React, { Component } from 'react';
import logo from './logo.svg';
import Section from './section/bonsplans2.js';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './header.js'

class App extends Component {
  render() {
    return (
      <div className="body">
        <Header></Header>
        <Section></Section>
      </div>
    );
  }
}

export default App;
