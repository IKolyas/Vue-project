(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8682"],{"556b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex col-12 p-0"},[this.$store.state.items?n("div",{staticClass:"d-flex col-12 m-0 p-0"},["index"===t.type?n("div",{staticClass:"row d-flex justify-content-around justify-content-lg-between p-0"},t._l(this.$store.state.items.slice(0,8),(function(t){return n("Item",{key:t.id,attrs:{type:"catalog",item:t}})})),1):t._e(),"singlePage"===t.type?n("div",{staticClass:"row d-flex col-12 justify-content-around justify-content-lg-between p-0"},t._l(this.$store.state.items.slice(0,4),(function(t){return n("Item",{key:t.id,attrs:{type:"catalog",item:t}})})),1):t._e(),"products"===t.type?n("div",{staticClass:"row d-flex justify-content-around justify-content-lg-between p-0 mx-0 my-2"},[n("div",{staticClass:"sortProd col-12 d-flex align-items-center px-3 my-3"},[n("button",{staticClass:"btn btn-outline-secondary py-0",attrs:{type:"button"}},[t._v("Sort By")]),t._m(0),n("button",{staticClass:"btn btn-outline-secondary py-0",attrs:{type:"button"},on:{click:function(e){return t.viewAll(t.qView)}}},[t._v("Show ")]),n("select",{directives:[{name:"model",rawName:"v-model.number",value:t.qView,expression:"qView",modifiers:{number:!0}}],staticClass:"custom-select col-2 px-1 mx-2 py-0",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var n="_value"in e?e._value:e.value;return t._n(n)}));t.qView=e.target.multiple?n:n[0]},function(e){return t.viewAll(t.qView)}]}},[n("option",{attrs:{value:"3"}},[t._v("3")]),n("option",{attrs:{selected:""}},[t._v("6")]),n("option",{attrs:{value:"9"}},[t._v("9")]),n("option",{attrs:{value:"12"}},[t._v("12")])])]),n("div",{staticClass:"row d-flex col-12 p-0 mx-0 my-2 justify-content-around justify-content-lg-between"},[n("transition-group",{staticClass:"row col-12 d-flex justify-content-center justify-content-lg-between m-0 p-0",attrs:{name:"list"}},t._l(t.collections,(function(t){return n("Item",{key:t.id,staticClass:"list-item",attrs:{type:"catalog",item:t}})})),1)],1),n("div",{staticClass:"paginationProduct col-12 d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between"},[n("nav",{staticClass:"p-0",attrs:{"aria-label":"Page navigation example"}},[n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link page-list",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.setPage(--t.pagination.currentPage)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.pages,(function(e,a){return n("li",{key:a,staticClass:"page-item",on:{click:function(n){return n.preventDefault(),t.setPage(e)}}},[n("a",{staticClass:"page-link page-num",attrs:{href:"#"}},[t._v(t._s(e))])])})),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link page-list",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.setPage(++t.pagination.currentPage)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)]),n("button",{attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.viewAll()}}},[t._v(" View All ")])])]):t._e()]):n("div",[n("h3",[t._v("Not Products")])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{staticClass:"custom-select col-2 px-1 mx-2  py-0"},[n("option",{attrs:{selected:""}},[t._v("Name")]),n("option",{attrs:{value:"1"}},[t._v("Name")])])}],i=(n("fb6a"),n("d3b7"),n("2ef0")),o=n.n(i),l=function(){return n.e("chunk-2d0d3ad3").then(n.bind(null,"5e7d"))},r={components:{Item:l,lodash:o.a},props:{type:{type:String,default:"index"}},data:function(){return{pagination:{},qView:6}},computed:{collections:function(){return this.$store.commit("filterItem",this.$store.state.priceFilter),this.paginate(this.$store.state.itemsFiltered)}},methods:{setPage:function(t){this.pagination=this.paginator(this.$store.state.items.length,t)},paginate:function(t){return o.a.slice(t,this.pagination.startIndex,this.pagination.endIndex+1)},paginator:function(t,e){var n=(e-1)*this.$store.state.qItemPages,a=Math.min(n+this.$store.state.qItemPages-1,t-1);return{currentPage:e,startIndex:n,endIndex:a,pages:o.a.range(1,Math.ceil(t/this.$store.state.qItemPages)+1)}},viewAll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$store.state.itemsFiltered.length;this.$store.state.qItemPages=t,this.setPage(1)}},created:function(){this.setPage(1)},mounted:function(){this.$store.commit("getCatalog")}},c=r,u=n("2877"),p=Object(u["a"])(c,a,s,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0c8682.3ff88531.js.map