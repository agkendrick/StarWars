import{d as _,o as s,c as n,F as v,r as k,a as p,t as h,b as w,e as u,f as c,w as I,u as V,R as B,g as F,h as m}from"./index-4799313e.js";import{_ as S,u as R}from"./people-18c05c0b.js";import{g as A}from"./helpers-04187a77.js";const D=_({__name:"ListItem",props:{item:{},displayNames:{}},setup(r){const o=r;return(e,t)=>(s(),n("ul",null,[(s(!0),n(v,null,k(o.displayNames,(a,d)=>(s(),n("li",null,[p("b",null,h(a)+": ",1),w(h(e.item[d]),1)]))),256))]))}}),E={class:"nav"},G={class:"list-item"},T={class:"nav"},U=_({__name:"PagedList",props:{listItems:{},displayNames:{},next:{},previous:{}},emits:["loadPage"],setup(r){const o=r;return(e,t)=>(s(),n(v,null,[p("div",E,[e.previous?(s(),n("button",{key:0,onClick:t[0]||(t[0]=a=>e.$emit("loadPage",e.previous))},"Previous")):u("",!0),e.next?(s(),n("button",{key:1,onClick:t[1]||(t[1]=a=>e.$emit("loadPage",e.next))},"Next")):u("",!0)]),(s(!0),n(v,null,k(o.listItems,a=>(s(),n("div",G,[c(V(B),{to:a.link},{default:I(()=>[c(D,{"display-names":o.displayNames,item:a},null,8,["display-names","item"])]),_:2},1032,["to"])]))),256)),p("div",T,[e.previous?(s(),n("button",{key:0,onClick:t[2]||(t[2]=a=>e.$emit("loadPage",e.previous))},"Previous")):u("",!0),e.next?(s(),n("button",{key:1,onClick:t[3]||(t[3]=a=>e.$emit("loadPage",e.next))},"Next")):u("",!0)])],64))}});const Y=S(U,[["__scopeId","data-v-f59dfa7a"]]),j=p("h1",null,"People",-1),J=_({__name:"PeopleView",async setup(r){let o,e;const{getPeople:t}=R(),a=([o,e]=F(()=>t()),o=await o,e(),o),{results:d,next:N,previous:$}=a,C={name:"Name",gender:"Gender",birth_year:"Birth Year",vehicleCount:"Starship/Vehicle Count"},g=m(P(d)),f=m(N),y=m($);function P(i){return i.map(l=>(l.vehicleCount=l.vehicles.length+l.starships.length,l.link=`/people/${A(l.url)}`,l))}async function x(i){const{results:l,next:b,previous:L}=await t(i);g.value=P(l),f.value=b,y.value=L}return(i,l)=>(s(),n("div",null,[j,c(Y,{onLoadPage:x,"list-items":g.value,next:f.value,previous:y.value,"display-names":C},null,8,["list-items","next","previous"])]))}});export{J as default};
