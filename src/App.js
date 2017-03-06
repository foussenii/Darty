import React, { Component } from 'react';
import Section from './section/bonsplans2.js';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './header.js';
import Offres from './section-offres-a-ne-pas-manquer/offres-a-ne-pas-manquer.js';

class App extends Component {
  render() {
    return (
      <div className="body">
        <Header></Header>
        <Section></Section>
        <Offres></Offres>
      </div>
    );
  }
}

export default App;
