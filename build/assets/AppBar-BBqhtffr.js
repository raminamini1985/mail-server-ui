import{bw as oe,r as h,bu as re,j as e,d as t,I as l,T as r,o as T,cB as u,B as c,aS as te,db as ae,aw as B,av as y,br as U,ag as _,bs as $,aq as ie,A as Y,s as v,al as M,dc as Q,dd as ne,aD as le,ay as se,bc as V,az as J,aB as K,c9 as I,P as ce,cM as z,cL as me,c6 as pe,de as ue,ao as de,c3 as he,h as ge,d2 as k,aH as fe}from"./index-DaquC3HQ.js";import{F as b}from"./FuseExample-aWT15uaH.js";import{D as be}from"./DocumentationPageBreadcrumb-Cp8rQom_.js";import{d as x}from"./Menu-B6LccUG0.js";import{A as f}from"./AppBar-lnF0G4T-.js";import{d as q}from"./AccountCircle-CNP95nLO.js";import{S as xe}from"./Switch-C-K27e__.js";import{C as A}from"./Container-_bD7XaBM.js";import{d as C}from"./Search-BiEzHE72.js";import{C as w}from"./CssBaseline-BfqPZx3Y.js";import{d as F}from"./Mail--0LS6Rj3.js";import{d as L}from"./MoreVert-bbxp4BRE.js";import{d as ye}from"./Add-DGiYIeh-.js";import{F as X}from"./Fab-DWepfk-_.js";import{L as ve}from"./ListItemAvatar-CokjDoSk.js";import{d as Be}from"./KeyboardArrowUp-f19Gopff.js";import"./DocumentationNavigation-GRGcrCKi.js";import"./ChangelogDoc-ngbKmtJS.js";const we=["getTrigger","target"];function Ie(o,i){const{disableHysteresis:a=!1,threshold:n=100,target:m}=i,g=o.current;return m&&(o.current=m.pageYOffset!==void 0?m.pageYOffset:m.scrollTop),!a&&g!==void 0&&o.current<g?!1:o.current>n}const Me=typeof window<"u"?window:null;function R(o={}){const{getTrigger:i=Ie,target:a=Me}=o,n=oe(o,we),m=h.useRef(),[g,p]=h.useState(()=>i(m,n));return h.useEffect(()=>{const s=()=>{p(i(m,re({target:a},n)))};return s(),a.addEventListener("scroll",s,{passive:!0}),()=>{a.removeEventListener("scroll",s,{passive:!0})}},[a,i,JSON.stringify(n)]),g}function Te(){return e(c,{sx:{flexGrow:1},children:e(f,{position:"static",children:t(u,{children:[e(l,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:e(x,{})}),e(r,{variant:"h6",component:"div",sx:{flexGrow:1},children:"News"}),e(T,{color:"inherit",children:"Login"})]})})})}const Ae=`import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
`;function Ce(){const[o,i]=h.useState(!0),[a,n]=h.useState(null),m=s=>{i(s.target.checked)},g=s=>{n(s.currentTarget)},p=()=>{n(null)};return t(c,{sx:{flexGrow:1},children:[e(ae,{children:e(te,{control:e(xe,{checked:o,onChange:m,"aria-label":"login switch"}),label:o?"Logout":"Login"})}),e(f,{position:"static",children:t(u,{children:[e(l,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:e(x,{})}),e(r,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Photos"}),o&&t("div",{children:[e(l,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:g,color:"inherit",children:e(q,{})}),t(B,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:!!a,onClose:p,children:[e(y,{onClick:p,children:"Profile"}),e(y,{onClick:p,children:"My account"})]})]})]})})]})}const Se=`import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
`;var O={},ke=_;Object.defineProperty(O,"__esModule",{value:!0});var E=O.default=void 0,qe=ke(U()),Ee=$;E=O.default=(0,qe.default)((0,Ee.jsx)("path",{d:"M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63M9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"}),"Adb");const G=["Products","Pricing","Blog"],Ne=["Profile","Account","Dashboard","Logout"];function Le(){const[o,i]=h.useState(null),[a,n]=h.useState(null),m=d=>{i(d.currentTarget)},g=d=>{n(d.currentTarget)},p=()=>{i(null)},s=()=>{n(null)};return e(f,{position:"static",children:e(A,{maxWidth:"xl",children:t(u,{disableGutters:!0,children:[e(E,{sx:{display:{xs:"none",md:"flex"},mr:1}}),e(r,{variant:"h6",noWrap:!0,component:"a",href:"#app-bar-with-responsive-menu",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"LOGO"}),t(c,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[e(l,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:m,color:"inherit",children:e(x,{})}),e(B,{id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:!!o,onClose:p,sx:{display:{xs:"block",md:"none"}},children:G.map(d=>e(y,{onClick:p,children:e(r,{textAlign:"center",children:d})},d))})]}),e(E,{sx:{display:{xs:"flex",md:"none"},mr:1}}),e(r,{variant:"h5",noWrap:!0,component:"a",href:"#app-bar-with-responsive-menu",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"LOGO"}),e(c,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:G.map(d=>e(T,{onClick:p,sx:{my:2,color:"white",display:"block"},children:d},d))}),t(c,{sx:{flexGrow:0},children:[e(ie,{title:"Open settings",children:e(l,{onClick:g,sx:{p:0},children:e(Y,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/2.jpg"})})}),e(B,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:!!a,onClose:s,children:Ne.map(d=>e(y,{onClick:s,children:e(r,{textAlign:"center",children:d})},d))})]})]})})})}const Re=`import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
`,Oe=v("div")(({theme:o})=>({position:"relative",borderRadius:o.shape.borderRadius,backgroundColor:M(o.palette.common.white,.15),"&:hover":{backgroundColor:M(o.palette.common.white,.25)},marginLeft:0,width:"100%",[o.breakpoints.up("sm")]:{marginLeft:o.spacing(1),width:"auto"}})),je=v("div")(({theme:o})=>({padding:o.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"})),Pe=v(Q)(({theme:o})=>({color:"inherit",width:"100%","& .MuiInputBase-input":{padding:o.spacing(1,1,1,0),paddingLeft:`calc(1em + ${o.spacing(4)})`,transition:o.transitions.create("width"),[o.breakpoints.up("sm")]:{width:"12ch","&:focus":{width:"20ch"}}}}));function De(){return e(c,{sx:{flexGrow:1},children:e(f,{position:"static",children:t(u,{children:[e(l,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:e(x,{})}),e(r,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:"MUI"}),t(Oe,{children:[e(je,{children:e(C,{})}),e(Pe,{placeholder:"Search…",inputProps:{"aria-label":"search"}})]})]})})})}const ze=`import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: \`calc(1em + \${theme.spacing(4)})\`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
`,Fe=240,H=["Home","About","Contact"];function Ge(o){const{window:i}=o,[a,n]=h.useState(!1),m=()=>{n(s=>!s)},g=t(c,{onClick:m,sx:{textAlign:"center"},children:[e(r,{variant:"h6",sx:{my:2},children:"MUI"}),e(le,{}),e(K,{children:H.map(s=>e(se,{disablePadding:!0,children:e(V,{sx:{textAlign:"center"},children:e(J,{primary:s})})},s))})]}),p=i!==void 0?()=>i().document.body:void 0;return t(c,{sx:{display:"flex"},children:[e(w,{}),e(f,{component:"nav",children:t(u,{children:[e(l,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:m,sx:{mr:2,display:{sm:"none"}},children:e(x,{})}),e(r,{variant:"h6",component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:"MUI"}),e(c,{sx:{display:{xs:"none",sm:"block"}},children:H.map(s=>e(T,{sx:{color:"#fff"},children:s},s))})]})}),e("nav",{children:e(ne,{container:p,variant:"temporary",open:a,onClose:m,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:Fe}},children:g})}),t(c,{component:"main",sx:{p:3},children:[e(u,{}),e(r,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus quia corrupti alias distinctio nostrum. Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error, delectus quo eius exercitationem tempore. Delectus sapiente, provident corporis dolorum quibusdam aut beatae repellendus est labore quisquam praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat voluptate iure labore, repellendus beatae quia unde est aliquid dolor molestias libero. Reiciendis similique exercitationem consequatur, nobis placeat illo laudantium! Enim perferendis nulla soluta magni error, provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui, iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto. Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem dolores sunt inventore perferendis, aut sapiente modi nesciunt."})]})]})}const He=`import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
          fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
          aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
          cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
          at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
          Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
          numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
          asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
          assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
          soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
          ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
          soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
          Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
          delectus quo eius exercitationem tempore. Delectus sapiente, provident
          corporis dolorum quibusdam aut beatae repellendus est labore quisquam
          praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
          deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
          fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
          recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
          debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
          praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
          voluptate iure labore, repellendus beatae quia unde est aliquid dolor
          molestias libero. Reiciendis similique exercitationem consequatur, nobis
          placeat illo laudantium! Enim perferendis nulla soluta magni error,
          provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
          iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
          reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
          cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
          consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
          Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
          dolores sunt inventore perferendis, aut sapiente modi nesciunt.
        </Typography>
      </Box>
    </Box>
  );
}
`;var j={},We=_;Object.defineProperty(j,"__esModule",{value:!0});var N=j.default=void 0,Ue=We(U()),_e=$;N=j.default=(0,Ue.default)((0,_e.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"}),"Notifications");const $e=v("div")(({theme:o})=>({position:"relative",borderRadius:o.shape.borderRadius,backgroundColor:M(o.palette.common.white,.15),"&:hover":{backgroundColor:M(o.palette.common.white,.25)},marginRight:o.spacing(2),marginLeft:0,width:"100%",[o.breakpoints.up("sm")]:{marginLeft:o.spacing(3),width:"auto"}})),Ye=v("div")(({theme:o})=>({padding:o.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"})),Qe=v(Q)(({theme:o})=>({color:"inherit","& .MuiInputBase-input":{padding:o.spacing(1,1,1,0),paddingLeft:`calc(1em + ${o.spacing(4)})`,transition:o.transitions.create("width"),width:"100%",[o.breakpoints.up("md")]:{width:"20ch"}}}));function Ve(){const[o,i]=h.useState(null),[a,n]=h.useState(null),m=!!o,g=!!a,p=S=>{i(S.currentTarget)},s=()=>{n(null)},d=()=>{i(null),s()},Z=S=>{n(S.currentTarget)},P="primary-search-account-menu",ee=t(B,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:P,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:d,children:[e(y,{onClick:d,children:"Profile"}),e(y,{onClick:d,children:"My account"})]}),D="primary-search-account-menu-mobile";return t(c,{sx:{flexGrow:1},children:[e(f,{position:"static",children:t(u,{children:[e(l,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:e(x,{})}),e(r,{variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"}},children:"MUI"}),t($e,{children:[e(Ye,{children:e(C,{})}),e(Qe,{placeholder:"Search…",inputProps:{"aria-label":"search"}})]}),e(c,{sx:{flexGrow:1}}),t(c,{sx:{display:{xs:"none",md:"flex"}},children:[e(l,{size:"large","aria-label":"show 4 new mails",color:"inherit",children:e(I,{badgeContent:4,color:"error",children:e(F,{})})}),e(l,{size:"large","aria-label":"show 17 new notifications",color:"inherit",children:e(I,{badgeContent:17,color:"error",children:e(N,{})})}),e(l,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":P,"aria-haspopup":"true",onClick:p,color:"inherit",children:e(q,{})})]}),e(c,{sx:{display:{xs:"flex",md:"none"}},children:e(l,{size:"large","aria-label":"show more","aria-controls":D,"aria-haspopup":"true",onClick:Z,color:"inherit",children:e(L,{})})})]})}),t(B,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},id:D,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:g,onClose:s,children:[t(y,{children:[e(l,{size:"large","aria-label":"show 4 new mails",color:"inherit",children:e(I,{badgeContent:4,color:"error",children:e(F,{})})}),e("p",{children:"Messages"})]}),t(y,{children:[e(l,{size:"large","aria-label":"show 17 new notifications",color:"inherit",children:e(I,{badgeContent:17,color:"error",children:e(N,{})})}),e("p",{children:"Notifications"})]}),t(y,{onClick:p,children:[e(l,{size:"large","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:e(q,{})}),e("p",{children:"Profile"})]})]}),ee]})}const Je=`import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: \`calc(1em + \${theme.spacing(4)})\`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
`;function Ke(){return e(c,{sx:{flexGrow:1},children:e(f,{position:"static",children:t(u,{variant:"dense",children:[e(l,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:e(x,{})}),e(r,{variant:"h6",color:"inherit",component:"div",children:"Photos"})]})})})}const Xe=`import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
`,Ze=v(u)(({theme:o})=>({alignItems:"flex-start",paddingTop:o.spacing(1),paddingBottom:o.spacing(2),"@media all":{minHeight:128}}));function eo(){return e(c,{sx:{flexGrow:1},children:e(f,{position:"static",children:t(Ze,{children:[e(l,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:e(x,{})}),e(r,{variant:"h5",noWrap:!0,component:"div",sx:{flexGrow:1,alignSelf:"flex-end"},children:"MUI"}),e(l,{size:"large","aria-label":"search",color:"inherit",children:e(C,{})}),e(l,{size:"large","aria-label":"display more actions",edge:"end",color:"inherit",children:e(L,{})})]})})})}const oo=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export default function ProminentAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
          >
            MUI
          </Typography>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
`,ro=[{id:1,primary:"Brunch this week?",secondary:"I'll be in the neighbourhood this week. Let's grab a bite to eat",person:"/material-ui-static/images/avatar/5.jpg"},{id:2,primary:"Birthday Gift",secondary:`Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,person:"/material-ui-static/images/avatar/1.jpg"},{id:3,primary:"Recipe to try",secondary:"I am try out this new BBQ recipe, I think this might be amazing",person:"/material-ui-static/images/avatar/2.jpg"},{id:4,primary:"Yes!",secondary:"I have the tickets to the ReactConf for this year.",person:"/material-ui-static/images/avatar/3.jpg"},{id:5,primary:"Doctor's Appointment",secondary:"My appointment for the doctor was rescheduled for next Saturday.",person:"/material-ui-static/images/avatar/4.jpg"},{id:6,primary:"Discussion",secondary:`Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,person:"/material-ui-static/images/avatar/5.jpg"},{id:7,primary:"Summer BBQ",secondary:`Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,person:"/material-ui-static/images/avatar/1.jpg"}],to=v(X)({position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"});function ao(){return t(h.Fragment,{children:[e(w,{}),t(ce,{square:!0,sx:{pb:"50px"},children:[e(r,{variant:"h5",gutterBottom:!0,component:"div",sx:{p:2,pb:0},children:"Inbox"}),e(K,{sx:{mb:2},children:ro.map(({id:o,primary:i,secondary:a,person:n})=>t(h.Fragment,{children:[o===1&&e(z,{sx:{bgcolor:"background.paper"},children:"Today"}),o===3&&e(z,{sx:{bgcolor:"background.paper"},children:"Yesterday"}),t(V,{children:[e(ve,{children:e(Y,{alt:"Profile Picture",src:n})}),e(J,{primary:i,secondary:a})]})]},o))})]}),e(f,{position:"fixed",color:"primary",sx:{top:"auto",bottom:0},children:t(u,{children:[e(l,{color:"inherit","aria-label":"open drawer",children:e(x,{})}),e(to,{color:"secondary","aria-label":"add",children:e(ye,{})}),e(c,{sx:{flexGrow:1}}),e(l,{color:"inherit",children:e(C,{})}),e(l,{color:"inherit",children:e(L,{})})]})})]})}const io=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

const messages = [
  {
    id: 1,
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/material-ui-static/images/avatar/5.jpg',
  },
  {
    id: 2,
    primary: 'Birthday Gift',
    secondary: \`Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.\`,
    person: '/material-ui-static/images/avatar/1.jpg',
  },
  {
    id: 3,
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/material-ui-static/images/avatar/2.jpg',
  },
  {
    id: 4,
    primary: 'Yes!',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: '/material-ui-static/images/avatar/3.jpg',
  },
  {
    id: 5,
    primary: "Doctor's Appointment",
    secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: '/material-ui-static/images/avatar/4.jpg',
  },
  {
    id: 6,
    primary: 'Discussion',
    secondary: \`Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.\`,
    person: '/material-ui-static/images/avatar/5.jpg',
  },
  {
    id: 7,
    primary: 'Summer BBQ',
    secondary: \`Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.\`,
    person: '/material-ui-static/images/avatar/1.jpg',
  },
];

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Inbox
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              )}
              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Yesterday
                </ListSubheader>
              )}
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItemButton>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
`;function no(o){const{children:i,window:a}=o,n=R({target:a?a():void 0});return e(me,{appear:!1,direction:"down",in:!n,children:i})}function lo(o){return t(h.Fragment,{children:[e(w,{}),e(no,{...o,children:e(f,{children:e(u,{children:e(r,{variant:"h6",component:"div",children:"Scroll to hide App bar"})})})}),e(u,{}),e(A,{children:e(c,{sx:{my:2},children:[...new Array(12)].map(()=>`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`).join(`
`)})})]})}const so=`import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Scroll to hide App bar
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => \`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\`,
            )
            .join('\\n')}
        </Box>
      </Container>
    </React.Fragment>
  );
}
`;function co(o){const{children:i,window:a}=o,n=R({disableHysteresis:!0,threshold:0,target:a?a():void 0});return h.cloneElement(i,{elevation:n?4:0})}function mo(o){return t(h.Fragment,{children:[e(w,{}),e(co,{...o,children:e(f,{children:e(u,{children:e(r,{variant:"h6",component:"div",children:"Scroll to elevate App bar"})})})}),e(u,{}),e(A,{children:e(c,{sx:{my:2},children:[...new Array(12)].map(()=>`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`).join(`
`)})})]})}const po=`import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ElevateAppBar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Scroll to elevate App bar
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => \`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\`,
            )
            .join('\\n')}
        </Box>
      </Container>
    </React.Fragment>
  );
}
`;function uo(o){const{children:i,window:a}=o,n=R({target:a?a():void 0,disableHysteresis:!0,threshold:100});return e(pe,{in:n,children:e(c,{onClick:g=>{const p=(g.target.ownerDocument||document).querySelector("#back-to-top-anchor");p&&p.scrollIntoView({block:"center"})},role:"presentation",sx:{position:"fixed",bottom:16,right:16},children:i})})}function ho(o){return t(h.Fragment,{children:[e(w,{}),e(f,{children:e(u,{children:e(r,{variant:"h6",component:"div",children:"Scroll to see button"})})}),e(u,{id:"back-to-top-anchor"}),e(A,{children:e(c,{sx:{my:2},children:[...new Array(12)].map(()=>`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`).join(`
`)})}),e(uo,{...o,children:e(X,{size:"small","aria-label":"scroll back to top",children:e(Be,{})})})]})}const go=`import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function BackToTop(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Scroll to see button
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => \`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\`,
            )
            .join('\\n')}
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
`;function W(o){return t(u,{children:[e(l,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:e(x,{})}),e(r,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1},children:o})]})}const fo=ue({palette:{mode:"dark",primary:{main:"#1976d2"}}});function bo(){return e(he,{spacing:2,sx:{flexGrow:1},children:t(de,{theme:fo,children:[e(f,{position:"static",color:"primary",enableColorOnDark:!0,children:W("enableColorOnDark")}),e(f,{position:"static",color:"primary",children:W("default")})]})})}const xo=`import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function appBarLabel(label: string) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function EnableColorOnDarkAppBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          {appBarLabel('enableColorOnDark')}
        </AppBar>
        <AppBar position="static" color="primary">
          {appBarLabel('default')}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
`;function Do(o){return t(fe,{children:[t("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(be,{}),e(T,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/app-bar",target:"_blank",role:"button",size:"small",startIcon:e(ge,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(r,{className:"text-32 my-16 font-700",component:"h1",children:"App Bar"}),e(r,{className:"description",children:"The App Bar displays information and actions relating to the current screen."}),e(r,{className:"text-14 mb-32",component:"div",children:"The top App bar provides content and actions related to the current screen. It's used for branding, screen titles, navigation, and actions."}),e(r,{className:"text-14 mb-32",component:"div",children:"It can transform into a contextual action bar or be used as a navbar."}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic App bar"}),e(r,{className:"text-14 mb-32",component:"div",children:e(b,{name:"ButtonAppBar.js",className:"my-16",iframe:!1,component:Te,raw:Ae})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"App bar with menu"}),e(r,{className:"text-14 mb-32",component:"div",children:e(b,{name:"MenuAppBar.js",className:"my-16",iframe:!1,component:Ce,raw:Se})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"App bar with responsive menu"}),e(r,{className:"text-14 mb-32",component:"div",children:e(b,{name:"ResponsiveAppBar.js",className:"my-16",iframe:!1,component:Le,raw:Re})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"App bar with search field"}),e(r,{className:"text-14 mb-32",component:"div",children:"A side searchbar."}),e(r,{className:"text-14 mb-32",component:"div",children:e(b,{name:"SearchAppBar.js",className:"my-16",iframe:!1,component:De,raw:ze})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Responsive App bar with Drawer"}),e(r,{className:"text-14 mb-32",component:"div",children:e(b,{name:"DrawerAppBar.js",className:"my-16",iframe:!0,component:Ge,raw:He})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"App bar with a primary search field"}),e(r,{className:"text-14 mb-32",component:"div",children:"A primary searchbar."}),e(r,{className:"text-14 mb-32",component:"div",children:e(b,{name:"PrimarySearchAppBar.js",className:"my-16",iframe:!1,component:Ve,raw:Je})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Dense (desktop only)"}),e(r,{className:"text-14 mb-32",component:"div",children:e(b,{name:"DenseAppBar.js",className:"my-16",iframe:!1,component:Ke,raw:Xe})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Prominent"}),e(r,{className:"text-14 mb-32",component:"div",children:"A prominent app bar."}),e(r,{className:"text-14 mb-32",component:"div",children:e(b,{name:"ProminentAppBar.js",className:"my-16",iframe:!1,component:eo,raw:oo})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Bottom App bar"}),e(r,{className:"text-14 mb-32",component:"div",children:e(b,{name:"BottomAppBar.js",className:"my-16",iframe:!0,component:ao,raw:io})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Fixed placement"}),e(r,{className:"text-14 mb-32",component:"div",children:"When you render the app bar position fixed, the dimension of the element doesn't impact the rest of the page. This can cause some part of your content to be invisible, behind the app bar. Here are 3 possible solutions:"}),t("ol",{children:[t("li",{children:["You can use ",e("code",{children:'position="sticky"'})," instead of fixed. ⚠️ sticky is not supported by IE11."]}),t("li",{children:["You can render a second ",e("code",{children:"<Toolbar />"})," component:"]})]}),e(k,{component:"pre",className:"language-jsx",children:` 
function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
`}),e("ol",{start:3,children:t("li",{children:["You can use ",e("code",{children:"theme.mixins.toolbar"})," CSS:"]})}),e(k,{component:"pre",className:"language-jsx",children:` 
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Offset />
    </React.Fragment>
  );
}
`}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Scrolling"}),t(r,{className:"text-14 mb-32",component:"div",children:["You can use the ",e("code",{children:"useScrollTrigger()"})," hook to respond to user scroll actions."]}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Hide App bar"}),e(r,{className:"text-14 mb-32",component:"div",children:"The app bar hides on scroll down to leave more space for reading."}),e(r,{className:"text-14 mb-32",component:"div",children:e(b,{name:"HideAppBar.js",className:"my-16",iframe:!0,component:lo,raw:so})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Elevate App bar"}),e(r,{className:"text-14 mb-32",component:"div",children:"The app bar elevates on scroll to communicate that the user is not at the top of the page."}),e(r,{className:"text-14 mb-32",component:"div",children:e(b,{name:"ElevateAppBar.js",className:"my-16",iframe:!0,component:mo,raw:po})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Back to top"}),e(r,{className:"text-14 mb-32",component:"div",children:"A floating action button appears on scroll to make it easy to get back to the top of the page."}),e(r,{className:"text-14 mb-32",component:"div",children:e(b,{name:"BackToTop.js",className:"my-16",iframe:!0,component:ho,raw:go})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:e("code",{children:"useScrollTrigger([options]) => trigger"})}),e(r,{className:"text-14 mt-12 mb-10",component:"h4",children:"Arguments"}),e("ol",{children:t("li",{children:[t(r,{className:"text-14 mb-32",component:"div",children:[e("code",{children:"options"})," (",e("em",{children:"object"})," [optional]):"]}),t("ul",{className:"space-y-16",children:[t("li",{children:[e("code",{children:"options.disableHysteresis"})," (",e("em",{children:"bool"})," [optional]): Defaults to ",e("code",{children:"false"}),". Disable the hysteresis. Ignore the scroll direction when determining the ",e("code",{children:"trigger"})," value."]}),t("li",{children:[e("code",{children:"options.target"})," (",e("em",{children:"Node"})," [optional]): Defaults to ",e("code",{children:"window"}),"."]}),t("li",{children:[e("code",{children:"options.threshold"})," (",e("em",{children:"number"})," [optional]): Defaults to ",e("code",{children:"100"}),". Change the ",e("code",{children:"trigger"})," value when the vertical scroll strictly crosses this threshold (exclusive)."]})]})]})}),e(r,{className:"text-14 mt-12 mb-10",component:"h4",children:"Returns"}),t(r,{className:"text-14 mb-32",component:"div",children:[e("code",{children:"trigger"}),": Does the scroll position match the criteria?"]}),e(r,{className:"text-14 mt-12 mb-10",component:"h4",children:"Examples"}),e(k,{component:"pre",className:"language-jsx",children:` 
import useScrollTrigger from '@mui/material/useScrollTrigger';

function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <div>Hello</div>
    </Slide>
  );
}
`}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Enable color on dark"}),t(r,{className:"text-14 mb-32",component:"div",children:["Following the ",e("a",{href:"https://m2.material.io/design/color/dark-theme.html",children:"Material Design guidelines"}),", the ",e("code",{children:"color"})," prop has no effect on the appearance of the app bar in dark mode. You can override this behavior by setting the ",e("code",{children:"enableColorOnDark"})," prop to ",e("code",{children:"true"}),"."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(b,{name:"EnableColorOnDarkAppBar.js",className:"my-16",iframe:!1,component:bo,raw:xo})})]})}export{Do as default};
