import{c as l,j as t,g as m,d as u,L as d,T as h,cx as f}from"./index-C8FJCBfb.js";import{D as p}from"./DocumentationNavigation-CoT9gNpi.js";const b=(e,n)=>{function a(r,c){if(r.url===c)return[];if(r.children)for(const i of r.children){const s=a(i,c);if(Array.isArray(s))return s.unshift(i),s}return!1}return a(e,n)||[]};function y(e){const{className:n}=e,{pathname:a}=l(),o=b(p,a);return t("div",{className:m("flex-1 mb-16 sm:mb-0",n),children:u(f,{"aria-label":"breadcrumb",children:[t(d,{className:"font-semibold hover:underline",color:"secondary",to:"/documentation",role:"button",children:"Documentation"}),o.map(r=>t(h,{className:"cursor-default",children:r.title},r.id))]})})}export{y as D};