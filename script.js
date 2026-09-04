const nav=document.querySelector('.nav-wrap');
const menu=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');

window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>20));
menu.addEventListener('click',()=>links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{
  glow.style.left=e.clientX+'px'; glow.style.top=e.clientY+'px';
});
