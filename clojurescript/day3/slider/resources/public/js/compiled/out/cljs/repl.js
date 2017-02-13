// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34116){
var map__34141 = p__34116;
var map__34141__$1 = ((((!((map__34141 == null)))?((((map__34141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34141):map__34141);
var m = map__34141__$1;
var n = cljs.core.get.call(null,map__34141__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34141__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34143_34165 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34144_34166 = null;
var count__34145_34167 = (0);
var i__34146_34168 = (0);
while(true){
if((i__34146_34168 < count__34145_34167)){
var f_34169 = cljs.core._nth.call(null,chunk__34144_34166,i__34146_34168);
cljs.core.println.call(null,"  ",f_34169);

var G__34170 = seq__34143_34165;
var G__34171 = chunk__34144_34166;
var G__34172 = count__34145_34167;
var G__34173 = (i__34146_34168 + (1));
seq__34143_34165 = G__34170;
chunk__34144_34166 = G__34171;
count__34145_34167 = G__34172;
i__34146_34168 = G__34173;
continue;
} else {
var temp__4657__auto___34174 = cljs.core.seq.call(null,seq__34143_34165);
if(temp__4657__auto___34174){
var seq__34143_34175__$1 = temp__4657__auto___34174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34143_34175__$1)){
var c__25683__auto___34176 = cljs.core.chunk_first.call(null,seq__34143_34175__$1);
var G__34177 = cljs.core.chunk_rest.call(null,seq__34143_34175__$1);
var G__34178 = c__25683__auto___34176;
var G__34179 = cljs.core.count.call(null,c__25683__auto___34176);
var G__34180 = (0);
seq__34143_34165 = G__34177;
chunk__34144_34166 = G__34178;
count__34145_34167 = G__34179;
i__34146_34168 = G__34180;
continue;
} else {
var f_34181 = cljs.core.first.call(null,seq__34143_34175__$1);
cljs.core.println.call(null,"  ",f_34181);

var G__34182 = cljs.core.next.call(null,seq__34143_34175__$1);
var G__34183 = null;
var G__34184 = (0);
var G__34185 = (0);
seq__34143_34165 = G__34182;
chunk__34144_34166 = G__34183;
count__34145_34167 = G__34184;
i__34146_34168 = G__34185;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34186 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24872__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34186);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34186)))?cljs.core.second.call(null,arglists_34186):arglists_34186));
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
var seq__34147_34187 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34148_34188 = null;
var count__34149_34189 = (0);
var i__34150_34190 = (0);
while(true){
if((i__34150_34190 < count__34149_34189)){
var vec__34151_34191 = cljs.core._nth.call(null,chunk__34148_34188,i__34150_34190);
var name_34192 = cljs.core.nth.call(null,vec__34151_34191,(0),null);
var map__34154_34193 = cljs.core.nth.call(null,vec__34151_34191,(1),null);
var map__34154_34194__$1 = ((((!((map__34154_34193 == null)))?((((map__34154_34193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34154_34193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34154_34193):map__34154_34193);
var doc_34195 = cljs.core.get.call(null,map__34154_34194__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34196 = cljs.core.get.call(null,map__34154_34194__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34192);

cljs.core.println.call(null," ",arglists_34196);

if(cljs.core.truth_(doc_34195)){
cljs.core.println.call(null," ",doc_34195);
} else {
}

var G__34197 = seq__34147_34187;
var G__34198 = chunk__34148_34188;
var G__34199 = count__34149_34189;
var G__34200 = (i__34150_34190 + (1));
seq__34147_34187 = G__34197;
chunk__34148_34188 = G__34198;
count__34149_34189 = G__34199;
i__34150_34190 = G__34200;
continue;
} else {
var temp__4657__auto___34201 = cljs.core.seq.call(null,seq__34147_34187);
if(temp__4657__auto___34201){
var seq__34147_34202__$1 = temp__4657__auto___34201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34147_34202__$1)){
var c__25683__auto___34203 = cljs.core.chunk_first.call(null,seq__34147_34202__$1);
var G__34204 = cljs.core.chunk_rest.call(null,seq__34147_34202__$1);
var G__34205 = c__25683__auto___34203;
var G__34206 = cljs.core.count.call(null,c__25683__auto___34203);
var G__34207 = (0);
seq__34147_34187 = G__34204;
chunk__34148_34188 = G__34205;
count__34149_34189 = G__34206;
i__34150_34190 = G__34207;
continue;
} else {
var vec__34156_34208 = cljs.core.first.call(null,seq__34147_34202__$1);
var name_34209 = cljs.core.nth.call(null,vec__34156_34208,(0),null);
var map__34159_34210 = cljs.core.nth.call(null,vec__34156_34208,(1),null);
var map__34159_34211__$1 = ((((!((map__34159_34210 == null)))?((((map__34159_34210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34159_34210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34159_34210):map__34159_34210);
var doc_34212 = cljs.core.get.call(null,map__34159_34211__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34213 = cljs.core.get.call(null,map__34159_34211__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34209);

cljs.core.println.call(null," ",arglists_34213);

if(cljs.core.truth_(doc_34212)){
cljs.core.println.call(null," ",doc_34212);
} else {
}

var G__34214 = cljs.core.next.call(null,seq__34147_34202__$1);
var G__34215 = null;
var G__34216 = (0);
var G__34217 = (0);
seq__34147_34187 = G__34214;
chunk__34148_34188 = G__34215;
count__34149_34189 = G__34216;
i__34150_34190 = G__34217;
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

var seq__34161 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34162 = null;
var count__34163 = (0);
var i__34164 = (0);
while(true){
if((i__34164 < count__34163)){
var role = cljs.core._nth.call(null,chunk__34162,i__34164);
var temp__4657__auto___34218__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34218__$1)){
var spec_34219 = temp__4657__auto___34218__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34219));
} else {
}

var G__34220 = seq__34161;
var G__34221 = chunk__34162;
var G__34222 = count__34163;
var G__34223 = (i__34164 + (1));
seq__34161 = G__34220;
chunk__34162 = G__34221;
count__34163 = G__34222;
i__34164 = G__34223;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__34161);
if(temp__4657__auto____$1){
var seq__34161__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34161__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__34161__$1);
var G__34224 = cljs.core.chunk_rest.call(null,seq__34161__$1);
var G__34225 = c__25683__auto__;
var G__34226 = cljs.core.count.call(null,c__25683__auto__);
var G__34227 = (0);
seq__34161 = G__34224;
chunk__34162 = G__34225;
count__34163 = G__34226;
i__34164 = G__34227;
continue;
} else {
var role = cljs.core.first.call(null,seq__34161__$1);
var temp__4657__auto___34228__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34228__$2)){
var spec_34229 = temp__4657__auto___34228__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34229));
} else {
}

var G__34230 = cljs.core.next.call(null,seq__34161__$1);
var G__34231 = null;
var G__34232 = (0);
var G__34233 = (0);
seq__34161 = G__34230;
chunk__34162 = G__34231;
count__34163 = G__34232;
i__34164 = G__34233;
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

//# sourceMappingURL=repl.js.map?rel=1486526667517