import{j as e,a as x,L as d,r as i,b as j}from"./index-3995d792.js";const v=({onSubmit:s})=>e.jsxs("form",{onSubmit:a=>s(a),children:[e.jsx("input",{className:"input",name:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies..."}),e.jsx("button",{children:"Search"})]}),S=({movies:s})=>{const a=x();return e.jsx("ul",{children:s.map(({title:o,id:r})=>e.jsx("li",{children:e.jsx(d,{to:`${r}`,state:{from:a},children:o})},r))})},b="394f7f7b9c091369c76717b88c1e71f3",g=()=>{const[s,a]=i.useState([]),[o,r]=j(),c=o.get("name")??"",m=async t=>{try{const h=(await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${b}&query=${t}&include_adult=false&language=en-US`)).json()).results.map(({title:p,id:f})=>({title:p,id:f}));a(h)}catch(n){console.error(n)}};i.useEffect(()=>{if(c){const t=c.split(" ").join("%20");m(t)}},[o]);const u=t=>{t.preventDefault();const n=t.currentTarget.elements.input.value.trim();r(n!==""?{name:n}:{})};return e.jsxs("main",{children:[e.jsx(v,{onSubmit:u}),o&&e.jsx(S,{movies:s})]})};export{g as default};
