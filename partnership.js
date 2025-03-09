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
var largeBoiteTxtStat = 235;
var timerStat;
var vitesseTimerStat = 5000;
var tabBoiteTxtStat = [];
var countTxtStat=0;
// --------------------------------------- INIT BLOX TXT STAT
// --------------------------------------- INIT BLOX TXT STAT
function initSupportPub(){
	// compter le nombre d'enfant dans chaque boite de stat
	$("#pa-partnership .boiteTxtStat").each(function(index){
		var nbTexte = $(this).children(".txtStat").length;
		$(this).css({"width" : (largeBoiteTxtStat*nbTexte)+"px"})
		if(nbTexte>1){
			$(this).bind("click", refreshTxtStat);
			$(this).css({"cursor":"pointer"});
			tabBoiteTxtStat.push($(this));
		}
	});
	trace("initSupportPub()");
}
// --------------------------------------- CLICK SUR TXT STAT
// --------------------------------------- CLICK SUR TXT STAT
function refreshTxtStat(){
	$(this).unbind("click", refreshTxtStat);
	var largeur = $(this).innerWidth();
	var posX = $(this).position().left;
	if(posX == -(largeur-largeBoiteTxtStat)){
		posX=0;
	}else{
		posX -=largeBoiteTxtStat;
	}
	$(this).animate({left:posX+"px"} , 750, 'easeInOutCirc', reactiverClickTxtStat);
}
function reactiverClickTxtStat(){
	$(this).bind("click", refreshTxtStat);
	arreterTimerStat();
	lancerTimerStat();
}
// --------------------------------------- CHANGER STATS
// --------------------------------------- CHANGER STATS
function lancerRefreshStat(){
	countTxtStat=0;
	for(a=0; a<tabBoiteTxtStat.length; a++){
		var refresh = (250*a);
		var x = setTimeout(clickTxtStat, refresh);
	}
}
function clickTxtStat(){
	$(tabBoiteTxtStat[countTxtStat]).click();
	countTxtStat++;
}
// --------------------------------------- TIMER REFRESH STATS
// --------------------------------------- TIMER REFRESH STATS
function lancerTimerStat(){
	timerStat = setInterval("lancerRefreshStat()", vitesseTimerStat);
}
function arreterTimerStat(){
	clearInterval(timerStat);
}
// --------------------------------------- TIMER REFRESH STATS
// --------------------------------------- TIMER REFRESH STATS
var httpGetFb;
function getFacebookFan(){
	httpGetFb = getXHR();
	if(httpGetFb!=false){
		httpGetFb.open('GET', '../php/recup-facebook-fan.php', true);
		httpGetFb.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		httpGetFb.onreadystatechange = retourGetFacebookFan;
		httpGetFb.send(null);
		trace("---------------- " + httpGetFb);
	}else{
		//Désolé, votre navigateur n'est pas compatible avec notre système d'envoi de mail
		rapportTexte(txtProbNav);
	}
}
// -------------------------------------- retour PHP
function retourGetFacebookFan(){
	if(httpGetFb.readyState== 4){
	    if(httpGetFb.status == 200 || httpGetFb.status == 0) {
	    	var resultat = httpGetFb.responseText.split("&var=");
	    	var nbFan = resultat[0];
	    	var nbTalker = resultat[1];
			$(".fb-nbFan").empty().html(nbFan);
			$(".fb-nbTalker").empty().html(nbTalker);
	    }
	} else {
		// en cours
	}
}


}
/*
     FILE ARCHIVED ON 13:57:32 Dec 12, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:28:31 Mar 09, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.599
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.015
  esindex: 0.01
  cdx.remote: 9.423
  LoadShardBlock: 279.182 (3)
  PetaboxLoader3.datanode: 228.498 (4)
  PetaboxLoader3.resolve: 140.759 (2)
  load_resource: 120.413
*/