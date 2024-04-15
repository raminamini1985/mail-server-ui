import{_ as u,d as s,bb as h,j as e,h as d,B as c,T as n,aD as f,p as x,A as p,cY as g,aQ as v,m as o,ar as w}from"./index-DRLfVU3l.js";import{e as y,o as N,p as b}from"./ScrumboardApi-BYJlYqFc.js";function B(r){const{board:a}=r,{data:l}=y(),i=a.members.map(t=>u.find(l,{id:t}));return s(v,{component:h,to:a.id,role:"button",className:"flex flex-col items-start w-full h-full p-24 shadow rounded-lg hover:shadow-xl transition-shadow duration-150 ease-in-out",children:[s("div",{className:"flex flex-col flex-auto justify-start items-start w-full",children:[e(c,{sx:{backgroundColor:"secondary.light",color:"secondary.dark"},className:"flex items-center justify-center p-16 rounded-full",children:e(d,{children:a.icon})}),e(n,{className:"mt-20 text-lg font-medium leading-5",children:a.title}),e(n,{className:"mt-2 line-clamp-2 text-secondary",children:a.description}),e(f,{className:"w-48 mt-24 h-2"})]}),s("div",{className:"flex flex-col flex-auto justify-end w-full",children:[!!(i!=null&&i.length)&&e("div",{className:"flex items-center mt-24 -space-x-6",children:e(x,{max:4,children:i.map((t,m)=>e(p,{alt:"member",src:t==null?void 0:t.avatar},m))})}),s("div",{className:"flex items-center mt-24 text-md font-md",children:[e(n,{color:"text.secondary",children:"Edited:"}),e(n,{className:"mx-4 truncate",children:g(new Date(a.lastActivity),new Date,{addSuffix:!0})})]})]})]})}function j(){const[r]=N();function a(){r({})}return e(c,{sx:{borderColor:"divider"},className:"flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer border-2 border-gray-300 border-dashed hover:bg-hover transition-colors duration-150 ease-in-out",onClick:a,onKeyDown:a,role:"button",tabIndex:0,children:e(d,{size:48,color:"disabled",children:"heroicons-outline:plus"})})}function D(){const{data:r,isLoading:a}=b(),l={show:{transition:{staggerChildren:.04}}},i={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return a?e(w,{}):s("div",{className:"flex grow shrink-0 flex-col items-center container p-24 sm:p-40",children:[e(o.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},children:e(n,{className:"mt-16 md:mt-96 text-3xl md:text-6xl font-extrabold tracking-tight leading-7 sm:leading-10 text-center",children:"Scrumboard Boards"})}),s(o.div,{variants:l,initial:"hidden",animate:"show",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mt-32 md:mt-64",children:[r==null?void 0:r.map(t=>e(o.div,{variants:i,className:"min-w-full sm:min-w-224 min-h-360",children:e(B,{board:t},t.id)},t.id)),e(o.div,{variants:i,className:"min-w-full sm:min-w-224 min-h-360",children:e(j,{})})]})]})}export{D as default};