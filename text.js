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

/*
 * Incredibox copyright So Far So Good 2011-2012
 * All rights reserved - www.sofarsogood.fr 
*/
// --------------------------------------- TXT
// --------------------------------------- TXT
var txtNomInputInvite = "Entrez votre nom...";
var txtMailInputInvite = "Entrez l’adresse email du destinataire...";
var txtVerifChamps = "Merci de vérifier le contenu des champs requis.";
var txtDejaInvite = "Vous avez déjà envoyé une invitation à l'adresse";
var txtInviteProgress = "Envoi de l’invitation en cours...";
var txtInviteOk = "Invitation envoyée !";
var txtProbInvite = "Oups ! Une erreur est survenue, merci de réessayer plus tard.";
var txtProbInviteStatut = "Oups ! Impossible d’utiliser ce formulaire pour le moment...";
//
var txtNewsInput1 = "Inscrivez votre adresse email...";
var txtNewsInput2 = "Confirmez votre adresse email...";
var txtNewsProgress = "Enregistrement en cours, merci de patienter.";
var txtNewsFound = "Vous êtes déjà inscrit à notre newsletter !";
var txtNewsNeedConfirm = "Vous avez déjà enregistré cette adresse ! Vous devez confirmer votre inscription à partir du email que nous vous avons envoyé (vérifiez également dans vos SPAM).";
var txtNewsProbinsere = "Oups ! Impossible d’enregistrer votre adresse email. Merci de réessayer un peu plus tard. Si le problème persiste merci de nous <a href=\"mailto:news@incredibox.fr\" class=\"lien\">contacter</a>.";
var txtNewsFakemail = "Votre adresse email n’est pas valide ! Merci de la vérifier et de réessayer.";
var txtNewsWrongmail = "Les deux adresses emails ne sont pas identiques. Merci de les vérifier et de réessayer.";
var txtNewsNotfound = "Oups ! L’adresse email que vous souhaitez supprimer n’existe pas dans notre base de données... Merci de nous <a href=\"mailto:news@incredibox.fr\" class=\"lien\">contacter</a> afin que nous la supprimions manuellement.";
var txtNewsOkmail = "Vous êtes enregistré ! Nous venons de vous envoyer un email de confirmation. <strong>Merci de confirmer votre inscription</strong> !";
var txtNewsProbEnvoi = "Oups ! Nous n’avons pas pu terminer votre inscription... Merci de nous <a href=\"mailto:news@incredibox.fr\" class=\"lien\">contacter</a> afin de régler le problème manuellement.";
// GOODIES
var texteDL = "Nombre de téléchargements : ";
// --------------------------------------- TXT ENGLISH
// --------------------------------------- TXT ENGLISH
if(langue == "en") {
	txtNomInputInvite = "Enter your name...";
	txtMailInputInvite = "Enter the recipient's email address...";
	txtVerifChamps = "Please, check the required fields.";
	txtDejaInvite = "You've already sent an invitation to";
	txtInviteProgress = "Invitation sending...";
	txtInviteOk = "Invitation sent!";
	txtProbInvite = "Oops! An error occurred, please try again later.";
	txtProbInviteStatut = "Oops! Can not use this invitation form right now...";
	//
	txtNewsInput1 = "Enter your email address...";
	txtNewsInput2 = "Confirm your email address...";
	txtNewsProgress = "Saving in progress, thank you for waiting..."
	txtNewsFound = "You are already subscribed to our newsletter!";
	txtNewsNeedConfirm = "You have already saved this address! You must confirm your subscription from the email that we sent you (also check in your SPAM).";
	txtNewsProbinsere = "Oops! Can not save your email address. Please try again later. If the problem remains please <a href=\"mailto:news@incredibox.fr\" class=\"lien\">contact us</a>.";
	txtNewsFakemail = "Your email address is not valid! Please, check and try again.";
	txtNewsWrongmail = "Both email addresses do not match. Please, check and try again.";
	txtNewsNotfound = "Oops! The email address you want to delete does not exist in our database... Please <a href=\"mailto:news@incredibox.fr\" class=\"lien\">contact us</a> to remove it manually.";
	txtNewsOkmail = "You are registered! We just sent you a confirmation email. <strong>Thank you for confirming your registration</strong>!";
	txtNewsProbEnvoi = "Oops! We were not able to complete your registration … Please <a href=\"mailto:news@incredibox.fr\" class=\"lien\">contact us</a> to solve the problem manually.";
	// GOODIES
	texteDL = "Number of downloads: ";
}
// --------------------------------------- INIT INPUT TEXT
// --------------------------------------- INIT INPUT TEXT
function initTexte(){
	$("#nomInvite").val(txtNomInputInvite);
	$("#nomInvite").removeClass("textFieldWarning");
	$("#nomInvite").focus(function(){$(this).removeClass("textFieldWarning"); if(this.value==txtNomInputInvite){this.value=""}});
	$("#nomInvite").blur(function(){$(this).removeClass("textFieldWarning"); if(this.value==""){this.value=txtNomInputInvite}});
	$("#mailInvite").val(txtMailInputInvite);
	$("#mailInvite").removeClass("textFieldWarning");
	$("#mailInvite").focus(function(){$(this).removeClass("textFieldWarning"); if(this.value==txtMailInputInvite){this.value=""}});
	$("#mailInvite").blur(function(){$(this).removeClass("textFieldWarning"); if(this.value==""){this.value=txtMailInputInvite}});
	//
	$("#mailNews1").val(txtNewsInput1);
	$("#mailNews1").removeClass("textFieldWarning");
	$("#mailNews1").focus(function(){$(this).removeClass("textFieldWarning"); if(this.value==txtNewsInput1){this.value=""}});
	$("#mailNews1").blur(function(){$(this).removeClass("textFieldWarning"); if(this.value==""){this.value=txtNewsInput1}});
	$("#mailNews2").val(txtNewsInput2);
	$("#mailNews2").removeClass("textFieldWarning");
	$("#mailNews2").focus(function(){$(this).removeClass("textFieldWarning"); if(this.value==txtNewsInput2){this.value=""}});
	$("#mailNews2").blur(function(){$(this).removeClass("textFieldWarning"); if(this.value==""){this.value=txtNewsInput2}});
}
// --------------------------------------- RAPPORT MESSAGE ALERTE
// --------------------------------------- RAPPORT MESSAGE ALERTE
function rapportTexte(txt, div, image, posXY){
	var masquer = true;
	if(div==null){
		$("#"+div).css("padding-left","0");
		$("#"+div).css("background-image","url('')");
	} else {
		if(image=="preload.gif"){
			masquer = false;
			posXY = "2px 0px";
			$("#"+div).css("padding-left","22px");
		}else{
			$("#"+div).css("padding-left","18px");
		}
		$("#"+div).css("background-image","url('../image/icon/"+image+"')");
		$("#"+div).css("background-repeat","no-repeat");
		$("#"+div).css("background-position", posXY);
	}
	$("#"+div).empty();
	$("#"+div).append(txt);
	$("#"+div).stop(true);
	$("#"+div).css({"display":"block"});
	$("#"+div).css({"opacity":"1"});
	if(masquer){
		//$("#"+div).delay(5000).fadeOut(500);
	}
}
// --------------------------------------- VIDER LE RAPPORT MESSAGE ALERTE
// --------------------------------------- VIDER LE RAPPORT MESSAGE ALERTE
function viderRapportTexte(){
	$("#rapportInvite").css("background-image","url('')");
	$("#rapportInvite").empty();
	$("#rapportNews").css("background-image","url('')");
	$("#rapportNews").empty();
	initTexte();
}
// --------------------------------------- CHECK EMAIL REGEX
// --------------------------------------- CHECK EMAIL REGEX
function checkMail(adresse) { 
    var reg = /^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/;
    return (reg.exec(adresse)!=null);
}

}
/*
     FILE ARCHIVED ON 13:57:05 Dec 12, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:28:30 Mar 09, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.09
  exclusion.robots: 0.038
  exclusion.robots.policy: 0.017
  esindex: 0.021
  cdx.remote: 10.811
  LoadShardBlock: 227.683 (3)
  PetaboxLoader3.datanode: 100.398 (4)
  PetaboxLoader3.resolve: 225.788 (2)
  load_resource: 120.454
*/