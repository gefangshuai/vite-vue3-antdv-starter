import{C as o}from"./index.2d606aba.js";import{r as i,a8 as c,an as s,M as l,N as d,d as v,a7 as p}from"./index.99812241.js";function L(){var t=i({}),e=null;return c(function(){e=o.subscribe(function(n){t.value=n})}),s(function(){o.unsubscribe(e)}),t}function y(t){var e=l();return d(function(){e.value=t()},{flush:"sync"}),e}var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},m=b;function f(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){O(t,a,n[a])})}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=function(e,n){var r=f({},e,n.attrs);return v(p,f({},r,{icon:m}),null)};u.displayName="LeftOutlined";u.inheritAttrs=!1;var w=u;export{w as L,y as e,L as u};
