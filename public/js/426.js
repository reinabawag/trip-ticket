"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[426],{7139:(e,n,a)=>{a.d(n,{Z:()=>i});var t=a(3645),l=a.n(t)()((function(e){return e[1]}));l.push([e.id,"table tbody tr[data-v-fac5c040]{cursor:pointer}",""]);const i=l},6426:(e,n,a)=>{a.r(n),a.d(n,{default:()=>q});var t=a(821),l=a(8446),i=a(8748),r=function(e){return(0,t.dD)("data-v-fac5c040"),e=e(),(0,t.Cn)(),e},o=r((function(){return(0,t._)("h1",null,"Profile",-1)})),s={class:"d-flex flex-row justify-content-between align-items-baseline"},c=r((function(){return(0,t._)("div",null,[(0,t._)("p",null,"Booking(s)")],-1)})),u={class:"table table-striped table-hover"},p=r((function(){return(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",{scope:"col"},"Plate number"),(0,t._)("th",{scope:"col"},"Purpose"),(0,t._)("th",{scope:"col"},"Departure"),(0,t._)("th",{scope:"col"},"Arrival"),(0,t._)("th",{scope:"col"},"Driver"),(0,t._)("th",{scope:"col"},"Passenger"),(0,t._)("th",{scope:"col"},"Status"),(0,t._)("th",{scope:"col"},"Options")])],-1)})),d=["id"],v={key:0},b={key:1},f={key:2},g={key:3},m=["onClick"],k=r((function(){return(0,t._)("i",{class:"bi bi-x-circle"},null,-1)})),w={key:1,type:"button",class:"btn btn-sm btn-warning disabled"},h=r((function(){return(0,t._)("i",{class:"bi bi-x-circle"},null,-1)})),y={key:1},U=[r((function(){return(0,t._)("td",{colspan:"8",class:"text-center"},"No booking to show!",-1)}))],D={class:"pagination justify-content-end"};const S={__name:"Profile",props:{bookings:Object},setup:function(e){var n=(0,i.cI)({id:null}),a=(0,i.qt)(),r=(0,t.iH)(a.props.search);return(0,t.YP)(r,_.debounce((function(){i.Nd.reload({data:{search:r.value,page:1},only:["bookings"]})}),500)),function(a,_){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)((0,t.SU)(i.Fb),{title:"Profile"}),(0,t.Wm)((0,t.SU)(l.Z),null,{default:(0,t.w5)((function(){return[o,(0,t._)("div",s,[c,(0,t._)("div",null,[(0,t.wy)((0,t._)("input",{type:"text",class:"form-control","onUpdate:modelValue":_[0]||(_[0]=function(e){return r.value=e}),placeholder:"Search"},null,512),[[t.nr,r.value]])])]),(0,t._)("table",u,[p,(0,t._)("tbody",null,[a.$_.isEmpty(e.bookings.data)?((0,t.wg)(),(0,t.iD)("tr",y,U)):((0,t.wg)(!0),(0,t.iD)(t.HY,{key:0},(0,t.Ko)(e.bookings.data,(function(e){return(0,t.wg)(),(0,t.iD)("tr",{id:e.id},[(0,t._)("td",null,(0,t.zw)(e.car.plate_number),1),(0,t._)("td",null,(0,t.zw)(e.purpose),1),(0,t._)("td",null,(0,t.zw)(e.departure),1),(0,t._)("td",null,(0,t.zw)(e.arrival),1),(0,t._)("td",null,(0,t.zw)(e.driver),1),(0,t._)("td",null,(0,t.zw)(e.passenger),1),(0,t._)("td",null,[e.is_active&&!e.is_approved?((0,t.wg)(),(0,t.iD)("span",v,"For Approval")):(0,t.kq)("",!0),e.is_active&&e.is_approved?((0,t.wg)(),(0,t.iD)("span",b,"Approved")):(0,t.kq)("",!0),!e.is_active&&e.is_approved?((0,t.wg)(),(0,t.iD)("span",f,"Approved")):(0,t.kq)("",!0),e.is_active||e.is_approved?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("span",g,"Canceled"))]),(0,t._)("td",null,[e.is_active?((0,t.wg)(),(0,t.iD)("button",{key:0,type:"button",class:"btn btn-sm btn-warning",onClick:function(a){return t=e.id,n.id=t,void n.patch(route("trips.update",n.id),{onBefore:function(){return confirm("Are you sure you want to cancel this booking?")}});var t}},[k,(0,t.Uk)(" Cancel")],8,m)):((0,t.wg)(),(0,t.iD)("button",w,[h,(0,t.Uk)(" Canceled")]))])],8,d)})),256))])]),(0,t._)("nav",null,[(0,t._)("ul",D,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.bookings.meta.links,(function(e,n){return(0,t.wg)(),(0,t.iD)("li",{class:(0,t.C_)(["page-item",{active:e.active,disabled:null==e.url}]),key:n},[(0,t.Wm)((0,t.SU)(i.rU),{class:"page-link",href:String(e.url),only:["bookings"],data:{search:r.value},"preserve-scroll":"","preserve-state":"",innerHTML:e.label},null,8,["href","data","innerHTML"])],2)})),128))])])]})),_:1})],64)}}};var $=a(3379),W=a.n($),C=a(7139),x={insert:"head",singleton:!1};W()(C.Z,x);C.Z.locals;const q=(0,a(3744).Z)(S,[["__scopeId","data-v-fac5c040"]])},8446:(e,n,a)=>{a.d(n,{Z:()=>H});var t=a(821),l=a(8748);const i={__name:"NavLink",props:{active:Boolean},setup:function(e){return function(n,a){return(0,t.wg)(),(0,t.j4)((0,t.SU)(l.rU),{class:(0,t.C_)(["nav-link",{active:e.active}])},{default:(0,t.w5)((function(){return[(0,t.WI)(n.$slots,"default")]})),_:3},8,["class"])}}};var r={class:"navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark","data-bs-theme":"dark"},o={class:"container-fluid"},s=(0,t._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,t._)("span",{class:"navbar-toggler-icon"})],-1),c={class:"collapse navbar-collapse",id:"navbarNav"},u={class:"navbar-nav"},p={class:"nav-item"},d=(0,t._)("i",{class:"bi bi-house"},null,-1),v={class:"nav-item"},b=(0,t._)("i",{class:"bi bi-calendar-plus"},null,-1),_={key:0,class:"nav-item"},f=(0,t._)("i",{class:"bi bi-car-front"},null,-1),g={key:1,class:"nav-item"},m=(0,t._)("i",{class:"bi bi-people"},null,-1),k={key:2,class:"nav-item"},w=(0,t._)("i",{class:"bi bi-calendar-check"},null,-1),h={class:"nav-item"},y=(0,t._)("i",{class:"bi bi-person"},null,-1),U={key:1,class:"nav-item"},D=(0,t._)("i",{class:"bi bi-box-arrow-left"},null,-1),S={key:2,class:"nav-item"},$=(0,t._)("i",{class:"bi bi-box-arrow-right"},null,-1);const W={__name:"Nav",setup:function(e){var n=(0,l.qt)(),a=(0,t.Fl)((function(){return n.props.auth.user}));return function(e,n){return(0,t.wg)(),(0,t.iD)("nav",r,[(0,t._)("div",o,[s,(0,t._)("div",c,[(0,t._)("ul",u,[(0,t._)("li",p,[(0,t.Wm)((0,t.SU)(i),{href:e.$route("home"),active:"Home"===e.$page.component},{default:(0,t.w5)((function(){return[d,(0,t.Uk)(" Home ")]})),_:1},8,["href","active"])]),e.$_.isEmpty(a.value)?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[(0,t._)("li",v,[(0,t.Wm)((0,t.SU)(i),{href:"/book",active:"Book"===e.$page.component},{default:(0,t.w5)((function(){return[b,(0,t.Uk)(" Book ")]})),_:1},8,["active"])]),e.$page.props.can.manage?((0,t.wg)(),(0,t.iD)("li",_,[(0,t.Wm)((0,t.SU)(i),{href:"/cars",active:"Car"===e.$page.component},{default:(0,t.w5)((function(){return[f,(0,t.Uk)(" Car Management ")]})),_:1},8,["active"])])):(0,t.kq)("",!0),e.$page.props.can.manage?((0,t.wg)(),(0,t.iD)("li",g,[(0,t.Wm)((0,t.SU)(i),{href:"/users",active:"User"===e.$page.component||"UserView"===e.$page.component},{default:(0,t.w5)((function(){return[m,(0,t.Uk)(" User Management ")]})),_:1},8,["active"])])):(0,t.kq)("",!0),e.$page.props.can.approve?((0,t.wg)(),(0,t.iD)("li",k,[(0,t.Wm)((0,t.SU)(i),{href:"/approvals",active:"Approval"===e.$page.component},{default:(0,t.w5)((function(){return[w,(0,t.Uk)(" Approvals ")]})),_:1},8,["active"])])):(0,t.kq)("",!0),(0,t._)("li",h,[(0,t.Wm)((0,t.SU)(i),{href:"/profile",active:"Profile"===e.$page.component},{default:(0,t.w5)((function(){return[y,(0,t.Uk)(" "+(0,t.zw)(a.value.name),1)]})),_:1},8,["active"])])],64)),e.$page.props.auth.user?((0,t.wg)(),(0,t.iD)("li",U,[(0,t.Wm)((0,t.SU)(i),{href:"/logout",method:"post",as:"button"},{default:(0,t.w5)((function(){return[D,(0,t.Uk)(" Logout ")]})),_:1})])):((0,t.wg)(),(0,t.iD)("li",S,[(0,t.Wm)((0,t.SU)(i),{href:"/login",as:"button"},{default:(0,t.w5)((function(){return[$,(0,t.Uk)(" Login ")]})),_:1})]))])])])])}}};var C={class:"container"},x={class:"mt-5"},q=(0,t.uE)('<footer class="mt-5 mb-5"><div class="container"><div class="d-flex flex-column align-items-center"><div class="p-2">Automation Project of MIS</div><div class="p-2">Copyright 2023 ©</div></div></div></footer>',1);const H={__name:"Layout",setup:function(e){return function(e,n){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)((0,t.SU)(W)),(0,t._)("div",C,[(0,t._)("div",x,[(0,t.WI)(e.$slots,"default")])]),q],64)}}}}}]);