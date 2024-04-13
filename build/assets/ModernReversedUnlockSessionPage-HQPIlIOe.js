import{a8 as i,a9 as y,j as e,d as a,H as o,ad as v,B as l,T as n,aa as c,ab as m,C as b,_ as N,a7 as j,P as k,ac as B}from"./index-DTYAWF45.js";const C=i.object({name:i.string().nonempty("You must enter your name"),password:i.string().nonempty("Please enter your password.").min(8,"Password is too short - should be 8 chars minimum.")}),u={name:"Brian Hughes",password:""};function P(){const{control:d,formState:h,handleSubmit:g,reset:p}=y({mode:"onChange",defaultValues:u,resolver:B(C)}),{isValid:x,dirtyFields:f,errors:s}=h;function w(){p(u)}return e("div",{className:"flex min-w-0 flex-auto flex-col items-center sm:justify-center md:p-32",children:a(k,{className:"flex min-h-full w-full overflow-hidden rounded-0 sm:min-h-auto sm:w-auto sm:rounded-2xl sm:shadow md:w-full md:max-w-6xl",children:[a(o,{className:"relative hidden h-full flex-auto items-center justify-center overflow-hidden p-64 md:flex lg:px-112",sx:{backgroundColor:"primary.main"},children:[e("svg",{className:"pointer-events-none absolute inset-0",viewBox:"0 0 960 540",width:"100%",height:"100%",preserveAspectRatio:"xMidYMax slice",xmlns:"http://www.w3.org/2000/svg",children:a(o,{component:"g",sx:{color:"primary.light"},className:"opacity-20",fill:"none",stroke:"currentColor",strokeWidth:"100",children:[e("circle",{r:"234",cx:"196",cy:"23"}),e("circle",{r:"234",cx:"790",cy:"491"})]})}),a(o,{component:"svg",className:"absolute -right-64 -top-64 opacity-20",sx:{color:"primary.light"},viewBox:"0 0 220 192",width:"220px",height:"192px",fill:"none",children:[e("defs",{children:e("pattern",{id:"837c3e70-6c3a-44e6-8854-cc48c737b659",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:e("rect",{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"})})}),e("rect",{width:"220",height:"192",fill:"url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"})]}),a("div",{className:"relative z-10 w-full max-w-2xl",children:[a("div",{className:"text-7xl font-bold leading-none text-gray-100",children:[e("div",{children:"Welcome to"}),e("div",{children:"our community"})]}),e("div",{className:"mt-24 text-lg leading-6 tracking-tight text-gray-400",children:"Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today."}),a("div",{className:"mt-32 flex items-center",children:[a(v,{sx:{"& .MuiAvatar-root":{borderColor:"primary.main"}},children:[e(l,{src:"assets/images/avatars/female-18.jpg"}),e(l,{src:"assets/images/avatars/female-11.jpg"}),e(l,{src:"assets/images/avatars/male-09.jpg"}),e(l,{src:"assets/images/avatars/male-16.jpg"})]}),e("div",{className:"ml-16 font-medium tracking-tight text-gray-400",children:"More than 17k people joined us, it's your turn"})]})]})]}),e("div",{className:"w-full px-16 py-32 ltr:border-l-1 rtl:border-r-1 sm:w-auto sm:p-48 md:p-64",children:a("div",{className:"mx-auto w-full max-w-320 sm:mx-0 sm:w-320",children:[e("img",{className:"w-48",src:"assets/images/logo/logo.svg",alt:"logo"}),e(n,{className:"mt-32 text-4xl font-extrabold leading-tight tracking-tight",children:"Unlock your session"}),e(n,{className:"font-medium",children:"Your session is locked due to inactivity"}),a("form",{name:"registerForm",noValidate:!0,className:"mt-32 flex w-full flex-col justify-center",onSubmit:g(w),children:[e(c,{name:"name",control:d,render:({field:r})=>{var t;return e(m,{...r,className:"mb-24",label:"Full name",autoFocus:!0,type:"name",error:!!s.name,helperText:(t=s==null?void 0:s.name)==null?void 0:t.message,variant:"outlined",fullWidth:!0,disabled:!0})}}),e(c,{name:"password",control:d,render:({field:r})=>{var t;return e(m,{...r,className:"mb-24",label:"Password",type:"password",error:!!s.password,helperText:(t=s==null?void 0:s.password)==null?void 0:t.message,variant:"outlined",required:!0,fullWidth:!0})}}),e(b,{variant:"contained",color:"secondary",className:" mt-4 w-full","aria-label":"Register",disabled:N.isEmpty(f)||!x,type:"submit",size:"large",children:"Unlock your session"}),a(n,{className:"mt-32 text-md font-medium",color:"text.secondary",children:[e("span",{children:"I'm not"}),e(j,{className:"ml-4",to:"/sign-in",children:"Brian Hughes"})]})]})]})})]})})}export{P as default};
