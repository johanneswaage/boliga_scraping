function getCookie(c_name){var i,x,y,ARRcookies=document.cookie.split(";");for (i=0;i<ARRcookies.length;i++){x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);x=x.replace(/^\s+|\s+$/g,"");if (x==c_name){return unescape(y);}}}
var expiry=new Date();var dt=new Date();expiry.setFullYear(expiry.getFullYear()+2);var customer_status=getCookie("visitorStatus");
if(!customer_status){document.cookie=("visitorStatus="+dt.getMonth()+"-"+dt.getFullYear()+";path=/;expires="+expiry.toGMTString());var _gaq=_gaq||[];_gaq.push(['_setCustomVar',2,'VisitorStatus',dt.getMonth()+'-'+dt.getFullYear(),1]);}