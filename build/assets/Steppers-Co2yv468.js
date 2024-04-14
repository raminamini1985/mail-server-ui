import{az as gt,aA as yt,s as j,P as re,at as wt,bV as T,ea as Tt,r as _,bX as Ct,bY as kt,bZ as q,x as Oe,au as _t,c1 as Mt,aD as $t,aR as Pt,ek as qt,d as f,j as r,T as d,H as A,C as B,c9 as Rt,aS as Bt,cJ as jt,K as ne,c3 as zt,c2 as oe,F as Et,dn as Wt,b8 as Kt}from"./index-hRi6i2cB.js";import{F as M}from"./FuseExample-QZXoGK-s.js";import{D as Dt}from"./DocumentationPageBreadcrumb-BFsPEBAg.js";import{d as Ft,e as Vt,b as W,a as K,S as D,f as At,s as L,c as Ut}from"./Stepper-Mrd2mIpK.js";import{d as Ht}from"./Check-cumQX3Zw.js";import{d as Gt}from"./Settings--ypVqosj.js";import{d as z,a as E}from"./KeyboardArrowRight-DhS3wDqW.js";import{L as Qt}from"./LinearProgress-DzY0Xvlx.js";import{r as Le,S as Yt}from"./index-auJF05MV.js";import{a as Jt}from"./index-JxF7F4uy.js";import"./DocumentationNavigation-B9unmpAx.js";import"./ChangelogDoc-fv0_lxe2.js";function Xt(e){return gt("MuiMobileStepper",e)}yt("MuiMobileStepper",["root","positionBottom","positionTop","positionStatic","dots","dot","dotActive","progress"]);const Zt=["activeStep","backButton","className","LinearProgressProps","nextButton","position","steps","variant"],er=e=>{const{classes:t,position:o}=e,n={root:["root",`position${wt(o)}`],dots:["dots"],dot:["dot"],dotActive:["dotActive"],progress:["progress"]};return _t(n,Xt,t)},tr=j(re,{name:"MuiMobileStepper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${wt(o.position)}`]]}})(({theme:e,ownerState:t})=>T({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",background:(e.vars||e).palette.background.default,padding:8},t.position==="bottom"&&{position:"fixed",bottom:0,left:0,right:0,zIndex:(e.vars||e).zIndex.mobileStepper},t.position==="top"&&{position:"fixed",top:0,left:0,right:0,zIndex:(e.vars||e).zIndex.mobileStepper})),rr=j("div",{name:"MuiMobileStepper",slot:"Dots",overridesResolver:(e,t)=>t.dots})(({ownerState:e})=>T({},e.variant==="dots"&&{display:"flex",flexDirection:"row"})),nr=j("div",{name:"MuiMobileStepper",slot:"Dot",shouldForwardProp:e=>Tt(e)&&e!=="dotActive",overridesResolver:(e,t)=>{const{dotActive:o}=e;return[t.dot,o&&t.dotActive]}})(({theme:e,ownerState:t,dotActive:o})=>T({},t.variant==="dots"&&T({transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),backgroundColor:(e.vars||e).palette.action.disabled,borderRadius:"50%",width:8,height:8,margin:"0 2px"},o&&{backgroundColor:(e.vars||e).palette.primary.main}))),or=j(Qt,{name:"MuiMobileStepper",slot:"Progress",overridesResolver:(e,t)=>t.progress})(({ownerState:e})=>T({},e.variant==="progress"&&{width:"50%"})),ar=_.forwardRef(function(t,o){const n=Ct({props:t,name:"MuiMobileStepper"}),{activeStep:a=0,backButton:i,className:l,LinearProgressProps:u,nextButton:g,position:N="bottom",steps:S,variant:w="dots"}=n,I=kt(n,Zt),b=T({},n,{activeStep:a,position:N,variant:w});let P;w==="progress"&&(S===1?P=100:P=Math.ceil(a/(S-1)*100));const R=er(b);return q.jsxs(tr,T({square:!0,elevation:0,className:Oe(R.root,l),ref:o,ownerState:b},I,{children:[i,w==="text"&&q.jsxs(_.Fragment,{children:[a+1," / ",S]}),w==="dots"&&q.jsx(rr,{ownerState:b,className:R.dots,children:[...new Array(S)].map((C,c)=>q.jsx(nr,{className:Oe(R.dot,c===a&&R.dotActive),ownerState:b,dotActive:c===a},c))}),w==="progress"&&q.jsx(or,T({ownerState:b,className:R.progress,variant:"determinate",value:P},u)),g]}))}),ae=ar;function ir(e){return gt("MuiStepButton",e)}const sr=yt("MuiStepButton",["root","horizontal","vertical","touchRipple"]),Fe=sr,pr=["children","className","icon","optional"],lr=e=>{const{classes:t,orientation:o}=e;return _t({root:["root",o],touchRipple:["touchRipple"]},ir,t)},cr=j(Mt,{name:"MuiStepButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${Fe.touchRipple}`]:t.touchRipple},t.root,t[o.orientation]]}})(({ownerState:e})=>T({width:"100%",padding:"24px 16px",margin:"-24px -16px",boxSizing:"content-box"},e.orientation==="vertical"&&{justifyContent:"flex-start",padding:"8px",margin:"-8px"},{[`& .${Fe.touchRipple}`]:{color:"rgba(0, 0, 0, 0.3)"}})),dr=_.forwardRef(function(t,o){const n=Ct({props:t,name:"MuiStepButton"}),{children:a,className:i,icon:l,optional:u}=n,g=kt(n,pr),{disabled:N,active:S}=_.useContext(Ft),{orientation:w}=_.useContext(Vt),I=T({},n,{orientation:w}),b=lr(I),P={icon:l,optional:u},R=$t(a,["StepLabel"])?_.cloneElement(a,P):q.jsx(W,T({},P,{children:a}));return q.jsx(cr,T({focusRipple:!0,disabled:N,TouchRippleProps:{className:b.touchRipple},className:Oe(b.root,i),ref:o,ownerState:I,"aria-current":S?"step":void 0},g,{children:R}))}),ur=dr,mr=Pt(qt),pe=["Select campaign settings","Create an ad group","Create an ad"];function hr(){const[e,t]=_.useState(0),[o,n]=_.useState(new Set),a=S=>S===1,i=S=>o.has(S),l=()=>{let S=o;i(e)&&(S=new Set(S.values()),S.delete(e)),t(w=>w+1),n(S)},u=()=>{t(S=>S-1)},g=()=>{if(!a(e))throw new Error("You can't skip a step that isn't optional.");t(S=>S+1),n(S=>{const w=new Set(S.values());return w.add(e),w})},N=()=>{t(0)};return f(A,{sx:{width:"100%"},children:[r(D,{activeStep:e,children:pe.map((S,w)=>{const I={},b={};return a(w)&&(b.optional=r(d,{variant:"caption",children:"Optional"})),i(w)&&(I.completed=!1),r(K,{...I,children:r(W,{...b,children:S})},S)})}),e===pe.length?f(_.Fragment,{children:[r(d,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),f(A,{sx:{display:"flex",flexDirection:"row",pt:2},children:[r(A,{sx:{flex:"1 1 auto"}}),r(B,{onClick:N,children:"Reset"})]})]}):f(_.Fragment,{children:[f(d,{sx:{mt:2,mb:1},children:["Step ",e+1]}),f(A,{sx:{display:"flex",flexDirection:"row",pt:2},children:[r(B,{color:"inherit",disabled:e===0,onClick:u,sx:{mr:1},children:"Back"}),r(A,{sx:{flex:"1 1 auto"}}),a(e)&&r(B,{color:"inherit",onClick:g,sx:{mr:1},children:"Skip"}),r(B,{onClick:l,children:e===pe.length-1?"Finish":"Next"})]})]})]})}const fr=`import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
`,Q=["Select campaign settings","Create an ad group","Create an ad"];function vr(){const[e,t]=_.useState(0),[o,n]=_.useState({}),a=()=>Q.length,i=()=>Object.keys(o).length,l=()=>e===a()-1,u=()=>i()===a(),g=()=>{const b=l()&&!u()?Q.findIndex((P,R)=>!(R in o)):e+1;t(b)},N=()=>{t(b=>b-1)},S=b=>()=>{t(b)},w=()=>{const b=o;b[e]=!0,n(b),g()},I=()=>{t(0),n({})};return f(A,{sx:{width:"100%"},children:[r(D,{nonLinear:!0,activeStep:e,children:Q.map((b,P)=>r(K,{completed:o[P],children:r(ur,{color:"inherit",onClick:S(P),children:b})},b))}),r("div",{children:u()?f(_.Fragment,{children:[r(d,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),f(A,{sx:{display:"flex",flexDirection:"row",pt:2},children:[r(A,{sx:{flex:"1 1 auto"}}),r(B,{onClick:I,children:"Reset"})]})]}):f(_.Fragment,{children:[f(d,{sx:{mt:2,mb:1,py:1},children:["Step ",e+1]}),f(A,{sx:{display:"flex",flexDirection:"row",pt:2},children:[r(B,{color:"inherit",disabled:e===0,onClick:N,sx:{mr:1},children:"Back"}),r(A,{sx:{flex:"1 1 auto"}}),r(B,{onClick:g,sx:{mr:1},children:"Next"}),e!==Q.length&&(o[e]?f(d,{variant:"caption",sx:{display:"inline-block"},children:["Step ",e+1," already completed"]}):r(B,{onClick:w,children:i()===a()-1?"Finish":"Complete Step"}))]})]})})]})}const br=`import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
`,Sr=["Select master blaster campaign settings","Create an ad group","Create an ad"];function xr(){return r(A,{sx:{width:"100%"},children:r(D,{activeStep:1,alternativeLabel:!0,children:Sr.map(e=>r(K,{children:r(W,{children:e})},e))})})}const gr=`import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];

export default function HorizontalLinearAlternativeLabelStepper() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
`,yr=["Select campaign settings","Create an ad group","Create an ad"];function wr(){const e=t=>t===1;return r(A,{sx:{width:"100%"},children:r(D,{activeStep:1,children:yr.map((t,o)=>{const n={};return e(o)&&(n.optional=r(d,{variant:"caption",color:"error",children:"Alert message"}),n.error=!0),r(K,{children:r(W,{...n,children:t})},t)})})})}const Cr=`import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function HorizontalStepperWithError() {
  const isStepFailed = (step: number) => {
    return step === 1;
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1}>
        {steps.map((label, index) => {
          const labelProps: {
            optional?: React.ReactNode;
            error?: boolean;
          } = {};
          if (isStepFailed(index)) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Alert message
              </Typography>
            );
            labelProps.error = true;
          }

          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
`;var Te={},kr=Bt;Object.defineProperty(Te,"__esModule",{value:!0});var It=Te.default=void 0,_r=kr(Rt()),Pr=q;It=Te.default=(0,_r.default)((0,Pr.jsx)("path",{d:"M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m4.51-8.95C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95m4.02 9.78C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17"}),"GroupAdd");var Me={},Rr=Bt;Object.defineProperty(Me,"__esModule",{value:!0});var Nt=Me.default=void 0,Br=Rr(Rt()),Ar=q;Nt=Me.default=(0,Br.default)((0,Ar.jsx)("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 13H3V5h18z"}),"VideoLabel");const Ir=j(At)(({theme:e})=>({[`&.${L.alternativeLabel}`]:{top:10,left:"calc(-50% + 16px)",right:"calc(50% + 16px)"},[`&.${L.active}`]:{[`& .${L.line}`]:{borderColor:"#784af4"}},[`&.${L.completed}`]:{[`& .${L.line}`]:{borderColor:"#784af4"}},[`& .${L.line}`]:{borderColor:e.palette.mode==="dark"?e.palette.grey[800]:"#eaeaf0",borderTopWidth:3,borderRadius:1}})),Nr=j("div")(({theme:e,ownerState:t})=>({color:e.palette.mode==="dark"?e.palette.grey[700]:"#eaeaf0",display:"flex",height:22,alignItems:"center",...t.active&&{color:"#784af4"},"& .QontoStepIcon-completedIcon":{color:"#784af4",zIndex:1,fontSize:18},"& .QontoStepIcon-circle":{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}}));function Or(e){const{active:t,completed:o,className:n}=e;return r(Nr,{ownerState:{active:t},className:n,children:o?r(Ht,{className:"QontoStepIcon-completedIcon"}):r("div",{className:"QontoStepIcon-circle"})})}const Lr=j(At)(({theme:e})=>({[`&.${L.alternativeLabel}`]:{top:22},[`&.${L.active}`]:{[`& .${L.line}`]:{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}},[`&.${L.completed}`]:{[`& .${L.line}`]:{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}},[`& .${L.line}`]:{height:3,border:0,backgroundColor:e.palette.mode==="dark"?e.palette.grey[800]:"#eaeaf0",borderRadius:1}})),Tr=j("div")(({theme:e,ownerState:t})=>({backgroundColor:e.palette.mode==="dark"?e.palette.grey[700]:"#ccc",zIndex:1,color:"#fff",width:50,height:50,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center",...t.active&&{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)"},...t.completed&&{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"}}));function Mr(e){const{active:t,completed:o,className:n}=e;return r(Tr,{ownerState:{completed:o,active:t},className:n,children:{1:r(Gt,{}),2:r(It,{}),3:r(Nt,{})}[String(e.icon)]})}const Ve=["Select campaign settings","Create an ad group","Create an ad"];function $r(){return f(jt,{sx:{width:"100%"},spacing:4,children:[r(D,{alternativeLabel:!0,activeStep:1,connector:r(Ir,{}),children:Ve.map(e=>r(K,{children:r(W,{StepIconComponent:Or,children:e})},e))}),r(D,{alternativeLabel:!0,activeStep:1,connector:r(Lr,{}),children:Ve.map(e=>r(K,{children:r(W,{StepIconComponent:Mr,children:e})},e))})]})}const qr=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [\`&.\${stepConnectorClasses.alternativeLabel}\`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [\`&.\${stepConnectorClasses.active}\`]: {
    [\`& .\${stepConnectorClasses.line}\`]: {
      borderColor: '#784af4',
    },
  },
  [\`&.\${stepConnectorClasses.completed}\`]: {
    [\`& .\${stepConnectorClasses.line}\`]: {
      borderColor: '#784af4',
    },
  },
  [\`& .\${stepConnectorClasses.line}\`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [\`&.\${stepConnectorClasses.alternativeLabel}\`]: {
    top: 22,
  },
  [\`&.\${stepConnectorClasses.active}\`]: {
    [\`& .\${stepConnectorClasses.line}\`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [\`&.\${stepConnectorClasses.completed}\`]: {
    [\`& .\${stepConnectorClasses.line}\`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [\`& .\${stepConnectorClasses.line}\`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function CustomizedSteppers() {
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
`,le=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}];function jr(){const[e,t]=_.useState(0),o=()=>{t(i=>i+1)},n=()=>{t(i=>i-1)},a=()=>{t(0)};return f(A,{sx:{maxWidth:400},children:[r(D,{activeStep:e,orientation:"vertical",children:le.map((i,l)=>f(K,{children:[r(W,{optional:l===2?r(d,{variant:"caption",children:"Last step"}):null,children:i.label}),f(Ut,{children:[r(d,{children:i.description}),r(A,{sx:{mb:2},children:f("div",{children:[r(B,{variant:"contained",onClick:o,sx:{mt:1,mr:1},children:l===le.length-1?"Finish":"Continue"}),r(B,{disabled:l===0,onClick:n,sx:{mt:1,mr:1},children:"Back"})]})})]})]},i.label))}),e===le.length&&f(re,{square:!0,elevation:0,sx:{p:3},children:[r(d,{children:"All steps completed - you're finished"}),r(B,{onClick:a,sx:{mt:1,mr:1},children:"Reset"})]})]})}const zr=`import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Select campaign settings',
    description: \`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.\`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: \`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.\`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
`,ce=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}];function Er(){const e=ne(),[t,o]=_.useState(0),n=ce.length,a=()=>{o(l=>l+1)},i=()=>{o(l=>l-1)};return f(A,{sx:{maxWidth:400,flexGrow:1},children:[r(re,{square:!0,elevation:0,sx:{display:"flex",alignItems:"center",height:50,pl:2,bgcolor:"background.default"},children:r(d,{children:ce[t].label})}),r(A,{sx:{height:255,maxWidth:400,width:"100%",p:2},children:ce[t].description}),r(ae,{variant:"text",steps:n,position:"static",activeStep:t,nextButton:f(B,{size:"small",onClick:a,disabled:t===n-1,children:["Next",e.direction==="rtl"?r(z,{}):r(E,{})]}),backButton:f(B,{size:"small",onClick:i,disabled:t===0,children:[e.direction==="rtl"?r(E,{}):r(z,{}),"Back"]})})]})}const Wr=`import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    label: 'Select campaign settings',
    description: \`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.\`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: \`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.\`,
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
`;var Ot={};function Kr(e){return e&&e.__esModule?e:{default:e}}var ie=Kr,Y={},J,Ue;function $e(){if(Ue)return J;Ue=1;function e(){return J=e=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},e.apply(this,arguments)}return J=e,J}var de,He;function Dr(){if(He)return de;He=1;function e(t,o){if(t==null)return{};var n={},a=Object.keys(t),i,l;for(l=0;l<a.length;l++)i=a[l],!(o.indexOf(i)>=0)&&(n[i]=t[i]);return n}return de=e,de}var ue,Ge;function qe(){if(Ge)return ue;Ge=1;var e=Dr();function t(o,n){if(o==null)return{};var a=e(o,n),i,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(o);for(l=0;l<u.length;l++)i=u[l],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(o,i)&&(a[i]=o[i])}return a}return ue=t,ue}var me,Qe;function je(){if(Qe)return me;Qe=1;function e(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}return me=e,me}var he,Ye;function ze(){if(Ye)return he;Ye=1;function e(o,n){for(var a=0;a<n.length;a++){var i=n[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,i.key,i)}}function t(o,n,a){return n&&e(o.prototype,n),a&&e(o,a),o}return he=t,he}var U,Je;function Fr(){if(Je)return U;Je=1;function e(o){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(a){return typeof a}:e=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},e(o)}function t(o){return typeof Symbol=="function"&&e(Symbol.iterator)==="symbol"?U=t=function(a){return e(a)}:U=t=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":e(a)},t(o)}return U=t,U}var fe,Xe;function Vr(){if(Xe)return fe;Xe=1;function e(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}return fe=e,fe}var ve,Ze;function Ee(){if(Ze)return ve;Ze=1;var e=Fr(),t=Vr();function o(n,a){return a&&(e(a)==="object"||typeof a=="function")?a:t(n)}return ve=o,ve}var X,et;function We(){if(et)return X;et=1;function e(t){return X=e=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},e(t)}return X=e,X}var Z,tt;function Ur(){if(tt)return Z;tt=1;function e(t,o){return Z=e=Object.setPrototypeOf||function(a,i){return a.__proto__=i,a},e(t,o)}return Z=e,Z}var be,rt;function Ke(){if(rt)return be;rt=1;var e=Ur();function t(o,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(n&&n.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),n&&e(o,n)}return be=t,be}function Hr(e,t){if(e===t)return!0;if(!e||!t)return!1;var o=Object.keys(e),n=Object.keys(t),a=o.length;if(n.length!==a)return!1;for(var i=0;i<a;i++){var l=o[i];if(e[l]!==t[l]||!Object.prototype.hasOwnProperty.call(t,l))return!1}return!0}function Gr(e,t){if(e===t)return!0;if(!e||!t)return!1;var o=e.length;if(t.length!==o)return!1;for(var n=0;n<o;n++)if(e[n]!==t[n])return!1;return!0}const Qr=Object.freeze(Object.defineProperty({__proto__:null,shallowEqualArrays:Gr,shallowEqualObjects:Hr},Symbol.toStringTag,{value:"Module"})),Yr=Pt(Qr);var H={},Se={exports:{}},nt;function Jr(){return nt||(nt=1,function(e){function t(o,n){if(!(o instanceof n))throw new TypeError("Cannot call a class as a function")}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(Se)),Se.exports}var xe={exports:{}},ge={exports:{}},ye={exports:{}},ot;function se(){return ot||(ot=1,function(e){function t(o){"@babel/helpers - typeof";return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(ye)),ye.exports}var we={exports:{}},at;function Xr(){return at||(at=1,function(e){var t=se().default;function o(n,a){if(t(n)!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var l=i.call(n,a||"default");if(t(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}(we)),we.exports}var it;function Zr(){return it||(it=1,function(e){var t=se().default,o=Xr();function n(a){var i=o(a,"string");return t(i)=="symbol"?i:i+""}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports}(ge)),ge.exports}var st;function en(){return st||(st=1,function(e){var t=Zr();function o(a,i){for(var l=0;l<i.length;l++){var u=i[l];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(a,t(u.key),u)}}function n(a,i,l){return i&&o(a.prototype,i),l&&o(a,l),Object.defineProperty(a,"prototype",{writable:!1}),a}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports}(xe)),xe.exports}var Ce={exports:{}},ke={exports:{}},pt;function tn(){return pt||(pt=1,function(e){function t(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(ke)),ke.exports}var lt;function rn(){return lt||(lt=1,function(e){var t=se().default,o=tn();function n(a,i){if(i&&(t(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return o(a)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports}(Ce)),Ce.exports}var _e={exports:{}},ct;function nn(){return ct||(ct=1,function(e){function t(o){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(_e)),_e.exports}var Pe={exports:{}},Re={exports:{}},dt;function on(){return dt||(dt=1,function(e){function t(o,n){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,l){return i.__proto__=l,i},e.exports.__esModule=!0,e.exports.default=e.exports,t(o,n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(Re)),Re.exports}var ut;function an(){return ut||(ut=1,function(e){var t=on();function o(n,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),a&&t(n,a)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}(Pe)),Pe.exports}var Be={exports:{}},Ae={exports:{}},mt;function sn(){return mt||(mt=1,function(e){function t(o,n){if(o==null)return{};var a={},i=Object.keys(o),l,u;for(u=0;u<i.length;u++)l=i[u],!(n.indexOf(l)>=0)&&(a[l]=o[l]);return a}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(Ae)),Ae.exports}var ht;function pn(){return ht||(ht=1,function(e){var t=sn();function o(n,a){if(n==null)return{};var i=t(n,a),l,u;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(n);for(u=0;u<g.length;u++)l=g[u],!(a.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(n,l)&&(i[l]=n[l])}return i}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}(Be)),Be.exports}var ft;function Lt(){if(ft)return H;ft=1,Object.defineProperty(H,"__esModule",{value:!0});function e(p){return p&&typeof p=="object"&&"default"in p?p.default:p}var t=e(Jr()),o=e(en()),n=e(rn()),a=e(nn()),i=e(an()),l=e(se()),u=e(pn()),g=e(mr),N=e(_);e(oe),e(zt());function S(p,h,x){return Object.defineProperty(p,h,x)}var w=function(){var p=null;return function(){if(p!==null)return p;var h=!1;try{window.addEventListener("test",null,S({},"passive",{get:function(){h=!0}}))}catch{}return p=h,h}()}(),I={capture:!1,passive:!1};function b(p){return g({},I,p)}function P(p,h,x){var v=[p,h];return v.push(w?x:x.capture),v}function R(p,h,x,v){p.addEventListener.apply(p,P(h,x,v))}function C(p,h,x,v){p.removeEventListener.apply(p,P(h,x,v))}function c(p,h){p.children,p.target;var x=u(p,["children","target"]);Object.keys(x).forEach(function(v){if(v.substring(0,2)==="on"){var k=x[v],y=l(k),O=y==="object",G=y==="function";if(!(!O&&!G)){var V=v.substr(-7).toLowerCase()==="capture",$=v.substring(2).toLowerCase();$=V?$.substring(0,$.length-7):$,O?h($,k.handler,k.options):h($,k,b({capture:V}))}}})}function s(p,h){return{handler:p,options:b(h)}}var m=function(p){i(h,p);function h(){return t(this,h),n(this,a(h).apply(this,arguments))}return o(h,[{key:"componentDidMount",value:function(){this.applyListeners(R)}},{key:"componentDidUpdate",value:function(v){this.applyListeners(C,v),this.applyListeners(R)}},{key:"componentWillUnmount",value:function(){this.applyListeners(C)}},{key:"applyListeners",value:function(v){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.props,y=k.target;if(y){var O=y;typeof y=="string"&&(O=window[y]),c(k,v.bind(null,O))}}},{key:"render",value:function(){return this.props.children||null}}]),h}(N.PureComponent);return m.propTypes={},H.withOptions=s,H.default=m,H}var vt;function ln(){if(vt)return Y;vt=1;var e=ie;Object.defineProperty(Y,"__esModule",{value:!0}),Y.default=I;var t=e($e()),o=e(qe()),n=e(je()),a=e(ze()),i=e(Ee()),l=e(We()),u=e(Ke()),g=e(_);e(oe);var N=Yr,S=e(Lt()),w=Le();function I(b){var P=function(R){(0,u.default)(C,R);function C(c){var s;return(0,n.default)(this,C),s=(0,i.default)(this,(0,l.default)(C).call(this,c)),s.timer=null,s.state={},s.handleInterval=function(){var m=s.props,p=m.children,h=m.direction,x=m.onChangeIndex,v=m.slideCount,k=s.state.index,y=k;h==="incremental"?y+=1:y-=1,(v||p)&&(y=(0,w.mod)(y,v||g.default.Children.count(p))),s.props.index===void 0&&s.setState({index:y}),x&&x(y,k)},s.handleChangeIndex=function(m,p,h){s.props.index===void 0&&s.setState({index:m}),s.props.onChangeIndex&&s.props.onChangeIndex(m,p,h)},s.handleSwitching=function(m,p){s.timer?(clearInterval(s.timer),s.timer=null):p==="end"&&s.startInterval(),s.props.onSwitching&&s.props.onSwitching(m,p)},s.handleVisibilityChange=function(m){m.target.hidden?clearInterval(s.timer):s.startInterval()},s.state.index=c.index||0,s}return(0,a.default)(C,[{key:"componentDidMount",value:function(){this.startInterval()}},{key:"UNSAFE_componentWillReceiveProps",value:function(s){var m=s.index;typeof m=="number"&&m!==this.props.index&&this.setState({index:m})}},{key:"componentDidUpdate",value:function(s){var m=!(0,N.shallowEqualObjects)({index:s.index,interval:s.interval,autoplay:s.autoplay},{index:this.props.index,interval:this.props.interval,autoplay:this.props.autoplay});m&&this.startInterval()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"startInterval",value:function(){var s=this.props,m=s.autoplay,p=s.interval;clearInterval(this.timer),m&&(this.timer=setInterval(this.handleInterval,p))}},{key:"render",value:function(){var s=this.props,m=s.autoplay;s.direction,s.index,s.interval;var p=s.onChangeIndex,h=(0,o.default)(s,["autoplay","direction","index","interval","onChangeIndex"]),x=this.state.index;return m?g.default.createElement(S.default,{target:"document",onVisibilityChange:this.handleVisibilityChange},g.default.createElement(b,(0,t.default)({index:x,onChangeIndex:this.handleChangeIndex,onSwitching:this.handleSwitching},h))):g.default.createElement(b,(0,t.default)({index:x,onChangeIndex:p},h))}}]),C}(g.default.Component);return P.propTypes={},P.defaultProps={autoplay:!0,direction:"incremental",interval:3e3},P}return Y}var ee={},bt;function cn(){if(bt)return ee;bt=1;var e=ie;Object.defineProperty(ee,"__esModule",{value:!0}),ee.default=I;var t=e($e()),o=e(qe()),n=e(je()),a=e(ze()),i=e(Ee()),l=e(We()),u=e(Ke()),g=e(_);e(oe);var N=e(Jt),S=e(Lt()),w=Le();function I(b){var P=function(R){(0,u.default)(C,R);function C(){var c,s;(0,n.default)(this,C);for(var m=arguments.length,p=new Array(m),h=0;h<m;h++)p[h]=arguments[h];return s=(0,i.default)(this,(c=(0,l.default)(C)).call.apply(c,[this].concat(p))),s.state={},s.handleKeyDown=function(x){var v,k=s.props,y=k.axis,O=y===void 0?"x":y,G=k.children,V=k.onChangeIndex,$=k.slideCount;switch((0,N.default)(x)){case"page down":case"down":O==="y"?v="decrease":O==="y-reverse"&&(v="increase");break;case"left":O==="x"?v="decrease":O==="x-reverse"&&(v="increase");break;case"page up":case"up":O==="y"?v="increase":O==="y-reverse"&&(v="decrease");break;case"right":O==="x"?v="increase":O==="x-reverse"&&(v="decrease");break}if(v){var De=s.state.index,F=De;v==="increase"?F+=1:F-=1,($||G)&&(F=(0,w.mod)(F,$||g.default.Children.count(G))),s.props.index===void 0&&s.setState({index:F}),V&&V(F,De)}},s.handleChangeIndex=function(x,v,k){s.props.index===void 0&&s.setState({index:x}),s.props.onChangeIndex&&s.props.onChangeIndex(x,v,k)},s}return(0,a.default)(C,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({index:this.props.index||0})}},{key:"UNSAFE_componentWillReceiveProps",value:function(s){var m=s.index;typeof m=="number"&&m!==this.props.index&&this.setState({index:m})}},{key:"render",value:function(){var s=this.props;s.index,s.onChangeIndex;var m=(0,o.default)(s,["index","onChangeIndex"]),p=this.state.index;return g.default.createElement(S.default,{target:"window",onKeyDown:this.handleKeyDown},g.default.createElement(b,(0,t.default)({index:p,onChangeIndex:this.handleChangeIndex},m)))}}]),C}(g.default.Component);return P.propTypes={},P}return ee}var te={},Ie,St;function dn(){if(St)return Ie;St=1;function e(t){if(t&&t.__esModule)return t;var o={};if(t!=null){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};a.get||a.set?Object.defineProperty(o,n,a):o[n]=t[n]}}return o.default=t,o}return Ie=e,Ie}var xt;function un(){if(xt)return te;xt=1;var e=dn(),t=ie;Object.defineProperty(te,"__esModule",{value:!0}),te.default=w;var o=t($e()),n=t(qe()),a=t(je()),i=t(ze()),l=t(Ee()),u=t(We()),g=t(Ke()),N=e(_);t(oe);var S=Le();function w(I){var b=function(P){(0,g.default)(R,P);function R(C){var c;return(0,a.default)(this,R),c=(0,l.default)(this,(0,u.default)(R).call(this,C)),c.timer=null,c.state={},c.handleChangeIndex=function(s,m,p){var h=c.props,x=h.slideCount,v=h.onChangeIndex,k=s-m,y=c.state.index+k;x&&(y=(0,S.mod)(y,x)),c.props.index===void 0&&c.setIndex(y,s,k),v&&v(y,c.state.index,p)},c.handleTransitionEnd=function(){c.timer=setTimeout(function(){c.setWindow()},0),c.props.onTransitionEnd&&c.props.onTransitionEnd()},c.state.index=C.index||0,c}return(0,i.default)(R,[{key:"UNSAFE_componentWillMount",value:function(){this.setWindow(this.state.index)}},{key:"UNSAFE_componentWillReceiveProps",value:function(c){var s=c.index;if(typeof s=="number"&&s!==this.props.index){var m=s-this.props.index;this.setIndex(s,this.state.indexContainer+m,m)}}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"setIndex",value:function(c,s,m){var p={index:c,indexContainer:s,indexStart:this.state.indexStart,indexStop:this.state.indexStop};m>0&&(!this.props.slideCount||p.indexStop<this.props.slideCount-1)&&(p.indexStop+=1),c>p.indexStop&&(p.indexStop=c);var h=p.indexStart-c;h>0&&(p.indexContainer+=h,p.indexStart-=h),this.setState(p)}},{key:"setWindow",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.state.index,s=this.props.slideCount,m=this.props.overscanSlideBefore,p=this.props.overscanSlideAfter;s&&(m>c&&(m=c),p+c>s-1&&(p=s-c-1)),this.setState({indexContainer:m,indexStart:c-m,indexStop:c+p})}},{key:"render",value:function(){var c=this.props;c.children,c.index,c.onChangeIndex,c.onTransitionEnd,c.overscanSlideAfter,c.overscanSlideBefore,c.slideCount;for(var s=c.slideRenderer,m=(0,n.default)(c,["children","index","onChangeIndex","onTransitionEnd","overscanSlideAfter","overscanSlideBefore","slideCount","slideRenderer"]),p=this.state,h=p.indexContainer,x=p.indexStart,v=p.indexStop,k=[],y=x;y<=v;y+=1)k.push(s({index:y,key:y}));return N.default.createElement(I,(0,o.default)({index:h,onChangeIndex:this.handleChangeIndex,onTransitionEnd:this.handleTransitionEnd},m),k)}}]),R}(N.PureComponent);return b.propTypes={},b.defaultProps={overscanSlideAfter:2,overscanSlideBefore:3},b}return te}(function(e){var t=ie;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"autoPlay",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"bindKeyboard",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"virtualize",{enumerable:!0,get:function(){return a.default}});var o=t(ln()),n=t(cn()),a=t(un())})(Ot);const mn=Ot.autoPlay(Yt),Ne=[{label:"San Francisco – Oakland Bay Bridge, United States",imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bird",imgPath:"https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bali, Indonesia",imgPath:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250"},{label:"Goč, Serbia",imgPath:"https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"}];function hn(){const e=ne(),[t,o]=_.useState(0),n=Ne.length,a=()=>{o(u=>u+1)},i=()=>{o(u=>u-1)},l=u=>{o(u)};return f(A,{sx:{maxWidth:400,flexGrow:1},children:[r(re,{square:!0,elevation:0,sx:{display:"flex",alignItems:"center",height:50,pl:2,bgcolor:"background.default"},children:r(d,{children:Ne[t].label})}),r(mn,{axis:e.direction==="rtl"?"x-reverse":"x",index:t,onChangeIndex:l,enableMouseEvents:!0,children:Ne.map((u,g)=>r("div",{children:Math.abs(t-g)<=2?r(A,{component:"img",sx:{height:255,display:"block",maxWidth:400,overflow:"hidden",width:"100%"},src:u.imgPath,alt:u.label}):null},u.label))}),r(ae,{steps:n,position:"static",activeStep:t,nextButton:f(B,{size:"small",onClick:a,disabled:t===n-1,children:["Next",e.direction==="rtl"?r(z,{}):r(E,{})]}),backButton:f(B,{size:"small",onClick:i,disabled:t===0,children:[e.direction==="rtl"?r(E,{}):r(z,{}),"Back"]})})]})}const fn=`import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
`;function vn(){const e=ne(),[t,o]=_.useState(0),n=()=>{o(i=>i+1)},a=()=>{o(i=>i-1)};return r(ae,{variant:"dots",steps:6,position:"static",activeStep:t,sx:{maxWidth:400,flexGrow:1},nextButton:f(B,{size:"small",onClick:n,disabled:t===5,children:["Next",e.direction==="rtl"?r(z,{}):r(E,{})]}),backButton:f(B,{size:"small",onClick:a,disabled:t===0,children:[e.direction==="rtl"?r(E,{}):r(z,{}),"Back"]})})}const bn=`import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function DotsMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="dots"
      steps={6}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}
`;function Sn(){const e=ne(),[t,o]=_.useState(0),n=()=>{o(i=>i+1)},a=()=>{o(i=>i-1)};return r(ae,{variant:"progress",steps:6,position:"static",activeStep:t,sx:{maxWidth:400,flexGrow:1},nextButton:f(B,{size:"small",onClick:n,disabled:t===5,children:["Next",e.direction==="rtl"?r(z,{}):r(E,{})]}),backButton:f(B,{size:"small",onClick:a,disabled:t===0,children:[e.direction==="rtl"?r(E,{}):r(z,{}),"Back"]})})}const xn=`import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function ProgressMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}
`;function On(e){return f(Kt,{children:[f("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[r(Dt,{}),r(B,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/steppers",target:"_blank",role:"button",size:"small",startIcon:r(Et,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),r(d,{className:"text-32 my-16 font-700",component:"h1",children:"Stepper"}),r(d,{className:"description",children:"Steppers convey progress through numbered steps. It provides a wizard-like workflow."}),r(d,{className:"text-14 mb-32",component:"div",children:"Steppers display progress through a sequence of logical and numbered steps. They may also be used for navigation. Steppers may display a transient feedback message after a step is saved."}),f("ul",{className:"space-y-16",children:[f("li",{children:[r("strong",{children:"Types of Steps"}),": Editable, Non-editable, Mobile, Optional"]}),f("li",{children:[r("strong",{children:"Types of Steppers"}),": Horizontal, Vertical, Linear, Non-linear"]})]}),r("div",{className:"border border-1 p-16 rounded-16 my-12",children:f(d,{className:"text-14 mb-32",component:"div",children:["This component is no longer documented in the ",r("a",{href:"https://m2.material.io/",children:"Material Design guidelines"}),", but Material UI will continue to support it."]})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Horizontal stepper"}),r(d,{className:"text-14 mb-32",component:"div",children:"Horizontal steppers are ideal when the contents of one step depend on an earlier step."}),r(d,{className:"text-14 mb-32",component:"div",children:"Avoid using long step names in horizontal steppers."}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Linear"}),r(d,{className:"text-14 mb-32",component:"div",children:"A linear stepper allows the user to complete the steps in sequence."}),f(d,{className:"text-14 mb-32",component:"div",children:["The ",r("code",{children:"Stepper"})," can be controlled by passing the current step index (zero-based) as the ",r("code",{children:"activeStep"})," prop. ",r("code",{children:"Stepper"})," orientation is set using the ",r("code",{children:"orientation"})," prop."]}),f(d,{className:"text-14 mb-32",component:"div",children:["This example also shows the use of an optional step by placing the ",r("code",{children:"optional"})," prop on the second ",r("code",{children:"Step"})," component. Note that it's up to you to manage when an optional step is skipped. Once you've determined this for a particular step you must set ",r("code",{children:"completed={false}"})," to signify that even though the active step index has gone beyond the optional step, it's not actually complete."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"HorizontalLinearStepper.js",className:"my-16",iframe:!1,component:hr,raw:fr})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Non-linear"}),r(d,{className:"text-14 mb-32",component:"div",children:"Non-linear steppers allow the user to enter a multi-step flow at any point."}),f(d,{className:"text-14 mb-32",component:"div",children:["This example is similar to the regular horizontal stepper, except steps are no longer automatically set to ",r("code",{children:"disabled={true}"})," based on the ",r("code",{children:"activeStep"})," prop."]}),f(d,{className:"text-14 mb-32",component:"div",children:["The use of the ",r("code",{children:"StepButton"})," here demonstrates clickable step labels, as well as setting the ",r("code",{children:"completed"}),"flag. However because steps can be accessed in a non-linear fashion, it's up to your own implementation to determine when all steps are completed (or even if they need to be completed)."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"HorizontalNonLinearStepper.js",className:"my-16",iframe:!1,component:vr,raw:br})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Alternative label"}),f(d,{className:"text-14 mb-32",component:"div",children:["Labels can be placed below the step icon by setting the ",r("code",{children:"alternativeLabel"})," prop on the ",r("code",{children:"Stepper"})," component."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"HorizontalLinearAlternativeLabelStepper.js",className:"my-16",iframe:!1,component:xr,raw:gr})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Error step"}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"HorizontalStepperWithError.js",className:"my-16",iframe:!1,component:wr,raw:Cr})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Customized horizontal stepper"}),f(d,{className:"text-14 mb-32",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the ",r("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"CustomizedSteppers.js",className:"my-16",iframe:!1,component:$r,raw:qr})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Vertical stepper"}),r(d,{className:"text-14 mb-32",component:"div",children:"Vertical steppers are designed for narrow screen sizes. They are ideal for mobile. All the features of the horizontal stepper can be implemented."}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"VerticalLinearStepper.js",className:"my-16",iframe:!1,component:jr,raw:zr})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Performance"}),r(d,{className:"text-14 mb-32",component:"div",children:"The content of a step is unmounted when closed. If you need to make the content available to search engines or render expensive component trees inside your modal while optimizing for interaction responsiveness it might be a good idea to keep the step mounted with:"}),r(Wt,{component:"pre",className:"language-jsx",children:` 
<StepContent TransitionProps={{ unmountOnExit: false }} />
`}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Mobile stepper"}),f(d,{className:"text-14 mb-32",component:"div",children:["This component implements a compact stepper suitable for a mobile device. It has more limited functionality than the vertical stepper. See ",r("a",{href:"https://m1.material.io/components/steppers.html#steppers-types-of-steps",children:"mobile steps"})," for its inspiration."]}),r(d,{className:"text-14 mb-32",component:"div",children:"The mobile stepper supports three variants to display progress through the available steps: text, dots, and progress."}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Text"}),r(d,{className:"text-14 mb-32",component:"div",children:"The current step and total number of steps are displayed as text."}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"TextMobileStepper.js",className:"my-16",iframe:!1,component:Er,raw:Wr})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Text with carousel effect"}),f(d,{className:"text-14 mb-32",component:"div",children:["This demo uses",r("a",{href:"https://github.com/oliviertassinari/react-swipeable-views",children:"react-swipeable-views"})," to create a carousel."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"SwipeableTextMobileStepper.js",className:"my-16",iframe:!1,component:hn,raw:fn})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Dots"}),r(d,{className:"text-14 mb-32",component:"div",children:"Use dots when the number of steps is small."}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"DotsMobileStepper.js",className:"my-16",iframe:!1,component:vn,raw:bn})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Progress"}),r(d,{className:"text-14 mb-32",component:"div",children:"Use a progress bar when there are many steps, or if there are steps that need to be inserted during the process (based on responses to earlier steps)."}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"ProgressMobileStepper.js",className:"my-16",iframe:!1,component:Sn,raw:xn})})]})}export{On as default};