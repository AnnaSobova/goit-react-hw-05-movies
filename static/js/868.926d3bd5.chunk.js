"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[868],{6528:function(e,t,n){n.d(t,{NV:function(){return o},TP:function(){return p},fw:function(){return u},gL:function(){return l},zv:function(){return d}});var r=n(5861),a=n(4687),c=n.n(a),i=n(2388),s="3fcb05b829685e6a45bc9aa7307d9bc9";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day?api_key=".concat(s,"&page=").concat(t),{signal:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?api_key=".concat(s,"&query=").concat(n,"&page=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},868:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r,a=n(9439),c=n(6528),i=n(168),s=n(3237).Z.div(r||(r=(0,i.Z)(["\n    display:flex;\n    gap:10px;\n    &>div{\n        max-width:400px;\n    }\n"]))),u=n(2791),o=n(7689),p=n(1523),d=n(1087),l=n(4324),h=n(184),f=function(){var e,t,n=(0,u.useState)({}),r=(0,a.Z)(n,2),i=r[0],f=r[1],v=(0,u.useState)(!1),x=(0,a.Z)(v,2),g=x[0],m=x[1],w=(0,o.UO)().movieId,j=null!==(e=null===(t=(0,o.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";(0,u.useEffect)((function(){(0,c.TP)(w).then((function(e){f(e.data),m(!0)}))}),[w]);var k=i.title,b=i.poster_path,y=i.release_date,Z=i.popularity,_=i.overview,U=i.genres,S="https://image.tmdb.org/t/p/w500".concat(b),C=new Date(y).getFullYear();return(0,h.jsxs)("div",{children:[g?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(d.rU,{to:j,children:[(0,h.jsx)(l.Kjp,{size:"10"}),"Back"]}),(0,h.jsxs)(s,{children:[(0,h.jsx)("img",{src:S,width:"300",alt:k}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h1",{children:[k," (",C,")"]}),(0,h.jsxs)("h2",{children:["Popularity: ",Math.round(Z)," "]}),(0,h.jsx)("h2",{children:"Owerview "}),(0,h.jsx)("p",{children:_}),(0,h.jsx)("h2",{children:"Genres"}),U.map((function(e){return(0,h.jsxs)("p",{children:[" ",e.name]},e.id)}))]})]}),(0,h.jsx)("hr",{}),(0,h.jsx)("p",{children:" Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(d.rU,{to:"cast",state:{from:j},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(d.rU,{to:"reviews",state:{from:j},children:"Reviews"})})]}),(0,h.jsx)("hr",{})]}):(0,h.jsx)(p.g4,{height:"80",width:"80",radius:"9",color:"#d7c62a",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),(0,h.jsx)(o.j3,{})]})}}}]);
//# sourceMappingURL=868.926d3bd5.chunk.js.map