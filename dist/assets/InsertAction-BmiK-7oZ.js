import{r as e,j as t}from"./vendor-D21JgsWP.js";import{a as s,u as o,j as a,e as r}from"./index-ClqwfEUu.js";import{A as i}from"./ActionMsg-CNHBAleQ.js";import{u as c}from"./useValidateScope-CzIszaus.js";const d=({scope:d,onActionResult:n,whitelist:l=["ownerId"]})=>{const u=s((e=>e.setMainMessage)),f=o((e=>e.pageData)),p=s((e=>e.filters)),{isValid:m,modelSchema:j}=c({scope:d,whitelist:l});return e.useEffect((()=>{(async()=>{if(!m||!j)return void n(!1);delete j.id,delete j.createdAt,delete j.updatedAt,delete j.ownerId;const e={...j,...f[d],...p[d]};try{await a(d,e),u(`Successfully created item for scope: ${d}`,"success"),n(!0)}catch(t){u(r(t,d),"error"),n(!1)}})()}),[]),t.jsxs(i,{type:"info",children:["RUN: Insert to: ",d]})};export{d as default};
