"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[2812],{50935:(I,f,t)=>{t.d(f,{R:()=>E});var e=t(79107),n=t(80129),L=t(88767);function E(v={},D={}){const{id:c="",...C}=v,h=(0,n.stringify)(C,{encode:!1}),{get:R}=(0,e.kY)(),{data:g,isError:A,isLoading:S,refetch:U}=(0,L.useQuery)(["users",c,C],async()=>{const{data:{data:b}}=await R(`/admin/users/${c}${h?`?${h}`:""}`);return b},D);let M=[];return c&&g?M=[g]:Array.isArray(g?.results)&&(M=g.results),{users:M,pagination:g?.pagination??null,isLoading:S,isError:A,refetch:U}}},94699:(I,f,t)=>{t.d(f,{Z:()=>R});var e=t(67294),n=t(41580),L=t(29728),E=t(79107),v=t(89597),D=t(45697),c=t.n(D),C=t(86896);const h=({displayedFilters:g})=>{const[A,S]=(0,e.useState)(!1),{formatMessage:U}=(0,C.Z)(),M=(0,e.useRef)(),b=()=>{S($=>!$)};return e.createElement(e.Fragment,null,e.createElement(n.x,{paddingTop:1,paddingBottom:1},e.createElement(L.z,{variant:"tertiary",ref:M,startIcon:e.createElement(v.Z,null),onClick:b,size:"S"},U({id:"app.utils.filters",defaultMessage:"Filters"})),A&&e.createElement(E.J5,{displayedFilters:g,isVisible:A,onToggle:b,source:M})),e.createElement(E.W$,{filtersSchema:g}))};h.propTypes={displayedFilters:c().arrayOf(c().shape({name:c().string.isRequired,metadatas:c().shape({label:c().string}),fieldSchema:c().shape({type:c().string})})).isRequired};const R=h},35915:(I,f,t)=>{t.r(f),t.d(f,{default:()=>Me});var e=t(67294),n=t(79107),L=t(86706),E=t(99369),v=t(17034),D=t(49066),c=t(41580),C=t(185),h=t(53979),R=t(36989),g=t(86896),A=t(94699),S=t(88767),U=t(16550),M=t(50935);const $=({canReadAuditLogs:a,canReadUsers:d})=>{const{get:u}=(0,n.kY)(),{search:r}=(0,U.TH)(),m=(0,n.lm)(),l={keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:O=>m({type:"warning",message:O.message})},{users:i,isError:s,isLoading:p}=(0,M.R)({},{...l,enabled:d,staleTime:2*(1e3*60)}),{data:y,isLoading:P,isError:H}=(0,S.useQuery)(["auditLogs",r],async({queryKey:O})=>{const Z=O[1],{data:T}=await u(`/admin/audit-logs${Z}`);return T},{...l,enabled:a});return{auditLogs:y,users:i,isLoading:p||P,hasError:H||s}};var k=t(42866),q=t(24969),_=t(59946),ee=t(63321),te=t(36773),ae=t(45697),o=t.n(ae),se=t(23855);const z=()=>{const{formatDate:a}=(0,g.Z)();return u=>{const r=(0,se.Z)(u),m=a(r,{dateStyle:"long"}),l=a(r,{timeStyle:"medium",hourCycle:"h24"});return`${m}, ${l}`}};var B=t(11047),ne=t(77197),F=t(75515),oe=t(11276),ie=t(39990);const Q={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},W=a=>Q[a]||a,Y=({actionLabel:a,actionName:d})=>e.createElement(B.k,{direction:"column",alignItems:"baseline",gap:1},e.createElement(F.Z,{textColor:"neutral600",variant:"sigma"},a),e.createElement(F.Z,{textColor:"neutral600"},d));Y.propTypes={actionLabel:o().string.isRequired,actionName:o().string.isRequired};const x=Y,j=({status:a,data:d,formattedDate:u})=>{const{formatMessage:r}=(0,g.Z)();if(a==="loading")return e.createElement(B.k,{padding:7,justifyContent:"center",alignItems:"center"},e.createElement(ne.a,null,"Loading content..."));const{action:m,user:l,payload:i}=d;return e.createElement(e.Fragment,null,e.createElement(c.x,{marginBottom:3},e.createElement(F.Z,{variant:"delta",id:"title"},r({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"}))),e.createElement(oe.r,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0},e.createElement(x,{actionLabel:r({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:r({id:`Settings.permissions.auditLogs.${m}`,defaultMessage:W(m)},{model:i?.model})}),e.createElement(x,{actionLabel:r({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:u}),e.createElement(x,{actionLabel:r({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:l?.displayName||"-"}),e.createElement(x,{actionLabel:r({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:l?.id.toString()||"-"})),e.createElement(ie.V,{value:JSON.stringify(i,null,2),disabled:!0,label:r({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})}))};j.defaultProps={data:{}},j.propTypes={status:o().oneOf(["idle","loading","error","success"]).isRequired,data:o().shape({action:o().string,date:o().string,payload:o().object,user:o().object}),formattedDate:o().string.isRequired};const re=j,J=({handleClose:a,logId:d})=>{const{get:u}=(0,n.kY)(),r=(0,n.lm)(),m=async y=>{const{data:P}=await u(`/admin/audit-logs/${y}`);if(!P)throw new Error("Audit log not found");return P},{data:l,status:i}=(0,S.useQuery)(["audit-log",d],()=>m(d),{onError(){r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),a()}}),s=z(),p=l?s(l.date):"";return e.createElement(k.P,{onClose:a,labelledBy:"title"},e.createElement(q.x,null,e.createElement(ee.O,{label:p,id:"title"},e.createElement(te.$,{isCurrent:!0},p))),e.createElement(_.f,null,e.createElement(re,{status:i,data:l,formattedDate:p})))};J.propTypes={handleClose:o().func.isRequired,logId:o().string.isRequired};const le=J,K=({pagination:a})=>e.createElement(c.x,{paddingTop:4},e.createElement(B.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(n.v4,null),e.createElement(n.tU,{pagination:a})));K.defaultProps={pagination:{pageCount:0,pageSize:50,total:0}},K.propTypes={pagination:o().shape({page:o().number,pageCount:o().number,pageSize:o().number,total:o().number})};const de=K;var me=t(15234),ue=t(79031),X=t(37909),ce=t(12028),ge=t(8934);const V=({headers:a,rows:d,onOpenModal:u})=>{const{formatMessage:r}=(0,g.Z)(),m=z(),l=({type:i,value:s,model:p})=>i==="date"?m(s):i==="action"?r({id:`Settings.permissions.auditLogs.${s}`,defaultMessage:W(s)},{model:p}):s||"-";return e.createElement(me.p,null,d.map(i=>e.createElement(ue.Tr,{key:i.id,...(0,n.X7)({fn:()=>u(i.id)})},a.map(({key:s,name:p,cellFormatter:y})=>e.createElement(X.Td,{key:s},e.createElement(F.Z,{textColor:"neutral800"},l({type:s,value:y?y(i[p]):i[p],model:i.payload?.model})))),e.createElement(X.Td,{...n.UW},e.createElement(B.k,{justifyContent:"end"},e.createElement(ce.h,{onClick:()=>u(i.id),"aria-label":r({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${i.action} action`}),noBorder:!0,icon:e.createElement(ge.Z,null)}))))))};V.defaultProps={rows:[]},V.propTypes={headers:o().array.isRequired,rows:o().array,onOpenModal:o().func.isRequired};const pe=V;var fe=t(29178),Ee=t(90608);const N=({value:a,options:d,onChange:u})=>{const{formatMessage:r}=(0,g.Z)(),m=r({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return e.createElement(fe.hQ,{"aria-label":m,value:a,onChange:u},d.map(({label:l,customValue:i})=>e.createElement(Ee.O,{key:i,value:i},l)))};N.defaultProps={value:null},N.propTypes={value:o().string,options:o().arrayOf(o().shape({label:o().string.isRequired,customValue:o().string.isRequired}).isRequired).isRequired,onChange:o().func.isRequired};const G=N,w=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],ye=({formatMessage:a,users:d,canReadUsers:u})=>{const r=Object.keys(Q).map(l=>({label:a({id:`Settings.permissions.auditLogs.${l}`,defaultMessage:W(l)},{model:void 0}),customValue:l})),m=[{name:"action",metadatas:{customOperators:w,label:a({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),options:r,customInput:G},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:a({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(u&&d){const l=s=>s.username?s.username:s.firstname&&s.lastname?a({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:s.firstname,lastname:s.lastname}):s.email,i=d.map(s=>({label:l(s),customValue:s.id.toString()}));return[...m,{name:"user",metadatas:{customOperators:w,label:a({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:i,customInput:G},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return m},Le=[{name:"action",key:"action",metadatas:{label:{id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"},sortable:!0}},{name:"date",key:"date",metadatas:{label:{id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"},sortable:!0}},{key:"user",name:"user",metadatas:{label:{id:"Settings.permissions.auditLogs.user",defaultMessage:"User"},sortable:!1},cellFormatter:a=>a?a.displayName:""}],ve=()=>{const{formatMessage:a}=(0,g.Z)(),d=(0,L.v9)(E._),u=e.useMemo(()=>({...d.settings.auditLogs,readUsers:d.settings.users.read}),[d.settings.auditLogs,d.settings.users.read]),{allowedActions:{canRead:r,canReadUsers:m}}=(0,n.ss)(u),[{query:l},i]=(0,n.Kx)(),{auditLogs:s,users:p,isLoading:y,hasError:P}=$({canReadAuditLogs:r,canReadUsers:m});(0,n.go)();const H=ye({formatMessage:a,users:p,canReadUsers:m}),O=a({id:"global.auditLogs",defaultMessage:"Audit Logs"}),Z=Le.map(T=>({...T,metadatas:{...T.metadatas,label:a(T.metadatas.label)}}));return P?e.createElement(v.A,null,e.createElement(D.D,null,e.createElement(c.x,{paddingTop:8},e.createElement(n.Hn,null)))):e.createElement(C.o,{"aria-busy":y},e.createElement(n.SL,{name:O}),e.createElement(h.T,{title:O,subtitle:a({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),e.createElement(R.Z,{startActions:e.createElement(A.Z,{displayedFilters:H})}),e.createElement(D.D,{canRead:r},e.createElement(n.tM,{contentType:"Audit logs",headers:Z,rows:s?.results||[],withBulkActions:!0,isLoading:y},e.createElement(pe,{headers:Z,rows:s?.results||[],onOpenModal:T=>i({id:T})})),e.createElement(de,{pagination:s?.pagination})),l?.id&&e.createElement(le,{handleClose:()=>i({id:null},"remove"),logId:l.id}))},Me=()=>{const a=(0,L.v9)(E._);return e.createElement(n.O4,{permissions:a.settings.auditLogs.main},e.createElement(ve,null))}},90608:(I,f,t)=>{t.d(f,{O:()=>n});var e=t(29178);const n=e.Wx},36989:(I,f,t)=>{t.d(f,{Z:()=>L});var e=t(85893),n=t(11047);const L=({startActions:E,endActions:v})=>!E&&!v?null:(0,e.jsxs)(n.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(n.k,{gap:2,wrap:"wrap",children:E}),(0,e.jsx)(n.k,{gap:2,shrink:0,wrap:"wrap",children:v})]})}}]);