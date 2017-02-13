// Compiled by ClojureScript 1.9.229 {}
goog.provide('counter.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/counter/core.cljs. Go ahead and edit it and see reloading in action.");
if(typeof counter.core.app_state !== 'undefined'){
} else {
counter.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
counter.core.on_js_reload = (function counter$core$on_js_reload(){
return null;
});
counter.core.counter = reagent.core.atom.call(null,(0));
counter.core.view = (function counter$core$view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.deref.call(null,counter.core.counter)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,counter.core.counter,cljs.core.inc);
})], null),"+"], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.core.view], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1486526317933