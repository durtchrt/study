// Compiled by ClojureScript 1.9.229 {}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__39854){
var map__39857 = p__39854;
var map__39857__$1 = ((((!((map__39857 == null)))?((((map__39857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39857):map__39857);
var m = map__39857__$1;
var interceptors = cljs.core.get.call(null,map__39857__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(!((ov === nv))){
var temp__4655__auto__ = hipo.hiccup.listener_name__GT_event_name.call(null,cljs.core.name.call(null,sok));
if(cljs.core.truth_(temp__4655__auto__)){
var en = temp__4655__auto__;
if(!((cljs.core.map_QMARK_.call(null,ov)) && (cljs.core.map_QMARK_.call(null,nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv))))){
var b__39779__auto__ = ((function (en,temp__4655__auto__,map__39857,map__39857__$1,m,interceptors){
return (function (){
var hn = [cljs.core.str("hipo_listener_"),cljs.core.str(en)].join('');
var temp__4655__auto___39859__$1 = (el[hn]);
if(cljs.core.truth_(temp__4655__auto___39859__$1)){
var l_39860 = temp__4655__auto___39859__$1;
el.removeEventListener(en,l_39860);
} else {
}

var temp__4657__auto__ = (function (){var or__24872__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(nv);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return nv;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var nv__$1 = temp__4657__auto__;
el.addEventListener(en,nv__$1);

return (el[hn] = nv__$1);
} else {
return null;
}
});})(en,temp__4655__auto__,map__39857,map__39857__$1,m,interceptors))
;
var v__39780__auto__ = interceptors;
if((cljs.core.not.call(null,v__39780__auto__)) || (cljs.core.empty_QMARK_.call(null,v__39780__auto__))){
return b__39779__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__39779__auto__,v__39780__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
} else {
return null;
}
} else {
var b__39779__auto__ = ((function (temp__4655__auto__,map__39857,map__39857__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_.call(null,el,m,ns,tag,sok,ov,nv);
});})(temp__4655__auto__,map__39857,map__39857__$1,m,interceptors))
;
var v__39780__auto__ = interceptors;
if((cljs.core.not.call(null,v__39780__auto__)) || (cljs.core.empty_QMARK_.call(null,v__39780__auto__))){
return b__39779__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__39779__auto__,v__39780__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
}
} else {
return null;
}
});
hipo.interpreter.append_children_BANG_ = (function hipo$interpreter$append_children_BANG_(el,v,m){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

var v__$1 = hipo.hiccup.flatten_children.call(null,v);
while(true){
if(cljs.core.empty_QMARK_.call(null,v__$1)){
return null;
} else {
var temp__4655__auto___39861 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___39861)){
var h_39862 = temp__4655__auto___39861;
el.appendChild(hipo.interpreter.create_child.call(null,h_39862,m));
} else {
}

var G__39863 = cljs.core.rest.call(null,v__$1);
v__$1 = G__39863;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element.call(null,ns,tag);
var seq__39874_39884 = cljs.core.seq.call(null,attrs);
var chunk__39875_39885 = null;
var count__39876_39886 = (0);
var i__39877_39887 = (0);
while(true){
if((i__39877_39887 < count__39876_39886)){
var vec__39878_39888 = cljs.core._nth.call(null,chunk__39875_39885,i__39877_39887);
var sok_39889 = cljs.core.nth.call(null,vec__39878_39888,(0),null);
var v_39890 = cljs.core.nth.call(null,vec__39878_39888,(1),null);
if(cljs.core.truth_(v_39890)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_39889,null,v_39890,m);
} else {
}

var G__39891 = seq__39874_39884;
var G__39892 = chunk__39875_39885;
var G__39893 = count__39876_39886;
var G__39894 = (i__39877_39887 + (1));
seq__39874_39884 = G__39891;
chunk__39875_39885 = G__39892;
count__39876_39886 = G__39893;
i__39877_39887 = G__39894;
continue;
} else {
var temp__4657__auto___39895 = cljs.core.seq.call(null,seq__39874_39884);
if(temp__4657__auto___39895){
var seq__39874_39896__$1 = temp__4657__auto___39895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39874_39896__$1)){
var c__25683__auto___39897 = cljs.core.chunk_first.call(null,seq__39874_39896__$1);
var G__39898 = cljs.core.chunk_rest.call(null,seq__39874_39896__$1);
var G__39899 = c__25683__auto___39897;
var G__39900 = cljs.core.count.call(null,c__25683__auto___39897);
var G__39901 = (0);
seq__39874_39884 = G__39898;
chunk__39875_39885 = G__39899;
count__39876_39886 = G__39900;
i__39877_39887 = G__39901;
continue;
} else {
var vec__39881_39902 = cljs.core.first.call(null,seq__39874_39896__$1);
var sok_39903 = cljs.core.nth.call(null,vec__39881_39902,(0),null);
var v_39904 = cljs.core.nth.call(null,vec__39881_39902,(1),null);
if(cljs.core.truth_(v_39904)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_39903,null,v_39904,m);
} else {
}

var G__39905 = cljs.core.next.call(null,seq__39874_39896__$1);
var G__39906 = null;
var G__39907 = (0);
var G__39908 = (0);
seq__39874_39884 = G__39905;
chunk__39875_39885 = G__39906;
count__39876_39886 = G__39907;
i__39877_39887 = G__39908;
continue;
}
} else {
}
}
break;
}

return el;
});
hipo.interpreter.create_element = (function hipo$interpreter$create_element(ns,tag,attrs,m){
var temp__4655__auto__ = new cljs.core.Keyword(null,"create-element-fn","create-element-fn",827380427).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,ns,tag,attrs,m);
} else {
return hipo.interpreter.default_create_element.call(null,ns,tag,attrs,m);
}
});
hipo.interpreter.create_vector = (function hipo$interpreter$create_vector(h,m){
if(cljs.core.vector_QMARK_.call(null,h)){
} else {
throw (new Error("Assert failed: (vector? h)"));
}

var key = hipo.hiccup.keyns.call(null,h);
var tag = hipo.hiccup.tag.call(null,h);
var attrs = hipo.hiccup.attributes.call(null,h);
var children = hipo.hiccup.children.call(null,h);
var el = hipo.interpreter.create_element.call(null,hipo.hiccup.key__GT_namespace.call(null,key,m),tag,attrs,m);
if(cljs.core.truth_(children)){
hipo.interpreter.append_children_BANG_.call(null,el,children,m);
} else {
}

return el;
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o,m){
if(cljs.core.truth_((function (){var or__24872__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.vector_QMARK_.call(null,o);
}
})())){
} else {
throw (new Error("Assert failed: (or (hic/literal? o) (vector? o))"));
}

if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,o))){
return document.createTextNode(o);
} else {
return hipo.interpreter.create_vector.call(null,o,m);
}
});
hipo.interpreter.append_to_parent = (function hipo$interpreter$append_to_parent(el,o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
return hipo.interpreter.append_children_BANG_.call(null,el,cljs.core.vec.call(null,o),m);
} else {
if(!((o == null))){
return el.appendChild(hipo.interpreter.create_child.call(null,o,m));
} else {
return null;
}
}
});
hipo.interpreter.create = (function hipo$interpreter$create(o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
var f = document.createDocumentFragment();
hipo.interpreter.append_children_BANG_.call(null,f,cljs.core.vec.call(null,o),m);

return f;
} else {
if(!((o == null))){
return hipo.interpreter.create_child.call(null,o,m);
} else {
return null;
}
}
});
hipo.interpreter.reconciliate_attributes_BANG_ = (function hipo$interpreter$reconciliate_attributes_BANG_(el,ns,tag,om,nm,m){
var seq__39925_39941 = cljs.core.seq.call(null,nm);
var chunk__39927_39942 = null;
var count__39928_39943 = (0);
var i__39929_39944 = (0);
while(true){
if((i__39929_39944 < count__39928_39943)){
var vec__39931_39945 = cljs.core._nth.call(null,chunk__39927_39942,i__39929_39944);
var sok_39946 = cljs.core.nth.call(null,vec__39931_39945,(0),null);
var nv_39947 = cljs.core.nth.call(null,vec__39931_39945,(1),null);
var ov_39948 = cljs.core.get.call(null,om,sok_39946);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_39946,ov_39948,nv_39947,m);

var G__39949 = seq__39925_39941;
var G__39950 = chunk__39927_39942;
var G__39951 = count__39928_39943;
var G__39952 = (i__39929_39944 + (1));
seq__39925_39941 = G__39949;
chunk__39927_39942 = G__39950;
count__39928_39943 = G__39951;
i__39929_39944 = G__39952;
continue;
} else {
var temp__4657__auto___39953 = cljs.core.seq.call(null,seq__39925_39941);
if(temp__4657__auto___39953){
var seq__39925_39954__$1 = temp__4657__auto___39953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39925_39954__$1)){
var c__25683__auto___39955 = cljs.core.chunk_first.call(null,seq__39925_39954__$1);
var G__39956 = cljs.core.chunk_rest.call(null,seq__39925_39954__$1);
var G__39957 = c__25683__auto___39955;
var G__39958 = cljs.core.count.call(null,c__25683__auto___39955);
var G__39959 = (0);
seq__39925_39941 = G__39956;
chunk__39927_39942 = G__39957;
count__39928_39943 = G__39958;
i__39929_39944 = G__39959;
continue;
} else {
var vec__39934_39960 = cljs.core.first.call(null,seq__39925_39954__$1);
var sok_39961 = cljs.core.nth.call(null,vec__39934_39960,(0),null);
var nv_39962 = cljs.core.nth.call(null,vec__39934_39960,(1),null);
var ov_39963 = cljs.core.get.call(null,om,sok_39961);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_39961,ov_39963,nv_39962,m);

var G__39964 = cljs.core.next.call(null,seq__39925_39954__$1);
var G__39965 = null;
var G__39966 = (0);
var G__39967 = (0);
seq__39925_39941 = G__39964;
chunk__39927_39942 = G__39965;
count__39928_39943 = G__39966;
i__39929_39944 = G__39967;
continue;
}
} else {
}
}
break;
}

var seq__39937 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__39938 = null;
var count__39939 = (0);
var i__39940 = (0);
while(true){
if((i__39940 < count__39939)){
var sok = cljs.core._nth.call(null,chunk__39938,i__39940);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);

var G__39968 = seq__39937;
var G__39969 = chunk__39938;
var G__39970 = count__39939;
var G__39971 = (i__39940 + (1));
seq__39937 = G__39968;
chunk__39938 = G__39969;
count__39939 = G__39970;
i__39940 = G__39971;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39937);
if(temp__4657__auto__){
var seq__39937__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39937__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__39937__$1);
var G__39972 = cljs.core.chunk_rest.call(null,seq__39937__$1);
var G__39973 = c__25683__auto__;
var G__39974 = cljs.core.count.call(null,c__25683__auto__);
var G__39975 = (0);
seq__39937 = G__39972;
chunk__39938 = G__39973;
count__39939 = G__39974;
i__39940 = G__39975;
continue;
} else {
var sok = cljs.core.first.call(null,seq__39937__$1);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);

var G__39976 = cljs.core.next.call(null,seq__39937__$1);
var G__39977 = null;
var G__39978 = (0);
var G__39979 = (0);
seq__39937 = G__39976;
chunk__39938 = G__39977;
count__39939 = G__39978;
i__39940 = G__39979;
continue;
}
} else {
return null;
}
}
break;
}
});
hipo.interpreter.child_key = (function hipo$interpreter$child_key(h){
return new cljs.core.Keyword("hipo","key","hipo/key",-1519246363).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,h));
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25652__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__39984(s__39985){
return (new cljs.core.LazySeq(null,(function (){
var s__39985__$1 = s__39985;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39985__$1);
if(temp__4657__auto__){
var s__39985__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39985__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__39985__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__39987 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__39986 = (0);
while(true){
if((i__39986 < size__25651__auto__)){
var ih = cljs.core._nth.call(null,c__25650__auto__,i__39986);
cljs.core.chunk_append.call(null,b__39987,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__39988 = (i__39986 + (1));
i__39986 = G__39988;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39987),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__39984.call(null,cljs.core.chunk_rest.call(null,s__39985__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39987),null);
}
} else {
var ih = cljs.core.first.call(null,s__39985__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__39984.call(null,cljs.core.rest.call(null,s__39985__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__25652__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__25652__auto__))
,v));
})());
});
/**
 * Reconciliate a vector of children based on their associated key.
 */
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__39989){
var map__40014 = p__39989;
var map__40014__$1 = ((((!((map__40014 == null)))?((((map__40014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40014):map__40014);
var m = map__40014__$1;
var interceptors = cljs.core.get.call(null,map__40014__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om = hipo.interpreter.keyed_children__GT_indexed_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__40016_40038 = cljs.core.seq.call(null,nm);
var chunk__40017_40039 = null;
var count__40018_40040 = (0);
var i__40019_40041 = (0);
while(true){
if((i__40019_40041 < count__40018_40040)){
var vec__40020_40042 = cljs.core._nth.call(null,chunk__40017_40039,i__40019_40041);
var i_40043 = cljs.core.nth.call(null,vec__40020_40042,(0),null);
var vec__40023_40044 = cljs.core.nth.call(null,vec__40020_40042,(1),null);
var ii_40045 = cljs.core.nth.call(null,vec__40023_40044,(0),null);
var h_40046 = cljs.core.nth.call(null,vec__40023_40044,(1),null);
var temp__4655__auto___40047 = cljs.core.get.call(null,om,i_40043);
if(cljs.core.truth_(temp__4655__auto___40047)){
var vec__40026_40048 = temp__4655__auto___40047;
var iii_40049 = cljs.core.nth.call(null,vec__40026_40048,(0),null);
var oh_40050 = cljs.core.nth.call(null,vec__40026_40048,(1),null);
var cel_40051 = cljs.core.nth.call(null,cs,iii_40049);
if((ii_40045 === iii_40049)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_40051,oh_40050,h_40046,m);
} else {
var b__39779__auto___40052 = ((function (seq__40016_40038,chunk__40017_40039,count__40018_40040,i__40019_40041,cel_40051,vec__40026_40048,iii_40049,oh_40050,temp__4655__auto___40047,vec__40020_40042,i_40043,vec__40023_40044,ii_40045,h_40046,om,nm,cs,map__40014,map__40014__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_40051);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_40050,h_40046,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_40045,ncel);
});})(seq__40016_40038,chunk__40017_40039,count__40018_40040,i__40019_40041,cel_40051,vec__40026_40048,iii_40049,oh_40050,temp__4655__auto___40047,vec__40020_40042,i_40043,vec__40023_40044,ii_40045,h_40046,om,nm,cs,map__40014,map__40014__$1,m,interceptors))
;
var v__39780__auto___40053 = interceptors;
if((cljs.core.not.call(null,v__39780__auto___40053)) || (cljs.core.empty_QMARK_.call(null,v__39780__auto___40053))){
b__39779__auto___40052.call(null);
} else {
hipo.interceptor.call.call(null,b__39779__auto___40052,v__39780__auto___40053,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_40046,new cljs.core.Keyword(null,"index","index",-1531685915),ii_40045], null));
}
}
} else {
var b__39779__auto___40054 = ((function (seq__40016_40038,chunk__40017_40039,count__40018_40040,i__40019_40041,temp__4655__auto___40047,vec__40020_40042,i_40043,vec__40023_40044,ii_40045,h_40046,om,nm,cs,map__40014,map__40014__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_40045,hipo.interpreter.create_child.call(null,h_40046,m));
});})(seq__40016_40038,chunk__40017_40039,count__40018_40040,i__40019_40041,temp__4655__auto___40047,vec__40020_40042,i_40043,vec__40023_40044,ii_40045,h_40046,om,nm,cs,map__40014,map__40014__$1,m,interceptors))
;
var v__39780__auto___40055 = interceptors;
if((cljs.core.not.call(null,v__39780__auto___40055)) || (cljs.core.empty_QMARK_.call(null,v__39780__auto___40055))){
b__39779__auto___40054.call(null);
} else {
hipo.interceptor.call.call(null,b__39779__auto___40054,v__39780__auto___40055,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_40046,new cljs.core.Keyword(null,"index","index",-1531685915),ii_40045], null));
}
}

var G__40056 = seq__40016_40038;
var G__40057 = chunk__40017_40039;
var G__40058 = count__40018_40040;
var G__40059 = (i__40019_40041 + (1));
seq__40016_40038 = G__40056;
chunk__40017_40039 = G__40057;
count__40018_40040 = G__40058;
i__40019_40041 = G__40059;
continue;
} else {
var temp__4657__auto___40060 = cljs.core.seq.call(null,seq__40016_40038);
if(temp__4657__auto___40060){
var seq__40016_40061__$1 = temp__4657__auto___40060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40016_40061__$1)){
var c__25683__auto___40062 = cljs.core.chunk_first.call(null,seq__40016_40061__$1);
var G__40063 = cljs.core.chunk_rest.call(null,seq__40016_40061__$1);
var G__40064 = c__25683__auto___40062;
var G__40065 = cljs.core.count.call(null,c__25683__auto___40062);
var G__40066 = (0);
seq__40016_40038 = G__40063;
chunk__40017_40039 = G__40064;
count__40018_40040 = G__40065;
i__40019_40041 = G__40066;
continue;
} else {
var vec__40029_40067 = cljs.core.first.call(null,seq__40016_40061__$1);
var i_40068 = cljs.core.nth.call(null,vec__40029_40067,(0),null);
var vec__40032_40069 = cljs.core.nth.call(null,vec__40029_40067,(1),null);
var ii_40070 = cljs.core.nth.call(null,vec__40032_40069,(0),null);
var h_40071 = cljs.core.nth.call(null,vec__40032_40069,(1),null);
var temp__4655__auto___40072 = cljs.core.get.call(null,om,i_40068);
if(cljs.core.truth_(temp__4655__auto___40072)){
var vec__40035_40073 = temp__4655__auto___40072;
var iii_40074 = cljs.core.nth.call(null,vec__40035_40073,(0),null);
var oh_40075 = cljs.core.nth.call(null,vec__40035_40073,(1),null);
var cel_40076 = cljs.core.nth.call(null,cs,iii_40074);
if((ii_40070 === iii_40074)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_40076,oh_40075,h_40071,m);
} else {
var b__39779__auto___40077 = ((function (seq__40016_40038,chunk__40017_40039,count__40018_40040,i__40019_40041,cel_40076,vec__40035_40073,iii_40074,oh_40075,temp__4655__auto___40072,vec__40029_40067,i_40068,vec__40032_40069,ii_40070,h_40071,seq__40016_40061__$1,temp__4657__auto___40060,om,nm,cs,map__40014,map__40014__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_40076);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_40075,h_40071,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_40070,ncel);
});})(seq__40016_40038,chunk__40017_40039,count__40018_40040,i__40019_40041,cel_40076,vec__40035_40073,iii_40074,oh_40075,temp__4655__auto___40072,vec__40029_40067,i_40068,vec__40032_40069,ii_40070,h_40071,seq__40016_40061__$1,temp__4657__auto___40060,om,nm,cs,map__40014,map__40014__$1,m,interceptors))
;
var v__39780__auto___40078 = interceptors;
if((cljs.core.not.call(null,v__39780__auto___40078)) || (cljs.core.empty_QMARK_.call(null,v__39780__auto___40078))){
b__39779__auto___40077.call(null);
} else {
hipo.interceptor.call.call(null,b__39779__auto___40077,v__39780__auto___40078,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_40071,new cljs.core.Keyword(null,"index","index",-1531685915),ii_40070], null));
}
}
} else {
var b__39779__auto___40079 = ((function (seq__40016_40038,chunk__40017_40039,count__40018_40040,i__40019_40041,temp__4655__auto___40072,vec__40029_40067,i_40068,vec__40032_40069,ii_40070,h_40071,seq__40016_40061__$1,temp__4657__auto___40060,om,nm,cs,map__40014,map__40014__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_40070,hipo.interpreter.create_child.call(null,h_40071,m));
});})(seq__40016_40038,chunk__40017_40039,count__40018_40040,i__40019_40041,temp__4655__auto___40072,vec__40029_40067,i_40068,vec__40032_40069,ii_40070,h_40071,seq__40016_40061__$1,temp__4657__auto___40060,om,nm,cs,map__40014,map__40014__$1,m,interceptors))
;
var v__39780__auto___40080 = interceptors;
if((cljs.core.not.call(null,v__39780__auto___40080)) || (cljs.core.empty_QMARK_.call(null,v__39780__auto___40080))){
b__39779__auto___40079.call(null);
} else {
hipo.interceptor.call.call(null,b__39779__auto___40079,v__39780__auto___40080,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_40071,new cljs.core.Keyword(null,"index","index",-1531685915),ii_40070], null));
}
}

var G__40081 = cljs.core.next.call(null,seq__40016_40061__$1);
var G__40082 = null;
var G__40083 = (0);
var G__40084 = (0);
seq__40016_40038 = G__40081;
chunk__40017_40039 = G__40082;
count__40018_40040 = G__40083;
i__40019_40041 = G__40084;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
if((d > (0))){
var b__39779__auto__ = ((function (d,om,nm,cs,map__40014,map__40014__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(d,om,nm,cs,map__40014,map__40014__$1,m,interceptors))
;
var v__39780__auto__ = interceptors;
if((cljs.core.not.call(null,v__39780__auto__)) || (cljs.core.empty_QMARK_.call(null,v__39780__auto__))){
return b__39779__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__39779__auto__,v__39780__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__40085){
var map__40088 = p__40085;
var map__40088__$1 = ((((!((map__40088 == null)))?((((map__40088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40088):map__40088);
var m = map__40088__$1;
var interceptors = cljs.core.get.call(null,map__40088__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count.call(null,och);
var nc = cljs.core.count.call(null,nch);
var d = (oc - nc);
if((d > (0))){
var b__39779__auto___40090 = ((function (oc,nc,d,map__40088,map__40088__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(oc,nc,d,map__40088,map__40088__$1,m,interceptors))
;
var v__39780__auto___40091 = interceptors;
if((cljs.core.not.call(null,v__39780__auto___40091)) || (cljs.core.empty_QMARK_.call(null,v__39780__auto___40091))){
b__39779__auto___40090.call(null);
} else {
hipo.interceptor.call.call(null,b__39779__auto___40090,v__39780__auto___40091,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__25787__auto___40092 = (function (){var x__25210__auto__ = oc;
var y__25211__auto__ = nc;
return ((x__25210__auto__ < y__25211__auto__) ? x__25210__auto__ : y__25211__auto__);
})();
var i_40093 = (0);
while(true){
if((i_40093 < n__25787__auto___40092)){
var ov_40094 = cljs.core.nth.call(null,och,i_40093);
var nv_40095 = cljs.core.nth.call(null,nch,i_40093);
if(!(((ov_40094 == null)) && ((nv_40095 == null)))){
if((ov_40094 == null)){
var b__39779__auto___40096 = ((function (i_40093,ov_40094,nv_40095,n__25787__auto___40092,oc,nc,d,map__40088,map__40088__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,i_40093,hipo.interpreter.create_child.call(null,nv_40095,m));
});})(i_40093,ov_40094,nv_40095,n__25787__auto___40092,oc,nc,d,map__40088,map__40088__$1,m,interceptors))
;
var v__39780__auto___40097 = interceptors;
if((cljs.core.not.call(null,v__39780__auto___40097)) || (cljs.core.empty_QMARK_.call(null,v__39780__auto___40097))){
b__39779__auto___40096.call(null);
} else {
hipo.interceptor.call.call(null,b__39779__auto___40096,v__39780__auto___40097,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_40095,new cljs.core.Keyword(null,"index","index",-1531685915),i_40093], null));
}
} else {
if((nv_40095 == null)){
var b__39779__auto___40098 = ((function (i_40093,ov_40094,nv_40095,n__25787__auto___40092,oc,nc,d,map__40088,map__40088__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_.call(null,el,i_40093);
});})(i_40093,ov_40094,nv_40095,n__25787__auto___40092,oc,nc,d,map__40088,map__40088__$1,m,interceptors))
;
var v__39780__auto___40099 = interceptors;
if((cljs.core.not.call(null,v__39780__auto___40099)) || (cljs.core.empty_QMARK_.call(null,v__39780__auto___40099))){
b__39779__auto___40098.call(null);
} else {
hipo.interceptor.call.call(null,b__39779__auto___40098,v__39780__auto___40099,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_40093], null));
}
} else {
var temp__4655__auto___40100 = hipo.dom.child.call(null,el,i_40093);
if(cljs.core.truth_(temp__4655__auto___40100)){
var cel_40101 = temp__4655__auto___40100;
hipo.interpreter.reconciliate_BANG_.call(null,cel_40101,ov_40094,nv_40095,m);
} else {
}

}
}
} else {
}

var G__40102 = (i_40093 + (1));
i_40093 = G__40102;
continue;
} else {
}
break;
}

if((d < (0))){
if(((-1) === d)){
var temp__4655__auto__ = cljs.core.nth.call(null,nch,oc);
if(cljs.core.truth_(temp__4655__auto__)){
var h = temp__4655__auto__;
var b__39779__auto__ = ((function (h,temp__4655__auto__,oc,nc,d,map__40088,map__40088__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child.call(null,h,m));
});})(h,temp__4655__auto__,oc,nc,d,map__40088,map__40088__$1,m,interceptors))
;
var v__39780__auto__ = interceptors;
if((cljs.core.not.call(null,v__39780__auto__)) || (cljs.core.empty_QMARK_.call(null,v__39780__auto__))){
return b__39779__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__39779__auto__,v__39780__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.call(null,nch,oc));
var b__39779__auto___40103 = ((function (f,cs,oc,nc,d,map__40088,map__40088__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs,m);
});})(f,cs,oc,nc,d,map__40088,map__40088__$1,m,interceptors))
;
var v__39780__auto___40104 = interceptors;
if((cljs.core.not.call(null,v__39780__auto___40104)) || (cljs.core.empty_QMARK_.call(null,v__39780__auto___40104))){
b__39779__auto___40103.call(null);
} else {
hipo.interceptor.call.call(null,b__39779__auto___40103,v__39780__auto___40104,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
}

return el.appendChild(f);
}
} else {
return null;
}
});
hipo.interpreter.keyed_children_QMARK_ = (function hipo$interpreter$keyed_children_QMARK_(v){
return !((hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,v,(0))) == null));
});
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__40105){
var map__40108 = p__40105;
var map__40108__$1 = ((((!((map__40108 == null)))?((((map__40108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40108):map__40108);
var m = map__40108__$1;
var interceptors = cljs.core.get.call(null,map__40108__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_.call(null,nch)){
if(!(cljs.core.empty_QMARK_.call(null,och))){
var b__39779__auto__ = ((function (map__40108,map__40108__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(map__40108,map__40108__$1,m,interceptors))
;
var v__39780__auto__ = interceptors;
if((cljs.core.not.call(null,v__39780__auto__)) || (cljs.core.empty_QMARK_.call(null,v__39780__auto__))){
return b__39779__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__39779__auto__,v__39780__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
}
} else {
return null;
}
} else {
if(cljs.core.truth_(hipo.interpreter.keyed_children_QMARK_.call(null,nch))){
return hipo.interpreter.reconciliate_keyed_children_BANG_.call(null,el,och,nch,m);
} else {
return hipo.interpreter.reconciliate_non_keyed_children_BANG_.call(null,el,och,nch,m);
}
}
});
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__40110){
var map__40113 = p__40110;
var map__40113__$1 = ((((!((map__40113 == null)))?((((map__40113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40113):map__40113);
var m = map__40113__$1;
var interceptors = cljs.core.get.call(null,map__40113__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.vector_QMARK_.call(null,nh)){
} else {
throw (new Error("Assert failed: (vector? nh)"));
}

if(cljs.core.truth_((function (){var or__24872__auto__ = hipo.hiccup.literal_QMARK_.call(null,oh);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return !((hipo.hiccup.tag.call(null,nh) === hipo.hiccup.tag.call(null,oh)));
}
})())){
var nel = hipo.interpreter.create_child.call(null,nh,m);
var b__39779__auto__ = ((function (nel,map__40113,map__40113__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str("(.-parentElement el)")].join('')));
}

return hipo.dom.replace_BANG_.call(null,el,nel);
});})(nel,map__40113,map__40113__$1,m,interceptors))
;
var v__39780__auto__ = interceptors;
if((cljs.core.not.call(null,v__39780__auto__)) || (cljs.core.empty_QMARK_.call(null,v__39780__auto__))){
return b__39779__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__39779__auto__,v__39780__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om = hipo.hiccup.attributes.call(null,oh);
var nm = hipo.hiccup.attributes.call(null,nh);
var och = hipo.hiccup.children.call(null,oh);
var nch = hipo.hiccup.children.call(null,nh);
var b__39779__auto___40115 = ((function (om,nm,och,nch,map__40113,map__40113__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),m);
});})(om,nm,och,nch,map__40113,map__40113__$1,m,interceptors))
;
var v__39780__auto___40116 = interceptors;
if((cljs.core.not.call(null,v__39780__auto___40116)) || (cljs.core.empty_QMARK_.call(null,v__39780__auto___40116))){
b__39779__auto___40115.call(null);
} else {
hipo.interceptor.call.call(null,b__39779__auto___40115,v__39780__auto___40116,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_.call(null,el,hipo.hiccup.keyns.call(null,nh),hipo.hiccup.tag.call(null,nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__40117){
var map__40120 = p__40117;
var map__40120__$1 = ((((!((map__40120 == null)))?((((map__40120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40120):map__40120);
var m = map__40120__$1;
var interceptors = cljs.core.get.call(null,map__40120__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.truth_((function (){var or__24872__auto__ = cljs.core.vector_QMARK_.call(null,nh);
if(or__24872__auto__){
return or__24872__auto__;
} else {
return hipo.hiccup.literal_QMARK_.call(null,nh);
}
})())){
} else {
throw (new Error("Assert failed: (or (vector? nh) (hic/literal? nh))"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

var b__39779__auto__ = ((function (map__40120,map__40120__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,nh))){
if(!((oh === nh))){
var b__39779__auto__ = ((function (map__40120,map__40120__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str("(.-parentElement el)")].join('')));
}

return hipo.dom.replace_text_BANG_.call(null,el,[cljs.core.str(nh)].join(''));
});})(map__40120,map__40120__$1,m,interceptors))
;
var v__39780__auto__ = interceptors;
if((cljs.core.not.call(null,v__39780__auto__)) || (cljs.core.empty_QMARK_.call(null,v__39780__auto__))){
return b__39779__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__39779__auto__,v__39780__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_.call(null,el,oh,nh,m);
}
});})(map__40120,map__40120__$1,m,interceptors))
;
var v__39780__auto__ = interceptors;
if((cljs.core.not.call(null,v__39780__auto__)) || (cljs.core.empty_QMARK_.call(null,v__39780__auto__))){
return b__39779__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__39779__auto__,v__39780__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=interpreter.js.map?rel=1486441495598