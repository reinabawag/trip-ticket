"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[102],{3430:(a,e,t)=>{t.d(e,{Z:()=>r});var n=t(3645),l=t.n(n)()((function(a){return a[1]}));l.push([a.id,"table tbody tr[data-v-0063ba7e]{cursor:pointer}",""]);const r=l},3102:(a,e,t)=>{t.r(e),t.d(e,{default:()=>W});var n=t(821),l=t(8446),r=t(8748),o=function(a){return(0,n.dD)("data-v-0063ba7e"),a=a(),(0,n.Cn)(),a},i=o((function(){return(0,n._)("h1",null,"Approval",-1)})),s={class:"d-flex flex-row justify-content-between align-items-baseline"},c=o((function(){return(0,n._)("div",null,[(0,n._)("p",null,"Approval(s)")],-1)})),u={class:"table table-striped table-hover"},p=o((function(){return(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{scope:"col"},"Name"),(0,n._)("th",{scope:"col"},"Plate number"),(0,n._)("th",{scope:"col"},"Purpose"),(0,n._)("th",{scope:"col"},"Departure"),(0,n._)("th",{scope:"col"},"Arrival"),(0,n._)("th",{scope:"col"},"Driver"),(0,n._)("th",{scope:"col"},"Passenger"),(0,n._)("th",{scope:"col"},"Options")])],-1)})),v=["id"],d={key:0,class:"btn-group"},b=["onClick"],f=o((function(){return(0,n._)("i",{class:"bi bi-check-circle"},null,-1)})),g=["onClick"],m=o((function(){return(0,n._)("i",{class:"bi bi-x-circle"},null,-1)})),k={key:1,class:"d-grid gap-2"},h={key:1},w=[o((function(){return(0,n._)("td",{colspan:"8",class:"text-center"},"No booking to show!",-1)}))],y={class:"pagination justify-content-end"};const U={__name:"Approval",props:{approvals:Object},setup:function(a){var e=(0,r.qt)(),t=(0,n.iH)(e.props.search);(0,n.YP)(t,_.debounce((function(){console.log(route().params),r.Nd.reload({data:{page:1,search:t.value},only:["approvals"]})}),500));var o=function(a,e){r.Nd.put(route("trips.approval",a),{status:e})};return function(e,_){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)((0,n.SU)(r.Fb),{title:"Approval"}),(0,n.Wm)((0,n.SU)(l.Z),null,{default:(0,n.w5)((function(){return[i,(0,n._)("div",s,[c,(0,n._)("div",null,[(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":_[0]||(_[0]=function(a){return t.value=a}),placeholder:"Search"},null,512),[[n.nr,t.value]])])]),(0,n._)("table",u,[p,(0,n._)("tbody",null,[e.$_.isEmpty(a.approvals.data)?((0,n.wg)(),(0,n.iD)("tr",h,w)):((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)(a.approvals.data,(function(a){return(0,n.wg)(),(0,n.iD)("tr",{id:a.id},[(0,n._)("td",null,(0,n.zw)(a.name),1),(0,n._)("td",null,(0,n.zw)(a.car.plate_number),1),(0,n._)("td",null,(0,n.zw)(a.purpose),1),(0,n._)("td",null,(0,n.zw)(a.departure),1),(0,n._)("td",null,(0,n.zw)(a.arrival),1),(0,n._)("td",null,(0,n.zw)(a.driver),1),(0,n._)("td",null,(0,n.zw)(a.passenger),1),(0,n._)("td",null,[a.is_active&&0==a.is_approved?((0,n.wg)(),(0,n.iD)("div",d,[(0,n._)("button",{type:"button",class:"btn btn-sm btn-success",onClick:function(e){return o(a.id,!0)}},[f,(0,n.Uk)(" Approve")],8,b),(0,n._)("button",{type:"button",class:"btn btn-sm btn-danger",onClick:function(e){return o(a.id,!1)}},[m,(0,n.Uk)(" Reject")],8,g)])):((0,n.wg)(),(0,n.iD)("div",k,[(0,n._)("button",{type:"button",class:(0,n.C_)(["btn btn-sm disabled btn-block",a.is_approved?"btn-success":"btn-warning"])},[(0,n._)("i",{class:(0,n.C_)(["bi",a.is_approved?"bi-check-circle":"bi-x-circle"])},null,2),(0,n.Uk)(" "+(0,n.zw)(a.is_approved?"Approved":"Canceled"),1)],2)]))])],8,v)})),256))])]),(0,n._)("nav",null,[(0,n._)("ul",y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.approvals.meta.links,(function(a,e){return(0,n.wg)(),(0,n.iD)("li",{class:(0,n.C_)(["page-item",{active:a.active,disabled:null==a.url}]),key:e},[(0,n.Wm)((0,n.SU)(r.rU),{class:"page-link",href:String(a.url),only:["approvals"],data:{search:t.value},"preserve-scroll":"","preserve-state":"",innerHTML:a.label},null,8,["href","data","innerHTML"])],2)})),128))])])]})),_:1})],64)}}};var D=t(3379),S=t.n(D),C=t(3430),$={insert:"head",singleton:!1};S()(C.Z,$);C.Z.locals;const W=(0,t(3744).Z)(U,[["__scopeId","data-v-0063ba7e"]])},8446:(a,e,t)=>{t.d(e,{Z:()=>z});var n=t(821),l=t(8748);const r={__name:"NavLink",props:{active:Boolean},setup:function(a){return function(e,t){return(0,n.wg)(),(0,n.j4)((0,n.SU)(l.rU),{class:(0,n.C_)(["nav-link",{active:a.active}])},{default:(0,n.w5)((function(){return[(0,n.WI)(e.$slots,"default")]})),_:3},8,["class"])}}};var o={class:"navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark","data-bs-theme":"dark"},i={class:"container-fluid"},s=(0,n._)("a",{href:"#",class:"navbar-brand"},[(0,n._)("img",{src:"/img/logoipsum-298.svg",alt:"Bootstrap",width:"30",height:"24"})],-1),c=(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarNav"},p={class:"navbar-nav"},v={class:"nav-item"},d=(0,n._)("i",{class:"bi bi-house"},null,-1),b={class:"nav-item"},_=(0,n._)("i",{class:"bi bi-calendar-plus"},null,-1),f={key:0,class:"nav-item"},g=(0,n._)("i",{class:"bi bi-car-front"},null,-1),m={key:1,class:"nav-item"},k=(0,n._)("i",{class:"bi bi-people"},null,-1),h={key:2,class:"nav-item"},w=(0,n._)("i",{class:"bi bi-calendar-check"},null,-1),y={class:"nav-item"},U=(0,n._)("i",{class:"bi bi-person"},null,-1),D={key:1,class:"nav-item"},S=(0,n._)("i",{class:"bi bi-box-arrow-left"},null,-1),C={key:2,class:"nav-item"},$=(0,n._)("i",{class:"bi bi-box-arrow-right"},null,-1);const W={__name:"Nav",setup:function(a){var e=(0,l.qt)(),t=(0,n.Fl)((function(){return e.props.auth.user}));return function(a,e){return(0,n.wg)(),(0,n.iD)("nav",o,[(0,n._)("div",i,[s,c,(0,n._)("div",u,[(0,n._)("ul",p,[(0,n._)("li",v,[(0,n.Wm)((0,n.SU)(r),{href:a.$route("home"),active:"Home"===a.$page.component},{default:(0,n.w5)((function(){return[d,(0,n.Uk)(" Home ")]})),_:1},8,["href","active"])]),a.$_.isEmpty(t.value)?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("li",b,[(0,n.Wm)((0,n.SU)(r),{href:"/book",active:"Book"===a.$page.component},{default:(0,n.w5)((function(){return[_,(0,n.Uk)(" Book ")]})),_:1},8,["active"])]),a.$page.props.can.manage?((0,n.wg)(),(0,n.iD)("li",f,[(0,n.Wm)((0,n.SU)(r),{href:"/cars",active:"Car"===a.$page.component},{default:(0,n.w5)((function(){return[g,(0,n.Uk)(" Car Management ")]})),_:1},8,["active"])])):(0,n.kq)("",!0),a.$page.props.can.manage?((0,n.wg)(),(0,n.iD)("li",m,[(0,n.Wm)((0,n.SU)(r),{href:"/users",active:"User"===a.$page.component},{default:(0,n.w5)((function(){return[k,(0,n.Uk)(" User Management ")]})),_:1},8,["active"])])):(0,n.kq)("",!0),a.$page.props.can.approve?((0,n.wg)(),(0,n.iD)("li",h,[(0,n.Wm)((0,n.SU)(r),{href:"/approvals",active:"Approval"===a.$page.component},{default:(0,n.w5)((function(){return[w,(0,n.Uk)(" Approvals ")]})),_:1},8,["active"])])):(0,n.kq)("",!0),(0,n._)("li",y,[(0,n.Wm)((0,n.SU)(r),{href:"/profile",active:"Profile"===a.$page.component},{default:(0,n.w5)((function(){return[U,(0,n.Uk)(" "+(0,n.zw)(t.value.name),1)]})),_:1},8,["active"])])],64)),a.$page.props.auth.user?((0,n.wg)(),(0,n.iD)("li",D,[(0,n.Wm)((0,n.SU)(r),{href:"/logout",method:"post",as:"button"},{default:(0,n.w5)((function(){return[S,(0,n.Uk)(" Logout ")]})),_:1})])):((0,n.wg)(),(0,n.iD)("li",C,[(0,n.Wm)((0,n.SU)(r),{href:"/login",as:"button"},{default:(0,n.w5)((function(){return[$,(0,n.Uk)(" Login ")]})),_:1})]))])])])])}}};var x={class:"container"},A={class:"mt-5"},H=(0,n.uE)('<footer class="mt-5 mb-5"><div class="container"><div class="d-flex flex-column align-items-center"><div class="p-2">Automation Project of MIS</div><div class="p-2">Copyright 2023 ©</div></div></div></footer>',1);const z={__name:"Layout",setup:function(a){return function(a,e){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)((0,n.SU)(W)),(0,n._)("div",x,[(0,n._)("div",A,[(0,n.WI)(a.$slots,"default")])]),H],64)}}}}}]);