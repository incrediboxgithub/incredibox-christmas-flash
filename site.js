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
var currentPage = "#pa-application";
var currentAddresse = "application";
var shuffleMode = false;
var listenUrl = false;
var boxFlash;
// -----------------------------------------------------
// --------------------------------------- ON LOAD READY
function lancerAffichage(){
	//$("#alert").css({"overflow":"hidden"});
	//$("#alert").css({"display":"block"});
	//$("#alert").click(clickAlerte);
	//$("#alert").click();
	//
	$("body").css({"background-image" : "none"})
	$("#menuHeader a").bind("mouseover", surBtMenu);
	$("#menuHeader a").bind("mouseleave", dehorsBtMenu);
	boxFlash = $("#boxFlash");
	//
	initTexte();
	getFacebookFan();
	initGoodies();
	initSupportPub();
	initTop50();
	testerEcouteURL();
	trace("lancerAffichage()");
}
// ---------------------------------------------------------
// --------------------------------------- CHANGER DE LANGUE
function switchLangue(){
	var url=getHash();
	if(langue == "fr") {
		var lienEN = "../en/#/"+getHash();
		window.location = lienEN;
	}else{
		var lienFR = "../fr/#/"+getHash();
		window.location = lienFR;
	}
}
// ---------------------------------------------------
// --------------------------------------- RESIZE PAGE
function fullBrowser(){
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
};
// ---------------------------------------------------------
// --------------------------------------- CHECK ECOUTER URL
function testerEcouteURL(){
	var IEVersion="";
	if ($.browser.msie) {
 		IEVersion = parseInt($.browser.version, 10);
	}
	if ("onhashchange" in window && IEVersion!="7") {
		trace("onhashchange OK !");
		listenUrl = true;
		window.onhashchange = function (){
			locationHashChanged();
		}
	} else {
		trace("onhashchange PROBLEM ! normal nav");
		listenUrl = false;
    	var lien = "";
    	var newLien = "";
    	$(".lienPage").each(
			function(){
				lien = $(this).attr("id");
				newLien = lien.substr(3, lien.length-3);
				$(this).attr("href", "javascript:changerBouton('"+newLien+"')");
        	}
    	);
	}
	locationHashChanged();
}
// --------------------------------------------------
// --------------------------------------- URL CHANGE
function locationHashChanged() {
	var recupAd = getHash();
	if(recupAd == "" || $("#bt-"+recupAd).attr("id") == undefined || recupAd.indexOf("?music=")!=-1){
		trace("locationHashChanged() = recupAd = " + recupAd +" on remplace l'adresse")
		recupAd = "application"
		window.location.hash = "#/application";
	}else{
		trace("locationHashChanged() = " + recupAd)
		changerBouton(recupAd);
	}
}
// ------------------------------------------------------------------------------
// --------------------------------------- CHANGER DE PAGE APRES CLICK SUR BOUTON
function changerBouton(addresse){
	trace("changerBouton address = "+addresse);
	if(!listenUrl){
		window.location.hash = "#/"+addresse;
	}
	// ----------------------- VERIFIER ACTION A FAIRE POUR LA PAGE QU'ON QUITTE
	if(addresse != currentAddresse){
		switch(currentPage){
			case "#pa-application" :
				masquerFlash();
			break;
			case "#pa-partnership" :
				arreterTimerStat();
			break;
			case "#pa-press" :
				arreterTimerStat();
			break;
			case "#pa-share" :
				viderRapportTexte();
			break;
			case "#pa-goodies" :
				if(DlListOpen){ouvrirListDl();}
			break;
			case "#pa-shop" :
			break;
			default:
			break;
		}
		masquerPage();
		unlockBoutonMenu('#bt-'+currentAddresse);
	}
	// ----------------------- INIT NOUVELLE PAGE
	lockBoutonMenu('#bt-'+addresse)
	currentAddresse = addresse;
	currentPage = "#pa-"+addresse;
	// ----------------------- VERIFIER ACTION A FAIRE POUR LA PAGE QU'ON AFFICHE
	switch(currentPage){
		case "#pa-application" :
			afficherFlash();
			afficherPage();
		break;
		case "#pa-partnership" :
			lancerTimerStat();
			afficherPage();
		break;
		case "#pa-press" :
			lancerTimerStat();
			afficherPage();
		break;
		case "#pa-shop" :
			afficherPage();
		break;
		default:
			afficherPage();
		break;
	}
	if(currentPage != "#pa-application"){
		$(currentPage).css({"display":"block"});
		$("body").css({"background-color" : "#FFF"})
	}
}
function afficherPage(){
	$(currentPage).css({"display":"block"});
}
function masquerPage(){
	$(currentPage).css({"display":"none"});
}
function getHash() {
	var url = location.hash.split("#/").join("");
	return url;
}
function checkHash(){
	var url = getHash();
	if(url == "" || url =="application" || url.indexOf("?music=")!=-1){
		return true;
	} else {
		return false
	}
}
// ----------------------------------------------------------------------
// --------------------------------------- COMMUNICATION FLASH/JAVASCRIPT
function afficherFlash() {
	trace("afficherFlash()");
	boxFlash.removeClass("flashMasquer").addClass("flashAfficher");
	if(document.getElementById("flashContent").afficherFlash != undefined){
		document.getElementById("flashContent").afficherFlash();
	}
	checkShuffleMode();
}
function masquerFlash() {	
	trace("masquerFlash()");
	boxFlash.removeClass("flashAfficher").addClass("flashMasquer");
	if(document.getElementById("flashContent").masquerFlash != undefined){
		document.getElementById("flashContent").masquerFlash();
	}
}
function checkShuffleMode(){
	if(shuffleMode){
		$("body").css({"background-color" : "#000"});
	}else{
		$("body").css({"background-color" : "#FFF"});
	}
}
function fondNoir(){
	shuffleMode = true;
	$("body").css({"background-color" : "#000"});
	$(".bandeauShare").css({"background-color":"#333"});
	$(".bandeauShare").css({"background-image":"none"});
}
function fondBlanc(){
	shuffleMode = false;
	$("body").css({"background-color" : "#FFF"});
	$(".bandeauShare").css({"background-color":"#DDD"});
	$(".bandeauShare").css({"background-image":"url('../image/icon/fd-bandeau.jpg')"});
}
function messageFromFlash(str){
	//tracer(str);
}
// -----------------------------------------------------------------------------------------
// --------------------------------------- FUNCTION HOVER/OUT BOUTON LIEN MENU HEADER/FOOTER
function surBtMenu(){
	effetSurBtMenu(this);
}
function effetSurBtMenu(obj){
	$(obj).css({"filter":"alpha(opacity=1)"});
	$(obj).css({"-moz-opacity":"1"});
	$(obj).css({"opacity":"1"});
}
function dehorsBtMenu(){
	effetDehorsBtMenu(this);
}
function effetDehorsBtMenu(obj){
	$(obj).css({"filter":"alpha(opacity=65)"});
	$(obj).css({"-moz-opacity":".65"});
	$(obj).css({"opacity":".65"});
}
function surBtMenuFooter(){
	$(this).css({"color":"#FFF"});
}
function dehorsBtMenuFooter(){
	$(this).css({"color":"#999"});
}
function unlockBoutonMenu(bt){
	var parentId = $(bt).parent().attr("id");
	if(currentAddresse != "" ){
		if( parentId == "divMenuHeader"){
			$(bt).bind("mouseover", surBtMenu);
			$(bt).bind("mouseleave", dehorsBtMenu);
			$(bt).css({"background-image":"none"});
			effetDehorsBtMenu(bt);
		} else {
			$(bt).css({"color":"#999"});
		}
	}
}
function lockBoutonMenu(bt){
	var parentId = $(bt).parent().attr("id");
	if( parentId == "divMenuHeader"){
		$(bt).unbind("mouseover", surBtMenu);
		$(bt).unbind("mouseleave", dehorsBtMenu);
		$(bt).css({"background-image":"url('../image/icon/fd-degrade2.jpg')"});
		effetSurBtMenu(bt);
	} else {
		$(bt).unbind("mouseover", surBtMenuFooter);
		$(bt).unbind("mouseleave", dehorsBtMenuFooter);
		$(bt).css({"color":"#FFF"});
	}
}
// ---------------------------------------------
// --------------------------------------- DEBUG
var alerteVisible = true;
function trace(txt){
	var texte = $("#alert").html()
	$("#alert").html(texte+"<br />"+txt);
}
function clickAlerte(){
	if(alerteVisible){
		$("#alert").css({"width":"10px"});
		$("#alert").css({"height":"10px"});
	}else{
		$("#alert").css({"width":"300px"});
		$("#alert").css({"height":"100%"});
	}
	alerteVisible=!alerteVisible;
}

}
/*
     FILE ARCHIVED ON 13:57:11 Dec 12, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:28:30 Mar 09, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.445
  exclusion.robots: 0.015
  exclusion.robots.policy: 0.007
  esindex: 0.009
  cdx.remote: 39.571
  LoadShardBlock: 242.694 (3)
  PetaboxLoader3.datanode: 184.574 (4)
  PetaboxLoader3.resolve: 219.421 (2)
  load_resource: 180.101
*/