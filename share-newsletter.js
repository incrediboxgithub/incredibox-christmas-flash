var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* -------------------------------------- INCREDIBOX COPYRIGHT SO FAR SO GOOD - 2011-2012 */
/* -------------------------------------- ALL RIGHTS RESERVED WWW.SOFARSOGOOD.FR */
var httpNews;
var newsEnCours = false;
var mailNews1;
var mailNews2;
// --------------------------------------- CHECK TXTFIELDS NEWSLETTER
// --------------------------------------- CHECK TXTFIELDS NEWSLETTER
function checkerAdresseNewsletter(){
	if(!newsEnCours){
		newsEnCours=true;
		mailNews1 = $("#mailNews1").val();
		mailNews2 = $("#mailNews2").val();
		var bug=false;
		// ----------------- vérifier l'adresse
		if(!checkMail(mailNews1)){
			$("#mailNews1").addClass("textFieldWarning");
			// L'adresse 1 n'est pas valide
			rapportTexte(txtNewsFakemail, "rapportNews", "icone-attention.gif", "0px 0px");
			newsEnCours = false;
		} else {
			if(mailNews1==mailNews2){
				rapportTexte(txtNewsProgress, "rapportNews", "preload.gif", "0px 0px");
				envoyerInscriptionNews();
			}else{	
				$("#mailNews2").addClass("textFieldWarning");
				// Les deux adresses ne sont pas identiques
				rapportTexte(txtNewsWrongmail, "rapportNews", "icone-attention.gif", "0px 0px");
				newsEnCours = false;
			}
		}
	}
}
// -------------------------------------- envoyer les infos à PHP
function envoyerInscriptionNews(){
	httpNews = getXHR();
	httpNews.open('POST', '../php/inscription-newsletter.php', true);
	httpNews.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	httpNews.onreadystatechange = retourEnvoyerInscriptionNews;
	httpNews.send("adresse="+encodeURIComponent(mailNews1)+"&adresse2="+encodeURIComponent(mailNews2)+"&langue="+encodeURIComponent(langue));
}
// -------------------------------------- retour PHP
function retourEnvoyerInscriptionNews(){
	if(httpNews.readyState== 4){
	    if(httpNews.status == 200 || httpNews.status == 0) {
	    	var retour = httpNews.responseText;
	    	trace("retour = "+retour);
	    	switch (retour){
	    		// ---------- mail envoyé, adresse enregistrée
				case "reponse=okemailSaved" :
	    			rapportTexte(txtNewsOkmail, "rapportNews", "icone-ok.gif", "0px 0px");
	    		break;
	    		// ---------- mail pas envoyé, adresse enregistrée
	    		case "reponse=erreuremailSaved" :
	    			rapportTexte(txtNewsProbEnvoi, "rapportNews", "icone-ok.gif", "0px 0px");
	    		break;
	    		// ---------- adresse trouvée, déjà confirmée
	    		case "foundStatutOk" :
		    		rapportTexte(txtNewsFound, "rapportNews", "icone-attention.gif", "0px 0px");
	    		break;
	    		// ---------- adresse trouvée, en attente de confirmation
	    		case "foundStatutWait" :
		    		rapportTexte(txtNewsNeedConfirm, "rapportNews", "icone-attention.gif", "0px 0px");
	    		break;
				// ---------- impossible d'enregistrer BDD
	    		case "probinsere" :
	    			rapportTexte(txtNewsProbinsere, "rapportNews", "icone-attention.gif", "0px 0px");
	    		break;
	    		// ---------- les deux adresses ne sont pas identiques
	    		case "wrongmail" :
	    			rapportTexte(txtNewsWrongmail, "rapportNews", "icone-attention.gif", "0px 0px");
	    		break;
	    		// ---------- l'adresse n'est pas valide
	    		case "fakemail" :
	    			rapportTexte(txtNewsFakemail, "rapportNews", "icone-attention.gif", "0px 0px");
	    		break;
	    		default :
	    		break;
	    	}
	    } else {
	    	// Impossible d'envoyer votre invitation, merci de réessayer plus tard
	    	rapportTexte(txtProbInviteStatut, "rapportNews", "icone-bug.gif", "0px 0px");
	    }
	    newsEnCours = false;
	} else {
	 // en cours
	}
}

}
/*
     FILE ARCHIVED ON 14:00:18 Dec 12, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:28:31 Mar 09, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.565
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.01
  esindex: 0.013
  cdx.remote: 6.112
  LoadShardBlock: 177.449 (3)
  PetaboxLoader3.datanode: 132.805 (4)
  PetaboxLoader3.resolve: 189.897 (2)
  load_resource: 194.615
*/