"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[389],{4389:(a,e,t)=>{t.r(e),t.d(e,{default:()=>Q});var l=t(821),r=t(8748),n=t(8446),s={class:"card shadow bg-body-tertiary rounded"},o={class:"ratio ratio-16x9"},i=["src"],c={class:"card-body"},d={class:"card-title"},u=["textContent"],p=(0,l._)("p",{class:"card-text"},null,-1),v=["onClick"],b=(0,l._)("i",{class:"bi bi-calendar2-plus"},null,-1),m={key:1,role:"button",href:"#",class:"btn btn-danger disabled"},f=(0,l._)("i",{class:"bi bi-calendar-x"},null,-1);const _={__name:"BookCar",props:{car:Object},emits:["showModal"],setup:function(a,e){var t=e.emit,r=a,n=function(){t("showModal",r.car)};return function(e,t){return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",o,[(0,l._)("img",{src:"".concat(a.car.image),class:"card-img-top",alt:""},null,8,i)]),(0,l._)("div",c,[(0,l._)("h5",d,(0,l.zw)(a.car.plate_number),1),(0,l._)("p",{class:"card-text",textContent:(0,l.zw)("".concat(a.car.make," ").concat(a.car.model))},null,8,u),p,"Active"==a.car.status?((0,l.wg)(),(0,l.iD)("a",{key:0,role:"button",href:"#",onClick:(0,l.iM)(n,["prevent"]),"data-bs-toggle":"modal","data-bs-target":"#modal",class:"btn btn-success"},[b,(0,l.Uk)(" Book ME!")],8,v)):((0,l.wg)(),(0,l.iD)("a",m,[f,(0,l.Uk)(" "+(0,l.zw)(a.car.status),1)]))])])}}};var g=(0,l._)("h1",null,"Book",-1),U={class:"row row-cols-1 row-cols-md-4 g-4"},k={class:"modal fade",tabindex:"-1",id:"modal"},w={class:"modal-dialog modal-dialog-centered"},S={class:"modal-content"},h={class:"modal-header"},y={class:"modal-title"},x=(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),C={class:"modal-body"},D={key:0},$={class:"mb-3"},W=(0,l._)("label",{for:"departure",class:"form-label"},"Departure",-1),B=["textContent"],z={class:"mb-3"},M=(0,l._)("label",{for:"arrival",class:"form-label"},"Arrival time",-1),q=["textContent"],A={class:"mb-3"},E=(0,l._)("label",{for:"purpose",class:"form-label"},"Purpose",-1),H=["textContent"],N={class:"mb-3"},V=(0,l._)("label",{for:"address",class:"form-label"},"Address",-1),I=["textContent"],L={class:"mb-3"},j=(0,l._)("label",{for:"driver",class:"form-label"},"Driver",-1),P=["textContent"],Y={class:"mb-3"},F=(0,l._)("label",{for:"passenger",class:"form-label"},"Passenger",-1),O={key:1},Z=[(0,l._)("p",null,"Booked!",-1)],K={class:"modal-footer"},T=(0,l._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},[(0,l._)("i",{class:"bi bi-x-square"}),(0,l.Uk)(" Close")],-1),G=["disabled"],J=(0,l._)("i",{class:"bi bi-calendar-plus"},null,-1);const Q={__name:"Book",props:{cars:Object},setup:function(a){var e=(0,r.cI)({plate_number:null,departure:null,arrival:null,purpose:null,address:null,driver:null,passenger:null,approved:!1,car_id:null});(0,l.bv)((function(){document.getElementById("modal").addEventListener("hidden.bs.modal",(function(a){r.Nd.reload({only:["flash"],onFinish:function(a){e.clearErrors(),e.reset()}})}))}));var t=function(a){e.car_id=a.id,e.plate_number=a.plate_number};return function(s,o){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)((0,l.SU)(r.Fb),{title:"Book"}),(0,l.Wm)((0,l.SU)(n.Z),null,{default:(0,l.w5)((function(){return[g,(0,l._)("div",U,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.cars,(function(a){return(0,l.wg)(),(0,l.iD)("div",{class:"col",key:a.id},[(0,l.Wm)((0,l.SU)(_),{car:a,onShowModal:t},null,8,["car"])])})),128))]),(0,l._)("div",k,[(0,l._)("div",w,[(0,l._)("div",S,[(0,l._)("form",{onSubmit:o[6]||(o[6]=(0,l.iM)((function(a){return(0,l.SU)(e).post("/books",{preserveScroll:!0,onSuccess:function(){return(0,l.SU)(e).reset()}})}),["prevent"]))},[(0,l._)("div",h,[(0,l._)("h5",y,"Book "+(0,l.zw)((0,l.SU)(e).plate_number),1),x]),(0,l._)("div",C,[s.$page.props.flash.status?((0,l.wg)(),(0,l.iD)("div",O,Z)):((0,l.wg)(),(0,l.iD)("div",D,[(0,l._)("div",$,[W,(0,l.wy)((0,l._)("input",{type:"datetime-local","onUpdate:modelValue":o[0]||(o[0]=function(a){return(0,l.SU)(e).departure=a}),class:(0,l.C_)(["form-control",{"is-invalid":(0,l.SU)(e).errors.departure}]),id:"departure"},null,2),[[l.nr,(0,l.SU)(e).departure]]),(0,l._)("div",{class:"invalid-feedback",textContent:(0,l.zw)((0,l.SU)(e).errors.departure)},null,8,B)]),(0,l._)("div",z,[M,(0,l.wy)((0,l._)("input",{type:"datetime-local","onUpdate:modelValue":o[1]||(o[1]=function(a){return(0,l.SU)(e).arrival=a}),class:(0,l.C_)(["form-control",{"is-invalid":(0,l.SU)(e).errors.arrival}]),id:"arrival"},null,2),[[l.nr,(0,l.SU)(e).arrival]]),(0,l._)("div",{class:"invalid-feedback",textContent:(0,l.zw)((0,l.SU)(e).errors.arrival)},null,8,q)]),(0,l._)("div",A,[E,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=function(a){return(0,l.SU)(e).purpose=a}),class:(0,l.C_)(["form-control",{"is-invalid":(0,l.SU)(e).errors.purpose}]),id:"purpose"},null,2),[[l.nr,(0,l.SU)(e).purpose]]),(0,l._)("div",{class:"invalid-feedback",textContent:(0,l.zw)((0,l.SU)(e).errors.purpose)},null,8,H)]),(0,l._)("div",N,[V,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=function(a){return(0,l.SU)(e).address=a}),class:(0,l.C_)(["form-control",{"is-invalid":(0,l.SU)(e).errors.address}]),id:"address"},null,2),[[l.nr,(0,l.SU)(e).address]]),(0,l._)("div",{class:"invalid-feedback",textContent:(0,l.zw)((0,l.SU)(e).errors.address)},null,8,I)]),(0,l._)("div",L,[j,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":o[4]||(o[4]=function(a){return(0,l.SU)(e).driver=a}),class:(0,l.C_)(["form-control",{"is-invalid":(0,l.SU)(e).errors.driver}]),id:"driver"},null,2),[[l.nr,(0,l.SU)(e).driver]]),(0,l._)("div",{class:"invalid-feedback",textContent:(0,l.zw)((0,l.SU)(e).errors.driver)},null,8,P)]),(0,l._)("div",Y,[F,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":o[5]||(o[5]=function(a){return(0,l.SU)(e).passenger=a}),class:"form-control",id:"passenger"},null,512),[[l.nr,(0,l.SU)(e).passenger]])])]))]),(0,l._)("div",K,[T,s.$page.props.flash.status?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("button",{key:0,type:"submit",disabled:(0,l.SU)(e).processing,class:"btn btn-success"},[J,(0,l.Uk)(" Book")],8,G))])],32)])])])]})),_:1})],64)}}}},8446:(a,e,t)=>{t.d(e,{Z:()=>M});var l=t(821),r=t(8748);const n={__name:"NavLink",props:{active:Boolean},setup:function(a){return function(e,t){return(0,l.wg)(),(0,l.j4)((0,l.SU)(r.rU),{class:(0,l.C_)(["nav-link",{active:a.active}])},{default:(0,l.w5)((function(){return[(0,l.WI)(e.$slots,"default")]})),_:3},8,["class"])}}};var s={class:"navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark","data-bs-theme":"dark"},o={class:"container-fluid"},i=(0,l._)("a",{href:"#",class:"navbar-brand"},[(0,l._)("img",{src:"/img/logoipsum-298.svg",alt:"Bootstrap",width:"30",height:"24"})],-1),c=(0,l._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,l._)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarNav"},u={class:"navbar-nav"},p={class:"nav-item"},v=(0,l._)("i",{class:"bi bi-house"},null,-1),b={class:"nav-item"},m=(0,l._)("i",{class:"bi bi-calendar-plus"},null,-1),f={key:0,class:"nav-item"},_=(0,l._)("i",{class:"bi bi-car-front"},null,-1),g={key:1,class:"nav-item"},U=(0,l._)("i",{class:"bi bi-people"},null,-1),k={key:2,class:"nav-item"},w=(0,l._)("i",{class:"bi bi-calendar-check"},null,-1),S={class:"nav-item"},h=(0,l._)("i",{class:"bi bi-person"},null,-1),y={key:1,class:"nav-item"},x=(0,l._)("i",{class:"bi bi-box-arrow-left"},null,-1),C={key:2,class:"nav-item"},D=(0,l._)("i",{class:"bi bi-box-arrow-right"},null,-1);const $={__name:"Nav",setup:function(a){var e=(0,r.qt)(),t=(0,l.Fl)((function(){return e.props.auth.user}));return function(a,e){return(0,l.wg)(),(0,l.iD)("nav",s,[(0,l._)("div",o,[i,c,(0,l._)("div",d,[(0,l._)("ul",u,[(0,l._)("li",p,[(0,l.Wm)((0,l.SU)(n),{href:a.$route("home"),active:"Home"===a.$page.component},{default:(0,l.w5)((function(){return[v,(0,l.Uk)(" Home ")]})),_:1},8,["href","active"])]),a.$_.isEmpty(t.value)?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("li",b,[(0,l.Wm)((0,l.SU)(n),{href:"/book",active:"Book"===a.$page.component},{default:(0,l.w5)((function(){return[m,(0,l.Uk)(" Book ")]})),_:1},8,["active"])]),a.$page.props.can.manage?((0,l.wg)(),(0,l.iD)("li",f,[(0,l.Wm)((0,l.SU)(n),{href:"/cars",active:"Car"===a.$page.component},{default:(0,l.w5)((function(){return[_,(0,l.Uk)(" Car Management ")]})),_:1},8,["active"])])):(0,l.kq)("",!0),a.$page.props.can.manage?((0,l.wg)(),(0,l.iD)("li",g,[(0,l.Wm)((0,l.SU)(n),{href:"/users",active:"User"===a.$page.component},{default:(0,l.w5)((function(){return[U,(0,l.Uk)(" User Management ")]})),_:1},8,["active"])])):(0,l.kq)("",!0),a.$page.props.can.approve?((0,l.wg)(),(0,l.iD)("li",k,[(0,l.Wm)((0,l.SU)(n),{href:"/approvals",active:"Approval"===a.$page.component},{default:(0,l.w5)((function(){return[w,(0,l.Uk)(" Approvals ")]})),_:1},8,["active"])])):(0,l.kq)("",!0),(0,l._)("li",S,[(0,l.Wm)((0,l.SU)(n),{href:"/profile",active:"Profile"===a.$page.component},{default:(0,l.w5)((function(){return[h,(0,l.Uk)(" "+(0,l.zw)(t.value.name),1)]})),_:1},8,["active"])])],64)),a.$page.props.auth.user?((0,l.wg)(),(0,l.iD)("li",y,[(0,l.Wm)((0,l.SU)(n),{href:"/logout",method:"post",as:"button"},{default:(0,l.w5)((function(){return[x,(0,l.Uk)(" Logout ")]})),_:1})])):((0,l.wg)(),(0,l.iD)("li",C,[(0,l.Wm)((0,l.SU)(n),{href:"/login",as:"button"},{default:(0,l.w5)((function(){return[D,(0,l.Uk)(" Login ")]})),_:1})]))])])])])}}};var W={class:"container"},B={class:"mt-5"},z=(0,l.uE)('<footer class="mt-5 mb-5"><div class="container"><div class="d-flex flex-column align-items-center"><div class="p-2">Automation Project of MIS</div><div class="p-2">Copyright 2023 ©</div></div></div></footer>',1);const M={__name:"Layout",setup:function(a){return function(a,e){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)((0,l.SU)($)),(0,l._)("div",W,[(0,l._)("div",B,[(0,l.WI)(a.$slots,"default")])]),z],64)}}}}}]);