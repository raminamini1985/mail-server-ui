import{s as o,a2 as r,a3 as c,Q as d,r as s,j as e,d as u,a4 as f,a5 as m,a6 as p,x,z as g,F as h,T as b,a7 as v}from"./index-DTYAWF45.js";import{D as y}from"./DocumentationNavigation-TV0mgQdh.js";import"./ChangelogDoc-CbVtVqTE.js";const S=o(r)(({theme:a})=>({"& .FusePageCarded-header":{},"& .FusePageCarded-content":{backgroundColor:a.palette.background.default},"& .FusePageCarded-wrapper":{},"& .FusePageCarded-leftSidebar":{},"& .description":{fontSize:16,marginBottom:24}}));function P(){const a=c(i=>i.breakpoints.down("lg")),n=d(),[l,t]=s.useState(!a);return s.useEffect(()=>{t(!a)},[a]),s.useEffect(()=>{a&&t(!1)},[n,a]),e(S,{header:u("div",{className:"flex items-center justify-center py-12 px-4 md:px-12 max-w-full w-3xl h-full",children:[e(g,{onClick:()=>t(!l),"aria-label":"toggle left sidebar",size:"large",children:e(h,{children:"heroicons-outline:view-list"})}),e("div",{className:"flex flex-1 items-center sm:justify-center px-8 lg:px-12",children:e(b,{component:v,color:"textPrimary",to:"/documentation",className:"text-14 md:text-18 font-medium flex items-center",role:"button",children:e("span",{children:"Fuse React - Documentation"})})})]}),content:e("div",{className:"p-16 md:p-24 max-w-3xl min-h-full flex flex-auto flex-col",children:e("div",{className:"flex flex-col flex-1 relative py-32",children:e(f,{children:e(m,{})})})}),leftSidebarContent:e("div",{className:"px-16 py-24",children:e(p,{className:x("navigation"),navigation:y.children})}),leftSidebarOpen:l,leftSidebarWidth:288,leftSidebarOnClose:()=>{t(!1)},scroll:a?"normal":"content"})}export{P as default};
