import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './header.js';
import Offres from './section-offres-a-ne-pas-manquer/offres-a-ne-pas-manquer.js';
import Sadia from './Sadia.js';
import Section from './section/bonsplans2.js';
import Header from './header/header.js';
import '../node_modules/bootstrap/grunt/bs-glyphicons-data-generator.js'

>>>>>>> c75771d5a7136d343f6dfe6c5a0b3c27bab5687f

class App extends Component {
  render() {
    return (
      <div className="body">
        <Header></Header>
        <Sadia></Sadia>
        <Section></Section>
        <Offres></Offres>
      </div>
    );
  }
}

export default App;
