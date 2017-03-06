import React, { Component } from 'react';
import Img1 from '../../Photos-Darty/bloc_home.png';
import Img2 from '../../Photos-Darty/domaine_interieur_2.png';
import Img3 from '../../Photos-Darty/theme_bp_high_tech.png';
import Img4 from '../../Photos-Darty/theme_3_v2.png';

import './bonsplans2.css';

class Section extends Component {
  render() {
    return (
      <div className="Section container">

        <section className="bonsPlans">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="content">

                <div className="title">
                  <h4>petit électro</h4>
                  <h4 className="title-promo">100% bons plans !</h4>
                </div>

                <div className="img-container">
                  <a href="#"><img src={Img1} alt=""/></a>
                </div>

                <ul className="link">
                  <li><a href="#">Petit Electroménager ! </a><span> >></span></li>
                  <li><a href="#">Entretien et Soin de la maison ! </a><span> >></span></li>
                  <li><a href="#">Beauté, Santé, Forme ! </a><span> >></span></li>
                  <li><a href="#">Click & Collect : 5€ de remise! </a><span> >></span></li>
                </ul>

              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="content">

                <div className="title">
                  <h4>maison, déco, jardin</h4>
                  <h4 className="title-promo">bons plans</h4>
                </div>

                <div className="img-container">
                  <a href="#"><img src={Img2} alt=""/></a>
                </div>

                <ul className="link">
                  <li><a>Maison </a><span> >></span></li>
                  <li><a>Jardin </a><span> >></span></li>
                  <li><a>Animalerie </a><span> >></span></li>
                  <li><a>Sport & loisir </a><span> >></span></li>
                </ul>

              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="content">

                <div className="title">
                  <h4>high-tech</h4>
                  <h4 className="title-promo">100% bons plans</h4>
                  </div>

                  <div className="img-container">
                    <a href="#"><img src={Img3} alt=""/></a>
                  </div>

                  <ul className="link">
                    <li><a>PC portable </a><span> >></span></li>
                    <li><a>Smartphone </a><span> >></span></li>
                    <li><a>Téléviseur LED & OLED </a><span> >></span></li>
                    <li><a>Home Cinéma </a><span> >></span></li>
                  </ul>

              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="content">

                <div className="title">
                  <h4>gros electro</h4>
                  <h4 className="title-promo">100% bons plans</h4>
                </div>

                <div className="img-container">
                  <a href="#"><img src={Img4} alt=""/></a>
                </div>

                <ul className="link">
                  <li><a>Sèche linge </a><span> >></span></li>
                  <li><a>Froid : réfrigérateur congélateur </a><span> >></span></li>
                  <li><a>#Garantie offerte Electrolux </a><span> >></span></li>
                  <li><a>#CODES PROMO </a><span> >></span></li>
                </ul>

              </div>
            </div>
          </div>
        </section>

        <section className="offre">
          <div className="row">
            <div className="offre-title col-xs-11 col-sm-10 col-md-6">
              <h2>des offres à ne pas manquer !</h2>
            </div>


            <div className="offre-container-produit col-xs-12">
              <div className="offre-carrousel-produit">
                <div className="col-xs-12 col-sm-6 col-md-3">
                  test
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                  test
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                  test
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                  test
                </div>
              </div>
            </div>

          </div>

        </section>
      </div>
    );
  }
}

export default Section;
