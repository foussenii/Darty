import React, {Component} from 'react';
import './Sadia.css';
import photoTefal from '../Photos-Darty/tefal_py554412_m1701034284836A_102337507.jpg'
import honor8 from '../Photos-Darty/honor_8_premium_rose_n1612094274539A_155521193.jpg'
import bekoMachine from '../Photos-Darty/beko_ddb7101pa0w_n1608044249283A_150534830.jpg'
import priceTefal from '../Photos-Darty/prix-tefal.png'
import priceHonor from '../Photos-Darty/prix-honor.png'
import priceBeko from '../Photos-Darty/prix-beko.png'
import samsungCard from '../Photos-Darty/samsung_msd_evo_128gb_adapt_m1509074163249A_105023828.png.jpeg'

import withingsBody from '../Photos-Darty/withings_body_wbs05_noire_m1606024226950D_104639728.jpg'

import samsungBlackA5 from '../Photos-Darty/samsung_galaxy_a5_2017_noir_n1701124287320A_114314255.jpg'

import samsungOrA5 from '../Photos-Darty/samsung_galaxy_a5_2017_or_n1701124287355A_134926796.jpg'

import dolceGusto from '../Photos-Darty/krups_yy1051_dolce_gusto_piccolo_rouge_n1311213322971A_165651683.jpg'

import samsungBlackA3 from '../Photos-Darty/samsung_galaxy_a3_2017_noir_n1701124287223A_104900562.jpg'

import googleChromecast from '../Photos-Darty/google_chromecast_v3_n1510014164652A_155414217.png.jpeg'

import nintendoZelda from  '../Photos-Darty/nintendo_zelda_switch_stand_n1701274291727A_164336499.jpg'

import samsungBlueA5 from '../Photos-Darty/samsung_galaxy_a5_2017_bleu_n1701124287347A_133937460.jpg'

import magimixInissia from '../Photos-Darty/magimix_inissia_nespresso_grise_m105_n1403103857468E_114700818.jpg'

import whirPool from '../Photos-Darty/whirlpool_fscr12440_n1612054280610A_131603431.jpg'

import proLine from '../Photos-Darty/proline_ttr92wh_n1407093839966A_210021160.jpg'

import dySon from '../Photos-Darty/dyson_dc62_extra_m1606104236580A_154853598.jpg'

import microSoft from  '../Photos-Darty/microsoft_off_365_perso2016_m1606174228006A_172532451.JPEG'
import panier from '../Photos-Darty/sprite_add_to_basket.png'

import sadiaSlider from './slider.js';

class Sadia extends Component {
  render() {
    return (
      <div className="App">
        <div className="container container-sadia">
            <h1 id="titre-bon-plans">BONS PLANS</h1>
<hr id="hr-one"></hr>
<div className="container-product">
            <div className="product">
              <div className="product-img">
              <img src={photoTefal} id ='tefal'height="102" width="154"></img>
</div>
<p className="price1">TEFAL PY554412 SIMPLY C...<br /></p>
  <div className="legend">
<img src={panier} className="pan"></img>
    <img src={priceTefal} className="price"></img>
  </div>
</div>


            <div className="product">
              <div className="product-img">
              <img src={honor8} id='honor' height="154" width="102"></img>
              </div>
<p className="price2">HONOR 8 PRENIUM ROSE</p>

  <div className="legend">
  <img src={panier} className="pan"></img>
    <img src={priceHonor} className="price"></img>
  </div>
              </div>

              <div className="product">
                <div className="product-img">
              <img src ={bekoMachine} id='beko' height="154" width="102"></img>
</div>
<p className="price3">BEKO DDB7101PA0W</p>
  <div className="legend">
  <img src={panier} className="pan"></img>
    <img src={priceBeko} className="price"></img>
  </div>
              </div>
</div>
<h1 id="titre-product-consult">VOS DERNIERS PRODUITS CONSULTES</h1>
<hr id="hr-two"></hr>

  <div id="slider-second">
    <figure>
      <div className="container-product">
      <div className="product">
  <img src={samsungCard} id="samsung-msd"></img>
  </div>
  <div className="product">
      <img src ={withingsBody}  id="withings-body"></img>
      </div>
  <div className="product">
      <img src ={samsungBlackA5} id="Samsung-BlackA5"  ></img>
      </div>
      <div className="product">
      <img src={samsungOrA5} id="Samsung-OrA5" ></img>
      </div>
      <div className="product">
  <img src={dolceGusto} id="dolce-gusto"></img>
  </div>
  <div className="product">
        <img src={samsungBlackA3} id="Samsung-BlackA3" ></img>
        </div>
        <div className="product">
        <img src={googleChromecast} id="Google-chrome" ></img>
        </div>
        <div className="product">
        <img src={nintendoZelda} id='Zelda'></img>
        </div>
        <div className="product">
  <img src={samsungBlueA5} id="Samsung-BlueA5"></img>
  </div>
  <div className="product">
          <img src={magimixInissia} id="Magimix-i"></img>
          </div>
          <div className="product">
          <img src={whirPool} id="whirpool"></img>
          </div>
          <div className="product">
          <img src={proLine} id="proline"></img>
          </div>
          <div className="product">
  <img src={dySon} id='dyson'></img>
  </div>
  <div className="product">
          <img src={microSoft} id='microsoft'></img>
          </div>
</div>
        </figure>

  </div>

      </div>
      <sadiaSlider></sadiaSlider>
</div>
    );
  }
}
export default Sadia;
