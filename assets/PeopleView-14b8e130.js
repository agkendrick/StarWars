import{d as _,o as s,c as n,F as v,r as k,a as p,t as h,b as L,e as u,f as c,w,u as I,R as V,g as B,h as m}from"./index-136cc90d.js";import{_ as F,u as S}from"./people-cd3ba6b0.js";import{g as R}from"./helpers-04187a77.js";const A=_({__name:"ListItem",props:{item:{},displayNames:{}},setup(l){const o=l;return(e,t)=>(s(),n("ul",null,[(s(!0),n(v,null,k(o.displayNames,(a,d)=>(s(),n("li",null,[p("b",null,h(a)+": ",1),L(h(e.item[d]),1)]))),256))]))}}),D={class:"nav"},E={class:"list-item"},G={class:"nav"},T=_({__name:"PagedList",props:{listItems:{},displayNames:{},next:{},previous:{}},emits:["loadPage"],setup(l){const o=l;return(e,t)=>(s(),n(v,null,[p("div",D,[e.previous?(s(),n("button",{key:0,onClick:t[0]||(t[0]=a=>e.$emit("loadPage",e.previous))},"Previous")):u("",!0),e.next?(s(),n("button",{key:1,onClick:t[1]||(t[1]=a=>e.$emit("loadPage",e.next))},"Next")):u("",!0)]),(s(!0),n(v,null,k(o.listItems,a=>(s(),n("div",E,[c(I(V),{to:a.link},{default:w(()=>[c(A,{"display-names":o.displayNames,item:a},null,8,["display-names","item"])]),_:2},1032,["to"])]))),256)),p("div",G,[e.previous?(s(),n("button",{key:0,onClick:t[2]||(t[2]=a=>e.$emit("loadPage",e.previous))},"Previous")):u("",!0),e.next?(s(),n("button",{key:1,onClick:t[3]||(t[3]=a=>e.$emit("loadPage",e.next))},"Next")):u("",!0)])],64))}});const U=F(T,[["__scopeId","data-v-f59dfa7a"]]),Y=p("h1",null,"People",-1),H=_({__name:"PeopleView",async setup(l){let o,e;const{getPeople:t}=S(),{results:a,next:d,previous:N}=([o,e]=B(()=>t()),o=await o,e(),o),$={name:"Name",gender:"Gender",birth_year:"Birth Year",vehicleCount:"Starship/Vehicle Count"},g=m(P(a)),f=m(d),y=m(N);function P(i){return i.map(r=>(r.vehicleCount=r.vehicles.length+r.starships.length,r.link=`/people/${R(r.url)}`,r))}async function C(i){const{results:r,next:x,previous:b}=await t(i);g.value=P(r),f.value=x,y.value=b}return(i,r)=>(s(),n("div",null,[Y,c(U,{onLoadPage:C,"list-items":g.value,next:f.value,previous:y.value,"display-names":$},null,8,["list-items","next","previous"])]))}});export{H as default};
