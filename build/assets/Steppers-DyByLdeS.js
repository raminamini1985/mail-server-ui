import{Z as wt,$ as Ct,s as j,P as ne,S as kt,bu as T,cs as qt,r as R,bv as _t,bw as Pt,bs as $,g as Oe,U as Rt,cc as $t,a2 as jt,af as Bt,dX as zt,d as v,j as r,T as d,B as N,o as I,br as At,ag as It,c3 as Et,aj as oe,cg as Wt,cd as ae,h as Kt,d3 as Dt,aH as Ft}from"./index-C8FJCBfb.js";import{F as M}from"./FuseExample-DpwYu1DD.js";import{D as Vt}from"./DocumentationPageBreadcrumb-B0t3mRJf.js";import{d as Ut,e as Ht,b as W,a as K,S as D,f as Nt,s as O,c as Gt}from"./Stepper-DNwDjJqP.js";import{d as Qt}from"./Check-CLiPryME.js";import{d as Yt}from"./Settings-DnruN3TF.js";import{d as z,a as E}from"./KeyboardArrowRight-C8oq8PHw.js";import{L as Xt}from"./LinearProgress-D-a8CLCd.js";import{r as Te,S as Zt}from"./index-BNktdUDV.js";import"./DocumentationNavigation-CoT9gNpi.js";import"./ChangelogDoc-zjSh-eTP.js";function Jt(e){return wt("MuiMobileStepper",e)}Ct("MuiMobileStepper",["root","positionBottom","positionTop","positionStatic","dots","dot","dotActive","progress"]);const er=["activeStep","backButton","className","LinearProgressProps","nextButton","position","steps","variant"],tr=e=>{const{classes:t,position:o}=e,n={root:["root",`position${kt(o)}`],dots:["dots"],dot:["dot"],dotActive:["dotActive"],progress:["progress"]};return Rt(n,Jt,t)},rr=j(ne,{name:"MuiMobileStepper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${kt(o.position)}`]]}})(({theme:e,ownerState:t})=>T({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",background:(e.vars||e).palette.background.default,padding:8},t.position==="bottom"&&{position:"fixed",bottom:0,left:0,right:0,zIndex:(e.vars||e).zIndex.mobileStepper},t.position==="top"&&{position:"fixed",top:0,left:0,right:0,zIndex:(e.vars||e).zIndex.mobileStepper})),nr=j("div",{name:"MuiMobileStepper",slot:"Dots",overridesResolver:(e,t)=>t.dots})(({ownerState:e})=>T({},e.variant==="dots"&&{display:"flex",flexDirection:"row"})),or=j("div",{name:"MuiMobileStepper",slot:"Dot",shouldForwardProp:e=>qt(e)&&e!=="dotActive",overridesResolver:(e,t)=>{const{dotActive:o}=e;return[t.dot,o&&t.dotActive]}})(({theme:e,ownerState:t,dotActive:o})=>T({},t.variant==="dots"&&T({transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),backgroundColor:(e.vars||e).palette.action.disabled,borderRadius:"50%",width:8,height:8,margin:"0 2px"},o&&{backgroundColor:(e.vars||e).palette.primary.main}))),ar=j(Xt,{name:"MuiMobileStepper",slot:"Progress",overridesResolver:(e,t)=>t.progress})(({ownerState:e})=>T({},e.variant==="progress"&&{width:"50%"})),ir=R.forwardRef(function(t,o){const n=_t({props:t,name:"MuiMobileStepper"}),{activeStep:a=0,backButton:i,className:p,LinearProgressProps:u,nextButton:b,position:C="bottom",steps:h,variant:S="dots"}=n,_=Pt(n,er),g=T({},n,{activeStep:a,position:C,variant:S});let B;S==="progress"&&(h===1?B=100:B=Math.ceil(a/(h-1)*100));const A=tr(g);return $.jsxs(rr,T({square:!0,elevation:0,className:Oe(A.root,p),ref:o,ownerState:g},_,{children:[i,S==="text"&&$.jsxs(R.Fragment,{children:[a+1," / ",h]}),S==="dots"&&$.jsx(nr,{ownerState:g,className:A.dots,children:[...new Array(h)].map((k,c)=>$.jsx(or,{className:Oe(A.dot,c===a&&A.dotActive),ownerState:g,dotActive:c===a},c))}),S==="progress"&&$.jsx(ar,T({ownerState:g,className:A.progress,variant:"determinate",value:B},u)),b]}))}),ie=ir;function sr(e){return wt("MuiStepButton",e)}const pr=Ct("MuiStepButton",["root","horizontal","vertical","touchRipple"]),Ve=pr,lr=["children","className","icon","optional"],cr=e=>{const{classes:t,orientation:o}=e;return Rt({root:["root",o],touchRipple:["touchRipple"]},sr,t)},dr=j($t,{name:"MuiStepButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${Ve.touchRipple}`]:t.touchRipple},t.root,t[o.orientation]]}})(({ownerState:e})=>T({width:"100%",padding:"24px 16px",margin:"-24px -16px",boxSizing:"content-box"},e.orientation==="vertical"&&{justifyContent:"flex-start",padding:"8px",margin:"-8px"},{[`& .${Ve.touchRipple}`]:{color:"rgba(0, 0, 0, 0.3)"}})),ur=R.forwardRef(function(t,o){const n=_t({props:t,name:"MuiStepButton"}),{children:a,className:i,icon:p,optional:u}=n,b=Pt(n,lr),{disabled:C,active:h}=R.useContext(Ut),{orientation:S}=R.useContext(Ht),_=T({},n,{orientation:S}),g=cr(_),B={icon:p,optional:u},A=jt(a,["StepLabel"])?R.cloneElement(a,B):$.jsx(W,T({},B,{children:a}));return $.jsx(dr,T({focusRipple:!0,disabled:C,TouchRippleProps:{className:g.touchRipple},className:Oe(g.root,i),ref:o,ownerState:_,"aria-current":h?"step":void 0},b,{children:A}))}),mr=ur,hr=Bt(zt),le=["Select campaign settings","Create an ad group","Create an ad"];function fr(){const[e,t]=R.useState(0),[o,n]=R.useState(new Set),a=h=>h===1,i=h=>o.has(h),p=()=>{let h=o;i(e)&&(h=new Set(h.values()),h.delete(e)),t(S=>S+1),n(h)},u=()=>{t(h=>h-1)},b=()=>{if(!a(e))throw new Error("You can't skip a step that isn't optional.");t(h=>h+1),n(h=>{const S=new Set(h.values());return S.add(e),S})},C=()=>{t(0)};return v(N,{sx:{width:"100%"},children:[r(D,{activeStep:e,children:le.map((h,S)=>{const _={},g={};return a(S)&&(g.optional=r(d,{variant:"caption",children:"Optional"})),i(S)&&(_.completed=!1),r(K,{..._,children:r(W,{...g,children:h})},h)})}),e===le.length?v(R.Fragment,{children:[r(d,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),v(N,{sx:{display:"flex",flexDirection:"row",pt:2},children:[r(N,{sx:{flex:"1 1 auto"}}),r(I,{onClick:C,children:"Reset"})]})]}):v(R.Fragment,{children:[v(d,{sx:{mt:2,mb:1},children:["Step ",e+1]}),v(N,{sx:{display:"flex",flexDirection:"row",pt:2},children:[r(I,{color:"inherit",disabled:e===0,onClick:u,sx:{mr:1},children:"Back"}),r(N,{sx:{flex:"1 1 auto"}}),a(e)&&r(I,{color:"inherit",onClick:b,sx:{mr:1},children:"Skip"}),r(I,{onClick:p,children:e===le.length-1?"Finish":"Next"})]})]})]})}const vr=`import * as React from 'react';
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
`,Q=["Select campaign settings","Create an ad group","Create an ad"];function br(){const[e,t]=R.useState(0),[o,n]=R.useState({}),a=()=>Q.length,i=()=>Object.keys(o).length,p=()=>e===a()-1,u=()=>i()===a(),b=()=>{const g=p()&&!u()?Q.findIndex((B,A)=>!(A in o)):e+1;t(g)},C=()=>{t(g=>g-1)},h=g=>()=>{t(g)},S=()=>{const g=o;g[e]=!0,n(g),b()},_=()=>{t(0),n({})};return v(N,{sx:{width:"100%"},children:[r(D,{nonLinear:!0,activeStep:e,children:Q.map((g,B)=>r(K,{completed:o[B],children:r(mr,{color:"inherit",onClick:h(B),children:g})},g))}),r("div",{children:u()?v(R.Fragment,{children:[r(d,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),v(N,{sx:{display:"flex",flexDirection:"row",pt:2},children:[r(N,{sx:{flex:"1 1 auto"}}),r(I,{onClick:_,children:"Reset"})]})]}):v(R.Fragment,{children:[v(d,{sx:{mt:2,mb:1,py:1},children:["Step ",e+1]}),v(N,{sx:{display:"flex",flexDirection:"row",pt:2},children:[r(I,{color:"inherit",disabled:e===0,onClick:C,sx:{mr:1},children:"Back"}),r(N,{sx:{flex:"1 1 auto"}}),r(I,{onClick:b,sx:{mr:1},children:"Next"}),e!==Q.length&&(o[e]?v(d,{variant:"caption",sx:{display:"inline-block"},children:["Step ",e+1," already completed"]}):r(I,{onClick:S,children:i()===a()-1?"Finish":"Complete Step"}))]})]})})]})}const Sr=`import * as React from 'react';
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
`,xr=["Select master blaster campaign settings","Create an ad group","Create an ad"];function gr(){return r(N,{sx:{width:"100%"},children:r(D,{activeStep:1,alternativeLabel:!0,children:xr.map(e=>r(K,{children:r(W,{children:e})},e))})})}const yr=`import * as React from 'react';
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
`,wr=["Select campaign settings","Create an ad group","Create an ad"];function Cr(){const e=t=>t===1;return r(N,{sx:{width:"100%"},children:r(D,{activeStep:1,children:wr.map((t,o)=>{const n={};return e(o)&&(n.optional=r(d,{variant:"caption",color:"error",children:"Alert message"}),n.error=!0),r(K,{children:r(W,{...n,children:t})},t)})})})}const kr=`import * as React from 'react';
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
`;var Me={},_r=It;Object.defineProperty(Me,"__esModule",{value:!0});var Lt=Me.default=void 0,Pr=_r(At()),Rr=$;Lt=Me.default=(0,Pr.default)((0,Rr.jsx)("path",{d:"M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m4.51-8.95C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95m4.02 9.78C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17"}),"GroupAdd");var qe={},Br=It;Object.defineProperty(qe,"__esModule",{value:!0});var Ot=qe.default=void 0,Ar=Br(At()),Ir=$;Ot=qe.default=(0,Ar.default)((0,Ir.jsx)("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 13H3V5h18z"}),"VideoLabel");const Nr=j(Nt)(({theme:e})=>({[`&.${O.alternativeLabel}`]:{top:10,left:"calc(-50% + 16px)",right:"calc(50% + 16px)"},[`&.${O.active}`]:{[`& .${O.line}`]:{borderColor:"#784af4"}},[`&.${O.completed}`]:{[`& .${O.line}`]:{borderColor:"#784af4"}},[`& .${O.line}`]:{borderColor:e.palette.mode==="dark"?e.palette.grey[800]:"#eaeaf0",borderTopWidth:3,borderRadius:1}})),Lr=j("div")(({theme:e,ownerState:t})=>({color:e.palette.mode==="dark"?e.palette.grey[700]:"#eaeaf0",display:"flex",height:22,alignItems:"center",...t.active&&{color:"#784af4"},"& .QontoStepIcon-completedIcon":{color:"#784af4",zIndex:1,fontSize:18},"& .QontoStepIcon-circle":{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}}));function Or(e){const{active:t,completed:o,className:n}=e;return r(Lr,{ownerState:{active:t},className:n,children:o?r(Qt,{className:"QontoStepIcon-completedIcon"}):r("div",{className:"QontoStepIcon-circle"})})}const Tr=j(Nt)(({theme:e})=>({[`&.${O.alternativeLabel}`]:{top:22},[`&.${O.active}`]:{[`& .${O.line}`]:{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}},[`&.${O.completed}`]:{[`& .${O.line}`]:{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}},[`& .${O.line}`]:{height:3,border:0,backgroundColor:e.palette.mode==="dark"?e.palette.grey[800]:"#eaeaf0",borderRadius:1}})),Mr=j("div")(({theme:e,ownerState:t})=>({backgroundColor:e.palette.mode==="dark"?e.palette.grey[700]:"#ccc",zIndex:1,color:"#fff",width:50,height:50,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center",...t.active&&{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)"},...t.completed&&{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"}}));function qr(e){const{active:t,completed:o,className:n}=e;return r(Mr,{ownerState:{completed:o,active:t},className:n,children:{1:r(Yt,{}),2:r(Lt,{}),3:r(Ot,{})}[String(e.icon)]})}const Ue=["Select campaign settings","Create an ad group","Create an ad"];function $r(){return v(Et,{sx:{width:"100%"},spacing:4,children:[r(D,{alternativeLabel:!0,activeStep:1,connector:r(Nr,{}),children:Ue.map(e=>r(K,{children:r(W,{StepIconComponent:Or,children:e})},e))}),r(D,{alternativeLabel:!0,activeStep:1,connector:r(Tr,{}),children:Ue.map(e=>r(K,{children:r(W,{StepIconComponent:qr,children:e})},e))})]})}const jr=`import * as React from 'react';
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
`,ce=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}];function zr(){const[e,t]=R.useState(0),o=()=>{t(i=>i+1)},n=()=>{t(i=>i-1)},a=()=>{t(0)};return v(N,{sx:{maxWidth:400},children:[r(D,{activeStep:e,orientation:"vertical",children:ce.map((i,p)=>v(K,{children:[r(W,{optional:p===2?r(d,{variant:"caption",children:"Last step"}):null,children:i.label}),v(Gt,{children:[r(d,{children:i.description}),r(N,{sx:{mb:2},children:v("div",{children:[r(I,{variant:"contained",onClick:o,sx:{mt:1,mr:1},children:p===ce.length-1?"Finish":"Continue"}),r(I,{disabled:p===0,onClick:n,sx:{mt:1,mr:1},children:"Back"})]})})]})]},i.label))}),e===ce.length&&v(ne,{square:!0,elevation:0,sx:{p:3},children:[r(d,{children:"All steps completed - you're finished"}),r(I,{onClick:a,sx:{mt:1,mr:1},children:"Reset"})]})]})}const Er=`import * as React from 'react';
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
`,de=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}];function Wr(){const e=oe(),[t,o]=R.useState(0),n=de.length,a=()=>{o(p=>p+1)},i=()=>{o(p=>p-1)};return v(N,{sx:{maxWidth:400,flexGrow:1},children:[r(ne,{square:!0,elevation:0,sx:{display:"flex",alignItems:"center",height:50,pl:2,bgcolor:"background.default"},children:r(d,{children:de[t].label})}),r(N,{sx:{height:255,maxWidth:400,width:"100%",p:2},children:de[t].description}),r(ie,{variant:"text",steps:n,position:"static",activeStep:t,nextButton:v(I,{size:"small",onClick:a,disabled:t===n-1,children:["Next",e.direction==="rtl"?r(z,{}):r(E,{})]}),backButton:v(I,{size:"small",onClick:i,disabled:t===0,children:[e.direction==="rtl"?r(E,{}):r(z,{}),"Back"]})})]})}const Kr=`import * as React from 'react';
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
`;var Tt={};function Dr(e){return e&&e.__esModule?e:{default:e}}var se=Dr,Y={},X,He;function $e(){if(He)return X;He=1;function e(){return X=e=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},e.apply(this,arguments)}return X=e,X}var ue,Ge;function Fr(){if(Ge)return ue;Ge=1;function e(t,o){if(t==null)return{};var n={},a=Object.keys(t),i,p;for(p=0;p<a.length;p++)i=a[p],!(o.indexOf(i)>=0)&&(n[i]=t[i]);return n}return ue=e,ue}var me,Qe;function je(){if(Qe)return me;Qe=1;var e=Fr();function t(o,n){if(o==null)return{};var a=e(o,n),i,p;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(o);for(p=0;p<u.length;p++)i=u[p],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(o,i)&&(a[i]=o[i])}return a}return me=t,me}var he,Ye;function ze(){if(Ye)return he;Ye=1;function e(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}return he=e,he}var fe,Xe;function Ee(){if(Xe)return fe;Xe=1;function e(o,n){for(var a=0;a<n.length;a++){var i=n[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,i.key,i)}}function t(o,n,a){return n&&e(o.prototype,n),a&&e(o,a),o}return fe=t,fe}var U,Ze;function Vr(){if(Ze)return U;Ze=1;function e(o){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(a){return typeof a}:e=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},e(o)}function t(o){return typeof Symbol=="function"&&e(Symbol.iterator)==="symbol"?U=t=function(a){return e(a)}:U=t=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":e(a)},t(o)}return U=t,U}var ve,Je;function Ur(){if(Je)return ve;Je=1;function e(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}return ve=e,ve}var be,et;function We(){if(et)return be;et=1;var e=Vr(),t=Ur();function o(n,a){return a&&(e(a)==="object"||typeof a=="function")?a:t(n)}return be=o,be}var Z,tt;function Ke(){if(tt)return Z;tt=1;function e(t){return Z=e=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},e(t)}return Z=e,Z}var J,rt;function Hr(){if(rt)return J;rt=1;function e(t,o){return J=e=Object.setPrototypeOf||function(a,i){return a.__proto__=i,a},e(t,o)}return J=e,J}var Se,nt;function De(){if(nt)return Se;nt=1;var e=Hr();function t(o,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(n&&n.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),n&&e(o,n)}return Se=t,Se}function Gr(e,t){if(e===t)return!0;if(!e||!t)return!1;var o=Object.keys(e),n=Object.keys(t),a=o.length;if(n.length!==a)return!1;for(var i=0;i<a;i++){var p=o[i];if(e[p]!==t[p]||!Object.prototype.hasOwnProperty.call(t,p))return!1}return!0}function Qr(e,t){if(e===t)return!0;if(!e||!t)return!1;var o=e.length;if(t.length!==o)return!1;for(var n=0;n<o;n++)if(e[n]!==t[n])return!1;return!0}const Yr=Object.freeze(Object.defineProperty({__proto__:null,shallowEqualArrays:Qr,shallowEqualObjects:Gr},Symbol.toStringTag,{value:"Module"})),Xr=Bt(Yr);var H={},xe={exports:{}},ot;function Zr(){return ot||(ot=1,function(e){function t(o,n){if(!(o instanceof n))throw new TypeError("Cannot call a class as a function")}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(xe)),xe.exports}var ge={exports:{}},ye={exports:{}},we={exports:{}},at;function pe(){return at||(at=1,function(e){function t(o){"@babel/helpers - typeof";return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(we)),we.exports}var Ce={exports:{}},it;function Jr(){return it||(it=1,function(e){var t=pe().default;function o(n,a){if(t(n)!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var p=i.call(n,a||"default");if(t(p)!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}(Ce)),Ce.exports}var st;function en(){return st||(st=1,function(e){var t=pe().default,o=Jr();function n(a){var i=o(a,"string");return t(i)=="symbol"?i:i+""}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports}(ye)),ye.exports}var pt;function tn(){return pt||(pt=1,function(e){var t=en();function o(a,i){for(var p=0;p<i.length;p++){var u=i[p];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(a,t(u.key),u)}}function n(a,i,p){return i&&o(a.prototype,i),p&&o(a,p),Object.defineProperty(a,"prototype",{writable:!1}),a}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports}(ge)),ge.exports}var ke={exports:{}},_e={exports:{}},lt;function rn(){return lt||(lt=1,function(e){function t(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(_e)),_e.exports}var ct;function nn(){return ct||(ct=1,function(e){var t=pe().default,o=rn();function n(a,i){if(i&&(t(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return o(a)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports}(ke)),ke.exports}var Pe={exports:{}},dt;function on(){return dt||(dt=1,function(e){function t(o){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(Pe)),Pe.exports}var Re={exports:{}},Be={exports:{}},ut;function an(){return ut||(ut=1,function(e){function t(o,n){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,p){return i.__proto__=p,i},e.exports.__esModule=!0,e.exports.default=e.exports,t(o,n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(Be)),Be.exports}var mt;function sn(){return mt||(mt=1,function(e){var t=an();function o(n,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),a&&t(n,a)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}(Re)),Re.exports}var Ae={exports:{}},Ie={exports:{}},ht;function pn(){return ht||(ht=1,function(e){function t(o,n){if(o==null)return{};var a={},i=Object.keys(o),p,u;for(u=0;u<i.length;u++)p=i[u],!(n.indexOf(p)>=0)&&(a[p]=o[p]);return a}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(Ie)),Ie.exports}var ft;function ln(){return ft||(ft=1,function(e){var t=pn();function o(n,a){if(n==null)return{};var i=t(n,a),p,u;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(n);for(u=0;u<b.length;u++)p=b[u],!(a.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(n,p)&&(i[p]=n[p])}return i}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}(Ae)),Ae.exports}var vt;function Mt(){if(vt)return H;vt=1,Object.defineProperty(H,"__esModule",{value:!0});function e(l){return l&&typeof l=="object"&&"default"in l?l.default:l}var t=e(Zr()),o=e(tn()),n=e(nn()),a=e(on()),i=e(sn()),p=e(pe()),u=e(ln()),b=e(hr),C=e(R);e(ae),e(Wt());function h(l,f,y){return Object.defineProperty(l,f,y)}var S=function(){var l=null;return function(){if(l!==null)return l;var f=!1;try{window.addEventListener("test",null,h({},"passive",{get:function(){f=!0}}))}catch{}return l=f,f}()}(),_={capture:!1,passive:!1};function g(l){return b({},_,l)}function B(l,f,y){var x=[l,f];return x.push(S?y:y.capture),x}function A(l,f,y,x){l.addEventListener.apply(l,B(f,y,x))}function k(l,f,y,x){l.removeEventListener.apply(l,B(f,y,x))}function c(l,f){l.children,l.target;var y=u(l,["children","target"]);Object.keys(y).forEach(function(x){if(x.substring(0,2)==="on"){var P=y[x],w=p(P),L=w==="object",G=w==="function";if(!(!L&&!G)){var V=x.substr(-7).toLowerCase()==="capture",q=x.substring(2).toLowerCase();q=V?q.substring(0,q.length-7):q,L?f(q,P.handler,P.options):f(q,P,g({capture:V}))}}})}function s(l,f){return{handler:l,options:g(f)}}var m=function(l){i(f,l);function f(){return t(this,f),n(this,a(f).apply(this,arguments))}return o(f,[{key:"componentDidMount",value:function(){this.applyListeners(A)}},{key:"componentDidUpdate",value:function(x){this.applyListeners(k,x),this.applyListeners(A)}},{key:"componentWillUnmount",value:function(){this.applyListeners(k)}},{key:"applyListeners",value:function(x){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.props,w=P.target;if(w){var L=w;typeof w=="string"&&(L=window[w]),c(P,x.bind(null,L))}}},{key:"render",value:function(){return this.props.children||null}}]),f}(C.PureComponent);return m.propTypes={},H.withOptions=s,H.default=m,H}var bt;function cn(){if(bt)return Y;bt=1;var e=se;Object.defineProperty(Y,"__esModule",{value:!0}),Y.default=_;var t=e($e()),o=e(je()),n=e(ze()),a=e(Ee()),i=e(We()),p=e(Ke()),u=e(De()),b=e(R);e(ae);var C=Xr,h=e(Mt()),S=Te();function _(g){var B=function(A){(0,u.default)(k,A);function k(c){var s;return(0,n.default)(this,k),s=(0,i.default)(this,(0,p.default)(k).call(this,c)),s.timer=null,s.state={},s.handleInterval=function(){var m=s.props,l=m.children,f=m.direction,y=m.onChangeIndex,x=m.slideCount,P=s.state.index,w=P;f==="incremental"?w+=1:w-=1,(x||l)&&(w=(0,S.mod)(w,x||b.default.Children.count(l))),s.props.index===void 0&&s.setState({index:w}),y&&y(w,P)},s.handleChangeIndex=function(m,l,f){s.props.index===void 0&&s.setState({index:m}),s.props.onChangeIndex&&s.props.onChangeIndex(m,l,f)},s.handleSwitching=function(m,l){s.timer?(clearInterval(s.timer),s.timer=null):l==="end"&&s.startInterval(),s.props.onSwitching&&s.props.onSwitching(m,l)},s.handleVisibilityChange=function(m){m.target.hidden?clearInterval(s.timer):s.startInterval()},s.state.index=c.index||0,s}return(0,a.default)(k,[{key:"componentDidMount",value:function(){this.startInterval()}},{key:"UNSAFE_componentWillReceiveProps",value:function(s){var m=s.index;typeof m=="number"&&m!==this.props.index&&this.setState({index:m})}},{key:"componentDidUpdate",value:function(s){var m=!(0,C.shallowEqualObjects)({index:s.index,interval:s.interval,autoplay:s.autoplay},{index:this.props.index,interval:this.props.interval,autoplay:this.props.autoplay});m&&this.startInterval()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"startInterval",value:function(){var s=this.props,m=s.autoplay,l=s.interval;clearInterval(this.timer),m&&(this.timer=setInterval(this.handleInterval,l))}},{key:"render",value:function(){var s=this.props,m=s.autoplay;s.direction,s.index,s.interval;var l=s.onChangeIndex,f=(0,o.default)(s,["autoplay","direction","index","interval","onChangeIndex"]),y=this.state.index;return m?b.default.createElement(h.default,{target:"document",onVisibilityChange:this.handleVisibilityChange},b.default.createElement(g,(0,t.default)({index:y,onChangeIndex:this.handleChangeIndex,onSwitching:this.handleSwitching},f))):b.default.createElement(g,(0,t.default)({index:y,onChangeIndex:l},f))}}]),k}(b.default.Component);return B.propTypes={},B.defaultProps={autoplay:!0,direction:"incremental",interval:3e3},B}return Y}var ee={},te={exports:{}},St;function dn(){return St||(St=1,function(e,t){function o(b){if(b&&typeof b=="object"){var C=b.which||b.keyCode||b.charCode;C&&(b=C)}if(typeof b=="number")return p[b];var h=String(b),S=n[h.toLowerCase()];if(S)return S;var S=a[h.toLowerCase()];if(S)return S;if(h.length===1)return h.charCodeAt(0)}o.isEventKey=function(C,h){if(C&&typeof C=="object"){var S=C.which||C.keyCode||C.charCode;if(S==null)return!1;if(typeof h=="string"){var _=n[h.toLowerCase()];if(_)return _===S;var _=a[h.toLowerCase()];if(_)return _===S}else if(typeof h=="number")return h===S;return!1}},t=e.exports=o;var n=t.code=t.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},a=t.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};/*!
 * Programatically add the following
 */for(i=97;i<123;i++)n[String.fromCharCode(i)]=i-32;for(var i=48;i<58;i++)n[i-48]=i;for(i=1;i<13;i++)n["f"+i]=i+111;for(i=0;i<10;i++)n["numpad "+i]=i+96;var p=t.names=t.title={};for(i in n)p[n[i]]=i;for(var u in a)n[u]=a[u]}(te,te.exports)),te.exports}var xt;function un(){if(xt)return ee;xt=1;var e=se;Object.defineProperty(ee,"__esModule",{value:!0}),ee.default=_;var t=e($e()),o=e(je()),n=e(ze()),a=e(Ee()),i=e(We()),p=e(Ke()),u=e(De()),b=e(R);e(ae);var C=e(dn()),h=e(Mt()),S=Te();function _(g){var B=function(A){(0,u.default)(k,A);function k(){var c,s;(0,n.default)(this,k);for(var m=arguments.length,l=new Array(m),f=0;f<m;f++)l[f]=arguments[f];return s=(0,i.default)(this,(c=(0,p.default)(k)).call.apply(c,[this].concat(l))),s.state={},s.handleKeyDown=function(y){var x,P=s.props,w=P.axis,L=w===void 0?"x":w,G=P.children,V=P.onChangeIndex,q=P.slideCount;switch((0,C.default)(y)){case"page down":case"down":L==="y"?x="decrease":L==="y-reverse"&&(x="increase");break;case"left":L==="x"?x="decrease":L==="x-reverse"&&(x="increase");break;case"page up":case"up":L==="y"?x="increase":L==="y-reverse"&&(x="decrease");break;case"right":L==="x"?x="increase":L==="x-reverse"&&(x="decrease");break}if(x){var Fe=s.state.index,F=Fe;x==="increase"?F+=1:F-=1,(q||G)&&(F=(0,S.mod)(F,q||b.default.Children.count(G))),s.props.index===void 0&&s.setState({index:F}),V&&V(F,Fe)}},s.handleChangeIndex=function(y,x,P){s.props.index===void 0&&s.setState({index:y}),s.props.onChangeIndex&&s.props.onChangeIndex(y,x,P)},s}return(0,a.default)(k,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({index:this.props.index||0})}},{key:"UNSAFE_componentWillReceiveProps",value:function(s){var m=s.index;typeof m=="number"&&m!==this.props.index&&this.setState({index:m})}},{key:"render",value:function(){var s=this.props;s.index,s.onChangeIndex;var m=(0,o.default)(s,["index","onChangeIndex"]),l=this.state.index;return b.default.createElement(h.default,{target:"window",onKeyDown:this.handleKeyDown},b.default.createElement(g,(0,t.default)({index:l,onChangeIndex:this.handleChangeIndex},m)))}}]),k}(b.default.Component);return B.propTypes={},B}return ee}var re={},Ne,gt;function mn(){if(gt)return Ne;gt=1;function e(t){if(t&&t.__esModule)return t;var o={};if(t!=null){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};a.get||a.set?Object.defineProperty(o,n,a):o[n]=t[n]}}return o.default=t,o}return Ne=e,Ne}var yt;function hn(){if(yt)return re;yt=1;var e=mn(),t=se;Object.defineProperty(re,"__esModule",{value:!0}),re.default=S;var o=t($e()),n=t(je()),a=t(ze()),i=t(Ee()),p=t(We()),u=t(Ke()),b=t(De()),C=e(R);t(ae);var h=Te();function S(_){var g=function(B){(0,b.default)(A,B);function A(k){var c;return(0,a.default)(this,A),c=(0,p.default)(this,(0,u.default)(A).call(this,k)),c.timer=null,c.state={},c.handleChangeIndex=function(s,m,l){var f=c.props,y=f.slideCount,x=f.onChangeIndex,P=s-m,w=c.state.index+P;y&&(w=(0,h.mod)(w,y)),c.props.index===void 0&&c.setIndex(w,s,P),x&&x(w,c.state.index,l)},c.handleTransitionEnd=function(){c.timer=setTimeout(function(){c.setWindow()},0),c.props.onTransitionEnd&&c.props.onTransitionEnd()},c.state.index=k.index||0,c}return(0,i.default)(A,[{key:"UNSAFE_componentWillMount",value:function(){this.setWindow(this.state.index)}},{key:"UNSAFE_componentWillReceiveProps",value:function(c){var s=c.index;if(typeof s=="number"&&s!==this.props.index){var m=s-this.props.index;this.setIndex(s,this.state.indexContainer+m,m)}}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"setIndex",value:function(c,s,m){var l={index:c,indexContainer:s,indexStart:this.state.indexStart,indexStop:this.state.indexStop};m>0&&(!this.props.slideCount||l.indexStop<this.props.slideCount-1)&&(l.indexStop+=1),c>l.indexStop&&(l.indexStop=c);var f=l.indexStart-c;f>0&&(l.indexContainer+=f,l.indexStart-=f),this.setState(l)}},{key:"setWindow",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.state.index,s=this.props.slideCount,m=this.props.overscanSlideBefore,l=this.props.overscanSlideAfter;s&&(m>c&&(m=c),l+c>s-1&&(l=s-c-1)),this.setState({indexContainer:m,indexStart:c-m,indexStop:c+l})}},{key:"render",value:function(){var c=this.props;c.children,c.index,c.onChangeIndex,c.onTransitionEnd,c.overscanSlideAfter,c.overscanSlideBefore,c.slideCount;for(var s=c.slideRenderer,m=(0,n.default)(c,["children","index","onChangeIndex","onTransitionEnd","overscanSlideAfter","overscanSlideBefore","slideCount","slideRenderer"]),l=this.state,f=l.indexContainer,y=l.indexStart,x=l.indexStop,P=[],w=y;w<=x;w+=1)P.push(s({index:w,key:w}));return C.default.createElement(_,(0,o.default)({index:f,onChangeIndex:this.handleChangeIndex,onTransitionEnd:this.handleTransitionEnd},m),P)}}]),A}(C.PureComponent);return g.propTypes={},g.defaultProps={overscanSlideAfter:2,overscanSlideBefore:3},g}return re}(function(e){var t=se;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"autoPlay",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"bindKeyboard",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"virtualize",{enumerable:!0,get:function(){return a.default}});var o=t(cn()),n=t(un()),a=t(hn())})(Tt);const fn=Tt.autoPlay(Zt),Le=[{label:"San Francisco – Oakland Bay Bridge, United States",imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bird",imgPath:"https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bali, Indonesia",imgPath:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250"},{label:"Goč, Serbia",imgPath:"https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"}];function vn(){const e=oe(),[t,o]=R.useState(0),n=Le.length,a=()=>{o(u=>u+1)},i=()=>{o(u=>u-1)},p=u=>{o(u)};return v(N,{sx:{maxWidth:400,flexGrow:1},children:[r(ne,{square:!0,elevation:0,sx:{display:"flex",alignItems:"center",height:50,pl:2,bgcolor:"background.default"},children:r(d,{children:Le[t].label})}),r(fn,{axis:e.direction==="rtl"?"x-reverse":"x",index:t,onChangeIndex:p,enableMouseEvents:!0,children:Le.map((u,b)=>r("div",{children:Math.abs(t-b)<=2?r(N,{component:"img",sx:{height:255,display:"block",maxWidth:400,overflow:"hidden",width:"100%"},src:u.imgPath,alt:u.label}):null},u.label))}),r(ie,{steps:n,position:"static",activeStep:t,nextButton:v(I,{size:"small",onClick:a,disabled:t===n-1,children:["Next",e.direction==="rtl"?r(z,{}):r(E,{})]}),backButton:v(I,{size:"small",onClick:i,disabled:t===0,children:[e.direction==="rtl"?r(E,{}):r(z,{}),"Back"]})})]})}const bn=`import * as React from 'react';
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
`;function Sn(){const e=oe(),[t,o]=R.useState(0),n=()=>{o(i=>i+1)},a=()=>{o(i=>i-1)};return r(ie,{variant:"dots",steps:6,position:"static",activeStep:t,sx:{maxWidth:400,flexGrow:1},nextButton:v(I,{size:"small",onClick:n,disabled:t===5,children:["Next",e.direction==="rtl"?r(z,{}):r(E,{})]}),backButton:v(I,{size:"small",onClick:a,disabled:t===0,children:[e.direction==="rtl"?r(E,{}):r(z,{}),"Back"]})})}const xn=`import * as React from 'react';
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
`;function gn(){const e=oe(),[t,o]=R.useState(0),n=()=>{o(i=>i+1)},a=()=>{o(i=>i-1)};return r(ie,{variant:"progress",steps:6,position:"static",activeStep:t,sx:{maxWidth:400,flexGrow:1},nextButton:v(I,{size:"small",onClick:n,disabled:t===5,children:["Next",e.direction==="rtl"?r(z,{}):r(E,{})]}),backButton:v(I,{size:"small",onClick:a,disabled:t===0,children:[e.direction==="rtl"?r(E,{}):r(z,{}),"Back"]})})}const yn=`import * as React from 'react';
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
`;function On(e){return v(Ft,{children:[v("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[r(Vt,{}),r(I,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/steppers",target:"_blank",role:"button",size:"small",startIcon:r(Kt,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),r(d,{className:"text-32 my-16 font-700",component:"h1",children:"Stepper"}),r(d,{className:"description",children:"Steppers convey progress through numbered steps. It provides a wizard-like workflow."}),r(d,{className:"text-14 mb-32",component:"div",children:"Steppers display progress through a sequence of logical and numbered steps. They may also be used for navigation. Steppers may display a transient feedback message after a step is saved."}),v("ul",{className:"space-y-16",children:[v("li",{children:[r("strong",{children:"Types of Steps"}),": Editable, Non-editable, Mobile, Optional"]}),v("li",{children:[r("strong",{children:"Types of Steppers"}),": Horizontal, Vertical, Linear, Non-linear"]})]}),r("div",{className:"border border-1 p-16 rounded-16 my-12",children:v(d,{className:"text-14 mb-32",component:"div",children:["This component is no longer documented in the ",r("a",{href:"https://m2.material.io/",children:"Material Design guidelines"}),", but Material UI will continue to support it."]})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Horizontal stepper"}),r(d,{className:"text-14 mb-32",component:"div",children:"Horizontal steppers are ideal when the contents of one step depend on an earlier step."}),r(d,{className:"text-14 mb-32",component:"div",children:"Avoid using long step names in horizontal steppers."}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Linear"}),r(d,{className:"text-14 mb-32",component:"div",children:"A linear stepper allows the user to complete the steps in sequence."}),v(d,{className:"text-14 mb-32",component:"div",children:["The ",r("code",{children:"Stepper"})," can be controlled by passing the current step index (zero-based) as the ",r("code",{children:"activeStep"})," prop. ",r("code",{children:"Stepper"})," orientation is set using the ",r("code",{children:"orientation"})," prop."]}),v(d,{className:"text-14 mb-32",component:"div",children:["This example also shows the use of an optional step by placing the ",r("code",{children:"optional"})," prop on the second ",r("code",{children:"Step"})," component. Note that it's up to you to manage when an optional step is skipped. Once you've determined this for a particular step you must set ",r("code",{children:"completed={false}"})," to signify that even though the active step index has gone beyond the optional step, it's not actually complete."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"HorizontalLinearStepper.js",className:"my-16",iframe:!1,component:fr,raw:vr})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Non-linear"}),r(d,{className:"text-14 mb-32",component:"div",children:"Non-linear steppers allow the user to enter a multi-step flow at any point."}),v(d,{className:"text-14 mb-32",component:"div",children:["This example is similar to the regular horizontal stepper, except steps are no longer automatically set to ",r("code",{children:"disabled={true}"})," based on the ",r("code",{children:"activeStep"})," prop."]}),v(d,{className:"text-14 mb-32",component:"div",children:["The use of the ",r("code",{children:"StepButton"})," here demonstrates clickable step labels, as well as setting the ",r("code",{children:"completed"}),"flag. However because steps can be accessed in a non-linear fashion, it's up to your own implementation to determine when all steps are completed (or even if they need to be completed)."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"HorizontalNonLinearStepper.js",className:"my-16",iframe:!1,component:br,raw:Sr})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Alternative label"}),v(d,{className:"text-14 mb-32",component:"div",children:["Labels can be placed below the step icon by setting the ",r("code",{children:"alternativeLabel"})," prop on the ",r("code",{children:"Stepper"})," component."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"HorizontalLinearAlternativeLabelStepper.js",className:"my-16",iframe:!1,component:gr,raw:yr})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Error step"}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"HorizontalStepperWithError.js",className:"my-16",iframe:!1,component:Cr,raw:kr})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Customized horizontal stepper"}),v(d,{className:"text-14 mb-32",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the ",r("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"CustomizedSteppers.js",className:"my-16",iframe:!1,component:$r,raw:jr})}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Vertical stepper"}),r(d,{className:"text-14 mb-32",component:"div",children:"Vertical steppers are designed for narrow screen sizes. They are ideal for mobile. All the features of the horizontal stepper can be implemented."}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"VerticalLinearStepper.js",className:"my-16",iframe:!1,component:zr,raw:Er})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Performance"}),r(d,{className:"text-14 mb-32",component:"div",children:"The content of a step is unmounted when closed. If you need to make the content available to search engines or render expensive component trees inside your modal while optimizing for interaction responsiveness it might be a good idea to keep the step mounted with:"}),r(Dt,{component:"pre",className:"language-jsx",children:` 
<StepContent TransitionProps={{ unmountOnExit: false }} />
`}),r(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Mobile stepper"}),v(d,{className:"text-14 mb-32",component:"div",children:["This component implements a compact stepper suitable for a mobile device. It has more limited functionality than the vertical stepper. See ",r("a",{href:"https://m1.material.io/components/steppers.html#steppers-types-of-steps",children:"mobile steps"})," for its inspiration."]}),r(d,{className:"text-14 mb-32",component:"div",children:"The mobile stepper supports three variants to display progress through the available steps: text, dots, and progress."}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Text"}),r(d,{className:"text-14 mb-32",component:"div",children:"The current step and total number of steps are displayed as text."}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"TextMobileStepper.js",className:"my-16",iframe:!1,component:Wr,raw:Kr})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Text with carousel effect"}),v(d,{className:"text-14 mb-32",component:"div",children:["This demo uses",r("a",{href:"https://github.com/oliviertassinari/react-swipeable-views",children:"react-swipeable-views"})," to create a carousel."]}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"SwipeableTextMobileStepper.js",className:"my-16",iframe:!1,component:vn,raw:bn})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Dots"}),r(d,{className:"text-14 mb-32",component:"div",children:"Use dots when the number of steps is small."}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"DotsMobileStepper.js",className:"my-16",iframe:!1,component:Sn,raw:xn})}),r(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Progress"}),r(d,{className:"text-14 mb-32",component:"div",children:"Use a progress bar when there are many steps, or if there are steps that need to be inserted during the process (based on responses to earlier steps)."}),r(d,{className:"text-14 mb-32",component:"div",children:r(M,{name:"ProgressMobileStepper.js",className:"my-16",iframe:!1,component:gn,raw:yn})})]})}export{On as default};
