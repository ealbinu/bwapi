(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{b730:function(t,a,e){},e05b:function(t,a,e){"use strict";e("b730")},e592:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"bg-dark"},[e("div",{staticClass:"text-body2 text-white text-center q-pt-md"},[t._v("Promociones")]),t._l(t.usuarioprogramas,(function(a,r){return e("q-card",{key:a.id,staticClass:"tarjetaPrograma shadow-20",style:"background:"+a.bg},[e("q-card-section",{staticClass:"text-center q-py-xs"},[e("q-img",{staticClass:"logo",attrs:{src:t.imgurl+a.id+".png"}}),e("PromocionesPrograma",{attrs:{item:a,notitle:""}})],1)],1)}))],2)},s=[],o=e("7b2e"),i={components:{PromocionesPrograma:o["a"]},data(){return{imgurl:"https://bwapiblue.herokuapp.com/static/"}},computed:{usuarioprogramas(){return this.$store.state.api.usuarioprogramas}},mounted(){this.$store.dispatch("api/getUsuarioProgramas")}},n=i,c=(e("e05b"),e("2877")),u=e("9989"),p=e("f09f"),m=e("a370"),d=e("068f"),g=e("eebe"),l=e.n(g),b=Object(c["a"])(n,r,s,!1,null,"17e85cd2",null);a["default"]=b.exports;l()(b,"components",{QPage:u["a"],QCard:p["a"],QCardSection:m["a"],QImg:d["a"]})}}]);