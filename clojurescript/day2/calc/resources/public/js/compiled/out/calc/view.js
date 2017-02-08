// Compiled by ClojureScript 1.9.229 {}
goog.provide('calc.view');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('calc.model');
calc.view.int_value = (function calc$view$int_value(id){
return parseInt(document.querySelector(dommy.core.selector.call(null,id)).value);
});
calc.view.float_value = (function calc$view$float_value(id){
return parseFloat(document.querySelector(dommy.core.selector.call(null,id)).value);
});
calc.view.bmi_calc = (function calc$view$bmi_calc(weight,height){
var n = (weight / (height * height));
cljs.core.println.call(null,height,weight,n);

if((n <= 18.5)){
return "\uC800\uCCB4\uC911";
} else {
if((n < (25))){
return "\uC815\uC0C1";
} else {
if((n < (30))){
return "\uACFC\uCCB4\uC911";
} else {
return "\uBE44\uB9CC";

}
}
}
});
calc.view.calc = (function calc$view$calc(){
return dommy.core.set_text_BANG_.call(null,document.getElementById("result"),calc.view.bmi_calc.call(null,calc.view.float_value.call(null,new cljs.core.Keyword(null,"#x","#x",1133875488)),calc.view.float_value.call(null,new cljs.core.Keyword(null,"#y","#y",1010271988))));
});
calc.view.view = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#x","input#x",991277393),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"\uCCB4\uC911"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#y","input#y",-990750449),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"\uD0A4"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),calc.view.calc], null),"\uACB0\uACFC\uBCF4\uAE30"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#result","span#result",1772556812)], null)], null);

//# sourceMappingURL=view.js.map?rel=1486444556469