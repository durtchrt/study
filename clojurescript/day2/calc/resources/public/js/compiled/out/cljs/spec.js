// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__25535__auto__ = (((spec == null))?null:spec);
var m__25536__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,spec,x);
} else {
var m__25536__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__25535__auto__ = (((spec == null))?null:spec);
var m__25536__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,spec,y);
} else {
var m__25536__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__25535__auto__ = (((spec == null))?null:spec);
var m__25536__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,spec,path,via,in$,x);
} else {
var m__25536__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__25535__auto__ = (((spec == null))?null:spec);
var m__25536__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__25536__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__25535__auto__ = (((spec == null))?null:spec);
var m__25536__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,spec,gfn);
} else {
var m__25536__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__25535__auto__ = (((spec == null))?null:spec);
var m__25536__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,spec);
} else {
var m__25536__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,k))){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec))){
var G__33322 = cljs.core.get.call(null,reg,spec);
spec = G__33322;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name.call(null,spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__24872__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__24860__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__24860__auto__){
return x;
} else {
return and__24860__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__24860__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__24860__auto__)){
return x;
} else {
return and__24860__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__24872__auto__ = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
var or__24872__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__24872__auto____$1)){
return or__24872__auto____$1;
} else {
var or__24872__auto____$2 = (function (){var and__24860__auto__ = cljs.spec.named_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__24860__auto__;
}
})();
if(cljs.core.truth_(or__24872__auto____$2)){
return or__24872__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__24872__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__24872__auto__ = cljs.spec.the_spec.call(null,s);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),s,null,null);
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__24860__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__24860__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__24860__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__24860__auto__ = (form instanceof cljs.core.Symbol);
if(and__24860__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__24860__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727),gen_fn);
} else {
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__4657__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__4657__auto__)){
var probs = temp__4657__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__25858__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_33367_33407 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_33368_33408 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_33367_33407,_STAR_print_fn_STAR_33368_33408,sb__25858__auto__){
return (function (x__25859__auto__){
return sb__25858__auto__.append(x__25859__auto__);
});})(_STAR_print_newline_STAR_33367_33407,_STAR_print_fn_STAR_33368_33408,sb__25858__auto__))
;

try{var seq__33369_33409 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__33370_33410 = null;
var count__33371_33411 = (0);
var i__33372_33412 = (0);
while(true){
if((i__33372_33412 < count__33371_33411)){
var map__33373_33413 = cljs.core._nth.call(null,chunk__33370_33410,i__33372_33412);
var map__33373_33414__$1 = ((((!((map__33373_33413 == null)))?((((map__33373_33413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33373_33413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33373_33413):map__33373_33413);
var prob_33415 = map__33373_33414__$1;
var path_33416 = cljs.core.get.call(null,map__33373_33414__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_33417 = cljs.core.get.call(null,map__33373_33414__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_33418 = cljs.core.get.call(null,map__33373_33414__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_33419 = cljs.core.get.call(null,map__33373_33414__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_33420 = cljs.core.get.call(null,map__33373_33414__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_33421 = cljs.core.get.call(null,map__33373_33414__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_33421)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_33421),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_33418);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_33420)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_33420)));
}

if(cljs.core.empty_QMARK_.call(null,path_33416)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_33416));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_33417));

if(cljs.core.truth_(reason_33419)){
cljs.core.print.call(null,", ",reason_33419);
} else {
}

var seq__33375_33422 = cljs.core.seq.call(null,prob_33415);
var chunk__33376_33423 = null;
var count__33377_33424 = (0);
var i__33378_33425 = (0);
while(true){
if((i__33378_33425 < count__33377_33424)){
var vec__33379_33426 = cljs.core._nth.call(null,chunk__33376_33423,i__33378_33425);
var k_33427 = cljs.core.nth.call(null,vec__33379_33426,(0),null);
var v_33428 = cljs.core.nth.call(null,vec__33379_33426,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_33427))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_33427)," ");

cljs.core.pr.call(null,v_33428);
}

var G__33429 = seq__33375_33422;
var G__33430 = chunk__33376_33423;
var G__33431 = count__33377_33424;
var G__33432 = (i__33378_33425 + (1));
seq__33375_33422 = G__33429;
chunk__33376_33423 = G__33430;
count__33377_33424 = G__33431;
i__33378_33425 = G__33432;
continue;
} else {
var temp__4657__auto___33433 = cljs.core.seq.call(null,seq__33375_33422);
if(temp__4657__auto___33433){
var seq__33375_33434__$1 = temp__4657__auto___33433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33375_33434__$1)){
var c__25683__auto___33435 = cljs.core.chunk_first.call(null,seq__33375_33434__$1);
var G__33436 = cljs.core.chunk_rest.call(null,seq__33375_33434__$1);
var G__33437 = c__25683__auto___33435;
var G__33438 = cljs.core.count.call(null,c__25683__auto___33435);
var G__33439 = (0);
seq__33375_33422 = G__33436;
chunk__33376_33423 = G__33437;
count__33377_33424 = G__33438;
i__33378_33425 = G__33439;
continue;
} else {
var vec__33382_33440 = cljs.core.first.call(null,seq__33375_33434__$1);
var k_33441 = cljs.core.nth.call(null,vec__33382_33440,(0),null);
var v_33442 = cljs.core.nth.call(null,vec__33382_33440,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_33441))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_33441)," ");

cljs.core.pr.call(null,v_33442);
}

var G__33443 = cljs.core.next.call(null,seq__33375_33434__$1);
var G__33444 = null;
var G__33445 = (0);
var G__33446 = (0);
seq__33375_33422 = G__33443;
chunk__33376_33423 = G__33444;
count__33377_33424 = G__33445;
i__33378_33425 = G__33446;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__33447 = seq__33369_33409;
var G__33448 = chunk__33370_33410;
var G__33449 = count__33371_33411;
var G__33450 = (i__33372_33412 + (1));
seq__33369_33409 = G__33447;
chunk__33370_33410 = G__33448;
count__33371_33411 = G__33449;
i__33372_33412 = G__33450;
continue;
} else {
var temp__4657__auto___33451 = cljs.core.seq.call(null,seq__33369_33409);
if(temp__4657__auto___33451){
var seq__33369_33452__$1 = temp__4657__auto___33451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33369_33452__$1)){
var c__25683__auto___33453 = cljs.core.chunk_first.call(null,seq__33369_33452__$1);
var G__33454 = cljs.core.chunk_rest.call(null,seq__33369_33452__$1);
var G__33455 = c__25683__auto___33453;
var G__33456 = cljs.core.count.call(null,c__25683__auto___33453);
var G__33457 = (0);
seq__33369_33409 = G__33454;
chunk__33370_33410 = G__33455;
count__33371_33411 = G__33456;
i__33372_33412 = G__33457;
continue;
} else {
var map__33385_33458 = cljs.core.first.call(null,seq__33369_33452__$1);
var map__33385_33459__$1 = ((((!((map__33385_33458 == null)))?((((map__33385_33458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33385_33458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33385_33458):map__33385_33458);
var prob_33460 = map__33385_33459__$1;
var path_33461 = cljs.core.get.call(null,map__33385_33459__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_33462 = cljs.core.get.call(null,map__33385_33459__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_33463 = cljs.core.get.call(null,map__33385_33459__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_33464 = cljs.core.get.call(null,map__33385_33459__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_33465 = cljs.core.get.call(null,map__33385_33459__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_33466 = cljs.core.get.call(null,map__33385_33459__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_33466)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_33466),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_33463);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_33465)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_33465)));
}

if(cljs.core.empty_QMARK_.call(null,path_33461)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_33461));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_33462));

if(cljs.core.truth_(reason_33464)){
cljs.core.print.call(null,", ",reason_33464);
} else {
}

var seq__33387_33467 = cljs.core.seq.call(null,prob_33460);
var chunk__33388_33468 = null;
var count__33389_33469 = (0);
var i__33390_33470 = (0);
while(true){
if((i__33390_33470 < count__33389_33469)){
var vec__33391_33471 = cljs.core._nth.call(null,chunk__33388_33468,i__33390_33470);
var k_33472 = cljs.core.nth.call(null,vec__33391_33471,(0),null);
var v_33473 = cljs.core.nth.call(null,vec__33391_33471,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_33472))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_33472)," ");

cljs.core.pr.call(null,v_33473);
}

var G__33474 = seq__33387_33467;
var G__33475 = chunk__33388_33468;
var G__33476 = count__33389_33469;
var G__33477 = (i__33390_33470 + (1));
seq__33387_33467 = G__33474;
chunk__33388_33468 = G__33475;
count__33389_33469 = G__33476;
i__33390_33470 = G__33477;
continue;
} else {
var temp__4657__auto___33478__$1 = cljs.core.seq.call(null,seq__33387_33467);
if(temp__4657__auto___33478__$1){
var seq__33387_33479__$1 = temp__4657__auto___33478__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33387_33479__$1)){
var c__25683__auto___33480 = cljs.core.chunk_first.call(null,seq__33387_33479__$1);
var G__33481 = cljs.core.chunk_rest.call(null,seq__33387_33479__$1);
var G__33482 = c__25683__auto___33480;
var G__33483 = cljs.core.count.call(null,c__25683__auto___33480);
var G__33484 = (0);
seq__33387_33467 = G__33481;
chunk__33388_33468 = G__33482;
count__33389_33469 = G__33483;
i__33390_33470 = G__33484;
continue;
} else {
var vec__33394_33485 = cljs.core.first.call(null,seq__33387_33479__$1);
var k_33486 = cljs.core.nth.call(null,vec__33394_33485,(0),null);
var v_33487 = cljs.core.nth.call(null,vec__33394_33485,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_33486))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_33486)," ");

cljs.core.pr.call(null,v_33487);
}

var G__33488 = cljs.core.next.call(null,seq__33387_33479__$1);
var G__33489 = null;
var G__33490 = (0);
var G__33491 = (0);
seq__33387_33467 = G__33488;
chunk__33388_33468 = G__33489;
count__33389_33469 = G__33490;
i__33390_33470 = G__33491;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__33492 = cljs.core.next.call(null,seq__33369_33452__$1);
var G__33493 = null;
var G__33494 = (0);
var G__33495 = (0);
seq__33369_33409 = G__33492;
chunk__33370_33410 = G__33493;
count__33371_33411 = G__33494;
i__33372_33412 = G__33495;
continue;
}
} else {
}
}
break;
}

var seq__33397_33496 = cljs.core.seq.call(null,ed);
var chunk__33398_33497 = null;
var count__33399_33498 = (0);
var i__33400_33499 = (0);
while(true){
if((i__33400_33499 < count__33399_33498)){
var vec__33401_33500 = cljs.core._nth.call(null,chunk__33398_33497,i__33400_33499);
var k_33501 = cljs.core.nth.call(null,vec__33401_33500,(0),null);
var v_33502 = cljs.core.nth.call(null,vec__33401_33500,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_33501))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_33501)," ");

cljs.core.pr.call(null,v_33502);

cljs.core.newline.call(null);
}

var G__33503 = seq__33397_33496;
var G__33504 = chunk__33398_33497;
var G__33505 = count__33399_33498;
var G__33506 = (i__33400_33499 + (1));
seq__33397_33496 = G__33503;
chunk__33398_33497 = G__33504;
count__33399_33498 = G__33505;
i__33400_33499 = G__33506;
continue;
} else {
var temp__4657__auto___33507 = cljs.core.seq.call(null,seq__33397_33496);
if(temp__4657__auto___33507){
var seq__33397_33508__$1 = temp__4657__auto___33507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33397_33508__$1)){
var c__25683__auto___33509 = cljs.core.chunk_first.call(null,seq__33397_33508__$1);
var G__33510 = cljs.core.chunk_rest.call(null,seq__33397_33508__$1);
var G__33511 = c__25683__auto___33509;
var G__33512 = cljs.core.count.call(null,c__25683__auto___33509);
var G__33513 = (0);
seq__33397_33496 = G__33510;
chunk__33398_33497 = G__33511;
count__33399_33498 = G__33512;
i__33400_33499 = G__33513;
continue;
} else {
var vec__33404_33514 = cljs.core.first.call(null,seq__33397_33508__$1);
var k_33515 = cljs.core.nth.call(null,vec__33404_33514,(0),null);
var v_33516 = cljs.core.nth.call(null,vec__33404_33514,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_33515))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_33515)," ");

cljs.core.pr.call(null,v_33516);

cljs.core.newline.call(null);
}

var G__33517 = cljs.core.next.call(null,seq__33397_33508__$1);
var G__33518 = null;
var G__33519 = (0);
var G__33520 = (0);
seq__33397_33496 = G__33517;
chunk__33398_33497 = G__33518;
count__33399_33498 = G__33519;
i__33400_33499 = G__33520;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33368_33408;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33367_33407;
}
return [cljs.core.str(sb__25858__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__25858__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_33523_33525 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_33524_33526 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_33523_33525,_STAR_print_fn_STAR_33524_33526,sb__25858__auto__){
return (function (x__25859__auto__){
return sb__25858__auto__.append(x__25859__auto__);
});})(_STAR_print_newline_STAR_33523_33525,_STAR_print_fn_STAR_33524_33526,sb__25858__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33524_33526;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33523_33525;
}
return [cljs.core.str(sb__25858__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.call(null,spec);
var temp__4655__auto__ = (function (){var or__24872__auto__ = (function (){var temp__4657__auto__ = (function (){var or__24872__auto__ = cljs.core.get.call(null,overrides,(function (){var or__24872__auto__ = cljs.spec.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var gfn = temp__4657__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var g = temp__4655__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__4655__auto__,spec__$1){
return (function (p1__33527_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$1,p1__33527_SHARP_);
});})(g,temp__4655__auto__,spec__$1))
,g,(100));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args33528 = [];
var len__25947__auto___33531 = arguments.length;
var i__25948__auto___33532 = (0);
while(true){
if((i__25948__auto___33532 < len__25947__auto___33531)){
args33528.push((arguments[i__25948__auto___33532]));

var G__33533 = (i__25948__auto___33532 + (1));
i__25948__auto___33532 = G__33533;
continue;
} else {
}
break;
}

var G__33530 = args33528.length;
switch (G__33530) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33528.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__24860__auto__ = cljs.spec.named_QMARK_.call(null,k);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core.namespace.call(null,k);
} else {
return and__24860__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword or resolveable symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__24872__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
var or__24872__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__24872__auto____$1)){
return or__24872__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__4657__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__4657__auto__)){
var arg_spec = temp__4657__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str("Call to "),cljs.core.str(cljs.spec.__GT_sym.call(null,v)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__25858__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_33537_33539 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_33538_33540 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_33537_33539,_STAR_print_fn_STAR_33538_33540,sb__25858__auto__,ed,arg_spec,temp__4657__auto__,specs){
return (function (x__25859__auto__){
return sb__25858__auto__.append(x__25859__auto__);
});})(_STAR_print_newline_STAR_33537_33539,_STAR_print_fn_STAR_33538_33540,sb__25858__auto__,ed,arg_spec,temp__4657__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33538_33540;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33537_33539;
}
return [cljs.core.str(sb__25858__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__24872__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args33541 = [];
var len__25947__auto___33544 = arguments.length;
var i__25948__auto___33545 = (0);
while(true){
if((i__25948__auto___33545 < len__25947__auto___33544)){
args33541.push((arguments[i__25948__auto___33545]));

var G__33546 = (i__25948__auto___33545 + (1));
i__25948__auto___33545 = G__33546;
continue;
} else {
}
break;
}

var G__33543 = args33541.length;
switch (G__33543) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33541.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__4655__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.call(null,form)),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args33548 = [];
var len__25947__auto___33551 = arguments.length;
var i__25948__auto___33552 = (0);
while(true){
if((i__25948__auto___33552 < len__25947__auto___33551)){
args33548.push((arguments[i__25948__auto___33552]));

var G__33553 = (i__25948__auto___33552 + (1));
i__25948__auto___33552 = G__33553;
continue;
} else {
}
break;
}

var G__33550 = args33548.length;
switch (G__33550) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33548.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__33558){
var map__33589 = p__33558;
var map__33589__$1 = ((((!((map__33589 == null)))?((((map__33589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33589):map__33589);
var argm = map__33589__$1;
var opt = cljs.core.get.call(null,map__33589__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__33589__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__33589__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__33589__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__33589__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var opt_keys = cljs.core.get.call(null,map__33589__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__33589__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__33589__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__33589__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__33589__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__33589__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var keys_pred = cljs.core.apply.call(null,cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__33555_SHARP_){
var or__24872__auto__ = k__GT_s.call(null,p1__33555_SHARP_);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return p1__33555_SHARP_;
}
});})(keys_pred,k__GT_s,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec33591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec33591 = (function (opt,map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,keys__GT_specs,req,map__33589,id,req_keys,p__33558,opt_specs,k__GT_s,pred_forms,meta33592){
this.opt = opt;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.keys__GT_specs = keys__GT_specs;
this.req = req;
this.map__33589 = map__33589;
this.id = id;
this.req_keys = req_keys;
this.p__33558 = p__33558;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta33592 = meta33592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec33591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_33593,meta33592__$1){
var self__ = this;
var _33593__$1 = this;
return (new cljs.spec.t_cljs$spec33591(self__.opt,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.keys__GT_specs,self__.req,self__.map__33589,self__.id,self__.req_keys,self__.p__33558,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta33592__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec33591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_33593){
var self__ = this;
var _33593__$1 = this;
return self__.meta33592;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec33591.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec33591.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__33597 = cljs.core.keys.call(null,m);
var vec__33598 = G__33597;
var seq__33599 = cljs.core.seq.call(null,vec__33598);
var first__33600 = cljs.core.first.call(null,seq__33599);
var seq__33599__$1 = cljs.core.next.call(null,seq__33599);
var k = first__33600;
var ks = seq__33599__$1;
var keys = vec__33598;
var ret__$1 = ret;
var G__33597__$1 = G__33597;
while(true){
var ret__$2 = ret__$1;
var vec__33601 = G__33597__$1;
var seq__33602 = cljs.core.seq.call(null,vec__33601);
var first__33603 = cljs.core.first.call(null,seq__33602);
var seq__33602__$1 = cljs.core.next.call(null,seq__33602);
var k__$1 = first__33603;
var ks__$1 = seq__33602__$1;
var keys__$1 = vec__33601;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var v = cljs.core.get.call(null,m,k__$1);
var cv = cljs.spec.conform.call(null,self__.keys__GT_specs.call(null,k__$1),v);
if(cljs.core._EQ_.call(null,cv,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__33619 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__33620 = ks__$1;
ret__$1 = G__33619;
G__33597__$1 = G__33620;
continue;
}
} else {
var G__33621 = ret__$2;
var G__33622 = ks__$1;
ret__$1 = G__33621;
G__33597__$1 = G__33622;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec33591.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__33607 = cljs.core.keys.call(null,m);
var vec__33608 = G__33607;
var seq__33609 = cljs.core.seq.call(null,vec__33608);
var first__33610 = cljs.core.first.call(null,seq__33609);
var seq__33609__$1 = cljs.core.next.call(null,seq__33609);
var k = first__33610;
var ks = seq__33609__$1;
var keys = vec__33608;
var ret__$1 = ret;
var G__33607__$1 = G__33607;
while(true){
var ret__$2 = ret__$1;
var vec__33611 = G__33607__$1;
var seq__33612 = cljs.core.seq.call(null,vec__33611);
var first__33613 = cljs.core.first.call(null,seq__33612);
var seq__33612__$1 = cljs.core.next.call(null,seq__33612);
var k__$1 = first__33613;
var ks__$1 = seq__33612__$1;
var keys__$1 = vec__33611;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specs.call(null,k__$1),cv);
var G__33623 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__33624 = ks__$1;
ret__$1 = G__33623;
G__33607__$1 = G__33624;
continue;
} else {
var G__33625 = ret__$2;
var G__33626 = ks__$1;
ret__$1 = G__33625;
G__33607__$1 = G__33626;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec33591.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__4657__auto__){
var probs = temp__4657__auto__;
return cljs.core.map.call(null,((function (probs,temp__4657__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__33556_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__33556_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__4657__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__33614){
var vec__33615 = p__33614;
var k = cljs.core.nth.call(null,vec__33615,(0),null);
var v = cljs.core.nth.call(null,vec__33615,(1),null);
if(cljs.core.truth_((function (){var or__24872__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k)));
if(or__24872__auto__){
return or__24872__auto__;
} else {
return cljs.spec.valid_QMARK_.call(null,self__.keys__GT_specs.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specs.call(null,k),self__.keys__GT_specs.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec33591.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__33557_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__33557_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec33591.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec33591.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__33618 = cljs.core.PersistentVector.EMPTY;
var G__33618__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__33618,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__33618);
var G__33618__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__33618__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__33618__$1);
var G__33618__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__33618__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__33618__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__33618__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__33618__$3;
}
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec33591.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opt","opt",845825158,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map-spec-impl","map-spec-impl",-1682885722,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"argm","argm",-181546357,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a map argument"], null)),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"keys->specs","keys->specs",-97897643,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"map__33589","map__33589",-264043078,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"p__33558","p__33558",-1168702564,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta33592","meta33592",-173014433,null)], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec33591.cljs$lang$type = true;

cljs.spec.t_cljs$spec33591.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec33591";

cljs.spec.t_cljs$spec33591.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.spec/t_cljs$spec33591");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec33591 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec33591(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,req__$1,map__33589__$2,id__$1,req_keys__$1,p__33558__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta33592){
return (new cljs.spec.t_cljs$spec33591(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,req__$1,map__33589__$2,id__$1,req_keys__$1,p__33558__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta33592));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__33589,map__33589__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec33591(opt,cljs$spec$map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,keys__GT_specs,req,map__33589__$1,id,req_keys,p__33558,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args33627 = [];
var len__25947__auto___33635 = arguments.length;
var i__25948__auto___33636 = (0);
while(true){
if((i__25948__auto___33636 < len__25947__auto___33635)){
args33627.push((arguments[i__25948__auto___33636]));

var G__33637 = (i__25948__auto___33636 + (1));
i__25948__auto___33636 = G__33637;
continue;
} else {
}
break;
}

var G__33629 = args33627.length;
switch (G__33629) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33627.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__33630 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__33630,gfn);
} else {
return G__33630;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,pred))){
var G__33631 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__33631,gfn);
} else {
return G__33631;
}
} else {
if(typeof cljs.spec.t_cljs$spec33632 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec33632 = (function (form,pred,gfn,cpred_QMARK_,unc,meta33633){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta33633 = meta33633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec33632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33634,meta33633__$1){
var self__ = this;
var _33634__$1 = this;
return (new cljs.spec.t_cljs$spec33632(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta33633__$1));
});

cljs.spec.t_cljs$spec33632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33634){
var self__ = this;
var _33634__$1 = this;
return self__.meta33633;
});

cljs.spec.t_cljs$spec33632.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec33632.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec33632.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec33632.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.t_cljs$spec33632.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec33632.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.t_cljs$spec33632.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec33632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta33633","meta33633",1147284837,null)], null);
});

cljs.spec.t_cljs$spec33632.cljs$lang$type = true;

cljs.spec.t_cljs$spec33632.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec33632";

cljs.spec.t_cljs$spec33632.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.spec/t_cljs$spec33632");
});

cljs.spec.__GT_t_cljs$spec33632 = (function cljs$spec$__GT_t_cljs$spec33632(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta33633){
return (new cljs.spec.t_cljs$spec33632(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta33633));
});

}

return (new cljs.spec.t_cljs$spec33632(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args33644 = [];
var len__25947__auto___33658 = arguments.length;
var i__25948__auto___33659 = (0);
while(true){
if((i__25948__auto___33659 < len__25947__auto___33658)){
args33644.push((arguments[i__25948__auto___33659]));

var G__33660 = (i__25948__auto___33659 + (1));
i__25948__auto___33659 = G__33660;
continue;
} else {
}
break;
}

var G__33646 = args33644.length;
switch (G__33646) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33644.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__33639_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__24860__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.methods$.call(null,mm),cljs.core._dispatch_fn.call(null,mm).call(null,p1__33639_SHARP_));
if(and__24860__auto__){
return mm.call(null,p1__33639_SHARP_);
} else {
return and__24860__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__33640_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__33640_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__33641_SHARP_,p2__33642_SHARP_){
return cljs.core.assoc.call(null,p1__33641_SHARP_,retag,p2__33642_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec33647 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec33647 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta33648){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta33648 = meta33648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec33647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_33649,meta33648__$1){
var self__ = this;
var _33649__$1 = this;
return (new cljs.spec.t_cljs$spec33647(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta33648__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec33647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_33649){
var self__ = this;
var _33649__$1 = this;
return self__.meta33648;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec33647.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec33647.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec33647.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error([cljs.core.str("No method of: "),cljs.core.str(self__.form),cljs.core.str(" for dispatch value: "),cljs.core.str(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec33647.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec33647.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__33650){
var vec__33651 = p__33650;
var k = cljs.core.nth.call(null,vec__33651,(0),null);
var f = cljs.core.nth.call(null,vec__33651,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__33651,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__33651,k,f,___$1,id,predx,dval,tag){
return (function (p1__33643_SHARP_){
return self__.tag.call(null,p1__33643_SHARP_,k);
});})(rmap__$1,p,vec__33651,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__25706__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$1);
})(),x__25706__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__33651,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__33654){
var vec__33655 = p__33654;
var k = cljs.core.nth.call(null,vec__33655,(0),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec33647.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec33647.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__25706__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec33647.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta33648","meta33648",-1952878592,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec33647.cljs$lang$type = true;

cljs.spec.t_cljs$spec33647.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec33647";

cljs.spec.t_cljs$spec33647.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.spec/t_cljs$spec33647");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec33647 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec33647(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta33648){
return (new cljs.spec.t_cljs$spec33647(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta33648));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec33647(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args33662 = [];
var len__25947__auto___33668 = arguments.length;
var i__25948__auto___33669 = (0);
while(true){
if((i__25948__auto___33669 < len__25947__auto___33668)){
args33662.push((arguments[i__25948__auto___33669]));

var G__33670 = (i__25948__auto___33669 + (1));
i__25948__auto___33669 = G__33670;
continue;
} else {
}
break;
}

var G__33664 = args33662.length;
switch (G__33664) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33662.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec33665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec33665 = (function (forms,preds,gfn,meta33666){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta33666 = meta33666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec33665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33667,meta33666__$1){
var self__ = this;
var _33667__$1 = this;
return (new cljs.spec.t_cljs$spec33665(self__.forms,self__.preds,self__.gfn,meta33666__$1));
});

cljs.spec.t_cljs$spec33665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33667){
var self__ = this;
var _33667__$1 = this;
return self__.meta33666;
});

cljs.spec.t_cljs$spec33665.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec33665.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.dt.call(null,self__.preds.call(null,i),v,self__.forms.call(null,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__33672 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__33673 = (i + (1));
ret = G__33672;
i = G__33673;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec33665.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__33674 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__33675 = (i + (1));
ret = G__33674;
i = G__33675;
continue;
}
break;
}
});

cljs.spec.t_cljs$spec33665.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__25706__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),(function (){var x__25706__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec33665.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec33665.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec33665.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});

cljs.spec.t_cljs$spec33665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta33666","meta33666",-1122295282,null)], null);
});

cljs.spec.t_cljs$spec33665.cljs$lang$type = true;

cljs.spec.t_cljs$spec33665.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec33665";

cljs.spec.t_cljs$spec33665.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.spec/t_cljs$spec33665");
});

cljs.spec.__GT_t_cljs$spec33665 = (function cljs$spec$__GT_t_cljs$spec33665(forms__$1,preds__$1,gfn__$1,meta33666){
return (new cljs.spec.t_cljs$spec33665(forms__$1,preds__$1,gfn__$1,meta33666));
});

}

return (new cljs.spec.t_cljs$spec33665(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x33677 = v;
x33677.cljs$core$IMapEntry$ = true;

x33677.cljs$core$IMapEntry$_key$arity$1 = ((function (x33677){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x33677))
;

x33677.cljs$core$IMapEntry$_val$arity$1 = ((function (x33677){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x33677))
;

return x33677;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var cform = ((function (id,kps){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count.call(null,preds))){
var pred = preds.call(null,i);
var ret = cljs.spec.dt.call(null,pred,x,cljs.core.nth.call(null,forms,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret)){
var G__33692 = (i + (1));
i = G__33692;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});})(id,kps))
;
if(typeof cljs.spec.t_cljs$spec33685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec33685 = (function (or_spec_impl,keys,forms,preds,gfn,id,kps,cform,meta33686){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.cform = cform;
this.meta33686 = meta33686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec33685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,cform){
return (function (_33687,meta33686__$1){
var self__ = this;
var _33687__$1 = this;
return (new cljs.spec.t_cljs$spec33685(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.cform,meta33686__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec33685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,cform){
return (function (_33687){
var self__ = this;
var _33687__$1 = this;
return self__.meta33686;
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec33685.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec33685.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec33685.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,p__33688){
var self__ = this;
var vec__33689 = p__33688;
var k = cljs.core.nth.call(null,vec__33689,(0),null);
var x = cljs.core.nth.call(null,vec__33689,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec33685.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1,id,kps,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec33685.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,cform))
,null)));
}
});})(___$1,id,kps,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec33685.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec33685.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec33685.getBasis = ((function (id,kps,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-spec-impl","or-spec-impl",-1412945461,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'or'"], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta33686","meta33686",-1314865502,null)], null);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec33685.cljs$lang$type = true;

cljs.spec.t_cljs$spec33685.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec33685";

cljs.spec.t_cljs$spec33685.cljs$lang$ctorPrWriter = ((function (id,kps,cform){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.spec/t_cljs$spec33685");
});})(id,kps,cform))
;

cljs.spec.__GT_t_cljs$spec33685 = ((function (id,kps,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec33685(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta33686){
return (new cljs.spec.t_cljs$spec33685(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta33686));
});})(id,kps,cform))
;

}

return (new cljs.spec.t_cljs$spec33685(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,kps,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__33719 = preds;
var vec__33721 = G__33719;
var seq__33722 = cljs.core.seq.call(null,vec__33721);
var first__33723 = cljs.core.first.call(null,seq__33722);
var seq__33722__$1 = cljs.core.next.call(null,seq__33722);
var pred = first__33723;
var preds__$1 = seq__33722__$1;
var G__33720 = forms;
var vec__33724 = G__33720;
var seq__33725 = cljs.core.seq.call(null,vec__33724);
var first__33726 = cljs.core.first.call(null,seq__33725);
var seq__33725__$1 = cljs.core.next.call(null,seq__33725);
var form = first__33726;
var forms__$1 = seq__33725__$1;
var ret__$1 = ret;
var G__33719__$1 = G__33719;
var G__33720__$1 = G__33720;
while(true){
var ret__$2 = ret__$1;
var vec__33727 = G__33719__$1;
var seq__33728 = cljs.core.seq.call(null,vec__33727);
var first__33729 = cljs.core.first.call(null,seq__33728);
var seq__33728__$1 = cljs.core.next.call(null,seq__33728);
var pred__$1 = first__33729;
var preds__$2 = seq__33728__$1;
var vec__33730 = G__33720__$1;
var seq__33731 = cljs.core.seq.call(null,vec__33730);
var first__33732 = cljs.core.first.call(null,seq__33731);
var seq__33731__$1 = cljs.core.next.call(null,seq__33731);
var form__$1 = first__33732;
var forms__$2 = seq__33731__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__33733 = nret;
var G__33734 = preds__$2;
var G__33735 = forms__$2;
ret__$1 = G__33733;
G__33719__$1 = G__33734;
G__33720__$1 = G__33735;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__33762 = forms;
var vec__33764 = G__33762;
var seq__33765 = cljs.core.seq.call(null,vec__33764);
var first__33766 = cljs.core.first.call(null,seq__33765);
var seq__33765__$1 = cljs.core.next.call(null,seq__33765);
var form = first__33766;
var forms__$1 = seq__33765__$1;
var G__33763 = preds;
var vec__33767 = G__33763;
var seq__33768 = cljs.core.seq.call(null,vec__33767);
var first__33769 = cljs.core.first.call(null,seq__33768);
var seq__33768__$1 = cljs.core.next.call(null,seq__33768);
var pred = first__33769;
var preds__$1 = seq__33768__$1;
var ret__$1 = ret;
var G__33762__$1 = G__33762;
var G__33763__$1 = G__33763;
while(true){
var ret__$2 = ret__$1;
var vec__33770 = G__33762__$1;
var seq__33771 = cljs.core.seq.call(null,vec__33770);
var first__33772 = cljs.core.first.call(null,seq__33771);
var seq__33771__$1 = cljs.core.next.call(null,seq__33771);
var form__$1 = first__33772;
var forms__$2 = seq__33771__$1;
var vec__33773 = G__33763__$1;
var seq__33774 = cljs.core.seq.call(null,vec__33773);
var first__33775 = cljs.core.first.call(null,seq__33774);
var seq__33774__$1 = cljs.core.next.call(null,seq__33774);
var pred__$1 = first__33775;
var preds__$2 = seq__33774__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
var G__33776 = nret;
var G__33777 = forms__$2;
var G__33778 = preds__$2;
ret__$1 = G__33776;
G__33762__$1 = G__33777;
G__33763__$1 = G__33778;
continue;
} else {
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec33784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec33784 = (function (and_spec_impl,forms,preds,gfn,meta33785){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta33785 = meta33785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec33784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33786,meta33785__$1){
var self__ = this;
var _33786__$1 = this;
return (new cljs.spec.t_cljs$spec33784(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta33785__$1));
});

cljs.spec.t_cljs$spec33784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33786){
var self__ = this;
var _33786__$1 = this;
return self__.meta33785;
});

cljs.spec.t_cljs$spec33784.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec33784.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds.call(null,x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec33784.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1){
return (function (p1__33780_SHARP_,p2__33779_SHARP_){
return cljs.spec.unform.call(null,p2__33779_SHARP_,p1__33780_SHARP_);
});})(___$1))
,x,cljs.core.reverse.call(null,self__.preds));
});

cljs.spec.t_cljs$spec33784.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec33784.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});

cljs.spec.t_cljs$spec33784.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec33784.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});

cljs.spec.t_cljs$spec33784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"and-spec-impl","and-spec-impl",1127339973,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'and'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta33785","meta33785",1054714799,null)], null);
});

cljs.spec.t_cljs$spec33784.cljs$lang$type = true;

cljs.spec.t_cljs$spec33784.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec33784";

cljs.spec.t_cljs$spec33784.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.spec/t_cljs$spec33784");
});

cljs.spec.__GT_t_cljs$spec33784 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec33784(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta33785){
return (new cljs.spec.t_cljs$spec33784(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta33785));
});

}

return (new cljs.spec.t_cljs$spec33784(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.coll_prob = (function cljs$spec$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__24872__auto__ = kfn;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__24872__auto__ = kform;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if(cljs.core.not.call(null,cljs.spec.valid_QMARK_.call(null,pred,x))){
return cljs.spec.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__24860__auto__ = distinct;
if(cljs.core.truth_(and__24860__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__24860__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__24860__auto__ = count;
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__24860__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__25706__auto__ = count;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),(function (){var x__25706__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__24860__auto__ = (function (){var or__24872__auto__ = min_count;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__24860__auto__)){
return !((((function (){var or__24872__auto__ = min_count;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__24872__auto__ = max_count;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__24860__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__25706__auto__ = (function (){var or__24872__auto__ = min_count;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return (0);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),(function (){var x__25706__auto__ = cljs.core.count.call(null,cljs.core.unquote.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),(function (){var x__25706__auto__ = (function (){var or__24872__auto__ = max_count;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return new cljs.core.Symbol("js","Number.MAX_SAFE_INTEGER","js/Number.MAX_SAFE_INTEGER",-1535627560,null);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.merge_spec_impl = (function cljs$spec$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec33798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec33798 = (function (merge_spec_impl,forms,preds,gfn,meta33799){
this.merge_spec_impl = merge_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta33799 = meta33799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec33798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33800,meta33799__$1){
var self__ = this;
var _33800__$1 = this;
return (new cljs.spec.t_cljs$spec33798(self__.merge_spec_impl,self__.forms,self__.preds,self__.gfn,meta33799__$1));
});

cljs.spec.t_cljs$spec33798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33800){
var self__ = this;
var _33800__$1 = this;
return self__.meta33799;
});

cljs.spec.t_cljs$spec33798.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec33798.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__33787_SHARP_,p2__33788_SHARP_){
return cljs.spec.dt.call(null,p1__33787_SHARP_,x,p2__33788_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),null], null), null),ms))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.t_cljs$spec33798.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__33789_SHARP_){
return cljs.spec.unform.call(null,p1__33789_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.t_cljs$spec33798.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__33790_SHARP_,p2__33791_SHARP_){
return cljs.spec.explain_1.call(null,p1__33790_SHARP_,p2__33791_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.t_cljs$spec33798.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.fmap.call(null,((function (___$1){
return (function (p1__33792_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__33792_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__33793_SHARP_,p2__33794_SHARP_){
return cljs.spec.gensub.call(null,p1__33793_SHARP_,overrides,path,rmap,p2__33794_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.t_cljs$spec33798.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec33798.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","merge","cljs.spec/merge",-838422687,null)),self__.forms)));
});

cljs.spec.t_cljs$spec33798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"merge-spec-impl","merge-spec-impl",397115684,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'merge'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta33799","meta33799",-970235967,null)], null);
});

cljs.spec.t_cljs$spec33798.cljs$lang$type = true;

cljs.spec.t_cljs$spec33798.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec33798";

cljs.spec.t_cljs$spec33798.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.spec/t_cljs$spec33798");
});

cljs.spec.__GT_t_cljs$spec33798 = (function cljs$spec$merge_spec_impl_$___GT_t_cljs$spec33798(merge_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta33799){
return (new cljs.spec.t_cljs$spec33798(merge_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta33799));
});

}

return (new cljs.spec.t_cljs$spec33798(cljs$spec$merge_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args33805 = [];
var len__25947__auto___33830 = arguments.length;
var i__25948__auto___33831 = (0);
while(true){
if((i__25948__auto___33831 < len__25947__auto___33830)){
args33805.push((arguments[i__25948__auto___33831]));

var G__33832 = (i__25948__auto___33831 + (1));
i__25948__auto___33831 = G__33832;
continue;
} else {
}
break;
}

var G__33807 = args33805.length;
switch (G__33807) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33805.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__33808,gfn){
var map__33809 = p__33808;
var map__33809__$1 = ((((!((map__33809 == null)))?((((map__33809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33809):map__33809);
var opts = map__33809__$1;
var max_count = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kfn = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",293196937));
var gen_max = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var conform_all = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907));
var conform_keys = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var distinct = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kind_form = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303));
var gen_into = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY);
var count = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_into = gen_into;
var check_QMARK_ = ((function (conform_into,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__33801_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__33801_SHARP_);
});})(conform_into,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var kfn__$1 = (function (){var or__24872__auto__ = kfn;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return ((function (or__24872__auto__,conform_into,check_QMARK_,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
return i;
});
;})(or__24872__auto__,conform_into,check_QMARK_,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
}
})();
var addcv = ((function (conform_into,check_QMARK_,kfn__$1,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(conform_into,check_QMARK_,kfn__$1,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var vec__33811 = ((cljs.core.map_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null):((cljs.core.vector_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null):((cljs.core.list_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list_QMARK_,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null)], null):((cljs.core.set_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seqable_QMARK_,new cljs.core.Symbol("cljs.core","seqable?","cljs.core/seqable?",-745394886,null)], null)
))));
var kindfn = cljs.core.nth.call(null,vec__33811,(0),null);
var kindform = cljs.core.nth.call(null,vec__33811,(1),null);
var cfns = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (x){
if((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__24860__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__24860__auto__){
var or__24872__auto__ = (function (){var and__24860__auto____$1 = kind;
if(cljs.core.truth_(and__24860__auto____$1)){
return cljs.core.not.call(null,conform_into);
} else {
return and__24860__auto____$1;
}
})();
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
} else {
return and__24860__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not.call(null,conform_keys))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if(cljs.core.list_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__33802_SHARP_){
return cljs.core.empty.call(null,(function (){var or__24872__auto__ = conform_into;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return p1__33802_SHARP_;
}
})());
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
if(typeof cljs.spec.t_cljs$spec33814 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec33814 = (function (form,max_count,check_QMARK_,map__33809,gfn,gen_max,pred,p__33808,vec__33811,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta33815){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.map__33809 = map__33809;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.p__33808 = p__33808;
this.vec__33811 = vec__33811;
this.kindform = kindform;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.distinct = distinct;
this.kindfn = kindfn;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta33815 = meta33815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec33814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_33816,meta33815__$1){
var self__ = this;
var _33816__$1 = this;
return (new cljs.spec.t_cljs$spec33814(self__.form,self__.max_count,self__.check_QMARK_,self__.map__33809,self__.gfn,self__.gen_max,self__.pred,self__.p__33808,self__.vec__33811,self__.kindform,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.distinct,self__.kindfn,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta33815__$1));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec33814.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_33816){
var self__ = this;
var _33816__$1 = this;
return self__.meta33815;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec33814.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec33814.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,null,null,null))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__33817 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__33817,(0),null);
var add = cljs.core.nth.call(null,vec__33817,(1),null);
var complete = cljs.core.nth.call(null,vec__33817,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__33823 = cljs.core.seq.call(null,x);
var vec__33824 = G__33823;
var seq__33825 = cljs.core.seq.call(null,vec__33824);
var first__33826 = cljs.core.first.call(null,seq__33825);
var seq__33825__$1 = cljs.core.next.call(null,seq__33825);
var v = first__33826;
var vs = seq__33825__$1;
var vseq = vec__33824;
var ret__$1 = ret;
var i__$1 = i;
var G__33823__$1 = G__33823;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__33827 = G__33823__$1;
var seq__33828 = cljs.core.seq.call(null,vec__33827);
var first__33829 = cljs.core.first.call(null,seq__33828);
var seq__33828__$1 = cljs.core.next.call(null,seq__33828);
var v__$1 = first__33829;
var vs__$1 = seq__33828__$1;
var vseq__$1 = vec__33827;
if(vseq__$1){
var cv = cljs.spec.dt.call(null,self__.pred,v__$1,null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__33834 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__33835 = (i__$2 + (1));
var G__33836 = vs__$1;
ret__$1 = G__33834;
i__$1 = G__33835;
G__33823__$1 = G__33836;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__25203__auto__ = (1);
var y__25204__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__25203__auto__ > y__25204__auto__) ? x__25203__auto__ : y__25204__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(self__.check_QMARK_.call(null,cljs.core.nth.call(null,x,i)))){
var G__33837 = (i + step);
i = G__33837;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
} else {
var or__24872__auto__ = (function (){var and__24860__auto__ = cljs.core.every_QMARK_.call(null,self__.check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,x));
if(and__24860__auto__){
return x;
} else {
return and__24860__auto__;
}
})();
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}

}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec33814.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec33814.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__24872__auto__ = cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__24872__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__24872__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.range.call(null),x))));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec33814.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.impl.gen.return$.call(null,cljs.core.empty.call(null,self__.gen_into)):(cljs.core.truth_(self__.kind)?cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__33803_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__33803_SHARP_)){
return p1__33803_SHARP_;
} else {
return cljs.core.empty.call(null,p1__33803_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.spec.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (init){
return cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__33804_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__33804_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__33804_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__24872__auto__ = self__.min_count;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__24872__auto__ = self__.max_count;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
var x__25203__auto__ = self__.gen_max;
var y__25204__auto__ = ((2) * (function (){var or__24872__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__24872__auto____$1)){
return or__24872__auto____$1;
} else {
return (0);
}
})());
return ((x__25203__auto__ > y__25204__auto__) ? x__25203__auto__ : y__25204__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__24872__auto__ = self__.min_count;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.call(null,pgen,(function (){var or__24872__auto__ = self__.min_count;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return (0);
}
})(),(function (){var or__24872__auto__ = self__.max_count;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
var x__25203__auto__ = self__.gen_max;
var y__25204__auto__ = ((2) * (function (){var or__24872__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__24872__auto____$1)){
return or__24872__auto____$1;
} else {
return (0);
}
})());
return ((x__25203__auto__ > y__25204__auto__) ? x__25203__auto__ : y__25204__auto__);
}
})()):cljs.spec.impl.gen.vector.call(null,pgen,(0),self__.gen_max)
))));
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
);
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec33814.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec33814.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",-1899705480,null)),(function (){var x__25706__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec33814.getBasis = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"map__33809","map__33809",1089422279,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"p__33808","p__33808",-1497468242,null),new cljs.core.Symbol(null,"vec__33811","vec__33811",-1932165170,null),new cljs.core.Symbol(null,"kindform","kindform",839835536,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"kindfn","kindfn",1062796440,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta33815","meta33815",64598623,null)], null);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec33814.cljs$lang$type = true;

cljs.spec.t_cljs$spec33814.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec33814";

cljs.spec.t_cljs$spec33814.cljs$lang$ctorPrWriter = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.spec/t_cljs$spec33814");
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.__GT_t_cljs$spec33814 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function cljs$spec$__GT_t_cljs$spec33814(form__$1,max_count__$1,check_QMARK___$1,map__33809__$2,gfn__$1,gen_max__$1,pred__$1,p__33808__$1,vec__33811__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta33815){
return (new cljs.spec.t_cljs$spec33814(form__$1,max_count__$1,check_QMARK___$1,map__33809__$2,gfn__$1,gen_max__$1,pred__$1,p__33808__$1,vec__33811__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta33815));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__33811,kindfn,kindform,cfns,map__33809,map__33809__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

}

return (new cljs.spec.t_cljs$spec33814(form,max_count,check_QMARK_,map__33809__$1,gfn,gen_max,pred,p__33808,vec__33811,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__33838){
var map__33841 = p__33838;
var map__33841__$1 = ((((!((map__33841 == null)))?((((map__33841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33841):map__33841);
var op = cljs.core.get.call(null,map__33841__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__33843){
var map__33855 = p__33843;
var map__33855__$1 = ((((!((map__33855 == null)))?((((map__33855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33855):map__33855);
var vec__33856 = cljs.core.get.call(null,map__33855__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__33857 = cljs.core.seq.call(null,vec__33856);
var first__33858 = cljs.core.first.call(null,seq__33857);
var seq__33857__$1 = cljs.core.next.call(null,seq__33857);
var p1 = first__33858;
var pr = seq__33857__$1;
var ps = vec__33856;
var vec__33859 = cljs.core.get.call(null,map__33855__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__33860 = cljs.core.seq.call(null,vec__33859);
var first__33861 = cljs.core.first.call(null,seq__33860);
var seq__33860__$1 = cljs.core.next.call(null,seq__33860);
var k1 = first__33861;
var kr = seq__33860__$1;
var ks = vec__33859;
var vec__33862 = cljs.core.get.call(null,map__33855__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__33863 = cljs.core.seq.call(null,vec__33862);
var first__33864 = cljs.core.first.call(null,seq__33863);
var seq__33863__$1 = cljs.core.next.call(null,seq__33863);
var f1 = first__33864;
var fr = seq__33863__$1;
var forms = vec__33862;
var ret = cljs.core.get.call(null,map__33855__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__33855__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__25954__auto__ = [];
var len__25947__auto___33867 = arguments.length;
var i__25948__auto___33868 = (0);
while(true){
if((i__25948__auto___33868 < len__25947__auto___33867)){
args__25954__auto__.push((arguments[i__25948__auto___33868]));

var G__33869 = (i__25948__auto___33868 + (1));
i__25948__auto___33868 = G__33869;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq33866){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33866));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25706__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),(function (){var x__25706__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__25706__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__24872__auto__ = ks;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__33870_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__33870_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__24872__auto__ = cljs.core.seq.call(null,ks);
if(or__24872__auto__){
return or__24872__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__24872__auto__ = cljs.core.seq.call(null,forms);
if(or__24872__auto__){
return or__24872__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__33871_SHARP_){
return cljs.core.nth.call(null,p1__33871_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__33881 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__33884 = cljs.core.nth.call(null,vec__33881,(0),null);
var seq__33885 = cljs.core.seq.call(null,vec__33884);
var first__33886 = cljs.core.first.call(null,seq__33885);
var seq__33885__$1 = cljs.core.next.call(null,seq__33885);
var p1 = first__33886;
var pr = seq__33885__$1;
var ps__$1 = vec__33884;
var vec__33887 = cljs.core.nth.call(null,vec__33881,(1),null);
var k1 = cljs.core.nth.call(null,vec__33887,(0),null);
var ks__$1 = vec__33887;
var forms__$1 = cljs.core.nth.call(null,vec__33881,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__25954__auto__ = [];
var len__25947__auto___33891 = arguments.length;
var i__25948__auto___33892 = (0);
while(true){
if((i__25948__auto___33892 < len__25947__auto___33891)){
args__25954__auto__.push((arguments[i__25948__auto___33892]));

var G__33893 = (i__25948__auto___33892 + (1));
i__25948__auto___33892 = G__33893;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq33890){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33890));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__24860__auto__ = p1;
if(cljs.core.truth_(and__24860__auto__)){
return p2;
} else {
return and__24860__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__24872__auto__ = p1;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__24872__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__24872__auto__){
return or__24872__auto__;
} else {
var or__24872__auto____$1 = (function (){var and__24860__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__24860__auto__;
}
})();
if(cljs.core.truth_(or__24872__auto____$1)){
return or__24872__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__33897 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__33897__$1 = ((((!((map__33897 == null)))?((((map__33897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33897):map__33897);
var p__$1 = map__33897__$1;
var op = cljs.core.get.call(null,map__33897__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__33897__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__33897__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__33897__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__33897__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__33899 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__33899)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__33899)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__33899)){
var and__24860__auto__ = cljs$spec$accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__24860__auto__)){
var or__24872__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not_EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
}
} else {
return and__24860__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__33899)){
var or__24872__auto__ = (p1 === p2);
if(or__24872__auto__){
return or__24872__auto__;
} else {
return cljs$spec$accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__33899)){
return cljs.core.every_QMARK_.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__33899)){
return cljs.core.some.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__33918 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__33918__$1 = ((((!((map__33918 == null)))?((((map__33918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33918):map__33918);
var p__$1 = map__33918__$1;
var vec__33919 = cljs.core.get.call(null,map__33918__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__33920 = cljs.core.seq.call(null,vec__33919);
var first__33921 = cljs.core.first.call(null,seq__33920);
var seq__33920__$1 = cljs.core.next.call(null,seq__33920);
var p0 = first__33921;
var pr = seq__33920__$1;
var ps = vec__33919;
var vec__33922 = cljs.core.get.call(null,map__33918__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__33922,(0),null);
var ks = vec__33922;
var op = cljs.core.get.call(null,map__33918__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__33918__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__33918__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__33918__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__33926 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__33926)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__33926)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__33926)){
var pret = cljs$spec$preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__33926)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__33926)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__33926)){
var vec__33927 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__33930 = cljs.core.nth.call(null,vec__33927,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__33930,(0),null);
var vec__33933 = cljs.core.nth.call(null,vec__33927,(1),null);
var k0 = cljs.core.nth.call(null,vec__33933,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs$spec$preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__33952 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__33952__$1 = ((((!((map__33952 == null)))?((((map__33952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33952):map__33952);
var p__$1 = map__33952__$1;
var vec__33953 = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__33954 = cljs.core.seq.call(null,vec__33953);
var first__33955 = cljs.core.first.call(null,seq__33954);
var seq__33954__$1 = cljs.core.next.call(null,seq__33954);
var p0 = first__33955;
var pr = seq__33954__$1;
var ps = vec__33953;
var vec__33956 = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__33956,(0),null);
var ks = vec__33956;
var op = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__33960 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__33960)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__33960)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__33960)){
var px = cljs.core.reduce.call(null,((function (G__33960,map__33952,map__33952__$1,p__$1,vec__33953,seq__33954,first__33955,seq__33954__$1,p0,pr,ps,vec__33956,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__33937_SHARP_,p2__33936_SHARP_){
return cljs.spec.unform.call(null,p2__33936_SHARP_,p1__33937_SHARP_);
});})(G__33960,map__33952,map__33952__$1,p__$1,vec__33953,seq__33954,first__33955,seq__33954__$1,p0,pr,ps,vec__33956,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs$spec$op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__33960)){
return cljs.core.mapcat.call(null,((function (G__33960,map__33952,map__33952__$1,p__$1,vec__33953,seq__33954,first__33955,seq__33954__$1,p0,pr,ps,vec__33956,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__33938_SHARP_){
return cljs$spec$op_unform.call(null,p1,p1__33938_SHARP_);
});})(G__33960,map__33952,map__33952__$1,p__$1,vec__33953,seq__33954,first__33955,seq__33954__$1,p0,pr,ps,vec__33956,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__33960)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__33960,map__33952,map__33952__$1,p__$1,vec__33953,seq__33954,first__33955,seq__33954__$1,p0,pr,ps,vec__33956,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__33939_SHARP_){
return cljs$spec$op_unform.call(null,p0,p1__33939_SHARP_);
});})(G__33960,map__33952,map__33952__$1,p__$1,vec__33953,seq__33954,first__33955,seq__33954__$1,p0,pr,ps,vec__33956,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__33960,map__33952,map__33952__$1,p__$1,vec__33953,seq__33954,first__33955,seq__33954__$1,p0,pr,ps,vec__33956,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__33960,map__33952,map__33952__$1,p__$1,vec__33953,seq__33954,first__33955,seq__33954__$1,p0,pr,ps,vec__33956,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__33960)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__33961 = x;
var k__$1 = cljs.core.nth.call(null,vec__33961,(0),null);
var v = cljs.core.nth.call(null,vec__33961,(1),null);
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__33967 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__33967__$1 = ((((!((map__33967 == null)))?((((map__33967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33967):map__33967);
var p__$1 = map__33967__$1;
var op = cljs.core.get.call(null,map__33967__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__33967__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__33967__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__33967,map__33967__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__33967,map__33967__$1,p__$1,op,ps,splice))
;
var G__33969 = op;
if(cljs.core._EQ_.call(null,null,G__33969)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__33969)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__33969)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__33969)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__33969)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__33969)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__33980 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__33980__$1 = ((((!((map__33980 == null)))?((((map__33980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33980):map__33980);
var p__$1 = map__33980__$1;
var vec__33981 = cljs.core.get.call(null,map__33980__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__33982 = cljs.core.seq.call(null,vec__33981);
var first__33983 = cljs.core.first.call(null,seq__33982);
var seq__33982__$1 = cljs.core.next.call(null,seq__33982);
var p0 = first__33983;
var pr = seq__33982__$1;
var ps = vec__33981;
var vec__33984 = cljs.core.get.call(null,map__33980__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__33985 = cljs.core.seq.call(null,vec__33984);
var first__33986 = cljs.core.first.call(null,seq__33985);
var seq__33985__$1 = cljs.core.next.call(null,seq__33985);
var k0 = first__33986;
var kr = seq__33985__$1;
var ks = vec__33984;
var op = cljs.core.get.call(null,map__33980__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__33980__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__33980__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__33980__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__33980__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__33980__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__33988 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__33988)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__33988)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret__$1)){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__33988)){
var temp__4657__auto__ = cljs$spec$deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4657__auto__)){
var p1__$1 = temp__4657__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core._EQ_.call(null,ret__$1,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__33988)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs$spec$deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs$spec$deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__33988)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__33988,map__33980,map__33980__$1,p__$1,vec__33981,seq__33982,first__33983,seq__33982__$1,p0,pr,ps,vec__33984,seq__33985,first__33986,seq__33985__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__33970_SHARP_){
return cljs$spec$deriv.call(null,p1__33970_SHARP_,x);
});})(G__33988,map__33980,map__33980__$1,p__$1,vec__33981,seq__33982,first__33983,seq__33982__$1,p0,pr,ps,vec__33984,seq__33985,first__33986,seq__33985__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__33988)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs$spec$deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs$spec$deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__33992 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__33992__$1 = ((((!((map__33992 == null)))?((((map__33992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33992):map__33992);
var p__$1 = map__33992__$1;
var op = cljs.core.get.call(null,map__33992__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__33992__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__33992__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__33992__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__33992__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__33992__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__33992__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__33992__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__33994 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__33994)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__33994)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__33994)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs$spec$op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__33994)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__24872__auto__ = cljs.core.seq.call(null,ks);
if(or__24872__auto__){
return or__24872__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__33994)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__33994)){
var x__25706__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$1);
})(),x__25706__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__34008 = input;
var x = cljs.core.nth.call(null,vec__34008,(0),null);
var input__$1 = vec__34008;
var map__34011 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__34011__$1 = ((((!((map__34011 == null)))?((((map__34011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34011):map__34011);
var p__$1 = map__34011__$1;
var op = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__34008,x,input__$1,map__34011,map__34011__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__34008,x,input__$1,map__34011,map__34011__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__34013 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__34013)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__34013)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__34013)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4655__auto__)){
var p1__$1 = temp__4655__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs$spec$op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__34013)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__24872__auto__ = cljs.core.seq.call(null,ks);
if(or__24872__auto__){
return or__24872__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__24872__auto__ = cljs.core.seq.call(null,forms);
if(or__24872__auto__){
return or__24872__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__34014 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__34013,vec__34008,x,input__$1,map__34011,map__34011__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__34017){
var vec__34018 = p__34017;
var p__$2 = cljs.core.nth.call(null,vec__34018,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__34013,vec__34008,x,input__$1,map__34011,map__34011__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__34014,(0),null);
var k = cljs.core.nth.call(null,vec__34014,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__34014,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__24872__auto__ = form__$1;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs$spec$op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__34013)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__34013,vec__34008,x,input__$1,map__34011,map__34011__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain.call(null,(function (){var or__24872__auto__ = form__$1;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__34013,vec__34008,x,input__$1,map__34011,map__34011__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__24872__auto__ = cljs.core.seq.call(null,ks);
if(or__24872__auto__){
return or__24872__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__24872__auto__ = cljs.core.seq.call(null,forms);
if(or__24872__auto__){
return or__24872__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__34013)){
return cljs$spec$op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__34027 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__34027__$1 = ((((!((map__34027 == null)))?((((map__34027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34027):map__34027);
var p__$1 = map__34027__$1;
var ps = cljs.core.get.call(null,map__34027__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__34027__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__34027__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__34027__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__34027__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__34027__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__34027__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var gfn = cljs.core.get.call(null,map__34027__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727));
var id = cljs.core.get.call(null,map__34027__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__34027__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__34027,map__34027__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__34027,map__34027__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__24860__auto__ = rmap__$1;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = id;
if(cljs.core.truth_(and__24860__auto____$1)){
var and__24860__auto____$2 = k;
if(cljs.core.truth_(and__24860__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__24860__auto____$2;
}
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__34027,map__34027__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (){
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__24872__auto__ = f__$1;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return p__$2;
}
})());
});})(map__34027,map__34027__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__24872__auto__ = f__$1;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__34027,map__34027__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__24872__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__24872__auto__){
return or__24872__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__24872__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__24872__auto__){
return or__24872__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__34027,map__34027__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
var or__24872__auto__ = (function (){var temp__4657__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
var G__34030 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__34030)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__34030)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
var or__24872__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__24872__auto____$1)){
return or__24872__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__34031 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__34031)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__34031)){
var temp__4657__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__34031)){
return cljs$spec$re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__34031)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__34031)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__34031)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__4657__auto__ = cljs$spec$re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__4657__auto__,G__34031,or__24872__auto____$1,or__24872__auto__,map__34027,map__34027__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens){
return (function (p1__34021_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__34021_SHARP_);
});})(g,temp__4657__auto__,G__34031,or__24872__auto____$1,or__24872__auto__,map__34027,map__34027__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__34032){
while(true){
var vec__34036 = p__34032;
var seq__34037 = cljs.core.seq.call(null,vec__34036);
var first__34038 = cljs.core.first.call(null,seq__34037);
var seq__34037__$1 = cljs.core.next.call(null,seq__34037);
var x = first__34038;
var xs = seq__34037__$1;
var data = vec__34036;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__34039 = dp;
var G__34040 = xs;
p = G__34039;
p__34032 = G__34040;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__34054 = input;
var vec__34055 = G__34054;
var seq__34056 = cljs.core.seq.call(null,vec__34055);
var first__34057 = cljs.core.first.call(null,seq__34056);
var seq__34056__$1 = cljs.core.next.call(null,seq__34056);
var x = first__34057;
var xs = seq__34056__$1;
var data = vec__34055;
var i = (0);
var p__$1 = p;
var G__34054__$1 = G__34054;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__34058 = G__34054__$1;
var seq__34059 = cljs.core.seq.call(null,vec__34058);
var first__34060 = cljs.core.first.call(null,seq__34059);
var seq__34059__$1 = cljs.core.next.call(null,seq__34059);
var x__$1 = first__34060;
var xs__$1 = seq__34059__$1;
var data__$1 = vec__34058;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__34061 = dp;
var G__34062 = xs__$1;
var G__34063 = (i__$2 + (1));
p__$1 = G__34061;
G__34054__$1 = G__34062;
i__$1 = G__34063;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__24872__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec34067 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec34067 = (function (regex_spec_impl,re,gfn,meta34068){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta34068 = meta34068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec34067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34069,meta34068__$1){
var self__ = this;
var _34069__$1 = this;
return (new cljs.spec.t_cljs$spec34067(self__.regex_spec_impl,self__.re,self__.gfn,meta34068__$1));
});

cljs.spec.t_cljs$spec34067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34069){
var self__ = this;
var _34069__$1 = this;
return self__.meta34068;
});

cljs.spec.t_cljs$spec34067.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec34067.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec34067.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec34067.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.t_cljs$spec34067.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec34067.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec34067.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec34067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"regex-spec-impl","regex-spec-impl",1541266692,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a regex op argument"], null)),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta34068","meta34068",1686521040,null)], null);
});

cljs.spec.t_cljs$spec34067.cljs$lang$type = true;

cljs.spec.t_cljs$spec34067.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec34067";

cljs.spec.t_cljs$spec34067.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.spec/t_cljs$spec34067");
});

cljs.spec.__GT_t_cljs$spec34067 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec34067(regex_spec_impl__$1,re__$1,gfn__$1,meta34068){
return (new cljs.spec.t_cljs$spec34067(regex_spec_impl__$1,re__$1,gfn__$1,meta34068));
});

}

return (new cljs.spec.t_cljs$spec34067(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__24860__auto__ = cljs.core.not_EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
if(and__24860__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__24860__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__34070_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__34070_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__4655__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__34074 = temp__4655__auto__;
var smallest = cljs.core.nth.call(null,vec__34074,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec34083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec34083 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta34084){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta34084 = meta34084;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec34083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_34085,meta34084__$1){
var self__ = this;
var _34085__$1 = this;
return (new cljs.spec.t_cljs$spec34083(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta34084__$1));
});})(specs))
;

cljs.spec.t_cljs$spec34083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_34085){
var self__ = this;
var _34085__$1 = this;
return self__.meta34084;
});})(specs))
;

cljs.spec.t_cljs$spec34083.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec34083.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec34083.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec34083.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec34083.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec34083.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e34086){if((e34086 instanceof Error)){
var t = e34086;
return t;
} else {
throw e34086;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cret)){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.t_cljs$spec34083.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$3,specs){
return (function() { 
var G__34089__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__25858__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_34087_34090 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_34088_34091 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_34087_34090,_STAR_print_fn_STAR_34088_34091,sb__25858__auto__,___$3,specs){
return (function (x__25859__auto__){
return sb__25858__auto__.append(x__25859__auto__);
});})(_STAR_print_newline_STAR_34087_34090,_STAR_print_fn_STAR_34088_34091,sb__25858__auto__,___$3,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34088_34091;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34087_34090;
}
return [cljs.core.str(sb__25858__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec,overrides));
};
var G__34089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34092__i = 0, G__34092__a = new Array(arguments.length -  0);
while (G__34092__i < G__34092__a.length) {G__34092__a[G__34092__i] = arguments[G__34092__i + 0]; ++G__34092__i;}
  args = new cljs.core.IndexedSeq(G__34092__a,0);
} 
return G__34089__delegate.call(this,args);};
G__34089.cljs$lang$maxFixedArity = 0;
G__34089.cljs$lang$applyTo = (function (arglist__34093){
var args = cljs.core.seq(arglist__34093);
return G__34089__delegate(args);
});
G__34089.cljs$core$IFn$_invoke$arity$variadic = G__34089__delegate;
return G__34089;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec34083.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec34083.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__25706__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__25706__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__25706__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec34083.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fspec-impl","fspec-impl",897021908,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'fspec'"], null)),new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta34084","meta34084",1796708459,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec34083.cljs$lang$type = true;

cljs.spec.t_cljs$spec34083.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec34083";

cljs.spec.t_cljs$spec34083.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.spec/t_cljs$spec34083");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec34083 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec34083(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta34084){
return (new cljs.spec.t_cljs$spec34083(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta34084));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec34083(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34094#","p1__34094#",671035322,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__34094#","p1__34094#",671035322,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__34094#","p1__34094#",671035322,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34095#","p1__34095#",1280236193,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__34095#","p1__34095#",1280236193,null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34094#","p1__34094#",671035322,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__34094#","p1__34094#",671035322,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__34094#","p1__34094#",671035322,null)))),(function (p1__34094_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__34094_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__34094_SHARP_));
}),null,true,(function (p1__34095_SHARP_){
return cljs.core.map.call(null,(function (p__34096){
var vec__34097 = p__34096;
var k = cljs.core.nth.call(null,vec__34097,(0),null);
var v = cljs.core.nth.call(null,vec__34097,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__34095_SHARP_);
})));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args34101 = [];
var len__25947__auto___34104 = arguments.length;
var i__25948__auto___34105 = (0);
while(true){
if((i__25948__auto___34105 < len__25947__auto___34104)){
args34101.push((arguments[i__25948__auto___34105]));

var G__34106 = (i__25948__auto___34105 + (1));
i__25948__auto___34105 = G__34106;
continue;
} else {
}
break;
}

var G__34103 = args34101.length;
switch (G__34103) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34101.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__34100_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__34100_SHARP_,cljs.spec.conform.call(null,spec,p1__34100_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__24860__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__24860__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__24860__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__24860__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__24860__auto__)){
return val.lessThan(end);
} else {
return and__24860__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__24860__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__24860__auto__)){
return val.lessThan(end);
} else {
return and__24860__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.check_asserts_QMARK_ = (function cljs$spec$check_asserts_QMARK_(){
return cljs.spec._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.check_asserts = (function cljs$spec$check_asserts(flag){
return cljs.spec._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.assert_STAR_ = (function cljs$spec$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec,x))){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",1931120592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477)));
throw (new Error([cljs.core.str("Spec assertion failed\n"),cljs.core.str((function (){var sb__25858__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_34110_34112 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_34111_34113 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_34110_34112,_STAR_print_fn_STAR_34111_34113,sb__25858__auto__,ed){
return (function (x__25859__auto__){
return sb__25858__auto__.append(x__25859__auto__);
});})(_STAR_print_newline_STAR_34110_34112,_STAR_print_fn_STAR_34111_34113,sb__25858__auto__,ed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34111_34113;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34110_34112;
}
return [cljs.core.str(sb__25858__auto__)].join('');
})())].join('')));
}
});

//# sourceMappingURL=spec.js.map?rel=1486440325531