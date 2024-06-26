import{j as e,B as c,d as n,c3 as v,r as o,v as h,o as g,T as r,s as P,c5 as b,h as L,d3 as x,aH as B}from"./index-DRLfVU3l.js";import{F as m}from"./FuseExample-Cx3XkWxA.js";import{D as w}from"./DocumentationPageBreadcrumb-Crdbj16m.js";import{C as l,c as k}from"./CircularProgress-RKOTeLVw.js";import{d as R}from"./Check-BXE3mqSB.js";import{d as N}from"./Save-BOVLzIaI.js";import{F as S}from"./Fab-BM3phWqK.js";import{L as p,l as y}from"./LinearProgress-Ch07amLN.js";import"./DocumentationNavigation-CLDPTxiN.js";import"./ChangelogDoc-CU400Rcv.js";function I(){return e(c,{sx:{display:"flex"},children:e(l,{})})}const T=`import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
`;function E(){return n(v,{sx:{color:"grey.500"},spacing:2,direction:"row",children:[e(l,{color:"secondary"}),e(l,{color:"success"}),e(l,{color:"inherit"})]})}const F=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}
`;function D(){const[t,s]=o.useState(0);return o.useEffect(()=>{const i=setInterval(()=>{s(a=>a>=100?0:a+10)},800);return()=>{clearInterval(i)}},[]),n(v,{spacing:2,direction:"row",children:[e(l,{variant:"determinate",value:25}),e(l,{variant:"determinate",value:50}),e(l,{variant:"determinate",value:75}),e(l,{variant:"determinate",value:100}),e(l,{variant:"determinate",value:t})]})}const M=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack spacing={2} direction="row">
      <CircularProgress variant="determinate" value={25} />
      <CircularProgress variant="determinate" value={50} />
      <CircularProgress variant="determinate" value={75} />
      <CircularProgress variant="determinate" value={100} />
      <CircularProgress variant="determinate" value={progress} />
    </Stack>
  );
}
`;function z(){const[t,s]=o.useState(!1),[i,a]=o.useState(!1),u=o.useRef(),d={...i&&{bgcolor:h[500],"&:hover":{bgcolor:h[700]}}};o.useEffect(()=>()=>{clearTimeout(u.current)},[]);const f=()=>{t||(a(!1),s(!0),u.current=window.setTimeout(()=>{a(!0),s(!1)},2e3))};return n(c,{sx:{display:"flex",alignItems:"center"},children:[n(c,{sx:{m:1,position:"relative"},children:[e(S,{"aria-label":"save",color:"primary",sx:d,onClick:f,children:i?e(R,{}):e(N,{})}),t&&e(l,{size:68,sx:{color:h[500],position:"absolute",top:-6,left:-6,zIndex:1}})]}),n(c,{sx:{m:1,position:"relative"},children:[e(g,{variant:"contained",sx:d,disabled:t,onClick:f,children:"Accept terms"}),t&&e(l,{size:24,sx:{color:h[500],position:"absolute",top:"50%",left:"50%",marginTop:"-12px",marginLeft:"-12px"}})]})]})}const j=`import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';

export default function CircularIntegration() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef<number>();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Accept terms
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
  );
}
`;function W(t){return n(c,{sx:{position:"relative",display:"inline-flex"},children:[e(l,{variant:"determinate",...t}),e(c,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:e(r,{variant:"caption",component:"div",color:"text.secondary",children:`${Math.round(t.value)}%`})})]})}function $(){const[t,s]=o.useState(10);return o.useEffect(()=>{const i=setInterval(()=>{s(a=>a>=100?0:a+10)},800);return()=>{clearInterval(i)}},[]),e(W,{value:t})}const q=`import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{\`\${Math.round(props.value)}%\`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
`;function A(){return e(c,{sx:{width:"100%"},children:e(p,{})})}const Q=`import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}
`;function V(){return n(v,{sx:{width:"100%",color:"grey.500"},spacing:2,children:[e(p,{color:"secondary"}),e(p,{color:"success"}),e(p,{color:"inherit"})]})}const H=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearColor() {
  return (
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
  );
}
`;function U(){const[t,s]=o.useState(0);return o.useEffect(()=>{const i=setInterval(()=>{s(a=>{if(a===100)return 0;const u=Math.random()*10;return Math.min(a+u,100)})},500);return()=>{clearInterval(i)}},[]),e(c,{sx:{width:"100%"},children:e(p,{variant:"determinate",value:t})})}const O=`import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
`;function X(){const[t,s]=o.useState(0),[i,a]=o.useState(10),u=o.useRef(()=>{});return o.useEffect(()=>{u.current=()=>{if(t>100)s(0),a(10);else{const d=Math.random()*10,f=Math.random()*10;s(t+d),a(t+d+f)}}}),o.useEffect(()=>{const d=setInterval(()=>{u.current()},500);return()=>{clearInterval(d)}},[]),e(c,{sx:{width:"100%"},children:e(p,{variant:"buffer",value:t,valueBuffer:i})})}const Y=`import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearBuffer() {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
    </Box>
  );
}
`;function _(t){return n(c,{sx:{display:"flex",alignItems:"center"},children:[e(c,{sx:{width:"100%",mr:1},children:e(p,{variant:"determinate",...t})}),e(c,{sx:{minWidth:35},children:e(r,{variant:"body2",color:"text.secondary",children:`${Math.round(t.value)}%`})})]})}function G(){const[t,s]=o.useState(10);return o.useEffect(()=>{const i=setInterval(()=>{s(a=>a>=100?10:a+10)},800);return()=>{clearInterval(i)}},[]),e(c,{sx:{width:"100%"},children:e(_,{value:t})})}const J=`import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{\`\${Math.round(
          props.value,
        )}%\`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
`,K=P(p)(({theme:t})=>({height:10,borderRadius:5,[`&.${y.colorPrimary}`]:{backgroundColor:t.palette.grey[t.palette.mode==="light"?200:800]},[`& .${y.bar}`]:{borderRadius:5,backgroundColor:t.palette.mode==="light"?"#1a90ff":"#308fe8"}}));function Z(t){return n(c,{sx:{position:"relative"},children:[e(l,{variant:"determinate",sx:{color:s=>s.palette.grey[s.palette.mode==="light"?200:800]},size:40,thickness:4,...t,value:100}),e(l,{variant:"indeterminate",disableShrink:!0,sx:{color:s=>s.palette.mode==="light"?"#1a90ff":"#308fe8",animationDuration:"550ms",position:"absolute",left:0,[`& .${k.circle}`]:{strokeLinecap:"round"}},size:40,thickness:4,...t})]})}function ee(){return n(c,{sx:{flexGrow:1},children:[e(Z,{}),e("br",{}),e(K,{variant:"determinate",value:50})]})}const re=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [\`&.\${linearProgressClasses.colorPrimary}\`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [\`& .\${linearProgressClasses.bar}\`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props: CircularProgressProps) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [\`& .\${circularProgressClasses.circle}\`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

export default function CustomizedProgressBars() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FacebookCircularProgress />
      <br />
      <BorderLinearProgress variant="determinate" value={50} />
    </Box>
  );
}
`;function te(){const[t,s]=o.useState(!1),[i,a]=o.useState("idle"),u=o.useRef();return o.useEffect(()=>()=>{clearTimeout(u.current)},[]),n(c,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e(c,{sx:{height:40},children:e(b,{in:t,style:{transitionDelay:t?"800ms":"0ms"},unmountOnExit:!0,children:e(l,{})})}),e(g,{onClick:()=>{s(C=>!C)},sx:{m:2},children:t?"Stop loading":"Loading"}),e(c,{sx:{height:40},children:i==="success"?e(r,{children:"Success!"}):e(b,{in:i==="progress",style:{transitionDelay:i==="progress"?"800ms":"0ms"},unmountOnExit:!0,children:e(l,{})})}),e(g,{onClick:()=>{if(u.current&&clearTimeout(u.current),i!=="idle"){a("idle");return}a("progress"),u.current=window.setTimeout(()=>{a("success")},2e3)},sx:{m:2},children:i!=="idle"?"Reset":"Simulate a load"})]})}const ne=`import * as React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export default function DelayingAppearance() {
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState('idle');
  const timerRef = React.useRef<number>();

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    [],
  );

  const handleClickLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  const handleClickQuery = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (query !== 'idle') {
      setQuery('idle');
      return;
    }

    setQuery('progress');
    timerRef.current = window.setTimeout(() => {
      setQuery('success');
    }, 2000);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ height: 40 }}>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </Box>
      <Button onClick={handleClickLoading} sx={{ m: 2 }}>
        {loading ? 'Stop loading' : 'Loading'}
      </Button>
      <Box sx={{ height: 40 }}>
        {query === 'success' ? (
          <Typography>Success!</Typography>
        ) : (
          <Fade
            in={query === 'progress'}
            style={{
              transitionDelay: query === 'progress' ? '800ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress />
          </Fade>
        )}
      </Box>
      <Button onClick={handleClickQuery} sx={{ m: 2 }}>
        {query !== 'idle' ? 'Reset' : 'Simulate a load'}
      </Button>
    </Box>
  );
}
`;function ae(){return e(l,{disableShrink:!0})}const oe=`import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularUnderLoad() {
  return <CircularProgress disableShrink />;
}
`;function ge(t){return n(B,{children:[n("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(w,{}),e(g,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/progress",target:"_blank",role:"button",size:"small",startIcon:e(L,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(r,{className:"text-32 my-16 font-700",component:"h1",children:"Progress"}),e(r,{className:"description",children:"Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process."}),e(r,{className:"text-14 mb-32",component:"div",children:"Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates."}),n("ul",{className:"space-y-16",children:[n("li",{children:[e("strong",{children:"Determinate"})," indicators display how long an operation will take."]}),n("li",{children:[e("strong",{children:"Indeterminate"})," indicators visualize an unspecified wait time."]})]}),e(r,{className:"text-14 mb-32",component:"div",children:"The animations of the components rely on CSS as much as possible to work even before the JavaScript is loaded."}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Circular"}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Circular indeterminate"}),e(r,{className:"text-14 mb-32",component:"div",children:e(m,{name:"CircularIndeterminate.js",className:"my-16",iframe:!1,component:I,raw:T})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Circular color"}),e(r,{className:"text-14 mb-32",component:"div",children:e(m,{name:"CircularColor.js",className:"my-16",iframe:!1,component:E,raw:F})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Circular determinate"}),e(r,{className:"text-14 mb-32",component:"div",children:e(m,{name:"CircularDeterminate.js",className:"my-16",iframe:!1,component:D,raw:M})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Interactive integration"}),e(r,{className:"text-14 mb-32",component:"div",children:e(m,{name:"CircularIntegration.js",className:"my-16",iframe:!1,component:z,raw:j})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Circular with label"}),e(r,{className:"text-14 mb-32",component:"div",children:e(m,{name:"CircularWithValueLabel.js",className:"my-16",iframe:!1,component:$,raw:q})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Linear"}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Linear indeterminate"}),e(r,{className:"text-14 mb-32",component:"div",children:e(m,{name:"LinearIndeterminate.js",className:"my-16",iframe:!1,component:A,raw:Q})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Linear color"}),e(r,{className:"text-14 mb-32",component:"div",children:e(m,{name:"LinearColor.js",className:"my-16",iframe:!1,component:V,raw:H})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Linear determinate"}),e(r,{className:"text-14 mb-32",component:"div",children:e(m,{name:"LinearDeterminate.js",className:"my-16",iframe:!1,component:U,raw:O})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Linear buffer"}),e(r,{className:"text-14 mb-32",component:"div",children:e(m,{name:"LinearBuffer.js",className:"my-16",iframe:!1,component:X,raw:Y})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Linear with label"}),e(r,{className:"text-14 mb-32",component:"div",children:e(m,{name:"LinearWithValueLabel.js",className:"my-16",iframe:!1,component:G,raw:J})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Non-standard ranges"}),e(r,{className:"text-14 mb-32",component:"div",children:"The progress components accept a value in the range 0 - 100. This simplifies things for screen-reader users, where these are the default min / max values. Sometimes, however, you might be working with a data source where the values fall outside this range. Here's how you can easily transform a value in any range to a scale of 0 - 100:"}),e(x,{component:"pre",className:"language-jsx",children:` 
// MIN = Minimum expected value
// MAX = Maximum expected value
// Function to normalise the values (MIN / MAX could be integrated)
const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

// Example component that utilizes the \`normalise\` function at the point of render.
function Progress(props) {
  return (
    <React.Fragment>
      <CircularProgress variant="determinate" value={normalise(props.value)} />
      <LinearProgress variant="determinate" value={normalise(props.value)} />
    </React.Fragment>
  );
}
`}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),n(r,{className:"text-14 mb-32",component:"div",children:["Here are some examples of customizing the component. You can learn more about this in the ",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(m,{name:"CustomizedProgressBars.js",className:"my-16",iframe:!1,component:ee,raw:re})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Delaying appearance"}),n(r,{className:"text-14 mb-32",component:"div",children:["There are ",e("a",{href:"https://www.nngroup.com/articles/response-times-3-important-limits/",children:"3 important limits"})," to know around response time. The ripple effect of the ",e("code",{children:"ButtonBase"})," component ensures that the user feels that the system is reacting instantaneously. Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second. After 1.0 second, you can display a loader to keep user's flow of thought uninterrupted."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(m,{name:"DelayingAppearance.js",className:"my-16",iframe:!1,component:te,raw:ne})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Limitations"}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"High CPU load"}),n(r,{className:"text-14 mb-32",component:"div",children:["Under heavy load, you might lose the stroke dash animation or see random ",e("code",{children:"CircularProgress"})," ring widths. You should run processor intensive operations in a web worker or by batch in order not to block the main rendering thread."]}),e(r,{className:"text-14 mb-32",component:"div",children:e("img",{src:"/material-ui-static/images/progress/heavy-load.gif",alt:"heavy load"})}),n(r,{className:"text-14 mb-32",component:"div",children:["When it's not possible, you can leverage the ",e("code",{children:"disableShrink"})," prop to mitigate the issue. See ",e("a",{href:"https://github.com/mui/material-ui/issues/10327",children:"this issue"}),"."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(m,{name:"CircularUnderLoad.js",className:"my-16",iframe:!1,component:ae,raw:oe})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"High frequency updates"}),n(r,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"LinearProgress"})," uses a transition on the CSS transform property to provide a smooth update between different values. The default transition duration is 200ms. In the event a parent component updates the ",e("code",{children:"value"})," prop too quickly, you will at least experience a 200ms delay between the re-render and the progress bar fully updated."]}),e(r,{className:"text-14 mb-32",component:"div",children:"If you need to perform 30 re-renders per second or more, we recommend disabling the transition:"}),e(x,{component:"pre",className:"language-css",children:` 
.MuiLinearProgress-bar {
  transition: none;
}
`}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"IE 11"}),n(r,{className:"text-14 mb-32",component:"div",children:["The circular progress component animation on IE 11 is degraded. The stroke dash animation is not working (equivalent to ",e("code",{children:"disableShrink"}),") and the circular animation wobbles. You can solve the latter with:"]}),e(x,{component:"pre",className:"language-css",children:` 
.MuiCircularProgress-indeterminate {
  animation: circular-rotate 1.4s linear infinite;
}

@keyframes circular-rotate {
  0% {
    transform: rotate(0deg);
    /* Fix IE11 wobbly */
    transform-origin: 50% 50%;
  }
  100% {
    transform: rotate(360deg);
  }
}
`})]})}export{ge as default};
