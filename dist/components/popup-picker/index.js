!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxPopupPicker=e():t.vuxPopupPicker=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(112)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(9),r=n(30),i=n(25),u=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return u(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var o=n(74),r=n(15);t.exports=function(t){return o(r(t))}},function(t,e,n){var o=n(4),r=n(13);t.exports=n(2)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var o=n(23)("wks"),r=n(14),i=n(1).Symbol,u="function"==typeof i,s=t.exports=function(t){return o[t]||(o[t]=u&&i[t]||(u?i:r)("Symbol."+t))};s.store=o},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var o=n(11);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var o=n(35),r=n(16);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(1),r=n(8),i=n(71),u=n(6),s="prototype",a=function(t,e,n){var l,c,f,p=t&a.F,d=t&a.G,_=t&a.S,h=t&a.P,v=t&a.B,m=t&a.W,y=d?r:r[e]||(r[e]={}),g=y[s],x=d?o:_?o[e]:(o[e]||{})[s];d&&(n=e);for(l in n)c=!p&&x&&void 0!==x[l],c&&l in y||(f=c?x[l]:n[l],y[l]=d&&"function"!=typeof x[l]?n[l]:v&&c?i(f,o):m&&x[l]==f?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e[s]=t[s],e}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((y.virtual||(y.virtual={}))[l]=f,t&a.R&&g&&!g[l]&&u(g,l,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var o=n(4).f,r=n(3),i=n(7)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},function(t,e,n){var o=n(23)("keys"),r=n(14);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e,n){var o=n(1),r="__core-js_shared__",i=o[r]||(o[r]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(11);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var o=n(1),r=n(8),i=n(19),u=n(27),s=n(4).f;t.exports=function(t){var e=r.Symbol||(r.Symbol=i?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(7)},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(11),r=n(1).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,e,n){t.exports=!n(2)&&!n(10)(function(){return 7!=Object.defineProperty(n(29)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var o=n(19),r=n(17),i=n(36),u=n(6),s=n(3),a=n(18),l=n(76),c=n(21),f=n(83),p=n(7)("iterator"),d=!([].keys&&"next"in[].keys()),_="@@iterator",h="keys",v="values",m=function(){return this};t.exports=function(t,e,n,y,g,x,b){l(n,e,y);var w,S,T,k=function(t){if(!d&&t in C)return C[t];switch(t){case h:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",M=g==v,j=!1,C=t.prototype,E=C[p]||C[_]||g&&C[g],P=E||k(g),D=g?M?k("entries"):P:void 0,A="Array"==e?C.entries||E:E;if(A&&(T=f(A.call(new t)),T!==Object.prototype&&(c(T,O,!0),o||s(T,p)||u(T,p,m))),M&&E&&E.name!==v&&(j=!0,P=function(){return E.call(this)}),o&&!b||!d&&!j&&C[p]||u(C,p,P),a[e]=P,a[O]=m,g)if(w={values:M?P:k(v),keys:x?P:k(h),entries:D},b)for(S in w)S in C||i(C,S,w[S]);else r(r.P+r.F*(d||j),e,w);return w}},function(t,e,n){var o=n(9),r=n(80),i=n(16),u=n(22)("IE_PROTO"),s=function(){},a="prototype",l=function(){var t,e=n(29)("iframe"),o=i.length,r=">";for(e.style.display="none",n(73).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+r),t.close(),l=t.F;o--;)delete l[a][i[o]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[a]=o(t),n=new s,s[a]=null,n[u]=t):n=l(),void 0===e?n:r(n,e)}},function(t,e,n){var o=n(35),r=n(16).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var o=n(3),r=n(5),i=n(70)(!1),u=n(22)("IE_PROTO");t.exports=function(t,e){var n,s=r(t),a=0,l=[];for(n in s)n!=u&&o(s,n)&&l.push(n);for(;e.length>a;)o(s,n=e[a++])&&(~i(l,n)||l.push(n));return l}},function(t,e,n){t.exports=n(6)},function(t,e,n){var o,r;o=n(43),r=n(103),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var o,r;n(97),o=n(44),r=n(104),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e){t.exports=function(t,e,o){if(t.filter)return t.filter(e,o);if(void 0===t||null===t)throw new TypeError;if("function"!=typeof e)throw new TypeError;for(var r=[],i=0;i<t.length;i++)if(n.call(t,i)){var u=t[i];e.call(o,u,i,t)&&r.push(u)}return r};var n=Object.prototype.hasOwnProperty},function(t,e){"use strict";function n(t,e,n){if("function"==typeof Array.prototype.find)return t.find(e,n);n=n||this;var o,r=t.length;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(o=0;r>o;o++)if(e.call(n,t[o],o,t))return t[o]}t.exports=n},function(t,e){t.exports=function(t,e){if(t.map)return t.map(e);for(var o=[],r=0;r<t.length;r++){var i=t[r];n.call(t,r)&&o.push(e(i,r,t))}return o};var n=Object.prototype.hasOwnProperty},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(110),i=o(r),u=n(56);e["default"]={components:{InlineDesc:i["default"]},props:{title:String,value:String,isLink:Boolean,inlineDesc:String,primary:{type:String,"default":"title"},link:{type:[String,Object]}},methods:{onClick:function(){(0,u.go)(this.link,this.$router)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["-moz-box-","-webkit-box-",""];e["default"]={props:{span:[Number,String],order:[Number,String]},methods:{buildWidth:function(t){return"number"==typeof t?1>t?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(t[e]=this.$parent.gutter+"px",this.span)for(var o=0;o<n.length;o++)t[n[o]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return"undefined"!=typeof this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:document.documentElement.offsetWidth}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{gutter:{type:Number,"default":8},orient:{type:String,"default":"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"align-items":this.align,"flex-wrap":this.wrap,"flex-direction":this.direction}}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(50),i=o(r),u=n(38),s=o(u),a=n(37),l=o(a),c=n(49),f=o(c);e["default"]={components:{Flexbox:s["default"],FlexboxItem:l["default"]},created:function(){if(0!==this.columns){var t=this.columns;this.store=new f["default"](this.data,t),this.data=this.store.getColumns(this.value)}},ready:function(){var t=this;this.$nextTick(function(){t.render(t.data,t.value)})},props:{data:{type:Array},columns:{type:Number,"default":0},value:{type:Array,twoWay:!0},itemClass:{type:String,"default":"scroller-item"}},methods:{getId:function(t){return"#vux-picker-"+this.uuid+"-"+t},render:function(t,e){this.count=this.data.length;var n=this;if(t&&t.length){var o=this.data.length;if(e.length<o)for(var r=0;o>r;r++)n.value.$set(r,t[r][0].value||t[r][0]);for(var u=function(o){n.scroller[o]&&n.scroller[o].destroy(),n.scroller[o]=new i["default"](n.getId(o),{data:t[o],defaultValue:e[o]||t[o][0].value,itemClass:n.item_class,onSelect:function(t){n.value.$set(o,t),n.$emit("on-change",n.getValue()),0!==n.columns&&n.renderChain(o+1)}}),n.value&&n.scroller[o].select(e[o])},s=0;s<t.length;s++)u(s)}},renderChain:function(t){if(0!==this.columns&&!(t>this.count-1)){var e=this,n=this.getId(t);this.scroller[t].destroy();var o=this.store.getChildren(e.getValue()[t-1]);this.scroller[t]=new i["default"](n,{data:o,itemClass:e.item_class,onSelect:function(n){e.value.$set(t,n),e.$emit("on-change",e.getValue()),e.renderChain(t+1)}}),this.value.$set(t,o[0].value),this.renderChain(t+1)}},getValue:function(){for(var t=[],e=0;e<this.data.length;e++)t.push(this.scroller[e].value);return t}},data:function(){return{scroller:[],count:0,uuid:Math.random().toString(36).substring(3,8)}},watch:{value:function(t,e){if(0!==this.columns)t!==e&&(this.data=this.store.getColumns(t),this.$nextTick(function(){this.render(this.data,t)}));else for(var n=0;n<t.length;n++)this.scroller[n].value!==t[n]&&this.scroller[n].select(t[n])},data:function(t){var e=this;if("[object Array]"===Object.prototype.toString.call(t[0]))this.$nextTick(function(){e.render(t,e.value),e.$nextTick(function(){e.$emit("on-change",e.getValue())})});else if(0!==this.columns){var n=this.columns;this.store=new f["default"](t,n),this.data=this.store.getColumns(this.value)}}},beforeDestroy:function(){for(var t=0;t<this.count;t++)this.scroller[t].destroy(),this.scroller[t]=null}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(57),i=o(r),u=n(111),s=o(u),a=n(109),l=o(a),c=n(113),f=o(c),p=n(38),d=o(p),_=n(37),h=o(_),v=n(53),m=o(v),y=n(54),g=o(y),x=n(55),b=o(x),w=function(t){return JSON.parse((0,i["default"])(t))};e["default"]={mixins:[b["default"]],components:{Picker:s["default"],Cell:l["default"],Popup:f["default"],Flexbox:d["default"],FlexboxItem:h["default"]},filters:{array2string:m["default"],value2name:g["default"]},props:{title:String,data:{type:Array,"default":function(){return[]}},placeholder:String,columns:{type:Number,"default":0},value:{type:Array,"default":function(){return[]}},showName:Boolean,inlineDesc:String},methods:{onClick:function(){this.show=!0},onHide:function(t){this.show=!1,t&&(this.value=w(this.tempValue)),t||(this.tempValue=w(this.value)),this.$emit("on-hide",t)},onPopupHide:function(){this.tempValue=w(this.value)}},watch:{value:function(t){(0,i["default"])(t)!==(0,i["default"])(this.tempValue)&&(this.tempValue=w(t))}},data:function(){return{show:!1,tempValue:w(this.value)}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(52),i=o(r);e["default"]={props:{show:{type:Boolean,"default":!1,twoWay:!0},height:{type:String,"default":"auto"}},ready:function(){var t=this;this.popup=new i["default"]({container:t.$el,innerHTML:"",onOpen:function(e){t.show=!0},onClose:function(e){t.show=!1}})},data:function(){return{hasFirstShow:!1}},watch:{show:function(t){t?(this.popup.show(),this.$emit("on-show"),this.hasFirstShow||(this.$emit("on-first-show"),this.hasFirstShow=!0)):(this.$emit("on-hide"),this.show=!1,this.popup.hide(!1))}},beforeDestroy:function(){this.popup.destroy()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Date.now||function(){return+new Date},o={},r=1,i=60,u=1e3;e["default"]={requestAnimationFrame:function(){var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame;return function(e,n){t(e,n)}}(),stop:function(t){var e=null!=o[t];return e&&(o[t]=null),e},isRunning:function(t){return null!=o[t]},start:function s(t,e,a,l,c,f){var p=this,s=n(),d=s,_=0,h=0,v=r++;if(f||(f=document.body),v%20===0){var m={};for(var y in o)m[y]=!0;o=m}var g=function x(r){var m=r!==!0,y=n();if(!o[v]||e&&!e(v))return o[v]=null,void(a&&a(i-h/((y-s)/u),v,!1));if(m)for(var g=Math.round((y-d)/(u/i))-1,b=0;b<Math.min(g,4);b++)x(!0),h++;l&&(_=(y-s)/l,_>1&&(_=1));var w=c?c(_):_;t(w,y,m)!==!1&&1!==_||!m?m&&(d=y,p.requestAnimationFrame(x,f)):(o[v]=null,a&&a(i-h/((y-s)/u),v,1===_||null==l))};return o[v]=!0,p.requestAnimationFrame(g,f),v}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(61),i=o(r),u=n(62),s=o(u),a=n(39),l=o(a),c=function(){function t(e,n){(0,i["default"])(this,t),this.data=e,this.count=n}return(0,s["default"])(t,[{key:"getChildren",value:function(t){return(0,l["default"])(this.data,function(e){return e.parent===t})}},{key:"getFirstColumn",value:function(){return(0,l["default"])(this.data,function(t){return!t.parent||0===t.parent})}},{key:"getColumns",value:function(t){for(var e=[],n=0;n<this.count;n++)if(0===n)e.push(this.getFirstColumn());else if(t[n])e.push(this.getChildren(t[n-1]));else{var o=e[n-1][0].value;e.push(this.getChildren(o))}return e}}]),t}();e["default"]=c},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var r=n(48),i=o(r),u=n(51),s='\n<div class="scroller-component" data-role="component">\n  <div class="scroller-mask" data-role="mask"></div>\n  <div class="scroller-indicator" data-role="indicator"></div>\n  <div class="scroller-content" data-role="content"></div>\n</div>\n',a=function(t,e){var n=this;e=e||{},n.options={itemClass:"scroller-item",onSelect:function(){},defaultValue:0,data:[]};for(var o in e)void 0!==e[o]&&(n.options[o]=e[o]);n.__container=(0,u.getElement)(t);var r=document.createElement("div");r.innerHTML=e.template||s;var i=n.__component=r.querySelector("[data-role=component]"),a=n.__content=i.querySelector("[data-role=content]"),l=i.querySelector("[data-role=indicator]"),c=n.options.data,f="";c.length&&c[0].constructor===Object?c.forEach(function(t){f+='<div class="'+n.options.itemClass+'" data-value="'+t.value+'">'+t.name+"</div>"}):c.forEach(function(t){f+='<div class="'+n.options.itemClass+'" data-value="'+t+'">'+t+"</div>"}),a.innerHTML=f,n.__container.appendChild(i),n.__itemHeight=parseInt((0,u.getComputedStyle)(l,"height"),10),n.__callback=e.callback||function(t){a.style.webkitTransform="translate3d(0, "+-t+"px, 0)"};var p=i.getBoundingClientRect();n.__clientTop=p.top+i.clientTop||0,n.__setDimensions(i.clientHeight,a.offsetHeight),0===i.clientHeight&&n.__setDimensions(parseInt((0,u.getComputedStyle)(i,"height"),10),204),n.select(n.options.defaultValue,!1),i.addEventListener("touchstart",function(t){t.target.tagName.match(/input|textarea|select/i)||(t.preventDefault(),n.__doTouchStart(t.touches,t.timeStamp))},!1),i.addEventListener("touchmove",function(t){n.__doTouchMove(t.touches,t.timeStamp)},!1),i.addEventListener("touchend",function(t){n.__doTouchEnd(t.timeStamp)},!1)},l={value:null,__prevValue:null,__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientTop:0,__clientHeight:0,__contentHeight:0,__itemHeight:0,__scrollTop:0,__minScrollTop:0,__maxScrollTop:0,__scheduledTop:0,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollTop:null,__maxDecelerationScrollTop:null,__decelerationVelocityY:null,__setDimensions:function(t,e){var n=this;n.__clientHeight=t,n.__contentHeight=e;var o=n.options.data.length,r=Math.round(n.__clientHeight/n.__itemHeight);n.__minScrollTop=-n.__itemHeight*(r/2),n.__maxScrollTop=n.__minScrollTop+o*n.__itemHeight-.1},selectByIndex:function(t,e){var n=this;0>t||t>n.__content.childElementCount-1||(n.__scrollTop=n.__minScrollTop+t*n.__itemHeight,n.scrollTo(n.__scrollTop,e),n.__selectItem(n.__content.children[t]))},select:function(t,e){for(var n=this,o=n.__content.children,r=0,i=o.length;i>r;r++)if(o[r].dataset.value===t)return void n.selectByIndex(r,e);n.selectByIndex(0,e)},getValue:function(){return this.value},scrollTo:function(t,e){var n=this;return e=void 0===e?!0:e,n.__isDecelerating&&(i["default"].stop(n.__isDecelerating),n.__isDecelerating=!1),t=Math.round(t/n.__itemHeight)*n.__itemHeight,t=Math.max(Math.min(n.__maxScrollTop,t),n.__minScrollTop),t!==n.__scrollTop&&e?void n.__publish(t,250):(n.__publish(t),void n.__scrollingComplete())},destroy:function(){this.__component.parentNode&&this.__component.parentNode.removeChild(this.__component)},__selectItem:function(t){var e=this,n=e.options.itemClass+"-selected",o=e.__content.querySelector("."+n);o&&o.classList.remove(n),t.classList.add(n),null!==e.value&&(e.__prevValue=e.value),e.value=t.dataset.value},__scrollingComplete:function(){var t=this,e=Math.round((t.__scrollTop-t.__minScrollTop-t.__itemHeight/2)/t.__itemHeight);t.__selectItem(t.__content.children[e]),null!==t.__prevValue&&t.__prevValue!==t.value&&t.options.onSelect(t.value)},__doTouchStart:function(t,e){var n=this;if(null==t.length)throw new Error("Invalid touch list: "+t);if(e instanceof Date&&(e=e.valueOf()),"number"!=typeof e)throw new Error("Invalid timestamp value: "+e);n.__interruptedAnimation=!0,n.__isDecelerating&&(i["default"].stop(n.__isDecelerating),n.__isDecelerating=!1,n.__interruptedAnimation=!0),n.__isAnimating&&(i["default"].stop(n.__isAnimating),n.__isAnimating=!1,n.__interruptedAnimation=!0);var o,r=1===t.length;o=r?t[0].pageY:Math.abs(t[0].pageY+t[1].pageY)/2,n.__initialTouchTop=o,n.__lastTouchTop=o,n.__lastTouchMove=e,n.__lastScale=1,n.__enableScrollY=!r,n.__isTracking=!0,n.__didDecelerationComplete=!1,n.__isDragging=!r,n.__isSingleTouch=r,n.__positions=[]},__doTouchMove:function(t,e,n){var o=this;if(null==t.length)throw new Error("Invalid touch list: "+t);if(e instanceof Date&&(e=e.valueOf()),"number"!=typeof e)throw new Error("Invalid timestamp value: "+e);if(o.__isTracking){var r;r=2===t.length?Math.abs(t[0].pageY+t[1].pageY)/2:t[0].pageY;var i=o.__positions;if(o.__isDragging){var u=r-o.__lastTouchTop,s=o.__scrollTop;if(o.__enableScrollY){s-=u;var a=o.__minScrollTop,l=o.__maxScrollTop;(s>l||a>s)&&(s=s>l?l:a)}i.length>40&&i.splice(0,20),i.push(s,e),o.__publish(s)}else{var c=0,f=5,p=Math.abs(r-o.__initialTouchTop);o.__enableScrollY=p>=c,i.push(o.__scrollTop,e),o.__isDragging=o.__enableScrollY&&p>=f,o.__isDragging&&(o.__interruptedAnimation=!1)}o.__lastTouchTop=r,o.__lastTouchMove=e,o.__lastScale=n}},__doTouchEnd:function(t){var e=this;if(t instanceof Date&&(t=t.valueOf()),"number"!=typeof t)throw new Error("Invalid timestamp value: "+t);if(e.__isTracking){if(e.__isTracking=!1,e.__isDragging&&(e.__isDragging=!1,e.__isSingleTouch&&t-e.__lastTouchMove<=100)){for(var n=e.__positions,o=n.length-1,r=o,i=o;i>0&&n[i]>e.__lastTouchMove-100;i-=2)r=i;if(r!==o){var u=n[o]-n[r],s=e.__scrollTop-n[r-1];e.__decelerationVelocityY=s/u*(1e3/60);var a=4;Math.abs(e.__decelerationVelocityY)>a&&e.__startDeceleration(t)}}e.__isDecelerating||e.scrollTo(e.__scrollTop),e.__positions.length=0}},__publish:function(t,e){var n=this,o=n.__isAnimating;if(o&&(i["default"].stop(o),n.__isAnimating=!1),e){n.__scheduledTop=t;var r=n.__scrollTop,s=t-r,a=function(t,e,o){n.__scrollTop=r+s*t,n.__callback&&n.__callback(n.__scrollTop)},l=function(t){return n.__isAnimating===t},c=function(t,e,o){e===n.__isAnimating&&(n.__isAnimating=!1),(n.__didDecelerationComplete||o)&&n.__scrollingComplete()};n.__isAnimating=i["default"].start(a,l,c,e,o?u.easeOutCubic:u.easeInOutCubic)}else n.__scheduledTop=n.__scrollTop=t,n.__callback&&n.__callback(t)},__startDeceleration:function(t){var e=this;e.__minDecelerationScrollTop=e.__minScrollTop,e.__maxDecelerationScrollTop=e.__maxScrollTop;var n=function(t,n,o){e.__stepThroughDeceleration(o)},o=.5,r=function(){var t=Math.abs(e.__decelerationVelocityY)>=o;return t||(e.__didDecelerationComplete=!0),t},u=function(t,n,o){return e.__isDecelerating=!1,e.__scrollTop<=e.__minScrollTop||e.__scrollTop>=e.__maxScrollTop?void e.scrollTo(e.__scrollTop):void(e.__didDecelerationComplete&&e.__scrollingComplete())};e.__isDecelerating=i["default"].start(n,r,u)},__stepThroughDeceleration:function(t){var e=this,n=e.__scrollTop+e.__decelerationVelocityY,o=Math.max(Math.min(e.__maxDecelerationScrollTop,n),e.__minDecelerationScrollTop);o!==n&&(n=o,e.__decelerationVelocityY=0),Math.abs(e.__decelerationVelocityY)<=1?Math.abs(n%e.__itemHeight)<1&&(e.__decelerationVelocityY=0):e.__decelerationVelocityY*=.95,e.__publish(n)}};for(var c in l)a.prototype[c]=l[c];t.exports=a},function(t,e){"use strict";function n(t){return"string"==typeof t?document.querySelector(t):t}function o(t,e){var n=window.getComputedStyle(t);return n[e]||""}function r(t){return Math.pow(t-1,3)+1}function i(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}Object.defineProperty(e,"__esModule",{value:!0}),e.getElement=n,e.getComputedStyle=o,e.easeOutCubic=r,e.easeInOutCubic=i},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){this.params={},"[object Object]"===Object.prototype.toString.call(t)&&(this.params={input:t.input||"",container:document.querySelector(t.input)||"",innerHTML:t.innerHTML||"",onOpen:t.onOpen||function(){},onClose:t.onClose||function(){}}),!!document.querySelectorAll(".vux-popup-mask").length<=0&&(this.divMask=document.createElement("a"),this.divMask.className="vux-popup-mask",this.divMask.href="javascript:void(0)",document.body.appendChild(this.divMask));var e=void 0;return e=t.container?t.container:document.createElement("div"),e.className="vux-popup-dialog",t.container||document.body.appendChild(e),this.mask=document.querySelector(".vux-popup-mask"),this.container=document.querySelectorAll(".vux-popup-dialog"),this.container=this.container[this.container.length-1],this._bindEvents(),t=null,this};n.prototype.onClickMask=function(){this.hide(!1)},n.prototype._bindEvents=function(){this.mask.addEventListener("click",this.onClickMask.bind(this),!1)},n.prototype.show=function(){this.mask.classList.add("vux-popup-show"),this.container.classList.add("vux-popup-show"),this.params.onOpen&&this.params.onOpen(this)},n.prototype.hide=function(){var t=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];this.container.classList.remove("vux-popup-show"),document.querySelector(".vux-popup-dialog.vux-popup-show")||this.mask.classList.remove("vux-popup-show"),t===!1&&this.params.onClose&&this.params.onClose(this)},n.prototype.html=function(t){this.container.innerHTML=t},n.prototype.destroy=function(){this.mask.removeEventListener("click",this.onClickMask.bind(this),!1),this.mask&&this.mask.parentNode&&this.mask.parentNode.removeChild(this.mask)},e["default"]=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){return 1===t.length?t[0]:t.join(" ")}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e){var n=(0,i["default"])(t,function(t,n){return(0,s["default"])(e,function(e){return e.value===t})});return(0,i["default"])(n,function(t){return t.name}).join(" ").replace("--","")};var r=n(41),i=o(r),u=n(40),s=o(u)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!/^javas/.test(t)&&t){var n="object"===("undefined"==typeof t?"undefined":(0,s["default"])(t))||"string"==typeof t&&!/http/.test(t);n?e.go(t):window.location.href=t}}function i(t,e){return!e||e._history||"string"!=typeof t||/http/.test(t)?t&&"object"!==("undefined"==typeof t?"undefined":(0,s["default"])(t))?t:"javascript:void(0);":"#!"+t}Object.defineProperty(e,"__esModule",{value:!0});var u=n(63),s=o(u);e.go=r,e.getUrl=i},function(t,e,n){t.exports={"default":n(64),__esModule:!0}},function(t,e,n){t.exports={"default":n(65),__esModule:!0}},function(t,e,n){t.exports={"default":n(66),__esModule:!0}},function(t,e,n){t.exports={"default":n(67),__esModule:!0}},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(58),i=o(r);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,i["default"])(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}()},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(60),i=o(r),u=n(59),s=o(u),a="function"==typeof s["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof s["default"]&&t.constructor===s["default"]?"symbol":typeof t};e["default"]="function"==typeof s["default"]&&"symbol"===a(i["default"])?function(t){return"undefined"==typeof t?"undefined":a(t)}:function(t){return t&&"function"==typeof s["default"]&&t.constructor===s["default"]?"symbol":"undefined"==typeof t?"undefined":a(t)}},function(t,e,n){var o=n(8),r=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},function(t,e,n){n(89);var o=n(8).Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},function(t,e,n){n(92),n(90),n(93),n(94),t.exports=n(8).Symbol},function(t,e,n){n(91),n(95),t.exports=n(27).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var o=n(5),r=n(86),i=n(85);t.exports=function(t){return function(e,n,u){var s,a=o(e),l=r(a.length),c=i(u,l);if(t&&n!=n){for(;l>c;)if(s=a[c++],s!=s)return!0}else for(;l>c;c++)if((t||c in a)&&a[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){var o=n(68);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var o=n(12),r=n(34),i=n(20);t.exports=function(t){var e=o(t),n=r.f;if(n)for(var u,s=n(t),a=i.f,l=0;s.length>l;)a.call(t,u=s[l++])&&e.push(u);return e}},function(t,e,n){t.exports=n(1).document&&document.documentElement},function(t,e,n){var o=n(28);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e,n){var o=n(28);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e,n){"use strict";var o=n(32),r=n(13),i=n(21),u={};n(6)(u,n(7)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(u,{next:r(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var o=n(12),r=n(5);t.exports=function(t,e){for(var n,i=r(t),u=o(i),s=u.length,a=0;s>a;)if(i[n=u[a++]]===e)return n}},function(t,e,n){var o=n(14)("meta"),r=n(11),i=n(3),u=n(4).f,s=0,a=Object.isExtensible||function(){return!0},l=!n(10)(function(){return a(Object.preventExtensions({}))}),c=function(t){u(t,o,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,o)){if(!a(t))return"F";if(!e)return"E";c(t)}return t[o].i},p=function(t,e){if(!i(t,o)){if(!a(t))return!0;if(!e)return!1;c(t)}return t[o].w},d=function(t){return l&&_.NEED&&a(t)&&!i(t,o)&&c(t),t},_=t.exports={KEY:o,NEED:!1,fastKey:f,getWeak:p,onFreeze:d}},function(t,e,n){var o=n(4),r=n(9),i=n(12);t.exports=n(2)?Object.defineProperties:function(t,e){r(t);for(var n,u=i(e),s=u.length,a=0;s>a;)o.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var o=n(20),r=n(13),i=n(5),u=n(25),s=n(3),a=n(30),l=Object.getOwnPropertyDescriptor;e.f=n(2)?l:function(t,e){if(t=i(t),e=u(e,!0),a)try{return l(t,e)}catch(n){}return s(t,e)?r(!o.f.call(t,e),t[e]):void 0}},function(t,e,n){var o=n(5),r=n(33).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?s(t):r(o(t))}},function(t,e,n){var o=n(3),r=n(87),i=n(22)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var o=n(24),r=n(15);t.exports=function(t){return function(e,n){var i,u,s=String(r(e)),a=o(n),l=s.length;return 0>a||a>=l?t?"":void 0:(i=s.charCodeAt(a),55296>i||i>56319||a+1===l||(u=s.charCodeAt(a+1))<56320||u>57343?t?s.charAt(a):i:t?s.slice(a,a+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var o=n(24),r=Math.max,i=Math.min;t.exports=function(t,e){return t=o(t),0>t?r(t+e,0):i(t,e)}},function(t,e,n){var o=n(24),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e,n){var o=n(15);t.exports=function(t){return Object(o(t))}},function(t,e,n){"use strict";var o=n(69),r=n(77),i=n(18),u=n(5);t.exports=n(31)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){var o=n(17);o(o.S+o.F*!n(2),"Object",{defineProperty:n(4).f})},function(t,e){},function(t,e,n){"use strict";var o=n(84)(!0);n(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var o=n(1),r=n(3),i=n(2),u=n(17),s=n(36),a=n(79).KEY,l=n(10),c=n(23),f=n(21),p=n(14),d=n(7),_=n(27),h=n(26),v=n(78),m=n(72),y=n(75),g=n(9),x=n(5),b=n(25),w=n(13),S=n(32),T=n(82),k=n(81),O=n(4),M=n(12),j=k.f,C=O.f,E=T.f,P=o.Symbol,D=o.JSON,A=D&&D.stringify,I="prototype",N=d("_hidden"),H=d("toPrimitive"),F={}.propertyIsEnumerable,V=c("symbol-registry"),L=c("symbols"),Y=c("op-symbols"),$=Object[I],q="function"==typeof P,W=o.QObject,B=!W||!W[I]||!W[I].findChild,R=i&&l(function(){
return 7!=S(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a})?function(t,e,n){var o=j($,e);o&&delete $[e],C(t,e,n),o&&t!==$&&C($,e,o)}:C,J=function(t){var e=L[t]=S(P[I]);return e._k=t,e},z=q&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},G=function(t,e,n){return t===$&&G(Y,e,n),g(t),e=b(e,!0),g(n),r(L,e)?(n.enumerable?(r(t,N)&&t[N][e]&&(t[N][e]=!1),n=S(n,{enumerable:w(0,!1)})):(r(t,N)||C(t,N,w(1,{})),t[N][e]=!0),R(t,e,n)):C(t,e,n)},K=function(t,e){g(t);for(var n,o=m(e=x(e)),r=0,i=o.length;i>r;)G(t,n=o[r++],e[n]);return t},U=function(t,e){return void 0===e?S(t):K(S(t),e)},Q=function(t){var e=F.call(this,t=b(t,!0));return this===$&&r(L,t)&&!r(Y,t)?!1:e||!r(this,t)||!r(L,t)||r(this,N)&&this[N][t]?e:!0},X=function(t,e){if(t=x(t),e=b(e,!0),t!==$||!r(L,e)||r(Y,e)){var n=j(t,e);return!n||!r(L,e)||r(t,N)&&t[N][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=E(x(t)),o=[],i=0;n.length>i;)r(L,e=n[i++])||e==N||e==a||o.push(e);return o},tt=function(t){for(var e,n=t===$,o=E(n?Y:x(t)),i=[],u=0;o.length>u;)r(L,e=o[u++])&&(n?r($,e):!0)&&i.push(L[e]);return i};q||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===$&&e.call(Y,n),r(this,N)&&r(this[N],t)&&(this[N][t]=!1),R(this,t,w(1,n))};return i&&B&&R($,t,{configurable:!0,set:e}),J(t)},s(P[I],"toString",function(){return this._k}),k.f=X,O.f=G,n(33).f=T.f=Z,n(20).f=Q,n(34).f=tt,i&&!n(19)&&s($,"propertyIsEnumerable",Q,!0),_.f=function(t){return J(d(t))}),u(u.G+u.W+u.F*!q,{Symbol:P});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)d(et[nt++]);for(var et=M(d.store),nt=0;et.length>nt;)h(et[nt++]);u(u.S+u.F*!q,"Symbol",{"for":function(t){return r(V,t+="")?V[t]:V[t]=P(t)},keyFor:function(t){if(z(t))return v(V,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){B=!0},useSimple:function(){B=!1}}),u(u.S+u.F*!q,"Object",{create:U,defineProperty:G,defineProperties:K,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),D&&u(u.S+u.F*(!q||l(function(){var t=P();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!z(t)){for(var e,n,o=[t],r=1;arguments.length>r;)o.push(arguments[r++]);return e=o[1],"function"==typeof e&&(n=e),!n&&y(e)||(e=function(t,e){return n&&(e=n.call(this,t,e)),z(e)?void 0:e}),o[1]=e,A.apply(D,o)}}}),P[I][H]||n(6)(P[I],H,P[I].valueOf),f(P,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},function(t,e,n){n(26)("asyncIterator")},function(t,e,n){n(26)("observable")},function(t,e,n){n(88);for(var o=n(1),r=n(6),i=n(18),u=n(7)("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;5>a;a++){var l=s[a],c=o[l],f=c&&c.prototype;f&&!f[u]&&r(f,u,l),i[l]=i.Array}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports="<div class=weui_cell :class=\"{'vux-tap-active': isLink || !!link}\" @click=onClick> <div class=weui_cell_hd> <slot name=icon></slot> </div> <div class=weui_cell_bd :class=\"{'weui_cell_primary':primary==='title'}\"> <p> {{title}} <slot name=after-title></slot> </p> <inline-desc>{{inlineDesc}}</inline-desc> </div> <div class=weui_cell_ft :class=\"{'weui_cell_primary':primary==='content', 'with_arrow': isLink || !!link}\"> {{value}} <slot name=value></slot> <slot></slot> </div> </div>"},function(t,e){t.exports="<div class=vux-flexbox-item :style=style> <slot></slot> </div>"},function(t,e){t.exports="<div class=vux-flexbox :class=\"{'vux-flex-col': orient === 'vertical', 'vux-flex-row': orient === 'horizontal'}\" :style=styles> <slot></slot> </div>"},function(t,e){t.exports="<span class=vux-label-desc><slot></slot></span>"},function(t,e){t.exports="<div class=vux-picker> <flexbox :gutter=0> <flexbox-item v-for=\"(index, one) in data\" style=margin-left:0> <div class=vux-picker-item :id=\"'vux-picker-' + uuid + '-' + index\"></div> </flexbox-item> </flexbox> </div>"},function(t,e){t.exports='<cell :title=title primary=content is-link :inline-desc=inlineDesc @click=onClick> <span class=vux-popup-picker-value v-if="!showName && value.length">{{value | array2string}}</span> <span class=vux-popup-picker-value v-else="showName && value.length">{{value | value2name data}}</span> <span v-if="!value.length && placeholder" v-html=placeholder></span> </cell> <popup :show.sync=show class=vux-popup-picker :id="\'vux-popup-picker-\'+uuid" @on-hide=onPopupHide @on-show="$emit(\'on-show\')"> <div class=vux-popup-picker-container> <div class=vux-popup-picker-header> <flexbox> <flexbox-item style=text-align:left;padding-left:15px;line-height:44px @click=onHide(false)>取消</flexbox-item> <flexbox-item style=text-align:right;padding-right:15px;line-height:44px @click=onHide(true)>完成</flexbox-item> </flexbox> </div> <picker :data=data :value.sync=tempValue :columns=columns :container="\'#vux-popup-picker-\'+uuid"></picker> </div> </popup>'},function(t,e){t.exports="<div v-show=show transition=vux-popup :style={height:height} class=vux-popup> <slot></slot> </div>"},function(t,e,n){var o,r;n(96),o=n(42),r=n(102),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var o,r;n(98),r=n(105),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var o,r;n(99),o=n(45),r=n(106),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var o,r;n(100),o=n(46),r=n(107),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var o,r;n(101),o=n(47),r=n(108),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}])});