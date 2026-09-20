document.getElementById("year").textContent = new Date().getFullYear();
const links=[...document.querySelectorAll("nav a")];
const sections=[...document.querySelectorAll("main section[id]")];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      links.forEach(a=>a.style.color=a.getAttribute("href")==="#"+e.target.id?"#0d625c":"");
    }
  });
},{rootMargin:"-35% 0px -60% 0px"});
sections.forEach(s=>observer.observe(s));