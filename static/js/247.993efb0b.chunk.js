"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{1247:function(t,n,e){e.r(n),e.d(n,{Cast:function(){return i}});var r=e(9439),a=e(7689),c=e(6528),u=e(2791),s=e(184),i=function(){var t=(0,a.UO)().movieId,n=(0,u.useState)(!1),e=(0,r.Z)(n,2),i=e[0],o=e[1],p=(0,u.useState)(!1),f=(0,r.Z)(p,2),h=f[0],v=f[1];return(0,u.useEffect)((function(){(0,c.zv)(t).then((function(t){return o(t)})).finally(v(!0))}),[t]),(0,s.jsx)(s.Fragment,{children:h&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"Cast"}),(0,s.jsx)("ul",{children:i.map((function(t){var n=t.id,e=t.name,r=t.profile_path,a=t.character,c="https://image.tmdb.org/t/p/w500".concat(r);return(0,s.jsxs)("li",{children:[r&&(0,s.jsx)("img",{src:c,width:"100",alt:e}),(0,s.jsxs)("p",{children:[" Name: ",e]}),(0,s.jsxs)("p",{children:["Character:",a]})]},n)}))})]})})}},6528:function(t,n,e){e.d(n,{NV:function(){return o},TP:function(){return p},fw:function(){return i},gL:function(){return h},zv:function(){return f}});var r=e(5861),a=e(4687),c=e.n(a),u=e(2388);u.Z.defaults.baseURL="https://www.themoviedb.org/3";var s="3fcb05b829685e6a45bc9aa7307d9bc9",i=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(s,"&page=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(n,e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(e,"&page=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.993efb0b.chunk.js.map