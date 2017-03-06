import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import Footer from './footer.js';
=======
import Offres from './section-offres-a-ne-pas-manquer/offres-a-ne-pas-manquer.js';
>>>>>>> 823f6841c84d5d9d4dc6a3400faf7d9f30b3ed77
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
<<<<<<< HEAD
        <Footer></Footer>
=======
        <Section></Section>
        <Offres></Offres>
>>>>>>> 823f6841c84d5d9d4dc6a3400faf7d9f30b3ed77
      </div>
    );
  }
}

export default App;
