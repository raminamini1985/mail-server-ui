import{aT as F,s as T,a2 as j,r as i,a9 as w,j as e,d as t,T as c,dn as k,aa as v,ab as z,b5 as C,bj as L,b3 as $,b1 as l,P as E,F as b,a0 as P,C as U}from"./index-DTYAWF45.js";const W=["icons_list"],_=F.enhanceEndpoints({addTagTypes:W}).injectEndpoints({endpoints:r=>({getIconsList:r.query({query:o=>({url:o}),providesTags:["icons_list"]})}),overrideExisting:!1}),{useGetIconsListQuery:q}=_,B=T(j)(({theme:r})=>({"& .FusePageSimple-header":{backgroundColor:r.palette.background.paper,borderBottomWidth:1,borderStyle:"solid",borderColor:r.palette.divider}}));function G(r){const{pageTitle:o,referenceUrl:u,apiUrl:N,iconName:d}=r,{data:a,isLoading:y}=q(N),[h,x]=i.useState(""),[n,I]=i.useState([]),S=w({mode:"onChange",defaultValues:{searchText:"",size:24}}),{watch:f,control:p}=S,g=f(),m=f("searchText");return i.useEffect(()=>{x(a==null?void 0:a[0])},[a]),i.useEffect(()=>{I(m.length>0?a.filter(s=>!!s.includes(m)):a)},[a,m]),y?e(P,{}):a?e(B,{header:t("div",{className:"flex flex-col sm:flex-row flex-0 sm:items-center sm:justify-between p-24 sm:py-32 sm:px-40",children:[t("div",{className:"flex-1 min-w-0",children:[e("div",{className:"flex flex-wrap items-center font-medium",children:e("div",{children:e(c,{className:"whitespace-nowrap",color:"secondary",children:"User Interface"})})}),e("div",{className:"mt-8",children:e(c,{className:"text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate",children:o})})]}),e("div",{children:u&&e(U,{className:"mt-12 sm:mt-0",variant:"contained",color:"secondary",component:"a",href:u,target:"_blank",role:"button",startIcon:e(b,{children:"heroicons-solid:external-link"}),children:"Official docs"})})]}),content:t("div",{className:"flex-auto p-24 sm:p-40",children:[e(c,{className:"text-20 font-700 mb-16",children:"Usage"}),e(k,{component:"pre",className:"language-jsx my-24",children:`
              <FuseSvgIcon className="text-48" size={${g.size}} color="action">${d}:${h}</FuseSvgIcon>
            `}),e(c,{className:"text-20 font-700 mt-32 mb-16",children:"Icons"}),t("div",{className:"flex flex-col md:flex-row justify-center md:items-end my-24 xs:flex-col md:space-x-24",children:[e("div",{className:"flex flex-1",children:e(v,{name:"searchText",control:p,render:({field:s})=>e(z,{...s,id:"searchText",label:"Search an icon",placeholder:"Search..",className:"flex-auto",InputLabelProps:{shrink:!0},variant:"outlined",fullWidth:!0})})}),e(v,{name:"size",control:p,render:({field:s})=>t(C,{sx:{mt:2,minWidth:120},children:[e(L,{htmlFor:"max-width",children:"Size"}),t($,{autoFocus:!0,...s,label:"Size",children:[e(l,{value:16,children:"16"}),e(l,{value:20,children:"20"}),e(l,{value:24,children:"24"}),e(l,{value:32,children:"32"}),e(l,{value:40,children:"40"}),e(l,{value:48,children:"48"}),e(l,{value:64,children:"64"})]})]})})]}),t("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 sm:gap-32 py-24",children:[n==null?void 0:n.map(s=>t(E,{className:"flex flex-col items-center justify-center p-16 border-2 min-h-120 rounded cursor-pointer",elevation:0,onClick:()=>x(s),sx:{borderColor:s===h&&"secondary.main"},children:[e("div",{className:"flex items-center justify-center mb-12",children:e(b,{className:"text-48",size:g.size,color:"action",children:`${d}:${s}`})}),e(c,{className:"text-sm text-center break-all",color:"text.secondary",children:`${d}:${s}`})]},s)),(n==null?void 0:n.length)===0&&e("div",{className:"col-span-6 flex flex-auto items-center justify-center w-full h-full p-32 md:p-128",children:e(c,{color:"text.secondary",variant:"h5",children:"No results!"})})]})]})}):null}export{G as default};
