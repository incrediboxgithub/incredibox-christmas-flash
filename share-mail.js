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
var httpInvitation;
var nomInvitation;
var mailInvitation;
var tabInvitation = new Array();
var inviteEnCours = false;
// --------------------------------------- CHECK TXTFIELDS INVITATION
// --------------------------------------- CHECK TXTFIELDS INVITATION
function checkerInvitation(){
	if(!inviteEnCours){
		inviteEnCours=true;
		nomInvitation = $("#nomInvite").val();
		mailInvitation = $("#mailInvite").val();
		var nb = tabInvitation.length;
		var bug=false;
		// ----------------- checker le nom
		if(nomInvitation==txtNomInputInvite || nomInvitation.split(" ").join("") == "" || nomInvitation.split(" ").join("").length<2){
			$("#nomInvite").addClass("textFieldWarning");
			bug = true;
			// Merci de verifier le contenu des champs requis
			rapportTexte(txtVerifChamps, "rapportInvite", "icone-attention.gif", "0px 0px");
		}
		if(!bug) {
			// ----------------- vérifier l'adresse
			if(!checkMail(mailInvitation)){
				$("#mailInvite").addClass("textFieldWarning");
				bug = true;
				// Merci de vérifier le contenu des champs requis
				rapportTexte(txtVerifChamps, "rapportInvite", "icone-attention.gif", "0px 0px");
			}
		}
		// ----------------- vérifier si l'invitation a déjà été envoyée
		if(!bug) {
			if(nb>0){
				for(a=0;a<nb;a++){
					if(mailInvitation==tabInvitation[a]){
						$("#mailInvite").addClass("textFieldWarning");
						// Vous avez déjà envoyé une invitation à l'adresse
						rapportTexte(txtDejaInvite+" <strong>"+tabInvitation[a]+"</strong>.", "rapportInvite", "icone-attention.gif", "0px 1px");
						bug=true;
						break;
					}
				}
			}
		}
		// ----------------- envoyer le mail
		if(!bug){
			// en cours
			rapportTexte(txtInviteProgress, "rapportInvite", "preload.gif", "0px 0px");
			envoyerInvitationMail();
			
		} else {
			inviteEnCours = false;
		}
	}	
}
// -------------------------------------- envoyer les infos à PHP
function envoyerInvitationMail(){
	httpInvitation = getXHR();
	if(httpInvitation!=false){
		httpInvitation.open('POST', '../php/send-mail.php', true);
		httpInvitation.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		httpInvitation.onreadystatechange = retourEnvoyerMailInvitation;
		httpInvitation.send("expediteur="+encodeURIComponent(nomInvitation)+"&chaineAdresse="+encodeURIComponent(mailInvitation)+"&langue="+encodeURIComponent(langue)+"&typeEnvoi=invitation");
	}else{
		//Désolé, votre navigateur n'est pas compatible avec notre système d'envoi de mail
		rapportTexte(txtProbNav);
	}
}
// -------------------------------------- retour PHP
function retourEnvoyerMailInvitation(){
	if(httpInvitation.readyState== 4){
	    if(httpInvitation.status == 200 || httpInvitation.status == 0) {
	    	trace("httpInvitation.responseText = "+httpInvitation.responseText);
	    	if(httpInvitation.responseText=="reponse=ok"){
	    		tabInvitation.push(mailInvitation);
	    		// Votre invitation à bien été envoyé!
	    		rapportTexte(txtInviteOk, "rapportInvite", "icone-ok.gif", "0px 0px");
	    	} else {
	    		// Oups! Une erreur est survenue, merci de réessayer plus tard.
	    		rapportTexte(txtProbInvite, "rapportInvite", "icone-attention.gif", "0px 0px");
	    	}
	    	
	    } else {
	    	// Impossible d'envoyer votre invitation, merci de réessayer plus tard
	    	rapportTexte(txtProbInviteStatut, "rapportInvite", "icone-bug.gif", "0px 0px");
	    }
	    inviteEnCours = false;
	} else {
	 // en cours
	}
}

}
/*
     FILE ARCHIVED ON 13:57:35 Dec 12, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:28:31 Mar 09, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.494
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.007
  esindex: 0.011
  cdx.remote: 4.431
  LoadShardBlock: 231.899 (3)
  PetaboxLoader3.datanode: 124.39 (4)
  PetaboxLoader3.resolve: 296.505 (2)
  load_resource: 235.859
*/