import{a8 as l,a9 as y,d as t,j as e,T as c,a7 as b,aa as n,ab as o,b5 as v,bk as C,bC as N,b7 as T,C as j,_ as P,P as k,H as d,ad as F,ac as S,B as m}from"./index-DTYAWF45.js";const W=l.object({name:l.string().nonempty("You must enter your name"),email:l.string().email("You must enter a valid email").nonempty("You must enter an email"),password:l.string().nonempty("Please enter your password.").min(8,"Password is too short - should be 8 chars minimum."),passwordConfirm:l.string().nonempty("Password confirmation is required"),acceptTermsConditions:l.boolean().refine(r=>r===!0,"The terms and conditions must be accepted.")}).refine(r=>r.password===r.passwordConfirm,{message:"Passwords must match",path:["passwordConfirm"]}),u={name:"",email:"",password:"",passwordConfirm:"",acceptTermsConditions:!1};function z(){const{control:r,formState:h,handleSubmit:p,reset:g}=y({mode:"onChange",defaultValues:u,resolver:S(W)}),{isValid:f,dirtyFields:x,errors:a}=h;function w(){g(u)}return t("div",{className:"flex min-w-0 flex-auto flex-col items-center sm:flex-row sm:justify-center md:items-start md:justify-start",children:[e(k,{className:"h-full w-full px-16 py-32 ltr:border-r-1 rtl:border-l-1 sm:h-auto sm:w-auto sm:rounded-2xl sm:p-48 sm:shadow md:flex md:h-full md:justify-end md:rounded-none md:p-64 md:pt-96 md:shadow-none",children:t("div",{className:"mx-auto w-full max-w-320 sm:mx-0 sm:w-320",children:[e("img",{className:"w-48",src:"assets/images/logo/logo.svg",alt:"logo"}),e(c,{className:"mt-32 text-4xl font-extrabold leading-tight tracking-tight",children:"Sign in"}),t("div",{className:"mt-2 flex items-baseline font-medium",children:[e(c,{children:"Don't have an account?"}),e(b,{className:"ml-4",to:"/sign-up",children:"Sign up"})]}),t("form",{name:"registerForm",noValidate:!0,className:"mt-32 flex w-full flex-col justify-center",onSubmit:p(w),children:[e(n,{name:"name",control:r,render:({field:i})=>{var s;return e(o,{...i,className:"mb-24",label:"Name",autoFocus:!0,type:"name",error:!!a.name,helperText:(s=a==null?void 0:a.name)==null?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0})}}),e(n,{name:"email",control:r,render:({field:i})=>{var s;return e(o,{...i,className:"mb-24",label:"Email",type:"email",error:!!a.email,helperText:(s=a==null?void 0:a.email)==null?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0})}}),e(n,{name:"password",control:r,render:({field:i})=>{var s;return e(o,{...i,className:"mb-24",label:"Password",type:"password",error:!!a.password,helperText:(s=a==null?void 0:a.password)==null?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0})}}),e(n,{name:"passwordConfirm",control:r,render:({field:i})=>{var s;return e(o,{...i,className:"mb-24",label:"Password (Confirm)",type:"password",error:!!a.passwordConfirm,helperText:(s=a==null?void 0:a.passwordConfirm)==null?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0})}}),e(n,{name:"acceptTermsConditions",control:r,render:({field:i})=>{var s;return t(v,{className:"items-center",error:!!a.acceptTermsConditions,children:[e(C,{label:"I agree to the Terms of Service and Privacy Policy",control:e(N,{size:"small",...i})}),e(T,{children:(s=a==null?void 0:a.acceptTermsConditions)==null?void 0:s.message})]})}}),e(j,{variant:"contained",color:"secondary",className:" mt-24 w-full","aria-label":"Register",disabled:P.isEmpty(x)||!f,type:"submit",size:"large",children:"Create your free account"})]})]})}),t(d,{className:"relative hidden h-full flex-auto items-center justify-center overflow-hidden p-64 md:flex lg:px-112",sx:{backgroundColor:"primary.main"},children:[e("svg",{className:"pointer-events-none absolute inset-0",viewBox:"0 0 960 540",width:"100%",height:"100%",preserveAspectRatio:"xMidYMax slice",xmlns:"http://www.w3.org/2000/svg",children:t(d,{component:"g",sx:{color:"primary.light"},className:"opacity-20",fill:"none",stroke:"currentColor",strokeWidth:"100",children:[e("circle",{r:"234",cx:"196",cy:"23"}),e("circle",{r:"234",cx:"790",cy:"491"})]})}),t(d,{component:"svg",className:"absolute -right-64 -top-64 opacity-20",sx:{color:"primary.light"},viewBox:"0 0 220 192",width:"220px",height:"192px",fill:"none",children:[e("defs",{children:e("pattern",{id:"837c3e70-6c3a-44e6-8854-cc48c737b659",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:e("rect",{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"})})}),e("rect",{width:"220",height:"192",fill:"url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"})]}),t("div",{className:"relative z-10 w-full max-w-2xl",children:[t("div",{className:"text-7xl font-bold leading-none text-gray-100",children:[e("div",{children:"Welcome to"}),e("div",{children:"our community"})]}),e("div",{className:"mt-24 text-lg leading-6 tracking-tight text-gray-400",children:"Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today."}),t("div",{className:"mt-32 flex items-center",children:[t(F,{sx:{"& .MuiAvatar-root":{borderColor:"primary.main"}},children:[e(m,{src:"assets/images/avatars/female-18.jpg"}),e(m,{src:"assets/images/avatars/female-11.jpg"}),e(m,{src:"assets/images/avatars/male-09.jpg"}),e(m,{src:"assets/images/avatars/male-16.jpg"})]}),e("div",{className:"ml-16 font-medium tracking-tight text-gray-400",children:"More than 17k people joined us, it's your turn"})]})]})]})]})}export{z as default};
