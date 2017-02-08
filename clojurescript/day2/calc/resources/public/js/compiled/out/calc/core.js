// Compiled by ClojureScript 1.9.229 {}
goog.provide('calc.core');
goog.require('cljs.core');
goog.require('hipo.core');
goog.require('calc.view');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/calc/core.cljs. Go ahead and edit it and see reloading in action.");
if(typeof calc.core.app_state !== 'undefined'){
} else {
calc.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
calc.core.on_js_reload = (function calc$core$on_js_reload(){
return null;
});
dommy.core.replace_contents_BANG_.call(null,document.getElementById("app"),(function (){var v27939 = calc.view.view;
var el__26227__auto__ = hipo.interpreter.create.call(null,v27939,null);
hipo.core.set_hiccup_BANG_.call(null,el__26227__auto__,v27939);

return el__26227__auto__;
})());

//# sourceMappingURL=core.js.map?rel=1486444556483