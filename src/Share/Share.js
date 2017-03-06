import React, { Component } from 'react';
import 'share.css';
import img1 from "./img/footer_logo";
import img2 from "./img/logo1.png";
import img3 from "./img/logo2.png";
import img4 from "./img/logo3.png";
import img5 from "./img/logo4.png";
import img6 from "./img/logo5.png";

class Share extends Component {
  render() {
    return (

    <div className="share">
          <div className="titre">
              <h1>PAIEMENT SÉCURISÉ</h1>
          </div>
          <div className="logo">
              <img src={img1} alt=""/>
          </div>
          <div className="plus">
              <a href="http://www.darty.com/achat/informations/paiement_securise.html"><strong><p>En savoir plus</p></strong></a>

          </div>

          <div className="list">
              <div className="info1">
                  <img src={img2}alt=""/>
                  <p>Livraison Offerte</p>

              </div>
              <div className="info2">
                  <img className="image" src={img3} alt=""/>
                  <p>Garantie 2 ans <br> par le SAV Darty</p>

              </div>
              <div className="info3">
                  <img className="image" src={img4} alt=""/>
                  <p>Retour sous 15 jours</p>
              </div>
              <div className="info4">
                  <img className="image" src={img5} alt=""/>
                  <p>Click /& Collect® 1/h</p>
              </div>
              <div className="info5">
                  <img className="image" src={img6} alt=""/>
                  <p>Assistance téléphonique <br/>7 j/7 et 24 h/24 au <br/> 0892 01 10 10/ (0,35€/min)</p>
              </div>
          </div>

      </div>
    );
  }
}
export default Share;
