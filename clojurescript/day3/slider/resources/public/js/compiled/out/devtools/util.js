// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.util');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('clojure.data');
goog.require('devtools.version');
goog.require('goog.userAgent');
goog.require('cljs.pprint');
goog.require('devtools.defaults');
goog.require('devtools.context');
devtools.util.lib_info_style = "color:black;font-weight:bold;";
devtools.util.reset_style = "color:black";
devtools.util.advanced_build_explanation_url = "https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-custom-formatters-do-not-work-for-advanced-builds";
devtools.util._STAR_custom_formatters_active_STAR_ = false;
devtools.util._STAR_console_open_STAR_ = false;
devtools.util._STAR_custom_formatters_warning_reported_STAR_ = false;
devtools.util.make_version_info = (function devtools$util$make_version_info(){
return [cljs.core.str("0.9.0")].join('');
});
devtools.util.make_lib_info = (function devtools$util$make_lib_info(){
return [cljs.core.str("CLJS DevTools "),cljs.core.str(devtools.util.make_version_info.call(null))].join('');
});
devtools.util.get_lib_info = (function devtools$util$get_lib_info(){
return devtools.util.make_lib_info.call(null);
});
devtools.util.get_node_info = (function devtools$util$get_node_info(root){
try{var process = goog.object.get(root,"process");
var version = goog.object.get(process,"version");
var platform = goog.object.get(process,"platform");
if(cljs.core.truth_((function (){var and__24860__auto__ = version;
if(cljs.core.truth_(and__24860__auto__)){
return platform;
} else {
return and__24860__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),version,new cljs.core.Keyword(null,"platform","platform",-1086422114),platform], null);
} else {
return null;
}
}catch (e37798){var _ = e37798;
return null;
}});
devtools.util.get_node_description = (function devtools$util$get_node_description(node_info){
return [cljs.core.str((function (){var or__24872__auto__ = new cljs.core.Keyword(null,"platform","platform",-1086422114).cljs$core$IFn$_invoke$arity$1(node_info);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return "?";
}
})()),cljs.core.str("/"),cljs.core.str((function (){var or__24872__auto__ = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(node_info);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return "?";
}
})())].join('');
});
devtools.util.in_node_context_QMARK_ = (function devtools$util$in_node_context_QMARK_(){
return cljs.core.some_QMARK_.call(null,devtools.util.get_node_info.call(null,devtools.context.get_root.call(null)));
});
devtools.util.get_js_context_description = (function devtools$util$get_js_context_description(){
var temp__4655__auto__ = devtools.util.get_node_info.call(null,devtools.context.get_root.call(null));
if(cljs.core.truth_(temp__4655__auto__)){
var node_info = temp__4655__auto__;
return [cljs.core.str("node/"),cljs.core.str(devtools.util.get_node_description.call(null,node_info))].join('');
} else {
var user_agent = goog.userAgent.getUserAgentString();
if(cljs.core.empty_QMARK_.call(null,user_agent)){
return "<unknown context>";
} else {
return user_agent;
}
}
});
devtools.util.unknown_feature_msg = (function devtools$util$unknown_feature_msg(feature,known_features,lib_info){
return [cljs.core.str("No such feature "),cljs.core.str(feature),cljs.core.str(" is currently available in "),cljs.core.str(lib_info),cljs.core.str(". "),cljs.core.str("The list of supported features is "),cljs.core.str(cljs.core.pr_str.call(null,known_features)),cljs.core.str(".")].join('');
});
devtools.util.feature_not_available_msg = (function devtools$util$feature_not_available_msg(feature){
return [cljs.core.str("Feature "),cljs.core.str(feature),cljs.core.str(" cannot be installed. "),cljs.core.str("Unsupported Javascript context: "),cljs.core.str(devtools.util.get_js_context_description.call(null)),cljs.core.str(".")].join('');
});
devtools.util.custom_formatters_not_active_msg = (function devtools$util$custom_formatters_not_active_msg(){
return [cljs.core.str("CLJS DevTools: some custom formatters were not rendered.\n"),cljs.core.str("https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-some-custom-formatters-were-not-rendered")].join('');
});
devtools.util.formatter_key = "devtoolsFormatters";
devtools.util.get_formatters_safe = (function devtools$util$get_formatters_safe(){
var formatters = (devtools.context.get_root.call(null)[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_.call(null,formatters)){
return formatters;
} else {
return [];
}
});
devtools.util.set_formatters_safe_BANG_ = (function devtools$util$set_formatters_safe_BANG_(new_formatters){
if(((new_formatters == null)) || (cljs.core.array_QMARK_.call(null,new_formatters))){
} else {
throw (new Error("Assert failed: (or (nil? new-formatters) (array? new-formatters))"));
}

return (devtools.context.get_root.call(null)[devtools.util.formatter_key] = ((cljs.core.empty_QMARK_.call(null,new_formatters))?null:new_formatters));
});
devtools.util.print_config_overrides_if_requested_BANG_ = (function devtools$util$print_config_overrides_if_requested_BANG_(msg){
if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"print-config-overrides","print-config-overrides",-274716965)))){
var diff = cljs.core.second.call(null,clojure.data.diff.call(null,devtools.defaults.prefs,devtools.prefs.get_prefs.call(null)));
if(!(cljs.core.empty_QMARK_.call(null,diff))){
return console.info(msg,(function (){var sb__25858__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_37801_37803 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_37802_37804 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_37801_37803,_STAR_print_fn_STAR_37802_37804,sb__25858__auto__,diff){
return (function (x__25859__auto__){
return sb__25858__auto__.append(x__25859__auto__);
});})(_STAR_print_newline_STAR_37801_37803,_STAR_print_fn_STAR_37802_37804,sb__25858__auto__,diff))
;

try{cljs.pprint.pprint.call(null,diff);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37802_37804;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37801_37803;
}
return [cljs.core.str(sb__25858__auto__)].join('');
})());
} else {
return null;
}
} else {
return null;
}
});

/**
* @constructor
*/
devtools.util.CustomFormattersDetector = (function (){
})

devtools.util.CustomFormattersDetector.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

devtools.util.CustomFormattersDetector.cljs$lang$type = true;

devtools.util.CustomFormattersDetector.cljs$lang$ctorStr = "devtools.util/CustomFormattersDetector";

devtools.util.CustomFormattersDetector.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"devtools.util/CustomFormattersDetector");
});

devtools.util.__GT_CustomFormattersDetector = (function devtools$util$__GT_CustomFormattersDetector(){
return (new devtools.util.CustomFormattersDetector());
});

devtools.util.make_detector = (function devtools$util$make_detector(){
var detector = (new devtools.util.CustomFormattersDetector());
(detector["header"] = ((function (detector){
return (function (_object,_config){
devtools.util._STAR_custom_formatters_active_STAR_ = true;

return null;
});})(detector))
);

(detector["hasBody"] = cljs.core.constantly.call(null,false));

(detector["body"] = cljs.core.constantly.call(null,null));

return detector;
});
devtools.util.install_detector_BANG_ = (function devtools$util$install_detector_BANG_(detector){
var formatters = devtools.util.get_formatters_safe.call(null);
formatters.push(detector);

return devtools.util.set_formatters_safe_BANG_.call(null,formatters);
});
devtools.util.uninstall_detector_BANG_ = (function devtools$util$uninstall_detector_BANG_(detector){
var current_formatters = (devtools.context.get_root.call(null)[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_.call(null,current_formatters)){
var new_formatters = current_formatters.filter(((function (current_formatters){
return (function (p1__37805_SHARP_){
return !(cljs.core._EQ_.call(null,detector,p1__37805_SHARP_));
});})(current_formatters))
);
return devtools.util.set_formatters_safe_BANG_.call(null,new_formatters);
} else {
return null;
}
});
devtools.util.check_custom_formatters_active_BANG_ = (function devtools$util$check_custom_formatters_active_BANG_(){
if(cljs.core.truth_((function (){var and__24860__auto__ = devtools.util._STAR_console_open_STAR_;
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core.not.call(null,devtools.util._STAR_custom_formatters_active_STAR_);
} else {
return and__24860__auto__;
}
})())){
if(cljs.core.truth_(devtools.util._STAR_custom_formatters_warning_reported_STAR_)){
return null;
} else {
devtools.util._STAR_custom_formatters_warning_reported_STAR_ = true;

return console.warn(devtools.util.custom_formatters_not_active_msg.call(null));
}
} else {
return null;
}
});
devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_ = (function devtools$util$uninstall_detector_and_check_custom_formatters_active_BANG_(detector){
devtools.util.uninstall_detector_BANG_.call(null,detector);

return devtools.util.check_custom_formatters_active_BANG_.call(null);
});
devtools.util.make_detection_printer = (function devtools$util$make_detection_printer(){
var f = (function (){
return null;
});
var G__37807_37808 = f;
var target__35430__auto___37809 = G__37807_37808;
if(cljs.core.truth_(target__35430__auto___37809)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("unable to locate object path "),cljs.core.str(null),cljs.core.str(" in "),cljs.core.str(G__37807_37808)].join('')),cljs.core.str("\n"),cljs.core.str("target__35430__auto__")].join('')));
}

goog.object.set(target__35430__auto___37809,cljs.core.last.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toString"], null)),((function (G__37807_37808,target__35430__auto___37809,f){
return (function (){
devtools.util._STAR_console_open_STAR_ = true;

setTimeout(devtools.util.check_custom_formatters_active_BANG_,(0));

return "";
});})(G__37807_37808,target__35430__auto___37809,f))
);


return f;
});
devtools.util.wrap_with_custom_formatter_detection_BANG_ = (function devtools$util$wrap_with_custom_formatter_detection_BANG_(f){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-detect-custom-formatters","dont-detect-custom-formatters",-29005804)))){
var detector = devtools.util.make_detector.call(null);
devtools.util.install_detector_BANG_.call(null,detector);

f.call(null,"%c%s","color:transparent",devtools.util.make_detection_printer.call(null));

return setTimeout(cljs.core.partial.call(null,devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_,detector),(0));
} else {
return f.call(null);
}
});
devtools.util.feature_for_display = (function devtools$util$feature_for_display(installed_features,feature){
var color = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),installed_features))?"color:#0000ff":"color:#ccc");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%c%s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,[cljs.core.str(feature)].join('')], null)], null);
});
devtools.util.feature_list_display = (function devtools$util$feature_list_display(installed_features,feature_groups){
var labels = cljs.core.map.call(null,cljs.core.partial.call(null,devtools.util.feature_for_display,installed_features),new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups));
var _STAR_ = ((function (labels){
return (function (accum,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.first.call(null,accum)),cljs.core.str(" "),cljs.core.str(cljs.core.first.call(null,val))].join(''),cljs.core.concat.call(null,cljs.core.second.call(null,accum),cljs.core.second.call(null,val))], null);
});})(labels))
;
return cljs.core.reduce.call(null,_STAR_,cljs.core.first.call(null,labels),cljs.core.rest.call(null,labels));
});
devtools.util.display_banner_BANG_ = (function devtools$util$display_banner_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___37817 = arguments.length;
var i__25948__auto___37818 = (0);
while(true){
if((i__25948__auto___37818 < len__25947__auto___37817)){
args__25954__auto__.push((arguments[i__25948__auto___37818]));

var G__37819 = (i__25948__auto___37818 + (1));
i__25948__auto___37818 = G__37819;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((3) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((3)),(0),null)):null);
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25955__auto__);
});

devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (installed_features,feature_groups,fmt,params){
var vec__37814 = devtools.util.feature_list_display.call(null,installed_features,feature_groups);
var fmt_str = cljs.core.nth.call(null,vec__37814,(0),null);
var fmt_params = cljs.core.nth.call(null,vec__37814,(1),null);
return devtools.util.wrap_with_custom_formatter_detection_BANG_.call(null,((function (vec__37814,fmt_str,fmt_params){
return (function() { 
var G__37820__delegate = function (add_fmt,add_args){
var items = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(fmt),cljs.core.str(" "),cljs.core.str(fmt_str),cljs.core.str(add_fmt)].join('')], null),params,fmt_params,add_args);
return console.info.apply(console,cljs.core.into_array.call(null,items));
};
var G__37820 = function (add_fmt,var_args){
var add_args = null;
if (arguments.length > 1) {
var G__37821__i = 0, G__37821__a = new Array(arguments.length -  1);
while (G__37821__i < G__37821__a.length) {G__37821__a[G__37821__i] = arguments[G__37821__i + 1]; ++G__37821__i;}
  add_args = new cljs.core.IndexedSeq(G__37821__a,0);
} 
return G__37820__delegate.call(this,add_fmt,add_args);};
G__37820.cljs$lang$maxFixedArity = 1;
G__37820.cljs$lang$applyTo = (function (arglist__37822){
var add_fmt = cljs.core.first(arglist__37822);
var add_args = cljs.core.rest(arglist__37822);
return G__37820__delegate(add_fmt,add_args);
});
G__37820.cljs$core$IFn$_invoke$arity$variadic = G__37820__delegate;
return G__37820;
})()
;})(vec__37814,fmt_str,fmt_params))
);
});

devtools.util.display_banner_BANG_.cljs$lang$maxFixedArity = (3);

devtools.util.display_banner_BANG_.cljs$lang$applyTo = (function (seq37810){
var G__37811 = cljs.core.first.call(null,seq37810);
var seq37810__$1 = cljs.core.next.call(null,seq37810);
var G__37812 = cljs.core.first.call(null,seq37810__$1);
var seq37810__$2 = cljs.core.next.call(null,seq37810__$1);
var G__37813 = cljs.core.first.call(null,seq37810__$2);
var seq37810__$3 = cljs.core.next.call(null,seq37810__$2);
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37811,G__37812,G__37813,seq37810__$3);
});

devtools.util.display_banner_if_needed_BANG_ = (function devtools$util$display_banner_if_needed_BANG_(features_to_install,feature_groups){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-display-banner","dont-display-banner",-1175550370)))){
var banner = [cljs.core.str("Installing %c%s%c and enabling features")].join('');
return devtools.util.display_banner_BANG_.call(null,features_to_install,feature_groups,banner,devtools.util.lib_info_style,devtools.util.get_lib_info.call(null),devtools.util.reset_style);
} else {
return devtools.util._STAR_custom_formatters_active_STAR_ = true;
}
});
devtools.util.report_unknown_features_BANG_ = (function devtools$util$report_unknown_features_BANG_(features,known_features){
var lib_info = devtools.util.get_lib_info.call(null);
var seq__37827 = cljs.core.seq.call(null,features);
var chunk__37828 = null;
var count__37829 = (0);
var i__37830 = (0);
while(true){
if((i__37830 < count__37829)){
var feature = cljs.core._nth.call(null,chunk__37828,i__37830);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),known_features))){
console.warn(devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}

var G__37831 = seq__37827;
var G__37832 = chunk__37828;
var G__37833 = count__37829;
var G__37834 = (i__37830 + (1));
seq__37827 = G__37831;
chunk__37828 = G__37832;
count__37829 = G__37833;
i__37830 = G__37834;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37827);
if(temp__4657__auto__){
var seq__37827__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37827__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__37827__$1);
var G__37835 = cljs.core.chunk_rest.call(null,seq__37827__$1);
var G__37836 = c__25683__auto__;
var G__37837 = cljs.core.count.call(null,c__25683__auto__);
var G__37838 = (0);
seq__37827 = G__37835;
chunk__37828 = G__37836;
count__37829 = G__37837;
i__37830 = G__37838;
continue;
} else {
var feature = cljs.core.first.call(null,seq__37827__$1);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),known_features))){
console.warn(devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}

var G__37839 = cljs.core.next.call(null,seq__37827__$1);
var G__37840 = null;
var G__37841 = (0);
var G__37842 = (0);
seq__37827 = G__37839;
chunk__37828 = G__37840;
count__37829 = G__37841;
i__37830 = G__37842;
continue;
}
} else {
return null;
}
}
break;
}
});
devtools.util.is_known_feature_QMARK_ = (function devtools$util$is_known_feature_QMARK_(known_features,feature){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),known_features));
});
devtools.util.convert_legacy_feature = (function devtools$util$convert_legacy_feature(feature){
var G__37844 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__37844) {
case "custom-formatters":
return new cljs.core.Keyword(null,"formatters","formatters",-1875637118);

break;
case "sanity-hints":
return new cljs.core.Keyword(null,"hints","hints",-991113151);

break;
default:
return feature;

}
});
devtools.util.convert_legacy_features = (function devtools$util$convert_legacy_features(features){
return cljs.core.map.call(null,devtools.util.convert_legacy_feature,features);
});
devtools.util.sanititze_features_BANG_ = (function devtools$util$sanititze_features_BANG_(features,feature_groups){
var known_features = new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups);
var features__$1 = devtools.util.convert_legacy_features.call(null,features);
devtools.util.report_unknown_features_BANG_.call(null,features__$1,known_features);

return cljs.core.filter.call(null,cljs.core.partial.call(null,devtools.util.is_known_feature_QMARK_,known_features),features__$1);
});
devtools.util.resolve_features_BANG_ = (function devtools$util$resolve_features_BANG_(features_desc,feature_groups){
var features = (cljs.core.truth_((function (){var and__24860__auto__ = (features_desc instanceof cljs.core.Keyword);
if(and__24860__auto__){
return features_desc.call(null,feature_groups);
} else {
return and__24860__auto__;
}
})())?features_desc.call(null,feature_groups):(((features_desc == null))?new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(feature_groups):((cljs.core.seqable_QMARK_.call(null,features_desc))?features_desc:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features_desc], null)
)));
return devtools.util.sanititze_features_BANG_.call(null,features,feature_groups);
});
devtools.util.under_advanced_build_QMARK_ = (function devtools$util$under_advanced_build_QMARK_(){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"disable-advanced-mode-check","disable-advanced-mode-check",-968346539)))){
return ((function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__35423__auto__ = temp__4657__auto__;
return goog.object.get(o__35423__auto__,"version");
} else {
return null;
}
})() == null);
} else {
return null;
}
});
devtools.util.display_advanced_build_warning_if_needed_BANG_ = (function devtools$util$display_advanced_build_warning_if_needed_BANG_(){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-display-advanced-build-warning","dont-display-advanced-build-warning",-91321563)))){
var banner = [cljs.core.str("%cNOT%c installing %c%s%c under advanced build. See "),cljs.core.str(devtools.util.advanced_build_explanation_url),cljs.core.str(".")].join('');
return console.warn(banner,"font-weight:bold",devtools.util.reset_style,devtools.util.lib_info_style,devtools.util.get_lib_info.call(null),devtools.util.reset_style);
} else {
return null;
}
});
devtools.util.install_feature_BANG_ = (function devtools$util$install_feature_BANG_(feature,features_to_install,available_fn,install_fn){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),features_to_install))){
if(cljs.core.truth_((function (){var or__24872__auto__ = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"bypass-availability-checks","bypass-availability-checks",1934691680));
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return available_fn.call(null,feature);
}
})())){
return install_fn.call(null);
} else {
return console.warn(devtools.util.feature_not_available_msg.call(null,feature));
}
} else {
return null;
}
});

//# sourceMappingURL=util.js.map?rel=1486526670992