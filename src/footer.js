import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './footer.css';


class Footer extends Component {
  render() {
    return (

<div>

<div className="footer">
	

<div className="bloc-principal col-xs-12">
		
		

	<div className="bloc1 col-md-2">
		<h5>Infos et contacts</h5>
		<ul>
			<li>Le groupe Darty</li>
			<li>Darty France</li>
			<li>Contrat de confiance</li>
			<li>Nos offres demploi</li>
			<li>Nos marques</li>
			<li>Consommer responsable</li>
			<li>Espace presse</li>
			<li>Informations légales</li>
			<li>Informations sur les cookies</li>
		</ul>
	</div>

  		
<div className="bloc2 col-md-3">
  		<h5>Services</h5>
  		<ul>
		
			<li>Services Darty</li>
			<li>Service après vente</li>
			<li>Assistance & Dépannage</li>
			<li>Retour et remboursement</li>
			<li> Dossiers techniques</li>
			<li> Carte de crédit connectée</li>
			<li>Carte cadeau Darty</li>
		</ul>

</div>
    
 	<div className="bloc3 col-md-4">
 	
 	<h5>Nos Offres</h5>
 		<ul>
	
			<li>Multimédia et électroménager<br/>pas cher</li>
			<li>Cuisine équipée</li>
			<li>Sommier</li>
			<li>Matelas</li>
			<li>Code Promo</li>
			<li>Soldes dhiver 2017</li>
			<li>Black Friday</li>
		
		</ul>
</div>	
	
	
	<div className="bloc4 col-md-2">
		<h5>Partenariat</h5>
		
		<ul>
	
			<li>Devenez affilié Darty</li>
			<li>Devenez franchisé Darty</li>
	
		</ul>
		<h5>Nos Recompenses</h5>
		
	<div className="rep">
		
		<img src="http://www.darty.com/res3/images/footer/darty_fevad_bronze.png"></img>
		<img src="http://www.darty.com/res3/images/footer/darty_id_prix_bronze.gif"></img>
	
	</div>
	
	</div>
		
	

</div>
		
	
			<div className="bloc-secondaire col-md-12">

				<form>

					<div className="bloc5 col-md-6">
						<h4 className="titre">Plus de 200 magasins en France !</h4>
						<p>Découvrez tout l'univers de l'Electroménager, Hifi, High-Tech,<br/> Informatique, Cuisine dans le magasin Darty le plus proche de<br/> chez vous. Paris, Marseille, Lyon, Nice, Toulouse, Tous<br/> les magasins.</p>
						<input placeholder=" Code postal"></input><button>OK</button>
					</div>			
			
	
					<div className="bloc6 col-md-6">
						<h4 className="titre">Inscrivez-vous à nos newsletters !</h4>
						<p className="sp">Les offres et promos avant tout le monde. Des conseils et <br/>idées pour toutes vos envies.</p>
						<input className="adresse" placeholder=" Votre adresse mail"></input><button>OK</button>
					</div>
	
				</form>
			</div>



<div className="social">

		
	
			<div className="social-second">

				<h4><img src="http://www.hostingpics.net/thumbs/95/27/33/mini_952733footerfacebook.png"></img>FACEBOOK DARTY</h4>
				<a>Rejoignez la communauté Darty</a>
				<h4><img src="http://www.hostingpics.net/thumbs/95/27/33/mini_952733footerfacebook.png"></img>FACEBOOK CUISINE</h4>
				<a>Retrouvez tout notre univers cuisine</a>
			
			</div>

			
			<div className="social-second1">

				<h4><img src="http://www.hostingpics.net/thumbs/32/95/57/mini_329557footertwitter.png"></img>TWITTER DARTY</h4>
				<a>Prenez la parole sur @Darty_officiel</a>

				<h4><img src="http://www.hostingpics.net/thumbs/41/33/73/mini_413373footerpinterest.png"></img>PINTEREST DARTY</h4>
				<a>Abonnez-vous à nos tableaux<br/> cuisine, déco & DIY</a>

			</div>	

			<div className="social-second2">
				<h4><img src="http://www.hostingpics.net/thumbs/70/64/59/mini_706459footeryoutube.png"></img>VIDEOS DARTY</h4>
				<a>Suivez nos tutos et nos vidéos</a>

				<h4><img src="http://www.hostingpics.net/thumbs/43/49/56/mini_434956footerinstagram.png"></img>INSTAGRAM DARTY</h4>
				<a>Découvrez les coulisses<br/>@Darty_officiel</a>

			</div>

		<div className="social-second3">

			<h4><img src="http://www.hostingpics.net/thumbs/90/26/81/mini_902681iconeillustrator.png"></img>APPLI DARTY</h4>
			<p>Profitez des offres et services Darty<br/>
			où que vous soyez ! Utilisez le scan<br/> 
			pour trouver immédiatement vos produits.
			</p>

			<a>Disponible sur lApp Store<br/>Disponible sur Google Play</a>

		</div>

</div>







<div className="copy">© Darty 2017</div>

</div>

</div>
    );
  }
}

export default Footer;
