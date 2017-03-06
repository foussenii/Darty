import React, { Component } from 'react';
import './App.css';
import './newsLetter.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NewsLetter from './newsLetter.js';
import Footer from './footer.js';
import Offres from './section-offres-a-ne-pas-manquer/offres-a-ne-pas-manquer.js';
import Sadia from './Sadia.js';
import Section from './section/bonsplans2.js';
import Header from './header/header.js';
import '../node_modules/bootstrap/grunt/bs-glyphicons-data-generator.js'

class App extends Component {
  render() {
    return (

      <div className="body">
        <Header></Header>
        <Sadia></Sadia>
        <Section></Section>
        <Offres></Offres>
        <NewsLetter></NewsLetter>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
