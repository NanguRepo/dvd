function R(){}const ut=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function H(){return Object.create(null)}function b(t){t.forEach(U)}function V(t){return typeof t=="function"}function Tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function Wt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function ft(t){return Object.keys(t).length===0}function Bt(t,e,n,i){if(t){const o=X(t,e,n,i);return t[0](o)}}function X(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Lt(t,e,n,i){if(t[2]&&i){const o=t[2](i(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const l=[],r=Math.max(e.dirty.length,o.length);for(let c=0;c<r;c+=1)l[c]=e.dirty[c]|o[c];return l}return e.dirty|o}return e.dirty}function Ft(t,e,n,i,o,l){if(o){const r=X(e,n,i,l);t.p(r,o)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ht(t){return t==null?"":t}const Y=typeof window!="undefined";let dt=Y?()=>window.performance.now():()=>Date.now(),B=Y?t=>requestAnimationFrame(t):R;const x=new Set;function Z(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&B(Z)}function _t(t){let e;return x.size===0&&B(Z),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let O=!1;function ht(){O=!0}function mt(){O=!1}function pt(t,e,n,i){for(;t<e;){const o=t+(e-t>>1);n(o)<=i?t=o+1:e=o}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&s.push(d)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let o=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,d=(o>0&&e[n[o]].claim_order<=u?o+1:pt(1,o,a=>e[n[a]].claim_order,u))-1;i[s]=n[d]+1;const f=d+1;n[f]=s,o=Math.max(f,o)}const l=[],r=[];let c=e.length-1;for(let s=n[o]+1;s!=0;s=i[s-1]){for(l.push(e[s-1]);c>=s;c--)r.push(e[c]);c--}for(;c>=0;c--)r.push(e[c]);l.reverse(),r.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<r.length;s++){for(;u<l.length&&r[s].claim_order>=l[u].claim_order;)u++;const d=u<l.length?l[u]:null;t.insertBefore(r[s],d)}}function tt(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=L("style");return xt(et(t),e),e.sheet}function xt(t,e){tt(t.head||t,e)}function bt(t,e){if(O){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Gt(t,e,n){O&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function nt(t){t.parentNode.removeChild(t)}function L(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function Jt(){return F(" ")}function Kt(){return F("")}function G(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Qt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ut(t){return t===""?null:+t}function $t(t){return Array.from(t.childNodes)}function vt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,i,o=!1){vt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const c=t[r];if(e(c)){const s=n(c);return s===void 0?t.splice(r,1):t[r]=s,o||(t.claim_info.last_index=r),c}}for(let r=t.claim_info.last_index-1;r>=0;r--){const c=t[r];if(e(c)){const s=n(c);return s===void 0?t.splice(r,1):t[r]=s,o?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,c}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function rt(t,e,n,i){return it(t,o=>o.nodeName===e,o=>{const l=[];for(let r=0;r<o.attributes.length;r++){const c=o.attributes[r];n[c.name]||l.push(c.name)}l.forEach(r=>o.removeAttribute(r))},()=>i(e))}function Vt(t,e,n){return rt(t,e,n,L)}function Xt(t,e,n){return rt(t,e,n,wt)}function Et(t,e){return it(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function Yt(t){return Et(t," ")}function Zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function te(t,e){t.value=e==null?"":e}function ee(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let N;function kt(){if(N===void 0){N=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{N=!0}}return N}function ne(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=L("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const o=kt();let l;return o?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=G(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=G(i.contentWindow,"resize",e)}),tt(t,i),()=>{(o||l&&i.contentWindow)&&l(),nt(i)}}function At(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,i,e),o}function ie(t,e=document.body){return Array.from(e.querySelectorAll(t))}const M=new Map;let z=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:gt(e),rules:{}};return M.set(t,n),n}function J(t,e,n,i,o,l,r,c=0){const s=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=s){const g=e+(n-e)*l(p);u+=p*100+`%{${r(g,1-g)}}
`}const d=u+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Nt(d)}_${c}`,a=et(t),{stylesheet:_,rules:h}=M.get(a)||St(a,t);h[f]||(h[f]=!0,_.insertRule(`@keyframes ${f} ${d}`,_.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${o}ms 1 both`,z+=1,f}function Ct(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),o=n.length-i.length;o&&(t.style.animation=i.join(", "),z-=o,z||jt())}function jt(){B(()=>{z||(M.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),M.clear())})}let E;function v(t){E=t}function I(){if(!E)throw new Error("Function called outside component initialization");return E}function re(t){I().$$.on_mount.push(t)}function oe(t){I().$$.after_update.push(t)}function se(t,e){return I().$$.context.set(t,e),e}const $=[],K=[],C=[],Q=[],ot=Promise.resolve();let W=!1;function st(){W||(W=!0,ot.then(lt))}function le(){return st(),ot}function q(t){C.push(t)}const D=new Set;let S=0;function lt(){const t=E;do{for(;S<$.length;){const e=$[S];S++,v(e),Mt(e.$$)}for(v(null),$.length=0,S=0;K.length;)K.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];D.has(n)||(D.add(n),n())}C.length=0}while($.length);for(;Q.length;)Q.pop()();W=!1,D.clear(),v(t)}function Mt(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}let w;function zt(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function T(t,e,n){t.dispatchEvent(At(`${e?"intro":"outro"}${n}`))}const j=new Set;let m;function ce(){m={r:0,c:[],p:m}}function ue(){m.r||b(m.c),m=m.p}function qt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function ae(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),m.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Rt={duration:0};function fe(t,e,n,i){let o=e(t,n),l=i?0:1,r=null,c=null,s=null;function u(){s&&Ct(t,s)}function d(a,_){const h=a.b-l;return _*=Math.abs(h),{a:l,b:a.b,d:h,duration:_,start:a.start,end:a.start+_,group:a.group}}function f(a){const{delay:_=0,duration:h=300,easing:y=ut,tick:p=R,css:g}=o||Rt,P={start:dt()+_,b:a};a||(P.group=m,m.r+=1),r||c?c=P:(g&&(u(),s=J(t,l,a,h,_,y,g)),a&&p(0,1),r=d(P,h),q(()=>T(t,a,"start")),_t(k=>{if(c&&k>c.start&&(r=d(c,h),c=null,T(t,r.b,"start"),g&&(u(),s=J(t,l,r.b,r.duration,0,y,o.css))),r){if(k>=r.end)p(l=r.b,1-l),T(t,r.b,"end"),c||(r.b?u():--r.group.r||b(r.group.c)),r=null;else if(k>=r.start){const ct=k-r.start;l=r.a+r.d*y(ct/r.duration),p(l,1-l)}}return!!(r||c)}))}return{run(a){V(o)?zt().then(()=>{o=o(),f(a)}):f(a)},end(){u(),r=c=null}}}function de(t,e){const n={},i={},o={$$scope:1};let l=t.length;for(;l--;){const r=t[l],c=e[l];if(c){for(const s in r)s in c||(i[s]=1);for(const s in c)o[s]||(n[s]=c[s],o[s]=1);t[l]=c}else for(const s in r)o[s]=1}for(const r in i)r in n||(n[r]=void 0);return n}function _e(t){return typeof t=="object"&&t!==null?t:{}}function he(t){t&&t.c()}function me(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:o,on_mount:l,on_destroy:r,after_update:c}=t.$$;o&&o.m(e,n),i||q(()=>{const s=l.map(U).filter(V);r?r.push(...s):b(s),t.$$.on_mount=[]}),c.forEach(q)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&($.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pe(t,e,n,i,o,l,r,c=[-1]){const s=E;v(t);const u=t.$$={fragment:null,ctx:null,props:l,update:R,not_equal:o,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:H(),dirty:c,skip_bound:!1,root:e.target||s.$$.root};r&&r(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(f,a,..._)=>{const h=_.length?_[0]:a;return u.ctx&&o(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),d&&Dt(t,f)),a}):[],u.update(),d=!0,b(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){ht();const f=$t(e.target);u.fragment&&u.fragment.l(f),f.forEach(nt)}else u.fragment&&u.fragment.c();e.intro&&qt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),mt(),lt()}v(s)}class ye{$destroy(){Pt(this,1),this.$destroy=R}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{de as A,_e as B,Pt as C,at as D,le as E,Bt as F,Ft as G,It as H,Lt as I,bt as J,Wt as K,q as L,ne as M,K as N,wt as O,Xt as P,Ht as Q,te as R,ye as S,G as T,Ut as U,fe as V,b as W,ie as X,$t as a,Qt as b,Vt as c,nt as d,L as e,ee as f,Gt as g,Et as h,pe as i,Zt as j,Jt as k,Kt as l,Yt as m,R as n,ce as o,ae as p,ue as q,qt as r,Tt as s,F as t,se as u,oe as v,re as w,he as x,me as y,Ot as z};