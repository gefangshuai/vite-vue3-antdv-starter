import{_ as c,r as o,X as m,o as d,f,g as s,d as e,e as u,i as _,$ as v,aT as g,B as x}from"./index.6da8104e.js";import{S as t,a as b}from"./STableColumn.b09bf08e.js";import"./index.10dcd20c.js";import"./index.88db714d.js";import"./pick.d27fcbca.js";import"./index.e24c377c.js";import"./RightOutlined.22796aed.js";/* empty css              */import"./LeftOutlined.2cccf0b8.js";const h=_("\u64CD\u4F5C "),k={setup(C){o(1);const i=o(null);o(!1);const r=m({dataSource:[],loading:!0});(()=>{v.get("/api/users").then(a=>{r.dataSource=a.data,r.loading=!1})})();const l=a=>{g.success(JSON.stringify(a))};return(a,T)=>{const n=x;return d(),f(b,{config:u(r),ref_key:"tableRef",ref:i},{default:s(()=>[e(t,{title:"Username",prop:"name"}),e(t,{title:"Email",prop:"email"}),e(t,{title:"Avatar",prop:"avatar"}),e(t,{title:"CreatedAt",prop:"createdAt"}),e(t,{title:"Operation",prop:"id",width:100},{default:s(({index:y,record:p,text:B})=>[e(n,{type:"primary",onClick:w=>l(p),size:"small"},{default:s(()=>[h]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["config"])}}};var J=c(k,[["__file","/home/runner/work/vite-vue3-antdv-starter/vite-vue3-antdv-starter/src/pages/example/ExampleTable.vue"]]);export{J as default};
