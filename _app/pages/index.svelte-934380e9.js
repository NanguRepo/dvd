import{S as qe,i as je,s as Fe,e as g,t as G,c as v,a as b,h as J,d as p,b as a,g as R,J as d,E as ke,k,m as E,K as wt,L as at,f as kt,M as Et,v as Lt,N as It,O as _e,P as pe,Q as zt,l as Dt,w as Xe,x as Ye,R as T,y as Le,T as P,U as K,q as L,V as Pt,o as ie,B as We,W as At,n as Nt,p as Ot,X as W,Y,Z as Wt}from"../chunks/index-7416b5b2.js";import{w as Tt}from"../chunks/index-d6af947c.js";const Vt=!0;function Ht(t){let e,l=t[7]()+"",i;return{c(){e=g("p"),i=G(l),this.h()},l(n){e=v(n,"P",{class:!0});var r=b(e);i=J(r,l),r.forEach(p),this.h()},h(){a(e,"class","watermark text-white self-center text-xl md:text-2xl opacity-80 mr-2 mb-2 bg-black/25 px-2 rounded svelte-1xrskhf")},m(n,r){R(n,e,r),d(e,i)},p:ke,d(n){n&&p(e)}}}function qt(t){let e,l,i,n,r,s,u,f,_,m=Ht(t);return{c(){e=g("div"),l=g("div"),i=g("img"),s=k(),m&&m.c(),u=k(),f=g("div"),this.h()},l(o){e=v(o,"DIV",{id:!0,style:!0,class:!0});var h=b(e);l=v(h,"DIV",{id:!0,class:!0});var w=b(l);i=v(w,"IMG",{style:!0,src:!0,alt:!0}),w.forEach(p),s=E(h),m&&m.l(h),u=E(h),f=v(h,"DIV",{class:!0}),b(f).forEach(p),h.forEach(p),this.h()},h(){a(i,"style",t[6]),wt(i.src,n=t[0])||a(i,"src",n),a(i,"alt","emblem"),a(l,"id","dvd"),a(l,"class","svelte-1xrskhf"),at(()=>t[11].call(l)),a(f,"class","animate-spin"),a(e,"id","renderBox"),kt(e,"background-image","url("+t[1]+")"),a(e,"class","svelte-1xrskhf"),at(()=>t[13].call(e))},m(o,h){R(o,e,h),d(e,l),d(l,i),r=Et(l,t[11].bind(l)),t[12](l),d(e,s),m&&m.m(e,null),d(e,u),d(e,f),_=Et(e,t[13].bind(e)),t[14](e)},p(o,[h]){h&64&&a(i,"style",o[6]),h&1&&!wt(i.src,n=o[0])&&a(i,"src",n),m.p(o,h),h&2&&kt(e,"background-image","url("+o[1]+")")},i:ke,o:ke,d(o){o&&p(e),r(),t[12](null),m&&m.d(),_(),t[14](null)}}}let Ae=0;function jt(t,e,l){let i,{speed:n}=e,{spinSpeed:r}=e,{emblemSize:s}=e,{emblemSrc:u}=e,{bgSrc:f}=e,_=1,m=1,o=!0,h=!0,w=0,N=0,V,C,I,S;Lt(()=>{setInterval(()=>{H()},10)});function H(){w=I.offsetWidth-S.offsetWidth-Ae,N=I.offsetHeight-S.offsetHeight-Ae,(_>=N&&o||_<Ae&&!o)&&z("Y"),(m>=w&&h||m<Ae&&!h)&&z("X"),h?m=m+1*n:m=m+1*n*-1,o?_=_+1*n:_=_+1*n*-1,l(5,S.style.left=`${m}px`,S),l(5,S.style.top=`${_}px`,S)}function z(c){switch(c){case"Y":o=!o;break;case"X":h=!h;break}}const q=(c,Z)=>`animation: spin ${c==0?"0":1/c*10}s linear infinite; width: ${Z}px;`,U=()=>{const c=["made","built","created","designed","crafted","developed","produced","forged","brought into existence"],Z=["using","with","at"],B=["\u{1F48E}","\u{1F4AF}","\u{1F410}"];return c[Math.floor(Math.random()*c.length)]+" "+Z[Math.floor(Math.random()*Z.length)]+" dvd.nangurepo.com "+B[Math.floor(Math.random()*B.length)]};function X(){V=this.offsetHeight,C=this.offsetWidth,l(2,V),l(3,C)}function D(c){It[c?"unshift":"push"](()=>{S=c,l(5,S)})}function Q(){V=this.offsetHeight,C=this.offsetWidth,l(2,V),l(3,C)}function M(c){It[c?"unshift":"push"](()=>{I=c,l(4,I)})}return t.$$set=c=>{"speed"in c&&l(8,n=c.speed),"spinSpeed"in c&&l(9,r=c.spinSpeed),"emblemSize"in c&&l(10,s=c.emblemSize),"emblemSrc"in c&&l(0,u=c.emblemSrc),"bgSrc"in c&&l(1,f=c.bgSrc)},t.$$.update=()=>{t.$$.dirty&1536&&l(6,i=q(r,s))},[u,f,V,C,I,S,i,U,n,r,s,X,D,Q,M]}class Ft extends qe{constructor(e){super(),je(this,e,jt,qt,Fe,{speed:8,spinSpeed:9,emblemSize:10,emblemSrc:0,bgSrc:1})}}const Re=parseFloat;function He(t,e=";"){let l;if(Array.isArray(t))l=t.filter(i=>i);else{l=[];for(const i in t)t[i]&&l.push(`${i}:${t[i]}`)}return l.join(e)}function Gt(t,e,l,i){let n,r;const s="1em";let u,f,_,m="-.125em";const o="visible";return i&&(_="center",r="1.25em"),l&&(n=l),e&&(e=="lg"?(f="1.33333em",u=".75em",m="-.225em"):e=="xs"?f=".75em":e=="sm"?f=".875em":f=e.replace("x","em")),He([He({float:n,width:r,height:s,"line-height":u,"font-size":f,"text-align":_,"vertical-align":m,"transform-origin":"center",overflow:o}),t])}function Jt(t,e,l,i,n,r=1,s="",u=""){let f=1,_=1;return n&&(n=="horizontal"?f=-1:n=="vertical"?_=-1:f=_=-1),He([`translate(${Re(e)*r}${s},${Re(l)*r}${s})`,`scale(${f*Re(t)},${_*Re(t)})`,i&&`rotate(${i}${u})`]," ")}function Ct(t){let e,l,i,n,r,s,u;function f(o,h){return typeof o[7][4]=="string"?Qt:Kt}let _=f(t),m=_(t);return{c(){e=_e("svg"),l=_e("g"),i=_e("g"),m.c(),this.h()},l(o){e=pe(o,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var h=b(e);l=pe(h,"g",{transform:!0,"transform-origin":!0});var w=b(l);i=pe(w,"g",{transform:!0});var N=b(i);m.l(N),N.forEach(p),w.forEach(p),h.forEach(p),this.h()},h(){a(i,"transform",t[10]),a(l,"transform",n=`translate(${t[7][0]/2} ${t[7][1]/2})`),a(l,"transform-origin",r=`${t[7][0]/4} 0`),a(e,"id",t[0]),a(e,"class",s=zt(t[8])+" svelte-1cj2gr0"),a(e,"style",t[9]),a(e,"viewBox",u=`0 0 ${t[7][0]} ${t[7][1]}`),a(e,"aria-hidden","true"),a(e,"role","img"),a(e,"xmlns","http://www.w3.org/2000/svg")},m(o,h){R(o,e,h),d(e,l),d(l,i),m.m(i,null)},p(o,h){_===(_=f(o))&&m?m.p(o,h):(m.d(1),m=_(o),m&&(m.c(),m.m(i,null))),h&1024&&a(i,"transform",o[10]),h&128&&n!==(n=`translate(${o[7][0]/2} ${o[7][1]/2})`)&&a(l,"transform",n),h&128&&r!==(r=`${o[7][0]/4} 0`)&&a(l,"transform-origin",r),h&1&&a(e,"id",o[0]),h&256&&s!==(s=zt(o[8])+" svelte-1cj2gr0")&&a(e,"class",s),h&512&&a(e,"style",o[9]),h&128&&u!==(u=`0 0 ${o[7][0]} ${o[7][1]}`)&&a(e,"viewBox",u)},d(o){o&&p(e),m.d()}}}function Kt(t){let e,l,i,n,r,s,u,f,_,m;return{c(){e=_e("path"),s=_e("path"),this.h()},l(o){e=pe(o,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),b(e).forEach(p),s=pe(o,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),b(s).forEach(p),this.h()},h(){a(e,"d",l=t[7][4][0]),a(e,"fill",i=t[3]||t[1]||"currentColor"),a(e,"fill-opacity",n=t[6]!=!1?t[4]:t[5]),a(e,"transform",r=`translate(${t[7][0]/-2} ${t[7][1]/-2})`),a(s,"d",u=t[7][4][1]),a(s,"fill",f=t[2]||t[1]||"currentColor"),a(s,"fill-opacity",_=t[6]!=!1?t[5]:t[4]),a(s,"transform",m=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)},m(o,h){R(o,e,h),R(o,s,h)},p(o,h){h&128&&l!==(l=o[7][4][0])&&a(e,"d",l),h&10&&i!==(i=o[3]||o[1]||"currentColor")&&a(e,"fill",i),h&112&&n!==(n=o[6]!=!1?o[4]:o[5])&&a(e,"fill-opacity",n),h&128&&r!==(r=`translate(${o[7][0]/-2} ${o[7][1]/-2})`)&&a(e,"transform",r),h&128&&u!==(u=o[7][4][1])&&a(s,"d",u),h&6&&f!==(f=o[2]||o[1]||"currentColor")&&a(s,"fill",f),h&112&&_!==(_=o[6]!=!1?o[5]:o[4])&&a(s,"fill-opacity",_),h&128&&m!==(m=`translate(${o[7][0]/-2} ${o[7][1]/-2})`)&&a(s,"transform",m)},d(o){o&&p(e),o&&p(s)}}}function Qt(t){let e,l,i,n;return{c(){e=_e("path"),this.h()},l(r){e=pe(r,"path",{d:!0,fill:!0,transform:!0}),b(e).forEach(p),this.h()},h(){a(e,"d",l=t[7][4]),a(e,"fill",i=t[1]||t[2]||"currentColor"),a(e,"transform",n=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)},m(r,s){R(r,e,s)},p(r,s){s&128&&l!==(l=r[7][4])&&a(e,"d",l),s&6&&i!==(i=r[1]||r[2]||"currentColor")&&a(e,"fill",i),s&128&&n!==(n=`translate(${r[7][0]/-2} ${r[7][1]/-2})`)&&a(e,"transform",n)},d(r){r&&p(e)}}}function Zt(t){let e,l=t[7][4]&&Ct(t);return{c(){l&&l.c(),e=Dt()},l(i){l&&l.l(i),e=Dt()},m(i,n){l&&l.m(i,n),R(i,e,n)},p(i,[n]){i[7][4]?l?l.p(i,n):(l=Ct(i),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:ke,o:ke,d(i){l&&l.d(i),i&&p(e)}}}function xt(t,e,l){let{class:i=""}=e,{id:n=""}=e,{style:r=""}=e,{icon:s}=e,{size:u=""}=e,{color:f=""}=e,{fw:_=!1}=e,{pull:m=""}=e,{scale:o=1}=e,{translateX:h=0}=e,{translateY:w=0}=e,{rotate:N=""}=e,{flip:V=!1}=e,{spin:C=!1}=e,{pulse:I=!1}=e,{primaryColor:S=""}=e,{secondaryColor:H=""}=e,{primaryOpacity:z=1}=e,{secondaryOpacity:q=.4}=e,{swapOpacity:U=!1}=e,X,D,Q,M;return t.$$set=c=>{"class"in c&&l(11,i=c.class),"id"in c&&l(0,n=c.id),"style"in c&&l(12,r=c.style),"icon"in c&&l(13,s=c.icon),"size"in c&&l(14,u=c.size),"color"in c&&l(1,f=c.color),"fw"in c&&l(15,_=c.fw),"pull"in c&&l(16,m=c.pull),"scale"in c&&l(17,o=c.scale),"translateX"in c&&l(18,h=c.translateX),"translateY"in c&&l(19,w=c.translateY),"rotate"in c&&l(20,N=c.rotate),"flip"in c&&l(21,V=c.flip),"spin"in c&&l(22,C=c.spin),"pulse"in c&&l(23,I=c.pulse),"primaryColor"in c&&l(2,S=c.primaryColor),"secondaryColor"in c&&l(3,H=c.secondaryColor),"primaryOpacity"in c&&l(4,z=c.primaryOpacity),"secondaryOpacity"in c&&l(5,q=c.secondaryOpacity),"swapOpacity"in c&&l(6,U=c.swapOpacity)},t.$$.update=()=>{t.$$.dirty&8192&&l(7,X=s&&s.icon||[0,0,"",[],""]),t.$$.dirty&12584960&&l(8,D=He([i,"svelte-fa",C&&"spin",I&&"pulse"]," ")),t.$$.dirty&118784&&l(9,Q=Gt(r,u,m,_)),t.$$.dirty&4063232&&l(10,M=Jt(o,h,w,N,V,512))},[n,f,S,H,z,q,U,X,D,Q,M,i,r,s,u,_,m,o,h,w,N,V,C,I]}class $t extends qe{constructor(e){super(),je(this,e,xt,Zt,Fe,{class:11,id:0,style:12,icon:13,size:14,color:1,fw:15,pull:16,scale:17,translateX:18,translateY:19,rotate:20,flip:21,spin:22,pulse:23,primaryColor:2,secondaryColor:3,primaryOpacity:4,secondaryOpacity:5,swapOpacity:6})}}var Rt=$t,Xt={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",l="angle-down",i=384,n=512,r=[8964],s="f107",u="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z";t.definition={prefix:e,iconName:l,icon:[i,n,r,s,u]},t.faAngleDown=t.definition,t.prefix=e,t.iconName=l,t.width=i,t.height=n,t.ligatures=r,t.unicode=s,t.svgPathData=u,t.aliases=r})(Xt);var Yt={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",l="angle-up",i=384,n=512,r=[8963],s="f106",u="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z";t.definition={prefix:e,iconName:l,icon:[i,n,r,s,u]},t.faAngleUp=t.definition,t.prefix=e,t.iconName=l,t.width=i,t.height=n,t.ligatures=r,t.unicode=s,t.svgPathData=u,t.aliases=r})(Yt);function el(t){const e=t-1;return e*e*e+1}function Ut(t,{delay:e=0,duration:l=400,easing:i=el,x:n=0,y:r=0,opacity:s=0}={}){const u=getComputedStyle(t),f=+u.opacity,_=u.transform==="none"?"":u.transform,m=f*(1-s);return{delay:e,duration:l,easing:i,css:(o,h)=>`
			transform: ${_} translate(${(1-o)*n}px, ${(1-o)*r}px);
			opacity: ${f-m*h}`}}const Ee=(t,e)=>{try{return Tt(localStorage.getItem(t)||e)}catch{return Tt(e)}},st="/emblem.png",ot="/bg.png",fe=Ee("travelSpeed",4),ue=Ee("spinSpeed",2),me=Ee("emblemSrc",st),ce=Ee("emblemSize",320),he=Ee("bgSrc",ot);fe.subscribe(t=>{localStorage.setItem("travelSpeed",t.toString())});ue.subscribe(t=>{localStorage.setItem("spinSpeed",t.toString())});me.subscribe(t=>{localStorage.setItem("emblemSrc",t.toString())});ce.subscribe(t=>{localStorage.setItem("emblemSize",t.toString())});he.subscribe(t=>{localStorage.setItem("bgSrc",t.toString())});function Bt(t){let e,l,i,n,r,s,u,f,_,m,o,h,w,N,V,C,I,S,H,z,q,U,X,D,Q,M,c,Z,B,Ie,A,x,ge,Ge,Je,j,Ke,$,ve,Qe,Ze,F,xe,ee,re,be,$e,et,ae,ye,tt,lt,se,Se,nt,it,te,oe,ze,le,we,rt,ft;return oe=new Rt({props:{icon:Yt.faAngleUp,size:"2x",class:"text-white"}}),{c(){e=g("div"),l=g("div"),i=g("div"),n=g("div"),r=g("p"),s=G("Travel Speed"),u=k(),f=g("div"),_=g("input"),m=k(),o=g("input"),h=k(),w=g("div"),N=g("p"),V=G("Spin Speed"),C=k(),I=g("div"),S=g("input"),H=k(),z=g("input"),q=k(),U=g("div"),X=g("p"),D=G("Emblem Size"),Q=k(),M=g("div"),c=g("input"),Z=k(),B=g("input"),Ie=k(),A=g("div"),x=g("div"),ge=g("p"),Ge=G("Emblem URL"),Je=k(),j=g("input"),Ke=k(),$=g("div"),ve=g("p"),Qe=G("Background URL"),Ze=k(),F=g("input"),xe=k(),ee=g("div"),re=g("button"),be=g("p"),$e=G("Reset Images"),et=k(),ae=g("button"),ye=g("p"),tt=G("Reset Settings"),lt=k(),se=g("button"),Se=g("p"),nt=G("Reset All"),it=k(),te=g("button"),Xe(oe.$$.fragment),this.h()},l(y){e=v(y,"DIV",{});var O=b(e);l=v(O,"DIV",{class:!0});var De=b(l);i=v(De,"DIV",{class:!0});var de=b(i);n=v(de,"DIV",{class:!0});var Pe=b(n);r=v(Pe,"P",{});var ut=b(r);s=J(ut,"Travel Speed"),ut.forEach(p),u=E(Pe),f=v(Pe,"DIV",{class:!0});var Ne=b(f);_=v(Ne,"INPUT",{type:!0,class:!0,min:!0}),m=E(Ne),o=v(Ne,"INPUT",{type:!0,min:!0,max:!0}),Ne.forEach(p),Pe.forEach(p),h=E(de),w=v(de,"DIV",{class:!0});var Oe=b(w);N=v(Oe,"P",{});var ct=b(N);V=J(ct,"Spin Speed"),ct.forEach(p),C=E(Oe),I=v(Oe,"DIV",{class:!0});var Te=b(I);S=v(Te,"INPUT",{type:!0,class:!0,min:!0}),H=E(Te),z=v(Te,"INPUT",{type:!0,min:!0,max:!0}),Te.forEach(p),Oe.forEach(p),q=E(de),U=v(de,"DIV",{class:!0});var Ve=b(U);X=v(Ve,"P",{});var dt=b(X);D=J(dt,"Emblem Size"),dt.forEach(p),Q=E(Ve),M=v(Ve,"DIV",{class:!0});var Ce=b(M);c=v(Ce,"INPUT",{type:!0,class:!0,min:!0}),Z=E(Ce),B=v(Ce,"INPUT",{type:!0,min:!0,max:!0}),Ce.forEach(p),Ve.forEach(p),de.forEach(p),Ie=E(De),A=v(De,"DIV",{class:!0});var ne=b(A);x=v(ne,"DIV",{class:!0});var Ue=b(x);ge=v(Ue,"P",{});var mt=b(ge);Ge=J(mt,"Emblem URL"),mt.forEach(p),Je=E(Ue),j=v(Ue,"INPUT",{class:!0,type:!0}),Ue.forEach(p),Ke=E(ne),$=v(ne,"DIV",{class:!0});var Be=b($);ve=v(Be,"P",{});var ht=b(ve);Qe=J(ht,"Background URL"),ht.forEach(p),Ze=E(Be),F=v(Be,"INPUT",{class:!0,type:!0}),Be.forEach(p),xe=E(ne),ee=v(ne,"DIV",{class:!0});var Me=b(ee);re=v(Me,"BUTTON",{class:!0});var _t=b(re);be=v(_t,"P",{});var pt=b(be);$e=J(pt,"Reset Images"),pt.forEach(p),_t.forEach(p),et=E(Me),ae=v(Me,"BUTTON",{class:!0});var gt=b(ae);ye=v(gt,"P",{});var vt=b(ye);tt=J(vt,"Reset Settings"),vt.forEach(p),gt.forEach(p),Me.forEach(p),lt=E(ne),se=v(ne,"BUTTON",{class:!0});var bt=b(se);Se=v(bt,"P",{});var yt=b(Se);nt=J(yt,"Reset All"),yt.forEach(p),bt.forEach(p),ne.forEach(p),De.forEach(p),it=E(O),te=v(O,"BUTTON",{class:!0});var St=b(te);Ye(oe.$$.fragment,St),St.forEach(p),O.forEach(p),this.h()},h(){a(_,"type","number"),a(_,"class","font-mono bg-black/20 rounded w-12 text-center"),a(_,"min","0"),a(o,"type","range"),a(o,"min","0"),a(o,"max","25"),a(f,"class","flex flex-row"),a(n,"class","flex flex-col px-2 py-2 text-white"),a(S,"type","number"),a(S,"class","font-mono bg-black/20 rounded w-12 text-center"),a(S,"min","0"),a(z,"type","range"),a(z,"min","0"),a(z,"max","25"),a(I,"class","flex flex-row"),a(w,"class","flex flex-col px-2 py-2 text-white"),a(c,"type","number"),a(c,"class","font-mono bg-black/25 rounded w-12 text-center"),a(c,"min","0"),a(B,"type","range"),a(B,"min","128"),a(B,"max","1024"),a(M,"class","flex flex-row"),a(U,"class","flex flex-col px-2 py-2 text-white"),a(i,"class","flex flex-col"),a(j,"class","font-mono bg-black/25 py-1 text-xs w-64 select-all"),a(j,"type","text"),a(x,"class","flex flex-col px-2 py-2 text-white items-center"),a(F,"class","font-mono bg-black/25 py-1 text-xs w-64 select-all"),a(F,"type","text"),a($,"class","flex flex-col px-2 py-2 text-white items-center"),a(re,"class","bg-white/10 hover:bg-white/25 rounded-l border text-white w-32 px-2 py-1"),a(ae,"class","bg-white/10 hover:bg-white/25 rounded-r border text-white w-32 px-2 py-1"),a(ee,"class","flex flex-row items-center px-2"),a(se,"class","bg-white/10 hover:bg-white/25 rounded-b border-b border-r border-l text-white w-32 px-2 py-1 self-center"),a(A,"class","flex flex-col"),a(l,"class","bg-black/25 lg:bg-black/50 lg:rounded-br-2xl px-2 py-2 flex flex-col lg:flex-row w-screen lg:w-auto items-center lg:items-start"),a(te,"class",ze="w-10 h-10 py-1 px-2 bg-black/50 "+(t[0]?"opacity-100 hover:bg-black":"opacity-20")+" hover:opacity-100 rounded-br-2xl")},m(y,O){R(y,e,O),d(e,l),d(l,i),d(i,n),d(n,r),d(r,s),d(n,u),d(n,f),d(f,_),T(_,t[1]),d(f,m),d(f,o),T(o,t[1]),d(i,h),d(i,w),d(w,N),d(N,V),d(w,C),d(w,I),d(I,S),T(S,t[2]),d(I,H),d(I,z),T(z,t[2]),d(i,q),d(i,U),d(U,X),d(X,D),d(U,Q),d(U,M),d(M,c),T(c,t[3]),d(M,Z),d(M,B),T(B,t[3]),d(l,Ie),d(l,A),d(A,x),d(x,ge),d(ge,Ge),d(x,Je),d(x,j),T(j,t[4]),d(A,Ke),d(A,$),d($,ve),d(ve,Qe),d($,Ze),d($,F),T(F,t[5]),d(A,xe),d(A,ee),d(ee,re),d(re,be),d(be,$e),d(ee,et),d(ee,ae),d(ae,ye),d(ye,tt),d(A,lt),d(A,se),d(se,Se),d(Se,nt),d(e,it),d(e,te),Le(oe,te,null),we=!0,rt||(ft=[P(_,"input",t[6]),P(o,"change",t[7]),P(o,"input",t[7]),P(S,"input",t[8]),P(z,"change",t[9]),P(z,"input",t[9]),P(c,"input",t[10]),P(B,"change",t[11]),P(B,"input",t[11]),P(j,"input",t[12]),P(F,"input",t[13]),P(re,"click",t[14]),P(ae,"click",t[15]),P(se,"click",t[16]),P(te,"click",t[17])],rt=!0)},p(y,O){O&2&&K(_.value)!==y[1]&&T(_,y[1]),O&2&&T(o,y[1]),O&4&&K(S.value)!==y[2]&&T(S,y[2]),O&4&&T(z,y[2]),O&8&&K(c.value)!==y[3]&&T(c,y[3]),O&8&&T(B,y[3]),O&16&&j.value!==y[4]&&T(j,y[4]),O&32&&F.value!==y[5]&&T(F,y[5]),(!we||O&1&&ze!==(ze="w-10 h-10 py-1 px-2 bg-black/50 "+(y[0]?"opacity-100 hover:bg-black":"opacity-20")+" hover:opacity-100 rounded-br-2xl"))&&a(te,"class",ze)},i(y){we||(L(oe.$$.fragment,y),at(()=>{le||(le=Pt(e,Ut,{y:-200,duration:200},!0)),le.run(1)}),we=!0)},o(y){ie(oe.$$.fragment,y),le||(le=Pt(e,Ut,{y:-200,duration:200},!1)),le.run(0),we=!1},d(y){y&&p(e),We(oe),y&&le&&le.end(),rt=!1,At(ft)}}}function Mt(t){let e,l,i,n,r,s;return l=new Rt({props:{icon:Xt.faAngleDown,size:"2x",class:"text-white"}}),{c(){e=g("button"),Xe(l.$$.fragment),this.h()},l(u){e=v(u,"BUTTON",{class:!0});var f=b(e);Ye(l.$$.fragment,f),f.forEach(p),this.h()},h(){a(e,"class",i="w-10 h-10 py-1 px-2 z-50 bg-black/50 "+(t[0]?"opacity-100 hover:bg-black":"opacity-20")+" hover:opacity-100 absolute rounded-br-2xl")},m(u,f){R(u,e,f),Le(l,e,null),n=!0,r||(s=[P(e,"mouseover",t[18]),P(e,"focus",t[19]),P(e,"click",t[20])],r=!0)},p(u,f){(!n||f&1&&i!==(i="w-10 h-10 py-1 px-2 z-50 bg-black/50 "+(u[0]?"opacity-100 hover:bg-black":"opacity-20")+" hover:opacity-100 absolute rounded-br-2xl"))&&a(e,"class",i)},i(u){n||(L(l.$$.fragment,u),n=!0)},o(u){ie(l.$$.fragment,u),n=!1},d(u){u&&p(e),We(l),r=!1,At(s)}}}function tl(t){let e,l,i,n=t[0]&&Bt(t),r=!t[0]&&Vt&&Mt(t);return{c(){e=g("div"),n&&n.c(),l=k(),r&&r.c(),this.h()},l(s){e=v(s,"DIV",{class:!0});var u=b(e);n&&n.l(u),l=E(u),r&&r.l(u),u.forEach(p),this.h()},h(){a(e,"class","flex flex-col")},m(s,u){R(s,e,u),n&&n.m(e,null),d(e,l),r&&r.m(e,null),i=!0},p(s,[u]){s[0]?n?(n.p(s,u),u&1&&L(n,1)):(n=Bt(s),n.c(),L(n,1),n.m(e,l)):n&&(Nt(),ie(n,1,1,()=>{n=null}),Ot()),!s[0]&&Vt?r?(r.p(s,u),u&1&&L(r,1)):(r=Mt(s),r.c(),L(r,1),r.m(e,null)):r&&(Nt(),ie(r,1,1,()=>{r=null}),Ot())},i(s){i||(L(n),L(r),i=!0)},o(s){ie(n),ie(r),i=!1},d(s){s&&p(e),n&&n.d(),r&&r.d()}}}function ll(t,e,l){let i,n,r,s,u;W(t,fe,D=>l(1,i=D)),W(t,ue,D=>l(2,n=D)),W(t,ce,D=>l(3,r=D)),W(t,me,D=>l(4,s=D)),W(t,he,D=>l(5,u=D));let f=!1;function _(){i=K(this.value),fe.set(i)}function m(){i=K(this.value),fe.set(i)}function o(){n=K(this.value),ue.set(n)}function h(){n=K(this.value),ue.set(n)}function w(){r=K(this.value),ce.set(r)}function N(){r=K(this.value),ce.set(r)}function V(){s=this.value,me.set(s)}function C(){u=this.value,he.set(u)}return[f,i,n,r,s,u,_,m,o,h,w,N,V,C,()=>{Y(me,s=st,s),Y(he,u=ot,u)},()=>{Y(fe,i=4,i),Y(ue,n=3,n),Y(ce,r=320,r)},()=>{Y(me,s=st,s),Y(he,u=ot,u),Y(fe,i=4,i),Y(ue,n=3,n),Y(ce,r=320,r)},()=>l(0,f=!1),()=>l(0,f=!0),()=>l(0,f=!0),()=>{l(0,f=!0)}]}class nl extends qe{constructor(e){super(),je(this,e,ll,tl,Fe,{})}}function il(t){let e,l,i,n,r,s,u;return n=new Ft({props:{bgSrc:t[0],emblemSrc:t[1],emblemSize:t[2],spinSpeed:t[3],speed:t[4]}}),s=new nl({}),{c(){e=k(),l=g("div"),i=g("div"),Xe(n.$$.fragment),r=k(),Xe(s.$$.fragment),this.h()},l(f){Wt('[data-svelte="svelte-1aryp3k"]',document.head).forEach(p),e=E(f),l=v(f,"DIV",{class:!0});var m=b(l);i=v(m,"DIV",{class:!0});var o=b(i);Ye(n.$$.fragment,o),o.forEach(p),r=E(m),Ye(s.$$.fragment,m),m.forEach(p),this.h()},h(){document.title="DVD player",a(i,"class","-z-50"),a(l,"class","flex")},m(f,_){R(f,e,_),R(f,l,_),d(l,i),Le(n,i,null),d(l,r),Le(s,l,null),u=!0},p(f,[_]){const m={};_&1&&(m.bgSrc=f[0]),_&2&&(m.emblemSrc=f[1]),_&4&&(m.emblemSize=f[2]),_&8&&(m.spinSpeed=f[3]),_&16&&(m.speed=f[4]),n.$set(m)},i(f){u||(L(n.$$.fragment,f),L(s.$$.fragment,f),u=!0)},o(f){ie(n.$$.fragment,f),ie(s.$$.fragment,f),u=!1},d(f){f&&p(e),f&&p(l),We(n),We(s)}}}const ol=!0;function rl(t,e,l){let i,n,r,s,u;return W(t,he,f=>l(0,i=f)),W(t,me,f=>l(1,n=f)),W(t,ce,f=>l(2,r=f)),W(t,ue,f=>l(3,s=f)),W(t,fe,f=>l(4,u=f)),[i,n,r,s,u]}class fl extends qe{constructor(e){super(),je(this,e,rl,il,Fe,{})}}export{fl as default,ol as prerender};
