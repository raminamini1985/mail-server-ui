import{z as o,k as p,d as t,j as e,T as s,C as y,n as w,o as v,_ as b,P as N,B as i,p as j,t as C,A as l}from"./index-DaquC3HQ.js";import{F as S}from"./FuseCountdown-Q-5QubRD.js";const k=o.object({email:o.string().email("You must enter a valid email").nonempty("You must enter an email")}),n={email:""};function B(){const{control:m,formState:c,handleSubmit:d,reset:u}=p({mode:"onChange",defaultValues:n,resolver:C(k)}),{isValid:h,dirtyFields:g,errors:a}=c;function f(){u(n)}return t("div",{className:"flex min-w-0 flex-auto flex-col items-center sm:flex-row sm:justify-center md:items-start md:justify-start",children:[e(N,{className:"h-full w-full px-16 py-8 ltr:border-r-1 rtl:border-l-1 sm:h-auto sm:w-auto sm:rounded-2xl sm:p-48 sm:shadow md:flex md:h-full md:w-1/2 md:items-center md:justify-end md:rounded-none md:p-64 md:shadow-none",children:t("div",{className:"mx-auto w-full max-w-320 sm:mx-0 sm:w-320",children:[e("img",{className:"w-48",src:"assets/images/logo/logo.svg",alt:"logo"}),e(s,{className:"mt-32 text-4xl font-extrabold leading-tight tracking-tight",children:"Almost there!"}),e(s,{className:"mt-2",children:"Do you want to be notified when we are ready? Register below so we can notify you about the launch!"}),e("div",{className:"flex flex-col items-center py-48",children:e(S,{endDate:"2071-07-28"})}),t("form",{name:"comingSoonForm",noValidate:!0,className:"flex w-full flex-col justify-center",onSubmit:d(f),children:[e(y,{name:"email",control:m,render:({field:x})=>{var r;return e(w,{...x,className:"mb-24",label:"Email address",type:"email",error:!!a.email,helperText:(r=a==null?void 0:a.email)==null?void 0:r.message,variant:"outlined",required:!0,fullWidth:!0})}}),e(v,{variant:"contained",color:"secondary",className:" mt-4 w-full","aria-label":"Register",disabled:b.isEmpty(g)||!h,type:"submit",size:"large",children:"Notify me when you launch"}),e(s,{className:"mt-32 text-md font-medium",color:"text.secondary",children:"This isn't a newsletter subscription. We will send one email to you when we launch and then you will be removed from the list."})]})]})}),t(i,{className:"relative hidden h-full flex-auto items-center justify-center overflow-hidden p-64 md:flex lg:px-112",sx:{backgroundColor:"primary.main"},children:[e("svg",{className:"pointer-events-none absolute inset-0",viewBox:"0 0 960 540",width:"100%",height:"100%",preserveAspectRatio:"xMidYMax slice",xmlns:"http://www.w3.org/2000/svg",children:t(i,{component:"g",sx:{color:"primary.light"},className:"opacity-20",fill:"none",stroke:"currentColor",strokeWidth:"100",children:[e("circle",{r:"234",cx:"196",cy:"23"}),e("circle",{r:"234",cx:"790",cy:"491"})]})}),t(i,{component:"svg",className:"absolute -right-64 -top-64 opacity-20",sx:{color:"primary.light"},viewBox:"0 0 220 192",width:"220px",height:"192px",fill:"none",children:[e("defs",{children:e("pattern",{id:"837c3e70-6c3a-44e6-8854-cc48c737b659",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:e("rect",{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"})})}),e("rect",{width:"220",height:"192",fill:"url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"})]}),t("div",{className:"relative z-10 w-full max-w-2xl",children:[t("div",{className:"text-7xl font-bold leading-none text-gray-100",children:[e("div",{children:"Welcome to"}),e("div",{children:"our community"})]}),e("div",{className:"mt-24 text-lg leading-6 tracking-tight text-gray-400",children:"Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today."}),t("div",{className:"mt-32 flex items-center",children:[t(j,{sx:{"& .MuiAvatar-root":{borderColor:"primary.main"}},children:[e(l,{src:"assets/images/avatars/female-18.jpg"}),e(l,{src:"assets/images/avatars/female-11.jpg"}),e(l,{src:"assets/images/avatars/male-09.jpg"}),e(l,{src:"assets/images/avatars/male-16.jpg"})]}),e("div",{className:"ml-16 font-medium tracking-tight text-gray-400",children:"More than 17k people joined us, it's your turn"})]})]})]})]})}export{B as default};