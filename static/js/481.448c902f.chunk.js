"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[481],{982:function(e,t,r){r.d(t,{O:function(){return f}});r(791);var n="MoviesList_movieList__8BnEE",a=r(87),c="MovieCard_movieLink__+HjyM",o="MovieCard_movieCardImg__ViEeF",i="MovieCard_movieCardInfo__we+78",s="MovieCard_movieCardTitle__EpyYN",u=r(390),l=r(184),p=function(e){var t=e.poster_path,r=e.title,n=e.id,p=e.location,f=t||"<https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg>";return(0,l.jsx)(a.rU,{className:c,state:{from:p},to:"/movies/".concat(n),children:(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{className:o,src:"".concat(u.pB).concat(f),alt:r}),(0,l.jsx)("div",{className:i,children:(0,l.jsx)("p",{className:s,children:r})})]})})},f=function(e){var t=e.movies,r=e.location;return(0,l.jsx)("ul",{className:n,children:t.map((function(e){var t=e.id,n=e.poster_path,a=e.title;return(0,l.jsx)(p,{poster_path:n,title:a,id:t,location:r},t)}))})}},481:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var n,a=r(861),c=r(439),o=r(757),i=r.n(o),s=r(950),u=r(982),l="SearchForm_searchForm__NsJpF",p="SearchForm_searchFormButton__Zv-9i",f="SearchForm_searchFormButtonLabel__0xEFI",m="SearchForm_searchFormInput__3mF-P",v=r(596),h=r(791),d=["title","titleId"];function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function x(e,t){var r=e.title,a=e.titleId,c=g(e,d);return h.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},c),void 0===r?h.createElement("title",{id:a},"search"):r?h.createElement("title",{id:a},r):null,n||(n=h.createElement("path",{d:"M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"})))}var w=h.forwardRef(x),b=(r.p,r(184)),y=function(e){var t=e.onSubmit,r=(0,h.useState)(""),n=(0,c.Z)(r,2),a=n[0],o=n[1];return(0,b.jsxs)("form",{className:l,onSubmit:function(e){if(e.preventDefault(),""===a.trim())return v.Am.warning("Oops, no value...");t(a),o("")},children:[(0,b.jsxs)("button",{type:"submit",className:p,children:[(0,b.jsx)("span",{className:f,children:"Search"}),(0,b.jsx)(w,{width:"28",height:"28"})]}),(0,b.jsx)("input",{className:m,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter movie name...",required:!0,value:a,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})},j=r(87),k=r(689),Z=r(390),S=function(){var e=(0,j.lr)(),t=(0,c.Z)(e,2),r=t[0],n=t[1],o=r.get("query"),l=(0,k.TH)(),p=(0,h.useState)([]),f=(0,c.Z)(p,2),m=f[0],d=f[1],_=(0,h.useState)(!1),g=(0,c.Z)(_,2),x=g[0],w=g[1],S=(0,h.useState)(null),O=(0,c.Z)(S,2),F=O[0],N=O[1];return(0,h.useEffect)((function(){if(o){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,Z.HI)(o);case 4:if(t=e.sent,0!==(r=t.results).length&&r){e.next=8;break}return e.abrupt("return",v.Am.error("Sorry movies not found..."));case 8:d(r),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),N(e.t0.message),v.Am.error(e.t0.message);case 15:return e.prev=15,w(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,11,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}}),[o]),(0,b.jsxs)("div",{children:[(0,b.jsx)(y,{onSubmit:function(e){n({query:e}),d([])}}),F&&(0,b.jsxs)("p",{className:"errorMessage",children:["Whoops, something went wrong: ",F]}),x&&(0,b.jsx)(s.a,{}),m.length>0&&(0,b.jsx)(u.O,{movies:m,location:l})]})}},390:function(e,t,r){r.d(t,{HI:function(){return m},Hx:function(){return d},Y5:function(){return v},pB:function(){return p},uV:function(){return h},wr:function(){return f}});var n=r(861),a=r(757),c=r.n(a),o=r(243),i="b77fdf4e8642f590f33f1ce34d9000b8",s="https://api.themoviedb.org/3",u="".concat(s,"/trending/movie/day"),l="".concat(s,"/search/movie"),p="https://image.tmdb.org/t/p/w500",f=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"?api_key=").concat(i));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(l,"?api_key=").concat(i,"&query=").concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(i));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(i));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=481.448c902f.chunk.js.map