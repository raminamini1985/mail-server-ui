import{K as p,r as t,dv as y,dw as x,j as e,d as u,c8 as w,dx as v,dy as C,s as F,cU as N,b8 as j,x as k,b0 as T,aW as D,aX as b,F as g,H as R,dn as S,bi as E}from"./index-hRi6i2cB.js";function P(o){const{children:s,document:n}=o,a=p();t.useEffect(()=>{n.body.dir=a.direction},[n,a.direction]);const i=t.useMemo(()=>y({key:`iframe-demo-${a.direction}`,prepend:!0,container:n.head,stylisPlugins:a.direction==="rtl"?[x]:[]}),[n,a.direction]),r=t.useCallback(()=>n.defaultView,[n]);return e(C,{target:n.head,stylisPlugins:a.direction==="rtl"?[x]:[],children:u(v,{value:i,children:[e(w,{styles:()=>({html:{fontSize:"62.5%"}})}),t.cloneElement(s,{window:r})]})})}const L=F("iframe")(({theme:o})=>({backgroundColor:o.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:o.shadows[1]}));function $(o){var f;const{children:s,name:n,...a}=o,i=`${n} demo`,r=t.useRef(null),[d,c]=t.useReducer(()=>!0,!1);t.useEffect(()=>{var h;const l=(h=r.current)==null?void 0:h.contentDocument;l!=null&&l.readyState==="complete"&&!d&&c()},[d]);const m=(f=r.current)==null?void 0:f.contentDocument;return u(j,{children:[e(L,{onLoad:c,ref:r,title:i,...a}),d!==!1?N.createPortal(e(P,{document:m,children:s}),m.body):null]})}const G=t.memo($);function I(o){const{component:s,raw:n,iframe:a,className:i,name:r="",currentTabIndex:d=0}=o,[c,m]=t.useState(d);function f(l,h){m(h)}return u(E,{className:k(i,"shadow"),children:[e(R,{sx:{backgroundColor:l=>T(l.palette.background.paper,l.palette.mode==="light"?.02:.2)},children:u(D,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:c,onChange:f,textColor:"secondary",indicatorColor:"secondary",children:[s&&e(b,{classes:{root:"min-w-64"},icon:e(g,{children:"heroicons-outline:eye"})}),n&&e(b,{classes:{root:"min-w-64"},icon:e(g,{children:"heroicons-outline:code"})})]})}),u("div",{className:"relative flex max-w-full justify-center",children:[e("div",{className:c===0?"flex max-w-full flex-1":"hidden",children:s&&(a?e(G,{name:r,children:e(s,{})}):e("div",{className:"flex max-w-full flex-1 justify-center p-24",children:e(s,{})}))}),e("div",{className:c===1?"flex flex-1":"hidden",children:n&&e("div",{className:"flex flex-1",children:e(S,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:n})})})]})]})}export{I as F};