import{j as a}from"./jsx-runtime-qGIIFXMu.js";import{c as h,a as t,e as w,C as o,F as p,b as r,T as i,I as l,B as x,d as g}from"./Util-CPlbjN2r.js";import"./index-CDs2tPxN.js";import"./index-BNofvV9a.js";import"./iframe-Dhkcgqrh.js";import"../sb-preview/runtime.js";import"./index-B-yFm4aN.js";import"./index-BdlbPDEc.js";import"./mapValues-DQlZVBkJ.js";import"./isPlainObject-C9an83ZX.js";import"./index-DrFu-skq.js";const j=h().shape({email:t().email().required(),password:t().required().min(10),password_repeat:t().required().oneOf([w("password")])}),b=({..._})=>{const u={email:"",password:"",password_repeat:""},c=e=>{alert(JSON.stringify(e,null,2))};return a.jsx(o,{className:"md:max-w-md animate-in fade-in-0 duration-700 ease-in shadow-2xl",children:a.jsxs(o.Body,{className:"text-center items-center",children:[a.jsx(o.Title,{children:"sign up"}),a.jsx(p,{validationSchema:j,initialValues:u,onSubmit:c,children:e=>(console.log(e.errors),a.jsxs(r,{className:"group",onSubmit:e.handleSubmit,children:[a.jsx(r.Label,{htmlFor:"email",title:"email"}),a.jsx(i,{position:"right",open:!!(e.errors.email&&e.touched.email),message:e.errors.email??""}),a.jsx(l,{className:e.errors.email&&e.touched.email?"border-rose-500":"",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email,id:"email",name:"email",type:"email"}),a.jsx(r.Label,{htmlFor:"password",title:"password"}),a.jsx(i,{position:"right",open:!!(e.errors.password&&e.touched.password),message:e.errors.password??""}),a.jsx(l,{className:e.errors.password&&e.touched.password?"border-rose-500":"",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.password,id:"password",type:"password"}),a.jsx(r.Label,{htmlFor:"password_repeat",title:"repeat password"}),a.jsx(i,{position:"right",open:!!(e.errors.password_repeat&&e.touched.password_repeat),message:e.errors.password_repeat??""}),a.jsx(l,{className:e.errors.password_repeat&&e.touched.password_repeat?"border-rose-500":"",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.password_repeat,id:"password_repeat",type:"password"}),a.jsx(r.Label,{htmlFor:"submit"}),a.jsx(x,{id:"submit",type:"submit",children:"sign up"})]}))})]})})},q={component:b,decorators:[g]},s={args:{}};var d,n,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(m=(n=s.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const O=["Init"];export{s as Init,O as __namedExportsOrder,q as default};
