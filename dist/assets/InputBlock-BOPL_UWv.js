import{j as e}from"./vendor-BORITBlt.js";import{u as l}from"./index-DsguY7Qn.js";const a=({label:a,fieldName:t,type:d,readonly:r=!1})=>{const n=l((e=>e.updateField)),s=l((e=>e.getFieldValue(t)))||"";return e.jsxs("div",{children:[e.jsx("label",{children:a}),e.jsx("input",{type:d||"text",className:"input input-bordered w-full mb-2",value:s,readOnly:r,disabled:r,onChange:e=>{n(t,e.target.value)}})]})};export{a as InputBlock,a as default};
