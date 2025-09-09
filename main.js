// Legacy Search Capital — production JS
(function(){
  // Current year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Ripple on buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('pointerdown', (e) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const r = document.createElement('span');
      r.className = 'ripple';
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      r.style.width = r.style.height = size + 'px';
      r.style.left = (e.clientX - rect.left - size/2) + 'px';
      r.style.top = (e.clientY - rect.top - size/2) + 'px';
      btn.appendChild(r);
      setTimeout(()=>r.remove(), 600);
    }, {passive:true});
  });

  // Scroll reveal
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((ent)=>{
      if(ent.isIntersecting){
        ent.target.classList.add('is-visible');
        io.unobserve(ent.target);
      }
    });
  }, {threshold:0.18});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
})();
