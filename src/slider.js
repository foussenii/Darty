var React = require('react');

var Slider = require('react-slick');

import samsungCard from '../Photos-Darty/samsung_msd_evo_128gb_adapt_m1509074163249A_105023828.png.jpeg';

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



var sadiaSlider = React.createClass({

    render: function() {

        var settings = {

            dots: true,

            infinite: true,

            speed: 500,

            slidesToShow: 1,

            slidesToScroll: 1

        };
        return (

            <Slider {...settings} className="container col-xs-12">
            <div >

              <img src = {samsungCard} id="samsung-msd"></img>
            </div>
            </Slider>

);
}
});
export default sadiaSlider;
