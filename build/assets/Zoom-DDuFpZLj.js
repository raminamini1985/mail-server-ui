import{r as c,K as F,bY as K,aM as M,bZ as V,bV as E,d_ as W,d$ as Y,e0 as g}from"./index-hRi6i2cB.js";const q=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],A={entering:{transform:"none"},entered:{transform:"none"}},B=c.forwardRef(function(l,p){const e=F(),y={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:f,appear:T=!0,children:s,easing:m,in:x,onEnter:u,onEntered:R,onEntering:b,onExit:h,onExited:L,onExiting:P,style:a,timeout:d=y,TransitionComponent:Z=W}=l,v=K(l,q),r=c.useRef(null),w=M(r,s.ref,p),o=n=>t=>{if(n){const i=r.current;t===void 0?n(i):n(i,t)}},_=o(b),j=o((n,t)=>{Y(n);const i=g({style:a,timeout:d,easing:m},{mode:"enter"});n.style.webkitTransition=e.transitions.create("transform",i),n.style.transition=e.transitions.create("transform",i),u&&u(n,t)}),C=o(R),k=o(P),S=o(n=>{const t=g({style:a,timeout:d,easing:m},{mode:"exit"});n.style.webkitTransition=e.transitions.create("transform",t),n.style.transition=e.transitions.create("transform",t),h&&h(n)}),$=o(L),z=n=>{f&&f(r.current,n)};return V.jsx(Z,E({appear:T,in:x,nodeRef:r,onEnter:j,onEntered:C,onEntering:_,onExit:S,onExited:$,onExiting:k,addEndListener:z,timeout:d},v,{children:(n,t)=>c.cloneElement(s,E({style:E({transform:"scale(0)",visibility:n==="exited"&&!x?"hidden":void 0},A[n],a,s.props.style),ref:w},t))}))}),H=B;export{H as Z};