// Compiled by ClojureScript 1.9.457 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__3672__auto__,writer__3673__auto__,opt__3674__auto__){
return cljs.core._write.call(null,writer__3673__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5887 = arguments.length;
var i__3983__auto___5888 = (0);
while(true){
if((i__3983__auto___5888 < len__3982__auto___5887)){
args__3985__auto__.push((arguments[i__3983__auto___5888]));

var G__5889 = (i__3983__auto___5888 + (1));
i__3983__auto___5888 = G__5889;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq5886){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5886));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5891 = arguments.length;
var i__3983__auto___5892 = (0);
while(true){
if((i__3983__auto___5892 < len__3982__auto___5891)){
args__3985__auto__.push((arguments[i__3983__auto___5892]));

var G__5893 = (i__3983__auto___5892 + (1));
i__3983__auto___5892 = G__5893;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq5890){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5890));
});

var g_QMARK__5894 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_5895 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__5894){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__5894))
,null));
var mkg_5896 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__5894,g_5895){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__5894,g_5895))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__5894,g_5895,mkg_5896){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__5894).call(null,x);
});})(g_QMARK__5894,g_5895,mkg_5896))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__5894,g_5895,mkg_5896){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_5896).call(null,gfn);
});})(g_QMARK__5894,g_5895,mkg_5896))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__5894,g_5895,mkg_5896){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_5895).call(null,generator);
});})(g_QMARK__5894,g_5895,mkg_5896))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__6352__auto___5916 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__6352__auto___5916){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5917 = arguments.length;
var i__3983__auto___5918 = (0);
while(true){
if((i__3983__auto___5918 < len__3982__auto___5917)){
args__3985__auto__.push((arguments[i__3983__auto___5918]));

var G__5919 = (i__3983__auto___5918 + (1));
i__3983__auto___5918 = G__5919;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5916))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5916){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5916),args);
});})(g__6352__auto___5916))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__6352__auto___5916){
return (function (seq5897){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5897));
});})(g__6352__auto___5916))
;


var g__6352__auto___5920 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__6352__auto___5920){
return (function cljs$spec$impl$gen$list(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5921 = arguments.length;
var i__3983__auto___5922 = (0);
while(true){
if((i__3983__auto___5922 < len__3982__auto___5921)){
args__3985__auto__.push((arguments[i__3983__auto___5922]));

var G__5923 = (i__3983__auto___5922 + (1));
i__3983__auto___5922 = G__5923;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5920))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5920){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5920),args);
});})(g__6352__auto___5920))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__6352__auto___5920){
return (function (seq5898){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5898));
});})(g__6352__auto___5920))
;


var g__6352__auto___5924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__6352__auto___5924){
return (function cljs$spec$impl$gen$map(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5925 = arguments.length;
var i__3983__auto___5926 = (0);
while(true){
if((i__3983__auto___5926 < len__3982__auto___5925)){
args__3985__auto__.push((arguments[i__3983__auto___5926]));

var G__5927 = (i__3983__auto___5926 + (1));
i__3983__auto___5926 = G__5927;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5924))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5924){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5924),args);
});})(g__6352__auto___5924))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__6352__auto___5924){
return (function (seq5899){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5899));
});})(g__6352__auto___5924))
;


var g__6352__auto___5928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__6352__auto___5928){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5929 = arguments.length;
var i__3983__auto___5930 = (0);
while(true){
if((i__3983__auto___5930 < len__3982__auto___5929)){
args__3985__auto__.push((arguments[i__3983__auto___5930]));

var G__5931 = (i__3983__auto___5930 + (1));
i__3983__auto___5930 = G__5931;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5928))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5928){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5928),args);
});})(g__6352__auto___5928))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__6352__auto___5928){
return (function (seq5900){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5900));
});})(g__6352__auto___5928))
;


var g__6352__auto___5932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__6352__auto___5932){
return (function cljs$spec$impl$gen$set(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5933 = arguments.length;
var i__3983__auto___5934 = (0);
while(true){
if((i__3983__auto___5934 < len__3982__auto___5933)){
args__3985__auto__.push((arguments[i__3983__auto___5934]));

var G__5935 = (i__3983__auto___5934 + (1));
i__3983__auto___5934 = G__5935;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5932))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5932){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5932),args);
});})(g__6352__auto___5932))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__6352__auto___5932){
return (function (seq5901){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5901));
});})(g__6352__auto___5932))
;


var g__6352__auto___5936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__6352__auto___5936){
return (function cljs$spec$impl$gen$vector(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5937 = arguments.length;
var i__3983__auto___5938 = (0);
while(true){
if((i__3983__auto___5938 < len__3982__auto___5937)){
args__3985__auto__.push((arguments[i__3983__auto___5938]));

var G__5939 = (i__3983__auto___5938 + (1));
i__3983__auto___5938 = G__5939;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5936))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5936){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5936),args);
});})(g__6352__auto___5936))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__6352__auto___5936){
return (function (seq5902){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5902));
});})(g__6352__auto___5936))
;


var g__6352__auto___5940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__6352__auto___5940){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5941 = arguments.length;
var i__3983__auto___5942 = (0);
while(true){
if((i__3983__auto___5942 < len__3982__auto___5941)){
args__3985__auto__.push((arguments[i__3983__auto___5942]));

var G__5943 = (i__3983__auto___5942 + (1));
i__3983__auto___5942 = G__5943;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5940))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5940){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5940),args);
});})(g__6352__auto___5940))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__6352__auto___5940){
return (function (seq5903){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5903));
});})(g__6352__auto___5940))
;


var g__6352__auto___5944 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__6352__auto___5944){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5945 = arguments.length;
var i__3983__auto___5946 = (0);
while(true){
if((i__3983__auto___5946 < len__3982__auto___5945)){
args__3985__auto__.push((arguments[i__3983__auto___5946]));

var G__5947 = (i__3983__auto___5946 + (1));
i__3983__auto___5946 = G__5947;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5944))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5944){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5944),args);
});})(g__6352__auto___5944))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__6352__auto___5944){
return (function (seq5904){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5904));
});})(g__6352__auto___5944))
;


var g__6352__auto___5948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__6352__auto___5948){
return (function cljs$spec$impl$gen$elements(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5949 = arguments.length;
var i__3983__auto___5950 = (0);
while(true){
if((i__3983__auto___5950 < len__3982__auto___5949)){
args__3985__auto__.push((arguments[i__3983__auto___5950]));

var G__5951 = (i__3983__auto___5950 + (1));
i__3983__auto___5950 = G__5951;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5948))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5948){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5948),args);
});})(g__6352__auto___5948))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__6352__auto___5948){
return (function (seq5905){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5905));
});})(g__6352__auto___5948))
;


var g__6352__auto___5952 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__6352__auto___5952){
return (function cljs$spec$impl$gen$bind(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5953 = arguments.length;
var i__3983__auto___5954 = (0);
while(true){
if((i__3983__auto___5954 < len__3982__auto___5953)){
args__3985__auto__.push((arguments[i__3983__auto___5954]));

var G__5955 = (i__3983__auto___5954 + (1));
i__3983__auto___5954 = G__5955;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5952))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5952){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5952),args);
});})(g__6352__auto___5952))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__6352__auto___5952){
return (function (seq5906){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5906));
});})(g__6352__auto___5952))
;


var g__6352__auto___5956 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__6352__auto___5956){
return (function cljs$spec$impl$gen$choose(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5957 = arguments.length;
var i__3983__auto___5958 = (0);
while(true){
if((i__3983__auto___5958 < len__3982__auto___5957)){
args__3985__auto__.push((arguments[i__3983__auto___5958]));

var G__5959 = (i__3983__auto___5958 + (1));
i__3983__auto___5958 = G__5959;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5956))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5956){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5956),args);
});})(g__6352__auto___5956))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__6352__auto___5956){
return (function (seq5907){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5907));
});})(g__6352__auto___5956))
;


var g__6352__auto___5960 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__6352__auto___5960){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5961 = arguments.length;
var i__3983__auto___5962 = (0);
while(true){
if((i__3983__auto___5962 < len__3982__auto___5961)){
args__3985__auto__.push((arguments[i__3983__auto___5962]));

var G__5963 = (i__3983__auto___5962 + (1));
i__3983__auto___5962 = G__5963;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5960))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5960){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5960),args);
});})(g__6352__auto___5960))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__6352__auto___5960){
return (function (seq5908){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5908));
});})(g__6352__auto___5960))
;


var g__6352__auto___5964 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__6352__auto___5964){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5965 = arguments.length;
var i__3983__auto___5966 = (0);
while(true){
if((i__3983__auto___5966 < len__3982__auto___5965)){
args__3985__auto__.push((arguments[i__3983__auto___5966]));

var G__5967 = (i__3983__auto___5966 + (1));
i__3983__auto___5966 = G__5967;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5964))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5964){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5964),args);
});})(g__6352__auto___5964))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__6352__auto___5964){
return (function (seq5909){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5909));
});})(g__6352__auto___5964))
;


var g__6352__auto___5968 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__6352__auto___5968){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5969 = arguments.length;
var i__3983__auto___5970 = (0);
while(true){
if((i__3983__auto___5970 < len__3982__auto___5969)){
args__3985__auto__.push((arguments[i__3983__auto___5970]));

var G__5971 = (i__3983__auto___5970 + (1));
i__3983__auto___5970 = G__5971;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5968))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5968){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5968),args);
});})(g__6352__auto___5968))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__6352__auto___5968){
return (function (seq5910){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5910));
});})(g__6352__auto___5968))
;


var g__6352__auto___5972 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__6352__auto___5972){
return (function cljs$spec$impl$gen$sample(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5973 = arguments.length;
var i__3983__auto___5974 = (0);
while(true){
if((i__3983__auto___5974 < len__3982__auto___5973)){
args__3985__auto__.push((arguments[i__3983__auto___5974]));

var G__5975 = (i__3983__auto___5974 + (1));
i__3983__auto___5974 = G__5975;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5972))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5972){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5972),args);
});})(g__6352__auto___5972))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__6352__auto___5972){
return (function (seq5911){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5911));
});})(g__6352__auto___5972))
;


var g__6352__auto___5976 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__6352__auto___5976){
return (function cljs$spec$impl$gen$return(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5977 = arguments.length;
var i__3983__auto___5978 = (0);
while(true){
if((i__3983__auto___5978 < len__3982__auto___5977)){
args__3985__auto__.push((arguments[i__3983__auto___5978]));

var G__5979 = (i__3983__auto___5978 + (1));
i__3983__auto___5978 = G__5979;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5976))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5976){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5976),args);
});})(g__6352__auto___5976))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__6352__auto___5976){
return (function (seq5912){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5912));
});})(g__6352__auto___5976))
;


var g__6352__auto___5980 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__6352__auto___5980){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5981 = arguments.length;
var i__3983__auto___5982 = (0);
while(true){
if((i__3983__auto___5982 < len__3982__auto___5981)){
args__3985__auto__.push((arguments[i__3983__auto___5982]));

var G__5983 = (i__3983__auto___5982 + (1));
i__3983__auto___5982 = G__5983;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5980))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5980){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5980),args);
});})(g__6352__auto___5980))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__6352__auto___5980){
return (function (seq5913){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5913));
});})(g__6352__auto___5980))
;


var g__6352__auto___5984 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__6352__auto___5984){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5985 = arguments.length;
var i__3983__auto___5986 = (0);
while(true){
if((i__3983__auto___5986 < len__3982__auto___5985)){
args__3985__auto__.push((arguments[i__3983__auto___5986]));

var G__5987 = (i__3983__auto___5986 + (1));
i__3983__auto___5986 = G__5987;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5984))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5984){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5984),args);
});})(g__6352__auto___5984))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__6352__auto___5984){
return (function (seq5914){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5914));
});})(g__6352__auto___5984))
;


var g__6352__auto___5988 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__6352__auto___5988){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__3985__auto__ = [];
var len__3982__auto___5989 = arguments.length;
var i__3983__auto___5990 = (0);
while(true){
if((i__3983__auto___5990 < len__3982__auto___5989)){
args__3985__auto__.push((arguments[i__3983__auto___5990]));

var G__5991 = (i__3983__auto___5990 + (1));
i__3983__auto___5990 = G__5991;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6352__auto___5988))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6352__auto___5988){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6352__auto___5988),args);
});})(g__6352__auto___5988))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__6352__auto___5988){
return (function (seq5915){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5915));
});})(g__6352__auto___5988))
;

var g__6357__auto___6013 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__6357__auto___6013){
return (function cljs$spec$impl$gen$any(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6014 = arguments.length;
var i__3983__auto___6015 = (0);
while(true){
if((i__3983__auto___6015 < len__3982__auto___6014)){
args__3985__auto__.push((arguments[i__3983__auto___6015]));

var G__6016 = (i__3983__auto___6015 + (1));
i__3983__auto___6015 = G__6016;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6013))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6013){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6013);
});})(g__6357__auto___6013))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__6357__auto___6013){
return (function (seq5992){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5992));
});})(g__6357__auto___6013))
;


var g__6357__auto___6017 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__6357__auto___6017){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6018 = arguments.length;
var i__3983__auto___6019 = (0);
while(true){
if((i__3983__auto___6019 < len__3982__auto___6018)){
args__3985__auto__.push((arguments[i__3983__auto___6019]));

var G__6020 = (i__3983__auto___6019 + (1));
i__3983__auto___6019 = G__6020;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6017))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6017){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6017);
});})(g__6357__auto___6017))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__6357__auto___6017){
return (function (seq5993){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5993));
});})(g__6357__auto___6017))
;


var g__6357__auto___6021 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__6357__auto___6021){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6022 = arguments.length;
var i__3983__auto___6023 = (0);
while(true){
if((i__3983__auto___6023 < len__3982__auto___6022)){
args__3985__auto__.push((arguments[i__3983__auto___6023]));

var G__6024 = (i__3983__auto___6023 + (1));
i__3983__auto___6023 = G__6024;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6021))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6021){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6021);
});})(g__6357__auto___6021))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__6357__auto___6021){
return (function (seq5994){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5994));
});})(g__6357__auto___6021))
;


var g__6357__auto___6025 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__6357__auto___6025){
return (function cljs$spec$impl$gen$char(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6026 = arguments.length;
var i__3983__auto___6027 = (0);
while(true){
if((i__3983__auto___6027 < len__3982__auto___6026)){
args__3985__auto__.push((arguments[i__3983__auto___6027]));

var G__6028 = (i__3983__auto___6027 + (1));
i__3983__auto___6027 = G__6028;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6025))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6025){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6025);
});})(g__6357__auto___6025))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__6357__auto___6025){
return (function (seq5995){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5995));
});})(g__6357__auto___6025))
;


var g__6357__auto___6029 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__6357__auto___6029){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6030 = arguments.length;
var i__3983__auto___6031 = (0);
while(true){
if((i__3983__auto___6031 < len__3982__auto___6030)){
args__3985__auto__.push((arguments[i__3983__auto___6031]));

var G__6032 = (i__3983__auto___6031 + (1));
i__3983__auto___6031 = G__6032;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6029))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6029){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6029);
});})(g__6357__auto___6029))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__6357__auto___6029){
return (function (seq5996){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5996));
});})(g__6357__auto___6029))
;


var g__6357__auto___6033 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__6357__auto___6033){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6034 = arguments.length;
var i__3983__auto___6035 = (0);
while(true){
if((i__3983__auto___6035 < len__3982__auto___6034)){
args__3985__auto__.push((arguments[i__3983__auto___6035]));

var G__6036 = (i__3983__auto___6035 + (1));
i__3983__auto___6035 = G__6036;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6033))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6033){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6033);
});})(g__6357__auto___6033))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__6357__auto___6033){
return (function (seq5997){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5997));
});})(g__6357__auto___6033))
;


var g__6357__auto___6037 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__6357__auto___6037){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6038 = arguments.length;
var i__3983__auto___6039 = (0);
while(true){
if((i__3983__auto___6039 < len__3982__auto___6038)){
args__3985__auto__.push((arguments[i__3983__auto___6039]));

var G__6040 = (i__3983__auto___6039 + (1));
i__3983__auto___6039 = G__6040;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6037))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6037){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6037);
});})(g__6357__auto___6037))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__6357__auto___6037){
return (function (seq5998){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5998));
});})(g__6357__auto___6037))
;


var g__6357__auto___6041 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__6357__auto___6041){
return (function cljs$spec$impl$gen$double(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6042 = arguments.length;
var i__3983__auto___6043 = (0);
while(true){
if((i__3983__auto___6043 < len__3982__auto___6042)){
args__3985__auto__.push((arguments[i__3983__auto___6043]));

var G__6044 = (i__3983__auto___6043 + (1));
i__3983__auto___6043 = G__6044;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6041))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6041){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6041);
});})(g__6357__auto___6041))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__6357__auto___6041){
return (function (seq5999){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5999));
});})(g__6357__auto___6041))
;


var g__6357__auto___6045 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__6357__auto___6045){
return (function cljs$spec$impl$gen$int(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6046 = arguments.length;
var i__3983__auto___6047 = (0);
while(true){
if((i__3983__auto___6047 < len__3982__auto___6046)){
args__3985__auto__.push((arguments[i__3983__auto___6047]));

var G__6048 = (i__3983__auto___6047 + (1));
i__3983__auto___6047 = G__6048;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6045))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6045){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6045);
});})(g__6357__auto___6045))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__6357__auto___6045){
return (function (seq6000){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6000));
});})(g__6357__auto___6045))
;


var g__6357__auto___6049 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__6357__auto___6049){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6050 = arguments.length;
var i__3983__auto___6051 = (0);
while(true){
if((i__3983__auto___6051 < len__3982__auto___6050)){
args__3985__auto__.push((arguments[i__3983__auto___6051]));

var G__6052 = (i__3983__auto___6051 + (1));
i__3983__auto___6051 = G__6052;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6049))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6049){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6049);
});})(g__6357__auto___6049))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__6357__auto___6049){
return (function (seq6001){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6001));
});})(g__6357__auto___6049))
;


var g__6357__auto___6053 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__6357__auto___6053){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6054 = arguments.length;
var i__3983__auto___6055 = (0);
while(true){
if((i__3983__auto___6055 < len__3982__auto___6054)){
args__3985__auto__.push((arguments[i__3983__auto___6055]));

var G__6056 = (i__3983__auto___6055 + (1));
i__3983__auto___6055 = G__6056;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6053))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6053){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6053);
});})(g__6357__auto___6053))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__6357__auto___6053){
return (function (seq6002){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6002));
});})(g__6357__auto___6053))
;


var g__6357__auto___6057 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__6357__auto___6057){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6058 = arguments.length;
var i__3983__auto___6059 = (0);
while(true){
if((i__3983__auto___6059 < len__3982__auto___6058)){
args__3985__auto__.push((arguments[i__3983__auto___6059]));

var G__6060 = (i__3983__auto___6059 + (1));
i__3983__auto___6059 = G__6060;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6057))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6057){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6057);
});})(g__6357__auto___6057))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__6357__auto___6057){
return (function (seq6003){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6003));
});})(g__6357__auto___6057))
;


var g__6357__auto___6061 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__6357__auto___6061){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6062 = arguments.length;
var i__3983__auto___6063 = (0);
while(true){
if((i__3983__auto___6063 < len__3982__auto___6062)){
args__3985__auto__.push((arguments[i__3983__auto___6063]));

var G__6064 = (i__3983__auto___6063 + (1));
i__3983__auto___6063 = G__6064;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6061))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6061){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6061);
});})(g__6357__auto___6061))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__6357__auto___6061){
return (function (seq6004){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6004));
});})(g__6357__auto___6061))
;


var g__6357__auto___6065 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__6357__auto___6065){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6066 = arguments.length;
var i__3983__auto___6067 = (0);
while(true){
if((i__3983__auto___6067 < len__3982__auto___6066)){
args__3985__auto__.push((arguments[i__3983__auto___6067]));

var G__6068 = (i__3983__auto___6067 + (1));
i__3983__auto___6067 = G__6068;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6065))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6065){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6065);
});})(g__6357__auto___6065))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__6357__auto___6065){
return (function (seq6005){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6005));
});})(g__6357__auto___6065))
;


var g__6357__auto___6069 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__6357__auto___6069){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6070 = arguments.length;
var i__3983__auto___6071 = (0);
while(true){
if((i__3983__auto___6071 < len__3982__auto___6070)){
args__3985__auto__.push((arguments[i__3983__auto___6071]));

var G__6072 = (i__3983__auto___6071 + (1));
i__3983__auto___6071 = G__6072;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6069))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6069){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6069);
});})(g__6357__auto___6069))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__6357__auto___6069){
return (function (seq6006){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6006));
});})(g__6357__auto___6069))
;


var g__6357__auto___6073 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__6357__auto___6073){
return (function cljs$spec$impl$gen$string(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6074 = arguments.length;
var i__3983__auto___6075 = (0);
while(true){
if((i__3983__auto___6075 < len__3982__auto___6074)){
args__3985__auto__.push((arguments[i__3983__auto___6075]));

var G__6076 = (i__3983__auto___6075 + (1));
i__3983__auto___6075 = G__6076;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6073))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6073){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6073);
});})(g__6357__auto___6073))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__6357__auto___6073){
return (function (seq6007){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6007));
});})(g__6357__auto___6073))
;


var g__6357__auto___6077 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__6357__auto___6077){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6078 = arguments.length;
var i__3983__auto___6079 = (0);
while(true){
if((i__3983__auto___6079 < len__3982__auto___6078)){
args__3985__auto__.push((arguments[i__3983__auto___6079]));

var G__6080 = (i__3983__auto___6079 + (1));
i__3983__auto___6079 = G__6080;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6077))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6077){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6077);
});})(g__6357__auto___6077))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__6357__auto___6077){
return (function (seq6008){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6008));
});})(g__6357__auto___6077))
;


var g__6357__auto___6081 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__6357__auto___6081){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6082 = arguments.length;
var i__3983__auto___6083 = (0);
while(true){
if((i__3983__auto___6083 < len__3982__auto___6082)){
args__3985__auto__.push((arguments[i__3983__auto___6083]));

var G__6084 = (i__3983__auto___6083 + (1));
i__3983__auto___6083 = G__6084;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6081))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6081){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6081);
});})(g__6357__auto___6081))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__6357__auto___6081){
return (function (seq6009){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6009));
});})(g__6357__auto___6081))
;


var g__6357__auto___6085 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__6357__auto___6085){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6086 = arguments.length;
var i__3983__auto___6087 = (0);
while(true){
if((i__3983__auto___6087 < len__3982__auto___6086)){
args__3985__auto__.push((arguments[i__3983__auto___6087]));

var G__6088 = (i__3983__auto___6087 + (1));
i__3983__auto___6087 = G__6088;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6085))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6085){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6085);
});})(g__6357__auto___6085))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__6357__auto___6085){
return (function (seq6010){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6010));
});})(g__6357__auto___6085))
;


var g__6357__auto___6089 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__6357__auto___6089){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6090 = arguments.length;
var i__3983__auto___6091 = (0);
while(true){
if((i__3983__auto___6091 < len__3982__auto___6090)){
args__3985__auto__.push((arguments[i__3983__auto___6091]));

var G__6092 = (i__3983__auto___6091 + (1));
i__3983__auto___6091 = G__6092;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6089))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6089){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6089);
});})(g__6357__auto___6089))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__6357__auto___6089){
return (function (seq6011){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6011));
});})(g__6357__auto___6089))
;


var g__6357__auto___6093 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__6357__auto___6093){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6094 = arguments.length;
var i__3983__auto___6095 = (0);
while(true){
if((i__3983__auto___6095 < len__3982__auto___6094)){
args__3985__auto__.push((arguments[i__3983__auto___6095]));

var G__6096 = (i__3983__auto___6095 + (1));
i__3983__auto___6095 = G__6096;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});})(g__6357__auto___6093))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6357__auto___6093){
return (function (args){
return cljs.core.deref.call(null,g__6357__auto___6093);
});})(g__6357__auto___6093))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__6357__auto___6093){
return (function (seq6012){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6012));
});})(g__6357__auto___6093))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__3985__auto__ = [];
var len__3982__auto___6099 = arguments.length;
var i__3983__auto___6100 = (0);
while(true){
if((i__3983__auto___6100 < len__3982__auto___6099)){
args__3985__auto__.push((arguments[i__3983__auto___6100]));

var G__6101 = (i__3983__auto___6100 + (1));
i__3983__auto___6100 = G__6101;
continue;
} else {
}
break;
}

var argseq__3986__auto__ = ((((0) < args__3985__auto__.length))?(new cljs.core.IndexedSeq(args__3985__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__3986__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__6097_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__6097_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq6098){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6098));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__6102_SHARP_){
return (new Date(p1__6102_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});
