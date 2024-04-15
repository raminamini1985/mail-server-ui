import{$ as re,Z as ie,r as c,s as U,cc as Fe,S as L,bu as y,al as D,bw as q,K as Ae,bv as se,bs as v,g as ue,U as ce,br as x,ag as C,d as s,j as e,c3 as de,aD as ye,P as Re,h as $e,o as we,T as a,d3 as Ie,aH as ze}from"./index-C8FJCBfb.js";import{F as A}from"./FuseExample-DpwYu1DD.js";import{D as _e}from"./DocumentationPageBreadcrumb-B0t3mRJf.js";import{d as V,a as H,b as k,c as me,e as ge}from"./FormatItalic-BFuqnQ9U.js";import{g as Me}from"./getValidReactChildren-BKU4XdJM.js";import{d as pe}from"./ArrowDropDown-CanW6Q_U.js";import{d as je}from"./Check-CLiPryME.js";import"./DocumentationNavigation-CoT9gNpi.js";import"./ChangelogDoc-zjSh-eTP.js";function Ge(t){return ie("MuiToggleButton",t)}const Se=re("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),I=Se,ve=c.createContext({}),Ne=c.createContext(void 0),fe=Ne;function De(t,o){return o===void 0||t===void 0?!1:Array.isArray(o)?o.indexOf(t)>=0:t===o}const Le=["value"],Ve=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],He=t=>{const{classes:o,fullWidth:n,selected:i,disabled:u,size:f,color:m}=t,d={root:["root",i&&"selected",u&&"disabled",n&&"fullWidth",`size${L(f)}`,m]};return ce(d,Ge,o)},ke=U(Fe,{name:"MuiToggleButton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[`size${L(n.size)}`]]}})(({theme:t,ownerState:o})=>{let n=o.color==="standard"?t.palette.text.primary:t.palette[o.color].main,i;return t.vars&&(n=o.color==="standard"?t.vars.palette.text.primary:t.vars.palette[o.color].main,i=o.color==="standard"?t.vars.palette.text.primaryChannel:t.vars.palette[o.color].mainChannel),y({},t.typography.button,{borderRadius:(t.vars||t).shape.borderRadius,padding:11,border:`1px solid ${(t.vars||t).palette.divider}`,color:(t.vars||t).palette.action.active},o.fullWidth&&{width:"100%"},{[`&.${I.disabled}`]:{color:(t.vars||t).palette.action.disabled,border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:D(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${I.selected}`]:{color:n,backgroundColor:t.vars?`rgba(${i} / ${t.vars.palette.action.selectedOpacity})`:D(n,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${i} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:D(n,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${i} / ${t.vars.palette.action.selectedOpacity})`:D(n,t.palette.action.selectedOpacity)}}}},o.size==="small"&&{padding:7,fontSize:t.typography.pxToRem(13)},o.size==="large"&&{padding:15,fontSize:t.typography.pxToRem(15)})}),Pe=c.forwardRef(function(o,n){const i=c.useContext(ve),{value:u}=i,f=q(i,Le),m=c.useContext(fe),d=Ae(y({},f,{selected:De(o.value,u)}),o),R=se({props:d,name:"MuiToggleButton"}),{children:z,className:F,color:E="standard",disabled:$=!1,disableFocusRipple:g=!1,fullWidth:O=!1,onChange:w,onClick:B,selected:M,size:j="medium",value:_}=R,G=q(R,Ve),S=y({},R,{color:E,disabled:$,disableFocusRipple:g,fullWidth:O,size:j}),W=He(S),h=T=>{B&&(B(T,_),T.defaultPrevented)||w&&w(T,_)},p=m||"";return v.jsx(ke,y({className:ue(f.className,W.root,F,p),disabled:$,focusRipple:!g,ref:n,onClick:h,onChange:w,value:_,ownerState:S,"aria-pressed":M},G,{children:z}))}),l=Pe;function Ee(t){return ie("MuiToggleButtonGroup",t)}const Oe=re("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),r=Oe,We=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],qe=t=>{const{classes:o,orientation:n,fullWidth:i,disabled:u}=t,f={root:["root",n==="vertical"&&"vertical",i&&"fullWidth"],grouped:["grouped",`grouped${L(n)}`,u&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return ce(f,Ee,o)},Ue=U("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[{[`& .${r.grouped}`]:o.grouped},{[`& .${r.grouped}`]:o[`grouped${L(n.orientation)}`]},{[`& .${r.firstButton}`]:o.firstButton},{[`& .${r.lastButton}`]:o.lastButton},{[`& .${r.middleButton}`]:o.middleButton},o.root,n.orientation==="vertical"&&o.vertical,n.fullWidth&&o.fullWidth]}})(({ownerState:t,theme:o})=>y({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},t.orientation==="vertical"&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},{[`& .${r.grouped}`]:y({},t.orientation==="horizontal"?{[`&.${r.selected} + .${r.grouped}.${r.selected}`]:{borderLeft:0,marginLeft:0}}:{[`&.${r.selected} + .${r.grouped}.${r.selected}`]:{borderTop:0,marginTop:0}})},t.orientation==="horizontal"?{[`& .${r.firstButton},& .${r.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${r.lastButton},& .${r.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0}}:{[`& .${r.firstButton},& .${r.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${r.lastButton},& .${r.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0}},t.orientation==="horizontal"?{[`& .${r.lastButton}.${I.disabled},& .${r.middleButton}.${I.disabled}`]:{borderLeft:"1px solid transparent"}}:{[`& .${r.lastButton}.${I.disabled},& .${r.middleButton}.${I.disabled}`]:{borderTop:"1px solid transparent"}})),Je=c.forwardRef(function(o,n){const i=se({props:o,name:"MuiToggleButtonGroup"}),{children:u,className:f,color:m="standard",disabled:d=!1,exclusive:R=!1,fullWidth:z=!1,onChange:F,orientation:E="horizontal",size:$="medium",value:g}=i,O=q(i,We),w=y({},i,{disabled:d,fullWidth:z,orientation:E,size:$}),B=qe(w),M=c.useCallback((h,p)=>{if(!F)return;const T=g&&g.indexOf(p);let N;g&&T>=0?(N=g.slice(),N.splice(T,1)):N=g?g.concat(p):[p],F(h,N)},[F,g]),j=c.useCallback((h,p)=>{F&&F(h,g===p?null:p)},[F,g]),_=c.useMemo(()=>({className:B.grouped,onChange:R?j:M,value:g,size:$,fullWidth:z,color:m,disabled:d}),[B.grouped,R,j,M,g,$,z,m,d]),G=Me(u),S=G.length,W=h=>{const p=h===0,T=h===S-1;return p&&T?"":p?B.firstButton:T?B.lastButton:B.middleButton};return v.jsx(Ue,y({role:"group",className:ue(B.root,f),ref:n,ownerState:w},O,{children:v.jsx(ve.Provider,{value:_,children:G.map((h,p)=>v.jsx(fe.Provider,{value:W(p),children:h},p))})}))}),b=Je;var J={},Qe=C;Object.defineProperty(J,"__esModule",{value:!0});var P=J.default=void 0,Ye=Qe(x()),Ke=v;P=J.default=(0,Ye.default)((0,Ke.jsx)("path",{d:"M3 21h18v-2H3zm0-4h18v-2H3zm0-4h18v-2H3zm0-4h18V7H3zm0-6v2h18V3z"}),"FormatAlignJustify");function Ze(){const[t,o]=c.useState("left");return s(b,{value:t,exclusive:!0,onChange:(i,u)=>{o(u)},"aria-label":"text alignment",children:[e(l,{value:"left","aria-label":"left aligned",children:e(V,{})}),e(l,{value:"center","aria-label":"centered",children:e(H,{})}),e(l,{value:"right","aria-label":"right aligned",children:e(k,{})}),e(l,{value:"justify","aria-label":"justified",disabled:!0,children:e(P,{})})]})}const Xe=`import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState<string | null>('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
`;var Q={},et=C;Object.defineProperty(Q,"__esModule",{value:!0});var Y=Q.default=void 0,tt=et(x()),ot=v;Y=Q.default=(0,tt.default)((0,ot.jsx)("path",{d:"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6m-7 2v2h14v-2z"}),"FormatUnderlined");var K={},lt=C;Object.defineProperty(K,"__esModule",{value:!0});var Z=K.default=void 0,at=lt(x()),nt=v;Z=K.default=(0,at.default)((0,nt.jsx)("path",{d:"M16.56 8.94 7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12M5.21 10 10 5.21 14.79 10zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5M2 20h20v4H2z"}),"FormatColorFill");function rt(){const[t,o]=c.useState(()=>["bold","italic"]);return s(b,{value:t,onChange:(i,u)=>{o(u)},"aria-label":"text formatting",children:[e(l,{value:"bold","aria-label":"bold",children:e(me,{})}),e(l,{value:"italic","aria-label":"italic",children:e(ge,{})}),e(l,{value:"underlined","aria-label":"underlined",children:e(Y,{})}),s(l,{value:"color","aria-label":"color",disabled:!0,children:[e(Z,{}),e(pe,{})]})]})}const it=`import * as React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonsMultiple() {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="underlined">
        <FormatUnderlinedIcon />
      </ToggleButton>
      <ToggleButton value="color" aria-label="color" disabled>
        <FormatColorFillIcon />
        <ArrowDropDownIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
`;function st(){const[t,o]=c.useState("left"),n=(f,m)=>{o(m)},i=[e(l,{value:"left",children:e(V,{})},"left"),e(l,{value:"center",children:e(H,{})},"center"),e(l,{value:"right",children:e(k,{})},"right"),e(l,{value:"justify",children:e(P,{})},"justify")],u={value:t,onChange:n,exclusive:!0};return s(de,{spacing:2,alignItems:"center",children:[e(b,{size:"small",...u,"aria-label":"Small sizes",children:i}),e(b,{...u,"aria-label":"Medium sizes",children:i}),e(b,{size:"large",...u,"aria-label":"Large sizes",children:i})]})}const ut=`import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonSizes() {
  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="left" key="left">
      <FormatAlignLeftIcon />
    </ToggleButton>,
    <ToggleButton value="center" key="center">
      <FormatAlignCenterIcon />
    </ToggleButton>,
    <ToggleButton value="right" key="right">
      <FormatAlignRightIcon />
    </ToggleButton>,
    <ToggleButton value="justify" key="justify">
      <FormatAlignJustifyIcon />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Stack spacing={2} alignItems="center">
      <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control} aria-label="Medium sizes">
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup size="large" {...control} aria-label="Large sizes">
        {children}
      </ToggleButtonGroup>
    </Stack>
  );
}
`;function ct(){const[t,o]=c.useState("web");return s(b,{color:"primary",value:t,exclusive:!0,onChange:(i,u)=>{o(u)},"aria-label":"Platform",children:[e(l,{value:"web",children:"Web"}),e(l,{value:"android",children:"Android"}),e(l,{value:"ios",children:"iOS"})]})}const dt=`import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="android">Android</ToggleButton>
      <ToggleButton value="ios">iOS</ToggleButton>
    </ToggleButtonGroup>
  );
}
`;var X={},mt=C;Object.defineProperty(X,"__esModule",{value:!0});var he=X.default=void 0,gt=mt(x()),pt=v;he=X.default=(0,gt.default)((0,pt.jsx)("path",{d:"M3 14h4v-4H3zm0 5h4v-4H3zM3 9h4V5H3zm5 5h13v-4H8zm0 5h13v-4H8zM8 5v4h13V5z"}),"ViewList");var ee={},vt=C;Object.defineProperty(ee,"__esModule",{value:!0});var be=ee.default=void 0,ft=vt(x()),ht=v;be=ee.default=(0,ft.default)((0,ht.jsx)("path",{d:"M14.67 5v6.5H9.33V5zm1 6.5H21V5h-5.33zm-1 7.5v-6.5H9.33V19zm1-6.5V19H21v-6.5zm-7.34 0H3V19h5.33zm0-1V5H3v6.5z"}),"ViewModule");var te={},bt=C;Object.defineProperty(te,"__esModule",{value:!0});var Be=te.default=void 0,Bt=bt(x()),Tt=v;Be=te.default=(0,Bt.default)((0,Tt.jsx)("path",{d:"M21 5v6.5H9.33V5zm-6.33 14v-6.5H9.33V19zm1-6.5V19H21v-6.5zM8.33 19V5H3v14z"}),"ViewQuilt");function xt(){const[t,o]=c.useState("list");return s(b,{orientation:"vertical",value:t,exclusive:!0,onChange:(i,u)=>{o(u)},children:[e(l,{value:"list","aria-label":"list",children:e(he,{})}),e(l,{value:"module","aria-label":"module",children:e(be,{})}),e(l,{value:"quilt","aria-label":"quilt",children:e(Be,{})})]})}const Ct=`import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function VerticalToggleButtons() {
  const [view, setView] = React.useState('list');

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="module" aria-label="module">
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton value="quilt" aria-label="quilt">
        <ViewQuiltIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
`;var oe={},Ft=C;Object.defineProperty(oe,"__esModule",{value:!0});var Te=oe.default=void 0,At=Ft(x()),yt=v;Te=oe.default=(0,At.default)((0,yt.jsx)("path",{d:"M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z"}),"Laptop");var le={},Rt=C;Object.defineProperty(le,"__esModule",{value:!0});var xe=le.default=void 0,$t=Rt(x()),wt=v;xe=le.default=(0,$t.default)((0,wt.jsx)("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2m0 14H3V5h18z"}),"Tv");var ae={},It=C;Object.defineProperty(ae,"__esModule",{value:!0});var Ce=ae.default=void 0,zt=It(x()),_t=v;Ce=ae.default=(0,zt.default)((0,_t.jsx)("path",{d:"M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3m-2 20h-4v-1h4zm3.25-3H6.75V4h10.5z"}),"PhoneAndroid");function Mt(){const[t,o]=c.useState("left"),[n,i]=c.useState(()=>["phone"]);return s(de,{direction:"row",spacing:4,children:[s(b,{value:t,exclusive:!0,onChange:(m,d)=>{d!==null&&o(d)},"aria-label":"text alignment",children:[e(l,{value:"left","aria-label":"left aligned",children:e(V,{})}),e(l,{value:"center","aria-label":"centered",children:e(H,{})}),e(l,{value:"right","aria-label":"right aligned",children:e(k,{})})]}),s(b,{value:n,onChange:(m,d)=>{d.length&&i(d)},"aria-label":"device",children:[e(l,{value:"laptop","aria-label":"laptop",children:e(Te,{})}),e(l,{value:"tv","aria-label":"tv",children:e(xe,{})}),e(l,{value:"phone","aria-label":"phone",children:e(Ce,{})})]})]})}const jt=`import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import LaptopIcon from '@mui/icons-material/Laptop';
import TvIcon from '@mui/icons-material/Tv';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonNotEmpty() {
  const [alignment, setAlignment] = React.useState('left');
  const [devices, setDevices] = React.useState(() => ['phone']);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleDevices = (
    event: React.MouseEvent<HTMLElement>,
    newDevices: string[],
  ) => {
    if (newDevices.length) {
      setDevices(newDevices);
    }
  };

  return (
    <Stack direction="row" spacing={4}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={devices}
        onChange={handleDevices}
        aria-label="device"
      >
        <ToggleButton value="laptop" aria-label="laptop">
          <LaptopIcon />
        </ToggleButton>
        <ToggleButton value="tv" aria-label="tv">
          <TvIcon />
        </ToggleButton>
        <ToggleButton value="phone" aria-label="phone">
          <PhoneAndroidIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
`;function Gt(){const[t,o]=c.useState(!1);return e(l,{value:"check",selected:t,onChange:()=>{o(!t)},children:e(je,{})})}const St=`import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';

export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <CheckIcon />
    </ToggleButton>
  );
}
`,ne=U(b)(({theme:t})=>({[`& .${r.grouped}`]:{margin:t.spacing(.5),border:0,borderRadius:t.shape.borderRadius,[`&.${r.disabled}`]:{border:0}},[`& .${r.middleButton},& .${r.lastButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent"}}));function Nt(){const[t,o]=c.useState("left"),[n,i]=c.useState(()=>["italic"]);return e("div",{children:s(Re,{elevation:0,sx:{display:"flex",border:m=>`1px solid ${m.palette.divider}`,flexWrap:"wrap"},children:[s(ne,{size:"small",value:t,exclusive:!0,onChange:(m,d)=>{o(d)},"aria-label":"text alignment",children:[e(l,{value:"left","aria-label":"left aligned",children:e(V,{})}),e(l,{value:"center","aria-label":"centered",children:e(H,{})}),e(l,{value:"right","aria-label":"right aligned",children:e(k,{})}),e(l,{value:"justify","aria-label":"justified",disabled:!0,children:e(P,{})})]}),e(ye,{flexItem:!0,orientation:"vertical",sx:{mx:.5,my:1}}),s(ne,{size:"small",value:n,onChange:(m,d)=>{i(d)},"aria-label":"text formatting",children:[e(l,{value:"bold","aria-label":"bold",children:e(me,{})}),e(l,{value:"italic","aria-label":"italic",children:e(ge,{})}),e(l,{value:"underlined","aria-label":"underlined",children:e(Y,{})}),s(l,{value:"color","aria-label":"color",disabled:!0,children:[e(Z,{}),e(pe,{})]})]})]})})}const Dt=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [\`& .\${toggleButtonGroupClasses.grouped}\`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [\`&.\${toggleButtonGroupClasses.disabled}\`]: {
      border: 0,
    },
  },
  [\`& .\${toggleButtonGroupClasses.middleButton},& .\${toggleButtonGroupClasses.lastButton}\`]:
    {
      marginLeft: -1,
      borderLeft: '1px solid transparent',
    },
}));

export default function CustomizedDividers() {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          border: (theme) => \`1px solid \${theme.palette.divider}\`,
          flexWrap: 'wrap',
        }}
      >
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color" disabled>
            <FormatColorFillIcon />
            <ArrowDropDownIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
}
`;function Ut(t){return s(ze,{children:[s("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(_e,{}),e(we,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/toggle-button",target:"_blank",role:"button",size:"small",startIcon:e($e,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(a,{className:"text-32 my-16 font-700",component:"h1",children:"Toggle Button"}),e(a,{className:"description",children:"A Toggle Button can be used to group related options."}),s(a,{className:"text-14 mb-32",component:"div",children:["To emphasize groups of related Toggle buttons, a group should share a common container. The ",e("code",{children:"ToggleButtonGroup"})," controls the selected state of its child buttons when given its own ",e("code",{children:"value"})," prop."]}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Exclusive selection"}),e(a,{className:"text-14 mb-32",component:"div",children:"With exclusive selection, selecting one option deselects any other."}),e(a,{className:"text-14 mb-32",component:"div",children:"In this example, text justification toggle buttons present options for left, center, right, and fully justified text (disabled), with only one item available for selection at a time."}),s(a,{className:"text-14 mb-32",component:"div",children:[e("strong",{children:"Note"}),": Exclusive selection does not enforce that a button must be active. For that effect see ",e("a",{href:"#enforce-value-set",children:"enforce value set"}),"."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(A,{name:"ToggleButtons.js",className:"my-16",iframe:!1,component:Ze,raw:Xe})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Multiple selection"}),e(a,{className:"text-14 mb-32",component:"div",children:"Multiple selection allows for logically-grouped options, like bold, italic, and underline, to have multiple options selected."}),e(a,{className:"text-14 mb-32",component:"div",children:e(A,{name:"ToggleButtonsMultiple.js",className:"my-16",iframe:!1,component:rt,raw:it})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Size"}),s(a,{className:"text-14 mb-32",component:"div",children:["For larger or smaller buttons, use the ",e("code",{children:"size"})," prop."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(A,{name:"ToggleButtonSizes.js",className:"my-16",iframe:!1,component:st,raw:ut})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Color"}),e(a,{className:"text-14 mb-32",component:"div",children:e(A,{name:"ColorToggleButton.js",className:"my-16",iframe:!1,component:ct,raw:dt})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Vertical buttons"}),s(a,{className:"text-14 mb-32",component:"div",children:["The buttons can be stacked vertically with the ",e("code",{children:"orientation"}),' prop set to "vertical".']}),e(a,{className:"text-14 mb-32",component:"div",children:e(A,{name:"VerticalToggleButtons.js",className:"my-16",iframe:!1,component:xt,raw:Ct})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Enforce value set"}),e(a,{className:"text-14 mb-32",component:"div",children:"If you want to enforce that at least one button must be active, you can adapt your handleChange function."}),e(Ie,{component:"pre",className:"language-jsx",children:` 
const handleAlignment = (event, newAlignment) => {
  if (newAlignment !== null) {
    setAlignment(newAlignment);
  }
};

const handleDevices = (event, newDevices) => {
  if (newDevices.length) {
    setDevices(newDevices);
  }
};
`}),e(a,{className:"text-14 mb-32",component:"div",children:e(A,{name:"ToggleButtonNotEmpty.js",className:"my-16",iframe:!1,component:Mt,raw:jt})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Standalone toggle button"}),e(a,{className:"text-14 mb-32",component:"div",children:e(A,{name:"StandaloneToggleButton.js",className:"my-16",iframe:!1,component:Gt,raw:St})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),s(a,{className:"text-14 mb-32",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the ",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(A,{name:"CustomizedDividers.js",className:"my-16",iframe:!1,component:Nt,raw:Dt})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),s("ul",{className:"space-y-16",children:[s("li",{children:["ToggleButtonGroup has ",e("code",{children:'role="group"'}),". You should provide an accessible label with ",e("code",{children:'aria-label="label"'}),", ",e("code",{children:'aria-labelledby="id"'})," or ",e("code",{children:"<label>"}),"."]}),s("li",{children:["ToggleButton sets ",e("code",{children:'aria-pressed="<bool>"'})," according to the button state. You should label each button with ",e("code",{children:"aria-label"}),"."]})]}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),e(a,{className:"text-14 mb-32",component:"div",children:"At present, toggle buttons are in DOM order. Navigate between them with the tab key. The button behavior follows standard keyboard semantics."})]})}export{Ut as default};
