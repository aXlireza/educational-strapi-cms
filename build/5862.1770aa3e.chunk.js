"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[5862],{27887:(W,T,n)=>{n.d(T,{r:()=>L});var d=n(67294),m=n(41580),O=n(45697),M=n.n(O),R=n(99168);function I(D,A,g){if(!D||!A)return{display:"none"};const{x:k,y:S}=g;return{transform:`translate(${k}px, ${S}px)`}}function L({renderItem:D}){const{itemType:A,isDragging:g,item:k,initialOffset:S,currentOffset:x,mouseOffset:w}=(0,R.useDragLayer)(C=>({item:C.getItem(),itemType:C.getItemType(),initialOffset:C.getInitialSourceClientOffset(),currentOffset:C.getSourceClientOffset(),isDragging:C.isDragging(),mouseOffset:C.getClientOffset()}));return g?d.createElement(m.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%"},d.createElement(m.x,{style:I(S,x,w)},D({type:A,item:k}))):null}L.propTypes={renderItem:M().func.isRequired}},99781:(W,T,n)=>{var d=n(67294);const m=(0,d.createContext)();var O=null},75642:(W,T,n)=>{n.d(T,{PL:()=>R,Y9:()=>I.Y,zE:()=>oe,Ky:()=>le,fi:()=>_,zH:()=>h,r5:()=>c});var d=n(67294),m=n(86706),O=n(21323);const R=()=>{const s=(0,m.v9)(O.Z),e=(0,d.useCallback)(t=>s?.components?.[t]??{},[s]);return{...s,getComponentLayout:e}};var I=n(15699),L=n(79107),D=n(52861),A=n(84668),g=n(18172);const k={error:null,isLoading:!0,layout:{},layouts:{}},x=(s,e)=>(0,g.ZP)(s,t=>{switch(e.type){case"GET_DATA":{t.isLoading=!0,t.error=null,t.layout={};break}case"GET_DATA_SUCCEEDED":{const a=e.data.contentType.uid;t.layout=e.data,t.layouts[a]=e.data,t.isLoading=!1;break}case"GET_DATA_ERROR":{t.isLoading=!1,t.error=e.error;break}case"SET_LAYOUT_FROM_STATE":{t.error=null,t.layout=s.layouts[e.uid];break}case"UPDATE_LAYOUT":{const a=s.layout;t.layout={...a,contentType:{uid:a.contentType.uid,...e.newLayout.contentType}},t.layouts[a.contentType.uid]={...a,contentType:{uid:a.contentType.uid,...e.newLayout.contentType}};break}default:return t}});var w=n(50361),C=n.n(w),j=n(27361),b=n.n(j),H=n(36968),U=n.n(H),re=n(13920);const V=(s,e)=>e.find(t=>t.uid===s),J=(s,e)=>{const t=z(s,e),a=F(t.contentType,e),l=q(t.contentType,t.components);return U()(t,["contentType","layouts","edit"],a),U()(t,["contentType","layouts","list"],l),Object.keys(t.components).forEach(i=>{const y=F(t.components[i],e);U()(t,["components",i,"layouts","edit"],y)}),t},z=(s,e)=>{const t=(0,re.w8)(C()(s),e,"contentType"),{components:a,contentType:l}=t,i=y=>Object.keys(y.metadatas).reduce((E,v)=>{const P=b()(y,["attributes",v],{});let N=y.metadatas[v];if(P.type==="relation"){const fe=V(P.targetModel,e),K=N.edit.mainField,Q={name:K,schema:b()(fe,["attributes",K])};N={list:{...N.list,mainField:Q},edit:{...N.edit,mainField:Q}}}return E[v]=N,E},{});return U()(t,["contentType","metadatas"],i(l)),Object.keys(a).forEach(y=>{const E=a[y],v=i(E);U()(t,["components",y,"metadatas"],v)}),t},F=(s,e)=>s.layouts.edit.reduce((t,a)=>{const l=a.map(i=>{const y=b()(s,["attributes",i.name],{}),E={...i,fieldSchema:y,metadatas:b()(s,["metadatas",i.name,"edit"],{})};if(y.type==="relation"){const P=V(y.targetModel,e).pluginOptions||{};U()(E,"targetModelPluginOptions",P),U()(E,"queryInfos",{shouldDisplayRelationLink:G(s,i.name,e)})}return E});return t.push(l),t},[]),q=(s,e)=>s.layouts.list.reduce((a,l)=>{const i=b()(s,["attributes",l],{}),y=b()(s,["metadatas",l,"list"],{}),E=i.type;if(E==="relation")return a.push({key:`__${l}_key__`,name:l,fieldSchema:i,metadatas:y}),a;if(E==="component"){const v=e[i.component],P=v.settings.mainField,N=v.attributes[P];return a.push({key:`__${l}_key__`,name:l,fieldSchema:i,metadatas:{...y,mainField:{...N,name:P}}}),a}return a.push({key:`__${l}_key__`,name:l,fieldSchema:i,metadatas:y}),a},[]),G=(s,e,t)=>{const a=b()(s,["attributes",e,"targetModel"],"");return B(t).includes(a)},B=s=>s.filter(e=>e.isDisplayed).map(({uid:e})=>e),Z=J,oe=s=>{const[{error:e,isLoading:t,layout:a,layouts:l},i]=(0,d.useReducer)(x,k),y=(0,d.useMemo)(A.Vo,[]),{schemas:E}=(0,m.v9)(K=>y(K),m.wU),v=(0,d.useRef)(!0),{get:P}=(0,L.kY)(),N=(0,d.useCallback)(async(K,Q)=>{if(l[K]){i({type:"SET_LAYOUT_FROM_STATE",uid:K});return}i({type:"GET_DATA"});try{const{data:{data:se}}=await P(`/content-manager/content-types/${K}/configuration`,{cancelToken:Q.token});i({type:"GET_DATA_SUCCEEDED",data:Z(se,E)})}catch(se){if(D.default.isCancel(se))return;v.current&&console.error(se),v.current&&i({type:"GET_DATA_ERROR",error:se})}},[l,E,P]);(0,d.useEffect)(()=>()=>{v.current=!1},[]),(0,d.useEffect)(()=>{const Q=D.default.CancelToken.source();return N(s,Q),()=>{Q.cancel("Operation canceled by the user.")}},[s,N]);const fe=(0,d.useCallback)(K=>{i({type:"UPDATE_LAYOUT",newLayout:Z(K,E)})},[E]);return{error:e,isLoading:t,layout:a,updateLayout:fe}},ie=s=>s["content-manager_app"].collectionTypeLinks;var ae=n(13218),ye=n.n(ae),Y=n(80129);const p=(s,e)=>Object.keys(s).reduce((t,a)=>{const l=s[a],i=b()(e,[a],l);return ye()(l)?{...t,[a]:p(l,i)}:(t[a]=i,t)},{}),ue=(s,e,t)=>{const a=s.find(({to:N})=>N.includes(e));if(!a)return"/";const{to:l,search:i}=a,y=(0,Y.parse)(i),E=(0,Y.parse)(t.substring(1)),v=p(y,E);return`${l}?${(0,Y.stringify)(v,{encode:!1})}`},le=s=>{const[{rawQuery:e}]=(0,L.Kx)(),t=(0,m.v9)(ie);return ue(t,s,e)};var pe=n(40703),$=n(16550);const _=()=>{const{search:s}=(0,$.TH)(),e=s?(0,Y.parse)(s.substring(1)):{};return e.plugins?(0,Y.stringify)({plugins:e.plugins},{encode:!1}):""},h=s=>{const e=(0,d.useRef)();return(0,d.useEffect)(()=>{e.current=s},[s]),e.current};var X=n(80015);const ce=(s,e,t)=>({type:X.m,permissions:s,__meta__:{plugins:e,containerName:t}}),ne=()=>({type:X.Q}),de=s=>s["content-manager_rbacManager"].permissions,me=s=>s.rbacProvider.collectionTypesRelatedPermissions,c=(s,e,t="listView")=>{const a=(0,m.v9)(me),l=(0,m.v9)(de),i=(0,m.I0)(),y=a[e];return(0,d.useEffect)(()=>y?(i(ce(y,s?s.plugins:null,t)),()=>{i(ne())}):()=>{},[y,i,s,t]),l};var u=n(99781);const o=()=>useContext(WysiwygContext),f=null},15699:(W,T,n)=>{n.d(T,{Y:()=>R});var d=n(67294),m=n(99168),O=n.n(m),M=n(40703);const R=(I,{type:L="STRAPI_DND",index:D,item:A={},onStart:g,onEnd:k,onGrabItem:S,onDropItem:x,onCancel:w,onMoveItem:C,dropSensitivity:j="regular"})=>{const b=(0,d.useRef)(null),[{handlerId:H},U]=(0,m.useDrop)({accept:L,collect(F){return{handlerId:F.getHandlerId()}},hover(F,q){if(!b.current)return;const G=F.index,B=D;if(G!==B){if(j==="regular"){const Z=b.current.getBoundingClientRect(),ee=(Z.bottom-Z.top)/2,te=q.getClientOffset().y-Z.top;if(G<B&&te<ee||G>B&&te>ee)return}C(B,G),F.index=B}}}),[{isDragging:re},V,J]=(0,m.useDrag)({type:L,item(){g&&g();const{width:F}=b.current?.getBoundingClientRect()??{};return{index:D,width:F,...A}},end(){k&&k()},canDrag:I,isDragging:A.id?F=>A.id===F.getItem().id:void 0,collect:F=>({isDragging:F.isDragging()})}),z=(0,M.A)(I,D,{onGrabItem:S,onDropItem:x,onCancel:w,onMoveItem:C});return[{handlerId:H,isDragging:re,handleKeyDown:z},b,U,V,J]}},40703:(W,T,n)=>{n.d(T,{A:()=>m});var d=n(67294);const m=(O,M,{onCancel:R,onDropItem:I,onGrabItem:L,onMoveItem:D})=>{const[A,g]=(0,d.useState)(!1),k=C=>{A&&(C==="UP"?D(M-1,M):C==="DOWN"&&D(M+1,M))},S=()=>{A?(I&&I(M),g(!1)):(L&&L(M),g(!0))},x=()=>{A&&(g(!1),R&&R(M))};return C=>{if(O&&!(C.key==="Tab"&&!A))switch(C.preventDefault(),C.key){case" ":case"Enter":S();break;case"Escape":x();break;case"ArrowDown":case"ArrowRight":k("DOWN");break;case"ArrowUp":case"ArrowLeft":k("UP");break;default:}}}},84668:(W,T,n)=>{n.d(T,{Jg:()=>D,KQ:()=>I,Vo:()=>L,Yg:()=>O});var d=n(20573),m=n(14506);const O=()=>g=>g["content-manager_app"]||m.E,M=()=>createSelector(O(),g=>g),R=()=>createSelector(O(),g=>g.models),I=()=>(0,d.P1)(O(),g=>({collectionTypeLinks:g.collectionTypeLinks,singleTypeLinks:g.singleTypeLinks})),L=()=>(0,d.P1)(O(),({components:g,models:k})=>({schemas:[...g,...k]})),D=(0,d.P1)(O(),g=>g.fieldSizes);var A=null},21323:(W,T,n)=>{n.d(T,{Z:()=>m});const m=O=>O["content-manager_editViewLayoutManager"].currentLayout},56723:(W,T,n)=>{n.d(T,{Z:()=>d});const d={COMPONENT:"component",EDIT_FIELD:"editField",FIELD:"field",DYNAMIC_ZONE:"dynamicZone",RELATION:"relation"}},69881:(W,T,n)=>{n.d(T,{Z:()=>m});const m=O=>`content-manager.${O}`},13920:(W,T,n)=>{n.d(T,{_Q:()=>te.Z,W3:()=>M,ko:()=>D,FE:()=>g,Di:()=>w,Ex:()=>me,du:()=>H,TA:()=>V,Ts:()=>q,Uo:()=>B,IF:()=>ee,OB:()=>oe.Z,w8:()=>Y,kc:()=>ue});var d=n(50361),m=n.n(d);const M=(r,c,u)=>{if(Array.isArray(r)&&c>=0&&u>=0&&c<=r.length-1&&u<=r.length-1){const o=m()(r),f=o.splice(c,1);return o.splice(u,0,f[0]),o}return r};var R=n(7334),I=n.n(R);const D=r=>{const c=r.type;return c==="relation"?!I()(r.relationType).includes("morph"):!["json","dynamiczone","richtext","password"].includes(c)&&!!c},A=(r,c)=>{typeof r=="function"?r(c):r!=null&&(r.current=c)},g=(...r)=>c=>r.forEach(u=>A(u,c));var k=n(27361),S=n.n(k);const x=(r,c)=>Object.keys(r).reduce((u,o)=>{const f=S()(r,[o],{}),{default:s,component:e,type:t,required:a,min:l,repeatable:i}=f;if(s!==void 0&&(u[o]=s),t==="component"){const y=c?.[e]?.attributes??{},E=x(y,c);if(a===!0&&(u[o]=i===!0?[]:E),l&&i===!0&&a){u[o]=[];for(let v=0;v<l;v+=1)u[o].push(E)}}return t==="dynamiczone"&&a===!0&&(u[o]=[]),u},{}),w=x;var C=n(57557),j=n.n(C);const H=({layouts:r,metadatas:c,...u})=>{const o=r.list.map(e=>e.name?e.name:e),f=Object.keys(c).reduce((e,t)=>{const a=S()(c,[t],{});let l=a.edit;return l.mainField&&(l={...l,mainField:a.edit.mainField.name}),{...e,[t]:{edit:l,list:j()(a.list,["mainField"])}}},{}),s=r.edit.map(e=>e.map(({name:t,size:a})=>({name:t,size:a})));return{...u,layouts:{edit:s,list:o},metadatas:f}},U=(r,c)=>r.map(u=>({...u,subject:c})),V=r=>{const c={create:[{action:"plugin::content-manager.explorer.create",subject:null}],delete:[{action:"plugin::content-manager.explorer.delete",subject:null}],publish:[{action:"plugin::content-manager.explorer.publish",subject:null}],read:[{action:"plugin::content-manager.explorer.read",subject:null}],update:[{action:"plugin::content-manager.explorer.update",subject:null}]};return Object.keys(c).reduce((u,o)=>(u[o]=U(c[o],r),u),{})};var J=n(7654),z=n.n(J);const q=r=>r.split(".").filter(c=>z()(parseInt(c,10))),B=r=>{if(r.length===0)return-1;const c=Math.max.apply(Math,r.map(u=>u.__temp_key__??0));return Number.isNaN(c)?-1:c},ee=r=>`/content-manager/${r}`;var oe=n(69881),te=n(56723),ie=n(36968),ae=n.n(ie);const Y=(r,c,u)=>{const o=t=>c.find(a=>a.uid===t),f=Object.assign({},r),s=r[u].uid,e=o(s);return ae()(f,[u],{...r[u],...e}),Object.keys(r.components).forEach(t=>{const a=o(t);ae()(f,["components",t],{...r.components[t],...a})}),f};var p=n(79107);const ue=(r,c,u)=>{const o=(f,s)=>Object.keys(f).reduce((e,t)=>{const a=(0,p.UN)(s,t),l=S()(f,t),i=(0,p.k2)(s,[t,"component"]),y=(0,p.k2)(s,[t,"repeatable"]);return a==="dynamiczone"?(e[t]=l.map(E=>o(E,u[E.__component])),e):a==="component"?(y?e[t]=l&&l.map(E=>o(E,u[i])):e[t]=l&&o(l,u[i]),e):(a!=="password"&&(e[t]=l),e)},{});return o(r,c)};var ge=n(51584),le=n.n(ge),pe=n(41609),$=n.n(pe),Ee=n(14841),_=n.n(Ee),h=n(87561),X=n(24056);h.kM(h.nK,"defined",function(){return this.test("defined",p.I0.required,r=>r!==void 0)}),h.kM(h.IX,"notEmptyMin",function(r){return this.test("notEmptyMin",p.I0.min,c=>$()(c)?!0:c.length>=r)}),h.kM(h.Z_,"isInferior",function(r,c){return this.test("isInferior",r,function(u){return!u||Number.isNaN(_()(u))?!0:_()(c)>=_()(u)})}),h.kM(h.Z_,"isSuperior",function(r,c){return this.test("isSuperior",r,function(u){return!u||Number.isNaN(_()(u))?!0:_()(u)>=_()(c)})});const ce=r=>S()(r,["attributes"],{}),ne=(r,{components:c},u={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1})=>{const o=ce(r);return h.Ry().shape(Object.keys(o).reduce((f,s)=>{const e=o[s];if(e.type!=="relation"&&e.type!=="component"&&e.type!=="dynamiczone"){const t=de(e.type,e,u);f[s]=t}if(e.type==="relation"&&(f[s]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(e.relationType)?h.Ry().nullable():h.IX().nullable()),e.type==="component"){const t=ne(c[e.component],{components:c},{...u,isFromComponent:!0});if(e.repeatable===!0){const{min:l,max:i,required:y}=e;let E=h.Vo(v=>{let P=h.IX().of(t);return l?y?P=P.min(l,p.I0.min):y!==!0&&$()(v)?P=P.nullable():P=P.min(l,p.I0.min):y&&!u.isDraft&&(P=P.min(1,p.I0.required)),i&&(P=P.max(i,p.I0.max)),P});return f[s]=E,f}const a=h.Vo(l=>l!==void 0?e.required===!0&&!u.isDraft?t.defined():t.nullable():e.required===!0?h.Ry().defined():h.Ry().nullable());return f[s]=a,f}if(e.type==="dynamiczone"){let t=h.IX().of(h.Vo(({__component:i})=>ne(c[i],{components:c},{...u,isFromComponent:!0})));const{max:a,min:l}=e;l?e.required?t=t.test("min",p.I0.min,i=>u.isCreatingEntry?i&&i.length>=l:i===void 0?!0:i!==null&&i.length>=l).test("required",p.I0.required,i=>u.isCreatingEntry?i!==null||i!==void 0:i===void 0?!0:i!==null):t=t.notEmptyMin(l):e.required&&!u.isDraft&&(t=t.test("required",p.I0.required,i=>u.isCreatingEntry?i!==null||i!==void 0:i===void 0?!0:i!==null)),a&&(t=t.max(a,p.I0.max)),f[s]=t}return f},{}))},de=(r,c,u)=>{let o=h.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(r)&&(o=h.Z_()),r==="json"&&(o=h.nK(p.I0.json).test("isJSON",p.I0.json,f=>{if(!f||!f.length)return!0;try{return JSON.parse(f),!0}catch{return!1}}).nullable().test("required",p.I0.required,f=>!(c.required&&(!f||!f.length)))),r==="email"&&(o=o.email(p.I0.email)),["number","integer","float","decimal"].includes(r)&&(o=h.Rx().transform(f=>z()(f)?void 0:f).typeError()),r==="biginteger"&&(o=h.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(r)&&(o=h.hT()),Object.keys(c).forEach(f=>{const s=c[f];if(s||!le()(s)&&Number.isInteger(Math.floor(s))||s===0)switch(f){case"required":{u.isDraft||(r==="password"&&u.isCreatingEntry&&(o=o.required(p.I0.required)),r!=="password"&&(u.isCreatingEntry?o=o.required(p.I0.required):o=o.test("required",p.I0.required,e=>e===void 0&&!u.isFromComponent?!0:(0,X.Z)(r)?e===0?!0:!!e:r==="boolean"?e!=null:r==="date"||r==="datetime"?typeof e=="string"?!$()(e):!$()(e?.toString()):!$()(e))));break}case"max":{r==="biginteger"?o=o.isInferior(p.I0.max,s):o=o.max(s,p.I0.max);break}case"maxLength":o=o.max(s,p.I0.maxLength);break;case"min":{r==="biginteger"?o=o.isSuperior(p.I0.min,s):o=o.min(s,p.I0.min);break}case"minLength":{u.isDraft||(o=o.min(s,p.I0.minLength));break}case"regex":o=o.matches(new RegExp(s),{message:p.I0.regex,excludeEmptyString:!c.required});break;case"lowercase":["text","textarea","email","string"].includes(r)&&(o=o.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(r)&&(o=o.strict().uppercase());break;case"positive":(0,X.Z)(r)&&(o=o.positive());break;case"negative":(0,X.Z)(r)&&(o=o.negative());break;default:o=o.nullable()}}),o},me=ne},24056:(W,T,n)=>{n.d(T,{Z:()=>d});function d(m){return["integer","biginteger","decimal","float","number"].includes(m)}},53616:(W,T,n)=>{n.d(T,{$k:()=>L,FT:()=>A,Nj:()=>I,Ot:()=>R,QM:()=>O,lv:()=>D,sN:()=>m,uL:()=>g,x4:()=>M});var d=n(42675);const m="settings_review-workflows",O="Settings/Review_Workflows/SET_WORKFLOWS",M="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",R="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",I="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",L="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",D={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},A=d.W.colors.primary600,g={STAGE:"stage"}},53752:(W,T,n)=>{n.d(T,{n:()=>R});var d=n(79107),m=n(80129),O=n.n(m),M=n(88767);function R(I={}){const{id:L="",...D}=I,A={populate:"stages"},{get:g}=(0,d.kY)(),k=(0,m.stringify)({...A,...D},{encode:!1}),{data:S,isLoading:x,status:w,refetch:C}=(0,M.useQuery)(["review-workflows","workflows",L],async()=>{try{const{data:{data:b}}=await g(`/admin/review-workflows/workflows/${L}${k?`?${k}`:""}`);return b}catch{return null}});let j=[];return L&&S?j=[S]:Array.isArray(S)&&(j=S),{workflows:j,isLoading:x,status:w,refetch:C}}},13037:(W,T,n)=>{n.d(T,{k:()=>O,s:()=>M});var d=n(42675),m=n(53616);function O(R){if(!R)return null;const L=Object.entries(d.W.colors).filter(([,D])=>D.toUpperCase()===R.toUpperCase()).reduce((D,[A])=>(m.lv?.[A]&&(D=A),D),null);return L?{themeColorName:L,name:m.lv[L]}:null}function M(){return Object.entries(m.lv).map(([R,I])=>({hex:d.W.colors[R].toUpperCase(),name:I}))}}}]);