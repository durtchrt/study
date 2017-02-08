// Compiled by ClojureScript 1.9.229 {}
goog.provide('hipo.attribute');
goog.require('cljs.core');
goog.require('hipo.hiccup');
hipo.attribute.style_handler = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),"style"], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__39801_SHARP_,p2__39802_SHARP_,p3__39803_SHARP_,p4__39800_SHARP_){
var seq__39804 = cljs.core.seq.call(null,p4__39800_SHARP_);
var chunk__39805 = null;
var count__39806 = (0);
var i__39807 = (0);
while(true){
if((i__39807 < count__39806)){
var vec__39808 = cljs.core._nth.call(null,chunk__39805,i__39807);
var k = cljs.core.nth.call(null,vec__39808,(0),null);
var v = cljs.core.nth.call(null,vec__39808,(1),null);
(p1__39801_SHARP_["style"][cljs.core.name.call(null,k)] = v);

var G__39814 = seq__39804;
var G__39815 = chunk__39805;
var G__39816 = count__39806;
var G__39817 = (i__39807 + (1));
seq__39804 = G__39814;
chunk__39805 = G__39815;
count__39806 = G__39816;
i__39807 = G__39817;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39804);
if(temp__4657__auto__){
var seq__39804__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39804__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__39804__$1);
var G__39818 = cljs.core.chunk_rest.call(null,seq__39804__$1);
var G__39819 = c__25683__auto__;
var G__39820 = cljs.core.count.call(null,c__25683__auto__);
var G__39821 = (0);
seq__39804 = G__39818;
chunk__39805 = G__39819;
count__39806 = G__39820;
i__39807 = G__39821;
continue;
} else {
var vec__39811 = cljs.core.first.call(null,seq__39804__$1);
var k = cljs.core.nth.call(null,vec__39811,(0),null);
var v = cljs.core.nth.call(null,vec__39811,(1),null);
(p1__39801_SHARP_["style"][cljs.core.name.call(null,k)] = v);

var G__39822 = cljs.core.next.call(null,seq__39804__$1);
var G__39823 = null;
var G__39824 = (0);
var G__39825 = (0);
seq__39804 = G__39822;
chunk__39805 = G__39823;
count__39806 = G__39824;
i__39807 = G__39825;
continue;
}
} else {
return null;
}
}
break;
}
})], null);
hipo.attribute.property_name__GT_js_property_name = (function hipo$attribute$property_name__GT_js_property_name(n){
return n.replace("-","_");
});
hipo.attribute.set_property_value = (function hipo$attribute$set_property_value(el,k,v){
return (el[hipo.attribute.property_name__GT_js_property_name.call(null,cljs.core.name.call(null,k))] = v);
});
hipo.attribute.set_attribute_BANG_ = (function hipo$attribute$set_attribute_BANG_(el,k,v,m){
var temp__4655__auto__ = (((k instanceof cljs.core.Keyword))?hipo.hiccup.key__GT_namespace.call(null,cljs.core.namespace.call(null,k),m):null);
if(cljs.core.truth_(temp__4655__auto__)){
var nns = temp__4655__auto__;
return el.setAttributeNS(nns,cljs.core.name.call(null,k),v);
} else {
return el.setAttribute(cljs.core.name.call(null,k),v);
}
});
hipo.attribute.remove_attribute_BANG_ = (function hipo$attribute$remove_attribute_BANG_(el,k,m){
var temp__4655__auto__ = (((k instanceof cljs.core.Keyword))?hipo.hiccup.key__GT_namespace.call(null,cljs.core.namespace.call(null,k),m):null);
if(cljs.core.truth_(temp__4655__auto__)){
var nns = temp__4655__auto__;
return el.removeAttributeNS(nns,cljs.core.name.call(null,k));
} else {
return el.removeAttribute(cljs.core.name.call(null,k));
}
});
hipo.attribute.default_handler_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__39826_SHARP_,p2__39827_SHARP_,p3__39829_SHARP_,p4__39828_SHARP_){
return hipo.attribute.set_property_value.call(null,p1__39826_SHARP_,p2__39827_SHARP_,p4__39828_SHARP_);
})], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__39831_SHARP_,p2__39832_SHARP_,p3__39834_SHARP_,p4__39830_SHARP_,p5__39833_SHARP_){
if(cljs.core.truth_(p4__39830_SHARP_)){
return hipo.attribute.set_attribute_BANG_.call(null,p1__39831_SHARP_,p2__39832_SHARP_,p4__39830_SHARP_,p5__39833_SHARP_);
} else {
return hipo.attribute.remove_attribute_BANG_.call(null,p1__39831_SHARP_,p2__39832_SHARP_,p5__39833_SHARP_);
}
})], null)], null);
hipo.attribute.default_handlers = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),"svg",new cljs.core.Keyword(null,"attr","attr",-604132353),"class"], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attr","attr",-604132353)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"input",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["value",null,"checked",null], null), null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"input",new cljs.core.Keyword(null,"attr","attr",-604132353),"autofocus"], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__39836_SHARP_,p2__39837_SHARP_,p3__39838_SHARP_,p4__39835_SHARP_){
if(cljs.core.truth_(p4__39835_SHARP_)){
p1__39836_SHARP_.focus();

return p1__39836_SHARP_.setAttribute(p2__39837_SHARP_,p4__39835_SHARP_);
} else {
return null;
}
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"option",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["selected",null], null), null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"select",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["value",null,"selectIndex",null], null), null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"textarea",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["value",null], null), null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332)], null)], null);
hipo.attribute.matches_QMARK_ = (function hipo$attribute$matches_QMARK_(expr,s){
if(cljs.core.truth_(expr)){
if(cljs.core.set_QMARK_.call(null,expr)){
return cljs.core.contains_QMARK_.call(null,expr,s);
} else {
return cljs.core._EQ_.call(null,s,expr);

}
} else {
return true;
}
});
hipo.attribute.target_matches_QMARK_ = (function hipo$attribute$target_matches_QMARK_(m,ns,tag,attr){
var and__24860__auto__ = hipo.attribute.matches_QMARK_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m),ns);
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = hipo.attribute.matches_QMARK_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m),tag);
if(cljs.core.truth_(and__24860__auto____$1)){
return hipo.attribute.matches_QMARK_.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(m),attr);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
});
hipo.attribute.handler = (function hipo$attribute$handler(m,ns,tag,attr){
var v = cljs.core.concat.call(null,new cljs.core.Keyword(null,"attribute-handlers","attribute-handlers",855454691).cljs$core$IFn$_invoke$arity$1(m),hipo.attribute.default_handlers);
var h = cljs.core.some.call(null,((function (v){
return (function (p1__39839_SHARP_){
var t = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(p1__39839_SHARP_);
if(cljs.core.truth_(hipo.attribute.target_matches_QMARK_.call(null,t,ns,tag,cljs.core.name.call(null,attr)))){
return p1__39839_SHARP_;
} else {
return null;
}
});})(v))
,v);
if(cljs.core.contains_QMARK_.call(null,h,new cljs.core.Keyword(null,"type","type",1174270348))){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(h).call(null,hipo.attribute.default_handler_fns);
} else {
return h;
}
});
hipo.attribute.default_set_value_BANG_ = (function hipo$attribute$default_set_value_BANG_(el,attr,ov,nv,m){
if(cljs.core.truth_((function (){var or__24872__auto__ = hipo.hiccup.literal_QMARK_.call(null,ov);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return hipo.hiccup.literal_QMARK_.call(null,nv);
}
})())){
if(cljs.core.truth_(nv)){
return hipo.attribute.set_attribute_BANG_.call(null,el,attr,nv,m);
} else {
return hipo.attribute.remove_attribute_BANG_.call(null,el,attr,m);
}
} else {
return (el[attr] = hipo.attribute.set_property_value.call(null,el,attr,nv));
}
});
hipo.attribute.set_value_BANG_ = (function hipo$attribute$set_value_BANG_(el,m,ns,tag,attr,ov,nv){
var h = hipo.attribute.handler.call(null,m,ns,tag,attr);
var f = (function (){var or__24872__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(h);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return hipo.attribute.default_set_value_BANG_;
}
})();
return f.call(null,el,attr,ov,nv,m);
});

//# sourceMappingURL=attribute.js.map?rel=1486441495292