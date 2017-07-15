"undefined"==typeof CookieControl&&(CookieControl={}),CookieControl.Cookie=function(n){this.name=n,this.consented=!1,this.declined=!1,this.hasResponse=!1,this.consentID="0",this.consent={stamp:"0",necessary:!0,preferences:!1,statistics:!1,marketing:!1},this.isOutsideEU=!1,this.host="",this.iswhitelabel=!1,this.doNotTrack=!1,this.consentLevel="strict",this.isRenewal=!1,this.forceShow=!1,this.dialog=null,this.responseMode="",this.serial="",this.scriptId="Cookiebot",this.scriptElement=null,this.whitelist=[],this.pathlist=[],this.userIsInPath=!0,this.cookieEnabled=!0,this.init=function(){var that=this;if("cookie"in document){var testcookie=this.getCookie(this.name);testcookie||(this.cookieEnabled=(document.cookie=this.name+"=-3;expires=Thu, 01 Jan 2060 00:00:00 GMT").indexOf.call(document.cookie,this.name)>-1,this.cookieEnabled&&(document.cookie=this.name+"=-3;expires=Thu, 01 Jan 1970 00:00:00 GMT"))}else this.cookieEnabled=!1;this.cookieEnabled||(this.isOutsideEU=!1,this.hasResponse=!0,this.declined=!0,this.consented=!1,this.consent.preferences=!1,this.consent.statistics=!1,this.consent.marketing=!1,this.consentID="-3",this.consent.stamp="-3");var d=document.getElementById(this.scriptId);if(!d||"script"!=d.tagName.toLowerCase()){this.iswhitelabel=!0,this.scriptId="CookieConsent";var d=document.getElementById(this.scriptId);if(!d||"script"!=d.tagName.toLowerCase()){var tagsAll=document.getElementsByTagName("script");for(i=0;i<tagsAll.length;i++){var currentTag=tagsAll[i];if(that.hasAttr(currentTag,"src")&&(that.hasAttr(currentTag,"data-cbid")||currentTag.getAttribute("src").toLowerCase().indexOf("cbid=")>0)&&currentTag.getAttribute("src").toLowerCase().indexOf("/uc.js")>0){d=currentTag;break}}d&&(that.hasAttr(d,"id")?this.scriptId=d.getAttribute("id"):that.hasAttr(d,"src")&&(d.getAttribute("src").toLowerCase().indexOf("consent.cookiebot.com")<0?(this.scriptId="CookieConsent",d.id=this.scriptId):this.iswhitelabel=!1))}}if(d){this.scriptElement=d,this.host="https://"+d.src.match(/:\/\/(.[^/]+)/)[1]+"/";var p=d.getAttribute("data-path");if(p){var custompathlist=p.replace("/ /g","");this.pathlist=custompathlist.split(",")}}var px=this.getURLParam("path");if(px){var custompathlist=px.replace("/ /g","");this.pathlist=custompathlist.split(",")}var temppathlist=[];for(i=0;i<this.pathlist.length;i++){var currentpath=this.pathlist[i];""!=currentpath&&(0!=currentpath.indexOf("/")&&(currentpath="/"+currentpath),temppathlist.push(decodeURIComponent(currentpath)))}if(this.pathlist=temppathlist,this.pathlist.length>0){this.userIsInPath=!1;var userCurrentPath=window.location.pathname;if("/"!=userCurrentPath)for(i=0;i<this.pathlist.length;i++)if(0===userCurrentPath.toLowerCase().indexOf(this.pathlist[i].toLowerCase())){this.currentPath=this.pathlist[i],this.userIsInPath=!0;break}this.userIsInPath||(this.consented=!0,this.declined=!1,this.hasResponse=!0,this.consent.preferences=!0,this.consent.statistics=!0,this.consent.marketing=!0,this.consentLevel="implied")}if(this.iswhitelabel||(window.Cookiebot=this),this.userIsInPath){var c=this.getCookie(this.name);if(c)if("-2"==c?(this.declined=!1,this.consented=!1,this.hasResponse=!1,this.consent.preferences=!1,this.consent.statistics=!1,this.consent.marketing=!1,this.consentLevel="implied"):("0"==c?(this.declined=!0,this.consent.preferences=!1,this.consent.statistics=!1,this.consent.marketing=!1,this.responseMode="leveloptin"):(this.consented=!0,this.consent.preferences=!0,this.consent.statistics=!0,this.consent.marketing=!0,"-1"==c&&(this.isOutsideEU=!0)),this.hasResponse=!0),0==c.indexOf("{")&&c.indexOf("}")>0){var consentObject=eval("("+c+")");this.consentID=consentObject.stamp,this.consent.stamp=consentObject.stamp,this.consent.preferences=consentObject.preferences,this.consent.statistics=consentObject.statistics,this.consent.marketing=consentObject.marketing,this.responseMode="leveloptin"}else this.consentID=c,this.consent.stamp=c;else if(this.isSpider())return void this.setOutOfRegion()}this.setDNTState();var head=document.head||document.getElementsByTagName("head")[0];if(head){var s=document.createElement("style");s.setAttribute("type","text/css"),s.id="CookieConsentStateDisplayStyles";var newstylesheet="";if(this.consented){var optins=[],optouts=[];optins.push(".cookieconsent-optin"),this.consent.preferences?(optins.push(".cookieconsent-optin-preferences"),optouts.push(".cookieconsent-optout-preferences")):(optouts.push(".cookieconsent-optin-preferences"),optins.push(".cookieconsent-optout-preferences")),this.consent.statistics?(optins.push(".cookieconsent-optin-statistics"),optouts.push(".cookieconsent-optout-statistics")):(optouts.push(".cookieconsent-optin-statistics"),optins.push(".cookieconsent-optout-statistics")),this.consent.marketing?(optins.push(".cookieconsent-optin-marketing"),optouts.push(".cookieconsent-optout-marketing")):(optouts.push(".cookieconsent-optin-marketing"),optins.push(".cookieconsent-optout-marketing")),optouts.push(".cookieconsent-optout"),newstylesheet=optins.join()+"{display:block;}"+optouts.join()+"{display:none;}"}else newstylesheet=".cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing,.cookieconsent-optin{display:none;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:block;}";s.styleSheet?s.styleSheet.cssText=newstylesheet:s.appendChild(document.createTextNode(newstylesheet)),head.appendChild(s)}if(this.consented||this.declined)this.setOnload();else{var submitImpliedConsent=function(e){if("object"==typeof CookieConsent&&!CookieConsent.hasResponse&&"object"==typeof CookieConsentDialog&&"implied"==CookieConsentDialog.consentLevel){var t=e.target||e.srcElement;if(t&&(t.tagName&&"a"==t.tagName.toLowerCase()||t.className.match(new RegExp("(\\s|^)cookieconsent-implied-trigger(\\s|$)")))){for(var o=!1,n=t;n;){if(n.id&&n.id==CookieConsentDialog.DOMid){o=!0;break}n=n.parentNode}var s=!1;if("a"==t.tagName.toLowerCase()&&t.href&&t.href.indexOf("javascript:")>-1&&(t.href.indexOf("CookieConsent")>9||t.href.indexOf("Cookiebot")>9)&&(s=!0),!o&&!s){CookieConsent.submitConsent(!0,window.location.href,!1),document.removeEventListener?document.removeEventListener("click",submitImpliedConsent,!0):document.detachEvent&&document.detachEvent("onclick",submitImpliedConsent);var i="object"==typeof google_tag_manager,a="object"==typeof _satellite,c="object"==typeof utag,r=document.createEventObject&&!document.createEvent&&"function"!=typeof MouseEvent;if((i||a||c)&&!r){var l=e.target||e.srcElement;setTimeout(function(){if("function"==typeof MouseEvent){var e=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});l.dispatchEvent(e)}else document.createEvent?((e=document.createEvent("MouseEvents")).initEvent("click",!0,!1),l.dispatchEvent(e)):"function"==typeof l.onclick?l.onclick():"function"==typeof l.click&&l.click()},500),"bubbles"in e?e.bubbles&&e.stopPropagation():e.cancelBubble=!0,e.preventDefault?e.preventDefault():window.event.returnValue=!1}}}}};document.addEventListener?document.addEventListener("click",submitImpliedConsent,!0):document.attachEvent&&document.attachEvent("onclick",submitImpliedConsent),this.process(!1);var cbonloadevent=function(){setTimeout(function(){CookieConsent.applyDisplay(),"object"==typeof CookieConsentDialog&&(CookieConsentDialog.pageHasLoaded=!0)},1e3)};window.addEventListener?window.addEventListener("load",cbonloadevent,!1):window.attachEvent("onload",cbonloadevent)}},this.runScripts=function(){var e=this,t=[],o=document.getElementsByTagName("script");for(i=0;i<o.length;i++){var n=o[i];e.hasAttr(n,"data-cookieconsent")&&e.hasAttr(n,"type")&&"text/plain"==n.getAttribute("type").toLowerCase()&&t.push(n)}for(i=0;i<t.length;i++){var s=(n=t[i]).getAttribute("data-cookieconsent").toLowerCase().split(","),a=!0;for(j=0;j<s.length;j++){var c=s[j].trim();"preferences"!=c||CookieConsent.consent.preferences||(a=!1),"statistics"!=c||CookieConsent.consent.statistics||(a=!1),"marketing"!=c||CookieConsent.consent.marketing||(a=!1)}if(a){for(var r=n.parentNode,l=n.nextElementSibling,h=document.createElement("script"),p=0;p<n.attributes.length;p++)void 0!==n.attributes[p].value&&""!=n.attributes[p].value&&h.setAttribute(n.attributes[p].name,n.attributes[p].value);h.text=n.text,h.setAttribute("type","text/javascript"),r.removeChild(n),r.insertBefore(h,l||null)}}},this.applyDisplay=function(){var e;if(CookieConsent.consented){e=CookieConsent.getConsentElementsByClassName("cookieconsent-optout-preferences");for(o=0;o<e.length;o++)e[o].style.display="none";e=CookieConsent.getConsentElementsByClassName("cookieconsent-optout-statistics");for(o=0;o<e.length;o++)e[o].style.display="none";e=CookieConsent.getConsentElementsByClassName("cookieconsent-optout-marketing");for(o=0;o<e.length;o++)e[o].style.display="none";if(CookieConsent.consent.preferences){e=CookieConsent.getConsentElementsByClassName("cookieconsent-optin-preferences");for(o=0;o<e.length;o++){t="block";this.hasClass(e[o],"cookieconsent-optin-statistics")&&!CookieConsent.consent.statistics&&(t="none"),this.hasClass(e[o],"cookieconsent-optin-marketing")&&!CookieConsent.consent.marketing&&(t="none"),e[o].style.display=t}}else{e=CookieConsent.getConsentElementsByClassName("cookieconsent-optout-preferences");for(o=0;o<e.length;o++)e[o].style.display="block"}if(CookieConsent.consent.statistics){e=CookieConsent.getConsentElementsByClassName("cookieconsent-optin-statistics");for(o=0;o<e.length;o++){t="block";this.hasClass(e[o],"cookieconsent-optin-preferences")&&!CookieConsent.consent.preferences&&(t="none"),this.hasClass(e[o],"cookieconsent-optin-marketing")&&!CookieConsent.consent.marketing&&(t="none"),e[o].style.display=t}}else{e=CookieConsent.getConsentElementsByClassName("cookieconsent-optout-statistics");for(o=0;o<e.length;o++)e[o].style.display="block"}if(CookieConsent.consent.marketing){e=CookieConsent.getConsentElementsByClassName("cookieconsent-optin-marketing");for(o=0;o<e.length;o++){var t="block";this.hasClass(e[o],"cookieconsent-optin-preferences")&&!CookieConsent.consent.preferences&&(t="none"),this.hasClass(e[o],"cookieconsent-optin-statistics")&&!CookieConsent.consent.statistics&&(t="none"),e[o].style.display=t}}else{e=CookieConsent.getConsentElementsByClassName("cookieconsent-optout-marketing");for(o=0;o<e.length;o++)e[o].style.display="block"}e=CookieConsent.getConsentElementsByClassName("cookieconsent-optin");for(o=0;o<e.length;o++)e[o].style.display="block";e=CookieConsent.getConsentElementsByClassName("cookieconsent-optout");for(o=0;o<e.length;o++)e[o].style.display="none"}else{e=CookieConsent.getConsentElementsByClassName("cookieconsent-optin-preferences");for(o=0;o<e.length;o++)e[o].style.display="none";e=CookieConsent.getConsentElementsByClassName("cookieconsent-optin-statistics");for(o=0;o<e.length;o++)e[o].style.display="none";e=CookieConsent.getConsentElementsByClassName("cookieconsent-optin-marketing");for(o=0;o<e.length;o++)e[o].style.display="none";e=CookieConsent.getConsentElementsByClassName("cookieconsent-optin");for(o=0;o<e.length;o++)e[o].style.display="none";e=CookieConsent.getConsentElementsByClassName("cookieconsent-optout-preferences");for(o=0;o<e.length;o++)e[o].style.display="block";e=CookieConsent.getConsentElementsByClassName("cookieconsent-optout-statistics");for(o=0;o<e.length;o++)e[o].style.display="block";e=CookieConsent.getConsentElementsByClassName("cookieconsent-optout-marketing");for(o=0;o<e.length;o++)e[o].style.display="block";e=CookieConsent.getConsentElementsByClassName("cookieconsent-optout");for(var o=0;o<e.length;o++)e[o].style.display="block"}},this.hasClass=function(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},this.getConsentElementsByClassName=function(e){return document.getElementsByClassName?document.getElementsByClassName(e):document.querySelectorAll?document.querySelectorAll("."+e):[]},this.setOnload=function(){window.addEventListener?window.addEventListener("load",this.triggerOnloadEvents,!1):window.attachEvent("onload",this.triggerOnloadEvents)},this.triggerOnloadEvents=function(){CookieConsent.applyDisplay(),CookieConsent.onload&&CookieConsent.onload(),"function"==typeof CookiebotCallback_OnLoad?CookiebotCallback_OnLoad():"function"==typeof CookieConsentCallback_OnLoad&&CookieConsentCallback_OnLoad(),CookieConsent.consented?(CookieConsent.onaccept&&CookieConsent.onaccept(),"function"==typeof CookiebotCallback_OnAccept?CookiebotCallback_OnAccept():"function"==typeof CookieConsentCallback_OnAccept&&CookieConsentCallback_OnAccept(),CookieConsent.runScripts()):(CookieConsent.ondecline&&CookieConsent.ondecline(),"function"==typeof CookiebotCallback_OnDecline?CookiebotCallback_OnDecline():"function"==typeof CookieConsentCallback_OnDecline&&CookieConsentCallback_OnDecline())},this.show=function(e){var t=!1;e?(t=e,this.cookieEnabled||alert("Please enable cookies in your browser to proceed.")):this.forceShow=!0,this.cookieEnabled&&(this.consented=!1,this.declined=!1,this.hasResponse=!1,this.consent.preferences=!1,this.consent.statistics=!1,this.consent.marketing=!1,this.consentID="0",this.consent.stamp="0",this.process(t))},this.hide=function(){"object"==typeof CookieConsentDialog&&CookieConsentDialog.hide()},this.renew=function(){this.isRenewal=!0,this.show(!0),setTimeout(function(){"object"==typeof CookieConsentDialog&&"inlineoptin"==CookieConsentDialog.responseMode&&CookieConsentDialog.toggleDetails()},300)},this.getURLParam=function(e){var t=document.getElementById(this.scriptId);if(t||(t=this.scriptElement),t&&(e=new RegExp("[?&]"+encodeURIComponent(e)+"=([^&#]*)").exec(t.src)))return decodeURIComponent(e[1].replace(/\+/g," "))},this.process=function(e){var t=document.getElementById(this.scriptId);if(t||(t=this.scriptElement),t){var o=t.getAttribute("data-cbid"),n=this.getURLParam("cbid");if(n&&(o=n),o)if(this.isGUID(o)){this.serial=o;var s="?renew="+e;s=s+"&referer="+encodeURIComponent(window.location.protocol+"//"+window.location.hostname),e&&(s=s+"&nocache="+(new Date).getTime());var i=t.getAttribute("data-mode"),a=this.getURLParam("mode");a&&(i=a),i&&(s=s+"&mode="+i);var c=t.getAttribute("data-culture"),r=this.getURLParam("culture");r&&(c=r),c&&(s=s+"&culture="+c);var l=t.getAttribute("data-type"),h=this.getURLParam("type");h&&(l=h),l&&(s=s+"&type="+l);var p=t.getAttribute("data-level"),d=this.getURLParam("level");d&&(p=d),p&&(s=s+"&level="+p);var C=t.getAttribute("data-path"),u=this.getURLParam("path");u&&(C=u),C&&(s=s+"&path="+encodeURIComponent(C));var k="false";this.doNotTrack&&(k="true"),s=(s=(s=s+"&dnt="+k)+"&forceshow="+this.forceShow)+"&cbid="+o;C="false";this.iswhitelabel&&(C="true"),s=(s=s+"&whitelabel="+C)+"&brandid="+this.scriptId,this.cookieEnabled?this.getScript(this.host+o+"/cc.js"+s):(this.consented=!1,this.declined=!0,this.hasResponse=!0,this.consent.preferences=!1,this.consent.statistics=!1,this.consent.marketing=!1,this.consentID="-3",this.consent.stamp="-3")}else this.log("Error: Cookie script tag ID "+o+" is not a valid key.");else this.log("Error: Cookie script tag attribute 'data-cbid' is missing.")}else this.log("Error: Can't read data values from the cookie script tag - make sure to set script attribute ID.")},this.log=function(e){console.log&&console.log(e)},this.getCookie=function(e){var t,o,n,s="",i=document.cookie,a=i.split(";");for(t=0;t<a.length;t++)if(o=a[t].substr(0,a[t].indexOf("=")),n=a[t].substr(a[t].indexOf("=")+1),(o=o.replace(/^\s+|\s+$/g,""))==e){if(!(e==this.name&&i.split(e).length-1>1))return unescape(n);(n.length>s.length||"0"==n)&&(s=n)}if(""!=s)return unescape(s)},this.setCookie=function(e,t,o,n,s){var i=this.name+"="+e+(t?";expires="+t.toGMTString():"")+(o?";path="+o:"")+(n?";domain="+n:"")+(s?";secure":"");document.cookie=i},this.removeCookies=function(){function e(e){var t=e;if(e.length>0){var o=t.split(".");t.length>1&&(t=o.slice(-2).join("."))}return t}for(var t=document.cookie.split(";"),o=window.location.pathname.split("/"),n=0;n<t.length;n++){for(var s=t[n],i=s.indexOf("="),a=i>-1?s.substr(0,i):s,c=!1,r=0;r<this.whitelist.length;r++)if(this.whitelist[r]===a){c=!0;break}if(!c&&a!=this.name){var l=";path=",h="=;expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=a+h;for(r=0;r<o.length;r++)l+=("/"!=l.substr(-1)?"/":"")+o[r],document.cookie=a+h+l,document.cookie=a+h+l+";domain="+escape(window.location.hostname),document.cookie=a+h+l+";domain=."+escape(window.location.hostname),document.cookie=a+h+l+";domain="+escape(e(window.location.hostname)),document.cookie=a+h+l+";domain=."+escape(e(window.location.hostname))}(function(){var e="cookiebottest";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}})()&&(localStorage.clear(),"undefined"!=typeof sessionStorage&&sessionStorage.clear())}},this.withdraw=function(){this.consented=!1,this.declined=!1,this.hasResponse=!1,this.consent.preferences=!1,this.consent.statistics=!1,this.consent.marketing=!1,this.removeCookies(),document.cookie=CookieConsent.name+"=;Path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT","undefined"!=typeof CookieDeclaration&&CookieDeclaration.SetUserStatusLabel(),CookieConsent.ondecline(),"function"==typeof CookiebotCallback_OnDecline?CookiebotCallback_OnDecline():"function"==typeof CookieConsentCallback_OnDecline&&CookieConsentCallback_OnDecline(),CookieConsent.applyDisplay()},this.setOutOfRegion=function(){this.isOutsideEU=!0,this.hasResponse=!0,this.declined=!1,this.consented=!0,this.consent.preferences=!0,this.consent.statistics=!0,this.consent.marketing=!0,this.setCookie("-1",(new CookieControl.DateTime).addMonths(13),"/"),this.setOnload()},this.isSpider=function(){return/adidxbotc|Applebot\/|archive.org_bot|asterias\/|Baiduspider\/|bingbot\/|BingPreview\/|DuckDuckBot\/|FAST-WebCrawler\/|Feedspot|Feedspotbot\/|Google Page Speed Insights|Google PP|Google Search Console|Google Web Preview|Googlebot\/|Googlebot-Image\/|Googlebot-Mobile\/|Googlebot-News|Googlebot-Video\/|Google-SearchByImage|Google-Structured-Data-Testing-Tool|heritrix\/|iaskspider\/|Mediapartners-Google|msnbot\/|msnbot-media\/|msnbot-NewsBlogs\/|msnbot-UDiscovery\/|special_archiver\/|Y!J-ASR\/|Y!J-BRI\/|Y!J-BRJ\/YATS|Y!J-BRO\/YFSJ|Y!J-BRW\/|Y!J-BSC\/|Yahoo! Site Explorer Feed Validator|Yahoo! Slurp|YahooCacheSystem|Yahoo-MMCrawler\/|YahooSeeker\//.test(navigator.userAgent)},this.getScript=function(e,t,o){var n=document.getElementsByTagName("script")[0],s=document.createElement("script");s.type="text/javascript",s.charset="UTF-8";var i=!1,a="async"in s,c=!0;if(void 0===t||t||(c=!1),c&&!a&&"undefined"!=typeof XMLHttpRequest)try{i=!0;var r=new XMLHttpRequest;r.onreadystatechange=function(){4==r.readyState&&(200!=r.status&&304!=r.status||(s.text=r.responseText,n.parentNode.insertBefore(s,n),o&&o()))},r.open("GET",e,!0),r.send()}catch(e){i=!1}i||(c&&(s.async="async"),s.src=e,s.onload=s.onreadystatechange=function(e,t){(t||!s.readyState||/loaded|complete/.test(s.readyState))&&(s.onload=s.onreadystatechange=null,t||o&&o())},n.parentNode.insertBefore(s,n))},this.loadIframe=function(e,t){var o=document.getElementById(e);o&&(o.src=t)},this.setDNTState=function(){"yes"===navigator.doNotTrack||"1"===navigator.msDoNotTrack||"1"===navigator.doNotTrack||!1===this.cookieEnabled||!1===navigator.cookieEnabled?this.doNotTrack=!0:this.doNotTrack=!1},this.submitConsent=function(e,t,o){"object"==typeof CookieConsentDialog&&CookieConsentDialog.submitConsent(e,t,o)},this.isGUID=function(e){var t=/^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/;return!!(e.length>0&&t.test(e))},this.hasAttr=function(e,t){return e.hasAttribute?e.hasAttribute(t):!!e.getAttribute(t)},this.init()},String.prototype.trim=function(){return this.replace(/^\s*/,"").replace(/\s*$/,"")},CookieControl.Cookie.prototype.onload=function(){},CookieControl.Cookie.prototype.ondecline=function(){},CookieControl.Cookie.prototype.onaccept=function(){},CookieControl.DateTime=function(e){this.Date=new Date,e&&(this.Date=e),this.isLeapYear=function(e){return e%4==0&&e%100!=0||e%400==0},this.getDaysInMonth=function(e,t){return[31,this.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},this.addMonths=function(e){var t=this.Date.getDate();return this.Date.setDate(1),this.Date.setMonth(this.Date.getMonth()+e),this.Date.setDate(Math.min(t,this.getDaysInMonth(this.Date.getFullYear(),this.Date.getMonth()))),this.Date}};var CookieConsent=new CookieControl.Cookie("CookieConsent");"CookieConsent"!=CookieConsent.scriptId&&"Cookiebot"!=CookieConsent.scriptId&&(window[CookieConsent.scriptId]=CookieConsent);