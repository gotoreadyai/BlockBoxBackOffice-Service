import{r as e,a as t}from"./react-1HmkrDbp.js";import"./react-dom-rf6Ir-x6.js";import{R as r,N as n,u as a,a as o,b as i,c as s}from"./react-router-BZ98txhT.js";import{c as l,s as c,b as u}from"./@remix-run-BGIWjZ3f.js";
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}const v=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(y){}const p=t.startTransition;function m(t){let{basename:n,children:a,future:o,window:i}=t,s=e.useRef();null==s.current&&(s.current=l({window:i,v5Compat:!0}));let c=s.current,[u,f]=e.useState({action:c.action,location:c.location}),{v7_startTransition:v}=o||{},m=e.useCallback((e=>{v&&p?p((()=>f(e))):f(e)}),[f,v]);return e.useLayoutEffect((()=>c.listen(m)),[c,m]),e.createElement(r,{basename:n,children:a,location:u.location,navigationType:u.action,navigator:c,future:o})}const w="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,d=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,h=e.forwardRef((function(t,r){let l,{onClick:p,relative:m,reloadDocument:h,replace:b,state:R,target:S,to:g,preventScrollReset:T,unstable_viewTransition:U}=t,j=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(t,v),{basename:_}=e.useContext(n),F=!1;if("string"==typeof g&&d.test(g)&&(l=g,w))try{let e=new URL(window.location.href),t=g.startsWith("//")?new URL(e.protocol+g):new URL(g),r=c(t.pathname,_);t.origin===e.origin&&null!=r?g=r+t.search+t.hash:F=!0}catch(y){}let C=a(g,{relative:m}),k=function(t,r){let{target:n,replace:a,state:l,preventScrollReset:c,relative:f,unstable_viewTransition:v}=void 0===r?{}:r,p=o(),m=i(),w=s(t,{relative:f});return e.useCallback((e=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(e,n)){e.preventDefault();let r=void 0!==a?a:u(m)===u(w);p(t,{replace:r,state:l,preventScrollReset:c,relative:f,unstable_viewTransition:v})}}),[m,p,w,a,l,n,t,c,f,v])}(g,{replace:b,state:R,target:S,preventScrollReset:T,relative:m,unstable_viewTransition:U});return e.createElement("a",f({},j,{href:l||C,onClick:F||h?p:function(e){p&&p(e),e.defaultPrevented||k(e)},ref:r,target:S}))}));var b,R,S,g;(R=b||(b={})).UseScrollRestoration="useScrollRestoration",R.UseSubmit="useSubmit",R.UseSubmitFetcher="useSubmitFetcher",R.UseFetcher="useFetcher",R.useViewTransitionState="useViewTransitionState",(g=S||(S={})).UseFetcher="useFetcher",g.UseFetchers="useFetchers",g.UseScrollRestoration="useScrollRestoration";export{m as B,h as L};
