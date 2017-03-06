import React, { Component } from 'react';
import logoDarty from '../../Photos-Darty/sprite_darty_logo.png';
import iconLivraison from '../../Photos-Darty/icon_h_service_livraison.png';
import iconGarantie from '../../Photos-Darty/icon_h_service_garantie.png';
import iconCC from '../../Photos-Darty/icon_h_service_cc.png';
import iconSurdite from '../../Photos-Darty/icon_h_surdite.png';
import './header.css';
// import '../../node_modules/font-awesome/css/font-awesome.css';


class Header extends Component {
  constructor(props) {
   super(props);
   this.state = { isMouseOver: false };
 }
  onMouseOverHandler() {
    this.setState({isMouseOver: true});
  }
  onMouseOutHandler() {
    this.setState({isMouseOver: false});
  }

  render() {
    return (
      <div className="center" onClick={(e) => this.onMouseOutHandler(e)}>
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
                <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                <p>SE CONNECTER</p>
              </div>
              <div className="right-middle-header-link">
                <i className="fa fa-heart fa-2x" aria-hidden="true"></i>
                <p>MES LISTES</p>
              </div>
              <div className="right-middle-header-link">
                <i className="fa fa-shopping-bag fa-2x" aria-hidden="true"></i>
                <p>PANIER</p>
              </div>
            </div>
          </div>
          <div className="menu-header">
            <div className="item-menu-header rayons" onMouseOver={(e) => this.onMouseOverHandler(e)}>
              <a href="#">TOUS NOS RAYONS</a>
            </div>
            <div className="item-menu-header moment">
              <a href="#">EN CE MOMENT</a>
            </div>
            <div className="item-menu-header hiver">
              <a href="#">UN HIVER COSY</a>
            </div>
            <div className="item-menu-header cuisine">
              <a href="#">CUISINE</a>
            </div>
            <div className="item-menu-header magasins">
              <a href="#">MAGASINS</a>
            </div>
            <div className="item-menu-header services">
              <a href="#">SERVICES</a>
            </div>
            <div className="item-menu-header conseils">
              <a href="#">CONSEILS</a>
            </div>
          </div>
          <div className="under-menu"  style={{display: (this.state.isMouseOver)? 'flex': 'none'} }>
            <div className="under-menu-lv1-box">
              <a href="#">GROS ÉLECTROMÉNAGER</a>
              <a href="#">PETIT ÉLECTROMÉNAGER CUISINE</a>
              <a href="#">ENTRETIEN ET SOIN DE LA MAISON</a>
              <a href="#">BEAUTÉ,FORME ET SANTÉ</a>
              <a href="#">PUÉRICULTURE</a>
              <a href="#">OBJETS CONNECTÉS</a>
              <a href="#">TÉLÉPHONIE ET MOBILITÉ</a>
              <a href="#">ESPACE APPLE</a>
              <a href="#">INFORMATIQUE ET TABLETTE</a>
              <a href="#">TV,TNT,PHOTO,CAMÉRA ET VIDÉO</a>
              <a href="#">AUDIO,HIFI ET HOME CINÉMA</a>
              <a href="#">MAISON,LITERIE,JARDIN,BRICO</a>
              <a href="#">JEUX,JOUETS,SPORTS, ET LOISIRS</a>
              <a href="#">BILLETERIE,CONCERTS,SPECTACLES</a>
              <a href="#">CUISINE ÉQUIPÉE</a>
              <a href="#">DESTOCKAGE EN MAGASINS</a>
            </div>
            <div className="under-menu-lv2-box">
              <ul className="under-menu-lvl2">
                <li><a href="#">#BONS PLANS SÉCHAGE</a></li>
                <li><a href="#">LAVAGE</a>
                  <ul>
                    <li><a href="#">Lave linge hublot</a></li>
                    <li><a href="#">Lave linge ouverture dessus</a></li>
                    <li><a href="#">Sèche linge</a></li>
                    <li><a href="#">Lave longe séchant</a></li>
                    <li><a href="#">Lave linge encastrable</a></li>
                    <li><a href="#">Lave linge séchant encastrable</a></li>
                    <li><a href="#">Lave linge semi pro</a></li>
                  </ul>
                </li>
                <li><a href="#">LAVE VAISSELLE</a>
                  <ul>
                    <li><a href="#">Lave vaisselle</a></li>
                    <li><a href="#">Lave vaisselle encastrable</a></li>
                    <li><a href="#">Lave vaisselle semi pro</a></li>
                    <li><a href="#">Lave-vaisselle table de cuisson</a></li>
                  </ul>
                </li>
                <li><a href="#">CUSISINIÈRE</a>
                  <ul>
                    <li><a href="#">Cuisinières</a></li>
                    <li><a href="#">Gazinières</a></li>
                    <li><a href="#">Piano de cuisson</a></li>
                  </ul>
                </li>
                <li><a href="#">MICRO-ONDES</a>
                  <ul>
                    <li><a href="#">Micro ondes combiné</a></li>
                    <li><a href="#">Micro ondes et gril</a></li>
                  </ul>
                </li>
                <li><a href="#">4X SANS FRAIS</a></li>
                <li><a href="#">#MIELDAYS</a></li>
                <li><a href="#">FROID</a>
                  <ul>
                    <li><a href="#">Réfrigirateur congélateur</a></li>
                    <li><a href="#">Réfrigirateur multi-portes</a></li>
                    <li><a href="#">Réfrigérateur américain</a></li>
                    <li><a href="#">Réfrigérateur</a></li>
                    <li><a href="#">Cave à vin</a></li>
                    <li><a href="#">Refrigerateur sous plan</a></li>
                    <li><a href="#">Congélateur</a></li>
                  </ul>
                </li>
                <li><a href="#">CLIMATISEUR</a></li>
                <li><a href="#">ACCESSOIRES</a>
                  <ul>
                    <li><a href="#">Freezcube</a></li>
                    <li><a href="#">Anti calcaire</a></li>
                    <li><a href="#">Thermomètre</a></li>
                    <li><a href="#">Patins anti-vibration</a></li>
                    <li><a href="#">Cloche Micro-ondes</a></li>
                    <li><a href="#">Cordon d'alimentation</a></li>
                    <li><a href="#">Tuyau de gaz</a></li>
                    <li><a href="#">Filtre de Hotte universel</a></li>
                    <li><a href="#">Filtre réfrigérateur américain</a></li>
                  </ul>
                </li>
                <li><a href="#">BARBECUE AMÉRICAIN</a></li>
                <li><a href="#">GARANTIE OFFERTE</a></li>
                <li><a href="#">ENCASTRABLE</a>
                  <ul>
                    <li><a href="#">Four</a></li>
                    <li><a href="#">Plaque de cuisson</a></li>
                    <li><a href="#">Micro-ondes encastrable</a></li>
                    <li><a href="#">Hotte</a></li>
                    <li><a href="#">Lave-vaisselle</a></li>
                    <li><a href="#">Lave-linge</a></li>
                    <li><a href="#">Réfrigérateur</a></li>
                    <li><a href="#">Réfrigérateur-congélateur</a></li>
                    <li><a href="#">Cave à vin</a></li>
                    <li><a href="#">Congélateur</a></li>
                    <li><a href="#">Machine à café</a></li>
                  </ul>
                </li>
                <li><a href="#">MARQUES</a>
                  <ul>
                    <li><a href="#">Thomson</a></li>
                    <li><a href="#">Whirlpool</a></li>
                    <li><a href="#">Electrolux</a></li>
                    <li><a href="#">Liebherr</a></li>
                    <li><a href="#">Bosch</a></li>
                    <li><a href="#">Samsung</a></li>
                    <li><a href="#">Siemens</a></li>
                    <li><a href="#">Beko</a></li>
                    <li><a href="#">Haier</a></li>
                    <li><a href="#">Miele</a></li>
                  </ul>
                </li>
                <li><a href="#">UN HIVER CHALEUREUX</a></li>
                <li><a href="#">CODE PROMO</a></li>
                <li><a href="#">IMBATTABLES</a></li>
                <li><a href="#">OFFRES SPÉCIALES</a></li>
                <li><a href="#">TOUS NOS CONSEILS</a></li>
                <li><a href="#">BOUTIQUES</a>
                  <ul>
                    <li><a href="#">Electrolux Comfortlift</a></li>
                    <li><a href="#">Whirlpool ExtraSpace</a></li>
                    <li><a href="#">Thomson Electromenager</a></li>
                  </ul>
                </li>
                <li><a href="#">SERVICES</a>
                  <ul>
                    <li><a href="#">Livraison offerte</a></li>
                    <li><a href="#">Livraison tôt ou tard</a></li>
                    <li><a href="#">Mise en service offerte</a></li>
                    <li><a href="#">Click & Collect</a></li>
                    <li><a href="#">TVA offerte sur la cuisine</a></li>
                  </ul>
                </li>
                <li><a href="#">GAMME PRO</a></li>
                <li><a href="#">PIÈCES DÉTACHÉES</a></li>
                <li><a href="#">PETITS TRAVAUX</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
