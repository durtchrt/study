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
var args27089 = [];
var len__25947__auto___27095 = arguments.length;
var i__25948__auto___27096 = (0);
while(true){
if((i__25948__auto___27096 < len__25947__auto___27095)){
args27089.push((arguments[i__25948__auto___27096]));

var G__27097 = (i__25948__auto___27096 + (1));
i__25948__auto___27096 = G__27097;
continue;
} else {
}
break;
}

var G__27091 = args27089.length;
switch (G__27091) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27089.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27092 = (function (f,blockable,meta27093){
this.f = f;
this.blockable = blockable;
this.meta27093 = meta27093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27094,meta27093__$1){
var self__ = this;
var _27094__$1 = this;
return (new cljs.core.async.t_cljs$core$async27092(self__.f,self__.blockable,meta27093__$1));
});

cljs.core.async.t_cljs$core$async27092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27094){
var self__ = this;
var _27094__$1 = this;
return self__.meta27093;
});

cljs.core.async.t_cljs$core$async27092.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27092.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27092.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27092.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27093","meta27093",815578720,null)], null);
});

cljs.core.async.t_cljs$core$async27092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27092";

cljs.core.async.t_cljs$core$async27092.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async27092");
});

cljs.core.async.__GT_t_cljs$core$async27092 = (function cljs$core$async$__GT_t_cljs$core$async27092(f__$1,blockable__$1,meta27093){
return (new cljs.core.async.t_cljs$core$async27092(f__$1,blockable__$1,meta27093));
});

}

return (new cljs.core.async.t_cljs$core$async27092(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args27101 = [];
var len__25947__auto___27104 = arguments.length;
var i__25948__auto___27105 = (0);
while(true){
if((i__25948__auto___27105 < len__25947__auto___27104)){
args27101.push((arguments[i__25948__auto___27105]));

var G__27106 = (i__25948__auto___27105 + (1));
i__25948__auto___27105 = G__27106;
continue;
} else {
}
break;
}

var G__27103 = args27101.length;
switch (G__27103) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27101.length)].join('')));

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
var args27108 = [];
var len__25947__auto___27111 = arguments.length;
var i__25948__auto___27112 = (0);
while(true){
if((i__25948__auto___27112 < len__25947__auto___27111)){
args27108.push((arguments[i__25948__auto___27112]));

var G__27113 = (i__25948__auto___27112 + (1));
i__25948__auto___27112 = G__27113;
continue;
} else {
}
break;
}

var G__27110 = args27108.length;
switch (G__27110) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27108.length)].join('')));

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
var args27115 = [];
var len__25947__auto___27118 = arguments.length;
var i__25948__auto___27119 = (0);
while(true){
if((i__25948__auto___27119 < len__25947__auto___27118)){
args27115.push((arguments[i__25948__auto___27119]));

var G__27120 = (i__25948__auto___27119 + (1));
i__25948__auto___27119 = G__27120;
continue;
} else {
}
break;
}

var G__27117 = args27115.length;
switch (G__27117) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27115.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27122 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27122);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27122,ret){
return (function (){
return fn1.call(null,val_27122);
});})(val_27122,ret))
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
var args27123 = [];
var len__25947__auto___27126 = arguments.length;
var i__25948__auto___27127 = (0);
while(true){
if((i__25948__auto___27127 < len__25947__auto___27126)){
args27123.push((arguments[i__25948__auto___27127]));

var G__27128 = (i__25948__auto___27127 + (1));
i__25948__auto___27127 = G__27128;
continue;
} else {
}
break;
}

var G__27125 = args27123.length;
switch (G__27125) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27123.length)].join('')));

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
var n__25787__auto___27130 = n;
var x_27131 = (0);
while(true){
if((x_27131 < n__25787__auto___27130)){
(a[x_27131] = (0));

var G__27132 = (x_27131 + (1));
x_27131 = G__27132;
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

var G__27133 = (i + (1));
i = G__27133;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27137 = (function (alt_flag,flag,meta27138){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27138 = meta27138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27139,meta27138__$1){
var self__ = this;
var _27139__$1 = this;
return (new cljs.core.async.t_cljs$core$async27137(self__.alt_flag,self__.flag,meta27138__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27139){
var self__ = this;
var _27139__$1 = this;
return self__.meta27138;
});})(flag))
;

cljs.core.async.t_cljs$core$async27137.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27137.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27137.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27138","meta27138",795243444,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27137";

cljs.core.async.t_cljs$core$async27137.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async27137");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27137 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27137(alt_flag__$1,flag__$1,meta27138){
return (new cljs.core.async.t_cljs$core$async27137(alt_flag__$1,flag__$1,meta27138));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27137(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27143 = (function (alt_handler,flag,cb,meta27144){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27144 = meta27144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27145,meta27144__$1){
var self__ = this;
var _27145__$1 = this;
return (new cljs.core.async.t_cljs$core$async27143(self__.alt_handler,self__.flag,self__.cb,meta27144__$1));
});

cljs.core.async.t_cljs$core$async27143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27145){
var self__ = this;
var _27145__$1 = this;
return self__.meta27144;
});

cljs.core.async.t_cljs$core$async27143.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27143.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27143.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27143.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27144","meta27144",1885996488,null)], null);
});

cljs.core.async.t_cljs$core$async27143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27143";

cljs.core.async.t_cljs$core$async27143.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async27143");
});

cljs.core.async.__GT_t_cljs$core$async27143 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27143(alt_handler__$1,flag__$1,cb__$1,meta27144){
return (new cljs.core.async.t_cljs$core$async27143(alt_handler__$1,flag__$1,cb__$1,meta27144));
});

}

return (new cljs.core.async.t_cljs$core$async27143(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27146_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27146_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27147_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27147_SHARP_,port], null));
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
var G__27148 = (i + (1));
i = G__27148;
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
var len__25947__auto___27154 = arguments.length;
var i__25948__auto___27155 = (0);
while(true){
if((i__25948__auto___27155 < len__25947__auto___27154)){
args__25954__auto__.push((arguments[i__25948__auto___27155]));

var G__27156 = (i__25948__auto___27155 + (1));
i__25948__auto___27155 = G__27156;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27151){
var map__27152 = p__27151;
var map__27152__$1 = ((((!((map__27152 == null)))?((((map__27152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27152):map__27152);
var opts = map__27152__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27149){
var G__27150 = cljs.core.first.call(null,seq27149);
var seq27149__$1 = cljs.core.next.call(null,seq27149);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27150,seq27149__$1);
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
var args27157 = [];
var len__25947__auto___27207 = arguments.length;
var i__25948__auto___27208 = (0);
while(true){
if((i__25948__auto___27208 < len__25947__auto___27207)){
args27157.push((arguments[i__25948__auto___27208]));

var G__27209 = (i__25948__auto___27208 + (1));
i__25948__auto___27208 = G__27209;
continue;
} else {
}
break;
}

var G__27159 = args27157.length;
switch (G__27159) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27157.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27044__auto___27211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto___27211){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto___27211){
return (function (state_27183){
var state_val_27184 = (state_27183[(1)]);
if((state_val_27184 === (7))){
var inst_27179 = (state_27183[(2)]);
var state_27183__$1 = state_27183;
var statearr_27185_27212 = state_27183__$1;
(statearr_27185_27212[(2)] = inst_27179);

(statearr_27185_27212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27184 === (1))){
var state_27183__$1 = state_27183;
var statearr_27186_27213 = state_27183__$1;
(statearr_27186_27213[(2)] = null);

(statearr_27186_27213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27184 === (4))){
var inst_27162 = (state_27183[(7)]);
var inst_27162__$1 = (state_27183[(2)]);
var inst_27163 = (inst_27162__$1 == null);
var state_27183__$1 = (function (){var statearr_27187 = state_27183;
(statearr_27187[(7)] = inst_27162__$1);

return statearr_27187;
})();
if(cljs.core.truth_(inst_27163)){
var statearr_27188_27214 = state_27183__$1;
(statearr_27188_27214[(1)] = (5));

} else {
var statearr_27189_27215 = state_27183__$1;
(statearr_27189_27215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27184 === (13))){
var state_27183__$1 = state_27183;
var statearr_27190_27216 = state_27183__$1;
(statearr_27190_27216[(2)] = null);

(statearr_27190_27216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27184 === (6))){
var inst_27162 = (state_27183[(7)]);
var state_27183__$1 = state_27183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27183__$1,(11),to,inst_27162);
} else {
if((state_val_27184 === (3))){
var inst_27181 = (state_27183[(2)]);
var state_27183__$1 = state_27183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27183__$1,inst_27181);
} else {
if((state_val_27184 === (12))){
var state_27183__$1 = state_27183;
var statearr_27191_27217 = state_27183__$1;
(statearr_27191_27217[(2)] = null);

(statearr_27191_27217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27184 === (2))){
var state_27183__$1 = state_27183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27183__$1,(4),from);
} else {
if((state_val_27184 === (11))){
var inst_27172 = (state_27183[(2)]);
var state_27183__$1 = state_27183;
if(cljs.core.truth_(inst_27172)){
var statearr_27192_27218 = state_27183__$1;
(statearr_27192_27218[(1)] = (12));

} else {
var statearr_27193_27219 = state_27183__$1;
(statearr_27193_27219[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27184 === (9))){
var state_27183__$1 = state_27183;
var statearr_27194_27220 = state_27183__$1;
(statearr_27194_27220[(2)] = null);

(statearr_27194_27220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27184 === (5))){
var state_27183__$1 = state_27183;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27195_27221 = state_27183__$1;
(statearr_27195_27221[(1)] = (8));

} else {
var statearr_27196_27222 = state_27183__$1;
(statearr_27196_27222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27184 === (14))){
var inst_27177 = (state_27183[(2)]);
var state_27183__$1 = state_27183;
var statearr_27197_27223 = state_27183__$1;
(statearr_27197_27223[(2)] = inst_27177);

(statearr_27197_27223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27184 === (10))){
var inst_27169 = (state_27183[(2)]);
var state_27183__$1 = state_27183;
var statearr_27198_27224 = state_27183__$1;
(statearr_27198_27224[(2)] = inst_27169);

(statearr_27198_27224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27184 === (8))){
var inst_27166 = cljs.core.async.close_BANG_.call(null,to);
var state_27183__$1 = state_27183;
var statearr_27199_27225 = state_27183__$1;
(statearr_27199_27225[(2)] = inst_27166);

(statearr_27199_27225[(1)] = (10));


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
});})(c__27044__auto___27211))
;
return ((function (switch__26932__auto__,c__27044__auto___27211){
return (function() {
var cljs$core$async$state_machine__26933__auto__ = null;
var cljs$core$async$state_machine__26933__auto____0 = (function (){
var statearr_27203 = [null,null,null,null,null,null,null,null];
(statearr_27203[(0)] = cljs$core$async$state_machine__26933__auto__);

(statearr_27203[(1)] = (1));

return statearr_27203;
});
var cljs$core$async$state_machine__26933__auto____1 = (function (state_27183){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_27183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e27204){if((e27204 instanceof Object)){
var ex__26936__auto__ = e27204;
var statearr_27205_27226 = state_27183;
(statearr_27205_27226[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27227 = state_27183;
state_27183 = G__27227;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$state_machine__26933__auto__ = function(state_27183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26933__auto____1.call(this,state_27183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26933__auto____0;
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26933__auto____1;
return cljs$core$async$state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto___27211))
})();
var state__27046__auto__ = (function (){var statearr_27206 = f__27045__auto__.call(null);
(statearr_27206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto___27211);

return statearr_27206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto___27211))
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
return (function (p__27416){
var vec__27417 = p__27416;
var v = cljs.core.nth.call(null,vec__27417,(0),null);
var p = cljs.core.nth.call(null,vec__27417,(1),null);
var job = vec__27417;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27044__auto___27603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto___27603,res,vec__27417,v,p,job,jobs,results){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto___27603,res,vec__27417,v,p,job,jobs,results){
return (function (state_27424){
var state_val_27425 = (state_27424[(1)]);
if((state_val_27425 === (1))){
var state_27424__$1 = state_27424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27424__$1,(2),res,v);
} else {
if((state_val_27425 === (2))){
var inst_27421 = (state_27424[(2)]);
var inst_27422 = cljs.core.async.close_BANG_.call(null,res);
var state_27424__$1 = (function (){var statearr_27426 = state_27424;
(statearr_27426[(7)] = inst_27421);

return statearr_27426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27424__$1,inst_27422);
} else {
return null;
}
}
});})(c__27044__auto___27603,res,vec__27417,v,p,job,jobs,results))
;
return ((function (switch__26932__auto__,c__27044__auto___27603,res,vec__27417,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____0 = (function (){
var statearr_27430 = [null,null,null,null,null,null,null,null];
(statearr_27430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__);

(statearr_27430[(1)] = (1));

return statearr_27430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____1 = (function (state_27424){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_27424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e27431){if((e27431 instanceof Object)){
var ex__26936__auto__ = e27431;
var statearr_27432_27604 = state_27424;
(statearr_27432_27604[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27605 = state_27424;
state_27424 = G__27605;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__ = function(state_27424){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____1.call(this,state_27424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto___27603,res,vec__27417,v,p,job,jobs,results))
})();
var state__27046__auto__ = (function (){var statearr_27433 = f__27045__auto__.call(null);
(statearr_27433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto___27603);

return statearr_27433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto___27603,res,vec__27417,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27434){
var vec__27435 = p__27434;
var v = cljs.core.nth.call(null,vec__27435,(0),null);
var p = cljs.core.nth.call(null,vec__27435,(1),null);
var job = vec__27435;
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
var n__25787__auto___27606 = n;
var __27607 = (0);
while(true){
if((__27607 < n__25787__auto___27606)){
var G__27438_27608 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27438_27608) {
case "compute":
var c__27044__auto___27610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27607,c__27044__auto___27610,G__27438_27608,n__25787__auto___27606,jobs,results,process,async){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (__27607,c__27044__auto___27610,G__27438_27608,n__25787__auto___27606,jobs,results,process,async){
return (function (state_27451){
var state_val_27452 = (state_27451[(1)]);
if((state_val_27452 === (1))){
var state_27451__$1 = state_27451;
var statearr_27453_27611 = state_27451__$1;
(statearr_27453_27611[(2)] = null);

(statearr_27453_27611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (2))){
var state_27451__$1 = state_27451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27451__$1,(4),jobs);
} else {
if((state_val_27452 === (3))){
var inst_27449 = (state_27451[(2)]);
var state_27451__$1 = state_27451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27451__$1,inst_27449);
} else {
if((state_val_27452 === (4))){
var inst_27441 = (state_27451[(2)]);
var inst_27442 = process.call(null,inst_27441);
var state_27451__$1 = state_27451;
if(cljs.core.truth_(inst_27442)){
var statearr_27454_27612 = state_27451__$1;
(statearr_27454_27612[(1)] = (5));

} else {
var statearr_27455_27613 = state_27451__$1;
(statearr_27455_27613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (5))){
var state_27451__$1 = state_27451;
var statearr_27456_27614 = state_27451__$1;
(statearr_27456_27614[(2)] = null);

(statearr_27456_27614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (6))){
var state_27451__$1 = state_27451;
var statearr_27457_27615 = state_27451__$1;
(statearr_27457_27615[(2)] = null);

(statearr_27457_27615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (7))){
var inst_27447 = (state_27451[(2)]);
var state_27451__$1 = state_27451;
var statearr_27458_27616 = state_27451__$1;
(statearr_27458_27616[(2)] = inst_27447);

(statearr_27458_27616[(1)] = (3));


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
});})(__27607,c__27044__auto___27610,G__27438_27608,n__25787__auto___27606,jobs,results,process,async))
;
return ((function (__27607,switch__26932__auto__,c__27044__auto___27610,G__27438_27608,n__25787__auto___27606,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____0 = (function (){
var statearr_27462 = [null,null,null,null,null,null,null];
(statearr_27462[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__);

(statearr_27462[(1)] = (1));

return statearr_27462;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____1 = (function (state_27451){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_27451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e27463){if((e27463 instanceof Object)){
var ex__26936__auto__ = e27463;
var statearr_27464_27617 = state_27451;
(statearr_27464_27617[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27618 = state_27451;
state_27451 = G__27618;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__ = function(state_27451){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____1.call(this,state_27451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__;
})()
;})(__27607,switch__26932__auto__,c__27044__auto___27610,G__27438_27608,n__25787__auto___27606,jobs,results,process,async))
})();
var state__27046__auto__ = (function (){var statearr_27465 = f__27045__auto__.call(null);
(statearr_27465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto___27610);

return statearr_27465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(__27607,c__27044__auto___27610,G__27438_27608,n__25787__auto___27606,jobs,results,process,async))
);


break;
case "async":
var c__27044__auto___27619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27607,c__27044__auto___27619,G__27438_27608,n__25787__auto___27606,jobs,results,process,async){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (__27607,c__27044__auto___27619,G__27438_27608,n__25787__auto___27606,jobs,results,process,async){
return (function (state_27478){
var state_val_27479 = (state_27478[(1)]);
if((state_val_27479 === (1))){
var state_27478__$1 = state_27478;
var statearr_27480_27620 = state_27478__$1;
(statearr_27480_27620[(2)] = null);

(statearr_27480_27620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27479 === (2))){
var state_27478__$1 = state_27478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27478__$1,(4),jobs);
} else {
if((state_val_27479 === (3))){
var inst_27476 = (state_27478[(2)]);
var state_27478__$1 = state_27478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27478__$1,inst_27476);
} else {
if((state_val_27479 === (4))){
var inst_27468 = (state_27478[(2)]);
var inst_27469 = async.call(null,inst_27468);
var state_27478__$1 = state_27478;
if(cljs.core.truth_(inst_27469)){
var statearr_27481_27621 = state_27478__$1;
(statearr_27481_27621[(1)] = (5));

} else {
var statearr_27482_27622 = state_27478__$1;
(statearr_27482_27622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27479 === (5))){
var state_27478__$1 = state_27478;
var statearr_27483_27623 = state_27478__$1;
(statearr_27483_27623[(2)] = null);

(statearr_27483_27623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27479 === (6))){
var state_27478__$1 = state_27478;
var statearr_27484_27624 = state_27478__$1;
(statearr_27484_27624[(2)] = null);

(statearr_27484_27624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27479 === (7))){
var inst_27474 = (state_27478[(2)]);
var state_27478__$1 = state_27478;
var statearr_27485_27625 = state_27478__$1;
(statearr_27485_27625[(2)] = inst_27474);

(statearr_27485_27625[(1)] = (3));


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
});})(__27607,c__27044__auto___27619,G__27438_27608,n__25787__auto___27606,jobs,results,process,async))
;
return ((function (__27607,switch__26932__auto__,c__27044__auto___27619,G__27438_27608,n__25787__auto___27606,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____0 = (function (){
var statearr_27489 = [null,null,null,null,null,null,null];
(statearr_27489[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__);

(statearr_27489[(1)] = (1));

return statearr_27489;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____1 = (function (state_27478){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_27478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e27490){if((e27490 instanceof Object)){
var ex__26936__auto__ = e27490;
var statearr_27491_27626 = state_27478;
(statearr_27491_27626[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27627 = state_27478;
state_27478 = G__27627;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__ = function(state_27478){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____1.call(this,state_27478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__;
})()
;})(__27607,switch__26932__auto__,c__27044__auto___27619,G__27438_27608,n__25787__auto___27606,jobs,results,process,async))
})();
var state__27046__auto__ = (function (){var statearr_27492 = f__27045__auto__.call(null);
(statearr_27492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto___27619);

return statearr_27492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(__27607,c__27044__auto___27619,G__27438_27608,n__25787__auto___27606,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27628 = (__27607 + (1));
__27607 = G__27628;
continue;
} else {
}
break;
}

var c__27044__auto___27629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto___27629,jobs,results,process,async){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto___27629,jobs,results,process,async){
return (function (state_27514){
var state_val_27515 = (state_27514[(1)]);
if((state_val_27515 === (1))){
var state_27514__$1 = state_27514;
var statearr_27516_27630 = state_27514__$1;
(statearr_27516_27630[(2)] = null);

(statearr_27516_27630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27515 === (2))){
var state_27514__$1 = state_27514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27514__$1,(4),from);
} else {
if((state_val_27515 === (3))){
var inst_27512 = (state_27514[(2)]);
var state_27514__$1 = state_27514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27514__$1,inst_27512);
} else {
if((state_val_27515 === (4))){
var inst_27495 = (state_27514[(7)]);
var inst_27495__$1 = (state_27514[(2)]);
var inst_27496 = (inst_27495__$1 == null);
var state_27514__$1 = (function (){var statearr_27517 = state_27514;
(statearr_27517[(7)] = inst_27495__$1);

return statearr_27517;
})();
if(cljs.core.truth_(inst_27496)){
var statearr_27518_27631 = state_27514__$1;
(statearr_27518_27631[(1)] = (5));

} else {
var statearr_27519_27632 = state_27514__$1;
(statearr_27519_27632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27515 === (5))){
var inst_27498 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27514__$1 = state_27514;
var statearr_27520_27633 = state_27514__$1;
(statearr_27520_27633[(2)] = inst_27498);

(statearr_27520_27633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27515 === (6))){
var inst_27500 = (state_27514[(8)]);
var inst_27495 = (state_27514[(7)]);
var inst_27500__$1 = cljs.core.async.chan.call(null,(1));
var inst_27501 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27502 = [inst_27495,inst_27500__$1];
var inst_27503 = (new cljs.core.PersistentVector(null,2,(5),inst_27501,inst_27502,null));
var state_27514__$1 = (function (){var statearr_27521 = state_27514;
(statearr_27521[(8)] = inst_27500__$1);

return statearr_27521;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27514__$1,(8),jobs,inst_27503);
} else {
if((state_val_27515 === (7))){
var inst_27510 = (state_27514[(2)]);
var state_27514__$1 = state_27514;
var statearr_27522_27634 = state_27514__$1;
(statearr_27522_27634[(2)] = inst_27510);

(statearr_27522_27634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27515 === (8))){
var inst_27500 = (state_27514[(8)]);
var inst_27505 = (state_27514[(2)]);
var state_27514__$1 = (function (){var statearr_27523 = state_27514;
(statearr_27523[(9)] = inst_27505);

return statearr_27523;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27514__$1,(9),results,inst_27500);
} else {
if((state_val_27515 === (9))){
var inst_27507 = (state_27514[(2)]);
var state_27514__$1 = (function (){var statearr_27524 = state_27514;
(statearr_27524[(10)] = inst_27507);

return statearr_27524;
})();
var statearr_27525_27635 = state_27514__$1;
(statearr_27525_27635[(2)] = null);

(statearr_27525_27635[(1)] = (2));


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
});})(c__27044__auto___27629,jobs,results,process,async))
;
return ((function (switch__26932__auto__,c__27044__auto___27629,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____0 = (function (){
var statearr_27529 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27529[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__);

(statearr_27529[(1)] = (1));

return statearr_27529;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____1 = (function (state_27514){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_27514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e27530){if((e27530 instanceof Object)){
var ex__26936__auto__ = e27530;
var statearr_27531_27636 = state_27514;
(statearr_27531_27636[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27637 = state_27514;
state_27514 = G__27637;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__ = function(state_27514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____1.call(this,state_27514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto___27629,jobs,results,process,async))
})();
var state__27046__auto__ = (function (){var statearr_27532 = f__27045__auto__.call(null);
(statearr_27532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto___27629);

return statearr_27532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto___27629,jobs,results,process,async))
);


var c__27044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto__,jobs,results,process,async){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto__,jobs,results,process,async){
return (function (state_27570){
var state_val_27571 = (state_27570[(1)]);
if((state_val_27571 === (7))){
var inst_27566 = (state_27570[(2)]);
var state_27570__$1 = state_27570;
var statearr_27572_27638 = state_27570__$1;
(statearr_27572_27638[(2)] = inst_27566);

(statearr_27572_27638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27571 === (20))){
var state_27570__$1 = state_27570;
var statearr_27573_27639 = state_27570__$1;
(statearr_27573_27639[(2)] = null);

(statearr_27573_27639[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27571 === (1))){
var state_27570__$1 = state_27570;
var statearr_27574_27640 = state_27570__$1;
(statearr_27574_27640[(2)] = null);

(statearr_27574_27640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27571 === (4))){
var inst_27535 = (state_27570[(7)]);
var inst_27535__$1 = (state_27570[(2)]);
var inst_27536 = (inst_27535__$1 == null);
var state_27570__$1 = (function (){var statearr_27575 = state_27570;
(statearr_27575[(7)] = inst_27535__$1);

return statearr_27575;
})();
if(cljs.core.truth_(inst_27536)){
var statearr_27576_27641 = state_27570__$1;
(statearr_27576_27641[(1)] = (5));

} else {
var statearr_27577_27642 = state_27570__$1;
(statearr_27577_27642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27571 === (15))){
var inst_27548 = (state_27570[(8)]);
var state_27570__$1 = state_27570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27570__$1,(18),to,inst_27548);
} else {
if((state_val_27571 === (21))){
var inst_27561 = (state_27570[(2)]);
var state_27570__$1 = state_27570;
var statearr_27578_27643 = state_27570__$1;
(statearr_27578_27643[(2)] = inst_27561);

(statearr_27578_27643[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27571 === (13))){
var inst_27563 = (state_27570[(2)]);
var state_27570__$1 = (function (){var statearr_27579 = state_27570;
(statearr_27579[(9)] = inst_27563);

return statearr_27579;
})();
var statearr_27580_27644 = state_27570__$1;
(statearr_27580_27644[(2)] = null);

(statearr_27580_27644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27571 === (6))){
var inst_27535 = (state_27570[(7)]);
var state_27570__$1 = state_27570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27570__$1,(11),inst_27535);
} else {
if((state_val_27571 === (17))){
var inst_27556 = (state_27570[(2)]);
var state_27570__$1 = state_27570;
if(cljs.core.truth_(inst_27556)){
var statearr_27581_27645 = state_27570__$1;
(statearr_27581_27645[(1)] = (19));

} else {
var statearr_27582_27646 = state_27570__$1;
(statearr_27582_27646[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27571 === (3))){
var inst_27568 = (state_27570[(2)]);
var state_27570__$1 = state_27570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27570__$1,inst_27568);
} else {
if((state_val_27571 === (12))){
var inst_27545 = (state_27570[(10)]);
var state_27570__$1 = state_27570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27570__$1,(14),inst_27545);
} else {
if((state_val_27571 === (2))){
var state_27570__$1 = state_27570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27570__$1,(4),results);
} else {
if((state_val_27571 === (19))){
var state_27570__$1 = state_27570;
var statearr_27583_27647 = state_27570__$1;
(statearr_27583_27647[(2)] = null);

(statearr_27583_27647[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27571 === (11))){
var inst_27545 = (state_27570[(2)]);
var state_27570__$1 = (function (){var statearr_27584 = state_27570;
(statearr_27584[(10)] = inst_27545);

return statearr_27584;
})();
var statearr_27585_27648 = state_27570__$1;
(statearr_27585_27648[(2)] = null);

(statearr_27585_27648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27571 === (9))){
var state_27570__$1 = state_27570;
var statearr_27586_27649 = state_27570__$1;
(statearr_27586_27649[(2)] = null);

(statearr_27586_27649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27571 === (5))){
var state_27570__$1 = state_27570;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27587_27650 = state_27570__$1;
(statearr_27587_27650[(1)] = (8));

} else {
var statearr_27588_27651 = state_27570__$1;
(statearr_27588_27651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27571 === (14))){
var inst_27548 = (state_27570[(8)]);
var inst_27550 = (state_27570[(11)]);
var inst_27548__$1 = (state_27570[(2)]);
var inst_27549 = (inst_27548__$1 == null);
var inst_27550__$1 = cljs.core.not.call(null,inst_27549);
var state_27570__$1 = (function (){var statearr_27589 = state_27570;
(statearr_27589[(8)] = inst_27548__$1);

(statearr_27589[(11)] = inst_27550__$1);

return statearr_27589;
})();
if(inst_27550__$1){
var statearr_27590_27652 = state_27570__$1;
(statearr_27590_27652[(1)] = (15));

} else {
var statearr_27591_27653 = state_27570__$1;
(statearr_27591_27653[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27571 === (16))){
var inst_27550 = (state_27570[(11)]);
var state_27570__$1 = state_27570;
var statearr_27592_27654 = state_27570__$1;
(statearr_27592_27654[(2)] = inst_27550);

(statearr_27592_27654[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27571 === (10))){
var inst_27542 = (state_27570[(2)]);
var state_27570__$1 = state_27570;
var statearr_27593_27655 = state_27570__$1;
(statearr_27593_27655[(2)] = inst_27542);

(statearr_27593_27655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27571 === (18))){
var inst_27553 = (state_27570[(2)]);
var state_27570__$1 = state_27570;
var statearr_27594_27656 = state_27570__$1;
(statearr_27594_27656[(2)] = inst_27553);

(statearr_27594_27656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27571 === (8))){
var inst_27539 = cljs.core.async.close_BANG_.call(null,to);
var state_27570__$1 = state_27570;
var statearr_27595_27657 = state_27570__$1;
(statearr_27595_27657[(2)] = inst_27539);

(statearr_27595_27657[(1)] = (10));


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
});})(c__27044__auto__,jobs,results,process,async))
;
return ((function (switch__26932__auto__,c__27044__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____0 = (function (){
var statearr_27599 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27599[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__);

(statearr_27599[(1)] = (1));

return statearr_27599;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____1 = (function (state_27570){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_27570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e27600){if((e27600 instanceof Object)){
var ex__26936__auto__ = e27600;
var statearr_27601_27658 = state_27570;
(statearr_27601_27658[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27659 = state_27570;
state_27570 = G__27659;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__ = function(state_27570){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____1.call(this,state_27570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto__,jobs,results,process,async))
})();
var state__27046__auto__ = (function (){var statearr_27602 = f__27045__auto__.call(null);
(statearr_27602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto__);

return statearr_27602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto__,jobs,results,process,async))
);

return c__27044__auto__;
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
var args27660 = [];
var len__25947__auto___27663 = arguments.length;
var i__25948__auto___27664 = (0);
while(true){
if((i__25948__auto___27664 < len__25947__auto___27663)){
args27660.push((arguments[i__25948__auto___27664]));

var G__27665 = (i__25948__auto___27664 + (1));
i__25948__auto___27664 = G__27665;
continue;
} else {
}
break;
}

var G__27662 = args27660.length;
switch (G__27662) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27660.length)].join('')));

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
var args27667 = [];
var len__25947__auto___27670 = arguments.length;
var i__25948__auto___27671 = (0);
while(true){
if((i__25948__auto___27671 < len__25947__auto___27670)){
args27667.push((arguments[i__25948__auto___27671]));

var G__27672 = (i__25948__auto___27671 + (1));
i__25948__auto___27671 = G__27672;
continue;
} else {
}
break;
}

var G__27669 = args27667.length;
switch (G__27669) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27667.length)].join('')));

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
var args27674 = [];
var len__25947__auto___27727 = arguments.length;
var i__25948__auto___27728 = (0);
while(true){
if((i__25948__auto___27728 < len__25947__auto___27727)){
args27674.push((arguments[i__25948__auto___27728]));

var G__27729 = (i__25948__auto___27728 + (1));
i__25948__auto___27728 = G__27729;
continue;
} else {
}
break;
}

var G__27676 = args27674.length;
switch (G__27676) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27674.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27044__auto___27731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto___27731,tc,fc){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto___27731,tc,fc){
return (function (state_27702){
var state_val_27703 = (state_27702[(1)]);
if((state_val_27703 === (7))){
var inst_27698 = (state_27702[(2)]);
var state_27702__$1 = state_27702;
var statearr_27704_27732 = state_27702__$1;
(statearr_27704_27732[(2)] = inst_27698);

(statearr_27704_27732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (1))){
var state_27702__$1 = state_27702;
var statearr_27705_27733 = state_27702__$1;
(statearr_27705_27733[(2)] = null);

(statearr_27705_27733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (4))){
var inst_27679 = (state_27702[(7)]);
var inst_27679__$1 = (state_27702[(2)]);
var inst_27680 = (inst_27679__$1 == null);
var state_27702__$1 = (function (){var statearr_27706 = state_27702;
(statearr_27706[(7)] = inst_27679__$1);

return statearr_27706;
})();
if(cljs.core.truth_(inst_27680)){
var statearr_27707_27734 = state_27702__$1;
(statearr_27707_27734[(1)] = (5));

} else {
var statearr_27708_27735 = state_27702__$1;
(statearr_27708_27735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (13))){
var state_27702__$1 = state_27702;
var statearr_27709_27736 = state_27702__$1;
(statearr_27709_27736[(2)] = null);

(statearr_27709_27736[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (6))){
var inst_27679 = (state_27702[(7)]);
var inst_27685 = p.call(null,inst_27679);
var state_27702__$1 = state_27702;
if(cljs.core.truth_(inst_27685)){
var statearr_27710_27737 = state_27702__$1;
(statearr_27710_27737[(1)] = (9));

} else {
var statearr_27711_27738 = state_27702__$1;
(statearr_27711_27738[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (3))){
var inst_27700 = (state_27702[(2)]);
var state_27702__$1 = state_27702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27702__$1,inst_27700);
} else {
if((state_val_27703 === (12))){
var state_27702__$1 = state_27702;
var statearr_27712_27739 = state_27702__$1;
(statearr_27712_27739[(2)] = null);

(statearr_27712_27739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (2))){
var state_27702__$1 = state_27702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27702__$1,(4),ch);
} else {
if((state_val_27703 === (11))){
var inst_27679 = (state_27702[(7)]);
var inst_27689 = (state_27702[(2)]);
var state_27702__$1 = state_27702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27702__$1,(8),inst_27689,inst_27679);
} else {
if((state_val_27703 === (9))){
var state_27702__$1 = state_27702;
var statearr_27713_27740 = state_27702__$1;
(statearr_27713_27740[(2)] = tc);

(statearr_27713_27740[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (5))){
var inst_27682 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27683 = cljs.core.async.close_BANG_.call(null,fc);
var state_27702__$1 = (function (){var statearr_27714 = state_27702;
(statearr_27714[(8)] = inst_27682);

return statearr_27714;
})();
var statearr_27715_27741 = state_27702__$1;
(statearr_27715_27741[(2)] = inst_27683);

(statearr_27715_27741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (14))){
var inst_27696 = (state_27702[(2)]);
var state_27702__$1 = state_27702;
var statearr_27716_27742 = state_27702__$1;
(statearr_27716_27742[(2)] = inst_27696);

(statearr_27716_27742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (10))){
var state_27702__$1 = state_27702;
var statearr_27717_27743 = state_27702__$1;
(statearr_27717_27743[(2)] = fc);

(statearr_27717_27743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (8))){
var inst_27691 = (state_27702[(2)]);
var state_27702__$1 = state_27702;
if(cljs.core.truth_(inst_27691)){
var statearr_27718_27744 = state_27702__$1;
(statearr_27718_27744[(1)] = (12));

} else {
var statearr_27719_27745 = state_27702__$1;
(statearr_27719_27745[(1)] = (13));

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
});})(c__27044__auto___27731,tc,fc))
;
return ((function (switch__26932__auto__,c__27044__auto___27731,tc,fc){
return (function() {
var cljs$core$async$state_machine__26933__auto__ = null;
var cljs$core$async$state_machine__26933__auto____0 = (function (){
var statearr_27723 = [null,null,null,null,null,null,null,null,null];
(statearr_27723[(0)] = cljs$core$async$state_machine__26933__auto__);

(statearr_27723[(1)] = (1));

return statearr_27723;
});
var cljs$core$async$state_machine__26933__auto____1 = (function (state_27702){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_27702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e27724){if((e27724 instanceof Object)){
var ex__26936__auto__ = e27724;
var statearr_27725_27746 = state_27702;
(statearr_27725_27746[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27747 = state_27702;
state_27702 = G__27747;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$state_machine__26933__auto__ = function(state_27702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26933__auto____1.call(this,state_27702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26933__auto____0;
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26933__auto____1;
return cljs$core$async$state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto___27731,tc,fc))
})();
var state__27046__auto__ = (function (){var statearr_27726 = f__27045__auto__.call(null);
(statearr_27726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto___27731);

return statearr_27726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto___27731,tc,fc))
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
var c__27044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto__){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto__){
return (function (state_27811){
var state_val_27812 = (state_27811[(1)]);
if((state_val_27812 === (7))){
var inst_27807 = (state_27811[(2)]);
var state_27811__$1 = state_27811;
var statearr_27813_27834 = state_27811__$1;
(statearr_27813_27834[(2)] = inst_27807);

(statearr_27813_27834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (1))){
var inst_27791 = init;
var state_27811__$1 = (function (){var statearr_27814 = state_27811;
(statearr_27814[(7)] = inst_27791);

return statearr_27814;
})();
var statearr_27815_27835 = state_27811__$1;
(statearr_27815_27835[(2)] = null);

(statearr_27815_27835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (4))){
var inst_27794 = (state_27811[(8)]);
var inst_27794__$1 = (state_27811[(2)]);
var inst_27795 = (inst_27794__$1 == null);
var state_27811__$1 = (function (){var statearr_27816 = state_27811;
(statearr_27816[(8)] = inst_27794__$1);

return statearr_27816;
})();
if(cljs.core.truth_(inst_27795)){
var statearr_27817_27836 = state_27811__$1;
(statearr_27817_27836[(1)] = (5));

} else {
var statearr_27818_27837 = state_27811__$1;
(statearr_27818_27837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (6))){
var inst_27794 = (state_27811[(8)]);
var inst_27798 = (state_27811[(9)]);
var inst_27791 = (state_27811[(7)]);
var inst_27798__$1 = f.call(null,inst_27791,inst_27794);
var inst_27799 = cljs.core.reduced_QMARK_.call(null,inst_27798__$1);
var state_27811__$1 = (function (){var statearr_27819 = state_27811;
(statearr_27819[(9)] = inst_27798__$1);

return statearr_27819;
})();
if(inst_27799){
var statearr_27820_27838 = state_27811__$1;
(statearr_27820_27838[(1)] = (8));

} else {
var statearr_27821_27839 = state_27811__$1;
(statearr_27821_27839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (3))){
var inst_27809 = (state_27811[(2)]);
var state_27811__$1 = state_27811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27811__$1,inst_27809);
} else {
if((state_val_27812 === (2))){
var state_27811__$1 = state_27811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27811__$1,(4),ch);
} else {
if((state_val_27812 === (9))){
var inst_27798 = (state_27811[(9)]);
var inst_27791 = inst_27798;
var state_27811__$1 = (function (){var statearr_27822 = state_27811;
(statearr_27822[(7)] = inst_27791);

return statearr_27822;
})();
var statearr_27823_27840 = state_27811__$1;
(statearr_27823_27840[(2)] = null);

(statearr_27823_27840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (5))){
var inst_27791 = (state_27811[(7)]);
var state_27811__$1 = state_27811;
var statearr_27824_27841 = state_27811__$1;
(statearr_27824_27841[(2)] = inst_27791);

(statearr_27824_27841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (10))){
var inst_27805 = (state_27811[(2)]);
var state_27811__$1 = state_27811;
var statearr_27825_27842 = state_27811__$1;
(statearr_27825_27842[(2)] = inst_27805);

(statearr_27825_27842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (8))){
var inst_27798 = (state_27811[(9)]);
var inst_27801 = cljs.core.deref.call(null,inst_27798);
var state_27811__$1 = state_27811;
var statearr_27826_27843 = state_27811__$1;
(statearr_27826_27843[(2)] = inst_27801);

(statearr_27826_27843[(1)] = (10));


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
});})(c__27044__auto__))
;
return ((function (switch__26932__auto__,c__27044__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26933__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26933__auto____0 = (function (){
var statearr_27830 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27830[(0)] = cljs$core$async$reduce_$_state_machine__26933__auto__);

(statearr_27830[(1)] = (1));

return statearr_27830;
});
var cljs$core$async$reduce_$_state_machine__26933__auto____1 = (function (state_27811){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_27811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e27831){if((e27831 instanceof Object)){
var ex__26936__auto__ = e27831;
var statearr_27832_27844 = state_27811;
(statearr_27832_27844[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27845 = state_27811;
state_27811 = G__27845;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26933__auto__ = function(state_27811){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26933__auto____1.call(this,state_27811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26933__auto____0;
cljs$core$async$reduce_$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26933__auto____1;
return cljs$core$async$reduce_$_state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto__))
})();
var state__27046__auto__ = (function (){var statearr_27833 = f__27045__auto__.call(null);
(statearr_27833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto__);

return statearr_27833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto__))
);

return c__27044__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto__,f__$1){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto__,f__$1){
return (function (state_27865){
var state_val_27866 = (state_27865[(1)]);
if((state_val_27866 === (1))){
var inst_27860 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27865__$1 = state_27865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27865__$1,(2),inst_27860);
} else {
if((state_val_27866 === (2))){
var inst_27862 = (state_27865[(2)]);
var inst_27863 = f__$1.call(null,inst_27862);
var state_27865__$1 = state_27865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27865__$1,inst_27863);
} else {
return null;
}
}
});})(c__27044__auto__,f__$1))
;
return ((function (switch__26932__auto__,c__27044__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26933__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26933__auto____0 = (function (){
var statearr_27870 = [null,null,null,null,null,null,null];
(statearr_27870[(0)] = cljs$core$async$transduce_$_state_machine__26933__auto__);

(statearr_27870[(1)] = (1));

return statearr_27870;
});
var cljs$core$async$transduce_$_state_machine__26933__auto____1 = (function (state_27865){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_27865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e27871){if((e27871 instanceof Object)){
var ex__26936__auto__ = e27871;
var statearr_27872_27874 = state_27865;
(statearr_27872_27874[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27875 = state_27865;
state_27865 = G__27875;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26933__auto__ = function(state_27865){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26933__auto____1.call(this,state_27865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26933__auto____0;
cljs$core$async$transduce_$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26933__auto____1;
return cljs$core$async$transduce_$_state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto__,f__$1))
})();
var state__27046__auto__ = (function (){var statearr_27873 = f__27045__auto__.call(null);
(statearr_27873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto__);

return statearr_27873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto__,f__$1))
);

return c__27044__auto__;
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
var args27876 = [];
var len__25947__auto___27928 = arguments.length;
var i__25948__auto___27929 = (0);
while(true){
if((i__25948__auto___27929 < len__25947__auto___27928)){
args27876.push((arguments[i__25948__auto___27929]));

var G__27930 = (i__25948__auto___27929 + (1));
i__25948__auto___27929 = G__27930;
continue;
} else {
}
break;
}

var G__27878 = args27876.length;
switch (G__27878) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27876.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto__){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto__){
return (function (state_27903){
var state_val_27904 = (state_27903[(1)]);
if((state_val_27904 === (7))){
var inst_27885 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27905_27932 = state_27903__$1;
(statearr_27905_27932[(2)] = inst_27885);

(statearr_27905_27932[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (1))){
var inst_27879 = cljs.core.seq.call(null,coll);
var inst_27880 = inst_27879;
var state_27903__$1 = (function (){var statearr_27906 = state_27903;
(statearr_27906[(7)] = inst_27880);

return statearr_27906;
})();
var statearr_27907_27933 = state_27903__$1;
(statearr_27907_27933[(2)] = null);

(statearr_27907_27933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (4))){
var inst_27880 = (state_27903[(7)]);
var inst_27883 = cljs.core.first.call(null,inst_27880);
var state_27903__$1 = state_27903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27903__$1,(7),ch,inst_27883);
} else {
if((state_val_27904 === (13))){
var inst_27897 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27908_27934 = state_27903__$1;
(statearr_27908_27934[(2)] = inst_27897);

(statearr_27908_27934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (6))){
var inst_27888 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
if(cljs.core.truth_(inst_27888)){
var statearr_27909_27935 = state_27903__$1;
(statearr_27909_27935[(1)] = (8));

} else {
var statearr_27910_27936 = state_27903__$1;
(statearr_27910_27936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (3))){
var inst_27901 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27903__$1,inst_27901);
} else {
if((state_val_27904 === (12))){
var state_27903__$1 = state_27903;
var statearr_27911_27937 = state_27903__$1;
(statearr_27911_27937[(2)] = null);

(statearr_27911_27937[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (2))){
var inst_27880 = (state_27903[(7)]);
var state_27903__$1 = state_27903;
if(cljs.core.truth_(inst_27880)){
var statearr_27912_27938 = state_27903__$1;
(statearr_27912_27938[(1)] = (4));

} else {
var statearr_27913_27939 = state_27903__$1;
(statearr_27913_27939[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (11))){
var inst_27894 = cljs.core.async.close_BANG_.call(null,ch);
var state_27903__$1 = state_27903;
var statearr_27914_27940 = state_27903__$1;
(statearr_27914_27940[(2)] = inst_27894);

(statearr_27914_27940[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (9))){
var state_27903__$1 = state_27903;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27915_27941 = state_27903__$1;
(statearr_27915_27941[(1)] = (11));

} else {
var statearr_27916_27942 = state_27903__$1;
(statearr_27916_27942[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (5))){
var inst_27880 = (state_27903[(7)]);
var state_27903__$1 = state_27903;
var statearr_27917_27943 = state_27903__$1;
(statearr_27917_27943[(2)] = inst_27880);

(statearr_27917_27943[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (10))){
var inst_27899 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27918_27944 = state_27903__$1;
(statearr_27918_27944[(2)] = inst_27899);

(statearr_27918_27944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (8))){
var inst_27880 = (state_27903[(7)]);
var inst_27890 = cljs.core.next.call(null,inst_27880);
var inst_27880__$1 = inst_27890;
var state_27903__$1 = (function (){var statearr_27919 = state_27903;
(statearr_27919[(7)] = inst_27880__$1);

return statearr_27919;
})();
var statearr_27920_27945 = state_27903__$1;
(statearr_27920_27945[(2)] = null);

(statearr_27920_27945[(1)] = (2));


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
});})(c__27044__auto__))
;
return ((function (switch__26932__auto__,c__27044__auto__){
return (function() {
var cljs$core$async$state_machine__26933__auto__ = null;
var cljs$core$async$state_machine__26933__auto____0 = (function (){
var statearr_27924 = [null,null,null,null,null,null,null,null];
(statearr_27924[(0)] = cljs$core$async$state_machine__26933__auto__);

(statearr_27924[(1)] = (1));

return statearr_27924;
});
var cljs$core$async$state_machine__26933__auto____1 = (function (state_27903){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_27903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e27925){if((e27925 instanceof Object)){
var ex__26936__auto__ = e27925;
var statearr_27926_27946 = state_27903;
(statearr_27926_27946[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27947 = state_27903;
state_27903 = G__27947;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$state_machine__26933__auto__ = function(state_27903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26933__auto____1.call(this,state_27903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26933__auto____0;
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26933__auto____1;
return cljs$core$async$state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto__))
})();
var state__27046__auto__ = (function (){var statearr_27927 = f__27045__auto__.call(null);
(statearr_27927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto__);

return statearr_27927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto__))
);

return c__27044__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async28173 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28173 = (function (mult,ch,cs,meta28174){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28174 = meta28174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28175,meta28174__$1){
var self__ = this;
var _28175__$1 = this;
return (new cljs.core.async.t_cljs$core$async28173(self__.mult,self__.ch,self__.cs,meta28174__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28173.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28175){
var self__ = this;
var _28175__$1 = this;
return self__.meta28174;
});})(cs))
;

cljs.core.async.t_cljs$core$async28173.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28173.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28173.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28173.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28173.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28173.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28173.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28174","meta28174",663857680,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28173";

cljs.core.async.t_cljs$core$async28173.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async28173");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28173 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28173(mult__$1,ch__$1,cs__$1,meta28174){
return (new cljs.core.async.t_cljs$core$async28173(mult__$1,ch__$1,cs__$1,meta28174));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28173(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27044__auto___28398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto___28398,cs,m,dchan,dctr,done){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto___28398,cs,m,dchan,dctr,done){
return (function (state_28310){
var state_val_28311 = (state_28310[(1)]);
if((state_val_28311 === (7))){
var inst_28306 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28312_28399 = state_28310__$1;
(statearr_28312_28399[(2)] = inst_28306);

(statearr_28312_28399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (20))){
var inst_28209 = (state_28310[(7)]);
var inst_28221 = cljs.core.first.call(null,inst_28209);
var inst_28222 = cljs.core.nth.call(null,inst_28221,(0),null);
var inst_28223 = cljs.core.nth.call(null,inst_28221,(1),null);
var state_28310__$1 = (function (){var statearr_28313 = state_28310;
(statearr_28313[(8)] = inst_28222);

return statearr_28313;
})();
if(cljs.core.truth_(inst_28223)){
var statearr_28314_28400 = state_28310__$1;
(statearr_28314_28400[(1)] = (22));

} else {
var statearr_28315_28401 = state_28310__$1;
(statearr_28315_28401[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (27))){
var inst_28253 = (state_28310[(9)]);
var inst_28258 = (state_28310[(10)]);
var inst_28178 = (state_28310[(11)]);
var inst_28251 = (state_28310[(12)]);
var inst_28258__$1 = cljs.core._nth.call(null,inst_28251,inst_28253);
var inst_28259 = cljs.core.async.put_BANG_.call(null,inst_28258__$1,inst_28178,done);
var state_28310__$1 = (function (){var statearr_28316 = state_28310;
(statearr_28316[(10)] = inst_28258__$1);

return statearr_28316;
})();
if(cljs.core.truth_(inst_28259)){
var statearr_28317_28402 = state_28310__$1;
(statearr_28317_28402[(1)] = (30));

} else {
var statearr_28318_28403 = state_28310__$1;
(statearr_28318_28403[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (1))){
var state_28310__$1 = state_28310;
var statearr_28319_28404 = state_28310__$1;
(statearr_28319_28404[(2)] = null);

(statearr_28319_28404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (24))){
var inst_28209 = (state_28310[(7)]);
var inst_28228 = (state_28310[(2)]);
var inst_28229 = cljs.core.next.call(null,inst_28209);
var inst_28187 = inst_28229;
var inst_28188 = null;
var inst_28189 = (0);
var inst_28190 = (0);
var state_28310__$1 = (function (){var statearr_28320 = state_28310;
(statearr_28320[(13)] = inst_28189);

(statearr_28320[(14)] = inst_28188);

(statearr_28320[(15)] = inst_28190);

(statearr_28320[(16)] = inst_28187);

(statearr_28320[(17)] = inst_28228);

return statearr_28320;
})();
var statearr_28321_28405 = state_28310__$1;
(statearr_28321_28405[(2)] = null);

(statearr_28321_28405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (39))){
var state_28310__$1 = state_28310;
var statearr_28325_28406 = state_28310__$1;
(statearr_28325_28406[(2)] = null);

(statearr_28325_28406[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (4))){
var inst_28178 = (state_28310[(11)]);
var inst_28178__$1 = (state_28310[(2)]);
var inst_28179 = (inst_28178__$1 == null);
var state_28310__$1 = (function (){var statearr_28326 = state_28310;
(statearr_28326[(11)] = inst_28178__$1);

return statearr_28326;
})();
if(cljs.core.truth_(inst_28179)){
var statearr_28327_28407 = state_28310__$1;
(statearr_28327_28407[(1)] = (5));

} else {
var statearr_28328_28408 = state_28310__$1;
(statearr_28328_28408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (15))){
var inst_28189 = (state_28310[(13)]);
var inst_28188 = (state_28310[(14)]);
var inst_28190 = (state_28310[(15)]);
var inst_28187 = (state_28310[(16)]);
var inst_28205 = (state_28310[(2)]);
var inst_28206 = (inst_28190 + (1));
var tmp28322 = inst_28189;
var tmp28323 = inst_28188;
var tmp28324 = inst_28187;
var inst_28187__$1 = tmp28324;
var inst_28188__$1 = tmp28323;
var inst_28189__$1 = tmp28322;
var inst_28190__$1 = inst_28206;
var state_28310__$1 = (function (){var statearr_28329 = state_28310;
(statearr_28329[(13)] = inst_28189__$1);

(statearr_28329[(14)] = inst_28188__$1);

(statearr_28329[(18)] = inst_28205);

(statearr_28329[(15)] = inst_28190__$1);

(statearr_28329[(16)] = inst_28187__$1);

return statearr_28329;
})();
var statearr_28330_28409 = state_28310__$1;
(statearr_28330_28409[(2)] = null);

(statearr_28330_28409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (21))){
var inst_28232 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28334_28410 = state_28310__$1;
(statearr_28334_28410[(2)] = inst_28232);

(statearr_28334_28410[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (31))){
var inst_28258 = (state_28310[(10)]);
var inst_28262 = done.call(null,null);
var inst_28263 = cljs.core.async.untap_STAR_.call(null,m,inst_28258);
var state_28310__$1 = (function (){var statearr_28335 = state_28310;
(statearr_28335[(19)] = inst_28262);

return statearr_28335;
})();
var statearr_28336_28411 = state_28310__$1;
(statearr_28336_28411[(2)] = inst_28263);

(statearr_28336_28411[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (32))){
var inst_28253 = (state_28310[(9)]);
var inst_28252 = (state_28310[(20)]);
var inst_28250 = (state_28310[(21)]);
var inst_28251 = (state_28310[(12)]);
var inst_28265 = (state_28310[(2)]);
var inst_28266 = (inst_28253 + (1));
var tmp28331 = inst_28252;
var tmp28332 = inst_28250;
var tmp28333 = inst_28251;
var inst_28250__$1 = tmp28332;
var inst_28251__$1 = tmp28333;
var inst_28252__$1 = tmp28331;
var inst_28253__$1 = inst_28266;
var state_28310__$1 = (function (){var statearr_28337 = state_28310;
(statearr_28337[(9)] = inst_28253__$1);

(statearr_28337[(20)] = inst_28252__$1);

(statearr_28337[(21)] = inst_28250__$1);

(statearr_28337[(22)] = inst_28265);

(statearr_28337[(12)] = inst_28251__$1);

return statearr_28337;
})();
var statearr_28338_28412 = state_28310__$1;
(statearr_28338_28412[(2)] = null);

(statearr_28338_28412[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (40))){
var inst_28278 = (state_28310[(23)]);
var inst_28282 = done.call(null,null);
var inst_28283 = cljs.core.async.untap_STAR_.call(null,m,inst_28278);
var state_28310__$1 = (function (){var statearr_28339 = state_28310;
(statearr_28339[(24)] = inst_28282);

return statearr_28339;
})();
var statearr_28340_28413 = state_28310__$1;
(statearr_28340_28413[(2)] = inst_28283);

(statearr_28340_28413[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (33))){
var inst_28269 = (state_28310[(25)]);
var inst_28271 = cljs.core.chunked_seq_QMARK_.call(null,inst_28269);
var state_28310__$1 = state_28310;
if(inst_28271){
var statearr_28341_28414 = state_28310__$1;
(statearr_28341_28414[(1)] = (36));

} else {
var statearr_28342_28415 = state_28310__$1;
(statearr_28342_28415[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (13))){
var inst_28199 = (state_28310[(26)]);
var inst_28202 = cljs.core.async.close_BANG_.call(null,inst_28199);
var state_28310__$1 = state_28310;
var statearr_28343_28416 = state_28310__$1;
(statearr_28343_28416[(2)] = inst_28202);

(statearr_28343_28416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (22))){
var inst_28222 = (state_28310[(8)]);
var inst_28225 = cljs.core.async.close_BANG_.call(null,inst_28222);
var state_28310__$1 = state_28310;
var statearr_28344_28417 = state_28310__$1;
(statearr_28344_28417[(2)] = inst_28225);

(statearr_28344_28417[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (36))){
var inst_28269 = (state_28310[(25)]);
var inst_28273 = cljs.core.chunk_first.call(null,inst_28269);
var inst_28274 = cljs.core.chunk_rest.call(null,inst_28269);
var inst_28275 = cljs.core.count.call(null,inst_28273);
var inst_28250 = inst_28274;
var inst_28251 = inst_28273;
var inst_28252 = inst_28275;
var inst_28253 = (0);
var state_28310__$1 = (function (){var statearr_28345 = state_28310;
(statearr_28345[(9)] = inst_28253);

(statearr_28345[(20)] = inst_28252);

(statearr_28345[(21)] = inst_28250);

(statearr_28345[(12)] = inst_28251);

return statearr_28345;
})();
var statearr_28346_28418 = state_28310__$1;
(statearr_28346_28418[(2)] = null);

(statearr_28346_28418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (41))){
var inst_28269 = (state_28310[(25)]);
var inst_28285 = (state_28310[(2)]);
var inst_28286 = cljs.core.next.call(null,inst_28269);
var inst_28250 = inst_28286;
var inst_28251 = null;
var inst_28252 = (0);
var inst_28253 = (0);
var state_28310__$1 = (function (){var statearr_28347 = state_28310;
(statearr_28347[(9)] = inst_28253);

(statearr_28347[(27)] = inst_28285);

(statearr_28347[(20)] = inst_28252);

(statearr_28347[(21)] = inst_28250);

(statearr_28347[(12)] = inst_28251);

return statearr_28347;
})();
var statearr_28348_28419 = state_28310__$1;
(statearr_28348_28419[(2)] = null);

(statearr_28348_28419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (43))){
var state_28310__$1 = state_28310;
var statearr_28349_28420 = state_28310__$1;
(statearr_28349_28420[(2)] = null);

(statearr_28349_28420[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (29))){
var inst_28294 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28350_28421 = state_28310__$1;
(statearr_28350_28421[(2)] = inst_28294);

(statearr_28350_28421[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (44))){
var inst_28303 = (state_28310[(2)]);
var state_28310__$1 = (function (){var statearr_28351 = state_28310;
(statearr_28351[(28)] = inst_28303);

return statearr_28351;
})();
var statearr_28352_28422 = state_28310__$1;
(statearr_28352_28422[(2)] = null);

(statearr_28352_28422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (6))){
var inst_28242 = (state_28310[(29)]);
var inst_28241 = cljs.core.deref.call(null,cs);
var inst_28242__$1 = cljs.core.keys.call(null,inst_28241);
var inst_28243 = cljs.core.count.call(null,inst_28242__$1);
var inst_28244 = cljs.core.reset_BANG_.call(null,dctr,inst_28243);
var inst_28249 = cljs.core.seq.call(null,inst_28242__$1);
var inst_28250 = inst_28249;
var inst_28251 = null;
var inst_28252 = (0);
var inst_28253 = (0);
var state_28310__$1 = (function (){var statearr_28353 = state_28310;
(statearr_28353[(9)] = inst_28253);

(statearr_28353[(20)] = inst_28252);

(statearr_28353[(21)] = inst_28250);

(statearr_28353[(30)] = inst_28244);

(statearr_28353[(29)] = inst_28242__$1);

(statearr_28353[(12)] = inst_28251);

return statearr_28353;
})();
var statearr_28354_28423 = state_28310__$1;
(statearr_28354_28423[(2)] = null);

(statearr_28354_28423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (28))){
var inst_28269 = (state_28310[(25)]);
var inst_28250 = (state_28310[(21)]);
var inst_28269__$1 = cljs.core.seq.call(null,inst_28250);
var state_28310__$1 = (function (){var statearr_28355 = state_28310;
(statearr_28355[(25)] = inst_28269__$1);

return statearr_28355;
})();
if(inst_28269__$1){
var statearr_28356_28424 = state_28310__$1;
(statearr_28356_28424[(1)] = (33));

} else {
var statearr_28357_28425 = state_28310__$1;
(statearr_28357_28425[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (25))){
var inst_28253 = (state_28310[(9)]);
var inst_28252 = (state_28310[(20)]);
var inst_28255 = (inst_28253 < inst_28252);
var inst_28256 = inst_28255;
var state_28310__$1 = state_28310;
if(cljs.core.truth_(inst_28256)){
var statearr_28358_28426 = state_28310__$1;
(statearr_28358_28426[(1)] = (27));

} else {
var statearr_28359_28427 = state_28310__$1;
(statearr_28359_28427[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (34))){
var state_28310__$1 = state_28310;
var statearr_28360_28428 = state_28310__$1;
(statearr_28360_28428[(2)] = null);

(statearr_28360_28428[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (17))){
var state_28310__$1 = state_28310;
var statearr_28361_28429 = state_28310__$1;
(statearr_28361_28429[(2)] = null);

(statearr_28361_28429[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (3))){
var inst_28308 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28310__$1,inst_28308);
} else {
if((state_val_28311 === (12))){
var inst_28237 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28362_28430 = state_28310__$1;
(statearr_28362_28430[(2)] = inst_28237);

(statearr_28362_28430[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (2))){
var state_28310__$1 = state_28310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28310__$1,(4),ch);
} else {
if((state_val_28311 === (23))){
var state_28310__$1 = state_28310;
var statearr_28363_28431 = state_28310__$1;
(statearr_28363_28431[(2)] = null);

(statearr_28363_28431[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (35))){
var inst_28292 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28364_28432 = state_28310__$1;
(statearr_28364_28432[(2)] = inst_28292);

(statearr_28364_28432[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (19))){
var inst_28209 = (state_28310[(7)]);
var inst_28213 = cljs.core.chunk_first.call(null,inst_28209);
var inst_28214 = cljs.core.chunk_rest.call(null,inst_28209);
var inst_28215 = cljs.core.count.call(null,inst_28213);
var inst_28187 = inst_28214;
var inst_28188 = inst_28213;
var inst_28189 = inst_28215;
var inst_28190 = (0);
var state_28310__$1 = (function (){var statearr_28365 = state_28310;
(statearr_28365[(13)] = inst_28189);

(statearr_28365[(14)] = inst_28188);

(statearr_28365[(15)] = inst_28190);

(statearr_28365[(16)] = inst_28187);

return statearr_28365;
})();
var statearr_28366_28433 = state_28310__$1;
(statearr_28366_28433[(2)] = null);

(statearr_28366_28433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (11))){
var inst_28209 = (state_28310[(7)]);
var inst_28187 = (state_28310[(16)]);
var inst_28209__$1 = cljs.core.seq.call(null,inst_28187);
var state_28310__$1 = (function (){var statearr_28367 = state_28310;
(statearr_28367[(7)] = inst_28209__$1);

return statearr_28367;
})();
if(inst_28209__$1){
var statearr_28368_28434 = state_28310__$1;
(statearr_28368_28434[(1)] = (16));

} else {
var statearr_28369_28435 = state_28310__$1;
(statearr_28369_28435[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (9))){
var inst_28239 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28370_28436 = state_28310__$1;
(statearr_28370_28436[(2)] = inst_28239);

(statearr_28370_28436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (5))){
var inst_28185 = cljs.core.deref.call(null,cs);
var inst_28186 = cljs.core.seq.call(null,inst_28185);
var inst_28187 = inst_28186;
var inst_28188 = null;
var inst_28189 = (0);
var inst_28190 = (0);
var state_28310__$1 = (function (){var statearr_28371 = state_28310;
(statearr_28371[(13)] = inst_28189);

(statearr_28371[(14)] = inst_28188);

(statearr_28371[(15)] = inst_28190);

(statearr_28371[(16)] = inst_28187);

return statearr_28371;
})();
var statearr_28372_28437 = state_28310__$1;
(statearr_28372_28437[(2)] = null);

(statearr_28372_28437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (14))){
var state_28310__$1 = state_28310;
var statearr_28373_28438 = state_28310__$1;
(statearr_28373_28438[(2)] = null);

(statearr_28373_28438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (45))){
var inst_28300 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28374_28439 = state_28310__$1;
(statearr_28374_28439[(2)] = inst_28300);

(statearr_28374_28439[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (26))){
var inst_28242 = (state_28310[(29)]);
var inst_28296 = (state_28310[(2)]);
var inst_28297 = cljs.core.seq.call(null,inst_28242);
var state_28310__$1 = (function (){var statearr_28375 = state_28310;
(statearr_28375[(31)] = inst_28296);

return statearr_28375;
})();
if(inst_28297){
var statearr_28376_28440 = state_28310__$1;
(statearr_28376_28440[(1)] = (42));

} else {
var statearr_28377_28441 = state_28310__$1;
(statearr_28377_28441[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (16))){
var inst_28209 = (state_28310[(7)]);
var inst_28211 = cljs.core.chunked_seq_QMARK_.call(null,inst_28209);
var state_28310__$1 = state_28310;
if(inst_28211){
var statearr_28378_28442 = state_28310__$1;
(statearr_28378_28442[(1)] = (19));

} else {
var statearr_28379_28443 = state_28310__$1;
(statearr_28379_28443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (38))){
var inst_28289 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28380_28444 = state_28310__$1;
(statearr_28380_28444[(2)] = inst_28289);

(statearr_28380_28444[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (30))){
var state_28310__$1 = state_28310;
var statearr_28381_28445 = state_28310__$1;
(statearr_28381_28445[(2)] = null);

(statearr_28381_28445[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (10))){
var inst_28188 = (state_28310[(14)]);
var inst_28190 = (state_28310[(15)]);
var inst_28198 = cljs.core._nth.call(null,inst_28188,inst_28190);
var inst_28199 = cljs.core.nth.call(null,inst_28198,(0),null);
var inst_28200 = cljs.core.nth.call(null,inst_28198,(1),null);
var state_28310__$1 = (function (){var statearr_28382 = state_28310;
(statearr_28382[(26)] = inst_28199);

return statearr_28382;
})();
if(cljs.core.truth_(inst_28200)){
var statearr_28383_28446 = state_28310__$1;
(statearr_28383_28446[(1)] = (13));

} else {
var statearr_28384_28447 = state_28310__$1;
(statearr_28384_28447[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (18))){
var inst_28235 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28385_28448 = state_28310__$1;
(statearr_28385_28448[(2)] = inst_28235);

(statearr_28385_28448[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (42))){
var state_28310__$1 = state_28310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28310__$1,(45),dchan);
} else {
if((state_val_28311 === (37))){
var inst_28269 = (state_28310[(25)]);
var inst_28178 = (state_28310[(11)]);
var inst_28278 = (state_28310[(23)]);
var inst_28278__$1 = cljs.core.first.call(null,inst_28269);
var inst_28279 = cljs.core.async.put_BANG_.call(null,inst_28278__$1,inst_28178,done);
var state_28310__$1 = (function (){var statearr_28386 = state_28310;
(statearr_28386[(23)] = inst_28278__$1);

return statearr_28386;
})();
if(cljs.core.truth_(inst_28279)){
var statearr_28387_28449 = state_28310__$1;
(statearr_28387_28449[(1)] = (39));

} else {
var statearr_28388_28450 = state_28310__$1;
(statearr_28388_28450[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (8))){
var inst_28189 = (state_28310[(13)]);
var inst_28190 = (state_28310[(15)]);
var inst_28192 = (inst_28190 < inst_28189);
var inst_28193 = inst_28192;
var state_28310__$1 = state_28310;
if(cljs.core.truth_(inst_28193)){
var statearr_28389_28451 = state_28310__$1;
(statearr_28389_28451[(1)] = (10));

} else {
var statearr_28390_28452 = state_28310__$1;
(statearr_28390_28452[(1)] = (11));

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
});})(c__27044__auto___28398,cs,m,dchan,dctr,done))
;
return ((function (switch__26932__auto__,c__27044__auto___28398,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26933__auto__ = null;
var cljs$core$async$mult_$_state_machine__26933__auto____0 = (function (){
var statearr_28394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28394[(0)] = cljs$core$async$mult_$_state_machine__26933__auto__);

(statearr_28394[(1)] = (1));

return statearr_28394;
});
var cljs$core$async$mult_$_state_machine__26933__auto____1 = (function (state_28310){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_28310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e28395){if((e28395 instanceof Object)){
var ex__26936__auto__ = e28395;
var statearr_28396_28453 = state_28310;
(statearr_28396_28453[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28454 = state_28310;
state_28310 = G__28454;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26933__auto__ = function(state_28310){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26933__auto____1.call(this,state_28310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26933__auto____0;
cljs$core$async$mult_$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26933__auto____1;
return cljs$core$async$mult_$_state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto___28398,cs,m,dchan,dctr,done))
})();
var state__27046__auto__ = (function (){var statearr_28397 = f__27045__auto__.call(null);
(statearr_28397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto___28398);

return statearr_28397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto___28398,cs,m,dchan,dctr,done))
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
var args28455 = [];
var len__25947__auto___28458 = arguments.length;
var i__25948__auto___28459 = (0);
while(true){
if((i__25948__auto___28459 < len__25947__auto___28458)){
args28455.push((arguments[i__25948__auto___28459]));

var G__28460 = (i__25948__auto___28459 + (1));
i__25948__auto___28459 = G__28460;
continue;
} else {
}
break;
}

var G__28457 = args28455.length;
switch (G__28457) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28455.length)].join('')));

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
var len__25947__auto___28472 = arguments.length;
var i__25948__auto___28473 = (0);
while(true){
if((i__25948__auto___28473 < len__25947__auto___28472)){
args__25954__auto__.push((arguments[i__25948__auto___28473]));

var G__28474 = (i__25948__auto___28473 + (1));
i__25948__auto___28473 = G__28474;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((3) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25955__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28466){
var map__28467 = p__28466;
var map__28467__$1 = ((((!((map__28467 == null)))?((((map__28467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28467):map__28467);
var opts = map__28467__$1;
var statearr_28469_28475 = state;
(statearr_28469_28475[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28467,map__28467__$1,opts){
return (function (val){
var statearr_28470_28476 = state;
(statearr_28470_28476[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28467,map__28467__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28471_28477 = state;
(statearr_28471_28477[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28462){
var G__28463 = cljs.core.first.call(null,seq28462);
var seq28462__$1 = cljs.core.next.call(null,seq28462);
var G__28464 = cljs.core.first.call(null,seq28462__$1);
var seq28462__$2 = cljs.core.next.call(null,seq28462__$1);
var G__28465 = cljs.core.first.call(null,seq28462__$2);
var seq28462__$3 = cljs.core.next.call(null,seq28462__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28463,G__28464,G__28465,seq28462__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28643 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28643 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28644){
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
this.meta28644 = meta28644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28645,meta28644__$1){
var self__ = this;
var _28645__$1 = this;
return (new cljs.core.async.t_cljs$core$async28643(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28644__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28645){
var self__ = this;
var _28645__$1 = this;
return self__.meta28644;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28643.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28643.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28643.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28643.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28643.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28643.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28643.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28643.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28643.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28644","meta28644",-1704160596,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28643.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28643";

cljs.core.async.t_cljs$core$async28643.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async28643");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28643 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28643(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28644){
return (new cljs.core.async.t_cljs$core$async28643(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28644));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28643(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27044__auto___28808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto___28808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto___28808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28745){
var state_val_28746 = (state_28745[(1)]);
if((state_val_28746 === (7))){
var inst_28661 = (state_28745[(2)]);
var state_28745__$1 = state_28745;
var statearr_28747_28809 = state_28745__$1;
(statearr_28747_28809[(2)] = inst_28661);

(statearr_28747_28809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (20))){
var inst_28673 = (state_28745[(7)]);
var state_28745__$1 = state_28745;
var statearr_28748_28810 = state_28745__$1;
(statearr_28748_28810[(2)] = inst_28673);

(statearr_28748_28810[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (27))){
var state_28745__$1 = state_28745;
var statearr_28749_28811 = state_28745__$1;
(statearr_28749_28811[(2)] = null);

(statearr_28749_28811[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (1))){
var inst_28649 = (state_28745[(8)]);
var inst_28649__$1 = calc_state.call(null);
var inst_28651 = (inst_28649__$1 == null);
var inst_28652 = cljs.core.not.call(null,inst_28651);
var state_28745__$1 = (function (){var statearr_28750 = state_28745;
(statearr_28750[(8)] = inst_28649__$1);

return statearr_28750;
})();
if(inst_28652){
var statearr_28751_28812 = state_28745__$1;
(statearr_28751_28812[(1)] = (2));

} else {
var statearr_28752_28813 = state_28745__$1;
(statearr_28752_28813[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (24))){
var inst_28705 = (state_28745[(9)]);
var inst_28719 = (state_28745[(10)]);
var inst_28696 = (state_28745[(11)]);
var inst_28719__$1 = inst_28696.call(null,inst_28705);
var state_28745__$1 = (function (){var statearr_28753 = state_28745;
(statearr_28753[(10)] = inst_28719__$1);

return statearr_28753;
})();
if(cljs.core.truth_(inst_28719__$1)){
var statearr_28754_28814 = state_28745__$1;
(statearr_28754_28814[(1)] = (29));

} else {
var statearr_28755_28815 = state_28745__$1;
(statearr_28755_28815[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (4))){
var inst_28664 = (state_28745[(2)]);
var state_28745__$1 = state_28745;
if(cljs.core.truth_(inst_28664)){
var statearr_28756_28816 = state_28745__$1;
(statearr_28756_28816[(1)] = (8));

} else {
var statearr_28757_28817 = state_28745__$1;
(statearr_28757_28817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (15))){
var inst_28690 = (state_28745[(2)]);
var state_28745__$1 = state_28745;
if(cljs.core.truth_(inst_28690)){
var statearr_28758_28818 = state_28745__$1;
(statearr_28758_28818[(1)] = (19));

} else {
var statearr_28759_28819 = state_28745__$1;
(statearr_28759_28819[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (21))){
var inst_28695 = (state_28745[(12)]);
var inst_28695__$1 = (state_28745[(2)]);
var inst_28696 = cljs.core.get.call(null,inst_28695__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28697 = cljs.core.get.call(null,inst_28695__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28698 = cljs.core.get.call(null,inst_28695__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28745__$1 = (function (){var statearr_28760 = state_28745;
(statearr_28760[(12)] = inst_28695__$1);

(statearr_28760[(11)] = inst_28696);

(statearr_28760[(13)] = inst_28697);

return statearr_28760;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28745__$1,(22),inst_28698);
} else {
if((state_val_28746 === (31))){
var inst_28727 = (state_28745[(2)]);
var state_28745__$1 = state_28745;
if(cljs.core.truth_(inst_28727)){
var statearr_28761_28820 = state_28745__$1;
(statearr_28761_28820[(1)] = (32));

} else {
var statearr_28762_28821 = state_28745__$1;
(statearr_28762_28821[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (32))){
var inst_28704 = (state_28745[(14)]);
var state_28745__$1 = state_28745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28745__$1,(35),out,inst_28704);
} else {
if((state_val_28746 === (33))){
var inst_28695 = (state_28745[(12)]);
var inst_28673 = inst_28695;
var state_28745__$1 = (function (){var statearr_28763 = state_28745;
(statearr_28763[(7)] = inst_28673);

return statearr_28763;
})();
var statearr_28764_28822 = state_28745__$1;
(statearr_28764_28822[(2)] = null);

(statearr_28764_28822[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (13))){
var inst_28673 = (state_28745[(7)]);
var inst_28680 = inst_28673.cljs$lang$protocol_mask$partition0$;
var inst_28681 = (inst_28680 & (64));
var inst_28682 = inst_28673.cljs$core$ISeq$;
var inst_28683 = (inst_28681) || (inst_28682);
var state_28745__$1 = state_28745;
if(cljs.core.truth_(inst_28683)){
var statearr_28765_28823 = state_28745__$1;
(statearr_28765_28823[(1)] = (16));

} else {
var statearr_28766_28824 = state_28745__$1;
(statearr_28766_28824[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (22))){
var inst_28704 = (state_28745[(14)]);
var inst_28705 = (state_28745[(9)]);
var inst_28703 = (state_28745[(2)]);
var inst_28704__$1 = cljs.core.nth.call(null,inst_28703,(0),null);
var inst_28705__$1 = cljs.core.nth.call(null,inst_28703,(1),null);
var inst_28706 = (inst_28704__$1 == null);
var inst_28707 = cljs.core._EQ_.call(null,inst_28705__$1,change);
var inst_28708 = (inst_28706) || (inst_28707);
var state_28745__$1 = (function (){var statearr_28767 = state_28745;
(statearr_28767[(14)] = inst_28704__$1);

(statearr_28767[(9)] = inst_28705__$1);

return statearr_28767;
})();
if(cljs.core.truth_(inst_28708)){
var statearr_28768_28825 = state_28745__$1;
(statearr_28768_28825[(1)] = (23));

} else {
var statearr_28769_28826 = state_28745__$1;
(statearr_28769_28826[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (36))){
var inst_28695 = (state_28745[(12)]);
var inst_28673 = inst_28695;
var state_28745__$1 = (function (){var statearr_28770 = state_28745;
(statearr_28770[(7)] = inst_28673);

return statearr_28770;
})();
var statearr_28771_28827 = state_28745__$1;
(statearr_28771_28827[(2)] = null);

(statearr_28771_28827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (29))){
var inst_28719 = (state_28745[(10)]);
var state_28745__$1 = state_28745;
var statearr_28772_28828 = state_28745__$1;
(statearr_28772_28828[(2)] = inst_28719);

(statearr_28772_28828[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (6))){
var state_28745__$1 = state_28745;
var statearr_28773_28829 = state_28745__$1;
(statearr_28773_28829[(2)] = false);

(statearr_28773_28829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (28))){
var inst_28715 = (state_28745[(2)]);
var inst_28716 = calc_state.call(null);
var inst_28673 = inst_28716;
var state_28745__$1 = (function (){var statearr_28774 = state_28745;
(statearr_28774[(7)] = inst_28673);

(statearr_28774[(15)] = inst_28715);

return statearr_28774;
})();
var statearr_28775_28830 = state_28745__$1;
(statearr_28775_28830[(2)] = null);

(statearr_28775_28830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (25))){
var inst_28741 = (state_28745[(2)]);
var state_28745__$1 = state_28745;
var statearr_28776_28831 = state_28745__$1;
(statearr_28776_28831[(2)] = inst_28741);

(statearr_28776_28831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (34))){
var inst_28739 = (state_28745[(2)]);
var state_28745__$1 = state_28745;
var statearr_28777_28832 = state_28745__$1;
(statearr_28777_28832[(2)] = inst_28739);

(statearr_28777_28832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (17))){
var state_28745__$1 = state_28745;
var statearr_28778_28833 = state_28745__$1;
(statearr_28778_28833[(2)] = false);

(statearr_28778_28833[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (3))){
var state_28745__$1 = state_28745;
var statearr_28779_28834 = state_28745__$1;
(statearr_28779_28834[(2)] = false);

(statearr_28779_28834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (12))){
var inst_28743 = (state_28745[(2)]);
var state_28745__$1 = state_28745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28745__$1,inst_28743);
} else {
if((state_val_28746 === (2))){
var inst_28649 = (state_28745[(8)]);
var inst_28654 = inst_28649.cljs$lang$protocol_mask$partition0$;
var inst_28655 = (inst_28654 & (64));
var inst_28656 = inst_28649.cljs$core$ISeq$;
var inst_28657 = (inst_28655) || (inst_28656);
var state_28745__$1 = state_28745;
if(cljs.core.truth_(inst_28657)){
var statearr_28780_28835 = state_28745__$1;
(statearr_28780_28835[(1)] = (5));

} else {
var statearr_28781_28836 = state_28745__$1;
(statearr_28781_28836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (23))){
var inst_28704 = (state_28745[(14)]);
var inst_28710 = (inst_28704 == null);
var state_28745__$1 = state_28745;
if(cljs.core.truth_(inst_28710)){
var statearr_28782_28837 = state_28745__$1;
(statearr_28782_28837[(1)] = (26));

} else {
var statearr_28783_28838 = state_28745__$1;
(statearr_28783_28838[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (35))){
var inst_28730 = (state_28745[(2)]);
var state_28745__$1 = state_28745;
if(cljs.core.truth_(inst_28730)){
var statearr_28784_28839 = state_28745__$1;
(statearr_28784_28839[(1)] = (36));

} else {
var statearr_28785_28840 = state_28745__$1;
(statearr_28785_28840[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (19))){
var inst_28673 = (state_28745[(7)]);
var inst_28692 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28673);
var state_28745__$1 = state_28745;
var statearr_28786_28841 = state_28745__$1;
(statearr_28786_28841[(2)] = inst_28692);

(statearr_28786_28841[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (11))){
var inst_28673 = (state_28745[(7)]);
var inst_28677 = (inst_28673 == null);
var inst_28678 = cljs.core.not.call(null,inst_28677);
var state_28745__$1 = state_28745;
if(inst_28678){
var statearr_28787_28842 = state_28745__$1;
(statearr_28787_28842[(1)] = (13));

} else {
var statearr_28788_28843 = state_28745__$1;
(statearr_28788_28843[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (9))){
var inst_28649 = (state_28745[(8)]);
var state_28745__$1 = state_28745;
var statearr_28789_28844 = state_28745__$1;
(statearr_28789_28844[(2)] = inst_28649);

(statearr_28789_28844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (5))){
var state_28745__$1 = state_28745;
var statearr_28790_28845 = state_28745__$1;
(statearr_28790_28845[(2)] = true);

(statearr_28790_28845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (14))){
var state_28745__$1 = state_28745;
var statearr_28791_28846 = state_28745__$1;
(statearr_28791_28846[(2)] = false);

(statearr_28791_28846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (26))){
var inst_28705 = (state_28745[(9)]);
var inst_28712 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28705);
var state_28745__$1 = state_28745;
var statearr_28792_28847 = state_28745__$1;
(statearr_28792_28847[(2)] = inst_28712);

(statearr_28792_28847[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (16))){
var state_28745__$1 = state_28745;
var statearr_28793_28848 = state_28745__$1;
(statearr_28793_28848[(2)] = true);

(statearr_28793_28848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (38))){
var inst_28735 = (state_28745[(2)]);
var state_28745__$1 = state_28745;
var statearr_28794_28849 = state_28745__$1;
(statearr_28794_28849[(2)] = inst_28735);

(statearr_28794_28849[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (30))){
var inst_28705 = (state_28745[(9)]);
var inst_28696 = (state_28745[(11)]);
var inst_28697 = (state_28745[(13)]);
var inst_28722 = cljs.core.empty_QMARK_.call(null,inst_28696);
var inst_28723 = inst_28697.call(null,inst_28705);
var inst_28724 = cljs.core.not.call(null,inst_28723);
var inst_28725 = (inst_28722) && (inst_28724);
var state_28745__$1 = state_28745;
var statearr_28795_28850 = state_28745__$1;
(statearr_28795_28850[(2)] = inst_28725);

(statearr_28795_28850[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (10))){
var inst_28649 = (state_28745[(8)]);
var inst_28669 = (state_28745[(2)]);
var inst_28670 = cljs.core.get.call(null,inst_28669,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28671 = cljs.core.get.call(null,inst_28669,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28672 = cljs.core.get.call(null,inst_28669,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28673 = inst_28649;
var state_28745__$1 = (function (){var statearr_28796 = state_28745;
(statearr_28796[(7)] = inst_28673);

(statearr_28796[(16)] = inst_28671);

(statearr_28796[(17)] = inst_28670);

(statearr_28796[(18)] = inst_28672);

return statearr_28796;
})();
var statearr_28797_28851 = state_28745__$1;
(statearr_28797_28851[(2)] = null);

(statearr_28797_28851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (18))){
var inst_28687 = (state_28745[(2)]);
var state_28745__$1 = state_28745;
var statearr_28798_28852 = state_28745__$1;
(statearr_28798_28852[(2)] = inst_28687);

(statearr_28798_28852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (37))){
var state_28745__$1 = state_28745;
var statearr_28799_28853 = state_28745__$1;
(statearr_28799_28853[(2)] = null);

(statearr_28799_28853[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (8))){
var inst_28649 = (state_28745[(8)]);
var inst_28666 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28649);
var state_28745__$1 = state_28745;
var statearr_28800_28854 = state_28745__$1;
(statearr_28800_28854[(2)] = inst_28666);

(statearr_28800_28854[(1)] = (10));


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
});})(c__27044__auto___28808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26932__auto__,c__27044__auto___28808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26933__auto__ = null;
var cljs$core$async$mix_$_state_machine__26933__auto____0 = (function (){
var statearr_28804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28804[(0)] = cljs$core$async$mix_$_state_machine__26933__auto__);

(statearr_28804[(1)] = (1));

return statearr_28804;
});
var cljs$core$async$mix_$_state_machine__26933__auto____1 = (function (state_28745){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_28745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e28805){if((e28805 instanceof Object)){
var ex__26936__auto__ = e28805;
var statearr_28806_28855 = state_28745;
(statearr_28806_28855[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28856 = state_28745;
state_28745 = G__28856;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26933__auto__ = function(state_28745){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26933__auto____1.call(this,state_28745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26933__auto____0;
cljs$core$async$mix_$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26933__auto____1;
return cljs$core$async$mix_$_state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto___28808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27046__auto__ = (function (){var statearr_28807 = f__27045__auto__.call(null);
(statearr_28807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto___28808);

return statearr_28807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto___28808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args28857 = [];
var len__25947__auto___28860 = arguments.length;
var i__25948__auto___28861 = (0);
while(true){
if((i__25948__auto___28861 < len__25947__auto___28860)){
args28857.push((arguments[i__25948__auto___28861]));

var G__28862 = (i__25948__auto___28861 + (1));
i__25948__auto___28861 = G__28862;
continue;
} else {
}
break;
}

var G__28859 = args28857.length;
switch (G__28859) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28857.length)].join('')));

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
var args28865 = [];
var len__25947__auto___28990 = arguments.length;
var i__25948__auto___28991 = (0);
while(true){
if((i__25948__auto___28991 < len__25947__auto___28990)){
args28865.push((arguments[i__25948__auto___28991]));

var G__28992 = (i__25948__auto___28991 + (1));
i__25948__auto___28991 = G__28992;
continue;
} else {
}
break;
}

var G__28867 = args28865.length;
switch (G__28867) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28865.length)].join('')));

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
return (function (p1__28864_SHARP_){
if(cljs.core.truth_(p1__28864_SHARP_.call(null,topic))){
return p1__28864_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28864_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24872__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28868 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28869){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28869 = meta28869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28870,meta28869__$1){
var self__ = this;
var _28870__$1 = this;
return (new cljs.core.async.t_cljs$core$async28868(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28869__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28870){
var self__ = this;
var _28870__$1 = this;
return self__.meta28869;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28868.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28868.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28868.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28868.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28868.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28869","meta28869",1137264800,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28868";

cljs.core.async.t_cljs$core$async28868.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async28868");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28868 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28868(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28869){
return (new cljs.core.async.t_cljs$core$async28868(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28869));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28868(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27044__auto___28994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto___28994,mults,ensure_mult,p){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto___28994,mults,ensure_mult,p){
return (function (state_28942){
var state_val_28943 = (state_28942[(1)]);
if((state_val_28943 === (7))){
var inst_28938 = (state_28942[(2)]);
var state_28942__$1 = state_28942;
var statearr_28944_28995 = state_28942__$1;
(statearr_28944_28995[(2)] = inst_28938);

(statearr_28944_28995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (20))){
var state_28942__$1 = state_28942;
var statearr_28945_28996 = state_28942__$1;
(statearr_28945_28996[(2)] = null);

(statearr_28945_28996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (1))){
var state_28942__$1 = state_28942;
var statearr_28946_28997 = state_28942__$1;
(statearr_28946_28997[(2)] = null);

(statearr_28946_28997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (24))){
var inst_28921 = (state_28942[(7)]);
var inst_28930 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28921);
var state_28942__$1 = state_28942;
var statearr_28947_28998 = state_28942__$1;
(statearr_28947_28998[(2)] = inst_28930);

(statearr_28947_28998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (4))){
var inst_28873 = (state_28942[(8)]);
var inst_28873__$1 = (state_28942[(2)]);
var inst_28874 = (inst_28873__$1 == null);
var state_28942__$1 = (function (){var statearr_28948 = state_28942;
(statearr_28948[(8)] = inst_28873__$1);

return statearr_28948;
})();
if(cljs.core.truth_(inst_28874)){
var statearr_28949_28999 = state_28942__$1;
(statearr_28949_28999[(1)] = (5));

} else {
var statearr_28950_29000 = state_28942__$1;
(statearr_28950_29000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (15))){
var inst_28915 = (state_28942[(2)]);
var state_28942__$1 = state_28942;
var statearr_28951_29001 = state_28942__$1;
(statearr_28951_29001[(2)] = inst_28915);

(statearr_28951_29001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (21))){
var inst_28935 = (state_28942[(2)]);
var state_28942__$1 = (function (){var statearr_28952 = state_28942;
(statearr_28952[(9)] = inst_28935);

return statearr_28952;
})();
var statearr_28953_29002 = state_28942__$1;
(statearr_28953_29002[(2)] = null);

(statearr_28953_29002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (13))){
var inst_28897 = (state_28942[(10)]);
var inst_28899 = cljs.core.chunked_seq_QMARK_.call(null,inst_28897);
var state_28942__$1 = state_28942;
if(inst_28899){
var statearr_28954_29003 = state_28942__$1;
(statearr_28954_29003[(1)] = (16));

} else {
var statearr_28955_29004 = state_28942__$1;
(statearr_28955_29004[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (22))){
var inst_28927 = (state_28942[(2)]);
var state_28942__$1 = state_28942;
if(cljs.core.truth_(inst_28927)){
var statearr_28956_29005 = state_28942__$1;
(statearr_28956_29005[(1)] = (23));

} else {
var statearr_28957_29006 = state_28942__$1;
(statearr_28957_29006[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (6))){
var inst_28921 = (state_28942[(7)]);
var inst_28923 = (state_28942[(11)]);
var inst_28873 = (state_28942[(8)]);
var inst_28921__$1 = topic_fn.call(null,inst_28873);
var inst_28922 = cljs.core.deref.call(null,mults);
var inst_28923__$1 = cljs.core.get.call(null,inst_28922,inst_28921__$1);
var state_28942__$1 = (function (){var statearr_28958 = state_28942;
(statearr_28958[(7)] = inst_28921__$1);

(statearr_28958[(11)] = inst_28923__$1);

return statearr_28958;
})();
if(cljs.core.truth_(inst_28923__$1)){
var statearr_28959_29007 = state_28942__$1;
(statearr_28959_29007[(1)] = (19));

} else {
var statearr_28960_29008 = state_28942__$1;
(statearr_28960_29008[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (25))){
var inst_28932 = (state_28942[(2)]);
var state_28942__$1 = state_28942;
var statearr_28961_29009 = state_28942__$1;
(statearr_28961_29009[(2)] = inst_28932);

(statearr_28961_29009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (17))){
var inst_28897 = (state_28942[(10)]);
var inst_28906 = cljs.core.first.call(null,inst_28897);
var inst_28907 = cljs.core.async.muxch_STAR_.call(null,inst_28906);
var inst_28908 = cljs.core.async.close_BANG_.call(null,inst_28907);
var inst_28909 = cljs.core.next.call(null,inst_28897);
var inst_28883 = inst_28909;
var inst_28884 = null;
var inst_28885 = (0);
var inst_28886 = (0);
var state_28942__$1 = (function (){var statearr_28962 = state_28942;
(statearr_28962[(12)] = inst_28908);

(statearr_28962[(13)] = inst_28885);

(statearr_28962[(14)] = inst_28883);

(statearr_28962[(15)] = inst_28884);

(statearr_28962[(16)] = inst_28886);

return statearr_28962;
})();
var statearr_28963_29010 = state_28942__$1;
(statearr_28963_29010[(2)] = null);

(statearr_28963_29010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (3))){
var inst_28940 = (state_28942[(2)]);
var state_28942__$1 = state_28942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28942__$1,inst_28940);
} else {
if((state_val_28943 === (12))){
var inst_28917 = (state_28942[(2)]);
var state_28942__$1 = state_28942;
var statearr_28964_29011 = state_28942__$1;
(statearr_28964_29011[(2)] = inst_28917);

(statearr_28964_29011[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (2))){
var state_28942__$1 = state_28942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28942__$1,(4),ch);
} else {
if((state_val_28943 === (23))){
var state_28942__$1 = state_28942;
var statearr_28965_29012 = state_28942__$1;
(statearr_28965_29012[(2)] = null);

(statearr_28965_29012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (19))){
var inst_28923 = (state_28942[(11)]);
var inst_28873 = (state_28942[(8)]);
var inst_28925 = cljs.core.async.muxch_STAR_.call(null,inst_28923);
var state_28942__$1 = state_28942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28942__$1,(22),inst_28925,inst_28873);
} else {
if((state_val_28943 === (11))){
var inst_28897 = (state_28942[(10)]);
var inst_28883 = (state_28942[(14)]);
var inst_28897__$1 = cljs.core.seq.call(null,inst_28883);
var state_28942__$1 = (function (){var statearr_28966 = state_28942;
(statearr_28966[(10)] = inst_28897__$1);

return statearr_28966;
})();
if(inst_28897__$1){
var statearr_28967_29013 = state_28942__$1;
(statearr_28967_29013[(1)] = (13));

} else {
var statearr_28968_29014 = state_28942__$1;
(statearr_28968_29014[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (9))){
var inst_28919 = (state_28942[(2)]);
var state_28942__$1 = state_28942;
var statearr_28969_29015 = state_28942__$1;
(statearr_28969_29015[(2)] = inst_28919);

(statearr_28969_29015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (5))){
var inst_28880 = cljs.core.deref.call(null,mults);
var inst_28881 = cljs.core.vals.call(null,inst_28880);
var inst_28882 = cljs.core.seq.call(null,inst_28881);
var inst_28883 = inst_28882;
var inst_28884 = null;
var inst_28885 = (0);
var inst_28886 = (0);
var state_28942__$1 = (function (){var statearr_28970 = state_28942;
(statearr_28970[(13)] = inst_28885);

(statearr_28970[(14)] = inst_28883);

(statearr_28970[(15)] = inst_28884);

(statearr_28970[(16)] = inst_28886);

return statearr_28970;
})();
var statearr_28971_29016 = state_28942__$1;
(statearr_28971_29016[(2)] = null);

(statearr_28971_29016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (14))){
var state_28942__$1 = state_28942;
var statearr_28975_29017 = state_28942__$1;
(statearr_28975_29017[(2)] = null);

(statearr_28975_29017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (16))){
var inst_28897 = (state_28942[(10)]);
var inst_28901 = cljs.core.chunk_first.call(null,inst_28897);
var inst_28902 = cljs.core.chunk_rest.call(null,inst_28897);
var inst_28903 = cljs.core.count.call(null,inst_28901);
var inst_28883 = inst_28902;
var inst_28884 = inst_28901;
var inst_28885 = inst_28903;
var inst_28886 = (0);
var state_28942__$1 = (function (){var statearr_28976 = state_28942;
(statearr_28976[(13)] = inst_28885);

(statearr_28976[(14)] = inst_28883);

(statearr_28976[(15)] = inst_28884);

(statearr_28976[(16)] = inst_28886);

return statearr_28976;
})();
var statearr_28977_29018 = state_28942__$1;
(statearr_28977_29018[(2)] = null);

(statearr_28977_29018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (10))){
var inst_28885 = (state_28942[(13)]);
var inst_28883 = (state_28942[(14)]);
var inst_28884 = (state_28942[(15)]);
var inst_28886 = (state_28942[(16)]);
var inst_28891 = cljs.core._nth.call(null,inst_28884,inst_28886);
var inst_28892 = cljs.core.async.muxch_STAR_.call(null,inst_28891);
var inst_28893 = cljs.core.async.close_BANG_.call(null,inst_28892);
var inst_28894 = (inst_28886 + (1));
var tmp28972 = inst_28885;
var tmp28973 = inst_28883;
var tmp28974 = inst_28884;
var inst_28883__$1 = tmp28973;
var inst_28884__$1 = tmp28974;
var inst_28885__$1 = tmp28972;
var inst_28886__$1 = inst_28894;
var state_28942__$1 = (function (){var statearr_28978 = state_28942;
(statearr_28978[(13)] = inst_28885__$1);

(statearr_28978[(14)] = inst_28883__$1);

(statearr_28978[(15)] = inst_28884__$1);

(statearr_28978[(16)] = inst_28886__$1);

(statearr_28978[(17)] = inst_28893);

return statearr_28978;
})();
var statearr_28979_29019 = state_28942__$1;
(statearr_28979_29019[(2)] = null);

(statearr_28979_29019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (18))){
var inst_28912 = (state_28942[(2)]);
var state_28942__$1 = state_28942;
var statearr_28980_29020 = state_28942__$1;
(statearr_28980_29020[(2)] = inst_28912);

(statearr_28980_29020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (8))){
var inst_28885 = (state_28942[(13)]);
var inst_28886 = (state_28942[(16)]);
var inst_28888 = (inst_28886 < inst_28885);
var inst_28889 = inst_28888;
var state_28942__$1 = state_28942;
if(cljs.core.truth_(inst_28889)){
var statearr_28981_29021 = state_28942__$1;
(statearr_28981_29021[(1)] = (10));

} else {
var statearr_28982_29022 = state_28942__$1;
(statearr_28982_29022[(1)] = (11));

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
});})(c__27044__auto___28994,mults,ensure_mult,p))
;
return ((function (switch__26932__auto__,c__27044__auto___28994,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26933__auto__ = null;
var cljs$core$async$state_machine__26933__auto____0 = (function (){
var statearr_28986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28986[(0)] = cljs$core$async$state_machine__26933__auto__);

(statearr_28986[(1)] = (1));

return statearr_28986;
});
var cljs$core$async$state_machine__26933__auto____1 = (function (state_28942){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_28942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e28987){if((e28987 instanceof Object)){
var ex__26936__auto__ = e28987;
var statearr_28988_29023 = state_28942;
(statearr_28988_29023[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29024 = state_28942;
state_28942 = G__29024;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$state_machine__26933__auto__ = function(state_28942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26933__auto____1.call(this,state_28942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26933__auto____0;
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26933__auto____1;
return cljs$core$async$state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto___28994,mults,ensure_mult,p))
})();
var state__27046__auto__ = (function (){var statearr_28989 = f__27045__auto__.call(null);
(statearr_28989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto___28994);

return statearr_28989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto___28994,mults,ensure_mult,p))
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
var args29025 = [];
var len__25947__auto___29028 = arguments.length;
var i__25948__auto___29029 = (0);
while(true){
if((i__25948__auto___29029 < len__25947__auto___29028)){
args29025.push((arguments[i__25948__auto___29029]));

var G__29030 = (i__25948__auto___29029 + (1));
i__25948__auto___29029 = G__29030;
continue;
} else {
}
break;
}

var G__29027 = args29025.length;
switch (G__29027) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29025.length)].join('')));

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
var args29032 = [];
var len__25947__auto___29035 = arguments.length;
var i__25948__auto___29036 = (0);
while(true){
if((i__25948__auto___29036 < len__25947__auto___29035)){
args29032.push((arguments[i__25948__auto___29036]));

var G__29037 = (i__25948__auto___29036 + (1));
i__25948__auto___29036 = G__29037;
continue;
} else {
}
break;
}

var G__29034 = args29032.length;
switch (G__29034) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29032.length)].join('')));

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
var args29039 = [];
var len__25947__auto___29110 = arguments.length;
var i__25948__auto___29111 = (0);
while(true){
if((i__25948__auto___29111 < len__25947__auto___29110)){
args29039.push((arguments[i__25948__auto___29111]));

var G__29112 = (i__25948__auto___29111 + (1));
i__25948__auto___29111 = G__29112;
continue;
} else {
}
break;
}

var G__29041 = args29039.length;
switch (G__29041) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29039.length)].join('')));

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
var c__27044__auto___29114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto___29114,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto___29114,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29080){
var state_val_29081 = (state_29080[(1)]);
if((state_val_29081 === (7))){
var state_29080__$1 = state_29080;
var statearr_29082_29115 = state_29080__$1;
(statearr_29082_29115[(2)] = null);

(statearr_29082_29115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (1))){
var state_29080__$1 = state_29080;
var statearr_29083_29116 = state_29080__$1;
(statearr_29083_29116[(2)] = null);

(statearr_29083_29116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (4))){
var inst_29044 = (state_29080[(7)]);
var inst_29046 = (inst_29044 < cnt);
var state_29080__$1 = state_29080;
if(cljs.core.truth_(inst_29046)){
var statearr_29084_29117 = state_29080__$1;
(statearr_29084_29117[(1)] = (6));

} else {
var statearr_29085_29118 = state_29080__$1;
(statearr_29085_29118[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (15))){
var inst_29076 = (state_29080[(2)]);
var state_29080__$1 = state_29080;
var statearr_29086_29119 = state_29080__$1;
(statearr_29086_29119[(2)] = inst_29076);

(statearr_29086_29119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (13))){
var inst_29069 = cljs.core.async.close_BANG_.call(null,out);
var state_29080__$1 = state_29080;
var statearr_29087_29120 = state_29080__$1;
(statearr_29087_29120[(2)] = inst_29069);

(statearr_29087_29120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (6))){
var state_29080__$1 = state_29080;
var statearr_29088_29121 = state_29080__$1;
(statearr_29088_29121[(2)] = null);

(statearr_29088_29121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (3))){
var inst_29078 = (state_29080[(2)]);
var state_29080__$1 = state_29080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29080__$1,inst_29078);
} else {
if((state_val_29081 === (12))){
var inst_29066 = (state_29080[(8)]);
var inst_29066__$1 = (state_29080[(2)]);
var inst_29067 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29066__$1);
var state_29080__$1 = (function (){var statearr_29089 = state_29080;
(statearr_29089[(8)] = inst_29066__$1);

return statearr_29089;
})();
if(cljs.core.truth_(inst_29067)){
var statearr_29090_29122 = state_29080__$1;
(statearr_29090_29122[(1)] = (13));

} else {
var statearr_29091_29123 = state_29080__$1;
(statearr_29091_29123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (2))){
var inst_29043 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29044 = (0);
var state_29080__$1 = (function (){var statearr_29092 = state_29080;
(statearr_29092[(9)] = inst_29043);

(statearr_29092[(7)] = inst_29044);

return statearr_29092;
})();
var statearr_29093_29124 = state_29080__$1;
(statearr_29093_29124[(2)] = null);

(statearr_29093_29124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (11))){
var inst_29044 = (state_29080[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29080,(10),Object,null,(9));
var inst_29053 = chs__$1.call(null,inst_29044);
var inst_29054 = done.call(null,inst_29044);
var inst_29055 = cljs.core.async.take_BANG_.call(null,inst_29053,inst_29054);
var state_29080__$1 = state_29080;
var statearr_29094_29125 = state_29080__$1;
(statearr_29094_29125[(2)] = inst_29055);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29080__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (9))){
var inst_29044 = (state_29080[(7)]);
var inst_29057 = (state_29080[(2)]);
var inst_29058 = (inst_29044 + (1));
var inst_29044__$1 = inst_29058;
var state_29080__$1 = (function (){var statearr_29095 = state_29080;
(statearr_29095[(10)] = inst_29057);

(statearr_29095[(7)] = inst_29044__$1);

return statearr_29095;
})();
var statearr_29096_29126 = state_29080__$1;
(statearr_29096_29126[(2)] = null);

(statearr_29096_29126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (5))){
var inst_29064 = (state_29080[(2)]);
var state_29080__$1 = (function (){var statearr_29097 = state_29080;
(statearr_29097[(11)] = inst_29064);

return statearr_29097;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29080__$1,(12),dchan);
} else {
if((state_val_29081 === (14))){
var inst_29066 = (state_29080[(8)]);
var inst_29071 = cljs.core.apply.call(null,f,inst_29066);
var state_29080__$1 = state_29080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29080__$1,(16),out,inst_29071);
} else {
if((state_val_29081 === (16))){
var inst_29073 = (state_29080[(2)]);
var state_29080__$1 = (function (){var statearr_29098 = state_29080;
(statearr_29098[(12)] = inst_29073);

return statearr_29098;
})();
var statearr_29099_29127 = state_29080__$1;
(statearr_29099_29127[(2)] = null);

(statearr_29099_29127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (10))){
var inst_29048 = (state_29080[(2)]);
var inst_29049 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29080__$1 = (function (){var statearr_29100 = state_29080;
(statearr_29100[(13)] = inst_29048);

return statearr_29100;
})();
var statearr_29101_29128 = state_29080__$1;
(statearr_29101_29128[(2)] = inst_29049);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29080__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (8))){
var inst_29062 = (state_29080[(2)]);
var state_29080__$1 = state_29080;
var statearr_29102_29129 = state_29080__$1;
(statearr_29102_29129[(2)] = inst_29062);

(statearr_29102_29129[(1)] = (5));


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
});})(c__27044__auto___29114,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26932__auto__,c__27044__auto___29114,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26933__auto__ = null;
var cljs$core$async$state_machine__26933__auto____0 = (function (){
var statearr_29106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29106[(0)] = cljs$core$async$state_machine__26933__auto__);

(statearr_29106[(1)] = (1));

return statearr_29106;
});
var cljs$core$async$state_machine__26933__auto____1 = (function (state_29080){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_29080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e29107){if((e29107 instanceof Object)){
var ex__26936__auto__ = e29107;
var statearr_29108_29130 = state_29080;
(statearr_29108_29130[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29131 = state_29080;
state_29080 = G__29131;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$state_machine__26933__auto__ = function(state_29080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26933__auto____1.call(this,state_29080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26933__auto____0;
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26933__auto____1;
return cljs$core$async$state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto___29114,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27046__auto__ = (function (){var statearr_29109 = f__27045__auto__.call(null);
(statearr_29109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto___29114);

return statearr_29109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto___29114,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29133 = [];
var len__25947__auto___29191 = arguments.length;
var i__25948__auto___29192 = (0);
while(true){
if((i__25948__auto___29192 < len__25947__auto___29191)){
args29133.push((arguments[i__25948__auto___29192]));

var G__29193 = (i__25948__auto___29192 + (1));
i__25948__auto___29192 = G__29193;
continue;
} else {
}
break;
}

var G__29135 = args29133.length;
switch (G__29135) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29133.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27044__auto___29195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto___29195,out){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto___29195,out){
return (function (state_29167){
var state_val_29168 = (state_29167[(1)]);
if((state_val_29168 === (7))){
var inst_29147 = (state_29167[(7)]);
var inst_29146 = (state_29167[(8)]);
var inst_29146__$1 = (state_29167[(2)]);
var inst_29147__$1 = cljs.core.nth.call(null,inst_29146__$1,(0),null);
var inst_29148 = cljs.core.nth.call(null,inst_29146__$1,(1),null);
var inst_29149 = (inst_29147__$1 == null);
var state_29167__$1 = (function (){var statearr_29169 = state_29167;
(statearr_29169[(7)] = inst_29147__$1);

(statearr_29169[(8)] = inst_29146__$1);

(statearr_29169[(9)] = inst_29148);

return statearr_29169;
})();
if(cljs.core.truth_(inst_29149)){
var statearr_29170_29196 = state_29167__$1;
(statearr_29170_29196[(1)] = (8));

} else {
var statearr_29171_29197 = state_29167__$1;
(statearr_29171_29197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (1))){
var inst_29136 = cljs.core.vec.call(null,chs);
var inst_29137 = inst_29136;
var state_29167__$1 = (function (){var statearr_29172 = state_29167;
(statearr_29172[(10)] = inst_29137);

return statearr_29172;
})();
var statearr_29173_29198 = state_29167__$1;
(statearr_29173_29198[(2)] = null);

(statearr_29173_29198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (4))){
var inst_29137 = (state_29167[(10)]);
var state_29167__$1 = state_29167;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29167__$1,(7),inst_29137);
} else {
if((state_val_29168 === (6))){
var inst_29163 = (state_29167[(2)]);
var state_29167__$1 = state_29167;
var statearr_29174_29199 = state_29167__$1;
(statearr_29174_29199[(2)] = inst_29163);

(statearr_29174_29199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (3))){
var inst_29165 = (state_29167[(2)]);
var state_29167__$1 = state_29167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29167__$1,inst_29165);
} else {
if((state_val_29168 === (2))){
var inst_29137 = (state_29167[(10)]);
var inst_29139 = cljs.core.count.call(null,inst_29137);
var inst_29140 = (inst_29139 > (0));
var state_29167__$1 = state_29167;
if(cljs.core.truth_(inst_29140)){
var statearr_29176_29200 = state_29167__$1;
(statearr_29176_29200[(1)] = (4));

} else {
var statearr_29177_29201 = state_29167__$1;
(statearr_29177_29201[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (11))){
var inst_29137 = (state_29167[(10)]);
var inst_29156 = (state_29167[(2)]);
var tmp29175 = inst_29137;
var inst_29137__$1 = tmp29175;
var state_29167__$1 = (function (){var statearr_29178 = state_29167;
(statearr_29178[(11)] = inst_29156);

(statearr_29178[(10)] = inst_29137__$1);

return statearr_29178;
})();
var statearr_29179_29202 = state_29167__$1;
(statearr_29179_29202[(2)] = null);

(statearr_29179_29202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (9))){
var inst_29147 = (state_29167[(7)]);
var state_29167__$1 = state_29167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29167__$1,(11),out,inst_29147);
} else {
if((state_val_29168 === (5))){
var inst_29161 = cljs.core.async.close_BANG_.call(null,out);
var state_29167__$1 = state_29167;
var statearr_29180_29203 = state_29167__$1;
(statearr_29180_29203[(2)] = inst_29161);

(statearr_29180_29203[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (10))){
var inst_29159 = (state_29167[(2)]);
var state_29167__$1 = state_29167;
var statearr_29181_29204 = state_29167__$1;
(statearr_29181_29204[(2)] = inst_29159);

(statearr_29181_29204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (8))){
var inst_29147 = (state_29167[(7)]);
var inst_29146 = (state_29167[(8)]);
var inst_29148 = (state_29167[(9)]);
var inst_29137 = (state_29167[(10)]);
var inst_29151 = (function (){var cs = inst_29137;
var vec__29142 = inst_29146;
var v = inst_29147;
var c = inst_29148;
return ((function (cs,vec__29142,v,c,inst_29147,inst_29146,inst_29148,inst_29137,state_val_29168,c__27044__auto___29195,out){
return (function (p1__29132_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29132_SHARP_);
});
;})(cs,vec__29142,v,c,inst_29147,inst_29146,inst_29148,inst_29137,state_val_29168,c__27044__auto___29195,out))
})();
var inst_29152 = cljs.core.filterv.call(null,inst_29151,inst_29137);
var inst_29137__$1 = inst_29152;
var state_29167__$1 = (function (){var statearr_29182 = state_29167;
(statearr_29182[(10)] = inst_29137__$1);

return statearr_29182;
})();
var statearr_29183_29205 = state_29167__$1;
(statearr_29183_29205[(2)] = null);

(statearr_29183_29205[(1)] = (2));


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
});})(c__27044__auto___29195,out))
;
return ((function (switch__26932__auto__,c__27044__auto___29195,out){
return (function() {
var cljs$core$async$state_machine__26933__auto__ = null;
var cljs$core$async$state_machine__26933__auto____0 = (function (){
var statearr_29187 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29187[(0)] = cljs$core$async$state_machine__26933__auto__);

(statearr_29187[(1)] = (1));

return statearr_29187;
});
var cljs$core$async$state_machine__26933__auto____1 = (function (state_29167){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_29167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e29188){if((e29188 instanceof Object)){
var ex__26936__auto__ = e29188;
var statearr_29189_29206 = state_29167;
(statearr_29189_29206[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29207 = state_29167;
state_29167 = G__29207;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$state_machine__26933__auto__ = function(state_29167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26933__auto____1.call(this,state_29167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26933__auto____0;
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26933__auto____1;
return cljs$core$async$state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto___29195,out))
})();
var state__27046__auto__ = (function (){var statearr_29190 = f__27045__auto__.call(null);
(statearr_29190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto___29195);

return statearr_29190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto___29195,out))
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
var args29208 = [];
var len__25947__auto___29257 = arguments.length;
var i__25948__auto___29258 = (0);
while(true){
if((i__25948__auto___29258 < len__25947__auto___29257)){
args29208.push((arguments[i__25948__auto___29258]));

var G__29259 = (i__25948__auto___29258 + (1));
i__25948__auto___29258 = G__29259;
continue;
} else {
}
break;
}

var G__29210 = args29208.length;
switch (G__29210) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29208.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27044__auto___29261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto___29261,out){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto___29261,out){
return (function (state_29234){
var state_val_29235 = (state_29234[(1)]);
if((state_val_29235 === (7))){
var inst_29216 = (state_29234[(7)]);
var inst_29216__$1 = (state_29234[(2)]);
var inst_29217 = (inst_29216__$1 == null);
var inst_29218 = cljs.core.not.call(null,inst_29217);
var state_29234__$1 = (function (){var statearr_29236 = state_29234;
(statearr_29236[(7)] = inst_29216__$1);

return statearr_29236;
})();
if(inst_29218){
var statearr_29237_29262 = state_29234__$1;
(statearr_29237_29262[(1)] = (8));

} else {
var statearr_29238_29263 = state_29234__$1;
(statearr_29238_29263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (1))){
var inst_29211 = (0);
var state_29234__$1 = (function (){var statearr_29239 = state_29234;
(statearr_29239[(8)] = inst_29211);

return statearr_29239;
})();
var statearr_29240_29264 = state_29234__$1;
(statearr_29240_29264[(2)] = null);

(statearr_29240_29264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (4))){
var state_29234__$1 = state_29234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29234__$1,(7),ch);
} else {
if((state_val_29235 === (6))){
var inst_29229 = (state_29234[(2)]);
var state_29234__$1 = state_29234;
var statearr_29241_29265 = state_29234__$1;
(statearr_29241_29265[(2)] = inst_29229);

(statearr_29241_29265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (3))){
var inst_29231 = (state_29234[(2)]);
var inst_29232 = cljs.core.async.close_BANG_.call(null,out);
var state_29234__$1 = (function (){var statearr_29242 = state_29234;
(statearr_29242[(9)] = inst_29231);

return statearr_29242;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29234__$1,inst_29232);
} else {
if((state_val_29235 === (2))){
var inst_29211 = (state_29234[(8)]);
var inst_29213 = (inst_29211 < n);
var state_29234__$1 = state_29234;
if(cljs.core.truth_(inst_29213)){
var statearr_29243_29266 = state_29234__$1;
(statearr_29243_29266[(1)] = (4));

} else {
var statearr_29244_29267 = state_29234__$1;
(statearr_29244_29267[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (11))){
var inst_29211 = (state_29234[(8)]);
var inst_29221 = (state_29234[(2)]);
var inst_29222 = (inst_29211 + (1));
var inst_29211__$1 = inst_29222;
var state_29234__$1 = (function (){var statearr_29245 = state_29234;
(statearr_29245[(10)] = inst_29221);

(statearr_29245[(8)] = inst_29211__$1);

return statearr_29245;
})();
var statearr_29246_29268 = state_29234__$1;
(statearr_29246_29268[(2)] = null);

(statearr_29246_29268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (9))){
var state_29234__$1 = state_29234;
var statearr_29247_29269 = state_29234__$1;
(statearr_29247_29269[(2)] = null);

(statearr_29247_29269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (5))){
var state_29234__$1 = state_29234;
var statearr_29248_29270 = state_29234__$1;
(statearr_29248_29270[(2)] = null);

(statearr_29248_29270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (10))){
var inst_29226 = (state_29234[(2)]);
var state_29234__$1 = state_29234;
var statearr_29249_29271 = state_29234__$1;
(statearr_29249_29271[(2)] = inst_29226);

(statearr_29249_29271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (8))){
var inst_29216 = (state_29234[(7)]);
var state_29234__$1 = state_29234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29234__$1,(11),out,inst_29216);
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
});})(c__27044__auto___29261,out))
;
return ((function (switch__26932__auto__,c__27044__auto___29261,out){
return (function() {
var cljs$core$async$state_machine__26933__auto__ = null;
var cljs$core$async$state_machine__26933__auto____0 = (function (){
var statearr_29253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29253[(0)] = cljs$core$async$state_machine__26933__auto__);

(statearr_29253[(1)] = (1));

return statearr_29253;
});
var cljs$core$async$state_machine__26933__auto____1 = (function (state_29234){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_29234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e29254){if((e29254 instanceof Object)){
var ex__26936__auto__ = e29254;
var statearr_29255_29272 = state_29234;
(statearr_29255_29272[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29273 = state_29234;
state_29234 = G__29273;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$state_machine__26933__auto__ = function(state_29234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26933__auto____1.call(this,state_29234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26933__auto____0;
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26933__auto____1;
return cljs$core$async$state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto___29261,out))
})();
var state__27046__auto__ = (function (){var statearr_29256 = f__27045__auto__.call(null);
(statearr_29256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto___29261);

return statearr_29256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto___29261,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29281 = (function (map_LT_,f,ch,meta29282){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29282 = meta29282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29283,meta29282__$1){
var self__ = this;
var _29283__$1 = this;
return (new cljs.core.async.t_cljs$core$async29281(self__.map_LT_,self__.f,self__.ch,meta29282__$1));
});

cljs.core.async.t_cljs$core$async29281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29283){
var self__ = this;
var _29283__$1 = this;
return self__.meta29282;
});

cljs.core.async.t_cljs$core$async29281.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29281.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29281.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29281.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29281.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29284 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29284 = (function (map_LT_,f,ch,meta29282,_,fn1,meta29285){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29282 = meta29282;
this._ = _;
this.fn1 = fn1;
this.meta29285 = meta29285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29286,meta29285__$1){
var self__ = this;
var _29286__$1 = this;
return (new cljs.core.async.t_cljs$core$async29284(self__.map_LT_,self__.f,self__.ch,self__.meta29282,self__._,self__.fn1,meta29285__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29286){
var self__ = this;
var _29286__$1 = this;
return self__.meta29285;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29284.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29284.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29284.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29284.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29274_SHARP_){
return f1.call(null,(((p1__29274_SHARP_ == null))?null:self__.f.call(null,p1__29274_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29284.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29282","meta29282",-106263492,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29281","cljs.core.async/t_cljs$core$async29281",1089686578,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29285","meta29285",-418792060,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29284.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29284";

cljs.core.async.t_cljs$core$async29284.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async29284");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29284 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29284(map_LT___$1,f__$1,ch__$1,meta29282__$1,___$2,fn1__$1,meta29285){
return (new cljs.core.async.t_cljs$core$async29284(map_LT___$1,f__$1,ch__$1,meta29282__$1,___$2,fn1__$1,meta29285));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29284(self__.map_LT_,self__.f,self__.ch,self__.meta29282,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29281.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29281.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29282","meta29282",-106263492,null)], null);
});

cljs.core.async.t_cljs$core$async29281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29281";

cljs.core.async.t_cljs$core$async29281.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async29281");
});

cljs.core.async.__GT_t_cljs$core$async29281 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29281(map_LT___$1,f__$1,ch__$1,meta29282){
return (new cljs.core.async.t_cljs$core$async29281(map_LT___$1,f__$1,ch__$1,meta29282));
});

}

return (new cljs.core.async.t_cljs$core$async29281(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29290 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29290 = (function (map_GT_,f,ch,meta29291){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29291 = meta29291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29292,meta29291__$1){
var self__ = this;
var _29292__$1 = this;
return (new cljs.core.async.t_cljs$core$async29290(self__.map_GT_,self__.f,self__.ch,meta29291__$1));
});

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29292){
var self__ = this;
var _29292__$1 = this;
return self__.meta29291;
});

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29291","meta29291",-1409481786,null)], null);
});

cljs.core.async.t_cljs$core$async29290.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29290";

cljs.core.async.t_cljs$core$async29290.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async29290");
});

cljs.core.async.__GT_t_cljs$core$async29290 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29290(map_GT___$1,f__$1,ch__$1,meta29291){
return (new cljs.core.async.t_cljs$core$async29290(map_GT___$1,f__$1,ch__$1,meta29291));
});

}

return (new cljs.core.async.t_cljs$core$async29290(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29296 = (function (filter_GT_,p,ch,meta29297){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29297 = meta29297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29298,meta29297__$1){
var self__ = this;
var _29298__$1 = this;
return (new cljs.core.async.t_cljs$core$async29296(self__.filter_GT_,self__.p,self__.ch,meta29297__$1));
});

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29298){
var self__ = this;
var _29298__$1 = this;
return self__.meta29297;
});

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29297","meta29297",-674787472,null)], null);
});

cljs.core.async.t_cljs$core$async29296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29296";

cljs.core.async.t_cljs$core$async29296.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async29296");
});

cljs.core.async.__GT_t_cljs$core$async29296 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29296(filter_GT___$1,p__$1,ch__$1,meta29297){
return (new cljs.core.async.t_cljs$core$async29296(filter_GT___$1,p__$1,ch__$1,meta29297));
});

}

return (new cljs.core.async.t_cljs$core$async29296(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29299 = [];
var len__25947__auto___29343 = arguments.length;
var i__25948__auto___29344 = (0);
while(true){
if((i__25948__auto___29344 < len__25947__auto___29343)){
args29299.push((arguments[i__25948__auto___29344]));

var G__29345 = (i__25948__auto___29344 + (1));
i__25948__auto___29344 = G__29345;
continue;
} else {
}
break;
}

var G__29301 = args29299.length;
switch (G__29301) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29299.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27044__auto___29347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto___29347,out){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto___29347,out){
return (function (state_29322){
var state_val_29323 = (state_29322[(1)]);
if((state_val_29323 === (7))){
var inst_29318 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29324_29348 = state_29322__$1;
(statearr_29324_29348[(2)] = inst_29318);

(statearr_29324_29348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (1))){
var state_29322__$1 = state_29322;
var statearr_29325_29349 = state_29322__$1;
(statearr_29325_29349[(2)] = null);

(statearr_29325_29349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (4))){
var inst_29304 = (state_29322[(7)]);
var inst_29304__$1 = (state_29322[(2)]);
var inst_29305 = (inst_29304__$1 == null);
var state_29322__$1 = (function (){var statearr_29326 = state_29322;
(statearr_29326[(7)] = inst_29304__$1);

return statearr_29326;
})();
if(cljs.core.truth_(inst_29305)){
var statearr_29327_29350 = state_29322__$1;
(statearr_29327_29350[(1)] = (5));

} else {
var statearr_29328_29351 = state_29322__$1;
(statearr_29328_29351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (6))){
var inst_29304 = (state_29322[(7)]);
var inst_29309 = p.call(null,inst_29304);
var state_29322__$1 = state_29322;
if(cljs.core.truth_(inst_29309)){
var statearr_29329_29352 = state_29322__$1;
(statearr_29329_29352[(1)] = (8));

} else {
var statearr_29330_29353 = state_29322__$1;
(statearr_29330_29353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (3))){
var inst_29320 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29322__$1,inst_29320);
} else {
if((state_val_29323 === (2))){
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29322__$1,(4),ch);
} else {
if((state_val_29323 === (11))){
var inst_29312 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29331_29354 = state_29322__$1;
(statearr_29331_29354[(2)] = inst_29312);

(statearr_29331_29354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (9))){
var state_29322__$1 = state_29322;
var statearr_29332_29355 = state_29322__$1;
(statearr_29332_29355[(2)] = null);

(statearr_29332_29355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (5))){
var inst_29307 = cljs.core.async.close_BANG_.call(null,out);
var state_29322__$1 = state_29322;
var statearr_29333_29356 = state_29322__$1;
(statearr_29333_29356[(2)] = inst_29307);

(statearr_29333_29356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (10))){
var inst_29315 = (state_29322[(2)]);
var state_29322__$1 = (function (){var statearr_29334 = state_29322;
(statearr_29334[(8)] = inst_29315);

return statearr_29334;
})();
var statearr_29335_29357 = state_29322__$1;
(statearr_29335_29357[(2)] = null);

(statearr_29335_29357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (8))){
var inst_29304 = (state_29322[(7)]);
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29322__$1,(11),out,inst_29304);
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
});})(c__27044__auto___29347,out))
;
return ((function (switch__26932__auto__,c__27044__auto___29347,out){
return (function() {
var cljs$core$async$state_machine__26933__auto__ = null;
var cljs$core$async$state_machine__26933__auto____0 = (function (){
var statearr_29339 = [null,null,null,null,null,null,null,null,null];
(statearr_29339[(0)] = cljs$core$async$state_machine__26933__auto__);

(statearr_29339[(1)] = (1));

return statearr_29339;
});
var cljs$core$async$state_machine__26933__auto____1 = (function (state_29322){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_29322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e29340){if((e29340 instanceof Object)){
var ex__26936__auto__ = e29340;
var statearr_29341_29358 = state_29322;
(statearr_29341_29358[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29359 = state_29322;
state_29322 = G__29359;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$state_machine__26933__auto__ = function(state_29322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26933__auto____1.call(this,state_29322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26933__auto____0;
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26933__auto____1;
return cljs$core$async$state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto___29347,out))
})();
var state__27046__auto__ = (function (){var statearr_29342 = f__27045__auto__.call(null);
(statearr_29342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto___29347);

return statearr_29342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto___29347,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29360 = [];
var len__25947__auto___29363 = arguments.length;
var i__25948__auto___29364 = (0);
while(true){
if((i__25948__auto___29364 < len__25947__auto___29363)){
args29360.push((arguments[i__25948__auto___29364]));

var G__29365 = (i__25948__auto___29364 + (1));
i__25948__auto___29364 = G__29365;
continue;
} else {
}
break;
}

var G__29362 = args29360.length;
switch (G__29362) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29360.length)].join('')));

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
var c__27044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto__){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto__){
return (function (state_29532){
var state_val_29533 = (state_29532[(1)]);
if((state_val_29533 === (7))){
var inst_29528 = (state_29532[(2)]);
var state_29532__$1 = state_29532;
var statearr_29534_29575 = state_29532__$1;
(statearr_29534_29575[(2)] = inst_29528);

(statearr_29534_29575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (20))){
var inst_29498 = (state_29532[(7)]);
var inst_29509 = (state_29532[(2)]);
var inst_29510 = cljs.core.next.call(null,inst_29498);
var inst_29484 = inst_29510;
var inst_29485 = null;
var inst_29486 = (0);
var inst_29487 = (0);
var state_29532__$1 = (function (){var statearr_29535 = state_29532;
(statearr_29535[(8)] = inst_29486);

(statearr_29535[(9)] = inst_29484);

(statearr_29535[(10)] = inst_29487);

(statearr_29535[(11)] = inst_29485);

(statearr_29535[(12)] = inst_29509);

return statearr_29535;
})();
var statearr_29536_29576 = state_29532__$1;
(statearr_29536_29576[(2)] = null);

(statearr_29536_29576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (1))){
var state_29532__$1 = state_29532;
var statearr_29537_29577 = state_29532__$1;
(statearr_29537_29577[(2)] = null);

(statearr_29537_29577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (4))){
var inst_29473 = (state_29532[(13)]);
var inst_29473__$1 = (state_29532[(2)]);
var inst_29474 = (inst_29473__$1 == null);
var state_29532__$1 = (function (){var statearr_29538 = state_29532;
(statearr_29538[(13)] = inst_29473__$1);

return statearr_29538;
})();
if(cljs.core.truth_(inst_29474)){
var statearr_29539_29578 = state_29532__$1;
(statearr_29539_29578[(1)] = (5));

} else {
var statearr_29540_29579 = state_29532__$1;
(statearr_29540_29579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (15))){
var state_29532__$1 = state_29532;
var statearr_29544_29580 = state_29532__$1;
(statearr_29544_29580[(2)] = null);

(statearr_29544_29580[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (21))){
var state_29532__$1 = state_29532;
var statearr_29545_29581 = state_29532__$1;
(statearr_29545_29581[(2)] = null);

(statearr_29545_29581[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (13))){
var inst_29486 = (state_29532[(8)]);
var inst_29484 = (state_29532[(9)]);
var inst_29487 = (state_29532[(10)]);
var inst_29485 = (state_29532[(11)]);
var inst_29494 = (state_29532[(2)]);
var inst_29495 = (inst_29487 + (1));
var tmp29541 = inst_29486;
var tmp29542 = inst_29484;
var tmp29543 = inst_29485;
var inst_29484__$1 = tmp29542;
var inst_29485__$1 = tmp29543;
var inst_29486__$1 = tmp29541;
var inst_29487__$1 = inst_29495;
var state_29532__$1 = (function (){var statearr_29546 = state_29532;
(statearr_29546[(8)] = inst_29486__$1);

(statearr_29546[(9)] = inst_29484__$1);

(statearr_29546[(10)] = inst_29487__$1);

(statearr_29546[(11)] = inst_29485__$1);

(statearr_29546[(14)] = inst_29494);

return statearr_29546;
})();
var statearr_29547_29582 = state_29532__$1;
(statearr_29547_29582[(2)] = null);

(statearr_29547_29582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (22))){
var state_29532__$1 = state_29532;
var statearr_29548_29583 = state_29532__$1;
(statearr_29548_29583[(2)] = null);

(statearr_29548_29583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (6))){
var inst_29473 = (state_29532[(13)]);
var inst_29482 = f.call(null,inst_29473);
var inst_29483 = cljs.core.seq.call(null,inst_29482);
var inst_29484 = inst_29483;
var inst_29485 = null;
var inst_29486 = (0);
var inst_29487 = (0);
var state_29532__$1 = (function (){var statearr_29549 = state_29532;
(statearr_29549[(8)] = inst_29486);

(statearr_29549[(9)] = inst_29484);

(statearr_29549[(10)] = inst_29487);

(statearr_29549[(11)] = inst_29485);

return statearr_29549;
})();
var statearr_29550_29584 = state_29532__$1;
(statearr_29550_29584[(2)] = null);

(statearr_29550_29584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (17))){
var inst_29498 = (state_29532[(7)]);
var inst_29502 = cljs.core.chunk_first.call(null,inst_29498);
var inst_29503 = cljs.core.chunk_rest.call(null,inst_29498);
var inst_29504 = cljs.core.count.call(null,inst_29502);
var inst_29484 = inst_29503;
var inst_29485 = inst_29502;
var inst_29486 = inst_29504;
var inst_29487 = (0);
var state_29532__$1 = (function (){var statearr_29551 = state_29532;
(statearr_29551[(8)] = inst_29486);

(statearr_29551[(9)] = inst_29484);

(statearr_29551[(10)] = inst_29487);

(statearr_29551[(11)] = inst_29485);

return statearr_29551;
})();
var statearr_29552_29585 = state_29532__$1;
(statearr_29552_29585[(2)] = null);

(statearr_29552_29585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (3))){
var inst_29530 = (state_29532[(2)]);
var state_29532__$1 = state_29532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29532__$1,inst_29530);
} else {
if((state_val_29533 === (12))){
var inst_29518 = (state_29532[(2)]);
var state_29532__$1 = state_29532;
var statearr_29553_29586 = state_29532__$1;
(statearr_29553_29586[(2)] = inst_29518);

(statearr_29553_29586[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (2))){
var state_29532__$1 = state_29532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29532__$1,(4),in$);
} else {
if((state_val_29533 === (23))){
var inst_29526 = (state_29532[(2)]);
var state_29532__$1 = state_29532;
var statearr_29554_29587 = state_29532__$1;
(statearr_29554_29587[(2)] = inst_29526);

(statearr_29554_29587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (19))){
var inst_29513 = (state_29532[(2)]);
var state_29532__$1 = state_29532;
var statearr_29555_29588 = state_29532__$1;
(statearr_29555_29588[(2)] = inst_29513);

(statearr_29555_29588[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (11))){
var inst_29484 = (state_29532[(9)]);
var inst_29498 = (state_29532[(7)]);
var inst_29498__$1 = cljs.core.seq.call(null,inst_29484);
var state_29532__$1 = (function (){var statearr_29556 = state_29532;
(statearr_29556[(7)] = inst_29498__$1);

return statearr_29556;
})();
if(inst_29498__$1){
var statearr_29557_29589 = state_29532__$1;
(statearr_29557_29589[(1)] = (14));

} else {
var statearr_29558_29590 = state_29532__$1;
(statearr_29558_29590[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (9))){
var inst_29520 = (state_29532[(2)]);
var inst_29521 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29532__$1 = (function (){var statearr_29559 = state_29532;
(statearr_29559[(15)] = inst_29520);

return statearr_29559;
})();
if(cljs.core.truth_(inst_29521)){
var statearr_29560_29591 = state_29532__$1;
(statearr_29560_29591[(1)] = (21));

} else {
var statearr_29561_29592 = state_29532__$1;
(statearr_29561_29592[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (5))){
var inst_29476 = cljs.core.async.close_BANG_.call(null,out);
var state_29532__$1 = state_29532;
var statearr_29562_29593 = state_29532__$1;
(statearr_29562_29593[(2)] = inst_29476);

(statearr_29562_29593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (14))){
var inst_29498 = (state_29532[(7)]);
var inst_29500 = cljs.core.chunked_seq_QMARK_.call(null,inst_29498);
var state_29532__$1 = state_29532;
if(inst_29500){
var statearr_29563_29594 = state_29532__$1;
(statearr_29563_29594[(1)] = (17));

} else {
var statearr_29564_29595 = state_29532__$1;
(statearr_29564_29595[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (16))){
var inst_29516 = (state_29532[(2)]);
var state_29532__$1 = state_29532;
var statearr_29565_29596 = state_29532__$1;
(statearr_29565_29596[(2)] = inst_29516);

(statearr_29565_29596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (10))){
var inst_29487 = (state_29532[(10)]);
var inst_29485 = (state_29532[(11)]);
var inst_29492 = cljs.core._nth.call(null,inst_29485,inst_29487);
var state_29532__$1 = state_29532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29532__$1,(13),out,inst_29492);
} else {
if((state_val_29533 === (18))){
var inst_29498 = (state_29532[(7)]);
var inst_29507 = cljs.core.first.call(null,inst_29498);
var state_29532__$1 = state_29532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29532__$1,(20),out,inst_29507);
} else {
if((state_val_29533 === (8))){
var inst_29486 = (state_29532[(8)]);
var inst_29487 = (state_29532[(10)]);
var inst_29489 = (inst_29487 < inst_29486);
var inst_29490 = inst_29489;
var state_29532__$1 = state_29532;
if(cljs.core.truth_(inst_29490)){
var statearr_29566_29597 = state_29532__$1;
(statearr_29566_29597[(1)] = (10));

} else {
var statearr_29567_29598 = state_29532__$1;
(statearr_29567_29598[(1)] = (11));

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
});})(c__27044__auto__))
;
return ((function (switch__26932__auto__,c__27044__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26933__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26933__auto____0 = (function (){
var statearr_29571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29571[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26933__auto__);

(statearr_29571[(1)] = (1));

return statearr_29571;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26933__auto____1 = (function (state_29532){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_29532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e29572){if((e29572 instanceof Object)){
var ex__26936__auto__ = e29572;
var statearr_29573_29599 = state_29532;
(statearr_29573_29599[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29600 = state_29532;
state_29532 = G__29600;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26933__auto__ = function(state_29532){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26933__auto____1.call(this,state_29532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26933__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26933__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto__))
})();
var state__27046__auto__ = (function (){var statearr_29574 = f__27045__auto__.call(null);
(statearr_29574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto__);

return statearr_29574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto__))
);

return c__27044__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29601 = [];
var len__25947__auto___29604 = arguments.length;
var i__25948__auto___29605 = (0);
while(true){
if((i__25948__auto___29605 < len__25947__auto___29604)){
args29601.push((arguments[i__25948__auto___29605]));

var G__29606 = (i__25948__auto___29605 + (1));
i__25948__auto___29605 = G__29606;
continue;
} else {
}
break;
}

var G__29603 = args29601.length;
switch (G__29603) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29601.length)].join('')));

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
var args29608 = [];
var len__25947__auto___29611 = arguments.length;
var i__25948__auto___29612 = (0);
while(true){
if((i__25948__auto___29612 < len__25947__auto___29611)){
args29608.push((arguments[i__25948__auto___29612]));

var G__29613 = (i__25948__auto___29612 + (1));
i__25948__auto___29612 = G__29613;
continue;
} else {
}
break;
}

var G__29610 = args29608.length;
switch (G__29610) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29608.length)].join('')));

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
var args29615 = [];
var len__25947__auto___29666 = arguments.length;
var i__25948__auto___29667 = (0);
while(true){
if((i__25948__auto___29667 < len__25947__auto___29666)){
args29615.push((arguments[i__25948__auto___29667]));

var G__29668 = (i__25948__auto___29667 + (1));
i__25948__auto___29667 = G__29668;
continue;
} else {
}
break;
}

var G__29617 = args29615.length;
switch (G__29617) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29615.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27044__auto___29670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto___29670,out){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto___29670,out){
return (function (state_29641){
var state_val_29642 = (state_29641[(1)]);
if((state_val_29642 === (7))){
var inst_29636 = (state_29641[(2)]);
var state_29641__$1 = state_29641;
var statearr_29643_29671 = state_29641__$1;
(statearr_29643_29671[(2)] = inst_29636);

(statearr_29643_29671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (1))){
var inst_29618 = null;
var state_29641__$1 = (function (){var statearr_29644 = state_29641;
(statearr_29644[(7)] = inst_29618);

return statearr_29644;
})();
var statearr_29645_29672 = state_29641__$1;
(statearr_29645_29672[(2)] = null);

(statearr_29645_29672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (4))){
var inst_29621 = (state_29641[(8)]);
var inst_29621__$1 = (state_29641[(2)]);
var inst_29622 = (inst_29621__$1 == null);
var inst_29623 = cljs.core.not.call(null,inst_29622);
var state_29641__$1 = (function (){var statearr_29646 = state_29641;
(statearr_29646[(8)] = inst_29621__$1);

return statearr_29646;
})();
if(inst_29623){
var statearr_29647_29673 = state_29641__$1;
(statearr_29647_29673[(1)] = (5));

} else {
var statearr_29648_29674 = state_29641__$1;
(statearr_29648_29674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (6))){
var state_29641__$1 = state_29641;
var statearr_29649_29675 = state_29641__$1;
(statearr_29649_29675[(2)] = null);

(statearr_29649_29675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (3))){
var inst_29638 = (state_29641[(2)]);
var inst_29639 = cljs.core.async.close_BANG_.call(null,out);
var state_29641__$1 = (function (){var statearr_29650 = state_29641;
(statearr_29650[(9)] = inst_29638);

return statearr_29650;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29641__$1,inst_29639);
} else {
if((state_val_29642 === (2))){
var state_29641__$1 = state_29641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29641__$1,(4),ch);
} else {
if((state_val_29642 === (11))){
var inst_29621 = (state_29641[(8)]);
var inst_29630 = (state_29641[(2)]);
var inst_29618 = inst_29621;
var state_29641__$1 = (function (){var statearr_29651 = state_29641;
(statearr_29651[(10)] = inst_29630);

(statearr_29651[(7)] = inst_29618);

return statearr_29651;
})();
var statearr_29652_29676 = state_29641__$1;
(statearr_29652_29676[(2)] = null);

(statearr_29652_29676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (9))){
var inst_29621 = (state_29641[(8)]);
var state_29641__$1 = state_29641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29641__$1,(11),out,inst_29621);
} else {
if((state_val_29642 === (5))){
var inst_29618 = (state_29641[(7)]);
var inst_29621 = (state_29641[(8)]);
var inst_29625 = cljs.core._EQ_.call(null,inst_29621,inst_29618);
var state_29641__$1 = state_29641;
if(inst_29625){
var statearr_29654_29677 = state_29641__$1;
(statearr_29654_29677[(1)] = (8));

} else {
var statearr_29655_29678 = state_29641__$1;
(statearr_29655_29678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (10))){
var inst_29633 = (state_29641[(2)]);
var state_29641__$1 = state_29641;
var statearr_29656_29679 = state_29641__$1;
(statearr_29656_29679[(2)] = inst_29633);

(statearr_29656_29679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (8))){
var inst_29618 = (state_29641[(7)]);
var tmp29653 = inst_29618;
var inst_29618__$1 = tmp29653;
var state_29641__$1 = (function (){var statearr_29657 = state_29641;
(statearr_29657[(7)] = inst_29618__$1);

return statearr_29657;
})();
var statearr_29658_29680 = state_29641__$1;
(statearr_29658_29680[(2)] = null);

(statearr_29658_29680[(1)] = (2));


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
});})(c__27044__auto___29670,out))
;
return ((function (switch__26932__auto__,c__27044__auto___29670,out){
return (function() {
var cljs$core$async$state_machine__26933__auto__ = null;
var cljs$core$async$state_machine__26933__auto____0 = (function (){
var statearr_29662 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29662[(0)] = cljs$core$async$state_machine__26933__auto__);

(statearr_29662[(1)] = (1));

return statearr_29662;
});
var cljs$core$async$state_machine__26933__auto____1 = (function (state_29641){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_29641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e29663){if((e29663 instanceof Object)){
var ex__26936__auto__ = e29663;
var statearr_29664_29681 = state_29641;
(statearr_29664_29681[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29682 = state_29641;
state_29641 = G__29682;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$state_machine__26933__auto__ = function(state_29641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26933__auto____1.call(this,state_29641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26933__auto____0;
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26933__auto____1;
return cljs$core$async$state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto___29670,out))
})();
var state__27046__auto__ = (function (){var statearr_29665 = f__27045__auto__.call(null);
(statearr_29665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto___29670);

return statearr_29665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto___29670,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29683 = [];
var len__25947__auto___29753 = arguments.length;
var i__25948__auto___29754 = (0);
while(true){
if((i__25948__auto___29754 < len__25947__auto___29753)){
args29683.push((arguments[i__25948__auto___29754]));

var G__29755 = (i__25948__auto___29754 + (1));
i__25948__auto___29754 = G__29755;
continue;
} else {
}
break;
}

var G__29685 = args29683.length;
switch (G__29685) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29683.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27044__auto___29757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto___29757,out){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto___29757,out){
return (function (state_29723){
var state_val_29724 = (state_29723[(1)]);
if((state_val_29724 === (7))){
var inst_29719 = (state_29723[(2)]);
var state_29723__$1 = state_29723;
var statearr_29725_29758 = state_29723__$1;
(statearr_29725_29758[(2)] = inst_29719);

(statearr_29725_29758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (1))){
var inst_29686 = (new Array(n));
var inst_29687 = inst_29686;
var inst_29688 = (0);
var state_29723__$1 = (function (){var statearr_29726 = state_29723;
(statearr_29726[(7)] = inst_29687);

(statearr_29726[(8)] = inst_29688);

return statearr_29726;
})();
var statearr_29727_29759 = state_29723__$1;
(statearr_29727_29759[(2)] = null);

(statearr_29727_29759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (4))){
var inst_29691 = (state_29723[(9)]);
var inst_29691__$1 = (state_29723[(2)]);
var inst_29692 = (inst_29691__$1 == null);
var inst_29693 = cljs.core.not.call(null,inst_29692);
var state_29723__$1 = (function (){var statearr_29728 = state_29723;
(statearr_29728[(9)] = inst_29691__$1);

return statearr_29728;
})();
if(inst_29693){
var statearr_29729_29760 = state_29723__$1;
(statearr_29729_29760[(1)] = (5));

} else {
var statearr_29730_29761 = state_29723__$1;
(statearr_29730_29761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (15))){
var inst_29713 = (state_29723[(2)]);
var state_29723__$1 = state_29723;
var statearr_29731_29762 = state_29723__$1;
(statearr_29731_29762[(2)] = inst_29713);

(statearr_29731_29762[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (13))){
var state_29723__$1 = state_29723;
var statearr_29732_29763 = state_29723__$1;
(statearr_29732_29763[(2)] = null);

(statearr_29732_29763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (6))){
var inst_29688 = (state_29723[(8)]);
var inst_29709 = (inst_29688 > (0));
var state_29723__$1 = state_29723;
if(cljs.core.truth_(inst_29709)){
var statearr_29733_29764 = state_29723__$1;
(statearr_29733_29764[(1)] = (12));

} else {
var statearr_29734_29765 = state_29723__$1;
(statearr_29734_29765[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (3))){
var inst_29721 = (state_29723[(2)]);
var state_29723__$1 = state_29723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29723__$1,inst_29721);
} else {
if((state_val_29724 === (12))){
var inst_29687 = (state_29723[(7)]);
var inst_29711 = cljs.core.vec.call(null,inst_29687);
var state_29723__$1 = state_29723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29723__$1,(15),out,inst_29711);
} else {
if((state_val_29724 === (2))){
var state_29723__$1 = state_29723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29723__$1,(4),ch);
} else {
if((state_val_29724 === (11))){
var inst_29703 = (state_29723[(2)]);
var inst_29704 = (new Array(n));
var inst_29687 = inst_29704;
var inst_29688 = (0);
var state_29723__$1 = (function (){var statearr_29735 = state_29723;
(statearr_29735[(7)] = inst_29687);

(statearr_29735[(10)] = inst_29703);

(statearr_29735[(8)] = inst_29688);

return statearr_29735;
})();
var statearr_29736_29766 = state_29723__$1;
(statearr_29736_29766[(2)] = null);

(statearr_29736_29766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (9))){
var inst_29687 = (state_29723[(7)]);
var inst_29701 = cljs.core.vec.call(null,inst_29687);
var state_29723__$1 = state_29723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29723__$1,(11),out,inst_29701);
} else {
if((state_val_29724 === (5))){
var inst_29687 = (state_29723[(7)]);
var inst_29696 = (state_29723[(11)]);
var inst_29688 = (state_29723[(8)]);
var inst_29691 = (state_29723[(9)]);
var inst_29695 = (inst_29687[inst_29688] = inst_29691);
var inst_29696__$1 = (inst_29688 + (1));
var inst_29697 = (inst_29696__$1 < n);
var state_29723__$1 = (function (){var statearr_29737 = state_29723;
(statearr_29737[(11)] = inst_29696__$1);

(statearr_29737[(12)] = inst_29695);

return statearr_29737;
})();
if(cljs.core.truth_(inst_29697)){
var statearr_29738_29767 = state_29723__$1;
(statearr_29738_29767[(1)] = (8));

} else {
var statearr_29739_29768 = state_29723__$1;
(statearr_29739_29768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (14))){
var inst_29716 = (state_29723[(2)]);
var inst_29717 = cljs.core.async.close_BANG_.call(null,out);
var state_29723__$1 = (function (){var statearr_29741 = state_29723;
(statearr_29741[(13)] = inst_29716);

return statearr_29741;
})();
var statearr_29742_29769 = state_29723__$1;
(statearr_29742_29769[(2)] = inst_29717);

(statearr_29742_29769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (10))){
var inst_29707 = (state_29723[(2)]);
var state_29723__$1 = state_29723;
var statearr_29743_29770 = state_29723__$1;
(statearr_29743_29770[(2)] = inst_29707);

(statearr_29743_29770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (8))){
var inst_29687 = (state_29723[(7)]);
var inst_29696 = (state_29723[(11)]);
var tmp29740 = inst_29687;
var inst_29687__$1 = tmp29740;
var inst_29688 = inst_29696;
var state_29723__$1 = (function (){var statearr_29744 = state_29723;
(statearr_29744[(7)] = inst_29687__$1);

(statearr_29744[(8)] = inst_29688);

return statearr_29744;
})();
var statearr_29745_29771 = state_29723__$1;
(statearr_29745_29771[(2)] = null);

(statearr_29745_29771[(1)] = (2));


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
});})(c__27044__auto___29757,out))
;
return ((function (switch__26932__auto__,c__27044__auto___29757,out){
return (function() {
var cljs$core$async$state_machine__26933__auto__ = null;
var cljs$core$async$state_machine__26933__auto____0 = (function (){
var statearr_29749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29749[(0)] = cljs$core$async$state_machine__26933__auto__);

(statearr_29749[(1)] = (1));

return statearr_29749;
});
var cljs$core$async$state_machine__26933__auto____1 = (function (state_29723){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_29723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e29750){if((e29750 instanceof Object)){
var ex__26936__auto__ = e29750;
var statearr_29751_29772 = state_29723;
(statearr_29751_29772[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29773 = state_29723;
state_29723 = G__29773;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$state_machine__26933__auto__ = function(state_29723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26933__auto____1.call(this,state_29723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26933__auto____0;
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26933__auto____1;
return cljs$core$async$state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto___29757,out))
})();
var state__27046__auto__ = (function (){var statearr_29752 = f__27045__auto__.call(null);
(statearr_29752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto___29757);

return statearr_29752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto___29757,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29774 = [];
var len__25947__auto___29848 = arguments.length;
var i__25948__auto___29849 = (0);
while(true){
if((i__25948__auto___29849 < len__25947__auto___29848)){
args29774.push((arguments[i__25948__auto___29849]));

var G__29850 = (i__25948__auto___29849 + (1));
i__25948__auto___29849 = G__29850;
continue;
} else {
}
break;
}

var G__29776 = args29774.length;
switch (G__29776) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29774.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27044__auto___29852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27044__auto___29852,out){
return (function (){
var f__27045__auto__ = (function (){var switch__26932__auto__ = ((function (c__27044__auto___29852,out){
return (function (state_29818){
var state_val_29819 = (state_29818[(1)]);
if((state_val_29819 === (7))){
var inst_29814 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
var statearr_29820_29853 = state_29818__$1;
(statearr_29820_29853[(2)] = inst_29814);

(statearr_29820_29853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (1))){
var inst_29777 = [];
var inst_29778 = inst_29777;
var inst_29779 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29818__$1 = (function (){var statearr_29821 = state_29818;
(statearr_29821[(7)] = inst_29779);

(statearr_29821[(8)] = inst_29778);

return statearr_29821;
})();
var statearr_29822_29854 = state_29818__$1;
(statearr_29822_29854[(2)] = null);

(statearr_29822_29854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (4))){
var inst_29782 = (state_29818[(9)]);
var inst_29782__$1 = (state_29818[(2)]);
var inst_29783 = (inst_29782__$1 == null);
var inst_29784 = cljs.core.not.call(null,inst_29783);
var state_29818__$1 = (function (){var statearr_29823 = state_29818;
(statearr_29823[(9)] = inst_29782__$1);

return statearr_29823;
})();
if(inst_29784){
var statearr_29824_29855 = state_29818__$1;
(statearr_29824_29855[(1)] = (5));

} else {
var statearr_29825_29856 = state_29818__$1;
(statearr_29825_29856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (15))){
var inst_29808 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
var statearr_29826_29857 = state_29818__$1;
(statearr_29826_29857[(2)] = inst_29808);

(statearr_29826_29857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (13))){
var state_29818__$1 = state_29818;
var statearr_29827_29858 = state_29818__$1;
(statearr_29827_29858[(2)] = null);

(statearr_29827_29858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (6))){
var inst_29778 = (state_29818[(8)]);
var inst_29803 = inst_29778.length;
var inst_29804 = (inst_29803 > (0));
var state_29818__$1 = state_29818;
if(cljs.core.truth_(inst_29804)){
var statearr_29828_29859 = state_29818__$1;
(statearr_29828_29859[(1)] = (12));

} else {
var statearr_29829_29860 = state_29818__$1;
(statearr_29829_29860[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (3))){
var inst_29816 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29818__$1,inst_29816);
} else {
if((state_val_29819 === (12))){
var inst_29778 = (state_29818[(8)]);
var inst_29806 = cljs.core.vec.call(null,inst_29778);
var state_29818__$1 = state_29818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29818__$1,(15),out,inst_29806);
} else {
if((state_val_29819 === (2))){
var state_29818__$1 = state_29818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29818__$1,(4),ch);
} else {
if((state_val_29819 === (11))){
var inst_29782 = (state_29818[(9)]);
var inst_29786 = (state_29818[(10)]);
var inst_29796 = (state_29818[(2)]);
var inst_29797 = [];
var inst_29798 = inst_29797.push(inst_29782);
var inst_29778 = inst_29797;
var inst_29779 = inst_29786;
var state_29818__$1 = (function (){var statearr_29830 = state_29818;
(statearr_29830[(7)] = inst_29779);

(statearr_29830[(11)] = inst_29796);

(statearr_29830[(8)] = inst_29778);

(statearr_29830[(12)] = inst_29798);

return statearr_29830;
})();
var statearr_29831_29861 = state_29818__$1;
(statearr_29831_29861[(2)] = null);

(statearr_29831_29861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (9))){
var inst_29778 = (state_29818[(8)]);
var inst_29794 = cljs.core.vec.call(null,inst_29778);
var state_29818__$1 = state_29818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29818__$1,(11),out,inst_29794);
} else {
if((state_val_29819 === (5))){
var inst_29779 = (state_29818[(7)]);
var inst_29782 = (state_29818[(9)]);
var inst_29786 = (state_29818[(10)]);
var inst_29786__$1 = f.call(null,inst_29782);
var inst_29787 = cljs.core._EQ_.call(null,inst_29786__$1,inst_29779);
var inst_29788 = cljs.core.keyword_identical_QMARK_.call(null,inst_29779,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29789 = (inst_29787) || (inst_29788);
var state_29818__$1 = (function (){var statearr_29832 = state_29818;
(statearr_29832[(10)] = inst_29786__$1);

return statearr_29832;
})();
if(cljs.core.truth_(inst_29789)){
var statearr_29833_29862 = state_29818__$1;
(statearr_29833_29862[(1)] = (8));

} else {
var statearr_29834_29863 = state_29818__$1;
(statearr_29834_29863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (14))){
var inst_29811 = (state_29818[(2)]);
var inst_29812 = cljs.core.async.close_BANG_.call(null,out);
var state_29818__$1 = (function (){var statearr_29836 = state_29818;
(statearr_29836[(13)] = inst_29811);

return statearr_29836;
})();
var statearr_29837_29864 = state_29818__$1;
(statearr_29837_29864[(2)] = inst_29812);

(statearr_29837_29864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (10))){
var inst_29801 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
var statearr_29838_29865 = state_29818__$1;
(statearr_29838_29865[(2)] = inst_29801);

(statearr_29838_29865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (8))){
var inst_29782 = (state_29818[(9)]);
var inst_29778 = (state_29818[(8)]);
var inst_29786 = (state_29818[(10)]);
var inst_29791 = inst_29778.push(inst_29782);
var tmp29835 = inst_29778;
var inst_29778__$1 = tmp29835;
var inst_29779 = inst_29786;
var state_29818__$1 = (function (){var statearr_29839 = state_29818;
(statearr_29839[(7)] = inst_29779);

(statearr_29839[(8)] = inst_29778__$1);

(statearr_29839[(14)] = inst_29791);

return statearr_29839;
})();
var statearr_29840_29866 = state_29818__$1;
(statearr_29840_29866[(2)] = null);

(statearr_29840_29866[(1)] = (2));


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
});})(c__27044__auto___29852,out))
;
return ((function (switch__26932__auto__,c__27044__auto___29852,out){
return (function() {
var cljs$core$async$state_machine__26933__auto__ = null;
var cljs$core$async$state_machine__26933__auto____0 = (function (){
var statearr_29844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29844[(0)] = cljs$core$async$state_machine__26933__auto__);

(statearr_29844[(1)] = (1));

return statearr_29844;
});
var cljs$core$async$state_machine__26933__auto____1 = (function (state_29818){
while(true){
var ret_value__26934__auto__ = (function (){try{while(true){
var result__26935__auto__ = switch__26932__auto__.call(null,state_29818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26935__auto__;
}
break;
}
}catch (e29845){if((e29845 instanceof Object)){
var ex__26936__auto__ = e29845;
var statearr_29846_29867 = state_29818;
(statearr_29846_29867[(5)] = ex__26936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29868 = state_29818;
state_29818 = G__29868;
continue;
} else {
return ret_value__26934__auto__;
}
break;
}
});
cljs$core$async$state_machine__26933__auto__ = function(state_29818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26933__auto____1.call(this,state_29818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26933__auto____0;
cljs$core$async$state_machine__26933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26933__auto____1;
return cljs$core$async$state_machine__26933__auto__;
})()
;})(switch__26932__auto__,c__27044__auto___29852,out))
})();
var state__27046__auto__ = (function (){var statearr_29847 = f__27045__auto__.call(null);
(statearr_29847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27044__auto___29852);

return statearr_29847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27046__auto__);
});})(c__27044__auto___29852,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1486525844756