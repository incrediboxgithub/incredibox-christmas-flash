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
function initTop50(){
	$("#tableauTop50").load("../"+langue+"/top-50-tableau.php?"+new Date().getMilliseconds());
}
var lienAfficher = false;
function bulle(obj, txt){
	lienAfficher=false;
	$('#bulleBlock').html(txt);
	$('#bulleBlock').css({'text-transform':"uppercase"});
	var width = $('#bulle').innerWidth()-20;// 20 padding
	var left = $(obj).position().left - (Math.round(width/2)-1);
	var top = $(obj).position().top - 35;
	$(obj).css({"background-color":"#333"});
	$('#bulle').css({'left':left});
	$('#bulle').css({'top':top});
	$('#bulle').css({'display':'block'});
}
function bulleHidden(obj){
	if(!lienAfficher){
		$(obj).css({"background-color":"#CCC"});
		$('#bulle').css({'display':'none'});
	}
}
function onTR(obj){
}
function outTR(obj){
}
function pressePapier(obj, txt){
	if(!lienAfficher){
		$('#bulleBlock').html("<input id='inputLien' value="+txt+" style='width:300px;border:none;background-color:#555;color:#FFF;text-align:center' readonly />");
		$('#inputLien').focus();
		$('#bulleBlock').css({'text-transform':"lowercase"});
		$('#bulleBlock').select();
		var width = $('#bulle').innerWidth()-20;// 20 padding
		var left = $(obj).position().left - (Math.round(width/2)-1);
		var top = $(obj).position().top - 35;
		$(obj).css({"background-color":"#CCC"});
		$('#bulle').css({'left':left});
		$('#bulle').css({'top':top});
		$('#bulle').css({'display':'block'});
	}
	lienAfficher =! lienAfficher;
}
/*
function recupererListeProjet(){
	$.ajax({
		type: "GET",
		url: "projet-recuperer-liste.php",
		success: function(msg){
			if(msg=="bug"){
    			rapport("Impossible de récupérer la liste de projet...");
    		} else {
    			$(".dynamic").empty();
    			$(".dynamic").html(msg)
    			$(".bt-edit").click(editerNomProjet)
    			$(".bt-image").click(ouvrirProjet)
    			$(".bt-suppr").click(supprimerProjet)
    			sortProjet();
    			rapport("Récupération liste projet = ok");
    			verrouOff();
    		}
		}
	});
}
function recupererListeImage(id){
	verrouOn();
	$.ajax({
		type: "POST",
		url: "projet-image-recuperer-liste.php",
		data: "projetId="+id,
		success: function(msg){
			if(msg=="bug"){
    			rapport("Impossible de récupérer la liste d'image...");
    		} else {
    			$(".dynamic").empty();
    			$(".dynamic").html(msg);
				$(".bt-edit").click(editerLegendeProjet)
				$(".bt-suppr").click(supprimerImage)
    			sortProjet();
    			rapport("Récupération liste projet = ok");
    		}
    		verrouOff();
		}
	});
}
*/

}
/*
     FILE ARCHIVED ON 13:57:28 Dec 12, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:28:31 Mar 09, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.538
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.01
  esindex: 0.012
  cdx.remote: 24.016
  LoadShardBlock: 213.234 (3)
  PetaboxLoader3.datanode: 177.349 (4)
  PetaboxLoader3.resolve: 237.837 (2)
  load_resource: 224.422
*/