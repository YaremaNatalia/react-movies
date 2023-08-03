"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[454],{454:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(861),a=n(439),i=n(757),s=n.n(i),c=n(791),o=n(596),u=n(950),v=n(689),_=n(87),l="ButtonBack_btnBack__tjozC",m=n(184),p=function(){return(0,m.jsx)("button",{type:"button",className:l,children:"GoBack"})},f=n(390),d=n(138),h=n(93),x=(0,c.lazy)((function(){return n.e(631).then(n.bind(n,631))})),g=(0,c.lazy)((function(){return n.e(642).then(n.bind(n,642))})),w=function(){var e,t,n=(0,c.useState)(null),i=(0,a.Z)(n,2),l=i[0],w=i[1],P=(0,c.useState)(!1),Z=(0,a.Z)(P,2),j=Z[0],k=Z[1],I=(0,c.useState)(null),b=(0,a.Z)(I,2),y=b[0],N=b[1],T=(0,v.UO)().movieId,L=(0,v.TH)(),W=(0,c.useRef)(null!==(e=null===(t=L.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");(0,c.useEffect)((function(){if(T){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,f.Y5)(T);case 4:t=e.sent,w(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),N(e.t0.message),o.Am.error(e.t0.message);case 12:return e.prev=12,k(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[T]);var C=null!==l&&void 0!==l?l:{},A=C.title,B=C.release_date,M=C.poster_path,O=C.vote_average,E=C.overview,z=C.genres,H=B?B.split("-")[0]:"";return(0,m.jsxs)("div",{children:[y&&(0,m.jsxs)("p",{className:"errorMessage",children:["Whoops, something went wrong: ",y]}),j&&(0,m.jsx)(u.a,{}),l&&(0,m.jsxs)("div",{className:h.Z.container,children:[(0,m.jsx)(_.rU,{to:W.current,children:(0,m.jsx)(p,{})}),(0,m.jsxs)("div",{className:h.Z.containerMovieCard,children:[(0,m.jsxs)("div",{className:h.Z.movieWrap,children:[(0,m.jsx)("img",{className:h.Z.movieImg,src:M?"".concat(f.pB).concat(M):d,alt:A}),(0,m.jsxs)("div",{className:h.Z.movieInfoWrap,children:[(0,m.jsxs)("h1",{className:h.Z.movieTitle,children:[A," (",H,")"]}),(0,m.jsxs)("h2",{className:h.Z.moviePretitle,children:["User score: ",Math.round(10*O),"%"]}),(0,m.jsxs)("p",{className:h.Z.movieText,children:["Overview ",(0,m.jsx)("br",{})," ",E]}),(0,m.jsx)("h2",{className:h.Z.moviePretitle,children:"Genres:"}),(0,m.jsx)("p",{className:h.Z.movieText,children:z.map((function(e){return e.name})).join(" ")})]})]}),(0,m.jsx)("h2",{className:h.Z.moviePretitle,children:"Additional information"}),(0,m.jsxs)("div",{className:h.Z.containerLink,children:[(0,m.jsx)(_.OL,{to:"cast",className:h.Z.linkItem,children:"Cast"}),(0,m.jsx)(_.OL,{to:"reviews",className:h.Z.linkItem,children:"Reviews"})]}),(0,m.jsx)("div",{children:(0,m.jsx)(c.Suspense,{fallback:(0,m.jsx)(u.a,{}),children:(0,m.jsxs)(v.Z5,{children:[(0,m.jsx)(v.AW,{path:"cast",element:(0,m.jsx)(x,{})}),(0,m.jsx)(v.AW,{path:"reviews",element:(0,m.jsx)(g,{})})]})})})]})]})]})}},390:function(e,t,n){n.d(t,{HI:function(){return m},Hx:function(){return d},Y5:function(){return p},pB:function(){return _},uV:function(){return f},wr:function(){return l}});var r=n(861),a=n(757),i=n.n(a),s=n(243),c="b77fdf4e8642f590f33f1ce34d9000b8",o="https://api.themoviedb.org/3",u="".concat(o,"/trending/movie/day"),v="".concat(o,"/search/movie"),_="https://image.tmdb.org/t/p/w500",l=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"?api_key=").concat(c));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(v,"?api_key=").concat(c,"&query=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(c));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(c));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(c));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},93:function(e,t){t.Z={textError:"Page_textError__hlQL6",container:"Page_container__27Iu9",containerMovieCard:"Page_containerMovieCard__awdYE",movieImg:"Page_movieImg__ThOQM",movieWrap:"Page_movieWrap__BHxHt",movieInfoWrap:"Page_movieInfoWrap__4yGPF",movieTitle:"Page_movieTitle__-p4sG",moviePretitle:"Page_moviePretitle__arWLI",containerLink:"Page_containerLink__yZCQx",movieText:"Page_movieText__h2Ev-",linkItem:"Page_linkItem__Fn4OL","castPage\u0421ontainer":"Page_castPage\u0421ontainer__0cEVw",castTitle:"Page_castTitle__UztKX",castList:"Page_castList__WPuYY",castItem:"Page_castItem__dKeFz",castImg:"Page_castImg__6cMUL",castInfo:"Page_castInfo__FPWZO",reviewsPageContainer:"Page_reviewsPageContainer__R22l8",reviewsTitle:"Page_reviewsTitle__DPdB2",reviewsList:"Page_reviewsList__t6bR9",reviewsItem:"Page_reviewsItem__a0oA-",reviewsAutor:"Page_reviewsAutor__JlJck",reviewsText:"Page_reviewsText__2ZA32"}},138:function(e,t,n){e.exports=n.p+"static/media/not_found.6a99420175992421c511.jpg"}}]);
//# sourceMappingURL=454.f8ae39c3.chunk.js.map