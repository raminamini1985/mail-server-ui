import{z as l,k as y,d as s,j as e,T as n,C as m,n as c,o as v,_ as b,L as N,P as C,B as d,p as j,t as P,A as o}from"./index-C8FJCBfb.js";const k=l.object({password:l.string().nonempty("Please enter your password.").min(8,"Password is too short - should be 8 chars minimum."),passwordConfirm:l.string().nonempty("Password confirmation is required")}).refine(r=>r.password===r.passwordConfirm,{message:"Passwords must match",path:["passwordConfirm"]}),u={password:"",passwordConfirm:""};function R(){const{control:r,formState:h,handleSubmit:p,reset:f}=y({mode:"onChange",defaultValues:u,resolver:P(k)}),{isValid:g,dirtyFields:w,errors:a}=h;function x(){f(u)}return s("div",{className:"flex min-w-0 flex-auto flex-col items-center sm:flex-row sm:justify-center md:items-start md:justify-start",children:[e(C,{className:"h-full w-full px-16 py-8 ltr:border-r-1 rtl:border-l-1 sm:h-auto sm:w-auto sm:rounded-2xl sm:p-48 sm:shadow md:flex md:h-full md:w-1/2 md:items-center md:justify-end md:rounded-none md:p-64 md:shadow-none",children:s("div",{className:"mx-auto w-full max-w-320 sm:mx-0 sm:w-320",children:[e("img",{className:"w-48",src:"assets/images/logo/logo.svg",alt:"logo"}),e(n,{className:"mt-32 text-4xl font-extrabold leading-tight tracking-tight",children:"Reset your password"}),e(n,{className:"font-medium",children:"Create a new password for your account"}),s("form",{name:"registerForm",noValidate:!0,className:"mt-32 flex w-full flex-col justify-center",onSubmit:p(x),children:[e(m,{name:"password",control:r,render:({field:i})=>{var t;return e(c,{...i,className:"mb-24",label:"Password",type:"password",error:!!a.password,helperText:(t=a==null?void 0:a.password)==null?void 0:t.message,variant:"outlined",required:!0,fullWidth:!0})}}),e(m,{name:"passwordConfirm",control:r,render:({field:i})=>{var t;return e(c,{...i,className:"mb-24",label:"Password (Confirm)",type:"password",error:!!a.passwordConfirm,helperText:(t=a==null?void 0:a.passwordConfirm)==null?void 0:t.message,variant:"outlined",required:!0,fullWidth:!0})}}),e(v,{variant:"contained",color:"secondary",className:" mt-4 w-full","aria-label":"Register",disabled:b.isEmpty(w)||!g,type:"submit",size:"large",children:"Reset your password"}),s(n,{className:"mt-32 text-md font-medium",color:"text.secondary",children:[e("span",{children:"Return to"}),e(N,{className:"ml-4",to:"/sign-in",children:"sign in"})]})]})]})}),s(d,{className:"relative hidden h-full flex-auto items-center justify-center overflow-hidden p-64 md:flex lg:px-112",sx:{backgroundColor:"primary.main"},children:[e("svg",{className:"pointer-events-none absolute inset-0",viewBox:"0 0 960 540",width:"100%",height:"100%",preserveAspectRatio:"xMidYMax slice",xmlns:"http://www.w3.org/2000/svg",children:s(d,{component:"g",sx:{color:"primary.light"},className:"opacity-20",fill:"none",stroke:"currentColor",strokeWidth:"100",children:[e("circle",{r:"234",cx:"196",cy:"23"}),e("circle",{r:"234",cx:"790",cy:"491"})]})}),s(d,{component:"svg",className:"absolute -right-64 -top-64 opacity-20",sx:{color:"primary.light"},viewBox:"0 0 220 192",width:"220px",height:"192px",fill:"none",children:[e("defs",{children:e("pattern",{id:"837c3e70-6c3a-44e6-8854-cc48c737b659",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:e("rect",{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"})})}),e("rect",{width:"220",height:"192",fill:"url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"})]}),s("div",{className:"relative z-10 w-full max-w-2xl",children:[s("div",{className:"text-7xl font-bold leading-none text-gray-100",children:[e("div",{children:"Welcome to"}),e("div",{children:"our community"})]}),e("div",{className:"mt-24 text-lg leading-6 tracking-tight text-gray-400",children:"Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today."}),s("div",{className:"mt-32 flex items-center",children:[s(j,{sx:{"& .MuiAvatar-root":{borderColor:"primary.main"}},children:[e(o,{src:"assets/images/avatars/female-18.jpg"}),e(o,{src:"assets/images/avatars/female-11.jpg"}),e(o,{src:"assets/images/avatars/male-09.jpg"}),e(o,{src:"assets/images/avatars/male-16.jpg"})]}),e("div",{className:"ml-16 font-medium tracking-tight text-gray-400",children:"More than 17k people joined us, it's your turn"})]})]})]})]})}export{R as default};