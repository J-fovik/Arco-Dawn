import{f as re,A as ie,a as ue,S as me,_ as ce,b as pe,T as _e,c as fe,d as ge,e as X}from"./mack-D1J75R4U.js";import{K as B,T as be,L as ye,d as P,z as j,D as J,r as d,o as Y,m as R,w as t,a,b as e,M as N,U as F,_ as he,N as we,l as Z,O as Te,c as ve,e as y,B as q,J as De,P as xe}from"./index-BQ5eCX9Z.js";import{f as z,t as W,a as Ve,d as Se,g as Ye,s as Oe}from"./index-FbeG-FIp.js";import{p as Ce,l as ke}from"./rules-CuJr_W75.js";import"./index-IDTj6fKF.js";const Ie=()=>[{title:"序号",width:80,dataIndex:"sortTableNo",show:!0,align:"center"},{title:"名称",dataIndex:"name",show:!0,align:"center",render:({record:u})=>z(u.name)},{title:"ID",dataIndex:"uname",show:!0,width:80,align:"center",render:({record:u})=>B(be,{color:"blue"},{default:()=>z(u.id)})},{title:"状态",width:100,dataIndex:"status",slotName:"status",show:!0,align:"center"},{title:"金额",dataIndex:"money",show:!0,align:"right",render:({record:u})=>B("span",{class:"text-red text-price"},W(u.money??"0"))},{title:"类型",dataIndex:"type",show:!0,align:"center",render:({record:u})=>{var h;return z((h=re(ie,u.type))==null?void 0:h.label)}},{title:"地点",dataIndex:"address",show:!0,ellipsis:!0,tooltip:!0,align:"center",render:({record:u})=>z(u.address)},{title:"日期",dataIndex:"date",show:!0,width:120,align:"center",render:({record:u})=>Ve(u.date,"YYYY-MM-DD")},{title:"图片",width:120,dataIndex:"image",show:!0,align:"center",render:({record:u})=>u.image?B(ye,{src:u.image,width:100,preview:!0}):"-"},{title:"爱好",width:150,dataIndex:"hobby",slotName:"hobby",show:!0,align:"center"},{title:"操作",width:200,dataIndex:"operate",slotName:"operate",show:!0,align:"center"}],Me=P({name:"ZsAddRole"}),Ne=P({...Me,props:{data:{default:()=>({})}},emits:["close","success"],setup(u,{emit:h}){const g=u;console.log(g.data);const[b,m]=j(null),{form:o,formRef:O,formPlaceholder:C}=J(()=>({...g.data})),U={name:{required:!0,message:"请输入名称"},address:{required:!0,message:"请输入地点"},phone:{required:!0,validator:(c,n)=>{c||n("请输入手机号码"),!Ce(c)&&!ke(c)&&n("请输入正确的手机号码")}},startDate:{required:!0,validator:(c,n)=>{c||n("请选择开始时间"),o.value.endDate&&N(c).isAfter(N(o.value.endDate))&&n("开始时间不能大于结束时间")}},endDate:{required:!0,validator:(c,n)=>{c||n("请选择开始时间"),o.value.startDate&&N(c).isBefore(N(o.value.startDate))&&n("结束时间不能小于开始时间")}}},r=h,k=()=>{O.value.validate(c=>{c||(o.value.id?w(F.TEST.LIST_EDIT):w(F.TEST.LIST_ADD))})},w=async c=>{console.log("提交接口",c),console.log("提交参数",o.value),r("success"),r("close")},A=async()=>{console.log("查询详情id",o.value.id)};return o.value.id&&A(),(c,n)=>{const I=d("a-input"),f=d("a-form-item"),_=d("a-grid-item"),E=d("a-textarea"),M=d("a-input-number"),v=d("a-date-picker"),L=d("a-grid"),$=d("a-form"),D=d("a-modal");return Y(),R(D,{width:"80vw","unmount-on-close":"",title:e(o).isReadOnly?"菜单页面详情":e(o).id?"编辑菜单页面":"新增菜单页面",visible:"",top:"10vh","align-center":!1,"mask-closable":!1,"ok-loading":e(b)==="okLoading",onCancel:n[7]||(n[7]=l=>r("close")),onOk:n[8]||(n[8]=l=>e(o).isReadOnly?r("close"):k())},{default:t(()=>[a($,{ref_key:"formRef",ref:O,model:e(o),"label-align":"left",size:"large","auto-label-width":"",disabled:!!e(o).isReadOnly,rules:U},{default:t(()=>[a(L,{"col-gap":12},{default:t(()=>[a(_,{span:12},{default:t(()=>[a(f,{label:"名称:",field:"name"},{default:t(()=>[a(I,{modelValue:e(o).name,"onUpdate:modelValue":n[0]||(n[0]=l=>e(o).name=l),modelModifiers:{trim:!0},placeholder:"请输入名称"},null,8,["modelValue"])]),_:1})]),_:1}),a(_,{span:12},{default:t(()=>[a(f,{label:"地点:",field:"address"},{default:t(()=>[a(E,{modelValue:e(o).address,"onUpdate:modelValue":n[1]||(n[1]=l=>e(o).address=l),modelModifiers:{trim:!0},placeholder:"请输入地点"},null,8,["modelValue"])]),_:1})]),_:1}),a(_,{span:12},{default:t(()=>[a(f,{label:"金额:"},{default:t(()=>[a(M,{modelValue:e(o).money,"onUpdate:modelValue":n[2]||(n[2]=l=>e(o).money=l),formatter:l=>e(W)(l,""),parser:l=>l.replace(/,/g,""),precision:2,placeholder:e(C)("请输入金额")},null,8,["modelValue","formatter","parser","placeholder"])]),_:1})]),_:1}),a(_,{span:12},{default:t(()=>[a(f,{label:"数量:"},{default:t(()=>[a(M,{modelValue:e(o).num,"onUpdate:modelValue":n[3]||(n[3]=l=>e(o).num=l),min:1,max:150,precision:0,placeholder:e(C)("请输入数量")},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),a(_,{span:12},{default:t(()=>[a(f,{label:"手机号:",field:"phone"},{default:t(()=>[a(I,{modelValue:e(o).phone,"onUpdate:modelValue":n[4]||(n[4]=l=>e(o).phone=l),precision:0,placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1})]),_:1}),a(_,{span:12},{default:t(()=>[a(f,{label:"开始日期:",field:"startDate"},{default:t(()=>[a(v,{modelValue:e(o).startDate,"onUpdate:modelValue":n[5]||(n[5]=l=>e(o).startDate=l),format:"YYYY/MM/DD",class:"flex-1","value-format":"YYYY-MM-DD",placeholder:"请选择开始日期"},null,8,["modelValue"])]),_:1})]),_:1}),a(_,{span:12},{default:t(()=>[a(f,{label:"结束日期:",field:"endDate"},{default:t(()=>[a(v,{modelValue:e(o).endDate,"onUpdate:modelValue":n[6]||(n[6]=l=>e(o).endDate=l),format:"YYYY/MM/DD",class:"flex-1","value-format":"YYYY-MM-DD",placeholder:"请选择结束日期"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","disabled"])]),_:1},8,["title","ok-loading"])}}}),ze=he(Ne,[["__scopeId","data-v-f2117ebd"]]),Re=P({name:"MenuProTableOne"}),$e=P({...Re,setup(u){const{warningModal:h}=xe(),[g,b]=j(null),{form:m,resetForm:o}=J(()=>({name:"",status:"",sex:"",type:"",date:Ye(3,"days")}),()=>k()),{selectRow:O,columnsData:C,visibleColumnsData:U,tableBaseOptions:r,resetData:k,setSelectRow:w,extendTableList:A,changeTableColumn:c,changeTableSize:n}=we(Ie(),()=>D()),I=({data:l})=>{const s={sortTableNo:"总计",money:0};return l.forEach(x=>{s.money+=x.money}),l.length?[s]:[]},{data:f}=Z(async()=>ge),{data:_}=Te(async()=>(m.value.type="",m.value.sex=="1"?_e:fe),{watchSource:()=>m.value.sex,defaultValue:[]}),E=async()=>{const{res:l,err:s}=await De({url:F.FILE.CODE_EXPORT,responseType:"blob",data:{beginTime:"",endTime:"",redemptionCode:"",loginName:"",phoneNumber:"",exchangeType:"",currentPage:r.pagination.current,pageSize:r.pagination.pageSize,pagingOrNot:1}},{before:()=>b("导出兑换码"),after:()=>b("")});l&&Se(l,"兑换码一览表.xlsx")},M=async l=>{D()},v=l=>{let s="";l?s="确定操作当前数据吗？":s=`确定操作选中的${r.selectedKeys.length}数据吗？`,h(s,async x=>{console.log("删除数据：",l?[l]:r.selectedKeys),x(!0)})},{data:L,loading:$,initData:D}=Z(async()=>(await Oe(1e3),console.log("表单参数",m.value),console.log("当前页："+r.pagination.current+"，每页数量"+r.pagination.pageSize),r.pagination.total=X.total,A(X.tableData.map(l=>(l.num=l.num*1,l.disabled=l.status=="0",l)))));return(l,s)=>{const x=d("a-input"),V=d("a-form-item"),S=d("a-grid-item"),K=d("a-select"),G=d("a-date-picker"),H=d("a-grid"),Q=d("a-form"),ee=d("icon-plus"),T=d("a-button"),ae=d("icon-close"),te=d("a-space"),le=d("a-switch"),oe=ce,ne=d("a-button-group"),se=d("a-table"),de=pe;return Y(),ve("div",null,[a(de,{fold:"","table-columns":e(C),"table-size":e(r).size,onResetSearch:e(o),onSearch:e(k),onChangeTableSize:e(n),onChangeTableColumn:e(c)},{form:t(({collapsed:i})=>[a(Q,{model:e(m),"label-align":"left",size:"large","auto-label-width":""},{default:t(()=>[a(H,{cols:{xs:1,sm:1,md:2,lg:2,xl:3,xxl:4},"col-gap":12,collapsed:!i},{default:t(()=>[a(S,null,{default:t(()=>[a(V,{label:"名称:"},{default:t(()=>[a(x,{modelValue:e(m).name,"onUpdate:modelValue":s[0]||(s[0]=p=>e(m).name=p),modelModifiers:{trim:!0},placeholder:"请输入名称"},null,8,["modelValue"])]),_:1})]),_:1}),a(S,null,{default:t(()=>[a(V,{label:"状态:"},{default:t(()=>[a(K,{modelValue:e(m).status,"onUpdate:modelValue":s[1]||(s[1]=p=>e(m).status=p),options:[...e(ue),...e(me)],"allow-search":"","allow-clear":"","field-names":{label:"label",value:"value"},placeholder:"请选择状态"},null,8,["modelValue","options"])]),_:1})]),_:1}),a(S,null,{default:t(()=>[a(V,{label:"性别:"},{default:t(()=>[a(K,{modelValue:e(m).sex,"onUpdate:modelValue":s[2]||(s[2]=p=>e(m).sex=p),options:e(f),"allow-search":"","allow-clear":"","field-names":{label:"label",value:"value"},placeholder:"请选择性别"},null,8,["modelValue","options"])]),_:1})]),_:1}),a(S,null,{default:t(()=>[a(V,{label:"类型:"},{default:t(()=>[a(K,{modelValue:e(m).type,"onUpdate:modelValue":s[3]||(s[3]=p=>e(m).type=p),options:e(_),"allow-search":"","allow-clear":"",disabled:e(_).length===0,"field-names":{label:"label",value:"value"},placeholder:"请选择类型"},null,8,["modelValue","options","disabled"])]),_:1})]),_:1}),a(S,null,{default:t(()=>[a(V,{label:"日期:"},{default:t(()=>[a(G,{modelValue:e(m).date,"onUpdate:modelValue":s[4]||(s[4]=p=>e(m).date=p),format:"YYYY/MM/DD",class:"flex-1","value-format":"YYYY-MM-DD",placeholder:"请选择日期"},null,8,["modelValue"])]),_:1})]),_:1})]),_:2},1032,["collapsed"])]),_:2},1032,["model"])]),operate:t(()=>[a(te,null,{default:t(()=>[a(T,{type:"outline",onClick:s[5]||(s[5]=i=>e(b)("Operation"))},{icon:t(()=>[a(ee)]),default:t(()=>[y(" 新增 ")]),_:1}),a(T,{type:"outline",status:"danger",disabled:!e(r).selectedKeys.length,loading:e(g)==="删除",onClick:s[6]||(s[6]=i=>v())},{icon:t(()=>[a(ae)]),default:t(()=>[y(" 删除 ")]),_:1},8,["disabled","loading"]),a(T,{status:"danger",type:"outline",loading:e(g)==="导出兑换码",disabled:!e(r).selectedKeys.length,onClick:E},{default:t(()=>[y(" 导出兑换码 ")]),_:1},8,["loading","disabled"])]),_:1})]),table:t(()=>[a(se,{"selected-keys":e(r).selectedKeys,"onUpdate:selectedKeys":s[7]||(s[7]=i=>e(r).selectedKeys=i),class:"zs-table","row-key":"id",data:e(L),"row-selection":e(r).rowSelection,bordered:e(r).bordered,pagination:e(r).pagination,size:e(r).size,columns:e(U),stripe:e(r).stripe,loading:e($),summary:I},{status:t(({record:i})=>[i.sortTableNo!=="总计"?(Y(),R(le,{key:0,size:"medium","model-value":i.status==="1",loading:e(g)===i.id,onChange:p=>M(i)},{checked:t(()=>[y("暂停")]),unchecked:t(()=>[y("恢复")]),_:2},1032,["model-value","loading","onChange"])):q("",!0)]),hobby:t(({record:i})=>[a(oe,{data:i.hobby},null,8,["data"])]),operate:t(({record:i})=>[i.sortTableNo!=="总计"?(Y(),R(ne,{key:0},{default:t(()=>[a(T,{type:"text",status:"success",onClick:p=>e(w)({...i,isReadOnly:!0},()=>e(b)("Operation"))},{default:t(()=>[y("详情")]),_:2},1032,["onClick"]),a(T,{type:"text",status:"danger",loading:e(g)==="删除",onClick:p=>v(i.id)},{default:t(()=>[y(" 删除 ")]),_:2},1032,["loading","onClick"]),a(T,{type:"text",onClick:p=>e(w)(i,()=>e(b)("Operation"))},{default:t(()=>[y("编辑 ")]),_:2},1032,["onClick"])]),_:2},1024)):q("",!0)]),_:1},8,["selected-keys","data","row-selection","bordered","pagination","size","columns","stripe","loading"])]),_:1},8,["table-columns","table-size","onResetSearch","onSearch","onChangeTableSize","onChangeTableColumn"]),e(g)==="Operation"?(Y(),R(ze,{key:0,data:e(O),onSuccess:e(D),onClose:s[8]||(s[8]=i=>e(w)({},()=>e(b)(null)))},null,8,["data","onSuccess"])):q("",!0)])}}});export{$e as default};