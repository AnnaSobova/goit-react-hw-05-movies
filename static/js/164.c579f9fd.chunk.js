"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[164],{2868:function(e,t,n){var r=n(184);t.Z=function(e){var t=e.onClick;return(0,r.jsx)("button",{type:"button",onClick:t,children:"Load more"})}},6528:function(e,t,n){n.d(t,{NV:function(){return s},TP:function(){return f},fw:function(){return o},gL:function(){return l},zv:function(){return p}});var r=n(5861),a=n(4687),u=n.n(a),c=n(2388),i="3fcb05b829685e6a45bc9aa7307d9bc9";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var e=(0,r.Z)(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i,"&page=").concat(t),{signal:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(n,"&page=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},6164:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(3433),a=n(9439),u=n(5705),c=n(2797),i=n(2007),o=n.n(i),s=n(184),f=c.Ry().shape({movieSearch:c.Z_().min(3,"Too short name!").max(20,"Too long name!").required()}),p=function(e){var t=e.onSubmit;return(0,s.jsx)(u.J9,{initialValues:{movieSearch:""},onSubmit:t,validatorSchema:f,children:function(e){var t=e.errors,n=e.touched;return(0,s.jsxs)(u.l0,{children:[(0,s.jsx)(u.gN,{name:"movieSearch",children:t.movieSearch&&n.movieSearch?(0,s.jsx)("div",{children:t.movieSearch}):null}),(0,s.jsx)("button",{type:"submit",children:" Search "})]})}})};p.propType={onSubmit:o().func.isRequired};var l=p,v=n(1087),h=function(e){var t=e.movies,n=e.state;return(0,s.jsx)("ul",{children:t.map((function(e){var t=e.title,r=e.id;return(0,s.jsx)("li",{children:(0,s.jsxs)(v.rU,{to:"".concat(r),state:n,children:[" ",t]})},r)}))})},d=h;h.propType={state:o().string.isRequired,id:o().string.isRequired,title:o().string.isRequired};var m=n(2868),g=n(2791),x=n(6528),b=n(7689),Z=function(){var e=(0,g.useState)({}),t=(0,a.Z)(e,2),n=t[0],u=t[1],c=(0,g.useState)(1),i=(0,a.Z)(c,2),o=i[0],f=i[1],p=(0,v.lr)(),h=(0,a.Z)(p,2),Z=h[0],S=h[1],k=(0,g.useState)([]),y=(0,a.Z)(k,2),w=y[0],j=y[1],_=(0,g.useState)(0),q=(0,a.Z)(_,2),C=q[0],R=q[1],T=Z.get("query"),U=(0,g.useState)(T||void 0),L=(0,a.Z)(U,2),N=L[0],V=L[1],E=(0,b.TH)();(0,g.useEffect)((function(){var e=new AbortController,t=e.signal;return T&&N?(V(T),N!==T&&j([]),N&&T&&(0,x.NV)(o,T,t).then((function(e){j((function(t){return[].concat((0,r.Z)(t),(0,r.Z)(e.results))})),R(e.total_pages)})).catch((function(e){console.log("Error:",e)})),function(){e.abort()}):(j([]),function(){e.abort()})}),[T,o,N,n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{search:N,onSubmit:function(e){j([]),f(1),R(0),u({}),S({query:e.movieSearch})}}),w.length>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{movies:w,state:{from:E}}),C!==o&&(0,s.jsx)(m.Z,{onClick:function(){f((function(e){return e+1}))}})]})]})}}}]);
//# sourceMappingURL=164.c579f9fd.chunk.js.map