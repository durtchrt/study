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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31781_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31781_SHARP_));
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
var seq__31786 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31787 = null;
var count__31788 = (0);
var i__31789 = (0);
while(true){
if((i__31789 < count__31788)){
var n = cljs.core._nth.call(null,chunk__31787,i__31789);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31790 = seq__31786;
var G__31791 = chunk__31787;
var G__31792 = count__31788;
var G__31793 = (i__31789 + (1));
seq__31786 = G__31790;
chunk__31787 = G__31791;
count__31788 = G__31792;
i__31789 = G__31793;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31786);
if(temp__4657__auto__){
var seq__31786__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31786__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__31786__$1);
var G__31794 = cljs.core.chunk_rest.call(null,seq__31786__$1);
var G__31795 = c__25683__auto__;
var G__31796 = cljs.core.count.call(null,c__25683__auto__);
var G__31797 = (0);
seq__31786 = G__31794;
chunk__31787 = G__31795;
count__31788 = G__31796;
i__31789 = G__31797;
continue;
} else {
var n = cljs.core.first.call(null,seq__31786__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31798 = cljs.core.next.call(null,seq__31786__$1);
var G__31799 = null;
var G__31800 = (0);
var G__31801 = (0);
seq__31786 = G__31798;
chunk__31787 = G__31799;
count__31788 = G__31800;
i__31789 = G__31801;
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

var seq__31852_31863 = cljs.core.seq.call(null,deps);
var chunk__31853_31864 = null;
var count__31854_31865 = (0);
var i__31855_31866 = (0);
while(true){
if((i__31855_31866 < count__31854_31865)){
var dep_31867 = cljs.core._nth.call(null,chunk__31853_31864,i__31855_31866);
topo_sort_helper_STAR_.call(null,dep_31867,(depth + (1)),state);

var G__31868 = seq__31852_31863;
var G__31869 = chunk__31853_31864;
var G__31870 = count__31854_31865;
var G__31871 = (i__31855_31866 + (1));
seq__31852_31863 = G__31868;
chunk__31853_31864 = G__31869;
count__31854_31865 = G__31870;
i__31855_31866 = G__31871;
continue;
} else {
var temp__4657__auto___31872 = cljs.core.seq.call(null,seq__31852_31863);
if(temp__4657__auto___31872){
var seq__31852_31873__$1 = temp__4657__auto___31872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31852_31873__$1)){
var c__25683__auto___31874 = cljs.core.chunk_first.call(null,seq__31852_31873__$1);
var G__31875 = cljs.core.chunk_rest.call(null,seq__31852_31873__$1);
var G__31876 = c__25683__auto___31874;
var G__31877 = cljs.core.count.call(null,c__25683__auto___31874);
var G__31878 = (0);
seq__31852_31863 = G__31875;
chunk__31853_31864 = G__31876;
count__31854_31865 = G__31877;
i__31855_31866 = G__31878;
continue;
} else {
var dep_31879 = cljs.core.first.call(null,seq__31852_31873__$1);
topo_sort_helper_STAR_.call(null,dep_31879,(depth + (1)),state);

var G__31880 = cljs.core.next.call(null,seq__31852_31873__$1);
var G__31881 = null;
var G__31882 = (0);
var G__31883 = (0);
seq__31852_31863 = G__31880;
chunk__31853_31864 = G__31881;
count__31854_31865 = G__31882;
i__31855_31866 = G__31883;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31856){
var vec__31860 = p__31856;
var seq__31861 = cljs.core.seq.call(null,vec__31860);
var first__31862 = cljs.core.first.call(null,seq__31861);
var seq__31861__$1 = cljs.core.next.call(null,seq__31861);
var x = first__31862;
var xs = seq__31861__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31860,seq__31861,first__31862,seq__31861__$1,x,xs,get_deps__$1){
return (function (p1__31802_SHARP_){
return clojure.set.difference.call(null,p1__31802_SHARP_,x);
});})(vec__31860,seq__31861,first__31862,seq__31861__$1,x,xs,get_deps__$1))
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
var seq__31896 = cljs.core.seq.call(null,provides);
var chunk__31897 = null;
var count__31898 = (0);
var i__31899 = (0);
while(true){
if((i__31899 < count__31898)){
var prov = cljs.core._nth.call(null,chunk__31897,i__31899);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31900_31908 = cljs.core.seq.call(null,requires);
var chunk__31901_31909 = null;
var count__31902_31910 = (0);
var i__31903_31911 = (0);
while(true){
if((i__31903_31911 < count__31902_31910)){
var req_31912 = cljs.core._nth.call(null,chunk__31901_31909,i__31903_31911);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31912,prov);

var G__31913 = seq__31900_31908;
var G__31914 = chunk__31901_31909;
var G__31915 = count__31902_31910;
var G__31916 = (i__31903_31911 + (1));
seq__31900_31908 = G__31913;
chunk__31901_31909 = G__31914;
count__31902_31910 = G__31915;
i__31903_31911 = G__31916;
continue;
} else {
var temp__4657__auto___31917 = cljs.core.seq.call(null,seq__31900_31908);
if(temp__4657__auto___31917){
var seq__31900_31918__$1 = temp__4657__auto___31917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31900_31918__$1)){
var c__25683__auto___31919 = cljs.core.chunk_first.call(null,seq__31900_31918__$1);
var G__31920 = cljs.core.chunk_rest.call(null,seq__31900_31918__$1);
var G__31921 = c__25683__auto___31919;
var G__31922 = cljs.core.count.call(null,c__25683__auto___31919);
var G__31923 = (0);
seq__31900_31908 = G__31920;
chunk__31901_31909 = G__31921;
count__31902_31910 = G__31922;
i__31903_31911 = G__31923;
continue;
} else {
var req_31924 = cljs.core.first.call(null,seq__31900_31918__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31924,prov);

var G__31925 = cljs.core.next.call(null,seq__31900_31918__$1);
var G__31926 = null;
var G__31927 = (0);
var G__31928 = (0);
seq__31900_31908 = G__31925;
chunk__31901_31909 = G__31926;
count__31902_31910 = G__31927;
i__31903_31911 = G__31928;
continue;
}
} else {
}
}
break;
}

var G__31929 = seq__31896;
var G__31930 = chunk__31897;
var G__31931 = count__31898;
var G__31932 = (i__31899 + (1));
seq__31896 = G__31929;
chunk__31897 = G__31930;
count__31898 = G__31931;
i__31899 = G__31932;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31896);
if(temp__4657__auto__){
var seq__31896__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31896__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__31896__$1);
var G__31933 = cljs.core.chunk_rest.call(null,seq__31896__$1);
var G__31934 = c__25683__auto__;
var G__31935 = cljs.core.count.call(null,c__25683__auto__);
var G__31936 = (0);
seq__31896 = G__31933;
chunk__31897 = G__31934;
count__31898 = G__31935;
i__31899 = G__31936;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31896__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31904_31937 = cljs.core.seq.call(null,requires);
var chunk__31905_31938 = null;
var count__31906_31939 = (0);
var i__31907_31940 = (0);
while(true){
if((i__31907_31940 < count__31906_31939)){
var req_31941 = cljs.core._nth.call(null,chunk__31905_31938,i__31907_31940);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31941,prov);

var G__31942 = seq__31904_31937;
var G__31943 = chunk__31905_31938;
var G__31944 = count__31906_31939;
var G__31945 = (i__31907_31940 + (1));
seq__31904_31937 = G__31942;
chunk__31905_31938 = G__31943;
count__31906_31939 = G__31944;
i__31907_31940 = G__31945;
continue;
} else {
var temp__4657__auto___31946__$1 = cljs.core.seq.call(null,seq__31904_31937);
if(temp__4657__auto___31946__$1){
var seq__31904_31947__$1 = temp__4657__auto___31946__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31904_31947__$1)){
var c__25683__auto___31948 = cljs.core.chunk_first.call(null,seq__31904_31947__$1);
var G__31949 = cljs.core.chunk_rest.call(null,seq__31904_31947__$1);
var G__31950 = c__25683__auto___31948;
var G__31951 = cljs.core.count.call(null,c__25683__auto___31948);
var G__31952 = (0);
seq__31904_31937 = G__31949;
chunk__31905_31938 = G__31950;
count__31906_31939 = G__31951;
i__31907_31940 = G__31952;
continue;
} else {
var req_31953 = cljs.core.first.call(null,seq__31904_31947__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31953,prov);

var G__31954 = cljs.core.next.call(null,seq__31904_31947__$1);
var G__31955 = null;
var G__31956 = (0);
var G__31957 = (0);
seq__31904_31937 = G__31954;
chunk__31905_31938 = G__31955;
count__31906_31939 = G__31956;
i__31907_31940 = G__31957;
continue;
}
} else {
}
}
break;
}

var G__31958 = cljs.core.next.call(null,seq__31896__$1);
var G__31959 = null;
var G__31960 = (0);
var G__31961 = (0);
seq__31896 = G__31958;
chunk__31897 = G__31959;
count__31898 = G__31960;
i__31899 = G__31961;
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
var seq__31966_31970 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31967_31971 = null;
var count__31968_31972 = (0);
var i__31969_31973 = (0);
while(true){
if((i__31969_31973 < count__31968_31972)){
var ns_31974 = cljs.core._nth.call(null,chunk__31967_31971,i__31969_31973);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31974);

var G__31975 = seq__31966_31970;
var G__31976 = chunk__31967_31971;
var G__31977 = count__31968_31972;
var G__31978 = (i__31969_31973 + (1));
seq__31966_31970 = G__31975;
chunk__31967_31971 = G__31976;
count__31968_31972 = G__31977;
i__31969_31973 = G__31978;
continue;
} else {
var temp__4657__auto___31979 = cljs.core.seq.call(null,seq__31966_31970);
if(temp__4657__auto___31979){
var seq__31966_31980__$1 = temp__4657__auto___31979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31966_31980__$1)){
var c__25683__auto___31981 = cljs.core.chunk_first.call(null,seq__31966_31980__$1);
var G__31982 = cljs.core.chunk_rest.call(null,seq__31966_31980__$1);
var G__31983 = c__25683__auto___31981;
var G__31984 = cljs.core.count.call(null,c__25683__auto___31981);
var G__31985 = (0);
seq__31966_31970 = G__31982;
chunk__31967_31971 = G__31983;
count__31968_31972 = G__31984;
i__31969_31973 = G__31985;
continue;
} else {
var ns_31986 = cljs.core.first.call(null,seq__31966_31980__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31986);

var G__31987 = cljs.core.next.call(null,seq__31966_31980__$1);
var G__31988 = null;
var G__31989 = (0);
var G__31990 = (0);
seq__31966_31970 = G__31987;
chunk__31967_31971 = G__31988;
count__31968_31972 = G__31989;
i__31969_31973 = G__31990;
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
var G__31991__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31992__i = 0, G__31992__a = new Array(arguments.length -  0);
while (G__31992__i < G__31992__a.length) {G__31992__a[G__31992__i] = arguments[G__31992__i + 0]; ++G__31992__i;}
  args = new cljs.core.IndexedSeq(G__31992__a,0);
} 
return G__31991__delegate.call(this,args);};
G__31991.cljs$lang$maxFixedArity = 0;
G__31991.cljs$lang$applyTo = (function (arglist__31993){
var args = cljs.core.seq(arglist__31993);
return G__31991__delegate(args);
});
G__31991.cljs$core$IFn$_invoke$arity$variadic = G__31991__delegate;
return G__31991;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31994 = cljs.core._EQ_;
var expr__31995 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31994.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31995))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__31994,expr__31995){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__31994,expr__31995))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__31994,expr__31995){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31997){if((e31997 instanceof Error)){
var e = e31997;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31997;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__31994,expr__31995))
} else {
if(cljs.core.truth_(pred__31994.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31995))){
return ((function (pred__31994,expr__31995){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__31994,expr__31995){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__31994,expr__31995))
);

return deferred.addErrback(((function (deferred,pred__31994,expr__31995){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__31994,expr__31995))
);
});
;})(pred__31994,expr__31995))
} else {
if(cljs.core.truth_(pred__31994.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31995))){
return ((function (pred__31994,expr__31995){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31998){if((e31998 instanceof Error)){
var e = e31998;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31998;

}
}})());
});
;})(pred__31994,expr__31995))
} else {
return ((function (pred__31994,expr__31995){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31994,expr__31995))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31999,callback){
var map__32002 = p__31999;
var map__32002__$1 = ((((!((map__32002 == null)))?((((map__32002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32002):map__32002);
var file_msg = map__32002__$1;
var request_url = cljs.core.get.call(null,map__32002__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32002,map__32002__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32002,map__32002__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto__){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto__){
return (function (state_32026){
var state_val_32027 = (state_32026[(1)]);
if((state_val_32027 === (7))){
var inst_32022 = (state_32026[(2)]);
var state_32026__$1 = state_32026;
var statearr_32028_32048 = state_32026__$1;
(statearr_32028_32048[(2)] = inst_32022);

(statearr_32028_32048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32027 === (1))){
var state_32026__$1 = state_32026;
var statearr_32029_32049 = state_32026__$1;
(statearr_32029_32049[(2)] = null);

(statearr_32029_32049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32027 === (4))){
var inst_32006 = (state_32026[(7)]);
var inst_32006__$1 = (state_32026[(2)]);
var state_32026__$1 = (function (){var statearr_32030 = state_32026;
(statearr_32030[(7)] = inst_32006__$1);

return statearr_32030;
})();
if(cljs.core.truth_(inst_32006__$1)){
var statearr_32031_32050 = state_32026__$1;
(statearr_32031_32050[(1)] = (5));

} else {
var statearr_32032_32051 = state_32026__$1;
(statearr_32032_32051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32027 === (6))){
var state_32026__$1 = state_32026;
var statearr_32033_32052 = state_32026__$1;
(statearr_32033_32052[(2)] = null);

(statearr_32033_32052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32027 === (3))){
var inst_32024 = (state_32026[(2)]);
var state_32026__$1 = state_32026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32026__$1,inst_32024);
} else {
if((state_val_32027 === (2))){
var state_32026__$1 = state_32026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32026__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32027 === (11))){
var inst_32018 = (state_32026[(2)]);
var state_32026__$1 = (function (){var statearr_32034 = state_32026;
(statearr_32034[(8)] = inst_32018);

return statearr_32034;
})();
var statearr_32035_32053 = state_32026__$1;
(statearr_32035_32053[(2)] = null);

(statearr_32035_32053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32027 === (9))){
var inst_32012 = (state_32026[(9)]);
var inst_32010 = (state_32026[(10)]);
var inst_32014 = inst_32012.call(null,inst_32010);
var state_32026__$1 = state_32026;
var statearr_32036_32054 = state_32026__$1;
(statearr_32036_32054[(2)] = inst_32014);

(statearr_32036_32054[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32027 === (5))){
var inst_32006 = (state_32026[(7)]);
var inst_32008 = figwheel.client.file_reloading.blocking_load.call(null,inst_32006);
var state_32026__$1 = state_32026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32026__$1,(8),inst_32008);
} else {
if((state_val_32027 === (10))){
var inst_32010 = (state_32026[(10)]);
var inst_32016 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32010);
var state_32026__$1 = state_32026;
var statearr_32037_32055 = state_32026__$1;
(statearr_32037_32055[(2)] = inst_32016);

(statearr_32037_32055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32027 === (8))){
var inst_32012 = (state_32026[(9)]);
var inst_32006 = (state_32026[(7)]);
var inst_32010 = (state_32026[(2)]);
var inst_32011 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32012__$1 = cljs.core.get.call(null,inst_32011,inst_32006);
var state_32026__$1 = (function (){var statearr_32038 = state_32026;
(statearr_32038[(9)] = inst_32012__$1);

(statearr_32038[(10)] = inst_32010);

return statearr_32038;
})();
if(cljs.core.truth_(inst_32012__$1)){
var statearr_32039_32056 = state_32026__$1;
(statearr_32039_32056[(1)] = (9));

} else {
var statearr_32040_32057 = state_32026__$1;
(statearr_32040_32057[(1)] = (10));

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
});})(c__27046__auto__))
;
return ((function (switch__26934__auto__,c__27046__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26935__auto__ = null;
var figwheel$client$file_reloading$state_machine__26935__auto____0 = (function (){
var statearr_32044 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32044[(0)] = figwheel$client$file_reloading$state_machine__26935__auto__);

(statearr_32044[(1)] = (1));

return statearr_32044;
});
var figwheel$client$file_reloading$state_machine__26935__auto____1 = (function (state_32026){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_32026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e32045){if((e32045 instanceof Object)){
var ex__26938__auto__ = e32045;
var statearr_32046_32058 = state_32026;
(statearr_32046_32058[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32059 = state_32026;
state_32026 = G__32059;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26935__auto__ = function(state_32026){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26935__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26935__auto____1.call(this,state_32026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26935__auto____0;
figwheel$client$file_reloading$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26935__auto____1;
return figwheel$client$file_reloading$state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto__))
})();
var state__27048__auto__ = (function (){var statearr_32047 = f__27047__auto__.call(null);
(statearr_32047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto__);

return statearr_32047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto__))
);

return c__27046__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32060,callback){
var map__32063 = p__32060;
var map__32063__$1 = ((((!((map__32063 == null)))?((((map__32063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32063):map__32063);
var file_msg = map__32063__$1;
var namespace = cljs.core.get.call(null,map__32063__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32063,map__32063__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32063,map__32063__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32065){
var map__32068 = p__32065;
var map__32068__$1 = ((((!((map__32068 == null)))?((((map__32068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32068):map__32068);
var file_msg = map__32068__$1;
var namespace = cljs.core.get.call(null,map__32068__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32070){
var map__32073 = p__32070;
var map__32073__$1 = ((((!((map__32073 == null)))?((((map__32073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32073):map__32073);
var file_msg = map__32073__$1;
var namespace = cljs.core.get.call(null,map__32073__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32075,callback){
var map__32078 = p__32075;
var map__32078__$1 = ((((!((map__32078 == null)))?((((map__32078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32078):map__32078);
var file_msg = map__32078__$1;
var request_url = cljs.core.get.call(null,map__32078__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32078__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27046__auto___32182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto___32182,out){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto___32182,out){
return (function (state_32164){
var state_val_32165 = (state_32164[(1)]);
if((state_val_32165 === (1))){
var inst_32138 = cljs.core.seq.call(null,files);
var inst_32139 = cljs.core.first.call(null,inst_32138);
var inst_32140 = cljs.core.next.call(null,inst_32138);
var inst_32141 = files;
var state_32164__$1 = (function (){var statearr_32166 = state_32164;
(statearr_32166[(7)] = inst_32140);

(statearr_32166[(8)] = inst_32139);

(statearr_32166[(9)] = inst_32141);

return statearr_32166;
})();
var statearr_32167_32183 = state_32164__$1;
(statearr_32167_32183[(2)] = null);

(statearr_32167_32183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32165 === (2))){
var inst_32147 = (state_32164[(10)]);
var inst_32141 = (state_32164[(9)]);
var inst_32146 = cljs.core.seq.call(null,inst_32141);
var inst_32147__$1 = cljs.core.first.call(null,inst_32146);
var inst_32148 = cljs.core.next.call(null,inst_32146);
var inst_32149 = (inst_32147__$1 == null);
var inst_32150 = cljs.core.not.call(null,inst_32149);
var state_32164__$1 = (function (){var statearr_32168 = state_32164;
(statearr_32168[(10)] = inst_32147__$1);

(statearr_32168[(11)] = inst_32148);

return statearr_32168;
})();
if(inst_32150){
var statearr_32169_32184 = state_32164__$1;
(statearr_32169_32184[(1)] = (4));

} else {
var statearr_32170_32185 = state_32164__$1;
(statearr_32170_32185[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32165 === (3))){
var inst_32162 = (state_32164[(2)]);
var state_32164__$1 = state_32164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32164__$1,inst_32162);
} else {
if((state_val_32165 === (4))){
var inst_32147 = (state_32164[(10)]);
var inst_32152 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32147);
var state_32164__$1 = state_32164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32164__$1,(7),inst_32152);
} else {
if((state_val_32165 === (5))){
var inst_32158 = cljs.core.async.close_BANG_.call(null,out);
var state_32164__$1 = state_32164;
var statearr_32171_32186 = state_32164__$1;
(statearr_32171_32186[(2)] = inst_32158);

(statearr_32171_32186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32165 === (6))){
var inst_32160 = (state_32164[(2)]);
var state_32164__$1 = state_32164;
var statearr_32172_32187 = state_32164__$1;
(statearr_32172_32187[(2)] = inst_32160);

(statearr_32172_32187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32165 === (7))){
var inst_32148 = (state_32164[(11)]);
var inst_32154 = (state_32164[(2)]);
var inst_32155 = cljs.core.async.put_BANG_.call(null,out,inst_32154);
var inst_32141 = inst_32148;
var state_32164__$1 = (function (){var statearr_32173 = state_32164;
(statearr_32173[(12)] = inst_32155);

(statearr_32173[(9)] = inst_32141);

return statearr_32173;
})();
var statearr_32174_32188 = state_32164__$1;
(statearr_32174_32188[(2)] = null);

(statearr_32174_32188[(1)] = (2));


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
});})(c__27046__auto___32182,out))
;
return ((function (switch__26934__auto__,c__27046__auto___32182,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26935__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26935__auto____0 = (function (){
var statearr_32178 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32178[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26935__auto__);

(statearr_32178[(1)] = (1));

return statearr_32178;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26935__auto____1 = (function (state_32164){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_32164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e32179){if((e32179 instanceof Object)){
var ex__26938__auto__ = e32179;
var statearr_32180_32189 = state_32164;
(statearr_32180_32189[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32190 = state_32164;
state_32164 = G__32190;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26935__auto__ = function(state_32164){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26935__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26935__auto____1.call(this,state_32164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26935__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26935__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto___32182,out))
})();
var state__27048__auto__ = (function (){var statearr_32181 = f__27047__auto__.call(null);
(statearr_32181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___32182);

return statearr_32181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto___32182,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32191,opts){
var map__32195 = p__32191;
var map__32195__$1 = ((((!((map__32195 == null)))?((((map__32195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32195):map__32195);
var eval_body__$1 = cljs.core.get.call(null,map__32195__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32195__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e32197){var e = e32197;
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
return (function (p1__32198_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32198_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__32207){
var vec__32208 = p__32207;
var k = cljs.core.nth.call(null,vec__32208,(0),null);
var v = cljs.core.nth.call(null,vec__32208,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32211){
var vec__32212 = p__32211;
var k = cljs.core.nth.call(null,vec__32212,(0),null);
var v = cljs.core.nth.call(null,vec__32212,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32218,p__32219){
var map__32466 = p__32218;
var map__32466__$1 = ((((!((map__32466 == null)))?((((map__32466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32466):map__32466);
var opts = map__32466__$1;
var before_jsload = cljs.core.get.call(null,map__32466__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32466__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32466__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32467 = p__32219;
var map__32467__$1 = ((((!((map__32467 == null)))?((((map__32467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32467):map__32467);
var msg = map__32467__$1;
var files = cljs.core.get.call(null,map__32467__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32467__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32467__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32620){
var state_val_32621 = (state_32620[(1)]);
if((state_val_32621 === (7))){
var inst_32483 = (state_32620[(7)]);
var inst_32482 = (state_32620[(8)]);
var inst_32484 = (state_32620[(9)]);
var inst_32481 = (state_32620[(10)]);
var inst_32489 = cljs.core._nth.call(null,inst_32482,inst_32484);
var inst_32490 = figwheel.client.file_reloading.eval_body.call(null,inst_32489,opts);
var inst_32491 = (inst_32484 + (1));
var tmp32622 = inst_32483;
var tmp32623 = inst_32482;
var tmp32624 = inst_32481;
var inst_32481__$1 = tmp32624;
var inst_32482__$1 = tmp32623;
var inst_32483__$1 = tmp32622;
var inst_32484__$1 = inst_32491;
var state_32620__$1 = (function (){var statearr_32625 = state_32620;
(statearr_32625[(7)] = inst_32483__$1);

(statearr_32625[(8)] = inst_32482__$1);

(statearr_32625[(9)] = inst_32484__$1);

(statearr_32625[(10)] = inst_32481__$1);

(statearr_32625[(11)] = inst_32490);

return statearr_32625;
})();
var statearr_32626_32712 = state_32620__$1;
(statearr_32626_32712[(2)] = null);

(statearr_32626_32712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (20))){
var inst_32524 = (state_32620[(12)]);
var inst_32532 = figwheel.client.file_reloading.sort_files.call(null,inst_32524);
var state_32620__$1 = state_32620;
var statearr_32627_32713 = state_32620__$1;
(statearr_32627_32713[(2)] = inst_32532);

(statearr_32627_32713[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (27))){
var state_32620__$1 = state_32620;
var statearr_32628_32714 = state_32620__$1;
(statearr_32628_32714[(2)] = null);

(statearr_32628_32714[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (1))){
var inst_32473 = (state_32620[(13)]);
var inst_32470 = before_jsload.call(null,files);
var inst_32471 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32472 = (function (){return ((function (inst_32473,inst_32470,inst_32471,state_val_32621,c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32215_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32215_SHARP_);
});
;})(inst_32473,inst_32470,inst_32471,state_val_32621,c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32473__$1 = cljs.core.filter.call(null,inst_32472,files);
var inst_32474 = cljs.core.not_empty.call(null,inst_32473__$1);
var state_32620__$1 = (function (){var statearr_32629 = state_32620;
(statearr_32629[(13)] = inst_32473__$1);

(statearr_32629[(14)] = inst_32471);

(statearr_32629[(15)] = inst_32470);

return statearr_32629;
})();
if(cljs.core.truth_(inst_32474)){
var statearr_32630_32715 = state_32620__$1;
(statearr_32630_32715[(1)] = (2));

} else {
var statearr_32631_32716 = state_32620__$1;
(statearr_32631_32716[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (24))){
var state_32620__$1 = state_32620;
var statearr_32632_32717 = state_32620__$1;
(statearr_32632_32717[(2)] = null);

(statearr_32632_32717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (39))){
var inst_32574 = (state_32620[(16)]);
var state_32620__$1 = state_32620;
var statearr_32633_32718 = state_32620__$1;
(statearr_32633_32718[(2)] = inst_32574);

(statearr_32633_32718[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (46))){
var inst_32615 = (state_32620[(2)]);
var state_32620__$1 = state_32620;
var statearr_32634_32719 = state_32620__$1;
(statearr_32634_32719[(2)] = inst_32615);

(statearr_32634_32719[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (4))){
var inst_32518 = (state_32620[(2)]);
var inst_32519 = cljs.core.List.EMPTY;
var inst_32520 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32519);
var inst_32521 = (function (){return ((function (inst_32518,inst_32519,inst_32520,state_val_32621,c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32216_SHARP_){
var and__24860__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32216_SHARP_);
if(cljs.core.truth_(and__24860__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32216_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32216_SHARP_)));
} else {
return and__24860__auto__;
}
});
;})(inst_32518,inst_32519,inst_32520,state_val_32621,c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32522 = cljs.core.filter.call(null,inst_32521,files);
var inst_32523 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32524 = cljs.core.concat.call(null,inst_32522,inst_32523);
var state_32620__$1 = (function (){var statearr_32635 = state_32620;
(statearr_32635[(12)] = inst_32524);

(statearr_32635[(17)] = inst_32518);

(statearr_32635[(18)] = inst_32520);

return statearr_32635;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32636_32720 = state_32620__$1;
(statearr_32636_32720[(1)] = (16));

} else {
var statearr_32637_32721 = state_32620__$1;
(statearr_32637_32721[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (15))){
var inst_32508 = (state_32620[(2)]);
var state_32620__$1 = state_32620;
var statearr_32638_32722 = state_32620__$1;
(statearr_32638_32722[(2)] = inst_32508);

(statearr_32638_32722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (21))){
var inst_32534 = (state_32620[(19)]);
var inst_32534__$1 = (state_32620[(2)]);
var inst_32535 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32534__$1);
var state_32620__$1 = (function (){var statearr_32639 = state_32620;
(statearr_32639[(19)] = inst_32534__$1);

return statearr_32639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32620__$1,(22),inst_32535);
} else {
if((state_val_32621 === (31))){
var inst_32618 = (state_32620[(2)]);
var state_32620__$1 = state_32620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32620__$1,inst_32618);
} else {
if((state_val_32621 === (32))){
var inst_32574 = (state_32620[(16)]);
var inst_32579 = inst_32574.cljs$lang$protocol_mask$partition0$;
var inst_32580 = (inst_32579 & (64));
var inst_32581 = inst_32574.cljs$core$ISeq$;
var inst_32582 = (inst_32580) || (inst_32581);
var state_32620__$1 = state_32620;
if(cljs.core.truth_(inst_32582)){
var statearr_32640_32723 = state_32620__$1;
(statearr_32640_32723[(1)] = (35));

} else {
var statearr_32641_32724 = state_32620__$1;
(statearr_32641_32724[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (40))){
var inst_32595 = (state_32620[(20)]);
var inst_32594 = (state_32620[(2)]);
var inst_32595__$1 = cljs.core.get.call(null,inst_32594,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32596 = cljs.core.get.call(null,inst_32594,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32597 = cljs.core.not_empty.call(null,inst_32595__$1);
var state_32620__$1 = (function (){var statearr_32642 = state_32620;
(statearr_32642[(20)] = inst_32595__$1);

(statearr_32642[(21)] = inst_32596);

return statearr_32642;
})();
if(cljs.core.truth_(inst_32597)){
var statearr_32643_32725 = state_32620__$1;
(statearr_32643_32725[(1)] = (41));

} else {
var statearr_32644_32726 = state_32620__$1;
(statearr_32644_32726[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (33))){
var state_32620__$1 = state_32620;
var statearr_32645_32727 = state_32620__$1;
(statearr_32645_32727[(2)] = false);

(statearr_32645_32727[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (13))){
var inst_32494 = (state_32620[(22)]);
var inst_32498 = cljs.core.chunk_first.call(null,inst_32494);
var inst_32499 = cljs.core.chunk_rest.call(null,inst_32494);
var inst_32500 = cljs.core.count.call(null,inst_32498);
var inst_32481 = inst_32499;
var inst_32482 = inst_32498;
var inst_32483 = inst_32500;
var inst_32484 = (0);
var state_32620__$1 = (function (){var statearr_32646 = state_32620;
(statearr_32646[(7)] = inst_32483);

(statearr_32646[(8)] = inst_32482);

(statearr_32646[(9)] = inst_32484);

(statearr_32646[(10)] = inst_32481);

return statearr_32646;
})();
var statearr_32647_32728 = state_32620__$1;
(statearr_32647_32728[(2)] = null);

(statearr_32647_32728[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (22))){
var inst_32537 = (state_32620[(23)]);
var inst_32534 = (state_32620[(19)]);
var inst_32542 = (state_32620[(24)]);
var inst_32538 = (state_32620[(25)]);
var inst_32537__$1 = (state_32620[(2)]);
var inst_32538__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32537__$1);
var inst_32539 = (function (){var all_files = inst_32534;
var res_SINGLEQUOTE_ = inst_32537__$1;
var res = inst_32538__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32537,inst_32534,inst_32542,inst_32538,inst_32537__$1,inst_32538__$1,state_val_32621,c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32217_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32217_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32537,inst_32534,inst_32542,inst_32538,inst_32537__$1,inst_32538__$1,state_val_32621,c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32540 = cljs.core.filter.call(null,inst_32539,inst_32537__$1);
var inst_32541 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32542__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32541);
var inst_32543 = cljs.core.not_empty.call(null,inst_32542__$1);
var state_32620__$1 = (function (){var statearr_32648 = state_32620;
(statearr_32648[(26)] = inst_32540);

(statearr_32648[(23)] = inst_32537__$1);

(statearr_32648[(24)] = inst_32542__$1);

(statearr_32648[(25)] = inst_32538__$1);

return statearr_32648;
})();
if(cljs.core.truth_(inst_32543)){
var statearr_32649_32729 = state_32620__$1;
(statearr_32649_32729[(1)] = (23));

} else {
var statearr_32650_32730 = state_32620__$1;
(statearr_32650_32730[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (36))){
var state_32620__$1 = state_32620;
var statearr_32651_32731 = state_32620__$1;
(statearr_32651_32731[(2)] = false);

(statearr_32651_32731[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (41))){
var inst_32595 = (state_32620[(20)]);
var inst_32599 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32600 = cljs.core.map.call(null,inst_32599,inst_32595);
var inst_32601 = cljs.core.pr_str.call(null,inst_32600);
var inst_32602 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32601)].join('');
var inst_32603 = figwheel.client.utils.log.call(null,inst_32602);
var state_32620__$1 = state_32620;
var statearr_32652_32732 = state_32620__$1;
(statearr_32652_32732[(2)] = inst_32603);

(statearr_32652_32732[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (43))){
var inst_32596 = (state_32620[(21)]);
var inst_32606 = (state_32620[(2)]);
var inst_32607 = cljs.core.not_empty.call(null,inst_32596);
var state_32620__$1 = (function (){var statearr_32653 = state_32620;
(statearr_32653[(27)] = inst_32606);

return statearr_32653;
})();
if(cljs.core.truth_(inst_32607)){
var statearr_32654_32733 = state_32620__$1;
(statearr_32654_32733[(1)] = (44));

} else {
var statearr_32655_32734 = state_32620__$1;
(statearr_32655_32734[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (29))){
var inst_32540 = (state_32620[(26)]);
var inst_32537 = (state_32620[(23)]);
var inst_32534 = (state_32620[(19)]);
var inst_32542 = (state_32620[(24)]);
var inst_32574 = (state_32620[(16)]);
var inst_32538 = (state_32620[(25)]);
var inst_32570 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32573 = (function (){var all_files = inst_32534;
var res_SINGLEQUOTE_ = inst_32537;
var res = inst_32538;
var files_not_loaded = inst_32540;
var dependencies_that_loaded = inst_32542;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32540,inst_32537,inst_32534,inst_32542,inst_32574,inst_32538,inst_32570,state_val_32621,c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32572){
var map__32656 = p__32572;
var map__32656__$1 = ((((!((map__32656 == null)))?((((map__32656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32656):map__32656);
var namespace = cljs.core.get.call(null,map__32656__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32540,inst_32537,inst_32534,inst_32542,inst_32574,inst_32538,inst_32570,state_val_32621,c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32574__$1 = cljs.core.group_by.call(null,inst_32573,inst_32540);
var inst_32576 = (inst_32574__$1 == null);
var inst_32577 = cljs.core.not.call(null,inst_32576);
var state_32620__$1 = (function (){var statearr_32658 = state_32620;
(statearr_32658[(16)] = inst_32574__$1);

(statearr_32658[(28)] = inst_32570);

return statearr_32658;
})();
if(inst_32577){
var statearr_32659_32735 = state_32620__$1;
(statearr_32659_32735[(1)] = (32));

} else {
var statearr_32660_32736 = state_32620__$1;
(statearr_32660_32736[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (44))){
var inst_32596 = (state_32620[(21)]);
var inst_32609 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32596);
var inst_32610 = cljs.core.pr_str.call(null,inst_32609);
var inst_32611 = [cljs.core.str("not required: "),cljs.core.str(inst_32610)].join('');
var inst_32612 = figwheel.client.utils.log.call(null,inst_32611);
var state_32620__$1 = state_32620;
var statearr_32661_32737 = state_32620__$1;
(statearr_32661_32737[(2)] = inst_32612);

(statearr_32661_32737[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (6))){
var inst_32515 = (state_32620[(2)]);
var state_32620__$1 = state_32620;
var statearr_32662_32738 = state_32620__$1;
(statearr_32662_32738[(2)] = inst_32515);

(statearr_32662_32738[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (28))){
var inst_32540 = (state_32620[(26)]);
var inst_32567 = (state_32620[(2)]);
var inst_32568 = cljs.core.not_empty.call(null,inst_32540);
var state_32620__$1 = (function (){var statearr_32663 = state_32620;
(statearr_32663[(29)] = inst_32567);

return statearr_32663;
})();
if(cljs.core.truth_(inst_32568)){
var statearr_32664_32739 = state_32620__$1;
(statearr_32664_32739[(1)] = (29));

} else {
var statearr_32665_32740 = state_32620__$1;
(statearr_32665_32740[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (25))){
var inst_32538 = (state_32620[(25)]);
var inst_32554 = (state_32620[(2)]);
var inst_32555 = cljs.core.not_empty.call(null,inst_32538);
var state_32620__$1 = (function (){var statearr_32666 = state_32620;
(statearr_32666[(30)] = inst_32554);

return statearr_32666;
})();
if(cljs.core.truth_(inst_32555)){
var statearr_32667_32741 = state_32620__$1;
(statearr_32667_32741[(1)] = (26));

} else {
var statearr_32668_32742 = state_32620__$1;
(statearr_32668_32742[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (34))){
var inst_32589 = (state_32620[(2)]);
var state_32620__$1 = state_32620;
if(cljs.core.truth_(inst_32589)){
var statearr_32669_32743 = state_32620__$1;
(statearr_32669_32743[(1)] = (38));

} else {
var statearr_32670_32744 = state_32620__$1;
(statearr_32670_32744[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (17))){
var state_32620__$1 = state_32620;
var statearr_32671_32745 = state_32620__$1;
(statearr_32671_32745[(2)] = recompile_dependents);

(statearr_32671_32745[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (3))){
var state_32620__$1 = state_32620;
var statearr_32672_32746 = state_32620__$1;
(statearr_32672_32746[(2)] = null);

(statearr_32672_32746[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (12))){
var inst_32511 = (state_32620[(2)]);
var state_32620__$1 = state_32620;
var statearr_32673_32747 = state_32620__$1;
(statearr_32673_32747[(2)] = inst_32511);

(statearr_32673_32747[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (2))){
var inst_32473 = (state_32620[(13)]);
var inst_32480 = cljs.core.seq.call(null,inst_32473);
var inst_32481 = inst_32480;
var inst_32482 = null;
var inst_32483 = (0);
var inst_32484 = (0);
var state_32620__$1 = (function (){var statearr_32674 = state_32620;
(statearr_32674[(7)] = inst_32483);

(statearr_32674[(8)] = inst_32482);

(statearr_32674[(9)] = inst_32484);

(statearr_32674[(10)] = inst_32481);

return statearr_32674;
})();
var statearr_32675_32748 = state_32620__$1;
(statearr_32675_32748[(2)] = null);

(statearr_32675_32748[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (23))){
var inst_32540 = (state_32620[(26)]);
var inst_32537 = (state_32620[(23)]);
var inst_32534 = (state_32620[(19)]);
var inst_32542 = (state_32620[(24)]);
var inst_32538 = (state_32620[(25)]);
var inst_32545 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32547 = (function (){var all_files = inst_32534;
var res_SINGLEQUOTE_ = inst_32537;
var res = inst_32538;
var files_not_loaded = inst_32540;
var dependencies_that_loaded = inst_32542;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32540,inst_32537,inst_32534,inst_32542,inst_32538,inst_32545,state_val_32621,c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32546){
var map__32676 = p__32546;
var map__32676__$1 = ((((!((map__32676 == null)))?((((map__32676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32676):map__32676);
var request_url = cljs.core.get.call(null,map__32676__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32540,inst_32537,inst_32534,inst_32542,inst_32538,inst_32545,state_val_32621,c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32548 = cljs.core.reverse.call(null,inst_32542);
var inst_32549 = cljs.core.map.call(null,inst_32547,inst_32548);
var inst_32550 = cljs.core.pr_str.call(null,inst_32549);
var inst_32551 = figwheel.client.utils.log.call(null,inst_32550);
var state_32620__$1 = (function (){var statearr_32678 = state_32620;
(statearr_32678[(31)] = inst_32545);

return statearr_32678;
})();
var statearr_32679_32749 = state_32620__$1;
(statearr_32679_32749[(2)] = inst_32551);

(statearr_32679_32749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (35))){
var state_32620__$1 = state_32620;
var statearr_32680_32750 = state_32620__$1;
(statearr_32680_32750[(2)] = true);

(statearr_32680_32750[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (19))){
var inst_32524 = (state_32620[(12)]);
var inst_32530 = figwheel.client.file_reloading.expand_files.call(null,inst_32524);
var state_32620__$1 = state_32620;
var statearr_32681_32751 = state_32620__$1;
(statearr_32681_32751[(2)] = inst_32530);

(statearr_32681_32751[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (11))){
var state_32620__$1 = state_32620;
var statearr_32682_32752 = state_32620__$1;
(statearr_32682_32752[(2)] = null);

(statearr_32682_32752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (9))){
var inst_32513 = (state_32620[(2)]);
var state_32620__$1 = state_32620;
var statearr_32683_32753 = state_32620__$1;
(statearr_32683_32753[(2)] = inst_32513);

(statearr_32683_32753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (5))){
var inst_32483 = (state_32620[(7)]);
var inst_32484 = (state_32620[(9)]);
var inst_32486 = (inst_32484 < inst_32483);
var inst_32487 = inst_32486;
var state_32620__$1 = state_32620;
if(cljs.core.truth_(inst_32487)){
var statearr_32684_32754 = state_32620__$1;
(statearr_32684_32754[(1)] = (7));

} else {
var statearr_32685_32755 = state_32620__$1;
(statearr_32685_32755[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (14))){
var inst_32494 = (state_32620[(22)]);
var inst_32503 = cljs.core.first.call(null,inst_32494);
var inst_32504 = figwheel.client.file_reloading.eval_body.call(null,inst_32503,opts);
var inst_32505 = cljs.core.next.call(null,inst_32494);
var inst_32481 = inst_32505;
var inst_32482 = null;
var inst_32483 = (0);
var inst_32484 = (0);
var state_32620__$1 = (function (){var statearr_32686 = state_32620;
(statearr_32686[(7)] = inst_32483);

(statearr_32686[(32)] = inst_32504);

(statearr_32686[(8)] = inst_32482);

(statearr_32686[(9)] = inst_32484);

(statearr_32686[(10)] = inst_32481);

return statearr_32686;
})();
var statearr_32687_32756 = state_32620__$1;
(statearr_32687_32756[(2)] = null);

(statearr_32687_32756[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (45))){
var state_32620__$1 = state_32620;
var statearr_32688_32757 = state_32620__$1;
(statearr_32688_32757[(2)] = null);

(statearr_32688_32757[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (26))){
var inst_32540 = (state_32620[(26)]);
var inst_32537 = (state_32620[(23)]);
var inst_32534 = (state_32620[(19)]);
var inst_32542 = (state_32620[(24)]);
var inst_32538 = (state_32620[(25)]);
var inst_32557 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32559 = (function (){var all_files = inst_32534;
var res_SINGLEQUOTE_ = inst_32537;
var res = inst_32538;
var files_not_loaded = inst_32540;
var dependencies_that_loaded = inst_32542;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32540,inst_32537,inst_32534,inst_32542,inst_32538,inst_32557,state_val_32621,c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32558){
var map__32689 = p__32558;
var map__32689__$1 = ((((!((map__32689 == null)))?((((map__32689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32689):map__32689);
var namespace = cljs.core.get.call(null,map__32689__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32689__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32540,inst_32537,inst_32534,inst_32542,inst_32538,inst_32557,state_val_32621,c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32560 = cljs.core.map.call(null,inst_32559,inst_32538);
var inst_32561 = cljs.core.pr_str.call(null,inst_32560);
var inst_32562 = figwheel.client.utils.log.call(null,inst_32561);
var inst_32563 = (function (){var all_files = inst_32534;
var res_SINGLEQUOTE_ = inst_32537;
var res = inst_32538;
var files_not_loaded = inst_32540;
var dependencies_that_loaded = inst_32542;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32540,inst_32537,inst_32534,inst_32542,inst_32538,inst_32557,inst_32559,inst_32560,inst_32561,inst_32562,state_val_32621,c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32540,inst_32537,inst_32534,inst_32542,inst_32538,inst_32557,inst_32559,inst_32560,inst_32561,inst_32562,state_val_32621,c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32564 = setTimeout(inst_32563,(10));
var state_32620__$1 = (function (){var statearr_32691 = state_32620;
(statearr_32691[(33)] = inst_32562);

(statearr_32691[(34)] = inst_32557);

return statearr_32691;
})();
var statearr_32692_32758 = state_32620__$1;
(statearr_32692_32758[(2)] = inst_32564);

(statearr_32692_32758[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (16))){
var state_32620__$1 = state_32620;
var statearr_32693_32759 = state_32620__$1;
(statearr_32693_32759[(2)] = reload_dependents);

(statearr_32693_32759[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (38))){
var inst_32574 = (state_32620[(16)]);
var inst_32591 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32574);
var state_32620__$1 = state_32620;
var statearr_32694_32760 = state_32620__$1;
(statearr_32694_32760[(2)] = inst_32591);

(statearr_32694_32760[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (30))){
var state_32620__$1 = state_32620;
var statearr_32695_32761 = state_32620__$1;
(statearr_32695_32761[(2)] = null);

(statearr_32695_32761[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (10))){
var inst_32494 = (state_32620[(22)]);
var inst_32496 = cljs.core.chunked_seq_QMARK_.call(null,inst_32494);
var state_32620__$1 = state_32620;
if(inst_32496){
var statearr_32696_32762 = state_32620__$1;
(statearr_32696_32762[(1)] = (13));

} else {
var statearr_32697_32763 = state_32620__$1;
(statearr_32697_32763[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (18))){
var inst_32528 = (state_32620[(2)]);
var state_32620__$1 = state_32620;
if(cljs.core.truth_(inst_32528)){
var statearr_32698_32764 = state_32620__$1;
(statearr_32698_32764[(1)] = (19));

} else {
var statearr_32699_32765 = state_32620__$1;
(statearr_32699_32765[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (42))){
var state_32620__$1 = state_32620;
var statearr_32700_32766 = state_32620__$1;
(statearr_32700_32766[(2)] = null);

(statearr_32700_32766[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (37))){
var inst_32586 = (state_32620[(2)]);
var state_32620__$1 = state_32620;
var statearr_32701_32767 = state_32620__$1;
(statearr_32701_32767[(2)] = inst_32586);

(statearr_32701_32767[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32621 === (8))){
var inst_32494 = (state_32620[(22)]);
var inst_32481 = (state_32620[(10)]);
var inst_32494__$1 = cljs.core.seq.call(null,inst_32481);
var state_32620__$1 = (function (){var statearr_32702 = state_32620;
(statearr_32702[(22)] = inst_32494__$1);

return statearr_32702;
})();
if(inst_32494__$1){
var statearr_32703_32768 = state_32620__$1;
(statearr_32703_32768[(1)] = (10));

} else {
var statearr_32704_32769 = state_32620__$1;
(statearr_32704_32769[(1)] = (11));

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
});})(c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26934__auto__,c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26935__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26935__auto____0 = (function (){
var statearr_32708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32708[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26935__auto__);

(statearr_32708[(1)] = (1));

return statearr_32708;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26935__auto____1 = (function (state_32620){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_32620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e32709){if((e32709 instanceof Object)){
var ex__26938__auto__ = e32709;
var statearr_32710_32770 = state_32620;
(statearr_32710_32770[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32771 = state_32620;
state_32620 = G__32771;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26935__auto__ = function(state_32620){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26935__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26935__auto____1.call(this,state_32620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26935__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26935__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27048__auto__ = (function (){var statearr_32711 = f__27047__auto__.call(null);
(statearr_32711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto__);

return statearr_32711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto__,map__32466,map__32466__$1,opts,before_jsload,on_jsload,reload_dependents,map__32467,map__32467__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27046__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32774,link){
var map__32777 = p__32774;
var map__32777__$1 = ((((!((map__32777 == null)))?((((map__32777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32777):map__32777);
var file = cljs.core.get.call(null,map__32777__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__32777,map__32777__$1,file){
return (function (p1__32772_SHARP_,p2__32773_SHARP_){
if(cljs.core._EQ_.call(null,p1__32772_SHARP_,p2__32773_SHARP_)){
return p1__32772_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__32777,map__32777__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32783){
var map__32784 = p__32783;
var map__32784__$1 = ((((!((map__32784 == null)))?((((map__32784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32784):map__32784);
var match_length = cljs.core.get.call(null,map__32784__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32784__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32779_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32779_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32786_SHARP_,p2__32787_SHARP_){
return cljs.core.assoc.call(null,p1__32786_SHARP_,cljs.core.get.call(null,p2__32787_SHARP_,key),p2__32787_SHARP_);
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
var loaded_f_datas_32788 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32788);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32788);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32789,p__32790){
var map__32795 = p__32789;
var map__32795__$1 = ((((!((map__32795 == null)))?((((map__32795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32795):map__32795);
var on_cssload = cljs.core.get.call(null,map__32795__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32796 = p__32790;
var map__32796__$1 = ((((!((map__32796 == null)))?((((map__32796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32796):map__32796);
var files_msg = map__32796__$1;
var files = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1486526665997