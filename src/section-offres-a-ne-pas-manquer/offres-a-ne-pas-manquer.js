import React, { Component } from 'react';
import './offres-a-ne-pas-manquer.css';
import SimpleSlider from './carousel.js';

class Offres extends Component {


  // afficherAjoutPanier = event => {
  // document.querySelector(".btnAjoutPanier").style.display = "block";
  // document.querySelector(".offre-container-prix").style.visibility = "hidden";
  // };
  //
  // cacherAjoutPanier = event => {
  //   document.querySelector(".btnAjoutPanier").style.display = "none";
  //   document.querySelector(".offre-container-prix").style.visibility = "visible";
  // };


  render() {
    return (
      <div className="Offres container">

        <section className="offre">
          <div className="row">
            <div className="offre-title col-xs-11 col-sm-10 col-md-8">
              <h2>des offres à ne pas manquer !</h2>
            </div>

            <div className="offre-container col-xs-12">
              <div className="offre-carrousel">
                <SimpleSlider />
              </div>
            </div>

          </div>

        </section>
      </div>
    );
  }
}

export default Offres;
