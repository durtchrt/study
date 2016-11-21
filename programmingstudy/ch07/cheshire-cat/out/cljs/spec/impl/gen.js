// Compiled by ClojureScript 1.9.293 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7788__auto__,writer__7789__auto__,opt__7790__auto__){
return cljs.core._write.call(null,writer__7789__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10458 = arguments.length;
var i__8291__auto___10459 = (0);
while(true){
if((i__8291__auto___10459 < len__8290__auto___10458)){
args__8297__auto__.push((arguments[i__8291__auto___10459]));

var G__10460 = (i__8291__auto___10459 + (1));
i__8291__auto___10459 = G__10460;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq10457){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10457));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10462 = arguments.length;
var i__8291__auto___10463 = (0);
while(true){
if((i__8291__auto___10463 < len__8290__auto___10462)){
args__8297__auto__.push((arguments[i__8291__auto___10463]));

var G__10464 = (i__8291__auto___10463 + (1));
i__8291__auto___10463 = G__10464;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq10461){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10461));
});

var g_QMARK__10465 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_10466 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__10465){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__10465))
,null));
var mkg_10467 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__10465,g_10466){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__10465,g_10466))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__10465,g_10466,mkg_10467){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__10465).call(null,x);
});})(g_QMARK__10465,g_10466,mkg_10467))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__10465,g_10466,mkg_10467){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_10467).call(null,gfn);
});})(g_QMARK__10465,g_10466,mkg_10467))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__10465,g_10466,mkg_10467){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_10466).call(null,generator);
});})(g_QMARK__10465,g_10466,mkg_10467))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8421__auto___10486 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__8421__auto___10486){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10487 = arguments.length;
var i__8291__auto___10488 = (0);
while(true){
if((i__8291__auto___10488 < len__8290__auto___10487)){
args__8297__auto__.push((arguments[i__8291__auto___10488]));

var G__10489 = (i__8291__auto___10488 + (1));
i__8291__auto___10488 = G__10489;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10486))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10486){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10486),args);
});})(g__8421__auto___10486))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__8421__auto___10486){
return (function (seq10468){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10468));
});})(g__8421__auto___10486))
;


var g__8421__auto___10490 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__8421__auto___10490){
return (function cljs$spec$impl$gen$list(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10491 = arguments.length;
var i__8291__auto___10492 = (0);
while(true){
if((i__8291__auto___10492 < len__8290__auto___10491)){
args__8297__auto__.push((arguments[i__8291__auto___10492]));

var G__10493 = (i__8291__auto___10492 + (1));
i__8291__auto___10492 = G__10493;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10490))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10490){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10490),args);
});})(g__8421__auto___10490))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__8421__auto___10490){
return (function (seq10469){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10469));
});})(g__8421__auto___10490))
;


var g__8421__auto___10494 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__8421__auto___10494){
return (function cljs$spec$impl$gen$map(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10495 = arguments.length;
var i__8291__auto___10496 = (0);
while(true){
if((i__8291__auto___10496 < len__8290__auto___10495)){
args__8297__auto__.push((arguments[i__8291__auto___10496]));

var G__10497 = (i__8291__auto___10496 + (1));
i__8291__auto___10496 = G__10497;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10494))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10494){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10494),args);
});})(g__8421__auto___10494))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__8421__auto___10494){
return (function (seq10470){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10470));
});})(g__8421__auto___10494))
;


var g__8421__auto___10498 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__8421__auto___10498){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10499 = arguments.length;
var i__8291__auto___10500 = (0);
while(true){
if((i__8291__auto___10500 < len__8290__auto___10499)){
args__8297__auto__.push((arguments[i__8291__auto___10500]));

var G__10501 = (i__8291__auto___10500 + (1));
i__8291__auto___10500 = G__10501;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10498))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10498){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10498),args);
});})(g__8421__auto___10498))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__8421__auto___10498){
return (function (seq10471){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10471));
});})(g__8421__auto___10498))
;


var g__8421__auto___10502 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__8421__auto___10502){
return (function cljs$spec$impl$gen$set(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10503 = arguments.length;
var i__8291__auto___10504 = (0);
while(true){
if((i__8291__auto___10504 < len__8290__auto___10503)){
args__8297__auto__.push((arguments[i__8291__auto___10504]));

var G__10505 = (i__8291__auto___10504 + (1));
i__8291__auto___10504 = G__10505;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10502))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10502){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10502),args);
});})(g__8421__auto___10502))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__8421__auto___10502){
return (function (seq10472){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10472));
});})(g__8421__auto___10502))
;


var g__8421__auto___10506 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__8421__auto___10506){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10507 = arguments.length;
var i__8291__auto___10508 = (0);
while(true){
if((i__8291__auto___10508 < len__8290__auto___10507)){
args__8297__auto__.push((arguments[i__8291__auto___10508]));

var G__10509 = (i__8291__auto___10508 + (1));
i__8291__auto___10508 = G__10509;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10506))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10506){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10506),args);
});})(g__8421__auto___10506))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__8421__auto___10506){
return (function (seq10473){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10473));
});})(g__8421__auto___10506))
;


var g__8421__auto___10510 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__8421__auto___10510){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10511 = arguments.length;
var i__8291__auto___10512 = (0);
while(true){
if((i__8291__auto___10512 < len__8290__auto___10511)){
args__8297__auto__.push((arguments[i__8291__auto___10512]));

var G__10513 = (i__8291__auto___10512 + (1));
i__8291__auto___10512 = G__10513;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10510))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10510){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10510),args);
});})(g__8421__auto___10510))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__8421__auto___10510){
return (function (seq10474){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10474));
});})(g__8421__auto___10510))
;


var g__8421__auto___10514 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__8421__auto___10514){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10515 = arguments.length;
var i__8291__auto___10516 = (0);
while(true){
if((i__8291__auto___10516 < len__8290__auto___10515)){
args__8297__auto__.push((arguments[i__8291__auto___10516]));

var G__10517 = (i__8291__auto___10516 + (1));
i__8291__auto___10516 = G__10517;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10514))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10514){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10514),args);
});})(g__8421__auto___10514))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__8421__auto___10514){
return (function (seq10475){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10475));
});})(g__8421__auto___10514))
;


var g__8421__auto___10518 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__8421__auto___10518){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10519 = arguments.length;
var i__8291__auto___10520 = (0);
while(true){
if((i__8291__auto___10520 < len__8290__auto___10519)){
args__8297__auto__.push((arguments[i__8291__auto___10520]));

var G__10521 = (i__8291__auto___10520 + (1));
i__8291__auto___10520 = G__10521;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10518))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10518){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10518),args);
});})(g__8421__auto___10518))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__8421__auto___10518){
return (function (seq10476){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10476));
});})(g__8421__auto___10518))
;


var g__8421__auto___10522 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__8421__auto___10522){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10523 = arguments.length;
var i__8291__auto___10524 = (0);
while(true){
if((i__8291__auto___10524 < len__8290__auto___10523)){
args__8297__auto__.push((arguments[i__8291__auto___10524]));

var G__10525 = (i__8291__auto___10524 + (1));
i__8291__auto___10524 = G__10525;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10522))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10522){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10522),args);
});})(g__8421__auto___10522))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__8421__auto___10522){
return (function (seq10477){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10477));
});})(g__8421__auto___10522))
;


var g__8421__auto___10526 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__8421__auto___10526){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10527 = arguments.length;
var i__8291__auto___10528 = (0);
while(true){
if((i__8291__auto___10528 < len__8290__auto___10527)){
args__8297__auto__.push((arguments[i__8291__auto___10528]));

var G__10529 = (i__8291__auto___10528 + (1));
i__8291__auto___10528 = G__10529;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10526))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10526){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10526),args);
});})(g__8421__auto___10526))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__8421__auto___10526){
return (function (seq10478){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10478));
});})(g__8421__auto___10526))
;


var g__8421__auto___10530 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__8421__auto___10530){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10531 = arguments.length;
var i__8291__auto___10532 = (0);
while(true){
if((i__8291__auto___10532 < len__8290__auto___10531)){
args__8297__auto__.push((arguments[i__8291__auto___10532]));

var G__10533 = (i__8291__auto___10532 + (1));
i__8291__auto___10532 = G__10533;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10530))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10530){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10530),args);
});})(g__8421__auto___10530))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__8421__auto___10530){
return (function (seq10479){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10479));
});})(g__8421__auto___10530))
;


var g__8421__auto___10534 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__8421__auto___10534){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10535 = arguments.length;
var i__8291__auto___10536 = (0);
while(true){
if((i__8291__auto___10536 < len__8290__auto___10535)){
args__8297__auto__.push((arguments[i__8291__auto___10536]));

var G__10537 = (i__8291__auto___10536 + (1));
i__8291__auto___10536 = G__10537;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10534))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10534){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10534),args);
});})(g__8421__auto___10534))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__8421__auto___10534){
return (function (seq10480){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10480));
});})(g__8421__auto___10534))
;


var g__8421__auto___10538 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__8421__auto___10538){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10539 = arguments.length;
var i__8291__auto___10540 = (0);
while(true){
if((i__8291__auto___10540 < len__8290__auto___10539)){
args__8297__auto__.push((arguments[i__8291__auto___10540]));

var G__10541 = (i__8291__auto___10540 + (1));
i__8291__auto___10540 = G__10541;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10538))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10538){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10538),args);
});})(g__8421__auto___10538))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__8421__auto___10538){
return (function (seq10481){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10481));
});})(g__8421__auto___10538))
;


var g__8421__auto___10542 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__8421__auto___10542){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10543 = arguments.length;
var i__8291__auto___10544 = (0);
while(true){
if((i__8291__auto___10544 < len__8290__auto___10543)){
args__8297__auto__.push((arguments[i__8291__auto___10544]));

var G__10545 = (i__8291__auto___10544 + (1));
i__8291__auto___10544 = G__10545;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10542))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10542){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10542),args);
});})(g__8421__auto___10542))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__8421__auto___10542){
return (function (seq10482){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10482));
});})(g__8421__auto___10542))
;


var g__8421__auto___10546 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__8421__auto___10546){
return (function cljs$spec$impl$gen$return(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10547 = arguments.length;
var i__8291__auto___10548 = (0);
while(true){
if((i__8291__auto___10548 < len__8290__auto___10547)){
args__8297__auto__.push((arguments[i__8291__auto___10548]));

var G__10549 = (i__8291__auto___10548 + (1));
i__8291__auto___10548 = G__10549;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10546))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10546){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10546),args);
});})(g__8421__auto___10546))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__8421__auto___10546){
return (function (seq10483){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10483));
});})(g__8421__auto___10546))
;


var g__8421__auto___10550 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__8421__auto___10550){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10551 = arguments.length;
var i__8291__auto___10552 = (0);
while(true){
if((i__8291__auto___10552 < len__8290__auto___10551)){
args__8297__auto__.push((arguments[i__8291__auto___10552]));

var G__10553 = (i__8291__auto___10552 + (1));
i__8291__auto___10552 = G__10553;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10550))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10550){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10550),args);
});})(g__8421__auto___10550))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8421__auto___10550){
return (function (seq10484){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10484));
});})(g__8421__auto___10550))
;


var g__8421__auto___10554 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__8421__auto___10554){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10555 = arguments.length;
var i__8291__auto___10556 = (0);
while(true){
if((i__8291__auto___10556 < len__8290__auto___10555)){
args__8297__auto__.push((arguments[i__8291__auto___10556]));

var G__10557 = (i__8291__auto___10556 + (1));
i__8291__auto___10556 = G__10557;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8421__auto___10554))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8421__auto___10554){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8421__auto___10554),args);
});})(g__8421__auto___10554))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__8421__auto___10554){
return (function (seq10485){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10485));
});})(g__8421__auto___10554))
;

var g__8434__auto___10579 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__8434__auto___10579){
return (function cljs$spec$impl$gen$any(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10580 = arguments.length;
var i__8291__auto___10581 = (0);
while(true){
if((i__8291__auto___10581 < len__8290__auto___10580)){
args__8297__auto__.push((arguments[i__8291__auto___10581]));

var G__10582 = (i__8291__auto___10581 + (1));
i__8291__auto___10581 = G__10582;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10579))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10579){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10579);
});})(g__8434__auto___10579))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__8434__auto___10579){
return (function (seq10558){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10558));
});})(g__8434__auto___10579))
;


var g__8434__auto___10583 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__8434__auto___10583){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10584 = arguments.length;
var i__8291__auto___10585 = (0);
while(true){
if((i__8291__auto___10585 < len__8290__auto___10584)){
args__8297__auto__.push((arguments[i__8291__auto___10585]));

var G__10586 = (i__8291__auto___10585 + (1));
i__8291__auto___10585 = G__10586;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10583))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10583){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10583);
});})(g__8434__auto___10583))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__8434__auto___10583){
return (function (seq10559){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10559));
});})(g__8434__auto___10583))
;


var g__8434__auto___10587 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__8434__auto___10587){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10588 = arguments.length;
var i__8291__auto___10589 = (0);
while(true){
if((i__8291__auto___10589 < len__8290__auto___10588)){
args__8297__auto__.push((arguments[i__8291__auto___10589]));

var G__10590 = (i__8291__auto___10589 + (1));
i__8291__auto___10589 = G__10590;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10587))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10587){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10587);
});})(g__8434__auto___10587))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__8434__auto___10587){
return (function (seq10560){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10560));
});})(g__8434__auto___10587))
;


var g__8434__auto___10591 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__8434__auto___10591){
return (function cljs$spec$impl$gen$char(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10592 = arguments.length;
var i__8291__auto___10593 = (0);
while(true){
if((i__8291__auto___10593 < len__8290__auto___10592)){
args__8297__auto__.push((arguments[i__8291__auto___10593]));

var G__10594 = (i__8291__auto___10593 + (1));
i__8291__auto___10593 = G__10594;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10591))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10591){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10591);
});})(g__8434__auto___10591))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__8434__auto___10591){
return (function (seq10561){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10561));
});})(g__8434__auto___10591))
;


var g__8434__auto___10595 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__8434__auto___10595){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10596 = arguments.length;
var i__8291__auto___10597 = (0);
while(true){
if((i__8291__auto___10597 < len__8290__auto___10596)){
args__8297__auto__.push((arguments[i__8291__auto___10597]));

var G__10598 = (i__8291__auto___10597 + (1));
i__8291__auto___10597 = G__10598;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10595))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10595){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10595);
});})(g__8434__auto___10595))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__8434__auto___10595){
return (function (seq10562){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10562));
});})(g__8434__auto___10595))
;


var g__8434__auto___10599 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__8434__auto___10599){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10600 = arguments.length;
var i__8291__auto___10601 = (0);
while(true){
if((i__8291__auto___10601 < len__8290__auto___10600)){
args__8297__auto__.push((arguments[i__8291__auto___10601]));

var G__10602 = (i__8291__auto___10601 + (1));
i__8291__auto___10601 = G__10602;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10599))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10599){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10599);
});})(g__8434__auto___10599))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__8434__auto___10599){
return (function (seq10563){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10563));
});})(g__8434__auto___10599))
;


var g__8434__auto___10603 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__8434__auto___10603){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10604 = arguments.length;
var i__8291__auto___10605 = (0);
while(true){
if((i__8291__auto___10605 < len__8290__auto___10604)){
args__8297__auto__.push((arguments[i__8291__auto___10605]));

var G__10606 = (i__8291__auto___10605 + (1));
i__8291__auto___10605 = G__10606;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10603))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10603){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10603);
});})(g__8434__auto___10603))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__8434__auto___10603){
return (function (seq10564){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10564));
});})(g__8434__auto___10603))
;


var g__8434__auto___10607 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__8434__auto___10607){
return (function cljs$spec$impl$gen$double(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10608 = arguments.length;
var i__8291__auto___10609 = (0);
while(true){
if((i__8291__auto___10609 < len__8290__auto___10608)){
args__8297__auto__.push((arguments[i__8291__auto___10609]));

var G__10610 = (i__8291__auto___10609 + (1));
i__8291__auto___10609 = G__10610;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10607))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10607){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10607);
});})(g__8434__auto___10607))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__8434__auto___10607){
return (function (seq10565){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10565));
});})(g__8434__auto___10607))
;


var g__8434__auto___10611 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__8434__auto___10611){
return (function cljs$spec$impl$gen$int(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10612 = arguments.length;
var i__8291__auto___10613 = (0);
while(true){
if((i__8291__auto___10613 < len__8290__auto___10612)){
args__8297__auto__.push((arguments[i__8291__auto___10613]));

var G__10614 = (i__8291__auto___10613 + (1));
i__8291__auto___10613 = G__10614;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10611))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10611){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10611);
});})(g__8434__auto___10611))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__8434__auto___10611){
return (function (seq10566){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10566));
});})(g__8434__auto___10611))
;


var g__8434__auto___10615 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__8434__auto___10615){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10616 = arguments.length;
var i__8291__auto___10617 = (0);
while(true){
if((i__8291__auto___10617 < len__8290__auto___10616)){
args__8297__auto__.push((arguments[i__8291__auto___10617]));

var G__10618 = (i__8291__auto___10617 + (1));
i__8291__auto___10617 = G__10618;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10615))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10615){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10615);
});})(g__8434__auto___10615))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__8434__auto___10615){
return (function (seq10567){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10567));
});})(g__8434__auto___10615))
;


var g__8434__auto___10619 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__8434__auto___10619){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10620 = arguments.length;
var i__8291__auto___10621 = (0);
while(true){
if((i__8291__auto___10621 < len__8290__auto___10620)){
args__8297__auto__.push((arguments[i__8291__auto___10621]));

var G__10622 = (i__8291__auto___10621 + (1));
i__8291__auto___10621 = G__10622;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10619))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10619){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10619);
});})(g__8434__auto___10619))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__8434__auto___10619){
return (function (seq10568){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10568));
});})(g__8434__auto___10619))
;


var g__8434__auto___10623 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__8434__auto___10623){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10624 = arguments.length;
var i__8291__auto___10625 = (0);
while(true){
if((i__8291__auto___10625 < len__8290__auto___10624)){
args__8297__auto__.push((arguments[i__8291__auto___10625]));

var G__10626 = (i__8291__auto___10625 + (1));
i__8291__auto___10625 = G__10626;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10623))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10623){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10623);
});})(g__8434__auto___10623))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__8434__auto___10623){
return (function (seq10569){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10569));
});})(g__8434__auto___10623))
;


var g__8434__auto___10627 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__8434__auto___10627){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10628 = arguments.length;
var i__8291__auto___10629 = (0);
while(true){
if((i__8291__auto___10629 < len__8290__auto___10628)){
args__8297__auto__.push((arguments[i__8291__auto___10629]));

var G__10630 = (i__8291__auto___10629 + (1));
i__8291__auto___10629 = G__10630;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10627))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10627){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10627);
});})(g__8434__auto___10627))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__8434__auto___10627){
return (function (seq10570){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10570));
});})(g__8434__auto___10627))
;


var g__8434__auto___10631 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__8434__auto___10631){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10632 = arguments.length;
var i__8291__auto___10633 = (0);
while(true){
if((i__8291__auto___10633 < len__8290__auto___10632)){
args__8297__auto__.push((arguments[i__8291__auto___10633]));

var G__10634 = (i__8291__auto___10633 + (1));
i__8291__auto___10633 = G__10634;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10631))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10631){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10631);
});})(g__8434__auto___10631))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__8434__auto___10631){
return (function (seq10571){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10571));
});})(g__8434__auto___10631))
;


var g__8434__auto___10635 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__8434__auto___10635){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10636 = arguments.length;
var i__8291__auto___10637 = (0);
while(true){
if((i__8291__auto___10637 < len__8290__auto___10636)){
args__8297__auto__.push((arguments[i__8291__auto___10637]));

var G__10638 = (i__8291__auto___10637 + (1));
i__8291__auto___10637 = G__10638;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10635))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10635){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10635);
});})(g__8434__auto___10635))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__8434__auto___10635){
return (function (seq10572){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10572));
});})(g__8434__auto___10635))
;


var g__8434__auto___10639 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__8434__auto___10639){
return (function cljs$spec$impl$gen$string(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10640 = arguments.length;
var i__8291__auto___10641 = (0);
while(true){
if((i__8291__auto___10641 < len__8290__auto___10640)){
args__8297__auto__.push((arguments[i__8291__auto___10641]));

var G__10642 = (i__8291__auto___10641 + (1));
i__8291__auto___10641 = G__10642;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10639))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10639){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10639);
});})(g__8434__auto___10639))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__8434__auto___10639){
return (function (seq10573){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10573));
});})(g__8434__auto___10639))
;


var g__8434__auto___10643 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__8434__auto___10643){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10644 = arguments.length;
var i__8291__auto___10645 = (0);
while(true){
if((i__8291__auto___10645 < len__8290__auto___10644)){
args__8297__auto__.push((arguments[i__8291__auto___10645]));

var G__10646 = (i__8291__auto___10645 + (1));
i__8291__auto___10645 = G__10646;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10643))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10643){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10643);
});})(g__8434__auto___10643))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__8434__auto___10643){
return (function (seq10574){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10574));
});})(g__8434__auto___10643))
;


var g__8434__auto___10647 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__8434__auto___10647){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10648 = arguments.length;
var i__8291__auto___10649 = (0);
while(true){
if((i__8291__auto___10649 < len__8290__auto___10648)){
args__8297__auto__.push((arguments[i__8291__auto___10649]));

var G__10650 = (i__8291__auto___10649 + (1));
i__8291__auto___10649 = G__10650;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10647))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10647){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10647);
});})(g__8434__auto___10647))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__8434__auto___10647){
return (function (seq10575){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10575));
});})(g__8434__auto___10647))
;


var g__8434__auto___10651 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__8434__auto___10651){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10652 = arguments.length;
var i__8291__auto___10653 = (0);
while(true){
if((i__8291__auto___10653 < len__8290__auto___10652)){
args__8297__auto__.push((arguments[i__8291__auto___10653]));

var G__10654 = (i__8291__auto___10653 + (1));
i__8291__auto___10653 = G__10654;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10651))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10651){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10651);
});})(g__8434__auto___10651))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__8434__auto___10651){
return (function (seq10576){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10576));
});})(g__8434__auto___10651))
;


var g__8434__auto___10655 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__8434__auto___10655){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10656 = arguments.length;
var i__8291__auto___10657 = (0);
while(true){
if((i__8291__auto___10657 < len__8290__auto___10656)){
args__8297__auto__.push((arguments[i__8291__auto___10657]));

var G__10658 = (i__8291__auto___10657 + (1));
i__8291__auto___10657 = G__10658;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10655))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10655){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10655);
});})(g__8434__auto___10655))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__8434__auto___10655){
return (function (seq10577){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10577));
});})(g__8434__auto___10655))
;


var g__8434__auto___10659 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__8434__auto___10659){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10660 = arguments.length;
var i__8291__auto___10661 = (0);
while(true){
if((i__8291__auto___10661 < len__8290__auto___10660)){
args__8297__auto__.push((arguments[i__8291__auto___10661]));

var G__10662 = (i__8291__auto___10661 + (1));
i__8291__auto___10661 = G__10662;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__8434__auto___10659))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8434__auto___10659){
return (function (args){
return cljs.core.deref.call(null,g__8434__auto___10659);
});})(g__8434__auto___10659))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__8434__auto___10659){
return (function (seq10578){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10578));
});})(g__8434__auto___10659))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8297__auto__ = [];
var len__8290__auto___10665 = arguments.length;
var i__8291__auto___10666 = (0);
while(true){
if((i__8291__auto___10666 < len__8290__auto___10665)){
args__8297__auto__.push((arguments[i__8291__auto___10666]));

var G__10667 = (i__8291__auto___10666 + (1));
i__8291__auto___10666 = G__10667;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__10663_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__10663_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq10664){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10664));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__10668_SHARP_){
return (new Date(p1__10668_SHARP_));
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

//# sourceMappingURL=gen.js.map