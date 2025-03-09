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
function getXHR() {
	var request = false;
	try {
		// IE7 ou + et autres modern browsers
		request = new XMLHttpRequest();	
	} catch (e) {
		// IE6 et -
		var tabXmlHttpVersions = new Array("MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.5.0", "MSXML2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP");
		for (var a=0; a<tabXmlHttpVersions.length && !request; a++){
			try {
				request = new ActiveXObject(tabXmlHttpVersions[a]);
			} catch(err){
				//
			}
		}
	}
	if(!request){
		alert("Impossible de créer l'objet XML Http Request !")
	}else{
		return request;
	}
}

}
/*
     FILE ARCHIVED ON 13:56:50 Dec 12, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:28:31 Mar 09, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.43
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.007
  esindex: 0.008
  cdx.remote: 4.257
  LoadShardBlock: 55.171 (3)
  PetaboxLoader3.datanode: 73.329 (4)
  load_resource: 108.312
  PetaboxLoader3.resolve: 67.631
*/