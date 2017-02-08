// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('calc.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__27942__delegate = function (x){
if(cljs.core.truth_(calc.core.on_js_reload)){
return cljs.core.apply.call(null,calc.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'calc.core/on-js-reload' is missing");
}
};
var G__27942 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__27943__i = 0, G__27943__a = new Array(arguments.length -  0);
while (G__27943__i < G__27943__a.length) {G__27943__a[G__27943__i] = arguments[G__27943__i + 0]; ++G__27943__i;}
  x = new cljs.core.IndexedSeq(G__27943__a,0);
} 
return G__27942__delegate.call(this,x);};
G__27942.cljs$lang$maxFixedArity = 0;
G__27942.cljs$lang$applyTo = (function (arglist__27944){
var x = cljs.core.seq(arglist__27944);
return G__27942__delegate(x);
});
G__27942.cljs$core$IFn$_invoke$arity$variadic = G__27942__delegate;
return G__27942;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1486444556543