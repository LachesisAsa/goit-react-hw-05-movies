"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[541],{2541:function(e,t,n){n.r(t);var r=n(5861),a=n(9439),c=n(7757),u=n.n(c),i=n(8866),s=n(3477),o=n(2791),p=n(7689),f=n(4390),l=n(184);t.default=function(){var e=(0,p.UO)().moviesId,t=(0,o.useState)([]),n=(0,a.Z)(t,2),c=n[0],h=n[1],v=(0,o.useState)(!1),d=(0,a.Z)(v,2),g=d[0],m=d[1],w=(0,o.useState)(!1),_=(0,a.Z)(w,2),x=_[0],b=_[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,b(!0),t.next=4,f.fT(e);case 4:n=t.sent,h(n),b(!1),t.next=14;break;case 9:throw t.prev=9,t.t0=t.catch(0),m(!0),b(!1),new Error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,l.jsxs)(l.Fragment,{children:[x&&(0,l.jsx)(i.a,{}),c.length>0&&(0,l.jsx)("ul",{children:c.map((function(e){var t=e.name,n=e.profile_path,r=e.character;return(0,l.jsxs)("li",{children:[(0,l.jsx)("p",{children:t}),(0,l.jsx)("img",{src:null!==n?"https://image.tmdb.org/t/p/w500/".concat(n):"https://www.bworldonline.com/wp-content/uploads/2022/04/cinema02_14-01.jpg",alt:t,width:"70",height:"100"}),(0,l.jsxs)("p",{children:["Character: ",r]})]},t)}))}),!x&&0===c.length&&(0,l.jsx)("p",{children:"We don't have any information for this movie"}),g&&(0,l.jsx)(s.P,{message:"Please reload page"})]})}},8866:function(e,t,n){n.d(t,{a:function(){return c}});var r=n(8402),a=n(184),c=function(){return(0,a.jsx)(r.Yt,{visible:!0,height:"200",width:"200",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{marginTop:100,marginLeft:400},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})}},4390:function(e,t,n){n.d(t,{JS:function(){return s},NO:function(){return l},Pg:function(){return o},fT:function(){return p},sR:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),u=n(3263),i="6ba36a748b2732ff7e412bd3bc6f6fd3";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n.map((function(e){return{title:e.title,id:e.id}})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,s,o,p,f,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,a=r.title,s=r.overview,o=r.poster_path,p=r.vote_average,f=r.genres,l=r.release_date,e.abrupt("return",{title:a,overview:s,poster_path:o,vote_average:p,genres:f,release_date:l});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast.map((function(e){return{name:e.name,profile_path:e.profile_path,character:e.character}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results.map((function(e){return{author:e.author,content:e.content}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r.map((function(e){return{title:e.title,id:e.id}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=541.7a20d120.chunk.js.map