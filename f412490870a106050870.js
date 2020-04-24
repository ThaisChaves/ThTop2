/*! For license information please see f412490870a106050870.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{245:function(t,e,a){var i=a(267);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(137).default)("47ea3219",i,!0,{})},253:function(t,e,a){"use strict";const i={shopping_cart:{en_us:"Shopping cart",pt_br:"Carrinho de compras"},my_cart:{en_us:"My cart",pt_br:"Meu carrinho"},close:{en_us:"Close",pt_br:"Fechar"},remove:{en_us:"Remove",pt_br:"Remover"},checkout:{en_us:"Checkout",pt_br:"Finalizar compra"},see_cart:{en_us:"See shopping cart",pt_br:"Ver carrinho"},empty_cart:{en_us:"Your shopping cart is empty",pt_br:"Seu carrinho de compras está vazio"},continue_shopping:{en_us:"Continue shopping",pt_br:"Continuar comprando"}};e.a=function(t,e){return e||(e=this&&this.lang||"en_us"),i[t]&&i[t][e]||""}},255:function(t,e,a){"use strict";var i=a(31),r=a(45),n=a(106),s=a(96),c=a(253),o={name:"EcCartItem",props:{lang:{type:String,default:i.$ecomConfig.get("lang")},item:{type:Object,required:!0},inputType:{type:String,default:"select"},resetQnt:{type:Boolean}},data:()=>({quantity:1,skipSelect:!1}),computed:{price(){return Object(r.a)(this.item)},img(){return Object(n.a)(this.item,null,"small")}},methods:{dictionary:c.a,formatMoney:s.a,updateQnt(){this.quantity=this.item.quantity,this.skipSelect=!Number.isInteger(this.item.quantity)||this.item.quantity>10}},created(){this.updateQnt()},watch:{quantity(t,e){("number"!=typeof t||isNaN(t))&&(this.quantity=0),this.quantity!==this.item.quantity&&(this.$emit("increase",this.quantity-e),this.quantity=this.item.quantity),t>10&&e<=10&&(this.skipSelect=!0,setTimeout(()=>{this.$refs.input.focus()},300))},resetQnt(t){t&&this.updateQnt()}}},l=(a(266),a(72)),u=Object(l.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"ec-cart-item"},[a("div",{staticClass:"ec-cart-item__name"},[t.item.slug?a("a",{attrs:{href:"/"+t.item.slug}},[t._v(" "+t._s(t.item.name)+" ")]):[t._v(" "+t._s(t.item.name)+" ")]],2),a("div",{staticClass:"ec-cart-item__row"},[t.item.picture&&Object.keys(t.item.picture).length?a(t.item.slug?"a":"span",{tag:"component",attrs:{href:"/"+t.item.slug}},[a("img",{staticClass:"ec-cart-item__picture",attrs:{src:t.img.url,alt:t.img.alt||t.item.name}})]):t._e(),a("div",{staticClass:"ec-cart-item__edit"},[t.skipSelect||"select"!==t.inputType?a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],ref:"input",staticClass:"ec-cart-item__quantity form-control",attrs:{type:t.inputType&&"select"!==t.inputType?t.inputType:"number"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}):a("select",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var a="_value"in e?e._value:e.value;return t._n(a)}));t.quantity=e.target.multiple?a:a[0]}}},[t._l(t.item.max_quantity||10,(function(e){return a("option",{domProps:{value:e,selected:e===t.quantity}},[t._v(" "+t._s(e)+" ")])})),a("option",{domProps:{value:11}},[t._v(" 11+ ")])],2),a("a",{staticClass:"ec-cart-item__remove",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("remove")}}},[t._v(" "+t._s(t.dictionary("remove"))+" ")])]),a("div",{staticClass:"ec-cart-item__prices"},[t.item.quantity>1?a("div",{staticClass:"ec-cart-item__price-un"},[t._v(" "+t._s(t.formatMoney(t.price))+" "),a("small",[t._v("/un")])]):t._e(),t._v(" "+t._s(t.formatMoney(t.price*t.item.quantity))+" ")])],1)])}),[],!1,null,null,null);e.a=u.exports},266:function(t,e,a){"use strict";var i=a(245);a.n(i).a},267:function(t,e,a){(e=a(136)(!1)).push([t.i,".ec-cart-item{margin-bottom:1rem}.ec-cart-item__name{font-size:.88rem;line-height:1.2;margin-bottom:.25rem}.ec-cart-item__row{display:flex;align-items:center}.ec-cart-item__picture{max-width:90px;margin-right:1rem}.ec-cart-item__edit{margin-right:.25rem}.ec-cart-item__quantity{display:inline-block;width:75px}.ec-cart-item__remove{display:block;text-align:center;margin-top:.15rem;color:var(--danger);font-size:.85rem;text-transform:lowercase}.ec-cart-item__remove:hover{color:var(--danger)}.ec-cart-item__prices{text-align:right;flex-grow:1;overflow:hidden}.ec-cart-item__price-un{font-size:.83rem;color:var(--gray)}",""]),t.exports=e},268:function(t,e,a){var i=a(316);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(137).default)("5a1d0499",i,!0,{})},315:function(t,e,a){"use strict";var i=a(268);a.n(i).a},316:function(t,e,a){(e=a(136)(!1)).push([t.i,".ec-minicart{display:inline}.ec-minicart__button{position:relative}.ec-minicart__button .badge{position:absolute;top:-.2rem;right:-.2rem;font-size:.8rem}.ec-minicart__sidebar{position:fixed;width:330px;max-width:100%;height:100%;top:0;right:0;z-index:1100;border-radius:0}.ec-minicart__sidebar>article{overflow-y:auto}.ec-minicart__summary{color:var(--gray);display:flex;align-items:center;justify-content:space-between;padding-bottom:1rem}.ec-minicart__subtotal{color:var(--secondary)}",""]),t.exports=e},357:function(t,e,a){"use strict";a.r(e);var i=a(37),r=(a(183),a(31)),n=a(96),s=a(20),c=a(253),o={name:"EcMinicart",components:{EcCartItem:a(255).a},props:{lang:{type:String,default:r.$ecomConfig.get("lang")},ecomCart:{type:Object,default:()=>s.a},showCart:{type:Boolean,default:!1},showOnItemAdded:{type:Boolean,default:!0},checkoutUrl:{type:String,default:"/app/#/checkout"},cartUrl:{type:String,default:"/app/#/cart"}},computed:{cart(){return this.ecomCart.data}},methods:{dictionary:c.a,formatMoney:n.a,show(){this.$emit("update:showCart",!0)},hide(){this.$emit("update:showCart",!1)}},created(){this.showOnItemAdded&&s.a.on("addItem",({data:t})=>{this.$set(this.ecomCart,"data",t),this.show()})},mounted(){document.querySelector("body").appendChild(this.$refs.sidebar)}},l=(a(315),a(72)),u=Object(l.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ec-minicart"},[t._t("button",[a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],staticClass:"ec-minicart__button btn btn-lg btn-light",attrs:{type:"button",title:t.dictionary("shopping_cart")},on:{click:t.show}},[a("i",{staticClass:"fas fa-shopping-bag"}),a("span",{staticClass:"badge badge-sm badge-primary"},[t._v(" "+t._s(t.cart.items.length)+" ")])])]),a("div",{ref:"sidebar"},[a("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"}},[a("aside",{directives:[{name:"show",rawName:"v-show",value:t.showCart,expression:"showCart"}],staticClass:"ec-minicart__sidebar card shadow"},[t._t("header",[a("header",{staticClass:"card-header"},[t._v(" "+t._s(t.dictionary("my_cart"))+" "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":t.dictionary("close")},on:{click:t.hide}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]),a("article",{staticClass:"card-body"},[a("transition-group",{attrs:{"enter-active-class":"animated fadeIn slow"}},[t.cart.items.length?a("div",{key:"list",staticClass:"ec-minicart__list"},[t._t("list",[a("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp faster"}},t._l(t.cart.items,(function(e){return a("ec-cart-item",{key:e._id,attrs:{item:e,resetQnt:t.showCart},on:{increase:function(a){return t.ecomCart.increaseItemQnt(e._id,a)},remove:function(a){return t.ecomCart.removeItem(e._id)}}})})),1)],null,{items:t.cart.items})],2):a("div",{key:"empty",staticClass:"ec-minicart__empty"},[t._t("empty",[a("p",{staticClass:"lead text-muted"},[t._v(" "+t._s(t.dictionary("empty_cart"))+" ... ")]),a("a",{staticClass:"btn btn-block btn-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.hide(e)}}},[a("span",{staticClass:"mr-1"},[a("i",{staticClass:"fas fa-arrow-left"})]),t._v(" "+t._s(t.dictionary("continue_shopping"))+" ")])])],2)])],1),t._t("footer",[t.cart.subtotal||t.cart.items.length?a("footer",{staticClass:"card-footer"},[a("div",{staticClass:"ec-minicart__summary"},[a("span",[t._v("Subtotal")]),a("strong",{staticClass:"ec-minicart__subtotal"},[t._v(" "+t._s(t.formatMoney(t.cart.subtotal))+" ")])]),a("a",{staticClass:"ec-minicart__btn-checkout btn btn-block btn-primary",attrs:{role:"button",href:t.checkoutUrl}},[a("span",{staticClass:"mr-1"},[a("i",{staticClass:"fas fa-check"})]),t._v(" "+t._s(t.dictionary("checkout"))+" ")]),a("a",{staticClass:"ec-minicart__btn-cart btn btn-block btn-outline-secondary",attrs:{role:"button",href:t.cartUrl}},[t._v(" "+t._s(t.dictionary("see_cart"))+" ")])]):t._e()])],2)])],1)],2)}),[],!1,null,null,null).exports;function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e.default=(t={},e="cart-button")=>{const a=document.getElementById(e);if(a){const{$overlay:r}=window.storefront;new i.default({data:{showCart:!1},render(a){const i=this;return a(u,{attrs:{id:e},props:p({},t.props,{showCart:i.showCart}),on:{"update:showCart"(t){i.showCart=t,r&&(t?(r.show(),r.once("hide",()=>{i.showCart=!1})):r.hide())}}})}}).$mount(a)}}}}]);
//# sourceMappingURL=f412490870a106050870.js.map