(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],{123:function(e,t,a){e.exports=a.p+"static/media/NewsScreen.1a463468.jpg"},134:function(e,t,a){e.exports=a(258)},140:function(e,t,a){},162:function(e,t,a){},165:function(e,t,a){},167:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},258:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(36),o=a(10),u={darkMode:!1,fontSizeValue:1.1},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CHANGE_THEME":return Object(o.a)(Object(o.a)({},e),{},{darkMode:t.payload});case"SET_FONT_SIZE_VALUE":return Object(o.a)(Object(o.a)({},e),{},{fontSizeValue:t.fontSizeValue});default:return e}},l={items:[],itemsForIS:[],pageSize:6,totalResults:[],currentPage:1,loading:!1,pageIsLoading:!1};var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NEWS":return Object(o.a)(Object(o.a)({},e),{},{items:t.items});case"SET_NEWS_IS":return Object(o.a)(Object(o.a)({},e.itemsForIS),{},{itemsForIS:t.itemsForIS});case"SET_CURRENT_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTTAL_RESULTS":return Object(o.a)(Object(o.a)({},e),{},{totalResults:t.totalResults});case"SET_LOADING":return Object(o.a)(Object(o.a)({},e),{},{loading:t.loading});case"SET_PAGE_IS_LOADING":return Object(o.a)(Object(o.a)({},e),{},{pageIsLoading:t.pageIsLoading});case"SET_PAGE_SIZE":return Object(o.a)(Object(o.a)({},e),{},{pageSize:t.pageSize});default:return e}},m={filterBy:"all"},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER":return Object(o.a)(Object(o.a)({},e),{},{filterBy:t.filterBy});default:return e}},p=Object(i.c)({theme:c,news:s,filterReducer:d}),f=a(118),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,E=Object(i.e)(p,b(Object(i.a)(f.a))),g=a(9),v=a.n(g),h=a(38),q=a(30),y=a(12),S=a(303),O=(a(140),a(286)),x=a(51),_=a(287),N=a(311),w=a(283),T=a(310),j=function(e){return{type:"SET_CHANGE_THEME",payload:e}},k=function(e){return{type:"SET_FONT_SIZE_VALUE",fontSizeValue:e}},I=a(16),z=r.a.memo((function(){var e=Object(I.c)((function(e){return{darkMode:e.theme.darkMode}})).darkMode,t=Object(I.b)(j());return r.a.createElement(w.a,{label:e?"Dark":"Light",control:r.a.createElement(T.a,{edge:"end",onChange:function(){return t(j(!e))},checked:e})})})),L=a(50),P=a.n(L),R=a(78),A=a(79),B=a.n(A),C="https://newsapi.org/v2/top-headlines?country=ru&apiKey=51b176c05fc644bd925465164359fb01&",M=function(e,t){return function(){var a=Object(R.a)(P.a.mark((function a(n){var r;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n(D(e)),n(U(!0)),a.next=5,B.a.get("".concat(C,"page=").concat(e,"&pageSize=").concat(t));case 5:r=a.sent,n(V(r.data.articles)),n(U(!1)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.error(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()},V=function(e){return{type:"SET_NEWS",items:e}},D=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},G=function(e){return{type:"SET_TOTTAL_RESULTS",totalResults:e}},F=function(e){return{type:"SET_LOADING",loading:e}},U=function(e){return{type:"SET_PAGE_IS_LOADING",pageIsLoading:e}},W=function(e){return{type:"SET_PAGE_SIZE",pageSize:e}},H=Object(O.a)({root:{maxWidth:"100%"},divider:{width:"95%"},slider:{width:"50%"}}),Z=r.a.memo((function(e){var t=e.pageSize,a=e.fontSizeValue,n=H(),i=Object(I.b)(W(),k());return r.a.createElement("div",{className:n.root},r.a.createElement(x.a,{variant:"h5",style:{marginBottom:"10px"}},"Settings"),r.a.createElement(_.a,{className:n.divider}),r.a.createElement(x.a,null,"\u0422\u0435\u043c\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f"),r.a.createElement(z,null),r.a.createElement(_.a,{className:n.divider}),r.a.createElement(x.a,{id:"discrete-slider",gutterBottom:!0},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435"),r.a.createElement(N.a,{className:n.slider,defaultValue:t,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",value:t,step:1,marks:!0,min:1,max:40,onChange:function(e,t){i(W(t))}}),r.a.createElement(_.a,{className:n.divider}),r.a.createElement(x.a,{id:"discrete-slider",gutterBottom:!0},"\u0420\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430"),r.a.createElement(N.a,{className:n.slider,defaultValue:a,value:a,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:.1,marks:!0,min:.9,max:1.5,onChange:function(e,t){i(k(t))}}),r.a.createElement(x.a,{id:"font",style:{fontSize:10*a}},'"\u042d\u0442\u043e \u043f\u0440\u0438\u043c\u0435\u0440!" \u0438 \u0435\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440: ',10*a),r.a.createElement("div",null,r.a.createElement(_.a,{className:n.divider})))})),Q=a(309),X=r.a.memo((function(){return r.a.createElement(Q.a,null,r.a.createElement(x.a,null,"Help"),r.a.createElement(x.a,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quod dignissimos adipisci iure rerum quae explicabo recusandae minima ea, velit tempore amet id labore minus? Nobis modi mollitia dolores expedita autem cum nesciunt sapiente dolor quas aliquam doloremque reprehenderit, odio repellat tempora magni libero rerum est ad laborum facere voluptas. Optio aliquid sapiente quia ad earum voluptates magni quidem dolorem placeat quibusdam fugiat tempora repellendus obcaecati consequuntur rerum est libero assumenda praesentium, laborum neque eius blanditiis expedita tenetur. Minus ullam, quod tempora repellendus, temporibus non inventore sit corporis sunt maxime officiis ut dolores quaerat error doloremque, exercitationem optio beatae quasi labore laborum ea? Aut minima repellendus cupiditate suscipit necessitatibus veniam deserunt! Libero repellendus voluptas est laborum aut minima dolorem. Voluptates quos laborum unde, tempora qui maiores incidunt laudantium natus. Veniam consequatur ipsam explicabo odio dolor quos deserunt cupiditate perferendis dolore ab quibusdam tenetur facilis, repudiandae totam laudantium error iusto cumque quas labore culpa at rerum et optio. Quos saepe laborum iste vel, impedit dolore placeat dolor aspernatur, dicta repellat sequi consectetur commodi cum optio earum deleniti dolorem esse consequatur architecto tenetur quo! Blanditiis quae eos optio praesentium quasi illum tempore assumenda corrupti eaque provident possimus beatae unde voluptatibus voluptas totam veniam sequi in sint pariatur maiores, iusto repellat fugit accusamus? Magni reprehenderit sint explicabo veniam amet officiis, impedit tempora provident vel! Nihil repudiandae maiores perspiciatis cupiditate itaque nulla, hic accusantium eligendi est consectetur saepe quidem veniam quos necessitatibus rem nemo aperiam at dignissimos, dolorem vel doloribus. Architecto ipsa voluptas, ratione quibusdam cupiditate facere necessitatibus culpa dolore, voluptatem ipsam vel temporibus vitae, aspernatur repellendus nostrum placeat nihil! Reprehenderit, delectus earum. Quos, sequi harum eum dolor id cum nesciunt deserunt velit delectus? Suscipit praesentium sed vel perferendis iusto unde sapiente vero dolorem aspernatur esse, quisquam dolor iure ipsa pariatur. Quo amet error nobis dicta dolores, vel sunt quibusdam, odit itaque ducimus atque corporis minus ipsam quos laborum mollitia non, earum quia ut! Culpa non odio fugit minima deserunt? Aliquam consequatur, reprehenderit, quae veniam quisquam cum ducimus officia, iure autem ad perferendis deleniti. Explicabo, unde expedita tenetur officia, nisi dolores totam temporibus cum, fuga voluptatem veniam soluta reprehenderit ipsa consequatur aspernatur aliquam eos itaque pariatur. Nam vero repellendus tempore, quam necessitatibus iusto temporibus veritatis dolor minima est adipisci modi hic quasi itaque sint aperiam sit labore dolores autem, totam accusamus? Labore magni voluptatibus cupiditate esse quos molestias obcaecati non dolores ipsa ut libero qui similique eos velit dolorum, officiis repellendus amet nesciunt sequi laborum totam, quod pariatur explicabo magnam. Labore maiores dolore dolor, deleniti fuga quibusdam. Excepturi eveniet distinctio rem sequi temporibus facere dignissimos totam quis. Similique dolore nemo minima beatae? Porro iure consequatur, nobis eligendi cumque fuga distinctio! Debitis, quae dolor, hic a delectus dicta ipsum officia voluptatibus eaque velit fugit nesciunt corrupti atque ut eveniet cumque totam facere facilis laborum tempora sequi numquam. Reiciendis dolorum culpa fuga impedit cum quas magnam quis doloribus iusto fugit quam harum, aliquid minima quaerat id vel labore beatae optio porro? Eum dignissimos ut reiciendis quis. Odio quibusdam similique aperiam, labore aspernatur totam, perspiciatis non ullam et unde fugiat? Eligendi suscipit amet illum hic rerum? Officiis excepturi repellat, repellendus esse ullam sed fugiat nemo ducimus dicta atque omnis blanditiis alias consequuntur? A architecto ut eaque quasi deserunt reiciendis perferendis animi incidunt sint. Iste necessitatibus voluptatum error tempora distinctio nam officiis quam id eius labore et tempore, atque reprehenderit laborum voluptas exercitationem sint dolor ut vel beatae autem aut recusandae vitae. Delectus sed, animi incidunt, pariatur magnam eius eligendi provident accusantium nemo excepturi totam laboriosam a laborum at minus explicabo obcaecati vitae esse! Modi autem quisquam accusamus."))})),J=(a(162),r.a.memo((function(e){var t=e.darkMode;return r.a.createElement("section",{className:"contacts"},r.a.createElement("iframe",{src:"https://yandex.ru/map-widget/v1/?um=constructor%3Ad1399a61240ef1d7f226a4918d6155eae678e2acb0f7f01743d5e750302b7e4d&source=constructor",width:"100%",height:"550",frameBorder:"0",title:"myFrame"}),r.a.createElement("div",{className:"contacts-block"},r.a.createElement("div",{className:t?"contacts-block__dark":"contacts-block__adress"},r.a.createElement("span",{className:"contacts-block__title"},"\u0410\u0434\u0440\u0435\u0441 \u043e\u0444\u0438\u0441\u0430"),"\u0433. \u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a, \u0443\u043b. \u041f\u0438\u043e\u043d\u0435\u0440\u0441\u043a\u0430\u044f, \u0434. 1")))}))),K=a(288),Y=a(289),$=a(285),ee=a(122),te=a.n(ee),ae=Object(O.a)((function(e){return{menuBurger:Object(q.a)({display:"none"},e.breakpoints.down("767"),{display:"flex",position:"relative"}),toolbar__item:{left:0},appBar:{zIndex:e.zIndex.drawer+1}}}));var ne=function(e){var t=e.toggleVisibleMenu,a=ae();return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{position:"fixed",className:a.appBar},r.a.createElement(Y.a,{className:a.toolbar__item},r.a.createElement($.a,{className:a.menuBurger,edge:"start",color:"inherit","aria-label":"menu",onClick:t},r.a.createElement(te.a,null)),r.a.createElement(Y.a,null,r.a.createElement(x.a,{variant:"h5",color:"inherit"},"News")))))},re=a(126),ie=a(307),oe=a(297),ue=a(298),ce=a(290),le=a(291),se=a(292),me=a(293),de=a(294),pe=a(260),fe=r.a.memo((function(){return r.a.createElement("div",null,r.a.createElement(pe.a,{size:"small",color:"primary"},"Learn More"))})),be=(a(165),a(40)),Ee=a.n(be),ge=(a(166),r.a.memo((function(e){var t=e.date,a=Ee()(t).calendar();return r.a.createElement("div",null,r.a.createElement(x.a,null,a))}))),ve=a(123),he=a.n(ve),qe=a(124),ye=function(){return r.a.createElement(qe.a,{speed:2,width:378,height:487,viewBox:"0 0 378 487",backgroundColor:"#f2f2f2",foregroundColor:"#ecebeb"},r.a.createElement("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"378",height:"200"}),r.a.createElement("rect",{x:"16",y:"216",rx:"5",ry:"5",width:"347",height:"121"}),r.a.createElement("rect",{x:"8",y:"353",rx:"5",ry:"5",width:"363",height:"28"}))},Se=r.a.memo((function(e){var t=e.title,a=e.description,n=e.urlToImage,i=e.date,o=e.sourceName,u=e.url;return e.pageIsLoading?r.a.createElement(ye,null):r.a.createElement("div",{className:"root card"},r.a.createElement(ce.a,null,r.a.createElement(le.a,null,n?r.a.createElement(se.a,{className:"media",style:{backgroundPosition:"center"},image:n}):r.a.createElement(se.a,{className:"media",image:he.a}),r.a.createElement(me.a,null,r.a.createElement(x.a,{gutterBottom:!0,variant:"h5",component:"h2"},t),r.a.createElement(x.a,{className:"size",variant:"body2",color:"textSecondary",component:"p"},a))),r.a.createElement(de.a,{className:"card-actions"},r.a.createElement(fe,{url:u}),r.a.createElement(x.a,{className:"source-name"},o),r.a.createElement(ge,{date:i}))))})),Oe=a(37),xe=(a(167),r.a.memo((function(e){for(var t=e.pageSize,a=e.totalResults,n=e.currentPage,i=e.portionSize,o=void 0===i?4:i,u=Object(I.b)(),c=r.a.useCallback((function(e){M(e,t)(u)}),[t,u]),l=Math.ceil(a/t),s=[],m=1;m<=l;m++)s.push(m);var d=Math.ceil(l/o),p=r.a.useState(1),f=Object(h.a)(p,2),b=f[0],E=f[1],g=(b-1)*o+1,v=b*o;return r.a.useEffect((function(){window.scrollTo(0,0)}),[n]),r.a.createElement("div",{className:"pagination"},b>1&&r.a.createElement(pe.a,{variant:"outlined",color:"primary",onClick:function(){E(b-1)}},"PREV"),s.filter((function(e){return e>=g&&e<=v})).map((function(e,t){return r.a.createElement(Oe.c,{key:"".concat(e,"_").concat(t),to:"/news?page=".concat(e),style:{textDecoration:"none"}},r.a.createElement(pe.a,{variant:n===e?"contained":"outlined",onClick:function(){c(e)},key:"".concat(e,"_").concat(t)},e))})),d>b&&r.a.createElement(pe.a,{variant:"outlined",color:"primary",onClick:function(){E(b+1)}},"NEXT"))}))),_e=a(295),Ne=(a(169),function(e){return e.loading?r.a.createElement("div",{className:"circular"},r.a.createElement(_e.a,{size:75})):null}),we=(a(170),a(296)),Te=r.a.memo((function(e){var t=e.filterBy,a=Object(I.b)(),n=function(e){a(function(e){return{type:"SET_FILTER",filterBy:e}}(e))};return r.a.createElement(we.a,{color:"primary","aria-label":"outlined primary button group"},r.a.createElement(pe.a,{onClick:function(){return n("all")},variant:"all"===t?"contained":"outlined"},"\u0412\u0441\u0435"),r.a.createElement(pe.a,{onClick:function(){return n("today")},variant:"today"===t?"contained":"outlined"},"\u0421\u0435\u0433\u043e\u0434\u043d\u044f"),r.a.createElement(pe.a,{onClick:function(){return n("yesterday")},variant:"yesterday"===t?"contained":"outlined"},"\u0412\u0447\u0435\u0440\u0430"))})),je=a(82),ke=a.n(je),Ie=r.a.memo((function(){var e=function(e,t){switch(t){case"all":return e;case"today":return ke()(e,(function(e){return Ee()(e.publishedAt).calendar().toLowerCase().indexOf("\u0412\u0447\u0435\u0440\u0430".toLowerCase())}));case"yesterday":return ke()(e,(function(e){return Ee()(e.publishedAt).calendar().toLowerCase().indexOf("\u0441\u0435\u0433\u043e\u0434\u043d\u044f".toLowerCase())}));default:return e}},t=Object(I.c)((function(t){var a=t.news,n=t.filterReducer;return{items:e(a.items,n.filterBy),currentPage:a.currentPage,filterBy:n.filterBy,pageSize:a.pageSize,loading:a.loading,totalResults:a.totalResults,pageIsLoading:a.pageIsLoading}})),a=t.items,n=t.pageSize,i=t.loading,o=t.totalResults,u=t.currentPage,c=t.filterBy,l=t.pageIsLoading;return r.a.createElement(oe.a,{fixed:!0,maxWidth:!1},r.a.createElement(Ne,{loading:i}),r.a.createElement("div",{className:"root"},r.a.createElement("main",{className:"content"},r.a.createElement(xe,{items:a,currentPage:u,pageSize:n,totalResults:o,filterBy:c}),!1===i&&r.a.createElement(Te,{filterBy:c}),r.a.createElement(ue.a,{container:!0,spacing:4,style:{width:"100%",textAlign:"center",margin:0}},a.map((function(e,t){return r.a.createElement(ue.a,{key:"".concat(e,"_").concat(t),item:!0,xs:12,sm:12,md:6,lg:4,xl:3},r.a.createElement("a",{style:{textDecoration:"none"},rel:"noopener noreferrer",target:"_blank",href:e.url},r.a.createElement(Se,{sourceName:e.source.name,date:e.publishedAt,key:"".concat(e,"_").concat(t),title:e.title,description:e.description,urlToImage:e.urlToImage,pageIsLoading:l})))}))),r.a.createElement(xe,{items:a,currentPage:u,pageSize:n,totalResults:o}))))})),ze=a(308),Le=a(304),Pe=a(312),Re=a(305),Ae=a(306),Be=a(299),Ce=a(300),Me=a(301),Ve=a(302),De=Object(O.a)((function(e){return{root:{display:"flex",zIndex:1},drawer:Object(q.a)({width:170,maxWidth:200,flexShrink:0},e.breakpoints.down("767"),{display:"none"}),active:{fontWeight:"bold",color:"#fe5f1e"},drawerPaper:{maxWidth:200,width:170},drawerContainer:{flexWrap:"wrap"}}})),Ge=r.a.memo((function(e){var t=e.visibleMenu,a=e.sortRef,i=e.setVisibleMenu,o=e.currentPage,u=e.pageSize,c=[{listIcon:r.a.createElement(Be.a,null),listText:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",listPath:"/news?page=".concat(o)},{listIcon:r.a.createElement(Ce.a,null),listText:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",listPath:"/settings"},{listIcon:r.a.createElement(Me.a,null),listText:"\u041f\u043e\u043c\u043e\u0449\u044c",listPath:"/help"},{listIcon:r.a.createElement(Ve.a,null),listText:"\u041e \u043d\u0430\u0441",listPath:"/AboutUs"}],l=De(),s=Object(n.useState)(),m=Object(h.a)(s,2),d=m[0],p=m[1],f=Object(I.b)();return r.a.createElement("div",{className:l.root},r.a.createElement(S.a,null),r.a.createElement(Q.a,{component:"div"},r.a.createElement(ze.a,{ref:a,className:t?l.drawerPaper:l.drawer,variant:"permanent"},r.a.createElement(Y.a,null),r.a.createElement("div",{className:l.drawerContainer},r.a.createElement(Le.a,null,c.map((function(e,t){return r.a.createElement(Pe.a,{onClick:function(){return function(e){p(e),0===e&&M(o,u)(f),i(!1)}(t)},button:!0,key:"".concat(e,"_").concat(t),component:Oe.b,to:e.listPath},r.a.createElement(Re.a,null,e.listIcon),r.a.createElement(Ae.a,{className:d===t?l.active:"",primary:e.listText}))})))))))})),Fe=a(125),Ue=Object(O.a)((function(e){return{root:{display:"flex",fontSize:"1.4rem"},content:Object(q.a)({width:"100%",flexGrow:1,paddingTop:e.spacing(9),padding:e.spacing(1),paddingLeft:e.spacing(2)},e.breakpoints.down("767"),{paddingLeft:e.spacing(2)})}}));var We=function(){var e=Ue(),t=r.a.useState(!1),a=Object(h.a)(t,2),n=a[0],i=a[1],o=r.a.useRef(),u=Object(I.b)(),c=Object(y.f)(),l=r.a.useCallback((function(){i(!n)}),[n]),s=Object(I.c)((function(e){var t=e.news,a=e.theme,n=e.filterReducer;return{pageSize:t.pageSize,currentPage:t.currentPage,darkMode:a.darkMode,fontSizeValue:a.fontSizeValue,filterBy:n.filterBy}})),m=s.pageSize,d=s.currentPage,p=s.darkMode,f=s.fontSizeValue,b=s.filterBy,E=r.a.useState([]),g=Object(h.a)(E,2);g[0],g[1],r.a.useEffect((function(){var e=Fe.parse(c.location.search.substr(1)),t=d;e.page&&(t=Number(e.page)),function(e,t){return function(){var a=Object(R.a)(P.a.mark((function a(n){var r;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n(F(!0)),a.next=4,B.a.get("".concat(C,"page=").concat(e,"&pageSize=").concat(t));case 4:r=a.sent,n(V(r.data.articles)),n(G(r.data.totalResults)),n(D(e)),n(F(!1)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.error(a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(t,m)(u)}),[m,u]),r.a.useEffect((function(){c.push({pathname:"/news",search:"?page=".concat(d)})}),[c,d]);var v=Object(re.a)({palette:{type:p?"dark":"light"},typography:{htmlFontSize:10*f}});return r.a.createElement("div",{className:e.root},r.a.createElement(ie.a,{theme:v},r.a.createElement(S.a,null),r.a.createElement(ne,{toggleVisibleMenu:l,visibleMenu:n}),r.a.createElement(Ge,{currentPage:d,pageSize:m,dispatch:u,sortRef:o,visibleMenu:n,setVisibleMenu:i,filterBy:b}),r.a.createElement("div",{className:e.content},r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/news",render:function(){return r.a.createElement(Ie,{currentPage:d})},exact:!0}),r.a.createElement(y.a,{path:"/settings",render:function(){return r.a.createElement(Z,{pageSize:m,fontSizeValue:f})},exact:!0}),r.a.createElement(y.a,{path:"/help",component:X,exact:!0}),r.a.createElement(y.a,{path:"/AboutUs",render:function(){return r.a.createElement(J,{darkMode:p})},exact:!0}),r.a.createElement(y.a,{render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}})))))};v.a.render(r.a.createElement(Oe.a,null,r.a.createElement(I.a,{store:E},r.a.createElement(We,null))),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.ccdd6da5.chunk.js.map