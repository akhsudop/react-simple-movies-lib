import{u as d,r as i,j as e,L as o,O as h}from"./index-3995d792.js";import{I as p}from"./IdContext-d39f2645.js";const j=()=>{const{movieId:r}=d(),[t,n]=i.useState({}),l=async()=>{try{const s=await(await fetch(`https://api.themoviedb.org/3/movie/${r}?api_key=394f7f7b9c091369c76717b88c1e71f3&language=en-US`)).json();n({title:s.title,overview:s.overview,popularity:s.popularity,genres:s.genres.map(({name:c})=>c+" "),poster:s.poster_path,year:new Date(s.release_date).getFullYear()})}catch(a){console.error(a)}};return i.useEffect(()=>{l()},[]),e.jsxs("main",{children:[e.jsxs("div",{children:[e.jsx("img",{src:`https://image.tmdb.org/t/p/w500${t.poster}`,alt:"movie poster",style:{width:365,height:520}}),e.jsxs("div",{children:[e.jsxs("h2",{children:[t.title," (",t.year,")"]}),e.jsx("h4",{children:"Overview"}),e.jsx("p",{children:t.overview}),e.jsx("h4",{children:"Genres"}),e.jsx("p",{children:t.genres})]})]}),e.jsx("h4",{children:"Additional information"}),e.jsxs("ul",{children:[e.jsx(o,{to:"cast",children:e.jsx("li",{children:"Cast"})}),e.jsx(o,{to:"reviews",children:e.jsx("li",{children:"Reviews"})})]}),e.jsx(p.Provider,{value:{id:r},children:e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Loading subpage..."}),children:e.jsx(h,{})})})]})};export{j as default};
