import React, { Component } from 'react';
import logoDarty from '../Photos-Darty/sprite_darty_logo.png';
import iconLivraison from '../Photos-Darty/icon_h_service_livraison.png';
import iconGarantie from '../Photos-Darty/icon_h_service_garantie.png';
import iconCC from '../Photos-Darty/icon_h_service_cc.png';
import iconSurdite from '../Photos-Darty/icon_h_surdite.png';
import './header.css';
import spriteIcon from '../Photos-Darty/darty_sprite-s829abe3d98.png';
const spriteStyle = {
  background: 'url('+ spriteIcon +') no-repeat;'
}

class Header extends Component {
  render() {
    return (
      <div className="container center">
        <div className="container">
          <div className="logoBox">
            <img className="logoDarty" src={logoDarty} alt="logo-darty"/>
          </div>
          <div className="top-header col-xs-push-2 col-xs-10">
            <div className="top-header-info">
              <img className="" src={iconLivraison} alt=""/>
              <p>Livraison offerte</p>
            </div>
            <div className="top-header-info">
              <img className="" src={iconGarantie} alt=""/>
              <p>Garantie 2 ans par le SAV Darty</p>
            </div>
            <div className="top-header-info">
              <img className="" src={iconCC} alt=""/>
              <p>Click & Collect® 1h</p>
            </div>
            <div className="top-header-info">
              <img className="" src={iconSurdite} alt=""/>
              <p>Accessible sourds et malentendants</p>
            </div>
          </div>
          <div className="middle-header  col-xs-12">
            <div className="col-xs-7 col-xs-push-2 left-middle-header">
              <div className="col-xs-9 liens-annexes">
                <a>Créez votre cuisine</a>
                <a>Darty Pro</a>
                <a>Déstockage</a>
                <a>Communauté d’entraide</a>
                <a>Service photo</a>
              </div>
              <div className="col-xs-12 recherche">
                <input className="col-xs-10" value=""></input>
              </div>
              <div className="col-xs-12 click-and-collect">
                <a href="#">CLICK & COLLECT : 5€ DE REMISE IMMÉDIATE !</a>
                </div>
            </div>
            <div className="col-xs-4 col-xs-push-1 right-middle-header">
              <div className="right-middle-header-link">
                <span className="icon-connecter icon-middle-header-link" style={spriteStyle}></span>
                <p>SE CONNECTER</p>
              </div>
              <div className="right-middle-header-link">
                <span className="icon-listes icon-middle-header-link" style={spriteStyle}></span>
                <p>MES LISTES</p>
              </div>
              <div className="right-middle-header-link">
                <span className="icon-panier icon-middle-header-link" style={spriteStyle}></span>
                <p>PANIER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
