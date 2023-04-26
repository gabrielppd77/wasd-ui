import{r as P}from"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";var l={},S={get exports(){return l},set exports(e){l=e}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=P,h=Symbol.for("react.element"),j=Symbol.for("react.fragment"),w=Object.prototype.hasOwnProperty,R=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,o){var t,n={},f=null,c=null;o!==void 0&&(f=""+o),r.key!==void 0&&(f=""+r.key),r.ref!==void 0&&(c=r.ref);for(t in r)w.call(r,t)&&!B.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)n[t]===void 0&&(n[t]=r[t]);return{$$typeof:h,type:e,key:f,ref:c,props:n,_owner:R.current}}p.Fragment=j;p.jsx=x;p.jsxs=x;(function(e){e.exports=p})(S);var I=Object.defineProperty,i=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,_=(e,r,o)=>r in e?I(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,N=(e,r)=>{for(var o in r||(r={}))g.call(r,o)&&_(e,o,r[o]);if(i)for(var o of i(r))E.call(r,o)&&_(e,o,r[o]);return e},k=(e,r)=>{var o={};for(var t in e)g.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&i)for(var t of i(e))r.indexOf(t)<0&&E.call(e,t)&&(o[t]=e[t]);return o};function L(e){const r=k(e,[]);return l.jsx("button",N({className:"bg-orange-600 rounded-md px-4 py-2"},r))}const D={title:"Button",component:L},a={args:{children:"Botão"}},s={args:{children:"Enviar"}};var m,u,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Botão'
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var v,y,O;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Enviar'
  }
}`,...(O=(y=s.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};const F=["Primary","Secondary"];export{a as Primary,s as Secondary,F as __namedExportsOrder,D as default};
//# sourceMappingURL=Button.stories-ac8e8bca.js.map
