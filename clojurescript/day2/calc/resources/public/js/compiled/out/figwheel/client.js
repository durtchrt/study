// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args34555 = [];
var len__25947__auto___34558 = arguments.length;
var i__25948__auto___34559 = (0);
while(true){
if((i__25948__auto___34559 < len__25947__auto___34558)){
args34555.push((arguments[i__25948__auto___34559]));

var G__34560 = (i__25948__auto___34559 + (1));
i__25948__auto___34559 = G__34560;
continue;
} else {
}
break;
}

var G__34557 = args34555.length;
switch (G__34557) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34555.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25954__auto__ = [];
var len__25947__auto___34563 = arguments.length;
var i__25948__auto___34564 = (0);
while(true){
if((i__25948__auto___34564 < len__25947__auto___34563)){
args__25954__auto__.push((arguments[i__25948__auto___34564]));

var G__34565 = (i__25948__auto___34564 + (1));
i__25948__auto___34564 = G__34565;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34562){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34562));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25954__auto__ = [];
var len__25947__auto___34567 = arguments.length;
var i__25948__auto___34568 = (0);
while(true){
if((i__25948__auto___34568 < len__25947__auto___34567)){
args__25954__auto__.push((arguments[i__25948__auto___34568]));

var G__34569 = (i__25948__auto___34568 + (1));
i__25948__auto___34568 = G__34569;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34566){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34566));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34570){
var map__34573 = p__34570;
var map__34573__$1 = ((((!((map__34573 == null)))?((((map__34573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34573):map__34573);
var message = cljs.core.get.call(null,map__34573__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34573__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24872__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24860__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24860__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24860__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27046__auto___34735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto___34735,ch){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto___34735,ch){
return (function (state_34704){
var state_val_34705 = (state_34704[(1)]);
if((state_val_34705 === (7))){
var inst_34700 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
var statearr_34706_34736 = state_34704__$1;
(statearr_34706_34736[(2)] = inst_34700);

(statearr_34706_34736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (1))){
var state_34704__$1 = state_34704;
var statearr_34707_34737 = state_34704__$1;
(statearr_34707_34737[(2)] = null);

(statearr_34707_34737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (4))){
var inst_34657 = (state_34704[(7)]);
var inst_34657__$1 = (state_34704[(2)]);
var state_34704__$1 = (function (){var statearr_34708 = state_34704;
(statearr_34708[(7)] = inst_34657__$1);

return statearr_34708;
})();
if(cljs.core.truth_(inst_34657__$1)){
var statearr_34709_34738 = state_34704__$1;
(statearr_34709_34738[(1)] = (5));

} else {
var statearr_34710_34739 = state_34704__$1;
(statearr_34710_34739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (15))){
var inst_34664 = (state_34704[(8)]);
var inst_34679 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34664);
var inst_34680 = cljs.core.first.call(null,inst_34679);
var inst_34681 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34680);
var inst_34682 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34681)].join('');
var inst_34683 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34682);
var state_34704__$1 = state_34704;
var statearr_34711_34740 = state_34704__$1;
(statearr_34711_34740[(2)] = inst_34683);

(statearr_34711_34740[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (13))){
var inst_34688 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
var statearr_34712_34741 = state_34704__$1;
(statearr_34712_34741[(2)] = inst_34688);

(statearr_34712_34741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (6))){
var state_34704__$1 = state_34704;
var statearr_34713_34742 = state_34704__$1;
(statearr_34713_34742[(2)] = null);

(statearr_34713_34742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (17))){
var inst_34686 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
var statearr_34714_34743 = state_34704__$1;
(statearr_34714_34743[(2)] = inst_34686);

(statearr_34714_34743[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (3))){
var inst_34702 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34704__$1,inst_34702);
} else {
if((state_val_34705 === (12))){
var inst_34663 = (state_34704[(9)]);
var inst_34677 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34663,opts);
var state_34704__$1 = state_34704;
if(cljs.core.truth_(inst_34677)){
var statearr_34715_34744 = state_34704__$1;
(statearr_34715_34744[(1)] = (15));

} else {
var statearr_34716_34745 = state_34704__$1;
(statearr_34716_34745[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (2))){
var state_34704__$1 = state_34704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34704__$1,(4),ch);
} else {
if((state_val_34705 === (11))){
var inst_34664 = (state_34704[(8)]);
var inst_34669 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34670 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34664);
var inst_34671 = cljs.core.async.timeout.call(null,(1000));
var inst_34672 = [inst_34670,inst_34671];
var inst_34673 = (new cljs.core.PersistentVector(null,2,(5),inst_34669,inst_34672,null));
var state_34704__$1 = state_34704;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34704__$1,(14),inst_34673);
} else {
if((state_val_34705 === (9))){
var inst_34664 = (state_34704[(8)]);
var inst_34690 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34691 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34664);
var inst_34692 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34691);
var inst_34693 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34692)].join('');
var inst_34694 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34693);
var state_34704__$1 = (function (){var statearr_34717 = state_34704;
(statearr_34717[(10)] = inst_34690);

return statearr_34717;
})();
var statearr_34718_34746 = state_34704__$1;
(statearr_34718_34746[(2)] = inst_34694);

(statearr_34718_34746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (5))){
var inst_34657 = (state_34704[(7)]);
var inst_34659 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34660 = (new cljs.core.PersistentArrayMap(null,2,inst_34659,null));
var inst_34661 = (new cljs.core.PersistentHashSet(null,inst_34660,null));
var inst_34662 = figwheel.client.focus_msgs.call(null,inst_34661,inst_34657);
var inst_34663 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34662);
var inst_34664 = cljs.core.first.call(null,inst_34662);
var inst_34665 = figwheel.client.autoload_QMARK_.call(null);
var state_34704__$1 = (function (){var statearr_34719 = state_34704;
(statearr_34719[(9)] = inst_34663);

(statearr_34719[(8)] = inst_34664);

return statearr_34719;
})();
if(cljs.core.truth_(inst_34665)){
var statearr_34720_34747 = state_34704__$1;
(statearr_34720_34747[(1)] = (8));

} else {
var statearr_34721_34748 = state_34704__$1;
(statearr_34721_34748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (14))){
var inst_34675 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
var statearr_34722_34749 = state_34704__$1;
(statearr_34722_34749[(2)] = inst_34675);

(statearr_34722_34749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (16))){
var state_34704__$1 = state_34704;
var statearr_34723_34750 = state_34704__$1;
(statearr_34723_34750[(2)] = null);

(statearr_34723_34750[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (10))){
var inst_34696 = (state_34704[(2)]);
var state_34704__$1 = (function (){var statearr_34724 = state_34704;
(statearr_34724[(11)] = inst_34696);

return statearr_34724;
})();
var statearr_34725_34751 = state_34704__$1;
(statearr_34725_34751[(2)] = null);

(statearr_34725_34751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (8))){
var inst_34663 = (state_34704[(9)]);
var inst_34667 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34663,opts);
var state_34704__$1 = state_34704;
if(cljs.core.truth_(inst_34667)){
var statearr_34726_34752 = state_34704__$1;
(statearr_34726_34752[(1)] = (11));

} else {
var statearr_34727_34753 = state_34704__$1;
(statearr_34727_34753[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27046__auto___34735,ch))
;
return ((function (switch__26934__auto__,c__27046__auto___34735,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26935__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26935__auto____0 = (function (){
var statearr_34731 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34731[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26935__auto__);

(statearr_34731[(1)] = (1));

return statearr_34731;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26935__auto____1 = (function (state_34704){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_34704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e34732){if((e34732 instanceof Object)){
var ex__26938__auto__ = e34732;
var statearr_34733_34754 = state_34704;
(statearr_34733_34754[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34755 = state_34704;
state_34704 = G__34755;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26935__auto__ = function(state_34704){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26935__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26935__auto____1.call(this,state_34704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26935__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26935__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto___34735,ch))
})();
var state__27048__auto__ = (function (){var statearr_34734 = f__27047__auto__.call(null);
(statearr_34734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___34735);

return statearr_34734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto___34735,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34756_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34756_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34759 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34759){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34758){if((e34758 instanceof Error)){
var e = e34758;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34759], null));
} else {
var e = e34758;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34759))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34760){
var map__34769 = p__34760;
var map__34769__$1 = ((((!((map__34769 == null)))?((((map__34769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34769):map__34769);
var opts = map__34769__$1;
var build_id = cljs.core.get.call(null,map__34769__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34769,map__34769__$1,opts,build_id){
return (function (p__34771){
var vec__34772 = p__34771;
var seq__34773 = cljs.core.seq.call(null,vec__34772);
var first__34774 = cljs.core.first.call(null,seq__34773);
var seq__34773__$1 = cljs.core.next.call(null,seq__34773);
var map__34775 = first__34774;
var map__34775__$1 = ((((!((map__34775 == null)))?((((map__34775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34775):map__34775);
var msg = map__34775__$1;
var msg_name = cljs.core.get.call(null,map__34775__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34773__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34772,seq__34773,first__34774,seq__34773__$1,map__34775,map__34775__$1,msg,msg_name,_,map__34769,map__34769__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34772,seq__34773,first__34774,seq__34773__$1,map__34775,map__34775__$1,msg,msg_name,_,map__34769,map__34769__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34769,map__34769__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34783){
var vec__34784 = p__34783;
var seq__34785 = cljs.core.seq.call(null,vec__34784);
var first__34786 = cljs.core.first.call(null,seq__34785);
var seq__34785__$1 = cljs.core.next.call(null,seq__34785);
var map__34787 = first__34786;
var map__34787__$1 = ((((!((map__34787 == null)))?((((map__34787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34787):map__34787);
var msg = map__34787__$1;
var msg_name = cljs.core.get.call(null,map__34787__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34785__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34789){
var map__34801 = p__34789;
var map__34801__$1 = ((((!((map__34801 == null)))?((((map__34801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34801):map__34801);
var on_compile_warning = cljs.core.get.call(null,map__34801__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34801__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34801,map__34801__$1,on_compile_warning,on_compile_fail){
return (function (p__34803){
var vec__34804 = p__34803;
var seq__34805 = cljs.core.seq.call(null,vec__34804);
var first__34806 = cljs.core.first.call(null,seq__34805);
var seq__34805__$1 = cljs.core.next.call(null,seq__34805);
var map__34807 = first__34806;
var map__34807__$1 = ((((!((map__34807 == null)))?((((map__34807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34807):map__34807);
var msg = map__34807__$1;
var msg_name = cljs.core.get.call(null,map__34807__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34805__$1;
var pred__34809 = cljs.core._EQ_;
var expr__34810 = msg_name;
if(cljs.core.truth_(pred__34809.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34810))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34809.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34810))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34801,map__34801__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto__,msg_hist,msg_names,msg){
return (function (state_35038){
var state_val_35039 = (state_35038[(1)]);
if((state_val_35039 === (7))){
var inst_34958 = (state_35038[(2)]);
var state_35038__$1 = state_35038;
if(cljs.core.truth_(inst_34958)){
var statearr_35040_35090 = state_35038__$1;
(statearr_35040_35090[(1)] = (8));

} else {
var statearr_35041_35091 = state_35038__$1;
(statearr_35041_35091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (20))){
var inst_35032 = (state_35038[(2)]);
var state_35038__$1 = state_35038;
var statearr_35042_35092 = state_35038__$1;
(statearr_35042_35092[(2)] = inst_35032);

(statearr_35042_35092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (27))){
var inst_35028 = (state_35038[(2)]);
var state_35038__$1 = state_35038;
var statearr_35043_35093 = state_35038__$1;
(statearr_35043_35093[(2)] = inst_35028);

(statearr_35043_35093[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (1))){
var inst_34951 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35038__$1 = state_35038;
if(cljs.core.truth_(inst_34951)){
var statearr_35044_35094 = state_35038__$1;
(statearr_35044_35094[(1)] = (2));

} else {
var statearr_35045_35095 = state_35038__$1;
(statearr_35045_35095[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (24))){
var inst_35030 = (state_35038[(2)]);
var state_35038__$1 = state_35038;
var statearr_35046_35096 = state_35038__$1;
(statearr_35046_35096[(2)] = inst_35030);

(statearr_35046_35096[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (4))){
var inst_35036 = (state_35038[(2)]);
var state_35038__$1 = state_35038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35038__$1,inst_35036);
} else {
if((state_val_35039 === (15))){
var inst_35034 = (state_35038[(2)]);
var state_35038__$1 = state_35038;
var statearr_35047_35097 = state_35038__$1;
(statearr_35047_35097[(2)] = inst_35034);

(statearr_35047_35097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (21))){
var inst_34987 = (state_35038[(2)]);
var inst_34988 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34989 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34988);
var state_35038__$1 = (function (){var statearr_35048 = state_35038;
(statearr_35048[(7)] = inst_34987);

return statearr_35048;
})();
var statearr_35049_35098 = state_35038__$1;
(statearr_35049_35098[(2)] = inst_34989);

(statearr_35049_35098[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (31))){
var inst_35017 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35038__$1 = state_35038;
if(cljs.core.truth_(inst_35017)){
var statearr_35050_35099 = state_35038__$1;
(statearr_35050_35099[(1)] = (34));

} else {
var statearr_35051_35100 = state_35038__$1;
(statearr_35051_35100[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (32))){
var inst_35026 = (state_35038[(2)]);
var state_35038__$1 = state_35038;
var statearr_35052_35101 = state_35038__$1;
(statearr_35052_35101[(2)] = inst_35026);

(statearr_35052_35101[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (33))){
var inst_35013 = (state_35038[(2)]);
var inst_35014 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35015 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35014);
var state_35038__$1 = (function (){var statearr_35053 = state_35038;
(statearr_35053[(8)] = inst_35013);

return statearr_35053;
})();
var statearr_35054_35102 = state_35038__$1;
(statearr_35054_35102[(2)] = inst_35015);

(statearr_35054_35102[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (13))){
var inst_34972 = figwheel.client.heads_up.clear.call(null);
var state_35038__$1 = state_35038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35038__$1,(16),inst_34972);
} else {
if((state_val_35039 === (22))){
var inst_34993 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34994 = figwheel.client.heads_up.append_warning_message.call(null,inst_34993);
var state_35038__$1 = state_35038;
var statearr_35055_35103 = state_35038__$1;
(statearr_35055_35103[(2)] = inst_34994);

(statearr_35055_35103[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (36))){
var inst_35024 = (state_35038[(2)]);
var state_35038__$1 = state_35038;
var statearr_35056_35104 = state_35038__$1;
(statearr_35056_35104[(2)] = inst_35024);

(statearr_35056_35104[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (29))){
var inst_35004 = (state_35038[(2)]);
var inst_35005 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35006 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35005);
var state_35038__$1 = (function (){var statearr_35057 = state_35038;
(statearr_35057[(9)] = inst_35004);

return statearr_35057;
})();
var statearr_35058_35105 = state_35038__$1;
(statearr_35058_35105[(2)] = inst_35006);

(statearr_35058_35105[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (6))){
var inst_34953 = (state_35038[(10)]);
var state_35038__$1 = state_35038;
var statearr_35059_35106 = state_35038__$1;
(statearr_35059_35106[(2)] = inst_34953);

(statearr_35059_35106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (28))){
var inst_35000 = (state_35038[(2)]);
var inst_35001 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35002 = figwheel.client.heads_up.display_warning.call(null,inst_35001);
var state_35038__$1 = (function (){var statearr_35060 = state_35038;
(statearr_35060[(11)] = inst_35000);

return statearr_35060;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35038__$1,(29),inst_35002);
} else {
if((state_val_35039 === (25))){
var inst_34998 = figwheel.client.heads_up.clear.call(null);
var state_35038__$1 = state_35038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35038__$1,(28),inst_34998);
} else {
if((state_val_35039 === (34))){
var inst_35019 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35038__$1 = state_35038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35038__$1,(37),inst_35019);
} else {
if((state_val_35039 === (17))){
var inst_34978 = (state_35038[(2)]);
var inst_34979 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34980 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34979);
var state_35038__$1 = (function (){var statearr_35061 = state_35038;
(statearr_35061[(12)] = inst_34978);

return statearr_35061;
})();
var statearr_35062_35107 = state_35038__$1;
(statearr_35062_35107[(2)] = inst_34980);

(statearr_35062_35107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (3))){
var inst_34970 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35038__$1 = state_35038;
if(cljs.core.truth_(inst_34970)){
var statearr_35063_35108 = state_35038__$1;
(statearr_35063_35108[(1)] = (13));

} else {
var statearr_35064_35109 = state_35038__$1;
(statearr_35064_35109[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (12))){
var inst_34966 = (state_35038[(2)]);
var state_35038__$1 = state_35038;
var statearr_35065_35110 = state_35038__$1;
(statearr_35065_35110[(2)] = inst_34966);

(statearr_35065_35110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (2))){
var inst_34953 = (state_35038[(10)]);
var inst_34953__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35038__$1 = (function (){var statearr_35066 = state_35038;
(statearr_35066[(10)] = inst_34953__$1);

return statearr_35066;
})();
if(cljs.core.truth_(inst_34953__$1)){
var statearr_35067_35111 = state_35038__$1;
(statearr_35067_35111[(1)] = (5));

} else {
var statearr_35068_35112 = state_35038__$1;
(statearr_35068_35112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (23))){
var inst_34996 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35038__$1 = state_35038;
if(cljs.core.truth_(inst_34996)){
var statearr_35069_35113 = state_35038__$1;
(statearr_35069_35113[(1)] = (25));

} else {
var statearr_35070_35114 = state_35038__$1;
(statearr_35070_35114[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (35))){
var state_35038__$1 = state_35038;
var statearr_35071_35115 = state_35038__$1;
(statearr_35071_35115[(2)] = null);

(statearr_35071_35115[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (19))){
var inst_34991 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35038__$1 = state_35038;
if(cljs.core.truth_(inst_34991)){
var statearr_35072_35116 = state_35038__$1;
(statearr_35072_35116[(1)] = (22));

} else {
var statearr_35073_35117 = state_35038__$1;
(statearr_35073_35117[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (11))){
var inst_34962 = (state_35038[(2)]);
var state_35038__$1 = state_35038;
var statearr_35074_35118 = state_35038__$1;
(statearr_35074_35118[(2)] = inst_34962);

(statearr_35074_35118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (9))){
var inst_34964 = figwheel.client.heads_up.clear.call(null);
var state_35038__$1 = state_35038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35038__$1,(12),inst_34964);
} else {
if((state_val_35039 === (5))){
var inst_34955 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35038__$1 = state_35038;
var statearr_35075_35119 = state_35038__$1;
(statearr_35075_35119[(2)] = inst_34955);

(statearr_35075_35119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (14))){
var inst_34982 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35038__$1 = state_35038;
if(cljs.core.truth_(inst_34982)){
var statearr_35076_35120 = state_35038__$1;
(statearr_35076_35120[(1)] = (18));

} else {
var statearr_35077_35121 = state_35038__$1;
(statearr_35077_35121[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (26))){
var inst_35008 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35038__$1 = state_35038;
if(cljs.core.truth_(inst_35008)){
var statearr_35078_35122 = state_35038__$1;
(statearr_35078_35122[(1)] = (30));

} else {
var statearr_35079_35123 = state_35038__$1;
(statearr_35079_35123[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (16))){
var inst_34974 = (state_35038[(2)]);
var inst_34975 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34976 = figwheel.client.heads_up.display_exception.call(null,inst_34975);
var state_35038__$1 = (function (){var statearr_35080 = state_35038;
(statearr_35080[(13)] = inst_34974);

return statearr_35080;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35038__$1,(17),inst_34976);
} else {
if((state_val_35039 === (30))){
var inst_35010 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35011 = figwheel.client.heads_up.display_warning.call(null,inst_35010);
var state_35038__$1 = state_35038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35038__$1,(33),inst_35011);
} else {
if((state_val_35039 === (10))){
var inst_34968 = (state_35038[(2)]);
var state_35038__$1 = state_35038;
var statearr_35081_35124 = state_35038__$1;
(statearr_35081_35124[(2)] = inst_34968);

(statearr_35081_35124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (18))){
var inst_34984 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34985 = figwheel.client.heads_up.display_exception.call(null,inst_34984);
var state_35038__$1 = state_35038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35038__$1,(21),inst_34985);
} else {
if((state_val_35039 === (37))){
var inst_35021 = (state_35038[(2)]);
var state_35038__$1 = state_35038;
var statearr_35082_35125 = state_35038__$1;
(statearr_35082_35125[(2)] = inst_35021);

(statearr_35082_35125[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35039 === (8))){
var inst_34960 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35038__$1 = state_35038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35038__$1,(11),inst_34960);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27046__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26934__auto__,c__27046__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26935__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26935__auto____0 = (function (){
var statearr_35086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35086[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26935__auto__);

(statearr_35086[(1)] = (1));

return statearr_35086;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26935__auto____1 = (function (state_35038){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_35038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e35087){if((e35087 instanceof Object)){
var ex__26938__auto__ = e35087;
var statearr_35088_35126 = state_35038;
(statearr_35088_35126[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35127 = state_35038;
state_35038 = G__35127;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26935__auto__ = function(state_35038){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26935__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26935__auto____1.call(this,state_35038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26935__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26935__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto__,msg_hist,msg_names,msg))
})();
var state__27048__auto__ = (function (){var statearr_35089 = f__27047__auto__.call(null);
(statearr_35089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto__);

return statearr_35089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto__,msg_hist,msg_names,msg))
);

return c__27046__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27046__auto___35190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto___35190,ch){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto___35190,ch){
return (function (state_35173){
var state_val_35174 = (state_35173[(1)]);
if((state_val_35174 === (1))){
var state_35173__$1 = state_35173;
var statearr_35175_35191 = state_35173__$1;
(statearr_35175_35191[(2)] = null);

(statearr_35175_35191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35174 === (2))){
var state_35173__$1 = state_35173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35173__$1,(4),ch);
} else {
if((state_val_35174 === (3))){
var inst_35171 = (state_35173[(2)]);
var state_35173__$1 = state_35173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35173__$1,inst_35171);
} else {
if((state_val_35174 === (4))){
var inst_35161 = (state_35173[(7)]);
var inst_35161__$1 = (state_35173[(2)]);
var state_35173__$1 = (function (){var statearr_35176 = state_35173;
(statearr_35176[(7)] = inst_35161__$1);

return statearr_35176;
})();
if(cljs.core.truth_(inst_35161__$1)){
var statearr_35177_35192 = state_35173__$1;
(statearr_35177_35192[(1)] = (5));

} else {
var statearr_35178_35193 = state_35173__$1;
(statearr_35178_35193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35174 === (5))){
var inst_35161 = (state_35173[(7)]);
var inst_35163 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35161);
var state_35173__$1 = state_35173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35173__$1,(8),inst_35163);
} else {
if((state_val_35174 === (6))){
var state_35173__$1 = state_35173;
var statearr_35179_35194 = state_35173__$1;
(statearr_35179_35194[(2)] = null);

(statearr_35179_35194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35174 === (7))){
var inst_35169 = (state_35173[(2)]);
var state_35173__$1 = state_35173;
var statearr_35180_35195 = state_35173__$1;
(statearr_35180_35195[(2)] = inst_35169);

(statearr_35180_35195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35174 === (8))){
var inst_35165 = (state_35173[(2)]);
var state_35173__$1 = (function (){var statearr_35181 = state_35173;
(statearr_35181[(8)] = inst_35165);

return statearr_35181;
})();
var statearr_35182_35196 = state_35173__$1;
(statearr_35182_35196[(2)] = null);

(statearr_35182_35196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__27046__auto___35190,ch))
;
return ((function (switch__26934__auto__,c__27046__auto___35190,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26935__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26935__auto____0 = (function (){
var statearr_35186 = [null,null,null,null,null,null,null,null,null];
(statearr_35186[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26935__auto__);

(statearr_35186[(1)] = (1));

return statearr_35186;
});
var figwheel$client$heads_up_plugin_$_state_machine__26935__auto____1 = (function (state_35173){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_35173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e35187){if((e35187 instanceof Object)){
var ex__26938__auto__ = e35187;
var statearr_35188_35197 = state_35173;
(statearr_35188_35197[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35198 = state_35173;
state_35173 = G__35198;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26935__auto__ = function(state_35173){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26935__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26935__auto____1.call(this,state_35173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26935__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26935__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto___35190,ch))
})();
var state__27048__auto__ = (function (){var statearr_35189 = f__27047__auto__.call(null);
(statearr_35189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___35190);

return statearr_35189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto___35190,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto__){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto__){
return (function (state_35219){
var state_val_35220 = (state_35219[(1)]);
if((state_val_35220 === (1))){
var inst_35214 = cljs.core.async.timeout.call(null,(3000));
var state_35219__$1 = state_35219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35219__$1,(2),inst_35214);
} else {
if((state_val_35220 === (2))){
var inst_35216 = (state_35219[(2)]);
var inst_35217 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35219__$1 = (function (){var statearr_35221 = state_35219;
(statearr_35221[(7)] = inst_35216);

return statearr_35221;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35219__$1,inst_35217);
} else {
return null;
}
}
});})(c__27046__auto__))
;
return ((function (switch__26934__auto__,c__27046__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26935__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26935__auto____0 = (function (){
var statearr_35225 = [null,null,null,null,null,null,null,null];
(statearr_35225[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26935__auto__);

(statearr_35225[(1)] = (1));

return statearr_35225;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26935__auto____1 = (function (state_35219){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_35219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e35226){if((e35226 instanceof Object)){
var ex__26938__auto__ = e35226;
var statearr_35227_35229 = state_35219;
(statearr_35227_35229[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35230 = state_35219;
state_35219 = G__35230;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26935__auto__ = function(state_35219){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26935__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26935__auto____1.call(this,state_35219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26935__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26935__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto__))
})();
var state__27048__auto__ = (function (){var statearr_35228 = f__27047__auto__.call(null);
(statearr_35228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto__);

return statearr_35228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto__))
);

return c__27046__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35253){
var state_val_35254 = (state_35253[(1)]);
if((state_val_35254 === (1))){
var inst_35247 = cljs.core.async.timeout.call(null,(2000));
var state_35253__$1 = state_35253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35253__$1,(2),inst_35247);
} else {
if((state_val_35254 === (2))){
var inst_35249 = (state_35253[(2)]);
var inst_35250 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35251 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35250);
var state_35253__$1 = (function (){var statearr_35255 = state_35253;
(statearr_35255[(7)] = inst_35249);

return statearr_35255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35253__$1,inst_35251);
} else {
return null;
}
}
});})(c__27046__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26934__auto__,c__27046__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26935__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26935__auto____0 = (function (){
var statearr_35259 = [null,null,null,null,null,null,null,null];
(statearr_35259[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26935__auto__);

(statearr_35259[(1)] = (1));

return statearr_35259;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26935__auto____1 = (function (state_35253){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_35253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e35260){if((e35260 instanceof Object)){
var ex__26938__auto__ = e35260;
var statearr_35261_35263 = state_35253;
(statearr_35261_35263[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35264 = state_35253;
state_35253 = G__35264;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26935__auto__ = function(state_35253){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26935__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26935__auto____1.call(this,state_35253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26935__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26935__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27048__auto__ = (function (){var statearr_35262 = f__27047__auto__.call(null);
(statearr_35262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto__);

return statearr_35262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto__,figwheel_version,temp__4657__auto__))
);

return c__27046__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35265){
var map__35269 = p__35265;
var map__35269__$1 = ((((!((map__35269 == null)))?((((map__35269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35269):map__35269);
var file = cljs.core.get.call(null,map__35269__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35269__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35269__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35271 = "";
var G__35271__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35271),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35271);
var G__35271__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35271__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35271__$1);
if(cljs.core.truth_((function (){var and__24860__auto__ = line;
if(cljs.core.truth_(and__24860__auto__)){
return column;
} else {
return and__24860__auto__;
}
})())){
return [cljs.core.str(G__35271__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35271__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35272){
var map__35279 = p__35272;
var map__35279__$1 = ((((!((map__35279 == null)))?((((map__35279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35279):map__35279);
var ed = map__35279__$1;
var formatted_exception = cljs.core.get.call(null,map__35279__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35279__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35279__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35281_35285 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35282_35286 = null;
var count__35283_35287 = (0);
var i__35284_35288 = (0);
while(true){
if((i__35284_35288 < count__35283_35287)){
var msg_35289 = cljs.core._nth.call(null,chunk__35282_35286,i__35284_35288);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35289);

var G__35290 = seq__35281_35285;
var G__35291 = chunk__35282_35286;
var G__35292 = count__35283_35287;
var G__35293 = (i__35284_35288 + (1));
seq__35281_35285 = G__35290;
chunk__35282_35286 = G__35291;
count__35283_35287 = G__35292;
i__35284_35288 = G__35293;
continue;
} else {
var temp__4657__auto___35294 = cljs.core.seq.call(null,seq__35281_35285);
if(temp__4657__auto___35294){
var seq__35281_35295__$1 = temp__4657__auto___35294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35281_35295__$1)){
var c__25683__auto___35296 = cljs.core.chunk_first.call(null,seq__35281_35295__$1);
var G__35297 = cljs.core.chunk_rest.call(null,seq__35281_35295__$1);
var G__35298 = c__25683__auto___35296;
var G__35299 = cljs.core.count.call(null,c__25683__auto___35296);
var G__35300 = (0);
seq__35281_35285 = G__35297;
chunk__35282_35286 = G__35298;
count__35283_35287 = G__35299;
i__35284_35288 = G__35300;
continue;
} else {
var msg_35301 = cljs.core.first.call(null,seq__35281_35295__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35301);

var G__35302 = cljs.core.next.call(null,seq__35281_35295__$1);
var G__35303 = null;
var G__35304 = (0);
var G__35305 = (0);
seq__35281_35285 = G__35302;
chunk__35282_35286 = G__35303;
count__35283_35287 = G__35304;
i__35284_35288 = G__35305;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35306){
var map__35309 = p__35306;
var map__35309__$1 = ((((!((map__35309 == null)))?((((map__35309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35309):map__35309);
var w = map__35309__$1;
var message = cljs.core.get.call(null,map__35309__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24860__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24860__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24860__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35321 = cljs.core.seq.call(null,plugins);
var chunk__35322 = null;
var count__35323 = (0);
var i__35324 = (0);
while(true){
if((i__35324 < count__35323)){
var vec__35325 = cljs.core._nth.call(null,chunk__35322,i__35324);
var k = cljs.core.nth.call(null,vec__35325,(0),null);
var plugin = cljs.core.nth.call(null,vec__35325,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35331 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35321,chunk__35322,count__35323,i__35324,pl_35331,vec__35325,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35331.call(null,msg_hist);
});})(seq__35321,chunk__35322,count__35323,i__35324,pl_35331,vec__35325,k,plugin))
);
} else {
}

var G__35332 = seq__35321;
var G__35333 = chunk__35322;
var G__35334 = count__35323;
var G__35335 = (i__35324 + (1));
seq__35321 = G__35332;
chunk__35322 = G__35333;
count__35323 = G__35334;
i__35324 = G__35335;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35321);
if(temp__4657__auto__){
var seq__35321__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35321__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__35321__$1);
var G__35336 = cljs.core.chunk_rest.call(null,seq__35321__$1);
var G__35337 = c__25683__auto__;
var G__35338 = cljs.core.count.call(null,c__25683__auto__);
var G__35339 = (0);
seq__35321 = G__35336;
chunk__35322 = G__35337;
count__35323 = G__35338;
i__35324 = G__35339;
continue;
} else {
var vec__35328 = cljs.core.first.call(null,seq__35321__$1);
var k = cljs.core.nth.call(null,vec__35328,(0),null);
var plugin = cljs.core.nth.call(null,vec__35328,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35340 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35321,chunk__35322,count__35323,i__35324,pl_35340,vec__35328,k,plugin,seq__35321__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35340.call(null,msg_hist);
});})(seq__35321,chunk__35322,count__35323,i__35324,pl_35340,vec__35328,k,plugin,seq__35321__$1,temp__4657__auto__))
);
} else {
}

var G__35341 = cljs.core.next.call(null,seq__35321__$1);
var G__35342 = null;
var G__35343 = (0);
var G__35344 = (0);
seq__35321 = G__35341;
chunk__35322 = G__35342;
count__35323 = G__35343;
i__35324 = G__35344;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args35345 = [];
var len__25947__auto___35352 = arguments.length;
var i__25948__auto___35353 = (0);
while(true){
if((i__25948__auto___35353 < len__25947__auto___35352)){
args35345.push((arguments[i__25948__auto___35353]));

var G__35354 = (i__25948__auto___35353 + (1));
i__25948__auto___35353 = G__35354;
continue;
} else {
}
break;
}

var G__35347 = args35345.length;
switch (G__35347) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35345.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35348_35356 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35349_35357 = null;
var count__35350_35358 = (0);
var i__35351_35359 = (0);
while(true){
if((i__35351_35359 < count__35350_35358)){
var msg_35360 = cljs.core._nth.call(null,chunk__35349_35357,i__35351_35359);
figwheel.client.socket.handle_incoming_message.call(null,msg_35360);

var G__35361 = seq__35348_35356;
var G__35362 = chunk__35349_35357;
var G__35363 = count__35350_35358;
var G__35364 = (i__35351_35359 + (1));
seq__35348_35356 = G__35361;
chunk__35349_35357 = G__35362;
count__35350_35358 = G__35363;
i__35351_35359 = G__35364;
continue;
} else {
var temp__4657__auto___35365 = cljs.core.seq.call(null,seq__35348_35356);
if(temp__4657__auto___35365){
var seq__35348_35366__$1 = temp__4657__auto___35365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35348_35366__$1)){
var c__25683__auto___35367 = cljs.core.chunk_first.call(null,seq__35348_35366__$1);
var G__35368 = cljs.core.chunk_rest.call(null,seq__35348_35366__$1);
var G__35369 = c__25683__auto___35367;
var G__35370 = cljs.core.count.call(null,c__25683__auto___35367);
var G__35371 = (0);
seq__35348_35356 = G__35368;
chunk__35349_35357 = G__35369;
count__35350_35358 = G__35370;
i__35351_35359 = G__35371;
continue;
} else {
var msg_35372 = cljs.core.first.call(null,seq__35348_35366__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35372);

var G__35373 = cljs.core.next.call(null,seq__35348_35366__$1);
var G__35374 = null;
var G__35375 = (0);
var G__35376 = (0);
seq__35348_35356 = G__35373;
chunk__35349_35357 = G__35374;
count__35350_35358 = G__35375;
i__35351_35359 = G__35376;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25954__auto__ = [];
var len__25947__auto___35381 = arguments.length;
var i__25948__auto___35382 = (0);
while(true){
if((i__25948__auto___35382 < len__25947__auto___35381)){
args__25954__auto__.push((arguments[i__25948__auto___35382]));

var G__35383 = (i__25948__auto___35382 + (1));
i__25948__auto___35382 = G__35383;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35378){
var map__35379 = p__35378;
var map__35379__$1 = ((((!((map__35379 == null)))?((((map__35379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35379):map__35379);
var opts = map__35379__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35377){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35377));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35385){if((e35385 instanceof Error)){
var e = e35385;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35385;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35389){
var map__35390 = p__35389;
var map__35390__$1 = ((((!((map__35390 == null)))?((((map__35390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35390):map__35390);
var msg_name = cljs.core.get.call(null,map__35390__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1486440326331