import{r as s,j as t}from"./vendor-BORITBlt.js";import{U as e,c as o}from"./index-DsguY7Qn.js";import{a as n}from"./ActionBlock-D4GVTLGc.js";const a=async(s,t)=>{const e=await fetch("http://localhost:3004/auth/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:t})});if(!e.ok)throw new Error("Failed to sign in");const o=await e.json();return o.token&&((s,t)=>{const e=60*t*60;document.cookie=`auth_token=${s}; path=/; max-age=${e}; secure; samesite=strict`})(o.token,24),o},r=({scope:r,onActionResult:i})=>{const{setUserToContext:c}=s.useContext(e),m=o((s=>s.setUserData)),u=o((s=>s.setMainMessage));return s.useEffect((()=>{(async()=>{try{const s=await a("admin@admin.com","admin");c(s.user),m(s.user),u("Sign In successful","success"),i(!0)}catch(s){u("Sign In error: "+r+s.message,"error")}})()}),[]),t.jsxs(n,{type:"info",children:["RUN: SignIn to: ",r]})};export{r as default};
