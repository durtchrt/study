// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24872__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24872__auto__){
return or__24872__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24872__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31779_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31779_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31784 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31785 = null;
var count__31786 = (0);
var i__31787 = (0);
while(true){
if((i__31787 < count__31786)){
var n = cljs.core._nth.call(null,chunk__31785,i__31787);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31788 = seq__31784;
var G__31789 = chunk__31785;
var G__31790 = count__31786;
var G__31791 = (i__31787 + (1));
seq__31784 = G__31788;
chunk__31785 = G__31789;
count__31786 = G__31790;
i__31787 = G__31791;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31784);
if(temp__4657__auto__){
var seq__31784__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31784__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__31784__$1);
var G__31792 = cljs.core.chunk_rest.call(null,seq__31784__$1);
var G__31793 = c__25683__auto__;
var G__31794 = cljs.core.count.call(null,c__25683__auto__);
var G__31795 = (0);
seq__31784 = G__31792;
chunk__31785 = G__31793;
count__31786 = G__31794;
i__31787 = G__31795;
continue;
} else {
var n = cljs.core.first.call(null,seq__31784__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31796 = cljs.core.next.call(null,seq__31784__$1);
var G__31797 = null;
var G__31798 = (0);
var G__31799 = (0);
seq__31784 = G__31796;
chunk__31785 = G__31797;
count__31786 = G__31798;
i__31787 = G__31799;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31850_31861 = cljs.core.seq.call(null,deps);
var chunk__31851_31862 = null;
var count__31852_31863 = (0);
var i__31853_31864 = (0);
while(true){
if((i__31853_31864 < count__31852_31863)){
var dep_31865 = cljs.core._nth.call(null,chunk__31851_31862,i__31853_31864);
topo_sort_helper_STAR_.call(null,dep_31865,(depth + (1)),state);

var G__31866 = seq__31850_31861;
var G__31867 = chunk__31851_31862;
var G__31868 = count__31852_31863;
var G__31869 = (i__31853_31864 + (1));
seq__31850_31861 = G__31866;
chunk__31851_31862 = G__31867;
count__31852_31863 = G__31868;
i__31853_31864 = G__31869;
continue;
} else {
var temp__4657__auto___31870 = cljs.core.seq.call(null,seq__31850_31861);
if(temp__4657__auto___31870){
var seq__31850_31871__$1 = temp__4657__auto___31870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31850_31871__$1)){
var c__25683__auto___31872 = cljs.core.chunk_first.call(null,seq__31850_31871__$1);
var G__31873 = cljs.core.chunk_rest.call(null,seq__31850_31871__$1);
var G__31874 = c__25683__auto___31872;
var G__31875 = cljs.core.count.call(null,c__25683__auto___31872);
var G__31876 = (0);
seq__31850_31861 = G__31873;
chunk__31851_31862 = G__31874;
count__31852_31863 = G__31875;
i__31853_31864 = G__31876;
continue;
} else {
var dep_31877 = cljs.core.first.call(null,seq__31850_31871__$1);
topo_sort_helper_STAR_.call(null,dep_31877,(depth + (1)),state);

var G__31878 = cljs.core.next.call(null,seq__31850_31871__$1);
var G__31879 = null;
var G__31880 = (0);
var G__31881 = (0);
seq__31850_31861 = G__31878;
chunk__31851_31862 = G__31879;
count__31852_31863 = G__31880;
i__31853_31864 = G__31881;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31854){
var vec__31858 = p__31854;
var seq__31859 = cljs.core.seq.call(null,vec__31858);
var first__31860 = cljs.core.first.call(null,seq__31859);
var seq__31859__$1 = cljs.core.next.call(null,seq__31859);
var x = first__31860;
var xs = seq__31859__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31858,seq__31859,first__31860,seq__31859__$1,x,xs,get_deps__$1){
return (function (p1__31800_SHARP_){
return clojure.set.difference.call(null,p1__31800_SHARP_,x);
});})(vec__31858,seq__31859,first__31860,seq__31859__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31894 = cljs.core.seq.call(null,provides);
var chunk__31895 = null;
var count__31896 = (0);
var i__31897 = (0);
while(true){
if((i__31897 < count__31896)){
var prov = cljs.core._nth.call(null,chunk__31895,i__31897);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31898_31906 = cljs.core.seq.call(null,requires);
var chunk__31899_31907 = null;
var count__31900_31908 = (0);
var i__31901_31909 = (0);
while(true){
if((i__31901_31909 < count__31900_31908)){
var req_31910 = cljs.core._nth.call(null,chunk__31899_31907,i__31901_31909);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31910,prov);

var G__31911 = seq__31898_31906;
var G__31912 = chunk__31899_31907;
var G__31913 = count__31900_31908;
var G__31914 = (i__31901_31909 + (1));
seq__31898_31906 = G__31911;
chunk__31899_31907 = G__31912;
count__31900_31908 = G__31913;
i__31901_31909 = G__31914;
continue;
} else {
var temp__4657__auto___31915 = cljs.core.seq.call(null,seq__31898_31906);
if(temp__4657__auto___31915){
var seq__31898_31916__$1 = temp__4657__auto___31915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31898_31916__$1)){
var c__25683__auto___31917 = cljs.core.chunk_first.call(null,seq__31898_31916__$1);
var G__31918 = cljs.core.chunk_rest.call(null,seq__31898_31916__$1);
var G__31919 = c__25683__auto___31917;
var G__31920 = cljs.core.count.call(null,c__25683__auto___31917);
var G__31921 = (0);
seq__31898_31906 = G__31918;
chunk__31899_31907 = G__31919;
count__31900_31908 = G__31920;
i__31901_31909 = G__31921;
continue;
} else {
var req_31922 = cljs.core.first.call(null,seq__31898_31916__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31922,prov);

var G__31923 = cljs.core.next.call(null,seq__31898_31916__$1);
var G__31924 = null;
var G__31925 = (0);
var G__31926 = (0);
seq__31898_31906 = G__31923;
chunk__31899_31907 = G__31924;
count__31900_31908 = G__31925;
i__31901_31909 = G__31926;
continue;
}
} else {
}
}
break;
}

var G__31927 = seq__31894;
var G__31928 = chunk__31895;
var G__31929 = count__31896;
var G__31930 = (i__31897 + (1));
seq__31894 = G__31927;
chunk__31895 = G__31928;
count__31896 = G__31929;
i__31897 = G__31930;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31894);
if(temp__4657__auto__){
var seq__31894__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31894__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__31894__$1);
var G__31931 = cljs.core.chunk_rest.call(null,seq__31894__$1);
var G__31932 = c__25683__auto__;
var G__31933 = cljs.core.count.call(null,c__25683__auto__);
var G__31934 = (0);
seq__31894 = G__31931;
chunk__31895 = G__31932;
count__31896 = G__31933;
i__31897 = G__31934;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31894__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31902_31935 = cljs.core.seq.call(null,requires);
var chunk__31903_31936 = null;
var count__31904_31937 = (0);
var i__31905_31938 = (0);
while(true){
if((i__31905_31938 < count__31904_31937)){
var req_31939 = cljs.core._nth.call(null,chunk__31903_31936,i__31905_31938);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31939,prov);

var G__31940 = seq__31902_31935;
var G__31941 = chunk__31903_31936;
var G__31942 = count__31904_31937;
var G__31943 = (i__31905_31938 + (1));
seq__31902_31935 = G__31940;
chunk__31903_31936 = G__31941;
count__31904_31937 = G__31942;
i__31905_31938 = G__31943;
continue;
} else {
var temp__4657__auto___31944__$1 = cljs.core.seq.call(null,seq__31902_31935);
if(temp__4657__auto___31944__$1){
var seq__31902_31945__$1 = temp__4657__auto___31944__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31902_31945__$1)){
var c__25683__auto___31946 = cljs.core.chunk_first.call(null,seq__31902_31945__$1);
var G__31947 = cljs.core.chunk_rest.call(null,seq__31902_31945__$1);
var G__31948 = c__25683__auto___31946;
var G__31949 = cljs.core.count.call(null,c__25683__auto___31946);
var G__31950 = (0);
seq__31902_31935 = G__31947;
chunk__31903_31936 = G__31948;
count__31904_31937 = G__31949;
i__31905_31938 = G__31950;
continue;
} else {
var req_31951 = cljs.core.first.call(null,seq__31902_31945__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31951,prov);

var G__31952 = cljs.core.next.call(null,seq__31902_31945__$1);
var G__31953 = null;
var G__31954 = (0);
var G__31955 = (0);
seq__31902_31935 = G__31952;
chunk__31903_31936 = G__31953;
count__31904_31937 = G__31954;
i__31905_31938 = G__31955;
continue;
}
} else {
}
}
break;
}

var G__31956 = cljs.core.next.call(null,seq__31894__$1);
var G__31957 = null;
var G__31958 = (0);
var G__31959 = (0);
seq__31894 = G__31956;
chunk__31895 = G__31957;
count__31896 = G__31958;
i__31897 = G__31959;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31964_31968 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31965_31969 = null;
var count__31966_31970 = (0);
var i__31967_31971 = (0);
while(true){
if((i__31967_31971 < count__31966_31970)){
var ns_31972 = cljs.core._nth.call(null,chunk__31965_31969,i__31967_31971);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31972);

var G__31973 = seq__31964_31968;
var G__31974 = chunk__31965_31969;
var G__31975 = count__31966_31970;
var G__31976 = (i__31967_31971 + (1));
seq__31964_31968 = G__31973;
chunk__31965_31969 = G__31974;
count__31966_31970 = G__31975;
i__31967_31971 = G__31976;
continue;
} else {
var temp__4657__auto___31977 = cljs.core.seq.call(null,seq__31964_31968);
if(temp__4657__auto___31977){
var seq__31964_31978__$1 = temp__4657__auto___31977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31964_31978__$1)){
var c__25683__auto___31979 = cljs.core.chunk_first.call(null,seq__31964_31978__$1);
var G__31980 = cljs.core.chunk_rest.call(null,seq__31964_31978__$1);
var G__31981 = c__25683__auto___31979;
var G__31982 = cljs.core.count.call(null,c__25683__auto___31979);
var G__31983 = (0);
seq__31964_31968 = G__31980;
chunk__31965_31969 = G__31981;
count__31966_31970 = G__31982;
i__31967_31971 = G__31983;
continue;
} else {
var ns_31984 = cljs.core.first.call(null,seq__31964_31978__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31984);

var G__31985 = cljs.core.next.call(null,seq__31964_31978__$1);
var G__31986 = null;
var G__31987 = (0);
var G__31988 = (0);
seq__31964_31968 = G__31985;
chunk__31965_31969 = G__31986;
count__31966_31970 = G__31987;
i__31967_31971 = G__31988;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24872__auto__ = goog.require__;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31989__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31989 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31990__i = 0, G__31990__a = new Array(arguments.length -  0);
while (G__31990__i < G__31990__a.length) {G__31990__a[G__31990__i] = arguments[G__31990__i + 0]; ++G__31990__i;}
  args = new cljs.core.IndexedSeq(G__31990__a,0);
} 
return G__31989__delegate.call(this,args);};
G__31989.cljs$lang$maxFixedArity = 0;
G__31989.cljs$lang$applyTo = (function (arglist__31991){
var args = cljs.core.seq(arglist__31991);
return G__31989__delegate(args);
});
G__31989.cljs$core$IFn$_invoke$arity$variadic = G__31989__delegate;
return G__31989;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31992 = cljs.core._EQ_;
var expr__31993 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31992.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31993))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__31992,expr__31993){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__31992,expr__31993))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__31992,expr__31993){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31995){if((e31995 instanceof Error)){
var e = e31995;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31995;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__31992,expr__31993))
} else {
if(cljs.core.truth_(pred__31992.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31993))){
return ((function (pred__31992,expr__31993){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__31992,expr__31993){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__31992,expr__31993))
);

return deferred.addErrback(((function (deferred,pred__31992,expr__31993){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__31992,expr__31993))
);
});
;})(pred__31992,expr__31993))
} else {
if(cljs.core.truth_(pred__31992.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31993))){
return ((function (pred__31992,expr__31993){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31996){if((e31996 instanceof Error)){
var e = e31996;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31996;

}
}})());
});
;})(pred__31992,expr__31993))
} else {
return ((function (pred__31992,expr__31993){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31992,expr__31993))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31997,callback){
var map__32000 = p__31997;
var map__32000__$1 = ((((!((map__32000 == null)))?((((map__32000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32000):map__32000);
var file_msg = map__32000__$1;
var request_url = cljs.core.get.call(null,map__32000__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32000,map__32000__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32000,map__32000__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto__){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto__){
return (function (state_32024){
var state_val_32025 = (state_32024[(1)]);
if((state_val_32025 === (7))){
var inst_32020 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
var statearr_32026_32046 = state_32024__$1;
(statearr_32026_32046[(2)] = inst_32020);

(statearr_32026_32046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (1))){
var state_32024__$1 = state_32024;
var statearr_32027_32047 = state_32024__$1;
(statearr_32027_32047[(2)] = null);

(statearr_32027_32047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (4))){
var inst_32004 = (state_32024[(7)]);
var inst_32004__$1 = (state_32024[(2)]);
var state_32024__$1 = (function (){var statearr_32028 = state_32024;
(statearr_32028[(7)] = inst_32004__$1);

return statearr_32028;
})();
if(cljs.core.truth_(inst_32004__$1)){
var statearr_32029_32048 = state_32024__$1;
(statearr_32029_32048[(1)] = (5));

} else {
var statearr_32030_32049 = state_32024__$1;
(statearr_32030_32049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (6))){
var state_32024__$1 = state_32024;
var statearr_32031_32050 = state_32024__$1;
(statearr_32031_32050[(2)] = null);

(statearr_32031_32050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (3))){
var inst_32022 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32024__$1,inst_32022);
} else {
if((state_val_32025 === (2))){
var state_32024__$1 = state_32024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32024__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32025 === (11))){
var inst_32016 = (state_32024[(2)]);
var state_32024__$1 = (function (){var statearr_32032 = state_32024;
(statearr_32032[(8)] = inst_32016);

return statearr_32032;
})();
var statearr_32033_32051 = state_32024__$1;
(statearr_32033_32051[(2)] = null);

(statearr_32033_32051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (9))){
var inst_32008 = (state_32024[(9)]);
var inst_32010 = (state_32024[(10)]);
var inst_32012 = inst_32010.call(null,inst_32008);
var state_32024__$1 = state_32024;
var statearr_32034_32052 = state_32024__$1;
(statearr_32034_32052[(2)] = inst_32012);

(statearr_32034_32052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (5))){
var inst_32004 = (state_32024[(7)]);
var inst_32006 = figwheel.client.file_reloading.blocking_load.call(null,inst_32004);
var state_32024__$1 = state_32024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32024__$1,(8),inst_32006);
} else {
if((state_val_32025 === (10))){
var inst_32008 = (state_32024[(9)]);
var inst_32014 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32008);
var state_32024__$1 = state_32024;
var statearr_32035_32053 = state_32024__$1;
(statearr_32035_32053[(2)] = inst_32014);

(statearr_32035_32053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (8))){
var inst_32004 = (state_32024[(7)]);
var inst_32010 = (state_32024[(10)]);
var inst_32008 = (state_32024[(2)]);
var inst_32009 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32010__$1 = cljs.core.get.call(null,inst_32009,inst_32004);
var state_32024__$1 = (function (){var statearr_32036 = state_32024;
(statearr_32036[(9)] = inst_32008);

(statearr_32036[(10)] = inst_32010__$1);

return statearr_32036;
})();
if(cljs.core.truth_(inst_32010__$1)){
var statearr_32037_32054 = state_32024__$1;
(statearr_32037_32054[(1)] = (9));

} else {
var statearr_32038_32055 = state_32024__$1;
(statearr_32038_32055[(1)] = (10));

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
});})(c__27044__auto__))
;
return ((function (switch__26932__auto__,c__27044__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26933__auto__ = null;
var figwheel$client$file_reloading$state_machine__26933__auto____0 = (function (){
var statearr_32042 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32042[(0)] = figwheel$client$file_reloading$state_machine__26933__auto__);

(statearr_32042[(1)] = (1));

return statearr_32042;
});
var figwheel$client$file_reloading$state_machine__26933__auto____1 = (function (state_32024){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_32024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e32043){if((e32043 instanceof Object)){
var ex__26936__auto__ = e32043;
var statearr_32044_32056 = state_32024;
(statearr_32044_32056[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32057 = state_32024;
state_32024 = G__32057;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26933__auto__ = function(state_32024){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26933__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26933__auto____1.call(this,state_32024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26933__auto____0;
figwheel$client$file_reloading$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26933__auto____1;
return figwheel$client$file_reloading$state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto__))
})();
var state__27046__auto__ = (function (){var statearr_32045 = f__27045__auto__.call(null);
(statearr_32045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto__);

return statearr_32045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto__))
);

return c__27044__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32058,callback){
var map__32061 = p__32058;
var map__32061__$1 = ((((!((map__32061 == null)))?((((map__32061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32061):map__32061);
var file_msg = map__32061__$1;
var namespace = cljs.core.get.call(null,map__32061__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32061,map__32061__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32061,map__32061__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32063){
var map__32066 = p__32063;
var map__32066__$1 = ((((!((map__32066 == null)))?((((map__32066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32066):map__32066);
var file_msg = map__32066__$1;
var namespace = cljs.core.get.call(null,map__32066__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32068){
var map__32071 = p__32068;
var map__32071__$1 = ((((!((map__32071 == null)))?((((map__32071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32071):map__32071);
var file_msg = map__32071__$1;
var namespace = cljs.core.get.call(null,map__32071__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24860__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__24860__auto__){
var or__24872__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
var or__24872__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24872__auto____$1)){
return or__24872__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24860__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32073,callback){
var map__32076 = p__32073;
var map__32076__$1 = ((((!((map__32076 == null)))?((((map__32076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32076):map__32076);
var file_msg = map__32076__$1;
var request_url = cljs.core.get.call(null,map__32076__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32076__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27044__auto___32180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto___32180,out){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto___32180,out){
return (function (state_32162){
var state_val_32163 = (state_32162[(1)]);
if((state_val_32163 === (1))){
var inst_32136 = cljs.core.seq.call(null,files);
var inst_32137 = cljs.core.first.call(null,inst_32136);
var inst_32138 = cljs.core.next.call(null,inst_32136);
var inst_32139 = files;
var state_32162__$1 = (function (){var statearr_32164 = state_32162;
(statearr_32164[(7)] = inst_32138);

(statearr_32164[(8)] = inst_32137);

(statearr_32164[(9)] = inst_32139);

return statearr_32164;
})();
var statearr_32165_32181 = state_32162__$1;
(statearr_32165_32181[(2)] = null);

(statearr_32165_32181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (2))){
var inst_32145 = (state_32162[(10)]);
var inst_32139 = (state_32162[(9)]);
var inst_32144 = cljs.core.seq.call(null,inst_32139);
var inst_32145__$1 = cljs.core.first.call(null,inst_32144);
var inst_32146 = cljs.core.next.call(null,inst_32144);
var inst_32147 = (inst_32145__$1 == null);
var inst_32148 = cljs.core.not.call(null,inst_32147);
var state_32162__$1 = (function (){var statearr_32166 = state_32162;
(statearr_32166[(11)] = inst_32146);

(statearr_32166[(10)] = inst_32145__$1);

return statearr_32166;
})();
if(inst_32148){
var statearr_32167_32182 = state_32162__$1;
(statearr_32167_32182[(1)] = (4));

} else {
var statearr_32168_32183 = state_32162__$1;
(statearr_32168_32183[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (3))){
var inst_32160 = (state_32162[(2)]);
var state_32162__$1 = state_32162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32162__$1,inst_32160);
} else {
if((state_val_32163 === (4))){
var inst_32145 = (state_32162[(10)]);
var inst_32150 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32145);
var state_32162__$1 = state_32162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32162__$1,(7),inst_32150);
} else {
if((state_val_32163 === (5))){
var inst_32156 = cljs.core.async.close_BANG_.call(null,out);
var state_32162__$1 = state_32162;
var statearr_32169_32184 = state_32162__$1;
(statearr_32169_32184[(2)] = inst_32156);

(statearr_32169_32184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (6))){
var inst_32158 = (state_32162[(2)]);
var state_32162__$1 = state_32162;
var statearr_32170_32185 = state_32162__$1;
(statearr_32170_32185[(2)] = inst_32158);

(statearr_32170_32185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (7))){
var inst_32146 = (state_32162[(11)]);
var inst_32152 = (state_32162[(2)]);
var inst_32153 = cljs.core.async.put_BANG_.call(null,out,inst_32152);
var inst_32139 = inst_32146;
var state_32162__$1 = (function (){var statearr_32171 = state_32162;
(statearr_32171[(12)] = inst_32153);

(statearr_32171[(9)] = inst_32139);

return statearr_32171;
})();
var statearr_32172_32186 = state_32162__$1;
(statearr_32172_32186[(2)] = null);

(statearr_32172_32186[(1)] = (2));


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
});})(c__27044__auto___32180,out))
;
return ((function (switch__26932__auto__,c__27044__auto___32180,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26933__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26933__auto____0 = (function (){
var statearr_32176 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32176[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26933__auto__);

(statearr_32176[(1)] = (1));

return statearr_32176;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26933__auto____1 = (function (state_32162){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_32162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e32177){if((e32177 instanceof Object)){
var ex__26936__auto__ = e32177;
var statearr_32178_32187 = state_32162;
(statearr_32178_32187[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32188 = state_32162;
state_32162 = G__32188;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26933__auto__ = function(state_32162){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26933__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26933__auto____1.call(this,state_32162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26933__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26933__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto___32180,out))
})();
var state__27046__auto__ = (function (){var statearr_32179 = f__27045__auto__.call(null);
(statearr_32179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto___32180);

return statearr_32179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto___32180,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32189,opts){
var map__32193 = p__32189;
var map__32193__$1 = ((((!((map__32193 == null)))?((((map__32193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32193):map__32193);
var eval_body__$1 = cljs.core.get.call(null,map__32193__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32193__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24860__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24860__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24860__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32195){var e = e32195;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32196_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32196_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32205){
var vec__32206 = p__32205;
var k = cljs.core.nth.call(null,vec__32206,(0),null);
var v = cljs.core.nth.call(null,vec__32206,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32209){
var vec__32210 = p__32209;
var k = cljs.core.nth.call(null,vec__32210,(0),null);
var v = cljs.core.nth.call(null,vec__32210,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32216,p__32217){
var map__32464 = p__32216;
var map__32464__$1 = ((((!((map__32464 == null)))?((((map__32464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32464):map__32464);
var opts = map__32464__$1;
var before_jsload = cljs.core.get.call(null,map__32464__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32464__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32464__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32465 = p__32217;
var map__32465__$1 = ((((!((map__32465 == null)))?((((map__32465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32465):map__32465);
var msg = map__32465__$1;
var files = cljs.core.get.call(null,map__32465__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32465__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32465__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32618){
var state_val_32619 = (state_32618[(1)]);
if((state_val_32619 === (7))){
var inst_32479 = (state_32618[(7)]);
var inst_32482 = (state_32618[(8)]);
var inst_32480 = (state_32618[(9)]);
var inst_32481 = (state_32618[(10)]);
var inst_32487 = cljs.core._nth.call(null,inst_32480,inst_32482);
var inst_32488 = figwheel.client.file_reloading.eval_body.call(null,inst_32487,opts);
var inst_32489 = (inst_32482 + (1));
var tmp32620 = inst_32479;
var tmp32621 = inst_32480;
var tmp32622 = inst_32481;
var inst_32479__$1 = tmp32620;
var inst_32480__$1 = tmp32621;
var inst_32481__$1 = tmp32622;
var inst_32482__$1 = inst_32489;
var state_32618__$1 = (function (){var statearr_32623 = state_32618;
(statearr_32623[(11)] = inst_32488);

(statearr_32623[(7)] = inst_32479__$1);

(statearr_32623[(8)] = inst_32482__$1);

(statearr_32623[(9)] = inst_32480__$1);

(statearr_32623[(10)] = inst_32481__$1);

return statearr_32623;
})();
var statearr_32624_32710 = state_32618__$1;
(statearr_32624_32710[(2)] = null);

(statearr_32624_32710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (20))){
var inst_32522 = (state_32618[(12)]);
var inst_32530 = figwheel.client.file_reloading.sort_files.call(null,inst_32522);
var state_32618__$1 = state_32618;
var statearr_32625_32711 = state_32618__$1;
(statearr_32625_32711[(2)] = inst_32530);

(statearr_32625_32711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (27))){
var state_32618__$1 = state_32618;
var statearr_32626_32712 = state_32618__$1;
(statearr_32626_32712[(2)] = null);

(statearr_32626_32712[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (1))){
var inst_32471 = (state_32618[(13)]);
var inst_32468 = before_jsload.call(null,files);
var inst_32469 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32470 = (function (){return ((function (inst_32471,inst_32468,inst_32469,state_val_32619,c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32213_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32213_SHARP_);
});
;})(inst_32471,inst_32468,inst_32469,state_val_32619,c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32471__$1 = cljs.core.filter.call(null,inst_32470,files);
var inst_32472 = cljs.core.not_empty.call(null,inst_32471__$1);
var state_32618__$1 = (function (){var statearr_32627 = state_32618;
(statearr_32627[(14)] = inst_32468);

(statearr_32627[(13)] = inst_32471__$1);

(statearr_32627[(15)] = inst_32469);

return statearr_32627;
})();
if(cljs.core.truth_(inst_32472)){
var statearr_32628_32713 = state_32618__$1;
(statearr_32628_32713[(1)] = (2));

} else {
var statearr_32629_32714 = state_32618__$1;
(statearr_32629_32714[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (24))){
var state_32618__$1 = state_32618;
var statearr_32630_32715 = state_32618__$1;
(statearr_32630_32715[(2)] = null);

(statearr_32630_32715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (39))){
var inst_32572 = (state_32618[(16)]);
var state_32618__$1 = state_32618;
var statearr_32631_32716 = state_32618__$1;
(statearr_32631_32716[(2)] = inst_32572);

(statearr_32631_32716[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (46))){
var inst_32613 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32632_32717 = state_32618__$1;
(statearr_32632_32717[(2)] = inst_32613);

(statearr_32632_32717[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (4))){
var inst_32516 = (state_32618[(2)]);
var inst_32517 = cljs.core.List.EMPTY;
var inst_32518 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32517);
var inst_32519 = (function (){return ((function (inst_32516,inst_32517,inst_32518,state_val_32619,c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32214_SHARP_){
var and__24860__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32214_SHARP_);
if(cljs.core.truth_(and__24860__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32214_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32214_SHARP_)));
} else {
return and__24860__auto__;
}
});
;})(inst_32516,inst_32517,inst_32518,state_val_32619,c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32520 = cljs.core.filter.call(null,inst_32519,files);
var inst_32521 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32522 = cljs.core.concat.call(null,inst_32520,inst_32521);
var state_32618__$1 = (function (){var statearr_32633 = state_32618;
(statearr_32633[(17)] = inst_32518);

(statearr_32633[(12)] = inst_32522);

(statearr_32633[(18)] = inst_32516);

return statearr_32633;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32634_32718 = state_32618__$1;
(statearr_32634_32718[(1)] = (16));

} else {
var statearr_32635_32719 = state_32618__$1;
(statearr_32635_32719[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (15))){
var inst_32506 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32636_32720 = state_32618__$1;
(statearr_32636_32720[(2)] = inst_32506);

(statearr_32636_32720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (21))){
var inst_32532 = (state_32618[(19)]);
var inst_32532__$1 = (state_32618[(2)]);
var inst_32533 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32532__$1);
var state_32618__$1 = (function (){var statearr_32637 = state_32618;
(statearr_32637[(19)] = inst_32532__$1);

return statearr_32637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32618__$1,(22),inst_32533);
} else {
if((state_val_32619 === (31))){
var inst_32616 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32618__$1,inst_32616);
} else {
if((state_val_32619 === (32))){
var inst_32572 = (state_32618[(16)]);
var inst_32577 = inst_32572.cljs$lang$protocol_mask$partition0$;
var inst_32578 = (inst_32577 & (64));
var inst_32579 = inst_32572.cljs$core$ISeq$;
var inst_32580 = (inst_32578) || (inst_32579);
var state_32618__$1 = state_32618;
if(cljs.core.truth_(inst_32580)){
var statearr_32638_32721 = state_32618__$1;
(statearr_32638_32721[(1)] = (35));

} else {
var statearr_32639_32722 = state_32618__$1;
(statearr_32639_32722[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (40))){
var inst_32593 = (state_32618[(20)]);
var inst_32592 = (state_32618[(2)]);
var inst_32593__$1 = cljs.core.get.call(null,inst_32592,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32594 = cljs.core.get.call(null,inst_32592,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32595 = cljs.core.not_empty.call(null,inst_32593__$1);
var state_32618__$1 = (function (){var statearr_32640 = state_32618;
(statearr_32640[(21)] = inst_32594);

(statearr_32640[(20)] = inst_32593__$1);

return statearr_32640;
})();
if(cljs.core.truth_(inst_32595)){
var statearr_32641_32723 = state_32618__$1;
(statearr_32641_32723[(1)] = (41));

} else {
var statearr_32642_32724 = state_32618__$1;
(statearr_32642_32724[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (33))){
var state_32618__$1 = state_32618;
var statearr_32643_32725 = state_32618__$1;
(statearr_32643_32725[(2)] = false);

(statearr_32643_32725[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (13))){
var inst_32492 = (state_32618[(22)]);
var inst_32496 = cljs.core.chunk_first.call(null,inst_32492);
var inst_32497 = cljs.core.chunk_rest.call(null,inst_32492);
var inst_32498 = cljs.core.count.call(null,inst_32496);
var inst_32479 = inst_32497;
var inst_32480 = inst_32496;
var inst_32481 = inst_32498;
var inst_32482 = (0);
var state_32618__$1 = (function (){var statearr_32644 = state_32618;
(statearr_32644[(7)] = inst_32479);

(statearr_32644[(8)] = inst_32482);

(statearr_32644[(9)] = inst_32480);

(statearr_32644[(10)] = inst_32481);

return statearr_32644;
})();
var statearr_32645_32726 = state_32618__$1;
(statearr_32645_32726[(2)] = null);

(statearr_32645_32726[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (22))){
var inst_32540 = (state_32618[(23)]);
var inst_32532 = (state_32618[(19)]);
var inst_32535 = (state_32618[(24)]);
var inst_32536 = (state_32618[(25)]);
var inst_32535__$1 = (state_32618[(2)]);
var inst_32536__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32535__$1);
var inst_32537 = (function (){var all_files = inst_32532;
var res_SINGLEQUOTE_ = inst_32535__$1;
var res = inst_32536__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32540,inst_32532,inst_32535,inst_32536,inst_32535__$1,inst_32536__$1,state_val_32619,c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32215_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32215_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32540,inst_32532,inst_32535,inst_32536,inst_32535__$1,inst_32536__$1,state_val_32619,c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32538 = cljs.core.filter.call(null,inst_32537,inst_32535__$1);
var inst_32539 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32540__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32539);
var inst_32541 = cljs.core.not_empty.call(null,inst_32540__$1);
var state_32618__$1 = (function (){var statearr_32646 = state_32618;
(statearr_32646[(23)] = inst_32540__$1);

(statearr_32646[(24)] = inst_32535__$1);

(statearr_32646[(26)] = inst_32538);

(statearr_32646[(25)] = inst_32536__$1);

return statearr_32646;
})();
if(cljs.core.truth_(inst_32541)){
var statearr_32647_32727 = state_32618__$1;
(statearr_32647_32727[(1)] = (23));

} else {
var statearr_32648_32728 = state_32618__$1;
(statearr_32648_32728[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (36))){
var state_32618__$1 = state_32618;
var statearr_32649_32729 = state_32618__$1;
(statearr_32649_32729[(2)] = false);

(statearr_32649_32729[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (41))){
var inst_32593 = (state_32618[(20)]);
var inst_32597 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32598 = cljs.core.map.call(null,inst_32597,inst_32593);
var inst_32599 = cljs.core.pr_str.call(null,inst_32598);
var inst_32600 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32599)].join('');
var inst_32601 = figwheel.client.utils.log.call(null,inst_32600);
var state_32618__$1 = state_32618;
var statearr_32650_32730 = state_32618__$1;
(statearr_32650_32730[(2)] = inst_32601);

(statearr_32650_32730[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (43))){
var inst_32594 = (state_32618[(21)]);
var inst_32604 = (state_32618[(2)]);
var inst_32605 = cljs.core.not_empty.call(null,inst_32594);
var state_32618__$1 = (function (){var statearr_32651 = state_32618;
(statearr_32651[(27)] = inst_32604);

return statearr_32651;
})();
if(cljs.core.truth_(inst_32605)){
var statearr_32652_32731 = state_32618__$1;
(statearr_32652_32731[(1)] = (44));

} else {
var statearr_32653_32732 = state_32618__$1;
(statearr_32653_32732[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (29))){
var inst_32540 = (state_32618[(23)]);
var inst_32572 = (state_32618[(16)]);
var inst_32532 = (state_32618[(19)]);
var inst_32535 = (state_32618[(24)]);
var inst_32538 = (state_32618[(26)]);
var inst_32536 = (state_32618[(25)]);
var inst_32568 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32571 = (function (){var all_files = inst_32532;
var res_SINGLEQUOTE_ = inst_32535;
var res = inst_32536;
var files_not_loaded = inst_32538;
var dependencies_that_loaded = inst_32540;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32540,inst_32572,inst_32532,inst_32535,inst_32538,inst_32536,inst_32568,state_val_32619,c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32570){
var map__32654 = p__32570;
var map__32654__$1 = ((((!((map__32654 == null)))?((((map__32654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32654):map__32654);
var namespace = cljs.core.get.call(null,map__32654__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32540,inst_32572,inst_32532,inst_32535,inst_32538,inst_32536,inst_32568,state_val_32619,c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32572__$1 = cljs.core.group_by.call(null,inst_32571,inst_32538);
var inst_32574 = (inst_32572__$1 == null);
var inst_32575 = cljs.core.not.call(null,inst_32574);
var state_32618__$1 = (function (){var statearr_32656 = state_32618;
(statearr_32656[(28)] = inst_32568);

(statearr_32656[(16)] = inst_32572__$1);

return statearr_32656;
})();
if(inst_32575){
var statearr_32657_32733 = state_32618__$1;
(statearr_32657_32733[(1)] = (32));

} else {
var statearr_32658_32734 = state_32618__$1;
(statearr_32658_32734[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (44))){
var inst_32594 = (state_32618[(21)]);
var inst_32607 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32594);
var inst_32608 = cljs.core.pr_str.call(null,inst_32607);
var inst_32609 = [cljs.core.str("not required: "),cljs.core.str(inst_32608)].join('');
var inst_32610 = figwheel.client.utils.log.call(null,inst_32609);
var state_32618__$1 = state_32618;
var statearr_32659_32735 = state_32618__$1;
(statearr_32659_32735[(2)] = inst_32610);

(statearr_32659_32735[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (6))){
var inst_32513 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32660_32736 = state_32618__$1;
(statearr_32660_32736[(2)] = inst_32513);

(statearr_32660_32736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (28))){
var inst_32538 = (state_32618[(26)]);
var inst_32565 = (state_32618[(2)]);
var inst_32566 = cljs.core.not_empty.call(null,inst_32538);
var state_32618__$1 = (function (){var statearr_32661 = state_32618;
(statearr_32661[(29)] = inst_32565);

return statearr_32661;
})();
if(cljs.core.truth_(inst_32566)){
var statearr_32662_32737 = state_32618__$1;
(statearr_32662_32737[(1)] = (29));

} else {
var statearr_32663_32738 = state_32618__$1;
(statearr_32663_32738[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (25))){
var inst_32536 = (state_32618[(25)]);
var inst_32552 = (state_32618[(2)]);
var inst_32553 = cljs.core.not_empty.call(null,inst_32536);
var state_32618__$1 = (function (){var statearr_32664 = state_32618;
(statearr_32664[(30)] = inst_32552);

return statearr_32664;
})();
if(cljs.core.truth_(inst_32553)){
var statearr_32665_32739 = state_32618__$1;
(statearr_32665_32739[(1)] = (26));

} else {
var statearr_32666_32740 = state_32618__$1;
(statearr_32666_32740[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (34))){
var inst_32587 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
if(cljs.core.truth_(inst_32587)){
var statearr_32667_32741 = state_32618__$1;
(statearr_32667_32741[(1)] = (38));

} else {
var statearr_32668_32742 = state_32618__$1;
(statearr_32668_32742[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (17))){
var state_32618__$1 = state_32618;
var statearr_32669_32743 = state_32618__$1;
(statearr_32669_32743[(2)] = recompile_dependents);

(statearr_32669_32743[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (3))){
var state_32618__$1 = state_32618;
var statearr_32670_32744 = state_32618__$1;
(statearr_32670_32744[(2)] = null);

(statearr_32670_32744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (12))){
var inst_32509 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32671_32745 = state_32618__$1;
(statearr_32671_32745[(2)] = inst_32509);

(statearr_32671_32745[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (2))){
var inst_32471 = (state_32618[(13)]);
var inst_32478 = cljs.core.seq.call(null,inst_32471);
var inst_32479 = inst_32478;
var inst_32480 = null;
var inst_32481 = (0);
var inst_32482 = (0);
var state_32618__$1 = (function (){var statearr_32672 = state_32618;
(statearr_32672[(7)] = inst_32479);

(statearr_32672[(8)] = inst_32482);

(statearr_32672[(9)] = inst_32480);

(statearr_32672[(10)] = inst_32481);

return statearr_32672;
})();
var statearr_32673_32746 = state_32618__$1;
(statearr_32673_32746[(2)] = null);

(statearr_32673_32746[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (23))){
var inst_32540 = (state_32618[(23)]);
var inst_32532 = (state_32618[(19)]);
var inst_32535 = (state_32618[(24)]);
var inst_32538 = (state_32618[(26)]);
var inst_32536 = (state_32618[(25)]);
var inst_32543 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32545 = (function (){var all_files = inst_32532;
var res_SINGLEQUOTE_ = inst_32535;
var res = inst_32536;
var files_not_loaded = inst_32538;
var dependencies_that_loaded = inst_32540;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32540,inst_32532,inst_32535,inst_32538,inst_32536,inst_32543,state_val_32619,c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32544){
var map__32674 = p__32544;
var map__32674__$1 = ((((!((map__32674 == null)))?((((map__32674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32674):map__32674);
var request_url = cljs.core.get.call(null,map__32674__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32540,inst_32532,inst_32535,inst_32538,inst_32536,inst_32543,state_val_32619,c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32546 = cljs.core.reverse.call(null,inst_32540);
var inst_32547 = cljs.core.map.call(null,inst_32545,inst_32546);
var inst_32548 = cljs.core.pr_str.call(null,inst_32547);
var inst_32549 = figwheel.client.utils.log.call(null,inst_32548);
var state_32618__$1 = (function (){var statearr_32676 = state_32618;
(statearr_32676[(31)] = inst_32543);

return statearr_32676;
})();
var statearr_32677_32747 = state_32618__$1;
(statearr_32677_32747[(2)] = inst_32549);

(statearr_32677_32747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (35))){
var state_32618__$1 = state_32618;
var statearr_32678_32748 = state_32618__$1;
(statearr_32678_32748[(2)] = true);

(statearr_32678_32748[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (19))){
var inst_32522 = (state_32618[(12)]);
var inst_32528 = figwheel.client.file_reloading.expand_files.call(null,inst_32522);
var state_32618__$1 = state_32618;
var statearr_32679_32749 = state_32618__$1;
(statearr_32679_32749[(2)] = inst_32528);

(statearr_32679_32749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (11))){
var state_32618__$1 = state_32618;
var statearr_32680_32750 = state_32618__$1;
(statearr_32680_32750[(2)] = null);

(statearr_32680_32750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (9))){
var inst_32511 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32681_32751 = state_32618__$1;
(statearr_32681_32751[(2)] = inst_32511);

(statearr_32681_32751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (5))){
var inst_32482 = (state_32618[(8)]);
var inst_32481 = (state_32618[(10)]);
var inst_32484 = (inst_32482 < inst_32481);
var inst_32485 = inst_32484;
var state_32618__$1 = state_32618;
if(cljs.core.truth_(inst_32485)){
var statearr_32682_32752 = state_32618__$1;
(statearr_32682_32752[(1)] = (7));

} else {
var statearr_32683_32753 = state_32618__$1;
(statearr_32683_32753[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (14))){
var inst_32492 = (state_32618[(22)]);
var inst_32501 = cljs.core.first.call(null,inst_32492);
var inst_32502 = figwheel.client.file_reloading.eval_body.call(null,inst_32501,opts);
var inst_32503 = cljs.core.next.call(null,inst_32492);
var inst_32479 = inst_32503;
var inst_32480 = null;
var inst_32481 = (0);
var inst_32482 = (0);
var state_32618__$1 = (function (){var statearr_32684 = state_32618;
(statearr_32684[(7)] = inst_32479);

(statearr_32684[(32)] = inst_32502);

(statearr_32684[(8)] = inst_32482);

(statearr_32684[(9)] = inst_32480);

(statearr_32684[(10)] = inst_32481);

return statearr_32684;
})();
var statearr_32685_32754 = state_32618__$1;
(statearr_32685_32754[(2)] = null);

(statearr_32685_32754[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (45))){
var state_32618__$1 = state_32618;
var statearr_32686_32755 = state_32618__$1;
(statearr_32686_32755[(2)] = null);

(statearr_32686_32755[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (26))){
var inst_32540 = (state_32618[(23)]);
var inst_32532 = (state_32618[(19)]);
var inst_32535 = (state_32618[(24)]);
var inst_32538 = (state_32618[(26)]);
var inst_32536 = (state_32618[(25)]);
var inst_32555 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32557 = (function (){var all_files = inst_32532;
var res_SINGLEQUOTE_ = inst_32535;
var res = inst_32536;
var files_not_loaded = inst_32538;
var dependencies_that_loaded = inst_32540;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32540,inst_32532,inst_32535,inst_32538,inst_32536,inst_32555,state_val_32619,c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32556){
var map__32687 = p__32556;
var map__32687__$1 = ((((!((map__32687 == null)))?((((map__32687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32687):map__32687);
var namespace = cljs.core.get.call(null,map__32687__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32687__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32540,inst_32532,inst_32535,inst_32538,inst_32536,inst_32555,state_val_32619,c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32558 = cljs.core.map.call(null,inst_32557,inst_32536);
var inst_32559 = cljs.core.pr_str.call(null,inst_32558);
var inst_32560 = figwheel.client.utils.log.call(null,inst_32559);
var inst_32561 = (function (){var all_files = inst_32532;
var res_SINGLEQUOTE_ = inst_32535;
var res = inst_32536;
var files_not_loaded = inst_32538;
var dependencies_that_loaded = inst_32540;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32540,inst_32532,inst_32535,inst_32538,inst_32536,inst_32555,inst_32557,inst_32558,inst_32559,inst_32560,state_val_32619,c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32540,inst_32532,inst_32535,inst_32538,inst_32536,inst_32555,inst_32557,inst_32558,inst_32559,inst_32560,state_val_32619,c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32562 = setTimeout(inst_32561,(10));
var state_32618__$1 = (function (){var statearr_32689 = state_32618;
(statearr_32689[(33)] = inst_32555);

(statearr_32689[(34)] = inst_32560);

return statearr_32689;
})();
var statearr_32690_32756 = state_32618__$1;
(statearr_32690_32756[(2)] = inst_32562);

(statearr_32690_32756[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (16))){
var state_32618__$1 = state_32618;
var statearr_32691_32757 = state_32618__$1;
(statearr_32691_32757[(2)] = reload_dependents);

(statearr_32691_32757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (38))){
var inst_32572 = (state_32618[(16)]);
var inst_32589 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32572);
var state_32618__$1 = state_32618;
var statearr_32692_32758 = state_32618__$1;
(statearr_32692_32758[(2)] = inst_32589);

(statearr_32692_32758[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (30))){
var state_32618__$1 = state_32618;
var statearr_32693_32759 = state_32618__$1;
(statearr_32693_32759[(2)] = null);

(statearr_32693_32759[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (10))){
var inst_32492 = (state_32618[(22)]);
var inst_32494 = cljs.core.chunked_seq_QMARK_.call(null,inst_32492);
var state_32618__$1 = state_32618;
if(inst_32494){
var statearr_32694_32760 = state_32618__$1;
(statearr_32694_32760[(1)] = (13));

} else {
var statearr_32695_32761 = state_32618__$1;
(statearr_32695_32761[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (18))){
var inst_32526 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
if(cljs.core.truth_(inst_32526)){
var statearr_32696_32762 = state_32618__$1;
(statearr_32696_32762[(1)] = (19));

} else {
var statearr_32697_32763 = state_32618__$1;
(statearr_32697_32763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (42))){
var state_32618__$1 = state_32618;
var statearr_32698_32764 = state_32618__$1;
(statearr_32698_32764[(2)] = null);

(statearr_32698_32764[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (37))){
var inst_32584 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32699_32765 = state_32618__$1;
(statearr_32699_32765[(2)] = inst_32584);

(statearr_32699_32765[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (8))){
var inst_32479 = (state_32618[(7)]);
var inst_32492 = (state_32618[(22)]);
var inst_32492__$1 = cljs.core.seq.call(null,inst_32479);
var state_32618__$1 = (function (){var statearr_32700 = state_32618;
(statearr_32700[(22)] = inst_32492__$1);

return statearr_32700;
})();
if(inst_32492__$1){
var statearr_32701_32766 = state_32618__$1;
(statearr_32701_32766[(1)] = (10));

} else {
var statearr_32702_32767 = state_32618__$1;
(statearr_32702_32767[(1)] = (11));

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
});})(c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26932__auto__,c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26933__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26933__auto____0 = (function (){
var statearr_32706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32706[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26933__auto__);

(statearr_32706[(1)] = (1));

return statearr_32706;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26933__auto____1 = (function (state_32618){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_32618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e32707){if((e32707 instanceof Object)){
var ex__26936__auto__ = e32707;
var statearr_32708_32768 = state_32618;
(statearr_32708_32768[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32769 = state_32618;
state_32618 = G__32769;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26933__auto__ = function(state_32618){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26933__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26933__auto____1.call(this,state_32618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26933__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26933__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27046__auto__ = (function (){var statearr_32709 = f__27045__auto__.call(null);
(statearr_32709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto__);

return statearr_32709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto__,map__32464,map__32464__$1,opts,before_jsload,on_jsload,reload_dependents,map__32465,map__32465__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27044__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32772,link){
var map__32775 = p__32772;
var map__32775__$1 = ((((!((map__32775 == null)))?((((map__32775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32775):map__32775);
var file = cljs.core.get.call(null,map__32775__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__32775,map__32775__$1,file){
return (function (p1__32770_SHARP_,p2__32771_SHARP_){
if(cljs.core._EQ_.call(null,p1__32770_SHARP_,p2__32771_SHARP_)){
return p1__32770_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__32775,map__32775__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32781){
var map__32782 = p__32781;
var map__32782__$1 = ((((!((map__32782 == null)))?((((map__32782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32782):map__32782);
var match_length = cljs.core.get.call(null,map__32782__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32782__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32777_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32777_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32784_SHARP_,p2__32785_SHARP_){
return cljs.core.assoc.call(null,p1__32784_SHARP_,cljs.core.get.call(null,p2__32785_SHARP_,key),p2__32785_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_32786 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32786);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32786);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32787,p__32788){
var map__32793 = p__32787;
var map__32793__$1 = ((((!((map__32793 == null)))?((((map__32793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32793):map__32793);
var on_cssload = cljs.core.get.call(null,map__32793__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32794 = p__32788;
var map__32794__$1 = ((((!((map__32794 == null)))?((((map__32794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32794):map__32794);
var files_msg = map__32794__$1;
var files = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1486525847475