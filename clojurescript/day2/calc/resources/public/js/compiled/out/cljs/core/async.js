// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27091 = [];
var len__25947__auto___27097 = arguments.length;
var i__25948__auto___27098 = (0);
while(true){
if((i__25948__auto___27098 < len__25947__auto___27097)){
args27091.push((arguments[i__25948__auto___27098]));

var G__27099 = (i__25948__auto___27098 + (1));
i__25948__auto___27098 = G__27099;
continue;
} else {
}
break;
}

var G__27093 = args27091.length;
switch (G__27093) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27091.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27094 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27094 = (function (f,blockable,meta27095){
this.f = f;
this.blockable = blockable;
this.meta27095 = meta27095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27096,meta27095__$1){
var self__ = this;
var _27096__$1 = this;
return (new cljs.core.async.t_cljs$core$async27094(self__.f,self__.blockable,meta27095__$1));
});

cljs.core.async.t_cljs$core$async27094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27096){
var self__ = this;
var _27096__$1 = this;
return self__.meta27095;
});

cljs.core.async.t_cljs$core$async27094.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27094.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27094.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27094.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27095","meta27095",-407470526,null)], null);
});

cljs.core.async.t_cljs$core$async27094.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27094";

cljs.core.async.t_cljs$core$async27094.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async27094");
});

cljs.core.async.__GT_t_cljs$core$async27094 = (function cljs$core$async$__GT_t_cljs$core$async27094(f__$1,blockable__$1,meta27095){
return (new cljs.core.async.t_cljs$core$async27094(f__$1,blockable__$1,meta27095));
});

}

return (new cljs.core.async.t_cljs$core$async27094(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27103 = [];
var len__25947__auto___27106 = arguments.length;
var i__25948__auto___27107 = (0);
while(true){
if((i__25948__auto___27107 < len__25947__auto___27106)){
args27103.push((arguments[i__25948__auto___27107]));

var G__27108 = (i__25948__auto___27107 + (1));
i__25948__auto___27107 = G__27108;
continue;
} else {
}
break;
}

var G__27105 = args27103.length;
switch (G__27105) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27103.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27110 = [];
var len__25947__auto___27113 = arguments.length;
var i__25948__auto___27114 = (0);
while(true){
if((i__25948__auto___27114 < len__25947__auto___27113)){
args27110.push((arguments[i__25948__auto___27114]));

var G__27115 = (i__25948__auto___27114 + (1));
i__25948__auto___27114 = G__27115;
continue;
} else {
}
break;
}

var G__27112 = args27110.length;
switch (G__27112) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27110.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27117 = [];
var len__25947__auto___27120 = arguments.length;
var i__25948__auto___27121 = (0);
while(true){
if((i__25948__auto___27121 < len__25947__auto___27120)){
args27117.push((arguments[i__25948__auto___27121]));

var G__27122 = (i__25948__auto___27121 + (1));
i__25948__auto___27121 = G__27122;
continue;
} else {
}
break;
}

var G__27119 = args27117.length;
switch (G__27119) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27117.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27124 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27124);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27124,ret){
return (function (){
return fn1.call(null,val_27124);
});})(val_27124,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27125 = [];
var len__25947__auto___27128 = arguments.length;
var i__25948__auto___27129 = (0);
while(true){
if((i__25948__auto___27129 < len__25947__auto___27128)){
args27125.push((arguments[i__25948__auto___27129]));

var G__27130 = (i__25948__auto___27129 + (1));
i__25948__auto___27129 = G__27130;
continue;
} else {
}
break;
}

var G__27127 = args27125.length;
switch (G__27127) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27125.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25787__auto___27132 = n;
var x_27133 = (0);
while(true){
if((x_27133 < n__25787__auto___27132)){
(a[x_27133] = (0));

var G__27134 = (x_27133 + (1));
x_27133 = G__27134;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27135 = (i + (1));
i = G__27135;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27139 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27139 = (function (alt_flag,flag,meta27140){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27140 = meta27140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27141,meta27140__$1){
var self__ = this;
var _27141__$1 = this;
return (new cljs.core.async.t_cljs$core$async27139(self__.alt_flag,self__.flag,meta27140__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27141){
var self__ = this;
var _27141__$1 = this;
return self__.meta27140;
});})(flag))
;

cljs.core.async.t_cljs$core$async27139.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27139.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27139.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27139.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27139.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27140","meta27140",-1945482638,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27139.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27139";

cljs.core.async.t_cljs$core$async27139.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async27139");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27139 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27139(alt_flag__$1,flag__$1,meta27140){
return (new cljs.core.async.t_cljs$core$async27139(alt_flag__$1,flag__$1,meta27140));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27139(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27145 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27145 = (function (alt_handler,flag,cb,meta27146){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27146 = meta27146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27147,meta27146__$1){
var self__ = this;
var _27147__$1 = this;
return (new cljs.core.async.t_cljs$core$async27145(self__.alt_handler,self__.flag,self__.cb,meta27146__$1));
});

cljs.core.async.t_cljs$core$async27145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27147){
var self__ = this;
var _27147__$1 = this;
return self__.meta27146;
});

cljs.core.async.t_cljs$core$async27145.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27145.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27145.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27145.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27146","meta27146",1661198956,null)], null);
});

cljs.core.async.t_cljs$core$async27145.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27145";

cljs.core.async.t_cljs$core$async27145.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async27145");
});

cljs.core.async.__GT_t_cljs$core$async27145 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27145(alt_handler__$1,flag__$1,cb__$1,meta27146){
return (new cljs.core.async.t_cljs$core$async27145(alt_handler__$1,flag__$1,cb__$1,meta27146));
});

}

return (new cljs.core.async.t_cljs$core$async27145(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27148_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27148_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27149_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27149_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24872__auto__ = wport;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27150 = (i + (1));
i = G__27150;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24872__auto__ = ret;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24860__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24860__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___27156 = arguments.length;
var i__25948__auto___27157 = (0);
while(true){
if((i__25948__auto___27157 < len__25947__auto___27156)){
args__25954__auto__.push((arguments[i__25948__auto___27157]));

var G__27158 = (i__25948__auto___27157 + (1));
i__25948__auto___27157 = G__27158;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27153){
var map__27154 = p__27153;
var map__27154__$1 = ((((!((map__27154 == null)))?((((map__27154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27154):map__27154);
var opts = map__27154__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27151){
var G__27152 = cljs.core.first.call(null,seq27151);
var seq27151__$1 = cljs.core.next.call(null,seq27151);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27152,seq27151__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27159 = [];
var len__25947__auto___27209 = arguments.length;
var i__25948__auto___27210 = (0);
while(true){
if((i__25948__auto___27210 < len__25947__auto___27209)){
args27159.push((arguments[i__25948__auto___27210]));

var G__27211 = (i__25948__auto___27210 + (1));
i__25948__auto___27210 = G__27211;
continue;
} else {
}
break;
}

var G__27161 = args27159.length;
switch (G__27161) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27159.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27046__auto___27213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto___27213){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto___27213){
return (function (state_27185){
var state_val_27186 = (state_27185[(1)]);
if((state_val_27186 === (7))){
var inst_27181 = (state_27185[(2)]);
var state_27185__$1 = state_27185;
var statearr_27187_27214 = state_27185__$1;
(statearr_27187_27214[(2)] = inst_27181);

(statearr_27187_27214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (1))){
var state_27185__$1 = state_27185;
var statearr_27188_27215 = state_27185__$1;
(statearr_27188_27215[(2)] = null);

(statearr_27188_27215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (4))){
var inst_27164 = (state_27185[(7)]);
var inst_27164__$1 = (state_27185[(2)]);
var inst_27165 = (inst_27164__$1 == null);
var state_27185__$1 = (function (){var statearr_27189 = state_27185;
(statearr_27189[(7)] = inst_27164__$1);

return statearr_27189;
})();
if(cljs.core.truth_(inst_27165)){
var statearr_27190_27216 = state_27185__$1;
(statearr_27190_27216[(1)] = (5));

} else {
var statearr_27191_27217 = state_27185__$1;
(statearr_27191_27217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (13))){
var state_27185__$1 = state_27185;
var statearr_27192_27218 = state_27185__$1;
(statearr_27192_27218[(2)] = null);

(statearr_27192_27218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (6))){
var inst_27164 = (state_27185[(7)]);
var state_27185__$1 = state_27185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27185__$1,(11),to,inst_27164);
} else {
if((state_val_27186 === (3))){
var inst_27183 = (state_27185[(2)]);
var state_27185__$1 = state_27185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27185__$1,inst_27183);
} else {
if((state_val_27186 === (12))){
var state_27185__$1 = state_27185;
var statearr_27193_27219 = state_27185__$1;
(statearr_27193_27219[(2)] = null);

(statearr_27193_27219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (2))){
var state_27185__$1 = state_27185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27185__$1,(4),from);
} else {
if((state_val_27186 === (11))){
var inst_27174 = (state_27185[(2)]);
var state_27185__$1 = state_27185;
if(cljs.core.truth_(inst_27174)){
var statearr_27194_27220 = state_27185__$1;
(statearr_27194_27220[(1)] = (12));

} else {
var statearr_27195_27221 = state_27185__$1;
(statearr_27195_27221[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (9))){
var state_27185__$1 = state_27185;
var statearr_27196_27222 = state_27185__$1;
(statearr_27196_27222[(2)] = null);

(statearr_27196_27222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (5))){
var state_27185__$1 = state_27185;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27197_27223 = state_27185__$1;
(statearr_27197_27223[(1)] = (8));

} else {
var statearr_27198_27224 = state_27185__$1;
(statearr_27198_27224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (14))){
var inst_27179 = (state_27185[(2)]);
var state_27185__$1 = state_27185;
var statearr_27199_27225 = state_27185__$1;
(statearr_27199_27225[(2)] = inst_27179);

(statearr_27199_27225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (10))){
var inst_27171 = (state_27185[(2)]);
var state_27185__$1 = state_27185;
var statearr_27200_27226 = state_27185__$1;
(statearr_27200_27226[(2)] = inst_27171);

(statearr_27200_27226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27186 === (8))){
var inst_27168 = cljs.core.async.close_BANG_.call(null,to);
var state_27185__$1 = state_27185;
var statearr_27201_27227 = state_27185__$1;
(statearr_27201_27227[(2)] = inst_27168);

(statearr_27201_27227[(1)] = (10));


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
});})(c__27046__auto___27213))
;
return ((function (switch__26934__auto__,c__27046__auto___27213){
return (function() {
var cljs$core$async$state_machine__26935__auto__ = null;
var cljs$core$async$state_machine__26935__auto____0 = (function (){
var statearr_27205 = [null,null,null,null,null,null,null,null];
(statearr_27205[(0)] = cljs$core$async$state_machine__26935__auto__);

(statearr_27205[(1)] = (1));

return statearr_27205;
});
var cljs$core$async$state_machine__26935__auto____1 = (function (state_27185){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_27185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e27206){if((e27206 instanceof Object)){
var ex__26938__auto__ = e27206;
var statearr_27207_27228 = state_27185;
(statearr_27207_27228[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27229 = state_27185;
state_27185 = G__27229;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$state_machine__26935__auto__ = function(state_27185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26935__auto____1.call(this,state_27185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26935__auto____0;
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26935__auto____1;
return cljs$core$async$state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto___27213))
})();
var state__27048__auto__ = (function (){var statearr_27208 = f__27047__auto__.call(null);
(statearr_27208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___27213);

return statearr_27208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto___27213))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27417){
var vec__27418 = p__27417;
var v = cljs.core.nth.call(null,vec__27418,(0),null);
var p = cljs.core.nth.call(null,vec__27418,(1),null);
var job = vec__27418;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27046__auto___27604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto___27604,res,vec__27418,v,p,job,jobs,results){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto___27604,res,vec__27418,v,p,job,jobs,results){
return (function (state_27425){
var state_val_27426 = (state_27425[(1)]);
if((state_val_27426 === (1))){
var state_27425__$1 = state_27425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27425__$1,(2),res,v);
} else {
if((state_val_27426 === (2))){
var inst_27422 = (state_27425[(2)]);
var inst_27423 = cljs.core.async.close_BANG_.call(null,res);
var state_27425__$1 = (function (){var statearr_27427 = state_27425;
(statearr_27427[(7)] = inst_27422);

return statearr_27427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27425__$1,inst_27423);
} else {
return null;
}
}
});})(c__27046__auto___27604,res,vec__27418,v,p,job,jobs,results))
;
return ((function (switch__26934__auto__,c__27046__auto___27604,res,vec__27418,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____0 = (function (){
var statearr_27431 = [null,null,null,null,null,null,null,null];
(statearr_27431[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__);

(statearr_27431[(1)] = (1));

return statearr_27431;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____1 = (function (state_27425){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_27425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e27432){if((e27432 instanceof Object)){
var ex__26938__auto__ = e27432;
var statearr_27433_27605 = state_27425;
(statearr_27433_27605[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27606 = state_27425;
state_27425 = G__27606;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__ = function(state_27425){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____1.call(this,state_27425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto___27604,res,vec__27418,v,p,job,jobs,results))
})();
var state__27048__auto__ = (function (){var statearr_27434 = f__27047__auto__.call(null);
(statearr_27434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___27604);

return statearr_27434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto___27604,res,vec__27418,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27435){
var vec__27436 = p__27435;
var v = cljs.core.nth.call(null,vec__27436,(0),null);
var p = cljs.core.nth.call(null,vec__27436,(1),null);
var job = vec__27436;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25787__auto___27607 = n;
var __27608 = (0);
while(true){
if((__27608 < n__25787__auto___27607)){
var G__27439_27609 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27439_27609) {
case "compute":
var c__27046__auto___27611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27608,c__27046__auto___27611,G__27439_27609,n__25787__auto___27607,jobs,results,process,async){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (__27608,c__27046__auto___27611,G__27439_27609,n__25787__auto___27607,jobs,results,process,async){
return (function (state_27452){
var state_val_27453 = (state_27452[(1)]);
if((state_val_27453 === (1))){
var state_27452__$1 = state_27452;
var statearr_27454_27612 = state_27452__$1;
(statearr_27454_27612[(2)] = null);

(statearr_27454_27612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (2))){
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27452__$1,(4),jobs);
} else {
if((state_val_27453 === (3))){
var inst_27450 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27452__$1,inst_27450);
} else {
if((state_val_27453 === (4))){
var inst_27442 = (state_27452[(2)]);
var inst_27443 = process.call(null,inst_27442);
var state_27452__$1 = state_27452;
if(cljs.core.truth_(inst_27443)){
var statearr_27455_27613 = state_27452__$1;
(statearr_27455_27613[(1)] = (5));

} else {
var statearr_27456_27614 = state_27452__$1;
(statearr_27456_27614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (5))){
var state_27452__$1 = state_27452;
var statearr_27457_27615 = state_27452__$1;
(statearr_27457_27615[(2)] = null);

(statearr_27457_27615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (6))){
var state_27452__$1 = state_27452;
var statearr_27458_27616 = state_27452__$1;
(statearr_27458_27616[(2)] = null);

(statearr_27458_27616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (7))){
var inst_27448 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27459_27617 = state_27452__$1;
(statearr_27459_27617[(2)] = inst_27448);

(statearr_27459_27617[(1)] = (3));


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
});})(__27608,c__27046__auto___27611,G__27439_27609,n__25787__auto___27607,jobs,results,process,async))
;
return ((function (__27608,switch__26934__auto__,c__27046__auto___27611,G__27439_27609,n__25787__auto___27607,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____0 = (function (){
var statearr_27463 = [null,null,null,null,null,null,null];
(statearr_27463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__);

(statearr_27463[(1)] = (1));

return statearr_27463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____1 = (function (state_27452){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_27452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e27464){if((e27464 instanceof Object)){
var ex__26938__auto__ = e27464;
var statearr_27465_27618 = state_27452;
(statearr_27465_27618[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27619 = state_27452;
state_27452 = G__27619;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__ = function(state_27452){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____1.call(this,state_27452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__;
})()
;})(__27608,switch__26934__auto__,c__27046__auto___27611,G__27439_27609,n__25787__auto___27607,jobs,results,process,async))
})();
var state__27048__auto__ = (function (){var statearr_27466 = f__27047__auto__.call(null);
(statearr_27466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___27611);

return statearr_27466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(__27608,c__27046__auto___27611,G__27439_27609,n__25787__auto___27607,jobs,results,process,async))
);


break;
case "async":
var c__27046__auto___27620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27608,c__27046__auto___27620,G__27439_27609,n__25787__auto___27607,jobs,results,process,async){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (__27608,c__27046__auto___27620,G__27439_27609,n__25787__auto___27607,jobs,results,process,async){
return (function (state_27479){
var state_val_27480 = (state_27479[(1)]);
if((state_val_27480 === (1))){
var state_27479__$1 = state_27479;
var statearr_27481_27621 = state_27479__$1;
(statearr_27481_27621[(2)] = null);

(statearr_27481_27621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (2))){
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27479__$1,(4),jobs);
} else {
if((state_val_27480 === (3))){
var inst_27477 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27479__$1,inst_27477);
} else {
if((state_val_27480 === (4))){
var inst_27469 = (state_27479[(2)]);
var inst_27470 = async.call(null,inst_27469);
var state_27479__$1 = state_27479;
if(cljs.core.truth_(inst_27470)){
var statearr_27482_27622 = state_27479__$1;
(statearr_27482_27622[(1)] = (5));

} else {
var statearr_27483_27623 = state_27479__$1;
(statearr_27483_27623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (5))){
var state_27479__$1 = state_27479;
var statearr_27484_27624 = state_27479__$1;
(statearr_27484_27624[(2)] = null);

(statearr_27484_27624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (6))){
var state_27479__$1 = state_27479;
var statearr_27485_27625 = state_27479__$1;
(statearr_27485_27625[(2)] = null);

(statearr_27485_27625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (7))){
var inst_27475 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
var statearr_27486_27626 = state_27479__$1;
(statearr_27486_27626[(2)] = inst_27475);

(statearr_27486_27626[(1)] = (3));


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
});})(__27608,c__27046__auto___27620,G__27439_27609,n__25787__auto___27607,jobs,results,process,async))
;
return ((function (__27608,switch__26934__auto__,c__27046__auto___27620,G__27439_27609,n__25787__auto___27607,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____0 = (function (){
var statearr_27490 = [null,null,null,null,null,null,null];
(statearr_27490[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__);

(statearr_27490[(1)] = (1));

return statearr_27490;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____1 = (function (state_27479){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_27479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e27491){if((e27491 instanceof Object)){
var ex__26938__auto__ = e27491;
var statearr_27492_27627 = state_27479;
(statearr_27492_27627[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27628 = state_27479;
state_27479 = G__27628;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__ = function(state_27479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____1.call(this,state_27479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__;
})()
;})(__27608,switch__26934__auto__,c__27046__auto___27620,G__27439_27609,n__25787__auto___27607,jobs,results,process,async))
})();
var state__27048__auto__ = (function (){var statearr_27493 = f__27047__auto__.call(null);
(statearr_27493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___27620);

return statearr_27493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(__27608,c__27046__auto___27620,G__27439_27609,n__25787__auto___27607,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27629 = (__27608 + (1));
__27608 = G__27629;
continue;
} else {
}
break;
}

var c__27046__auto___27630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto___27630,jobs,results,process,async){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto___27630,jobs,results,process,async){
return (function (state_27515){
var state_val_27516 = (state_27515[(1)]);
if((state_val_27516 === (1))){
var state_27515__$1 = state_27515;
var statearr_27517_27631 = state_27515__$1;
(statearr_27517_27631[(2)] = null);

(statearr_27517_27631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (2))){
var state_27515__$1 = state_27515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27515__$1,(4),from);
} else {
if((state_val_27516 === (3))){
var inst_27513 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27515__$1,inst_27513);
} else {
if((state_val_27516 === (4))){
var inst_27496 = (state_27515[(7)]);
var inst_27496__$1 = (state_27515[(2)]);
var inst_27497 = (inst_27496__$1 == null);
var state_27515__$1 = (function (){var statearr_27518 = state_27515;
(statearr_27518[(7)] = inst_27496__$1);

return statearr_27518;
})();
if(cljs.core.truth_(inst_27497)){
var statearr_27519_27632 = state_27515__$1;
(statearr_27519_27632[(1)] = (5));

} else {
var statearr_27520_27633 = state_27515__$1;
(statearr_27520_27633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (5))){
var inst_27499 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27515__$1 = state_27515;
var statearr_27521_27634 = state_27515__$1;
(statearr_27521_27634[(2)] = inst_27499);

(statearr_27521_27634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (6))){
var inst_27501 = (state_27515[(8)]);
var inst_27496 = (state_27515[(7)]);
var inst_27501__$1 = cljs.core.async.chan.call(null,(1));
var inst_27502 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27503 = [inst_27496,inst_27501__$1];
var inst_27504 = (new cljs.core.PersistentVector(null,2,(5),inst_27502,inst_27503,null));
var state_27515__$1 = (function (){var statearr_27522 = state_27515;
(statearr_27522[(8)] = inst_27501__$1);

return statearr_27522;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27515__$1,(8),jobs,inst_27504);
} else {
if((state_val_27516 === (7))){
var inst_27511 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27523_27635 = state_27515__$1;
(statearr_27523_27635[(2)] = inst_27511);

(statearr_27523_27635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (8))){
var inst_27501 = (state_27515[(8)]);
var inst_27506 = (state_27515[(2)]);
var state_27515__$1 = (function (){var statearr_27524 = state_27515;
(statearr_27524[(9)] = inst_27506);

return statearr_27524;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27515__$1,(9),results,inst_27501);
} else {
if((state_val_27516 === (9))){
var inst_27508 = (state_27515[(2)]);
var state_27515__$1 = (function (){var statearr_27525 = state_27515;
(statearr_27525[(10)] = inst_27508);

return statearr_27525;
})();
var statearr_27526_27636 = state_27515__$1;
(statearr_27526_27636[(2)] = null);

(statearr_27526_27636[(1)] = (2));


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
});})(c__27046__auto___27630,jobs,results,process,async))
;
return ((function (switch__26934__auto__,c__27046__auto___27630,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____0 = (function (){
var statearr_27530 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27530[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__);

(statearr_27530[(1)] = (1));

return statearr_27530;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____1 = (function (state_27515){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_27515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e27531){if((e27531 instanceof Object)){
var ex__26938__auto__ = e27531;
var statearr_27532_27637 = state_27515;
(statearr_27532_27637[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27638 = state_27515;
state_27515 = G__27638;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__ = function(state_27515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____1.call(this,state_27515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto___27630,jobs,results,process,async))
})();
var state__27048__auto__ = (function (){var statearr_27533 = f__27047__auto__.call(null);
(statearr_27533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___27630);

return statearr_27533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto___27630,jobs,results,process,async))
);


var c__27046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto__,jobs,results,process,async){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto__,jobs,results,process,async){
return (function (state_27571){
var state_val_27572 = (state_27571[(1)]);
if((state_val_27572 === (7))){
var inst_27567 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27573_27639 = state_27571__$1;
(statearr_27573_27639[(2)] = inst_27567);

(statearr_27573_27639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (20))){
var state_27571__$1 = state_27571;
var statearr_27574_27640 = state_27571__$1;
(statearr_27574_27640[(2)] = null);

(statearr_27574_27640[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (1))){
var state_27571__$1 = state_27571;
var statearr_27575_27641 = state_27571__$1;
(statearr_27575_27641[(2)] = null);

(statearr_27575_27641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (4))){
var inst_27536 = (state_27571[(7)]);
var inst_27536__$1 = (state_27571[(2)]);
var inst_27537 = (inst_27536__$1 == null);
var state_27571__$1 = (function (){var statearr_27576 = state_27571;
(statearr_27576[(7)] = inst_27536__$1);

return statearr_27576;
})();
if(cljs.core.truth_(inst_27537)){
var statearr_27577_27642 = state_27571__$1;
(statearr_27577_27642[(1)] = (5));

} else {
var statearr_27578_27643 = state_27571__$1;
(statearr_27578_27643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (15))){
var inst_27549 = (state_27571[(8)]);
var state_27571__$1 = state_27571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27571__$1,(18),to,inst_27549);
} else {
if((state_val_27572 === (21))){
var inst_27562 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27579_27644 = state_27571__$1;
(statearr_27579_27644[(2)] = inst_27562);

(statearr_27579_27644[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (13))){
var inst_27564 = (state_27571[(2)]);
var state_27571__$1 = (function (){var statearr_27580 = state_27571;
(statearr_27580[(9)] = inst_27564);

return statearr_27580;
})();
var statearr_27581_27645 = state_27571__$1;
(statearr_27581_27645[(2)] = null);

(statearr_27581_27645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (6))){
var inst_27536 = (state_27571[(7)]);
var state_27571__$1 = state_27571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27571__$1,(11),inst_27536);
} else {
if((state_val_27572 === (17))){
var inst_27557 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
if(cljs.core.truth_(inst_27557)){
var statearr_27582_27646 = state_27571__$1;
(statearr_27582_27646[(1)] = (19));

} else {
var statearr_27583_27647 = state_27571__$1;
(statearr_27583_27647[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (3))){
var inst_27569 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27571__$1,inst_27569);
} else {
if((state_val_27572 === (12))){
var inst_27546 = (state_27571[(10)]);
var state_27571__$1 = state_27571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27571__$1,(14),inst_27546);
} else {
if((state_val_27572 === (2))){
var state_27571__$1 = state_27571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27571__$1,(4),results);
} else {
if((state_val_27572 === (19))){
var state_27571__$1 = state_27571;
var statearr_27584_27648 = state_27571__$1;
(statearr_27584_27648[(2)] = null);

(statearr_27584_27648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (11))){
var inst_27546 = (state_27571[(2)]);
var state_27571__$1 = (function (){var statearr_27585 = state_27571;
(statearr_27585[(10)] = inst_27546);

return statearr_27585;
})();
var statearr_27586_27649 = state_27571__$1;
(statearr_27586_27649[(2)] = null);

(statearr_27586_27649[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (9))){
var state_27571__$1 = state_27571;
var statearr_27587_27650 = state_27571__$1;
(statearr_27587_27650[(2)] = null);

(statearr_27587_27650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (5))){
var state_27571__$1 = state_27571;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27588_27651 = state_27571__$1;
(statearr_27588_27651[(1)] = (8));

} else {
var statearr_27589_27652 = state_27571__$1;
(statearr_27589_27652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (14))){
var inst_27549 = (state_27571[(8)]);
var inst_27551 = (state_27571[(11)]);
var inst_27549__$1 = (state_27571[(2)]);
var inst_27550 = (inst_27549__$1 == null);
var inst_27551__$1 = cljs.core.not.call(null,inst_27550);
var state_27571__$1 = (function (){var statearr_27590 = state_27571;
(statearr_27590[(8)] = inst_27549__$1);

(statearr_27590[(11)] = inst_27551__$1);

return statearr_27590;
})();
if(inst_27551__$1){
var statearr_27591_27653 = state_27571__$1;
(statearr_27591_27653[(1)] = (15));

} else {
var statearr_27592_27654 = state_27571__$1;
(statearr_27592_27654[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (16))){
var inst_27551 = (state_27571[(11)]);
var state_27571__$1 = state_27571;
var statearr_27593_27655 = state_27571__$1;
(statearr_27593_27655[(2)] = inst_27551);

(statearr_27593_27655[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (10))){
var inst_27543 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27594_27656 = state_27571__$1;
(statearr_27594_27656[(2)] = inst_27543);

(statearr_27594_27656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (18))){
var inst_27554 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27595_27657 = state_27571__$1;
(statearr_27595_27657[(2)] = inst_27554);

(statearr_27595_27657[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (8))){
var inst_27540 = cljs.core.async.close_BANG_.call(null,to);
var state_27571__$1 = state_27571;
var statearr_27596_27658 = state_27571__$1;
(statearr_27596_27658[(2)] = inst_27540);

(statearr_27596_27658[(1)] = (10));


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
});})(c__27046__auto__,jobs,results,process,async))
;
return ((function (switch__26934__auto__,c__27046__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____0 = (function (){
var statearr_27600 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27600[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__);

(statearr_27600[(1)] = (1));

return statearr_27600;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____1 = (function (state_27571){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_27571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e27601){if((e27601 instanceof Object)){
var ex__26938__auto__ = e27601;
var statearr_27602_27659 = state_27571;
(statearr_27602_27659[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27660 = state_27571;
state_27571 = G__27660;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__ = function(state_27571){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____1.call(this,state_27571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26935__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto__,jobs,results,process,async))
})();
var state__27048__auto__ = (function (){var statearr_27603 = f__27047__auto__.call(null);
(statearr_27603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto__);

return statearr_27603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto__,jobs,results,process,async))
);

return c__27046__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27661 = [];
var len__25947__auto___27664 = arguments.length;
var i__25948__auto___27665 = (0);
while(true){
if((i__25948__auto___27665 < len__25947__auto___27664)){
args27661.push((arguments[i__25948__auto___27665]));

var G__27666 = (i__25948__auto___27665 + (1));
i__25948__auto___27665 = G__27666;
continue;
} else {
}
break;
}

var G__27663 = args27661.length;
switch (G__27663) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27661.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27668 = [];
var len__25947__auto___27671 = arguments.length;
var i__25948__auto___27672 = (0);
while(true){
if((i__25948__auto___27672 < len__25947__auto___27671)){
args27668.push((arguments[i__25948__auto___27672]));

var G__27673 = (i__25948__auto___27672 + (1));
i__25948__auto___27672 = G__27673;
continue;
} else {
}
break;
}

var G__27670 = args27668.length;
switch (G__27670) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27668.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27675 = [];
var len__25947__auto___27728 = arguments.length;
var i__25948__auto___27729 = (0);
while(true){
if((i__25948__auto___27729 < len__25947__auto___27728)){
args27675.push((arguments[i__25948__auto___27729]));

var G__27730 = (i__25948__auto___27729 + (1));
i__25948__auto___27729 = G__27730;
continue;
} else {
}
break;
}

var G__27677 = args27675.length;
switch (G__27677) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27675.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27046__auto___27732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto___27732,tc,fc){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto___27732,tc,fc){
return (function (state_27703){
var state_val_27704 = (state_27703[(1)]);
if((state_val_27704 === (7))){
var inst_27699 = (state_27703[(2)]);
var state_27703__$1 = state_27703;
var statearr_27705_27733 = state_27703__$1;
(statearr_27705_27733[(2)] = inst_27699);

(statearr_27705_27733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27704 === (1))){
var state_27703__$1 = state_27703;
var statearr_27706_27734 = state_27703__$1;
(statearr_27706_27734[(2)] = null);

(statearr_27706_27734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27704 === (4))){
var inst_27680 = (state_27703[(7)]);
var inst_27680__$1 = (state_27703[(2)]);
var inst_27681 = (inst_27680__$1 == null);
var state_27703__$1 = (function (){var statearr_27707 = state_27703;
(statearr_27707[(7)] = inst_27680__$1);

return statearr_27707;
})();
if(cljs.core.truth_(inst_27681)){
var statearr_27708_27735 = state_27703__$1;
(statearr_27708_27735[(1)] = (5));

} else {
var statearr_27709_27736 = state_27703__$1;
(statearr_27709_27736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27704 === (13))){
var state_27703__$1 = state_27703;
var statearr_27710_27737 = state_27703__$1;
(statearr_27710_27737[(2)] = null);

(statearr_27710_27737[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27704 === (6))){
var inst_27680 = (state_27703[(7)]);
var inst_27686 = p.call(null,inst_27680);
var state_27703__$1 = state_27703;
if(cljs.core.truth_(inst_27686)){
var statearr_27711_27738 = state_27703__$1;
(statearr_27711_27738[(1)] = (9));

} else {
var statearr_27712_27739 = state_27703__$1;
(statearr_27712_27739[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27704 === (3))){
var inst_27701 = (state_27703[(2)]);
var state_27703__$1 = state_27703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27703__$1,inst_27701);
} else {
if((state_val_27704 === (12))){
var state_27703__$1 = state_27703;
var statearr_27713_27740 = state_27703__$1;
(statearr_27713_27740[(2)] = null);

(statearr_27713_27740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27704 === (2))){
var state_27703__$1 = state_27703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27703__$1,(4),ch);
} else {
if((state_val_27704 === (11))){
var inst_27680 = (state_27703[(7)]);
var inst_27690 = (state_27703[(2)]);
var state_27703__$1 = state_27703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27703__$1,(8),inst_27690,inst_27680);
} else {
if((state_val_27704 === (9))){
var state_27703__$1 = state_27703;
var statearr_27714_27741 = state_27703__$1;
(statearr_27714_27741[(2)] = tc);

(statearr_27714_27741[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27704 === (5))){
var inst_27683 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27684 = cljs.core.async.close_BANG_.call(null,fc);
var state_27703__$1 = (function (){var statearr_27715 = state_27703;
(statearr_27715[(8)] = inst_27683);

return statearr_27715;
})();
var statearr_27716_27742 = state_27703__$1;
(statearr_27716_27742[(2)] = inst_27684);

(statearr_27716_27742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27704 === (14))){
var inst_27697 = (state_27703[(2)]);
var state_27703__$1 = state_27703;
var statearr_27717_27743 = state_27703__$1;
(statearr_27717_27743[(2)] = inst_27697);

(statearr_27717_27743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27704 === (10))){
var state_27703__$1 = state_27703;
var statearr_27718_27744 = state_27703__$1;
(statearr_27718_27744[(2)] = fc);

(statearr_27718_27744[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27704 === (8))){
var inst_27692 = (state_27703[(2)]);
var state_27703__$1 = state_27703;
if(cljs.core.truth_(inst_27692)){
var statearr_27719_27745 = state_27703__$1;
(statearr_27719_27745[(1)] = (12));

} else {
var statearr_27720_27746 = state_27703__$1;
(statearr_27720_27746[(1)] = (13));

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
});})(c__27046__auto___27732,tc,fc))
;
return ((function (switch__26934__auto__,c__27046__auto___27732,tc,fc){
return (function() {
var cljs$core$async$state_machine__26935__auto__ = null;
var cljs$core$async$state_machine__26935__auto____0 = (function (){
var statearr_27724 = [null,null,null,null,null,null,null,null,null];
(statearr_27724[(0)] = cljs$core$async$state_machine__26935__auto__);

(statearr_27724[(1)] = (1));

return statearr_27724;
});
var cljs$core$async$state_machine__26935__auto____1 = (function (state_27703){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_27703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e27725){if((e27725 instanceof Object)){
var ex__26938__auto__ = e27725;
var statearr_27726_27747 = state_27703;
(statearr_27726_27747[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27748 = state_27703;
state_27703 = G__27748;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$state_machine__26935__auto__ = function(state_27703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26935__auto____1.call(this,state_27703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26935__auto____0;
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26935__auto____1;
return cljs$core$async$state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto___27732,tc,fc))
})();
var state__27048__auto__ = (function (){var statearr_27727 = f__27047__auto__.call(null);
(statearr_27727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___27732);

return statearr_27727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto___27732,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto__){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto__){
return (function (state_27812){
var state_val_27813 = (state_27812[(1)]);
if((state_val_27813 === (7))){
var inst_27808 = (state_27812[(2)]);
var state_27812__$1 = state_27812;
var statearr_27814_27835 = state_27812__$1;
(statearr_27814_27835[(2)] = inst_27808);

(statearr_27814_27835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (1))){
var inst_27792 = init;
var state_27812__$1 = (function (){var statearr_27815 = state_27812;
(statearr_27815[(7)] = inst_27792);

return statearr_27815;
})();
var statearr_27816_27836 = state_27812__$1;
(statearr_27816_27836[(2)] = null);

(statearr_27816_27836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (4))){
var inst_27795 = (state_27812[(8)]);
var inst_27795__$1 = (state_27812[(2)]);
var inst_27796 = (inst_27795__$1 == null);
var state_27812__$1 = (function (){var statearr_27817 = state_27812;
(statearr_27817[(8)] = inst_27795__$1);

return statearr_27817;
})();
if(cljs.core.truth_(inst_27796)){
var statearr_27818_27837 = state_27812__$1;
(statearr_27818_27837[(1)] = (5));

} else {
var statearr_27819_27838 = state_27812__$1;
(statearr_27819_27838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (6))){
var inst_27792 = (state_27812[(7)]);
var inst_27795 = (state_27812[(8)]);
var inst_27799 = (state_27812[(9)]);
var inst_27799__$1 = f.call(null,inst_27792,inst_27795);
var inst_27800 = cljs.core.reduced_QMARK_.call(null,inst_27799__$1);
var state_27812__$1 = (function (){var statearr_27820 = state_27812;
(statearr_27820[(9)] = inst_27799__$1);

return statearr_27820;
})();
if(inst_27800){
var statearr_27821_27839 = state_27812__$1;
(statearr_27821_27839[(1)] = (8));

} else {
var statearr_27822_27840 = state_27812__$1;
(statearr_27822_27840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (3))){
var inst_27810 = (state_27812[(2)]);
var state_27812__$1 = state_27812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27812__$1,inst_27810);
} else {
if((state_val_27813 === (2))){
var state_27812__$1 = state_27812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27812__$1,(4),ch);
} else {
if((state_val_27813 === (9))){
var inst_27799 = (state_27812[(9)]);
var inst_27792 = inst_27799;
var state_27812__$1 = (function (){var statearr_27823 = state_27812;
(statearr_27823[(7)] = inst_27792);

return statearr_27823;
})();
var statearr_27824_27841 = state_27812__$1;
(statearr_27824_27841[(2)] = null);

(statearr_27824_27841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (5))){
var inst_27792 = (state_27812[(7)]);
var state_27812__$1 = state_27812;
var statearr_27825_27842 = state_27812__$1;
(statearr_27825_27842[(2)] = inst_27792);

(statearr_27825_27842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (10))){
var inst_27806 = (state_27812[(2)]);
var state_27812__$1 = state_27812;
var statearr_27826_27843 = state_27812__$1;
(statearr_27826_27843[(2)] = inst_27806);

(statearr_27826_27843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (8))){
var inst_27799 = (state_27812[(9)]);
var inst_27802 = cljs.core.deref.call(null,inst_27799);
var state_27812__$1 = state_27812;
var statearr_27827_27844 = state_27812__$1;
(statearr_27827_27844[(2)] = inst_27802);

(statearr_27827_27844[(1)] = (10));


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
});})(c__27046__auto__))
;
return ((function (switch__26934__auto__,c__27046__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26935__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26935__auto____0 = (function (){
var statearr_27831 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27831[(0)] = cljs$core$async$reduce_$_state_machine__26935__auto__);

(statearr_27831[(1)] = (1));

return statearr_27831;
});
var cljs$core$async$reduce_$_state_machine__26935__auto____1 = (function (state_27812){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_27812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e27832){if((e27832 instanceof Object)){
var ex__26938__auto__ = e27832;
var statearr_27833_27845 = state_27812;
(statearr_27833_27845[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27846 = state_27812;
state_27812 = G__27846;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26935__auto__ = function(state_27812){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26935__auto____1.call(this,state_27812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26935__auto____0;
cljs$core$async$reduce_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26935__auto____1;
return cljs$core$async$reduce_$_state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto__))
})();
var state__27048__auto__ = (function (){var statearr_27834 = f__27047__auto__.call(null);
(statearr_27834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto__);

return statearr_27834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto__))
);

return c__27046__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto__,f__$1){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto__,f__$1){
return (function (state_27866){
var state_val_27867 = (state_27866[(1)]);
if((state_val_27867 === (1))){
var inst_27861 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27866__$1 = state_27866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27866__$1,(2),inst_27861);
} else {
if((state_val_27867 === (2))){
var inst_27863 = (state_27866[(2)]);
var inst_27864 = f__$1.call(null,inst_27863);
var state_27866__$1 = state_27866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27866__$1,inst_27864);
} else {
return null;
}
}
});})(c__27046__auto__,f__$1))
;
return ((function (switch__26934__auto__,c__27046__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26935__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26935__auto____0 = (function (){
var statearr_27871 = [null,null,null,null,null,null,null];
(statearr_27871[(0)] = cljs$core$async$transduce_$_state_machine__26935__auto__);

(statearr_27871[(1)] = (1));

return statearr_27871;
});
var cljs$core$async$transduce_$_state_machine__26935__auto____1 = (function (state_27866){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_27866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e27872){if((e27872 instanceof Object)){
var ex__26938__auto__ = e27872;
var statearr_27873_27875 = state_27866;
(statearr_27873_27875[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27876 = state_27866;
state_27866 = G__27876;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26935__auto__ = function(state_27866){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26935__auto____1.call(this,state_27866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26935__auto____0;
cljs$core$async$transduce_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26935__auto____1;
return cljs$core$async$transduce_$_state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto__,f__$1))
})();
var state__27048__auto__ = (function (){var statearr_27874 = f__27047__auto__.call(null);
(statearr_27874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto__);

return statearr_27874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto__,f__$1))
);

return c__27046__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27877 = [];
var len__25947__auto___27929 = arguments.length;
var i__25948__auto___27930 = (0);
while(true){
if((i__25948__auto___27930 < len__25947__auto___27929)){
args27877.push((arguments[i__25948__auto___27930]));

var G__27931 = (i__25948__auto___27930 + (1));
i__25948__auto___27930 = G__27931;
continue;
} else {
}
break;
}

var G__27879 = args27877.length;
switch (G__27879) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27877.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto__){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto__){
return (function (state_27904){
var state_val_27905 = (state_27904[(1)]);
if((state_val_27905 === (7))){
var inst_27886 = (state_27904[(2)]);
var state_27904__$1 = state_27904;
var statearr_27906_27933 = state_27904__$1;
(statearr_27906_27933[(2)] = inst_27886);

(statearr_27906_27933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (1))){
var inst_27880 = cljs.core.seq.call(null,coll);
var inst_27881 = inst_27880;
var state_27904__$1 = (function (){var statearr_27907 = state_27904;
(statearr_27907[(7)] = inst_27881);

return statearr_27907;
})();
var statearr_27908_27934 = state_27904__$1;
(statearr_27908_27934[(2)] = null);

(statearr_27908_27934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (4))){
var inst_27881 = (state_27904[(7)]);
var inst_27884 = cljs.core.first.call(null,inst_27881);
var state_27904__$1 = state_27904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27904__$1,(7),ch,inst_27884);
} else {
if((state_val_27905 === (13))){
var inst_27898 = (state_27904[(2)]);
var state_27904__$1 = state_27904;
var statearr_27909_27935 = state_27904__$1;
(statearr_27909_27935[(2)] = inst_27898);

(statearr_27909_27935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (6))){
var inst_27889 = (state_27904[(2)]);
var state_27904__$1 = state_27904;
if(cljs.core.truth_(inst_27889)){
var statearr_27910_27936 = state_27904__$1;
(statearr_27910_27936[(1)] = (8));

} else {
var statearr_27911_27937 = state_27904__$1;
(statearr_27911_27937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (3))){
var inst_27902 = (state_27904[(2)]);
var state_27904__$1 = state_27904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27904__$1,inst_27902);
} else {
if((state_val_27905 === (12))){
var state_27904__$1 = state_27904;
var statearr_27912_27938 = state_27904__$1;
(statearr_27912_27938[(2)] = null);

(statearr_27912_27938[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (2))){
var inst_27881 = (state_27904[(7)]);
var state_27904__$1 = state_27904;
if(cljs.core.truth_(inst_27881)){
var statearr_27913_27939 = state_27904__$1;
(statearr_27913_27939[(1)] = (4));

} else {
var statearr_27914_27940 = state_27904__$1;
(statearr_27914_27940[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (11))){
var inst_27895 = cljs.core.async.close_BANG_.call(null,ch);
var state_27904__$1 = state_27904;
var statearr_27915_27941 = state_27904__$1;
(statearr_27915_27941[(2)] = inst_27895);

(statearr_27915_27941[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (9))){
var state_27904__$1 = state_27904;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27916_27942 = state_27904__$1;
(statearr_27916_27942[(1)] = (11));

} else {
var statearr_27917_27943 = state_27904__$1;
(statearr_27917_27943[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (5))){
var inst_27881 = (state_27904[(7)]);
var state_27904__$1 = state_27904;
var statearr_27918_27944 = state_27904__$1;
(statearr_27918_27944[(2)] = inst_27881);

(statearr_27918_27944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (10))){
var inst_27900 = (state_27904[(2)]);
var state_27904__$1 = state_27904;
var statearr_27919_27945 = state_27904__$1;
(statearr_27919_27945[(2)] = inst_27900);

(statearr_27919_27945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (8))){
var inst_27881 = (state_27904[(7)]);
var inst_27891 = cljs.core.next.call(null,inst_27881);
var inst_27881__$1 = inst_27891;
var state_27904__$1 = (function (){var statearr_27920 = state_27904;
(statearr_27920[(7)] = inst_27881__$1);

return statearr_27920;
})();
var statearr_27921_27946 = state_27904__$1;
(statearr_27921_27946[(2)] = null);

(statearr_27921_27946[(1)] = (2));


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
});})(c__27046__auto__))
;
return ((function (switch__26934__auto__,c__27046__auto__){
return (function() {
var cljs$core$async$state_machine__26935__auto__ = null;
var cljs$core$async$state_machine__26935__auto____0 = (function (){
var statearr_27925 = [null,null,null,null,null,null,null,null];
(statearr_27925[(0)] = cljs$core$async$state_machine__26935__auto__);

(statearr_27925[(1)] = (1));

return statearr_27925;
});
var cljs$core$async$state_machine__26935__auto____1 = (function (state_27904){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_27904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e27926){if((e27926 instanceof Object)){
var ex__26938__auto__ = e27926;
var statearr_27927_27947 = state_27904;
(statearr_27927_27947[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27948 = state_27904;
state_27904 = G__27948;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$state_machine__26935__auto__ = function(state_27904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26935__auto____1.call(this,state_27904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26935__auto____0;
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26935__auto____1;
return cljs$core$async$state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto__))
})();
var state__27048__auto__ = (function (){var statearr_27928 = f__27047__auto__.call(null);
(statearr_27928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto__);

return statearr_27928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto__))
);

return c__27046__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25535__auto__ = (((_ == null))?null:_);
var m__25536__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,_);
} else {
var m__25536__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25536__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m);
} else {
var m__25536__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28174 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28174 = (function (mult,ch,cs,meta28175){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28175 = meta28175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28176,meta28175__$1){
var self__ = this;
var _28176__$1 = this;
return (new cljs.core.async.t_cljs$core$async28174(self__.mult,self__.ch,self__.cs,meta28175__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28174.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28176){
var self__ = this;
var _28176__$1 = this;
return self__.meta28175;
});})(cs))
;

cljs.core.async.t_cljs$core$async28174.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28174.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28174.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28174.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28174.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28174.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28174.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28175","meta28175",-540835849,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28174.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28174";

cljs.core.async.t_cljs$core$async28174.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async28174");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28174 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28174(mult__$1,ch__$1,cs__$1,meta28175){
return (new cljs.core.async.t_cljs$core$async28174(mult__$1,ch__$1,cs__$1,meta28175));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28174(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27046__auto___28399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto___28399,cs,m,dchan,dctr,done){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto___28399,cs,m,dchan,dctr,done){
return (function (state_28311){
var state_val_28312 = (state_28311[(1)]);
if((state_val_28312 === (7))){
var inst_28307 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
var statearr_28313_28400 = state_28311__$1;
(statearr_28313_28400[(2)] = inst_28307);

(statearr_28313_28400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (20))){
var inst_28210 = (state_28311[(7)]);
var inst_28222 = cljs.core.first.call(null,inst_28210);
var inst_28223 = cljs.core.nth.call(null,inst_28222,(0),null);
var inst_28224 = cljs.core.nth.call(null,inst_28222,(1),null);
var state_28311__$1 = (function (){var statearr_28314 = state_28311;
(statearr_28314[(8)] = inst_28223);

return statearr_28314;
})();
if(cljs.core.truth_(inst_28224)){
var statearr_28315_28401 = state_28311__$1;
(statearr_28315_28401[(1)] = (22));

} else {
var statearr_28316_28402 = state_28311__$1;
(statearr_28316_28402[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (27))){
var inst_28259 = (state_28311[(9)]);
var inst_28254 = (state_28311[(10)]);
var inst_28252 = (state_28311[(11)]);
var inst_28179 = (state_28311[(12)]);
var inst_28259__$1 = cljs.core._nth.call(null,inst_28252,inst_28254);
var inst_28260 = cljs.core.async.put_BANG_.call(null,inst_28259__$1,inst_28179,done);
var state_28311__$1 = (function (){var statearr_28317 = state_28311;
(statearr_28317[(9)] = inst_28259__$1);

return statearr_28317;
})();
if(cljs.core.truth_(inst_28260)){
var statearr_28318_28403 = state_28311__$1;
(statearr_28318_28403[(1)] = (30));

} else {
var statearr_28319_28404 = state_28311__$1;
(statearr_28319_28404[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (1))){
var state_28311__$1 = state_28311;
var statearr_28320_28405 = state_28311__$1;
(statearr_28320_28405[(2)] = null);

(statearr_28320_28405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (24))){
var inst_28210 = (state_28311[(7)]);
var inst_28229 = (state_28311[(2)]);
var inst_28230 = cljs.core.next.call(null,inst_28210);
var inst_28188 = inst_28230;
var inst_28189 = null;
var inst_28190 = (0);
var inst_28191 = (0);
var state_28311__$1 = (function (){var statearr_28321 = state_28311;
(statearr_28321[(13)] = inst_28189);

(statearr_28321[(14)] = inst_28188);

(statearr_28321[(15)] = inst_28229);

(statearr_28321[(16)] = inst_28191);

(statearr_28321[(17)] = inst_28190);

return statearr_28321;
})();
var statearr_28322_28406 = state_28311__$1;
(statearr_28322_28406[(2)] = null);

(statearr_28322_28406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (39))){
var state_28311__$1 = state_28311;
var statearr_28326_28407 = state_28311__$1;
(statearr_28326_28407[(2)] = null);

(statearr_28326_28407[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (4))){
var inst_28179 = (state_28311[(12)]);
var inst_28179__$1 = (state_28311[(2)]);
var inst_28180 = (inst_28179__$1 == null);
var state_28311__$1 = (function (){var statearr_28327 = state_28311;
(statearr_28327[(12)] = inst_28179__$1);

return statearr_28327;
})();
if(cljs.core.truth_(inst_28180)){
var statearr_28328_28408 = state_28311__$1;
(statearr_28328_28408[(1)] = (5));

} else {
var statearr_28329_28409 = state_28311__$1;
(statearr_28329_28409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (15))){
var inst_28189 = (state_28311[(13)]);
var inst_28188 = (state_28311[(14)]);
var inst_28191 = (state_28311[(16)]);
var inst_28190 = (state_28311[(17)]);
var inst_28206 = (state_28311[(2)]);
var inst_28207 = (inst_28191 + (1));
var tmp28323 = inst_28189;
var tmp28324 = inst_28188;
var tmp28325 = inst_28190;
var inst_28188__$1 = tmp28324;
var inst_28189__$1 = tmp28323;
var inst_28190__$1 = tmp28325;
var inst_28191__$1 = inst_28207;
var state_28311__$1 = (function (){var statearr_28330 = state_28311;
(statearr_28330[(18)] = inst_28206);

(statearr_28330[(13)] = inst_28189__$1);

(statearr_28330[(14)] = inst_28188__$1);

(statearr_28330[(16)] = inst_28191__$1);

(statearr_28330[(17)] = inst_28190__$1);

return statearr_28330;
})();
var statearr_28331_28410 = state_28311__$1;
(statearr_28331_28410[(2)] = null);

(statearr_28331_28410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (21))){
var inst_28233 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
var statearr_28335_28411 = state_28311__$1;
(statearr_28335_28411[(2)] = inst_28233);

(statearr_28335_28411[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (31))){
var inst_28259 = (state_28311[(9)]);
var inst_28263 = done.call(null,null);
var inst_28264 = cljs.core.async.untap_STAR_.call(null,m,inst_28259);
var state_28311__$1 = (function (){var statearr_28336 = state_28311;
(statearr_28336[(19)] = inst_28263);

return statearr_28336;
})();
var statearr_28337_28412 = state_28311__$1;
(statearr_28337_28412[(2)] = inst_28264);

(statearr_28337_28412[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (32))){
var inst_28253 = (state_28311[(20)]);
var inst_28254 = (state_28311[(10)]);
var inst_28252 = (state_28311[(11)]);
var inst_28251 = (state_28311[(21)]);
var inst_28266 = (state_28311[(2)]);
var inst_28267 = (inst_28254 + (1));
var tmp28332 = inst_28253;
var tmp28333 = inst_28252;
var tmp28334 = inst_28251;
var inst_28251__$1 = tmp28334;
var inst_28252__$1 = tmp28333;
var inst_28253__$1 = tmp28332;
var inst_28254__$1 = inst_28267;
var state_28311__$1 = (function (){var statearr_28338 = state_28311;
(statearr_28338[(20)] = inst_28253__$1);

(statearr_28338[(10)] = inst_28254__$1);

(statearr_28338[(11)] = inst_28252__$1);

(statearr_28338[(22)] = inst_28266);

(statearr_28338[(21)] = inst_28251__$1);

return statearr_28338;
})();
var statearr_28339_28413 = state_28311__$1;
(statearr_28339_28413[(2)] = null);

(statearr_28339_28413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (40))){
var inst_28279 = (state_28311[(23)]);
var inst_28283 = done.call(null,null);
var inst_28284 = cljs.core.async.untap_STAR_.call(null,m,inst_28279);
var state_28311__$1 = (function (){var statearr_28340 = state_28311;
(statearr_28340[(24)] = inst_28283);

return statearr_28340;
})();
var statearr_28341_28414 = state_28311__$1;
(statearr_28341_28414[(2)] = inst_28284);

(statearr_28341_28414[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (33))){
var inst_28270 = (state_28311[(25)]);
var inst_28272 = cljs.core.chunked_seq_QMARK_.call(null,inst_28270);
var state_28311__$1 = state_28311;
if(inst_28272){
var statearr_28342_28415 = state_28311__$1;
(statearr_28342_28415[(1)] = (36));

} else {
var statearr_28343_28416 = state_28311__$1;
(statearr_28343_28416[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (13))){
var inst_28200 = (state_28311[(26)]);
var inst_28203 = cljs.core.async.close_BANG_.call(null,inst_28200);
var state_28311__$1 = state_28311;
var statearr_28344_28417 = state_28311__$1;
(statearr_28344_28417[(2)] = inst_28203);

(statearr_28344_28417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (22))){
var inst_28223 = (state_28311[(8)]);
var inst_28226 = cljs.core.async.close_BANG_.call(null,inst_28223);
var state_28311__$1 = state_28311;
var statearr_28345_28418 = state_28311__$1;
(statearr_28345_28418[(2)] = inst_28226);

(statearr_28345_28418[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (36))){
var inst_28270 = (state_28311[(25)]);
var inst_28274 = cljs.core.chunk_first.call(null,inst_28270);
var inst_28275 = cljs.core.chunk_rest.call(null,inst_28270);
var inst_28276 = cljs.core.count.call(null,inst_28274);
var inst_28251 = inst_28275;
var inst_28252 = inst_28274;
var inst_28253 = inst_28276;
var inst_28254 = (0);
var state_28311__$1 = (function (){var statearr_28346 = state_28311;
(statearr_28346[(20)] = inst_28253);

(statearr_28346[(10)] = inst_28254);

(statearr_28346[(11)] = inst_28252);

(statearr_28346[(21)] = inst_28251);

return statearr_28346;
})();
var statearr_28347_28419 = state_28311__$1;
(statearr_28347_28419[(2)] = null);

(statearr_28347_28419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (41))){
var inst_28270 = (state_28311[(25)]);
var inst_28286 = (state_28311[(2)]);
var inst_28287 = cljs.core.next.call(null,inst_28270);
var inst_28251 = inst_28287;
var inst_28252 = null;
var inst_28253 = (0);
var inst_28254 = (0);
var state_28311__$1 = (function (){var statearr_28348 = state_28311;
(statearr_28348[(20)] = inst_28253);

(statearr_28348[(10)] = inst_28254);

(statearr_28348[(11)] = inst_28252);

(statearr_28348[(27)] = inst_28286);

(statearr_28348[(21)] = inst_28251);

return statearr_28348;
})();
var statearr_28349_28420 = state_28311__$1;
(statearr_28349_28420[(2)] = null);

(statearr_28349_28420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (43))){
var state_28311__$1 = state_28311;
var statearr_28350_28421 = state_28311__$1;
(statearr_28350_28421[(2)] = null);

(statearr_28350_28421[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (29))){
var inst_28295 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
var statearr_28351_28422 = state_28311__$1;
(statearr_28351_28422[(2)] = inst_28295);

(statearr_28351_28422[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (44))){
var inst_28304 = (state_28311[(2)]);
var state_28311__$1 = (function (){var statearr_28352 = state_28311;
(statearr_28352[(28)] = inst_28304);

return statearr_28352;
})();
var statearr_28353_28423 = state_28311__$1;
(statearr_28353_28423[(2)] = null);

(statearr_28353_28423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (6))){
var inst_28243 = (state_28311[(29)]);
var inst_28242 = cljs.core.deref.call(null,cs);
var inst_28243__$1 = cljs.core.keys.call(null,inst_28242);
var inst_28244 = cljs.core.count.call(null,inst_28243__$1);
var inst_28245 = cljs.core.reset_BANG_.call(null,dctr,inst_28244);
var inst_28250 = cljs.core.seq.call(null,inst_28243__$1);
var inst_28251 = inst_28250;
var inst_28252 = null;
var inst_28253 = (0);
var inst_28254 = (0);
var state_28311__$1 = (function (){var statearr_28354 = state_28311;
(statearr_28354[(20)] = inst_28253);

(statearr_28354[(10)] = inst_28254);

(statearr_28354[(11)] = inst_28252);

(statearr_28354[(29)] = inst_28243__$1);

(statearr_28354[(30)] = inst_28245);

(statearr_28354[(21)] = inst_28251);

return statearr_28354;
})();
var statearr_28355_28424 = state_28311__$1;
(statearr_28355_28424[(2)] = null);

(statearr_28355_28424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (28))){
var inst_28270 = (state_28311[(25)]);
var inst_28251 = (state_28311[(21)]);
var inst_28270__$1 = cljs.core.seq.call(null,inst_28251);
var state_28311__$1 = (function (){var statearr_28356 = state_28311;
(statearr_28356[(25)] = inst_28270__$1);

return statearr_28356;
})();
if(inst_28270__$1){
var statearr_28357_28425 = state_28311__$1;
(statearr_28357_28425[(1)] = (33));

} else {
var statearr_28358_28426 = state_28311__$1;
(statearr_28358_28426[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (25))){
var inst_28253 = (state_28311[(20)]);
var inst_28254 = (state_28311[(10)]);
var inst_28256 = (inst_28254 < inst_28253);
var inst_28257 = inst_28256;
var state_28311__$1 = state_28311;
if(cljs.core.truth_(inst_28257)){
var statearr_28359_28427 = state_28311__$1;
(statearr_28359_28427[(1)] = (27));

} else {
var statearr_28360_28428 = state_28311__$1;
(statearr_28360_28428[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (34))){
var state_28311__$1 = state_28311;
var statearr_28361_28429 = state_28311__$1;
(statearr_28361_28429[(2)] = null);

(statearr_28361_28429[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (17))){
var state_28311__$1 = state_28311;
var statearr_28362_28430 = state_28311__$1;
(statearr_28362_28430[(2)] = null);

(statearr_28362_28430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (3))){
var inst_28309 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28311__$1,inst_28309);
} else {
if((state_val_28312 === (12))){
var inst_28238 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
var statearr_28363_28431 = state_28311__$1;
(statearr_28363_28431[(2)] = inst_28238);

(statearr_28363_28431[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (2))){
var state_28311__$1 = state_28311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28311__$1,(4),ch);
} else {
if((state_val_28312 === (23))){
var state_28311__$1 = state_28311;
var statearr_28364_28432 = state_28311__$1;
(statearr_28364_28432[(2)] = null);

(statearr_28364_28432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (35))){
var inst_28293 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
var statearr_28365_28433 = state_28311__$1;
(statearr_28365_28433[(2)] = inst_28293);

(statearr_28365_28433[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (19))){
var inst_28210 = (state_28311[(7)]);
var inst_28214 = cljs.core.chunk_first.call(null,inst_28210);
var inst_28215 = cljs.core.chunk_rest.call(null,inst_28210);
var inst_28216 = cljs.core.count.call(null,inst_28214);
var inst_28188 = inst_28215;
var inst_28189 = inst_28214;
var inst_28190 = inst_28216;
var inst_28191 = (0);
var state_28311__$1 = (function (){var statearr_28366 = state_28311;
(statearr_28366[(13)] = inst_28189);

(statearr_28366[(14)] = inst_28188);

(statearr_28366[(16)] = inst_28191);

(statearr_28366[(17)] = inst_28190);

return statearr_28366;
})();
var statearr_28367_28434 = state_28311__$1;
(statearr_28367_28434[(2)] = null);

(statearr_28367_28434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (11))){
var inst_28188 = (state_28311[(14)]);
var inst_28210 = (state_28311[(7)]);
var inst_28210__$1 = cljs.core.seq.call(null,inst_28188);
var state_28311__$1 = (function (){var statearr_28368 = state_28311;
(statearr_28368[(7)] = inst_28210__$1);

return statearr_28368;
})();
if(inst_28210__$1){
var statearr_28369_28435 = state_28311__$1;
(statearr_28369_28435[(1)] = (16));

} else {
var statearr_28370_28436 = state_28311__$1;
(statearr_28370_28436[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (9))){
var inst_28240 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
var statearr_28371_28437 = state_28311__$1;
(statearr_28371_28437[(2)] = inst_28240);

(statearr_28371_28437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (5))){
var inst_28186 = cljs.core.deref.call(null,cs);
var inst_28187 = cljs.core.seq.call(null,inst_28186);
var inst_28188 = inst_28187;
var inst_28189 = null;
var inst_28190 = (0);
var inst_28191 = (0);
var state_28311__$1 = (function (){var statearr_28372 = state_28311;
(statearr_28372[(13)] = inst_28189);

(statearr_28372[(14)] = inst_28188);

(statearr_28372[(16)] = inst_28191);

(statearr_28372[(17)] = inst_28190);

return statearr_28372;
})();
var statearr_28373_28438 = state_28311__$1;
(statearr_28373_28438[(2)] = null);

(statearr_28373_28438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (14))){
var state_28311__$1 = state_28311;
var statearr_28374_28439 = state_28311__$1;
(statearr_28374_28439[(2)] = null);

(statearr_28374_28439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (45))){
var inst_28301 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
var statearr_28375_28440 = state_28311__$1;
(statearr_28375_28440[(2)] = inst_28301);

(statearr_28375_28440[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (26))){
var inst_28243 = (state_28311[(29)]);
var inst_28297 = (state_28311[(2)]);
var inst_28298 = cljs.core.seq.call(null,inst_28243);
var state_28311__$1 = (function (){var statearr_28376 = state_28311;
(statearr_28376[(31)] = inst_28297);

return statearr_28376;
})();
if(inst_28298){
var statearr_28377_28441 = state_28311__$1;
(statearr_28377_28441[(1)] = (42));

} else {
var statearr_28378_28442 = state_28311__$1;
(statearr_28378_28442[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (16))){
var inst_28210 = (state_28311[(7)]);
var inst_28212 = cljs.core.chunked_seq_QMARK_.call(null,inst_28210);
var state_28311__$1 = state_28311;
if(inst_28212){
var statearr_28379_28443 = state_28311__$1;
(statearr_28379_28443[(1)] = (19));

} else {
var statearr_28380_28444 = state_28311__$1;
(statearr_28380_28444[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (38))){
var inst_28290 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
var statearr_28381_28445 = state_28311__$1;
(statearr_28381_28445[(2)] = inst_28290);

(statearr_28381_28445[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (30))){
var state_28311__$1 = state_28311;
var statearr_28382_28446 = state_28311__$1;
(statearr_28382_28446[(2)] = null);

(statearr_28382_28446[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (10))){
var inst_28189 = (state_28311[(13)]);
var inst_28191 = (state_28311[(16)]);
var inst_28199 = cljs.core._nth.call(null,inst_28189,inst_28191);
var inst_28200 = cljs.core.nth.call(null,inst_28199,(0),null);
var inst_28201 = cljs.core.nth.call(null,inst_28199,(1),null);
var state_28311__$1 = (function (){var statearr_28383 = state_28311;
(statearr_28383[(26)] = inst_28200);

return statearr_28383;
})();
if(cljs.core.truth_(inst_28201)){
var statearr_28384_28447 = state_28311__$1;
(statearr_28384_28447[(1)] = (13));

} else {
var statearr_28385_28448 = state_28311__$1;
(statearr_28385_28448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (18))){
var inst_28236 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
var statearr_28386_28449 = state_28311__$1;
(statearr_28386_28449[(2)] = inst_28236);

(statearr_28386_28449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (42))){
var state_28311__$1 = state_28311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28311__$1,(45),dchan);
} else {
if((state_val_28312 === (37))){
var inst_28279 = (state_28311[(23)]);
var inst_28270 = (state_28311[(25)]);
var inst_28179 = (state_28311[(12)]);
var inst_28279__$1 = cljs.core.first.call(null,inst_28270);
var inst_28280 = cljs.core.async.put_BANG_.call(null,inst_28279__$1,inst_28179,done);
var state_28311__$1 = (function (){var statearr_28387 = state_28311;
(statearr_28387[(23)] = inst_28279__$1);

return statearr_28387;
})();
if(cljs.core.truth_(inst_28280)){
var statearr_28388_28450 = state_28311__$1;
(statearr_28388_28450[(1)] = (39));

} else {
var statearr_28389_28451 = state_28311__$1;
(statearr_28389_28451[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (8))){
var inst_28191 = (state_28311[(16)]);
var inst_28190 = (state_28311[(17)]);
var inst_28193 = (inst_28191 < inst_28190);
var inst_28194 = inst_28193;
var state_28311__$1 = state_28311;
if(cljs.core.truth_(inst_28194)){
var statearr_28390_28452 = state_28311__$1;
(statearr_28390_28452[(1)] = (10));

} else {
var statearr_28391_28453 = state_28311__$1;
(statearr_28391_28453[(1)] = (11));

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
});})(c__27046__auto___28399,cs,m,dchan,dctr,done))
;
return ((function (switch__26934__auto__,c__27046__auto___28399,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26935__auto__ = null;
var cljs$core$async$mult_$_state_machine__26935__auto____0 = (function (){
var statearr_28395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28395[(0)] = cljs$core$async$mult_$_state_machine__26935__auto__);

(statearr_28395[(1)] = (1));

return statearr_28395;
});
var cljs$core$async$mult_$_state_machine__26935__auto____1 = (function (state_28311){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_28311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e28396){if((e28396 instanceof Object)){
var ex__26938__auto__ = e28396;
var statearr_28397_28454 = state_28311;
(statearr_28397_28454[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28455 = state_28311;
state_28311 = G__28455;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26935__auto__ = function(state_28311){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26935__auto____1.call(this,state_28311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26935__auto____0;
cljs$core$async$mult_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26935__auto____1;
return cljs$core$async$mult_$_state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto___28399,cs,m,dchan,dctr,done))
})();
var state__27048__auto__ = (function (){var statearr_28398 = f__27047__auto__.call(null);
(statearr_28398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___28399);

return statearr_28398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto___28399,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28456 = [];
var len__25947__auto___28459 = arguments.length;
var i__25948__auto___28460 = (0);
while(true){
if((i__25948__auto___28460 < len__25947__auto___28459)){
args28456.push((arguments[i__25948__auto___28460]));

var G__28461 = (i__25948__auto___28460 + (1));
i__25948__auto___28460 = G__28461;
continue;
} else {
}
break;
}

var G__28458 = args28456.length;
switch (G__28458) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28456.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m);
} else {
var m__25536__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,state_map);
} else {
var m__25536__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,mode);
} else {
var m__25536__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___28473 = arguments.length;
var i__25948__auto___28474 = (0);
while(true){
if((i__25948__auto___28474 < len__25947__auto___28473)){
args__25954__auto__.push((arguments[i__25948__auto___28474]));

var G__28475 = (i__25948__auto___28474 + (1));
i__25948__auto___28474 = G__28475;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((3) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25955__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28467){
var map__28468 = p__28467;
var map__28468__$1 = ((((!((map__28468 == null)))?((((map__28468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28468):map__28468);
var opts = map__28468__$1;
var statearr_28470_28476 = state;
(statearr_28470_28476[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28468,map__28468__$1,opts){
return (function (val){
var statearr_28471_28477 = state;
(statearr_28471_28477[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28468,map__28468__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28472_28478 = state;
(statearr_28472_28478[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28463){
var G__28464 = cljs.core.first.call(null,seq28463);
var seq28463__$1 = cljs.core.next.call(null,seq28463);
var G__28465 = cljs.core.first.call(null,seq28463__$1);
var seq28463__$2 = cljs.core.next.call(null,seq28463__$1);
var G__28466 = cljs.core.first.call(null,seq28463__$2);
var seq28463__$3 = cljs.core.next.call(null,seq28463__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28464,G__28465,G__28466,seq28463__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28644 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28645){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28645 = meta28645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28646,meta28645__$1){
var self__ = this;
var _28646__$1 = this;
return (new cljs.core.async.t_cljs$core$async28644(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28645__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28646){
var self__ = this;
var _28646__$1 = this;
return self__.meta28645;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28644.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28644.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28644.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28644.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28644.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28644.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28644.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28644.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28644.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28645","meta28645",489318992,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28644.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28644";

cljs.core.async.t_cljs$core$async28644.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async28644");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28644 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28644(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28645){
return (new cljs.core.async.t_cljs$core$async28644(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28645));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28644(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27046__auto___28809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto___28809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto___28809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28746){
var state_val_28747 = (state_28746[(1)]);
if((state_val_28747 === (7))){
var inst_28662 = (state_28746[(2)]);
var state_28746__$1 = state_28746;
var statearr_28748_28810 = state_28746__$1;
(statearr_28748_28810[(2)] = inst_28662);

(statearr_28748_28810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (20))){
var inst_28674 = (state_28746[(7)]);
var state_28746__$1 = state_28746;
var statearr_28749_28811 = state_28746__$1;
(statearr_28749_28811[(2)] = inst_28674);

(statearr_28749_28811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (27))){
var state_28746__$1 = state_28746;
var statearr_28750_28812 = state_28746__$1;
(statearr_28750_28812[(2)] = null);

(statearr_28750_28812[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (1))){
var inst_28650 = (state_28746[(8)]);
var inst_28650__$1 = calc_state.call(null);
var inst_28652 = (inst_28650__$1 == null);
var inst_28653 = cljs.core.not.call(null,inst_28652);
var state_28746__$1 = (function (){var statearr_28751 = state_28746;
(statearr_28751[(8)] = inst_28650__$1);

return statearr_28751;
})();
if(inst_28653){
var statearr_28752_28813 = state_28746__$1;
(statearr_28752_28813[(1)] = (2));

} else {
var statearr_28753_28814 = state_28746__$1;
(statearr_28753_28814[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (24))){
var inst_28706 = (state_28746[(9)]);
var inst_28720 = (state_28746[(10)]);
var inst_28697 = (state_28746[(11)]);
var inst_28720__$1 = inst_28697.call(null,inst_28706);
var state_28746__$1 = (function (){var statearr_28754 = state_28746;
(statearr_28754[(10)] = inst_28720__$1);

return statearr_28754;
})();
if(cljs.core.truth_(inst_28720__$1)){
var statearr_28755_28815 = state_28746__$1;
(statearr_28755_28815[(1)] = (29));

} else {
var statearr_28756_28816 = state_28746__$1;
(statearr_28756_28816[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (4))){
var inst_28665 = (state_28746[(2)]);
var state_28746__$1 = state_28746;
if(cljs.core.truth_(inst_28665)){
var statearr_28757_28817 = state_28746__$1;
(statearr_28757_28817[(1)] = (8));

} else {
var statearr_28758_28818 = state_28746__$1;
(statearr_28758_28818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (15))){
var inst_28691 = (state_28746[(2)]);
var state_28746__$1 = state_28746;
if(cljs.core.truth_(inst_28691)){
var statearr_28759_28819 = state_28746__$1;
(statearr_28759_28819[(1)] = (19));

} else {
var statearr_28760_28820 = state_28746__$1;
(statearr_28760_28820[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (21))){
var inst_28696 = (state_28746[(12)]);
var inst_28696__$1 = (state_28746[(2)]);
var inst_28697 = cljs.core.get.call(null,inst_28696__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28698 = cljs.core.get.call(null,inst_28696__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28699 = cljs.core.get.call(null,inst_28696__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28746__$1 = (function (){var statearr_28761 = state_28746;
(statearr_28761[(13)] = inst_28698);

(statearr_28761[(12)] = inst_28696__$1);

(statearr_28761[(11)] = inst_28697);

return statearr_28761;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28746__$1,(22),inst_28699);
} else {
if((state_val_28747 === (31))){
var inst_28728 = (state_28746[(2)]);
var state_28746__$1 = state_28746;
if(cljs.core.truth_(inst_28728)){
var statearr_28762_28821 = state_28746__$1;
(statearr_28762_28821[(1)] = (32));

} else {
var statearr_28763_28822 = state_28746__$1;
(statearr_28763_28822[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (32))){
var inst_28705 = (state_28746[(14)]);
var state_28746__$1 = state_28746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28746__$1,(35),out,inst_28705);
} else {
if((state_val_28747 === (33))){
var inst_28696 = (state_28746[(12)]);
var inst_28674 = inst_28696;
var state_28746__$1 = (function (){var statearr_28764 = state_28746;
(statearr_28764[(7)] = inst_28674);

return statearr_28764;
})();
var statearr_28765_28823 = state_28746__$1;
(statearr_28765_28823[(2)] = null);

(statearr_28765_28823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (13))){
var inst_28674 = (state_28746[(7)]);
var inst_28681 = inst_28674.cljs$lang$protocol_mask$partition0$;
var inst_28682 = (inst_28681 & (64));
var inst_28683 = inst_28674.cljs$core$ISeq$;
var inst_28684 = (inst_28682) || (inst_28683);
var state_28746__$1 = state_28746;
if(cljs.core.truth_(inst_28684)){
var statearr_28766_28824 = state_28746__$1;
(statearr_28766_28824[(1)] = (16));

} else {
var statearr_28767_28825 = state_28746__$1;
(statearr_28767_28825[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (22))){
var inst_28706 = (state_28746[(9)]);
var inst_28705 = (state_28746[(14)]);
var inst_28704 = (state_28746[(2)]);
var inst_28705__$1 = cljs.core.nth.call(null,inst_28704,(0),null);
var inst_28706__$1 = cljs.core.nth.call(null,inst_28704,(1),null);
var inst_28707 = (inst_28705__$1 == null);
var inst_28708 = cljs.core._EQ_.call(null,inst_28706__$1,change);
var inst_28709 = (inst_28707) || (inst_28708);
var state_28746__$1 = (function (){var statearr_28768 = state_28746;
(statearr_28768[(9)] = inst_28706__$1);

(statearr_28768[(14)] = inst_28705__$1);

return statearr_28768;
})();
if(cljs.core.truth_(inst_28709)){
var statearr_28769_28826 = state_28746__$1;
(statearr_28769_28826[(1)] = (23));

} else {
var statearr_28770_28827 = state_28746__$1;
(statearr_28770_28827[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (36))){
var inst_28696 = (state_28746[(12)]);
var inst_28674 = inst_28696;
var state_28746__$1 = (function (){var statearr_28771 = state_28746;
(statearr_28771[(7)] = inst_28674);

return statearr_28771;
})();
var statearr_28772_28828 = state_28746__$1;
(statearr_28772_28828[(2)] = null);

(statearr_28772_28828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (29))){
var inst_28720 = (state_28746[(10)]);
var state_28746__$1 = state_28746;
var statearr_28773_28829 = state_28746__$1;
(statearr_28773_28829[(2)] = inst_28720);

(statearr_28773_28829[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (6))){
var state_28746__$1 = state_28746;
var statearr_28774_28830 = state_28746__$1;
(statearr_28774_28830[(2)] = false);

(statearr_28774_28830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (28))){
var inst_28716 = (state_28746[(2)]);
var inst_28717 = calc_state.call(null);
var inst_28674 = inst_28717;
var state_28746__$1 = (function (){var statearr_28775 = state_28746;
(statearr_28775[(7)] = inst_28674);

(statearr_28775[(15)] = inst_28716);

return statearr_28775;
})();
var statearr_28776_28831 = state_28746__$1;
(statearr_28776_28831[(2)] = null);

(statearr_28776_28831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (25))){
var inst_28742 = (state_28746[(2)]);
var state_28746__$1 = state_28746;
var statearr_28777_28832 = state_28746__$1;
(statearr_28777_28832[(2)] = inst_28742);

(statearr_28777_28832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (34))){
var inst_28740 = (state_28746[(2)]);
var state_28746__$1 = state_28746;
var statearr_28778_28833 = state_28746__$1;
(statearr_28778_28833[(2)] = inst_28740);

(statearr_28778_28833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (17))){
var state_28746__$1 = state_28746;
var statearr_28779_28834 = state_28746__$1;
(statearr_28779_28834[(2)] = false);

(statearr_28779_28834[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (3))){
var state_28746__$1 = state_28746;
var statearr_28780_28835 = state_28746__$1;
(statearr_28780_28835[(2)] = false);

(statearr_28780_28835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (12))){
var inst_28744 = (state_28746[(2)]);
var state_28746__$1 = state_28746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28746__$1,inst_28744);
} else {
if((state_val_28747 === (2))){
var inst_28650 = (state_28746[(8)]);
var inst_28655 = inst_28650.cljs$lang$protocol_mask$partition0$;
var inst_28656 = (inst_28655 & (64));
var inst_28657 = inst_28650.cljs$core$ISeq$;
var inst_28658 = (inst_28656) || (inst_28657);
var state_28746__$1 = state_28746;
if(cljs.core.truth_(inst_28658)){
var statearr_28781_28836 = state_28746__$1;
(statearr_28781_28836[(1)] = (5));

} else {
var statearr_28782_28837 = state_28746__$1;
(statearr_28782_28837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (23))){
var inst_28705 = (state_28746[(14)]);
var inst_28711 = (inst_28705 == null);
var state_28746__$1 = state_28746;
if(cljs.core.truth_(inst_28711)){
var statearr_28783_28838 = state_28746__$1;
(statearr_28783_28838[(1)] = (26));

} else {
var statearr_28784_28839 = state_28746__$1;
(statearr_28784_28839[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (35))){
var inst_28731 = (state_28746[(2)]);
var state_28746__$1 = state_28746;
if(cljs.core.truth_(inst_28731)){
var statearr_28785_28840 = state_28746__$1;
(statearr_28785_28840[(1)] = (36));

} else {
var statearr_28786_28841 = state_28746__$1;
(statearr_28786_28841[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (19))){
var inst_28674 = (state_28746[(7)]);
var inst_28693 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28674);
var state_28746__$1 = state_28746;
var statearr_28787_28842 = state_28746__$1;
(statearr_28787_28842[(2)] = inst_28693);

(statearr_28787_28842[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (11))){
var inst_28674 = (state_28746[(7)]);
var inst_28678 = (inst_28674 == null);
var inst_28679 = cljs.core.not.call(null,inst_28678);
var state_28746__$1 = state_28746;
if(inst_28679){
var statearr_28788_28843 = state_28746__$1;
(statearr_28788_28843[(1)] = (13));

} else {
var statearr_28789_28844 = state_28746__$1;
(statearr_28789_28844[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (9))){
var inst_28650 = (state_28746[(8)]);
var state_28746__$1 = state_28746;
var statearr_28790_28845 = state_28746__$1;
(statearr_28790_28845[(2)] = inst_28650);

(statearr_28790_28845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (5))){
var state_28746__$1 = state_28746;
var statearr_28791_28846 = state_28746__$1;
(statearr_28791_28846[(2)] = true);

(statearr_28791_28846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (14))){
var state_28746__$1 = state_28746;
var statearr_28792_28847 = state_28746__$1;
(statearr_28792_28847[(2)] = false);

(statearr_28792_28847[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (26))){
var inst_28706 = (state_28746[(9)]);
var inst_28713 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28706);
var state_28746__$1 = state_28746;
var statearr_28793_28848 = state_28746__$1;
(statearr_28793_28848[(2)] = inst_28713);

(statearr_28793_28848[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (16))){
var state_28746__$1 = state_28746;
var statearr_28794_28849 = state_28746__$1;
(statearr_28794_28849[(2)] = true);

(statearr_28794_28849[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (38))){
var inst_28736 = (state_28746[(2)]);
var state_28746__$1 = state_28746;
var statearr_28795_28850 = state_28746__$1;
(statearr_28795_28850[(2)] = inst_28736);

(statearr_28795_28850[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (30))){
var inst_28706 = (state_28746[(9)]);
var inst_28698 = (state_28746[(13)]);
var inst_28697 = (state_28746[(11)]);
var inst_28723 = cljs.core.empty_QMARK_.call(null,inst_28697);
var inst_28724 = inst_28698.call(null,inst_28706);
var inst_28725 = cljs.core.not.call(null,inst_28724);
var inst_28726 = (inst_28723) && (inst_28725);
var state_28746__$1 = state_28746;
var statearr_28796_28851 = state_28746__$1;
(statearr_28796_28851[(2)] = inst_28726);

(statearr_28796_28851[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (10))){
var inst_28650 = (state_28746[(8)]);
var inst_28670 = (state_28746[(2)]);
var inst_28671 = cljs.core.get.call(null,inst_28670,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28672 = cljs.core.get.call(null,inst_28670,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28673 = cljs.core.get.call(null,inst_28670,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28674 = inst_28650;
var state_28746__$1 = (function (){var statearr_28797 = state_28746;
(statearr_28797[(16)] = inst_28673);

(statearr_28797[(17)] = inst_28671);

(statearr_28797[(7)] = inst_28674);

(statearr_28797[(18)] = inst_28672);

return statearr_28797;
})();
var statearr_28798_28852 = state_28746__$1;
(statearr_28798_28852[(2)] = null);

(statearr_28798_28852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (18))){
var inst_28688 = (state_28746[(2)]);
var state_28746__$1 = state_28746;
var statearr_28799_28853 = state_28746__$1;
(statearr_28799_28853[(2)] = inst_28688);

(statearr_28799_28853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (37))){
var state_28746__$1 = state_28746;
var statearr_28800_28854 = state_28746__$1;
(statearr_28800_28854[(2)] = null);

(statearr_28800_28854[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28747 === (8))){
var inst_28650 = (state_28746[(8)]);
var inst_28667 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28650);
var state_28746__$1 = state_28746;
var statearr_28801_28855 = state_28746__$1;
(statearr_28801_28855[(2)] = inst_28667);

(statearr_28801_28855[(1)] = (10));


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
});})(c__27046__auto___28809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26934__auto__,c__27046__auto___28809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26935__auto__ = null;
var cljs$core$async$mix_$_state_machine__26935__auto____0 = (function (){
var statearr_28805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28805[(0)] = cljs$core$async$mix_$_state_machine__26935__auto__);

(statearr_28805[(1)] = (1));

return statearr_28805;
});
var cljs$core$async$mix_$_state_machine__26935__auto____1 = (function (state_28746){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_28746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e28806){if((e28806 instanceof Object)){
var ex__26938__auto__ = e28806;
var statearr_28807_28856 = state_28746;
(statearr_28807_28856[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28857 = state_28746;
state_28746 = G__28857;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26935__auto__ = function(state_28746){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26935__auto____1.call(this,state_28746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26935__auto____0;
cljs$core$async$mix_$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26935__auto____1;
return cljs$core$async$mix_$_state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto___28809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27048__auto__ = (function (){var statearr_28808 = f__27047__auto__.call(null);
(statearr_28808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___28809);

return statearr_28808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto___28809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25536__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p,v,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28858 = [];
var len__25947__auto___28861 = arguments.length;
var i__25948__auto___28862 = (0);
while(true){
if((i__25948__auto___28862 < len__25947__auto___28861)){
args28858.push((arguments[i__25948__auto___28862]));

var G__28863 = (i__25948__auto___28862 + (1));
i__25948__auto___28862 = G__28863;
continue;
} else {
}
break;
}

var G__28860 = args28858.length;
switch (G__28860) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28858.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p);
} else {
var m__25536__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p,v);
} else {
var m__25536__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28866 = [];
var len__25947__auto___28991 = arguments.length;
var i__25948__auto___28992 = (0);
while(true){
if((i__25948__auto___28992 < len__25947__auto___28991)){
args28866.push((arguments[i__25948__auto___28992]));

var G__28993 = (i__25948__auto___28992 + (1));
i__25948__auto___28992 = G__28993;
continue;
} else {
}
break;
}

var G__28868 = args28866.length;
switch (G__28868) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28866.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24872__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24872__auto__,mults){
return (function (p1__28865_SHARP_){
if(cljs.core.truth_(p1__28865_SHARP_.call(null,topic))){
return p1__28865_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28865_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24872__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28869 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28869 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28870){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28870 = meta28870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28871,meta28870__$1){
var self__ = this;
var _28871__$1 = this;
return (new cljs.core.async.t_cljs$core$async28869(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28870__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28871){
var self__ = this;
var _28871__$1 = this;
return self__.meta28870;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28869.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28870","meta28870",1768547646,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28869";

cljs.core.async.t_cljs$core$async28869.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async28869");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28869 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28869(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28870){
return (new cljs.core.async.t_cljs$core$async28869(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28870));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28869(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27046__auto___28995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto___28995,mults,ensure_mult,p){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto___28995,mults,ensure_mult,p){
return (function (state_28943){
var state_val_28944 = (state_28943[(1)]);
if((state_val_28944 === (7))){
var inst_28939 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28945_28996 = state_28943__$1;
(statearr_28945_28996[(2)] = inst_28939);

(statearr_28945_28996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (20))){
var state_28943__$1 = state_28943;
var statearr_28946_28997 = state_28943__$1;
(statearr_28946_28997[(2)] = null);

(statearr_28946_28997[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (1))){
var state_28943__$1 = state_28943;
var statearr_28947_28998 = state_28943__$1;
(statearr_28947_28998[(2)] = null);

(statearr_28947_28998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (24))){
var inst_28922 = (state_28943[(7)]);
var inst_28931 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28922);
var state_28943__$1 = state_28943;
var statearr_28948_28999 = state_28943__$1;
(statearr_28948_28999[(2)] = inst_28931);

(statearr_28948_28999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (4))){
var inst_28874 = (state_28943[(8)]);
var inst_28874__$1 = (state_28943[(2)]);
var inst_28875 = (inst_28874__$1 == null);
var state_28943__$1 = (function (){var statearr_28949 = state_28943;
(statearr_28949[(8)] = inst_28874__$1);

return statearr_28949;
})();
if(cljs.core.truth_(inst_28875)){
var statearr_28950_29000 = state_28943__$1;
(statearr_28950_29000[(1)] = (5));

} else {
var statearr_28951_29001 = state_28943__$1;
(statearr_28951_29001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (15))){
var inst_28916 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28952_29002 = state_28943__$1;
(statearr_28952_29002[(2)] = inst_28916);

(statearr_28952_29002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (21))){
var inst_28936 = (state_28943[(2)]);
var state_28943__$1 = (function (){var statearr_28953 = state_28943;
(statearr_28953[(9)] = inst_28936);

return statearr_28953;
})();
var statearr_28954_29003 = state_28943__$1;
(statearr_28954_29003[(2)] = null);

(statearr_28954_29003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (13))){
var inst_28898 = (state_28943[(10)]);
var inst_28900 = cljs.core.chunked_seq_QMARK_.call(null,inst_28898);
var state_28943__$1 = state_28943;
if(inst_28900){
var statearr_28955_29004 = state_28943__$1;
(statearr_28955_29004[(1)] = (16));

} else {
var statearr_28956_29005 = state_28943__$1;
(statearr_28956_29005[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (22))){
var inst_28928 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
if(cljs.core.truth_(inst_28928)){
var statearr_28957_29006 = state_28943__$1;
(statearr_28957_29006[(1)] = (23));

} else {
var statearr_28958_29007 = state_28943__$1;
(statearr_28958_29007[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (6))){
var inst_28924 = (state_28943[(11)]);
var inst_28874 = (state_28943[(8)]);
var inst_28922 = (state_28943[(7)]);
var inst_28922__$1 = topic_fn.call(null,inst_28874);
var inst_28923 = cljs.core.deref.call(null,mults);
var inst_28924__$1 = cljs.core.get.call(null,inst_28923,inst_28922__$1);
var state_28943__$1 = (function (){var statearr_28959 = state_28943;
(statearr_28959[(11)] = inst_28924__$1);

(statearr_28959[(7)] = inst_28922__$1);

return statearr_28959;
})();
if(cljs.core.truth_(inst_28924__$1)){
var statearr_28960_29008 = state_28943__$1;
(statearr_28960_29008[(1)] = (19));

} else {
var statearr_28961_29009 = state_28943__$1;
(statearr_28961_29009[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (25))){
var inst_28933 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28962_29010 = state_28943__$1;
(statearr_28962_29010[(2)] = inst_28933);

(statearr_28962_29010[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (17))){
var inst_28898 = (state_28943[(10)]);
var inst_28907 = cljs.core.first.call(null,inst_28898);
var inst_28908 = cljs.core.async.muxch_STAR_.call(null,inst_28907);
var inst_28909 = cljs.core.async.close_BANG_.call(null,inst_28908);
var inst_28910 = cljs.core.next.call(null,inst_28898);
var inst_28884 = inst_28910;
var inst_28885 = null;
var inst_28886 = (0);
var inst_28887 = (0);
var state_28943__$1 = (function (){var statearr_28963 = state_28943;
(statearr_28963[(12)] = inst_28885);

(statearr_28963[(13)] = inst_28884);

(statearr_28963[(14)] = inst_28886);

(statearr_28963[(15)] = inst_28887);

(statearr_28963[(16)] = inst_28909);

return statearr_28963;
})();
var statearr_28964_29011 = state_28943__$1;
(statearr_28964_29011[(2)] = null);

(statearr_28964_29011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (3))){
var inst_28941 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28943__$1,inst_28941);
} else {
if((state_val_28944 === (12))){
var inst_28918 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28965_29012 = state_28943__$1;
(statearr_28965_29012[(2)] = inst_28918);

(statearr_28965_29012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (2))){
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28943__$1,(4),ch);
} else {
if((state_val_28944 === (23))){
var state_28943__$1 = state_28943;
var statearr_28966_29013 = state_28943__$1;
(statearr_28966_29013[(2)] = null);

(statearr_28966_29013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (19))){
var inst_28924 = (state_28943[(11)]);
var inst_28874 = (state_28943[(8)]);
var inst_28926 = cljs.core.async.muxch_STAR_.call(null,inst_28924);
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28943__$1,(22),inst_28926,inst_28874);
} else {
if((state_val_28944 === (11))){
var inst_28884 = (state_28943[(13)]);
var inst_28898 = (state_28943[(10)]);
var inst_28898__$1 = cljs.core.seq.call(null,inst_28884);
var state_28943__$1 = (function (){var statearr_28967 = state_28943;
(statearr_28967[(10)] = inst_28898__$1);

return statearr_28967;
})();
if(inst_28898__$1){
var statearr_28968_29014 = state_28943__$1;
(statearr_28968_29014[(1)] = (13));

} else {
var statearr_28969_29015 = state_28943__$1;
(statearr_28969_29015[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (9))){
var inst_28920 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28970_29016 = state_28943__$1;
(statearr_28970_29016[(2)] = inst_28920);

(statearr_28970_29016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (5))){
var inst_28881 = cljs.core.deref.call(null,mults);
var inst_28882 = cljs.core.vals.call(null,inst_28881);
var inst_28883 = cljs.core.seq.call(null,inst_28882);
var inst_28884 = inst_28883;
var inst_28885 = null;
var inst_28886 = (0);
var inst_28887 = (0);
var state_28943__$1 = (function (){var statearr_28971 = state_28943;
(statearr_28971[(12)] = inst_28885);

(statearr_28971[(13)] = inst_28884);

(statearr_28971[(14)] = inst_28886);

(statearr_28971[(15)] = inst_28887);

return statearr_28971;
})();
var statearr_28972_29017 = state_28943__$1;
(statearr_28972_29017[(2)] = null);

(statearr_28972_29017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (14))){
var state_28943__$1 = state_28943;
var statearr_28976_29018 = state_28943__$1;
(statearr_28976_29018[(2)] = null);

(statearr_28976_29018[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (16))){
var inst_28898 = (state_28943[(10)]);
var inst_28902 = cljs.core.chunk_first.call(null,inst_28898);
var inst_28903 = cljs.core.chunk_rest.call(null,inst_28898);
var inst_28904 = cljs.core.count.call(null,inst_28902);
var inst_28884 = inst_28903;
var inst_28885 = inst_28902;
var inst_28886 = inst_28904;
var inst_28887 = (0);
var state_28943__$1 = (function (){var statearr_28977 = state_28943;
(statearr_28977[(12)] = inst_28885);

(statearr_28977[(13)] = inst_28884);

(statearr_28977[(14)] = inst_28886);

(statearr_28977[(15)] = inst_28887);

return statearr_28977;
})();
var statearr_28978_29019 = state_28943__$1;
(statearr_28978_29019[(2)] = null);

(statearr_28978_29019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (10))){
var inst_28885 = (state_28943[(12)]);
var inst_28884 = (state_28943[(13)]);
var inst_28886 = (state_28943[(14)]);
var inst_28887 = (state_28943[(15)]);
var inst_28892 = cljs.core._nth.call(null,inst_28885,inst_28887);
var inst_28893 = cljs.core.async.muxch_STAR_.call(null,inst_28892);
var inst_28894 = cljs.core.async.close_BANG_.call(null,inst_28893);
var inst_28895 = (inst_28887 + (1));
var tmp28973 = inst_28885;
var tmp28974 = inst_28884;
var tmp28975 = inst_28886;
var inst_28884__$1 = tmp28974;
var inst_28885__$1 = tmp28973;
var inst_28886__$1 = tmp28975;
var inst_28887__$1 = inst_28895;
var state_28943__$1 = (function (){var statearr_28979 = state_28943;
(statearr_28979[(12)] = inst_28885__$1);

(statearr_28979[(13)] = inst_28884__$1);

(statearr_28979[(14)] = inst_28886__$1);

(statearr_28979[(17)] = inst_28894);

(statearr_28979[(15)] = inst_28887__$1);

return statearr_28979;
})();
var statearr_28980_29020 = state_28943__$1;
(statearr_28980_29020[(2)] = null);

(statearr_28980_29020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (18))){
var inst_28913 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28981_29021 = state_28943__$1;
(statearr_28981_29021[(2)] = inst_28913);

(statearr_28981_29021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (8))){
var inst_28886 = (state_28943[(14)]);
var inst_28887 = (state_28943[(15)]);
var inst_28889 = (inst_28887 < inst_28886);
var inst_28890 = inst_28889;
var state_28943__$1 = state_28943;
if(cljs.core.truth_(inst_28890)){
var statearr_28982_29022 = state_28943__$1;
(statearr_28982_29022[(1)] = (10));

} else {
var statearr_28983_29023 = state_28943__$1;
(statearr_28983_29023[(1)] = (11));

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
});})(c__27046__auto___28995,mults,ensure_mult,p))
;
return ((function (switch__26934__auto__,c__27046__auto___28995,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26935__auto__ = null;
var cljs$core$async$state_machine__26935__auto____0 = (function (){
var statearr_28987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28987[(0)] = cljs$core$async$state_machine__26935__auto__);

(statearr_28987[(1)] = (1));

return statearr_28987;
});
var cljs$core$async$state_machine__26935__auto____1 = (function (state_28943){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_28943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e28988){if((e28988 instanceof Object)){
var ex__26938__auto__ = e28988;
var statearr_28989_29024 = state_28943;
(statearr_28989_29024[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29025 = state_28943;
state_28943 = G__29025;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$state_machine__26935__auto__ = function(state_28943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26935__auto____1.call(this,state_28943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26935__auto____0;
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26935__auto____1;
return cljs$core$async$state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto___28995,mults,ensure_mult,p))
})();
var state__27048__auto__ = (function (){var statearr_28990 = f__27047__auto__.call(null);
(statearr_28990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___28995);

return statearr_28990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto___28995,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29026 = [];
var len__25947__auto___29029 = arguments.length;
var i__25948__auto___29030 = (0);
while(true){
if((i__25948__auto___29030 < len__25947__auto___29029)){
args29026.push((arguments[i__25948__auto___29030]));

var G__29031 = (i__25948__auto___29030 + (1));
i__25948__auto___29030 = G__29031;
continue;
} else {
}
break;
}

var G__29028 = args29026.length;
switch (G__29028) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29026.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29033 = [];
var len__25947__auto___29036 = arguments.length;
var i__25948__auto___29037 = (0);
while(true){
if((i__25948__auto___29037 < len__25947__auto___29036)){
args29033.push((arguments[i__25948__auto___29037]));

var G__29038 = (i__25948__auto___29037 + (1));
i__25948__auto___29037 = G__29038;
continue;
} else {
}
break;
}

var G__29035 = args29033.length;
switch (G__29035) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29033.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29040 = [];
var len__25947__auto___29111 = arguments.length;
var i__25948__auto___29112 = (0);
while(true){
if((i__25948__auto___29112 < len__25947__auto___29111)){
args29040.push((arguments[i__25948__auto___29112]));

var G__29113 = (i__25948__auto___29112 + (1));
i__25948__auto___29112 = G__29113;
continue;
} else {
}
break;
}

var G__29042 = args29040.length;
switch (G__29042) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29040.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27046__auto___29115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto___29115,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto___29115,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29081){
var state_val_29082 = (state_29081[(1)]);
if((state_val_29082 === (7))){
var state_29081__$1 = state_29081;
var statearr_29083_29116 = state_29081__$1;
(statearr_29083_29116[(2)] = null);

(statearr_29083_29116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (1))){
var state_29081__$1 = state_29081;
var statearr_29084_29117 = state_29081__$1;
(statearr_29084_29117[(2)] = null);

(statearr_29084_29117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (4))){
var inst_29045 = (state_29081[(7)]);
var inst_29047 = (inst_29045 < cnt);
var state_29081__$1 = state_29081;
if(cljs.core.truth_(inst_29047)){
var statearr_29085_29118 = state_29081__$1;
(statearr_29085_29118[(1)] = (6));

} else {
var statearr_29086_29119 = state_29081__$1;
(statearr_29086_29119[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (15))){
var inst_29077 = (state_29081[(2)]);
var state_29081__$1 = state_29081;
var statearr_29087_29120 = state_29081__$1;
(statearr_29087_29120[(2)] = inst_29077);

(statearr_29087_29120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (13))){
var inst_29070 = cljs.core.async.close_BANG_.call(null,out);
var state_29081__$1 = state_29081;
var statearr_29088_29121 = state_29081__$1;
(statearr_29088_29121[(2)] = inst_29070);

(statearr_29088_29121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (6))){
var state_29081__$1 = state_29081;
var statearr_29089_29122 = state_29081__$1;
(statearr_29089_29122[(2)] = null);

(statearr_29089_29122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (3))){
var inst_29079 = (state_29081[(2)]);
var state_29081__$1 = state_29081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29081__$1,inst_29079);
} else {
if((state_val_29082 === (12))){
var inst_29067 = (state_29081[(8)]);
var inst_29067__$1 = (state_29081[(2)]);
var inst_29068 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29067__$1);
var state_29081__$1 = (function (){var statearr_29090 = state_29081;
(statearr_29090[(8)] = inst_29067__$1);

return statearr_29090;
})();
if(cljs.core.truth_(inst_29068)){
var statearr_29091_29123 = state_29081__$1;
(statearr_29091_29123[(1)] = (13));

} else {
var statearr_29092_29124 = state_29081__$1;
(statearr_29092_29124[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (2))){
var inst_29044 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29045 = (0);
var state_29081__$1 = (function (){var statearr_29093 = state_29081;
(statearr_29093[(7)] = inst_29045);

(statearr_29093[(9)] = inst_29044);

return statearr_29093;
})();
var statearr_29094_29125 = state_29081__$1;
(statearr_29094_29125[(2)] = null);

(statearr_29094_29125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (11))){
var inst_29045 = (state_29081[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29081,(10),Object,null,(9));
var inst_29054 = chs__$1.call(null,inst_29045);
var inst_29055 = done.call(null,inst_29045);
var inst_29056 = cljs.core.async.take_BANG_.call(null,inst_29054,inst_29055);
var state_29081__$1 = state_29081;
var statearr_29095_29126 = state_29081__$1;
(statearr_29095_29126[(2)] = inst_29056);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29081__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (9))){
var inst_29045 = (state_29081[(7)]);
var inst_29058 = (state_29081[(2)]);
var inst_29059 = (inst_29045 + (1));
var inst_29045__$1 = inst_29059;
var state_29081__$1 = (function (){var statearr_29096 = state_29081;
(statearr_29096[(7)] = inst_29045__$1);

(statearr_29096[(10)] = inst_29058);

return statearr_29096;
})();
var statearr_29097_29127 = state_29081__$1;
(statearr_29097_29127[(2)] = null);

(statearr_29097_29127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (5))){
var inst_29065 = (state_29081[(2)]);
var state_29081__$1 = (function (){var statearr_29098 = state_29081;
(statearr_29098[(11)] = inst_29065);

return statearr_29098;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29081__$1,(12),dchan);
} else {
if((state_val_29082 === (14))){
var inst_29067 = (state_29081[(8)]);
var inst_29072 = cljs.core.apply.call(null,f,inst_29067);
var state_29081__$1 = state_29081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29081__$1,(16),out,inst_29072);
} else {
if((state_val_29082 === (16))){
var inst_29074 = (state_29081[(2)]);
var state_29081__$1 = (function (){var statearr_29099 = state_29081;
(statearr_29099[(12)] = inst_29074);

return statearr_29099;
})();
var statearr_29100_29128 = state_29081__$1;
(statearr_29100_29128[(2)] = null);

(statearr_29100_29128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (10))){
var inst_29049 = (state_29081[(2)]);
var inst_29050 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29081__$1 = (function (){var statearr_29101 = state_29081;
(statearr_29101[(13)] = inst_29049);

return statearr_29101;
})();
var statearr_29102_29129 = state_29081__$1;
(statearr_29102_29129[(2)] = inst_29050);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29081__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (8))){
var inst_29063 = (state_29081[(2)]);
var state_29081__$1 = state_29081;
var statearr_29103_29130 = state_29081__$1;
(statearr_29103_29130[(2)] = inst_29063);

(statearr_29103_29130[(1)] = (5));


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
});})(c__27046__auto___29115,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26934__auto__,c__27046__auto___29115,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26935__auto__ = null;
var cljs$core$async$state_machine__26935__auto____0 = (function (){
var statearr_29107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29107[(0)] = cljs$core$async$state_machine__26935__auto__);

(statearr_29107[(1)] = (1));

return statearr_29107;
});
var cljs$core$async$state_machine__26935__auto____1 = (function (state_29081){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_29081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e29108){if((e29108 instanceof Object)){
var ex__26938__auto__ = e29108;
var statearr_29109_29131 = state_29081;
(statearr_29109_29131[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29132 = state_29081;
state_29081 = G__29132;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$state_machine__26935__auto__ = function(state_29081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26935__auto____1.call(this,state_29081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26935__auto____0;
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26935__auto____1;
return cljs$core$async$state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto___29115,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27048__auto__ = (function (){var statearr_29110 = f__27047__auto__.call(null);
(statearr_29110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___29115);

return statearr_29110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto___29115,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29134 = [];
var len__25947__auto___29192 = arguments.length;
var i__25948__auto___29193 = (0);
while(true){
if((i__25948__auto___29193 < len__25947__auto___29192)){
args29134.push((arguments[i__25948__auto___29193]));

var G__29194 = (i__25948__auto___29193 + (1));
i__25948__auto___29193 = G__29194;
continue;
} else {
}
break;
}

var G__29136 = args29134.length;
switch (G__29136) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29134.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27046__auto___29196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto___29196,out){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto___29196,out){
return (function (state_29168){
var state_val_29169 = (state_29168[(1)]);
if((state_val_29169 === (7))){
var inst_29147 = (state_29168[(7)]);
var inst_29148 = (state_29168[(8)]);
var inst_29147__$1 = (state_29168[(2)]);
var inst_29148__$1 = cljs.core.nth.call(null,inst_29147__$1,(0),null);
var inst_29149 = cljs.core.nth.call(null,inst_29147__$1,(1),null);
var inst_29150 = (inst_29148__$1 == null);
var state_29168__$1 = (function (){var statearr_29170 = state_29168;
(statearr_29170[(7)] = inst_29147__$1);

(statearr_29170[(8)] = inst_29148__$1);

(statearr_29170[(9)] = inst_29149);

return statearr_29170;
})();
if(cljs.core.truth_(inst_29150)){
var statearr_29171_29197 = state_29168__$1;
(statearr_29171_29197[(1)] = (8));

} else {
var statearr_29172_29198 = state_29168__$1;
(statearr_29172_29198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (1))){
var inst_29137 = cljs.core.vec.call(null,chs);
var inst_29138 = inst_29137;
var state_29168__$1 = (function (){var statearr_29173 = state_29168;
(statearr_29173[(10)] = inst_29138);

return statearr_29173;
})();
var statearr_29174_29199 = state_29168__$1;
(statearr_29174_29199[(2)] = null);

(statearr_29174_29199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (4))){
var inst_29138 = (state_29168[(10)]);
var state_29168__$1 = state_29168;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29168__$1,(7),inst_29138);
} else {
if((state_val_29169 === (6))){
var inst_29164 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
var statearr_29175_29200 = state_29168__$1;
(statearr_29175_29200[(2)] = inst_29164);

(statearr_29175_29200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (3))){
var inst_29166 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29168__$1,inst_29166);
} else {
if((state_val_29169 === (2))){
var inst_29138 = (state_29168[(10)]);
var inst_29140 = cljs.core.count.call(null,inst_29138);
var inst_29141 = (inst_29140 > (0));
var state_29168__$1 = state_29168;
if(cljs.core.truth_(inst_29141)){
var statearr_29177_29201 = state_29168__$1;
(statearr_29177_29201[(1)] = (4));

} else {
var statearr_29178_29202 = state_29168__$1;
(statearr_29178_29202[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (11))){
var inst_29138 = (state_29168[(10)]);
var inst_29157 = (state_29168[(2)]);
var tmp29176 = inst_29138;
var inst_29138__$1 = tmp29176;
var state_29168__$1 = (function (){var statearr_29179 = state_29168;
(statearr_29179[(10)] = inst_29138__$1);

(statearr_29179[(11)] = inst_29157);

return statearr_29179;
})();
var statearr_29180_29203 = state_29168__$1;
(statearr_29180_29203[(2)] = null);

(statearr_29180_29203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (9))){
var inst_29148 = (state_29168[(8)]);
var state_29168__$1 = state_29168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29168__$1,(11),out,inst_29148);
} else {
if((state_val_29169 === (5))){
var inst_29162 = cljs.core.async.close_BANG_.call(null,out);
var state_29168__$1 = state_29168;
var statearr_29181_29204 = state_29168__$1;
(statearr_29181_29204[(2)] = inst_29162);

(statearr_29181_29204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (10))){
var inst_29160 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
var statearr_29182_29205 = state_29168__$1;
(statearr_29182_29205[(2)] = inst_29160);

(statearr_29182_29205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (8))){
var inst_29147 = (state_29168[(7)]);
var inst_29138 = (state_29168[(10)]);
var inst_29148 = (state_29168[(8)]);
var inst_29149 = (state_29168[(9)]);
var inst_29152 = (function (){var cs = inst_29138;
var vec__29143 = inst_29147;
var v = inst_29148;
var c = inst_29149;
return ((function (cs,vec__29143,v,c,inst_29147,inst_29138,inst_29148,inst_29149,state_val_29169,c__27046__auto___29196,out){
return (function (p1__29133_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29133_SHARP_);
});
;})(cs,vec__29143,v,c,inst_29147,inst_29138,inst_29148,inst_29149,state_val_29169,c__27046__auto___29196,out))
})();
var inst_29153 = cljs.core.filterv.call(null,inst_29152,inst_29138);
var inst_29138__$1 = inst_29153;
var state_29168__$1 = (function (){var statearr_29183 = state_29168;
(statearr_29183[(10)] = inst_29138__$1);

return statearr_29183;
})();
var statearr_29184_29206 = state_29168__$1;
(statearr_29184_29206[(2)] = null);

(statearr_29184_29206[(1)] = (2));


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
});})(c__27046__auto___29196,out))
;
return ((function (switch__26934__auto__,c__27046__auto___29196,out){
return (function() {
var cljs$core$async$state_machine__26935__auto__ = null;
var cljs$core$async$state_machine__26935__auto____0 = (function (){
var statearr_29188 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29188[(0)] = cljs$core$async$state_machine__26935__auto__);

(statearr_29188[(1)] = (1));

return statearr_29188;
});
var cljs$core$async$state_machine__26935__auto____1 = (function (state_29168){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_29168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e29189){if((e29189 instanceof Object)){
var ex__26938__auto__ = e29189;
var statearr_29190_29207 = state_29168;
(statearr_29190_29207[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29208 = state_29168;
state_29168 = G__29208;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$state_machine__26935__auto__ = function(state_29168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26935__auto____1.call(this,state_29168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26935__auto____0;
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26935__auto____1;
return cljs$core$async$state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto___29196,out))
})();
var state__27048__auto__ = (function (){var statearr_29191 = f__27047__auto__.call(null);
(statearr_29191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___29196);

return statearr_29191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto___29196,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29209 = [];
var len__25947__auto___29258 = arguments.length;
var i__25948__auto___29259 = (0);
while(true){
if((i__25948__auto___29259 < len__25947__auto___29258)){
args29209.push((arguments[i__25948__auto___29259]));

var G__29260 = (i__25948__auto___29259 + (1));
i__25948__auto___29259 = G__29260;
continue;
} else {
}
break;
}

var G__29211 = args29209.length;
switch (G__29211) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29209.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27046__auto___29262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto___29262,out){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto___29262,out){
return (function (state_29235){
var state_val_29236 = (state_29235[(1)]);
if((state_val_29236 === (7))){
var inst_29217 = (state_29235[(7)]);
var inst_29217__$1 = (state_29235[(2)]);
var inst_29218 = (inst_29217__$1 == null);
var inst_29219 = cljs.core.not.call(null,inst_29218);
var state_29235__$1 = (function (){var statearr_29237 = state_29235;
(statearr_29237[(7)] = inst_29217__$1);

return statearr_29237;
})();
if(inst_29219){
var statearr_29238_29263 = state_29235__$1;
(statearr_29238_29263[(1)] = (8));

} else {
var statearr_29239_29264 = state_29235__$1;
(statearr_29239_29264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (1))){
var inst_29212 = (0);
var state_29235__$1 = (function (){var statearr_29240 = state_29235;
(statearr_29240[(8)] = inst_29212);

return statearr_29240;
})();
var statearr_29241_29265 = state_29235__$1;
(statearr_29241_29265[(2)] = null);

(statearr_29241_29265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (4))){
var state_29235__$1 = state_29235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29235__$1,(7),ch);
} else {
if((state_val_29236 === (6))){
var inst_29230 = (state_29235[(2)]);
var state_29235__$1 = state_29235;
var statearr_29242_29266 = state_29235__$1;
(statearr_29242_29266[(2)] = inst_29230);

(statearr_29242_29266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (3))){
var inst_29232 = (state_29235[(2)]);
var inst_29233 = cljs.core.async.close_BANG_.call(null,out);
var state_29235__$1 = (function (){var statearr_29243 = state_29235;
(statearr_29243[(9)] = inst_29232);

return statearr_29243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29235__$1,inst_29233);
} else {
if((state_val_29236 === (2))){
var inst_29212 = (state_29235[(8)]);
var inst_29214 = (inst_29212 < n);
var state_29235__$1 = state_29235;
if(cljs.core.truth_(inst_29214)){
var statearr_29244_29267 = state_29235__$1;
(statearr_29244_29267[(1)] = (4));

} else {
var statearr_29245_29268 = state_29235__$1;
(statearr_29245_29268[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (11))){
var inst_29212 = (state_29235[(8)]);
var inst_29222 = (state_29235[(2)]);
var inst_29223 = (inst_29212 + (1));
var inst_29212__$1 = inst_29223;
var state_29235__$1 = (function (){var statearr_29246 = state_29235;
(statearr_29246[(10)] = inst_29222);

(statearr_29246[(8)] = inst_29212__$1);

return statearr_29246;
})();
var statearr_29247_29269 = state_29235__$1;
(statearr_29247_29269[(2)] = null);

(statearr_29247_29269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (9))){
var state_29235__$1 = state_29235;
var statearr_29248_29270 = state_29235__$1;
(statearr_29248_29270[(2)] = null);

(statearr_29248_29270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (5))){
var state_29235__$1 = state_29235;
var statearr_29249_29271 = state_29235__$1;
(statearr_29249_29271[(2)] = null);

(statearr_29249_29271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (10))){
var inst_29227 = (state_29235[(2)]);
var state_29235__$1 = state_29235;
var statearr_29250_29272 = state_29235__$1;
(statearr_29250_29272[(2)] = inst_29227);

(statearr_29250_29272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29236 === (8))){
var inst_29217 = (state_29235[(7)]);
var state_29235__$1 = state_29235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29235__$1,(11),out,inst_29217);
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
});})(c__27046__auto___29262,out))
;
return ((function (switch__26934__auto__,c__27046__auto___29262,out){
return (function() {
var cljs$core$async$state_machine__26935__auto__ = null;
var cljs$core$async$state_machine__26935__auto____0 = (function (){
var statearr_29254 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29254[(0)] = cljs$core$async$state_machine__26935__auto__);

(statearr_29254[(1)] = (1));

return statearr_29254;
});
var cljs$core$async$state_machine__26935__auto____1 = (function (state_29235){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_29235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e29255){if((e29255 instanceof Object)){
var ex__26938__auto__ = e29255;
var statearr_29256_29273 = state_29235;
(statearr_29256_29273[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29274 = state_29235;
state_29235 = G__29274;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$state_machine__26935__auto__ = function(state_29235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26935__auto____1.call(this,state_29235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26935__auto____0;
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26935__auto____1;
return cljs$core$async$state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto___29262,out))
})();
var state__27048__auto__ = (function (){var statearr_29257 = f__27047__auto__.call(null);
(statearr_29257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___29262);

return statearr_29257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto___29262,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29282 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29282 = (function (map_LT_,f,ch,meta29283){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29283 = meta29283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29284,meta29283__$1){
var self__ = this;
var _29284__$1 = this;
return (new cljs.core.async.t_cljs$core$async29282(self__.map_LT_,self__.f,self__.ch,meta29283__$1));
});

cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29284){
var self__ = this;
var _29284__$1 = this;
return self__.meta29283;
});

cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29285 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29285 = (function (map_LT_,f,ch,meta29283,_,fn1,meta29286){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29283 = meta29283;
this._ = _;
this.fn1 = fn1;
this.meta29286 = meta29286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29287,meta29286__$1){
var self__ = this;
var _29287__$1 = this;
return (new cljs.core.async.t_cljs$core$async29285(self__.map_LT_,self__.f,self__.ch,self__.meta29283,self__._,self__.fn1,meta29286__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29287){
var self__ = this;
var _29287__$1 = this;
return self__.meta29286;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29275_SHARP_){
return f1.call(null,(((p1__29275_SHARP_ == null))?null:self__.f.call(null,p1__29275_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29285.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29283","meta29283",-1246370948,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29282","cljs.core.async/t_cljs$core$async29282",1876749134,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29286","meta29286",178505753,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29285.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29285";

cljs.core.async.t_cljs$core$async29285.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async29285");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29285 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29285(map_LT___$1,f__$1,ch__$1,meta29283__$1,___$2,fn1__$1,meta29286){
return (new cljs.core.async.t_cljs$core$async29285(map_LT___$1,f__$1,ch__$1,meta29283__$1,___$2,fn1__$1,meta29286));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29285(self__.map_LT_,self__.f,self__.ch,self__.meta29283,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24860__auto__ = ret;
if(cljs.core.truth_(and__24860__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24860__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29282.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29283","meta29283",-1246370948,null)], null);
});

cljs.core.async.t_cljs$core$async29282.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29282";

cljs.core.async.t_cljs$core$async29282.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async29282");
});

cljs.core.async.__GT_t_cljs$core$async29282 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29282(map_LT___$1,f__$1,ch__$1,meta29283){
return (new cljs.core.async.t_cljs$core$async29282(map_LT___$1,f__$1,ch__$1,meta29283));
});

}

return (new cljs.core.async.t_cljs$core$async29282(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29291 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29291 = (function (map_GT_,f,ch,meta29292){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29292 = meta29292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29293,meta29292__$1){
var self__ = this;
var _29293__$1 = this;
return (new cljs.core.async.t_cljs$core$async29291(self__.map_GT_,self__.f,self__.ch,meta29292__$1));
});

cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29293){
var self__ = this;
var _29293__$1 = this;
return self__.meta29292;
});

cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29292","meta29292",1154505499,null)], null);
});

cljs.core.async.t_cljs$core$async29291.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29291";

cljs.core.async.t_cljs$core$async29291.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async29291");
});

cljs.core.async.__GT_t_cljs$core$async29291 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29291(map_GT___$1,f__$1,ch__$1,meta29292){
return (new cljs.core.async.t_cljs$core$async29291(map_GT___$1,f__$1,ch__$1,meta29292));
});

}

return (new cljs.core.async.t_cljs$core$async29291(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29297 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29297 = (function (filter_GT_,p,ch,meta29298){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29298 = meta29298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29299,meta29298__$1){
var self__ = this;
var _29299__$1 = this;
return (new cljs.core.async.t_cljs$core$async29297(self__.filter_GT_,self__.p,self__.ch,meta29298__$1));
});

cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29299){
var self__ = this;
var _29299__$1 = this;
return self__.meta29298;
});

cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29298","meta29298",1354074699,null)], null);
});

cljs.core.async.t_cljs$core$async29297.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29297";

cljs.core.async.t_cljs$core$async29297.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async29297");
});

cljs.core.async.__GT_t_cljs$core$async29297 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29297(filter_GT___$1,p__$1,ch__$1,meta29298){
return (new cljs.core.async.t_cljs$core$async29297(filter_GT___$1,p__$1,ch__$1,meta29298));
});

}

return (new cljs.core.async.t_cljs$core$async29297(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29300 = [];
var len__25947__auto___29344 = arguments.length;
var i__25948__auto___29345 = (0);
while(true){
if((i__25948__auto___29345 < len__25947__auto___29344)){
args29300.push((arguments[i__25948__auto___29345]));

var G__29346 = (i__25948__auto___29345 + (1));
i__25948__auto___29345 = G__29346;
continue;
} else {
}
break;
}

var G__29302 = args29300.length;
switch (G__29302) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29300.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27046__auto___29348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto___29348,out){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto___29348,out){
return (function (state_29323){
var state_val_29324 = (state_29323[(1)]);
if((state_val_29324 === (7))){
var inst_29319 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
var statearr_29325_29349 = state_29323__$1;
(statearr_29325_29349[(2)] = inst_29319);

(statearr_29325_29349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (1))){
var state_29323__$1 = state_29323;
var statearr_29326_29350 = state_29323__$1;
(statearr_29326_29350[(2)] = null);

(statearr_29326_29350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (4))){
var inst_29305 = (state_29323[(7)]);
var inst_29305__$1 = (state_29323[(2)]);
var inst_29306 = (inst_29305__$1 == null);
var state_29323__$1 = (function (){var statearr_29327 = state_29323;
(statearr_29327[(7)] = inst_29305__$1);

return statearr_29327;
})();
if(cljs.core.truth_(inst_29306)){
var statearr_29328_29351 = state_29323__$1;
(statearr_29328_29351[(1)] = (5));

} else {
var statearr_29329_29352 = state_29323__$1;
(statearr_29329_29352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (6))){
var inst_29305 = (state_29323[(7)]);
var inst_29310 = p.call(null,inst_29305);
var state_29323__$1 = state_29323;
if(cljs.core.truth_(inst_29310)){
var statearr_29330_29353 = state_29323__$1;
(statearr_29330_29353[(1)] = (8));

} else {
var statearr_29331_29354 = state_29323__$1;
(statearr_29331_29354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (3))){
var inst_29321 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29323__$1,inst_29321);
} else {
if((state_val_29324 === (2))){
var state_29323__$1 = state_29323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29323__$1,(4),ch);
} else {
if((state_val_29324 === (11))){
var inst_29313 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
var statearr_29332_29355 = state_29323__$1;
(statearr_29332_29355[(2)] = inst_29313);

(statearr_29332_29355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (9))){
var state_29323__$1 = state_29323;
var statearr_29333_29356 = state_29323__$1;
(statearr_29333_29356[(2)] = null);

(statearr_29333_29356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (5))){
var inst_29308 = cljs.core.async.close_BANG_.call(null,out);
var state_29323__$1 = state_29323;
var statearr_29334_29357 = state_29323__$1;
(statearr_29334_29357[(2)] = inst_29308);

(statearr_29334_29357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (10))){
var inst_29316 = (state_29323[(2)]);
var state_29323__$1 = (function (){var statearr_29335 = state_29323;
(statearr_29335[(8)] = inst_29316);

return statearr_29335;
})();
var statearr_29336_29358 = state_29323__$1;
(statearr_29336_29358[(2)] = null);

(statearr_29336_29358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (8))){
var inst_29305 = (state_29323[(7)]);
var state_29323__$1 = state_29323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29323__$1,(11),out,inst_29305);
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
});})(c__27046__auto___29348,out))
;
return ((function (switch__26934__auto__,c__27046__auto___29348,out){
return (function() {
var cljs$core$async$state_machine__26935__auto__ = null;
var cljs$core$async$state_machine__26935__auto____0 = (function (){
var statearr_29340 = [null,null,null,null,null,null,null,null,null];
(statearr_29340[(0)] = cljs$core$async$state_machine__26935__auto__);

(statearr_29340[(1)] = (1));

return statearr_29340;
});
var cljs$core$async$state_machine__26935__auto____1 = (function (state_29323){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_29323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e29341){if((e29341 instanceof Object)){
var ex__26938__auto__ = e29341;
var statearr_29342_29359 = state_29323;
(statearr_29342_29359[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29360 = state_29323;
state_29323 = G__29360;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$state_machine__26935__auto__ = function(state_29323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26935__auto____1.call(this,state_29323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26935__auto____0;
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26935__auto____1;
return cljs$core$async$state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto___29348,out))
})();
var state__27048__auto__ = (function (){var statearr_29343 = f__27047__auto__.call(null);
(statearr_29343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___29348);

return statearr_29343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto___29348,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29361 = [];
var len__25947__auto___29364 = arguments.length;
var i__25948__auto___29365 = (0);
while(true){
if((i__25948__auto___29365 < len__25947__auto___29364)){
args29361.push((arguments[i__25948__auto___29365]));

var G__29366 = (i__25948__auto___29365 + (1));
i__25948__auto___29365 = G__29366;
continue;
} else {
}
break;
}

var G__29363 = args29361.length;
switch (G__29363) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29361.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto__){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto__){
return (function (state_29533){
var state_val_29534 = (state_29533[(1)]);
if((state_val_29534 === (7))){
var inst_29529 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
var statearr_29535_29576 = state_29533__$1;
(statearr_29535_29576[(2)] = inst_29529);

(statearr_29535_29576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (20))){
var inst_29499 = (state_29533[(7)]);
var inst_29510 = (state_29533[(2)]);
var inst_29511 = cljs.core.next.call(null,inst_29499);
var inst_29485 = inst_29511;
var inst_29486 = null;
var inst_29487 = (0);
var inst_29488 = (0);
var state_29533__$1 = (function (){var statearr_29536 = state_29533;
(statearr_29536[(8)] = inst_29486);

(statearr_29536[(9)] = inst_29487);

(statearr_29536[(10)] = inst_29488);

(statearr_29536[(11)] = inst_29485);

(statearr_29536[(12)] = inst_29510);

return statearr_29536;
})();
var statearr_29537_29577 = state_29533__$1;
(statearr_29537_29577[(2)] = null);

(statearr_29537_29577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (1))){
var state_29533__$1 = state_29533;
var statearr_29538_29578 = state_29533__$1;
(statearr_29538_29578[(2)] = null);

(statearr_29538_29578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (4))){
var inst_29474 = (state_29533[(13)]);
var inst_29474__$1 = (state_29533[(2)]);
var inst_29475 = (inst_29474__$1 == null);
var state_29533__$1 = (function (){var statearr_29539 = state_29533;
(statearr_29539[(13)] = inst_29474__$1);

return statearr_29539;
})();
if(cljs.core.truth_(inst_29475)){
var statearr_29540_29579 = state_29533__$1;
(statearr_29540_29579[(1)] = (5));

} else {
var statearr_29541_29580 = state_29533__$1;
(statearr_29541_29580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (15))){
var state_29533__$1 = state_29533;
var statearr_29545_29581 = state_29533__$1;
(statearr_29545_29581[(2)] = null);

(statearr_29545_29581[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (21))){
var state_29533__$1 = state_29533;
var statearr_29546_29582 = state_29533__$1;
(statearr_29546_29582[(2)] = null);

(statearr_29546_29582[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (13))){
var inst_29486 = (state_29533[(8)]);
var inst_29487 = (state_29533[(9)]);
var inst_29488 = (state_29533[(10)]);
var inst_29485 = (state_29533[(11)]);
var inst_29495 = (state_29533[(2)]);
var inst_29496 = (inst_29488 + (1));
var tmp29542 = inst_29486;
var tmp29543 = inst_29487;
var tmp29544 = inst_29485;
var inst_29485__$1 = tmp29544;
var inst_29486__$1 = tmp29542;
var inst_29487__$1 = tmp29543;
var inst_29488__$1 = inst_29496;
var state_29533__$1 = (function (){var statearr_29547 = state_29533;
(statearr_29547[(8)] = inst_29486__$1);

(statearr_29547[(9)] = inst_29487__$1);

(statearr_29547[(10)] = inst_29488__$1);

(statearr_29547[(11)] = inst_29485__$1);

(statearr_29547[(14)] = inst_29495);

return statearr_29547;
})();
var statearr_29548_29583 = state_29533__$1;
(statearr_29548_29583[(2)] = null);

(statearr_29548_29583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (22))){
var state_29533__$1 = state_29533;
var statearr_29549_29584 = state_29533__$1;
(statearr_29549_29584[(2)] = null);

(statearr_29549_29584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (6))){
var inst_29474 = (state_29533[(13)]);
var inst_29483 = f.call(null,inst_29474);
var inst_29484 = cljs.core.seq.call(null,inst_29483);
var inst_29485 = inst_29484;
var inst_29486 = null;
var inst_29487 = (0);
var inst_29488 = (0);
var state_29533__$1 = (function (){var statearr_29550 = state_29533;
(statearr_29550[(8)] = inst_29486);

(statearr_29550[(9)] = inst_29487);

(statearr_29550[(10)] = inst_29488);

(statearr_29550[(11)] = inst_29485);

return statearr_29550;
})();
var statearr_29551_29585 = state_29533__$1;
(statearr_29551_29585[(2)] = null);

(statearr_29551_29585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (17))){
var inst_29499 = (state_29533[(7)]);
var inst_29503 = cljs.core.chunk_first.call(null,inst_29499);
var inst_29504 = cljs.core.chunk_rest.call(null,inst_29499);
var inst_29505 = cljs.core.count.call(null,inst_29503);
var inst_29485 = inst_29504;
var inst_29486 = inst_29503;
var inst_29487 = inst_29505;
var inst_29488 = (0);
var state_29533__$1 = (function (){var statearr_29552 = state_29533;
(statearr_29552[(8)] = inst_29486);

(statearr_29552[(9)] = inst_29487);

(statearr_29552[(10)] = inst_29488);

(statearr_29552[(11)] = inst_29485);

return statearr_29552;
})();
var statearr_29553_29586 = state_29533__$1;
(statearr_29553_29586[(2)] = null);

(statearr_29553_29586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (3))){
var inst_29531 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29533__$1,inst_29531);
} else {
if((state_val_29534 === (12))){
var inst_29519 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
var statearr_29554_29587 = state_29533__$1;
(statearr_29554_29587[(2)] = inst_29519);

(statearr_29554_29587[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (2))){
var state_29533__$1 = state_29533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29533__$1,(4),in$);
} else {
if((state_val_29534 === (23))){
var inst_29527 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
var statearr_29555_29588 = state_29533__$1;
(statearr_29555_29588[(2)] = inst_29527);

(statearr_29555_29588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (19))){
var inst_29514 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
var statearr_29556_29589 = state_29533__$1;
(statearr_29556_29589[(2)] = inst_29514);

(statearr_29556_29589[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (11))){
var inst_29485 = (state_29533[(11)]);
var inst_29499 = (state_29533[(7)]);
var inst_29499__$1 = cljs.core.seq.call(null,inst_29485);
var state_29533__$1 = (function (){var statearr_29557 = state_29533;
(statearr_29557[(7)] = inst_29499__$1);

return statearr_29557;
})();
if(inst_29499__$1){
var statearr_29558_29590 = state_29533__$1;
(statearr_29558_29590[(1)] = (14));

} else {
var statearr_29559_29591 = state_29533__$1;
(statearr_29559_29591[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (9))){
var inst_29521 = (state_29533[(2)]);
var inst_29522 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29533__$1 = (function (){var statearr_29560 = state_29533;
(statearr_29560[(15)] = inst_29521);

return statearr_29560;
})();
if(cljs.core.truth_(inst_29522)){
var statearr_29561_29592 = state_29533__$1;
(statearr_29561_29592[(1)] = (21));

} else {
var statearr_29562_29593 = state_29533__$1;
(statearr_29562_29593[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (5))){
var inst_29477 = cljs.core.async.close_BANG_.call(null,out);
var state_29533__$1 = state_29533;
var statearr_29563_29594 = state_29533__$1;
(statearr_29563_29594[(2)] = inst_29477);

(statearr_29563_29594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (14))){
var inst_29499 = (state_29533[(7)]);
var inst_29501 = cljs.core.chunked_seq_QMARK_.call(null,inst_29499);
var state_29533__$1 = state_29533;
if(inst_29501){
var statearr_29564_29595 = state_29533__$1;
(statearr_29564_29595[(1)] = (17));

} else {
var statearr_29565_29596 = state_29533__$1;
(statearr_29565_29596[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (16))){
var inst_29517 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
var statearr_29566_29597 = state_29533__$1;
(statearr_29566_29597[(2)] = inst_29517);

(statearr_29566_29597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (10))){
var inst_29486 = (state_29533[(8)]);
var inst_29488 = (state_29533[(10)]);
var inst_29493 = cljs.core._nth.call(null,inst_29486,inst_29488);
var state_29533__$1 = state_29533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29533__$1,(13),out,inst_29493);
} else {
if((state_val_29534 === (18))){
var inst_29499 = (state_29533[(7)]);
var inst_29508 = cljs.core.first.call(null,inst_29499);
var state_29533__$1 = state_29533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29533__$1,(20),out,inst_29508);
} else {
if((state_val_29534 === (8))){
var inst_29487 = (state_29533[(9)]);
var inst_29488 = (state_29533[(10)]);
var inst_29490 = (inst_29488 < inst_29487);
var inst_29491 = inst_29490;
var state_29533__$1 = state_29533;
if(cljs.core.truth_(inst_29491)){
var statearr_29567_29598 = state_29533__$1;
(statearr_29567_29598[(1)] = (10));

} else {
var statearr_29568_29599 = state_29533__$1;
(statearr_29568_29599[(1)] = (11));

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
});})(c__27046__auto__))
;
return ((function (switch__26934__auto__,c__27046__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26935__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26935__auto____0 = (function (){
var statearr_29572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29572[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26935__auto__);

(statearr_29572[(1)] = (1));

return statearr_29572;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26935__auto____1 = (function (state_29533){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_29533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e29573){if((e29573 instanceof Object)){
var ex__26938__auto__ = e29573;
var statearr_29574_29600 = state_29533;
(statearr_29574_29600[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29601 = state_29533;
state_29533 = G__29601;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26935__auto__ = function(state_29533){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26935__auto____1.call(this,state_29533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26935__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26935__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto__))
})();
var state__27048__auto__ = (function (){var statearr_29575 = f__27047__auto__.call(null);
(statearr_29575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto__);

return statearr_29575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto__))
);

return c__27046__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29602 = [];
var len__25947__auto___29605 = arguments.length;
var i__25948__auto___29606 = (0);
while(true){
if((i__25948__auto___29606 < len__25947__auto___29605)){
args29602.push((arguments[i__25948__auto___29606]));

var G__29607 = (i__25948__auto___29606 + (1));
i__25948__auto___29606 = G__29607;
continue;
} else {
}
break;
}

var G__29604 = args29602.length;
switch (G__29604) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29602.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29609 = [];
var len__25947__auto___29612 = arguments.length;
var i__25948__auto___29613 = (0);
while(true){
if((i__25948__auto___29613 < len__25947__auto___29612)){
args29609.push((arguments[i__25948__auto___29613]));

var G__29614 = (i__25948__auto___29613 + (1));
i__25948__auto___29613 = G__29614;
continue;
} else {
}
break;
}

var G__29611 = args29609.length;
switch (G__29611) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29609.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29616 = [];
var len__25947__auto___29667 = arguments.length;
var i__25948__auto___29668 = (0);
while(true){
if((i__25948__auto___29668 < len__25947__auto___29667)){
args29616.push((arguments[i__25948__auto___29668]));

var G__29669 = (i__25948__auto___29668 + (1));
i__25948__auto___29668 = G__29669;
continue;
} else {
}
break;
}

var G__29618 = args29616.length;
switch (G__29618) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29616.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27046__auto___29671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto___29671,out){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto___29671,out){
return (function (state_29642){
var state_val_29643 = (state_29642[(1)]);
if((state_val_29643 === (7))){
var inst_29637 = (state_29642[(2)]);
var state_29642__$1 = state_29642;
var statearr_29644_29672 = state_29642__$1;
(statearr_29644_29672[(2)] = inst_29637);

(statearr_29644_29672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29643 === (1))){
var inst_29619 = null;
var state_29642__$1 = (function (){var statearr_29645 = state_29642;
(statearr_29645[(7)] = inst_29619);

return statearr_29645;
})();
var statearr_29646_29673 = state_29642__$1;
(statearr_29646_29673[(2)] = null);

(statearr_29646_29673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29643 === (4))){
var inst_29622 = (state_29642[(8)]);
var inst_29622__$1 = (state_29642[(2)]);
var inst_29623 = (inst_29622__$1 == null);
var inst_29624 = cljs.core.not.call(null,inst_29623);
var state_29642__$1 = (function (){var statearr_29647 = state_29642;
(statearr_29647[(8)] = inst_29622__$1);

return statearr_29647;
})();
if(inst_29624){
var statearr_29648_29674 = state_29642__$1;
(statearr_29648_29674[(1)] = (5));

} else {
var statearr_29649_29675 = state_29642__$1;
(statearr_29649_29675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29643 === (6))){
var state_29642__$1 = state_29642;
var statearr_29650_29676 = state_29642__$1;
(statearr_29650_29676[(2)] = null);

(statearr_29650_29676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29643 === (3))){
var inst_29639 = (state_29642[(2)]);
var inst_29640 = cljs.core.async.close_BANG_.call(null,out);
var state_29642__$1 = (function (){var statearr_29651 = state_29642;
(statearr_29651[(9)] = inst_29639);

return statearr_29651;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29642__$1,inst_29640);
} else {
if((state_val_29643 === (2))){
var state_29642__$1 = state_29642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29642__$1,(4),ch);
} else {
if((state_val_29643 === (11))){
var inst_29622 = (state_29642[(8)]);
var inst_29631 = (state_29642[(2)]);
var inst_29619 = inst_29622;
var state_29642__$1 = (function (){var statearr_29652 = state_29642;
(statearr_29652[(10)] = inst_29631);

(statearr_29652[(7)] = inst_29619);

return statearr_29652;
})();
var statearr_29653_29677 = state_29642__$1;
(statearr_29653_29677[(2)] = null);

(statearr_29653_29677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29643 === (9))){
var inst_29622 = (state_29642[(8)]);
var state_29642__$1 = state_29642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29642__$1,(11),out,inst_29622);
} else {
if((state_val_29643 === (5))){
var inst_29619 = (state_29642[(7)]);
var inst_29622 = (state_29642[(8)]);
var inst_29626 = cljs.core._EQ_.call(null,inst_29622,inst_29619);
var state_29642__$1 = state_29642;
if(inst_29626){
var statearr_29655_29678 = state_29642__$1;
(statearr_29655_29678[(1)] = (8));

} else {
var statearr_29656_29679 = state_29642__$1;
(statearr_29656_29679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29643 === (10))){
var inst_29634 = (state_29642[(2)]);
var state_29642__$1 = state_29642;
var statearr_29657_29680 = state_29642__$1;
(statearr_29657_29680[(2)] = inst_29634);

(statearr_29657_29680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29643 === (8))){
var inst_29619 = (state_29642[(7)]);
var tmp29654 = inst_29619;
var inst_29619__$1 = tmp29654;
var state_29642__$1 = (function (){var statearr_29658 = state_29642;
(statearr_29658[(7)] = inst_29619__$1);

return statearr_29658;
})();
var statearr_29659_29681 = state_29642__$1;
(statearr_29659_29681[(2)] = null);

(statearr_29659_29681[(1)] = (2));


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
});})(c__27046__auto___29671,out))
;
return ((function (switch__26934__auto__,c__27046__auto___29671,out){
return (function() {
var cljs$core$async$state_machine__26935__auto__ = null;
var cljs$core$async$state_machine__26935__auto____0 = (function (){
var statearr_29663 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29663[(0)] = cljs$core$async$state_machine__26935__auto__);

(statearr_29663[(1)] = (1));

return statearr_29663;
});
var cljs$core$async$state_machine__26935__auto____1 = (function (state_29642){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_29642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e29664){if((e29664 instanceof Object)){
var ex__26938__auto__ = e29664;
var statearr_29665_29682 = state_29642;
(statearr_29665_29682[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29683 = state_29642;
state_29642 = G__29683;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$state_machine__26935__auto__ = function(state_29642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26935__auto____1.call(this,state_29642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26935__auto____0;
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26935__auto____1;
return cljs$core$async$state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto___29671,out))
})();
var state__27048__auto__ = (function (){var statearr_29666 = f__27047__auto__.call(null);
(statearr_29666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___29671);

return statearr_29666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto___29671,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29684 = [];
var len__25947__auto___29754 = arguments.length;
var i__25948__auto___29755 = (0);
while(true){
if((i__25948__auto___29755 < len__25947__auto___29754)){
args29684.push((arguments[i__25948__auto___29755]));

var G__29756 = (i__25948__auto___29755 + (1));
i__25948__auto___29755 = G__29756;
continue;
} else {
}
break;
}

var G__29686 = args29684.length;
switch (G__29686) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29684.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27046__auto___29758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto___29758,out){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto___29758,out){
return (function (state_29724){
var state_val_29725 = (state_29724[(1)]);
if((state_val_29725 === (7))){
var inst_29720 = (state_29724[(2)]);
var state_29724__$1 = state_29724;
var statearr_29726_29759 = state_29724__$1;
(statearr_29726_29759[(2)] = inst_29720);

(statearr_29726_29759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (1))){
var inst_29687 = (new Array(n));
var inst_29688 = inst_29687;
var inst_29689 = (0);
var state_29724__$1 = (function (){var statearr_29727 = state_29724;
(statearr_29727[(7)] = inst_29688);

(statearr_29727[(8)] = inst_29689);

return statearr_29727;
})();
var statearr_29728_29760 = state_29724__$1;
(statearr_29728_29760[(2)] = null);

(statearr_29728_29760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (4))){
var inst_29692 = (state_29724[(9)]);
var inst_29692__$1 = (state_29724[(2)]);
var inst_29693 = (inst_29692__$1 == null);
var inst_29694 = cljs.core.not.call(null,inst_29693);
var state_29724__$1 = (function (){var statearr_29729 = state_29724;
(statearr_29729[(9)] = inst_29692__$1);

return statearr_29729;
})();
if(inst_29694){
var statearr_29730_29761 = state_29724__$1;
(statearr_29730_29761[(1)] = (5));

} else {
var statearr_29731_29762 = state_29724__$1;
(statearr_29731_29762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (15))){
var inst_29714 = (state_29724[(2)]);
var state_29724__$1 = state_29724;
var statearr_29732_29763 = state_29724__$1;
(statearr_29732_29763[(2)] = inst_29714);

(statearr_29732_29763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (13))){
var state_29724__$1 = state_29724;
var statearr_29733_29764 = state_29724__$1;
(statearr_29733_29764[(2)] = null);

(statearr_29733_29764[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (6))){
var inst_29689 = (state_29724[(8)]);
var inst_29710 = (inst_29689 > (0));
var state_29724__$1 = state_29724;
if(cljs.core.truth_(inst_29710)){
var statearr_29734_29765 = state_29724__$1;
(statearr_29734_29765[(1)] = (12));

} else {
var statearr_29735_29766 = state_29724__$1;
(statearr_29735_29766[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (3))){
var inst_29722 = (state_29724[(2)]);
var state_29724__$1 = state_29724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29724__$1,inst_29722);
} else {
if((state_val_29725 === (12))){
var inst_29688 = (state_29724[(7)]);
var inst_29712 = cljs.core.vec.call(null,inst_29688);
var state_29724__$1 = state_29724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29724__$1,(15),out,inst_29712);
} else {
if((state_val_29725 === (2))){
var state_29724__$1 = state_29724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29724__$1,(4),ch);
} else {
if((state_val_29725 === (11))){
var inst_29704 = (state_29724[(2)]);
var inst_29705 = (new Array(n));
var inst_29688 = inst_29705;
var inst_29689 = (0);
var state_29724__$1 = (function (){var statearr_29736 = state_29724;
(statearr_29736[(10)] = inst_29704);

(statearr_29736[(7)] = inst_29688);

(statearr_29736[(8)] = inst_29689);

return statearr_29736;
})();
var statearr_29737_29767 = state_29724__$1;
(statearr_29737_29767[(2)] = null);

(statearr_29737_29767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (9))){
var inst_29688 = (state_29724[(7)]);
var inst_29702 = cljs.core.vec.call(null,inst_29688);
var state_29724__$1 = state_29724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29724__$1,(11),out,inst_29702);
} else {
if((state_val_29725 === (5))){
var inst_29692 = (state_29724[(9)]);
var inst_29697 = (state_29724[(11)]);
var inst_29688 = (state_29724[(7)]);
var inst_29689 = (state_29724[(8)]);
var inst_29696 = (inst_29688[inst_29689] = inst_29692);
var inst_29697__$1 = (inst_29689 + (1));
var inst_29698 = (inst_29697__$1 < n);
var state_29724__$1 = (function (){var statearr_29738 = state_29724;
(statearr_29738[(12)] = inst_29696);

(statearr_29738[(11)] = inst_29697__$1);

return statearr_29738;
})();
if(cljs.core.truth_(inst_29698)){
var statearr_29739_29768 = state_29724__$1;
(statearr_29739_29768[(1)] = (8));

} else {
var statearr_29740_29769 = state_29724__$1;
(statearr_29740_29769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (14))){
var inst_29717 = (state_29724[(2)]);
var inst_29718 = cljs.core.async.close_BANG_.call(null,out);
var state_29724__$1 = (function (){var statearr_29742 = state_29724;
(statearr_29742[(13)] = inst_29717);

return statearr_29742;
})();
var statearr_29743_29770 = state_29724__$1;
(statearr_29743_29770[(2)] = inst_29718);

(statearr_29743_29770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (10))){
var inst_29708 = (state_29724[(2)]);
var state_29724__$1 = state_29724;
var statearr_29744_29771 = state_29724__$1;
(statearr_29744_29771[(2)] = inst_29708);

(statearr_29744_29771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29725 === (8))){
var inst_29697 = (state_29724[(11)]);
var inst_29688 = (state_29724[(7)]);
var tmp29741 = inst_29688;
var inst_29688__$1 = tmp29741;
var inst_29689 = inst_29697;
var state_29724__$1 = (function (){var statearr_29745 = state_29724;
(statearr_29745[(7)] = inst_29688__$1);

(statearr_29745[(8)] = inst_29689);

return statearr_29745;
})();
var statearr_29746_29772 = state_29724__$1;
(statearr_29746_29772[(2)] = null);

(statearr_29746_29772[(1)] = (2));


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
});})(c__27046__auto___29758,out))
;
return ((function (switch__26934__auto__,c__27046__auto___29758,out){
return (function() {
var cljs$core$async$state_machine__26935__auto__ = null;
var cljs$core$async$state_machine__26935__auto____0 = (function (){
var statearr_29750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29750[(0)] = cljs$core$async$state_machine__26935__auto__);

(statearr_29750[(1)] = (1));

return statearr_29750;
});
var cljs$core$async$state_machine__26935__auto____1 = (function (state_29724){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_29724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e29751){if((e29751 instanceof Object)){
var ex__26938__auto__ = e29751;
var statearr_29752_29773 = state_29724;
(statearr_29752_29773[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29774 = state_29724;
state_29724 = G__29774;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$state_machine__26935__auto__ = function(state_29724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26935__auto____1.call(this,state_29724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26935__auto____0;
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26935__auto____1;
return cljs$core$async$state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto___29758,out))
})();
var state__27048__auto__ = (function (){var statearr_29753 = f__27047__auto__.call(null);
(statearr_29753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___29758);

return statearr_29753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto___29758,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29775 = [];
var len__25947__auto___29849 = arguments.length;
var i__25948__auto___29850 = (0);
while(true){
if((i__25948__auto___29850 < len__25947__auto___29849)){
args29775.push((arguments[i__25948__auto___29850]));

var G__29851 = (i__25948__auto___29850 + (1));
i__25948__auto___29850 = G__29851;
continue;
} else {
}
break;
}

var G__29777 = args29775.length;
switch (G__29777) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29775.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27046__auto___29853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27046__auto___29853,out){
return (function (){
var f__27047__auto__ = (function (){var switch__26934__auto__ = ((function (c__27046__auto___29853,out){
return (function (state_29819){
var state_val_29820 = (state_29819[(1)]);
if((state_val_29820 === (7))){
var inst_29815 = (state_29819[(2)]);
var state_29819__$1 = state_29819;
var statearr_29821_29854 = state_29819__$1;
(statearr_29821_29854[(2)] = inst_29815);

(statearr_29821_29854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (1))){
var inst_29778 = [];
var inst_29779 = inst_29778;
var inst_29780 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29819__$1 = (function (){var statearr_29822 = state_29819;
(statearr_29822[(7)] = inst_29779);

(statearr_29822[(8)] = inst_29780);

return statearr_29822;
})();
var statearr_29823_29855 = state_29819__$1;
(statearr_29823_29855[(2)] = null);

(statearr_29823_29855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (4))){
var inst_29783 = (state_29819[(9)]);
var inst_29783__$1 = (state_29819[(2)]);
var inst_29784 = (inst_29783__$1 == null);
var inst_29785 = cljs.core.not.call(null,inst_29784);
var state_29819__$1 = (function (){var statearr_29824 = state_29819;
(statearr_29824[(9)] = inst_29783__$1);

return statearr_29824;
})();
if(inst_29785){
var statearr_29825_29856 = state_29819__$1;
(statearr_29825_29856[(1)] = (5));

} else {
var statearr_29826_29857 = state_29819__$1;
(statearr_29826_29857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (15))){
var inst_29809 = (state_29819[(2)]);
var state_29819__$1 = state_29819;
var statearr_29827_29858 = state_29819__$1;
(statearr_29827_29858[(2)] = inst_29809);

(statearr_29827_29858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (13))){
var state_29819__$1 = state_29819;
var statearr_29828_29859 = state_29819__$1;
(statearr_29828_29859[(2)] = null);

(statearr_29828_29859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (6))){
var inst_29779 = (state_29819[(7)]);
var inst_29804 = inst_29779.length;
var inst_29805 = (inst_29804 > (0));
var state_29819__$1 = state_29819;
if(cljs.core.truth_(inst_29805)){
var statearr_29829_29860 = state_29819__$1;
(statearr_29829_29860[(1)] = (12));

} else {
var statearr_29830_29861 = state_29819__$1;
(statearr_29830_29861[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (3))){
var inst_29817 = (state_29819[(2)]);
var state_29819__$1 = state_29819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29819__$1,inst_29817);
} else {
if((state_val_29820 === (12))){
var inst_29779 = (state_29819[(7)]);
var inst_29807 = cljs.core.vec.call(null,inst_29779);
var state_29819__$1 = state_29819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29819__$1,(15),out,inst_29807);
} else {
if((state_val_29820 === (2))){
var state_29819__$1 = state_29819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29819__$1,(4),ch);
} else {
if((state_val_29820 === (11))){
var inst_29787 = (state_29819[(10)]);
var inst_29783 = (state_29819[(9)]);
var inst_29797 = (state_29819[(2)]);
var inst_29798 = [];
var inst_29799 = inst_29798.push(inst_29783);
var inst_29779 = inst_29798;
var inst_29780 = inst_29787;
var state_29819__$1 = (function (){var statearr_29831 = state_29819;
(statearr_29831[(7)] = inst_29779);

(statearr_29831[(11)] = inst_29797);

(statearr_29831[(8)] = inst_29780);

(statearr_29831[(12)] = inst_29799);

return statearr_29831;
})();
var statearr_29832_29862 = state_29819__$1;
(statearr_29832_29862[(2)] = null);

(statearr_29832_29862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (9))){
var inst_29779 = (state_29819[(7)]);
var inst_29795 = cljs.core.vec.call(null,inst_29779);
var state_29819__$1 = state_29819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29819__$1,(11),out,inst_29795);
} else {
if((state_val_29820 === (5))){
var inst_29780 = (state_29819[(8)]);
var inst_29787 = (state_29819[(10)]);
var inst_29783 = (state_29819[(9)]);
var inst_29787__$1 = f.call(null,inst_29783);
var inst_29788 = cljs.core._EQ_.call(null,inst_29787__$1,inst_29780);
var inst_29789 = cljs.core.keyword_identical_QMARK_.call(null,inst_29780,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29790 = (inst_29788) || (inst_29789);
var state_29819__$1 = (function (){var statearr_29833 = state_29819;
(statearr_29833[(10)] = inst_29787__$1);

return statearr_29833;
})();
if(cljs.core.truth_(inst_29790)){
var statearr_29834_29863 = state_29819__$1;
(statearr_29834_29863[(1)] = (8));

} else {
var statearr_29835_29864 = state_29819__$1;
(statearr_29835_29864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (14))){
var inst_29812 = (state_29819[(2)]);
var inst_29813 = cljs.core.async.close_BANG_.call(null,out);
var state_29819__$1 = (function (){var statearr_29837 = state_29819;
(statearr_29837[(13)] = inst_29812);

return statearr_29837;
})();
var statearr_29838_29865 = state_29819__$1;
(statearr_29838_29865[(2)] = inst_29813);

(statearr_29838_29865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (10))){
var inst_29802 = (state_29819[(2)]);
var state_29819__$1 = state_29819;
var statearr_29839_29866 = state_29819__$1;
(statearr_29839_29866[(2)] = inst_29802);

(statearr_29839_29866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (8))){
var inst_29779 = (state_29819[(7)]);
var inst_29787 = (state_29819[(10)]);
var inst_29783 = (state_29819[(9)]);
var inst_29792 = inst_29779.push(inst_29783);
var tmp29836 = inst_29779;
var inst_29779__$1 = tmp29836;
var inst_29780 = inst_29787;
var state_29819__$1 = (function (){var statearr_29840 = state_29819;
(statearr_29840[(7)] = inst_29779__$1);

(statearr_29840[(8)] = inst_29780);

(statearr_29840[(14)] = inst_29792);

return statearr_29840;
})();
var statearr_29841_29867 = state_29819__$1;
(statearr_29841_29867[(2)] = null);

(statearr_29841_29867[(1)] = (2));


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
});})(c__27046__auto___29853,out))
;
return ((function (switch__26934__auto__,c__27046__auto___29853,out){
return (function() {
var cljs$core$async$state_machine__26935__auto__ = null;
var cljs$core$async$state_machine__26935__auto____0 = (function (){
var statearr_29845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29845[(0)] = cljs$core$async$state_machine__26935__auto__);

(statearr_29845[(1)] = (1));

return statearr_29845;
});
var cljs$core$async$state_machine__26935__auto____1 = (function (state_29819){
while(true){
var ret_value__26936__auto__ = (function (){try{while(true){
var result__26937__auto__ = switch__26934__auto__.call(null,state_29819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26937__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26937__auto__;
}
break;
}
}catch (e29846){if((e29846 instanceof Object)){
var ex__26938__auto__ = e29846;
var statearr_29847_29868 = state_29819;
(statearr_29847_29868[(5)] = ex__26938__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29869 = state_29819;
state_29819 = G__29869;
continue;
} else {
return ret_value__26936__auto__;
}
break;
}
});
cljs$core$async$state_machine__26935__auto__ = function(state_29819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26935__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26935__auto____1.call(this,state_29819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26935__auto____0;
cljs$core$async$state_machine__26935__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26935__auto____1;
return cljs$core$async$state_machine__26935__auto__;
})()
;})(switch__26934__auto__,c__27046__auto___29853,out))
})();
var state__27048__auto__ = (function (){var statearr_29848 = f__27047__auto__.call(null);
(statearr_29848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27046__auto___29853);

return statearr_29848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27048__auto__);
});})(c__27046__auto___29853,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1486440321121