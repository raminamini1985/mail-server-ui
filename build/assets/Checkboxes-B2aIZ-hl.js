import{d as a,j as e,bC as t,bk as r,dz as k,dR as L,c9 as N,aS as B,bZ as R,r as v,H as j,b5 as f,b6 as g,b7 as y,s as P,F as A,C as E,T as o,dn as M,b8 as H}from"./index-DTYAWF45.js";import{F as l}from"./FuseExample-BpkyGcBB.js";import{D as T}from"./DocumentationPageBreadcrumb-D4ISDkzL.js";import{d as _}from"./FavoriteBorder-C7V8_Yym.js";import{d as q}from"./Favorite-IZzYjAcJ.js";import"./DocumentationNavigation-TV0mgQdh.js";import"./ChangelogDoc-CbVtVqTE.js";const p={inputProps:{"aria-label":"Checkbox demo"}};function D(){return a("div",{children:[e(t,{...p,defaultChecked:!0}),e(t,{...p}),e(t,{...p,disabled:!0}),e(t,{...p,disabled:!0,checked:!0})]})}const $=`import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
  );
}
`;function V(){return a(k,{children:[e(r,{control:e(t,{defaultChecked:!0}),label:"Label"}),e(r,{required:!0,control:e(t,{}),label:"Required"}),e(r,{disabled:!0,control:e(t,{}),label:"Disabled"})]})}const W=`import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
  );
}
`,C={inputProps:{"aria-label":"Checkbox demo"}};function Y(){return a("div",{children:[e(t,{...C,defaultChecked:!0,size:"small"}),e(t,{...C,defaultChecked:!0}),e(t,{...C,defaultChecked:!0,sx:{"& .MuiSvgIcon-root":{fontSize:28}}})]})}const J=`import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function SizeCheckboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked size="small" />
      <Checkbox {...label} defaultChecked />
      <Checkbox
        {...label}
        defaultChecked
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      />
    </div>
  );
}
`,b={inputProps:{"aria-label":"Checkbox demo"}};function K(){return a("div",{children:[e(t,{...b,defaultChecked:!0}),e(t,{...b,defaultChecked:!0,color:"secondary"}),e(t,{...b,defaultChecked:!0,color:"success"}),e(t,{...b,defaultChecked:!0,color:"default"}),e(t,{...b,defaultChecked:!0,sx:{color:L[800],"&.Mui-checked":{color:L[600]}}})]})}const O=`import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ColorCheckboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} defaultChecked color="secondary" />
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="default" />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
    </div>
  );
}
`;var F={},U=B;Object.defineProperty(F,"__esModule",{value:!0});var S=F.default=void 0,X=U(N()),Z=R;S=F.default=(0,X.default)((0,Z.jsx)("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2m0 15-5-2.18L7 18V5h10z"}),"BookmarkBorder");var w={},Q=B;Object.defineProperty(w,"__esModule",{value:!0});var G=w.default=void 0,ee=Q(N()),oe=R;G=w.default=(0,ee.default)((0,oe.jsx)("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2"}),"Bookmark");const I={inputProps:{"aria-label":"Checkbox demo"}};function te(){return a("div",{children:[e(t,{...I,icon:e(_,{}),checkedIcon:e(q,{})}),e(t,{...I,icon:e(S,{}),checkedIcon:e(G,{})})]})}const ae=`import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckboxes() {
  return (
    <div>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </div>
  );
}
`;function ne(){const[n,s]=v.useState(!0);return e(t,{checked:n,onChange:m=>{s(m.target.checked)},inputProps:{"aria-label":"controlled"}})}const re=`import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function ControlledCheckbox() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
`;function le(){const[n,s]=v.useState([!0,!1]),c=i=>{s([i.target.checked,i.target.checked])},m=i=>{s([i.target.checked,n[1]])},d=i=>{s([n[0],i.target.checked])},h=a(j,{sx:{display:"flex",flexDirection:"column",ml:3},children:[e(r,{label:"Child 1",control:e(t,{checked:n[0],onChange:m})}),e(r,{label:"Child 2",control:e(t,{checked:n[1],onChange:d})})]});return a("div",{children:[e(r,{label:"Parent",control:e(t,{checked:n[0]&&n[1],indeterminate:n[0]!==n[1],onChange:c})}),h]})}const ce=`import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function IndeterminateCheckbox() {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
  );
}
`;function ie(){const[n,s]=v.useState({gilad:!0,jason:!1,antoine:!1}),c=u=>{s({...n,[u.target.name]:u.target.checked})},{gilad:m,jason:d,antoine:h}=n,i=[m,d,h].filter(u=>u).length!==2;return a(j,{sx:{display:"flex"},children:[a(f,{sx:{m:3},component:"fieldset",variant:"standard",children:[e(g,{component:"legend",children:"Assign responsibility"}),a(k,{children:[e(r,{control:e(t,{checked:m,onChange:c,name:"gilad"}),label:"Gilad Gray"}),e(r,{control:e(t,{checked:d,onChange:c,name:"jason"}),label:"Jason Killian"}),e(r,{control:e(t,{checked:h,onChange:c,name:"antoine"}),label:"Antoine Llorca"})]}),e(y,{children:"Be careful"})]}),a(f,{required:!0,error:i,component:"fieldset",sx:{m:3},variant:"standard",children:[e(g,{component:"legend",children:"Pick two"}),a(k,{children:[e(r,{control:e(t,{checked:m,onChange:c,name:"gilad"}),label:"Gilad Gray"}),e(r,{control:e(t,{checked:d,onChange:c,name:"jason"}),label:"Jason Killian"}),e(r,{control:e(t,{checked:h,onChange:c,name:"antoine"}),label:"Antoine Llorca"})]}),e(y,{children:"You can display an error"})]})]})}const se=`import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </Box>
  );
}
`;function me(){return a(f,{component:"fieldset",children:[e(g,{component:"legend",children:"Label placement"}),a(k,{"aria-label":"position",row:!0,children:[e(r,{value:"top",control:e(t,{}),label:"Top",labelPlacement:"top"}),e(r,{value:"start",control:e(t,{}),label:"Start",labelPlacement:"start"}),e(r,{value:"bottom",control:e(t,{}),label:"Bottom",labelPlacement:"bottom"}),e(r,{value:"end",control:e(t,{}),label:"End",labelPlacement:"end"})]})]})}const de=`import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Label placement</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Checkbox />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Checkbox />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="End"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}
`,z=P("span")(({theme:n})=>({borderRadius:3,width:16,height:16,boxShadow:n.palette.mode==="dark"?"0 0 0 1px rgb(16 22 26 / 40%)":"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:n.palette.mode==="dark"?"#394b59":"#f5f8fa",backgroundImage:n.palette.mode==="dark"?"linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))":"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",".Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:n.palette.mode==="dark"?"#30404d":"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:n.palette.mode==="dark"?"rgba(57,75,89,.5)":"rgba(206,217,224,.5)"}})),he=P(z)({backgroundColor:"#137cbd",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&::before":{display:"block",width:16,height:16,backgroundImage:`url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E")`,content:'""'},"input:hover ~ &":{backgroundColor:"#106ba3"}});function x(n){return e(t,{sx:{"&:hover":{bgcolor:"transparent"}},disableRipple:!0,color:"default",checkedIcon:e(he,{}),icon:e(z,{}),inputProps:{"aria-label":"Checkbox demo"},...n})}function be(){return a("div",{children:[e(x,{}),e(x,{defaultChecked:!0}),e(x,{disabled:!0})]})}const ue=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&::before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

// Inspired by blueprintjs
function BpCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

export default function CustomizedCheckbox() {
  return (
    <div>
      <BpCheckbox />
      <BpCheckbox defaultChecked />
      <BpCheckbox disabled />
    </div>
  );
}
`;function Fe(n){return a(H,{children:[a("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(T,{}),e(E,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/checkboxes",target:"_blank",role:"button",size:"small",startIcon:e(A,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(o,{className:"text-32 my-16 font-700",component:"h1",children:"Checkbox"}),e(o,{className:"description",children:"Checkboxes allow the user to select one or more items from a set."}),e(o,{className:"text-14 mb-32",component:"div",children:"Checkboxes can be used to turn an option on or off."}),e(o,{className:"text-14 mb-32",component:"div",children:"If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead."}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic checkboxes"}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"Checkboxes.js",className:"my-16",iframe:!1,component:D,raw:$})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Label"}),a(o,{className:"text-14 mb-32",component:"div",children:["You can provide a label to the ",e("code",{children:"Checkbox"})," thanks to the ",e("code",{children:"FormControlLabel"})," component."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"CheckboxLabels.js",className:"my-16",iframe:!1,component:V,raw:W})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Size"}),a(o,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"size"})," prop or customize the font size of the svg icons to change the size of the checkboxes."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"SizeCheckboxes.js",className:"my-16",iframe:!1,component:Y,raw:J})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Color"}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"ColorCheckboxes.js",className:"my-16",iframe:!1,component:K,raw:O})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Icon"}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"IconCheckboxes.js",className:"my-16",iframe:!1,component:te,raw:ae})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Controlled"}),a(o,{className:"text-14 mb-32",component:"div",children:["You can control the checkbox with the ",e("code",{children:"checked"})," and ",e("code",{children:"onChange"})," props:"]}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"ControlledCheckbox.js",className:"my-16",iframe:!1,component:ne,raw:re})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Indeterminate"}),a(o,{className:"text-14 mb-32",component:"div",children:["A checkbox input can only have two states in a form: checked or unchecked. It either submits its value or doesn't. Visually, there are ",e("strong",{children:"three"})," states a checkbox can be in: checked, unchecked, or indeterminate."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"IndeterminateCheckbox.js",className:"my-16",iframe:!1,component:le,raw:ce})}),a(o,{className:"text-14 mb-32",component:"div",children:[":::warning When indeterminate is set, the value of the ",e("code",{children:"checked"})," prop only impacts the form submitted values. It has no accessibility or UX implications. :::"]}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"FormGroup"}),a(o,{className:"text-14 mb-32",component:"div",children:[e("code",{children:"FormGroup"})," is a helpful wrapper used to group selection control components."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"CheckboxesGroup.js",className:"my-16",iframe:!1,component:ie,raw:se})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Label placement"}),e(o,{className:"text-14 mb-32",component:"div",children:"You can change the placement of the label:"}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"FormControlLabelPosition.js",className:"my-16",iframe:!1,component:me,raw:de})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),a(o,{className:"text-14 mb-32",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the ",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"CustomizedCheckbox.js",className:"my-16",iframe:!1,component:be,raw:ue})}),a(o,{className:"text-14 mb-32",component:"div",children:["🎨 If you are looking for inspiration, you can check ",e("a",{href:"https://mui-treasury.com/?path=/docs/checkbox-introduction--docs",children:"MUI Treasury's customization examples"}),"."]}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"When to use"}),a("ul",{className:"space-y-16",children:[e("li",{children:e("a",{href:"https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/",children:"Checkboxes vs. Radio Buttons"})}),e("li",{children:e("a",{href:"https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8",children:"Checkboxes vs. Switches"})})]}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),a(o,{className:"text-14 mb-32",component:"div",children:["(WAI-ARIA: ",e("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/",children:"https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/"}),")"]}),a("ul",{className:"space-y-16",children:[a("li",{children:["All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the ",e("code",{children:"<label>"})," element (",e("a",{href:"/material-ui/api/form-control-label/",children:"FormControlLabel"}),")."]}),a("li",{children:["When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. ",e("code",{children:"aria-label"}),", ",e("code",{children:"aria-labelledby"}),", ",e("code",{children:"title"}),") via the ",e("code",{children:"inputProps"})," prop."]})]}),e(M,{component:"pre",className:"language-jsx",children:` 
<Checkbox
  value="checkedA"
  inputProps={{
    'aria-label': 'Checkbox A',
  
/>
`})]})}export{Fe as default};