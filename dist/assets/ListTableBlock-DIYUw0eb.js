import{R as e,r as a,j as s}from"./vendor-C2_yBtKn.js";import{b as r,u as n,g as t,p as l,c as i}from"./index-CbNYdk-f.js";const c=e.memo((({path:c,repeater:o,actions:d,className:h="",url:m=""})=>{const{navigateTo:p}=r(),u=n(a.useCallback((e=>t(c)(e.pageData)),[c]))||[],j=a.useMemo((()=>""!==c.trim()),[c]),x=a.useMemo((()=>Array.isArray(u)),[u]),y=a.useCallback((e=>{p(l(m,e))}),[p,m]),g=a.useCallback(((e,a,s)=>{e.preventDefault(),e.stopPropagation(),p(l(a,s))}),[p]);if(!j)return s.jsx("div",{children:"Nieprawidłowa ścieżka do danych."});if(!x)return s.jsx("div",{children:"Nieprawidłowe dane - oczekiwano tablicy."});const k=(a,r=!1)=>s.jsxs("tr",{className:"hover cursor-pointer",onClick:()=>!r&&y(a),children:[o.map((({key:e})=>((e,a,r)=>{const n=(t=e,a.split(".").reduce(((e,a)=>e&&e[a]),t));var t;let l;return l=r?s.jsx("div",{className:"skeleton p-1 w-full",children:" "}):"string"==typeof n?n:null!=n?"Dane są, ale nie są typu string":"Brak danych",s.jsx("td",{children:l},a)})(a,e,r))),d&&d.length>0&&s.jsx("td",{className:"gap-sm flex justify-end",children:d.map(((n,t)=>((a,r,n,t)=>n?s.jsx("div",{className:"skeleton w-8",children:" "},t):a.url?s.jsx("div",{className:"bg-base-300 rounded p-sm -my-xs hover:bg-base-100",onClick:e=>g(e,a.url,r),children:a.icon&&"function"==typeof i(a.icon)&&e.createElement(i(a.icon))},t):s.jsx("span",{children:a.icon},t))(n,a,r,t)))},"actions")]},r?`skeleton-${Math.random()}`:a.id||Math.random());return s.jsx("div",{className:`container m-auto ${h}`,children:s.jsxs("table",{className:"table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[o.map((({label:e,key:a})=>s.jsx("th",{children:e},a))),d&&d.length>0&&s.jsx("th",{className:"text-right",children:"Akcje"},"actions-header")]})}),s.jsx("tbody",{children:Array.isArray(u)&&0===u.length?Array.from({length:9}).map((()=>k({},!0))):u.map((e=>k(e)))})]})})}));export{c as default};
