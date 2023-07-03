"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[4121],{62872:(k,c,t)=>{t.r(c),t.d(c,{default:()=>oe});var e=t(67294),s=t(79107),r=t(86706),d=t(99369),m=t(14087),C=t(17034),T=t(185),x=t(53979),L=t(36989),l=t(75515),f=t(29728),S=t(49066),Y=t(41580),G=t(38939),X=t(49386),J=t(8060),Z=t(79031),i=t(37909),I=t(92155),q=t(63237),_=t(15234),R=t(11047),ee=t(3566),$=t(12028),te=t(89722),D=t(96315),U=t(20022),ae=t(4585),ne=t(86031),se=t(86896),P=t(88767),K=t(16550);const le=()=>{const[p,u]=(0,e.useState)(!1),[O,g]=(0,e.useState)([]),ie=(0,r.v9)(d._),{formatMessage:n}=(0,se.Z)(),{formatAPIError:v}=(0,s.So)(),b=(0,s.lm)();(0,s.go)();const{push:re}=(0,K.k6)(),{pathname:V}=(0,K.TH)(),{isLoading:de,allowedActions:{canCreate:w,canUpdate:F,canDelete:z}}=(0,s.ss)(ie.settings.webhooks),{get:ce,post:me,put:ge}=(0,s.kY)(),{notifyStatus:H}=(0,m.G)(),he="webhooks",{isLoading:ue,data:h,error:j,refetch:N}=(0,P.useQuery)(he,async()=>{const{data:{data:a}}=await ce("/admin/webhooks");return a});(0,e.useEffect)(()=>{if(j){b({type:"warning",message:v(j)});return}h&&H(n({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[h,j,b,n,H,v]);const Q=(0,P.useMutation)(async()=>{await me("/admin/webhooks/batch-delete",{ids:O})},{onError(a){b({type:"warning",message:v(a)}),u(!1)},onSuccess(){g([]),u(!1),N()}}),Ee=(0,P.useMutation)(async({isEnabled:a,id:o})=>{const{id:y,...W}=h.find(ye=>ye.id===o)??{},Me={...W,isEnabled:a};await ge(`/admin/webhooks/${o}`,Me)},{onError(a){b({type:"warning",message:v(a)})},onSuccess(){N()}}),fe=()=>Q.mutate(),ve=a=>g(a?h.map(o=>o.id):[]),be=(a,o)=>g(a?y=>[...y,o]:y=>y.filter(W=>W!==o)),A=a=>re(`${V}/${a}`),B=de||ue,M=h?.length??0,E=O.length;return e.createElement(C.A,null,e.createElement(s.SL,{name:"Webhooks"}),e.createElement(T.o,{"aria-busy":B},e.createElement(x.T,{title:n({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:n({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:w&&!B&&e.createElement(s.Qj,{startIcon:e.createElement(D.Z,null),variant:"default",to:`${V}/create`,size:"S"},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),E>0&&z&&e.createElement(L.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(l.Z,{variant:"epsilon",textColor:"neutral600"},n({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:E})),e.createElement(f.z,{onClick:()=>u(!0),startIcon:e.createElement(U.Z,null),size:"L",variant:"danger-light"},n({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(S.D,null,B?e.createElement(Y.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.dO,null)):M>0?e.createElement(G.i,{colCount:5,rowCount:M+1,footer:e.createElement(X.c,{onClick:()=>w?A("create"):{},icon:e.createElement(D.Z,null)},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(J.h,null,e.createElement(Z.Tr,null,e.createElement(i.Th,null,e.createElement(I.C,{"aria-label":n({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:E>0&&E<M,value:E===M,onValueChange:ve})),e.createElement(i.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.name",defaultMessage:"Name"}))),e.createElement(i.Th,{width:"60%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(i.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(i.Th,null,e.createElement(q.T,null,n({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(_.p,null,h.map(a=>e.createElement(Z.Tr,{key:a.id,...(0,s.X7)({fn:()=>A(a.id),condition:F})},e.createElement(i.Td,{...s.UW},e.createElement(I.C,{"aria-label":`${n({id:"global.select",defaultMessage:"Select"})} ${a.name}`,value:O?.includes(a.id),onValueChange:o=>be(o,a.id),name:"select"})),e.createElement(i.Td,null,e.createElement(l.Z,{fontWeight:"semiBold",textColor:"neutral800"},a.name)),e.createElement(i.Td,null,e.createElement(l.Z,{textColor:"neutral800"},a.url)),e.createElement(i.Td,null,e.createElement(R.k,null,e.createElement(ee.r,{onLabel:n({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:n({id:"global.disabled",defaultMessage:"Disabled"}),label:`${a.name} ${n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:a.isEnabled,onChange:o=>{o.stopPropagation(),Ee.mutate({isEnabled:!a.isEnabled,id:a.id})},visibleLabels:!0}))),e.createElement(i.Td,null,e.createElement(R.k,{gap:1},F&&e.createElement($.h,{label:n({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(ae.Z,null),noBorder:!0}),z&&e.createElement($.h,{onClick:o=>{o.stopPropagation(),g([a.id]),u(!0)},label:n({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:e.createElement(U.Z,null),noBorder:!0}))))))):e.createElement(te.x,{icon:e.createElement(ne.Z,{width:"160px"}),content:n({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(f.z,{variant:"secondary",startIcon:e.createElement(D.Z,null),onClick:()=>w?A("create"):{}},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(s.QH,{isOpen:p,onToggleDialog:()=>u(a=>!a),onConfirm:fe,isConfirmButtonLoading:Q.isLoading}))},oe=()=>{const p=(0,r.v9)(d._);return e.createElement(s.O4,{permissions:p.settings.webhooks.main},e.createElement(le,null))}},36989:(k,c,t)=>{t.d(c,{Z:()=>r});var e=t(85893),s=t(11047);const r=({startActions:d,endActions:m})=>!d&&!m?null:(0,e.jsxs)(s.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(s.k,{gap:2,wrap:"wrap",children:d}),(0,e.jsx)(s.k,{gap:2,shrink:0,wrap:"wrap",children:m})]})},49386:(k,c,t)=>{t.d(c,{c:()=>L});var e=t(85893),s=t(88972),r=t(41580),d=t(70004),m=t(11047),C=t(75515);const T=(0,s.ZP)(r.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:l})=>l.colors.primary600};
  }
`,x=(0,s.ZP)(r.x)`
  border-radius: 0 0 ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,L=({children:l,icon:f,...S})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(d.i,{}),(0,e.jsx)(x,{as:"button",background:"primary100",padding:5,...S,children:(0,e.jsxs)(m.k,{children:[(0,e.jsx)(T,{"aria-hidden":!0,background:"primary200",children:f}),(0,e.jsx)(r.x,{paddingLeft:3,children:(0,e.jsx)(C.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:l})})]})})]})}}]);