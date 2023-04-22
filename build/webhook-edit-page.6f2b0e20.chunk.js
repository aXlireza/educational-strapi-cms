"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[5162],{40703:(te,T,t)=>{t.d(T,{Z:()=>Ie});var e=t(67294),l=t(86597),L=t(185),o=t(88767),D=t(16550),P=t(48474),Y=t(45697),s=t.n(Y),g=t(90321),p=t(85018),N=t(67109),Se=t(53979),y=t(11047),he=t(29728),Oe=t(49066),ne=t(41580),se=t(11276),V=t(74571),le=t(16364),$=t(41054),j=t(86896),fe=t(19270),w=t(75515),ie=t(88972),Ee=t(36213),Te=t(41451),X=t(11700),de=t.n(X);const d=({disabledEvents:n,name:r,events:a,inputValue:i,handleChange:m,handleChangeAll:I})=>{const u=a.filter(b=>!n.includes(b)),h=i.length===u.length,M=i.length>0,v=({target:{name:b}})=>{I({target:{name:b,value:!h}})};return e.createElement("tr",null,e.createElement("td",null,e.createElement(Ee.X,{indeterminate:M&&!h,"aria-label":"Select all entries",name:r,onChange:v,value:h},de()(r))),a.map(b=>e.createElement("td",{key:b},e.createElement(Te.C,{disabled:n.includes(b),"aria-label":b,name:b,value:i.includes(b),onValueChange:S=>m({target:{name:b,value:S}})}))))};d.defaultProps={disabledEvents:[],events:[],inputValue:[],handleChange(){},handleChangeAll(){}},d.propTypes={disabledEvents:s().array,events:s().array,inputValue:s().array,handleChange:s().func,handleChangeAll:s().func,name:s().string.isRequired};const Z=d,Q=n=>n.reduce((r,a)=>{const i=a.split(".")[0];return r[i]||(r[i]=[]),r[i].push(a),r},{}),R=ie.ZP.table`
  td {
    height: ${52/16}rem;
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr:nth-child(odd) {
    background: ${({theme:n})=>n.colors.neutral100};
  }

  tbody tr td:first-child {
    padding-left: ${({theme:n})=>n.spaces[7]};
  }
`,H={headers:{default:[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}],draftAndPublish:[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"},{id:"app.utils.publish",defaultMessage:"Publish"},{id:"app.utils.unpublish",defaultMessage:"Unpublish"}]},events:{default:{entry:["entry.create","entry.update","entry.delete"],media:["media.create","media.update","media.delete"]},draftAndPublish:{entry:["entry.create","entry.update","entry.delete","entry.publish","entry.unpublish"],media:["media.create","media.update","media.delete"]}}},ve=({isDraftAndPublish:n})=>{const r=n?H.headers.draftAndPublish:H.headers.default,a=n?H.events.draftAndPublish:H.events.default,{formatMessage:i}=(0,j.Z)(),{values:m,handleChange:I}=(0,$.u6)(),u="events",h=m.events,M=[],v=Q(h),b=({target:{name:f,value:A}})=>{let K=new Set(h);A?K.add(f):K.delete(f),I({target:{name:u,value:Array.from(K)}})},S=({target:{name:f,value:A}})=>{let K=new Set(h);A?a[f].forEach(G=>{M.includes(G)||K.add(G)}):a[f].forEach(G=>K.delete(G)),I({target:{name:u,value:Array.from(K)}})};return e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(fe.Q,null,i({id:"Settings.webhooks.form.events",defaultMessage:"Events"})),e.createElement(R,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("td",null),r.map(f=>f==="app.utils.publish"||f==="app.utils.unpublish"?e.createElement("td",{key:f.id,title:i({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"})},e.createElement(w.Z,{variant:"sigma",textColor:"neutral600"},i(f))):e.createElement("td",{key:f.id},e.createElement(w.Z,{variant:"sigma",textColor:"neutral600"},i(f)))))),e.createElement("tbody",null,Object.keys(a).map(f=>e.createElement(Z,{disabledEvents:M,key:f,name:f,events:a[f],inputValue:v[f],handleChange:b,handleChangeAll:S})))))};ve.propTypes={isDraftAndPublish:s().bool.isRequired};const ce=ve;var ke=t(96315),J=t(39785),Le=t(38855),ue=t(90608);const be=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],ae=({name:n,onChange:r,value:a,...i})=>{const[m,I]=(0,e.useState)(a?[...be,a]:be),u=M=>{r({target:{name:n,value:M}})},h=M=>{I(v=>[...v,M]),r({target:{name:n,value:M}})};return e.createElement(Le.X,{...i,onChange:u,onCreateOption:h,placeholder:"",value:a},m.map(M=>e.createElement(ue.O,{value:M,key:M},M)))};ae.defaultProps={value:void 0},ae.propTypes={name:s().string.isRequired,onChange:s().func.isRequired,value:s().string};const Ce=ae,ye=()=>{const{formatMessage:n}=(0,j.Z)(),{values:r,errors:a}=(0,$.u6)();return e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(fe.Q,null,n({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})),e.createElement(ne.x,{padding:8,background:"neutral100",hasRadius:!0},e.createElement($.F2,{validateOnChange:!1,name:"headers",render:({push:i,remove:m})=>e.createElement(se.r,{gap:4},r.headers?.map((I,u)=>e.createElement(e.Fragment,{key:u},e.createElement(V.P,{col:6},e.createElement($.gN,{as:Ce,name:`headers.${u}.key`,"aria-label":`row ${u+1} key`,label:n({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:a.headers?.[u]?.key&&n({id:a.headers[u]?.key,defaultMessage:a.headers[u]?.key})})),e.createElement(V.P,{col:6},e.createElement(y.k,{alignItems:"flex-end"},e.createElement(ne.x,{style:{flex:1}},e.createElement($.gN,{as:le.o,"aria-label":`row ${u+1} value`,label:n({id:"Settings.webhooks.value",defaultMessage:"Value"}),name:`headers.${u}.value`,error:a.headers?.[u]?.value&&n({id:a.headers[u]?.value,defaultMessage:a.headers[u]?.value})})),e.createElement(y.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:a.headers?.[u]?.value?0:5},e.createElement(l.fG,{onClick:()=>r.headers.length!==1&&m(u),label:n({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:u+1})})))))),e.createElement(V.P,{col:12},e.createElement(J.A,{type:"button",onClick:()=>{i({key:"",value:""})},startIcon:e.createElement(ke.Z,null)},n({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"}))))})))};var Re=t(86647),Me=t(70968);const q=ie.ZP.svg(({theme:n,color:r})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;

  path {
    fill: ${n.colors[r]};
  }
`),W=({isPending:n,statusCode:r})=>{const{formatMessage:a}=(0,j.Z)();return n?e.createElement(y.k,{gap:2,alignItems:"center"},e.createElement(q,{as:Re.Z}),e.createElement(w.Z,null,a({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"}))):r>=200&&r<300?e.createElement(y.k,{gap:2,alignItems:"center"},e.createElement(q,{as:p.Z,color:"success700"}),e.createElement(w.Z,null,a({id:"Settings.webhooks.trigger.success",defaultMessage:"success"}))):r>=300?e.createElement(y.k,{gap:2,alignItems:"center"},e.createElement(q,{as:Me.Z,color:"danger700"}),e.createElement(w.Z,null,a({id:"Settings.error",defaultMessage:"error"})," ",r)):null};W.propTypes={isPending:s().bool.isRequired,statusCode:s().number},W.defaultProps={statusCode:void 0};const ge=({statusCode:n,message:r})=>{const{formatMessage:a}=(0,j.Z)();return n>=200&&n<300?e.createElement(y.k,{justifyContent:"flex-end"},e.createElement(w.Z,{textColor:"neutral600",ellipsis:!0},a({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"}))):n>=300?e.createElement(y.k,{justifyContent:"flex-end"},e.createElement(y.k,{maxWidth:(0,l.Q1)(250),justifyContent:"flex-end",title:r},e.createElement(w.Z,{ellipsis:!0,textColor:"neutral600"},r))):null};ge.propTypes={statusCode:s().number,message:s().string},ge.defaultProps={statusCode:void 0,message:void 0};const Pe=({onCancel:n})=>{const{formatMessage:r}=(0,j.Z)();return e.createElement(y.k,{justifyContent:"flex-end"},e.createElement("button",{onClick:n,type:"button"},e.createElement(y.k,{gap:2,alignItems:"center"},e.createElement(w.Z,{textColor:"neutral400"},r({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})),e.createElement(q,{as:Me.Z,color:"neutral400"}))))};Pe.propTypes={onCancel:s().func.isRequired};const x=({isPending:n,onCancel:r,response:a})=>{const{statusCode:i,message:m}=a,{formatMessage:I}=(0,j.Z)();return e.createElement(ne.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0},e.createElement(se.r,{gap:4,style:{alignItems:"center"}},e.createElement(V.P,{col:3},e.createElement(w.Z,null,I({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"}))),e.createElement(V.P,{col:3},e.createElement(W,{isPending:n,statusCode:i})),e.createElement(V.P,{col:6},n?e.createElement(Pe,{onCancel:r}):e.createElement(ge,{statusCode:i,message:m}))))};x.defaultProps={isPending:!1,onCancel(){},response:{}},x.propTypes={isPending:s().bool,onCancel:s().func,response:s().object};const xe=x;var F=t(87561);const Ae=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,U=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,z=F.Ry().shape({name:F.Z_(l.I0.string).required(l.I0.required).matches(Ae,l.I0.regex),url:F.Z_(l.I0.string).required(l.I0.required).matches(U,l.I0.regex),headers:F.Vo(n=>{let r=F.IX();if(n.length===1){const{key:a,value:i}=n[0];if(!a&&!i)return r}return r.of(F.Ry().shape({key:F.Z_().required(l.I0.required),value:F.Z_().required(l.I0.required)}))}),events:F.IX()}),me=({handleSubmit:n,data:r,triggerWebhook:a,isCreating:i,isTriggering:m,triggerResponse:I,isDraftAndPublishEvents:u})=>{const{formatMessage:h}=(0,j.Z)(),[M,v]=(0,e.useState)(!1);return e.createElement($.J9,{onSubmit:n,initialValues:{name:r?.name||"",url:r?.url||"",headers:Object.keys(r?.headers||[]).length?Object.entries(r.headers).map(([b,S])=>({key:b,value:S})):[{key:"",value:""}],events:r?.events||[]},validationSchema:z,validateOnChange:!1,validateOnBlur:!1},({handleSubmit:b,errors:S})=>e.createElement(l.l0,{noValidate:!0},e.createElement(Se.T,{primaryAction:e.createElement(y.k,{gap:2},e.createElement(he.z,{onClick:()=>{a(),v(!0)},variant:"tertiary",startIcon:e.createElement(g.Z,null),disabled:i||m,size:"L"},h({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})),e.createElement(he.z,{startIcon:e.createElement(p.Z,null),onClick:b,type:"submit",size:"L"},h({id:"global.save",defaultMessage:"Save"}))),title:i?h({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):r?.name,navigationAction:e.createElement(l.rU,{startIcon:e.createElement(N.Z,null),to:"/settings/webhooks"},h({id:"global.back",defaultMessage:"Back"}))}),e.createElement(Oe.D,null,e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:4},M&&e.createElement("div",{className:"trigger-wrapper"},e.createElement(xe,{isPending:m,response:I,onCancel:()=>v(!1)})),e.createElement(ne.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0},e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(se.r,{gap:6},e.createElement(V.P,{col:6},e.createElement($.gN,{as:le.o,name:"name",error:S.name&&h({id:S.name}),label:h({id:"global.name",defaultMessage:"Name"}),required:!0})),e.createElement(V.P,{col:12},e.createElement($.gN,{as:le.o,name:"url",error:S.url&&h({id:S.url}),label:h({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0}))),e.createElement(ye,null),e.createElement(ce,{isDraftAndPublish:u})))))))};me.propTypes={data:s().object,handleSubmit:s().func.isRequired,triggerWebhook:s().func.isRequired,isCreating:s().bool.isRequired,isDraftAndPublishEvents:s().bool.isRequired,isTriggering:s().bool.isRequired,triggerResponse:s().object},me.defaultProps={data:void 0,triggerResponse:void 0};const k=me,re=n=>({...n,headers:_(n.headers)}),_=n=>n.reduce((r,a)=>{const{key:i,value:m}=a;return i!==""?{...r,[i]:m}:r},{}),ee=re,Ie=()=>{const{params:{id:n}}=(0,D.$B)("/settings/webhooks/:id"),{replace:r}=(0,D.k6)(),{lockApp:a,unlockApp:i}=(0,l.o1)(),m=(0,l.lm)(),I=(0,o.useQueryClient)(),{isLoading:u,collectionTypes:h}=(0,P.bP)(),{post:M}=(0,l.kY)(),v=n==="create",b=(0,e.useCallback)(async C=>{const[O,{data:we}]=await(0,l.to)((0,l.WY)(`/admin/webhooks/${C}`,{method:"GET"}));return O?(m({type:"warning",message:{id:"notification.error"}}),null):we},[m]),{isLoading:S,data:f}=(0,o.useQuery)(["get-webhook",n],()=>b(n),{enabled:!v}),{isLoading:A,data:K,isIdle:G,mutate:Ze}=(0,o.useMutation)(()=>M(`/admin/webhooks/${n}/trigger`)),$e=()=>Ze(null,{onError(){m({type:"warning",message:{id:"notification.error"}})}}),Be=(0,o.useMutation)(C=>(0,l.WY)("/admin/webhooks",{method:"POST",body:C})),pe=(0,o.useMutation)(({id:C,body:O})=>(0,l.WY)(`/admin/webhooks/${C}`,{method:"PUT",body:O})),c=async C=>{v?(a(),Be.mutate(ee(C),{onSuccess(O){m({type:"success",message:{id:"Settings.webhooks.created"}}),r(`/settings/webhooks/${O.data.id}`),i()},onError(O){m({type:"warning",message:{id:"notification.error"}}),console.log(O),i()}})):(a(),pe.mutate({id:n,body:ee(C)},{onSuccess(){I.invalidateQueries(["get-webhook",n]),m({type:"success",message:{id:"notification.form.success.fields"}}),i()},onError(O){m({type:"warning",message:{id:"notification.error"}}),console.log(O),i()}}))},E=(0,e.useMemo)(()=>h.some(C=>C.options.draftAndPublish===!0),[h]);return S||u?e.createElement(l.dO,null):e.createElement(L.o,null,e.createElement(l.SL,{name:"Webhooks"}),e.createElement(k,{handleSubmit:c,data:f,triggerWebhook:$e,isCreating:v,isTriggering:A,isTriggerIdle:G,triggerResponse:K?.data.data,isDraftAndPublishEvents:E}))}},3672:(te,T,t)=>{t.r(T),t.d(T,{default:()=>P});var e=t(67294),l=t(86597),L=t(87751),o=t(40703);const P=()=>e.createElement(l.O4,{permissions:L.Z.settings.webhooks.create},e.createElement(o.Z,null))},42122:(te,T,t)=>{t.r(T),t.d(T,{default:()=>P});var e=t(67294),l=t(86597),L=t(87751),o=t(40703);const P=()=>e.createElement(l.O4,{permissions:L.Z.settings.webhooks.update},e.createElement(o.Z,null))},38855:(te,T,t)=>{t.d(T,{h:()=>X,X:()=>de});var e=t(67294),l=t(70968),L=t(12645),o=t(45697),D=t(90608),P=t(74020),Y=t(70389),s=t(7801);const g={Close:"Close",CloseSelect:"CloseSelect",First:"First",Last:"Last",Next:"Next",Open:"Open",PageDown:"PageDown",PageUp:"PageUp",Previous:"Previous",Select:"Select",Space:"Space",Type:"Type"},p={Close:"Close",First:"First",Last:"Last",Next:"Next",Open:"Open",Previous:"Previous",Select:"Select",UpLevel:"UpLevel"};function N(d=[],Z=null,B=[]){const Q=String(Z??"").toLowerCase();return Q?d.filter(R=>R.props.children.toString().toLowerCase().includes(Q)&&B.indexOf(R)<0):d}function Se(d,Z){if(!Z&&d===s.y.DOWN)return g.Open;if(d===s.y.DOWN)return g.Next;if(d===s.y.UP)return g.Previous;if(d===s.y.HOME)return g.First;if(d===s.y.END)return g.Last;if(d===s.y.ESCAPE)return g.Close;if(d===s.y.ENTER)return g.CloseSelect;if(d===s.y.BACKSPACE||d===s.y.CLEAR||d.length===1)return g.Type}function y(d,Z,B){switch(B){case g.First:return 0;case g.Last:return Z;case g.Previous:return Math.max(0,d-1);case g.Next:return Math.min(Z,d+1);default:return d}}function he(d){(0,Y.Z)(d,{scrollMode:"if-needed",block:"nearest",inline:"nearest"}).forEach(({el:Z,top:B,left:Q})=>{Z.scrollTop=B,Z.scrollLeft=Q})}var Oe=t(41580),ne=t(54574),se=t(19270),V=t(63428),le=t(96404),$=t(11047),j=t(2504),fe=t(88655),w=t(26048),ie=t(81318),Ee=t(75515),Te=t(63237);const X=({children:d,clearLabel:Z,creatable:B,createMessage:Q,disabled:R,error:H,hasMoreItems:ve,hint:ce,id:ke,label:J,labelAction:Le,loading:ue,loadingMessage:We,noOptionsMessage:be,onChange:ae,onClear:Ce,onCreateOption:Ue,onInputChange:ye,onLoadMore:Re,placeholder:Me,required:q,value:W,...ge})=>{const Pe=()=>d.find(c=>c.props?.value.toLowerCase()===W.toLowerCase()).props?.children,[x,xe]=(0,e.useState)(0),[F,Ae]=(0,e.useState)(null),[U,De]=(0,e.useState)(d),[z,me]=(0,e.useState)(!1),[k,re]=(0,e.useState)(""),_=(0,e.useRef)(),ee=(0,e.useRef)(!1),oe=(0,e.useRef)(),Ie=(0,e.useRef)(),n=(0,e.useRef)(),r=(0,e.useRef)(!0),a=(0,j.M)(ke),i=`${a}-label`;if(!J&&!ge["aria-label"])throw new Error('The Combobox component needs a "label" or an "aria-label" props');(0,e.useEffect)(()=>{De(N(d,k))},[k,d]),(0,e.useEffect)(()=>{z&&_.current&&he(_.current)},[x,z]),(0,e.useLayoutEffect)(()=>{r.current&&(r.current=!1)},[W]);const m=z?`${a}-${x}`:"",I=()=>{ae(null),re("")},u=c=>{ye&&ye(c);const E=oe.current.value;De(N(d,E)),xe(0),Ae(null),k!==E&&re(E),z||A(!0,!1)},h=c=>{const{key:E}=c,C=B&&k?U.length:U.length-1,O=Se(E,z);switch(W&&!k&&E===s.y.BACKSPACE&&I(),O){case g.Next:{if(x===C){v(0);break}v(y(x,C,O));break}case g.Previous:{if(x===0){v(C);break}v(y(x,C,O));break}case g.Last:case g.First:{if(x===C){v(0);break}v(y(x,C,O));break}case g.CloseSelect:c.preventDefault(),f(x);break;case g.Close:c.preventDefault(),A(!1);break;case g.Open:A(!0);break}},M=c=>{if(c.preventDefault(),W&&!ee.current&&re(""),ee.current){ee.current=!1;return}A(!1,!1)},v=c=>{xe(c)},b=c=>{v(c),f(c)},S=()=>{ee.current=!0},f=c=>{const E=U[c];if(re(""),E){ae(E.props.value),A(!1);return}B&&(Ue(k),A(!1))},A=(c,E=!0)=>{me(c),E&&oe.current.focus()},K=e.Children.toArray(U).map((c,E)=>{const C=x===E;return(0,e.cloneElement)(c,{id:`${a}-${E}`,"aria-selected":F===E,"aria-posinset":E+1,"aria-setsize":e.Children.toArray(U).length,ref(O){C&&(_.current=O)},onClick:()=>b(E),onMouseDown:S,isSelected:C})}),G=()=>{oe.current.focus(),Ce&&Ce(),I()},Ze=()=>{oe.current.focus(),A(!0)},$e=()=>{const c=U.findIndex(E=>E.props?.children===k);return k&&c===-1},Be=c=>{c.preventDefault(),A(c,!0)};let pe;return H?pe=`${a}-error`:ce&&(pe=`${a}-hint`),e.createElement(ne.g,{hint:ce,error:H,id:a,required:q},e.createElement(Te.T,{"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text"},W),e.createElement($.k,{direction:"column",alignItems:"stretch",gap:J||ce||H?1:0},J&&e.createElement(se.Q,{action:Le},J),e.createElement(P.d8,{ref:Ie,$disabled:R,hasError:H},e.createElement(P.fv,{wrap:"wrap"},!k&&W&&e.createElement(P.K7,{id:`${a}-selected-value`},e.createElement(Ee.Z,null,Pe())),e.createElement(P.II,{"aria-activedescendant":m,"aria-autocomplete":"list","aria-controls":`${a}-listbox`,"aria-disabled":R,"aria-expanded":z,"aria-haspopup":"listbox","aria-describedby":pe,autoComplete:"off",autoCorrect:"off",id:a,onBlur:R?void 0:M,onClick:R?void 0:Be,onInput:R?void 0:u,onKeyDown:R?void 0:h,placeholder:W?"":Me,readOnly:R,ref:oe,required:q,role:"combobox",spellCheck:"off",type:"text",value:k})),e.createElement($.k,null,(W||k)&&e.createElement(ie.zb,{id:`${a}-clear`,"aria-label":Z,disabled:R,paddingLeft:3,as:"button",onClick:G,type:"button"},e.createElement(l.Z,null)),e.createElement(ie.AV,{disabled:R,paddingLeft:3,"aria-hidden":!0,as:"button",onClick:Ze,tabIndex:-1,type:"button"},e.createElement(L.Z,null)))),e.createElement(V.J,null),e.createElement(le.c,null)),z&&e.createElement(w.J2,{id:`${a}-popover`,source:Ie,spacing:4,fullWidth:!0,intersectionId:`${a}-listbox-popover-intersection`,onReachEnd:ve&&!ue?Re:void 0},e.createElement("div",{role:"listbox",ref:n,id:`${a}-listbox`,"aria-labelledby":J?i:void 0},(Boolean(U.length)||B)&&e.createElement(e.Fragment,null,K,$e()&&B&&e.createElement(D.O,{isSelected:x===U.length,ref:c=>{x===U.length&&(_.current=c)},onMouseDown:S,onClick:()=>f(),taindex:0},Q(k))),!U.length&&!B&&!ue&&e.createElement(Oe.x,{paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2,ref:_},e.createElement(Ee.Z,{textColor:"neutral800"},be(k))),ue&&e.createElement($.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2},e.createElement(fe.a,{small:!0},We)))))},de=d=>e.createElement(X,{...d,creatable:!0});X.defaultProps={"aria-label":void 0,clearLabel:"clear",creatable:!1,createMessage:d=>`Create "${d}"`,disabled:!1,error:void 0,hasMoreItems:!1,hint:void 0,id:void 0,label:void 0,loading:!1,loadingMessage:"Loading content...",noOptionsMessage:()=>"No results found",onClear:void 0,onCreateOption:void 0,onInputChange:void 0,onLoadMore:void 0,placeholder:"Select or enter a value",value:void 0},de.defaultProps=X.defaultProps,X.propTypes={"aria-label":o.string,children:o.oneOfType([o.arrayOf(o.node),o.node]),clearLabel:o.string,creatable:o.bool,createMessage:o.func,disabled:o.bool,error:o.string,hasMoreItems:o.bool,id:o.string,hint:o.oneOfType([o.string,o.node,o.arrayOf(o.node)]),label:o.string,labelAction:o.element,loading:o.bool,loadingMessage:o.string,noOptionsMessage:o.func,onChange:o.func.isRequired,onClear:o.func,onCreateOption:o.func,onInputChange:o.func,onLoadMore:o.func,placeholder:o.string,value:o.string},de.propTypes={...X.propTypes,onCreateOption:o.func.isRequired}},90608:(te,T,t)=>{t.d(T,{O:()=>D});var e=t(67294),l=t(45697),L=t(74020),o=t(75515);const D=(0,e.forwardRef)(({isSelected:P,children:Y,...s},g)=>e.createElement(L.Zq,{hasRadius:!0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2,role:"option",background:"neutral0",isSelected:P,ref:g,...s},e.createElement(o.Z,{textColor:P?"primary600":"neutral800",fontWeight:P?"bold":null},Y)));D.defaultProps={isSelected:!1},D.propTypes={children:l.oneOfType([l.string,l.number]).isRequired,isSelected:l.bool},D.displayName="ComboboxOption"},74020:(te,T,t)=>{t.d(T,{II:()=>s,K7:()=>P,Zq:()=>g,d8:()=>D,fv:()=>Y});var e=t(88972),l=t(41580),L=t(11047),o=t(15585);const D=(0,e.ZP)(L.k)`
  position: relative;
  border: 1px solid ${({theme:p,hasError:N})=>N?p.colors.danger600:p.colors.neutral200};
  padding-right: ${({theme:p})=>p.spaces[3]};
  padding-left: ${({theme:p})=>p.spaces[3]};
  border-radius: ${({theme:p})=>p.borderRadius};
  background: ${({theme:p})=>p.colors.neutral0};

  ${({theme:p,$disabled:N})=>N?`
    color: ${p.colors.neutral600};
    background: ${p.colors.neutral150};
  `:void 0}

  ${(0,o.k3)()}
`,P=e.ZP.div`
  padding: 1px 2px;
  grid-area: 1 / 1 / 2 / 3;
`,Y=(0,e.ZP)(L.k)`
  display: grid;
  flex: 1 1 0%;
  position: relative;
`,s=e.ZP.input`
  display: inline-grid;
  grid-area: 1 / 1 / 2 / 3;
  grid-template-columns: 0px min-content;
  background: transparent;
  min-height: ${40/16}rem;
  border: none;
  flex: 1;
  font-size: ${14/16}rem;
  color: ${({theme:p})=>p.colors.neutral800};
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
`,g=(0,e.ZP)(l.x)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  ${({isSelected:p,theme:N})=>p&&`background: ${N.colors.primary100};`}

  &:hover {
    background: ${({theme:p})=>p.colors.primary100};
  }
`},67109:(te,T,t)=>{t.d(T,{Z:()=>L});var e=t(85893);const l=o=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,e.jsx)("path",{d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z",fill:"#212134"})}),L=l}}]);
