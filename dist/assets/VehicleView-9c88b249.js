import{u as x}from"./vehicle-024a9078.js";import{u as y}from"./film-8f16288c.js";import{d as F,i as N,g as u,c as _,a as e,b as n,t as s,u as t,e as B,o as r}from"./index-4799313e.js";import"./helpers-04187a77.js";const S=e("h1",null,"Vehicle Details",-1),v=e("b",null,"Name: ",-1),D=e("b",null,"Model: ",-1),E={key:0},L=e("b",null,"Cost: ",-1),T=e("b",null,"Passengers: ",-1),j=e("b",null,"Films: ",-1),A=e("b",null,"Class: ",-1),M=e("b",null,"Created: ",-1),P=e("b",null,"Edited: ",-1),J=F({__name:"VehicleView",async setup(R){let l,o;const d=N(),{getVehicle:m}=x(),{getFilmsFromLinks:h}=y(),{name:p,model:i,cost_in_credits:f,passengers:b,films:V,vehicle_class:g,created:C,edited:k,manufacturer:a}=([l,o]=u(()=>m(d.params.id)),l=await l,o(),l),w=([l,o]=u(()=>h(V)),l=await l,o(),l).map(c=>c.title).join(", ");return(c,q)=>(r(),_("div",null,[S,e("ul",null,[e("li",null,[v,n(s(t(p)),1)]),e("li",null,[D,n(s(t(i))+" ",1),t(a)!=t(i)?(r(),_("span",E,"("+s(t(a))+")",1)):B("",!0)]),e("li",null,[L,n(s(t(f)),1)]),e("li",null,[T,n(s(t(b)),1)]),e("li",null,[j,n(s(t(w)),1)]),e("li",null,[A,n(s(t(g)),1)]),e("li",null,[M,n(s(t(C)),1)]),e("li",null,[P,n(s(t(k)),1)])])]))}});export{J as default};
