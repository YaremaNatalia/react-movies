"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[983],{982:function(t,e,n){n.d(e,{O:function(){return m}});n(791);var r="MoviesList_movieList__8BnEE",a=n(689),c=n(87),s="MovieCard_movieLink__+HjyM",i="MovieCard_movieCardImg__ViEeF",o="MovieCard_movieCardInfo__we+78",u="MovieCard_movieCardTitle__EpyYN",p=n(390),f=n(138),v=n(184),d=function(t){var e=t.poster_path,n=t.title,r=t.id,d=(0,a.TH)();return(0,v.jsx)(c.rU,{className:s,state:{from:d},to:"/movies/".concat(r),children:(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{className:i,src:e?"".concat(p.pB).concat(e):f,alt:n}),(0,v.jsx)("div",{className:o,children:(0,v.jsx)("p",{className:u,children:n})})]})})},m=function(t){var e=t.movies;return(0,v.jsx)("ul",{className:r,children:e.map((function(t){var e=t.id,n=t.poster_path,r=t.title;return(0,v.jsx)(d,{poster_path:n,title:r,id:e},e)}))})}},983:function(t,e,n){n.r(e);var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),o=n(596),u=n(950),p=n(982),f=n(390),v=n(184);e.default=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],d=(0,i.useState)(!1),m=(0,a.Z)(d,2),h=m[0],l=m[1],_=(0,i.useState)(null),x=(0,a.Z)(_,2),w=x[0],g=x[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var e,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(!0),t.next=4,(0,f.wr)();case 4:e=t.sent,n=e.results,c(n),l(!1),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),g(t.t0.message),o.Am.error(t.t0.message);case 14:return t.prev=14,l(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,10,14,17]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{className:"homePageTitle",children:"Trending today"}),w&&(0,v.jsxs)("p",{className:"errorMessage",children:["Whoops, something went wrong: ",w]}),n.length>0&&(0,v.jsx)(p.O,{movies:n}),h&&(0,v.jsx)(u.a,{})]})}},390:function(t,e,n){n.d(e,{HI:function(){return d},Hx:function(){return l},Y5:function(){return m},pB:function(){return f},uV:function(){return h},wr:function(){return v}});var r=n(861),a=n(757),c=n.n(a),s=n(243),i="b77fdf4e8642f590f33f1ce34d9000b8",o="https://api.themoviedb.org/3",u="".concat(o,"/trending/movie/day"),p="".concat(o,"/search/movie"),f="https://image.tmdb.org/t/p/w500",v=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(u,"?api_key=").concat(i));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(p,"?api_key=").concat(i,"&query=").concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},138:function(t,e,n){t.exports=n.p+"static/media/not_found.6a99420175992421c511.jpg"}}]);
//# sourceMappingURL=983.38575641.chunk.js.map