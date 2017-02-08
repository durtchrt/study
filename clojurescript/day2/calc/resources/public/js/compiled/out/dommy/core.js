// Compiled by ClojureScript 1.9.229 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__24872__auto__ = elem.textContent;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args39000 = [];
var len__25947__auto___39003 = arguments.length;
var i__25948__auto___39004 = (0);
while(true){
if((i__25948__auto___39004 < len__25947__auto___39003)){
args39000.push((arguments[i__25948__auto___39004]));

var G__39005 = (i__25948__auto___39004 + (1));
i__25948__auto___39004 = G__39005;
continue;
} else {
}
break;
}

var G__39002 = args39000.length;
switch (G__39002) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39000.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args39007 = [];
var len__25947__auto___39010 = arguments.length;
var i__25948__auto___39011 = (0);
while(true){
if((i__25948__auto___39011 < len__25947__auto___39010)){
args39007.push((arguments[i__25948__auto___39011]));

var G__39012 = (i__25948__auto___39011 + (1));
i__25948__auto___39011 = G__39012;
continue;
} else {
}
break;
}

var G__39009 = args39007.length;
switch (G__39009) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39007.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args39015 = [];
var len__25947__auto___39018 = arguments.length;
var i__25948__auto___39019 = (0);
while(true){
if((i__25948__auto___39019 < len__25947__auto___39018)){
args39015.push((arguments[i__25948__auto___39019]));

var G__39020 = (i__25948__auto___39019 + (1));
i__25948__auto___39019 = G__39020;
continue;
} else {
}
break;
}

var G__39017 = args39015.length;
switch (G__39017) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39015.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__39014_SHARP_){
return !((p1__39014_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39034 = arguments.length;
var i__25948__auto___39035 = (0);
while(true){
if((i__25948__auto___39035 < len__25947__auto___39034)){
args__25954__auto__.push((arguments[i__25948__auto___39035]));

var G__39036 = (i__25948__auto___39035 + (1));
i__25948__auto___39035 = G__39036;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__39024_39037 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__39025_39038 = null;
var count__39026_39039 = (0);
var i__39027_39040 = (0);
while(true){
if((i__39027_39040 < count__39026_39039)){
var vec__39028_39041 = cljs.core._nth.call(null,chunk__39025_39038,i__39027_39040);
var k_39042 = cljs.core.nth.call(null,vec__39028_39041,(0),null);
var v_39043 = cljs.core.nth.call(null,vec__39028_39041,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_39042),v_39043);

var G__39044 = seq__39024_39037;
var G__39045 = chunk__39025_39038;
var G__39046 = count__39026_39039;
var G__39047 = (i__39027_39040 + (1));
seq__39024_39037 = G__39044;
chunk__39025_39038 = G__39045;
count__39026_39039 = G__39046;
i__39027_39040 = G__39047;
continue;
} else {
var temp__4657__auto___39048 = cljs.core.seq.call(null,seq__39024_39037);
if(temp__4657__auto___39048){
var seq__39024_39049__$1 = temp__4657__auto___39048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39024_39049__$1)){
var c__25683__auto___39050 = cljs.core.chunk_first.call(null,seq__39024_39049__$1);
var G__39051 = cljs.core.chunk_rest.call(null,seq__39024_39049__$1);
var G__39052 = c__25683__auto___39050;
var G__39053 = cljs.core.count.call(null,c__25683__auto___39050);
var G__39054 = (0);
seq__39024_39037 = G__39051;
chunk__39025_39038 = G__39052;
count__39026_39039 = G__39053;
i__39027_39040 = G__39054;
continue;
} else {
var vec__39031_39055 = cljs.core.first.call(null,seq__39024_39049__$1);
var k_39056 = cljs.core.nth.call(null,vec__39031_39055,(0),null);
var v_39057 = cljs.core.nth.call(null,vec__39031_39055,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_39056),v_39057);

var G__39058 = cljs.core.next.call(null,seq__39024_39049__$1);
var G__39059 = null;
var G__39060 = (0);
var G__39061 = (0);
seq__39024_39037 = G__39058;
chunk__39025_39038 = G__39059;
count__39026_39039 = G__39060;
i__39027_39040 = G__39061;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq39022){
var G__39023 = cljs.core.first.call(null,seq39022);
var seq39022__$1 = cljs.core.next.call(null,seq39022);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39023,seq39022__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39068 = arguments.length;
var i__25948__auto___39069 = (0);
while(true){
if((i__25948__auto___39069 < len__25947__auto___39068)){
args__25954__auto__.push((arguments[i__25948__auto___39069]));

var G__39070 = (i__25948__auto___39069 + (1));
i__25948__auto___39069 = G__39070;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__39064_39071 = cljs.core.seq.call(null,keywords);
var chunk__39065_39072 = null;
var count__39066_39073 = (0);
var i__39067_39074 = (0);
while(true){
if((i__39067_39074 < count__39066_39073)){
var kw_39075 = cljs.core._nth.call(null,chunk__39065_39072,i__39067_39074);
style.removeProperty(dommy.utils.as_str.call(null,kw_39075));

var G__39076 = seq__39064_39071;
var G__39077 = chunk__39065_39072;
var G__39078 = count__39066_39073;
var G__39079 = (i__39067_39074 + (1));
seq__39064_39071 = G__39076;
chunk__39065_39072 = G__39077;
count__39066_39073 = G__39078;
i__39067_39074 = G__39079;
continue;
} else {
var temp__4657__auto___39080 = cljs.core.seq.call(null,seq__39064_39071);
if(temp__4657__auto___39080){
var seq__39064_39081__$1 = temp__4657__auto___39080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39064_39081__$1)){
var c__25683__auto___39082 = cljs.core.chunk_first.call(null,seq__39064_39081__$1);
var G__39083 = cljs.core.chunk_rest.call(null,seq__39064_39081__$1);
var G__39084 = c__25683__auto___39082;
var G__39085 = cljs.core.count.call(null,c__25683__auto___39082);
var G__39086 = (0);
seq__39064_39071 = G__39083;
chunk__39065_39072 = G__39084;
count__39066_39073 = G__39085;
i__39067_39074 = G__39086;
continue;
} else {
var kw_39087 = cljs.core.first.call(null,seq__39064_39081__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_39087));

var G__39088 = cljs.core.next.call(null,seq__39064_39081__$1);
var G__39089 = null;
var G__39090 = (0);
var G__39091 = (0);
seq__39064_39071 = G__39088;
chunk__39065_39072 = G__39089;
count__39066_39073 = G__39090;
i__39067_39074 = G__39091;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq39062){
var G__39063 = cljs.core.first.call(null,seq39062);
var seq39062__$1 = cljs.core.next.call(null,seq39062);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39063,seq39062__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39104 = arguments.length;
var i__25948__auto___39105 = (0);
while(true){
if((i__25948__auto___39105 < len__25947__auto___39104)){
args__25954__auto__.push((arguments[i__25948__auto___39105]));

var G__39106 = (i__25948__auto___39105 + (1));
i__25948__auto___39105 = G__39106;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__39094_39107 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__39095_39108 = null;
var count__39096_39109 = (0);
var i__39097_39110 = (0);
while(true){
if((i__39097_39110 < count__39096_39109)){
var vec__39098_39111 = cljs.core._nth.call(null,chunk__39095_39108,i__39097_39110);
var k_39112 = cljs.core.nth.call(null,vec__39098_39111,(0),null);
var v_39113 = cljs.core.nth.call(null,vec__39098_39111,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_39112,[cljs.core.str(v_39113),cljs.core.str("px")].join(''));

var G__39114 = seq__39094_39107;
var G__39115 = chunk__39095_39108;
var G__39116 = count__39096_39109;
var G__39117 = (i__39097_39110 + (1));
seq__39094_39107 = G__39114;
chunk__39095_39108 = G__39115;
count__39096_39109 = G__39116;
i__39097_39110 = G__39117;
continue;
} else {
var temp__4657__auto___39118 = cljs.core.seq.call(null,seq__39094_39107);
if(temp__4657__auto___39118){
var seq__39094_39119__$1 = temp__4657__auto___39118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39094_39119__$1)){
var c__25683__auto___39120 = cljs.core.chunk_first.call(null,seq__39094_39119__$1);
var G__39121 = cljs.core.chunk_rest.call(null,seq__39094_39119__$1);
var G__39122 = c__25683__auto___39120;
var G__39123 = cljs.core.count.call(null,c__25683__auto___39120);
var G__39124 = (0);
seq__39094_39107 = G__39121;
chunk__39095_39108 = G__39122;
count__39096_39109 = G__39123;
i__39097_39110 = G__39124;
continue;
} else {
var vec__39101_39125 = cljs.core.first.call(null,seq__39094_39119__$1);
var k_39126 = cljs.core.nth.call(null,vec__39101_39125,(0),null);
var v_39127 = cljs.core.nth.call(null,vec__39101_39125,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_39126,[cljs.core.str(v_39127),cljs.core.str("px")].join(''));

var G__39128 = cljs.core.next.call(null,seq__39094_39119__$1);
var G__39129 = null;
var G__39130 = (0);
var G__39131 = (0);
seq__39094_39107 = G__39128;
chunk__39095_39108 = G__39129;
count__39096_39109 = G__39130;
i__39097_39110 = G__39131;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq39092){
var G__39093 = cljs.core.first.call(null,seq39092);
var seq39092__$1 = cljs.core.next.call(null,seq39092);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39093,seq39092__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args39132 = [];
var len__25947__auto___39151 = arguments.length;
var i__25948__auto___39152 = (0);
while(true){
if((i__25948__auto___39152 < len__25947__auto___39151)){
args39132.push((arguments[i__25948__auto___39152]));

var G__39153 = (i__25948__auto___39152 + (1));
i__25948__auto___39152 = G__39153;
continue;
} else {
}
break;
}

var G__39138 = args39132.length;
switch (G__39138) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args39132.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25966__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__39139 = elem;
(G__39139[k__$1] = v);

return G__39139;
} else {
var G__39140 = elem;
G__39140.setAttribute(k__$1,v);

return G__39140;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__39141_39155 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__39142_39156 = null;
var count__39143_39157 = (0);
var i__39144_39158 = (0);
while(true){
if((i__39144_39158 < count__39143_39157)){
var vec__39145_39159 = cljs.core._nth.call(null,chunk__39142_39156,i__39144_39158);
var k_39160__$1 = cljs.core.nth.call(null,vec__39145_39159,(0),null);
var v_39161__$1 = cljs.core.nth.call(null,vec__39145_39159,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_39160__$1,v_39161__$1);

var G__39162 = seq__39141_39155;
var G__39163 = chunk__39142_39156;
var G__39164 = count__39143_39157;
var G__39165 = (i__39144_39158 + (1));
seq__39141_39155 = G__39162;
chunk__39142_39156 = G__39163;
count__39143_39157 = G__39164;
i__39144_39158 = G__39165;
continue;
} else {
var temp__4657__auto___39166 = cljs.core.seq.call(null,seq__39141_39155);
if(temp__4657__auto___39166){
var seq__39141_39167__$1 = temp__4657__auto___39166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39141_39167__$1)){
var c__25683__auto___39168 = cljs.core.chunk_first.call(null,seq__39141_39167__$1);
var G__39169 = cljs.core.chunk_rest.call(null,seq__39141_39167__$1);
var G__39170 = c__25683__auto___39168;
var G__39171 = cljs.core.count.call(null,c__25683__auto___39168);
var G__39172 = (0);
seq__39141_39155 = G__39169;
chunk__39142_39156 = G__39170;
count__39143_39157 = G__39171;
i__39144_39158 = G__39172;
continue;
} else {
var vec__39148_39173 = cljs.core.first.call(null,seq__39141_39167__$1);
var k_39174__$1 = cljs.core.nth.call(null,vec__39148_39173,(0),null);
var v_39175__$1 = cljs.core.nth.call(null,vec__39148_39173,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_39174__$1,v_39175__$1);

var G__39176 = cljs.core.next.call(null,seq__39141_39167__$1);
var G__39177 = null;
var G__39178 = (0);
var G__39179 = (0);
seq__39141_39155 = G__39176;
chunk__39142_39156 = G__39177;
count__39143_39157 = G__39178;
i__39144_39158 = G__39179;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq39133){
var G__39134 = cljs.core.first.call(null,seq39133);
var seq39133__$1 = cljs.core.next.call(null,seq39133);
var G__39135 = cljs.core.first.call(null,seq39133__$1);
var seq39133__$2 = cljs.core.next.call(null,seq39133__$1);
var G__39136 = cljs.core.first.call(null,seq39133__$2);
var seq39133__$3 = cljs.core.next.call(null,seq39133__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39134,G__39135,G__39136,seq39133__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args39180 = [];
var len__25947__auto___39190 = arguments.length;
var i__25948__auto___39191 = (0);
while(true){
if((i__25948__auto___39191 < len__25947__auto___39190)){
args39180.push((arguments[i__25948__auto___39191]));

var G__39192 = (i__25948__auto___39191 + (1));
i__25948__auto___39191 = G__39192;
continue;
} else {
}
break;
}

var G__39185 = args39180.length;
switch (G__39185) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args39180.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25966__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_39194__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_39194__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_39194__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__39186_39195 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__39187_39196 = null;
var count__39188_39197 = (0);
var i__39189_39198 = (0);
while(true){
if((i__39189_39198 < count__39188_39197)){
var k_39199__$1 = cljs.core._nth.call(null,chunk__39187_39196,i__39189_39198);
dommy.core.remove_attr_BANG_.call(null,elem,k_39199__$1);

var G__39200 = seq__39186_39195;
var G__39201 = chunk__39187_39196;
var G__39202 = count__39188_39197;
var G__39203 = (i__39189_39198 + (1));
seq__39186_39195 = G__39200;
chunk__39187_39196 = G__39201;
count__39188_39197 = G__39202;
i__39189_39198 = G__39203;
continue;
} else {
var temp__4657__auto___39204 = cljs.core.seq.call(null,seq__39186_39195);
if(temp__4657__auto___39204){
var seq__39186_39205__$1 = temp__4657__auto___39204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39186_39205__$1)){
var c__25683__auto___39206 = cljs.core.chunk_first.call(null,seq__39186_39205__$1);
var G__39207 = cljs.core.chunk_rest.call(null,seq__39186_39205__$1);
var G__39208 = c__25683__auto___39206;
var G__39209 = cljs.core.count.call(null,c__25683__auto___39206);
var G__39210 = (0);
seq__39186_39195 = G__39207;
chunk__39187_39196 = G__39208;
count__39188_39197 = G__39209;
i__39189_39198 = G__39210;
continue;
} else {
var k_39211__$1 = cljs.core.first.call(null,seq__39186_39205__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_39211__$1);

var G__39212 = cljs.core.next.call(null,seq__39186_39205__$1);
var G__39213 = null;
var G__39214 = (0);
var G__39215 = (0);
seq__39186_39195 = G__39212;
chunk__39187_39196 = G__39213;
count__39188_39197 = G__39214;
i__39189_39198 = G__39215;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq39181){
var G__39182 = cljs.core.first.call(null,seq39181);
var seq39181__$1 = cljs.core.next.call(null,seq39181);
var G__39183 = cljs.core.first.call(null,seq39181__$1);
var seq39181__$2 = cljs.core.next.call(null,seq39181__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39182,G__39183,seq39181__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args39216 = [];
var len__25947__auto___39219 = arguments.length;
var i__25948__auto___39220 = (0);
while(true){
if((i__25948__auto___39220 < len__25947__auto___39219)){
args39216.push((arguments[i__25948__auto___39220]));

var G__39221 = (i__25948__auto___39220 + (1));
i__25948__auto___39220 = G__39221;
continue;
} else {
}
break;
}

var G__39218 = args39216.length;
switch (G__39218) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39216.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args39223 = [];
var len__25947__auto___39241 = arguments.length;
var i__25948__auto___39242 = (0);
while(true){
if((i__25948__auto___39242 < len__25947__auto___39241)){
args39223.push((arguments[i__25948__auto___39242]));

var G__39243 = (i__25948__auto___39242 + (1));
i__25948__auto___39242 = G__39243;
continue;
} else {
}
break;
}

var G__39228 = args39223.length;
switch (G__39228) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args39223.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25966__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___39245 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___39245)){
var class_list_39246 = temp__4655__auto___39245;
var seq__39229_39247 = cljs.core.seq.call(null,classes__$1);
var chunk__39230_39248 = null;
var count__39231_39249 = (0);
var i__39232_39250 = (0);
while(true){
if((i__39232_39250 < count__39231_39249)){
var c_39251 = cljs.core._nth.call(null,chunk__39230_39248,i__39232_39250);
class_list_39246.add(c_39251);

var G__39252 = seq__39229_39247;
var G__39253 = chunk__39230_39248;
var G__39254 = count__39231_39249;
var G__39255 = (i__39232_39250 + (1));
seq__39229_39247 = G__39252;
chunk__39230_39248 = G__39253;
count__39231_39249 = G__39254;
i__39232_39250 = G__39255;
continue;
} else {
var temp__4657__auto___39256 = cljs.core.seq.call(null,seq__39229_39247);
if(temp__4657__auto___39256){
var seq__39229_39257__$1 = temp__4657__auto___39256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39229_39257__$1)){
var c__25683__auto___39258 = cljs.core.chunk_first.call(null,seq__39229_39257__$1);
var G__39259 = cljs.core.chunk_rest.call(null,seq__39229_39257__$1);
var G__39260 = c__25683__auto___39258;
var G__39261 = cljs.core.count.call(null,c__25683__auto___39258);
var G__39262 = (0);
seq__39229_39247 = G__39259;
chunk__39230_39248 = G__39260;
count__39231_39249 = G__39261;
i__39232_39250 = G__39262;
continue;
} else {
var c_39263 = cljs.core.first.call(null,seq__39229_39257__$1);
class_list_39246.add(c_39263);

var G__39264 = cljs.core.next.call(null,seq__39229_39257__$1);
var G__39265 = null;
var G__39266 = (0);
var G__39267 = (0);
seq__39229_39247 = G__39264;
chunk__39230_39248 = G__39265;
count__39231_39249 = G__39266;
i__39232_39250 = G__39267;
continue;
}
} else {
}
}
break;
}
} else {
var seq__39233_39268 = cljs.core.seq.call(null,classes__$1);
var chunk__39234_39269 = null;
var count__39235_39270 = (0);
var i__39236_39271 = (0);
while(true){
if((i__39236_39271 < count__39235_39270)){
var c_39272 = cljs.core._nth.call(null,chunk__39234_39269,i__39236_39271);
var class_name_39273 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_39273,c_39272))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_39273 === ""))?c_39272:[cljs.core.str(class_name_39273),cljs.core.str(" "),cljs.core.str(c_39272)].join('')));
}

var G__39274 = seq__39233_39268;
var G__39275 = chunk__39234_39269;
var G__39276 = count__39235_39270;
var G__39277 = (i__39236_39271 + (1));
seq__39233_39268 = G__39274;
chunk__39234_39269 = G__39275;
count__39235_39270 = G__39276;
i__39236_39271 = G__39277;
continue;
} else {
var temp__4657__auto___39278 = cljs.core.seq.call(null,seq__39233_39268);
if(temp__4657__auto___39278){
var seq__39233_39279__$1 = temp__4657__auto___39278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39233_39279__$1)){
var c__25683__auto___39280 = cljs.core.chunk_first.call(null,seq__39233_39279__$1);
var G__39281 = cljs.core.chunk_rest.call(null,seq__39233_39279__$1);
var G__39282 = c__25683__auto___39280;
var G__39283 = cljs.core.count.call(null,c__25683__auto___39280);
var G__39284 = (0);
seq__39233_39268 = G__39281;
chunk__39234_39269 = G__39282;
count__39235_39270 = G__39283;
i__39236_39271 = G__39284;
continue;
} else {
var c_39285 = cljs.core.first.call(null,seq__39233_39279__$1);
var class_name_39286 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_39286,c_39285))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_39286 === ""))?c_39285:[cljs.core.str(class_name_39286),cljs.core.str(" "),cljs.core.str(c_39285)].join('')));
}

var G__39287 = cljs.core.next.call(null,seq__39233_39279__$1);
var G__39288 = null;
var G__39289 = (0);
var G__39290 = (0);
seq__39233_39268 = G__39287;
chunk__39234_39269 = G__39288;
count__39235_39270 = G__39289;
i__39236_39271 = G__39290;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__39237_39291 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__39238_39292 = null;
var count__39239_39293 = (0);
var i__39240_39294 = (0);
while(true){
if((i__39240_39294 < count__39239_39293)){
var c_39295 = cljs.core._nth.call(null,chunk__39238_39292,i__39240_39294);
dommy.core.add_class_BANG_.call(null,elem,c_39295);

var G__39296 = seq__39237_39291;
var G__39297 = chunk__39238_39292;
var G__39298 = count__39239_39293;
var G__39299 = (i__39240_39294 + (1));
seq__39237_39291 = G__39296;
chunk__39238_39292 = G__39297;
count__39239_39293 = G__39298;
i__39240_39294 = G__39299;
continue;
} else {
var temp__4657__auto___39300 = cljs.core.seq.call(null,seq__39237_39291);
if(temp__4657__auto___39300){
var seq__39237_39301__$1 = temp__4657__auto___39300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39237_39301__$1)){
var c__25683__auto___39302 = cljs.core.chunk_first.call(null,seq__39237_39301__$1);
var G__39303 = cljs.core.chunk_rest.call(null,seq__39237_39301__$1);
var G__39304 = c__25683__auto___39302;
var G__39305 = cljs.core.count.call(null,c__25683__auto___39302);
var G__39306 = (0);
seq__39237_39291 = G__39303;
chunk__39238_39292 = G__39304;
count__39239_39293 = G__39305;
i__39240_39294 = G__39306;
continue;
} else {
var c_39307 = cljs.core.first.call(null,seq__39237_39301__$1);
dommy.core.add_class_BANG_.call(null,elem,c_39307);

var G__39308 = cljs.core.next.call(null,seq__39237_39301__$1);
var G__39309 = null;
var G__39310 = (0);
var G__39311 = (0);
seq__39237_39291 = G__39308;
chunk__39238_39292 = G__39309;
count__39239_39293 = G__39310;
i__39240_39294 = G__39311;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq39224){
var G__39225 = cljs.core.first.call(null,seq39224);
var seq39224__$1 = cljs.core.next.call(null,seq39224);
var G__39226 = cljs.core.first.call(null,seq39224__$1);
var seq39224__$2 = cljs.core.next.call(null,seq39224__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39225,G__39226,seq39224__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args39312 = [];
var len__25947__auto___39322 = arguments.length;
var i__25948__auto___39323 = (0);
while(true){
if((i__25948__auto___39323 < len__25947__auto___39322)){
args39312.push((arguments[i__25948__auto___39323]));

var G__39324 = (i__25948__auto___39323 + (1));
i__25948__auto___39323 = G__39324;
continue;
} else {
}
break;
}

var G__39317 = args39312.length;
switch (G__39317) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args39312.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25966__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___39326 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___39326)){
var class_list_39327 = temp__4655__auto___39326;
class_list_39327.remove(c__$1);
} else {
var class_name_39328 = dommy.core.class$.call(null,elem);
var new_class_name_39329 = dommy.utils.remove_class_str.call(null,class_name_39328,c__$1);
if((class_name_39328 === new_class_name_39329)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_39329);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__39318 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__39319 = null;
var count__39320 = (0);
var i__39321 = (0);
while(true){
if((i__39321 < count__39320)){
var c = cljs.core._nth.call(null,chunk__39319,i__39321);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__39330 = seq__39318;
var G__39331 = chunk__39319;
var G__39332 = count__39320;
var G__39333 = (i__39321 + (1));
seq__39318 = G__39330;
chunk__39319 = G__39331;
count__39320 = G__39332;
i__39321 = G__39333;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39318);
if(temp__4657__auto__){
var seq__39318__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39318__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__39318__$1);
var G__39334 = cljs.core.chunk_rest.call(null,seq__39318__$1);
var G__39335 = c__25683__auto__;
var G__39336 = cljs.core.count.call(null,c__25683__auto__);
var G__39337 = (0);
seq__39318 = G__39334;
chunk__39319 = G__39335;
count__39320 = G__39336;
i__39321 = G__39337;
continue;
} else {
var c = cljs.core.first.call(null,seq__39318__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__39338 = cljs.core.next.call(null,seq__39318__$1);
var G__39339 = null;
var G__39340 = (0);
var G__39341 = (0);
seq__39318 = G__39338;
chunk__39319 = G__39339;
count__39320 = G__39340;
i__39321 = G__39341;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq39313){
var G__39314 = cljs.core.first.call(null,seq39313);
var seq39313__$1 = cljs.core.next.call(null,seq39313);
var G__39315 = cljs.core.first.call(null,seq39313__$1);
var seq39313__$2 = cljs.core.next.call(null,seq39313__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39314,G__39315,seq39313__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args39342 = [];
var len__25947__auto___39345 = arguments.length;
var i__25948__auto___39346 = (0);
while(true){
if((i__25948__auto___39346 < len__25947__auto___39345)){
args39342.push((arguments[i__25948__auto___39346]));

var G__39347 = (i__25948__auto___39346 + (1));
i__25948__auto___39346 = G__39347;
continue;
} else {
}
break;
}

var G__39344 = args39342.length;
switch (G__39344) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39342.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___39349 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___39349)){
var class_list_39350 = temp__4655__auto___39349;
class_list_39350.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args39351 = [];
var len__25947__auto___39354 = arguments.length;
var i__25948__auto___39355 = (0);
while(true){
if((i__25948__auto___39355 < len__25947__auto___39354)){
args39351.push((arguments[i__25948__auto___39355]));

var G__39356 = (i__25948__auto___39355 + (1));
i__25948__auto___39355 = G__39356;
continue;
} else {
}
break;
}

var G__39353 = args39351.length;
switch (G__39353) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39351.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args39358 = [];
var len__25947__auto___39361 = arguments.length;
var i__25948__auto___39362 = (0);
while(true){
if((i__25948__auto___39362 < len__25947__auto___39361)){
args39358.push((arguments[i__25948__auto___39362]));

var G__39363 = (i__25948__auto___39362 + (1));
i__25948__auto___39362 = G__39363;
continue;
} else {
}
break;
}

var G__39360 = args39358.length;
switch (G__39360) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39358.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args39365 = [];
var len__25947__auto___39376 = arguments.length;
var i__25948__auto___39377 = (0);
while(true){
if((i__25948__auto___39377 < len__25947__auto___39376)){
args39365.push((arguments[i__25948__auto___39377]));

var G__39378 = (i__25948__auto___39377 + (1));
i__25948__auto___39377 = G__39378;
continue;
} else {
}
break;
}

var G__39370 = args39365.length;
switch (G__39370) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args39365.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25966__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__39371 = parent;
G__39371.appendChild(child);

return G__39371;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__39372_39380 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__39373_39381 = null;
var count__39374_39382 = (0);
var i__39375_39383 = (0);
while(true){
if((i__39375_39383 < count__39374_39382)){
var c_39384 = cljs.core._nth.call(null,chunk__39373_39381,i__39375_39383);
dommy.core.append_BANG_.call(null,parent,c_39384);

var G__39385 = seq__39372_39380;
var G__39386 = chunk__39373_39381;
var G__39387 = count__39374_39382;
var G__39388 = (i__39375_39383 + (1));
seq__39372_39380 = G__39385;
chunk__39373_39381 = G__39386;
count__39374_39382 = G__39387;
i__39375_39383 = G__39388;
continue;
} else {
var temp__4657__auto___39389 = cljs.core.seq.call(null,seq__39372_39380);
if(temp__4657__auto___39389){
var seq__39372_39390__$1 = temp__4657__auto___39389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39372_39390__$1)){
var c__25683__auto___39391 = cljs.core.chunk_first.call(null,seq__39372_39390__$1);
var G__39392 = cljs.core.chunk_rest.call(null,seq__39372_39390__$1);
var G__39393 = c__25683__auto___39391;
var G__39394 = cljs.core.count.call(null,c__25683__auto___39391);
var G__39395 = (0);
seq__39372_39380 = G__39392;
chunk__39373_39381 = G__39393;
count__39374_39382 = G__39394;
i__39375_39383 = G__39395;
continue;
} else {
var c_39396 = cljs.core.first.call(null,seq__39372_39390__$1);
dommy.core.append_BANG_.call(null,parent,c_39396);

var G__39397 = cljs.core.next.call(null,seq__39372_39390__$1);
var G__39398 = null;
var G__39399 = (0);
var G__39400 = (0);
seq__39372_39380 = G__39397;
chunk__39373_39381 = G__39398;
count__39374_39382 = G__39399;
i__39375_39383 = G__39400;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq39366){
var G__39367 = cljs.core.first.call(null,seq39366);
var seq39366__$1 = cljs.core.next.call(null,seq39366);
var G__39368 = cljs.core.first.call(null,seq39366__$1);
var seq39366__$2 = cljs.core.next.call(null,seq39366__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39367,G__39368,seq39366__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args39401 = [];
var len__25947__auto___39412 = arguments.length;
var i__25948__auto___39413 = (0);
while(true){
if((i__25948__auto___39413 < len__25947__auto___39412)){
args39401.push((arguments[i__25948__auto___39413]));

var G__39414 = (i__25948__auto___39413 + (1));
i__25948__auto___39413 = G__39414;
continue;
} else {
}
break;
}

var G__39406 = args39401.length;
switch (G__39406) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args39401.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25966__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__39407 = parent;
G__39407.insertBefore(child,parent.firstChild);

return G__39407;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__39408_39416 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__39409_39417 = null;
var count__39410_39418 = (0);
var i__39411_39419 = (0);
while(true){
if((i__39411_39419 < count__39410_39418)){
var c_39420 = cljs.core._nth.call(null,chunk__39409_39417,i__39411_39419);
dommy.core.prepend_BANG_.call(null,parent,c_39420);

var G__39421 = seq__39408_39416;
var G__39422 = chunk__39409_39417;
var G__39423 = count__39410_39418;
var G__39424 = (i__39411_39419 + (1));
seq__39408_39416 = G__39421;
chunk__39409_39417 = G__39422;
count__39410_39418 = G__39423;
i__39411_39419 = G__39424;
continue;
} else {
var temp__4657__auto___39425 = cljs.core.seq.call(null,seq__39408_39416);
if(temp__4657__auto___39425){
var seq__39408_39426__$1 = temp__4657__auto___39425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39408_39426__$1)){
var c__25683__auto___39427 = cljs.core.chunk_first.call(null,seq__39408_39426__$1);
var G__39428 = cljs.core.chunk_rest.call(null,seq__39408_39426__$1);
var G__39429 = c__25683__auto___39427;
var G__39430 = cljs.core.count.call(null,c__25683__auto___39427);
var G__39431 = (0);
seq__39408_39416 = G__39428;
chunk__39409_39417 = G__39429;
count__39410_39418 = G__39430;
i__39411_39419 = G__39431;
continue;
} else {
var c_39432 = cljs.core.first.call(null,seq__39408_39426__$1);
dommy.core.prepend_BANG_.call(null,parent,c_39432);

var G__39433 = cljs.core.next.call(null,seq__39408_39426__$1);
var G__39434 = null;
var G__39435 = (0);
var G__39436 = (0);
seq__39408_39416 = G__39433;
chunk__39409_39417 = G__39434;
count__39410_39418 = G__39435;
i__39411_39419 = G__39436;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq39402){
var G__39403 = cljs.core.first.call(null,seq39402);
var seq39402__$1 = cljs.core.next.call(null,seq39402);
var G__39404 = cljs.core.first.call(null,seq39402__$1);
var seq39402__$2 = cljs.core.next.call(null,seq39402__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39403,G__39404,seq39402__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___39437 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___39437)){
var next_39438 = temp__4655__auto___39437;
dommy.core.insert_before_BANG_.call(null,elem,next_39438);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args39439 = [];
var len__25947__auto___39443 = arguments.length;
var i__25948__auto___39444 = (0);
while(true){
if((i__25948__auto___39444 < len__25947__auto___39443)){
args39439.push((arguments[i__25948__auto___39444]));

var G__39445 = (i__25948__auto___39444 + (1));
i__25948__auto___39444 = G__39445;
continue;
} else {
}
break;
}

var G__39441 = args39439.length;
switch (G__39441) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39439.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__39442 = p;
G__39442.removeChild(elem);

return G__39442;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__39447){
var vec__39448 = p__39447;
var special_mouse_event = cljs.core.nth.call(null,vec__39448,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__39448,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__39448,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__39448,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__24872__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__24860__auto__ = related_target;
if(cljs.core.truth_(and__24860__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__24860__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__39448,special_mouse_event,real_mouse_event))
});})(vec__39448,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__24860__auto__ = selected_target;
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__24860__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__24872__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39454 = arguments.length;
var i__25948__auto___39455 = (0);
while(true){
if((i__25948__auto___39455 < len__25947__auto___39454)){
args__25954__auto__.push((arguments[i__25948__auto___39455]));

var G__39456 = (i__25948__auto___39455 + (1));
i__25948__auto___39455 = G__39456;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((2) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25955__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq39451){
var G__39452 = cljs.core.first.call(null,seq39451);
var seq39451__$1 = cljs.core.next.call(null,seq39451);
var G__39453 = cljs.core.first.call(null,seq39451__$1);
var seq39451__$2 = cljs.core.next.call(null,seq39451__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39452,G__39453,seq39451__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39496 = arguments.length;
var i__25948__auto___39497 = (0);
while(true){
if((i__25948__auto___39497 < len__25947__auto___39496)){
args__25954__auto__.push((arguments[i__25948__auto___39497]));

var G__39498 = (i__25948__auto___39497 + (1));
i__25948__auto___39497 = G__39498;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__39459_39499 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_39500 = cljs.core.nth.call(null,vec__39459_39499,(0),null);
var selector_39501 = cljs.core.nth.call(null,vec__39459_39499,(1),null);
var seq__39462_39502 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__39469_39503 = null;
var count__39470_39504 = (0);
var i__39471_39505 = (0);
while(true){
if((i__39471_39505 < count__39470_39504)){
var vec__39478_39506 = cljs.core._nth.call(null,chunk__39469_39503,i__39471_39505);
var orig_type_39507 = cljs.core.nth.call(null,vec__39478_39506,(0),null);
var f_39508 = cljs.core.nth.call(null,vec__39478_39506,(1),null);
var seq__39472_39509 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_39507,cljs.core.PersistentArrayMap.fromArray([orig_type_39507,cljs.core.identity], true, false)));
var chunk__39474_39510 = null;
var count__39475_39511 = (0);
var i__39476_39512 = (0);
while(true){
if((i__39476_39512 < count__39475_39511)){
var vec__39481_39513 = cljs.core._nth.call(null,chunk__39474_39510,i__39476_39512);
var actual_type_39514 = cljs.core.nth.call(null,vec__39481_39513,(0),null);
var factory_39515 = cljs.core.nth.call(null,vec__39481_39513,(1),null);
var canonical_f_39516 = (cljs.core.truth_(selector_39501)?cljs.core.partial.call(null,dommy.core.live_listener,elem_39500,selector_39501):cljs.core.identity).call(null,factory_39515.call(null,f_39508));
dommy.core.update_event_listeners_BANG_.call(null,elem_39500,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_39501,actual_type_39514,f_39508], null),canonical_f_39516);

if(cljs.core.truth_(elem_39500.addEventListener)){
elem_39500.addEventListener(cljs.core.name.call(null,actual_type_39514),canonical_f_39516);
} else {
elem_39500.attachEvent(cljs.core.name.call(null,actual_type_39514),canonical_f_39516);
}

var G__39517 = seq__39472_39509;
var G__39518 = chunk__39474_39510;
var G__39519 = count__39475_39511;
var G__39520 = (i__39476_39512 + (1));
seq__39472_39509 = G__39517;
chunk__39474_39510 = G__39518;
count__39475_39511 = G__39519;
i__39476_39512 = G__39520;
continue;
} else {
var temp__4657__auto___39521 = cljs.core.seq.call(null,seq__39472_39509);
if(temp__4657__auto___39521){
var seq__39472_39522__$1 = temp__4657__auto___39521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39472_39522__$1)){
var c__25683__auto___39523 = cljs.core.chunk_first.call(null,seq__39472_39522__$1);
var G__39524 = cljs.core.chunk_rest.call(null,seq__39472_39522__$1);
var G__39525 = c__25683__auto___39523;
var G__39526 = cljs.core.count.call(null,c__25683__auto___39523);
var G__39527 = (0);
seq__39472_39509 = G__39524;
chunk__39474_39510 = G__39525;
count__39475_39511 = G__39526;
i__39476_39512 = G__39527;
continue;
} else {
var vec__39484_39528 = cljs.core.first.call(null,seq__39472_39522__$1);
var actual_type_39529 = cljs.core.nth.call(null,vec__39484_39528,(0),null);
var factory_39530 = cljs.core.nth.call(null,vec__39484_39528,(1),null);
var canonical_f_39531 = (cljs.core.truth_(selector_39501)?cljs.core.partial.call(null,dommy.core.live_listener,elem_39500,selector_39501):cljs.core.identity).call(null,factory_39530.call(null,f_39508));
dommy.core.update_event_listeners_BANG_.call(null,elem_39500,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_39501,actual_type_39529,f_39508], null),canonical_f_39531);

if(cljs.core.truth_(elem_39500.addEventListener)){
elem_39500.addEventListener(cljs.core.name.call(null,actual_type_39529),canonical_f_39531);
} else {
elem_39500.attachEvent(cljs.core.name.call(null,actual_type_39529),canonical_f_39531);
}

var G__39532 = cljs.core.next.call(null,seq__39472_39522__$1);
var G__39533 = null;
var G__39534 = (0);
var G__39535 = (0);
seq__39472_39509 = G__39532;
chunk__39474_39510 = G__39533;
count__39475_39511 = G__39534;
i__39476_39512 = G__39535;
continue;
}
} else {
}
}
break;
}

var G__39536 = seq__39462_39502;
var G__39537 = chunk__39469_39503;
var G__39538 = count__39470_39504;
var G__39539 = (i__39471_39505 + (1));
seq__39462_39502 = G__39536;
chunk__39469_39503 = G__39537;
count__39470_39504 = G__39538;
i__39471_39505 = G__39539;
continue;
} else {
var temp__4657__auto___39540 = cljs.core.seq.call(null,seq__39462_39502);
if(temp__4657__auto___39540){
var seq__39462_39541__$1 = temp__4657__auto___39540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39462_39541__$1)){
var c__25683__auto___39542 = cljs.core.chunk_first.call(null,seq__39462_39541__$1);
var G__39543 = cljs.core.chunk_rest.call(null,seq__39462_39541__$1);
var G__39544 = c__25683__auto___39542;
var G__39545 = cljs.core.count.call(null,c__25683__auto___39542);
var G__39546 = (0);
seq__39462_39502 = G__39543;
chunk__39469_39503 = G__39544;
count__39470_39504 = G__39545;
i__39471_39505 = G__39546;
continue;
} else {
var vec__39487_39547 = cljs.core.first.call(null,seq__39462_39541__$1);
var orig_type_39548 = cljs.core.nth.call(null,vec__39487_39547,(0),null);
var f_39549 = cljs.core.nth.call(null,vec__39487_39547,(1),null);
var seq__39463_39550 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_39548,cljs.core.PersistentArrayMap.fromArray([orig_type_39548,cljs.core.identity], true, false)));
var chunk__39465_39551 = null;
var count__39466_39552 = (0);
var i__39467_39553 = (0);
while(true){
if((i__39467_39553 < count__39466_39552)){
var vec__39490_39554 = cljs.core._nth.call(null,chunk__39465_39551,i__39467_39553);
var actual_type_39555 = cljs.core.nth.call(null,vec__39490_39554,(0),null);
var factory_39556 = cljs.core.nth.call(null,vec__39490_39554,(1),null);
var canonical_f_39557 = (cljs.core.truth_(selector_39501)?cljs.core.partial.call(null,dommy.core.live_listener,elem_39500,selector_39501):cljs.core.identity).call(null,factory_39556.call(null,f_39549));
dommy.core.update_event_listeners_BANG_.call(null,elem_39500,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_39501,actual_type_39555,f_39549], null),canonical_f_39557);

if(cljs.core.truth_(elem_39500.addEventListener)){
elem_39500.addEventListener(cljs.core.name.call(null,actual_type_39555),canonical_f_39557);
} else {
elem_39500.attachEvent(cljs.core.name.call(null,actual_type_39555),canonical_f_39557);
}

var G__39558 = seq__39463_39550;
var G__39559 = chunk__39465_39551;
var G__39560 = count__39466_39552;
var G__39561 = (i__39467_39553 + (1));
seq__39463_39550 = G__39558;
chunk__39465_39551 = G__39559;
count__39466_39552 = G__39560;
i__39467_39553 = G__39561;
continue;
} else {
var temp__4657__auto___39562__$1 = cljs.core.seq.call(null,seq__39463_39550);
if(temp__4657__auto___39562__$1){
var seq__39463_39563__$1 = temp__4657__auto___39562__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39463_39563__$1)){
var c__25683__auto___39564 = cljs.core.chunk_first.call(null,seq__39463_39563__$1);
var G__39565 = cljs.core.chunk_rest.call(null,seq__39463_39563__$1);
var G__39566 = c__25683__auto___39564;
var G__39567 = cljs.core.count.call(null,c__25683__auto___39564);
var G__39568 = (0);
seq__39463_39550 = G__39565;
chunk__39465_39551 = G__39566;
count__39466_39552 = G__39567;
i__39467_39553 = G__39568;
continue;
} else {
var vec__39493_39569 = cljs.core.first.call(null,seq__39463_39563__$1);
var actual_type_39570 = cljs.core.nth.call(null,vec__39493_39569,(0),null);
var factory_39571 = cljs.core.nth.call(null,vec__39493_39569,(1),null);
var canonical_f_39572 = (cljs.core.truth_(selector_39501)?cljs.core.partial.call(null,dommy.core.live_listener,elem_39500,selector_39501):cljs.core.identity).call(null,factory_39571.call(null,f_39549));
dommy.core.update_event_listeners_BANG_.call(null,elem_39500,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_39501,actual_type_39570,f_39549], null),canonical_f_39572);

if(cljs.core.truth_(elem_39500.addEventListener)){
elem_39500.addEventListener(cljs.core.name.call(null,actual_type_39570),canonical_f_39572);
} else {
elem_39500.attachEvent(cljs.core.name.call(null,actual_type_39570),canonical_f_39572);
}

var G__39573 = cljs.core.next.call(null,seq__39463_39563__$1);
var G__39574 = null;
var G__39575 = (0);
var G__39576 = (0);
seq__39463_39550 = G__39573;
chunk__39465_39551 = G__39574;
count__39466_39552 = G__39575;
i__39467_39553 = G__39576;
continue;
}
} else {
}
}
break;
}

var G__39577 = cljs.core.next.call(null,seq__39462_39541__$1);
var G__39578 = null;
var G__39579 = (0);
var G__39580 = (0);
seq__39462_39502 = G__39577;
chunk__39469_39503 = G__39578;
count__39470_39504 = G__39579;
i__39471_39505 = G__39580;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq39457){
var G__39458 = cljs.core.first.call(null,seq39457);
var seq39457__$1 = cljs.core.next.call(null,seq39457);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39458,seq39457__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39620 = arguments.length;
var i__25948__auto___39621 = (0);
while(true){
if((i__25948__auto___39621 < len__25947__auto___39620)){
args__25954__auto__.push((arguments[i__25948__auto___39621]));

var G__39622 = (i__25948__auto___39621 + (1));
i__25948__auto___39621 = G__39622;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__39583_39623 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_39624 = cljs.core.nth.call(null,vec__39583_39623,(0),null);
var selector_39625 = cljs.core.nth.call(null,vec__39583_39623,(1),null);
var seq__39586_39626 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__39593_39627 = null;
var count__39594_39628 = (0);
var i__39595_39629 = (0);
while(true){
if((i__39595_39629 < count__39594_39628)){
var vec__39602_39630 = cljs.core._nth.call(null,chunk__39593_39627,i__39595_39629);
var orig_type_39631 = cljs.core.nth.call(null,vec__39602_39630,(0),null);
var f_39632 = cljs.core.nth.call(null,vec__39602_39630,(1),null);
var seq__39596_39633 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_39631,cljs.core.PersistentArrayMap.fromArray([orig_type_39631,cljs.core.identity], true, false)));
var chunk__39598_39634 = null;
var count__39599_39635 = (0);
var i__39600_39636 = (0);
while(true){
if((i__39600_39636 < count__39599_39635)){
var vec__39605_39637 = cljs.core._nth.call(null,chunk__39598_39634,i__39600_39636);
var actual_type_39638 = cljs.core.nth.call(null,vec__39605_39637,(0),null);
var __39639 = cljs.core.nth.call(null,vec__39605_39637,(1),null);
var keys_39640 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_39625,actual_type_39638,f_39632], null);
var canonical_f_39641 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_39624),keys_39640);
dommy.core.update_event_listeners_BANG_.call(null,elem_39624,dommy.utils.dissoc_in,keys_39640);

if(cljs.core.truth_(elem_39624.removeEventListener)){
elem_39624.removeEventListener(cljs.core.name.call(null,actual_type_39638),canonical_f_39641);
} else {
elem_39624.detachEvent(cljs.core.name.call(null,actual_type_39638),canonical_f_39641);
}

var G__39642 = seq__39596_39633;
var G__39643 = chunk__39598_39634;
var G__39644 = count__39599_39635;
var G__39645 = (i__39600_39636 + (1));
seq__39596_39633 = G__39642;
chunk__39598_39634 = G__39643;
count__39599_39635 = G__39644;
i__39600_39636 = G__39645;
continue;
} else {
var temp__4657__auto___39646 = cljs.core.seq.call(null,seq__39596_39633);
if(temp__4657__auto___39646){
var seq__39596_39647__$1 = temp__4657__auto___39646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39596_39647__$1)){
var c__25683__auto___39648 = cljs.core.chunk_first.call(null,seq__39596_39647__$1);
var G__39649 = cljs.core.chunk_rest.call(null,seq__39596_39647__$1);
var G__39650 = c__25683__auto___39648;
var G__39651 = cljs.core.count.call(null,c__25683__auto___39648);
var G__39652 = (0);
seq__39596_39633 = G__39649;
chunk__39598_39634 = G__39650;
count__39599_39635 = G__39651;
i__39600_39636 = G__39652;
continue;
} else {
var vec__39608_39653 = cljs.core.first.call(null,seq__39596_39647__$1);
var actual_type_39654 = cljs.core.nth.call(null,vec__39608_39653,(0),null);
var __39655 = cljs.core.nth.call(null,vec__39608_39653,(1),null);
var keys_39656 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_39625,actual_type_39654,f_39632], null);
var canonical_f_39657 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_39624),keys_39656);
dommy.core.update_event_listeners_BANG_.call(null,elem_39624,dommy.utils.dissoc_in,keys_39656);

if(cljs.core.truth_(elem_39624.removeEventListener)){
elem_39624.removeEventListener(cljs.core.name.call(null,actual_type_39654),canonical_f_39657);
} else {
elem_39624.detachEvent(cljs.core.name.call(null,actual_type_39654),canonical_f_39657);
}

var G__39658 = cljs.core.next.call(null,seq__39596_39647__$1);
var G__39659 = null;
var G__39660 = (0);
var G__39661 = (0);
seq__39596_39633 = G__39658;
chunk__39598_39634 = G__39659;
count__39599_39635 = G__39660;
i__39600_39636 = G__39661;
continue;
}
} else {
}
}
break;
}

var G__39662 = seq__39586_39626;
var G__39663 = chunk__39593_39627;
var G__39664 = count__39594_39628;
var G__39665 = (i__39595_39629 + (1));
seq__39586_39626 = G__39662;
chunk__39593_39627 = G__39663;
count__39594_39628 = G__39664;
i__39595_39629 = G__39665;
continue;
} else {
var temp__4657__auto___39666 = cljs.core.seq.call(null,seq__39586_39626);
if(temp__4657__auto___39666){
var seq__39586_39667__$1 = temp__4657__auto___39666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39586_39667__$1)){
var c__25683__auto___39668 = cljs.core.chunk_first.call(null,seq__39586_39667__$1);
var G__39669 = cljs.core.chunk_rest.call(null,seq__39586_39667__$1);
var G__39670 = c__25683__auto___39668;
var G__39671 = cljs.core.count.call(null,c__25683__auto___39668);
var G__39672 = (0);
seq__39586_39626 = G__39669;
chunk__39593_39627 = G__39670;
count__39594_39628 = G__39671;
i__39595_39629 = G__39672;
continue;
} else {
var vec__39611_39673 = cljs.core.first.call(null,seq__39586_39667__$1);
var orig_type_39674 = cljs.core.nth.call(null,vec__39611_39673,(0),null);
var f_39675 = cljs.core.nth.call(null,vec__39611_39673,(1),null);
var seq__39587_39676 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_39674,cljs.core.PersistentArrayMap.fromArray([orig_type_39674,cljs.core.identity], true, false)));
var chunk__39589_39677 = null;
var count__39590_39678 = (0);
var i__39591_39679 = (0);
while(true){
if((i__39591_39679 < count__39590_39678)){
var vec__39614_39680 = cljs.core._nth.call(null,chunk__39589_39677,i__39591_39679);
var actual_type_39681 = cljs.core.nth.call(null,vec__39614_39680,(0),null);
var __39682 = cljs.core.nth.call(null,vec__39614_39680,(1),null);
var keys_39683 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_39625,actual_type_39681,f_39675], null);
var canonical_f_39684 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_39624),keys_39683);
dommy.core.update_event_listeners_BANG_.call(null,elem_39624,dommy.utils.dissoc_in,keys_39683);

if(cljs.core.truth_(elem_39624.removeEventListener)){
elem_39624.removeEventListener(cljs.core.name.call(null,actual_type_39681),canonical_f_39684);
} else {
elem_39624.detachEvent(cljs.core.name.call(null,actual_type_39681),canonical_f_39684);
}

var G__39685 = seq__39587_39676;
var G__39686 = chunk__39589_39677;
var G__39687 = count__39590_39678;
var G__39688 = (i__39591_39679 + (1));
seq__39587_39676 = G__39685;
chunk__39589_39677 = G__39686;
count__39590_39678 = G__39687;
i__39591_39679 = G__39688;
continue;
} else {
var temp__4657__auto___39689__$1 = cljs.core.seq.call(null,seq__39587_39676);
if(temp__4657__auto___39689__$1){
var seq__39587_39690__$1 = temp__4657__auto___39689__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39587_39690__$1)){
var c__25683__auto___39691 = cljs.core.chunk_first.call(null,seq__39587_39690__$1);
var G__39692 = cljs.core.chunk_rest.call(null,seq__39587_39690__$1);
var G__39693 = c__25683__auto___39691;
var G__39694 = cljs.core.count.call(null,c__25683__auto___39691);
var G__39695 = (0);
seq__39587_39676 = G__39692;
chunk__39589_39677 = G__39693;
count__39590_39678 = G__39694;
i__39591_39679 = G__39695;
continue;
} else {
var vec__39617_39696 = cljs.core.first.call(null,seq__39587_39690__$1);
var actual_type_39697 = cljs.core.nth.call(null,vec__39617_39696,(0),null);
var __39698 = cljs.core.nth.call(null,vec__39617_39696,(1),null);
var keys_39699 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_39625,actual_type_39697,f_39675], null);
var canonical_f_39700 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_39624),keys_39699);
dommy.core.update_event_listeners_BANG_.call(null,elem_39624,dommy.utils.dissoc_in,keys_39699);

if(cljs.core.truth_(elem_39624.removeEventListener)){
elem_39624.removeEventListener(cljs.core.name.call(null,actual_type_39697),canonical_f_39700);
} else {
elem_39624.detachEvent(cljs.core.name.call(null,actual_type_39697),canonical_f_39700);
}

var G__39701 = cljs.core.next.call(null,seq__39587_39690__$1);
var G__39702 = null;
var G__39703 = (0);
var G__39704 = (0);
seq__39587_39676 = G__39701;
chunk__39589_39677 = G__39702;
count__39590_39678 = G__39703;
i__39591_39679 = G__39704;
continue;
}
} else {
}
}
break;
}

var G__39705 = cljs.core.next.call(null,seq__39586_39667__$1);
var G__39706 = null;
var G__39707 = (0);
var G__39708 = (0);
seq__39586_39626 = G__39705;
chunk__39593_39627 = G__39706;
count__39594_39628 = G__39707;
i__39595_39629 = G__39708;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq39581){
var G__39582 = cljs.core.first.call(null,seq39581);
var seq39581__$1 = cljs.core.next.call(null,seq39581);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39582,seq39581__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39724 = arguments.length;
var i__25948__auto___39725 = (0);
while(true){
if((i__25948__auto___39725 < len__25947__auto___39724)){
args__25954__auto__.push((arguments[i__25948__auto___39725]));

var G__39726 = (i__25948__auto___39725 + (1));
i__25948__auto___39725 = G__39726;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__39711_39727 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_39728 = cljs.core.nth.call(null,vec__39711_39727,(0),null);
var selector_39729 = cljs.core.nth.call(null,vec__39711_39727,(1),null);
var seq__39714_39730 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__39715_39731 = null;
var count__39716_39732 = (0);
var i__39717_39733 = (0);
while(true){
if((i__39717_39733 < count__39716_39732)){
var vec__39718_39734 = cljs.core._nth.call(null,chunk__39715_39731,i__39717_39733);
var type_39735 = cljs.core.nth.call(null,vec__39718_39734,(0),null);
var f_39736 = cljs.core.nth.call(null,vec__39718_39734,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_39735,((function (seq__39714_39730,chunk__39715_39731,count__39716_39732,i__39717_39733,vec__39718_39734,type_39735,f_39736,vec__39711_39727,elem_39728,selector_39729){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_39735,dommy$core$this_fn);

return f_39736.call(null,e);
});})(seq__39714_39730,chunk__39715_39731,count__39716_39732,i__39717_39733,vec__39718_39734,type_39735,f_39736,vec__39711_39727,elem_39728,selector_39729))
);

var G__39737 = seq__39714_39730;
var G__39738 = chunk__39715_39731;
var G__39739 = count__39716_39732;
var G__39740 = (i__39717_39733 + (1));
seq__39714_39730 = G__39737;
chunk__39715_39731 = G__39738;
count__39716_39732 = G__39739;
i__39717_39733 = G__39740;
continue;
} else {
var temp__4657__auto___39741 = cljs.core.seq.call(null,seq__39714_39730);
if(temp__4657__auto___39741){
var seq__39714_39742__$1 = temp__4657__auto___39741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39714_39742__$1)){
var c__25683__auto___39743 = cljs.core.chunk_first.call(null,seq__39714_39742__$1);
var G__39744 = cljs.core.chunk_rest.call(null,seq__39714_39742__$1);
var G__39745 = c__25683__auto___39743;
var G__39746 = cljs.core.count.call(null,c__25683__auto___39743);
var G__39747 = (0);
seq__39714_39730 = G__39744;
chunk__39715_39731 = G__39745;
count__39716_39732 = G__39746;
i__39717_39733 = G__39747;
continue;
} else {
var vec__39721_39748 = cljs.core.first.call(null,seq__39714_39742__$1);
var type_39749 = cljs.core.nth.call(null,vec__39721_39748,(0),null);
var f_39750 = cljs.core.nth.call(null,vec__39721_39748,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_39749,((function (seq__39714_39730,chunk__39715_39731,count__39716_39732,i__39717_39733,vec__39721_39748,type_39749,f_39750,seq__39714_39742__$1,temp__4657__auto___39741,vec__39711_39727,elem_39728,selector_39729){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_39749,dommy$core$this_fn);

return f_39750.call(null,e);
});})(seq__39714_39730,chunk__39715_39731,count__39716_39732,i__39717_39733,vec__39721_39748,type_39749,f_39750,seq__39714_39742__$1,temp__4657__auto___39741,vec__39711_39727,elem_39728,selector_39729))
);

var G__39751 = cljs.core.next.call(null,seq__39714_39742__$1);
var G__39752 = null;
var G__39753 = (0);
var G__39754 = (0);
seq__39714_39730 = G__39751;
chunk__39715_39731 = G__39752;
count__39716_39732 = G__39753;
i__39717_39733 = G__39754;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq39709){
var G__39710 = cljs.core.first.call(null,seq39709);
var seq39709__$1 = cljs.core.next.call(null,seq39709);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39710,seq39709__$1);
});


//# sourceMappingURL=core.js.map?rel=1486440935847