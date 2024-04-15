var Ut=Object.defineProperty;var jt=(a,e,t)=>e in a?Ut(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var $e=(a,e,t)=>(jt(a,typeof e!="symbol"?e+"":e,t),t);import{d as s,j as r,n as c,B as P,av as Ge,aE as H,aR as Y,b1 as X,w as ee,br as ht,ag as ct,bs as pt,r as j,cI as Ie,aG as xe,I as Fe,dY as Me,c3 as mt,s as Pe,dc as ft,al as vt,aj as zt,ao as Wt,de as qt,dZ as at,aD as $t,P as Gt,dO as Kt,y as f,aU as Q,h as Yt,o as Zt,T as d,d2 as he,aH as Xt}from"./index-DaquC3HQ.js";import{F as M}from"./FuseExample-aWT15uaH.js";import{D as Jt}from"./DocumentationPageBreadcrumb-Cp8rQom_.js";import{d as Ke}from"./AccountCircle-CNP95nLO.js";import{d as Ye}from"./VisibilityOff-BOHHdDzD.js";import{d as Qt}from"./Menu-B6LccUG0.js";import{d as ei}from"./Search-BiEzHE72.js";import"./DocumentationNavigation-GRGcrCKi.js";import"./ChangelogDoc-ngbKmtJS.js";function ti(){return s(P,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[r(c,{id:"outlined-basic",label:"Outlined",variant:"outlined"}),r(c,{id:"filled-basic",label:"Filled",variant:"filled"}),r(c,{id:"standard-basic",label:"Standard",variant:"standard"})]})}const ii=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
}
`;function ri(){return s(P,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[s("div",{children:[r(c,{required:!0,id:"outlined-required",label:"Required",defaultValue:"Hello World"}),r(c,{disabled:!0,id:"outlined-disabled",label:"Disabled",defaultValue:"Hello World"}),r(c,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password"}),r(c,{id:"outlined-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0}}),r(c,{id:"outlined-number",label:"Number",type:"number",InputLabelProps:{shrink:!0}}),r(c,{id:"outlined-search",label:"Search field",type:"search"}),r(c,{id:"outlined-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"})]}),s("div",{children:[r(c,{required:!0,id:"filled-required",label:"Required",defaultValue:"Hello World",variant:"filled"}),r(c,{disabled:!0,id:"filled-disabled",label:"Disabled",defaultValue:"Hello World",variant:"filled"}),r(c,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"filled"}),r(c,{id:"filled-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"filled"}),r(c,{id:"filled-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"filled"}),r(c,{id:"filled-search",label:"Search field",type:"search",variant:"filled"}),r(c,{id:"filled-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"filled"})]}),s("div",{children:[r(c,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World",variant:"standard"}),r(c,{disabled:!0,id:"standard-disabled",label:"Disabled",defaultValue:"Hello World",variant:"standard"}),r(c,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"standard"}),r(c,{id:"standard-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"standard"}),r(c,{id:"standard-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"standard"}),r(c,{id:"standard-search",label:"Search field",type:"search",variant:"standard"}),r(c,{id:"standard-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"standard"})]})]})}const ai=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
      </div>
    </Box>
  );
}
`;function ni(){return s(P,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[s("div",{children:[r(c,{error:!0,id:"outlined-error",label:"Error",defaultValue:"Hello World"}),r(c,{error:!0,id:"outlined-error-helper-text",label:"Error",defaultValue:"Hello World",helperText:"Incorrect entry."})]}),s("div",{children:[r(c,{error:!0,id:"filled-error",label:"Error",defaultValue:"Hello World",variant:"filled"}),r(c,{error:!0,id:"filled-error-helper-text",label:"Error",defaultValue:"Hello World",helperText:"Incorrect entry.",variant:"filled"})]}),s("div",{children:[r(c,{error:!0,id:"standard-error",label:"Error",defaultValue:"Hello World",variant:"standard"}),r(c,{error:!0,id:"standard-error-helper-text",label:"Error",defaultValue:"Hello World",helperText:"Incorrect entry.",variant:"standard"})]})]})}const li=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ValidationTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        />
      </div>
    </Box>
  );
}
`;function oi(){return s(P,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[s("div",{children:[r(c,{id:"outlined-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4}),r(c,{id:"outlined-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0}),r(c,{id:"outlined-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value"})]}),s("div",{children:[r(c,{id:"filled-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"filled"}),r(c,{id:"filled-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"filled"}),r(c,{id:"filled-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"filled"})]}),s("div",{children:[r(c,{id:"standard-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"standard"}),r(c,{id:"standard-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"standard"}),r(c,{id:"standard-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"standard"})]})]})}const si=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </div>
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />
      </div>
    </Box>
  );
}
`,be=[{value:"USD",label:"$"},{value:"EUR",label:"€"},{value:"BTC",label:"฿"},{value:"JPY",label:"¥"}];function ui(){return s(P,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[s("div",{children:[r(c,{id:"outlined-select-currency",select:!0,label:"Select",defaultValue:"EUR",helperText:"Please select your currency",children:be.map(a=>r(Ge,{value:a.value,children:a.label},a.value))}),r(c,{id:"outlined-select-currency-native",select:!0,label:"Native select",defaultValue:"EUR",SelectProps:{native:!0},helperText:"Please select your currency",children:be.map(a=>r("option",{value:a.value,children:a.label},a.value))})]}),s("div",{children:[r(c,{id:"filled-select-currency",select:!0,label:"Select",defaultValue:"EUR",helperText:"Please select your currency",variant:"filled",children:be.map(a=>r(Ge,{value:a.value,children:a.label},a.value))}),r(c,{id:"filled-select-currency-native",select:!0,label:"Native select",defaultValue:"EUR",SelectProps:{native:!0},helperText:"Please select your currency",variant:"filled",children:be.map(a=>r("option",{value:a.value,children:a.label},a.value))})]}),s("div",{children:[r(c,{id:"standard-select-currency",select:!0,label:"Select",defaultValue:"EUR",helperText:"Please select your currency",variant:"standard",children:be.map(a=>r(Ge,{value:a.value,children:a.label},a.value))}),r(c,{id:"standard-select-currency-native",select:!0,label:"Native select",defaultValue:"EUR",SelectProps:{native:!0},helperText:"Please select your currency",variant:"standard",children:be.map(a=>r("option",{value:a.value,children:a.label},a.value))})]})]})}const di=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function SelectTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="standard"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
`;function hi(){return s(P,{sx:{"& > :not(style)":{m:1}},children:[s(H,{variant:"standard",children:[r(Y,{htmlFor:"input-with-icon-adornment",children:"With a start adornment"}),r(ee,{id:"input-with-icon-adornment",startAdornment:r(X,{position:"start",children:r(Ke,{})})})]}),r(c,{id:"input-with-icon-textfield",label:"TextField",InputProps:{startAdornment:r(X,{position:"start",children:r(Ke,{})})},variant:"standard"}),s(P,{sx:{display:"flex",alignItems:"flex-end"},children:[r(Ke,{sx:{color:"action.active",mr:1,my:.5}}),r(c,{id:"input-with-sx",label:"With sx",variant:"standard"})]})]})}const ci=`import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function InputWithIcon() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="With sx" variant="standard" />
      </Box>
    </Box>
  );
}
`;var Qe={},pi=ct;Object.defineProperty(Qe,"__esModule",{value:!0});var Re=Qe.default=void 0,mi=pi(ht()),fi=pt;Re=Qe.default=(0,mi.default)((0,fi.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility");function vi(){const[a,e]=j.useState(!1),t=()=>e(n=>!n),i=n=>{n.preventDefault()};return s(P,{sx:{display:"flex",flexWrap:"wrap"},children:[s("div",{children:[r(c,{label:"With normal TextField",id:"outlined-start-adornment",sx:{m:1,width:"25ch"},InputProps:{startAdornment:r(X,{position:"start",children:"kg"})}}),s(H,{sx:{m:1,width:"25ch"},variant:"outlined",children:[r(Ie,{id:"outlined-adornment-weight",endAdornment:r(X,{position:"end",children:"kg"}),"aria-describedby":"outlined-weight-helper-text",inputProps:{"aria-label":"weight"}}),r(xe,{id:"outlined-weight-helper-text",children:"Weight"})]}),s(H,{sx:{m:1,width:"25ch"},variant:"outlined",children:[r(Y,{htmlFor:"outlined-adornment-password",children:"Password"}),r(Ie,{id:"outlined-adornment-password",type:a?"text":"password",endAdornment:r(X,{position:"end",children:r(Fe,{"aria-label":"toggle password visibility",onClick:t,onMouseDown:i,edge:"end",children:a?r(Ye,{}):r(Re,{})})}),label:"Password"})]}),s(H,{fullWidth:!0,sx:{m:1},children:[r(Y,{htmlFor:"outlined-adornment-amount",children:"Amount"}),r(Ie,{id:"outlined-adornment-amount",startAdornment:r(X,{position:"start",children:"$"}),label:"Amount"})]})]}),s("div",{children:[r(c,{label:"With normal TextField",id:"filled-start-adornment",sx:{m:1,width:"25ch"},InputProps:{startAdornment:r(X,{position:"start",children:"kg"})},variant:"filled"}),s(H,{sx:{m:1,width:"25ch"},variant:"filled",children:[r(Me,{id:"filled-adornment-weight",endAdornment:r(X,{position:"end",children:"kg"}),"aria-describedby":"filled-weight-helper-text",inputProps:{"aria-label":"weight"}}),r(xe,{id:"filled-weight-helper-text",children:"Weight"})]}),s(H,{sx:{m:1,width:"25ch"},variant:"filled",children:[r(Y,{htmlFor:"filled-adornment-password",children:"Password"}),r(Me,{id:"filled-adornment-password",type:a?"text":"password",endAdornment:r(X,{position:"end",children:r(Fe,{"aria-label":"toggle password visibility",onClick:t,onMouseDown:i,edge:"end",children:a?r(Ye,{}):r(Re,{})})})})]}),s(H,{fullWidth:!0,sx:{m:1},variant:"filled",children:[r(Y,{htmlFor:"filled-adornment-amount",children:"Amount"}),r(Me,{id:"filled-adornment-amount",startAdornment:r(X,{position:"start",children:"$"})})]})]}),s("div",{children:[r(c,{label:"With normal TextField",id:"standard-start-adornment",sx:{m:1,width:"25ch"},InputProps:{startAdornment:r(X,{position:"start",children:"kg"})},variant:"standard"}),s(H,{variant:"standard",sx:{m:1,mt:3,width:"25ch"},children:[r(ee,{id:"standard-adornment-weight",endAdornment:r(X,{position:"end",children:"kg"}),"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"weight"}}),r(xe,{id:"standard-weight-helper-text",children:"Weight"})]}),s(H,{sx:{m:1,width:"25ch"},variant:"standard",children:[r(Y,{htmlFor:"standard-adornment-password",children:"Password"}),r(ee,{id:"standard-adornment-password",type:a?"text":"password",endAdornment:r(X,{position:"end",children:r(Fe,{"aria-label":"toggle password visibility",onClick:t,onMouseDown:i,children:a?r(Ye,{}):r(Re,{})})})})]}),s(H,{fullWidth:!0,sx:{m:1},variant:"standard",children:[r(Y,{htmlFor:"standard-adornment-amount",children:"Amount"}),r(ee,{id:"standard-adornment-amount",startAdornment:r(X,{position:"start",children:"$"})})]})]})]})}const xi=`import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </div>
      <div>
        <TextField
          label="With normal TextField"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
          variant="filled"
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <FilledInput
            id="filled-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </div>
      <div>
        <TextField
          label="With normal TextField"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
          variant="standard"
        />
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
          <Input
            id="standard-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </div>
    </Box>
  );
}
`;function gi(){return s(P,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[s("div",{children:[r(c,{label:"Size",id:"outlined-size-small",defaultValue:"Small",size:"small"}),r(c,{label:"Size",id:"outlined-size-normal",defaultValue:"Normal"})]}),s("div",{children:[r(c,{label:"Size",id:"filled-size-small",defaultValue:"Small",variant:"filled",size:"small"}),r(c,{label:"Size",id:"filled-size-normal",defaultValue:"Normal",variant:"filled"})]}),s("div",{children:[r(c,{label:"Size",id:"standard-size-small",defaultValue:"Small",size:"small",variant:"standard"}),r(c,{label:"Size",id:"standard-size-normal",defaultValue:"Normal",variant:"standard"})]})]})}const bi=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFieldSizes() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Size"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />
        <TextField label="Size" id="outlined-size-normal" defaultValue="Normal" />
      </div>
      <div>
        <TextField
          label="Size"
          id="filled-size-small"
          defaultValue="Small"
          variant="filled"
          size="small"
        />
        <TextField
          label="Size"
          id="filled-size-normal"
          defaultValue="Normal"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          label="Size"
          id="standard-size-small"
          defaultValue="Small"
          size="small"
          variant="standard"
        />
        <TextField
          label="Size"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
      </div>
    </Box>
  );
}
`;function Fi(){return s(mt,{component:"form",sx:{width:"25ch"},spacing:2,noValidate:!0,autoComplete:"off",children:[r(c,{hiddenLabel:!0,id:"filled-hidden-label-small",defaultValue:"Small",variant:"filled",size:"small"}),r(c,{hiddenLabel:!0,id:"filled-hidden-label-normal",defaultValue:"Normal",variant:"filled"})]})}const ki=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export default function TextFieldHiddenLabel() {
  return (
    <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Normal"
        variant="filled"
      />
    </Stack>
  );
}
`;function Be(){return r(P,{sx:{height:20,backgroundColor:a=>a.palette.mode==="light"?"rgba(255, 0, 0, 0.1)":"rgb(255 132 132 / 25%)"}})}function Ci(){return s(P,{sx:{display:"flex",flexDirection:"column","& .MuiTextField-root":{width:"25ch"}},children:[r(Be,{}),r(c,{label:'margin="none"',id:"margin-none"}),r(Be,{}),r(c,{label:'margin="dense"',id:"margin-dense",margin:"dense"}),r(Be,{}),r(c,{label:'margin="normal"',id:"margin-normal",margin:"normal"}),r(Be,{})]})}const yi=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function RedBar() {
  return (
    <Box
      sx={{
        height: 20,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? 'rgba(255, 0, 0, 0.1)'
            : 'rgb(255 132 132 / 25%)',
      }}
    />
  );
}

export default function LayoutTextFields() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '25ch' },
      }}
    >
      <RedBar />
      <TextField label={'margin="none"'} id="margin-none" />
      <RedBar />
      <TextField label={'margin="dense"'} id="margin-dense" margin="dense" />
      <RedBar />
      <TextField label={'margin="normal"'} id="margin-normal" margin="normal" />
      <RedBar />
    </Box>
  );
}
`;function Ti(){return r(P,{sx:{width:500,maxWidth:"100%"},children:r(c,{fullWidth:!0,label:"fullWidth",id:"fullWidth"})})}const Ii=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </Box>
  );
}
`;function wi(){const[a,e]=j.useState("Cat in the Hat");return s(P,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[r(c,{id:"outlined-controlled",label:"Controlled",value:a,onChange:t=>{e(t.target.value)}}),r(c,{id:"outlined-uncontrolled",label:"Uncontrolled",defaultValue:"foo"})]})}const _i=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function StateTextFields() {
  const [name, setName] = React.useState('Cat in the Hat');

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label="Controlled"
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
      />
      <TextField
        id="outlined-uncontrolled"
        label="Uncontrolled"
        defaultValue="foo"
      />
    </Box>
  );
}
`;function Si(){return s(P,{component:"form",sx:{"& > :not(style)":{m:1}},noValidate:!0,autoComplete:"off",children:[s(H,{variant:"standard",children:[r(Y,{htmlFor:"component-simple",children:"Name"}),r(ee,{id:"component-simple",defaultValue:"Composed TextField"})]}),s(H,{variant:"standard",children:[r(Y,{htmlFor:"component-helper",children:"Name"}),r(ee,{id:"component-helper",defaultValue:"Composed TextField","aria-describedby":"component-helper-text"}),r(xe,{id:"component-helper-text",children:"Some important helper text"})]}),s(H,{disabled:!0,variant:"standard",children:[r(Y,{htmlFor:"component-disabled",children:"Name"}),r(ee,{id:"component-disabled",defaultValue:"Composed TextField"}),r(xe,{children:"Disabled"})]}),s(H,{error:!0,variant:"standard",children:[r(Y,{htmlFor:"component-error",children:"Name"}),r(ee,{id:"component-error",defaultValue:"Composed TextField","aria-describedby":"component-error-text"}),r(xe,{id:"component-error-text",children:"Error"})]}),s(H,{children:[r(Y,{htmlFor:"component-outlined",children:"Name"}),r(Ie,{id:"component-outlined",defaultValue:"Composed TextField",label:"Name"})]}),s(H,{variant:"filled",children:[r(Y,{htmlFor:"component-filled",children:"Name"}),r(Me,{id:"component-filled",defaultValue:"Composed TextField"})]})]})}const Ei=`import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function ComposedTextField() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input id="component-simple" defaultValue="Composed TextField" />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Name</InputLabel>
        <Input
          id="component-helper"
          defaultValue="Composed TextField"
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          Some important helper text
        </FormHelperText>
      </FormControl>
      <FormControl disabled variant="standard">
        <InputLabel htmlFor="component-disabled">Name</InputLabel>
        <Input id="component-disabled" defaultValue="Composed TextField" />
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl error variant="standard">
        <InputLabel htmlFor="component-error">Name</InputLabel>
        <Input
          id="component-error"
          defaultValue="Composed TextField"
          aria-describedby="component-error-text"
        />
        <FormHelperText id="component-error-text">Error</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue="Composed TextField"
          label="Name"
        />
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Name</InputLabel>
        <FilledInput id="component-filled" defaultValue="Composed TextField" />
      </FormControl>
    </Box>
  );
}
`,Ve={"aria-label":"description"};function Ai(){return s(P,{component:"form",sx:{"& > :not(style)":{m:1}},noValidate:!0,autoComplete:"off",children:[r(ee,{defaultValue:"Hello world",inputProps:Ve}),r(ee,{placeholder:"Placeholder",inputProps:Ve}),r(ee,{disabled:!0,defaultValue:"Disabled",inputProps:Ve}),r(ee,{defaultValue:"Error",error:!0,inputProps:Ve})]})}const Bi=`import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

export default function Inputs() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input defaultValue="Hello world" inputProps={ariaLabel} />
      <Input placeholder="Placeholder" inputProps={ariaLabel} />
      <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
      <Input defaultValue="Error" error inputProps={ariaLabel} />
    </Box>
  );
}
`;function Vi(){return s(P,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[r(c,{label:"Outlined secondary",color:"secondary",focused:!0}),r(c,{label:"Filled success",variant:"filled",color:"success",focused:!0}),r(c,{label:"Standard warning",variant:"standard",color:"warning",focused:!0})]})}const Mi=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ColorTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Outlined secondary" color="secondary" focused />
      <TextField label="Filled success" variant="filled" color="success" focused />
      <TextField
        label="Standard warning"
        variant="standard"
        color="warning"
        focused
      />
    </Box>
  );
}
`,Ri=Pe(c)({"& label.Mui-focused":{color:"#A0AAB4"},"& .MuiInput-underline:after":{borderBottomColor:"#B2BAC2"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#E0E3E7"},"&:hover fieldset":{borderColor:"#B2BAC2"},"&.Mui-focused fieldset":{borderColor:"#6F7E8C"}}}),Di=Pe(ft)(({theme:a})=>({"label + &":{marginTop:a.spacing(3)},"& .MuiInputBase-input":{borderRadius:4,position:"relative",backgroundColor:a.palette.mode==="light"?"#F3F6F9":"#1A2027",border:"1px solid",borderColor:a.palette.mode==="light"?"#E0E3E7":"#2D3843",fontSize:16,width:"auto",padding:"10px 12px",transition:a.transitions.create(["border-color","background-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{boxShadow:`${vt(a.palette.primary.main,.25)} 0 0 0 0.2rem`,borderColor:a.palette.primary.main}}})),Ni=Pe(a=>r(c,{InputProps:{disableUnderline:!0},...a}))(({theme:a})=>({"& .MuiFilledInput-root":{overflow:"hidden",borderRadius:4,backgroundColor:a.palette.mode==="light"?"#F3F6F9":"#1A2027",border:"1px solid",borderColor:a.palette.mode==="light"?"#E0E3E7":"#2D3843",transition:a.transitions.create(["border-color","background-color","box-shadow"]),"&:hover":{backgroundColor:"transparent"},"&.Mui-focused":{backgroundColor:"transparent",boxShadow:`${vt(a.palette.primary.main,.25)} 0 0 0 2px`,borderColor:a.palette.primary.main}}})),Oi=Pe(c)({"& input:valid + fieldset":{borderColor:"#E0E3E7",borderWidth:1},"& input:invalid + fieldset":{borderColor:"red",borderWidth:1},"& input:valid:focus + fieldset":{borderLeftWidth:4,padding:"4px !important"}});function Pi(){return s(P,{component:"form",noValidate:!0,sx:{display:"grid",gridTemplateColumns:{sm:"1fr 1fr"},gap:2},children:[s(H,{variant:"standard",children:[r(Y,{shrink:!0,htmlFor:"bootstrap-input",children:"Bootstrap"}),r(Di,{defaultValue:"react-bootstrap",id:"bootstrap-input"})]}),r(Ni,{label:"Reddit",defaultValue:"react-reddit",id:"reddit-input",variant:"filled",style:{marginTop:11}}),r(Ri,{label:"Custom CSS",id:"custom-css-outlined-input"}),r(Oi,{label:"CSS validation style",required:!0,variant:"outlined",defaultValue:"Success",id:"validation-outlined-input"})]})}const Li=`import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: \`\${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem\`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: \`\${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px\`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: '#E0E3E7',
    borderWidth: 1,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 1,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 4,
    padding: '4px !important', // override inline-style
  },
});

export default function CustomizedInputsStyled() {
  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
      }}
    >
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          Bootstrap
        </InputLabel>
        <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
      </FormControl>
      <RedditTextField
        label="Reddit"
        defaultValue="react-reddit"
        id="reddit-input"
        variant="filled"
        style={{ marginTop: 11 }}
      />
      <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
      <ValidationTextField
        label="CSS validation style"
        required
        variant="outlined"
        defaultValue="Success"
        id="validation-outlined-input"
      />
    </Box>
  );
}
`,Hi=a=>qt({palette:{mode:a.palette.mode},components:{MuiTextField:{styleOverrides:{root:{"--TextField-brandBorderColor":"#E0E3E7","--TextField-brandBorderHoverColor":"#B2BAC2","--TextField-brandBorderFocusedColor":"#6F7E8C","& label.Mui-focused":{color:"var(--TextField-brandBorderFocusedColor)"}}}},MuiOutlinedInput:{styleOverrides:{notchedOutline:{borderColor:"var(--TextField-brandBorderColor)"},root:{[`&:hover .${at.notchedOutline}`]:{borderColor:"var(--TextField-brandBorderHoverColor)"},[`&.Mui-focused .${at.notchedOutline}`]:{borderColor:"var(--TextField-brandBorderFocusedColor)"}}}},MuiFilledInput:{styleOverrides:{root:{"&::before, &::after":{borderBottom:"2px solid var(--TextField-brandBorderColor)"},"&:hover:not(.Mui-disabled, .Mui-error):before":{borderBottom:"2px solid var(--TextField-brandBorderHoverColor)"},"&.Mui-focused:after":{borderBottom:"2px solid var(--TextField-brandBorderFocusedColor)"}}}},MuiInput:{styleOverrides:{root:{"&::before":{borderBottom:"2px solid var(--TextField-brandBorderColor)"},"&:hover:not(.Mui-disabled, .Mui-error):before":{borderBottom:"2px solid var(--TextField-brandBorderHoverColor)"},"&.Mui-focused:after":{borderBottom:"2px solid var(--TextField-brandBorderFocusedColor)"}}}}}});function Ui(){const a=zt();return r(P,{sx:{display:"grid",gridTemplateColumns:{sm:"1fr 1fr 1fr"},gap:2},children:s(Wt,{theme:Hi(a),children:[r(c,{label:"Outlined"}),r(c,{label:"Filled",variant:"filled"}),r(c,{label:"Standard",variant:"standard"})]})})}const ji=`import * as React from 'react';
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';

const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#6F7E8C',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [\`&:hover .\${outlinedInputClasses.notchedOutline}\`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [\`&.Mui-focused .\${outlinedInputClasses.notchedOutline}\`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&::before, &::after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

export default function CustomizedInputsStyleOverrides() {
  const outerTheme = useTheme();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr 1fr' },
        gap: 2,
      }}
    >
      <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField label="Outlined" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Standard" variant="standard" />
      </ThemeProvider>
    </Box>
  );
}
`;var et={},zi=ct;Object.defineProperty(et,"__esModule",{value:!0});var xt=et.default=void 0,Wi=zi(ht()),qi=pt;xt=et.default=(0,Wi.default)((0,qi.jsx)("path",{d:"m21.41 10.59-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83M13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11z"}),"Directions");function $i(){return s(Gt,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:400},children:[r(Fe,{sx:{p:"10px"},"aria-label":"menu",children:r(Qt,{})}),r(ft,{sx:{ml:1,flex:1},placeholder:"Search Google Maps",inputProps:{"aria-label":"search google maps"}}),r(Fe,{type:"button",sx:{p:"10px"},"aria-label":"search",children:r(ei,{})}),r($t,{sx:{height:28,m:.5},orientation:"vertical"}),r(Fe,{color:"primary",sx:{p:"10px"},"aria-label":"directions",children:r(xt,{})})]})}const Gi=`import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}
`;function Ki(){const{focused:a}=Kt()||{},e=j.useMemo(()=>a?"This field is being focused":"Helper text",[a]);return r(xe,{children:e})}function Yi(){return r("form",{noValidate:!0,autoComplete:"off",children:s(H,{sx:{width:"25ch"},children:[r(Ie,{placeholder:"Please enter text"}),r(Ki,{})]})})}const Zi=`import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }

    return 'Helper text';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function UseFormControl() {
  return (
    <form noValidate autoComplete="off">
      <FormControl sx={{ width: '25ch' }}>
        <OutlinedInput placeholder="Please enter text" />
        <MyFormHelperText />
      </FormControl>
    </form>
  );
}
`;function Xi(){return s(P,{sx:{display:"flex",alignItems:"center","& > :not(style)":{m:1}},children:[r(c,{helperText:"Please enter your name",id:"demo-helper-text-misaligned",label:"Name"}),r(c,{id:"demo-helper-text-misaligned-no-helper",label:"Name"})]})}const Ji=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function HelperTextMisaligned() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label="Name"
      />
      <TextField id="demo-helper-text-misaligned-no-helper" label="Name" />
    </Box>
  );
}
`;function Qi(){return s(P,{sx:{display:"flex",alignItems:"center","& > :not(style)":{m:1}},children:[r(c,{helperText:"Please enter your name",id:"demo-helper-text-aligned",label:"Name"}),r(c,{helperText:" ",id:"demo-helper-text-aligned-no-helper",label:"Name"})]})}const er=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function HelperTextAligned() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-aligned"
        label="Name"
      />
      <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Name"
      />
    </Box>
  );
}
`;function pe(a){return typeof a=="string"||a instanceof String}function nt(a){var e;return typeof a=="object"&&a!=null&&(a==null||(e=a.constructor)==null?void 0:e.name)==="Object"}function gt(a,e){return Array.isArray(e)?gt(a,(t,i)=>e.includes(i)):Object.entries(a).reduce((t,i)=>{let[n,l]=i;return e(l,n)&&(t[n]=l),t},{})}const v={NONE:"NONE",LEFT:"LEFT",FORCE_LEFT:"FORCE_LEFT",RIGHT:"RIGHT",FORCE_RIGHT:"FORCE_RIGHT"};function tr(a){switch(a){case v.LEFT:return v.FORCE_LEFT;case v.RIGHT:return v.FORCE_RIGHT;default:return a}}function Ze(a){return a.replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1")}function Ne(a,e){if(e===a)return!0;const t=Array.isArray(e),i=Array.isArray(a);let n;if(t&&i){if(e.length!=a.length)return!1;for(n=0;n<e.length;n++)if(!Ne(e[n],a[n]))return!1;return!0}if(t!=i)return!1;if(e&&a&&typeof e=="object"&&typeof a=="object"){const l=e instanceof Date,o=a instanceof Date;if(l&&o)return e.getTime()==a.getTime();if(l!=o)return!1;const u=e instanceof RegExp,h=a instanceof RegExp;if(u&&h)return e.toString()==a.toString();if(u!=h)return!1;const p=Object.keys(e);for(n=0;n<p.length;n++)if(!Object.prototype.hasOwnProperty.call(a,p[n]))return!1;for(n=0;n<p.length;n++)if(!Ne(a[p[n]],e[p[n]]))return!1;return!0}else if(e&&a&&typeof e=="function"&&typeof a=="function")return e.toString()===a.toString();return!1}class ir{constructor(e){for(Object.assign(this,e);this.value.slice(0,this.startChangePos)!==this.oldValue.slice(0,this.startChangePos);)--this.oldSelection.start;if(this.insertedCount)for(;this.value.slice(this.cursorPos)!==this.oldValue.slice(this.oldSelection.end);)this.value.length-this.cursorPos<this.oldValue.length-this.oldSelection.end?++this.oldSelection.end:++this.cursorPos}get startChangePos(){return Math.min(this.cursorPos,this.oldSelection.start)}get insertedCount(){return this.cursorPos-this.startChangePos}get inserted(){return this.value.substr(this.startChangePos,this.insertedCount)}get removedCount(){return Math.max(this.oldSelection.end-this.startChangePos||this.oldValue.length-this.value.length,0)}get removed(){return this.oldValue.substr(this.startChangePos,this.removedCount)}get head(){return this.value.substring(0,this.startChangePos)}get tail(){return this.value.substring(this.startChangePos+this.insertedCount)}get removeDirection(){return!this.removedCount||this.insertedCount?v.NONE:(this.oldSelection.end===this.cursorPos||this.oldSelection.start===this.cursorPos)&&this.oldSelection.end===this.oldSelection.start?v.RIGHT:v.LEFT}}function F(a,e){return new F.InputMask(a,e)}function bt(a){if(a==null)throw new Error("mask property should be defined");return a instanceof RegExp?F.MaskedRegExp:pe(a)?F.MaskedPattern:a===Date?F.MaskedDate:a===Number?F.MaskedNumber:Array.isArray(a)||a===Array?F.MaskedDynamic:F.Masked&&a.prototype instanceof F.Masked?a:F.Masked&&a instanceof F.Masked?a.constructor:a instanceof Function?F.MaskedFunction:(console.warn("Mask not found for mask",a),F.Masked)}function we(a){if(!a)throw new Error("Options in not defined");if(F.Masked){if(a.prototype instanceof F.Masked)return{mask:a};const{mask:e=void 0,...t}=a instanceof F.Masked?{mask:a}:nt(a)&&a.mask instanceof F.Masked?a:{};if(e){const i=e.mask;return{...gt(e,(n,l)=>!l.startsWith("_")),mask:e.constructor,_mask:i,...t}}}return nt(a)?{...a}:{mask:a}}function se(a){if(F.Masked&&a instanceof F.Masked)return a;const e=we(a),t=bt(e.mask);if(!t)throw new Error("Masked class is not found for provided mask "+e.mask+", appropriate module needs to be imported manually before creating mask.");return e.mask===t&&delete e.mask,e._mask&&(e.mask=e._mask,delete e._mask),new t(e)}F.createMask=se;class tt{get selectionStart(){let e;try{e=this._unsafeSelectionStart}catch{}return e??this.value.length}get selectionEnd(){let e;try{e=this._unsafeSelectionEnd}catch{}return e??this.value.length}select(e,t){if(!(e==null||t==null||e===this.selectionStart&&t===this.selectionEnd))try{this._unsafeSelect(e,t)}catch{}}get isActive(){return!1}}F.MaskElement=tt;const lt=90,rr=89;class Le extends tt{constructor(e){super(),this.input=e,this._onKeydown=this._onKeydown.bind(this),this._onInput=this._onInput.bind(this),this._onBeforeinput=this._onBeforeinput.bind(this),this._onCompositionEnd=this._onCompositionEnd.bind(this)}get rootElement(){var e,t,i;return(e=(t=(i=this.input).getRootNode)==null?void 0:t.call(i))!=null?e:document}get isActive(){return this.input===this.rootElement.activeElement}bindEvents(e){this.input.addEventListener("keydown",this._onKeydown),this.input.addEventListener("input",this._onInput),this.input.addEventListener("beforeinput",this._onBeforeinput),this.input.addEventListener("compositionend",this._onCompositionEnd),this.input.addEventListener("drop",e.drop),this.input.addEventListener("click",e.click),this.input.addEventListener("focus",e.focus),this.input.addEventListener("blur",e.commit),this._handlers=e}_onKeydown(e){if(this._handlers.redo&&(e.keyCode===lt&&e.shiftKey&&(e.metaKey||e.ctrlKey)||e.keyCode===rr&&e.ctrlKey))return e.preventDefault(),this._handlers.redo(e);if(this._handlers.undo&&e.keyCode===lt&&(e.metaKey||e.ctrlKey))return e.preventDefault(),this._handlers.undo(e);e.isComposing||this._handlers.selectionChange(e)}_onBeforeinput(e){if(e.inputType==="historyUndo"&&this._handlers.undo)return e.preventDefault(),this._handlers.undo(e);if(e.inputType==="historyRedo"&&this._handlers.redo)return e.preventDefault(),this._handlers.redo(e)}_onCompositionEnd(e){this._handlers.input(e)}_onInput(e){e.isComposing||this._handlers.input(e)}unbindEvents(){this.input.removeEventListener("keydown",this._onKeydown),this.input.removeEventListener("input",this._onInput),this.input.removeEventListener("beforeinput",this._onBeforeinput),this.input.removeEventListener("compositionend",this._onCompositionEnd),this.input.removeEventListener("drop",this._handlers.drop),this.input.removeEventListener("click",this._handlers.click),this.input.removeEventListener("focus",this._handlers.focus),this.input.removeEventListener("blur",this._handlers.commit),this._handlers={}}}F.HTMLMaskElement=Le;class ar extends Le{constructor(e){super(e),this.input=e}get _unsafeSelectionStart(){return this.input.selectionStart!=null?this.input.selectionStart:this.value.length}get _unsafeSelectionEnd(){return this.input.selectionEnd}_unsafeSelect(e,t){this.input.setSelectionRange(e,t)}get value(){return this.input.value}set value(e){this.input.value=e}}F.HTMLMaskElement=Le;class Ft extends Le{get _unsafeSelectionStart(){const e=this.rootElement,t=e.getSelection&&e.getSelection(),i=t&&t.anchorOffset,n=t&&t.focusOffset;return n==null||i==null||i<n?i:n}get _unsafeSelectionEnd(){const e=this.rootElement,t=e.getSelection&&e.getSelection(),i=t&&t.anchorOffset,n=t&&t.focusOffset;return n==null||i==null||i>n?i:n}_unsafeSelect(e,t){if(!this.rootElement.createRange)return;const i=this.rootElement.createRange();i.setStart(this.input.firstChild||this.input,e),i.setEnd(this.input.lastChild||this.input,t);const n=this.rootElement,l=n.getSelection&&n.getSelection();l&&(l.removeAllRanges(),l.addRange(i))}get value(){return this.input.textContent||""}set value(e){this.input.textContent=e}}F.HTMLContenteditableMaskElement=Ft;class He{constructor(){this.states=[],this.currentIndex=0}get currentState(){return this.states[this.currentIndex]}get isEmpty(){return this.states.length===0}push(e){this.currentIndex<this.states.length-1&&(this.states.length=this.currentIndex+1),this.states.push(e),this.states.length>He.MAX_LENGTH&&this.states.shift(),this.currentIndex=this.states.length-1}go(e){return this.currentIndex=Math.min(Math.max(this.currentIndex+e,0),this.states.length-1),this.currentState}undo(){return this.go(-1)}redo(){return this.go(1)}clear(){this.states.length=0,this.currentIndex=0}}He.MAX_LENGTH=100;class nr{constructor(e,t){this.el=e instanceof tt?e:e.isContentEditable&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"?new Ft(e):new ar(e),this.masked=se(t),this._listeners={},this._value="",this._unmaskedValue="",this._rawInputValue="",this.history=new He,this._saveSelection=this._saveSelection.bind(this),this._onInput=this._onInput.bind(this),this._onChange=this._onChange.bind(this),this._onDrop=this._onDrop.bind(this),this._onFocus=this._onFocus.bind(this),this._onClick=this._onClick.bind(this),this._onUndo=this._onUndo.bind(this),this._onRedo=this._onRedo.bind(this),this.alignCursor=this.alignCursor.bind(this),this.alignCursorFriendly=this.alignCursorFriendly.bind(this),this._bindEvents(),this._onChange()}maskEquals(e){var t;return e==null||((t=this.masked)==null?void 0:t.maskEquals(e))}get mask(){return this.masked.mask}set mask(e){if(this.maskEquals(e))return;if(!(e instanceof F.Masked)&&this.masked.constructor===bt(e)){this.masked.updateOptions({mask:e});return}const t=e instanceof F.Masked?e:se({mask:e});t.unmaskedValue=this.masked.unmaskedValue,this.masked=t}get value(){return this._value}set value(e){this.value!==e&&(this.masked.value=e,this.updateControl("auto"))}get unmaskedValue(){return this._unmaskedValue}set unmaskedValue(e){this.unmaskedValue!==e&&(this.masked.unmaskedValue=e,this.updateControl("auto"))}get rawInputValue(){return this._rawInputValue}set rawInputValue(e){this.rawInputValue!==e&&(this.masked.rawInputValue=e,this.updateControl(),this.alignCursor())}get typedValue(){return this.masked.typedValue}set typedValue(e){this.masked.typedValueEquals(e)||(this.masked.typedValue=e,this.updateControl("auto"))}get displayValue(){return this.masked.displayValue}_bindEvents(){this.el.bindEvents({selectionChange:this._saveSelection,input:this._onInput,drop:this._onDrop,click:this._onClick,focus:this._onFocus,commit:this._onChange,undo:this._onUndo,redo:this._onRedo})}_unbindEvents(){this.el&&this.el.unbindEvents()}_fireEvent(e,t){const i=this._listeners[e];i&&i.forEach(n=>n(t))}get selectionStart(){return this._cursorChanging?this._changingCursorPos:this.el.selectionStart}get cursorPos(){return this._cursorChanging?this._changingCursorPos:this.el.selectionEnd}set cursorPos(e){!this.el||!this.el.isActive||(this.el.select(e,e),this._saveSelection())}_saveSelection(){this.displayValue!==this.el.value&&console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),this._selection={start:this.selectionStart,end:this.cursorPos}}updateValue(){this.masked.value=this.el.value,this._value=this.masked.value,this._unmaskedValue=this.masked.unmaskedValue,this._rawInputValue=this.masked.rawInputValue}updateControl(e){const t=this.masked.unmaskedValue,i=this.masked.value,n=this.masked.rawInputValue,l=this.displayValue,o=this.unmaskedValue!==t||this.value!==i||this._rawInputValue!==n;this._unmaskedValue=t,this._value=i,this._rawInputValue=n,this.el.value!==l&&(this.el.value=l),e==="auto"?this.alignCursor():e!=null&&(this.cursorPos=e),o&&this._fireChangeEvents(),!this._historyChanging&&(o||this.history.isEmpty)&&this.history.push({unmaskedValue:t,selection:{start:this.selectionStart,end:this.cursorPos}})}updateOptions(e){const{mask:t,...i}=e,n=!this.maskEquals(t),l=this.masked.optionsIsChanged(i);n&&(this.mask=t),l&&this.masked.updateOptions(i),(n||l)&&this.updateControl()}updateCursor(e){e!=null&&(this.cursorPos=e,this._delayUpdateCursor(e))}_delayUpdateCursor(e){this._abortUpdateCursor(),this._changingCursorPos=e,this._cursorChanging=setTimeout(()=>{this.el&&(this.cursorPos=this._changingCursorPos,this._abortUpdateCursor())},10)}_fireChangeEvents(){this._fireEvent("accept",this._inputEvent),this.masked.isComplete&&this._fireEvent("complete",this._inputEvent)}_abortUpdateCursor(){this._cursorChanging&&(clearTimeout(this._cursorChanging),delete this._cursorChanging)}alignCursor(){this.cursorPos=this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos,v.LEFT))}alignCursorFriendly(){this.selectionStart===this.cursorPos&&this.alignCursor()}on(e,t){return this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t),this}off(e,t){if(!this._listeners[e])return this;if(!t)return delete this._listeners[e],this;const i=this._listeners[e].indexOf(t);return i>=0&&this._listeners[e].splice(i,1),this}_onInput(e){this._inputEvent=e,this._abortUpdateCursor();const t=new ir({value:this.el.value,cursorPos:this.cursorPos,oldValue:this.displayValue,oldSelection:this._selection}),i=this.masked.rawInputValue,n=this.masked.splice(t.startChangePos,t.removed.length,t.inserted,t.removeDirection,{input:!0,raw:!0}).offset,l=i===this.masked.rawInputValue?t.removeDirection:v.NONE;let o=this.masked.nearestInputPos(t.startChangePos+n,l);l!==v.NONE&&(o=this.masked.nearestInputPos(o,v.NONE)),this.updateControl(o),delete this._inputEvent}_onChange(){this.displayValue!==this.el.value&&this.updateValue(),this.masked.doCommit(),this.updateControl(),this._saveSelection()}_onDrop(e){e.preventDefault(),e.stopPropagation()}_onFocus(e){this.alignCursorFriendly()}_onClick(e){this.alignCursorFriendly()}_onUndo(){this._applyHistoryState(this.history.undo())}_onRedo(){this._applyHistoryState(this.history.redo())}_applyHistoryState(e){e&&(this._historyChanging=!0,this.unmaskedValue=e.unmaskedValue,this.el.select(e.selection.start,e.selection.end),this._saveSelection(),this._historyChanging=!1)}destroy(){this._unbindEvents(),this._listeners.length=0,delete this.el}}F.InputMask=nr;class T{static normalize(e){return Array.isArray(e)?e:[e,new T]}constructor(e){Object.assign(this,{inserted:"",rawInserted:"",tailShift:0,skip:!1},e)}aggregate(e){return this.inserted+=e.inserted,this.rawInserted+=e.rawInserted,this.tailShift+=e.tailShift,this.skip=this.skip||e.skip,this}get offset(){return this.tailShift+this.inserted.length}get consumed(){return!!this.rawInserted||this.skip}equals(e){return this.inserted===e.inserted&&this.tailShift===e.tailShift&&this.rawInserted===e.rawInserted&&this.skip===e.skip}}F.ChangeDetails=T;class ae{constructor(e,t,i){e===void 0&&(e=""),t===void 0&&(t=0),this.value=e,this.from=t,this.stop=i}toString(){return this.value}extend(e){this.value+=String(e)}appendTo(e){return e.append(this.toString(),{tail:!0}).aggregate(e._appendPlaceholder())}get state(){return{value:this.value,from:this.from,stop:this.stop}}set state(e){Object.assign(this,e)}unshift(e){if(!this.value.length||e!=null&&this.from>=e)return"";const t=this.value[0];return this.value=this.value.slice(1),t}shift(){if(!this.value.length)return"";const e=this.value[this.value.length-1];return this.value=this.value.slice(0,-1),e}}class q{constructor(e){this._value="",this._update({...q.DEFAULTS,...e}),this._initialized=!0}updateOptions(e){this.optionsIsChanged(e)&&this.withValueRefresh(this._update.bind(this,e))}_update(e){Object.assign(this,e)}get state(){return{_value:this.value,_rawInputValue:this.rawInputValue}}set state(e){this._value=e._value}reset(){this._value=""}get value(){return this._value}set value(e){this.resolve(e,{input:!0})}resolve(e,t){t===void 0&&(t={input:!0}),this.reset(),this.append(e,t,""),this.doCommit()}get unmaskedValue(){return this.value}set unmaskedValue(e){this.resolve(e,{})}get typedValue(){return this.parse?this.parse(this.value,this):this.unmaskedValue}set typedValue(e){this.format?this.value=this.format(e,this):this.unmaskedValue=String(e)}get rawInputValue(){return this.extractInput(0,this.displayValue.length,{raw:!0})}set rawInputValue(e){this.resolve(e,{raw:!0})}get displayValue(){return this.value}get isComplete(){return!0}get isFilled(){return this.isComplete}nearestInputPos(e,t){return e}totalInputPositions(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),Math.min(this.displayValue.length,t-e)}extractInput(e,t,i){return e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),this.displayValue.slice(e,t)}extractTail(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),new ae(this.extractInput(e,t),e)}appendTail(e){return pe(e)&&(e=new ae(String(e))),e.appendTo(this)}_appendCharRaw(e,t){return e?(this._value+=e,new T({inserted:e,rawInserted:e})):new T}_appendChar(e,t,i){t===void 0&&(t={});const n=this.state;let l;if([e,l]=this.doPrepareChar(e,t),e&&(l=l.aggregate(this._appendCharRaw(e,t)),!l.rawInserted&&this.autofix==="pad")){const o=this.state;this.state=n;let u=this.pad(t);const h=this._appendCharRaw(e,t);u=u.aggregate(h),h.rawInserted||u.equals(l)?l=u:this.state=o}if(l.inserted){let o,u=this.doValidate(t)!==!1;if(u&&i!=null){const h=this.state;if(this.overwrite===!0){o=i.state;for(let g=0;g<l.rawInserted.length;++g)i.unshift(this.displayValue.length-l.tailShift)}let p=this.appendTail(i);if(u=p.rawInserted.length===i.toString().length,!(u&&p.inserted)&&this.overwrite==="shift"){this.state=h,o=i.state;for(let g=0;g<l.rawInserted.length;++g)i.shift();p=this.appendTail(i),u=p.rawInserted.length===i.toString().length}u&&p.inserted&&(this.state=h)}u||(l=new T,this.state=n,i&&o&&(i.state=o))}return l}_appendPlaceholder(){return new T}_appendEager(){return new T}append(e,t,i){if(!pe(e))throw new Error("value should be string");const n=pe(i)?new ae(String(i)):i;t!=null&&t.tail&&(t._beforeTailState=this.state);let l;[e,l]=this.doPrepare(e,t);for(let o=0;o<e.length;++o){const u=this._appendChar(e[o],t,n);if(!u.rawInserted&&!this.doSkipInvalid(e[o],t,n))break;l.aggregate(u)}return(this.eager===!0||this.eager==="append")&&t!=null&&t.input&&e&&l.aggregate(this._appendEager()),n!=null&&(l.tailShift+=this.appendTail(n).tailShift),l}remove(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),this._value=this.displayValue.slice(0,e)+this.displayValue.slice(t),new T}withValueRefresh(e){if(this._refreshing||!this._initialized)return e();this._refreshing=!0;const t=this.rawInputValue,i=this.value,n=e();return this.rawInputValue=t,this.value&&this.value!==i&&i.indexOf(this.value)===0&&(this.append(i.slice(this.displayValue.length),{},""),this.doCommit()),delete this._refreshing,n}runIsolated(e){if(this._isolated||!this._initialized)return e(this);this._isolated=!0;const t=this.state,i=e(this);return this.state=t,delete this._isolated,i}doSkipInvalid(e,t,i){return!!this.skipInvalid}doPrepare(e,t){return t===void 0&&(t={}),T.normalize(this.prepare?this.prepare(e,this,t):e)}doPrepareChar(e,t){return t===void 0&&(t={}),T.normalize(this.prepareChar?this.prepareChar(e,this,t):e)}doValidate(e){return(!this.validate||this.validate(this.value,this,e))&&(!this.parent||this.parent.doValidate(e))}doCommit(){this.commit&&this.commit(this.value,this)}splice(e,t,i,n,l){i===void 0&&(i=""),n===void 0&&(n=v.NONE),l===void 0&&(l={input:!0});const o=e+t,u=this.extractTail(o),h=this.eager===!0||this.eager==="remove";let p;h&&(n=tr(n),p=this.extractInput(0,o,{raw:!0}));let g=e;const b=new T;if(n!==v.NONE&&(g=this.nearestInputPos(e,t>1&&e!==0&&!h?v.NONE:n),b.tailShift=g-e),b.aggregate(this.remove(g)),h&&n!==v.NONE&&p===this.rawInputValue)if(n===v.FORCE_LEFT){let k;for(;p===this.rawInputValue&&(k=this.displayValue.length);)b.aggregate(new T({tailShift:-1})).aggregate(this.remove(k-1))}else n===v.FORCE_RIGHT&&u.unshift();return b.aggregate(this.append(i,l,u))}maskEquals(e){return this.mask===e}optionsIsChanged(e){return!Ne(this,e)}typedValueEquals(e){const t=this.typedValue;return e===t||q.EMPTY_VALUES.includes(e)&&q.EMPTY_VALUES.includes(t)||(this.format?this.format(e,this)===this.format(this.typedValue,this):!1)}pad(e){return new T}}q.DEFAULTS={skipInvalid:!0};q.EMPTY_VALUES=[void 0,null,""];F.Masked=q;class ve{constructor(e,t){e===void 0&&(e=[]),t===void 0&&(t=0),this.chunks=e,this.from=t}toString(){return this.chunks.map(String).join("")}extend(e){if(!String(e))return;e=pe(e)?new ae(String(e)):e;const t=this.chunks[this.chunks.length-1],i=t&&(t.stop===e.stop||e.stop==null)&&e.from===t.from+t.toString().length;if(e instanceof ae)i?t.extend(e.toString()):this.chunks.push(e);else if(e instanceof ve){if(e.stop==null){let n;for(;e.chunks.length&&e.chunks[0].stop==null;)n=e.chunks.shift(),n.from+=e.from,this.extend(n)}e.toString()&&(e.stop=e.blockIndex,this.chunks.push(e))}}appendTo(e){if(!(e instanceof F.MaskedPattern))return new ae(this.toString()).appendTo(e);const t=new T;for(let i=0;i<this.chunks.length;++i){const n=this.chunks[i],l=e._mapPosToBlock(e.displayValue.length),o=n.stop;let u;if(o!=null&&(!l||l.index<=o)&&((n instanceof ve||e._stops.indexOf(o)>=0)&&t.aggregate(e._appendPlaceholder(o)),u=n instanceof ve&&e._blocks[o]),u){const h=u.appendTail(n);t.aggregate(h);const p=n.toString().slice(h.rawInserted.length);p&&t.aggregate(e.append(p,{tail:!0}))}else t.aggregate(e.append(n.toString(),{tail:!0}))}return t}get state(){return{chunks:this.chunks.map(e=>e.state),from:this.from,stop:this.stop,blockIndex:this.blockIndex}}set state(e){const{chunks:t,...i}=e;Object.assign(this,i),this.chunks=t.map(n=>{const l="chunks"in n?new ve:new ae;return l.state=n,l})}unshift(e){if(!this.chunks.length||e!=null&&this.from>=e)return"";const t=e!=null?e-this.from:e;let i=0;for(;i<this.chunks.length;){const n=this.chunks[i],l=n.unshift(t);if(n.toString()){if(!l)break;++i}else this.chunks.splice(i,1);if(l)return l}return""}shift(){if(!this.chunks.length)return"";let e=this.chunks.length-1;for(;0<=e;){const t=this.chunks[e],i=t.shift();if(t.toString()){if(!i)break;--e}else this.chunks.splice(e,1);if(i)return i}return""}}class lr{constructor(e,t){this.masked=e,this._log=[];const{offset:i,index:n}=e._mapPosToBlock(t)||(t<0?{index:0,offset:0}:{index:this.masked._blocks.length,offset:0});this.offset=i,this.index=n,this.ok=!1}get block(){return this.masked._blocks[this.index]}get pos(){return this.masked._blockStartPos(this.index)+this.offset}get state(){return{index:this.index,offset:this.offset,ok:this.ok}}set state(e){Object.assign(this,e)}pushState(){this._log.push(this.state)}popState(){const e=this._log.pop();return e&&(this.state=e),e}bindBlock(){this.block||(this.index<0&&(this.index=0,this.offset=0),this.index>=this.masked._blocks.length&&(this.index=this.masked._blocks.length-1,this.offset=this.block.displayValue.length))}_pushLeft(e){for(this.pushState(),this.bindBlock();0<=this.index;--this.index,this.offset=((t=this.block)==null?void 0:t.displayValue.length)||0){var t;if(e())return this.ok=!0}return this.ok=!1}_pushRight(e){for(this.pushState(),this.bindBlock();this.index<this.masked._blocks.length;++this.index,this.offset=0)if(e())return this.ok=!0;return this.ok=!1}pushLeftBeforeFilled(){return this._pushLeft(()=>{if(!(this.block.isFixed||!this.block.value)&&(this.offset=this.block.nearestInputPos(this.offset,v.FORCE_LEFT),this.offset!==0))return!0})}pushLeftBeforeInput(){return this._pushLeft(()=>{if(!this.block.isFixed)return this.offset=this.block.nearestInputPos(this.offset,v.LEFT),!0})}pushLeftBeforeRequired(){return this._pushLeft(()=>{if(!(this.block.isFixed||this.block.isOptional&&!this.block.value))return this.offset=this.block.nearestInputPos(this.offset,v.LEFT),!0})}pushRightBeforeFilled(){return this._pushRight(()=>{if(!(this.block.isFixed||!this.block.value)&&(this.offset=this.block.nearestInputPos(this.offset,v.FORCE_RIGHT),this.offset!==this.block.value.length))return!0})}pushRightBeforeInput(){return this._pushRight(()=>{if(!this.block.isFixed)return this.offset=this.block.nearestInputPos(this.offset,v.NONE),!0})}pushRightBeforeRequired(){return this._pushRight(()=>{if(!(this.block.isFixed||this.block.isOptional&&!this.block.value))return this.offset=this.block.nearestInputPos(this.offset,v.NONE),!0})}}class kt{constructor(e){Object.assign(this,e),this._value="",this.isFixed=!0}get value(){return this._value}get unmaskedValue(){return this.isUnmasking?this.value:""}get rawInputValue(){return this._isRawInput?this.value:""}get displayValue(){return this.value}reset(){this._isRawInput=!1,this._value=""}remove(e,t){return e===void 0&&(e=0),t===void 0&&(t=this._value.length),this._value=this._value.slice(0,e)+this._value.slice(t),this._value||(this._isRawInput=!1),new T}nearestInputPos(e,t){t===void 0&&(t=v.NONE);const i=0,n=this._value.length;switch(t){case v.LEFT:case v.FORCE_LEFT:return i;case v.NONE:case v.RIGHT:case v.FORCE_RIGHT:default:return n}}totalInputPositions(e,t){return e===void 0&&(e=0),t===void 0&&(t=this._value.length),this._isRawInput?t-e:0}extractInput(e,t,i){return e===void 0&&(e=0),t===void 0&&(t=this._value.length),i===void 0&&(i={}),i.raw&&this._isRawInput&&this._value.slice(e,t)||""}get isComplete(){return!0}get isFilled(){return!!this._value}_appendChar(e,t){if(t===void 0&&(t={}),this.isFilled)return new T;const i=this.eager===!0||this.eager==="append",l=this.char===e&&(this.isUnmasking||t.input||t.raw)&&(!t.raw||!i)&&!t.tail,o=new T({inserted:this.char,rawInserted:l?this.char:""});return this._value=this.char,this._isRawInput=l&&(t.raw||t.input),o}_appendEager(){return this._appendChar(this.char,{tail:!0})}_appendPlaceholder(){const e=new T;return this.isFilled||(this._value=e.inserted=this.char),e}extractTail(){return new ae("")}appendTail(e){return pe(e)&&(e=new ae(String(e))),e.appendTo(this)}append(e,t,i){const n=this._appendChar(e[0],t);return i!=null&&(n.tailShift+=this.appendTail(i).tailShift),n}doCommit(){}get state(){return{_value:this._value,_rawInputValue:this.rawInputValue}}set state(e){this._value=e._value,this._isRawInput=!!e._rawInputValue}pad(e){return this._appendPlaceholder()}}class Oe{constructor(e){const{parent:t,isOptional:i,placeholderChar:n,displayChar:l,lazy:o,eager:u,...h}=e;this.masked=se(h),Object.assign(this,{parent:t,isOptional:i,placeholderChar:n,displayChar:l,lazy:o,eager:u})}reset(){this.isFilled=!1,this.masked.reset()}remove(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.value.length),e===0&&t>=1?(this.isFilled=!1,this.masked.remove(e,t)):new T}get value(){return this.masked.value||(this.isFilled&&!this.isOptional?this.placeholderChar:"")}get unmaskedValue(){return this.masked.unmaskedValue}get rawInputValue(){return this.masked.rawInputValue}get displayValue(){return this.masked.value&&this.displayChar||this.value}get isComplete(){return!!this.masked.value||this.isOptional}_appendChar(e,t){if(t===void 0&&(t={}),this.isFilled)return new T;const i=this.masked.state;let n=this.masked._appendChar(e,this.currentMaskFlags(t));return n.inserted&&this.doValidate(t)===!1&&(n=new T,this.masked.state=i),!n.inserted&&!this.isOptional&&!this.lazy&&!t.input&&(n.inserted=this.placeholderChar),n.skip=!n.inserted&&!this.isOptional,this.isFilled=!!n.inserted,n}append(e,t,i){return this.masked.append(e,this.currentMaskFlags(t),i)}_appendPlaceholder(){return this.isFilled||this.isOptional?new T:(this.isFilled=!0,new T({inserted:this.placeholderChar}))}_appendEager(){return new T}extractTail(e,t){return this.masked.extractTail(e,t)}appendTail(e){return this.masked.appendTail(e)}extractInput(e,t,i){return e===void 0&&(e=0),t===void 0&&(t=this.value.length),this.masked.extractInput(e,t,i)}nearestInputPos(e,t){t===void 0&&(t=v.NONE);const i=0,n=this.value.length,l=Math.min(Math.max(e,i),n);switch(t){case v.LEFT:case v.FORCE_LEFT:return this.isComplete?l:i;case v.RIGHT:case v.FORCE_RIGHT:return this.isComplete?l:n;case v.NONE:default:return l}}totalInputPositions(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.value.length),this.value.slice(e,t).length}doValidate(e){return this.masked.doValidate(this.currentMaskFlags(e))&&(!this.parent||this.parent.doValidate(this.currentMaskFlags(e)))}doCommit(){this.masked.doCommit()}get state(){return{_value:this.value,_rawInputValue:this.rawInputValue,masked:this.masked.state,isFilled:this.isFilled}}set state(e){this.masked.state=e.masked,this.isFilled=e.isFilled}currentMaskFlags(e){var t;return{...e,_beforeTailState:(e==null||(t=e._beforeTailState)==null?void 0:t.masked)||(e==null?void 0:e._beforeTailState)}}pad(e){return new T}}Oe.DEFAULT_DEFINITIONS={0:/\d/,a:/[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,"*":/./};class or extends q{updateOptions(e){super.updateOptions(e)}_update(e){const t=e.mask;t&&(e.validate=i=>i.search(t)>=0),super._update(e)}}F.MaskedRegExp=or;class $ extends q{constructor(e){super({...$.DEFAULTS,...e,definitions:Object.assign({},Oe.DEFAULT_DEFINITIONS,e==null?void 0:e.definitions)})}updateOptions(e){super.updateOptions(e)}_update(e){e.definitions=Object.assign({},this.definitions,e.definitions),super._update(e),this._rebuildMask()}_rebuildMask(){const e=this.definitions;this._blocks=[],this.exposeBlock=void 0,this._stops=[],this._maskedBlocks={};const t=this.mask;if(!t||!e)return;let i=!1,n=!1;for(let l=0;l<t.length;++l){if(this.blocks){const p=t.slice(l),g=Object.keys(this.blocks).filter(k=>p.indexOf(k)===0);g.sort((k,S)=>S.length-k.length);const b=g[0];if(b){const{expose:k,repeat:S,...C}=we(this.blocks[b]),A={lazy:this.lazy,eager:this.eager,placeholderChar:this.placeholderChar,displayChar:this.displayChar,overwrite:this.overwrite,autofix:this.autofix,...C,repeat:S,parent:this},B=S!=null?new F.RepeatBlock(A):se(A);B&&(this._blocks.push(B),k&&(this.exposeBlock=B),this._maskedBlocks[b]||(this._maskedBlocks[b]=[]),this._maskedBlocks[b].push(this._blocks.length-1)),l+=b.length-1;continue}}let o=t[l],u=o in e;if(o===$.STOP_CHAR){this._stops.push(this._blocks.length);continue}if(o==="{"||o==="}"){i=!i;continue}if(o==="["||o==="]"){n=!n;continue}if(o===$.ESCAPE_CHAR){if(++l,o=t[l],!o)break;u=!1}const h=u?new Oe({isOptional:n,lazy:this.lazy,eager:this.eager,placeholderChar:this.placeholderChar,displayChar:this.displayChar,...we(e[o]),parent:this}):new kt({char:o,eager:this.eager,isUnmasking:i});this._blocks.push(h)}}get state(){return{...super.state,_blocks:this._blocks.map(e=>e.state)}}set state(e){if(!e){this.reset();return}const{_blocks:t,...i}=e;this._blocks.forEach((n,l)=>n.state=t[l]),super.state=i}reset(){super.reset(),this._blocks.forEach(e=>e.reset())}get isComplete(){return this.exposeBlock?this.exposeBlock.isComplete:this._blocks.every(e=>e.isComplete)}get isFilled(){return this._blocks.every(e=>e.isFilled)}get isFixed(){return this._blocks.every(e=>e.isFixed)}get isOptional(){return this._blocks.every(e=>e.isOptional)}doCommit(){this._blocks.forEach(e=>e.doCommit()),super.doCommit()}get unmaskedValue(){return this.exposeBlock?this.exposeBlock.unmaskedValue:this._blocks.reduce((e,t)=>e+=t.unmaskedValue,"")}set unmaskedValue(e){if(this.exposeBlock){const t=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.unmaskedValue=e,this.appendTail(t),this.doCommit()}else super.unmaskedValue=e}get value(){return this.exposeBlock?this.exposeBlock.value:this._blocks.reduce((e,t)=>e+=t.value,"")}set value(e){if(this.exposeBlock){const t=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.value=e,this.appendTail(t),this.doCommit()}else super.value=e}get typedValue(){return this.exposeBlock?this.exposeBlock.typedValue:super.typedValue}set typedValue(e){if(this.exposeBlock){const t=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.typedValue=e,this.appendTail(t),this.doCommit()}else super.typedValue=e}get displayValue(){return this._blocks.reduce((e,t)=>e+=t.displayValue,"")}appendTail(e){return super.appendTail(e).aggregate(this._appendPlaceholder())}_appendEager(){var e;const t=new T;let i=(e=this._mapPosToBlock(this.displayValue.length))==null?void 0:e.index;if(i==null)return t;this._blocks[i].isFilled&&++i;for(let n=i;n<this._blocks.length;++n){const l=this._blocks[n]._appendEager();if(!l.inserted)break;t.aggregate(l)}return t}_appendCharRaw(e,t){t===void 0&&(t={});const i=this._mapPosToBlock(this.displayValue.length),n=new T;if(!i)return n;for(let o=i.index,u;u=this._blocks[o];++o){var l;const h=u._appendChar(e,{...t,_beforeTailState:(l=t._beforeTailState)==null||(l=l._blocks)==null?void 0:l[o]});if(n.aggregate(h),h.consumed)break}return n}extractTail(e,t){e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length);const i=new ve;return e===t||this._forEachBlocksInRange(e,t,(n,l,o,u)=>{const h=n.extractTail(o,u);h.stop=this._findStopBefore(l),h.from=this._blockStartPos(l),h instanceof ve&&(h.blockIndex=l),i.extend(h)}),i}extractInput(e,t,i){if(e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),i===void 0&&(i={}),e===t)return"";let n="";return this._forEachBlocksInRange(e,t,(l,o,u,h)=>{n+=l.extractInput(u,h,i)}),n}_findStopBefore(e){let t;for(let i=0;i<this._stops.length;++i){const n=this._stops[i];if(n<=e)t=n;else break}return t}_appendPlaceholder(e){const t=new T;if(this.lazy&&e==null)return t;const i=this._mapPosToBlock(this.displayValue.length);if(!i)return t;const n=i.index,l=e??this._blocks.length;return this._blocks.slice(n,l).forEach(o=>{if(!o.lazy||e!=null){var u;t.aggregate(o._appendPlaceholder((u=o._blocks)==null?void 0:u.length))}}),t}_mapPosToBlock(e){let t="";for(let i=0;i<this._blocks.length;++i){const n=this._blocks[i],l=t.length;if(t+=n.displayValue,e<=t.length)return{index:i,offset:e-l}}}_blockStartPos(e){return this._blocks.slice(0,e).reduce((t,i)=>t+=i.displayValue.length,0)}_forEachBlocksInRange(e,t,i){t===void 0&&(t=this.displayValue.length);const n=this._mapPosToBlock(e);if(n){const l=this._mapPosToBlock(t),o=l&&n.index===l.index,u=n.offset,h=l&&o?l.offset:this._blocks[n.index].displayValue.length;if(i(this._blocks[n.index],n.index,u,h),l&&!o){for(let p=n.index+1;p<l.index;++p)i(this._blocks[p],p,0,this._blocks[p].displayValue.length);i(this._blocks[l.index],l.index,0,l.offset)}}}remove(e,t){e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length);const i=super.remove(e,t);return this._forEachBlocksInRange(e,t,(n,l,o,u)=>{i.aggregate(n.remove(o,u))}),i}nearestInputPos(e,t){if(t===void 0&&(t=v.NONE),!this._blocks.length)return 0;const i=new lr(this,e);if(t===v.NONE)return i.pushRightBeforeInput()||(i.popState(),i.pushLeftBeforeInput())?i.pos:this.displayValue.length;if(t===v.LEFT||t===v.FORCE_LEFT){if(t===v.LEFT){if(i.pushRightBeforeFilled(),i.ok&&i.pos===e)return e;i.popState()}if(i.pushLeftBeforeInput(),i.pushLeftBeforeRequired(),i.pushLeftBeforeFilled(),t===v.LEFT){if(i.pushRightBeforeInput(),i.pushRightBeforeRequired(),i.ok&&i.pos<=e||(i.popState(),i.ok&&i.pos<=e))return i.pos;i.popState()}return i.ok?i.pos:t===v.FORCE_LEFT?0:(i.popState(),i.ok||(i.popState(),i.ok)?i.pos:0)}return t===v.RIGHT||t===v.FORCE_RIGHT?(i.pushRightBeforeInput(),i.pushRightBeforeRequired(),i.pushRightBeforeFilled()?i.pos:t===v.FORCE_RIGHT?this.displayValue.length:(i.popState(),i.ok||(i.popState(),i.ok)?i.pos:this.nearestInputPos(e,v.LEFT))):e}totalInputPositions(e,t){e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length);let i=0;return this._forEachBlocksInRange(e,t,(n,l,o,u)=>{i+=n.totalInputPositions(o,u)}),i}maskedBlock(e){return this.maskedBlocks(e)[0]}maskedBlocks(e){const t=this._maskedBlocks[e];return t?t.map(i=>this._blocks[i]):[]}pad(e){const t=new T;return this._forEachBlocksInRange(0,this.displayValue.length,i=>t.aggregate(i.pad(e))),t}}$.DEFAULTS={...q.DEFAULTS,lazy:!0,placeholderChar:"_"};$.STOP_CHAR="`";$.ESCAPE_CHAR="\\";$.InputDefinition=Oe;$.FixedDefinition=kt;F.MaskedPattern=$;class De extends ${get _matchFrom(){return this.maxLength-String(this.from).length}constructor(e){super(e)}updateOptions(e){super.updateOptions(e)}_update(e){const{to:t=this.to||0,from:i=this.from||0,maxLength:n=this.maxLength||0,autofix:l=this.autofix,...o}=e;this.to=t,this.from=i,this.maxLength=Math.max(String(t).length,n),this.autofix=l;const u=String(this.from).padStart(this.maxLength,"0"),h=String(this.to).padStart(this.maxLength,"0");let p=0;for(;p<h.length&&h[p]===u[p];)++p;o.mask=h.slice(0,p).replace(/0/g,"\\0")+"0".repeat(this.maxLength-p),super._update(o)}get isComplete(){return super.isComplete&&!!this.value}boundaries(e){let t="",i="";const[,n,l]=e.match(/^(\D*)(\d*)(\D*)/)||[];return l&&(t="0".repeat(n.length)+l,i="9".repeat(n.length)+l),t=t.padEnd(this.maxLength,"0"),i=i.padEnd(this.maxLength,"9"),[t,i]}doPrepareChar(e,t){t===void 0&&(t={});let i;return[e,i]=super.doPrepareChar(e.replace(/\D/g,""),t),e||(i.skip=!this.isComplete),[e,i]}_appendCharRaw(e,t){if(t===void 0&&(t={}),!this.autofix||this.value.length+1>this.maxLength)return super._appendCharRaw(e,t);const i=String(this.from).padStart(this.maxLength,"0"),n=String(this.to).padStart(this.maxLength,"0"),[l,o]=this.boundaries(this.value+e);return Number(o)<this.from?super._appendCharRaw(i[this.value.length],t):Number(l)>this.to?!t.tail&&this.autofix==="pad"&&this.value.length+1<this.maxLength?super._appendCharRaw(i[this.value.length],t).aggregate(this._appendCharRaw(e,t)):super._appendCharRaw(n[this.value.length],t):super._appendCharRaw(e,t)}doValidate(e){const t=this.value;if(t.search(/[^0]/)===-1&&t.length<=this._matchFrom)return!0;const[n,l]=this.boundaries(t);return this.from<=Number(l)&&Number(n)<=this.to&&super.doValidate(e)}pad(e){const t=new T;if(this.value.length===this.maxLength)return t;const i=this.value,n=this.maxLength-this.value.length;if(n){this.reset();for(let l=0;l<n;++l)t.aggregate(super._appendCharRaw("0",e));i.split("").forEach(l=>this._appendCharRaw(l))}return t}}F.MaskedRange=De;class oe extends ${static extractPatternOptions(e){const{mask:t,pattern:i,...n}=e;return{...n,mask:pe(t)?t:i}}constructor(e){super(oe.extractPatternOptions({...oe.DEFAULTS,...e}))}updateOptions(e){super.updateOptions(e)}_update(e){const{mask:t,pattern:i,blocks:n,...l}={...oe.DEFAULTS,...e},o=Object.assign({},oe.GET_DEFAULT_BLOCKS());e.min&&(o.Y.from=e.min.getFullYear()),e.max&&(o.Y.to=e.max.getFullYear()),e.min&&e.max&&o.Y.from===o.Y.to&&(o.m.from=e.min.getMonth()+1,o.m.to=e.max.getMonth()+1,o.m.from===o.m.to&&(o.d.from=e.min.getDate(),o.d.to=e.max.getDate())),Object.assign(o,this.blocks,n),super._update({...l,mask:pe(t)?t:i,blocks:o})}doValidate(e){const t=this.date;return super.doValidate(e)&&(!this.isComplete||this.isDateExist(this.value)&&t!=null&&(this.min==null||this.min<=t)&&(this.max==null||t<=this.max))}isDateExist(e){return this.format(this.parse(e,this),this).indexOf(e)>=0}get date(){return this.typedValue}set date(e){this.typedValue=e}get typedValue(){return this.isComplete?super.typedValue:null}set typedValue(e){super.typedValue=e}maskEquals(e){return e===Date||super.maskEquals(e)}optionsIsChanged(e){return super.optionsIsChanged(oe.extractPatternOptions(e))}}oe.GET_DEFAULT_BLOCKS=()=>({d:{mask:De,from:1,to:31,maxLength:2},m:{mask:De,from:1,to:12,maxLength:2},Y:{mask:De,from:1900,to:9999}});oe.DEFAULTS={...$.DEFAULTS,mask:Date,pattern:"d{.}`m{.}`Y",format:(a,e)=>{if(!a)return"";const t=String(a.getDate()).padStart(2,"0"),i=String(a.getMonth()+1).padStart(2,"0"),n=a.getFullYear();return[t,i,n].join(".")},parse:(a,e)=>{const[t,i,n]=a.split(".").map(Number);return new Date(n,i-1,t)}};F.MaskedDate=oe;class Ue extends q{constructor(e){super({...Ue.DEFAULTS,...e}),this.currentMask=void 0}updateOptions(e){super.updateOptions(e)}_update(e){super._update(e),"mask"in e&&(this.exposeMask=void 0,this.compiledMasks=Array.isArray(e.mask)?e.mask.map(t=>{const{expose:i,...n}=we(t),l=se({overwrite:this._overwrite,eager:this._eager,skipInvalid:this._skipInvalid,...n});return i&&(this.exposeMask=l),l}):[])}_appendCharRaw(e,t){t===void 0&&(t={});const i=this._applyDispatch(e,t);return this.currentMask&&i.aggregate(this.currentMask._appendChar(e,this.currentMaskFlags(t))),i}_applyDispatch(e,t,i){e===void 0&&(e=""),t===void 0&&(t={}),i===void 0&&(i="");const n=t.tail&&t._beforeTailState!=null?t._beforeTailState._value:this.value,l=this.rawInputValue,o=t.tail&&t._beforeTailState!=null?t._beforeTailState._rawInputValue:l,u=l.slice(o.length),h=this.currentMask,p=new T,g=h==null?void 0:h.state;return this.currentMask=this.doDispatch(e,{...t},i),this.currentMask&&(this.currentMask!==h?(this.currentMask.reset(),o&&(this.currentMask.append(o,{raw:!0}),p.tailShift=this.currentMask.value.length-n.length),u&&(p.tailShift+=this.currentMask.append(u,{raw:!0,tail:!0}).tailShift)):g&&(this.currentMask.state=g)),p}_appendPlaceholder(){const e=this._applyDispatch();return this.currentMask&&e.aggregate(this.currentMask._appendPlaceholder()),e}_appendEager(){const e=this._applyDispatch();return this.currentMask&&e.aggregate(this.currentMask._appendEager()),e}appendTail(e){const t=new T;return e&&t.aggregate(this._applyDispatch("",{},e)),t.aggregate(this.currentMask?this.currentMask.appendTail(e):super.appendTail(e))}currentMaskFlags(e){var t,i;return{...e,_beforeTailState:((t=e._beforeTailState)==null?void 0:t.currentMaskRef)===this.currentMask&&((i=e._beforeTailState)==null?void 0:i.currentMask)||e._beforeTailState}}doDispatch(e,t,i){return t===void 0&&(t={}),i===void 0&&(i=""),this.dispatch(e,this,t,i)}doValidate(e){return super.doValidate(e)&&(!this.currentMask||this.currentMask.doValidate(this.currentMaskFlags(e)))}doPrepare(e,t){t===void 0&&(t={});let[i,n]=super.doPrepare(e,t);if(this.currentMask){let l;[i,l]=super.doPrepare(i,this.currentMaskFlags(t)),n=n.aggregate(l)}return[i,n]}doPrepareChar(e,t){t===void 0&&(t={});let[i,n]=super.doPrepareChar(e,t);if(this.currentMask){let l;[i,l]=super.doPrepareChar(i,this.currentMaskFlags(t)),n=n.aggregate(l)}return[i,n]}reset(){var e;(e=this.currentMask)==null||e.reset(),this.compiledMasks.forEach(t=>t.reset())}get value(){return this.exposeMask?this.exposeMask.value:this.currentMask?this.currentMask.value:""}set value(e){this.exposeMask?(this.exposeMask.value=e,this.currentMask=this.exposeMask,this._applyDispatch()):super.value=e}get unmaskedValue(){return this.exposeMask?this.exposeMask.unmaskedValue:this.currentMask?this.currentMask.unmaskedValue:""}set unmaskedValue(e){this.exposeMask?(this.exposeMask.unmaskedValue=e,this.currentMask=this.exposeMask,this._applyDispatch()):super.unmaskedValue=e}get typedValue(){return this.exposeMask?this.exposeMask.typedValue:this.currentMask?this.currentMask.typedValue:""}set typedValue(e){if(this.exposeMask){this.exposeMask.typedValue=e,this.currentMask=this.exposeMask,this._applyDispatch();return}let t=String(e);this.currentMask&&(this.currentMask.typedValue=e,t=this.currentMask.unmaskedValue),this.unmaskedValue=t}get displayValue(){return this.currentMask?this.currentMask.displayValue:""}get isComplete(){var e;return!!((e=this.currentMask)!=null&&e.isComplete)}get isFilled(){var e;return!!((e=this.currentMask)!=null&&e.isFilled)}remove(e,t){const i=new T;return this.currentMask&&i.aggregate(this.currentMask.remove(e,t)).aggregate(this._applyDispatch()),i}get state(){var e;return{...super.state,_rawInputValue:this.rawInputValue,compiledMasks:this.compiledMasks.map(t=>t.state),currentMaskRef:this.currentMask,currentMask:(e=this.currentMask)==null?void 0:e.state}}set state(e){const{compiledMasks:t,currentMaskRef:i,currentMask:n,...l}=e;t&&this.compiledMasks.forEach((o,u)=>o.state=t[u]),i!=null&&(this.currentMask=i,this.currentMask.state=n),super.state=l}extractInput(e,t,i){return this.currentMask?this.currentMask.extractInput(e,t,i):""}extractTail(e,t){return this.currentMask?this.currentMask.extractTail(e,t):super.extractTail(e,t)}doCommit(){this.currentMask&&this.currentMask.doCommit(),super.doCommit()}nearestInputPos(e,t){return this.currentMask?this.currentMask.nearestInputPos(e,t):super.nearestInputPos(e,t)}get overwrite(){return this.currentMask?this.currentMask.overwrite:this._overwrite}set overwrite(e){this._overwrite=e}get eager(){return this.currentMask?this.currentMask.eager:this._eager}set eager(e){this._eager=e}get skipInvalid(){return this.currentMask?this.currentMask.skipInvalid:this._skipInvalid}set skipInvalid(e){this._skipInvalid=e}get autofix(){return this.currentMask?this.currentMask.autofix:this._autofix}set autofix(e){this._autofix=e}maskEquals(e){return Array.isArray(e)?this.compiledMasks.every((t,i)=>{if(!e[i])return;const{mask:n,...l}=e[i];return Ne(t,l)&&t.maskEquals(n)}):super.maskEquals(e)}typedValueEquals(e){var t;return!!((t=this.currentMask)!=null&&t.typedValueEquals(e))}}Ue.DEFAULTS={...q.DEFAULTS,dispatch:(a,e,t,i)=>{if(!e.compiledMasks.length)return;const n=e.rawInputValue,l=e.compiledMasks.map((o,u)=>{const h=e.currentMask===o,p=h?o.displayValue.length:o.nearestInputPos(o.displayValue.length,v.FORCE_LEFT);return o.rawInputValue!==n?(o.reset(),o.append(n,{raw:!0})):h||o.remove(p),o.append(a,e.currentMaskFlags(t)),o.appendTail(i),{index:u,weight:o.rawInputValue.length,totalInputPositions:o.totalInputPositions(0,Math.max(p,o.nearestInputPos(o.displayValue.length,v.FORCE_LEFT)))}});return l.sort((o,u)=>u.weight-o.weight||u.totalInputPositions-o.totalInputPositions),e.compiledMasks[l[0].index]}};F.MaskedDynamic=Ue;class je extends ${constructor(e){super({...je.DEFAULTS,...e})}updateOptions(e){super.updateOptions(e)}_update(e){const{enum:t,...i}=e;if(t){const n=t.map(u=>u.length),l=Math.min(...n),o=Math.max(...n)-l;i.mask="*".repeat(l),o&&(i.mask+="["+"*".repeat(o)+"]"),this.enum=t}super._update(i)}_appendCharRaw(e,t){t===void 0&&(t={});const i=Math.min(this.nearestInputPos(0,v.FORCE_RIGHT),this.value.length),n=this.enum.filter(l=>this.matchValue(l,this.unmaskedValue+e,i));if(n.length){n.length===1&&this._forEachBlocksInRange(0,this.value.length,(o,u)=>{const h=n[0][u];u>=this.value.length||h===o.value||(o.reset(),o._appendChar(h,t))});const l=super._appendCharRaw(n[0][this.value.length],t);return n.length===1&&n[0].slice(this.unmaskedValue.length).split("").forEach(o=>l.aggregate(super._appendCharRaw(o))),l}return new T({skip:!this.isComplete})}extractTail(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),new ae("",e)}remove(e,t){if(e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),e===t)return new T;const i=Math.min(super.nearestInputPos(0,v.FORCE_RIGHT),this.value.length);let n;for(n=e;n>=0&&!(this.enum.filter(u=>this.matchValue(u,this.value.slice(i,n),i)).length>1);--n);const l=super.remove(n,t);return l.tailShift+=n-e,l}get isComplete(){return this.enum.indexOf(this.value)>=0}}je.DEFAULTS={...$.DEFAULTS,matchValue:(a,e,t)=>a.indexOf(e,t)===t};F.MaskedEnum=je;class sr extends q{updateOptions(e){super.updateOptions(e)}_update(e){super._update({...e,validate:e.mask})}}F.MaskedFunction=sr;var Ct;class J extends q{constructor(e){super({...J.DEFAULTS,...e})}updateOptions(e){super.updateOptions(e)}_update(e){super._update(e),this._updateRegExps()}_updateRegExps(){const e="^"+(this.allowNegative?"[+|\\-]?":""),t="\\d*",i=(this.scale?"("+Ze(this.radix)+"\\d{0,"+this.scale+"})?":"")+"$";this._numberRegExp=new RegExp(e+t+i),this._mapToRadixRegExp=new RegExp("["+this.mapToRadix.map(Ze).join("")+"]","g"),this._thousandsSeparatorRegExp=new RegExp(Ze(this.thousandsSeparator),"g")}_removeThousandsSeparators(e){return e.replace(this._thousandsSeparatorRegExp,"")}_insertThousandsSeparators(e){const t=e.split(this.radix);return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,this.thousandsSeparator),t.join(this.radix)}doPrepareChar(e,t){t===void 0&&(t={});const[i,n]=super.doPrepareChar(this._removeThousandsSeparators(this.scale&&this.mapToRadix.length&&(t.input&&t.raw||!t.input&&!t.raw)?e.replace(this._mapToRadixRegExp,this.radix):e),t);return e&&!i&&(n.skip=!0),i&&!this.allowPositive&&!this.value&&i!=="-"&&n.aggregate(this._appendChar("-")),[i,n]}_separatorsCount(e,t){t===void 0&&(t=!1);let i=0;for(let n=0;n<e;++n)this._value.indexOf(this.thousandsSeparator,n)===n&&(++i,t&&(e+=this.thousandsSeparator.length));return i}_separatorsCountFromSlice(e){return e===void 0&&(e=this._value),this._separatorsCount(this._removeThousandsSeparators(e).length,!0)}extractInput(e,t,i){return e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),[e,t]=this._adjustRangeWithSeparators(e,t),this._removeThousandsSeparators(super.extractInput(e,t,i))}_appendCharRaw(e,t){t===void 0&&(t={});const i=t.tail&&t._beforeTailState?t._beforeTailState._value:this._value,n=this._separatorsCountFromSlice(i);this._value=this._removeThousandsSeparators(this.value);const l=this._value;this._value+=e;const o=this.number;let u=!isNaN(o),h=!1;if(u){let k;this.min!=null&&this.min<0&&this.number<this.min&&(k=this.min),this.max!=null&&this.max>0&&this.number>this.max&&(k=this.max),k!=null&&(this.autofix?(this._value=this.format(k,this).replace(J.UNMASKED_RADIX,this.radix),h||(h=l===this._value&&!t.tail)):u=!1),u&&(u=!!this._value.match(this._numberRegExp))}let p;u?p=new T({inserted:this._value.slice(l.length),rawInserted:h?"":e,skip:h}):(this._value=l,p=new T),this._value=this._insertThousandsSeparators(this._value);const g=t.tail&&t._beforeTailState?t._beforeTailState._value:this._value,b=this._separatorsCountFromSlice(g);return p.tailShift+=(b-n)*this.thousandsSeparator.length,p}_findSeparatorAround(e){if(this.thousandsSeparator){const t=e-this.thousandsSeparator.length+1,i=this.value.indexOf(this.thousandsSeparator,t);if(i<=e)return i}return-1}_adjustRangeWithSeparators(e,t){const i=this._findSeparatorAround(e);i>=0&&(e=i);const n=this._findSeparatorAround(t);return n>=0&&(t=n+this.thousandsSeparator.length),[e,t]}remove(e,t){e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),[e,t]=this._adjustRangeWithSeparators(e,t);const i=this.value.slice(0,e),n=this.value.slice(t),l=this._separatorsCount(i.length);this._value=this._insertThousandsSeparators(this._removeThousandsSeparators(i+n));const o=this._separatorsCountFromSlice(i);return new T({tailShift:(o-l)*this.thousandsSeparator.length})}nearestInputPos(e,t){if(!this.thousandsSeparator)return e;switch(t){case v.NONE:case v.LEFT:case v.FORCE_LEFT:{const i=this._findSeparatorAround(e-1);if(i>=0){const n=i+this.thousandsSeparator.length;if(e<n||this.value.length<=n||t===v.FORCE_LEFT)return i}break}case v.RIGHT:case v.FORCE_RIGHT:{const i=this._findSeparatorAround(e);if(i>=0)return i+this.thousandsSeparator.length}}return e}doCommit(){if(this.value){const e=this.number;let t=e;this.min!=null&&(t=Math.max(t,this.min)),this.max!=null&&(t=Math.min(t,this.max)),t!==e&&(this.unmaskedValue=this.format(t,this));let i=this.value;this.normalizeZeros&&(i=this._normalizeZeros(i)),this.padFractionalZeros&&this.scale>0&&(i=this._padFractionalZeros(i)),this._value=i}super.doCommit()}_normalizeZeros(e){const t=this._removeThousandsSeparators(e).split(this.radix);return t[0]=t[0].replace(/^(\D*)(0*)(\d*)/,(i,n,l,o)=>n+o),e.length&&!/\d$/.test(t[0])&&(t[0]=t[0]+"0"),t.length>1&&(t[1]=t[1].replace(/0*$/,""),t[1].length||(t.length=1)),this._insertThousandsSeparators(t.join(this.radix))}_padFractionalZeros(e){if(!e)return e;const t=e.split(this.radix);return t.length<2&&t.push(""),t[1]=t[1].padEnd(this.scale,"0"),t.join(this.radix)}doSkipInvalid(e,t,i){t===void 0&&(t={});const n=this.scale===0&&e!==this.thousandsSeparator&&(e===this.radix||e===J.UNMASKED_RADIX||this.mapToRadix.includes(e));return super.doSkipInvalid(e,t,i)&&!n}get unmaskedValue(){return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix,J.UNMASKED_RADIX)}set unmaskedValue(e){super.unmaskedValue=e}get typedValue(){return this.parse(this.unmaskedValue,this)}set typedValue(e){this.rawInputValue=this.format(e,this).replace(J.UNMASKED_RADIX,this.radix)}get number(){return this.typedValue}set number(e){this.typedValue=e}get allowNegative(){return this.min!=null&&this.min<0||this.max!=null&&this.max<0}get allowPositive(){return this.min!=null&&this.min>0||this.max!=null&&this.max>0}typedValueEquals(e){return(super.typedValueEquals(e)||J.EMPTY_VALUES.includes(e)&&J.EMPTY_VALUES.includes(this.typedValue))&&!(e===0&&this.value==="")}}Ct=J;J.UNMASKED_RADIX=".";J.EMPTY_VALUES=[...q.EMPTY_VALUES,0];J.DEFAULTS={...q.DEFAULTS,mask:Number,radix:",",thousandsSeparator:"",mapToRadix:[Ct.UNMASKED_RADIX],min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER,scale:2,normalizeZeros:!0,padFractionalZeros:!1,parse:Number,format:a=>a.toLocaleString("en-US",{useGrouping:!1,maximumFractionDigits:20})};F.MaskedNumber=J;const Je={MASKED:"value",UNMASKED:"unmaskedValue",TYPED:"typedValue"};function yt(a,e,t){e===void 0&&(e=Je.MASKED),t===void 0&&(t=Je.MASKED);const i=se(a);return n=>i.runIsolated(l=>(l[e]=n,l[t]))}function ur(a,e,t,i){return yt(e,t,i)(a)}F.PIPE_TYPE=Je;F.createPipe=yt;F.pipe=ur;class dr extends ${get repeatFrom(){var e;return(e=Array.isArray(this.repeat)?this.repeat[0]:this.repeat===1/0?0:this.repeat)!=null?e:0}get repeatTo(){var e;return(e=Array.isArray(this.repeat)?this.repeat[1]:this.repeat)!=null?e:1/0}constructor(e){super(e)}updateOptions(e){super.updateOptions(e)}_update(e){var t,i,n;const{repeat:l,...o}=we(e);this._blockOpts=Object.assign({},this._blockOpts,o);const u=se(this._blockOpts);this.repeat=(t=(i=l??u.repeat)!=null?i:this.repeat)!=null?t:1/0,super._update({mask:"m".repeat(Math.max(this.repeatTo===1/0&&((n=this._blocks)==null?void 0:n.length)||0,this.repeatFrom)),blocks:{m:u},eager:u.eager,overwrite:u.overwrite,skipInvalid:u.skipInvalid,lazy:u.lazy,placeholderChar:u.placeholderChar,displayChar:u.displayChar})}_allocateBlock(e){if(e<this._blocks.length)return this._blocks[e];if(this.repeatTo===1/0||this._blocks.length<this.repeatTo)return this._blocks.push(se(this._blockOpts)),this.mask+="m",this._blocks[this._blocks.length-1]}_appendCharRaw(e,t){t===void 0&&(t={});const i=new T;for(let h=(n=(l=this._mapPosToBlock(this.displayValue.length))==null?void 0:l.index)!=null?n:Math.max(this._blocks.length-1,0),p,g;p=(o=this._blocks[h])!=null?o:g=!g&&this._allocateBlock(h);++h){var n,l,o,u;const b=p._appendChar(e,{...t,_beforeTailState:(u=t._beforeTailState)==null||(u=u._blocks)==null?void 0:u[h]});if(b.skip&&g){this._blocks.pop(),this.mask=this.mask.slice(1);break}if(i.aggregate(b),b.consumed)break}return i}_trimEmptyTail(e,t){var i,n;e===void 0&&(e=0);const l=Math.max(((i=this._mapPosToBlock(e))==null?void 0:i.index)||0,this.repeatFrom,0);let o;t!=null&&(o=(n=this._mapPosToBlock(t))==null?void 0:n.index),o==null&&(o=this._blocks.length-1);let u=0;for(let h=o;l<=h&&!this._blocks[h].unmaskedValue;--h,++u);u&&(this._blocks.splice(o-u+1,u),this.mask=this.mask.slice(u))}reset(){super.reset(),this._trimEmptyTail()}remove(e,t){e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length);const i=super.remove(e,t);return this._trimEmptyTail(e,t),i}totalInputPositions(e,t){return e===void 0&&(e=0),t==null&&this.repeatTo===1/0?1/0:super.totalInputPositions(e,t)}get state(){return super.state}set state(e){this._blocks.length=e._blocks.length,this.mask=this.mask.slice(0,this._blocks.length),super.state=e}}F.RepeatBlock=dr;try{globalThis.IMask=F}catch{}const Tt={mask:f.oneOfType([f.array,f.func,f.string,f.instanceOf(RegExp),f.oneOf([Date,Number,F.Masked]),f.instanceOf(F.Masked)]),value:f.any,unmask:f.oneOfType([f.bool,f.oneOf(["typed"])]),prepare:f.func,prepareChar:f.func,validate:f.func,commit:f.func,overwrite:f.oneOfType([f.bool,f.oneOf(["shift"])]),eager:f.oneOfType([f.bool,f.oneOf(["append","remove"])]),skipInvalid:f.bool,onAccept:f.func,onComplete:f.func,placeholderChar:f.string,displayChar:f.string,lazy:f.bool,definitions:f.object,blocks:f.object,enum:f.arrayOf(f.string),maxLength:f.number,from:f.number,to:f.number,pattern:f.string,format:f.func,parse:f.func,autofix:f.oneOfType([f.bool,f.oneOf(["pad"])]),radix:f.string,thousandsSeparator:f.string,mapToRadix:f.arrayOf(f.string),scale:f.number,normalizeZeros:f.bool,padFractionalZeros:f.bool,min:f.oneOfType([f.number,f.instanceOf(Date)]),max:f.oneOfType([f.number,f.instanceOf(Date)]),dispatch:f.func,inputRef:f.oneOfType([f.func,f.shape({current:f.object})])},It=Object.keys(Tt).filter(a=>a!=="value"),hr=["value","unmask","onAccept","onComplete","inputRef"],cr=It.filter(a=>hr.indexOf(a)<0);function pr(a){var i;const e=(i=class extends Q.Component{constructor(n){super(n),this._inputRef=this._inputRef.bind(this)}componentDidMount(){this.props.mask&&this.initMask()}componentDidUpdate(){var o;const n=this.props,l=this._extractMaskOptionsFromProps(n);l.mask?this.maskRef?(this.maskRef.updateOptions(l),"value"in n&&n.value!==void 0&&(this.maskValue=n.value)):this.initMask(l):(this.destroyMask(),"value"in n&&n.value!==void 0&&((o=this.element)!=null&&o.isContentEditable&&this.element.tagName!=="INPUT"&&this.element.tagName!=="TEXTAREA"?this.element.textContent=n.value:this.element.value=n.value))}componentWillUnmount(){this.destroyMask()}_inputRef(n){this.element=n,this.props.inputRef&&(Object.prototype.hasOwnProperty.call(this.props.inputRef,"current")?this.props.inputRef.current=n:this.props.inputRef(n))}initMask(n){n===void 0&&(n=this._extractMaskOptionsFromProps(this.props)),this.maskRef=F(this.element,n).on("accept",this._onAccept.bind(this)).on("complete",this._onComplete.bind(this)),"value"in this.props&&this.props.value!==void 0&&(this.maskValue=this.props.value)}destroyMask(){this.maskRef&&(this.maskRef.destroy(),delete this.maskRef)}_extractMaskOptionsFromProps(n){const{...l}=n;return Object.keys(l).filter(o=>cr.indexOf(o)<0).forEach(o=>{delete l[o]}),l}_extractNonMaskProps(n){const{...l}=n;return It.forEach(o=>{o!=="maxLength"&&delete l[o]}),"defaultValue"in l||(l.defaultValue=n.mask?"":l.value),delete l.value,l}get maskValue(){return this.maskRef?this.props.unmask==="typed"?this.maskRef.typedValue:this.props.unmask?this.maskRef.unmaskedValue:this.maskRef.value:""}set maskValue(n){this.maskRef&&(n=n==null&&this.props.unmask!=="typed"?"":n,this.props.unmask==="typed"?this.maskRef.typedValue=n:this.props.unmask?this.maskRef.unmaskedValue=n:this.maskRef.value=n)}_onAccept(n){this.props.onAccept&&this.maskRef&&this.props.onAccept(this.maskValue,this.maskRef,n)}_onComplete(n){this.props.onComplete&&this.maskRef&&this.props.onComplete(this.maskValue,this.maskRef,n)}render(){return Q.createElement(a,{...this._extractNonMaskProps(this.props),inputRef:this._inputRef})}},$e(i,"displayName"),$e(i,"propTypes"),i),t=a.displayName||a.name||"Component";return e.displayName=`IMask(${t})`,e.propTypes=Tt,Q.forwardRef((n,l)=>Q.createElement(e,{...n,ref:l}))}const mr=pr(a=>{let{inputRef:e,...t}=a;return Q.createElement("input",{...t,ref:e})}),fr=(a,e)=>Q.createElement(mr,{...a,ref:e}),vr=Q.forwardRef(fr);function wt(a,e){var t={};for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&e.indexOf(i)<0&&(t[i]=a[i]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,i=Object.getOwnPropertySymbols(a);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(a,i[n])&&(t[i[n]]=a[i[n]]);return t}var _e;(function(a){a.event="event",a.props="prop"})(_e||(_e={}));function ce(){}function xr(a){var e,t=void 0;return function(){for(var i=[],n=arguments.length;n--;)i[n]=arguments[n];return e&&i.length===e.length&&i.every(function(l,o){return l===e[o]})||(e=i,t=a.apply(void 0,i)),t}}function Se(a){return!!(a||"").match(/\d/)}function ke(a){return a==null}function gr(a){return typeof a=="number"&&isNaN(a)}function _t(a){return ke(a)||gr(a)||typeof a=="number"&&!isFinite(a)}function St(a){return a.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function br(a){switch(a){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function Fr(a,e,t){var i=br(t),n=a.search(/[1-9]/);return n=n===-1?a.length:n,a.substring(0,n)+a.substring(n,a.length).replace(i,"$1"+e)}function kr(a){var e=j.useRef(a);e.current=a;var t=j.useRef(function(){for(var i=[],n=arguments.length;n--;)i[n]=arguments[n];return e.current.apply(e,i)});return t.current}function it(a,e){e===void 0&&(e=!0);var t=a[0]==="-",i=t&&e;a=a.replace("-","");var n=a.split("."),l=n[0],o=n[1]||"";return{beforeDecimal:l,afterDecimal:o,hasNegation:t,addNegation:i}}function Cr(a){if(!a)return a;var e=a[0]==="-";e&&(a=a.substring(1,a.length));var t=a.split("."),i=t[0].replace(/^0+/,"")||"0",n=t[1]||"";return(e?"-":"")+i+(n?"."+n:"")}function Et(a,e,t){for(var i="",n=t?"0":"",l=0;l<=e-1;l++)i+=a[l]||n;return i}function ot(a,e){return Array(e+1).join(a)}function At(a){var e=a+"",t=e[0]==="-"?"-":"";t&&(e=e.substring(1));var i=e.split(/[eE]/g),n=i[0],l=i[1];if(l=Number(l),!l)return t+n;n=n.replace(".","");var o=1+l,u=n.length;return o<0?n="0."+ot("0",Math.abs(o))+n:o>=u?n=n+ot("0",o-u):n=(n.substring(0,o)||"0")+"."+n.substring(o),t+n}function st(a,e,t){if(["","-"].indexOf(a)!==-1)return a;var i=(a.indexOf(".")!==-1||t)&&e,n=it(a),l=n.beforeDecimal,o=n.afterDecimal,u=n.hasNegation,h=parseFloat("0."+(o||"0")),p=o.length<=e?"0."+o:h.toFixed(e),g=p.split("."),b=l.split("").reverse().reduce(function(A,B,_){return A.length>_?(Number(A[0])+Number(B)).toString()+A.substring(1,A.length):B+A},g[0]),k=Et(g[1]||"",e,t),S=u?"-":"",C=i?".":"";return""+S+b+C+k}function fe(a,e){if(a.value=a.value,a!==null){if(a.createTextRange){var t=a.createTextRange();return t.move("character",e),t.select(),!0}return a.selectionStart||a.selectionStart===0?(a.focus(),a.setSelectionRange(e,e),!0):(a.focus(),!1)}}var Bt=xr(function(a,e){for(var t=0,i=0,n=a.length,l=e.length;a[t]===e[t]&&t<n;)t++;for(;a[n-1-i]===e[l-1-i]&&l-i>t&&n-i>t;)i++;return{from:{start:t,end:n-i},to:{start:t,end:l-i}}});function yr(a,e,t){return Math.min(Math.max(a,e),t)}function Xe(a){return Math.max(a.selectionStart,a.selectionEnd)}function Tr(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function Ir(a){return{from:{start:0,end:0},to:{start:0,end:a.length},lastValue:""}}function wr(a){var e=a.currentValue,t=a.formattedValue,i=a.currentValueIndex,n=a.formattedValueIndex;return e[i]===t[n]}function _r(a,e,t,i,n,l,o){o===void 0&&(o=wr);var u=n.findIndex(function(ne){return ne}),h=a.slice(0,u);!e&&!t.startsWith(h)&&(e=h,t=h+t,i=i+h.length);for(var p=t.length,g=a.length,b={},k=new Array(p),S=0;S<p;S++){k[S]=-1;for(var C=0,A=g;C<A;C++){var B=o({currentValue:t,lastValue:e,formattedValue:a,currentValueIndex:S,formattedValueIndex:C});if(B&&b[C]!==!0){k[S]=C,b[C]=!0;break}}}for(var _=i;_<p&&(k[_]===-1||!l(t[_]));)_++;var G=_===p||k[_]===-1?g:k[_];for(_=i-1;_>0&&k[_]===-1;)_--;var Z=_===-1||k[_]===-1?0:k[_]+1;return Z>G?G:i-Z<G-i?Z:G}function ut(a,e,t,i){var n=a.length;if(e=yr(e,0,n),i==="left"){for(;e>=0&&!t[e];)e--;e===-1&&(e=t.indexOf(!0))}else{for(;e<=n&&!t[e];)e++;e>n&&(e=t.lastIndexOf(!0))}return e===-1&&(e=n),e}function Sr(a){for(var e=Array.from({length:a.length+1}).map(function(){return!0}),t=0,i=e.length;t<i;t++)e[t]=!!(Se(a[t])||Se(a[t-1]));return e}function Vt(a,e,t,i,n,l){l===void 0&&(l=ce);var o=kr(function(C,A){var B,_;return _t(C)?(_="",B=""):typeof C=="number"||A?(_=typeof C=="number"?At(C):C,B=i(_)):(_=n(C,void 0),B=i(_)),{formattedValue:B,numAsString:_}}),u=j.useState(function(){return o(ke(a)?e:a,t)}),h=u[0],p=u[1],g=function(C,A){C.formattedValue!==h.formattedValue&&p({formattedValue:C.formattedValue,numAsString:C.value}),l(C,A)},b=a,k=t;ke(a)&&(b=h.numAsString,k=!0);var S=o(b,k);return j.useMemo(function(){p(S)},[S.formattedValue]),[h,g]}function Er(a){return a.replace(/[^0-9]/g,"")}function Ar(a){return a}function Br(a){var e=a.type;e===void 0&&(e="text");var t=a.displayType;t===void 0&&(t="input");var i=a.customInput,n=a.renderText,l=a.getInputRef,o=a.format;o===void 0&&(o=Ar);var u=a.removeFormatting;u===void 0&&(u=Er);var h=a.defaultValue,p=a.valueIsNumericString,g=a.onValueChange,b=a.isAllowed,k=a.onChange;k===void 0&&(k=ce);var S=a.onKeyDown;S===void 0&&(S=ce);var C=a.onMouseUp;C===void 0&&(C=ce);var A=a.onFocus;A===void 0&&(A=ce);var B=a.onBlur;B===void 0&&(B=ce);var _=a.value,G=a.getCaretBoundary;G===void 0&&(G=Sr);var Z=a.isValidInputCharacter;Z===void 0&&(Z=Se);var ne=a.isCharacterSame,te=wt(a,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),me=Vt(_,h,!!p,o,u,g),le=me[0],E=le.formattedValue,ie=le.numAsString,ue=me[1],re=j.useRef({formattedValue:E,numAsString:ie}),ge=function(m,x){re.current={formattedValue:m.formattedValue,numAsString:m.value},ue(m,x)},de=j.useState(!1),Ce=de[0],ye=de[1],y=j.useRef(null),I=j.useRef({setCaretTimeout:null,focusTimeout:null});j.useEffect(function(){return ye(!0),function(){clearTimeout(I.current.setCaretTimeout),clearTimeout(I.current.focusTimeout)}},[]);var z=o,R=function(m,x){var w=parseFloat(x);return{formattedValue:m,value:x,floatValue:isNaN(w)?void 0:w}},D=function(m,x,w){m.selectionStart===0&&m.selectionEnd===m.value.length||(fe(m,x),I.current.setCaretTimeout=setTimeout(function(){m.value===w&&m.selectionStart!==m.selectionEnd&&fe(m,x)},0))},L=function(m,x,w){return ut(m,x,G(m),w)},K=function(m,x,w){var N=G(x),O=_r(x,E,m,w,N,Z,ne);return O=ut(x,O,N),O},Ee=function(m){var x=m.formattedValue;x===void 0&&(x="");var w=m.input,N=m.setCaretPosition;N===void 0&&(N=!0);var O=m.source,V=m.event,U=m.numAsString,W=m.caretPos;if(w){if(W===void 0&&N){var Te=m.inputValue||w.value,qe=Xe(w);w.value=x,W=K(Te,x,qe)}w.value=x,N&&W!==void 0&&D(w,W,x)}x!==E&&ge(R(x,U),{event:V,source:O})};j.useEffect(function(){var m=re.current,x=m.formattedValue,w=m.numAsString;E!==x&&(E!==ie||x!==w)&&ge(R(E,ie),{event:void 0,source:_e.props})},[E,ie]);var We=y.current?Xe(y.current):void 0,Ae=typeof window<"u"?j.useLayoutEffect:j.useEffect;Ae(function(){var m=y.current;if(E!==re.current.formattedValue&&m){var x=K(re.current.formattedValue,E,We);m.value=E,D(m,x,E)}},[E]);var Mt=function(m,x,w){var N=Bt(E,m),O=Object.assign(Object.assign({},N),{lastValue:E}),V=u(m,O),U=z(V);if(V=u(U,void 0),b&&!b(R(U,V))){var W=x.target,Te=Xe(W),qe=K(m,E,Te);return W.value=E,D(W,qe,E),!1}return Ee({formattedValue:U,numAsString:V,inputValue:m,event:x,source:w,setCaretPosition:!0,input:x.target}),!0},Rt=function(m){var x=m.target,w=x.value,N=Mt(w,m,_e.event);N&&k(m)},Dt=function(m){var x=m.target,w=m.key,N=x.selectionStart,O=x.selectionEnd,V=x.value;V===void 0&&(V="");var U;if(w==="ArrowLeft"||w==="Backspace"?U=Math.max(N-1,0):w==="ArrowRight"?U=Math.min(N+1,V.length):w==="Delete"&&(U=N),U===void 0||N!==O){S(m);return}var W=U;if(w==="ArrowLeft"||w==="ArrowRight"){var Te=w==="ArrowLeft"?"left":"right";W=L(V,U,Te),W!==U&&m.preventDefault()}else w==="Delete"&&!Z(V[U])?W=L(V,U,"right"):w==="Backspace"&&!Z(V[U])&&(W=L(V,U,"left"));W!==U&&D(x,W,V),m.isUnitTestRun&&D(x,W,V),S(m)},Nt=function(m){var x=m.target,w=x.selectionStart,N=x.selectionEnd,O=x.value;if(O===void 0&&(O=""),w===N){var V=L(O,w);V!==w&&D(x,V,O)}C(m)},Ot=function(m){m.persist&&m.persist();var x=m.target;y.current=x,I.current.focusTimeout=setTimeout(function(){var w=x.selectionStart,N=x.selectionEnd,O=x.value;O===void 0&&(O="");var V=L(O,w);V!==w&&!(w===0&&N===O.length)&&D(x,V,O),A(m)},0)},Pt=function(m){y.current=null,clearTimeout(I.current.focusTimeout),clearTimeout(I.current.setCaretTimeout),B(m)},Lt=Ce&&Tr()?"numeric":void 0,rt=Object.assign({inputMode:Lt},te,{type:e,value:E,onChange:Rt,onKeyDown:Dt,onMouseUp:Nt,onFocus:Ot,onBlur:Pt});if(t==="text")return n?Q.createElement(Q.Fragment,null,n(E,te)||null):Q.createElement("span",Object.assign({},te,{ref:l}),E);if(i){var Ht=i;return Q.createElement(Ht,Object.assign({},rt,{ref:l}))}return Q.createElement("input",Object.assign({},rt,{ref:l}))}function dt(a,e){var t=e.decimalScale,i=e.fixedDecimalScale,n=e.prefix;n===void 0&&(n="");var l=e.suffix;l===void 0&&(l="");var o=e.allowNegative,u=e.thousandsGroupStyle;if(u===void 0&&(u="thousand"),a===""||a==="-")return a;var h=ze(e),p=h.thousandSeparator,g=h.decimalSeparator,b=t!==0&&a.indexOf(".")!==-1||t&&i,k=it(a,o),S=k.beforeDecimal,C=k.afterDecimal,A=k.addNegation;return t!==void 0&&(C=Et(C,t,!!i)),p&&(S=Fr(S,p,u)),n&&(S=n+S),l&&(C=C+l),A&&(S="-"+S),a=S+(b&&g||"")+C,a}function ze(a){var e=a.decimalSeparator;e===void 0&&(e=".");var t=a.thousandSeparator,i=a.allowedDecimalSeparators;return t===!0&&(t=","),i||(i=[e,"."]),{decimalSeparator:e,thousandSeparator:t,allowedDecimalSeparators:i}}function Vr(a,e){a===void 0&&(a="");var t=new RegExp("(-)"),i=new RegExp("(-)(.)*(-)"),n=t.test(a),l=i.test(a);return a=a.replace(/-/g,""),n&&!l&&e&&(a="-"+a),a}function Mr(a,e){return new RegExp("(^-)|[0-9]|"+St(a),e?"g":void 0)}function Rr(a,e,t){return a===""?!0:!(e!=null&&e.match(/\d/))&&!(t!=null&&t.match(/\d/))&&typeof a=="string"&&!isNaN(Number(a))}function Dr(a,e,t){var i;e===void 0&&(e=Ir(a));var n=t.allowNegative,l=t.prefix;l===void 0&&(l="");var o=t.suffix;o===void 0&&(o="");var u=t.decimalScale,h=e.from,p=e.to,g=p.start,b=p.end,k=ze(t),S=k.allowedDecimalSeparators,C=k.decimalSeparator,A=a[b]===C;if(Se(a)&&(a===l||a===o)&&e.lastValue==="")return a;if(b-g===1&&S.indexOf(a[g])!==-1){var B=u===0?"":C;a=a.substring(0,g)+B+a.substring(g+1,a.length)}var _=function(I,z,R){var D=!1,L=!1;l.startsWith("-")?D=!1:I.startsWith("--")?(D=!1,L=!0):o.startsWith("-")&&I.length===o.length?D=!1:I[0]==="-"&&(D=!0);var K=D?1:0;return L&&(K=2),K&&(I=I.substring(K),z-=K,R-=K),{value:I,start:z,end:R,hasNegation:D}},G=_(a,g,b),Z=G.hasNegation;i=G,a=i.value,g=i.start,b=i.end;var ne=_(e.lastValue,h.start,h.end),te=ne.start,me=ne.end,le=ne.value,E=a.substring(g,b);a.length&&le.length&&(te>le.length-o.length||me<l.length)&&!(E&&o.startsWith(E))&&(a=le);var ie=0;a.startsWith(l)?ie+=l.length:g<l.length&&(ie=g),a=a.substring(ie),b-=ie;var ue=a.length,re=a.length-o.length;a.endsWith(o)?ue=re:(b>re||b>a.length-o.length)&&(ue=b),a=a.substring(0,ue),a=Vr(Z?"-"+a:a,n),a=(a.match(Mr(C,!0))||[]).join("");var ge=a.indexOf(C);a=a.replace(new RegExp(St(C),"g"),function(I,z){return z===ge?".":""});var de=it(a,n),Ce=de.beforeDecimal,ye=de.afterDecimal,y=de.addNegation;return p.end-p.start<h.end-h.start&&Ce===""&&A&&!parseFloat(ye)&&(a=y?"-":""),a}function Nr(a,e){var t=e.prefix;t===void 0&&(t="");var i=e.suffix;i===void 0&&(i="");var n=Array.from({length:a.length+1}).map(function(){return!0}),l=a[0]==="-";n.fill(!1,0,t.length+(l?1:0));var o=a.length;return n.fill(!1,o-i.length+1,o+1),n}function Or(a){var e=ze(a),t=e.thousandSeparator,i=e.decimalSeparator,n=a.prefix;n===void 0&&(n="");var l=a.allowNegative;if(l===void 0&&(l=!0),t===i)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+t+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+i+` (default value for decimalSeparator is .)
     `);return n.startsWith("-")&&l&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+n+`
      allowNegative: `+l+`
    `),l=!1),Object.assign(Object.assign({},a),{allowNegative:l})}function Pr(a){a=Or(a),a.decimalSeparator,a.allowedDecimalSeparators,a.thousandsGroupStyle;var e=a.suffix,t=a.allowNegative,i=a.allowLeadingZeros,n=a.onKeyDown;n===void 0&&(n=ce);var l=a.onBlur;l===void 0&&(l=ce);var o=a.thousandSeparator,u=a.decimalScale,h=a.fixedDecimalScale,p=a.prefix;p===void 0&&(p="");var g=a.defaultValue,b=a.value,k=a.valueIsNumericString,S=a.onValueChange,C=wt(a,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),A=ze(a),B=A.decimalSeparator,_=A.allowedDecimalSeparators,G=function(y){return dt(y,a)},Z=function(y,I){return Dr(y,I,a)},ne=ke(b)?g:b,te=k??Rr(ne,p,e);ke(b)?ke(g)||(te=te||typeof g=="number"):te=te||typeof b=="number";var me=function(y){return _t(y)?y:(typeof y=="number"&&(y=At(y)),te&&typeof u=="number"?st(y,u,!!h):y)},le=Vt(me(b),me(g),!!te,G,Z,S),E=le[0],ie=E.numAsString,ue=E.formattedValue,re=le[1],ge=function(y){var I=y.target,z=y.key,R=I.selectionStart,D=I.selectionEnd,L=I.value;if(L===void 0&&(L=""),R!==D){n(y);return}z==="Backspace"&&L[0]==="-"&&R===p.length+1&&t&&fe(I,1),u&&h&&(z==="Backspace"&&L[R-1]===B?(fe(I,R-1),y.preventDefault()):z==="Delete"&&L[R]===B&&y.preventDefault()),_!=null&&_.includes(z)&&L[R]===B&&fe(I,R+1);var K=o===!0?",":o;z==="Backspace"&&L[R-1]===K&&fe(I,R-1),z==="Delete"&&L[R]===K&&fe(I,R+1),n(y)},de=function(y){var I=ie;if(I.match(/\d/g)||(I=""),i||(I=Cr(I)),h&&u&&(I=st(I,u,h)),I!==ie){var z=dt(I,a);re({formattedValue:z,value:I,floatValue:parseFloat(I)},{event:y,source:_e.event})}l(y)},Ce=function(y){return y===B?!0:Se(y)},ye=function(y){var I=y.currentValue,z=y.lastValue,R=y.formattedValue,D=y.currentValueIndex,L=y.formattedValueIndex,K=I[D],Ee=R[L],We=Bt(z,I),Ae=We.to;return D>=Ae.start&&D<Ae.end&&_&&_.includes(K)&&Ee===B?!0:K===Ee};return Object.assign(Object.assign({},C),{value:ue,valueIsNumericString:!1,isValidInputCharacter:Ce,isCharacterSame:ye,onValueChange:re,format:G,removeFormatting:Z,getCaretBoundary:function(y){return Nr(y,a)},onKeyDown:ge,onBlur:de})}function Lr(a){var e=Pr(a);return Q.createElement(Br,Object.assign({},e))}const Hr=j.forwardRef(function(e,t){const{onChange:i,...n}=e;return r(vr,{...n,mask:"(#00) 000-0000",definitions:{"#":/[1-9]/},inputRef:t,onAccept:l=>i({target:{name:e.name,value:l}}),overwrite:!0})}),Ur=j.forwardRef(function(e,t){const{onChange:i,...n}=e;return r(Lr,{...n,getInputRef:t,onValueChange:l=>{i({target:{name:e.name,value:l.value}})},thousandSeparator:!0,valueIsNumericString:!0,prefix:"$"})});function jr(){const[a,e]=j.useState({textmask:"(100) 000-0000",numberformat:"1320"}),t=i=>{e({...a,[i.target.name]:i.target.value})};return s(mt,{direction:"row",spacing:2,children:[s(H,{variant:"standard",children:[r(Y,{htmlFor:"formatted-text-mask-input",children:"react-imask"}),r(ee,{value:a.textmask,onChange:t,name:"textmask",id:"formatted-text-mask-input",inputComponent:Hr})]}),r(c,{label:"react-number-format",value:a.numberformat,onChange:t,name:"numberformat",id:"formatted-numberformat-input",InputProps:{inputComponent:Ur},variant:"standard"})]})}const zr=`import * as React from 'react';
import { IMaskInput } from 'react-imask';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#00) 000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix="$"
      />
    );
  },
);

export default function FormattedInputs() {
  const [values, setValues] = React.useState({
    textmask: '(100) 000-0000',
    numberformat: '1320',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Stack direction="row" spacing={2}>
      <FormControl variant="standard">
        <InputLabel htmlFor="formatted-text-mask-input">react-imask</InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom as any}
        />
      </FormControl>
      <TextField
        label="react-number-format"
        value={values.numberformat}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumericFormatCustom as any,
        }}
        variant="standard"
      />
    </Stack>
  );
}
`;function ea(a){return s(Xt,{children:[s("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[r(Jt,{}),r(Zt,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/text-fields",target:"_blank",role:"button",size:"small",startIcon:r(Yt,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),r(d,{className:"text-32 my-16 font-700",component:"h1",children:"Text Field"}),r(d,{className:"description",children:"Text Fields let users enter and edit text."}),r(d,{className:"text-14 mb-32",component:"div",children:"Text fields allow users to enter text into a UI. They typically appear in forms and dialogs."}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic TextField"}),s(d,{className:"text-14 mb-32",component:"div",children:["The ",r("code",{children:"TextField"})," wrapper component is a complete form control including a label, input, and help text. It comes with three variants: outlined (default), filled, and standard."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"BasicTextFields.js",className:"my-16",iframe:!1,component:ti,raw:ii})}),r("div",{className:"border border-1 p-16 rounded-16 my-12",children:s(d,{className:"text-14 mb-32",component:"div",children:["The standard variant of the Text Field is no longer documented in the ",r("a",{href:"https://m2.material.io/",children:"Material Design guidelines"}),"(",r("a",{href:"https://medium.com/google-design/the-evolution-of-material-designs-text-fields-603688b3fe03",children:"this article explains why"}),"), but Material UI will continue to support it."]})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Form props"}),s(d,{className:"text-14 mb-32",component:"div",children:["Standard form attributes are supported e.g. ",r("code",{children:"required"}),", ",r("code",{children:"disabled"}),", ",r("code",{children:"type"}),", etc. as well as a ",r("code",{children:"helperText"})," which is used to give context about a field's input, such as how the input will be used."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"FormPropsTextFields.js",className:"my-16",iframe:!1,component:ri,raw:ai})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Validation"}),s(d,{className:"text-14 mb-32",component:"div",children:["The ",r("code",{children:"error"})," prop toggles the error state. The ",r("code",{children:"helperText"})," prop can then be used to provide feedback to the user about the error."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"ValidationTextFields.js",className:"my-16",iframe:!1,component:ni,raw:li})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Multiline"}),s(d,{className:"text-14 mb-32",component:"div",children:["The ",r("code",{children:"multiline"})," prop transforms the text field into a ",r("a",{href:"/material-ui/react-textarea-autosize/",children:"TextareaAutosize"})," element. Unless the ",r("code",{children:"rows"})," prop is set, the height of the text field dynamically matches its content (using ",r("a",{href:"/material-ui/react-textarea-autosize/",children:"TextareaAutosize"}),"). You can use the ",r("code",{children:"minRows"})," and ",r("code",{children:"maxRows"})," props to bound it."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"MultilineTextFields.js",className:"my-16",iframe:!1,component:oi,raw:si})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Select"}),s(d,{className:"text-14 mb-32",component:"div",children:["The ",r("code",{children:"select"})," prop makes the text field use the ",r("a",{href:"/material-ui/react-select/",children:"Select"})," component internally."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"SelectTextFields.js",className:"my-16",iframe:!1,component:ui,raw:di})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Icons"}),r(d,{className:"text-14 mb-32",component:"div",children:"There are multiple ways to display an icon with a text field."}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"InputWithIcon.js",className:"my-16",iframe:!1,component:hi,raw:ci})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Input Adornments"}),s(d,{className:"text-14 mb-32",component:"div",children:["The main way is with an ",r("code",{children:"InputAdornment"}),". This can be used to add a prefix, a suffix, or an action to an input. For instance, you can use an icon button to hide or reveal the password."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"InputAdornments.js",className:"my-16",iframe:!1,component:vi,raw:xi})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Sizes"}),s(d,{className:"text-14 mb-32",component:"div",children:["Fancy smaller inputs? Use the ",r("code",{children:"size"})," prop."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"TextFieldSizes.js",className:"my-16",iframe:!1,component:gi,raw:bi})}),s(d,{className:"text-14 mb-32",component:"div",children:["The ",r("code",{children:"filled"})," variant input height can be further reduced by rendering the label outside of it."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"TextFieldHiddenLabel.js",className:"my-16",iframe:!1,component:Fi,raw:ki})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Margin"}),s(d,{className:"text-14 mb-32",component:"div",children:["The ",r("code",{children:"margin"})," prop can be used to alter the vertical spacing of the text field. Using ",r("code",{children:"none"})," (default) doesn't apply margins to the ",r("code",{children:"FormControl"})," whereas ",r("code",{children:"dense"})," and ",r("code",{children:"normal"})," do."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"LayoutTextFields.js",className:"my-16",iframe:!1,component:Ci,raw:yi})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Full width"}),s(d,{className:"text-14 mb-32",component:"div",children:[r("code",{children:"fullWidth"})," can be used to make the input take up the full width of its container."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"FullWidthTextField.js",className:"my-16",iframe:!1,component:Ti,raw:Ii})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Uncontrolled vs. Controlled"}),r(d,{className:"text-14 mb-32",component:"div",children:"The component can be controlled or uncontrolled."}),s("div",{className:"border border-1 p-16 rounded-16 my-12",children:[s("ul",{className:"space-y-16",children:[s("li",{children:["A component is ",r("strong",{children:"controlled"})," when it's managed by its parent using props."]}),s("li",{children:["A component is ",r("strong",{children:"uncontrolled"})," when it's managed by its own local state."]})]}),s(d,{className:"text-14 mb-32",component:"div",children:["Learn more about controlled and uncontrolled components in the ",r("a",{href:"https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components",children:"React documentation"}),"."]})]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"StateTextFields.js",className:"my-16",iframe:!1,component:wi,raw:_i})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Components"}),s(d,{className:"text-14 mb-32",component:"div",children:[r("code",{children:"TextField"})," is composed of smaller components (",r("a",{href:"/material-ui/api/form-control/",children:r("code",{children:"FormControl"})}),",",r("a",{href:"/material-ui/api/input/",children:r("code",{children:"Input"})}),",",r("a",{href:"/material-ui/api/filled-input/",children:r("code",{children:"FilledInput"})}),",",r("a",{href:"/material-ui/api/input-label/",children:r("code",{children:"InputLabel"})}),",",r("a",{href:"/material-ui/api/outlined-input/",children:r("code",{children:"OutlinedInput"})}),", and ",r("a",{href:"/material-ui/api/form-helper-text/",children:r("code",{children:"FormHelperText"})}),") that you can leverage directly to significantly customize your form inputs."]}),s(d,{className:"text-14 mb-32",component:"div",children:["You might also have noticed that some native HTML input properties are missing from the ",r("code",{children:"TextField"})," component. This is on purpose. The component takes care of the most used properties. Then, it's up to the user to use the underlying component shown in the following demo. Still, you can use ",r("code",{children:"inputProps"})," (and ",r("code",{children:"InputProps"}),", ",r("code",{children:"InputLabelProps"})," properties) if you want to avoid some boilerplate."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"ComposedTextField.js",className:"my-16",iframe:!1,component:Si,raw:Ei})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Inputs"}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"Inputs.js",className:"my-16",iframe:!1,component:Ai,raw:Bi})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Color"}),s(d,{className:"text-14 mb-32",component:"div",children:["The ",r("code",{children:"color"})," prop changes the highlight color of the text field when focused."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"ColorTextFields.js",className:"my-16",iframe:!1,component:Vi,raw:Mi})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),s(d,{className:"text-14 mb-32",component:"div",children:["Here are some examples of customizing the component. You can learn more about this in the ",r("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Using the styled API"}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"CustomizedInputsStyled.js",className:"my-16",iframe:!1,component:Pi,raw:Li})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Using the theme style overrides API"}),s(d,{className:"text-14 mb-32",component:"div",children:["Use the ",r("code",{children:"styleOverrides"})," key to change any style injected by Material UI into the DOM. See the ",r("a",{href:"/material-ui/customization/theme-components/#theme-style-overrides",children:"theme style overrides"})," documentation for further details."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"CustomizedInputsStyleOverrides.js",className:"my-16",iframe:!1,component:Ui,raw:ji})}),s(d,{className:"text-14 mb-32",component:"div",children:["Customization does not stop at CSS. You can use composition to build custom components and give your app a unique feel. Below is an example using the ",r("a",{href:"/material-ui/api/input-base/",children:r("code",{children:"InputBase"})})," component, inspired by Google Maps."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"CustomizedInputBase.js",className:"my-16",iframe:!1,component:$i,raw:Gi})}),s(d,{className:"text-14 mb-32",component:"div",children:["🎨 If you are looking for inspiration, you can check ",r("a",{href:"https://mui-treasury.com/?path=/docs/textField-introduction--docs",children:"MUI Treasury's customization examples"}),"."]}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:r("code",{children:"useFormControl"})}),s(d,{className:"text-14 mb-32",component:"div",children:["For advanced customization use cases, a ",r("code",{children:"useFormControl()"})," hook is exposed. This hook returns the context value of the parent ",r("code",{children:"FormControl"})," component."]}),r(d,{className:"text-14 mb-32",component:"div",children:r("strong",{children:"API"})}),r(he,{component:"pre",className:"language-jsx",children:` 
import { useFormControl } from '@mui/material/FormControl';
`}),r(d,{className:"text-14 mb-32",component:"div",children:r("strong",{children:"Returns"})}),s(d,{className:"text-14 mb-32",component:"div",children:[r("code",{children:"value"})," (",r("em",{children:"object"}),"):"]}),s("ul",{className:"space-y-16",children:[s("li",{children:[r("code",{children:"value.adornedStart"})," (",r("em",{children:"bool"}),"): Indicate whether the child ",r("code",{children:"Input"})," or ",r("code",{children:"Select"})," component has a start adornment."]}),s("li",{children:[r("code",{children:"value.setAdornedStart"})," (",r("em",{children:"func"}),"): Setter function for ",r("code",{children:"adornedStart"})," state value."]}),s("li",{children:[r("code",{children:"value.color"})," (",r("em",{children:"string"}),"): The theme color is being used, inherited from ",r("code",{children:"FormControl"})," ",r("code",{children:"color"})," prop ."]}),s("li",{children:[r("code",{children:"value.disabled"})," (",r("em",{children:"bool"}),"): Indicate whether the component is being displayed in a disabled state, inherited from ",r("code",{children:"FormControl"})," ",r("code",{children:"disabled"})," prop."]}),s("li",{children:[r("code",{children:"value.error"})," (",r("em",{children:"bool"}),"): Indicate whether the component is being displayed in an error state, inherited from ",r("code",{children:"FormControl"})," ",r("code",{children:"error"})," prop"]}),s("li",{children:[r("code",{children:"value.filled"})," (",r("em",{children:"bool"}),"): Indicate whether input is filled"]}),s("li",{children:[r("code",{children:"value.focused"})," (",r("em",{children:"bool"}),"): Indicate whether the component and its children are being displayed in a focused state"]}),s("li",{children:[r("code",{children:"value.fullWidth"})," (",r("em",{children:"bool"}),"): Indicate whether the component is taking up the full width of its container, inherited from ",r("code",{children:"FormControl"})," ",r("code",{children:"fullWidth"})," prop"]}),s("li",{children:[r("code",{children:"value.hiddenLabel"})," (",r("em",{children:"bool"}),"): Indicate whether the label is being hidden, inherited from ",r("code",{children:"FormControl"})," ",r("code",{children:"hiddenLabel"})," prop"]}),s("li",{children:[r("code",{children:"value.required"})," (",r("em",{children:"bool"}),"): Indicate whether the label is indicating that the input is required input, inherited from the ",r("code",{children:"FormControl"})," ",r("code",{children:"required"})," prop"]}),s("li",{children:[r("code",{children:"value.size"})," (",r("em",{children:"string"}),"): The size of the component, inherited from the ",r("code",{children:"FormControl"})," ",r("code",{children:"size"})," prop"]}),s("li",{children:[r("code",{children:"value.variant"})," (",r("em",{children:"string"}),"): The variant is being used by the ",r("code",{children:"FormControl"})," component and its children, inherited from ",r("code",{children:"FormControl"})," ",r("code",{children:"variant"})," prop"]}),s("li",{children:[r("code",{children:"value.onBlur"})," (",r("em",{children:"func"}),"): Should be called when the input is blurred"]}),s("li",{children:[r("code",{children:"value.onFocus"})," (",r("em",{children:"func"}),"): Should be called when the input is focused"]}),s("li",{children:[r("code",{children:"value.onEmpty"})," (",r("em",{children:"func"}),"): Should be called when the input is emptied"]}),s("li",{children:[r("code",{children:"value.onFilled"})," (",r("em",{children:"func"}),"): Should be called when the input is filled"]})]}),r(d,{className:"text-14 mb-32",component:"div",children:r("strong",{children:"Example"})}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"UseFormControl.js",className:"my-16",iframe:!1,component:Yi,raw:Zi})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Performance"}),s(d,{className:"text-14 mb-32",component:"div",children:["Global styles for the auto-fill keyframes are injected and removed on each mount and unmount, respectively. If you are loading a large number of Text Field components at once, it might be a good idea to change this default behavior by enabling ",r("a",{href:"/material-ui/api/input-base/#InputBase-prop-disableInjectingGlobalStyles",children:r("code",{children:"disableInjectingGlobalStyles"})})," in ",r("code",{children:"MuiInputBase"}),". Make sure to inject ",r("code",{children:"GlobalStyles"})," for the auto-fill keyframes at the top of your application."]}),r(he,{component:"pre",className:"language-jsx",children:` 
import { GlobalStyles, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiInputBase: {
      defaultProps: {
        disableInjectingGlobalStyles: true,
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          '@keyframes mui-auto-fill': { from: { display: 'block' } },
          '@keyframes mui-auto-fill-cancel': { from: { display: 'block' } },
        
      />
      ...
    </ThemeProvider>
  );
}
`}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Limitations"}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Shrink"}),r(d,{className:"text-14 mb-32",component:"div",children:`The input label "shrink" state isn't always correct. The input label is supposed to shrink as soon as the input is displaying something. In some circumstances, we can't determine the "shrink" state (number input, datetime input, Stripe input). You might notice an overlap.`}),r(d,{className:"text-14 mb-32",component:"div",children:r("img",{src:"/material-ui-static/images/text-fields/shrink.png",alt:"shrink"})}),r(d,{className:"text-14 mb-32",component:"div",children:'To workaround the issue, you can force the "shrink" state of the label.'}),r(he,{component:"pre",className:"language-jsx",children:` 
<TextField InputLabelProps={{ shrink: true }} />
`}),r(d,{className:"text-14 mb-32",component:"div",children:"or"}),r(he,{component:"pre",className:"language-jsx",children:` 
<InputLabel shrink>Count</InputLabel>
`}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Floating label"}),r(d,{className:"text-14 mb-32",component:"div",children:"The floating label is absolutely positioned. It won't impact the layout of the page. Make sure that the input is larger than the label to display correctly."}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:'type="number"'}),s(d,{className:"text-14 mb-32",component:"div",children:[":::warning We do not recommend using ",r("code",{children:'type="number"'})," with a Text Field due to potential usability issues:"]}),s("ul",{className:"space-y-16",children:[r("li",{children:"it allows certain non-numeric characters ('e', '+', '-', '.') and silently discards others"}),r("li",{children:"the functionality of scrolling to increment/decrement the number can cause accidental and hard-to-notice changes"}),s("li",{children:["and more—see ",r("a",{href:"https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/",children:"Why the GOV.UK Design System team changed the input type for numbers"})," for a more detailed explanation of the limitations of ",r("code",{children:'<input type="number">'}),":::"]})]}),s(d,{className:"text-14 mb-32",component:"div",children:["If you need a text field with number validation, you can use Base UI's ",r("a",{href:"/base-ui/react-number-input/",children:"Number Input"})," instead."]}),s(d,{className:"text-14 mb-32",component:"div",children:["You can follow ",r("a",{href:"https://github.com/mui/material-ui/issues/19154",children:"this GitHub issue"})," to track the progress of introducing the Number Input component to Material UI."]}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Helper text"}),r(d,{className:"text-14 mb-32",component:"div",children:"The helper text prop affects the height of the text field. If two text fields are placed side by side, one with a helper text and one without, they will have different heights. For example:"}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"HelperTextMisaligned.js",className:"my-16",iframe:!1,component:Xi,raw:Ji})}),s(d,{className:"text-14 mb-32",component:"div",children:["This can be fixed by passing a space character to the ",r("code",{children:"helperText"})," prop:"]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"HelperTextAligned.js",className:"my-16",iframe:!1,component:Qi,raw:er})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Integration with 3rd party input libraries"}),s(d,{className:"text-14 mb-32",component:"div",children:["You can use third-party libraries to format an input. You have to provide a custom implementation of the ",r("code",{children:"<input>"})," element with the ",r("code",{children:"inputComponent"})," property."]}),s(d,{className:"text-14 mb-32",component:"div",children:["The following demo uses the ",r("a",{href:"https://github.com/uNmAnNeR/imaskjs",children:"react-imask"})," and ",r("a",{href:"https://github.com/s-yadav/react-number-format",children:"react-number-format"})," libraries. The same concept could be applied to ",r("a",{href:"https://github.com/mui/material-ui/issues/16037",children:"e.g. react-stripe-element"}),"."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"FormattedInputs.js",className:"my-16",iframe:!1,component:jr,raw:zr})}),r(d,{className:"text-14 mb-32",component:"div",children:"The provided input component should expose a ref with a value that implements the following interface:"}),r(he,{component:"pre",className:"language-ts",children:` 
interface InputElement {
  focus(): void;
  value?: string;
}
`}),r(he,{component:"pre",className:"language-jsx",children:` 
const MyInputComponent = React.forwardRef((props, ref) => {
  const { component: Component, ...other } = props;

  // implement \`InputElement\` interface
  React.useImperativeHandle(ref, () => ({
    focus: () => {
      // logic to focus the rendered component from 3rd party belongs here
    },
    // hiding the value e.g. react-stripe-elements
  }));

  // \`Component\` will be your \`SomeThirdPartyComponent\` from below
  return <Component {...other} />;
});

// usage
<TextField
  InputProps={{
    inputComponent: MyInputComponent,
    inputProps: {
      component: SomeThirdPartyComponent,
    },
  
/>;
`}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),s(d,{className:"text-14 mb-32",component:"div",children:["In order for the text field to be accessible, ",r("strong",{children:"the input should be linked to the label and the helper text"}),". The underlying DOM nodes should have this structure:"]}),r(he,{component:"pre",className:"language-jsx",children:` 
<div className="form-control">
  <label for="my-input">Email address</label>
  <input id="my-input" aria-describedby="my-helper-text" />
  <span id="my-helper-text">We'll never share your email.</span>
</div>
`}),s("ul",{className:"space-y-16",children:[s("li",{children:["If you are using the ",r("code",{children:"TextField"})," component, you just have to provide a unique ",r("code",{children:"id"})," unless you're using the ",r("code",{children:"TextField"})," only client side. Until the UI is hydrated ",r("code",{children:"TextField"})," without an explicit ",r("code",{children:"id"})," will not have associated labels."]}),r("li",{children:"If you are composing the component:"})]}),r(he,{component:"pre",className:"language-jsx",children:` 
<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
`}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Complementary projects"}),r(d,{className:"text-14 mb-32",component:"div",children:"For more advanced use cases, you might be able to take advantage of:"}),s("ul",{className:"space-y-16",children:[s("li",{children:[r("a",{href:"https://react-hook-form.com/",children:"react-hook-form"}),": React hook for form validation."]}),s("li",{children:[r("a",{href:"https://github.com/dohomi/react-hook-form-mui",children:"react-hook-form-mui"}),": Material UI and react-hook-form combined."]}),s("li",{children:[r("a",{href:"https://github.com/stackworx/formik-mui",children:"formik-material-ui"}),": Bindings for using Material UI with ",r("a",{href:"https://formik.org/",children:"formik"}),"."]}),s("li",{children:[r("a",{href:"https://github.com/erikras/redux-form-material-ui",children:"redux-form-material-ui"}),": Bindings for using Material UI with ",r("a",{href:"https://redux-form.com/",children:"Redux Form"}),"."]}),s("li",{children:[r("a",{href:"https://github.com/lookfirst/mui-rff",children:"mui-rff"}),": Bindings for using Material UI with ",r("a",{href:"https://final-form.org/react",children:"React Final Form"}),"."]}),s("li",{children:[r("a",{href:"https://www.npmjs.com/package/@ui-schema/ds-material",children:"@ui-schema/ds-material"})," Bindings for using Material UI with ",r("a",{href:"https://github.com/ui-schema/ui-schema",children:"UI Schema"}),". JSON Schema compatible."]}),s("li",{children:[r("a",{href:"https://www.data-driven-forms.org/provided-mappers/mui-component-mapper",children:"@data-driven-forms/mui-component-mapper"}),": Bindings for using Material UI with ",r("a",{href:"https://github.com/data-driven-forms/react-forms",children:"Data Driven Forms"}),"."]})]})]})}export{ea as default};
