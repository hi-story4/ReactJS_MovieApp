(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(24)},24:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(1),c=a.n(r),o=a(5),i=a(0),m=a(6),l=a.n(m),s=a(7),u=a(3),v=a(4),_=a.n(v);var d=function(e){var t=e.id,a=e.coverImg,n=e.title,r=e.genres,i=e.year,m=e.summary;return c.a.createElement("div",{className:_.a.movie},c.a.createElement("img",{src:a,alt:n,className:_.a.movie_img}),c.a.createElement("div",null,c.a.createElement("h2",{className:_.a.movie_title},c.a.createElement(o.b,{to:"/movie/".concat(t)},n)),c.a.createElement("div",{className:_.a.movie_year},i),c.a.createElement("div",{className:_.a.movie_summary},m.length>235?"".concat(m.slice(0,235),"..."):m)),c.a.createElement("ul",{className:_.a.movie_genres},r.map(function(e){return c.a.createElement("li",{key:e},e)})))},p=a(8),f=a.n(p);var E=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)([]),i=Object(u.a)(o,2),m=i[0],v=i[1],_=function(){var e=Object(s.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,v(t.data.movies),n(!1);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)(function(){_()},[]),c.a.createElement("div",{className:f.a.container},a?c.a.createElement("div",null,c.a.createElement("span",{className:f.a.loader},"Loading...")):c.a.createElement("div",{className:f.a.movies},console.log(m),m.map(function(e){return c.a.createElement(d,{key:e.id,id:e.id,coverImg:e.medium_cover_image,title:e.title,genres:e.genres,year:e.year,summary:e.summary})})))};var y=function(){var e=Object(i.g)().id,t=Object(r.useState)([]),a=Object(u.a)(t,2),n=a[0],m=a[1],v=function(){var t=Object(s.a)(l.a.mark(function t(){var a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:a=t.sent,m(a.data.movie.description_full),""==n&&m("No Summary...");case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)(function(){v()},[]),c.a.createElement("div",null,c.a.createElement("h1",{style:{color:"#035397",display:"flex"}},"Summary"),c.a.createElement(o.b,{to:"/",exact:!0,style:{textDecoration:"none"}},c.a.createElement("p",{style:{color:"skyblue",display:"flex"}},"Home")),c.a.createElement("div",{style:{marginTop:50,fontSize:20,color:"black"}},n))};var g=function(){return c.a.createElement(o.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"".concat("/ReactJS_MovieApp","/movie/:id"),element:c.a.createElement(y,null)}),c.a.createElement(i.a,{path:"".concat("/ReactJS_MovieApp","/"),element:c.a.createElement(E,null)})))},b=document.getElementById("root");Object(n.createRoot)(b).render(c.a.createElement(g,null))},4:function(e,t,a){e.exports={movie:"Movie_movie__25for",movie_img:"Movie_movie_img__REZGD",movie_title:"Movie_movie_title__1rhRc",movie_year:"Movie_movie_year__3lCz7",movie_genres:"Movie_movie_genres__3isEx"}},8:function(e,t,a){e.exports={movies:"Home_movies__gZbrP",loader:"Home_loader__x-dEv",container:"Home_container__2jdYY"}}},[[11,2,1]]]);
//# sourceMappingURL=main.5ac428e1.chunk.js.map