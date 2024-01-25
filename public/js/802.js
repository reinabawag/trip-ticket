"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[802],{7930:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(3645),l=t.n(n)()((function(e){return e[1]}));l.push([e.id,"table tbody tr[data-v-1d938b06]{cursor:pointer}",""]);const r=l},802:(e,a,t)=>{t.r(a),t.d(a,{default:()=>W});var n=t(821),l=t(8446),r=t(8748),o=function(e){return(0,n.dD)("data-v-1d938b06"),e=e(),(0,n.Cn)(),e},i=o((function(){return(0,n._)("h1",null,"Approval",-1)})),s={class:"d-flex flex-row justify-content-between align-items-baseline"},c=o((function(){return(0,n._)("div",null,[(0,n._)("p",null,"Approval(s)")],-1)})),u={class:"table table-striped table-hover"},p=o((function(){return(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{scope:"col"},"Name"),(0,n._)("th",{scope:"col"},"Plate number"),(0,n._)("th",{scope:"col"},"Purpose"),(0,n._)("th",{scope:"col"},"Departure"),(0,n._)("th",{scope:"col"},"Arrival"),(0,n._)("th",{scope:"col"},"Driver"),(0,n._)("th",{scope:"col"},"Passenger"),(0,n._)("th",{scope:"col"},"Options")])],-1)})),v=["id"],d={key:0,class:"btn-group"},b=["onClick"],f=o((function(){return(0,n._)("i",{class:"bi bi-check-circle"},null,-1)})),g=["onClick"],m=o((function(){return(0,n._)("i",{class:"bi bi-x-circle"},null,-1)})),k={key:1,class:"d-grid gap-2"},w={key:1},h=[o((function(){return(0,n._)("td",{colspan:"8",class:"text-center"},"No booking to show!",-1)}))],U={class:"pagination justify-content-end"};const y={__name:"Approval",props:{approvals:Object},setup:function(e){var a=(0,r.qt)(),t=(0,n.iH)(a.props.search);(0,n.YP)(t,_.debounce((function(){console.log(route().params),r.Nd.reload({data:{page:1,search:t.value},only:["approvals"]})}),500));var o=function(e,a){r.Nd.put(route("trips.approval",e),{status:a},{preserveScroll:!0})};return function(a,_){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)((0,n.SU)(r.Fb),{title:"Approval"}),(0,n.Wm)((0,n.SU)(l.Z),null,{default:(0,n.w5)((function(){return[i,(0,n._)("div",s,[c,(0,n._)("div",null,[(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":_[0]||(_[0]=function(e){return t.value=e}),placeholder:"Search"},null,512),[[n.nr,t.value]])])]),(0,n._)("table",u,[p,(0,n._)("tbody",null,[a.$_.isEmpty(e.approvals.data)?((0,n.wg)(),(0,n.iD)("tr",w,h)):((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)(e.approvals.data,(function(e){return(0,n.wg)(),(0,n.iD)("tr",{id:e.id},[(0,n._)("td",null,(0,n.zw)(e.name),1),(0,n._)("td",null,(0,n.zw)(e.car.plate_number),1),(0,n._)("td",null,(0,n.zw)(e.purpose),1),(0,n._)("td",null,(0,n.zw)(e.departure),1),(0,n._)("td",null,(0,n.zw)(e.arrival),1),(0,n._)("td",null,(0,n.zw)(e.driver),1),(0,n._)("td",null,(0,n.zw)(e.passenger),1),(0,n._)("td",null,[e.is_active&&0==e.is_approved?((0,n.wg)(),(0,n.iD)("div",d,[(0,n._)("button",{type:"button",class:"btn btn-sm btn-success",onClick:function(a){return o(e.id,!0)}},[f,(0,n.Uk)(" Approve")],8,b),(0,n._)("button",{type:"button",class:"btn btn-sm btn-danger",onClick:function(a){return o(e.id,!1)}},[m,(0,n.Uk)(" Reject")],8,g)])):((0,n.wg)(),(0,n.iD)("div",k,[(0,n._)("button",{type:"button",class:(0,n.C_)(["btn btn-sm disabled btn-block",e.is_approved?"btn-success":"btn-warning"])},[(0,n._)("i",{class:(0,n.C_)(["bi",e.is_approved?"bi-check-circle":"bi-x-circle"])},null,2),(0,n.Uk)(" "+(0,n.zw)(e.is_approved?"Approved":"Canceled"),1)],2)]))])],8,v)})),256))])]),(0,n._)("nav",null,[(0,n._)("ul",U,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.approvals.meta.links,(function(e,a){return(0,n.wg)(),(0,n.iD)("li",{class:(0,n.C_)(["page-item",{active:e.active,disabled:null==e.url}]),key:a},[(0,n.Wm)((0,n.SU)(r.rU),{class:"page-link",href:String(e.url),only:["approvals"],data:{search:t.value},"preserve-scroll":"","preserve-state":"",innerHTML:e.label},null,8,["href","data","innerHTML"])],2)})),128))])])]})),_:1})],64)}}};var D=t(3379),S=t.n(D),$=t(7930),C={insert:"head",singleton:!1};S()($.Z,C);$.Z.locals;const W=(0,t(3744).Z)(y,[["__scopeId","data-v-1d938b06"]])},8446:(e,a,t)=>{t.d(a,{Z:()=>H});var n=t(821),l=t(8748);const r={__name:"NavLink",props:{active:Boolean},setup:function(e){return function(a,t){return(0,n.wg)(),(0,n.j4)((0,n.SU)(l.rU),{class:(0,n.C_)(["nav-link",{active:e.active}])},{default:(0,n.w5)((function(){return[(0,n.WI)(a.$slots,"default")]})),_:3},8,["class"])}}};var o={class:"navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark","data-bs-theme":"dark"},i={class:"container-fluid"},s=(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),c={class:"collapse navbar-collapse",id:"navbarNav"},u={class:"navbar-nav"},p={class:"nav-item"},v=(0,n._)("i",{class:"bi bi-house"},null,-1),d={class:"nav-item"},b=(0,n._)("i",{class:"bi bi-calendar-plus"},null,-1),_={key:0,class:"nav-item"},f=(0,n._)("i",{class:"bi bi-car-front"},null,-1),g={key:1,class:"nav-item"},m=(0,n._)("i",{class:"bi bi-people"},null,-1),k={key:2,class:"nav-item"},w=(0,n._)("i",{class:"bi bi-calendar-check"},null,-1),h={class:"nav-item"},U=(0,n._)("i",{class:"bi bi-person"},null,-1),y={key:1,class:"nav-item"},D=(0,n._)("i",{class:"bi bi-box-arrow-left"},null,-1),S={key:2,class:"nav-item"},$=(0,n._)("i",{class:"bi bi-box-arrow-right"},null,-1);const C={__name:"Nav",setup:function(e){var a=(0,l.qt)(),t=(0,n.Fl)((function(){return a.props.auth.user}));return function(e,a){return(0,n.wg)(),(0,n.iD)("nav",o,[(0,n._)("div",i,[s,(0,n._)("div",c,[(0,n._)("ul",u,[(0,n._)("li",p,[(0,n.Wm)((0,n.SU)(r),{href:e.$route("home"),active:"Home"===e.$page.component},{default:(0,n.w5)((function(){return[v,(0,n.Uk)(" Home ")]})),_:1},8,["href","active"])]),e.$_.isEmpty(t.value)?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("li",d,[(0,n.Wm)((0,n.SU)(r),{href:"/book",active:"Book"===e.$page.component},{default:(0,n.w5)((function(){return[b,(0,n.Uk)(" Book ")]})),_:1},8,["active"])]),e.$page.props.can.manage?((0,n.wg)(),(0,n.iD)("li",_,[(0,n.Wm)((0,n.SU)(r),{href:"/cars",active:"Car"===e.$page.component},{default:(0,n.w5)((function(){return[f,(0,n.Uk)(" Car Management ")]})),_:1},8,["active"])])):(0,n.kq)("",!0),e.$page.props.can.manage?((0,n.wg)(),(0,n.iD)("li",g,[(0,n.Wm)((0,n.SU)(r),{href:"/users",active:"User"===e.$page.component||"UserView"===e.$page.component},{default:(0,n.w5)((function(){return[m,(0,n.Uk)(" User Management ")]})),_:1},8,["active"])])):(0,n.kq)("",!0),e.$page.props.can.approve?((0,n.wg)(),(0,n.iD)("li",k,[(0,n.Wm)((0,n.SU)(r),{href:"/approvals",active:"Approval"===e.$page.component},{default:(0,n.w5)((function(){return[w,(0,n.Uk)(" Approvals ")]})),_:1},8,["active"])])):(0,n.kq)("",!0),(0,n._)("li",h,[(0,n.Wm)((0,n.SU)(r),{href:"/profile",active:"Profile"===e.$page.component},{default:(0,n.w5)((function(){return[U,(0,n.Uk)(" "+(0,n.zw)(t.value.name),1)]})),_:1},8,["active"])])],64)),e.$page.props.auth.user?((0,n.wg)(),(0,n.iD)("li",y,[(0,n.Wm)((0,n.SU)(r),{href:"/logout",method:"post",as:"button"},{default:(0,n.w5)((function(){return[D,(0,n.Uk)(" Logout ")]})),_:1})])):((0,n.wg)(),(0,n.iD)("li",S,[(0,n.Wm)((0,n.SU)(r),{href:"/login",as:"button"},{default:(0,n.w5)((function(){return[$,(0,n.Uk)(" Login ")]})),_:1})]))])])])])}}};var W={class:"container"},x={class:"mt-5"},A=(0,n.uE)('<footer class="mt-5 mb-5"><div class="container"><div class="d-flex flex-column align-items-center"><div class="p-2">Automation Project of MIS</div><div class="p-2">Copyright 2023 ©</div></div></div></footer>',1);const H={__name:"Layout",setup:function(e){return function(e,a){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)((0,n.SU)(C)),(0,n._)("div",W,[(0,n._)("div",x,[(0,n.WI)(e.$slots,"default")])]),A],64)}}}}}]);