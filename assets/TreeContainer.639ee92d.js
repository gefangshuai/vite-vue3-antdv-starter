import{_ as w,o,f as T,bf as d,g as t,ai as n,b as I,t as N,h as l,d as P,bg as c,bh as u,bi as z,aU as H}from"./index.c0af385d.js";import{_ as V}from"./index.ab4c1e92.js";import{B as W}from"./BaseContainer.f1de5afb.js";const j={key:1},D={class:"tree-container-main"},E={props:{title:{type:String},siderWidth:{type:[Number,String],default:300},treeConfig:{type:Object},hideHead:{type:Boolean}},emits:["treeSelect"],setup(r,{emit:f}){const m=(e,i)=>{f("treeSelect",{selectedKeys:e,e:i})};return(e,i)=>{const h=V;return o(),T(W,{class:"tree-container","hide-head":r.hideHead},d({title:t(()=>[e.$slots.title?n(e.$slots,"title",{key:0},void 0,!0):(o(),I("span",j,N(r.title),1))]),default:t(()=>[l("div",{class:"tree-container-left",style:H({width:r.siderWidth+"px"})},[P(h,z(r.treeConfig,{onSelect:m}),d({_:2},[e.$slots.icon?{name:"icon",fn:t(({key:s,selected:a})=>[n(e.$slots,"icon",c(u({key:s,selected:a})),void 0,!0)])}:void 0,e.$slots.switcherIcon?{name:"switcherIcon",fn:t(({active:s,checked:a,expanded:p,loading:_,selected:v,halfChecked:g,title:y,key:S,children:$,dataRef:b,data:B,defaultIcon:C,switcherCls:k})=>[n(e.$slots,"switcherIcon",c(u({active:s,checked:a,expanded:p,loading:_,selected:v,halfChecked:g,title:y,key:S,children:$,dataRef:b,data:B,defaultIcon:C,switcherCls:k})),void 0,!0)])}:void 0]),1040)],4),l("div",D,[n(e.$slots,"default",{},void 0,!0)])]),_:2},[e.$slots.extra?{name:"extra",fn:t(()=>[n(e.$slots,"extra",{},void 0,!0)])}:void 0]),1032,["hide-head"])}}};var q=w(E,[["__scopeId","data-v-366738d8"],["__file","/home/runner/work/vite-vue3-antdv-starter/vite-vue3-antdv-starter/src/libs/container/tree/TreeContainer.vue"]]);export{q as T};
