if(!self.define){let s,e={};const r=(r,l)=>(r=new URL(r+".js",l).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(l,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>r(s,n),o={module:{uri:n},exports:u,require:t};e[n]=Promise.all(l.map((s=>o[s]||t(s)))).then((s=>(i(...s),u)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/@remix-run-BGIWjZ3f.js",revision:null},{url:"assets/@tanstack-Bvc_O6Tp.js",revision:null},{url:"assets/camelcase-css-DK2cFEjy.js",revision:null},{url:"assets/css-selector-tokenizer-BaFDaa83.js",revision:null},{url:"assets/cssesc-xwk1Qk3S.js",revision:null},{url:"assets/culori-Db-KMzJI.js",revision:null},{url:"assets/daisyui-CcDWnvUM.js",revision:null},{url:"assets/date-fns-DRFbL8hS.js",revision:null},{url:"assets/fastparse-D1qLkcQ1.js",revision:null},{url:"assets/index-BqZna5tB.css",revision:null},{url:"assets/index-C8wuEVIg.js",revision:null},{url:"assets/nanoid-BtLXeu9i.js",revision:null},{url:"assets/picocolors-NJ40uvHn.js",revision:null},{url:"assets/postcss-CRVEJhQe.js",revision:null},{url:"assets/postcss-js-2lojRTWs.js",revision:null},{url:"assets/react-1HmkrDbp.js",revision:null},{url:"assets/react-dom-rf6Ir-x6.js",revision:null},{url:"assets/react-icons-Bf9n_TIE.js",revision:null},{url:"assets/react-router-BZ98txhT.js",revision:null},{url:"assets/react-router-dom-sXgolB4Q.js",revision:null},{url:"assets/scheduler-DhxmCZ7v.js",revision:null},{url:"assets/uuid-aGgpFg1T.js",revision:null},{url:"index.html",revision:"5f7f0c7aa3aca63290473ce9546393e4"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"f0bce51018098d7e6ae6ab406e3325af"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
