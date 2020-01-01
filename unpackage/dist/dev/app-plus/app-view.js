var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-3055d070'])
Z([3,'main data-v-3055d070'])
Z([3,'turntable data-v-3055d070'])
Z([3,'/static/turntable@2x.png'])
Z([[2,'+'],[1,'width:100%;height:100%;'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'transform: rotate('],[[7],[3,'deg']]],[1,'deg);  transition-duration: ']],[[7],[3,'ss']]],[1,'s ;']]])
Z([3,'__e'])
Z([3,'center-img data-v-3055d070'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'start']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'scaleToFill'])
Z([3,'/static/this@2x.png'])
Z([3,'width:157rpx;height:229rpx;'])
Z([3,'shadow data-v-3055d070'])
Z([3,'/static/img/tuoyuan@2x.png'])
Z([3,'width:460rpx;height:75rpx;'])
Z(z[5])
Z([[4],[[5],[[5],[1,'modal data-v-3055d070']],[[2,'?:'],[[7],[3,'modal']],[1,'show'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'closeModal']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[5])
Z([[4],[[5],[[5],[1,'modal-body data-v-3055d070']],[[2,'?:'],[[7],[3,'modal']],[1,'show'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'f-cc flex-column data-v-3055d070'])
Z([3,'margin-top:300rpx;'])
Z([[7],[3,'showTitle']])
Z([3,'txt1 data-v-3055d070'])
Z([3,'恭喜您获得'])
Z([3,'txt2 data-v-3055d070'])
Z([a,[[7],[3,'modalTxt']]])
Z(z[5])
Z([3,'close data-v-3055d070'])
Z(z[16])
Z([3,'../../static/home_gb@2x.png'])
Z([3,'width:48rpx;height:48rpx;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',1,e,s,gg)
var oD=_mz(z,'image',['class',2,'src',1,'style',2],[],e,s,gg)
_(xC,oD)
var fE=_mz(z,'image',['bindtap',5,'class',1,'data-event-opts',2,'mode',3,'src',4,'style',5],[],e,s,gg)
_(xC,fE)
var cF=_mz(z,'image',['class',11,'src',1,'style',2],[],e,s,gg)
_(xC,cF)
_(oB,xC)
var hG=_mz(z,'view',['bindtap',14,'class',1,'data-event-opts',2],[],e,s,gg)
var oH=_mz(z,'view',['catchtap',17,'class',1,'data-event-opts',2],[],e,s,gg)
var cI=_mz(z,'view',['class',20,'style',1],[],e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,22,e,s,gg)){oJ.wxVkey=1
var lK=_n('view')
_rz(z,lK,'class',23,e,s,gg)
var aL=_oz(z,24,e,s,gg)
_(lK,aL)
_(oJ,lK)
}
var tM=_n('view')
_rz(z,tM,'class',25,e,s,gg)
var eN=_oz(z,26,e,s,gg)
_(tM,eN)
_(cI,tM)
oJ.wxXCkey=1
_(oH,cI)
var bO=_mz(z,'image',['bindtap',27,'class',1,'data-event-opts',2,'src',3,'style',4],[],e,s,gg)
_(oH,bO)
_(hG,oH)
_(oB,hG)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead(["wx-page.",[1],"data-v-3055d070 { position: relative; width: 100%; min-height: 100%; }\n.",[1],"content.",[1],"data-v-3055d070 { box-sizing: border-box; width: 100%; height: 100vh; background-size: cover; overflow: hidden; padding-bottom: ",[0,90],"; background-color: pink; }\n.",[1],"content .",[1],"main.",[1],"data-v-3055d070 { position: relative; width: ",[0,624],"; height: ",[0,624],"; margin: ",[0,316]," auto ",[0,39],"; }\n.",[1],"content .",[1],"main .",[1],"turntable.",[1],"data-v-3055d070 { position: absolute; top: 0; right: 0; left: 0; bottom: 0; margin: auto; -webkit-transform: rotate(0deg); transform: rotate(0deg); z-index: 12; -webkit-transition-timing-function: ease; transition-timing-function: ease; -webkit-transition-property: all; transition-property: all; }\n.",[1],"content .",[1],"main .",[1],"center-img.",[1],"data-v-3055d070 { position: absolute; top: ",[0,181],"; right: 0; left: 0; margin: auto; z-index: 99; }\n.",[1],"content .",[1],"main .",[1],"shadow.",[1],"data-v-3055d070 { position: absolute; bottom: ",[0,-30],"; left: 0; right: 0; margin: auto; z-index: 1; }\n.",[1],"content .",[1],"h1.",[1],"data-v-3055d070 { font-size: ",[0,32],"; text-align: center; color: #fff; }\n.",[1],"content .",[1],"h2.",[1],"data-v-3055d070 { width: ",[0,450],"; font-size: ",[0,22],"; color: #fff; margin-bottom: ",[0,22],"; margin: auto; }\n.",[1],"content .",[1],"modal.",[1],"show.",[1],"data-v-3055d070 { display: block; }\n.",[1],"content .",[1],"modal.",[1],"data-v-3055d070 { position: fixed; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, 0.4); z-index: 100; display: none; }\n.",[1],"content .",[1],"modal .",[1],"modal-body.",[1],"show.",[1],"data-v-3055d070 { -webkit-animation: scaleFrames-data-v-3055d070 0.4s cubic-bezier(0.5, 0.49, 0.57, 1.41) forwards; animation: scaleFrames-data-v-3055d070 0.4s cubic-bezier(0.5, 0.49, 0.57, 1.41) forwards; }\n.",[1],"content .",[1],"modal .",[1],"modal-body.",[1],"data-v-3055d070 { position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; width: ",[0,544],"; height: ",[0,570],"; background-size: 100% 100%; background-image: url(data:image/png;base64,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); padding: ",[0,1],"; -webkit-transform: scale(0); transform: scale(0); }\n.",[1],"content .",[1],"modal .",[1],"modal-body .",[1],"txt1.",[1],"data-v-3055d070 { font-size: ",[0,60],"; font-family: Source Han Sans CN; font-weight: 500; color: white; line-height: ",[0,104],"; text-shadow: ",[0,0]," ",[0,-5]," ",[0,10]," rgba(253, 49, 58, 0.5); text-align: center; }\n.",[1],"content .",[1],"modal .",[1],"modal-body .",[1],"txt2.",[1],"data-v-3055d070 { font-size: ",[0,60],"; font-family: Source Han Sans CN; font-weight: 500; color: #ffea3a; line-height: ",[0,121],"; text-align: center; }\n.",[1],"content .",[1],"modal .",[1],"modal-body .",[1],"close.",[1],"data-v-3055d070 { position: absolute; left: 0; right: 0; bottom: ",[0,-68],"; margin: auto; }\n@-webkit-keyframes scaleFrames-data-v-3055d070 { from { -webkit-transform: scale(0); transform: scale(0); }\nto { -webkit-transform: scale(1); transform: scale(1); }\n}@keyframes scaleFrames-data-v-3055d070 { from { -webkit-transform: scale(0); transform: scale(0); }\nto { -webkit-transform: scale(1); transform: scale(1); }\n}@-webkit-keyframes rotateArc-data-v-3055d070 { from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\nto { -webkit-transform: rotate(3600deg); transform: rotate(3600deg); }\n}@keyframes rotateArc-data-v-3055d070 { from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\nto { -webkit-transform: rotate(3600deg); transform: rotate(3600deg); }\n}",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
