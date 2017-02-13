// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x38123_38124 = value;
x38123_38124.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x38128_38129 = value;
x38128_38129.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x38133_38134 = value;
x38133_38134.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__24860__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__24860__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__25954__auto__ = [];
var len__25947__auto___38142 = arguments.length;
var i__25948__auto___38143 = (0);
while(true){
if((i__25948__auto___38143 < len__25947__auto___38142)){
args__25954__auto__.push((arguments[i__25948__auto___38143]));

var G__38144 = (i__25948__auto___38143 + (1));
i__25948__auto___38143 = G__38144;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__38138_38145 = cljs.core.seq.call(null,items);
var chunk__38139_38146 = null;
var count__38140_38147 = (0);
var i__38141_38148 = (0);
while(true){
if((i__38141_38148 < count__38140_38147)){
var item_38149 = cljs.core._nth.call(null,chunk__38139_38146,i__38141_38148);
if(cljs.core.some_QMARK_.call(null,item_38149)){
if(cljs.core.coll_QMARK_.call(null,item_38149)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38149)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38149));
}
} else {
}

var G__38150 = seq__38138_38145;
var G__38151 = chunk__38139_38146;
var G__38152 = count__38140_38147;
var G__38153 = (i__38141_38148 + (1));
seq__38138_38145 = G__38150;
chunk__38139_38146 = G__38151;
count__38140_38147 = G__38152;
i__38141_38148 = G__38153;
continue;
} else {
var temp__4657__auto___38154 = cljs.core.seq.call(null,seq__38138_38145);
if(temp__4657__auto___38154){
var seq__38138_38155__$1 = temp__4657__auto___38154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38138_38155__$1)){
var c__25683__auto___38156 = cljs.core.chunk_first.call(null,seq__38138_38155__$1);
var G__38157 = cljs.core.chunk_rest.call(null,seq__38138_38155__$1);
var G__38158 = c__25683__auto___38156;
var G__38159 = cljs.core.count.call(null,c__25683__auto___38156);
var G__38160 = (0);
seq__38138_38145 = G__38157;
chunk__38139_38146 = G__38158;
count__38140_38147 = G__38159;
i__38141_38148 = G__38160;
continue;
} else {
var item_38161 = cljs.core.first.call(null,seq__38138_38155__$1);
if(cljs.core.some_QMARK_.call(null,item_38161)){
if(cljs.core.coll_QMARK_.call(null,item_38161)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38161)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38161));
}
} else {
}

var G__38162 = cljs.core.next.call(null,seq__38138_38155__$1);
var G__38163 = null;
var G__38164 = (0);
var G__38165 = (0);
seq__38138_38145 = G__38162;
chunk__38139_38146 = G__38163;
count__38140_38147 = G__38164;
i__38141_38148 = G__38165;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq38137){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38137));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__25954__auto__ = [];
var len__25947__auto___38173 = arguments.length;
var i__25948__auto___38174 = (0);
while(true){
if((i__25948__auto___38174 < len__25947__auto___38173)){
args__25954__auto__.push((arguments[i__25948__auto___38174]));

var G__38175 = (i__25948__auto___38174 + (1));
i__25948__auto___38174 = G__38175;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((2) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25955__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__38169_38176 = cljs.core.seq.call(null,children);
var chunk__38170_38177 = null;
var count__38171_38178 = (0);
var i__38172_38179 = (0);
while(true){
if((i__38172_38179 < count__38171_38178)){
var child_38180 = cljs.core._nth.call(null,chunk__38170_38177,i__38172_38179);
if(cljs.core.some_QMARK_.call(null,child_38180)){
if(cljs.core.coll_QMARK_.call(null,child_38180)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38180))));
} else {
var temp__4655__auto___38181 = devtools.formatters.helpers.pref.call(null,child_38180);
if(cljs.core.truth_(temp__4655__auto___38181)){
var child_value_38182 = temp__4655__auto___38181;
template.push(child_value_38182);
} else {
}
}
} else {
}

var G__38183 = seq__38169_38176;
var G__38184 = chunk__38170_38177;
var G__38185 = count__38171_38178;
var G__38186 = (i__38172_38179 + (1));
seq__38169_38176 = G__38183;
chunk__38170_38177 = G__38184;
count__38171_38178 = G__38185;
i__38172_38179 = G__38186;
continue;
} else {
var temp__4657__auto___38187 = cljs.core.seq.call(null,seq__38169_38176);
if(temp__4657__auto___38187){
var seq__38169_38188__$1 = temp__4657__auto___38187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38169_38188__$1)){
var c__25683__auto___38189 = cljs.core.chunk_first.call(null,seq__38169_38188__$1);
var G__38190 = cljs.core.chunk_rest.call(null,seq__38169_38188__$1);
var G__38191 = c__25683__auto___38189;
var G__38192 = cljs.core.count.call(null,c__25683__auto___38189);
var G__38193 = (0);
seq__38169_38176 = G__38190;
chunk__38170_38177 = G__38191;
count__38171_38178 = G__38192;
i__38172_38179 = G__38193;
continue;
} else {
var child_38194 = cljs.core.first.call(null,seq__38169_38188__$1);
if(cljs.core.some_QMARK_.call(null,child_38194)){
if(cljs.core.coll_QMARK_.call(null,child_38194)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38194))));
} else {
var temp__4655__auto___38195 = devtools.formatters.helpers.pref.call(null,child_38194);
if(cljs.core.truth_(temp__4655__auto___38195)){
var child_value_38196 = temp__4655__auto___38195;
template.push(child_value_38196);
} else {
}
}
} else {
}

var G__38197 = cljs.core.next.call(null,seq__38169_38188__$1);
var G__38198 = null;
var G__38199 = (0);
var G__38200 = (0);
seq__38169_38176 = G__38197;
chunk__38170_38177 = G__38198;
count__38171_38178 = G__38199;
i__38172_38179 = G__38200;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq38166){
var G__38167 = cljs.core.first.call(null,seq38166);
var seq38166__$1 = cljs.core.next.call(null,seq38166);
var G__38168 = cljs.core.first.call(null,seq38166__$1);
var seq38166__$2 = cljs.core.next.call(null,seq38166__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__38167,G__38168,seq38166__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___38203 = arguments.length;
var i__25948__auto___38204 = (0);
while(true){
if((i__25948__auto___38204 < len__25947__auto___38203)){
args__25954__auto__.push((arguments[i__25948__auto___38204]));

var G__38205 = (i__25948__auto___38204 + (1));
i__25948__auto___38204 = G__38205;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq38201){
var G__38202 = cljs.core.first.call(null,seq38201);
var seq38201__$1 = cljs.core.next.call(null,seq38201);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38202,seq38201__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___38208 = arguments.length;
var i__25948__auto___38209 = (0);
while(true){
if((i__25948__auto___38209 < len__25947__auto___38208)){
args__25954__auto__.push((arguments[i__25948__auto___38209]));

var G__38210 = (i__25948__auto___38209 + (1));
i__25948__auto___38209 = G__38210;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq38206){
var G__38207 = cljs.core.first.call(null,seq38206);
var seq38206__$1 = cljs.core.next.call(null,seq38206);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38207,seq38206__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args38211 = [];
var len__25947__auto___38216 = arguments.length;
var i__25948__auto___38217 = (0);
while(true){
if((i__25948__auto___38217 < len__25947__auto___38216)){
args38211.push((arguments[i__25948__auto___38217]));

var G__38218 = (i__25948__auto___38217 + (1));
i__25948__auto___38217 = G__38218;
continue;
} else {
}
break;
}

var G__38213 = args38211.length;
switch (G__38213) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38211.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj38215 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__24872__auto__ = start_index;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return (0);
}
})()};
return obj38215;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__25954__auto__ = [];
var len__25947__auto___38226 = arguments.length;
var i__25948__auto___38227 = (0);
while(true){
if((i__25948__auto___38227 < len__25947__auto___38226)){
args__25954__auto__.push((arguments[i__25948__auto___38227]));

var G__38228 = (i__25948__auto___38227 + (1));
i__25948__auto___38227 = G__38228;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38222){
var vec__38223 = p__38222;
var state_override_fn = cljs.core.nth.call(null,vec__38223,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq38220){
var G__38221 = cljs.core.first.call(null,seq38220);
var seq38220__$1 = cljs.core.next.call(null,seq38220);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__38221,seq38220__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__25858__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_38232_38235 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_38233_38236 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_38232_38235,_STAR_print_fn_STAR_38233_38236,sb__25858__auto__){
return (function (x__25859__auto__){
return sb__25858__auto__.append(x__25859__auto__);
});})(_STAR_print_newline_STAR_38232_38235,_STAR_print_fn_STAR_38233_38236,sb__25858__auto__))
;

try{var _STAR_print_level_STAR_38234_38237 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_38234_38237;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38233_38236;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38232_38235;
}
return [cljs.core.str(sb__25858__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_38239 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_38239;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__38241 = name;
switch (G__38241) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__38246 = tag;
var html_tag = cljs.core.nth.call(null,vec__38246,(0),null);
var style = cljs.core.nth.call(null,vec__38246,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_38250 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38250;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_38253 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_38254 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38254;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_38253;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__38255 = initial_value;
var G__38256 = value.call(null);
initial_value = G__38255;
value = G__38256;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__38257 = initial_value;
var G__38258 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__38257;
value = G__38258;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__38259 = initial_value;
var G__38260 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__38259;
value = G__38260;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1486525853274