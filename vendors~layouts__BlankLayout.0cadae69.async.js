(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{KMx9:function(J,Q,w){"use strict";w.d(Q,"a",function(){return m});var H=w("q1tI"),M=w.n(H);function _(u){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_=function(d){return typeof d}:_=function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},_(u)}function k(u,o){if(!(u instanceof o))throw new TypeError("Cannot call a class as a function")}function D(u,o){for(var d=0;d<o.length;d++){var h=o[d];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(u,h.key,h)}}function V(u,o,d){return o&&D(u.prototype,o),d&&D(u,d),u}function G(u,o){return o&&(_(o)==="object"||typeof o=="function")?o:R(u)}function A(u){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(d){return d.__proto__||Object.getPrototypeOf(d)},A(u)}function R(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}function L(u,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");u.prototype=Object.create(o&&o.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),o&&j(u,o)}function j(u,o){return j=Object.setPrototypeOf||function(h,N){return h.__proto__=N,h},j(u,o)}function g(u,o,d){return o in u?Object.defineProperty(u,o,{value:d,enumerable:!0,configurable:!0,writable:!0}):u[o]=d,u}var m=function(u){L(o,u);function o(){var d,h;k(this,o);for(var N=arguments.length,F=new Array(N),T=0;T<N;T++)F[T]=arguments[T];return h=G(this,(d=A(o)).call.apply(d,[this].concat(F))),g(R(h),"state",{bootstrapped:!1}),g(R(h),"_unsubscribe",void 0),g(R(h),"handlePersistorState",function(){var X=h.props.persistor,Z=X.getState(),q=Z.bootstrapped;q&&(h.props.onBeforeLift?Promise.resolve(h.props.onBeforeLift()).finally(function(){return h.setState({bootstrapped:!0})}):h.setState({bootstrapped:!0}),h._unsubscribe&&h._unsubscribe())}),h}return V(o,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),o}(H.PureComponent);g(m,"defaultProps",{children:null,loading:null})},L9jI:function(J,Q,w){"use strict";J.exports="/__open-stack-frame-in-editor"},Y7cU:function(J,Q,w){"use strict";var H=w("tJVT"),M=w("q1tI"),_=w.n(M);/*!
 * hotkeys-js v3.8.1
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2021 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */var k=typeof navigator!="undefined"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function D(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on".concat(e),function(){n(window.event)})}function V(t,e){for(var n=e.slice(0,e.length-1),r=0;r<n.length;r++)n[r]=t[n[r].toLowerCase()];return n}function G(t){typeof t!="string"&&(t=""),t=t.replace(/\s/g,"");for(var e=t.split(","),n=e.lastIndexOf("");n>=0;)e[n-1]+=",",e.splice(n,1),n=e.lastIndexOf("");return e}function A(t,e){for(var n=t.length>=e.length?t:e,r=t.length>=e.length?e:t,i=!0,a=0;a<n.length;a++)r.indexOf(n[a])===-1&&(i=!1);return i}for(var R={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":k?173:189,"=":k?61:187,";":k?59:186,"'":222,"[":219,"]":221,"\\":220},L={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},j={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},g={16:!1,18:!1,17:!1,91:!1},m={},u=1;u<20;u++)R["f".concat(u)]=111+u;var o=[],d="all",h=[],N=function(e){return R[e.toLowerCase()]||L[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function F(t){d=t||"all"}function T(){return d||"all"}function X(){return o.slice(0)}function Z(t){var e=t.target||t.srcElement,n=e.tagName,r=!0;return(e.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!e.readOnly)&&(r=!1),r}function q(t){return typeof t=="string"&&(t=N(t)),o.indexOf(t)!==-1}function ve(t,e){var n,r;t||(t=T());for(var i in m)if(Object.prototype.hasOwnProperty.call(m,i))for(n=m[i],r=0;r<n.length;)n[r].scope===t?n.splice(r,1):r++;T()===t&&F(e||"all")}function ge(t){var e=t.keyCode||t.which||t.charCode,n=o.indexOf(e);if(n>=0&&o.splice(n,1),t.key&&t.key.toLowerCase()==="meta"&&o.splice(0,o.length),(e===93||e===224)&&(e=91),e in g){g[e]=!1;for(var r in L)L[r]===e&&(S[r]=!1)}}function me(t){if(!t)Object.keys(m).forEach(function(s){return delete m[s]});else if(Array.isArray(t))t.forEach(function(s){s.key&&ee(s)});else if(typeof t=="object")t.key&&ee(t);else if(typeof t=="string"){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=n[0],a=n[1];typeof i=="function"&&(a=i,i=""),ee({key:t,scope:i,method:a,splitKey:"+"})}}var ee=function(e){var n=e.key,r=e.scope,i=e.method,a=e.splitKey,s=a===void 0?"+":a,f=G(n);f.forEach(function(v){var c=v.split(s),l=c.length,p=c[l-1],y=p==="*"?"*":N(p);if(!!m[y]){r||(r=T());var b=l>1?V(L,c):[];m[y]=m[y].map(function(I){var K=i?I.method===i:!0;return K&&I.scope===r&&A(I.mods,b)?{}:I})}})};function se(t,e,n){var r;if(e.scope===n||e.scope==="all"){r=e.mods.length>0;for(var i in g)Object.prototype.hasOwnProperty.call(g,i)&&(!g[i]&&e.mods.indexOf(+i)>-1||g[i]&&e.mods.indexOf(+i)===-1)&&(r=!1);(e.mods.length===0&&!g[16]&&!g[18]&&!g[17]&&!g[91]||r||e.shortcut==="*")&&e.method(t,e)===!1&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}function fe(t){var e=m["*"],n=t.keyCode||t.which||t.charCode;if(!!S.filter.call(this,t)){if((n===93||n===224)&&(n=91),o.indexOf(n)===-1&&n!==229&&o.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(b){var I=j[b];t[b]&&o.indexOf(I)===-1?o.push(I):!t[b]&&o.indexOf(I)>-1?o.splice(o.indexOf(I),1):b==="metaKey"&&t[b]&&o.length===3&&(t.ctrlKey||t.shiftKey||t.altKey||(o=o.slice(o.indexOf(I))))}),n in g){g[n]=!0;for(var r in L)L[r]===n&&(S[r]=!0);if(!e)return}for(var i in g)Object.prototype.hasOwnProperty.call(g,i)&&(g[i]=t[j[i]]);t.getModifierState&&!(t.altKey&&!t.ctrlKey)&&t.getModifierState("AltGraph")&&(o.indexOf(17)===-1&&o.push(17),o.indexOf(18)===-1&&o.push(18),g[17]=!0,g[18]=!0);var a=T();if(e)for(var s=0;s<e.length;s++)e[s].scope===a&&(t.type==="keydown"&&e[s].keydown||t.type==="keyup"&&e[s].keyup)&&se(t,e[s],a);if(n in m){for(var f=0;f<m[n].length;f++)if((t.type==="keydown"&&m[n][f].keydown||t.type==="keyup"&&m[n][f].keyup)&&m[n][f].key){for(var v=m[n][f],c=v.splitKey,l=v.key.split(c),p=[],y=0;y<l.length;y++)p.push(N(l[y]));p.sort().join("")===o.sort().join("")&&se(t,v,a)}}}}function ye(t){return h.indexOf(t)>-1}function S(t,e,n){o=[];var r=G(t),i=[],a="all",s=document,f=0,v=!1,c=!0,l="+";for(n===void 0&&typeof e=="function"&&(n=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(a=e.scope),e.element&&(s=e.element),e.keyup&&(v=e.keyup),e.keydown!==void 0&&(c=e.keydown),typeof e.splitKey=="string"&&(l=e.splitKey)),typeof e=="string"&&(a=e);f<r.length;f++)t=r[f].split(l),i=[],t.length>1&&(i=V(L,t)),t=t[t.length-1],t=t==="*"?"*":N(t),t in m||(m[t]=[]),m[t].push({keyup:v,keydown:c,scope:a,mods:i,shortcut:r[f],method:n,key:r[f],splitKey:l});typeof s!="undefined"&&!ye(s)&&window&&(h.push(s),D(s,"keydown",function(p){fe(p)}),D(window,"focus",function(){o=[]}),D(s,"keyup",function(p){fe(p),ge(p)}))}var te={setScope:F,getScope:T,deleteScope:ve,getPressedKeyCodes:X,isPressed:q,filter:Z,unbind:me};for(var ne in te)Object.prototype.hasOwnProperty.call(te,ne)&&(S[ne]=te[ne]);if(typeof window!="undefined"){var be=window.hotkeys;S.noConflict=function(t){return t&&window.hotkeys===S&&(window.hotkeys=be),S},window.hotkeys=S}var ce=S,U=new Set;function Ee(t){function e(){n(window)}function n(l){l&&typeof l.addEventListener=="function"&&(l.addEventListener("click",a,!0),l.addEventListener("mousedown",s,!0),l.addEventListener("mouseover",s,!0),l.addEventListener("mouseup",s,!0),l.addEventListener("pointerdown",f,!0),l.addEventListener("pointerover",v,!0),l.addEventListener("pointerup",c,!0))}function r(){i(window),U.forEach(function(l){try{i(l.contentWindow)}catch(p){}}),U=new Set}function i(l){l&&typeof l.removeEventListener=="function"&&(l.removeEventListener("click",a,!0),l.removeEventListener("mousedown",s,!0),l.removeEventListener("mouseover",s,!0),l.removeEventListener("mouseup",s,!0),l.removeEventListener("pointerdown",f,!0),l.removeEventListener("pointerover",v,!0),l.removeEventListener("pointerup",c,!0))}function a(l){var p;l.preventDefault(),l.stopPropagation(),r(),(p=t.onClick)===null||p===void 0||p.call(t,l.target)}function s(l){l.preventDefault(),l.stopPropagation()}function f(l){l.preventDefault(),l.stopPropagation()}function v(l){var p;l.preventDefault(),l.stopPropagation();var y=l.target;if(y.tagName==="IFRAME"){var b=y;try{if(!U.has(b)){var I=b.contentWindow;n(I),U.add(b)}}catch(K){}}(p=t.onPointerOver)===null||p===void 0||p.call(t,l.target)}function c(l){l.preventDefault(),l.stopPropagation()}return e(),r}var Oe=w("33yf"),we=w.n(Oe),Ie=w("L9jI"),Ce=w.n(Ie),Pe=w("cr+I"),xe=w.n(Pe),ue=function t(e){if(!!(e==null?void 0:e.dataset)){var n=e.dataset,r=n.inspectorLine,i=n.inspectorColumn,a=n.inspectorRelativePath;if(r&&i&&a)return{lineNumber:r,columnNumber:i,relativePath:a};if(e.parentElement)return t(e.parentElement)}},Te=function(e){var n=Object({NODE_ENV:"production"}).PWD;if(!(!e||!n)){var r=e.relativePath,i=e.lineNumber,a=e.columnNumber,s=we.a.join(n,r),f={fileName:s,lineNumber:i,colNumber:a};fetch("".concat(Ce.a,"?").concat(xe.a.stringify(f)))}},Le=function(e){var n=Object.keys(e).find(function(r){return r.startsWith("__reactInternalInstance$")||r.startsWith("__reactFiber$")});return n?e[n]:null},Ne=/^(.*?\.Provider|.*?\.Consumer|Anonymous|Trigger|Tooltip|_.*|[a-z].*)$/,de=function(e){for(var n,r,i,a=e;a;){var s=(r=(n=a.type)===null||n===void 0?void 0:n.displayName)!==null&&r!==void 0?r:(i=a.type)===null||i===void 0?void 0:i.name;if(s&&!Ne.test(s))return a;a=a.return}return null},Se=function(e){var n,r=(n=de(e))===null||n===void 0?void 0:n.type,i;return typeof(r==null?void 0:r.displayName)=="string"?i=r.displayName:typeof(r==null?void 0:r.name)=="string"&&(i=r.name),i},pe=function(e,n){var r=de(Le(e)),i=Se(r),a=e.nodeName.toLowerCase(),s=i||a,f=n?"<".concat(s,">"):"".concat(a," in <").concat(i,">");return{fiber:r,name:i,title:f}},_e=w("Qw5x");function Re(t,e){var n;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=Object(_e.a)(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,s=!1,f;return{s:function(){n=t[Symbol.iterator]()},n:function(){var c=n.next();return a=c.done,c},e:function(c){s=!0,f=c},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(s)throw f}}}}var re=w("fWQN"),ie=w("mtLc");function he(t,e){return t.getBoundingClientRect()}function Ke(t){var e=window.getComputedStyle(t);return{borderLeft:parseInt(e.borderLeftWidth,10),borderRight:parseInt(e.borderRightWidth,10),borderTop:parseInt(e.borderTopWidth,10),borderBottom:parseInt(e.borderBottomWidth,10),marginLeft:parseInt(e.marginLeft,10),marginRight:parseInt(e.marginRight,10),marginTop:parseInt(e.marginTop,10),marginBottom:parseInt(e.marginBottom,10),paddingLeft:parseInt(e.paddingLeft,10),paddingRight:parseInt(e.paddingRight,10),paddingTop:parseInt(e.paddingTop,10),paddingBottom:parseInt(e.paddingBottom,10)}}var De=function(){function t(e,n){Object(re.a)(this,t),this.node=e.createElement("div"),this.border=e.createElement("div"),this.padding=e.createElement("div"),this.content=e.createElement("div"),this.border.style.borderColor=z.border,this.padding.style.borderColor=z.padding,this.content.style.backgroundColor=z.background,Object.assign(this.node.style,{borderColor:z.margin,pointerEvents:"none",position:"fixed"}),this.node.style.zIndex="10000000",this.node.appendChild(this.border),this.border.appendChild(this.padding),this.padding.appendChild(this.content),n.appendChild(this.node)}return Object(ie.a)(t,[{key:"remove",value:function(){this.node.parentNode&&this.node.parentNode.removeChild(this.node)}},{key:"update",value:function(n,r){oe(r,"margin",this.node),oe(r,"border",this.border),oe(r,"padding",this.padding),Object.assign(this.content.style,{height:"".concat(n.height-r.borderTop-r.borderBottom-r.paddingTop-r.paddingBottom,"px"),width:"".concat(n.width-r.borderLeft-r.borderRight-r.paddingLeft-r.paddingRight,"px")}),Object.assign(this.node.style,{top:"".concat(n.top-r.marginTop,"px"),left:"".concat(n.left-r.marginLeft,"px")})}}]),t}(),je=function(){function t(e,n){Object(re.a)(this,t),this.tip=e.createElement("div"),Object.assign(this.tip.style,{display:"flex",flexFlow:"row nowrap",alignItems:"center",backgroundColor:"#333740",borderRadius:"2px",fontFamily:'"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',fontWeight:"bold",padding:"6px 8px",pointerEvents:"none",position:"fixed",fontSize:"12px",whiteSpace:"nowrap"}),this.nameSpan=e.createElement("span"),this.tip.appendChild(this.nameSpan),Object.assign(this.nameSpan.style,{display:"flex",flexDirection:"column",borderRight:"1px solid #aaaaaa",paddingRight:"0.8rem",marginRight:"0.8rem"}),this.titleDiv=e.createElement("div"),this.nameSpan.appendChild(this.titleDiv),Object.assign(this.titleDiv.style,{color:"#ee78e6",fontSize:"16px"}),this.infoDiv=e.createElement("div"),this.nameSpan.appendChild(this.infoDiv),Object.assign(this.infoDiv.style,{color:"#ee78e6",fontSize:"14px"}),this.dimSpan=e.createElement("span"),this.tip.appendChild(this.dimSpan),Object.assign(this.dimSpan.style,{color:"#d7d7d7"}),this.tip.style.zIndex="10000000",n.appendChild(this.tip)}return Object(ie.a)(t,[{key:"remove",value:function(){this.tip.parentNode&&this.tip.parentNode.removeChild(this.tip)}},{key:"updateText",value:function(n,r,i,a){this.titleDiv.textContent=n,this.infoDiv.textContent=r!=null?r:"",this.dimSpan.textContent="".concat(Math.round(i),"px \xD7 ").concat(Math.round(a),"px")}},{key:"updatePosition",value:function(n,r){var i=this.tip.getBoundingClientRect(),a=Be(n,r,{width:i.width,height:i.height});Object.assign(this.tip.style,a.style)}}]),t}(),We=function(){function t(){Object(re.a)(this,t);var e=window.__REACT_DEVTOOLS_TARGET_WINDOW__||window;this.window=e;var n=window.__REACT_DEVTOOLS_TARGET_WINDOW__||window;this.tipBoundsWindow=n;var r=e.document;this.container=r.createElement("div"),this.container.style.zIndex="10000000",this.tip=new je(r,this.container),this.rects=[],this.removeCallback=function(){},r.body.appendChild(this.container)}return Object(ie.a)(t,[{key:"remove",value:function(){this.tip.remove(),this.rects.forEach(function(n){n.remove()}),this.rects.length=0,this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.removeCallback()}},{key:"setRemoveCallback",value:function(n){this.removeCallback=n.bind(this)}},{key:"inspect",value:function(n,r,i){for(var a=this,s,f=n.filter(function(P){return P.nodeType===Node.ELEMENT_NODE});this.rects.length>f.length;){var v=this.rects.pop();v==null||v.remove()}if(f.length!==0){for(;this.rects.length<f.length;)this.rects.push(new De(this.window.document,this.container));var c={top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,left:Number.POSITIVE_INFINITY};if(f.forEach(function(P,E){var O=he(P,a.window),C=Ke(P);c.top=Math.min(c.top,O.top-C.marginTop),c.right=Math.max(c.right,O.left+O.width+C.marginRight),c.bottom=Math.max(c.bottom,O.top+O.height+C.marginBottom),c.left=Math.min(c.left,O.left-C.marginLeft);var x=a.rects[E];x.update(O,C)}),!r){r=f[0].nodeName.toLowerCase();var l=f[0],p=(s=l.ownerDocument.defaultView)===null||s===void 0?void 0:s.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(p==null?void 0:p.rendererInterfaces){var y=null,b=Re(p.rendererInterfaces.values()),I;try{for(b.s();!(I=b.n()).done;){var K=I.value,Y=K.getFiberIDForNative(l,!0);if(Y!==null){y=K.getDisplayNameForFiberID(Y,!0);break}}}catch(P){b.e(P)}finally{b.f()}y&&(r+=" (in ".concat(y,")"))}}this.tip.updateText(r,i,c.right-c.left,c.bottom-c.top);var W=he(this.tipBoundsWindow.document.documentElement,this.window);this.tip.updatePosition({top:c.top,left:c.left,height:c.bottom-c.top,width:c.right-c.left},{top:W.top+this.tipBoundsWindow.scrollY,left:W.left+this.tipBoundsWindow.scrollX,height:this.tipBoundsWindow.innerHeight,width:this.tipBoundsWindow.innerWidth})}}}]),t}();function Be(t,e,n){var r=Math.max(n.height,20),i=Math.max(n.width,60),a=5,s;t.top+t.height+r<=e.top+e.height?t.top+t.height<e.top+0?s=e.top+a:s=t.top+t.height+a:t.top-r<=e.top+e.height?t.top-r-a<e.top+a?s=e.top+a:s=t.top-r-a:s=e.top+e.height-r-a;var f=t.left+a;return t.left<e.left&&(f=e.left+a),t.left+i>e.left+e.width&&(f=e.left+e.width-i-a),s+="px",f+="px",{style:{top:s,left:f}}}function oe(t,e,n){Object.assign(n.style,{borderTopWidth:"".concat(t["".concat(e,"Top")],"px"),borderLeftWidth:"".concat(t["".concat(e,"Left")],"px"),borderRightWidth:"".concat(t["".concat(e,"Right")],"px"),borderBottomWidth:"".concat(t["".concat(e,"Bottom")],"px"),borderStyle:"solid"})}var z={background:"rgba(120, 170, 210, 0.7)",padding:"rgba(77, 200, 0, 0.3)",margin:"rgba(255, 155, 0, 0.3)",border:"rgba(255, 200, 50, 0.3)"},Me=["control","shift","command","c"],Ae=function(e){var n=e.keys,r=e.onHoverElement,i=e.onClickElement,a=e.disableLaunchEditor,s=e.children,f=(n!=null?n:Me).join("+"),v=Object(M.useState)(!1),c=Object(H.a)(v,2),l=c[0],p=c[1],y=Object(M.useRef)(),b=function(E){var O,C=y.current,x=ue(E),$=x==null?void 0:x.relativePath,B=pe(E,$),ae=B.fiber,le=B.name,ke=B.title;(O=C==null?void 0:C.inspect)===null||O===void 0||O.call(C,[E],ke,$),r==null||r({element:E,fiber:ae,codeInfo:x,name:le})},I=function(E){var O,C=y.current;(O=C==null?void 0:C.remove)===null||O===void 0||O.call(C),y.current=void 0,p(!1);var x=ue(E),$=x==null?void 0:x.relativePath,B=pe(E,$),ae=B.fiber,le=B.name;a||Te(x),i==null||i({element:E,fiber:ae,codeInfo:x,name:le})},K=function(){var E=new We,O=Ee({onPointerOver:b,onClick:I});E.setRemoveCallback(O),y.current=E,p(!0)},Y=function(){var E;(E=y.current)===null||E===void 0||E.remove(),p(!1)},W=function(){return l?Y():K()};return Object(M.useEffect)(function(){var P=function(O,C){C.key===f&&W()};return ce(f,P),window.__REACT_DEV_INSPECTOR_TOGGLE__=W,function(){ce.unbind(f,P),delete window.__REACT_DEV_INSPECTOR_TOGGLE__}},[f,W]),_.a.createElement(_.a.Fragment,null,s)}}}]);
