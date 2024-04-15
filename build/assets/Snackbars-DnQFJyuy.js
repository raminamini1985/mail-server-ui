import{r as m,d as a,j as e,o,dT as h,I as y,B as C,dU as b,c3 as I,c6 as B,cL as N,c8 as T,c5 as R,bn as A,cB as F,T as t,dV as z,d0 as O,h as G,d2 as S,aH as D}from"./index-DaquC3HQ.js";import{F as d}from"./FuseExample-aWT15uaH.js";import{D as P}from"./DocumentationPageBreadcrumb-Cp8rQom_.js";import{d as w}from"./Close-B4sxV4kd.js";import{G as k}from"./Grid-QBH5mSUX.js";import{d as E}from"./Menu-B6LccUG0.js";import{d as M}from"./Add-DGiYIeh-.js";import{C as j}from"./CssBaseline-BfqPZx3Y.js";import{A as U}from"./AppBar-lnF0G4T-.js";import{F as H}from"./Fab-DWepfk-_.js";import"./DocumentationNavigation-GRGcrCKi.js";import"./ChangelogDoc-ngbKmtJS.js";function L(){const[n,i]=m.useState(!1),r=()=>{i(!0)},s=(l,p)=>{p!=="clickaway"&&i(!1)},c=a(m.Fragment,{children:[e(o,{color:"secondary",size:"small",onClick:s,children:"UNDO"}),e(y,{size:"small","aria-label":"close",color:"inherit",onClick:s,children:e(w,{fontSize:"small"})})]});return a("div",{children:[e(o,{onClick:r,children:"Open Snackbar"}),e(h,{open:n,autoHideDuration:6e3,onClose:s,message:"Note archived",action:c})]})}const V=`import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
    </div>
  );
}
`;function q(){const[n,i]=m.useState({open:!1,vertical:"top",horizontal:"center"}),{vertical:r,horizontal:s,open:c}=n,l=g=>()=>{i({...g,open:!0})},p=()=>{i({...n,open:!1})},u=a(m.Fragment,{children:[e(C,{sx:{display:"flex",justifyContent:"center"},children:e(o,{onClick:l({vertical:"top",horizontal:"center"}),children:"Top-Center"})}),a(k,{container:!0,justifyContent:"center",children:[e(k,{item:!0,xs:6,children:e(o,{onClick:l({vertical:"top",horizontal:"left"}),children:"Top-Left"})}),e(k,{item:!0,xs:6,textAlign:"right",children:e(o,{onClick:l({vertical:"top",horizontal:"right"}),children:"Top-Right"})}),e(k,{item:!0,xs:6,children:e(o,{onClick:l({vertical:"bottom",horizontal:"left"}),children:"Bottom-Left"})}),e(k,{item:!0,xs:6,textAlign:"right",children:e(o,{onClick:l({vertical:"bottom",horizontal:"right"}),children:"Bottom-Right"})})]}),e(C,{sx:{display:"flex",justifyContent:"center"},children:e(o,{onClick:l({vertical:"bottom",horizontal:"center"}),children:"Bottom-Center"})})]});return a(C,{sx:{width:500},children:[u,e(h,{anchorOrigin:{vertical:r,horizontal:s},open:c,onClose:p,message:"I love snacks"},r+s)]})}const W=`import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function PositionedSnackbar() {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
          Top-Center
        </Button>
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>
            Top-Left
          </Button>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
            Top-Right
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>
            Bottom-Left
          </Button>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
            Bottom-Right
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
          Bottom-Center
        </Button>
      </Box>
    </React.Fragment>
  );

  return (
    <Box sx={{ width: 500 }}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </Box>
  );
}
`,x=e(o,{color:"secondary",size:"small",children:"lorem ipsum dolorem"});function _(){return a(I,{spacing:2,sx:{maxWidth:600},children:[e(b,{message:"I love snacks.",action:x}),e(b,{message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate."}),e(b,{message:"I love candy. I love cookies. I love cupcakes.",action:x}),e(b,{message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate.",action:x})]})}const K=`import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

export default function LongTextSnackbar() {
  return (
    <Stack spacing={2} sx={{ maxWidth: 600 }}>
      <SnackbarContent message="I love snacks." action={action} />
      <SnackbarContent
        message={
          'I love candy. I love cookies. I love cupcakes. \\
          I love cheesecake. I love chocolate.'
        }
      />
      <SnackbarContent
        message="I love candy. I love cookies. I love cupcakes."
        action={action}
      />
      <SnackbarContent
        message={
          'I love candy. I love cookies. I love cupcakes. \\
          I love cheesecake. I love chocolate.'
        }
        action={action}
      />
    </Stack>
  );
}
`;function $(){const[n,i]=m.useState(!1);return a("div",{children:[e(o,{onClick:()=>{i(!0)},children:"Open Snackbar"}),e(h,{open:n,autoHideDuration:5e3,onClose:(c,l)=>{l!=="clickaway"&&i(!1)},message:"This Snackbar will be dismissed in 5 seconds."})]})}const Y=`import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function AutohideSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="This Snackbar will be dismissed in 5 seconds."
      />
    </div>
  );
}
`;function J(n){return e(N,{...n,direction:"up"})}function Q(n){return e(T,{...n})}function X(){const[n,i]=m.useState({open:!1,Transition:B}),r=c=>()=>{i({open:!0,Transition:c})},s=()=>{i({...n,open:!1})};return a("div",{children:[e(o,{onClick:r(Q),children:"Grow Transition"}),e(o,{onClick:r(B),children:"Fade Transition"}),e(o,{onClick:r(J),children:"Slide Transition"}),e(h,{open:n.open,onClose:s,TransitionComponent:n.Transition,message:"I love snacks",autoHideDuration:1200},n.Transition.name)]})}const Z=`import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide, { SlideProps } from '@mui/material/Slide';
import Grow, { GrowProps } from '@mui/material/Grow';
import { TransitionProps } from '@mui/material/transitions';

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

function GrowTransition(props: GrowProps) {
  return <Grow {...props} />;
}

export default function TransitionsSnackbar() {
  const [state, setState] = React.useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<any, any>;
      }
    >;
  }>({
    open: false,
    Transition: Fade,
  });

  const handleClick =
    (
      Transition: React.ComponentType<
        TransitionProps & {
          children: React.ReactElement<any, any>;
        }
      >,
    ) =>
    () => {
      setState({
        open: true,
        Transition,
      });
    };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <div>
      <Button onClick={handleClick(GrowTransition)}>Grow Transition</Button>
      <Button onClick={handleClick(Fade)}>Fade Transition</Button>
      <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="I love snacks"
        key={state.Transition.name}
        autoHideDuration={1200}
      />
    </div>
  );
}
`;function ee(){const[n,i]=m.useState(!1),r=()=>{i(!0)},s=(c,l)=>{l!=="clickaway"&&i(!1)};return a("div",{children:[e(o,{onClick:r,children:"Open Snackbar"}),e(h,{open:n,autoHideDuration:6e3,onClose:s,children:e(R,{onClose:s,severity:"success",variant:"filled",sx:{width:"100%"},children:"This is a success Alert inside a Snackbar!"})})]})}const te=`import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </div>
  );
}
`;function ne(){return a(m.Fragment,{children:[e(j,{}),e(A,{styles:n=>({body:{backgroundColor:n.palette.background.paper}})}),a("div",{children:[e(U,{position:"static",color:"primary",children:a(F,{children:[e(y,{edge:"start",sx:{mr:2},color:"inherit","aria-label":"menu",children:e(E,{})}),e(t,{variant:"h6",color:"inherit",component:"div",children:"App bar"})]})}),e(H,{color:"secondary",sx:{position:"absolute",bottom:n=>n.spacing(2),right:n=>n.spacing(2)},children:e(M,{})}),e(h,{open:!0,autoHideDuration:6e3,message:"Archived",action:e(o,{color:"inherit",size:"small",children:"Undo"}),sx:{bottom:{xs:90,sm:0}}})]})]})}const ae=`import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';

export default function FabIntegrationSnackbar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <GlobalStyles
        styles={(theme) => ({
          body: { backgroundColor: theme.palette.background.paper },
        })}
      />
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              sx={{ mr: 2 }}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              App bar
            </Typography>
          </Toolbar>
        </AppBar>
        <Fab
          color="secondary"
          sx={{
            position: 'absolute',
            bottom: (theme) => theme.spacing(2),
            right: (theme) => theme.spacing(2),
          }}
        >
          <AddIcon />
        </Fab>
        <Snackbar
          open
          autoHideDuration={6000}
          message="Archived"
          action={
            <Button color="inherit" size="small">
              Undo
            </Button>
          }
          sx={{ bottom: { xs: 90, sm: 0 } }}
        />
      </div>
    </React.Fragment>
  );
}
`;function oe(){const[n,i]=m.useState([]),[r,s]=m.useState(!1),[c,l]=m.useState(void 0);m.useEffect(()=>{n.length&&!c?(l({...n[0]}),i(f=>f.slice(1)),s(!0)):n.length&&c&&r&&s(!1)},[n,c,r]);const p=f=>()=>{i(v=>[...v,{message:f,key:new Date().getTime()}])},u=(f,v)=>{v!=="clickaway"&&s(!1)},g=()=>{l(void 0)};return a("div",{children:[e(o,{onClick:p("Message A"),children:"Show message A"}),e(o,{onClick:p("Message B"),children:"Show message B"}),e(h,{open:r,autoHideDuration:6e3,onClose:u,TransitionProps:{onExited:g},message:c?c.message:void 0,action:a(m.Fragment,{children:[e(o,{color:"secondary",size:"small",onClick:u,children:"UNDO"}),e(y,{"aria-label":"close",color:"inherit",sx:{p:.5},onClick:u,children:e(w,{})})]})},c?c.key:void 0)]})}const ie=`import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export interface SnackbarMessage {
  message: string;
  key: number;
}

export default function ConsecutiveSnackbars() {
  const [snackPack, setSnackPack] = React.useState<readonly SnackbarMessage[]>([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState<SnackbarMessage | undefined>(
    undefined,
  );

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick = (message: string) => () => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <div>
      <Button onClick={handleClick('Message A')}>Show message A</Button>
      <Button onClick={handleClick('Message B')}>Show message B</Button>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
`;function se(){const{enqueueSnackbar:n}=O(),i=()=>{n("I love snacks.")},r=s=>()=>{n("This is a success message!",{variant:s})};return a(m.Fragment,{children:[e(o,{onClick:i,children:"Show snackbar"}),e(o,{onClick:r("success"),children:"Show success snackbar"})]})}function re(){return e(z,{maxSnack:3,children:e(se,{})})}const ce=`import * as React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('I love snacks.');
  };

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClick}>Show snackbar</Button>
      <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
    </React.Fragment>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
`;function Ce(n){return a(D,{children:[a("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(P,{}),e(o,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/snackbars",target:"_blank",role:"button",size:"small",startIcon:e(G,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(t,{className:"text-32 my-16 font-700",component:"h1",children:"Snackbar"}),e(t,{className:"description",children:"Snackbars (also known as toasts) are used for brief notifications of processes that have been or will be performed."}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Introduction"}),e(t,{className:"text-14 mb-32",component:"div",children:"The Snackbar component appears temporarily and floats above the UI to provide users with (non-critical) updates on an app's processes. The demo below, inspired by Google Keep, shows a basic Snackbar with a text element and two actions:"}),e(t,{className:"text-14 mb-32",component:"div",children:e(d,{name:"SimpleSnackbar.js",className:"my-16",iframe:!1,component:L,raw:V})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Usage"}),a(t,{className:"text-14 mb-32",component:"div",children:["Snackbars differ from ",e("a",{href:"/material-ui/react-alert/",children:"Alerts"})," in that Snackbars have a fixed position and a high z-index, so they're intended to break out of the document flow; Alerts, on the other hand, are usually part of the flow—except when they're ",e("a",{href:"#use-with-alerts",children:"used as children of a Snackbar"}),"."]}),a(t,{className:"text-14 mb-32",component:"div",children:["Snackbars also from differ from ",e("a",{href:"/material-ui/react-dialog/",children:"Dialogs"})," in that Snackbars are not intended to convey ",e("em",{children:"critical"})," information or block the user from interacting with the rest of the app; Dialogs, by contrast, require input from the user in order to be dismissed."]}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basics"}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Import"}),e(S,{component:"pre",className:"language-jsx",children:` 
import Snackbar from '@mui/material/Snackbar';
`}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Position"}),a(t,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"anchorOrigin"})," prop to control the Snackbar's position on the screen."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(d,{name:"PositionedSnackbar.js",className:"my-16",iframe:!1,component:q,raw:W})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Content"}),e(S,{component:"pre",className:"language-jsx",children:` 
import SnackbarContent from '@mui/material/SnackbarContent';
`}),e(t,{className:"text-14 mb-32",component:"div",children:"Use the Snackbar Content component to add text and actions to the Snackbar."}),e(t,{className:"text-14 mb-32",component:"div",children:e(d,{name:"LongTextSnackbar.js",className:"my-16",iframe:!1,component:_,raw:K})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Automatic dismiss"}),a(t,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"autoHideDuration"})," prop to automatically trigger the Snackbar's ",e("code",{children:"onClose"})," function after a set period of time (in milliseconds)."]}),a(t,{className:"text-14 mb-32",component:"div",children:["Make sure to ",e("a",{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits.html",children:"provide sufficient time"})," for the user to process the information displayed on it."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(d,{name:"AutohideSnackbar.js",className:"my-16",iframe:!1,component:$,raw:Y})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Transitions"}),a(t,{className:"text-14 mb-32",component:"div",children:["You can use the ",e("code",{children:"TransitionComponent"})," prop to change the transition of the Snackbar from ",e("a",{href:"/material-ui/transitions/#grow",children:"Grow"})," (the default) to others such as ",e("a",{href:"/material-ui/transitions/#slide",children:"Slide"}),"."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(d,{name:"TransitionsSnackbar.js",className:"my-16",iframe:!1,component:X,raw:Z})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Use with Alerts"}),e(t,{className:"text-14 mb-32",component:"div",children:"Use an Alert inside a Snackbar for messages that communicate a certain severity."}),e(t,{className:"text-14 mb-32",component:"div",children:e(d,{name:"CustomizedSnackbars.js",className:"my-16",iframe:!1,component:ee,raw:te})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Use with Floating Action Buttons"}),a(t,{className:"text-14 mb-32",component:"div",children:["If you're using a ",e("a",{href:"/material-ui/react-floating-action-button/",children:"Floating Action Button"})," on mobile, Material Design recommends positioning snackbars directly above it, as shown in the demo below:"]}),e(t,{className:"text-14 mb-32",component:"div",children:e(d,{name:"FabIntegrationSnackbar.js",className:"my-16",iframe:!0,component:ne,raw:ae})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Common examples"}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Consecutive Snackbars"}),e(t,{className:"text-14 mb-32",component:"div",children:"This demo shows how to display multiple Snackbars without stacking them by using a consecutive animation."}),e(t,{className:"text-14 mb-32",component:"div",children:e(d,{name:"ConsecutiveSnackbars.js",className:"my-16",iframe:!1,component:oe,raw:ie})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Third-party integrations"}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"notistack"}),a(t,{className:"text-14 mb-32",component:"div",children:[e("img",{src:"https://img.shields.io/github/stars/iamhosseindhv/notistack.svg?style=social&label=Star",alt:"stars"}),e("img",{src:"https://img.shields.io/npm/dm/notistack.svg",alt:"npm downloads"})]}),a(t,{className:"text-14 mb-32",component:"div",children:["With an imperative API, ",e("a",{href:"https://github.com/iamhosseindhv/notistack",children:"notistack"})," lets you vertically stack multiple Snackbars without having to handle their open and close states. Even though this is discouraged in the Material Design guidelines, it is still a common pattern."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(d,{name:"IntegrationNotistack.js",className:"my-16",iframe:!1,component:re,raw:ce})}),a(t,{className:"text-14 mb-32",component:"div",children:[":::warning Note that notistack prevents Snackbars from being ",a("a",{href:"#accessibility",children:["closed by pressing ",e("kbd",{className:"key",children:"Escape"})]}),". :::"]}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),a(t,{className:"text-14 mb-32",component:"div",children:["The user should be able to dismiss Snackbars by pressing ",e("kbd",{className:"key",children:"Escape"}),". If there are multiple instances appearing at the same time and you want ",e("kbd",{className:"key",children:"Escape"})," to dismiss only the oldest one that's currently open, call ",e("code",{children:"event.preventDefault"})," in the ",e("code",{children:"onClose"})," prop."]}),e(S,{component:"pre",className:"language-jsx",children:` 
export default function MyComponent() {
  const [open, setOpen] = React.useState(true);

  return (
    <React.Fragment>
      <Snackbar
        open={open}
        onClose={(event, reason) => {
          // \`reason === 'escapeKeyDown'\` if \`Escape\` was pressed
          setOpen(false);
          // call \`event.preventDefault\` to only close one Snackbar at a time.
        
      />
      <Snackbar open={open} onClose={() => setOpen(false)} />
    </React.Fragment>
  );
}
`}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Anatomy"}),a(t,{className:"text-14 mb-32",component:"div",children:["The Snackbar component is composed of a root ",e("code",{children:"<div>"})," that houses interior elements like the Snackbar Content and other optional components (such as buttons or decorators)."]}),e(S,{component:"pre",className:"language-html",children:` 
<div role="presentation" className="MuiSnackbar-root">
  <div className="MuiPaper-root MuiSnackbarContent-root" role="alert">
    <div className="MuiSnackbarContent-message">
      <!-- Snackbar content goes here -->
    </div>
  </div>
</div>
`})]})}export{Ce as default};