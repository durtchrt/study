// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34114){
var map__34139 = p__34114;
var map__34139__$1 = ((((!((map__34139 == null)))?((((map__34139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34139):map__34139);
var m = map__34139__$1;
var n = cljs.core.get.call(null,map__34139__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34139__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34141_34163 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34142_34164 = null;
var count__34143_34165 = (0);
var i__34144_34166 = (0);
while(true){
if((i__34144_34166 < count__34143_34165)){
var f_34167 = cljs.core._nth.call(null,chunk__34142_34164,i__34144_34166);
cljs.core.println.call(null,"  ",f_34167);

var G__34168 = seq__34141_34163;
var G__34169 = chunk__34142_34164;
var G__34170 = count__34143_34165;
var G__34171 = (i__34144_34166 + (1));
seq__34141_34163 = G__34168;
chunk__34142_34164 = G__34169;
count__34143_34165 = G__34170;
i__34144_34166 = G__34171;
continue;
} else {
var temp__4657__auto___34172 = cljs.core.seq.call(null,seq__34141_34163);
if(temp__4657__auto___34172){
var seq__34141_34173__$1 = temp__4657__auto___34172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34141_34173__$1)){
var c__25683__auto___34174 = cljs.core.chunk_first.call(null,seq__34141_34173__$1);
var G__34175 = cljs.core.chunk_rest.call(null,seq__34141_34173__$1);
var G__34176 = c__25683__auto___34174;
var G__34177 = cljs.core.count.call(null,c__25683__auto___34174);
var G__34178 = (0);
seq__34141_34163 = G__34175;
chunk__34142_34164 = G__34176;
count__34143_34165 = G__34177;
i__34144_34166 = G__34178;
continue;
} else {
var f_34179 = cljs.core.first.call(null,seq__34141_34173__$1);
cljs.core.println.call(null,"  ",f_34179);

var G__34180 = cljs.core.next.call(null,seq__34141_34173__$1);
var G__34181 = null;
var G__34182 = (0);
var G__34183 = (0);
seq__34141_34163 = G__34180;
chunk__34142_34164 = G__34181;
count__34143_34165 = G__34182;
i__34144_34166 = G__34183;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34184 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24872__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34184);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34184)))?cljs.core.second.call(null,arglists_34184):arglists_34184));
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
var seq__34145_34185 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34146_34186 = null;
var count__34147_34187 = (0);
var i__34148_34188 = (0);
while(true){
if((i__34148_34188 < count__34147_34187)){
var vec__34149_34189 = cljs.core._nth.call(null,chunk__34146_34186,i__34148_34188);
var name_34190 = cljs.core.nth.call(null,vec__34149_34189,(0),null);
var map__34152_34191 = cljs.core.nth.call(null,vec__34149_34189,(1),null);
var map__34152_34192__$1 = ((((!((map__34152_34191 == null)))?((((map__34152_34191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34152_34191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34152_34191):map__34152_34191);
var doc_34193 = cljs.core.get.call(null,map__34152_34192__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34194 = cljs.core.get.call(null,map__34152_34192__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34190);

cljs.core.println.call(null," ",arglists_34194);

if(cljs.core.truth_(doc_34193)){
cljs.core.println.call(null," ",doc_34193);
} else {
}

var G__34195 = seq__34145_34185;
var G__34196 = chunk__34146_34186;
var G__34197 = count__34147_34187;
var G__34198 = (i__34148_34188 + (1));
seq__34145_34185 = G__34195;
chunk__34146_34186 = G__34196;
count__34147_34187 = G__34197;
i__34148_34188 = G__34198;
continue;
} else {
var temp__4657__auto___34199 = cljs.core.seq.call(null,seq__34145_34185);
if(temp__4657__auto___34199){
var seq__34145_34200__$1 = temp__4657__auto___34199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34145_34200__$1)){
var c__25683__auto___34201 = cljs.core.chunk_first.call(null,seq__34145_34200__$1);
var G__34202 = cljs.core.chunk_rest.call(null,seq__34145_34200__$1);
var G__34203 = c__25683__auto___34201;
var G__34204 = cljs.core.count.call(null,c__25683__auto___34201);
var G__34205 = (0);
seq__34145_34185 = G__34202;
chunk__34146_34186 = G__34203;
count__34147_34187 = G__34204;
i__34148_34188 = G__34205;
continue;
} else {
var vec__34154_34206 = cljs.core.first.call(null,seq__34145_34200__$1);
var name_34207 = cljs.core.nth.call(null,vec__34154_34206,(0),null);
var map__34157_34208 = cljs.core.nth.call(null,vec__34154_34206,(1),null);
var map__34157_34209__$1 = ((((!((map__34157_34208 == null)))?((((map__34157_34208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34157_34208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34157_34208):map__34157_34208);
var doc_34210 = cljs.core.get.call(null,map__34157_34209__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34211 = cljs.core.get.call(null,map__34157_34209__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34207);

cljs.core.println.call(null," ",arglists_34211);

if(cljs.core.truth_(doc_34210)){
cljs.core.println.call(null," ",doc_34210);
} else {
}

var G__34212 = cljs.core.next.call(null,seq__34145_34200__$1);
var G__34213 = null;
var G__34214 = (0);
var G__34215 = (0);
seq__34145_34185 = G__34212;
chunk__34146_34186 = G__34213;
count__34147_34187 = G__34214;
i__34148_34188 = G__34215;
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

var seq__34159 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34160 = null;
var count__34161 = (0);
var i__34162 = (0);
while(true){
if((i__34162 < count__34161)){
var role = cljs.core._nth.call(null,chunk__34160,i__34162);
var temp__4657__auto___34216__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34216__$1)){
var spec_34217 = temp__4657__auto___34216__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34217));
} else {
}

var G__34218 = seq__34159;
var G__34219 = chunk__34160;
var G__34220 = count__34161;
var G__34221 = (i__34162 + (1));
seq__34159 = G__34218;
chunk__34160 = G__34219;
count__34161 = G__34220;
i__34162 = G__34221;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__34159);
if(temp__4657__auto____$1){
var seq__34159__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34159__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__34159__$1);
var G__34222 = cljs.core.chunk_rest.call(null,seq__34159__$1);
var G__34223 = c__25683__auto__;
var G__34224 = cljs.core.count.call(null,c__25683__auto__);
var G__34225 = (0);
seq__34159 = G__34222;
chunk__34160 = G__34223;
count__34161 = G__34224;
i__34162 = G__34225;
continue;
} else {
var role = cljs.core.first.call(null,seq__34159__$1);
var temp__4657__auto___34226__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34226__$2)){
var spec_34227 = temp__4657__auto___34226__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34227));
} else {
}

var G__34228 = cljs.core.next.call(null,seq__34159__$1);
var G__34229 = null;
var G__34230 = (0);
var G__34231 = (0);
seq__34159 = G__34228;
chunk__34160 = G__34229;
count__34161 = G__34230;
i__34162 = G__34231;
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

//# sourceMappingURL=repl.js.map?rel=1486525848997