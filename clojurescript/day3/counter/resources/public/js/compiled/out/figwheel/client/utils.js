// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.userAgent.product');
goog.require('goog.async.Deferred');
goog.require('cljs.pprint');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
goog.require('cljs.reader');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return !((goog.global.document == null));
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.worker_env_QMARK_ = (function figwheel$client$utils$worker_env_QMARK_(){
return ((goog.global.document == null)) && (typeof self !== 'undefined') && (typeof self.importScripts !== 'undefined');
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"html","html",-998796897);
} else {
if(cljs.core.truth_(figwheel.client.utils.worker_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"worker","worker",938239996);
} else {
return null;
}
}
}
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,"$1");
});
figwheel.client.utils.create_custom_event = (function figwheel$client$utils$create_custom_event(event_name,data){
if(cljs.core.not.call(null,goog.userAgent.product.IE)){
return (new CustomEvent(event_name,(function (){var obj31711 = {"detail":data};
return obj31711;
})()));
} else {
var event = document.createEvent("CustomEvent");
event.initCustomEvent(event_name,false,false,data);

return event;
}
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__24860__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (window["CustomEvent"]);
if(cljs.core.truth_(and__24860__auto____$1)){
return typeof document !== 'undefined';
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return document.body.dispatchEvent(figwheel.client.utils.create_custom_event.call(null,event_name,data));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args31716 = [];
var len__25947__auto___31722 = arguments.length;
var i__25948__auto___31723 = (0);
while(true){
if((i__25948__auto___31723 < len__25947__auto___31722)){
args31716.push((arguments[i__25948__auto___31723]));

var G__31724 = (i__25948__auto___31723 + (1));
i__25948__auto___31723 = G__31724;
continue;
} else {
}
break;
}

var G__31718 = args31716.length;
switch (G__31718) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31716.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__31719 = cljs.core._EQ_;
var expr__31720 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__31719.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__31720))){
return ((function (pred__31719,expr__31720){
return (function (p1__31712_SHARP_){
return console.warn(p1__31712_SHARP_);
});
;})(pred__31719,expr__31720))
} else {
if(cljs.core.truth_(pred__31719.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__31720))){
return ((function (pred__31719,expr__31720){
return (function (p1__31713_SHARP_){
return console.debug(p1__31713_SHARP_);
});
;})(pred__31719,expr__31720))
} else {
if(cljs.core.truth_(pred__31719.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__31720))){
return ((function (pred__31719,expr__31720){
return (function (p1__31714_SHARP_){
return console.error(p1__31714_SHARP_);
});
;})(pred__31719,expr__31720))
} else {
return ((function (pred__31719,expr__31720){
return (function (p1__31715_SHARP_){
return console.log(p1__31715_SHARP_);
});
;})(pred__31719,expr__31720))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;

figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__31726){
var map__31729 = p__31726;
var map__31729__$1 = ((((!((map__31729 == null)))?((((map__31729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31729):map__31729);
var opts = map__31729__$1;
var eval_fn = cljs.core.get.call(null,map__31729__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
if(cljs.core.truth_(eval_fn)){
return eval_fn.call(null,code,opts);
} else {
return eval(code);
}
});
figwheel.client.utils.pprint_to_string = (function figwheel$client$utils$pprint_to_string(x){
var sb = (new goog.string.StringBuffer());
var sbw = (new cljs.core.StringBufferWriter(sb));
cljs.pprint.pprint.call(null,x,sbw);

return goog.string.trimRight([cljs.core.str(sb)].join(''));
});
/**
 * chains an async action on to a deferred
 *   Must provide a goog.async.Deferred and action function that
 *   takes an initial value and a continuation fn to call with the result
 */
figwheel.client.utils.liftContD = (function figwheel$client$utils$liftContD(deferred,f){
return deferred.then((function (val){
var new_def = (new goog.async.Deferred());
f.call(null,val,((function (new_def){
return (function (p1__31731_SHARP_){
return new_def.callback(p1__31731_SHARP_);
});})(new_def))
);

return new_def;
}));
});
/**
 * maps an async action across a collection and chains the results
 *   onto a deferred
 */
figwheel.client.utils.mapConcatD = (function figwheel$client$utils$mapConcatD(deferred,f,coll){
var results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
return cljs.core.reduce.call(null,((function (results){
return (function (defr,v){
return figwheel.client.utils.liftContD.call(null,defr,((function (results){
return (function (_,fin){
return f.call(null,v,((function (results){
return (function (v__$1){
cljs.core.swap_BANG_.call(null,results,cljs.core.conj,v__$1);

return fin.call(null,v__$1);
});})(results))
);
});})(results))
);
});})(results))
,deferred,coll).then(((function (results){
return (function (_){
return goog.async.Deferred.succeed(cljs.core.deref.call(null,results));
});})(results))
);
});
if(typeof figwheel.client.utils.local_persistent_config !== 'undefined'){
} else {
figwheel.client.utils.local_persistent_config = (function (){var a = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof localStorage !== 'undefined'){
cljs.core.add_watch.call(null,a,new cljs.core.Keyword(null,"sync-local-storage","sync-local-storage",-473590105),((function (a){
return (function (_,___$1,___$2,n){
return cljs.core.mapv.call(null,((function (a){
return (function (p__31732){
var vec__31733 = p__31732;
var ky = cljs.core.nth.call(null,vec__31733,(0),null);
var v = cljs.core.nth.call(null,vec__31733,(1),null);
return localStorage.setItem(cljs.core.name.call(null,ky),cljs.core.pr_str.call(null,v));
});})(a))
,n);
});})(a))
);
} else {
}

return a;
})();
}
/**
 * Set a local value on a key that in a browser will persist even when 
 * the browser gets reloaded.
 */
figwheel.client.utils.persistent_config_set_BANG_ = (function figwheel$client$utils$persistent_config_set_BANG_(ky,v){
return cljs.core.swap_BANG_.call(null,figwheel.client.utils.local_persistent_config,cljs.core.assoc,ky,v);
});
figwheel.client.utils.persistent_config_get = (function figwheel$client$utils$persistent_config_get(var_args){
var args31736 = [];
var len__25947__auto___31739 = arguments.length;
var i__25948__auto___31740 = (0);
while(true){
if((i__25948__auto___31740 < len__25947__auto___31739)){
args31736.push((arguments[i__25948__auto___31740]));

var G__31741 = (i__25948__auto___31740 + (1));
i__25948__auto___31740 = G__31741;
continue;
} else {
}
break;
}

var G__31738 = args31736.length;
switch (G__31738) {
case 2:
return figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31736.length)].join('')));

}
});

figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$2 = (function (ky,not_found){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,figwheel.client.utils.local_persistent_config),ky)){
return cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.utils.local_persistent_config),ky);
} else {
if(cljs.core.truth_((function (){var and__24860__auto__ = typeof localStorage !== 'undefined';
if(and__24860__auto__){
return localStorage.getItem(cljs.core.name.call(null,ky));
} else {
return and__24860__auto__;
}
})())){
var v = cljs.reader.read_string.call(null,localStorage.getItem(cljs.core.name.call(null,ky)));
figwheel.client.utils.persistent_config_set_BANG_.call(null,ky,v);

return v;
} else {
return not_found;

}
}
});

figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$1 = (function (ky){
return figwheel.client.utils.persistent_config_get.call(null,ky,null);
});

figwheel.client.utils.persistent_config_get.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=utils.js.map?rel=1486525847063