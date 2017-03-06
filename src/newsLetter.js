import React, { Component } from 'react';
import './newsLetter.css';
import image from '../Photos-Darty/bosch_waw28750ff_n1603214213050A_163744492.png';
import image2 from '../Photos-Darty/electrolux_ewf1697cdw_ultracare_n1606084238516A_160750208.png';
import image3 from '../Photos-Darty/dyson_supersonic_n1610284269594B_092317169.png';
import image4 from '../Photos-Darty/babyliss_brosse_h_argan_rech_n1411255029031A_132553054.png';
class NewsLetter extends Component {
  render() {
    return (
    <div className="container-fluid">
      <div className="container-fluid-one">
        <div className="row">
        <div className="col-xs-12 col-sm-9 col-md-6 letterButton-Top" >
          <h4 className="text-center">RECEVEZ L’ACTU ET LES BONS PLANS DARTY</h4>
          <p>Les offres et promo avant tout le monde. Des conseils et idées pour toutes vos envies</p>
        </div>
          <div className="col-xs-12 col-sm-9 col-md-6 letterButton">
               <input type="text" class="form-control" placeholder="votre adresse mail"/>
               <button type="submit" class="btnLetter">JE M'ABONNE</button>
          </div>
        </div>
        </div>

          <div className="container-fluid-two">
            <div className="row">

            <div className="col-xs-12 col-sm-9 col-md-6 container-all-left">
            <div className="container-all-one">
              <div className="imageLetter1">
                <div className="conseil-tuto"><span>Conseil & tuto</span></div>
                <h2>LES LAVE-LINGE QUI PRENNENT SOIN DE VOTRE PEAU</h2>
              </div>

              <div className="imageMachine">
                <img src={image} alt=""/>
                <img src={image2} alt=""/>
              </div>
            <div className="content-valise-first">
            <div className="content-valise">
              <div className="content-Letter">
                <a href=""><span>Live line hublot</span></a><br/>
                <a href=""><strong>BOSCH WAW 28750FF ACTIVE...</strong></a>

                <div className="block_apercuR">

                </div>

                <span className="darty_pris"><strong>249,</strong>
                    <span className="darty_cents"><strong><sup>00€*</sup></strong>
                  </span>
                </span>
              </div>

              <div className="content-Letter">
                <a href=""><span>Live line hublot</span></a><br/>
                <a href=""><strong>ELECTROLUX EWF1697CDW U...</strong></a>
                {/* <img src="Photos-Darty/sprite_add_to_basket.png" alt=""/> */}
                <div className="block_apercu">
                  <div className="rating-left">
                    <span className="rating">
                      <input type="radio" id="rating5" name="rating" value="5" />
                      <label htmlFor="rating5">5</label>
                      <input type="radio" id="rating4" name="rating" value="4" />
                      <label htmlFor="rating4">4</label>
                      <input type="radio" id="rating3" name="rating" value="3"/>
                      <label htmlFor="rating3">3</label>
                      <input type="radio" id="rating2" name="rating" value="2"/>
                      <label htmlFor="rating2">2</label>
                      <input type="radio" id="rating1" name="rating" value="1" />
                      <label htmlFor="rating1">1</label>
                    </span>
                  </div>
                  <span className="rating-right">4/5</span>
                </div>
                <span className="darty_pris"><strong>199,</strong>
                  <span className="darty_cents"><strong><sup>99€*</sup></strong></span>
                </span>
              </div>
              </div>
              <div className="lastspan">
                <a href="#"><strong>Bien choisir son épilateur à lumière pulsée >></strong></a>
              </div>
            </div>
          </div>
          </div>


        <div className="col-xs-12 col-sm-9 col-md-6 container-all-right">
          <div className="container-all-two">
            <div className="imageLetter2">
              <div className="conseil-tuto"><span>C'est dans l'air</span></div>
              <h2>SUPERSONIQUE: LE SÈCHE-CHEVEUX INNOVANT DE DYSON</h2>
            </div>

            <div className="imageMachine">
              <img src={image3} alt=""/>
              <img src={image4} alt=""/>
            </div>

        <div className="content-valise-two">
        <div className="content-valise">
        <div className="content-Letter">
              <a href=""><span>Live line hublot</span></a><br/>
              <a href=""><strong>BOSCH WAW 28750FF ACTIVE...</strong></a>

              <div className="block_apercu">
                <div className="rating-left">
                  <span className="rating">
                    <input type="radio" id="rating5" name="rating" value="5" />
                    <label htmlFor="rating5">5</label>
                    <input type="radio" id="rating4" name="rating" value="4" />
                    <label htmlFor="rating4">4</label>
                    <input type="radio" id="rating3" name="rating" value="3" />
                    <label htmlFor="rating3">3</label>
                    <input type="radio" id="rating2" name="rating" value="2"/>
                    <label htmlFor="rating2">2</label>
                    <input type="radio" id="rating1" name="rating" value="1" />
                    <label htmlFor="rating1">1</label>
                  </span>
                </div>

                <div className="rating-right">
                <span >3/5</span>
                <div className="darty_pris_discount">
                  <span ><strong>299,</strong>
                    <span className="darty_cents"><strong><sup>99€*</sup></strong></span>
                  </span>
                </div>
                </div>
              </div>

              <div className="darty_pris">
                <span ><strong>279,</strong>
                  <span className="darty_cents"><strong><sup>99€*</sup></strong></span>
                </span>
              </div>
            </div>
            <div className="content-Letter">
              <a href=""><span>Live line hublot</span></a><br/>
              <a href=""><strong>ELECTROLUX EWF1697CDW U...</strong></a>

              <div className="block_apercu">
                <div className="rating-left">
                  <span className="rating">
                    <input type="radio" id="rating5" name="rating" value="5" />
                    <label htmlFor="rating5">5</label>
                    <input type="radio" id="rating4" name="rating" value="4" checked/>
                    <label htmlFor="rating4">4</label>
                    <input type="radio" id="rating3" name="rating" value="3" />
                    <label htmlFor="rating3">3</label>
                    <input type="radio" id="rating2" name="rating" value="2"/>
                    <label htmlFor="rating2">2</label>
                    <input type="radio" id="rating1" name="rating" value="1" />
                    <label htmlFor="rating1">1</label>
                  </span>
                </div>
                <span className="rating-right">4/5</span>
              </div>

              <div className="darty_pris">
                <span ><strong>149,</strong>
                  <span className="darty_cents"><strong><sup>99€*</sup></strong></span>
                </span>
              </div>
            </div>
          </div>
          <div className="lastspan">
            <a href="#"><strong>Toutes les nouveautés du Mobile World Congress 2017 >></strong></a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="finalparagraphe">
    <p>*Prix éco-participation DEEE inclus (montant affiché sur chaque fiche produit).</p>
    <p>*Prix éco-mobilier inclus (montant affiché sur chaque fiche produit).</p>
  </div>

</div>

    );
  }
}

export default NewsLetter;
