import{i as L,b as k,J as t,S as X}from"./entry.1a40d7cc.js";import{m as v,D as o,E as n,Q as l,R as i,L as O,M as c,u as e,I as h,N as w,O as D}from"./swiper-vue.1d76a0fa.js";const E={class:"flex items-center cursor-pointer"},B={class:"w-[80px] h-[80px]"},S=["src"],C={class:"flex-1"},N=["innerHTML"],V={key:1,class:"text-[18px] font-bold"},Y=l("span",{class:"w-[2px] h-[8px] text-[#999999]"},"|",-1),F={key:0},H={key:1},M={key:2},R={key:3},Z=v({__name:"index",props:{school:{default:()=>{}}},setup(T){const _=L(),{provinceCityList:f,getDictionValue:a}=k(),x=s=>{let u='<span class="text-[#FFA864]">$&</span>',r=new RegExp(_.query.keyword,"gi");return s.replace(r,u)};return(s,u)=>{const r=X;return o(),n("div",null,[l("div",E,[l("div",B,[l("img",{src:s.school.logo,class:"w-[70px]"},null,8,S)]),l("div",C,[s.school.highlightYxmc?(o(),n("div",{key:0,class:"text-[18px] font-bold",innerHTML:x(s.school.highlightYxmc)},null,8,N)):(o(),n("div",V,i(s.school.yxmc),1)),O(r,null,{split:c(()=>[Y]),default:c(()=>{var p,d,m,g,b,y;return[(p=("findOptions"in s?s.findOptions:e(t))(e(f),s.school.sf))!=null&&p.label?(o(),n("span",F,i((d=("findOptions"in s?s.findOptions:e(t))(e(f),s.school.sf))==null?void 0:d.label),1)):h("",!0),(m=("findOptions"in s?s.findOptions:e(t))(e(a)("YXLX"),s.school.yxLx))!=null&&m.label?(o(),n("span",H,i((g=("findOptions"in s?s.findOptions:e(t))(e(a)("YXLX"),s.school.yxLx))==null?void 0:g.label),1)):h("",!0),s.school.lsy?(o(),n("span",M,i(s.school.lsy),1)):h("",!0),(b=("findOptions"in s?s.findOptions:e(t))(e(a)("BXXZ"),s.school.bxXz))!=null&&b.label?(o(),n("span",R,i((y=("findOptions"in s?s.findOptions:e(t))(e(a)("BXXZ"),s.school.bxXz))==null?void 0:y.label),1)):h("",!0)]}),_:1}),l("div",null,[O(r,{class:"flex flex-wrap items-center"},{default:c(()=>[(o(!0),n(w,null,D(s.school.schoolTags,(p,d)=>(o(),n("span",{key:d,class:"p-[2px_5px] border-solid border border-[#EDEDED] rounded-[20px] text-[12px] text-[#999999] mb-[2px]"},i(p),1))),128))]),_:1})])])])])}}});export{Z as _};