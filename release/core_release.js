var T,baidu=T=baidu||{version:"1.3.5"};baidu.guid="$BAIDU$";window[baidu.guid]=window[baidu.guid]||{};baidu.ajax=baidu.ajax||{};baidu.fn=baidu.fn||{};baidu.fn.blank=function(){};baidu.ajax.request=function(d,o){o=o||{};var i=o.data||"",g=!(o.async===false),h=o.username||"",m=o.password||"",a=(o.method||"GET").toUpperCase(),f=o.headers||{},c={},l,n;function j(){if(n.readyState==4){try{var q=n.status}catch(p){e("failure");return}e(q);if((q>=200&&q<300)||q==304||q==1223){e("success")}else{e("failure")}window.setTimeout(function(){n.onreadystatechange=baidu.fn.blank;if(g){n=null}},0)}}function b(){if(window.ActiveXObject){try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(p){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(p){}}}if(window.XMLHttpRequest){return new XMLHttpRequest()}}function e(r){r="on"+r;var q=c[r],s=baidu.ajax[r];if(q){if(r!="onsuccess"){q(n)}else{try{n.responseText}catch(p){return q(n)}q(n,n.responseText)}}else{if(s){if(r=="onsuccess"){return}s(n)}}}for(l in o){c[l]=o[l]}f["X-Requested-With"]="XMLHttpRequest";try{n=b();if(a=="GET"){if(i){d+=(d.indexOf("?")>=0?"&":"?")+i;i=null}if(o.noCache){d+=(d.indexOf("?")>=0?"&":"?")+"b"+(+new Date)+"=1"}}if(h){n.open(a,d,g,h,m)}else{n.open(a,d,g)}if(g){n.onreadystatechange=j}if(a=="POST"){n.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}for(l in f){if(f.hasOwnProperty(l)){n.setRequestHeader(l,f[l])}}e("beforerequest");n.send(i);if(!g){j()}}catch(k){e("failure")}return n};baidu.ajax.get=function(b,a){return baidu.ajax.request(b,{onsuccess:a})};baidu.ajax.post=function(b,c,a){return baidu.ajax.request(b,{onsuccess:a,method:"POST",data:c})};baidu.array=baidu.array||{};baidu.each=baidu.array.forEach=baidu.array.each=function(g,e,b){var d,f,c,a=g.length;if("function"==typeof e){for(c=0;c<a;c++){f=g[c];d=e.call(b||g,f,c);if(d===false){break}}}return g};baidu.array.filter=function(h,f,d){var c=[],b=0,a=h.length,g,e;if("function"==typeof f){for(e=0;e<a;e++){g=h[e];if(true===f.call(d||h,g,e)){c[b++]=g}}}return c};baidu.array.remove=function(c,b){var a=c.length;while(a--){if(a in c&&c[a]===b){c.splice(a,1)}}return c};baidu.array.removeAt=function(b,a){return b.splice(a,1)[0]};baidu.browser=baidu.browser||{};if(/firefox\/(\d+\.\d)/i.test(navigator.userAgent)){baidu.browser.firefox=+RegExp["\x241"]}if(/msie (\d+\.\d)/i.test(navigator.userAgent)){baidu.browser.ie=baidu.ie=document.documentMode||+RegExp["\x241"]}baidu.browser.isGecko=/gecko/i.test(navigator.userAgent)&&!/like gecko/i.test(navigator.userAgent);baidu.browser.isStrict=document.compatMode=="CSS1Compat";baidu.browser.isWebkit=/webkit/i.test(navigator.userAgent);if(/opera\/(\d+\.\d)/i.test(navigator.userAgent)){baidu.browser.opera=+RegExp["\x241"]}(function(){var a=navigator.userAgent;if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(a)&&!/chrome/i.test(a)){baidu.browser.safari=+(RegExp["\x241"]||RegExp["\x242"])}})();baidu.cookie=baidu.cookie||{};baidu.cookie._isValidKey=function(a){return(new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24')).test(a)};baidu.cookie.getRaw=function(b){if(baidu.cookie._isValidKey(b)){var c=new RegExp("(^| )"+b+"=([^;]*)(;|\x24)"),a=c.exec(document.cookie);if(a){return a[2]||null}}return null};baidu.cookie.get=function(a){var b=baidu.cookie.getRaw(a);if("string"==typeof b){b=decodeURIComponent(b);return b}return null};baidu.cookie.setRaw=function(c,d,b){if(!baidu.cookie._isValidKey(c)){return}b=b||{};var a=b.expires;if("number"==typeof b.expires){a=new Date();a.setTime(a.getTime()+b.expires)}document.cookie=c+"="+d+(b.path?"; path="+b.path:"")+(a?"; expires="+a.toGMTString():"")+(b.domain?"; domain="+b.domain:"")+(b.secure?"; secure":"")};baidu.cookie.remove=function(b,a){a=a||{};a.expires=new Date(0);baidu.cookie.setRaw(b,"",a)};baidu.cookie.set=function(b,c,a){baidu.cookie.setRaw(b,encodeURIComponent(c),a)};baidu.dom=baidu.dom||{};baidu.dom._NAME_ATTRS=(function(){var a={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",usemap:"useMap",frameborder:"frameBorder"};if(baidu.browser.ie<8){a["for"]="htmlFor";a["class"]="className"}else{a.htmlFor="for";a.className="class"}return a})();baidu.lang=baidu.lang||{};baidu.lang.isString=function(a){return"[object String]"==Object.prototype.toString.call(a)};baidu.isString=baidu.lang.isString;baidu.dom._g=function(a){if(baidu.lang.isString(a)){return document.getElementById(a)}return a};baidu._g=baidu.dom._g;baidu.dom.g=function(a){if("string"==typeof a||a instanceof String){return document.getElementById(a)}else{if(a&&a.nodeName&&(a.nodeType==1||a.nodeType==9)){return a}}return null};baidu.g=baidu.G=baidu.dom.g;baidu.dom._matchNode=function(a,c,d){a=baidu.dom.g(a);for(var b=a[d];b;b=b[c]){if(b.nodeType==1){return b}}return null};baidu.dom._styleFilter=baidu.dom._styleFilter||[];baidu.dom._styleFilter[baidu.dom._styleFilter.length]={get:function(c,d){if(/color/i.test(c)&&d.indexOf("rgb(")!=-1){var e=d.split(",");d="#";for(var b=0,a;a=e[b];b++){a=parseInt(a.replace(/[^\d]/gi,""),10).toString(16);d+=a.length==1?"0"+a:a}d=d.toUpperCase()}return d}};baidu.dom._styleFilter.filter=function(b,e,f){for(var a=0,d=baidu.dom._styleFilter,c;c=d[a];a++){if(c=c[f]){e=c(b,e)}}return e};baidu.dom._styleFilter[baidu.dom._styleFilter.length]={set:function(a,b){if(b.constructor==Number&&!/zIndex|fontWeight|opacity|zoom|lineHeight/i.test(a)){b=b+"px"}return b}};baidu.dom._styleFixer=baidu.dom._styleFixer||{};baidu.dom._styleFixer.display=baidu.browser.ie&&baidu.browser.ie<8?{set:function(a,b){a=a.style;if(b=="inline-block"){a.display="inline";a.zoom=1}else{a.display=b}}}:baidu.browser.firefox&&baidu.browser.firefox<3?{set:function(a,b){a.style.display=b=="inline-block"?"-moz-inline-box":b}}:null;baidu.dom._styleFixer["float"]=baidu.browser.ie?"styleFloat":"cssFloat";baidu.dom._styleFixer.opacity=baidu.browser.ie?{get:function(a){var b=a.style.filter;return b&&b.indexOf("opacity=")>=0?(parseFloat(b.match(/opacity=([^)]*)/)[1])/100)+"":"1"},set:function(a,c){var b=a.style;b.filter=(b.filter||"").replace(/alpha\([^\)]*\)/gi,"")+(c==1?"":"alpha(opacity="+c*100+")");b.zoom=1}}:null;baidu.string=baidu.string||{};(function(){var a=new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)","g");baidu.string.trim=function(b){return String(b).replace(a,"")}})();baidu.trim=baidu.string.trim;baidu.dom.addClass=function(f,g){f=baidu.dom.g(f);var b=g.split(/\s+/),a=f.className,e=" "+a+" ",d=0,c=b.length;for(;d<c;d++){if(e.indexOf(" "+b[d]+" ")<0){a+=(a?" ":"")+b[d]}}f.className=a;return f};baidu.addClass=baidu.dom.addClass;baidu.dom.children=function(b){b=baidu.dom.g(b);for(var a=[],c=b.firstChild;c;c=c.nextSibling){if(c.nodeType==1){a.push(c)}}return a};baidu.dom.contains=function(a,b){var c=baidu.dom._g;a=c(a);b=c(b);return a.contains?a!=b&&a.contains(b):!!(a.compareDocumentPosition(b)&16)};baidu.dom.setAttr=function(b,a,c){b=baidu.dom.g(b);if("style"==a){b.style.cssText=c}else{a=baidu.dom._NAME_ATTRS[a]||a;b.setAttribute(a,c)}return b};baidu.setAttr=baidu.dom.setAttr;baidu.dom.setAttrs=function(c,a){c=baidu.dom.g(c);for(var b in a){baidu.dom.setAttr(c,b,a[b])}return c};baidu.setAttrs=baidu.dom.setAttrs;baidu.dom.create=function(c,a){var d=document.createElement(c),b=a||{};return baidu.dom.setAttrs(d,b)};baidu.dom.first=function(a){return baidu.dom._matchNode(a,"nextSibling","firstChild")};baidu.dom.getAttr=function(b,a){b=baidu.dom.g(b);if("style"==a){return b.style.cssText}a=baidu.dom._NAME_ATTRS[a]||a;return b.getAttribute(a)};baidu.getAttr=baidu.dom.getAttr;baidu.dom.getDocument=function(a){a=baidu.dom.g(a);return a.nodeType==9?a:a.ownerDocument||a.document};baidu.dom.getComputedStyle=function(b,a){b=baidu.dom._g(b);var d=baidu.dom.getDocument(b),c;if(d.defaultView&&d.defaultView.getComputedStyle){c=d.defaultView.getComputedStyle(b,null);if(c){return c[a]||c.getPropertyValue(a)}}return""};baidu.string.toCamelCase=function(a){if(a.indexOf("-")<0&&a.indexOf("_")<0){return a}return a.replace(/[-_][^-_]/g,function(b){return b.charAt(1).toUpperCase()})};baidu.dom.getStyle=function(c,b){var e=baidu.dom;c=e.g(c);b=baidu.string.toCamelCase(b);var d=c.style[b]||(c.currentStyle?c.currentStyle[b]:"")||e.getComputedStyle(c,b);if(!d){var a=e._styleFixer[b];d=a&&a.get?a.get(c):baidu.dom.getStyle(c,a)}if(a=e._styleFilter){d=a.filter(b,d,"get")}return d};baidu.getStyle=baidu.dom.getStyle;baidu.dom.getPosition=function(a){a=baidu.dom.g(a);var j=baidu.dom.getDocument(a),d=baidu.browser,g=baidu.dom.getStyle,c=d.isGecko>0&&j.getBoxObjectFor&&g(a,"position")=="absolute"&&(a.style.top===""||a.style.left===""),h={left:0,top:0},f=(d.ie&&!d.isStrict)?j.body:j.documentElement,k,b;if(a==f){return h}if(a.getBoundingClientRect){b=a.getBoundingClientRect();h.left=Math.floor(b.left)+Math.max(j.documentElement.scrollLeft,j.body.scrollLeft);h.top=Math.floor(b.top)+Math.max(j.documentElement.scrollTop,j.body.scrollTop);h.left-=j.documentElement.clientLeft;h.top-=j.documentElement.clientTop;var i=j.body,l=parseInt(g(i,"borderLeftWidth")),e=parseInt(g(i,"borderTopWidth"));if(d.ie&&!d.isStrict){h.left-=isNaN(l)?2:l;h.top-=isNaN(e)?2:e}}else{k=a;do{h.left+=k.offsetLeft;h.top+=k.offsetTop;if(d.isWebkit>0&&g(k,"position")=="fixed"){h.left+=j.body.scrollLeft;h.top+=j.body.scrollTop;break}k=k.offsetParent}while(k&&k!=a);if(d.opera>0||(d.isWebkit>0&&g(a,"position")=="absolute")){h.top-=j.body.offsetTop}k=a.offsetParent;while(k&&k!=j.body){h.left-=k.scrollLeft;if(!d.opera||k.tagName!="TR"){h.top-=k.scrollTop}k=k.offsetParent}}return h};baidu.dom.hasClass=function(c,d){c=baidu.dom.g(c);var b=baidu.string.trim(d).split(/\s+/),a=b.length;d=c.className.split(/\s+/).join(" ");while(a--){if(!(new RegExp("(^| )"+b[a]+"( |\x24)")).test(d)){return false}}return true};baidu.dom.hide=function(a){a=baidu.dom.g(a);a.style.display="none";return a};baidu.hide=baidu.dom.hide;baidu.dom.insertAfter=function(d,c){var b,a;b=baidu.dom._g;d=b(d);c=b(c);a=c.parentNode;if(a){a.insertBefore(d,c.nextSibling)}return d};baidu.dom.insertBefore=function(d,c){var b,a;b=baidu.dom._g;d=b(d);c=b(c);a=c.parentNode;if(a){a.insertBefore(d,c)}return d};baidu.dom.insertHTML=function(d,a,c){d=baidu.dom.g(d);var b,e;if(d.insertAdjacentHTML){d.insertAdjacentHTML(a,c)}else{b=d.ownerDocument.createRange();a=a.toUpperCase();if(a=="AFTERBEGIN"||a=="BEFOREEND"){b.selectNodeContents(d);b.collapse(a=="AFTERBEGIN")}else{e=a=="BEFOREBEGIN";b[e?"setStartBefore":"setEndAfter"](d);b.collapse(e)}b.insertNode(b.createContextualFragment(c))}return d};baidu.insertHTML=baidu.dom.insertHTML;baidu.dom.next=function(a){return baidu.dom._matchNode(a,"nextSibling","nextSibling")};baidu.string.escapeReg=function(a){return String(a).replace(new RegExp("([.*+?^=!:\x24{}()|[\\]/\\\\])","g"),"\\\x241")};baidu.dom.q=function(h,e,b){var j=[],d=baidu.string.trim,g,f,a,c;if(!(h=d(h))){return j}if("undefined"==typeof e){e=document}else{e=baidu.dom.g(e);if(!e){return j}}b&&(b=d(b).toUpperCase());if(e.getElementsByClassName){a=e.getElementsByClassName(h);g=a.length;for(f=0;f<g;f++){c=a[f];if(b&&c.tagName!=b){continue}j[j.length]=c}}else{h=new RegExp("(^|\\s)"+baidu.string.escapeReg(h)+"(\\s|\x24)");a=b?e.getElementsByTagName(b):(e.all||e.getElementsByTagName("*"));g=a.length;for(f=0;f<g;f++){c=a[f];h.test(c.className)&&(j[j.length]=c)}}return j};baidu.q=baidu.Q=baidu.dom.q;(function(){var a=baidu.dom.ready=function(){var e=false,d=[];function b(){if(!b.isReady){b.isReady=true;for(var g=0,f=d.length;g<f;g++){d[g]()}}}function c(){if(e){return}e=true;var i=document,g=window,f=baidu.browser.opera;if(i.addEventListener){i.addEventListener("DOMContentLoaded",f?function(){if(b.isReady){return}for(var j=0;j<i.styleSheets.length;j++){if(i.styleSheets[j].disabled){setTimeout(arguments.callee,0);return}}b()}:b,false)}else{if(baidu.browser.ie&&g==top){(function(){if(b.isReady){return}try{i.documentElement.doScroll("left")}catch(j){setTimeout(arguments.callee,0);return}b()})()}else{if(baidu.browser.safari){var h;(function(){if(b.isReady){return}if(i.readyState!="loaded"&&i.readyState!="complete"){setTimeout(arguments.callee,0);return}if(h===undefined){h=0;var n=i.getElementsByTagName("style"),l=i.getElementsByTagName("link");if(n){h+=n.length}if(l){for(var m=0,k=l.length;m<k;m++){if(l[m].getAttribute("rel")=="stylesheet"){h++}}}}if(i.styleSheets.length!=h){setTimeout(arguments.callee,0);return}b()})()}}}g.attachEvent?g.attachEvent("onload",b):g.addEventListener("load",b,false)}c();return function(f){b.isReady?f():(d[d.length]=f)}}();a.isReady=false})();baidu.dom.remove=function(a){a=baidu.dom._g(a);var b=a.parentNode;b&&b.removeChild(a)};baidu.dom.removeClass=function(f,g){f=baidu.dom.g(f);var d=f.className.split(/\s+/),h=g.split(/\s+/),b,a=h.length,c,e=0;for(;e<a;++e){for(c=0,b=d.length;c<b;++c){if(d[c]==h[e]){d.splice(c,1);break}}}f.className=d.join(" ");return f};baidu.removeClass=baidu.dom.removeClass;baidu.dom.setStyle=function(c,b,d){var e=baidu.dom,a;c=e.g(c);b=baidu.string.toCamelCase(b);if(a=e._styleFilter){d=a.filter(b,d,"set")}a=e._styleFixer[b];(a&&a.set)?a.set(c,d):(c.style[a||b]=d);return c};baidu.setStyle=baidu.dom.setStyle;baidu.dom.setStyles=function(b,c){b=baidu.dom.g(b);for(var a in c){baidu.dom.setStyle(b,a,c[a])}return b};baidu.setStyles=baidu.dom.setStyles;baidu.dom.show=function(a){a=baidu.dom.g(a);a.style.display="";return a};baidu.show=baidu.dom.show;baidu.dom.toggle=function(a){a=baidu.dom.g(a);a.style.display=a.style.display=="none"?"":"none";return a};baidu.event=baidu.event||{};baidu.event.EventArg=function(c,e){e=e||window;c=c||e.event;var d=e.document;this.target=(c.target)||c.srcElement;this.keyCode=c.which||c.keyCode;for(var a in c){var b=c[a];if("function"!=typeof b){this[a]=b}}if(!this.pageX&&this.pageX!==0){this.pageX=(c.clientX||0)+(d.documentElement.scrollLeft||d.body.scrollLeft);this.pageY=(c.clientY||0)+(d.documentElement.scrollTop||d.body.scrollTop)}this._event=c};baidu.event.EventArg.prototype.preventDefault=function(){if(this._event.preventDefault){this._event.preventDefault()}else{this._event.returnValue=false}return this};baidu.event.EventArg.prototype.stopPropagation=function(){if(this._event.stopPropagation){this._event.stopPropagation()}else{this._event.cancelBubble=true}return this};baidu.event.EventArg.prototype.stop=function(){return this.stopPropagation().preventDefault()};baidu.event._listeners=baidu.event._listeners||[];baidu.event.get=function(a,b){return new baidu.event.EventArg(a,b)};baidu.event.getTarget=function(a){return a.target||a.srcElement};baidu.event.on=function(b,e,g){e=e.replace(/^on/i,"");b=baidu.dom._g(b);var f=function(i){g.call(b,i)},a=baidu.event._listeners,d=baidu.event._eventFilter,h,c=e;e=e.toLowerCase();if(d&&d[e]){h=d[e](b,e,f);c=h.type;f=h.listener}if(b.addEventListener){b.addEventListener(c,f,false)}else{if(b.attachEvent){b.attachEvent("on"+c,f)}}a[a.length]=[b,e,g,f,c];return b};baidu.on=baidu.event.on;baidu.event.preventDefault=function(a){if(a.preventDefault){a.preventDefault()}else{a.returnValue=false}};baidu.event.un=function(c,f,b){c=baidu.dom._g(c);f=f.replace(/^on/i,"").toLowerCase();var i=baidu.event._listeners,d=i.length,e=!b,h,g,a;while(d--){h=i[d];if(h[1]===f&&h[0]===c&&(e||h[2]===b)){g=h[4];a=h[3];if(c.removeEventListener){c.removeEventListener(g,a,false)}else{if(c.detachEvent){c.detachEvent("on"+g,a)}}i.splice(d,1)}}return c};baidu.un=baidu.event.un;baidu.json=baidu.json||{};baidu.json.parse=function(a){return(new Function("return ("+a+")"))()};baidu.json.stringify=(function(){var b={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function a(f){if(/["\\\x00-\x1f]/.test(f)){f=f.replace(/["\\\x00-\x1f]/g,function(g){var h=b[g];if(h){return h}h=g.charCodeAt();return"\\u00"+Math.floor(h/16).toString(16)+(h%16).toString(16)})}return'"'+f+'"'}function d(m){var g=["["],h=m.length,f,j,k;for(j=0;j<h;j++){k=m[j];switch(typeof k){case"undefined":case"function":case"unknown":break;default:if(f){g.push(",")}g.push(baidu.json.stringify(k));f=1}}g.push("]");return g.join("")}function c(f){return f<10?"0"+f:f}function e(f){return'"'+f.getFullYear()+"-"+c(f.getMonth()+1)+"-"+c(f.getDate())+"T"+c(f.getHours())+":"+c(f.getMinutes())+":"+c(f.getSeconds())+'"'}return function(k){switch(typeof k){case"undefined":return"undefined";case"number":return isFinite(k)?String(k):"null";case"string":return a(k);case"boolean":return String(k);default:if(k===null){return"null"}else{if(k instanceof Array){return d(k)}else{if(k instanceof Date){return e(k)}else{var g=["{"],j=baidu.json.stringify,f,i;for(var h in k){if(Object.prototype.hasOwnProperty.call(k,h)){i=k[h];switch(typeof i){case"undefined":case"unknown":case"function":break;default:if(f){g.push(",")}f=1;g.push(j(h)+":"+j(i))}}}g.push("}");return g.join("")}}}}}})();(function(){var a=window[baidu.guid];baidu.lang.guid=function(){return"TANGRAM__"+(a._counter++).toString(36)};a._counter=a._counter||1})();window[baidu.guid]._instances=window[baidu.guid]._instances||{};baidu.lang.isFunction=function(a){return"[object Function]"==Object.prototype.toString.call(a)};baidu.lang.Class=function(a){this.guid=a||baidu.lang.guid();window[baidu.guid]._instances[this.guid]=this};window[baidu.guid]._instances=window[baidu.guid]._instances||{};baidu.lang.Class.prototype.dispose=function(){delete window[baidu.guid]._instances[this.guid];for(var a in this){if(!baidu.lang.isFunction(this[a])){delete this[a]}}this.disposed=true};baidu.lang.Class.prototype.toString=function(){return"[object "+(this._className||"Object")+"]"};baidu.lang.Event=function(a,b){this.type=a;this.returnValue=true;this.target=b||null;this.currentTarget=null};baidu.lang.Class.prototype.addEventListener=function(d,c,b){if(!baidu.lang.isFunction(c)){return}!this.__listeners&&(this.__listeners={});var a=this.__listeners,e;if(typeof b=="string"&&b){if(/[^\w\-]/.test(b)){throw ("nonstandard key:"+b)}else{c.hashCode=b;e=b}}d.indexOf("on")!=0&&(d="on"+d);typeof a[d]!="object"&&(a[d]={});e=e||baidu.lang.guid();c.hashCode=e;a[d][e]=c};baidu.lang.Class.prototype.removeEventListener=function(d,c){if(typeof c!="undefined"){if(baidu.lang.isFunction(c)){c=c.hashCode}else{if(!baidu.lang.isString(c)){return}}}!this.__listeners&&(this.__listeners={});d.indexOf("on")!=0&&(d="on"+d);var b=this.__listeners;if(!b[d]){return}if(typeof c!="undefined"){b[d][c]&&delete b[d][c]}else{for(var a in b[d]){delete b[d][a]}}};baidu.lang.Class.prototype.dispatchEvent=function(d,a){if(baidu.lang.isString(d)){d=new baidu.lang.Event(d)}!this.__listeners&&(this.__listeners={});a=a||{};for(var c in a){d[c]=a[c]}var c,b=this.__listeners,e=d.type;d.target=d.target||this;d.currentTarget=this;e.indexOf("on")!=0&&(e="on"+e);baidu.lang.isFunction(this[e])&&this[e].apply(this,arguments);if(typeof b[e]=="object"){for(c in b[e]){b[e][c].apply(this,arguments)}}return d.returnValue};baidu.lang.inherits=function(g,e,d){var c,f,a=g.prototype,b=new Function();b.prototype=e.prototype;f=g.prototype=new b();for(c in a){f[c]=a[c]}g.prototype.constructor=g;g.superClass=e.prototype;if("string"==typeof d){f._className=d}};baidu.inherits=baidu.lang.inherits;baidu.lang.instance=function(a){return window[baidu.guid]._instances[a]||null};baidu.lang.isArray=function(a){return"[object Array]"==Object.prototype.toString.call(a)};baidu.lang.isElement=function(a){return !!(a&&a.nodeName&&a.nodeType==1)};baidu.lang.isNumber=function(a){return"[object Number]"==Object.prototype.toString.call(a)&&isFinite(a)};baidu.lang.isObject=function(a){return"function"==typeof a||!!(a&&"object"==typeof a)};baidu.isObject=baidu.lang.isObject;baidu.lang.module=function(name,module,owner){var packages=name.split("."),len=packages.length-1,packageName,i=0;if(!owner){try{if(!(new RegExp("^[a-zA-Z_\x24][a-zA-Z0-9_\x24]*\x24")).test(packages[0])){throw""}owner=eval(packages[0]);i=1}catch(e){owner=window}}for(;i<len;i++){packageName=packages[i];if(!owner[packageName]){owner[packageName]={}}owner=owner[packageName]}if(!owner[packages[len]]){owner[packages[len]]=module}};baidu.lang.toArray=function(b){if(b===null||b===undefined){return[]}if(baidu.lang.isArray(b)){return b}if(typeof b.length!=="number"||typeof b==="string"||baidu.lang.isFunction(b)){return[b]}if(b.item){var a=b.length,c=new Array(a);while(a--){c[a]=b[a]}return c}return[].slice.call(b)};baidu.object=baidu.object||{};baidu.object.isPlain=function(c){var b=Object.prototype.hasOwnProperty,a;if(!c||Object.prototype.toString.call(c)!=="[object Object]"||!("isPrototypeOf" in c)){return false}if(c.constructor&&!b.call(c,"constructor")&&!b.call(c.constructor.prototype,"isPrototypeOf")){return false}for(a in c){}return a===undefined||b.call(c,a)};baidu.object.clone=function(e){var b=e,c,a;if(!e||e instanceof Number||e instanceof String||e instanceof Boolean){return b}else{if(baidu.lang.isArray(e)){b=[];var d=0;for(c=0,a=e.length;c<a;c++){b[d++]=baidu.object.clone(e[c])}}else{if(baidu.object.isPlain(e)){b={};for(c in e){if(e.hasOwnProperty(c)){b[c]=baidu.object.clone(e[c])}}}}}return b};baidu.extend=baidu.object.extend=function(c,a){for(var b in a){if(a.hasOwnProperty(b)){c[b]=a[b]}}return c};baidu.page=baidu.page||{};baidu.page.getScrollTop=function(){var a=document;return window.pageYOffset||a.documentElement.scrollTop||a.body.scrollTop};baidu.page.getViewHeight=function(){var b=document,a=b.compatMode=="BackCompat"?b.body:b.documentElement;return a.clientHeight};baidu.page.getViewWidth=function(){var b=document,a=b.compatMode=="BackCompat"?b.body:b.documentElement;return a.clientWidth};baidu.sio=baidu.sio||{};baidu.sio._removeScriptTag=function(b){if(b.clearAttributes){b.clearAttributes()}else{for(var a in b){if(b.hasOwnProperty(a)){delete b[a]}}}if(b&&b.parentNode){b.parentNode.removeChild(b)}b=null};baidu.sio._createScriptTag=function(b,a,c){b.setAttribute("type","text/javascript");c&&b.setAttribute("charset",c);b.setAttribute("src",a);document.getElementsByTagName("head")[0].appendChild(b)};baidu.sio.callByBrowser=function(a,g,i){var d=document.createElement("SCRIPT"),e=0,j=i||{},c=j.charset,h=g||function(){},f=j.timeOut||0,b;d.onload=d.onreadystatechange=function(){if(e){return}var k=d.readyState;if("undefined"==typeof k||k=="loaded"||k=="complete"){e=1;try{h();clearTimeout(b)}finally{d.onload=d.onreadystatechange=null;baidu.sio._removeScriptTag(d)}}};if(f){b=setTimeout(function(){d.onload=d.onreadystatechange=null;baidu.sio._removeScriptTag(d);j.onfailure&&j.onfailure()},f)}baidu.sio._createScriptTag(d,a,c)};baidu.sio.callByServer=function(a,k,l){var g=document.createElement("SCRIPT"),f="bd__cbs__",i,d,m=l||{},c=m.charset,e=m.queryField||"callback",j=m.timeOut||0,b;if(baidu.lang.isFunction(k)){i=f+Math.floor(Math.random()*2147483648).toString(36);window[i]=h(0)}else{i=k}if(j){b=setTimeout(h(1),j)}function h(n){return function(){try{if(n){m.onfailure&&m.onfailure()}else{k.apply(window,arguments);clearTimeout(b)}window[i]=null;delete window[i]}catch(o){}finally{baidu.sio._removeScriptTag(g)}}}a=a.replace((new RegExp("(\\?|&)callback=[^&]*")),"\x241"+e+"="+i);if(a.search(new RegExp("(\\?|&)"+e+"=/"))<0){a+=(a.indexOf("?")<0?"?":"&")+e+"="+i}baidu.sio._createScriptTag(g,a,c)};baidu.string.decodeHTML=function(a){var b=String(a).replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");return b.replace(/&#([\d]+);/g,function(d,c){return String.fromCharCode(parseInt(c,10))})};baidu.decodeHTML=baidu.string.decodeHTML;baidu.string.encodeHTML=function(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")};baidu.encodeHTML=baidu.string.encodeHTML;baidu.string.format=function(c,a){c=String(c);var b=Array.prototype.slice.call(arguments,1),d=Object.prototype.toString;if(b.length){b=b.length==1?(a!==null&&(/\[object Array\]|\[object Object\]/.test(d.call(a)))?a:b):b;return c.replace(/#\{(.+?)\}/g,function(e,g){var f=b[g];if("[object Function]"==d.call(f)){f=f(g)}return("undefined"==typeof f?"":f)})}return c};baidu.format=baidu.string.format;baidu.string.getByteLength=function(a){return String(a).replace(/[^\x00-\xff]/g,"ci").length};baidu.swf=baidu.swf||{};baidu.swf.version=(function(){var h=navigator;if(h.plugins&&h.mimeTypes.length){var d=h.plugins["Shockwave Flash"];if(d&&d.description){return d.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")+".0"}}else{if(window.ActiveXObject&&!window.opera){for(var b=10;b>=2;b--){try{var g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+b);if(g){var a=g.GetVariable("$version");return a.replace(/WIN/g,"").replace(/,/g,".")}}catch(f){}}}}})();baidu.swf.createHTML=function(s){s=s||{};var j=baidu.swf.version,g=s.ver||"6.0.0",f,d,e,c,h,r,a={},o=baidu.string.encodeHTML;for(c in s){a[c]=s[c]}s=a;if(j){j=j.split(".");g=g.split(".");for(e=0;e<3;e++){f=parseInt(j[e],10);d=parseInt(g[e],10);if(d<f){break}else{if(d>f){return""}}}}else{return""}var m=s.vars,l=["classid","codebase","id","width","height","align"];s.align=s.align||"middle";s.classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000";s.codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0";s.movie=s.url||"";delete s.vars;delete s.url;if("string"==typeof m){s.flashvars=m}else{var p=[];for(c in m){r=m[c];if(r){p.push(c+"="+encodeURIComponent(r))}}s.flashvars=p.join("&")}var n=["<object "];for(e=0,h=l.length;e<h;e++){r=l[e];n.push(" ",r,'="',o(s[r]),'"')}n.push(">");var b={wmode:1,scale:1,quality:1,play:1,loop:1,menu:1,salign:1,bgcolor:1,base:1,allowscriptaccess:1,allownetworking:1,allowfullscreen:1,seamlesstabbing:1,devicefont:1,swliveconnect:1,flashvars:1,movie:1};for(c in s){r=s[c];c=c.toLowerCase();if(b[c]&&r){n.push('<param name="'+c+'" value="'+o(r)+'" />')}}s.src=s.movie;s.name=s.id;delete s.id;delete s.movie;delete s.classid;delete s.codebase;s.type="application/x-shockwave-flash";s.pluginspage="http://www.macromedia.com/go/getflashplayer";n.push("<embed");var q;for(c in s){r=s[c];if(r){if((new RegExp("^salign\x24","i")).test(c)){q=r;continue}n.push(" ",c,'="',o(r),'"')}}if(q){n.push(' salign="',o(q),'"')}n.push("></embed></object>");return n.join("")};baidu.swf.create=function(a,c){a=a||{};var b=baidu.swf.createHTML(a)||a.errorMessage||"";if(c&&"string"==typeof c){c=document.getElementById(c)}if(c){c.innerHTML=b}else{document.write(b)}};baidu.swf.getMovie=function(c){var a=document[c],b;return baidu.browser.ie==9?a&&a.length?(b=baidu.array.remove(baidu.lang.toArray(a),function(d){return d.tagName.toLowerCase()!="embed"})).length==1?b[0]:b:a:a||window[c]};baidu.url=baidu.url||{};baidu.url.getQueryValue=function(b,c){var d=new RegExp("(^|&|\\?|#)"+baidu.string.escapeReg(c)+"=([^&#]*)(&|\x24|#)","");var a=b.match(d);if(a){return a[2]}return null};