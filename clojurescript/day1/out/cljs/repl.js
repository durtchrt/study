// Compiled by ClojureScript 1.9.457 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__3161){
var map__3186 = p__3161;
var map__3186__$1 = ((((!((map__3186 == null)))?((((map__3186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3186):map__3186);
var m = map__3186__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3186__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3186__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__3188_3210 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__3189_3211 = null;
var count__3190_3212 = (0);
var i__3191_3213 = (0);
while(true){
if((i__3191_3213 < count__3190_3212)){
var f_3214 = chunk__3189_3211.cljs$core$IIndexed$_nth$arity$2(null,i__3191_3213);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_3214], 0));

var G__3215 = seq__3188_3210;
var G__3216 = chunk__3189_3211;
var G__3217 = count__3190_3212;
var G__3218 = (i__3191_3213 + (1));
seq__3188_3210 = G__3215;
chunk__3189_3211 = G__3216;
count__3190_3212 = G__3217;
i__3191_3213 = G__3218;
continue;
} else {
var temp__4657__auto___3219 = cljs.core.seq(seq__3188_3210);
if(temp__4657__auto___3219){
var seq__3188_3220__$1 = temp__4657__auto___3219;
if(cljs.core.chunked_seq_QMARK_(seq__3188_3220__$1)){
var c__3828__auto___3221 = cljs.core.chunk_first(seq__3188_3220__$1);
var G__3222 = cljs.core.chunk_rest(seq__3188_3220__$1);
var G__3223 = c__3828__auto___3221;
var G__3224 = cljs.core.count(c__3828__auto___3221);
var G__3225 = (0);
seq__3188_3210 = G__3222;
chunk__3189_3211 = G__3223;
count__3190_3212 = G__3224;
i__3191_3213 = G__3225;
continue;
} else {
var f_3226 = cljs.core.first(seq__3188_3220__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_3226], 0));

var G__3227 = cljs.core.next(seq__3188_3220__$1);
var G__3228 = null;
var G__3229 = (0);
var G__3230 = (0);
seq__3188_3210 = G__3227;
chunk__3189_3211 = G__3228;
count__3190_3212 = G__3229;
i__3191_3213 = G__3230;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_3231 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3441__auto__)){
return or__3441__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_3231], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_3231)))?cljs.core.second(arglists_3231):arglists_3231)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__3192_3232 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__3193_3233 = null;
var count__3194_3234 = (0);
var i__3195_3235 = (0);
while(true){
if((i__3195_3235 < count__3194_3234)){
var vec__3196_3236 = chunk__3193_3233.cljs$core$IIndexed$_nth$arity$2(null,i__3195_3235);
var name_3237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3196_3236,(0),null);
var map__3199_3238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3196_3236,(1),null);
var map__3199_3239__$1 = ((((!((map__3199_3238 == null)))?((((map__3199_3238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3199_3238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3199_3238):map__3199_3238);
var doc_3240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3199_3239__$1,cljs.core.cst$kw$doc);
var arglists_3241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3199_3239__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_3237], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_3241], 0));

if(cljs.core.truth_(doc_3240)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_3240], 0));
} else {
}

var G__3242 = seq__3192_3232;
var G__3243 = chunk__3193_3233;
var G__3244 = count__3194_3234;
var G__3245 = (i__3195_3235 + (1));
seq__3192_3232 = G__3242;
chunk__3193_3233 = G__3243;
count__3194_3234 = G__3244;
i__3195_3235 = G__3245;
continue;
} else {
var temp__4657__auto___3246 = cljs.core.seq(seq__3192_3232);
if(temp__4657__auto___3246){
var seq__3192_3247__$1 = temp__4657__auto___3246;
if(cljs.core.chunked_seq_QMARK_(seq__3192_3247__$1)){
var c__3828__auto___3248 = cljs.core.chunk_first(seq__3192_3247__$1);
var G__3249 = cljs.core.chunk_rest(seq__3192_3247__$1);
var G__3250 = c__3828__auto___3248;
var G__3251 = cljs.core.count(c__3828__auto___3248);
var G__3252 = (0);
seq__3192_3232 = G__3249;
chunk__3193_3233 = G__3250;
count__3194_3234 = G__3251;
i__3195_3235 = G__3252;
continue;
} else {
var vec__3201_3253 = cljs.core.first(seq__3192_3247__$1);
var name_3254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3201_3253,(0),null);
var map__3204_3255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3201_3253,(1),null);
var map__3204_3256__$1 = ((((!((map__3204_3255 == null)))?((((map__3204_3255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3204_3255.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3204_3255):map__3204_3255);
var doc_3257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3204_3256__$1,cljs.core.cst$kw$doc);
var arglists_3258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3204_3256__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_3254], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_3258], 0));

if(cljs.core.truth_(doc_3257)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_3257], 0));
} else {
}

var G__3259 = cljs.core.next(seq__3192_3247__$1);
var G__3260 = null;
var G__3261 = (0);
var G__3262 = (0);
seq__3192_3232 = G__3259;
chunk__3193_3233 = G__3260;
count__3194_3234 = G__3261;
i__3195_3235 = G__3262;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Spec"], 0));

var seq__3206 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__3207 = null;
var count__3208 = (0);
var i__3209 = (0);
while(true){
if((i__3209 < count__3208)){
var role = chunk__3207.cljs$core$IIndexed$_nth$arity$2(null,i__3209);
var temp__4657__auto___3263__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___3263__$1)){
var spec_3264 = temp__4657__auto___3263__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe(spec_3264)], 0));
} else {
}

var G__3265 = seq__3206;
var G__3266 = chunk__3207;
var G__3267 = count__3208;
var G__3268 = (i__3209 + (1));
seq__3206 = G__3265;
chunk__3207 = G__3266;
count__3208 = G__3267;
i__3209 = G__3268;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__3206);
if(temp__4657__auto____$1){
var seq__3206__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__3206__$1)){
var c__3828__auto__ = cljs.core.chunk_first(seq__3206__$1);
var G__3269 = cljs.core.chunk_rest(seq__3206__$1);
var G__3270 = c__3828__auto__;
var G__3271 = cljs.core.count(c__3828__auto__);
var G__3272 = (0);
seq__3206 = G__3269;
chunk__3207 = G__3270;
count__3208 = G__3271;
i__3209 = G__3272;
continue;
} else {
var role = cljs.core.first(seq__3206__$1);
var temp__4657__auto___3273__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___3273__$2)){
var spec_3274 = temp__4657__auto___3273__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe(spec_3274)], 0));
} else {
}

var G__3275 = cljs.core.next(seq__3206__$1);
var G__3276 = null;
var G__3277 = (0);
var G__3278 = (0);
seq__3206 = G__3275;
chunk__3207 = G__3276;
count__3208 = G__3277;
i__3209 = G__3278;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
