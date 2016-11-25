/* Zepto v1.0-1-ga3cab6c - polyfill zepto detect event ajax form fx - zeptojs.com/license */
(function(e){String.prototype.trim===e&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===e&&(Array.prototype.reduce=function(t){if(this===void 0||this===null)throw new TypeError;var n=Object(this),r=n.length>>>0,i=0,s;if(typeof t!="function")throw new TypeError;if(r==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)s=arguments[1];else do{if(i in n){s=n[i++];break}if(++i>=r)throw new TypeError}while(!0);while(i<r)i in n&&(s=t.call(e,s,n[i],i,n)),i++;return s})})();var Zepto=function(){function e(e){return e==null?String(e):V[$.call(e)]||"object"}function t(t){return e(t)=="function"}function n(e){return e!=null&&e==e.window}function r(e){return e!=null&&e.nodeType==e.DOCUMENT_NODE}function i(t){return e(t)=="object"}function s(e){return i(e)&&!n(e)&&e.__proto__==Object.prototype}function o(e){return e instanceof Array}function u(e){return typeof e.length=="number"}function a(e){return L.call(e,function(e){return e!=null})}function f(e){return e.length>0?T.fn.concat.apply([],e):e}function l(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function c(e){return e in M?M[e]:M[e]=new RegExp("(^|\\s)"+e+"(\\s|$)")}function h(e,t){return typeof t=="number"&&!D[l(e)]?t+"px":t}function p(e){var t,n;return O[e]||(t=A.createElement(e),A.body.appendChild(t),n=_(t,"").getPropertyValue("display"),t.parentNode.removeChild(t),n=="none"&&(n="block"),O[e]=n),O[e]}function d(e){return"children"in e?k.call(e.children):T.map(e.childNodes,function(e){if(e.nodeType==1)return e})}function v(e,t,n){for(x in t)n&&(s(t[x])||o(t[x]))?(s(t[x])&&!s(e[x])&&(e[x]={}),o(t[x])&&!o(e[x])&&(e[x]=[]),v(e[x],t[x],n)):t[x]!==S&&(e[x]=t[x])}function m(e,t){return t===S?T(e):T(e).filter(t)}function g(e,n,r,i){return t(n)?n.call(e,r,i):n}function y(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function b(e,t){var n=e.className,r=n&&n.baseVal!==S;if(t===S)return r?n.baseVal:n;r?n.baseVal=t:e.className=t}function w(e){var t;try{return e?e=="true"||(e=="false"?!1:e=="null"?null:isNaN(t=Number(e))?/^[\[\{]/.test(e)?T.parseJSON(e):e:t):e}catch(n){return e}}function E(e,t){t(e);for(var n in e.childNodes)E(e.childNodes[n],t)}var S,x,T,N,C=[],k=C.slice,L=C.filter,A=window.document,O={},M={},_=A.defaultView.getComputedStyle,D={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},P=/^\s*<(\w+|!)[^>]*>/,H=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,B=/^(?:body|html)$/i,j=["val","css","html","text","data","width","height","offset"],F=["after","prepend","before","append"],I=A.createElement("table"),q=A.createElement("tr"),R={tr:A.createElement("tbody"),tbody:I,thead:I,tfoot:I,td:q,th:q,"*":A.createElement("div")},U=/complete|loaded|interactive/,z=/^\.([\w-]+)$/,W=/^#([\w-]*)$/,X=/^[\w-]+$/,V={},$=V.toString,J={},K,Q,G=A.createElement("div");return J.matches=function(e,t){if(!e||e.nodeType!==1)return!1;var n=e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.matchesSelector;if(n)return n.call(e,t);var r,i=e.parentNode,s=!i;return s&&(i=G).appendChild(e),r=~J.qsa(i,t).indexOf(e),s&&G.removeChild(e),r},K=function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},Q=function(e){return L.call(e,function(t,n){return e.indexOf(t)==n})},J.fragment=function(e,t,n){e.replace&&(e=e.replace(H,"<$1></$2>")),t===S&&(t=P.test(e)&&RegExp.$1),t in R||(t="*");var r,i,o=R[t];return o.innerHTML=""+e,i=T.each(k.call(o.childNodes),function(){o.removeChild(this)}),s(n)&&(r=T(i),T.each(n,function(e,t){j.indexOf(e)>-1?r[e](t):r.attr(e,t)})),i},J.Z=function(e,t){return e=e||[],e.__proto__=T.fn,e.selector=t||"",e},J.isZ=function(e){return e instanceof J.Z},J.init=function(e,n){if(!e)return J.Z();if(t(e))return T(A).ready(e);if(J.isZ(e))return e;var r;if(o(e))r=a(e);else if(i(e))r=[s(e)?T.extend({},e):e],e=null;else if(P.test(e))r=J.fragment(e.trim(),RegExp.$1,n),e=null;else{if(n!==S)return T(n).find(e);r=J.qsa(A,e)}return J.Z(r,e)},T=function(e,t){return J.init(e,t)},T.extend=function(e){var t,n=k.call(arguments,1);return typeof e=="boolean"&&(t=e,e=n.shift()),n.forEach(function(n){v(e,n,t)}),e},J.qsa=function(e,t){var n;return r(e)&&W.test(t)?(n=e.getElementById(RegExp.$1))?[n]:[]:e.nodeType!==1&&e.nodeType!==9?[]:k.call(z.test(t)?e.getElementsByClassName(RegExp.$1):X.test(t)?e.getElementsByTagName(t):e.querySelectorAll(t))},T.contains=function(e,t){return e!==t&&e.contains(t)},T.type=e,T.isFunction=t,T.isWindow=n,T.isArray=o,T.isPlainObject=s,T.isEmptyObject=function(e){var t;for(t in e)return!1;return!0},T.inArray=function(e,t,n){return C.indexOf.call(t,e,n)},T.camelCase=K,T.trim=function(e){return e.trim()},T.uuid=0,T.support={},T.expr={},T.map=function(e,t){var n,r=[],i,s;if(u(e))for(i=0;i<e.length;i++)n=t(e[i],i),n!=null&&r.push(n);else for(s in e)n=t(e[s],s),n!=null&&r.push(n);return f(r)},T.each=function(e,t){var n,r;if(u(e)){for(n=0;n<e.length;n++)if(t.call(e[n],n,e[n])===!1)return e}else for(r in e)if(t.call(e[r],r,e[r])===!1)return e;return e},T.grep=function(e,t){return L.call(e,t)},window.JSON&&(T.parseJSON=JSON.parse),T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){V["[object "+t+"]"]=t.toLowerCase()}),T.fn={forEach:C.forEach,reduce:C.reduce,push:C.push,sort:C.sort,indexOf:C.indexOf,concat:C.concat,map:function(e){return T(T.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return T(k.apply(this,arguments))},ready:function(e){return U.test(A.readyState)?e(T):A.addEventListener("DOMContentLoaded",function(){e(T)},!1),this},get:function(e){return e===S?k.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(e){return C.every.call(this,function(t,n){return e.call(t,n,t)!==!1}),this},filter:function(e){return t(e)?this.not(this.not(e)):T(L.call(this,function(t){return J.matches(t,e)}))},add:function(e,t){return T(Q(this.concat(T(e,t))))},is:function(e){return this.length>0&&J.matches(this[0],e)},not:function(e){var n=[];if(t(e)&&e.call!==S)this.each(function(t){e.call(this,t)||n.push(this)});else{var r=typeof e=="string"?this.filter(e):u(e)&&t(e.item)?k.call(e):T(e);this.forEach(function(e){r.indexOf(e)<0&&n.push(e)})}return T(n)},has:function(e){return this.filter(function(){return i(e)?T.contains(this,e):T(this).find(e).size()})},eq:function(e){return e===-1?this.slice(e):this.slice(e,+e+1)},first:function(){var e=this[0];return e&&!i(e)?e:T(e)},last:function(){var e=this[this.length-1];return e&&!i(e)?e:T(e)},find:function(e){var t,n=this;return typeof e=="object"?t=T(e).filter(function(){var e=this;return C.some.call(n,function(t){return T.contains(t,e)})}):this.length==1?t=T(J.qsa(this[0],e)):t=this.map(function(){return J.qsa(this,e)}),t},closest:function(e,t){var n=this[0],i=!1;typeof e=="object"&&(i=T(e));while(n&&!(i?i.indexOf(n)>=0:J.matches(n,e)))n=n!==t&&!r(n)&&n.parentNode;return T(n)},parents:function(e){var t=[],n=this;while(n.length>0)n=T.map(n,function(e){if((e=e.parentNode)&&!r(e)&&t.indexOf(e)<0)return t.push(e),e});return m(t,e)},parent:function(e){return m(Q(this.pluck("parentNode")),e)},children:function(e){return m(this.map(function(){return d(this)}),e)},contents:function(){return this.map(function(){return k.call(this.childNodes)})},siblings:function(e){return m(this.map(function(e,t){return L.call(d(t.parentNode),function(e){return e!==t})}),e)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return T.map(this,function(t){return t[e]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),_(this,"").getPropertyValue("display")=="none"&&(this.style.display=p(this.nodeName))})},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){var n=t(e);if(this[0]&&!n)var r=T(e).get(0),i=r.parentNode||this.length>1;return this.each(function(t){T(this).wrapAll(n?e.call(this,t):i?r.cloneNode(!0):r)})},wrapAll:function(e){if(this[0]){T(this[0]).before(e=T(e));var t;while((t=e.children()).length)e=t.first();T(e).append(this)}return this},wrapInner:function(e){var n=t(e);return this.each(function(t){var r=T(this),i=r.contents(),s=n?e.call(this,t):e;i.length?i.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){T(this).replaceWith(T(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var t=T(this);(e===S?t.css("display")=="none":e)?t.show():t.hide()})},prev:function(e){return T(this.pluck("previousElementSibling")).filter(e||"*")},next:function(e){return T(this.pluck("nextElementSibling")).filter(e||"*")},html:function(e){return e===S?this.length>0?this[0].innerHTML:null:this.each(function(t){var n=this.innerHTML;T(this).empty().append(g(this,e,t,n))})},text:function(e){return e===S?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e})},attr:function(e,t){var n;return typeof e=="string"&&t===S?this.length==0||this[0].nodeType!==1?S:e=="value"&&this[0].nodeName=="INPUT"?this.val():!(n=this[0].getAttribute(e))&&e in this[0]?this[0][e]:n:this.each(function(n){if(this.nodeType!==1)return;if(i(e))for(x in e)y(this,x,e[x]);else y(this,e,g(this,t,n,this.getAttribute(e)))})},removeAttr:function(e){return this.each(function(){this.nodeType===1&&y(this,e)})},prop:function(e,t){return t===S?this[0]&&this[0][e]:this.each(function(n){this[e]=g(this,t,n,this[e])})},data:function(e,t){var n=this.attr("data-"+l(e),t);return n!==null?w(n):S},val:function(e){return e===S?this[0]&&(this[0].multiple?T(this[0]).find("option").filter(function(e){return this.selected}).pluck("value"):this[0].value):this.each(function(t){this.value=g(this,e,t,this.value)})},offset:function(e){if(e)return this.each(function(t){var n=T(this),r=g(this,e,t,n.offset()),i=n.offsetParent().offset(),s={top:r.top-i.top,left:r.left-i.left};n.css("position")=="static"&&(s.position="relative"),n.css(s)});if(this.length==0)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,n){if(arguments.length<2&&typeof t=="string")return this[0]&&(this[0].style[K(t)]||_(this[0],"").getPropertyValue(t));var r="";if(e(t)=="string")!n&&n!==0?this.each(function(){this.style.removeProperty(l(t))}):r=l(t)+":"+h(t,n);else for(x in t)!t[x]&&t[x]!==0?this.each(function(){this.style.removeProperty(l(x))}):r+=l(x)+":"+h(x,t[x])+";";return this.each(function(){this.style.cssText+=";"+r})},index:function(e){return e?this.indexOf(T(e)[0]):this.parent().children().indexOf(this[0])},hasClass:function(e){return C.some.call(this,function(e){return this.test(b(e))},c(e))},addClass:function(e){return this.each(function(t){N=[];var n=b(this),r=g(this,e,t,n);r.split(/\s+/g).forEach(function(e){T(this).hasClass(e)||N.push(e)},this),N.length&&b(this,n+(n?" ":"")+N.join(" "))})},removeClass:function(e){return this.each(function(t){if(e===S)return b(this,"");N=b(this),g(this,e,t,N).split(/\s+/g).forEach(function(e){N=N.replace(c(e)," ")}),b(this,N.trim())})},toggleClass:function(e,t){return this.each(function(n){var r=T(this),i=g(this,e,n,b(this));i.split(/\s+/g).forEach(function(e){(t===S?!r.hasClass(e):t)?r.addClass(e):r.removeClass(e)})})},scrollTop:function(){if(!this.length)return;return"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY},position:function(){if(!this.length)return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=B.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(T(e).css("margin-top"))||0,n.left-=parseFloat(T(e).css("margin-left"))||0,r.top+=parseFloat(T(t[0]).css("border-top-width"))||0,r.left+=parseFloat(T(t[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||A.body;while(e&&!B.test(e.nodeName)&&T(e).css("position")=="static")e=e.offsetParent;return e})}},T.fn.detach=T.fn.remove,["width","height"].forEach(function(e){T.fn[e]=function(t){var i,s=this[0],o=e.replace(/./,function(e){return e[0].toUpperCase()});return t===S?n(s)?s["inner"+o]:r(s)?s.documentElement["offset"+o]:(i=this.offset())&&i[e]:this.each(function(n){s=T(this),s.css(e,g(this,t,n,s[e]()))})}}),F.forEach(function(t,n){var r=n%2;T.fn[t]=function(){var t,i=T.map(arguments,function(n){return t=e(n),t=="object"||t=="array"||n==null?n:J.fragment(n)}),s,o=this.length>1;return i.length<1?this:this.each(function(e,t){s=r?t:t.parentNode,t=n==0?t.nextSibling:n==1?t.firstChild:n==2?t:null,i.forEach(function(e){if(o)e=e.cloneNode(!0);else if(!s)return T(e).remove();E(s.insertBefore(e,t),function(e){e.nodeName!=null&&e.nodeName.toUpperCase()==="SCRIPT"&&(!e.type||e.type==="text/javascript")&&!e.src&&window.eval.call(window,e.innerHTML)})})})},T.fn[r?t+"To":"insert"+(n?"Before":"After")]=function(e){return T(e)[t](this),this}}),J.Z.prototype=T.fn,J.uniq=Q,J.deserializeValue=w,T.zepto=J,T}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(e){function t(e){var t=this.os={},n=this.browser={},r=e.match(/WebKit\/([\d.]+)/),i=e.match(/(Android)\s+([\d.]+)/),s=e.match(/(iPad).*OS\s([\d_]+)/),o=!s&&e.match(/(iPhone\sOS)\s([\d_]+)/),u=e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),a=u&&e.match(/TouchPad/),f=e.match(/Kindle\/([\d.]+)/),l=e.match(/Silk\/([\d._]+)/),c=e.match(/(BlackBerry).*Version\/([\d.]+)/),h=e.match(/(BB10).*Version\/([\d.]+)/),p=e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),d=e.match(/PlayBook/),v=e.match(/Chrome\/([\d.]+)/)||e.match(/CriOS\/([\d.]+)/),m=e.match(/Firefox\/([\d.]+)/);if(n.webkit=!!r)n.version=r[1];i&&(t.android=!0,t.version=i[2]),o&&(t.ios=t.iphone=!0,t.version=o[2].replace(/_/g,".")),s&&(t.ios=t.ipad=!0,t.version=s[2].replace(/_/g,".")),u&&(t.webos=!0,t.version=u[2]),a&&(t.touchpad=!0),c&&(t.blackberry=!0,t.version=c[2]),h&&(t.bb10=!0,t.version=h[2]),p&&(t.rimtabletos=!0,t.version=p[2]),d&&(n.playbook=!0),f&&(t.kindle=!0,t.version=f[1]),l&&(n.silk=!0,n.version=l[1]),!l&&t.android&&e.match(/Kindle Fire/)&&(n.silk=!0),v&&(n.chrome=!0,n.version=v[1]),m&&(n.firefox=!0,n.version=m[1]),t.tablet=!!(s||d||i&&!e.match(/Mobile/)||m&&e.match(/Tablet/)),t.phone=!t.tablet&&!!(i||o||u||c||h||v&&e.match(/Android/)||v&&e.match(/CriOS\/([\d.]+)/)||m&&e.match(/Mobile/))}t.call(e,navigator.userAgent),e.__detect=t}(Zepto),function(e){function t(e){return e._zid||(e._zid=d++)}function n(e,n,s,o){n=r(n);if(n.ns)var u=i(n.ns);return(p[t(e)]||[]).filter(function(e){return e&&(!n.e||e.e==n.e)&&(!n.ns||u.test(e.ns))&&(!s||t(e.fn)===t(s))&&(!o||e.sel==o)})}function r(e){var t=(""+e).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function i(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}function s(t,n,r){e.type(t)!="string"?e.each(t,r):t.split(/\s/).forEach(function(e){r(e,n)})}function o(e,t){return e.del&&(e.e=="focus"||e.e=="blur")||!!t}function u(e){return m[e]||e}function a(n,i,a,f,l,c){var h=t(n),d=p[h]||(p[h]=[]);s(i,a,function(t,i){var s=r(t);s.fn=i,s.sel=f,s.e in m&&(i=function(t){var n=t.relatedTarget;if(!n||n!==this&&!e.contains(this,n))return s.fn.apply(this,arguments)}),s.del=l&&l(i,t);var a=s.del||i;s.proxy=function(e){var t=a.apply(n,[e].concat(e.data));return t===!1&&(e.preventDefault(),e.stopPropagation()),t},s.i=d.length,d.push(s),n.addEventListener(u(s.e),s.proxy,o(s,c))})}function f(e,r,i,a,f){var l=t(e);s(r||"",i,function(t,r){n(e,t,r,a).forEach(function(t){delete p[l][t.i],e.removeEventListener(u(t.e),t.proxy,o(t,f))})})}function l(t){var n,r={originalEvent:t};for(n in t)!b.test(n)&&t[n]!==undefined&&(r[n]=t[n]);return e.each(w,function(e,n){r[e]=function(){return this[n]=g,t[e].apply(t,arguments)},r[n]=y}),r}function c(e){if(!("defaultPrevented"in e)){e.defaultPrevented=!1;var t=e.preventDefault;e.preventDefault=function(){this.defaultPrevented=!0,t.call(this)}}}var h=e.zepto.qsa,p={},d=1,v={},m={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",e.event={add:a,remove:f},e.proxy=function(n,r){if(e.isFunction(n)){var i=function(){return n.apply(r,arguments)};return i._zid=t(n),i}if(typeof r=="string")return e.proxy(n[r],n);throw new TypeError("expected function")},e.fn.bind=function(e,t){return this.each(function(){a(this,e,t)})},e.fn.unbind=function(e,t){return this.each(function(){f(this,e,t)})},e.fn.one=function(e,t){return this.each(function(n,r){a(this,e,t,null,function(e,t){return function(){var n=e.apply(r,arguments);return f(r,t,e),n}})})};var g=function(){return!0},y=function(){return!1},b=/^([A-Z]|layer[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,n,r){return this.each(function(i,s){a(s,n,r,t,function(n){return function(r){var i,o=e(r.target).closest(t,s).get(0);if(o)return i=e.extend(l(r),{currentTarget:o,liveFired:s}),n.apply(o,[i].concat([].slice.call(arguments,1)))}})})},e.fn.undelegate=function(e,t,n){return this.each(function(){f(this,t,n,e)})},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,r){return!n||e.isFunction(n)?this.bind(t,n||r):this.delegate(n,t,r)},e.fn.off=function(t,n,r){return!n||e.isFunction(n)?this.unbind(t,n||r):this.undelegate(n,t,r)},e.fn.trigger=function(t,n){if(typeof t=="string"||e.isPlainObject(t))t=e.Event(t);return c(t),t.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(t)})},e.fn.triggerHandler=function(t,r){var i,s;return this.each(function(o,u){i=l(typeof t=="string"?e.Event(t):t),i.data=r,i.target=u,e.each(n(u,t.type||t),function(e,t){s=t.proxy(i);if(i.isImmediatePropagationStopped())return!1})}),s},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)}}),["focus","blur"].forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.each(function(){try{this[t]()}catch(e){}}),this}}),e.Event=function(e,t){typeof e!="string"&&(t=e,e=t.type);var n=document.createEvent(v[e]||"Events"),r=!0;if(t)for(var i in t)i=="bubbles"?r=!!t[i]:n[i]=t[i];return n.initEvent(e,r,!0,null,null,null,null,null,null,null,null,null,null,null,null),n.isDefaultPrevented=function(){return this.defaultPrevented},n}}(Zepto),function($){function triggerAndReturn(e,t,n){var r=$.Event(t);return $(e).trigger(r,n),!r.defaultPrevented}function triggerGlobal(e,t,n,r){if(e.global)return triggerAndReturn(t||document,n,r)}function ajaxStart(e){e.global&&$.active++===0&&triggerGlobal(e,null,"ajaxStart")}function ajaxStop(e){e.global&&!--$.active&&triggerGlobal(e,null,"ajaxStop")}function ajaxBeforeSend(e,t){var n=t.context;if(t.beforeSend.call(n,e,t)===!1||triggerGlobal(t,n,"ajaxBeforeSend",[e,t])===!1)return!1;triggerGlobal(t,n,"ajaxSend",[e,t])}function ajaxSuccess(e,t,n){var r=n.context,i="success";n.success.call(r,e,i,t),triggerGlobal(n,r,"ajaxSuccess",[t,n,e]),ajaxComplete(i,t,n)}function ajaxError(e,t,n,r){var i=r.context;r.error.call(i,n,t,e),triggerGlobal(r,i,"ajaxError",[n,r,e]),ajaxComplete(t,n,r)}function ajaxComplete(e,t,n){var r=n.context;n.complete.call(r,t,e),triggerGlobal(n,r,"ajaxComplete",[t,n]),ajaxStop(n)}function empty(){}function mimeToDataType(e){return e&&(e=e.split(";",2)[0]),e&&(e==htmlType?"html":e==jsonType?"json":scriptTypeRE.test(e)?"script":xmlTypeRE.test(e)&&"xml")||"text"}function appendQuery(e,t){return(e+"&"+t).replace(/[&?]{1,2}/,"?")}function serializeData(e){e.processData&&e.data&&$.type(e.data)!="string"&&(e.data=$.param(e.data,e.traditional)),e.data&&(!e.type||e.type.toUpperCase()=="GET")&&(e.url=appendQuery(e.url,e.data))}function parseArguments(e,t,n,r){var i=!$.isFunction(t);return{url:e,data:i?t:undefined,success:i?$.isFunction(n)?n:undefined:t,dataType:i?r||n:n}}function serialize(e,t,n,r){var i,s=$.isArray(t);$.each(t,function(t,o){i=$.type(o),r&&(t=n?r:r+"["+(s?"":t)+"]"),!r&&s?e.add(o.name,o.value):i=="array"||!n&&i=="object"?serialize(e,o,n,t):e.add(t,o)})}var jsonpID=0,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(e){if("type"in e){var t="jsonp"+ ++jsonpID,n=document.createElement("script"),r=function(){clearTimeout(o),$(n).remove(),delete window[t]},i=function(n){r();if(!n||n=="timeout")window[t]=empty;ajaxError(null,n||"abort",s,e)},s={abort:i},o;return ajaxBeforeSend(s,e)===!1?(i("abort"),!1):(window[t]=function(t){r(),ajaxSuccess(t,s,e)},n.onerror=function(){i("error")},n.src=e.url.replace(/=\?/,"="+t),$("head").append(n),e.timeout>0&&(o=setTimeout(function(){i("timeout")},e.timeout)),s)}return $.ajax(e)},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host),settings.url||(settings.url=window.location.toString()),serializeData(settings),settings.cache===!1&&(settings.url=appendQuery(settings.url,"_="+Date.now()));var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,"callback=?")),$.ajaxJSONP(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=settings.xhr(),abortTimeout;settings.crossDomain||(baseHeaders["X-Requested-With"]="XMLHttpRequest"),mime&&(baseHeaders.Accept=mime,mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime));if(settings.contentType||settings.contentType!==!1&&settings.data&&settings.type.toUpperCase()!="GET")baseHeaders["Content-Type"]=settings.contentType||"application/x-www-form-urlencoded";settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty,clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:$.parseJSON(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings):ajaxSuccess(result,xhr,settings)}else ajaxError(null,xhr.status?"error":"abort",xhr,settings)}};var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async);for(name in settings.headers)xhr.setRequestHeader(name,settings.headers[name]);return ajaxBeforeSend(xhr,settings)===!1?(xhr.abort(),!1):(settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr)},$.get=function(e,t,n,r){return $.ajax(parseArguments.apply(null,arguments))},$.post=function(e,t,n,r){var i=parseArguments.apply(null,arguments);return i.type="POST",$.ajax(i)},$.getJSON=function(e,t,n){var r=parseArguments.apply(null,arguments);return r.dataType="json",$.ajax(r)},$.fn.load=function(e,t,n){if(!this.length)return this;var r=this,i=e.split(/\s/),s,o=parseArguments(e,t,n),u=o.success;return i.length>1&&(o.url=i[0],s=i[1]),o.success=function(e){r.html(s?$("<div>").html(e.replace(rscript,"")).find(s):e),u&&u.apply(r,arguments)},$.ajax(o),this};var escape=encodeURIComponent;$.param=function(e,t){var n=[];return n.add=function(e,t){this.push(escape(e)+"="+escape(t))},serialize(n,e,t),n.join("&").replace(/%20/g,"+")}}(Zepto),function(e){e.fn.serializeArray=function(){var t=[],n;return e(Array.prototype.slice.call(this.get(0).elements)).each(function(){n=e(this);var r=n.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&r!="submit"&&r!="reset"&&r!="button"&&(r!="radio"&&r!="checkbox"||this.checked)&&t.push({name:n.attr("name"),value:n.val()})}),t},e.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},e.fn.submit=function(t){if(t)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(e,t){function n(e){return r(e.replace(/([a-z])([A-Z])/,"$1-$2"))}function r(e){return e.toLowerCase()}function i(e){return o?o+e:r(e)}var s="",o,u,a,f={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},l=window.document,c=l.createElement("div"),h=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,p,d,v,m,g,y,b,w={};e.each(f,function(e,n){if(c.style[e+"TransitionProperty"]!==t)return s="-"+r(e)+"-",o=n,!1}),p=s+"transform",w[d=s+"transition-property"]=w[v=s+"transition-duration"]=w[m=s+"transition-timing-function"]=w[g=s+"animation-name"]=w[y=s+"animation-duration"]=w[b=s+"animation-timing-function"]="",e.fx={off:o===t&&c.style.transitionProperty===t,speeds:{_default:400,fast:200,slow:600},cssPrefix:s,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},e.fn.animate=function(t,n,r,i){return e.isPlainObject(n)&&(r=n.easing,i=n.complete,n=n.duration),n&&(n=(typeof n=="number"?n:e.fx.speeds[n]||e.fx.speeds._default)/1e3),this.anim(t,n,r,i)},e.fn.anim=function(r,i,s,o){var u,a={},f,l="",c=this,E,S=e.fx.transitionEnd;i===t&&(i=.4),e.fx.off&&(i=0);if(typeof r=="string")a[g]=r,a[y]=i+"s",a[b]=s||"linear",S=e.fx.animationEnd;else{f=[];for(u in r)h.test(u)?l+=u+"("+r[u]+") ":(a[u]=r[u],f.push(n(u)));l&&(a[p]=l,f.push(p)),i>0&&typeof r=="object"&&(a[d]=f.join(", "),a[v]=i+"s",a[m]=s||"linear")}return E=function(t){if(typeof t!="undefined"){if(t.target!==t.currentTarget)return;e(t.target).unbind(S,E)}e(this).css(w),o&&o.call(this)},i>0&&this.bind(S,E),this.size()&&this.get(0).clientLeft,this.css(a),i<=0&&setTimeout(function(){c.each(function(){E.call(this)})},0),this},c=null}(Zepto);