import{r as m,$ as R,Z as P,s as u,bu as s,bv as $,bw as W,bs as g,a2 as M,g as w,U as C,S as r}from"./index-C8FJCBfb.js";const N=m.createContext({});function A(o){return P("MuiImageListItem",o)}const j=R("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),B=j,T=["children","className","cols","component","rows","style"],E=o=>{const{classes:t,variant:e}=o;return C({root:["root",e],img:["img"]},A,t)},U=u("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[{[`& .${B.img}`]:t.img},t.root,t[e.variant]]}})(({ownerState:o})=>s({display:"block",position:"relative"},o.variant==="standard"&&{display:"flex",flexDirection:"column"},o.variant==="woven"&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{[`& .${B.img}`]:s({objectFit:"cover",width:"100%",height:"100%",display:"block"},o.variant==="standard"&&{height:"auto",flexGrow:1})})),S=m.forwardRef(function(t,e){const i=$({props:t,name:"MuiImageListItem"}),{children:l,className:d,cols:h=1,component:v="li",rows:p=1,style:f}=i,L=W(i,T),{rowHeight:a="auto",gap:n,variant:c}=m.useContext(N);let x="auto";c==="woven"?x=void 0:a!=="auto"&&(x=a*p+n*(p-1));const y=s({},i,{cols:h,component:v,gap:n,rowHeight:a,rows:p,variant:c}),b=E(y);return g.jsx(U,s({as:v,className:w(b.root,b[c],d),ref:e,style:s({height:x,gridColumnEnd:c!=="masonry"?`span ${h}`:void 0,gridRowEnd:c!=="masonry"?`span ${p}`:void 0,marginBottom:c==="masonry"?n:void 0,breakInside:c==="masonry"?"avoid":void 0},f),ownerState:y},L,{children:m.Children.map(l,I=>m.isValidElement(I)?I.type==="img"||M(I,["Image"])?m.cloneElement(I,{className:w(b.img,I.props.className)}):I:null)}))}),Z=S;function k(o){return P("MuiImageListItemBar",o)}R("MuiImageListItemBar",["root","positionBottom","positionTop","positionBelow","titleWrap","titleWrapBottom","titleWrapTop","titleWrapBelow","titleWrapActionPosLeft","titleWrapActionPosRight","title","subtitle","actionIcon","actionIconActionPosLeft","actionIconActionPosRight"]);const _=["actionIcon","actionPosition","className","subtitle","title","position"],z=o=>{const{classes:t,position:e,actionIcon:i,actionPosition:l}=o,d={root:["root",`position${r(e)}`],titleWrap:["titleWrap",`titleWrap${r(e)}`,i&&`titleWrapActionPos${r(l)}`],title:["title"],subtitle:["subtitle"],actionIcon:["actionIcon",`actionIconActionPos${r(l)}`]};return C(d,k,t)},F=u("div",{name:"MuiImageListItemBar",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,t[`position${r(e.position)}`]]}})(({theme:o,ownerState:t})=>s({position:"absolute",left:0,right:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:o.typography.fontFamily},t.position==="bottom"&&{bottom:0},t.position==="top"&&{top:0},t.position==="below"&&{position:"relative",background:"transparent",alignItems:"normal"})),H=u("div",{name:"MuiImageListItemBar",slot:"TitleWrap",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.titleWrap,t[`titleWrap${r(e.position)}`],e.actionIcon&&t[`titleWrapActionPos${r(e.actionPosition)}`]]}})(({theme:o,ownerState:t})=>s({flexGrow:1,padding:"12px 16px",color:(o.vars||o).palette.common.white,overflow:"hidden"},t.position==="below"&&{padding:"6px 0 12px",color:"inherit"},t.actionIcon&&t.actionPosition==="left"&&{paddingLeft:0},t.actionIcon&&t.actionPosition==="right"&&{paddingRight:0})),G=u("div",{name:"MuiImageListItemBar",slot:"Title",overridesResolver:(o,t)=>t.title})(({theme:o})=>({fontSize:o.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"})),O=u("div",{name:"MuiImageListItemBar",slot:"Subtitle",overridesResolver:(o,t)=>t.subtitle})(({theme:o})=>({fontSize:o.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"})),q=u("div",{name:"MuiImageListItemBar",slot:"ActionIcon",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.actionIcon,t[`actionIconActionPos${r(e.actionPosition)}`]]}})(({ownerState:o})=>s({},o.actionPosition==="left"&&{order:-1})),D=m.forwardRef(function(t,e){const i=$({props:t,name:"MuiImageListItemBar"}),{actionIcon:l,actionPosition:d="right",className:h,subtitle:v,title:p,position:f="bottom"}=i,L=W(i,_),a=s({},i,{position:f,actionPosition:d}),n=z(a);return g.jsxs(F,s({ownerState:a,className:w(n.root,h),ref:e},L,{children:[g.jsxs(H,{ownerState:a,className:n.titleWrap,children:[g.jsx(G,{className:n.title,children:p}),v?g.jsx(O,{className:n.subtitle,children:v}):null]}),l?g.jsx(q,{ownerState:a,className:n.actionIcon,children:l}):null]}))}),J=D;export{Z as I,J as a,N as b};