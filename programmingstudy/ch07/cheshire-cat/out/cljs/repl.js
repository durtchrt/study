// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__9521){
var map__9546 = p__9521;
var map__9546__$1 = ((((!((map__9546 == null)))?((((map__9546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9546):map__9546);
var m = map__9546__$1;
var n = cljs.core.get.call(null,map__9546__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__9546__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9548_9570 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9549_9571 = null;
var count__9550_9572 = (0);
var i__9551_9573 = (0);
while(true){
if((i__9551_9573 < count__9550_9572)){
var f_9574 = cljs.core._nth.call(null,chunk__9549_9571,i__9551_9573);
cljs.core.println.call(null,"  ",f_9574);

var G__9575 = seq__9548_9570;
var G__9576 = chunk__9549_9571;
var G__9577 = count__9550_9572;
var G__9578 = (i__9551_9573 + (1));
seq__9548_9570 = G__9575;
chunk__9549_9571 = G__9576;
count__9550_9572 = G__9577;
i__9551_9573 = G__9578;
continue;
} else {
var temp__4657__auto___9579 = cljs.core.seq.call(null,seq__9548_9570);
if(temp__4657__auto___9579){
var seq__9548_9580__$1 = temp__4657__auto___9579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9548_9580__$1)){
var c__7996__auto___9581 = cljs.core.chunk_first.call(null,seq__9548_9580__$1);
var G__9582 = cljs.core.chunk_rest.call(null,seq__9548_9580__$1);
var G__9583 = c__7996__auto___9581;
var G__9584 = cljs.core.count.call(null,c__7996__auto___9581);
var G__9585 = (0);
seq__9548_9570 = G__9582;
chunk__9549_9571 = G__9583;
count__9550_9572 = G__9584;
i__9551_9573 = G__9585;
continue;
} else {
var f_9586 = cljs.core.first.call(null,seq__9548_9580__$1);
cljs.core.println.call(null,"  ",f_9586);

var G__9587 = cljs.core.next.call(null,seq__9548_9580__$1);
var G__9588 = null;
var G__9589 = (0);
var G__9590 = (0);
seq__9548_9570 = G__9587;
chunk__9549_9571 = G__9588;
count__9550_9572 = G__9589;
i__9551_9573 = G__9590;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9591 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7182__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7182__auto__)){
return or__7182__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9591);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9591)))?cljs.core.second.call(null,arglists_9591):arglists_9591));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9552_9592 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9553_9593 = null;
var count__9554_9594 = (0);
var i__9555_9595 = (0);
while(true){
if((i__9555_9595 < count__9554_9594)){
var vec__9556_9596 = cljs.core._nth.call(null,chunk__9553_9593,i__9555_9595);
var name_9597 = cljs.core.nth.call(null,vec__9556_9596,(0),null);
var map__9559_9598 = cljs.core.nth.call(null,vec__9556_9596,(1),null);
var map__9559_9599__$1 = ((((!((map__9559_9598 == null)))?((((map__9559_9598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9559_9598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9559_9598):map__9559_9598);
var doc_9600 = cljs.core.get.call(null,map__9559_9599__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9601 = cljs.core.get.call(null,map__9559_9599__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9597);

cljs.core.println.call(null," ",arglists_9601);

if(cljs.core.truth_(doc_9600)){
cljs.core.println.call(null," ",doc_9600);
} else {
}

var G__9602 = seq__9552_9592;
var G__9603 = chunk__9553_9593;
var G__9604 = count__9554_9594;
var G__9605 = (i__9555_9595 + (1));
seq__9552_9592 = G__9602;
chunk__9553_9593 = G__9603;
count__9554_9594 = G__9604;
i__9555_9595 = G__9605;
continue;
} else {
var temp__4657__auto___9606 = cljs.core.seq.call(null,seq__9552_9592);
if(temp__4657__auto___9606){
var seq__9552_9607__$1 = temp__4657__auto___9606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9552_9607__$1)){
var c__7996__auto___9608 = cljs.core.chunk_first.call(null,seq__9552_9607__$1);
var G__9609 = cljs.core.chunk_rest.call(null,seq__9552_9607__$1);
var G__9610 = c__7996__auto___9608;
var G__9611 = cljs.core.count.call(null,c__7996__auto___9608);
var G__9612 = (0);
seq__9552_9592 = G__9609;
chunk__9553_9593 = G__9610;
count__9554_9594 = G__9611;
i__9555_9595 = G__9612;
continue;
} else {
var vec__9561_9613 = cljs.core.first.call(null,seq__9552_9607__$1);
var name_9614 = cljs.core.nth.call(null,vec__9561_9613,(0),null);
var map__9564_9615 = cljs.core.nth.call(null,vec__9561_9613,(1),null);
var map__9564_9616__$1 = ((((!((map__9564_9615 == null)))?((((map__9564_9615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9564_9615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9564_9615):map__9564_9615);
var doc_9617 = cljs.core.get.call(null,map__9564_9616__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9618 = cljs.core.get.call(null,map__9564_9616__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9614);

cljs.core.println.call(null," ",arglists_9618);

if(cljs.core.truth_(doc_9617)){
cljs.core.println.call(null," ",doc_9617);
} else {
}

var G__9619 = cljs.core.next.call(null,seq__9552_9607__$1);
var G__9620 = null;
var G__9621 = (0);
var G__9622 = (0);
seq__9552_9592 = G__9619;
chunk__9553_9593 = G__9620;
count__9554_9594 = G__9621;
i__9555_9595 = G__9622;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__9566 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__9567 = null;
var count__9568 = (0);
var i__9569 = (0);
while(true){
if((i__9569 < count__9568)){
var role = cljs.core._nth.call(null,chunk__9567,i__9569);
var temp__4657__auto___9623__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___9623__$1)){
var spec_9624 = temp__4657__auto___9623__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_9624));
} else {
}

var G__9625 = seq__9566;
var G__9626 = chunk__9567;
var G__9627 = count__9568;
var G__9628 = (i__9569 + (1));
seq__9566 = G__9625;
chunk__9567 = G__9626;
count__9568 = G__9627;
i__9569 = G__9628;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__9566);
if(temp__4657__auto____$1){
var seq__9566__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9566__$1)){
var c__7996__auto__ = cljs.core.chunk_first.call(null,seq__9566__$1);
var G__9629 = cljs.core.chunk_rest.call(null,seq__9566__$1);
var G__9630 = c__7996__auto__;
var G__9631 = cljs.core.count.call(null,c__7996__auto__);
var G__9632 = (0);
seq__9566 = G__9629;
chunk__9567 = G__9630;
count__9568 = G__9631;
i__9569 = G__9632;
continue;
} else {
var role = cljs.core.first.call(null,seq__9566__$1);
var temp__4657__auto___9633__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___9633__$2)){
var spec_9634 = temp__4657__auto___9633__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_9634));
} else {
}

var G__9635 = cljs.core.next.call(null,seq__9566__$1);
var G__9636 = null;
var G__9637 = (0);
var G__9638 = (0);
seq__9566 = G__9635;
chunk__9567 = G__9636;
count__9568 = G__9637;
i__9569 = G__9638;
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

//# sourceMappingURL=repl.js.map