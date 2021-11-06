(function(t){function e(e){for(var a,c,l=e[0],s=e[1],i=e[2],p=0,f=[];p<l.length;p++)c=l[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/fire-watch/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1893:function(t,e,n){"use strict";n("6c30")},"38c8":function(t,e,n){},"49fd":function(t,e,n){"use strict";n("b365")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("vue-select",{staticClass:"vue-select",on:{selected:t.selected}}),n("fetch-data",{on:{received:t.getData}}),n("map-component",{attrs:{locations:t.send_location}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("img",{staticClass:"img",attrs:{src:n("a966")}}),a("h1",[t._v("Fire Watch")])])}],c=n("b85c"),l=(n("4de4"),n("d3b7"),n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fetch-data"})}),s=[],i=n("1da1"),u=(n("96cf"),n("bc3a")),p=n.n(u),f={name:"FetchData",data:function(){return{url:"https://storage.googleapis.com/public.storykube.com/start2impact/fires.json"}},methods:{fetchData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n="https://cors-anywhere.herokuapp.com/",e.next=4,p()({method:"get",url:n+t.url});case 4:a=e.sent,t.$emit("received",a.data),e.next=12;break;case 8:return e.prev=8,e.t0=e["catch"](0),console.error(e.t0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},created:function(){this.fetchData()}},v=f,d=(n("1893"),n("2877")),h=Object(d["a"])(v,l,s,!1,null,null,null),m=h.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map"},[n("l-map",{staticStyle:{height:"500px",width:"100%"},attrs:{zoom:t.zoom,center:t.center}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.locations,(function(e){return n("span",{key:e.index},[0!=e.lenght?n("l-marker",{attrs:{"lat-lng":[e.latitude,e.longitude]}}):t._e()],1)}))],2)],1)},_=[],g=n("2699"),y=n("a40a"),w=n("4e2b"),O=n("e11e"),x={name:"MapComponent",components:{LMap:g["a"],LTileLayer:y["a"],LMarker:w["a"]},props:{locations:Array},data:function(){return{zoom:3,center:Object(O["latLng"])(),url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}}},j=x,k=(n("49fd"),Object(d["a"])(j,b,_,!1,null,null,null)),S=k.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center con-selects"},[n("vs-select",{attrs:{filter:"",multiple:"",placeholder:"Select one or more days"},model:{value:t.select_value,callback:function(e){t.select_value=e},expression:"select_value"}},[n("vs-option-group",[n("div",{attrs:{slot:"title"},slot:"title"},[t._v("Days")]),n("vs-option",{attrs:{label:"21",value:"2020-08-21"}},[t._v(" 21-08-2020 ")]),n("vs-option",{attrs:{label:"22",value:"2020-08-22"}},[t._v(" 22-08-2020 ")]),n("vs-option",{attrs:{label:"23",value:"2020-08-23"}},[t._v(" 23-08-2020 ")]),n("vs-option",{attrs:{label:"24",value:"2020-08-24"}},[t._v(" 24-08-2020 ")]),n("vs-option",{attrs:{label:"25",value:"2020-08-25"}},[t._v(" 25-08-2020 ")]),n("vs-option",{attrs:{label:"26",value:"2020-08-26"}},[t._v(" 26-08-2020 ")]),n("vs-option",{attrs:{label:"27",value:"2020-08-27"}},[t._v(" 27-08-2020 ")]),n("vs-option",{attrs:{label:"28",value:"2020-08-28"}},[t._v(" 28-08-2020 ")])],1),n("vs-option-group",[n("div",{attrs:{slot:"title"},slot:"title"},[t._v("Shortcuts")]),n("vs-button",{attrs:{active:1==t.active},on:{click:function(e){t.active=1}}},[t._v(" Whole Week ")]),n("vs-button",{attrs:{active:2==t.active},on:{click:function(e){t.active=2}}},[t._v(" Clear ")])],1)],1)],1)},M=[],C={name:"VueSelect",data:function(){return{select_value:[],active:0,selected:[]}},methods:{sendArray:function(){this.$emit("selected",this.select_value)}},watch:{active:function(){1==this.active?(this.select_value=["2020-08-21","2020-08-22","2020-08-23","2020-08-24","2020-08-25","2020-08-26","2020-08-27","2020-08-28"],this.active=0):2==this.active&&(this.select_value=[],this.active=0)},select_value:function(){this.sendArray()}}},$=C,P=Object(d["a"])($,D,M,!1,null,null,null),A=P.exports,E={name:"App",components:{FetchData:m,MapComponent:S,VueSelect:A},data:function(){return{option:!0,data:[],selected_slots:[],send_location:[]}},methods:{selected:function(t){this.selected_slots=t},filterResults:function(t,e){var n,a=[],r=Object(c["a"])(e);try{var o=function(){var e=n.value;a.push(t.filter((function(t){return t.date===e})))};for(r.s();!(n=r.n()).done;)o()}catch(l){r.e(l)}finally{r.f()}this.cleanArray(a)},getData:function(t){this.data=t},cleanArray:function(t){var e=[];t.map((function(t){t.map((function(t){e.push(t)}))})),this.send_location=e}},watch:{selected_slots:function(){0!=this.data.length&&this.filterResults(this.data,this.selected_slots)}}},L=E,R=(n("5c0b"),Object(d["a"])(L,r,o,!1,null,null,null)),z=R.exports,T=n("574d"),U=n.n(T);n("38c8");a["default"].use(U.a),a["default"].component("l-map",g["a"]),a["default"].component("l-tile-layer",y["a"]),a["default"].component("l-marker",w["a"]),delete O["Icon"].Default.prototype._getIconUrl,O["Icon"].Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(z)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"6c30":function(t,e,n){},"9c0c":function(t,e,n){},a966:function(t,e,n){t.exports=n.p+"img/fire_watch.18ab6b67.svg"},b365:function(t,e,n){}});
//# sourceMappingURL=app.f5787b1f.js.map