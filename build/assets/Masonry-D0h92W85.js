import{Z as ae,$ as se,s as p,r as H,bv as ie,bw as re,bu as B,a9 as me,ab as ce,bs as q,g as le,U as de,dp as G,dJ as pe,H as T,dq as j,aV as he,dK as E,P as y,j as n,B as x,d as i,bo as ue,bp as ge,T as o,bq as fe,h as ye,o as xe,aH as be}from"./index-C8FJCBfb.js";import{F as g}from"./FuseExample-DpwYu1DD.js";import{D as Me}from"./DocumentationPageBreadcrumb-B0t3mRJf.js";import{d as ke}from"./ExpandMore-CqXTXRHA.js";import"./DocumentationNavigation-CoT9gNpi.js";import"./ChangelogDoc-zjSh-eTP.js";function we(e){return ae("MuiMasonry",e)}se("MuiMasonry",["root"]);const Be=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],f=e=>Number(e.replace("px","")),Ce={flexBasis:"100%",width:0,margin:0,padding:0},ve=e=>{const{classes:t}=e;return de({root:["root"]},we,t)},Ne=({ownerState:e,theme:t})=>{let m={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const h={};if(e.isSSR){const s={},a=f(t.spacing(e.defaultSpacing));for(let r=1;r<=e.defaultColumns;r+=1)s[`&:nth-of-type(${e.defaultColumns}n+${r%e.defaultColumns})`]={order:r};return h.height=e.defaultHeight,h.margin=-(a/2),h["& > *"]=B({},m["& > *"],s,{margin:a/2,width:`calc(${(100/e.defaultColumns).toFixed(2)}% - ${a}px)`}),B({},m,h)}const c=G({values:e.spacing,breakpoints:t.breakpoints.values}),C=pe(t);m=T(m,j({theme:t},c,s=>{let a;if(typeof s=="string"&&!Number.isNaN(Number(s))||typeof s=="number"){const r=Number(s);a=E(C,r)}else a=s;return B({margin:`calc(0px - (${a} / 2))`,"& > *":{margin:`calc(${a} / 2)`}},e.maxColumnHeight&&{height:typeof a=="number"?Math.ceil(e.maxColumnHeight+f(a)):`calc(${e.maxColumnHeight}px + ${a})`})}));const l=G({values:e.columns,breakpoints:t.breakpoints.values});return m=T(m,j({theme:t},l,s=>{const r=`${(100/Number(s)).toFixed(2)}%`,v=typeof c=="string"&&!Number.isNaN(Number(c))||typeof c=="number"?E(C,Number(c)):"0px";return{"& > *":{width:`calc(${r} - ${v})`}}})),typeof c=="object"&&(m=T(m,j({theme:t},c,(s,a)=>{if(a){const r=Number(s),v=Object.keys(l).pop(),u=E(C,r);return{"& > *":{width:`calc(${`${(100/(typeof l=="object"?l[a]||l[v]:l)).toFixed(2)}%`} - ${u})`}}}return null}))),m},Re=p("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(e,t)=>[t.root]})(Ne),Se=H.forwardRef(function(t,m){const h=ie({props:t,name:"MuiMasonry"}),{children:c,className:C,component:L="div",columns:l=4,spacing:P=1,defaultColumns:s,defaultHeight:a,defaultSpacing:r}=h,v=re(h,Be),u=H.useRef(),[$,V]=H.useState(),z=!$&&a&&s!==void 0&&r!==void 0,[J,K]=H.useState(z?s-1:0),D=B({},h,{spacing:P,columns:l,maxColumnHeight:$,defaultColumns:s,defaultHeight:a,defaultSpacing:r,isSSR:z}),Z=ve(D),Q=M=>{if(!u.current||!M||M.length===0)return;const d=u.current,R=u.current.firstChild,O=d.clientWidth,W=R.clientWidth;if(O===0||W===0)return;const _=window.getComputedStyle(R),ee=f(_.marginLeft),ne=f(_.marginRight),F=Math.round(O/(W+ee+ne)),S=new Array(F).fill(0);let N=!1;d.childNodes.forEach(k=>{if(k.nodeType!==Node.ELEMENT_NODE||k.dataset.class==="line-break"||N)return;const A=window.getComputedStyle(k),te=f(A.marginTop),oe=f(A.marginBottom),U=f(A.height)?Math.ceil(f(A.height))+te+oe:0;if(U===0){N=!0;return}for(let w=0;w<k.childNodes.length;w+=1){const I=k.childNodes[w];if(I.tagName==="IMG"&&I.clientHeight===0){N=!0;break}}if(!N){const w=S.indexOf(Math.min(...S));S[w]+=U;const I=w+1;k.style.order=I}}),N||he.flushSync(()=>{V(Math.max(...S)),K(F>0?F-1:0)})};me(()=>{if(typeof ResizeObserver>"u")return;let M;const d=new ResizeObserver(()=>{M=requestAnimationFrame(Q)});return u.current&&u.current.childNodes.forEach(R=>{d.observe(R)}),()=>{M&&window.cancelAnimationFrame(M),d&&d.disconnect()}},[l,P,c]);const X=ce(m,u),Y=new Array(J).fill("").map((M,d)=>q.jsx("span",{"data-class":"line-break",style:B({},Ce,{order:d+1})},d));return q.jsxs(Re,B({as:L,className:le(Z.root,C),ref:X,ownerState:D},v,{children:[c,Y]}))}),b=Se,Ae=[150,30,90,70,110,150,130,80,50,90,100,150,30,50,80],Ie=p(y)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(.5),textAlign:"center",color:e.palette.text.secondary}));function He(){return n(x,{sx:{width:500,minHeight:393},children:n(b,{columns:4,spacing:2,children:Ae.map((e,t)=>n(Ie,{sx:{height:e},children:t+1},t))})})}const Pe=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicMasonry() {
  return (
    <Box sx={{ width: 500, minHeight: 393 }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
`,$e=p(y)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(.5),textAlign:"center",color:e.palette.text.secondary,borderBottomLeftRadius:0,borderBottomRightRadius:0}));function Fe(){return n(x,{sx:{width:500,minHeight:829},children:n(b,{columns:3,spacing:2,children:Te.map((e,t)=>i("div",{children:[n($e,{children:t+1}),n("img",{srcSet:`${e.img}?w=162&auto=format&dpr=2 2x`,src:`${e.img}?w=162&auto=format`,alt:e.title,loading:"lazy",style:{borderBottomLeftRadius:4,borderBottomRightRadius:4,display:"block",width:"100%"}})]},t))})})}const Te=[{img:"https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",title:"Fern"},{img:"https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",title:"Snacks"},{img:"https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",title:"Mushrooms"},{img:"https://images.unsplash.com/photo-1529655683826-aba9b3e77383",title:"Tower"},{img:"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",title:"Sea star"},{img:"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",title:"Honey"},{img:"https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",title:"Basketball"},{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast"},{img:"https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",title:"Tree"},{img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",title:"Burger"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee"},{img:"https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",title:"Camping Car"},{img:"https://images.unsplash.com/photo-1533827432537-70133748f5c8",title:"Hats"},{img:"https://images.unsplash.com/photo-1567306301408-9b74779a11af",title:"Tomato basil"},{img:"https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",title:"Mountain"},{img:"https://images.unsplash.com/photo-1589118949245-7d38baf380d6",title:"Bike"}],je=`import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
  return (
    <Box sx={{ width: 500, minHeight: 829 }}>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <Label>{index + 1}</Label>
            <img
              srcSet={\`\${item.img}?w=162&auto=format&dpr=2 2x\`}
              src={\`\${item.img}?w=162&auto=format\`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
    title: 'Snacks',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    title: 'Tower',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
    title: 'Tree',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
    title: 'Camping Car',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
    title: 'Mountain',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
`,Ee=[150,30,90,70,90,100,150,30,50,80],Le=p(ue)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",color:e.palette.text.secondary}));function Ve(){return n(x,{sx:{width:500,minHeight:377},children:n(b,{columns:3,spacing:2,children:Ee.map((e,t)=>n(y,{children:i(Le,{sx:{minHeight:e},children:[n(ge,{expandIcon:n(ke,{}),children:i(o,{children:["Accordion ",t+1]})}),n(fe,{children:"Contents"})]})},t))})})}const ze=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  color: theme.palette.text.secondary,
}));

export default function MasonryWithVariableHeightItems() {
  return (
    <Box sx={{ width: 500, minHeight: 377 }}>
      <Masonry columns={3} spacing={2}>
        {heights.map((height, index) => (
          <Paper key={index}>
            <StyledAccordion sx={{ minHeight: height }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Contents</AccordionDetails>
            </StyledAccordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
}
`,De=[150,30,90,70,90,100,150,30,50,80],Oe=p(y)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(.5),textAlign:"center",color:e.palette.text.secondary}));function We(){return n(x,{sx:{width:500,minHeight:253},children:n(b,{columns:4,spacing:2,children:De.map((e,t)=>n(Oe,{sx:{height:e},children:t+1},t))})})}const _e=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FixedColumns() {
  return (
    <Box sx={{ width: 500, minHeight: 253 }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
`,Ue=[150,30,90,70,90,100,150,30,50,80],qe=p(y)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(.5),textAlign:"center",color:e.palette.text.secondary}));function Ge(){return n(x,{sx:{width:500,minHeight:253},children:n(b,{columns:{xs:3,sm:4},spacing:2,children:Ue.map((e,t)=>n(qe,{sx:{height:e},children:t+1},t))})})}const Je=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveColumns() {
  return (
    <Box sx={{ width: 500, minHeight: 253 }}>
      <Masonry columns={{ xs: 3, sm: 4 }} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
`,Ke=[150,30,90,70,90,100,150,30,50,80],Ze=p(y)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(.5),textAlign:"center",color:e.palette.text.secondary}));function Qe(){return n(x,{sx:{width:500,minHeight:377},children:n(b,{columns:3,spacing:3,children:Ke.map((e,t)=>n(Ze,{sx:{height:e},children:t+1},t))})})}const Xe=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FixedSpacing() {
  return (
    <Box sx={{ width: 500, minHeight: 377 }}>
      <Masonry columns={3} spacing={3}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
`,Ye=[150,30,90,70,90,100,150,30,50,80],en=p(y)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(.5),textAlign:"center",color:e.palette.text.secondary}));function nn(){return n(x,{sx:{width:500,minHeight:377},children:n(b,{columns:3,spacing:{xs:1,sm:2,md:3},children:Ye.map((e,t)=>n(en,{sx:{height:e},children:t+1},t))})})}const tn=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveSpacing() {
  return (
    <Box sx={{ width: 500, minHeight: 377 }}>
      <Masonry columns={3} spacing={{ xs: 1, sm: 2, md: 3 }}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
`,on=[150,30,90,70,110,150,130,80,50,90,100,150,30,50,80],an=p(y)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(.5),textAlign:"center",color:e.palette.text.secondary}));function sn(){return n(x,{sx:{width:500,minHeight:393},children:n(b,{columns:4,spacing:2,defaultHeight:450,defaultColumns:4,defaultSpacing:1,children:on.map((e,t)=>n(an,{sx:{height:e},children:t+1},t))})})}const rn=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SSRMasonry() {
  return (
    <Box sx={{ width: 500, minHeight: 393 }}>
      <Masonry
        columns={4}
        spacing={2}
        defaultHeight={450}
        defaultColumns={4}
        defaultSpacing={1}
      >
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
`;function un(e){return i(be,{children:[i("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[n(Me,{}),n(xe,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/masonry",target:"_blank",role:"button",size:"small",startIcon:n(ye,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),n(o,{className:"text-32 my-16 font-700",component:"h1",children:"Masonry"}),n(o,{className:"description",children:"Masonry lays out contents of varying dimensions as blocks of the same width and different height with configurable gaps."}),n(o,{className:"text-14 mb-32",component:"div",children:"Masonry maintains a list of content blocks with a consistent width but different height. The contents are ordered by row. If a row is already filled with the specified number of columns, the next item starts another row, and it is added to the shortest column in order to optimize the use of space."}),n(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic masonry"}),i(o,{className:"text-14 mb-32",component:"div",children:["A simple example of a ",n("code",{children:"Masonry"}),". ",n("code",{children:"Masonry"})," is a container for one or more items. It can receive any element including ",n("code",{children:"<div />"})," and ",n("code",{children:"<img //>"}),"."]}),n(o,{className:"text-14 mb-32",component:"div",children:n(g,{name:"BasicMasonry.js",className:"my-16",iframe:!1,component:He,raw:Pe})}),n(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Image masonry"}),i(o,{className:"text-14 mb-32",component:"div",children:["This example demonstrates the use of ",n("code",{children:"Masonry"})," for images. ",n("code",{children:"Masonry"})," orders its children by row. If you'd like to order images by column, check out ",n("a",{href:"/material-ui/react-image-list/#masonry-image-list",children:"ImageList"}),"."]}),n(o,{className:"text-14 mb-32",component:"div",children:n(g,{name:"ImageMasonry.js",className:"my-16",iframe:!1,component:Fe,raw:je})}),n(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Items with variable height"}),i(o,{className:"text-14 mb-32",component:"div",children:["This example demonstrates the use of ",n("code",{children:"Masonry"})," for items with variable height. Items can move to other columns in order to abide by the rule that items are always added to the shortest column and hence optimize the use of space."]}),n(o,{className:"text-14 mb-32",component:"div",children:n(g,{name:"MasonryWithVariableHeightItems.js",className:"my-16",iframe:!1,component:Ve,raw:ze})}),n(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Columns"}),i(o,{className:"text-14 mb-32",component:"div",children:["This example demonstrates the use of the ",n("code",{children:"columns"})," to configure the number of columns of a ",n("code",{children:"Masonry"}),"."]}),n(o,{className:"text-14 mb-32",component:"div",children:n(g,{name:"FixedColumns.js",className:"my-16",iframe:!1,component:We,raw:_e})}),i(o,{className:"text-14 mb-32",component:"div",children:[n("code",{children:"columns"})," accepts responsive values:"]}),n(o,{className:"text-14 mb-32",component:"div",children:n(g,{name:"ResponsiveColumns.js",className:"my-16",iframe:!1,component:Ge,raw:Je})}),n(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Spacing"}),i(o,{className:"text-14 mb-32",component:"div",children:["This example demonstrates the use of the ",n("code",{children:"spacing"})," to configure the spacing between items. It is important to note that the value provided to the ",n("code",{children:"spacing"})," prop is multiplied by the theme's spacing field."]}),n(o,{className:"text-14 mb-32",component:"div",children:n(g,{name:"FixedSpacing.js",className:"my-16",iframe:!1,component:Qe,raw:Xe})}),i(o,{className:"text-14 mb-32",component:"div",children:[n("code",{children:"spacing"})," accepts responsive values:"]}),n(o,{className:"text-14 mb-32",component:"div",children:n(g,{name:"ResponsiveSpacing.js",className:"my-16",iframe:!1,component:nn,raw:tn})}),n(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Server-side rendering"}),i(o,{className:"text-14 mb-32",component:"div",children:["This example demonstrates the use of the ",n("code",{children:"defaultHeight"}),", ",n("code",{children:"defaultColumns"})," and ",n("code",{children:"defaultSpacing"}),", which are used to support server-side rendering."]}),n("div",{className:"border border-1 p-16 rounded-16 my-12",children:i(o,{className:"text-14 mb-32",component:"div",children:[n("code",{children:"defaultHeight"})," should be large enough to render all rows. Also, it is worth mentioning that items are not added to the shortest column in case of server-side rendering."]})}),n(o,{className:"text-14 mb-32",component:"div",children:n(g,{name:"SSRMasonry.js",className:"my-16",iframe:!1,component:sn,raw:rn})})]})}export{un as default};
