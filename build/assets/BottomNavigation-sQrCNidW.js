import{az as F,aA as k,s as R,r as s,bX as S,bY as T,bV as g,bZ as y,x as E,au as V,c1 as O,c9 as $,aS as z,j as t,d as r,H as D,bJ as H,B as W,h as U,e as q,P as Q,F as J,C as Y,T as n,b8 as G}from"./index-hRi6i2cB.js";import{F as w}from"./FuseExample-QZXoGK-s.js";import{D as X}from"./DocumentationPageBreadcrumb-BFsPEBAg.js";import{d as I}from"./Favorite-CioPFnlA.js";import{d as P}from"./LocationOn-CIGYN2Ra.js";import{d as Z}from"./Folder-DEZ8Mf5p.js";import{d as K}from"./Archive-BiUhE46v.js";import{C as tt}from"./CssBaseline-BPfhFiTN.js";import{L as et}from"./ListItemAvatar-DLxQpyJR.js";import"./DocumentationNavigation-B9unmpAx.js";import"./ChangelogDoc-fv0_lxe2.js";function ot(e){return F("MuiBottomNavigation",e)}k("MuiBottomNavigation",["root"]);const at=["children","className","component","onChange","showLabels","value"],it=e=>{const{classes:o}=e;return V({root:["root"]},ot,o)},nt=R("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({display:"flex",justifyContent:"center",height:56,backgroundColor:(e.vars||e).palette.background.paper})),st=s.forwardRef(function(o,i){const a=S({props:o,name:"MuiBottomNavigation"}),{children:l,className:v,component:c="div",onChange:p,showLabels:d=!1,value:N}=a,x=T(a,at),h=g({},a,{component:c,showLabels:d}),f=it(h);return y.jsx(nt,g({as:c,className:E(f.root,v),ref:i,ownerState:h},x,{children:s.Children.map(l,(u,b)=>{if(!s.isValidElement(u))return null;const C=u.props.value===void 0?b:u.props.value;return s.cloneElement(u,{selected:C===N,showLabel:u.props.showLabel!==void 0?u.props.showLabel:d,value:C,onChange:p})})}))}),L=st;function rt(e){return F("MuiBottomNavigationAction",e)}const _=k("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),mt=["className","icon","label","onChange","onClick","selected","showLabel","value"],lt=e=>{const{classes:o,showLabel:i,selected:a}=e;return V({root:["root",!i&&!a&&"iconOnly",a&&"selected"],label:["label",!i&&!a&&"iconOnly",a&&"selected"]},rt,o)},ct=R(O,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:i}=e;return[o.root,!i.showLabel&&!i.selected&&o.iconOnly]}})(({theme:e,ownerState:o})=>g({transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"0px 12px",minWidth:80,maxWidth:168,color:(e.vars||e).palette.text.secondary,flexDirection:"column",flex:"1"},!o.showLabel&&!o.selected&&{paddingTop:14},!o.showLabel&&!o.selected&&!o.label&&{paddingTop:0},{[`&.${_.selected}`]:{color:(e.vars||e).palette.primary.main}})),ut=R("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:(e,o)=>o.label})(({theme:e,ownerState:o})=>g({fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s"},!o.showLabel&&!o.selected&&{opacity:0,transitionDelay:"0s"},{[`&.${_.selected}`]:{fontSize:e.typography.pxToRem(14)}})),pt=s.forwardRef(function(o,i){const a=S({props:o,name:"MuiBottomNavigationAction"}),{className:l,icon:v,label:c,onChange:p,onClick:d,value:N}=a,x=T(a,mt),h=a,f=lt(h),u=b=>{p&&p(b,N),d&&d(b)};return y.jsxs(ct,g({ref:i,className:E(f.root,l),focusRipple:!0,onClick:u,ownerState:h},x,{children:[v,y.jsx(ut,{className:f.label,ownerState:h,children:c})]}))}),m=pt;var A={},dt=z;Object.defineProperty(A,"__esModule",{value:!0});var B=A.default=void 0,vt=dt($()),ht=y;B=A.default=(0,vt.default)((0,ht.jsx)("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"}),"Restore");function gt(){const[e,o]=s.useState(0);return t(D,{sx:{width:500},children:r(L,{showLabels:!0,value:e,onChange:(i,a)=>{o(a)},children:[t(m,{label:"Recents",icon:t(B,{})}),t(m,{label:"Favorites",icon:t(I,{})}),t(m,{label:"Nearby",icon:t(P,{})})]})})}const ft=`import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
`;function bt(){const[e,o]=s.useState("recents");return r(L,{sx:{width:500},value:e,onChange:(a,l)=>{o(l)},children:[t(m,{label:"Recents",value:"recents",icon:t(B,{})}),t(m,{label:"Favorites",value:"favorites",icon:t(I,{})}),t(m,{label:"Nearby",value:"nearby",icon:t(P,{})}),t(m,{label:"Folder",value:"folder",icon:t(Z,{})})]})}const yt=`import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
`;function M(){const e=o=>Math.floor(Math.random()*Math.floor(o));return Array.from(new Array(50)).map(()=>j[e(j.length)])}function Bt(){const[e,o]=s.useState(0),i=s.useRef(null),[a,l]=s.useState(()=>M());return s.useEffect(()=>{i.current.ownerDocument.body.scrollTop=0,l(M())},[e,l]),r(D,{sx:{pb:7},ref:i,children:[t(tt,{}),t(q,{children:a.map(({primary:v,secondary:c,person:p},d)=>r(H,{children:[t(et,{children:t(W,{alt:"Profile Picture",src:p})}),t(U,{primary:v,secondary:c})]},d+p))}),t(Q,{sx:{position:"fixed",bottom:0,left:0,right:0},elevation:3,children:r(L,{showLabels:!0,value:e,onChange:(v,c)=>{o(c)},children:[t(m,{label:"Recents",icon:t(B,{})}),t(m,{label:"Favorites",icon:t(I,{})}),t(m,{label:"Archive",icon:t(K,{})})]})})]})}const j=[{primary:"Brunch this week?",secondary:"I'll be in the neighbourhood this week. Let's grab a bite to eat",person:"/material-ui-static/images/avatar/5.jpg"},{primary:"Birthday Gift",secondary:`Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,person:"/material-ui-static/images/avatar/1.jpg"},{primary:"Recipe to try",secondary:"I am try out this new BBQ recipe, I think this might be amazing",person:"/material-ui-static/images/avatar/2.jpg"},{primary:"Yes!",secondary:"I have the tickets to the ReactConf for this year.",person:"/material-ui-static/images/avatar/3.jpg"},{primary:"Doctor's Appointment",secondary:"My appointment for the doctor was rescheduled for next Saturday.",person:"/material-ui-static/images/avatar/4.jpg"},{primary:"Discussion",secondary:`Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,person:"/material-ui-static/images/avatar/5.jpg"},{primary:"Summer BBQ",secondary:`Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,person:"/material-ui-static/images/avatar/1.jpg"}],Nt=`import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

function refreshMessages(): MessageExample[] {
  const getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
        {messages.map(({ primary, secondary, person }, index) => (
          <ListItemButton key={index + person}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={person} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItemButton>
        ))}
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

interface MessageExample {
  primary: string;
  secondary: string;
  person: string;
}

const messageExamples: readonly MessageExample[] = [
  {
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/material-ui-static/images/avatar/5.jpg',
  },
  {
    primary: 'Birthday Gift',
    secondary: \`Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.\`,
    person: '/material-ui-static/images/avatar/1.jpg',
  },
  {
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/material-ui-static/images/avatar/2.jpg',
  },
  {
    primary: 'Yes!',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: '/material-ui-static/images/avatar/3.jpg',
  },
  {
    primary: "Doctor's Appointment",
    secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: '/material-ui-static/images/avatar/4.jpg',
  },
  {
    primary: 'Discussion',
    secondary: \`Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.\`,
    person: '/material-ui-static/images/avatar/5.jpg',
  },
  {
    primary: 'Summer BBQ',
    secondary: \`Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.\`,
    person: '/material-ui-static/images/avatar/1.jpg',
  },
];
`;function St(e){return r(G,{children:[r("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[t(X,{}),t(Y,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/bottom-navigation",target:"_blank",role:"button",size:"small",startIcon:t(J,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),t(n,{className:"text-32 my-16 font-700",component:"h1",children:"Bottom Navigation"}),t(n,{className:"description",children:"The Bottom Navigation bar allows movement between primary destinations in an app."}),t(n,{className:"text-14 mb-32",component:"div",children:"Bottom navigation bars display three to five destinations at the bottom of a screen. Each destination is represented by an icon and an optional text label. When a bottom navigation icon is tapped, the user is taken to the top-level navigation destination associated with that icon."}),t(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Bottom navigation"}),r(n,{className:"text-14 mb-32",component:"div",children:["When there are only ",t("strong",{children:"three"})," actions, display both icons and text labels at all times."]}),t(n,{className:"text-14 mb-32",component:"div",children:t(w,{name:"SimpleBottomNavigation.js",className:"my-16",iframe:!1,component:gt,raw:ft})}),t(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Bottom navigation with no label"}),r(n,{className:"text-14 mb-32",component:"div",children:["If there are ",t("strong",{children:"four"})," or ",t("strong",{children:"five"})," actions, display inactive views as icons only."]}),t(n,{className:"text-14 mb-32",component:"div",children:t(w,{name:"LabelBottomNavigation.js",className:"my-16",iframe:!1,component:bt,raw:yt})}),t(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Fixed positioning"}),t(n,{className:"text-14 mb-32",component:"div",children:"This demo keeps bottom navigation fixed to the bottom, no matter the amount of content on-screen."}),t(n,{className:"text-14 mb-32",component:"div",children:t(w,{name:"FixedBottomNavigation.js",className:"my-16",iframe:!0,component:Bt,raw:Nt})}),t(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Third-party routing library"}),r(n,{className:"text-14 mb-32",component:"div",children:["One frequent use case is to perform navigation on the client only, without an HTTP round-trip to the server. The ",t("code",{children:"BottomNavigationAction"})," component provides the ",t("code",{children:"component"})," prop to handle this use case. Here is a ",t("a",{href:"/material-ui/guides/routing/",children:"more detailed guide"}),"."]})]})}export{St as default};
