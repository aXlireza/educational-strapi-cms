"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[3455],{98906:(N,M,t)=>{t.r(M),t.d(M,{default:()=>Ee});var e=t(67294),n=t(86597),p=t(87751),h=t(65186),y=t(4585),L=t(20022),P=t(96315),R=t(185),d=t(53979),D=t(29728),g=t(36989),U=t(49066),K=t(38939),G=t(49386),X=t(8060),V=t(79031),f=t(37909),O=t(75515),J=t(63237),Y=t(15234),k=t(27361),w=t.n(k),q=t(90233),$=t(86896),_=t(16550),ee=t(48474);const te=()=>"todo empty role";var ne=t(45697),A=t.n(ne),le=t(11047),se=t(41580),ae=t(12028);const H=({id:l,name:c,description:s,usersCount:m,icons:u,rowIndex:r})=>{const{formatMessage:C}=(0,$.Z)(),v=C({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:m});return e.createElement(V.Tr,{"aria-rowindex":r,key:l,...(0,n.X7)({fn:u[1].onClick})},e.createElement(f.Td,{maxWidth:(0,n.Q1)(130)},e.createElement(O.Z,{ellipsis:!0,textColor:"neutral800"},c)),e.createElement(f.Td,{maxWidth:(0,n.Q1)(250)},e.createElement(O.Z,{ellipsis:!0,textColor:"neutral800"},s)),e.createElement(f.Td,null,e.createElement(O.Z,{textColor:"neutral800"},v)),e.createElement(f.Td,null,e.createElement(le.k,{justifyContent:"flex-end",...n.UW},u.map((o,T)=>o?e.createElement(se.x,{key:o.label,paddingLeft:T===0?0:1},e.createElement(ae.h,{onClick:o.onClick,label:o.label,noBorder:!0,icon:o.icon})):null))))};H.propTypes={id:A().number.isRequired,name:A().string.isRequired,description:A().string.isRequired,usersCount:A().number.isRequired,icons:A().array.isRequired,rowIndex:A().number.isRequired};const oe=H;var re=t(18172);const ie={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},de=(l,c)=>(0,re.ZP)(l,s=>{switch(c.type){case"ON_REMOVE_ROLES":{s.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{s.shouldRefetchData=!0,s.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{s.shouldRefetchData=!1,s.roleToDelete=null,s.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{s.roleToDelete=c.id;break}default:return s}}),ce=()=>{(0,n.go)();const{isLoading:l,allowedActions:{canCreate:c,canDelete:s,canRead:m,canUpdate:u}}=(0,n.ss)(p.Z.settings.roles),{getData:r,roles:C,isLoading:v}=(0,ee.bF)(!1),[{query:o}]=(0,n.Kx)(),T=o?._q||"",x=(0,q.Z)(C,T,{keys:["name","description"]});return(0,e.useEffect)(()=>{!l&&m&&r()},[l,m,r]),{isLoadingForPermissions:l,canCreate:c,canDelete:s,canRead:m,canUpdate:u,isLoading:v,getData:r,sortedRoles:x,roles:C}},me=({getData:l,canCreate:c,canDelete:s,canUpdate:m})=>{const{formatMessage:u}=(0,$.Z)(),r=(0,n.lm)(),[C,v]=(0,e.useState)(!1),{push:o}=(0,_.k6)(),[{selectedRoles:T,showModalConfirmButtonLoading:x,roleToDelete:j},B]=(0,e.useReducer)(de,ie),{post:S}=(0,n.tg)(),F=async()=>{try{B({type:"ON_REMOVE_ROLES"}),await S("/admin/roles/batch-delete",{ids:[j]}),await l(),B({type:"RESET_DATA_TO_DELETE"})}catch(a){const i=w()(a,["response","payload","data","ids"],null);if(i&&Array.isArray(i)){const pe=i.join(`
`);r({type:"warning",message:pe})}else r({type:"warning",message:{id:"notification.error"}})}E()},Z=(0,e.useCallback)(a=>{o(`/settings/roles/duplicate/${a}`)},[o]),b=()=>o("/settings/roles/new"),I=(0,e.useCallback)(a=>{B({type:"SET_ROLE_TO_DELETE",id:a}),E()},[]),E=()=>v(a=>!a),W=(0,e.useCallback)(a=>{o(`/settings/roles/${a}`)},[o]),Q=(0,e.useCallback)((a,i)=>{a.preventDefault(),a.stopPropagation(),i.usersCount?r({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):I(i.id)},[r,I]),z=(0,e.useCallback)((a,i)=>{a.preventDefault(),a.stopPropagation(),Z(i.id)},[Z]),ge=(0,e.useCallback)(a=>[...c?[{onClick:i=>z(i,a),label:u({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:e.createElement(h.Z,null)}]:[],...m?[{onClick:()=>W(a.id),label:u({id:"app.utils.edit",defaultMessage:"Edit"}),icon:e.createElement(y.Z,null)}]:[],...s?[{onClick:i=>Q(i,a),label:u({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(L.Z,null)}]:[]],[u,Q,z,W,c,m,s]);return{handleNewRoleClick:b,getIcons:ge,selectedRoles:T,isWarningDeleteAllOpened:C,showModalConfirmButtonLoading:x,handleToggleModal:E,handleDeleteData:F}},ue=()=>{const{formatMessage:l}=(0,$.Z)(),{isLoadingForPermissions:c,canCreate:s,canRead:m,canDelete:u,canUpdate:r,isLoading:C,getData:v,sortedRoles:o}=ce(),{handleNewRoleClick:T,getIcons:x,isWarningDeleteAllOpened:j,showModalConfirmButtonLoading:B,handleToggleModal:S,handleDeleteData:F}=me({getData:v,canCreate:s,canDelete:u,canUpdate:r}),Z=o.length+1,b=6;if(c)return e.createElement(R.o,null,e.createElement(n.dO,null));const I=l({id:"global.roles",defaultMessage:"roles"});return e.createElement(R.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(d.T,{primaryAction:s?e.createElement(D.z,{onClick:T,startIcon:e.createElement(P.Z,null),size:"S"},l({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null,title:I,subtitle:l({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),m&&e.createElement(g.Z,{startActions:e.createElement(n.m,{label:l({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:I})})}),m&&e.createElement(U.D,null,e.createElement(K.i,{colCount:b,rowCount:Z,footer:s?e.createElement(G.c,{onClick:T,icon:e.createElement(P.Z,null)},l({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null},e.createElement(X.h,null,e.createElement(V.Tr,{"aria-rowindex":1},e.createElement(f.Th,null,e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),e.createElement(f.Th,null,e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"Description"}))),e.createElement(f.Th,null,e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.users",defaultMessage:"Users"}))),e.createElement(f.Th,null,e.createElement(J.T,null,l({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(Y.p,null,o?.map((E,W)=>e.createElement(oe,{key:E.id,id:E.id,name:E.name,description:E.description,usersCount:E.usersCount,icons:x(E),rowIndex:W+2})))),!Z&&!C&&e.createElement(te,null)),e.createElement(n.QH,{isOpen:j,onConfirm:F,isConfirmButtonLoading:B,onToggleDialog:S}))},Ee=()=>e.createElement(n.O4,{permissions:p.Z.settings.roles.main},e.createElement(ue,null))},36989:(N,M,t)=>{t.d(M,{Z:()=>R});var e=t(67294),n=t(45697),p=t(88972),h=t(41580),y=t(11047);const L=(0,p.ZP)(y.k)`
  & > * + * {
    margin-left: ${({theme:d})=>d.spaces[2]};
  }

  margin-left: ${({pullRight:d})=>d?"auto":void 0};
`,P=(0,p.ZP)(L)`
  flex-shrink: 0;
`,R=({startActions:d,endActions:D})=>d||D?e.createElement(h.x,{paddingLeft:10,paddingRight:10},e.createElement(h.x,{paddingBottom:4},e.createElement(y.k,{justifyContent:"space-between",alignItems:"flex-start"},d&&e.createElement(L,{wrap:"wrap"},d),D&&e.createElement(P,{pullRight:!0},D)))):null;R.defaultProps={endActions:void 0,startActions:void 0},R.propTypes={endActions:n.node,startActions:n.node}},49386:(N,M,t)=>{t.d(M,{c:()=>D});var e=t(67294),n=t(45697),p=t(88972),h=t(41580),y=t(70004),L=t(11047),P=t(75515);const R=(0,p.ZP)(h.x)`
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
    fill: ${({theme:g})=>g.colors.primary600};
  }
`,d=(0,p.ZP)(h.x)`
  border-radius: 0 0 ${({theme:g})=>g.borderRadius} ${({theme:g})=>g.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,D=({children:g,icon:U,...K})=>e.createElement("div",null,e.createElement(y.i,null),e.createElement(d,{as:"button",background:"primary100",padding:5,...K},e.createElement(L.k,null,e.createElement(R,{"aria-hidden":!0,background:"primary200"},U),e.createElement(h.x,{paddingLeft:3},e.createElement(P.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},g)))));D.propTypes={children:n.string.isRequired,icon:n.node.isRequired}}}]);
