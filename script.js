(function(){
var sks=document.querySelectorAll('.sk');
function fill(el){el.classList.remove('in');void el.offsetWidth;el.classList.add('in');}
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){fill(e.target);io.unobserve(e.target);}});},{threshold:.4});
  sks.forEach(function(s){io.observe(s);});
}else{sks.forEach(function(s){s.classList.add('in');});}
sks.forEach(function(s){
  function go(){fill(s);s.classList.toggle('hot');}
  s.addEventListener('click',go);
  s.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();go();}});
});
document.querySelectorAll('.proj').forEach(function(p){
  p.addEventListener('click',function(){p.classList.toggle('lift');});
});
document.addEventListener('pointerdown',function(e){
  var r=document.createElement('div');r.className='rip';r.style.left=e.clientX+'px';r.style.top=e.clientY+'px';
  document.body.appendChild(r);setTimeout(function(){r.remove();},750);
});
})();

(function(){
var mb=document.getElementById('mb'),sh=document.getElementById('sheet');
function tog(o){var open=(o===undefined)?sh.hidden:o;sh.hidden=!open;mb.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':'';}
mb.addEventListener('click',function(){tog();});
sh.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){tog(false);});});
document.addEventListener('keydown',function(e){if(e.key==='Escape')tog(false);});
})();

(function(){
var P=[["#e2602f","#eeb23c"],["#7c5cff","#38bdf8"],["#0d9488","#a3e635"],["#db2777","#fb923c"],["#2563eb","#22d3ee"],["#d97706","#f43f5e"]],i=0,root=document.documentElement;
var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
document.addEventListener('click',function(e){
  i=(i+1)%P.length;
  root.style.setProperty('--acc',P[i][0]);root.style.setProperty('--acc2',P[i][1]);
  if(rm)return;
  var w=document.createElement('div');w.className='wash';
  w.style.background='radial-gradient(circle at '+e.clientX+'px '+e.clientY+'px,'+P[i][0]+' 0%,'+P[i][1]+'55 35%,transparent 70%)';
  document.body.appendChild(w);setTimeout(function(){w.remove();},1000);
});
})();
