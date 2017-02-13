// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__25535__auto__ = (((value == null))?null:value);
var m__25536__auto__ = (devtools.format._header[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,value);
} else {
var m__25536__auto____$1 = (devtools.format._header["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__25535__auto__ = (((value == null))?null:value);
var m__25536__auto__ = (devtools.format._has_body[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,value);
} else {
var m__25536__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__25535__auto__ = (((value == null))?null:value);
var m__25536__auto__ = (devtools.format._body[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,value);
} else {
var m__25536__auto____$1 = (devtools.format._body["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__35424__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35424__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35424__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35424__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35423__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35423__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__35424__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35424__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35424__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35424__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35423__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35423__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__35424__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35424__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35424__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35424__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35423__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35423__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__35424__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35424__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35424__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35424__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35423__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35423__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__35424__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35424__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35424__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35424__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35423__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35423__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__35424__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35424__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35424__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35424__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35423__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35423__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__35424__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35424__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35424__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35424__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35423__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35423__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__25954__auto__ = [];
var len__25947__auto___35445 = arguments.length;
var i__25948__auto___35446 = (0);
while(true){
if((i__25948__auto___35446 < len__25947__auto___35445)){
args__25954__auto__.push((arguments[i__25948__auto___35446]));

var G__35447 = (i__25948__auto___35446 + (1));
i__25948__auto___35446 = G__35447;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq35444){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35444));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__25954__auto__ = [];
var len__25947__auto___35449 = arguments.length;
var i__25948__auto___35450 = (0);
while(true){
if((i__25948__auto___35450 < len__25947__auto___35449)){
args__25954__auto__.push((arguments[i__25948__auto___35450]));

var G__35451 = (i__25948__auto___35450 + (1));
i__25948__auto___35450 = G__35451;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq35448){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35448));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__25954__auto__ = [];
var len__25947__auto___35453 = arguments.length;
var i__25948__auto___35454 = (0);
while(true){
if((i__25948__auto___35454 < len__25947__auto___35453)){
args__25954__auto__.push((arguments[i__25948__auto___35454]));

var G__35455 = (i__25948__auto___35454 + (1));
i__25948__auto___35454 = G__35455;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq35452){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35452));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__25954__auto__ = [];
var len__25947__auto___35457 = arguments.length;
var i__25948__auto___35458 = (0);
while(true){
if((i__25948__auto___35458 < len__25947__auto___35457)){
args__25954__auto__.push((arguments[i__25948__auto___35458]));

var G__35459 = (i__25948__auto___35458 + (1));
i__25948__auto___35458 = G__35459;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq35456){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35456));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__25954__auto__ = [];
var len__25947__auto___35461 = arguments.length;
var i__25948__auto___35462 = (0);
while(true){
if((i__25948__auto___35462 < len__25947__auto___35461)){
args__25954__auto__.push((arguments[i__25948__auto___35462]));

var G__35463 = (i__25948__auto___35462 + (1));
i__25948__auto___35462 = G__35463;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq35460){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35460));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__25954__auto__ = [];
var len__25947__auto___35465 = arguments.length;
var i__25948__auto___35466 = (0);
while(true){
if((i__25948__auto___35466 < len__25947__auto___35465)){
args__25954__auto__.push((arguments[i__25948__auto___35466]));

var G__35467 = (i__25948__auto___35466 + (1));
i__25948__auto___35466 = G__35467;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq35464){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35464));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__25954__auto__ = [];
var len__25947__auto___35469 = arguments.length;
var i__25948__auto___35470 = (0);
while(true){
if((i__25948__auto___35470 < len__25947__auto___35469)){
args__25954__auto__.push((arguments[i__25948__auto___35470]));

var G__35471 = (i__25948__auto___35470 + (1));
i__25948__auto___35470 = G__35471;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq35468){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35468));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__25954__auto__ = [];
var len__25947__auto___35479 = arguments.length;
var i__25948__auto___35480 = (0);
while(true){
if((i__25948__auto___35480 < len__25947__auto___35479)){
args__25954__auto__.push((arguments[i__25948__auto___35480]));

var G__35481 = (i__25948__auto___35480 + (1));
i__25948__auto___35480 = G__35481;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__35475){
var vec__35476 = p__35475;
var state_override = cljs.core.nth.call(null,vec__35476,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__35476,state_override){
return (function (p1__35472_SHARP_){
return cljs.core.merge.call(null,p1__35472_SHARP_,state_override);
});})(vec__35476,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq35473){
var G__35474 = cljs.core.first.call(null,seq35473);
var seq35473__$1 = cljs.core.next.call(null,seq35473);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__35474,seq35473__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__25954__auto__ = [];
var len__25947__auto___35483 = arguments.length;
var i__25948__auto___35484 = (0);
while(true){
if((i__25948__auto___35484 < len__25947__auto___35483)){
args__25954__auto__.push((arguments[i__25948__auto___35484]));

var G__35485 = (i__25948__auto___35484 + (1));
i__25948__auto___35484 = G__35485;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq35482){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35482));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__25954__auto__ = [];
var len__25947__auto___35488 = arguments.length;
var i__25948__auto___35489 = (0);
while(true){
if((i__25948__auto___35489 < len__25947__auto___35488)){
args__25954__auto__.push((arguments[i__25948__auto___35489]));

var G__35490 = (i__25948__auto___35489 + (1));
i__25948__auto___35489 = G__35490;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq35486){
var G__35487 = cljs.core.first.call(null,seq35486);
var seq35486__$1 = cljs.core.next.call(null,seq35486);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__35487,seq35486__$1);
});


//# sourceMappingURL=format.js.map?rel=1486526668361