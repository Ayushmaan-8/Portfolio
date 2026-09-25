const root = document.documentElement;
    window.addEventListener('pointermove', e => {
      const x = (e.clientX / innerWidth - .5) * 16;
      const y = (e.clientY / innerHeight - .5) * 12;
      root.style.setProperty('--mx', `${x}px`); root.style.setProperty('--my', `${y}px`);
    }, {passive:true});
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), {threshold:.12});
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
