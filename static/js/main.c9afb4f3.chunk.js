(this["webpackJsonptemplate-react-menu"]=this["webpackJsonptemplate-react-menu"]||[]).push([[0],{223:function(e,a,t){e.exports=t(410)},410:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(12),c=t.n(l),i=t(187),o=t(78),m=t(169),s=t(4),u=t(456),p=t(463),E=t(472),d=t(473),h=t(464),g=t(465),f=t(469),b=t(64),y=t(468),v=t(466),x=t(467),w=t(470),S=t(471),M=t(413),N=t(457),B=t(184),C=t.n(B),O=t(186),j=t.n(O),k=t(185),I=t.n(k),D=t(474),T=t(453),A=t(454),P=t(455),R=t(170),z=t.n(R),F=t(171),H=t.n(F),J=t(172),L=t.n(J),V=t(173),G=t.n(V),K=t(174),W=t.n(K),Y=t(88),X=t.n(Y),$=r.a.createElement("div",null,r.a.createElement(D.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(z.a,null)),r.a.createElement(A.a,{primary:"Dashboard"})),r.a.createElement(D.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(H.a,null)),r.a.createElement(A.a,{primary:"Orders"})),r.a.createElement(D.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(L.a,null)),r.a.createElement(A.a,{primary:"Customers"})),r.a.createElement(D.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(G.a,null)),r.a.createElement(A.a,{primary:"Reports"})),r.a.createElement(D.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(W.a,null)),r.a.createElement(A.a,{primary:"Integrations"}))),q=r.a.createElement("div",null,r.a.createElement(P.a,{inset:!0},"Saved reports"),r.a.createElement(D.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(X.a,null)),r.a.createElement(A.a,{primary:"Current month"})),r.a.createElement(D.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(X.a,null)),r.a.createElement(A.a,{primary:"Last quarter"})),r.a.createElement(D.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(X.a,null)),r.a.createElement(A.a,{primary:"Year-end sale"}))),U=t(48),Q=t(38);function Z(e){return r.a.createElement(b.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}function _(e,a){return{time:e,amount:a}}var ee=[_("00:00",0),_("03:00",300),_("06:00",600),_("09:00",800),_("12:00",1500),_("15:00",2e3),_("18:00",2400),_("21:00",2400),_("24:00",void 0)];function ae(){var e=Object(U.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null,"Today"),r.a.createElement(Q.d,null,r.a.createElement(Q.c,{data:ee,margin:{top:16,right:16,bottom:0,left:24}},r.a.createElement(Q.e,{dataKey:"time",stroke:e.palette.text.secondary}),r.a.createElement(Q.f,{stroke:e.palette.text.secondary},r.a.createElement(Q.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary}},"Sales ($)")),r.a.createElement(Q.b,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1}))))}function te(e){e.preventDefault()}var ne=Object(u.a)({depositContext:{flex:1}});function re(){var e=ne();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null,"Recent Deposits"),r.a.createElement(b.a,{component:"p",variant:"h4"},"$3,024.00"),r.a.createElement(b.a,{color:"textSecondary",className:e.depositContext},"on 15 March, 2019"),r.a.createElement("div",null,r.a.createElement(N.a,{color:"primary",href:"#",onClick:te},"View balance")))}var le=t(458),ce=t(462),ie=t(461),oe=t(459),me=t(460);function se(e,a,t,n,r,l){return{id:e,date:a,name:t,shipTo:n,paymentMethod:r,amount:l}}var ue=[se(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),se(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),se(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),se(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),se(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79)];function pe(e){e.preventDefault()}var Ee=Object(u.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));function de(){var e=Ee();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null,"Recent Orders"),r.a.createElement(le.a,{size:"small"},r.a.createElement(oe.a,null,r.a.createElement(me.a,null,r.a.createElement(ie.a,null,"Date"),r.a.createElement(ie.a,null,"Name"),r.a.createElement(ie.a,null,"Ship To"),r.a.createElement(ie.a,null,"Payment Method"),r.a.createElement(ie.a,{align:"right"},"Sale Amount"))),r.a.createElement(ce.a,null,ue.map((function(e){return r.a.createElement(me.a,{key:e.id},r.a.createElement(ie.a,null,e.date),r.a.createElement(ie.a,null,e.name),r.a.createElement(ie.a,null,e.shipTo),r.a.createElement(ie.a,null,e.paymentMethod),r.a.createElement(ie.a,{align:"right"},e.amount))})))),r.a.createElement("div",{className:e.seeMore},r.a.createElement(N.a,{color:"primary",href:"#",onClick:pe},"See more orders")))}function he(){return r.a.createElement(b.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(N.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var ge=Object(u.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(o.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function fe(){var e=ge(),a=r.a.useState(!0),t=Object(i.a)(a,2),n=t[0],l=t[1],c=Object(s.a)(e.paper,e.fixedHeight);return r.a.createElement("div",{className:e.root},r.a.createElement(p.a,null),r.a.createElement(h.a,{position:"absolute",className:Object(s.a)(e.appBar,n&&e.appBarShift)},r.a.createElement(g.a,{className:e.toolbar},r.a.createElement(v.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},className:Object(s.a)(e.menuButton,n&&e.menuButtonHidden)},r.a.createElement(C.a,null)),r.a.createElement(b.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Dashboard"),r.a.createElement(v.a,{color:"inherit"},r.a.createElement(x.a,{badgeContent:4,color:"secondary"},r.a.createElement(I.a,null))))),r.a.createElement(E.a,{variant:"permanent",classes:{paper:Object(s.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(v.a,{onClick:function(){l(!1)}},r.a.createElement(j.a,null))),r.a.createElement(y.a,null),r.a.createElement(f.a,null,$),r.a.createElement(y.a,null),r.a.createElement(f.a,null,q)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(w.a,{maxWidth:"lg",className:e.container},r.a.createElement(S.a,{container:!0,spacing:3},r.a.createElement(S.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(M.a,{className:c},r.a.createElement(ae,null))),r.a.createElement(S.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(M.a,{className:c},r.a.createElement(re,null))),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(M.a,{className:e.paper},r.a.createElement(de,null)))),r.a.createElement(d.a,{pt:4},r.a.createElement(he,null)))))}var be=function(){return r.a.createElement(fe,null)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null)),document.getElementById("root"))}},[[223,1,2]]]);
//# sourceMappingURL=main.c9afb4f3.chunk.js.map