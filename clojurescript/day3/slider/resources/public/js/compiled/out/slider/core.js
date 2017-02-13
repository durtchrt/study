// Compiled by ClojureScript 1.9.229 {}
goog.provide('slider.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/counter/core.cljs. Go ahead and edit it and see reloading in action.");
if(typeof slider.core.app_state !== 'undefined'){
} else {
slider.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
slider.core.on_js_reload = (function slider$core$on_js_reload(){
return null;
});
slider.core.height = reagent.core.atom.call(null,(0));
slider.core.weight = reagent.core.atom.call(null,(0));
slider.core.bmi_result = reagent.core.atom.call(null,(0));
slider.core.bmi_calc = (function slider$core$bmi_calc(weight,height){
var n = (weight / ((height * height) / (10000)));
if((n <= 18.5)){
return (1);
} else {
if((n < (25))){
return (2);
} else {
if((n < (30))){
return (3);
} else {
return (4);

}
}
}
});
slider.core.view = (function slider$core$view(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(100),new cljs.core.Keyword(null,"max","max",61366548),(200),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.swap_BANG_.call(null,slider.core.height,(function (_){
return e.target.value;
}));

return cljs.core.reset_BANG_.call(null,slider.core.bmi_result,slider.core.bmi_calc.call(null,cljs.core.deref.call(null,slider.core.weight),cljs.core.deref.call(null,slider.core.height)));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.swap_BANG_.call(null,slider.core.weight,(function (_){
return e.target.value;
}));

return slider.core.rest_BANG_.call(null,slider.core.bmi_result,slider.core.bmi_calc.call(null,cljs.core.deref.call(null,slider.core.weight),cljs.core.deref.call(null,slider.core.height)));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.deref.call(null,slider.core.height)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.deref.call(null,slider.core.weight)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.deref.call(null,slider.core.bmi_result)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slider.core.view], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1486528559914