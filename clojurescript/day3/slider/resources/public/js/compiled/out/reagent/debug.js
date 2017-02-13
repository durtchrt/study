// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__39003__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__39003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39004__i = 0, G__39004__a = new Array(arguments.length -  0);
while (G__39004__i < G__39004__a.length) {G__39004__a[G__39004__i] = arguments[G__39004__i + 0]; ++G__39004__i;}
  args = new cljs.core.IndexedSeq(G__39004__a,0);
} 
return G__39003__delegate.call(this,args);};
G__39003.cljs$lang$maxFixedArity = 0;
G__39003.cljs$lang$applyTo = (function (arglist__39005){
var args = cljs.core.seq(arglist__39005);
return G__39003__delegate(args);
});
G__39003.cljs$core$IFn$_invoke$arity$variadic = G__39003__delegate;
return G__39003;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__39006__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__39006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39007__i = 0, G__39007__a = new Array(arguments.length -  0);
while (G__39007__i < G__39007__a.length) {G__39007__a[G__39007__i] = arguments[G__39007__i + 0]; ++G__39007__i;}
  args = new cljs.core.IndexedSeq(G__39007__a,0);
} 
return G__39006__delegate.call(this,args);};
G__39006.cljs$lang$maxFixedArity = 0;
G__39006.cljs$lang$applyTo = (function (arglist__39008){
var args = cljs.core.seq(arglist__39008);
return G__39006__delegate(args);
});
G__39006.cljs$core$IFn$_invoke$arity$variadic = G__39006__delegate;
return G__39006;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1486527005843