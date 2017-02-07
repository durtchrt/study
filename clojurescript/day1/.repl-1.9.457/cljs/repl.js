// Compiled by ClojureScript 1.9.457 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__7042){
var map__7067 = p__7042;
var map__7067__$1 = ((((!((map__7067 == null)))?((((map__7067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7067.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7067):map__7067);
var m = map__7067__$1;
var n = cljs.core.get.call(null,map__7067__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__7067__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7069_7091 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7070_7092 = null;
var count__7071_7093 = (0);
var i__7072_7094 = (0);
while(true){
if((i__7072_7094 < count__7071_7093)){
var f_7095 = cljs.core._nth.call(null,chunk__7070_7092,i__7072_7094);
cljs.core.println.call(null,"  ",f_7095);

var G__7096 = seq__7069_7091;
var G__7097 = chunk__7070_7092;
var G__7098 = count__7071_7093;
var G__7099 = (i__7072_7094 + (1));
seq__7069_7091 = G__7096;
chunk__7070_7092 = G__7097;
count__7071_7093 = G__7098;
i__7072_7094 = G__7099;
continue;
} else {
var temp__4657__auto___7100 = cljs.core.seq.call(null,seq__7069_7091);
if(temp__4657__auto___7100){
var seq__7069_7101__$1 = temp__4657__auto___7100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7069_7101__$1)){
var c__3828__auto___7102 = cljs.core.chunk_first.call(null,seq__7069_7101__$1);
var G__7103 = cljs.core.chunk_rest.call(null,seq__7069_7101__$1);
var G__7104 = c__3828__auto___7102;
var G__7105 = cljs.core.count.call(null,c__3828__auto___7102);
var G__7106 = (0);
seq__7069_7091 = G__7103;
chunk__7070_7092 = G__7104;
count__7071_7093 = G__7105;
i__7072_7094 = G__7106;
continue;
} else {
var f_7107 = cljs.core.first.call(null,seq__7069_7101__$1);
cljs.core.println.call(null,"  ",f_7107);

var G__7108 = cljs.core.next.call(null,seq__7069_7101__$1);
var G__7109 = null;
var G__7110 = (0);
var G__7111 = (0);
seq__7069_7091 = G__7108;
chunk__7070_7092 = G__7109;
count__7071_7093 = G__7110;
i__7072_7094 = G__7111;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7112 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3441__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3441__auto__)){
return or__3441__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7112);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7112)))?cljs.core.second.call(null,arglists_7112):arglists_7112));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__7073_7113 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7074_7114 = null;
var count__7075_7115 = (0);
var i__7076_7116 = (0);
while(true){
if((i__7076_7116 < count__7075_7115)){
var vec__7077_7117 = cljs.core._nth.call(null,chunk__7074_7114,i__7076_7116);
var name_7118 = cljs.core.nth.call(null,vec__7077_7117,(0),null);
var map__7080_7119 = cljs.core.nth.call(null,vec__7077_7117,(1),null);
var map__7080_7120__$1 = ((((!((map__7080_7119 == null)))?((((map__7080_7119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7080_7119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7080_7119):map__7080_7119);
var doc_7121 = cljs.core.get.call(null,map__7080_7120__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7122 = cljs.core.get.call(null,map__7080_7120__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7118);

cljs.core.println.call(null," ",arglists_7122);

if(cljs.core.truth_(doc_7121)){
cljs.core.println.call(null," ",doc_7121);
} else {
}

var G__7123 = seq__7073_7113;
var G__7124 = chunk__7074_7114;
var G__7125 = count__7075_7115;
var G__7126 = (i__7076_7116 + (1));
seq__7073_7113 = G__7123;
chunk__7074_7114 = G__7124;
count__7075_7115 = G__7125;
i__7076_7116 = G__7126;
continue;
} else {
var temp__4657__auto___7127 = cljs.core.seq.call(null,seq__7073_7113);
if(temp__4657__auto___7127){
var seq__7073_7128__$1 = temp__4657__auto___7127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7073_7128__$1)){
var c__3828__auto___7129 = cljs.core.chunk_first.call(null,seq__7073_7128__$1);
var G__7130 = cljs.core.chunk_rest.call(null,seq__7073_7128__$1);
var G__7131 = c__3828__auto___7129;
var G__7132 = cljs.core.count.call(null,c__3828__auto___7129);
var G__7133 = (0);
seq__7073_7113 = G__7130;
chunk__7074_7114 = G__7131;
count__7075_7115 = G__7132;
i__7076_7116 = G__7133;
continue;
} else {
var vec__7082_7134 = cljs.core.first.call(null,seq__7073_7128__$1);
var name_7135 = cljs.core.nth.call(null,vec__7082_7134,(0),null);
var map__7085_7136 = cljs.core.nth.call(null,vec__7082_7134,(1),null);
var map__7085_7137__$1 = ((((!((map__7085_7136 == null)))?((((map__7085_7136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7085_7136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7085_7136):map__7085_7136);
var doc_7138 = cljs.core.get.call(null,map__7085_7137__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7139 = cljs.core.get.call(null,map__7085_7137__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7135);

cljs.core.println.call(null," ",arglists_7139);

if(cljs.core.truth_(doc_7138)){
cljs.core.println.call(null," ",doc_7138);
} else {
}

var G__7140 = cljs.core.next.call(null,seq__7073_7128__$1);
var G__7141 = null;
var G__7142 = (0);
var G__7143 = (0);
seq__7073_7113 = G__7140;
chunk__7074_7114 = G__7141;
count__7075_7115 = G__7142;
i__7076_7116 = G__7143;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__7087 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__7088 = null;
var count__7089 = (0);
var i__7090 = (0);
while(true){
if((i__7090 < count__7089)){
var role = cljs.core._nth.call(null,chunk__7088,i__7090);
var temp__4657__auto___7144__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___7144__$1)){
var spec_7145 = temp__4657__auto___7144__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_7145));
} else {
}

var G__7146 = seq__7087;
var G__7147 = chunk__7088;
var G__7148 = count__7089;
var G__7149 = (i__7090 + (1));
seq__7087 = G__7146;
chunk__7088 = G__7147;
count__7089 = G__7148;
i__7090 = G__7149;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__7087);
if(temp__4657__auto____$1){
var seq__7087__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7087__$1)){
var c__3828__auto__ = cljs.core.chunk_first.call(null,seq__7087__$1);
var G__7150 = cljs.core.chunk_rest.call(null,seq__7087__$1);
var G__7151 = c__3828__auto__;
var G__7152 = cljs.core.count.call(null,c__3828__auto__);
var G__7153 = (0);
seq__7087 = G__7150;
chunk__7088 = G__7151;
count__7089 = G__7152;
i__7090 = G__7153;
continue;
} else {
var role = cljs.core.first.call(null,seq__7087__$1);
var temp__4657__auto___7154__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___7154__$2)){
var spec_7155 = temp__4657__auto___7154__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_7155));
} else {
}

var G__7156 = cljs.core.next.call(null,seq__7087__$1);
var G__7157 = null;
var G__7158 = (0);
var G__7159 = (0);
seq__7087 = G__7156;
chunk__7088 = G__7157;
count__7089 = G__7158;
i__7090 = G__7159;
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
