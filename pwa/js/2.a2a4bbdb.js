(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"546f":function(e,a,n){"use strict";n("6426")},6426:function(e,a,n){},"713b":function(e,a,n){"use strict";n.r(a);var r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("q-layout",{attrs:{view:"lHr lpR lFr"}},[n("q-header",[n("q-toolbar",{staticClass:"bg-white text-black"},[n("menuBtn",{on:{clicked:function(a){e.menuDrawer=!e.menuDrawer}}}),n("q-toolbar-title"),n("inboxBtn",{attrs:{notifications:!0},on:{clicked:function(a){e.inboxDrawer=!e.inboxDrawer}}})],1)],1),n("q-drawer",{attrs:{overlay:"",behavior:"mobile","content-class":"bg-transparent"},model:{value:e.menuDrawer,callback:function(a){e.menuDrawer=a},expression:"menuDrawer"}},[n("menuContainer",{attrs:{isactive:e.menuDrawer},on:{close:function(a){e.menuDrawer=!1}}})],1),n("q-drawer",{attrs:{side:"right",overlay:"",behavior:"mobile"},model:{value:e.inboxDrawer,callback:function(a){e.inboxDrawer=a},expression:"inboxDrawer"}},[n("inboxContainer",{attrs:{isactive:e.inboxDrawer},on:{close:function(a){e.inboxDrawer=!1}}})],1),n("q-page-container",[n("router-view")],1),n("bottomBars"),n("animBlueWallet",{ref:"animbluewallet"})],1)},t=[],o=n("923e"),i=n("f7fd"),l=n("da4b"),u=n("da06"),c=n("95b2"),s=n("1201"),b={name:"MainLayout",components:{animBlueWallet:o["a"],menuBtn:i["a"],inboxBtn:l["a"],menuContainer:u["a"],inboxContainer:c["a"],bottomBars:s["a"]},data(){return{menuDrawer:!1,inboxDrawer:!1}}},w=b,m=(n("546f"),n("2877")),f=n("4d5a"),d=n("e359"),D=n("65c6"),x=n("6ac5"),p=n("9404"),v=n("09e3"),B=n("eebe"),h=n.n(B),k=Object(m["a"])(w,r,t,!1,null,null,null);a["default"]=k.exports;h()(k,"components",{QLayout:f["a"],QHeader:d["a"],QToolbar:D["a"],QToolbarTitle:x["a"],QDrawer:p["a"],QPageContainer:v["a"]})}}]);