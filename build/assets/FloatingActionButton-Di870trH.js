import{c9 as I,aS as T,bZ as w,d as t,j as e,d8 as n,H as d,af as F,K as S,r as N,aW as E,aX as x,N as P,T as a,F as z,C,b8 as R}from"./index-hRi6i2cB.js";import{F as u}from"./FuseExample-QZXoGK-s.js";import{D as $}from"./DocumentationPageBreadcrumb-BFsPEBAg.js";import{d as c}from"./Add-Ce7rha7k.js";import{d as B}from"./Edit-D_5FiW0j.js";import{d as j}from"./Favorite-CioPFnlA.js";import{S as D}from"./index-auJF05MV.js";import{d as Z}from"./KeyboardArrowUp-DynA4y_O.js";import{Z as _}from"./Zoom-DDuFpZLj.js";import"./DocumentationNavigation-B9unmpAx.js";import"./ChangelogDoc-fv0_lxe2.js";var y={},V=T;Object.defineProperty(y,"__esModule",{value:!0});var m=y.default=void 0,O=V(I()),k=w;m=y.default=(0,O.default)((0,k.jsx)("path",{d:"M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"}),"Navigation");function U(){return t(d,{sx:{"& > :not(style)":{m:1}},children:[e(n,{color:"primary","aria-label":"add",children:e(c,{})}),e(n,{color:"secondary","aria-label":"edit",children:e(B,{})}),t(n,{variant:"extended",children:[e(m,{sx:{mr:1}}),"Navigate"]}),e(n,{disabled:!0,"aria-label":"like",children:e(j,{})})]})}const q=`import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>
  );
}
`;function G(){return t(d,{sx:{"& > :not(style)":{m:1}},children:[e(n,{size:"small",color:"secondary","aria-label":"add",children:e(c,{})}),e(n,{size:"medium",color:"secondary","aria-label":"add",children:e(c,{})}),e(n,{color:"secondary","aria-label":"add",children:e(c,{})})]})}const H=`import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function FloatingActionButtonSize() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab size="medium" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}
`;function W(){return t(d,{sx:{"& > :not(style)":{m:1}},children:[t(n,{variant:"extended",size:"small",color:"primary",children:[e(m,{sx:{mr:1}}),"Extended"]}),t(n,{variant:"extended",size:"medium",color:"primary",children:[e(m,{sx:{mr:1}}),"Extended"]}),t(n,{variant:"extended",color:"primary",children:[e(m,{sx:{mr:1}}),"Extended"]})]})}const K=`import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButtonExtendedSize() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended" size="small" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Extended
      </Fab>
      <Fab variant="extended" size="medium" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Extended
      </Fab>
      <Fab variant="extended" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Extended
      </Fab>
    </Box>
  );
}
`;function h(o){const{children:i,value:s,index:l,...b}=o;return e(a,{component:"div",role:"tabpanel",hidden:s!==l,id:`action-tabpanel-${l}`,"aria-labelledby":`action-tab-${l}`,...b,children:s===l&&e(d,{sx:{p:3},children:i})})}function f(o){return{id:`action-tab-${o}`,"aria-controls":`action-tabpanel-${o}`}}const g={position:"absolute",bottom:16,right:16},M={color:"common.white",bgcolor:F[500],"&:hover":{bgcolor:F[600]}};function L(){const o=S(),[i,s]=N.useState(0),l=(r,p)=>{s(p)},b=r=>{s(r)},v={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},A=[{color:"primary",sx:g,icon:e(c,{}),label:"Add"},{color:"secondary",sx:g,icon:e(B,{}),label:"Edit"},{color:"inherit",sx:{...g,...M},icon:e(Z,{}),label:"Expand"}];return t(d,{sx:{bgcolor:"background.paper",width:500,position:"relative",minHeight:200},children:[e(P,{position:"static",color:"default",children:t(E,{value:i,onChange:l,indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"action tabs example",children:[e(x,{label:"Item One",...f(0)}),e(x,{label:"Item Two",...f(1)}),e(x,{label:"Item Three",...f(2)})]})}),t(D,{axis:o.direction==="rtl"?"x-reverse":"x",index:i,onChangeIndex:b,children:[e(h,{value:i,index:0,dir:o.direction,children:"Item One"}),e(h,{value:i,index:1,dir:o.direction,children:"Item Two"}),e(h,{value:i,index:2,dir:o.direction,children:"Item Three"})]}),A.map((r,p)=>e(_,{in:i===p,timeout:v,style:{transitionDelay:`${i===p?v.exit:0}ms`},unmountOnExit:!0,children:e(n,{sx:r.sx,"aria-label":r.label,color:r.color,children:r.icon})},r.color))]})}const X=`import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={\`action-tabpanel-\${index}\`}
      aria-labelledby={\`action-tab-\${index}\`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: \`action-tab-\${index}\`,
    'aria-controls': \`action-tabpanel-\${index}\`,
  };
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: unknown, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary' as 'primary',
      sx: fabStyle as SxProps,
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      color: 'secondary' as 'secondary',
      sx: fabStyle as SxProps,
      icon: <EditIcon />,
      label: 'Edit',
    },
    {
      color: 'inherit' as 'inherit',
      sx: { ...fabStyle, ...fabGreenStyle } as SxProps,
      icon: <UpIcon />,
      label: 'Expand',
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: 500,
        position: 'relative',
        minHeight: 200,
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: \`\${value === index ? transitionDuration.exit : 0}ms\`,
          }}
          unmountOnExit
        >
          <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </Box>
  );
}
`;function se(o){return t(R,{children:[t("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e($,{}),e(C,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/floating-action-button",target:"_blank",role:"button",size:"small",startIcon:e(z,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(a,{className:"text-32 my-16 font-700",component:"h1",children:"Floating Action Button"}),e(a,{className:"description",children:"A Floating Action Button (FAB) performs the primary, or most common, action on a screen."}),e(a,{className:"text-14 mb-32",component:"div",children:"A floating action button appears in front of all screen content, typically as a circular shape with an icon in its center. FABs come in two types: regular, and extended."}),e(a,{className:"text-14 mb-32",component:"div",children:"Only use a FAB if it is the most suitable way to present a screen's primary action. Only one component is recommended per screen to represent the most common action."}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic FAB"}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"FloatingActionButtons.js",className:"my-16",iframe:!1,component:U,raw:q})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Size"}),t(a,{className:"text-14 mb-32",component:"div",children:["By default, the size is ",e("code",{children:"large"}),". Use the ",e("code",{children:"size"})," prop for smaller floating action buttons."]}),t(a,{className:"text-14 mb-32",component:"div",children:[e(u,{name:"FloatingActionButtonSize.js",className:"my-16",iframe:!1,component:G,raw:H}),e(u,{name:"FloatingActionButtonExtendedSize.js",className:"my-16",iframe:!1,component:W,raw:K})]}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Animation"}),e(a,{className:"text-14 mb-32",component:"div",children:"The floating action button animates onto the screen as an expanding piece of material, by default."}),e(a,{className:"text-14 mb-32",component:"div",children:"A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly disappear, then reappear if its action changes."}),t(a,{className:"text-14 mb-32",component:"div",children:["The Zoom transition can be used to achieve this. Note that since both the exiting and entering animations are triggered at the same time, we use ",e("code",{children:"enterDelay"})," to allow the outgoing Floating Action Button's animation to finish before the new one enters."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"FloatingActionButtonZoom.js",className:"my-16",iframe:!1,component:L,raw:X})})]})}export{se as default};
