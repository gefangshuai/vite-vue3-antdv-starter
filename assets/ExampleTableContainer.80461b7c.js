import{_ as l,o as s,f as p,bb as u,g as t,a1 as n,b as m,t as _,d as a,X as f,e as v,i as b,$ as g,B as C}from"./index.6da8104e.js";import{B as h}from"./BaseContainer.86c360ec.js";import{a as x,S as r}from"./STableColumn.b09bf08e.js";import"./index.93ef21e4.js";import"./index.49440ab6.js";import"./index.88db714d.js";import"./pick.d27fcbca.js";import"./index.10dcd20c.js";import"./index.e24c377c.js";import"./RightOutlined.22796aed.js";/* empty css              */import"./LeftOutlined.2cccf0b8.js";const y={key:1},S={props:{config:{type:Object,default:{}},title:{type:String}},setup(o){return(e,c)=>(s(),p(h,{class:"table-container"},u({title:t(()=>[e.$slots.title?n(e.$slots,"title",{key:0},void 0,!0):(s(),m("span",y,_(o.title),1))]),default:t(()=>[a(x,{config:o.config,"in-container":""},{default:t(()=>[n(e.$slots,"default",{},void 0,!0)]),_:3},8,["config"])]),_:2},[e.$slots.extra?{name:"extra",fn:t(()=>[n(e.$slots,"extra",{},void 0,!0)])}:void 0]),1024))}};var T=l(S,[["__scopeId","data-v-52c366b2"],["__file","/home/runner/work/vite-vue3-antdv-starter/vite-vue3-antdv-starter/src/components/container/table/TableContainer.vue"]]);const $=b("Add User"),k={setup(o){const e=f({dataSource:[],loading:!0});return(()=>{g.get("/api/users").then(i=>{e.dataSource=i.data,e.loading=!1})})(),(i,B)=>{const d=C;return s(),p(T,{config:v(e),title:"\u7528\u6237\u5217\u8868"},{extra:t(()=>[a(d,{type:"primary"},{default:t(()=>[$]),_:1})]),default:t(()=>[a(r,{title:"Username",prop:"name"}),a(r,{title:"Email",prop:"email"}),a(r,{title:"Avatar",prop:"avatar"}),a(r,{title:"CreatedAt",prop:"createdAt"})]),_:1},8,["config"])}}};var z=l(k,[["__file","/home/runner/work/vite-vue3-antdv-starter/vite-vue3-antdv-starter/src/pages/example/ExampleTableContainer.vue"]]);export{z as default};
