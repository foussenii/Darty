var React = require('react');
var Slider = require('react-slick');
import './carousel.css';
import Img5 from '../../Photos-Darty/offre_withings_body.jpg';
import ImgOffre1 from '../../Photos-Darty/calor_fv9710c0_m1609274247051A_160000450.jpg';
import ImgOffre2 from '../../Photos-Darty/calor_fv3920c0_m1509304139615A_125649642.jpg';
import ImgOffre3 from '../../Photos-Darty/calor_gv7637c0_m1601184196783A_172543479.jpg';

var SimpleSlider = React.createClass({
    render: function() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (

            <Slider {...settings} className="container col-xs-12">

                <div>

                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <div className="offre-produit">

                            <div className="offre-sponsor">
                                <span>Produit sponsorisé</span>
                            </div>

                            <div className="offre-img">
                                <img src={Img5} alt="#"/>
                            </div>

                            <div className="offre-content">
                                <span className="offre-item-category">Pese personne</span>
                                <br></br>
                                <span className="offre-item-name">withings pese personne c...</span>
                            </div>

                            <div className="offre-prix">
                                99,
                                <span className="offre-prix-cents">99€*</span>
                            </div>

                            <div className="btnAjoutPanier">
                                <button className="btn btn-panier">
                                    <span className="glyphicon glyphicon-shopping-cart"></span>
                                    Ajouter au
                                    <span>panier</span>
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="col-xs-12 col-sm-6 col-md-3">

                        <div className="offre-produit">

                            <div className="offre-sponsor">
                                <span>Produit sponsorisé</span>
                            </div>

                            <div className="offre-img">
                                <img src={ImgOffre1} alt="#"/>
                            </div>

                            <div className="offre-content">
                                <span className="offre-item-category">Fer a repasser</span>
                                <br></br>
                                <span className="offre-item-name">calor fv3930c0</span>
                            </div>

                            <div className="offre-prix">
                                44,
                                <span className="offre-prix-cents">99€*</span>
                            </div>

                            <div className="btnAjoutPanier">
                                <button className="btn btn-panier">
                                    <span className="glyphicon glyphicon-shopping-cart"></span>
                                    Ajouter au
                                    <span>panier</span>
                                </button>
                            </div>

                        </div>
                    </div>


                    <div className="col-xs-12 col-sm-6 col-md-3">

                        <div className="offre-produit">

                            <div className="offre-sponsor">
                                <span>Produit sponsorisé</span>
                            </div>

                            <div className="offre-img">
                                <img src={ImgOffre2} alt="#"/>
                            </div>

                            <div className="offre-content">
                                <span className="offre-item-category">Fer a repasser</span>
                                <br></br>
                                <span className="offre-item-name">calor fv9960c0 freemove</span>
                            </div>

                            <div className="offre-prix">
                                76,
                                <span className="offre-prix-cents">00€*</span>
                            </div>

                            <div className="btnAjoutPanier">
                                <button className="btn btn-panier">
                                    <span className="glyphicon glyphicon-shopping-cart"></span>
                                    Ajouter au
                                    <span>panier</span>
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-3">

                      <div className="offre-produit">

                            <div className="offre-sponsor">
                                <span>Produit sponsorisé</span>
                            </div>

                            <div className="offre-img">
                                <img src={ImgOffre3} alt="#"/>
                            </div>

                            <div className="offre-content">
                                <span className="offre-item-category">Centrale a vapeur</span>
                                <br></br>
                                <span className="offre-item-name">calor gv76370c express co...</span>
                            </div>

                            <div className="offre-prix">
                                189,
                                <span className="offre-prix-cents">00€*</span>
                            </div>

                            <div className="btnAjoutPanier">
                                <button className="btn btn-panier">
                                    <span className="glyphicon glyphicon-shopping-cart"></span>
                                    Ajouter au
                                    <span>panier</span>
                                </button>
                            </div>
                        </div>
                    </div>

                  </div>

                <div>
                  <div className="col-xs-12 col-sm-6 col-md-3">
                      <div className="offre-produit">

                          <div className="offre-sponsor">
                              <span>Produit sponsorisé</span>
                          </div>

                          <div className="offre-img">
                              <img src={Img5} alt="#"/>
                          </div>

                          <div className="offre-content">
                              <span className="offre-item-category">Pese personne</span>
                              <br></br>
                              <span className="offre-item-name">withings pese personne c...</span>
                          </div>

                          <div className="offre-prix">
                              99,
                              <span className="offre-prix-cents">99€*</span>
                          </div>

                          <div className="btnAjoutPanier">
                              <button className="btn btn-panier">
                                  <span className="glyphicon glyphicon-shopping-cart"></span>
                                  Ajouter au
                                  <span>panier</span>
                              </button>
                          </div>
                      </div>
                  </div>


                  <div className="col-xs-12 col-sm-6 col-md-3">

                      <div className="offre-produit">

                          <div className="offre-sponsor">
                              <span>Produit sponsorisé</span>
                          </div>

                          <div className="offre-img">
                              <img src={ImgOffre1} alt="#"/>
                          </div>

                          <div className="offre-content">
                              <span className="offre-item-category">Fer a repasser</span>
                              <br></br>
                              <span className="offre-item-name">calor fv3930c0</span>
                          </div>

                          <div className="offre-prix">
                              44,
                              <span className="offre-prix-cents">99€*</span>
                          </div>

                          <div className="btnAjoutPanier">
                              <button className="btn btn-panier">
                                  <span className="glyphicon glyphicon-shopping-cart"></span>
                                  Ajouter au
                                  <span>panier</span>
                              </button>
                          </div>

                      </div>
                  </div>


                  <div className="col-xs-12 col-sm-6 col-md-3">

                      <div className="offre-produit">

                          <div className="offre-sponsor">
                              <span>Produit sponsorisé</span>
                          </div>

                          <div className="offre-img">
                              <img src={ImgOffre2} alt="#"/>
                          </div>

                          <div className="offre-content">
                              <span className="offre-item-category">Fer a repasser</span>
                              <br></br>
                              <span className="offre-item-name">calor fv9960c0 freemove</span>
                          </div>

                          <div className="offre-prix">
                              76,
                              <span className="offre-prix-cents">00€*</span>
                          </div>

                          <div className="btnAjoutPanier">
                              <button className="btn btn-panier">
                                  <span className="glyphicon glyphicon-shopping-cart"></span>
                                  Ajouter au
                                  <span>panier</span>
                              </button>
                          </div>

                      </div>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-md-3">

                    <div className="offre-produit">

                          <div className="offre-sponsor">
                              <span>Produit sponsorisé</span>
                          </div>

                          <div className="offre-img">
                              <img src={ImgOffre3} alt="#"/>
                          </div>

                          <div className="offre-content">
                              <span className="offre-item-category">Centrale a vapeur</span>
                              <br></br>
                              <span className="offre-item-name">calor gv76370c express co...</span>
                          </div>

                          <div className="offre-prix">
                              189,
                              <span className="offre-prix-cents">00€*</span>
                          </div>

                          <div className="btnAjoutPanier">
                              <button className="btn btn-panier">
                                  <span className="glyphicon glyphicon-shopping-cart"></span>
                                  Ajouter au
                                  <span>panier</span>
                              </button>
                          </div>
                      </div>
                  </div>
                </div>

                <div>
                  <div className="col-xs-12 col-sm-6 col-md-3">
                      <div className="offre-produit">

                          <div className="offre-sponsor">
                              <span>Produit sponsorisé</span>
                          </div>

                          <div className="offre-img">
                              <img src={Img5} alt="#"/>
                          </div>

                          <div className="offre-content">
                              <span className="offre-item-category">Pese personne</span>
                              <br></br>
                              <span className="offre-item-name">withings pese personne c...</span>
                          </div>

                          <div className="offre-prix">
                              99,
                              <span className="offre-prix-cents">99€*</span>
                          </div>

                          <div className="btnAjoutPanier">
                              <button className="btn btn-panier">
                                  <span className="glyphicon glyphicon-shopping-cart"></span>
                                  Ajouter au
                                  <span>panier</span>
                              </button>
                          </div>
                      </div>
                  </div>


                  <div className="col-xs-12 col-sm-6 col-md-3">

                      <div className="offre-produit">

                          <div className="offre-sponsor">
                              <span>Produit sponsorisé</span>
                          </div>

                          <div className="offre-img">
                              <img src={ImgOffre1} alt="#"/>
                          </div>

                          <div className="offre-content">
                              <span className="offre-item-category">Fer a repasser</span>
                              <br></br>
                              <span className="offre-item-name">calor fv3930c0</span>
                          </div>

                          <div className="offre-prix">
                              44,
                              <span className="offre-prix-cents">99€*</span>
                          </div>

                          <div className="btnAjoutPanier">
                              <button className="btn btn-panier">
                                  <span className="glyphicon glyphicon-shopping-cart"></span>
                                  Ajouter au
                                  <span>panier</span>
                              </button>
                          </div>

                      </div>
                  </div>


                  <div className="col-xs-12 col-sm-6 col-md-3">

                      <div className="offre-produit">

                          <div className="offre-sponsor">
                              <span>Produit sponsorisé</span>
                          </div>

                          <div className="offre-img">
                              <img src={ImgOffre2} alt="#"/>
                          </div>

                          <div className="offre-content">
                              <span className="offre-item-category">Fer a repasser</span>
                              <br></br>
                              <span className="offre-item-name">calor fv9960c0 freemove</span>
                          </div>

                          <div className="offre-prix">
                              76,
                              <span className="offre-prix-cents">00€*</span>
                          </div>

                          <div className="btnAjoutPanier">
                              <button className="btn btn-panier">
                                  <span className="glyphicon glyphicon-shopping-cart"></span>
                                  Ajouter au
                                  <span>panier</span>
                              </button>
                          </div>

                      </div>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-md-3">

                    <div className="offre-produit">

                          <div className="offre-sponsor">
                              <span>Produit sponsorisé</span>
                          </div>

                          <div className="offre-img">
                              <img src={ImgOffre3} alt="#"/>
                          </div>

                          <div className="offre-content">
                              <span className="offre-item-category">Centrale a vapeur</span>
                              <br></br>
                              <span className="offre-item-name">calor gv76370c express co...</span>
                          </div>

                          <div className="offre-prix">
                              189,
                              <span className="offre-prix-cents">00€*</span>
                          </div>

                          <div className="btnAjoutPanier">
                              <button className="btn btn-panier">
                                  <span className="glyphicon glyphicon-shopping-cart"></span>
                                  Ajouter au
                                  <span>panier</span>
                              </button>
                          </div>
                      </div>
                  </div>
                </div>

                <div>
                  <div className="col-xs-12 col-sm-6 col-md-3">
                      <div className="offre-produit">

                          <div className="offre-sponsor">
                              <span>Produit sponsorisé</span>
                          </div>

                          <div className="offre-img">
                              <img src={Img5} alt="#"/>
                          </div>

                          <div className="offre-content">
                              <span className="offre-item-category">Pese personne</span>
                              <br></br>
                              <span className="offre-item-name">withings pese personne c...</span>
                          </div>

                          <div className="offre-prix">
                              99,
                              <span className="offre-prix-cents">99€*</span>
                          </div>

                          <div className="btnAjoutPanier">
                              <button className="btn btn-panier">
                                  <span className="glyphicon glyphicon-shopping-cart"></span>
                                  Ajouter au
                                  <span>panier</span>
                              </button>
                          </div>
                      </div>
                  </div>


                  <div className="col-xs-12 col-sm-6 col-md-3">

                      <div className="offre-produit">

                          <div className="offre-sponsor">
                              <span>Produit sponsorisé</span>
                          </div>

                          <div className="offre-img">
                              <img src={ImgOffre1} alt="#"/>
                          </div>

                          <div className="offre-content">
                              <span className="offre-item-category">Fer a repasser</span>
                              <br></br>
                              <span className="offre-item-name">calor fv3930c0</span>
                          </div>

                          <div className="offre-prix">
                              44,
                              <span className="offre-prix-cents">99€*</span>
                          </div>

                          <div className="btnAjoutPanier">
                              <button className="btn btn-panier">
                                  <span className="glyphicon glyphicon-shopping-cart"></span>
                                  Ajouter au
                                  <span>panier</span>
                              </button>
                          </div>

                      </div>
                  </div>


                  <div className="col-xs-12 col-sm-6 col-md-3">

                      <div className="offre-produit">

                          <div className="offre-sponsor">
                              <span>Produit sponsorisé</span>
                          </div>

                          <div className="offre-img">
                              <img src={ImgOffre2} alt="#"/>
                          </div>

                          <div className="offre-content">
                              <span className="offre-item-category">Fer a repasser</span>
                              <br></br>
                              <span className="offre-item-name">calor fv9960c0 freemove</span>
                          </div>

                          <div className="offre-prix">
                              76,
                              <span className="offre-prix-cents">00€*</span>
                          </div>

                          <div className="btnAjoutPanier">
                              <button className="btn btn-panier">
                                  <span className="glyphicon glyphicon-shopping-cart"></span>
                                  Ajouter au
                                  <span>panier</span>
                              </button>
                          </div>

                      </div>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-md-3">

                    <div className="offre-produit">

                          <div className="offre-sponsor">
                              <span>Produit sponsorisé</span>
                          </div>

                          <div className="offre-img">
                              <img src={ImgOffre3} alt="#"/>
                          </div>

                          <div className="offre-content">
                              <span className="offre-item-category">Centrale a vapeur</span>
                              <br></br>
                              <span className="offre-item-name">calor gv76370c express co...</span>
                          </div>

                          <div className="offre-prix">
                              189,
                              <span className="offre-prix-cents">00€*</span>
                          </div>

                          <div className="btnAjoutPanier">
                              <button className="btn btn-panier">
                                  <span className="glyphicon glyphicon-shopping-cart"></span>
                                  Ajouter au
                                  <span>panier</span>
                              </button>
                          </div>
                      </div>
                  </div>
                </div>
            < /Slider>

        );
    }
});

export default SimpleSlider;
