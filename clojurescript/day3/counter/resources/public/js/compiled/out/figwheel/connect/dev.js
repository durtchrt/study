// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('counter.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39472__delegate = function (x){
if(cljs.core.truth_(counter.core.on_js_reload)){
return cljs.core.apply.call(null,counter.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'counter.core/on-js-reload' is missing");
}
};
var G__39472 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__39473__i = 0, G__39473__a = new Array(arguments.length -  0);
while (G__39473__i < G__39473__a.length) {G__39473__a[G__39473__i] = arguments[G__39473__i + 0]; ++G__39473__i;}
  x = new cljs.core.IndexedSeq(G__39473__a,0);
} 
return G__39472__delegate.call(this,x);};
G__39472.cljs$lang$maxFixedArity = 0;
G__39472.cljs$lang$applyTo = (function (arglist__39474){
var x = cljs.core.seq(arglist__39474);
return G__39472__delegate(x);
});
G__39472.cljs$core$IFn$_invoke$arity$variadic = G__39472__delegate;
return G__39472;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1486526317940