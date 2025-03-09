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
var largeurImgDiapo = 648;
var tabTitreDiapo = [];
var currentDiapo = 0;
var nbImgDiapo;
var httpScreen;
var DlListOpen = false;
// --------------------------------------- LANCER GOODIES
// --------------------------------------- LANCER GOODIES
function initGoodies(){
	// ---------- COMPTER LES DIAPOS ET ETABLIR LA LARGEUR DU CONTENEUR
	nbImgDiapo = $(".boxImgDiapo").children(".imgDiapo").length;
	initNumeroDiapo();
	$(".boxImgDiapo").css({"width" : (largeurImgDiapo*nbImgDiapo)+"px"})	
	$("#infoDiapoDl").fadeOut(0);
	// ---------- RECUPERE LES TITRES DE CHAQUES DIAPO
	$(".imgDiapo").each(function(index){
		var titre = $(this).children(".titreDiapo").html();
		var tab = [];
		tab.push(this)
		tab.push(titre)
		tabTitreDiapo.push(tab);
		recupCompteurFondEcran(this, normaliserNom(titre), index);
	});
	// ---------- LISTE BT DOWNLOAD
	$(".boxDlList").hover(surBoxDl, dehorsBoxDl);
	$(".boxDlList li").click(clickBoxDlList);
	trace("initGoodies()");
}
function ouvrirListDl(){
	if(!DlListOpen){
		$(".boxDlList").css({"display":"block"})
	}else{
		$(".boxDlList").css({"display":"none"})
	}
	DlListOpen =! DlListOpen;
}
function surBoxDl(){
}
function dehorsBoxDl(){
	$(".boxDlList").css({"display":"none"});
	DlListOpen = false;
}
function clickBoxDlList(){
	$("#btReso").html($(this).html());
}
function dlFondEcran(){
	var lienImg = $(".boxImgDiapo .imgDiapo:nth-child("+(currentDiapo+1)+")").children("img").attr("src");
	var resolutionChoisi = $("#btReso").html();
	nouveauLien = lienImg.split(".jpg").join("-"+(resolutionChoisi.split(" ").join(""))+".jpg");
	incrementerCompteurDl();
	window.open(nouveauLien)
}
// --------------------------------------- FAIRE DEFILER LES IMAGES DU DIAPO
// --------------------------------------- FAIRE DEFILER LES IMAGES DU DIAPO
function avanceDiapo(){
	currentDiapo++;
	if(currentDiapo>=nbImgDiapo){
		currentDiapo=0;
	}
	bougeDiapo();
}
function reculeDiapo(){
	currentDiapo--;
	if(currentDiapo<0){
		currentDiapo=nbImgDiapo-1;
	}
	bougeDiapo();
}
function bougeDiapo(){
	var posX = (currentDiapo*largeurImgDiapo)*-1
	initNumeroDiapo();
	$(".boxImgDiapo").animate({left:posX+"px"} , 350, 'easeInOutCirc');
	$("#infoDiapoDl").fadeOut(200);
	$(".infoDiapoTitre").fadeOut(200, changerInfoDiapo);
}
function changerInfoDiapo(){
	var divImg = tabTitreDiapo[currentDiapo];
	$("#infoDiapoDl").html(texteDL+$(divImg).children(".nbDl").html());
	$("#infoDiapoDl").fadeIn(200);
	$(".infoDiapoTitre").html($(divImg).children(".titreDiapo").html());
	$(".infoDiapoTitre").fadeIn(200);
}
function initNumeroDiapo(){
	$("#infoDiapoNumero").html((currentDiapo+1)+"/"+nbImgDiapo);
}
// --------------------------------------- FONCTION TELECHARGER FOND ECRAN
// --------------------------------------- FONCTION TELECHARGER FOND ECRAN
function incrementerCompteurDl(){
	httpScreen = getXHR();
	var nomFE = normaliserNom(tabTitreDiapo[currentDiapo][1]);
	httpScreen.open('POST', '../php/compteur-download.php', true);
	httpScreen.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	httpScreen.send("fichier="+encodeURIComponent(nomFE));
}
function normaliserNom(txt){
	var texte = txt.split(" ").join("-").split("'").join("").split(".").join("").toLowerCase();
	return texte;
}
// --------------------------------------- FONCTION RECUPERER LES VALEURS DES COMPTEURS
// --------------------------------------- FONCTION RECUPERER LES VALEURS DES COMPTEURS
function recupCompteurFondEcran(objDivImg, nomTextFile, num){
	var objXHR = getXHR();
	objXHR.open('GET', '../compteur/goodies/'+nomTextFile+'.txt', false);
	objXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	objXHR.send(null);
	if(objXHR.readyState == 4 && (objXHR.status == 200 || objXHR == 0)){
		$(objDivImg).children(".nbDl").html(objXHR.responseText);
		if(num == 0){// si c'est le premier qu'on récupère on l'affiche
			changerInfoDiapo();
		}
	}
}

}
/*
     FILE ARCHIVED ON 13:57:26 Dec 12, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:28:30 Mar 09, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.526
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.008
  esindex: 0.013
  cdx.remote: 4.988
  LoadShardBlock: 198.476 (3)
  PetaboxLoader3.datanode: 145.875 (4)
  PetaboxLoader3.resolve: 182.861 (2)
  load_resource: 155.028
*/