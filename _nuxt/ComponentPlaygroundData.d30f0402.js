import b from"./TabsHeader.66163d47.js";import g from"./ComponentPlaygroundProps.5533e65b.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.30b98166.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.edb4a30f.js";import{d as k,as as D,r as V,b as n,c as C,g as P,K as o,Y as m,at as T,f as s,k as B}from"./entry.56c4028a.js";import"./ProseH4.db0ed30e.js";import"./ProseCodeInline.5fff0e9b.js";import"./Badge.f161f389.js";import"./slot.02a02e8a.js";import"./node.463fa921.js";import"./ProseP.f323df53.js";const I={class:"component-playground-data"},j=k({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const a=D(t,"modelValue",p),e=V(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=c=>e.value=c;return(c,l)=>{const u=b,_=g,i=v,f=x;return n(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(n(),m(_,{key:0,modelValue:o(a),"onUpdate:modelValue":l[0]||(l[0]=y=>T(a)?a.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(n(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(n(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const h=B(j,[["__scopeId","data-v-ef4d9ec9"]]);export{h as default};