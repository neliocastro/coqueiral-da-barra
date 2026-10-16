(function () {
  'use strict';
  var doc = document;
  doc.documentElement.classList.add('js');

  var WA = '5571992005271';
  var MSG = {
    pt: {
      base: 'Olá, Nélio! Vi o site Coqueiral da Barra e quero saber mais sobre os lotes.',
      lot: 'Olá, Nélio! Vi o site Coqueiral da Barra e quero saber mais sobre o Lote {n}.'
    },
    en: {
      base: 'Hello Nélio! I saw the Coqueiral da Barra website and I would like to know more about the lots.',
      lot: 'Hello Nélio! I saw the Coqueiral da Barra website and I would like to know more about Lot {n}.'
    }
  };

  function store(get, v) {
    try { return get ? localStorage.getItem('lang') : localStorage.setItem('lang', v); } catch (e) { return null; }
  }

  /* ---------- idioma ---------- */
  var current = 'pt';
  function setLang(lang) {
    current = lang;
    doc.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    var map = [
      ['data-en', null],
      ['data-en-alt', 'alt'],
      ['data-en-label', 'aria-label'],
      ['data-en-title', 'title']
    ];
    map.forEach(function (m) {
      doc.querySelectorAll('[' + m[0] + ']').forEach(function (el) {
        var key = 'pt_' + m[0].replace(/-/g, '_');
        if (!(key in el.dataset)) {
          el.dataset[key] = m[1] ? (el.getAttribute(m[1]) || '') : cloneHtml(el);
        }
        var val = lang === 'en' ? el.getAttribute(m[0]) : el.dataset[key];
        if (m[1]) { el.setAttribute(m[1], val); }
        else { setHtml(el, val); }
      });
    });
    doc.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    updateWa();
    doc.title = lang === 'en'
      ? 'Land for sale in Bahia, near the beach | Coqueiral da Barra'
      : 'Terreno à venda na Bahia, perto da praia | Coqueiral da Barra';
    store(false, lang);
  }
  /* guarda o HTML do texto, preservando o ícone de seta quando houver */
  function cloneHtml(el) {
    var arrow = el.querySelector('.arrow');
    if (arrow) { el.dataset.arrow = arrow.outerHTML; }
    var clone = el.cloneNode(true);
    var a = clone.querySelector('.arrow');
    if (a) { a.remove(); }
    return clone.innerHTML.trim();
  }
  function setHtml(el, html) {
    el.innerHTML = html + (el.dataset.arrow ? ' ' + el.dataset.arrow : '');
  }

  /* ---------- WhatsApp ---------- */
  function updateWa() {
    doc.querySelectorAll('[data-wa]').forEach(function (a) {
      var lot = a.dataset.waLot;
      var text = lot ? MSG[current].lot.replace('{n}', lot) : MSG[current].base;
      a.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(text);
      a.target = '_blank';
      a.rel = 'noopener';
    });
  }

  doc.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });
  var saved = store(true);
  var pref = saved || ((navigator.language || '').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en');
  if (pref === 'en') { setLang('en'); } else { updateWa(); }

  /* ---------- menu ---------- */
  var burger = doc.querySelector('.burger');
  var nav = doc.getElementById('menu');
  function closeMenu() { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { closeMenu(); } });
  doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeMenu(); } });

  var header = doc.querySelector('.site-header');
  var scrolled = false, ticking = false;
  function onScroll() {
    if (ticking) { return; }
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.pageYOffset;
      if ((y > 40) !== scrolled) { scrolled = y > 40; header.classList.toggle('scrolled', scrolled); }
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- revelar ao rolar ---------- */
  var items = doc.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- lightbox ---------- */
  var lb = doc.getElementById('lightbox');
  var lbImg = doc.getElementById('lb-img');
  doc.querySelectorAll('.g').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var img = btn.querySelector('img');
      lbImg.src = btn.dataset.full;
      lbImg.alt = img ? img.alt : '';
      if (lb.showModal) { lb.showModal(); } else { lb.setAttribute('open', ''); }
    });
  });
  lb.querySelector('.lb-close').addEventListener('click', function () { lb.close(); });
  lb.addEventListener('click', function (e) { if (e.target === lb) { lb.close(); } });

  /* ---------- vídeos (carrega só após o clique) ---------- */
  doc.querySelectorAll('.video').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = doc.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + btn.dataset.yt + '?autoplay=1&rel=0';
      f.title = btn.dataset.title;
      f.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture';
      f.allowFullscreen = true;
      var box = doc.createElement('div');
      box.className = 'video';
      box.appendChild(f);
      btn.replaceWith(box);
      f.focus();
    });
  });

  /* ---------- mapa (carrega só após o clique: sem cookies do Google antes disso) ---------- */
  doc.querySelectorAll('.map-facade').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = doc.createElement('iframe');
      f.src = btn.dataset.map;
      f.title = current === 'en' ? 'Map showing the position of the three lots' : 'Mapa com a posição dos três lotes';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      btn.replaceWith(f);
      f.focus();
    });
  });

  /* ---------- hero: carrega os slides 2 e 3 só depois do carregamento da página ---------- */
  function startHero() {
    var tpl = doc.getElementById('hero-extra');
    var box = doc.querySelector('.hero-slides');
    if (!tpl || !box || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { return; }
    var imgs = [];
    tpl.content.querySelectorAll('img').forEach(function (i) { imgs.push(i); });
    box.appendChild(tpl.content.cloneNode(true));
    var pending = box.querySelectorAll('.s2 img, .s3 img');
    var left = pending.length;
    function done() { left -= 1; if (left <= 0) { doc.querySelector('.hero').classList.add('is-playing'); } }
    pending.forEach(function (i) {
      if (i.complete) { done(); } else { i.addEventListener('load', done); i.addEventListener('error', done); }
    });
  }
  function whenIdle() { (window.requestIdleCallback || function (f) { setTimeout(f, 300); })(startHero); }
  if (doc.readyState === 'complete') { whenIdle(); } else { window.addEventListener('load', whenIdle); }
})();
