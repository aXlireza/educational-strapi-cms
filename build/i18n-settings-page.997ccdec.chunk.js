"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[3552],{72751:(se,x,t)=>{t.r(x),t.d(x,{default:()=>qe});var e=t(67294),r=t(86597),P=t(45697),a=t.n(P),c=t(86896),S=t(185),W=t(53979),f=t(29728),m=t(49066),v=t(89722),T=t(96315),me=t(86031),N=t(8181),n=t(57813),E=t(41054),C=t(85018),h=t(42866),M=t(24969),O=t(75515),U=t(59946),_=t(82777),ee=t(11047),K=t(60633),ge=t(70004),pe=t(41580),w=t(42761),X=t(36856),te=t(87561);const R=(0,te.Ry)().shape({code:(0,te.Z_)().required(),displayName:(0,te.Z_)().max(50,"Settings.locales.modal.locales.displayName.error").required(r.I0.required)});var D=t(86706),V=t(7982);const A=async(l,s,i)=>{try{const o=await(0,r.WY)(`/i18n/locales/${l}`,{method:"PUT",body:s});return i({type:"success",message:{id:(0,n.O)("Settings.locales.modal.edit.success")}}),o}catch{return i({type:"warning",message:{id:"notification.error"}}),null}},Ze=()=>{const[l,s]=(0,e.useState)(!1),i=(0,D.I0)(),o=(0,r.lm)();return{isEditing:l,editLocale:async(u,y)=>{s(!0);const b=await A(u,y,o);i({type:V.OT,editedLocale:b}),s(!1)}}};var re=t(11276),ie=t(74571),ae=t(48302),Ie=t(82562),de=t(16364),Ne=t(88767),Fe=t(14087);const Te=async l=>{try{return await(0,r.WY)("/i18n/iso-locales",{method:"GET"})}catch{return l({type:"warning",message:{id:"notification.error"}}),[]}},De=()=>{const{formatMessage:l}=(0,c.Z)(),{notifyStatus:s}=(0,Fe.G)(),i=(0,r.lm)(),{isLoading:o,data:d}=(0,Ne.useQuery)("default-locales",()=>Te(i).then(u=>(s(l({id:(0,n.O)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."})),u)));return{defaultLocales:d,isLoading:o}},ve=({locale:l})=>{const{formatMessage:s}=(0,c.Z)(),{values:i,handleChange:o,errors:d}=(0,E.u6)(),{defaultLocales:u,isLoading:y}=De(),b=!y&&u.find(k=>k.code===l.code);return e.createElement(re.r,{gap:4},e.createElement(ie.P,{col:6},e.createElement(ae.P,{label:s({id:(0,n.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:b?.code||l.code,disabled:!0},e.createElement(Ie.W,{value:b?.code||l.code},b?.name||l.code))),e.createElement(ie.P,{col:6},e.createElement(de.o,{name:"displayName",label:s({id:(0,n.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:s({id:(0,n.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:d.displayName?s({id:(0,n.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:i.displayName,onChange:o})))},We=ve;ve.propTypes={locale:a().shape({id:a().number.isRequired,name:a().string.isRequired,code:a().string.isRequired,isDefault:a().bool.isRequired}).isRequired};var xe=t(36213);const Ee=({isDefaultLocale:l})=>{const{values:s,setFieldValue:i}=(0,E.u6)(),{formatMessage:o}=(0,c.Z)();return e.createElement(xe.X,{name:"isDefault",hint:o({id:(0,n.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>i("isDefault",!s.isDefault),value:s.isDefault,disabled:l},o({id:(0,n.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};Ee.propTypes={isDefaultLocale:a().bool.isRequired};const j=Ee,he=({locale:l,onClose:s})=>{const{refetchPermissions:i}=(0,r.vn)(),{isEditing:o,editLocale:d}=Ze(),{formatMessage:u}=(0,c.Z)(),y=async({displayName:b,isDefault:k})=>{await d(l.id,{name:b,isDefault:k}),await i()};return e.createElement(h.P,{onClose:s,labelledBy:"edit-locale-title"},e.createElement(E.J9,{initialValues:{code:l?.code,displayName:l?.name||"",isDefault:Boolean(l?.isDefault)},onSubmit:y,validationSchema:R},e.createElement(r.l0,null,e.createElement(M.x,null,e.createElement(O.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title"},u({id:(0,n.O)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"}))),e.createElement(U.f,null,e.createElement(_.v,{label:u({id:(0,n.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(ee.k,{justifyContent:"space-between"},e.createElement(O.Z,{as:"h2"},u({id:(0,n.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(K.m,null,e.createElement(K.O,null,u({id:(0,n.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(K.O,null,u({id:(0,n.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(ge.i,null),e.createElement(pe.x,{paddingTop:7,paddingBottom:7},e.createElement(w.n,null,e.createElement(w.x,null,e.createElement(We,{locale:l})),e.createElement(w.x,null,e.createElement(j,{isDefaultLocale:Boolean(l&&l.isDefault)})))))),e.createElement(X.m,{startActions:e.createElement(f.z,{variant:"tertiary",onClick:s},u({id:"app.components.Button.cancel"})),endActions:e.createElement(f.z,{type:"submit",startIcon:e.createElement(C.Z,null),disabled:o},u({id:"global.save"}))}))))};he.defaultProps={locale:void 0},he.propTypes={locale:a().shape({id:a().number.isRequired,name:a().string.isRequired,code:a().string.isRequired,isDefault:a().bool.isRequired}),onClose:a().func.isRequired};const Ue=he,B=async(l,s)=>{try{const i=await(0,r.WY)(`/i18n/locales/${l}`,{method:"DELETE"});return s({type:"success",message:{id:(0,n.O)("Settings.locales.modal.delete.success")}}),i}catch(i){return s({type:"warning",message:{id:"notification.error"}}),i}},ze=()=>{const[l,s]=(0,e.useState)(!1),i=(0,D.I0)(),o=(0,r.lm)();return{isDeleting:l,deleteLocale:async u=>{s(!0),await B(u,o),i({type:V.HC,id:u}),s(!1)}}},ye=({localeToDelete:l,onClose:s})=>{const{isDeleting:i,deleteLocale:o}=ze(),d=Boolean(l),u=()=>o(l.id).then(s);return e.createElement(r.QH,{isConfirmButtonLoading:i,onConfirm:u,onToggleDialog:s,isOpen:d})};ye.defaultProps={localeToDelete:void 0},ye.propTypes={localeToDelete:a().shape({id:a().number.isRequired}),onClose:a().func.isRequired};const F=ye;var Pe=t(27361),Y=t.n(Pe);const He=async({code:l,name:s,isDefault:i},o)=>{const d=await(0,r.WY)("/i18n/locales",{method:"POST",body:{name:s,code:l,isDefault:i}});return o({type:"success",message:{id:(0,n.O)("Settings.locales.modal.create.success")}}),d},ce=()=>{const[l,s]=(0,e.useState)(!1),i=(0,D.I0)(),o=(0,r.lm)();return{isAdding:l,addLocale:async u=>{s(!0);try{const y=await He(u,o);i({type:V.xz,newLocale:y})}catch(y){const b=Y()(y,"response.payload.message",null);throw b&&b.includes("already exists")?o({type:"warning",message:{id:(0,n.O)("Settings.locales.modal.create.alreadyExist")}}):o({type:"warning",message:{id:"notification.error"}}),y}finally{s(!1)}}}};var ne=t(38855),ue=t(90608);const Q=e.memo(({value:l,onClear:s,onLocaleChange:i,error:o})=>{const{formatMessage:d}=(0,c.Z)(),{defaultLocales:u,isLoading:y}=De(),{locales:b}=(0,N.Z)(),k=(u||[]).map($=>({label:$.name,value:$.code})).filter(({value:$})=>{const q=b.find(({code:Se})=>Se===$);return!q||q.code===l}),oe=l||"";return e.createElement(ne.h,{"aria-busy":y,error:o,label:d({id:(0,n.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:oe,onClear:l?s:void 0,onChange:$=>{const q=k.find(Se=>Se.value===$);q&&i({code:q.value,displayName:q.label})},placeholder:d({id:"components.placeholder.select",defaultMessage:"Select"})},k.map($=>e.createElement(ue.O,{value:$.value,key:$.value},$.label)))});Q.defaultProps={error:void 0,value:void 0,onClear(){},onLocaleChange:()=>{}},Q.propTypes={error:a().string,onClear:a().func,onLocaleChange:a().func,value:a().string};const Re=Q,Ae=()=>{const{formatMessage:l}=(0,c.Z)(),{values:s,handleChange:i,setFieldValue:o,errors:d}=(0,E.u6)(),u=(0,e.useCallback)(b=>{o("displayName",b.displayName),o("code",b.code)},[o]),y=(0,e.useCallback)(()=>{o("displayName",""),o("code","")},[o]);return e.createElement(re.r,{gap:4},e.createElement(ie.P,{col:6},e.createElement(Re,{error:d.code,value:s.code,onLocaleChange:u,onClear:y})),e.createElement(ie.P,{col:6},e.createElement(de.o,{name:"displayName",label:l({id:(0,n.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:l({id:(0,n.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:d.displayName?l({id:(0,n.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:s.displayName,onChange:i})))},Ve=()=>{const{values:l,setFieldValue:s}=(0,E.u6)(),{formatMessage:i}=(0,c.Z)();return e.createElement(xe.X,{hint:i({id:(0,n.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>s("isDefault",!l.isDefault),value:l.isDefault},i({id:(0,n.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))},je={code:"",displayName:"",isDefault:!1},Le=({onClose:l})=>{const{isAdding:s,addLocale:i}=ce(),{formatMessage:o}=(0,c.Z)(),{refetchPermissions:d}=(0,r.vn)(),u=async y=>{await i({code:y.code,name:y.displayName,isDefault:y.isDefault}),await d()};return e.createElement(h.P,{onClose:l,labelledBy:"add-locale-title"},e.createElement(E.J9,{initialValues:je,onSubmit:u,validationSchema:R,validateOnChange:!1},e.createElement(r.l0,null,e.createElement(M.x,null,e.createElement(O.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title"},o({id:(0,n.O)("Settings.list.actions.add"),defaultMessage:"Add new locale"}))),e.createElement(U.f,null,e.createElement(_.v,{label:o({id:(0,n.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(ee.k,{justifyContent:"space-between"},e.createElement(O.Z,{as:"h2",variant:"beta"},o({id:(0,n.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(K.m,null,e.createElement(K.O,null,o({id:(0,n.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(K.O,null,o({id:(0,n.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(ge.i,null),e.createElement(pe.x,{paddingTop:7,paddingBottom:7},e.createElement(w.n,null,e.createElement(w.x,null,e.createElement(Ae,null)),e.createElement(w.x,null,e.createElement(Ve,null)))))),e.createElement(X.m,{startActions:e.createElement(f.z,{variant:"tertiary",onClick:l},o({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(f.z,{type:"submit",startIcon:e.createElement(C.Z,null),disabled:s},o({id:"global.save",defaultMessage:"Save"}))}))))};Le.propTypes={onClose:a().func.isRequired};const Ge=Le;var Je=t(38939),Xe=t(8060),G=t(79031),J=t(37909),Be=t(63237),Ce=t(15234),z=t(12028),Ye=t(4585),Qe=t(20022);const be=({locales:l,onDeleteLocale:s,onEditLocale:i})=>{const{formatMessage:o}=(0,c.Z)();return e.createElement(Je.i,{colCount:4,rowCount:l.length+1},e.createElement(Xe.h,null,e.createElement(G.Tr,null,e.createElement(J.Th,null,e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},o({id:(0,n.O)("Settings.locales.row.id")}))),e.createElement(J.Th,null,e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},o({id:(0,n.O)("Settings.locales.row.displayName")}))),e.createElement(J.Th,null,e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},o({id:(0,n.O)("Settings.locales.row.default-locale")}))),e.createElement(J.Th,null,e.createElement(Be.T,null,"Actions")))),e.createElement(Ce.p,null,l.map(d=>e.createElement(G.Tr,{key:d.id,...(0,r.X7)({fn:()=>i(d),condition:i})},e.createElement(J.Td,null,e.createElement(O.Z,{textColor:"neutral800"},d.id)),e.createElement(J.Td,null,e.createElement(O.Z,{textColor:"neutral800"},d.name)),e.createElement(J.Td,null,e.createElement(O.Z,{textColor:"neutral800"},d.isDefault?o({id:(0,n.O)("Settings.locales.default")}):null)),e.createElement(J.Td,null,e.createElement(ee.k,{gap:1,justifyContent:"flex-end",...r.UW},i&&e.createElement(z.h,{onClick:()=>i(d),label:o({id:(0,n.O)("Settings.list.actions.edit")}),icon:e.createElement(Ye.Z,null),noBorder:!0}),s&&!d.isDefault&&e.createElement(z.h,{onClick:()=>s(d),label:o({id:(0,n.O)("Settings.list.actions.delete")}),icon:e.createElement(Qe.Z,null),noBorder:!0})))))))};be.defaultProps={locales:[],onDeleteLocale:void 0,onEditLocale:void 0},be.propTypes={locales:a().array,onDeleteLocale:a().func,onEditLocale:a().func};const ke=be,Oe=({canUpdateLocale:l,canDeleteLocale:s,onToggleCreateModal:i,isCreating:o})=>{const[d,u]=(0,e.useState)(),[y,b]=(0,e.useState)(),{locales:k}=(0,N.Z)(),{formatMessage:oe}=(0,c.Z)();(0,r.go)();const $=()=>u(void 0),q=s?u:void 0,Se=()=>b(void 0),_e=l?b:void 0;return e.createElement(S.o,{tabIndex:-1},e.createElement(W.T,{primaryAction:e.createElement(f.z,{startIcon:e.createElement(T.Z,null),onClick:i,size:"S"},oe({id:(0,n.O)("Settings.list.actions.add")})),title:oe({id:(0,n.O)("plugin.name")}),subtitle:oe({id:(0,n.O)("Settings.list.description")})}),e.createElement(m.D,null,k?.length>0?e.createElement(ke,{locales:k,onDeleteLocale:q,onEditLocale:_e}):e.createElement(v.x,{icon:e.createElement(me.Z,{width:void 0,height:void 0}),content:oe({id:(0,n.O)("Settings.list.empty.title")}),action:i?e.createElement(f.z,{variant:"secondary",startIcon:e.createElement(T.Z,null),onClick:i},oe({id:(0,n.O)("Settings.list.actions.add")})):null})),o&&e.createElement(Ge,{onClose:i}),y&&e.createElement(Ue,{onClose:Se,locale:y}),e.createElement(F,{localeToDelete:d,onClose:$}))};Oe.defaultProps={onToggleCreateModal:void 0},Oe.propTypes={canUpdateLocale:a().bool.isRequired,canDeleteLocale:a().bool.isRequired,onToggleCreateModal:a().func,isCreating:a().bool.isRequired};const Me=Oe,p=({canReadLocale:l,canCreateLocale:s,canDeleteLocale:i,canUpdateLocale:o})=>{const[d,u]=(0,e.useState)(!1),y=s?()=>u(b=>!b):void 0;return l?e.createElement(Me,{canUpdateLocale:o,canDeleteLocale:i,onToggleCreateModal:y,isCreating:d}):null};p.propTypes={canReadLocale:a().bool.isRequired,canCreateLocale:a().bool.isRequired,canUpdateLocale:a().bool.isRequired,canDeleteLocale:a().bool.isRequired};const L=p;var H=t(2135);const qe=()=>{const{isLoading:l,allowedActions:{canRead:s,canUpdate:i,canCreate:o,canDelete:d}}=(0,r.ss)(H.Z);return l?null:e.createElement(L,{canReadLocale:s,canCreateLocale:o,canUpdateLocale:i,canDeleteLocale:d})}},38855:(se,x,t)=>{t.d(x,{h:()=>X,X:()=>te});var e=t(67294),r=t(70968),P=t(12645),a=t(45697),c=t(90608),S=t(74020),W=t(70389),f=t(7801);const m={Close:"Close",CloseSelect:"CloseSelect",First:"First",Last:"Last",Next:"Next",Open:"Open",PageDown:"PageDown",PageUp:"PageUp",Previous:"Previous",Select:"Select",Space:"Space",Type:"Type"},v={Close:"Close",First:"First",Last:"Last",Next:"Next",Open:"Open",Previous:"Previous",Select:"Select",UpLevel:"UpLevel"};function T(g=[],R=null,D=[]){const V=String(R??"").toLowerCase();return V?g.filter(A=>A.props.children.toString().toLowerCase().includes(V)&&D.indexOf(A)<0):g}function me(g,R){if(!R&&g===f.y.DOWN)return m.Open;if(g===f.y.DOWN)return m.Next;if(g===f.y.UP)return m.Previous;if(g===f.y.HOME)return m.First;if(g===f.y.END)return m.Last;if(g===f.y.ESCAPE)return m.Close;if(g===f.y.ENTER)return m.CloseSelect;if(g===f.y.BACKSPACE||g===f.y.CLEAR||g.length===1)return m.Type}function N(g,R,D){switch(D){case m.First:return 0;case m.Last:return R;case m.Previous:return Math.max(0,g-1);case m.Next:return Math.min(R,g+1);default:return g}}function n(g){(0,W.Z)(g,{scrollMode:"if-needed",block:"nearest",inline:"nearest"}).forEach(({el:R,top:D,left:V})=>{R.scrollTop=D,R.scrollLeft=V})}var E=t(41580),C=t(54574),h=t(19270),M=t(63428),O=t(96404),U=t(11047),_=t(2504),ee=t(88655),K=t(26048),ge=t(81318),pe=t(75515),w=t(63237);const X=({children:g,clearLabel:R,creatable:D,createMessage:V,disabled:A,error:fe,hasMoreItems:Ze,hint:re,id:ie,label:ae,labelAction:Ie,loading:de,loadingMessage:Ne,noOptionsMessage:Fe,onChange:Te,onClear:$e,onCreateOption:De,onInputChange:ve,onLoadMore:We,placeholder:xe,required:Ee,value:j,...he})=>{const Ue=()=>g.find(p=>p.props?.value.toLowerCase()===j.toLowerCase()).props?.children,[B,Ke]=(0,e.useState)(0),[ze,ye]=(0,e.useState)(null),[F,Pe]=(0,e.useState)(g),[Y,He]=(0,e.useState)(!1),[Z,ce]=(0,e.useState)(""),ne=(0,e.useRef)(),ue=(0,e.useRef)(!1),Q=(0,e.useRef)(),Re=(0,e.useRef)(),we=(0,e.useRef)(),Ae=(0,e.useRef)(!0),I=(0,_.M)(ie),Ve=`${I}-label`;if(!ae&&!he["aria-label"])throw new Error('The Combobox component needs a "label" or an "aria-label" props');(0,e.useEffect)(()=>{Pe(T(g,Z))},[Z,g]),(0,e.useEffect)(()=>{Y&&ne.current&&n(ne.current)},[B,Y]),(0,e.useLayoutEffect)(()=>{Ae.current&&(Ae.current=!1)},[j]);const je=Y?`${I}-${B}`:"",Le=()=>{Te(null),ce("")},Ge=p=>{ve&&ve(p);const L=Q.current.value;Pe(T(g,L)),Ke(0),ye(null),Z!==L&&ce(L),Y||z(!0,!1)},Je=p=>{const{key:L}=p,H=D&&Z?F.length:F.length-1,le=me(L,Y);switch(j&&!Z&&L===f.y.BACKSPACE&&Le(),le){case m.Next:{if(B===H){G(0);break}G(N(B,H,le));break}case m.Previous:{if(B===0){G(H);break}G(N(B,H,le));break}case m.Last:case m.First:{if(B===H){G(0);break}G(N(B,H,le));break}case m.CloseSelect:p.preventDefault(),Ce(B);break;case m.Close:p.preventDefault(),z(!1);break;case m.Open:z(!0);break}},Xe=p=>{if(p.preventDefault(),j&&!ue.current&&ce(""),ue.current){ue.current=!1;return}z(!1,!1)},G=p=>{Ke(p)},J=p=>{G(p),Ce(p)},Be=()=>{ue.current=!0},Ce=p=>{const L=F[p];if(ce(""),L){Te(L.props.value),z(!1);return}D&&(De(Z),z(!1))},z=(p,L=!0)=>{He(p),L&&Q.current.focus()},Ye=e.Children.toArray(F).map((p,L)=>{const H=B===L;return(0,e.cloneElement)(p,{id:`${I}-${L}`,"aria-selected":ze===L,"aria-posinset":L+1,"aria-setsize":e.Children.toArray(F).length,ref(le){H&&(ne.current=le)},onClick:()=>J(L),onMouseDown:Be,isSelected:H})}),Qe=()=>{Q.current.focus(),$e&&$e(),Le()},be=()=>{Q.current.focus(),z(!0)},ke=()=>{const p=F.findIndex(L=>L.props?.children===Z);return Z&&p===-1},Oe=p=>{p.preventDefault(),z(p,!0)};let Me;return fe?Me=`${I}-error`:re&&(Me=`${I}-hint`),e.createElement(C.g,{hint:re,error:fe,id:I,required:Ee},e.createElement(w.T,{"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text"},j),e.createElement(U.k,{direction:"column",alignItems:"stretch",gap:ae||re||fe?1:0},ae&&e.createElement(h.Q,{action:Ie},ae),e.createElement(S.d8,{ref:Re,$disabled:A,hasError:fe},e.createElement(S.fv,{wrap:"wrap"},!Z&&j&&e.createElement(S.K7,{id:`${I}-selected-value`},e.createElement(pe.Z,null,Ue())),e.createElement(S.II,{"aria-activedescendant":je,"aria-autocomplete":"list","aria-controls":`${I}-listbox`,"aria-disabled":A,"aria-expanded":Y,"aria-haspopup":"listbox","aria-describedby":Me,autoComplete:"off",autoCorrect:"off",id:I,onBlur:A?void 0:Xe,onClick:A?void 0:Oe,onInput:A?void 0:Ge,onKeyDown:A?void 0:Je,placeholder:j?"":xe,readOnly:A,ref:Q,required:Ee,role:"combobox",spellCheck:"off",type:"text",value:Z})),e.createElement(U.k,null,(j||Z)&&e.createElement(ge.zb,{id:`${I}-clear`,"aria-label":R,disabled:A,paddingLeft:3,as:"button",onClick:Qe,type:"button"},e.createElement(r.Z,null)),e.createElement(ge.AV,{disabled:A,paddingLeft:3,"aria-hidden":!0,as:"button",onClick:be,tabIndex:-1,type:"button"},e.createElement(P.Z,null)))),e.createElement(M.J,null),e.createElement(O.c,null)),Y&&e.createElement(K.J2,{id:`${I}-popover`,source:Re,spacing:4,fullWidth:!0,intersectionId:`${I}-listbox-popover-intersection`,onReachEnd:Ze&&!de?We:void 0},e.createElement("div",{role:"listbox",ref:we,id:`${I}-listbox`,"aria-labelledby":ae?Ve:void 0},(Boolean(F.length)||D)&&e.createElement(e.Fragment,null,Ye,ke()&&D&&e.createElement(c.O,{isSelected:B===F.length,ref:p=>{B===F.length&&(ne.current=p)},onMouseDown:Be,onClick:()=>Ce(),taindex:0},V(Z))),!F.length&&!D&&!de&&e.createElement(E.x,{paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2,ref:ne},e.createElement(pe.Z,{textColor:"neutral800"},Fe(Z))),de&&e.createElement(U.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2},e.createElement(ee.a,{small:!0},Ne)))))},te=g=>e.createElement(X,{...g,creatable:!0});X.defaultProps={"aria-label":void 0,clearLabel:"clear",creatable:!1,createMessage:g=>`Create "${g}"`,disabled:!1,error:void 0,hasMoreItems:!1,hint:void 0,id:void 0,label:void 0,loading:!1,loadingMessage:"Loading content...",noOptionsMessage:()=>"No results found",onClear:void 0,onCreateOption:void 0,onInputChange:void 0,onLoadMore:void 0,placeholder:"Select or enter a value",value:void 0},te.defaultProps=X.defaultProps,X.propTypes={"aria-label":a.string,children:a.oneOfType([a.arrayOf(a.node),a.node]),clearLabel:a.string,creatable:a.bool,createMessage:a.func,disabled:a.bool,error:a.string,hasMoreItems:a.bool,id:a.string,hint:a.oneOfType([a.string,a.node,a.arrayOf(a.node)]),label:a.string,labelAction:a.element,loading:a.bool,loadingMessage:a.string,noOptionsMessage:a.func,onChange:a.func.isRequired,onClear:a.func,onCreateOption:a.func,onInputChange:a.func,onLoadMore:a.func,placeholder:a.string,value:a.string},te.propTypes={...X.propTypes,onCreateOption:a.func.isRequired}},90608:(se,x,t)=>{t.d(x,{O:()=>c});var e=t(67294),r=t(45697),P=t(74020),a=t(75515);const c=(0,e.forwardRef)(({isSelected:S,children:W,...f},m)=>e.createElement(P.Zq,{hasRadius:!0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2,role:"option",background:"neutral0",isSelected:S,ref:m,...f},e.createElement(a.Z,{textColor:S?"primary600":"neutral800",fontWeight:S?"bold":null},W)));c.defaultProps={isSelected:!1},c.propTypes={children:r.oneOfType([r.string,r.number]).isRequired,isSelected:r.bool},c.displayName="ComboboxOption"},74020:(se,x,t)=>{t.d(x,{II:()=>f,K7:()=>S,Zq:()=>m,d8:()=>c,fv:()=>W});var e=t(88972),r=t(41580),P=t(11047),a=t(15585);const c=(0,e.ZP)(P.k)`
  position: relative;
  border: 1px solid ${({theme:v,hasError:T})=>T?v.colors.danger600:v.colors.neutral200};
  padding-right: ${({theme:v})=>v.spaces[3]};
  padding-left: ${({theme:v})=>v.spaces[3]};
  border-radius: ${({theme:v})=>v.borderRadius};
  background: ${({theme:v})=>v.colors.neutral0};

  ${({theme:v,$disabled:T})=>T?`
    color: ${v.colors.neutral600};
    background: ${v.colors.neutral150};
  `:void 0}

  ${(0,a.k3)()}
`,S=e.ZP.div`
  padding: 1px 2px;
  grid-area: 1 / 1 / 2 / 3;
`,W=(0,e.ZP)(P.k)`
  display: grid;
  flex: 1 1 0%;
  position: relative;
`,f=e.ZP.input`
  display: inline-grid;
  grid-area: 1 / 1 / 2 / 3;
  grid-template-columns: 0px min-content;
  background: transparent;
  min-height: ${40/16}rem;
  border: none;
  flex: 1;
  font-size: ${14/16}rem;
  color: ${({theme:v})=>v.colors.neutral800};
  outline: none;
  &:focus-visible {
    outline: none;
    box-shadow: none;
    outline-offset: 0;
  }
  &[aria-disabled='true'] {
    background: inherit;
    color: inherit;
    cursor: not-allowed;
  }
`,m=(0,e.ZP)(r.x)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  ${({isSelected:v,theme:T})=>v&&`background: ${T.colors.primary100};`}

  &:hover {
    background: ${({theme:v})=>v.colors.primary100};
  }
`},49066:(se,x,t)=>{t.d(x,{D:()=>a});var e=t(67294),r=t(45697),P=t(41580);const a=({children:c})=>e.createElement(P.x,{paddingLeft:10,paddingRight:10},c);a.propTypes={children:r.node.isRequired}},53979:(se,x,t)=>{t.d(x,{A:()=>N,T:()=>T});var e=t(67294),r=t(45697),P=t(88972),a=t(41580),c=t(11047);const S=n=>{const E=(0,e.useRef)(null),[C,h]=(0,e.useState)(!0),M=([O])=>{h(O.isIntersecting)};return(0,e.useEffect)(()=>{const O=E.current,U=new IntersectionObserver(M,n);return O&&U.observe(E.current),()=>{O&&U.disconnect()}},[E,n]),[E,C]};var W=t(95355);const f=(n,E)=>{const C=(0,W.W)(E);(0,e.useLayoutEffect)(()=>{const h=new ResizeObserver(C);return Array.isArray(n)?n.forEach(M=>{M.current&&h.observe(M.current)}):n.current&&h.observe(n.current),()=>{h.disconnect()}},[n,C])};var m=t(75515);const v=()=>{const n=(0,e.useRef)(null),[E,C]=(0,e.useState)(null),[h,M]=S({root:null,rootMargin:"0px",threshold:0});return f(h,()=>{h.current&&C(h.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{n.current&&C(n.current.getBoundingClientRect())},[n]),{containerRef:h,isVisible:M,baseHeaderLayoutRef:n,headerSize:E}},T=n=>{const{containerRef:E,isVisible:C,baseHeaderLayoutRef:h,headerSize:M}=v();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:M?.height},ref:E},C&&e.createElement(N,{ref:h,...n})),!C&&e.createElement(N,{...n,sticky:!0,width:M?.width}))};T.displayName="HeaderLayout";const me=(0,P.ZP)(a.x)`
  width: ${n=>n.width}px;
`,N=e.forwardRef(({navigationAction:n,primaryAction:E,secondaryAction:C,subtitle:h,title:M,sticky:O,width:U,..._},ee)=>{const K=typeof h=="string";return O?e.createElement(me,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:U,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(c.k,{justifyContent:"space-between"},e.createElement(c.k,null,n&&e.createElement(a.x,{paddingRight:3},n),e.createElement(a.x,null,e.createElement(m.Z,{variant:"beta",as:"h1",..._},M),K?e.createElement(m.Z,{variant:"pi",textColor:"neutral600"},h):h),C?e.createElement(a.x,{paddingLeft:4},C):null),e.createElement(c.k,null,E?e.createElement(a.x,{paddingLeft:2},E):void 0))):e.createElement(a.x,{ref:ee,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0},n?e.createElement(a.x,{paddingBottom:2},n):null,e.createElement(c.k,{justifyContent:"space-between"},e.createElement(c.k,{minWidth:0},e.createElement(m.Z,{as:"h1",variant:"alpha",..._},M),C?e.createElement(a.x,{paddingLeft:4},C):null),E),K?e.createElement(m.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},h):h)});N.displayName="BaseHeaderLayout",N.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},N.propTypes={navigationAction:r.node,primaryAction:r.node,secondaryAction:r.node,sticky:r.bool,subtitle:r.oneOfType([r.string,r.node]),title:r.string.isRequired,width:r.number},T.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},T.propTypes={navigationAction:r.node,primaryAction:r.node,secondaryAction:r.node,subtitle:r.oneOfType([r.string,r.node]),title:r.string.isRequired}},185:(se,x,t)=>{t.d(x,{o:()=>c});var e=t(67294),r=t(45697),P=t(88972);const a=P.ZP.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,c=({labelledBy:S,...W})=>{const f=S||"main-content-title";return e.createElement(a,{"aria-labelledby":f,id:"main-content",tabIndex:-1,...W})};c.defaultProps={labelledBy:void 0},c.propTypes={labelledBy:r.string}}}]);
