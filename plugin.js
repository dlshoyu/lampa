/**
 * Lampa Custom UI Plugin
 * Подключение: Настройки → Плагины → добавить URL к этому файлу
 */
(function () {
  'use strict';

  // ─── CSS ──────────────────────────────────────────────────
  var CSS = [
    '@keyframes springUp{0%{opacity:0;transform:translateY(22px) scale(.95)}55%{opacity:1;transform:translateY(-5px) scale(1.02)}75%{transform:translateY(2px)}100%{transform:translateY(0) scale(1)}}',
    '@keyframes kenBurns{0%{transform:scale(1)}50%{transform:scale(1.06) translate(-1%,.5%)}100%{transform:scale(1.04) translate(.8%,-.6%)}}',
    '.lmp-wrap{position:relative;width:100%;min-height:100vh;background:#111119;font-family:Inter,sans-serif;overflow-x:hidden}',
    '#lmp-bg{position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.55}',
    '.lmp-inner{position:relative;z-index:1}',
    // HERO
    '.lmp-hero{position:relative;height:54vh;min-height:320px;overflow:hidden}',
    '.lmp-hero__track{display:flex;height:100%;transition:transform .6s cubic-bezier(.4,0,.2,1)}',
    '.lmp-hcard{flex-shrink:0;width:46%;min-width:360px;height:100%;padding:12px 8px 12px 20px;cursor:pointer}',
    '.lmp-hcard__inner{width:100%;height:100%;border-radius:14px;overflow:hidden;position:relative;transition:transform .35s,box-shadow .35s}',
    '.lmp-hcard.focused .lmp-hcard__inner{transform:scale(1.025);box-shadow:0 16px 48px rgba(0,0,0,.8);outline:2px solid rgba(255,255,255,.4)}',
    '.lmp-hcard__bg{width:100%;height:100%;object-fit:cover;display:block;animation:kenBurns 14s ease-in-out infinite alternate}',
    '.lmp-hcard__overlay{position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.9) 0%,rgba(0,0,0,.1) 55%,transparent 80%);display:flex;flex-direction:column;justify-content:flex-end;padding:18px 20px}',
    '.lmp-hcard__title{font-size:20px;font-weight:700;color:#fff;line-height:1.2;text-shadow:0 2px 10px rgba(0,0,0,.7)}',
    '.lmp-hcard__desc{font-size:12px;color:#bbb;margin-top:4px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}',
    '.lmp-hcard__meta{margin-top:8px;display:flex;gap:6px;align-items:center;flex-wrap:wrap}',
    '.lmp-rb{display:inline-flex;align-items:center;gap:4px;border-radius:5px;padding:3px 8px;font-size:12px;font-weight:700}',
    '.lmp-rb--imdb{background:rgba(245,197,24,.15);border:1px solid rgba(245,197,24,.35);color:#f5c518}',
    '.lmp-rb--kp{background:rgba(255,102,0,.15);border:1px solid rgba(255,102,0,.35);color:#ff6600}',
    '.lmp-rb--user{background:rgba(99,202,130,.15);border:1px solid rgba(99,202,130,.35);color:#63ca82}',
    '.lmp-rb--qual{border:1px solid rgba(255,255,255,.25);color:#e0e0e0;background:rgba(255,255,255,.08)}',
    '.lmp-hcard__year{font-size:12px;color:#888;margin-left:4px}',
    // HERO CONTROLS
    '.lmp-hero__ctrls{position:absolute;bottom:16px;right:24px;display:flex;align-items:center;gap:6px;z-index:10}',
    '.lmp-hdot{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.3);border:none;cursor:pointer;transition:all .3s}',
    '.lmp-hdot.active{background:#e94560;width:20px;border-radius:4px}',
    // SECTIONS
    '.lmp-content{padding:14px 0 40px}',
    '.lmp-section{margin-bottom:24px;overflow:visible}',
    '.lmp-section__head{display:flex;align-items:center;justify-content:space-between;padding:0 20px;margin-bottom:12px}',
    '.lmp-section__title{font-size:17px;font-weight:600;color:#fff}',
    '.lmp-section__title.focused-row{color:#e94560}',
    '.lmp-cards-wrap{overflow-x:auto;overflow-y:visible;scrollbar-width:none}',
    '.lmp-cards-wrap::-webkit-scrollbar{display:none}',
    '.lmp-cards{display:flex;gap:12px;padding:8px 20px 10px;width:max-content}',
    // CARD
    '.lmp-card{flex-shrink:0;width:140px;cursor:pointer;position:relative}',
    '.lmp-card__poster{position:relative;width:140px;height:204px;border-radius:8px;overflow:hidden;background:#1e1e2e;transition:transform .3s,box-shadow .3s}',
    '.lmp-card.focused .lmp-card__poster{transform:scale(1.06) translateY(-4px);box-shadow:0 14px 36px rgba(0,0,0,.8);outline:2px solid rgba(255,255,255,.5)}',
    '.lmp-card__poster img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}',
    '.lmp-card.focused .lmp-card__poster img{transform:scale(1.08)}',
    '.lmp-card__ratings{position:absolute;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;gap:5px;padding:5px 3px 4px;background:linear-gradient(0deg,rgba(0,0,0,.9),transparent)}',
    '.lmp-crb{display:inline-flex;align-items:center;gap:2px;font-size:8.5px;font-weight:700;line-height:1;white-space:nowrap}',
    '.lmp-crb svg{width:9px;height:9px;flex-shrink:0}',
    '.lmp-crb--imdb{color:#f5c518}.lmp-crb--kp{color:#ff6600}.lmp-crb--user{color:#63ca82}',
    '.lmp-crb--qual{color:#bbb;font-weight:800;letter-spacing:.5px}',
    '.lmp-card__title{margin-top:6px;font-size:12px;font-weight:500;color:#bbb;line-height:1.3;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}',
    '.lmp-card__year{font-size:10px;color:#555;margin-top:2px}',
    '.lmp-card.entering{animation:springUp .5s cubic-bezier(.4,0,.2,1) both}'
  ].join('');

  // ─── Icons ────────────────────────────────────────────────
  var ICO = {
    imdb: '<svg viewBox="0 0 24 24" fill="#f5c518"><rect width="24" height="24" rx="4"/><text x="2" y="17" font-size="10" font-weight="900" fill="#000">IMDb</text></svg>',
    kp:   '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#ff6600"/><text x="5" y="16" font-size="10" font-weight="900" fill="#fff">КП</text></svg>',
    user: '<svg viewBox="0 0 24 24" fill="#63ca82"><path d="M12 2l2.6 7.9H23l-6.8 5 2.6 7.9L12 18l-6.8 4.8 2.6-7.9L1 9.9h8.4z"/></svg>'
  };

  var QLABEL = {'4K':'4K','2K':'2K','1080p':'FHD','720p':'HD','480p':'SD','TS':'TS'};

  // ─── Dynamic background ───────────────────────────────────
  function BgManager(canvas) {
    var ctx = canvas.getContext('2d');
    var blobs = [], target = [], current = [], lerp = 1;

    function hexToRgb(h) {
      return {r:parseInt(h.slice(1,3),16), g:parseInt(h.slice(3,5),16), b:parseInt(h.slice(5,7),16)};
    }

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    this.set = function(colors) {
      if (!colors || !colors.length) return;
      target = colors.map(hexToRgb);
      if (!blobs.length) {
        blobs = target.map(function(rgb, i) {
          return {x: canvas.width*(0.2+i*0.3), y: canvas.height*(0.3+i*0.2),
            vx:(Math.random()-.5)*.4, vy:(Math.random()-.5)*.3,
            r:Math.min(canvas.width,canvas.height)*(0.45+i*0.1), rgb:rgb};
        });
        current = blobs.map(function(b){ return {r:b.rgb.r,g:b.rgb.g,b:b.rgb.b}; });
      }
      lerp = 0;
    };

    this.draw = function() {
      var W = canvas.width, H = canvas.height;
      ctx.fillStyle = '#0e0e18';
      ctx.fillRect(0, 0, W, H);
      lerp = Math.min(lerp + 0.014, 1);
      blobs.forEach(function(b, i) {
        var t = lerp, c = current[i]||b.rgb, tg = target[i]||b.rgb;
        var col = {r:Math.round(c.r+(tg.r-c.r)*t), g:Math.round(c.g+(tg.g-c.g)*t), b:Math.round(c.b+(tg.b-c.b)*t)};
        var gr = ctx.createRadialGradient(b.x,b.y,0,b.x,b.y,b.r);
        gr.addColorStop(0,'rgba('+col.r+','+col.g+','+col.b+',.55)');
        gr.addColorStop(1,'rgba('+col.r+','+col.g+','+col.b+',0)');
        ctx.fillStyle = gr; ctx.fillRect(0,0,W,H);
        b.x+=b.vx; b.y+=b.vy;
        if(b.x<-b.r||b.x>W+b.r) b.vx*=-1;
        if(b.y<-b.r||b.y>H+b.r) b.vy*=-1;
      });
      var vig = ctx.createRadialGradient(W/2,H/2,H*.2,W/2,H/2,H*.9);
      vig.addColorStop(0,'rgba(0,0,0,0)'); vig.addColorStop(1,'rgba(0,0,0,.7)');
      ctx.fillStyle=vig; ctx.fillRect(0,0,W,H);
    };
  }

  // ─── Card HTML builder ────────────────────────────────────
  function buildCardHTML(m) {
    var q = QLABEL[m.quality] || m.quality || '';
    return '<div class="lmp-card">' +
      '<div class="lmp-card__poster">' +
        '<img src="' + m.img + '" alt="' + m.title + '" loading="lazy">' +
        '<div class="lmp-card__ratings">' +
          '<span class="lmp-crb lmp-crb--imdb">' + ICO.imdb + m.imdb + '</span>' +
          '<span class="lmp-crb lmp-crb--kp">'   + ICO.kp   + m.kp   + '</span>' +
          '<span class="lmp-crb lmp-crb--user">'  + ICO.user + m.user + '</span>' +
          (q ? '<span class="lmp-crb lmp-crb--qual">' + q + '</span>' : '') +
        '</div>' +
      '</div>' +
      '<div class="lmp-card__title">' + m.title + '</div>' +
      '<div class="lmp-card__year">'  + m.year  + '</div>' +
    '</div>';
  }

  // ─── Section builder ──────────────────────────────────────
  function buildSection(title, items) {
    var s = document.createElement('div');
    s.className = 'lmp-section';
    s.innerHTML =
      '<div class="lmp-section__head"><h2 class="lmp-section__title">' + title + '</h2></div>' +
      '<div class="lmp-cards-wrap"><div class="lmp-cards">' +
        items.map(buildCardHTML).join('') +
      '</div></div>';
    return s;
  }

  // ─── Hero builder ─────────────────────────────────────────
  function buildHero(items, wrap, bg) {
    var track = wrap.querySelector('.lmp-hero__track');
    var ctrls = wrap.querySelector('.lmp-hero__ctrls');
    var cur   = 0;

    track.innerHTML = items.map(function(m) {
      var q = QLABEL[m.quality] || m.quality || '';
      return '<div class="lmp-hcard">' +
        '<div class="lmp-hcard__inner">' +
          '<img class="lmp-hcard__bg" src="' + m.img + '" alt="' + m.title + '">' +
          '<div class="lmp-hcard__overlay">' +
            '<div class="lmp-hcard__title">' + m.title + '</div>' +
            '<div class="lmp-hcard__desc">'  + (m.desc||'') + '</div>' +
            '<div class="lmp-hcard__meta">' +
              '<span class="lmp-rb lmp-rb--imdb">' + ICO.imdb + m.imdb + '</span>' +
              '<span class="lmp-rb lmp-rb--kp">'   + ICO.kp   + m.kp   + '</span>' +
              '<span class="lmp-rb lmp-rb--user">'  + ICO.user + m.user + '</span>' +
              (q ? '<span class="lmp-rb lmp-rb--qual">' + q + '</span>' : '') +
              '<span class="lmp-hcard__year">' + m.year + '</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');

    ctrls.innerHTML = items.map(function(_, i) {
      return '<button class="lmp-hdot' + (i===0?' active':'') + '"></button>';
    }).join('');

    function goTo(idx) {
      cur = Math.max(0, Math.min(idx, items.length-1));
      var w = track.parentElement.offsetWidth * 0.46 + 14;
      track.style.transform = 'translateX(-' + cur*w + 'px)';
      wrap.querySelectorAll('.lmp-hdot').forEach(function(d,i){ d.classList.toggle('active',i===cur); });
      var c = wrap.querySelectorAll('.lmp-hcard');
      c.forEach(function(el){ el.classList.remove('focused'); });
      if(c[cur]) c[cur].classList.add('focused');
      if(items[cur] && items[cur].colors) bg.set(items[cur].colors);
    }

    // animate in
    wrap.querySelectorAll('.lmp-hcard').forEach(function(el, i) {
      el.style.opacity = '0'; el.style.animation = 'none';
      setTimeout(function() {
        el.style.opacity = '';
        el.style.animation = 'springUp .6s cubic-bezier(.4,0,.2,1) ' + (i*80) + 'ms both';
      }, 30);
    });

    goTo(0);
    var timer = setInterval(function(){ goTo(cur >= items.length-1 ? 0 : cur+1); }, 5000);

    return {
      goTo: goTo,
      getCur: function(){ return cur; },
      getLen: function(){ return items.length; },
      getItem: function(i){ return items[i]; },
      stop: function(){ clearInterval(timer); }
    };
  }

  // ─── Main Component ───────────────────────────────────────
  function CustomHome() {
    var html, canvas, bg, hero;
    var rows = [];      // [{cards:NodeList, items:[]}]
    var rowIdx = 0;
    var colIdx = 0;
    var mode   = 'hero'; // 'hero' | 'cards'

    function focusCard(rIdx, cIdx) {
      rows.forEach(function(r) {
        r.cards.forEach(function(c){ c.classList.remove('focused'); });
        r.head.classList.remove('focused-row');
      });
      if (!rows[rIdx]) return;
      rowIdx = rIdx; colIdx = cIdx;
      var row = rows[rIdx];
      row.head.classList.add('focused-row');
      var card = row.cards[cIdx];
      if (!card) return;
      card.classList.add('focused');
      card.scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'});
      var m = row.items[cIdx];
      if (m && m.colors) bg.set(m.colors);
    }

    function setMode(m) {
      mode = m;
      if (m === 'cards' && rows.length) focusCard(0, 0);
    }

    this.create = function() {
      html = document.createElement('div');
      html.className = 'lmp-wrap';

      // BG canvas
      canvas = document.createElement('canvas');
      canvas.id = 'lmp-bg';
      html.appendChild(canvas);
      bg = new BgManager(canvas);
      bg.set(['#1a1a3e','#2d0a3e','#0a1a2e']);

      var inner = document.createElement('div');
      inner.className = 'lmp-inner';
      html.appendChild(inner);

      // Hero
      var heroEl = document.createElement('div');
      heroEl.className = 'lmp-hero';
      heroEl.innerHTML = '<div class="lmp-hero__track"></div><div class="lmp-hero__ctrls"></div>';
      inner.appendChild(heroEl);

      // Content
      var content = document.createElement('div');
      content.className = 'lmp-content';
      inner.appendChild(content);

      // Use Lampa card data if available, else mock
      var sections = getSections();
      sections.forEach(function(s) {
        var sec = buildSection(s.title, s.items);
        content.appendChild(sec);
        var cards = sec.querySelectorAll('.lmp-card');
        var head  = sec.querySelector('.lmp-section__title');
        // animate
        cards.forEach(function(c, i) {
          c.style.opacity = '0'; c.style.animation = 'none';
          setTimeout(function() {
            c.style.opacity = '';
            c.style.animation = 'springUp .5s cubic-bezier(.4,0,.2,1) ' + (i*35) + 'ms both';
          }, 50);
        });
        rows.push({cards: Array.from(cards), items: s.items, head: head});
      });

      // Hero carousel (mock first, real data will replace)
      hero = buildHero(getHeroItems(), heroEl, bg);

      // BG animation loop
      (function loop() {
        bg.draw();
        requestAnimationFrame(loop);
      })();

      // Load real data from Lampa/TMDB
      loadRealData(content, heroEl, bg);

      return html;
    };

    // Lampa 3.x вызывает оба метода
    this.render = function() {
      if (!html) this.create();
      return html;
    };

    this.start = function() {
      Lampa.Controller.add('content', {
        toggle: function() {
          if (mode === 'hero') {
            var hcards = html.querySelectorAll('.lmp-hcard');
            hcards.forEach(function(c){ c.classList.remove('focused'); });
            if(hcards[hero.getCur()]) hcards[hero.getCur()].classList.add('focused');
          } else {
            focusCard(rowIdx, colIdx);
          }
        },
        right: function() {
          if (mode === 'hero') {
            var next = hero.getCur() + 1;
            if (next < hero.getLen()) hero.goTo(next);
          } else {
            focusCard(rowIdx, Math.min(colIdx+1, rows[rowIdx].cards.length-1));
          }
        },
        left: function() {
          if (mode === 'hero') {
            var prev = hero.getCur() - 1;
            if (prev >= 0) hero.goTo(prev);
          } else {
            if (colIdx > 0) focusCard(rowIdx, colIdx-1);
          }
        },
        up: function() {
          if (mode === 'cards') {
            if (rowIdx > 0) focusCard(rowIdx-1, Math.min(colIdx, rows[rowIdx-1].cards.length-1));
            else setMode('hero');
          }
        },
        down: function() {
          if (mode === 'hero') {
            setMode('cards');
          } else {
            if (rowIdx < rows.length-1) focusCard(rowIdx+1, Math.min(colIdx, rows[rowIdx+1].cards.length-1));
          }
        },
        enter: function() {
          if (mode === 'hero') {
            var m = hero.getItem(hero.getCur());
            if (m && m.id) openMovie(m);
          } else {
            var item = rows[rowIdx].items[colIdx];
            if (item && item.id) openMovie(item);
          }
        },
        back: function() {
          Lampa.Activity.backward();
        }
      });
      Lampa.Controller.toggle('content');
    };

    this.pause  = function() {};
    this.resume = function() { Lampa.Controller.toggle('content'); };
    this.destroy = function() {
      if (hero) hero.stop();
      html.remove();
    };
  }

  // ─── Open movie in Lampa ──────────────────────────────────
  function openMovie(item) {
    if (!item.id) return;
    Lampa.Activity.push({
      url: '',
      title: item.title,
      component: 'full',
      id: item.id,
      method: item.method || 'movie',
      card: item
    });
  }

  // ─── Data: Lampa TMDB API + mock fallback ────────────────
  var IMG = 'https://image.tmdb.org/t/p/';

  function fromCard(item) {
    var score = item.vote_average ? (+item.vote_average).toFixed(1) : '—';
    var year  = (item.release_date || item.first_air_date || '').slice(0,4);
    return {
      id:     item.id,
      title:  item.title || item.name || '',
      year:   year,
      imdb:   score,
      kp:     score,
      user:   score,
      quality: '',
      desc:   item.overview || '',
      img:    item.poster_path   ? IMG+'w342'+item.poster_path   : 'https://picsum.photos/seed/p'+item.id+'/300/450',
      imgH:   item.backdrop_path ? IMG+'w1280'+item.backdrop_path : 'https://picsum.photos/seed/h'+item.id+'/900/520',
      colors: ['#1a1a3e','#2d0a3e','#0a1a2e'],
      method: item.media_type === 'tv' ? 'tv' : 'movie',
      card:   item
    };
  }

  function tmdbGet(url, cb) {
    try {
      var src = Lampa.Api && Lampa.Api.sources && Lampa.Api.sources.tmdb;
      if (src && typeof src.get === 'function') {
        src.get({
          url: url,
          onComplite: function(d){ cb((d && d.results || []).map(fromCard)); },
          onError:    function()  { cb(null); }
        });
        return;
      }
    } catch(e) { console.log('[LMP] tmdbGet error:', e); }
    cb(null);
  }

  // Mock fallbacks
  function P(s,w,h){ w=w||300;h=h||450; return 'https://picsum.photos/seed/'+s+'/'+w+'/'+h; }
  function H(s){ return P(s,900,520); }
  var MOCK_HERO = [
    {title:'Дюна: Часть третья',year:2026,quality:'4K',imdb:8.5,kp:8.7,user:9.0,colors:['#e65100','#bf360c','#4e342e'],desc:'Пол Атрейдес ведёт фременов в последний бой.',img:H('dune3ba')},
    {title:'Последние из нас 3',year:2026,quality:'4K',imdb:9.0,kp:9.3,user:9.5,colors:['#1b5e20','#4e342e','#212121'],desc:'Джоэл и Элли снова в пути.',img:H('tlou3ba')},
    {title:'В чужой шкуре',year:2026,quality:'4K',imdb:8.9,kp:9.1,user:9.3,colors:['#263238','#4a148c','#006064'],desc:'Триллер о человеке, который просыпается в чужом теле.',img:H('skinswap26a')}
  ];
  var MOCK_CARDS = [
    {title:'Мортал Комбат 2',year:2026,quality:'4K',imdb:7.2,kp:7.8,user:8.5,colors:['#b71c1c','#1a0a00'],img:P('mk2axa')},
    {title:'Оппенгеймер',year:2023,quality:'4K',imdb:8.5,kp:8.3,user:8.7,colors:['#212121','#f57f17'],img:P('oppen1xa')},
    {title:'Белый Лотос',year:2025,quality:'4K',imdb:8.3,kp:8.1,user:8.6,colors:['#006064','#1a237e'],img:P('lotus1xa')},
    {title:'Дикий робот',year:2024,quality:'4K',imdb:8.1,kp:8.3,user:8.7,colors:['#1b5e20','#0d47a1'],img:P('wrobot1xa')}
  ];

  function getHeroItems() { return MOCK_HERO; }
  function getSections() {
    return [
      {title:'Загрузка...', items: MOCK_CARDS},
      {title:'...',         items: MOCK_CARDS},
      {title:'...',         items: MOCK_CARDS}
    ];
  }

  // Load real data, replace sections/hero when ready
  function loadRealData(contentEl, heroWrap, bgInst) {
    var got = {}, done = 0;
    var ENDPOINTS = [
      {key:'popular',  url:'movie/popular',     title:'Сейчас смотрят'},
      {key:'trending', url:'trending/all/week',  title:'Trending'},
      {key:'tv',       url:'tv/popular',         title:'Сериалы'}
    ];

    function rebuild() {
      // Hero from trending or popular
      var heroData = (got.trending || got.popular || []).slice(0,6);
      if (heroData.length) hero = buildHero(heroData, heroWrap, bgInst);

      // Rebuild sections
      if (!contentEl) return;
      contentEl.innerHTML = '';
      rows = [];
      ENDPOINTS.forEach(function(ep) {
        var items = got[ep.key];
        if (!items || !items.length) return;
        var sec = buildSection(ep.title, items);
        contentEl.appendChild(sec);
        var cards = sec.querySelectorAll('.lmp-card');
        var head  = sec.querySelector('.lmp-section__title');
        cards.forEach(function(c,i){
          c.style.opacity='0'; c.style.animation='none';
          setTimeout(function(){ c.style.opacity=''; c.style.animation='springUp .5s cubic-bezier(.4,0,.2,1) '+(i*30)+'ms both'; },50);
        });
        rows.push({cards:Array.from(cards), items:items, head:head});
      });
    }

    ENDPOINTS.forEach(function(ep) {
      tmdbGet(ep.url, function(r) {
        if (r && r.length) got[ep.key] = r;
        if (++done === ENDPOINTS.length) rebuild();
      });
    });
  }

  // ─── Init ─────────────────────────────────────────────────
  var menuAdded = false;

  var MENU_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>';

  function addMenu() {
    if (menuAdded) return;

    // Метод 1: Lampa.Menu.add (если API доступен)
    if (Lampa && Lampa.Menu && typeof Lampa.Menu.add === 'function') {
      try {
        Lampa.Menu.add({
          title:    'Новый UI',
          subtitle: 'Кастомный интерфейс',
          icon:     MENU_ICON,
          action: function() {
            Lampa.Activity.push({ url:'', title:'Главная', component:'lampa_custom_home' });
          }
        });
        menuAdded = true;
        return;
      } catch(e) {}
    }

    // Метод 2: прямая инъекция в DOM меню
    var menuList = document.querySelector('.menu .menu__list');
    if (!menuList) return; // ещё не отрендерено

    if (menuList.querySelector('[data-lmp-custom]')) return; // уже добавлено
    menuAdded = true;

    var li = document.createElement('li');
    li.className = 'menu__item selector';
    li.setAttribute('data-lmp-custom', '1');
    li.innerHTML =
      '<div class="menu__ico">' + MENU_ICON + '</div>' +
      '<div class="menu__text">Новый UI</div>';

    li.addEventListener('click', function() {
      Lampa.Activity.push({ url:'', title:'Главная', component:'lampa_custom_home' });
    });

    // Lampa TV-навигация
    li.addEventListener('hover:enter', function() {
      Lampa.Activity.push({ url:'', title:'Главная', component:'lampa_custom_home' });
    });

    menuList.appendChild(li);
  }

  function registerComponent() {
    // Метод 1: стандартный Lampa.Component.add
    if (Lampa.Component && typeof Lampa.Component.add === 'function') {
      try {
        Lampa.Component.add('lampa_custom_home', CustomHome);
        console.log('[LMP] registered via Component.add');
      } catch(e) { console.log('[LMP] Component.add error:', e); }
    }

    // Метод 2: перехват Lampa.Component.create (надёжный fallback)
    if (Lampa.Component && typeof Lampa.Component.create === 'function') {
      var _orig = Lampa.Component.create.bind(Lampa.Component);
      Lampa.Component.create = function(name, activity) {
        if (name === 'lampa_custom_home') {
          console.log('[LMP] Component.create called for lampa_custom_home');
          return new CustomHome(activity);
        }
        return _orig(name, activity);
      };
      console.log('[LMP] Component.create override set');
    }
  }

  function init() {
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    registerComponent();

    // Попробовать сразу
    addMenu();

    // По событиям Lampa
    ['app:start','app:ready','menu:open','menu:render'].forEach(function(ev) {
      Lampa.Listener.follow(ev, addMenu);
    });

    // Полинг — ждём появления .menu__list в DOM
    var attempts = 0;
    var poll = setInterval(function() {
      addMenu();
      if (menuAdded || ++attempts > 40) clearInterval(poll);
    }, 500);
  }

  if (window.Lampa) init();
  else window.addEventListener('load', init);

})();
