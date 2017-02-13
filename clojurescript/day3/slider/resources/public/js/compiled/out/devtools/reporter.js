// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___38492 = arguments.length;
var i__25948__auto___38493 = (0);
while(true){
if((i__25948__auto___38493 < len__25947__auto___38492)){
args__25954__auto__.push((arguments[i__25948__auto___38493]));

var G__38494 = (i__25948__auto___38493 + (1));
i__25948__auto___38493 = G__38494;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__38487){
var vec__38488 = p__38487;
var context = cljs.core.nth.call(null,vec__38488,(0),null);
var footer = cljs.core.nth.call(null,vec__38488,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__24872__auto__ = e.message;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[cljs.core.str(" "),cljs.core.str(message)].join('')];
var context_msg = [cljs.core.str("In "),cljs.core.str(devtools.util.get_lib_info.call(null)),cljs.core.str((cljs.core.truth_(context)?[cljs.core.str(", "),cljs.core.str(context),cljs.core.str(".")].join(''):".")),cljs.core.str("\n\n")].join('');
var footer_msg = ((cljs.core.some_QMARK_.call(null,footer))?footer:[cljs.core.str("\n\n"),cljs.core.str("---\n"),cljs.core.str("Please report the issue here: "),cljs.core.str(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = goog.object.get(c,"groupCollapsed");
var log = goog.object.get(c,"log");
var group_end = goog.object.get(c,"groupEnd");
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e38491){var e__$1 = e38491;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq38485){
var G__38486 = cljs.core.first.call(null,seq38485);
var seq38485__$1 = cljs.core.next.call(null,seq38485);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38486,seq38485__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1486526671954