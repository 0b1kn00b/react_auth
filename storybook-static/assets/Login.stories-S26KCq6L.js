import{j as a}from"./jsx-runtime-qGIIFXMu.js";import{c,a as t,C as s,F as u,b as h,T as i,I as n,B as x,d as g}from"./Util-Ch53UBnX.js";import"./index-CDs2tPxN.js";import"./index-DltojG78.js";import"./iframe-8VQ7OU6e.js";import"../sb-preview/runtime.js";import"./index-B-yFm4aN.js";import"./index-BdlbPDEc.js";import"./mapValues-DQlZVBkJ.js";import"./isPlainObject-C9an83ZX.js";import"./index-DrFu-skq.js";const p={email:"",password:""},w=c().shape({email:t().email().required(),password:t().required()}),j=o=>{alert(JSON.stringify(o,null,2))},b=({...o})=>a.jsx(s,{className:"md:max-w-md animate-in fade-in-0 duration-700 ease-in shadow-2xl",children:a.jsxs(s.Body,{className:"text-center items-center",children:[a.jsx(s.Title,{children:"login"}),a.jsx(u,{onSubmit:j,validationSchema:w,initialValues:p,children:e=>a.jsxs(h,{className:"grid gap-9",children:[a.jsx(i,{position:"bottom",open:!!(e.errors.email&&e.touched.email),message:e.errors.email??"",children:a.jsx(n,{placeholder:"email",className:e.touched.email&&e.errors.email?"border-rose-500":"",name:"email",value:e.values.email,onChange:e.handleChange,onBlur:e.handleBlur})}),a.jsx(i,{position:"bottom",open:!!(e.errors.password&&e.touched.password),message:e.errors.password??"",children:a.jsx(n,{placeholder:"password",className:e.touched.password&&e.errors.password?"border-rose-500":"",name:"password",value:e.values.password,type:"password",onChange:e.handleChange,onBlur:e.handleBlur})}),a.jsx(x,{id:"submit",type:"submit",children:"login"})]})})]})}),_={component:b,decorators:[g]},r={args:{}};var l,m,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const q=["Init"];export{r as Init,q as __namedExportsOrder,_ as default};
