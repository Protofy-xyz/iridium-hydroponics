(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5421],{72180:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/keys",function(){return n(32299)}])},32299:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(52322),i=n(68023),a=n(99361),o=n(13997),u=n(1888),l=n(55607),s=n(48115),d=n(1201),c=n(2784),y=n(6289),f=n(26887);let p="/adminapi/v1/keys",v="/adminapi/v1/workspaces";var m={keys:{component:e=>{var t;let{pageState:n,initialItems:u,pageSession:m,extraData:g}=e;(0,d.G)(()=>(null==u?void 0:u.isLoaded)?"Currently the system returned the following information: "+JSON.stringify(u.data):"");let[w,h]=(0,c.useState)(null!==(t=null==g?void 0:g.workspaces)&&void 0!==t?t:(0,y.E)("pending"));return(0,f.a)(e=>{s.bl.get(v,e)},h,null==g?void 0:g.workspaces),(0,r.jsx)(a.D,{title:"Keys",pageSession:m,children:(0,r.jsx)(o.V,{integratedChat:!0,enableAddToInitialData:!0,disableViewSelector:!0,defaultView:"list",rowIcon:l.s,sourceUrl:p,initialItems:u,numColumnsForm:1,name:"key",model:i.D})})},getServerSideProps:(0,u.eq)(p,["admin"],{},async()=>({workspaces:await s.bl.get(v)}))}},g=n(97729),w=n.n(g);function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w(),{children:(0,r.jsx)("title",{children:"Protofy - Keys"})}),(0,r.jsx)(m.keys.component,{...e})]})}},68023:function(e,t,n){"use strict";n.d(t,{D:function(){return u}});var r=n(30195),i=n(75370),a=n(54283);let o=i.V_.object({name:r.z.string().id().search(),value:r.z.string()}),u=a.$.createDerived("KeyModel",o)},1888:function(e,t,n){"use strict";n.d(t,{F7:function(){return o},eq:function(){return u}});var r=n(46149),i=n(6429),a=n(48115);let o=e=>r.l.SSR?e:void 0;function u(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return o(async o=>{var u,l,s,d,c,y;let f={itemsPerPage:parseInt(o.query.itemsPerPage)?parseInt(o.query.itemsPerPage):"",page:parseInt(o.query.page,10)?parseInt(o.query.page,10):"",search:null!==(u=o.query.search)&&void 0!==u?u:"",orderBy:null!==(l=o.query.orderBy)&&void 0!==l?l:"",orderDirection:null!==(s=o.query.orderDirection)&&void 0!==s?s:"",view:null!==(d=o.query.view)&&void 0!==d?d:"",item:null!==(c=o.query.item)&&void 0!==c?c:"",editFile:null!==(y=o.query.editFile)&&void 0!==y?y:"",..."function"==typeof n?await n(o):n},p="function"==typeof e?e(o):e;return(0,i.NA)(o,t,{sourceUrl:p,initialItems:await a.bl.get({url:(0,i.VM)(p,o),...f}),itemData:o.query.item?await a.bl.get((0,i.VM)(p+"/"+o.query.item,o)):"",extraData:{..."function"==typeof r?await r(o):r},pageState:{...f}})})}}},function(e){e.O(0,[8641,8081,4733,1335,8873,2859,6313,3950,7499,4718,5278,986,1004,1823,2029,1698,9774,2888,179],function(){return e(e.s=72180)}),_N_E=e.O()}]);