(self.webpackChunkcms=self.webpackChunkcms||[]).push([[2282],{8971:(b,E,t)=>{"use strict";t.r(E),t.d(E,{ProvidersPage:()=>ue,default:()=>Ze});var e=t(67294),a=t(86896),n=t(86597),r=t(18721),s=t.n(r),u=t(11700),i=t.n(u),o=t(14087),g=t(17034),P=t(185),m=t(53979),f=t(49066),O=t(38939),c=t(8060),y=t(79031),l=t(37909),v=t(75515),B=t(63237),U=t(15234),I=t(12028),G=t(4585),N=t(88767),p=t(87561),x=t(89031);const ne={id:(0,x.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},ae={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},Q={id:(0,x.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},J={id:(0,x.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},re={id:(0,x.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},se={id:(0,x.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},$={id:(0,x.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},ie={id:(0,x.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Y={email:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:Q,size:6}]],schema:p.Ry().shape({enabled:p.Xg().required(n.I0.required)})},providers:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:Q,size:6,validations:{required:!0}}],[{intlLabel:re,name:"key",type:"text",placeholder:$,size:12,validations:{required:!0}}],[{intlLabel:ie,name:"secret",type:"text",placeholder:$,size:12,validations:{required:!0}}],[{intlLabel:ne,placeholder:ae,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:se,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:p.Ry().shape({enabled:p.Xg().required(n.I0.required),key:p.Z_().when("enabled",{is:!0,then:p.Z_().required(n.I0.required),otherwise:p.Z_()}),secret:p.Z_().when("enabled",{is:!0,then:p.Z_().required(n.I0.required),otherwise:p.Z_()}),callback:p.Z_().when("enabled",{is:!0,then:p.Z_().required(n.I0.required),otherwise:p.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:Q,size:6,validations:{required:!0}}],[{intlLabel:re,name:"key",type:"text",placeholder:$,size:12,validations:{required:!0}}],[{intlLabel:ie,name:"secret",type:"text",placeholder:$,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,x.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:$,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,x.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,x.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:ne,placeholder:ae,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:se,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:p.Ry().shape({enabled:p.Xg().required(n.I0.required),key:p.Z_().when("enabled",{is:!0,then:p.Z_().required(n.I0.required),otherwise:p.Z_()}),secret:p.Z_().when("enabled",{is:!0,then:p.Z_().required(n.I0.required),otherwise:p.Z_()}),subdomain:p.Z_().when("enabled",{is:!0,then:p.Z_().required(n.I0.required),otherwise:p.Z_()}),callback:p.Z_().when("enabled",{is:!0,then:p.Z_().required(n.I0.required),otherwise:p.Z_()})})}},pe=async h=>{try{const{get:L}=(0,n.tg)(),{data:A}=await L((0,x.Gc)("providers"));return A}catch{throw h({type:"warning",message:{id:"notification.error"}}),new Error("error")}},ge=h=>{const{put:L}=(0,n.tg)();return L((0,x.Gc)("providers"),h)};var ve=t(89734),fe=t.n(ve);const he=h=>fe()(Object.keys(h).reduce((L,A)=>{const{icon:Z,enabled:R,subdomain:j}=h[A],C=Z==="envelope"?["fas","envelope"]:["fab",Z];return j!==void 0?L.push({name:A,icon:C,enabled:R,subdomain:j}):L.push({name:A,icon:C,enabled:R}),L},[]),"name");var oe=t(81912),Ee=t(42866),ye=t(24969),le=t(2407),be=t(59946),Pe=t(11047),Me=t(11276),xe=t(74571),Oe=t(36856),de=t(29728),Be=t(45697),d=t.n(Be),Le=t(41054),Te=t(20707),Re=t(16364);const w=({description:h,disabled:L,intlLabel:A,error:Z,name:R,onChange:j,placeholder:C,providerToEditName:W,type:F,value:M})=>{const{formatMessage:D}=(0,a.Z)(),z=R==="noName"?`${strapi.backendURL}/api/connect/${W}/callback`:M,K=D({id:A.id,defaultMessage:A.defaultMessage},{provider:W,...A.values}),S=h?D({id:h.id,defaultMessage:h.defaultMessage},{provider:W,...h.values}):"";if(F==="bool")return e.createElement(Te.s,{"aria-label":R,checked:M,disabled:L,hint:S,label:K,name:R,offLabel:D({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:D({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:H=>{j({target:{name:R,value:H.target.checked}})}});const q=C?D({id:C.id,defaultMessage:C.defaultMessage},{...C.values}):"",_=Z?D({id:Z,defaultMessage:Z}):"";return e.createElement(Re.o,{"aria-label":R,disabled:L,error:_,label:K,name:R,onChange:j,placeholder:q,type:F,value:z})};w.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},w.propTypes={description:d().shape({id:d().string.isRequired,defaultMessage:d().string.isRequired,values:d().object}),disabled:d().bool,error:d().string,intlLabel:d().shape({id:d().string.isRequired,defaultMessage:d().string.isRequired,values:d().object}).isRequired,name:d().string.isRequired,onChange:d().func.isRequired,placeholder:d().shape({id:d().string.isRequired,defaultMessage:d().string.isRequired,values:d().object}),providerToEditName:d().string.isRequired,type:d().string.isRequired,value:d().oneOfType([d().bool,d().string])};const Ae=w,k=({headerBreadcrumbs:h,initialData:L,isSubmiting:A,layout:Z,isOpen:R,onSubmit:j,onToggle:C,providerToEditName:W})=>{const{formatMessage:F}=(0,a.Z)();return R?e.createElement(Ee.P,{onClose:C,labelledBy:"title"},e.createElement(ye.x,null,e.createElement(le.O,{label:h.join(", ")},h.map(M=>e.createElement(le.$,{key:M},M)))),e.createElement(Le.J9,{onSubmit:M=>j(M),initialValues:L,validationSchema:Z.schema,validateOnChange:!1},({errors:M,handleChange:D,values:z})=>e.createElement(n.l0,null,e.createElement(be.f,null,e.createElement(Pe.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(Me.r,{gap:5},Z.form.map(K=>K.map(S=>e.createElement(xe.P,{key:S.name,col:S.size,xs:12},e.createElement(Ae,{...S,error:M[S.name],onChange:D,value:z[S.name],providerToEditName:W}))))))),e.createElement(Oe.m,{startActions:e.createElement(de.z,{variant:"tertiary",onClick:C,type:"button"},F({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(de.z,{type:"submit",loading:A},F({id:"global.save",defaultMessage:"Save"}))})))):null};k.defaultProps={initialData:null,providerToEditName:null},k.propTypes={headerBreadcrumbs:d().arrayOf(d().string).isRequired,initialData:d().object,layout:d().shape({form:d().arrayOf(d().array),schema:d().object}).isRequired,isOpen:d().bool.isRequired,isSubmiting:d().bool.isRequired,onSubmit:d().func.isRequired,onToggle:d().func.isRequired,providerToEditName:d().string};const Ce=k,ue=()=>{const{formatMessage:h}=(0,a.Z)();(0,n.go)();const{notifyStatus:L}=(0,o.G)(),A=(0,N.useQueryClient)(),{trackUsage:Z}=(0,n.rS)(),R=(0,e.useRef)(Z),[j,C]=(0,e.useState)(!1),[W,F]=(0,e.useState)(!1),[M,D]=(0,e.useState)(null),z=(0,n.lm)(),{lockApp:K,unlockApp:S}=(0,n.o1)(),q=(0,e.useMemo)(()=>({update:oe.Z.updateProviders}),[]),{isLoading:_,allowedActions:{canUpdate:H}}=(0,n.ss)(q),{isLoading:Ue,data:V,isFetching:De}=(0,N.useQuery)("get-providers",()=>pe(z),{onSuccess(){L(h({id:(0,x.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Se=Ue||De,je=(0,N.useMutation)(ge,{async onSuccess(){await A.invalidateQueries("get-providers"),z({type:"info",message:{id:(0,x.OB)("notification.success.submit")}}),R.current("didEditAuthenticationProvider"),F(!1),ee(),S()},onError(){z({type:"warning",message:{id:"notification.error"}}),S(),F(!1)},refetchActive:!1}),X=(0,e.useMemo)(()=>he(V),[V]),Fe=X.length,ce=(0,e.useMemo)(()=>{if(!M)return!1;const T=X.find(te=>te.name===M);return s()(T,"subdomain")},[X,M]),Ie=h({id:(0,x.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),We=(0,e.useMemo)(()=>M==="email"?Y.email:ce?Y.providersWithSubdomain:Y.providers,[M,ce]),ee=()=>{C(T=>!T)},me=T=>{H&&(D(T.name),ee())},ze=async T=>{F(!0),K(),R.current("willEditAuthenticationProvider");const te={...V,[M]:T};je.mutate({providers:te})};return e.createElement(g.A,null,e.createElement(n.SL,{name:Ie}),e.createElement(P.o,null,e.createElement(m.T,{title:h({id:(0,x.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Se||_?e.createElement(n.dO,null):e.createElement(f.D,null,e.createElement(O.i,{colCount:3,rowCount:Fe+1},e.createElement(c.h,null,e.createElement(y.Tr,null,e.createElement(l.Th,null,e.createElement(v.Z,{variant:"sigma",textColor:"neutral600"},h({id:"global.name",defaultMessage:"Name"}))),e.createElement(l.Th,null,e.createElement(v.Z,{variant:"sigma",textColor:"neutral600"},h({id:(0,x.OB)("Providers.status"),defaultMessage:"Status"}))),e.createElement(l.Th,null,e.createElement(v.Z,{variant:"sigma"},e.createElement(B.T,null,h({id:"global.settings",defaultMessage:"Settings"})))))),e.createElement(U.p,null,X.map(T=>e.createElement(y.Tr,{key:T.name,...(0,n.X7)({fn:()=>me(T),condition:H})},e.createElement(l.Td,{width:"45%"},e.createElement(v.Z,{fontWeight:"semiBold",textColor:"neutral800"},T.name)),e.createElement(l.Td,{width:"65%"},e.createElement(v.Z,{textColor:T.enabled?"success600":"danger600","data-testid":`enable-${T.name}`},T.enabled?h({id:"global.enabled",defaultMessage:"Enabled"}):h({id:"global.disabled",defaultMessage:"Disabled"}))),e.createElement(l.Td,{...n.UW},H&&e.createElement(I.h,{onClick:()=>me(T),noBorder:!0,icon:e.createElement(G.Z,null),label:"Edit"})))))))),e.createElement(Ce,{initialData:V[M],isOpen:j,isSubmiting:W,layout:We,headerBreadcrumbs:[h({id:(0,x.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),i()(M)],onToggle:ee,onSubmit:ze,providerToEditName:M}))},Ze=()=>e.createElement(n.O4,{permissions:oe.Z.readProviders},e.createElement(ue,null))},89031:(b,E,t)=>{"use strict";t.d(E,{YX:()=>r,Gc:()=>i,OB:()=>o.Z});var e=t(41609),a=t.n(e);const r=g=>Object.keys(g).reduce((P,m)=>{const f=g[m].controllers,O=Object.keys(f).reduce((c,y)=>(a()(f[y])||(c[y]=f[y]),c),{});return a()(O)||(P[m]={controllers:O}),P},{});var s=t(31498);const i=g=>`/${s.Z}/${g}`;var o=t(84757)},89881:(b,E,t)=>{var e=t(47816),a=t(99291),n=a(e);b.exports=n},69199:(b,E,t)=>{var e=t(89881),a=t(98612);function n(r,s){var u=-1,i=a(r)?Array(r.length):[];return e(r,function(o,g,P){i[++u]=s(o,g,P)}),i}b.exports=n},82689:(b,E,t)=>{var e=t(29932),a=t(97786),n=t(67206),r=t(69199),s=t(71131),u=t(7518),i=t(85022),o=t(6557),g=t(1469);function P(m,f,O){f.length?f=e(f,function(l){return g(l)?function(v){return a(v,l.length===1?l[0]:l)}:l}):f=[o];var c=-1;f=e(f,u(n));var y=r(m,function(l,v,B){var U=e(f,function(I){return I(l)});return{criteria:U,index:++c,value:l}});return s(y,function(l,v){return i(l,v,O)})}b.exports=P},71131:b=>{function E(t,e){var a=t.length;for(t.sort(e);a--;)t[a]=t[a].value;return t}b.exports=E},26393:(b,E,t)=>{var e=t(33448);function a(n,r){if(n!==r){var s=n!==void 0,u=n===null,i=n===n,o=e(n),g=r!==void 0,P=r===null,m=r===r,f=e(r);if(!P&&!f&&!o&&n>r||o&&g&&m&&!P&&!f||u&&g&&m||!s&&m||!i)return 1;if(!u&&!o&&!f&&n<r||f&&s&&i&&!u&&!o||P&&s&&i||!g&&i||!m)return-1}return 0}b.exports=a},85022:(b,E,t)=>{var e=t(26393);function a(n,r,s){for(var u=-1,i=n.criteria,o=r.criteria,g=i.length,P=s.length;++u<g;){var m=e(i[u],o[u]);if(m){if(u>=P)return m;var f=s[u];return m*(f=="desc"?-1:1)}}return n.index-r.index}b.exports=a},99291:(b,E,t)=>{var e=t(98612);function a(n,r){return function(s,u){if(s==null)return s;if(!e(s))return n(s,u);for(var i=s.length,o=r?i:-1,g=Object(s);(r?o--:++o<i)&&u(g[o],o,g)!==!1;);return s}}b.exports=a},89734:(b,E,t)=>{var e=t(21078),a=t(82689),n=t(5976),r=t(16612),s=n(function(u,i){if(u==null)return[];var o=i.length;return o>1&&r(u,i[0],i[1])?i=[]:o>2&&r(i[0],i[1],i[2])&&(i=[i[0]]),a(u,e(i,1),[])});b.exports=s},2407:(b,E,t)=>{"use strict";t.d(E,{$:()=>g,O:()=>P});var e=t(85893),a=t(16405),n=t(88972),r=t(41580),s=t(11047),u=t(75515),i=t(63237);const o=(0,n.ZP)(s.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:m})=>m.colors.neutral500};
    }
  }
  :last-of-type ${r.x} {
    display: none;
  }
  :last-of-type ${u.Z} {
    color: ${({theme:m})=>m.colors.neutral800};
    font-weight: ${({theme:m})=>m.fontWeights.bold};
  }
`,g=({children:m})=>(0,e.jsxs)(o,{inline:!0,as:"li",children:[(0,e.jsx)(u.Z,{variant:"pi",textColor:"neutral600",children:m}),(0,e.jsx)(r.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,e.jsx)(a.Z,{})})]});g.displayName="Crumb";const P=({children:m,label:f,...O})=>(0,e.jsxs)(s.k,{...O,children:[(0,e.jsx)(i.T,{children:f}),(0,e.jsx)("ol",{"aria-hidden":!0,children:m})]});P.displayName="Breadcrumbs"},49066:(b,E,t)=>{"use strict";t.d(E,{D:()=>r});var e=t(67294),a=t(45697),n=t(41580);const r=({children:s})=>e.createElement(n.x,{paddingLeft:10,paddingRight:10},s);r.propTypes={children:a.node.isRequired}},53979:(b,E,t)=>{"use strict";t.d(E,{A:()=>O,T:()=>m});var e=t(67294),a=t(45697),n=t(88972),r=t(41580),s=t(11047);const u=c=>{const y=(0,e.useRef)(null),[l,v]=(0,e.useState)(!0),B=([U])=>{v(U.isIntersecting)};return(0,e.useEffect)(()=>{const U=y.current,I=new IntersectionObserver(B,c);return U&&I.observe(y.current),()=>{U&&I.disconnect()}},[y,c]),[y,l]};var i=t(95355);const o=(c,y)=>{const l=(0,i.W)(y);(0,e.useLayoutEffect)(()=>{const v=new ResizeObserver(l);return Array.isArray(c)?c.forEach(B=>{B.current&&v.observe(B.current)}):c.current&&v.observe(c.current),()=>{v.disconnect()}},[c,l])};var g=t(75515);const P=()=>{const c=(0,e.useRef)(null),[y,l]=(0,e.useState)(null),[v,B]=u({root:null,rootMargin:"0px",threshold:0});return o(v,()=>{v.current&&l(v.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{c.current&&l(c.current.getBoundingClientRect())},[c]),{containerRef:v,isVisible:B,baseHeaderLayoutRef:c,headerSize:y}},m=c=>{const{containerRef:y,isVisible:l,baseHeaderLayoutRef:v,headerSize:B}=P();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:B?.height},ref:y},l&&e.createElement(O,{ref:v,...c})),!l&&e.createElement(O,{...c,sticky:!0,width:B?.width}))};m.displayName="HeaderLayout";const f=(0,n.ZP)(r.x)`
  width: ${c=>c.width}px;
`,O=e.forwardRef(({navigationAction:c,primaryAction:y,secondaryAction:l,subtitle:v,title:B,sticky:U,width:I,...G},N)=>{const p=typeof v=="string";return U?e.createElement(f,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:I,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(s.k,{justifyContent:"space-between"},e.createElement(s.k,null,c&&e.createElement(r.x,{paddingRight:3},c),e.createElement(r.x,null,e.createElement(g.Z,{variant:"beta",as:"h1",...G},B),p?e.createElement(g.Z,{variant:"pi",textColor:"neutral600"},v):v),l?e.createElement(r.x,{paddingLeft:4},l):null),e.createElement(s.k,null,y?e.createElement(r.x,{paddingLeft:2},y):void 0))):e.createElement(r.x,{ref:N,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:c?6:8,background:"neutral100","data-strapi-header":!0},c?e.createElement(r.x,{paddingBottom:2},c):null,e.createElement(s.k,{justifyContent:"space-between"},e.createElement(s.k,{minWidth:0},e.createElement(g.Z,{as:"h1",variant:"alpha",...G},B),l?e.createElement(r.x,{paddingLeft:4},l):null),y),p?e.createElement(g.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},v):v)});O.displayName="BaseHeaderLayout",O.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},O.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,sticky:a.bool,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired,width:a.number},m.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},m.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired}},17034:(b,E,t)=>{"use strict";t.d(E,{A:()=>i});var e=t(67294),a=t(45697),n=t(88972),r=t(41580);const s=(0,n.ZP)(r.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:o})=>o?"auto 1fr":"1fr"};
`,u=(0,n.ZP)(r.x)`
  overflow-x: hidden;
`,i=({sideNav:o,children:g})=>e.createElement(s,{hasSideNav:Boolean(o)},o,e.createElement(u,{paddingBottom:10},g));i.defaultProps={sideNav:void 0},i.propTypes={children:a.node.isRequired,sideNav:a.node}},185:(b,E,t)=>{"use strict";t.d(E,{o:()=>s});var e=t(67294),a=t(45697),n=t(88972);const r=n.ZP.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,s=({labelledBy:u,...i})=>{const o=u||"main-content-title";return e.createElement(r,{"aria-labelledby":o,id:"main-content",tabIndex:-1,...i})};s.defaultProps={labelledBy:void 0},s.propTypes={labelledBy:a.string}}}]);
