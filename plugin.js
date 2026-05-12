/**
 * Lampa Custom UI Plugin
 * Подключение: Настройки → Плагины → добавить URL к этому файлу
 */
(function () {
  'use strict';

  // ─── CSS ──────────────────────────────────────────────────
  var CSS = [
    '@keyframes fadeUp{0%{opacity:0;transform:translateY(14px)}100%{opacity:1;transform:translateY(0)}}',
    '.lmp-wrap{position:relative;width:100%;height:100%;background:radial-gradient(circle at 20% 10%,rgba(60,85,130,.28),transparent 34%),radial-gradient(circle at 80% 20%,rgba(90,55,120,.20),transparent 32%),linear-gradient(135deg,#070a12 0%,#101522 48%,#06070d 100%);font-family:Inter,sans-serif;overflow-x:hidden;overflow-y:auto;scroll-behavior:smooth}',
    '.lmp-inner{position:relative;z-index:1}',
    // NAV — horizontal top bar
    '.lmp-nav{display:flex;align-items:center;gap:4px;padding:10px 20px;position:sticky;top:0;z-index:50;background:transparent}',
    '.lmp-nav__btn{background:none;border:none;color:#777;font-family:inherit;font-size:22px;font-weight:700;padding:10px 18px;border-radius:6px;cursor:pointer;transition:color .22s ease-out;white-space:nowrap;pointer-events:auto;letter-spacing:.01em}',
    '.lmp-nav__btn:hover,.lmp-nav__btn.active,.lmp-nav__btn.nav-focused{color:#fff}',
    '.lmp-nav__btn.active{color:#fff}',
    '.lmp-nav__btn.nav-focused{color:#fff}',
    // show-all card
    '.lmp-card--all .lmp-card__poster{display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08)}',
    '.lmp-card--all .lmp-all-label{color:#888;font-size:16px;font-weight:600;text-align:center;line-height:1.4}',
    '.lmp-card--all.focused .lmp-all-label{color:#fff}',
    // HERO
    '.lmp-hero{position:relative;height:58vh;min-height:340px;overflow:hidden}',
    '.lmp-hero__track{display:flex;height:100%;transition:transform .55s ease-out}',
    '.lmp-hcard{flex-shrink:0;width:46%;min-width:380px;height:100%;padding:16px 10px 16px 24px;cursor:pointer}',
    '.lmp-hcard__inner{width:100%;height:100%;border-radius:14px;overflow:hidden;position:relative;transition:transform .45s ease-out,box-shadow .45s ease-out}',
    '.lmp-hcard.focused .lmp-hcard__inner{transform:scale(1.03);box-shadow:0 12px 32px rgba(0,0,0,.7)}',
    '.lmp-hcard__bg{width:100%;height:100%;object-fit:cover;display:block}',
    '.lmp-hcard__overlay{position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.9) 0%,rgba(0,0,0,.1) 55%,transparent 80%);display:flex;flex-direction:column;justify-content:flex-end;padding:22px 24px}',
    '.lmp-hcard__title{font-size:24px;font-weight:700;color:#fff;line-height:1.2;text-shadow:0 2px 10px rgba(0,0,0,.7)}',
    '.lmp-hcard__desc{font-size:13px;color:#bbb;margin-top:6px;line-height:1.45;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}',
    '.lmp-hcard__meta{margin-top:10px;display:flex;gap:8px;align-items:center;flex-wrap:wrap}',
    '.lmp-rb{display:inline-flex;align-items:center;gap:4px;border-radius:6px;padding:5px 12px;font-size:16px;font-weight:700}',
    '.lmp-rb--imdb{background:rgba(245,197,24,.15);border:1px solid rgba(245,197,24,.35);color:#f5c518}',
    '.lmp-rb--kp{background:rgba(255,102,0,.15);border:1px solid rgba(255,102,0,.35);color:#ff6600}',
    '.lmp-rb--user{background:rgba(99,202,130,.15);border:1px solid rgba(99,202,130,.35);color:#63ca82}',
    '.lmp-rb--qual{border:1px solid rgba(255,255,255,.25);color:#e0e0e0;background:rgba(255,255,255,.08)}',
    '.lmp-hcard__year{font-size:14px;color:#888;margin-left:4px}',
    // HERO CONTROLS
    '.lmp-hero__ctrls{position:absolute;bottom:16px;right:24px;display:flex;align-items:center;gap:6px;z-index:10}',
    '.lmp-hdot{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.3);border:none;cursor:pointer;transition:all .3s}',
    '.lmp-hdot.active{background:#e94560;width:20px;border-radius:4px}',
    // SECTIONS
    '.lmp-content{padding:20px 0 80px}',
    '.lmp-section{margin-bottom:36px;overflow:visible}',
    '.lmp-section__head{display:flex;align-items:center;justify-content:space-between;padding:0 24px;margin-bottom:16px}',
    '.lmp-section__title{font-size:20px;font-weight:600;color:#fff}',
    '.lmp-section__title.focused-row{color:#e94560}',
    '.lmp-cards-wrap{overflow-x:auto;overflow-y:visible;scrollbar-width:none}',
    '.lmp-cards-wrap::-webkit-scrollbar{display:none}',
    '.lmp-cards{display:flex;gap:24px;padding:10px 28px 30px;width:max-content;overflow:visible}',
    // CARD
    '.lmp-card{flex-shrink:0;width:185px;cursor:pointer;position:relative;transition:transform .30s ease-out}',
    '.lmp-card.focused{transform:scale(1.16) translateY(-8px)}',
    '.lmp-card__poster{position:relative;width:185px;height:270px;border-radius:10px;overflow:hidden;background:#1e1e2e}',
    '.lmp-card__poster img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .45s ease-out;pointer-events:none}',
    '.lmp-card.focused .lmp-card__poster img{transform:scale(1.08)}',
    '.lmp-card__title{margin-top:9px;font-size:15px;font-weight:500;line-height:1.3;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;pointer-events:none;color:#bbb}',
    '.lmp-card__ratings{position:absolute;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;gap:7px;padding:8px 5px 6px;background:linear-gradient(0deg,rgba(0,0,0,.9),transparent);pointer-events:none}',
    '.lmp-crb{display:inline-flex;align-items:center;gap:3px;font-size:12px;font-weight:700;line-height:1;white-space:nowrap}',
    '.lmp-crb--imdb{color:#f5c518}.lmp-crb--kp{color:#ff6600}.lmp-crb--user{color:#63ca82}',
    '.lmp-crb--qual{color:#bbb;font-weight:800;letter-spacing:.5px}',
    '.lmp-card__year{font-size:13px;color:#666;margin-top:4px;pointer-events:none}',
    '.lmp-empty{text-align:center;padding:60px 20px;color:#444;font-size:14px}'
  ].join('');

  // ─── Icons (CSS badges, no SVG text) ─────────────────────
  var ICO = {
    imdb: '<b style="background:#f5c518;color:#000;font-size:7.5px;padding:1px 4px;border-radius:2px;font-weight:900;line-height:1.4;font-style:normal">IMDb</b>',
    kp:   '<b style="background:#ff6600;color:#fff;font-size:7.5px;padding:1px 4px;border-radius:2px;font-weight:900;line-height:1.4;font-style:normal">КП</b>',
    user: '<span style="font-size:9px;line-height:1">★</span>'
  };

  var QLABEL = {'4K':'4K','2K':'2K','1080p':'FHD','720p':'HD','480p':'SD','TS':'TS'};


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
  function buildSection(title, items, listUrl) {
    var s = document.createElement('div');
    s.className = 'lmp-section';
    // Карточка "Все ›" добавляется в конец ряда (TV-навигация)
    var allCard = listUrl
      ? '<div class="lmp-card lmp-card--all"><div class="lmp-card__poster"><div class="lmp-all-label">Все<br>›</div></div></div>'
      : '';
    s.innerHTML =
      '<div class="lmp-section__head"><h2 class="lmp-section__title">' + title + '</h2></div>' +
      '<div class="lmp-cards-wrap"><div class="lmp-cards">' +
        items.slice(0, 10).map(buildCardHTML).join('') +
        allCard +
      '</div></div>';
    return s;
  }

  // ─── Hero builder (infinite circular carousel) ───────────────
  function buildHero(items, wrap) {
    var track = wrap.querySelector('.lmp-hero__track');
    var ctrls = wrap.querySelector('.lmp-hero__ctrls');

    // Для бесконечной карусели клонируем N слайдов с каждой стороны
    var CLONE = Math.min(2, items.length);
    var real   = items.length;
    // virtualIdx — индекс в расширенном массиве (клон-слева, реальные, клон-справа)
    // realIdx(v) = v - CLONE
    var cur    = CLONE; // начинаем с первого реального
    var jumping = false;

    function makeCard(m) {
      var q = QLABEL[m.quality] || m.quality || '';
      return '<div class="lmp-hcard">' +
        '<div class="lmp-hcard__inner">' +
          '<img class="lmp-hcard__bg" src="' + m.imgH + '" alt="' + m.title + '">' +
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
    }

    // Строим расширенный список: последние CLONE + все + первые CLONE
    var extended = [];
    for (var ci = real - CLONE; ci < real; ci++) extended.push(items[ci]);
    for (var ri = 0; ri < real; ri++) extended.push(items[ri]);
    for (var fi = 0; fi < CLONE; fi++) extended.push(items[fi]);
    var total = extended.length;

    track.innerHTML = extended.map(makeCard).join('');

    // Dots — только реальные
    ctrls.innerHTML = items.map(function(_, i) {
      return '<button class="lmp-hdot' + (i===0?' active':'') + '"></button>';
    }).join('');
    var dots = wrap.querySelectorAll('.lmp-hdot');

    function realIdx(v) { return ((v - CLONE) % real + real) % real; }

    function cardWidth() {
      var w = track.parentElement.offsetWidth;
      return (w > 0 ? w : window.innerWidth) * 0.46 + 14;
    }

    // Мгновенно переставить без анимации
    function jumpTo(idx) {
      track.style.transition = 'none';
      track.style.transform = 'translateX(-' + (idx * cardWidth()) + 'px)';
      var ri = realIdx(idx);
      dots.forEach(function(d, i){ d.classList.toggle('active', i === ri); });
      var hcards = track.querySelectorAll('.lmp-hcard');
      hcards.forEach(function(el){ el.classList.remove('focused'); });
      if (hcards[idx]) hcards[idx].classList.add('focused');
    }

    // Анимированно перейти к виртуальному индексу
    function moveTo(idx) {
      track.style.transition = 'transform .6s cubic-bezier(.4,0,.2,1)';
      track.style.transform = 'translateX(-' + (idx * cardWidth()) + 'px)';
      var ri = realIdx(idx);
      dots.forEach(function(d, i){ d.classList.toggle('active', i === ri); });
      var hcards = track.querySelectorAll('.lmp-hcard');
      hcards.forEach(function(el){ el.classList.remove('focused'); });
      if (hcards[idx]) hcards[idx].classList.add('focused');
    }

    function goTo(virtIdx) {
      if (jumping) return;
      cur = virtIdx;
      moveTo(cur);

      // После завершения анимации (.6s + небольшой запас) —
      // тихо прыгнуть на настоящий индекс если вышли за клоны
      setTimeout(function() {
        if (cur < CLONE || cur >= CLONE + real) {
          jumping = true;
          var ri = realIdx(cur);
          cur = CLONE + ri;
          // Мгновенный прыжок: transition off → reflow → следующий кадр
          track.style.transition = 'none';
          track.style.transform = 'translateX(-' + (cur * cardWidth()) + 'px)';
          track.getBoundingClientRect(); // надёжнее offsetWidth для форс. reflow
          requestAnimationFrame(function() {
            requestAnimationFrame(function() { // двойной rAF гарантирует отрисовку
              jumping = false;
            });
          });
        }
      }, 680);
    }

    // animate-in только реальные карточки
    var realCards = Array.from(track.querySelectorAll('.lmp-hcard')).slice(CLONE, CLONE + real);
    realCards.forEach(function(el, i) {
      el.style.opacity = '0'; el.style.animation = 'none';
      setTimeout(function() {
        el.style.opacity = '';
        el.style.animation = 'fadeUp .5s ease-out ' + (i*60) + 'ms both';
      }, 30);
    });

    // Click + hover handlers
    track.querySelectorAll('.lmp-hcard').forEach(function(el, i) {
      el.addEventListener('click', function() {
        if (cur === i) {
          var m = extended[i];
          if (m && m.id) openMovie(m);
        } else {
          goTo(i);
        }
      });
      // Mouse hover → .focused
      el.addEventListener('mouseenter', function() {
        track.querySelectorAll('.lmp-hcard').forEach(function(c){ c.classList.remove('focused'); });
        el.classList.add('focused');
      });
      el.addEventListener('mouseleave', function() {
        el.classList.remove('focused');
        var hcards = track.querySelectorAll('.lmp-hcard');
        if (hcards[cur]) hcards[cur].classList.add('focused');
      });
    });

    dots.forEach(function(d, i) {
      d.addEventListener('click', function(e) { e.stopPropagation(); goTo(CLONE + i); });
    });

    // Устанавливаем начальную позицию — ждём пока offsetWidth > 0
    (function tryJump() {
      if (track.parentElement && track.parentElement.offsetWidth > 0) {
        jumpTo(cur);
      } else {
        requestAnimationFrame(tryJump);
      }
    })();

    // Сброс jumping при возврате фокуса (чтобы не застрял из-за смены вкладки/фокуса)
    var onVisible = function() {
      if (!document.hidden) { jumping = false; jumpTo(cur); }
    };
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('focus', onVisible);

    var timer = setInterval(function() { goTo(cur + 1); }, 9000);

    return {
      goTo:    function(i) { goTo(CLONE + i); },
      getCur:  function() { return realIdx(cur); },
      getLen:  function() { return real; },
      getItem: function(i){ return items[i]; },
      refocus: function() { jumpTo(cur); },
      pause:   function() { clearInterval(timer); },
      resume:  function() {
        jumping = false;
        jumpTo(cur);
        timer = setInterval(function() { goTo(cur + 1); }, 9000);
      },
      stop: function() {
        clearInterval(timer);
        document.removeEventListener('visibilitychange', onVisible);
        window.removeEventListener('focus', onVisible);
      }
    };
  }

  // ─── Main Component ───────────────────────────────────────
  function CustomHome() {
    var html, hero;
    var rows = [];      // [{cards:NodeList, items:[]}]
    var rowIdx = 0;
    var colIdx = 0;
    var navIdx = 0;     // какая вкладка подсвечена в режиме nav
    var mode   = 'nav'; // 'hero' | 'nav' | 'cards'  — стартуем с nav
    var _navBtns = []; // ссылка на кнопки (заполняется в create)
    var _navPill = null;

    // Плавный скролл контейнера .lmp-wrap к нужной позиции
    function smoothScrollTo(targetY) {
      if (!html) return;
      var start   = html.scrollTop;
      var delta   = targetY - start;
      if (Math.abs(delta) < 2) return;
      var startT  = null;
      var dur     = 320; // ms
      function step(ts) {
        if (!startT) startT = ts;
        var p = Math.min((ts - startT) / dur, 1);
        // easeOutCubic
        var ease = 1 - Math.pow(1 - p, 3);
        html.scrollTop = start + delta * ease;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    function focusNav(idx) {
      navIdx = idx;
      _navBtns.forEach(function(b, i) {
        b.classList.toggle('nav-focused', i === idx);
      });
      // Скроллим наверх чтобы панель была видна
      smoothScrollTo(0);
      // Снимаем фокус с карточек / hero
      html && html.querySelectorAll('.lmp-hcard').forEach(function(c){ c.classList.remove('focused'); });
      rows.forEach(function(r) {
        r.cards.forEach(function(c){ c.classList.remove('focused'); });
        r.head.classList.remove('focused-row');
      });
    }

    function activateNavTab(idx) {
      if (_navBtns[idx]) _navBtns[idx].click();
    }

    function focusCard(rIdx, cIdx) {
      rows.forEach(function(r) {
        r.cards.forEach(function(c){ c.classList.remove('focused'); });
        r.head.classList.remove('focused-row');
      });
      // Снять фокус nav
      _navBtns.forEach(function(b){ b.classList.remove('nav-focused'); });
      if (!rows[rIdx]) return;
      rowIdx = rIdx; colIdx = cIdx;
      var row = rows[rIdx];
      row.head.classList.add('focused-row');
      var card = row.cards[cIdx];
      if (!card) return;
      card.classList.add('focused');
      card.scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'});
      // Плавный скролл секции в зону видимости
      if (html) {
        var offset = Math.max(0, row.head.offsetTop - 70);
        smoothScrollTo(offset);
      }
    }

    function setMode(m) {
      mode = m;
      if (m === 'cards' && rows.length) {
        focusCard(0, 0);
      }
      if (m === 'hero') {
        // Снять фокус nav
        _navBtns.forEach(function(b){ b.classList.remove('nav-focused'); });
        // Снять фокус с карточек и заголовков секций
        rows.forEach(function(r) {
          r.cards.forEach(function(c){ c.classList.remove('focused'); });
          r.head.classList.remove('focused-row');
        });
        // Восстановить фокус hero-карточки и прокрутить наверх
        if (hero && hero.refocus) hero.refocus();
        smoothScrollTo(0);
      }
    }

    this.create = function() {
      html = document.createElement('div');
      html.className = 'lmp-wrap';

      var inner = document.createElement('div');
      inner.className = 'lmp-inner';
      html.appendChild(inner);

      // ─── Nav bar (horizontal top) ─────────────────────────────
      var navEl = document.createElement('nav');
      navEl.className = 'lmp-nav';

      var NAV_TABS = [
        {id:'main',     label:'Главная',     heroUrl:'trending/all/week',               listUrls:['movie/popular','tv/popular','movie/top_rated']},
        {id:'movies',   label:'Фильмы',      heroUrl:'movie/popular',                   listUrls:['movie/popular','movie/now_playing','movie/top_rated']},
        {id:'series',   label:'Сериалы',     heroUrl:'tv/popular',                      listUrls:['tv/popular','tv/on_the_air','tv/top_rated']},
        {id:'cartoons', label:'Мультфильмы', heroUrl:'discover/movie?with_genres=16',   listUrls:['discover/movie?with_genres=16','discover/movie?with_genres=10751','discover/tv?with_genres=16']},
        {id:'anime',    label:'Аниме',       heroUrl:'discover/tv?with_genres=16&with_original_language=ja', listUrls:['discover/tv?with_genres=16&with_original_language=ja','discover/movie?with_genres=16&with_original_language=ja','discover/tv?with_genres=16']},
      ];
      var BOOKMARK_TAB = {id:'bookmarks', label:'Закладки', heroUrl:null, listUrls:[]};
      var activeTab = NAV_TABS[0];
      var navBtns = [];

      function switchTab(tab, btn) {
        navBtns.forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        activeTab = tab;
        if (tab.id === 'bookmarks') {
          Lampa.Activity.push({url:'', title:'Закладки', component:'bookmarks'});
          return;
        }
        content.innerHTML = '<div class="lmp-empty">Загрузка...</div>';
        rows = [];
        if (hero) { hero.stop(); hero = null; }
        heroEl.querySelector('.lmp-hero__track').innerHTML = '';
        heroEl.querySelector('.lmp-hero__ctrls').innerHTML = '';
        loadRealData(content, heroEl, tab,
          function(newHero) { hero = newHero; },
          function(newRows) { rows = newRows; }
        );
      }

      NAV_TABS.forEach(function(tab, i) {
        var btn = document.createElement('button');
        btn.className = 'lmp-nav__btn' + (i === 0 ? ' active' : '');
        btn.textContent = tab.label;
        btn.addEventListener('click', function() { switchTab(tab, btn); });
        navBtns.push(btn);
        navEl.appendChild(btn);
      });
      // Закладки
      var bmBtn = document.createElement('button');
      bmBtn.className = 'lmp-nav__btn';
      bmBtn.textContent = BOOKMARK_TAB.label;
      bmBtn.addEventListener('click', function() { switchTab(BOOKMARK_TAB, bmBtn); });
      navBtns.push(bmBtn);
      navEl.appendChild(bmBtn);

      inner.appendChild(navEl);
      _navBtns = navBtns;

      // ─── Hero ───────────────────────────────────────────────
      var heroEl = document.createElement('div');
      heroEl.className = 'lmp-hero';
      heroEl.innerHTML = '<div class="lmp-hero__track"></div><div class="lmp-hero__ctrls"></div>';
      inner.appendChild(heroEl);

      // ─── Content ────────────────────────────────────────────
      var content = document.createElement('div');
      content.className = 'lmp-content';
      content.innerHTML = '<div class="lmp-empty">Загрузка...</div>';
      inner.appendChild(content);

      // Load real data from Lampa/TMDB
      loadRealData(content, heroEl, activeTab,
        function(newHero) { hero = newHero; },
        function(newRows) { rows = newRows; }
      );

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
          if (mode === 'nav') {
            focusNav(navIdx);
          } else if (mode === 'hero') {
            if (!hero) return;
            var hcards = html.querySelectorAll('.lmp-hcard');
            hcards.forEach(function(c){ c.classList.remove('focused'); });
            if(hcards[hero.getCur()]) hcards[hero.getCur()].classList.add('focused');
          } else {
            focusCard(rowIdx, colIdx);
          }
        },
        right: function() {
          if (mode === 'nav') {
            focusNav(Math.min(navIdx + 1, _navBtns.length - 1));
          } else if (mode === 'hero') {
            if (!hero) return;
            hero.goTo((hero.getCur() + 1) % hero.getLen());
          } else {
            focusCard(rowIdx, Math.min(colIdx+1, rows[rowIdx].cards.length-1));
          }
        },
        left: function() {
          if (mode === 'nav') {
            focusNav(Math.max(navIdx - 1, 0));
          } else if (mode === 'hero') {
            if (!hero) return;
            hero.goTo((hero.getCur() - 1 + hero.getLen()) % hero.getLen());
          } else {
            if (colIdx > 0) focusCard(rowIdx, colIdx-1);
          }
        },
        up: function() {
          if (mode === 'cards') {
            if (rowIdx > 0) focusCard(rowIdx-1, Math.min(colIdx, rows[rowIdx-1].cards.length-1));
            else { mode = 'hero'; setMode('hero'); }
          } else if (mode === 'hero') {
            // UP из hero → панель вкладок
            mode = 'nav';
            focusNav(navIdx);
          }
        },
        down: function() {
          if (mode === 'nav') {
            // DOWN из nav → hero
            mode = 'hero';
            _navBtns.forEach(function(b){ b.classList.remove('nav-focused'); });
            if (hero) {
              var hcards = html.querySelectorAll('.lmp-hcard');
              hcards.forEach(function(c){ c.classList.remove('focused'); });
              if (hcards[hero.getCur()]) hcards[hero.getCur()].classList.add('focused');
            }
            smoothScrollTo(0);
          } else if (mode === 'hero') {
            if (rows.length) setMode('cards');
          } else {
            if (rowIdx < rows.length-1) focusCard(rowIdx+1, Math.min(colIdx, rows[rowIdx+1].cards.length-1));
          }
        },
        enter: function() {
          if (mode === 'nav') {
            activateNavTab(navIdx);
            mode = 'hero';
            _navBtns.forEach(function(b){ b.classList.remove('nav-focused'); });
          } else if (mode === 'hero') {
            if (!hero) return;
            var m = hero.getItem(hero.getCur());
            if (m && m.id) openMovie(m);
          } else {
            var item = rows[rowIdx].items[colIdx];
            if (item && item._all) {
              Lampa.Activity.push({url: item._url, title: item._title, component: 'catalog'});
            } else if (item && item.id) {
              openMovie(item);
            }
          }
        },
        back: function() {
          if (mode === 'nav' || mode === 'cards') {
            mode = 'hero';
            _navBtns.forEach(function(b){ b.classList.remove('nav-focused'); });
            rows.forEach(function(r){
              r.cards.forEach(function(c){ c.classList.remove('focused'); });
              r.head.classList.remove('focused-row');
            });
            smoothScrollTo(0);
          } else {
            Lampa.Activity.backward();
          }
        }
      });
      Lampa.Controller.toggle('content');

      // Начальный фокус на панели вкладок
      focusNav(0);

      // Hide Lampa's own activity header bar
      hideHeader();
    };

    // Find and hide Lampa's header title, inject our nav into header bar
    var _styleEl = null;
    function hideHeader() {
      if (!_styleEl) {
        _styleEl = document.createElement('style');
        _styleEl.id = 'lmp-head-override';
        // Скрываем шапку Lampa и приводим фон приложения к нашему градиенту
        _styleEl.textContent = [
          '.head{display:none!important}',
          'body,.app,.layer{background:#070a12!important}'
        ].join('');
        document.head.appendChild(_styleEl);
      }
    }
    function showHeader() {
      if (_styleEl) {
        _styleEl.remove();
        _styleEl = null;
      }
    }

    this.pause  = function() { showHeader(); if (hero) hero.pause(); };
    this.resume = function() { Lampa.Controller.toggle('content'); hideHeader(); if (hero) hero.resume(); focusNav(navIdx); };
    this.destroy = function() {
      showHeader();
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

  // Fallback: уникальные цвета по id (golden ratio hue)
  function itemColors(id) {
    var n = id || 0;
    var h1 = (n * 137.508) % 360;
    var h2 = (h1 + 80)  % 360;
    var h3 = (h1 + 200) % 360;
    function hsl2hex(h, s, l) {
      s /= 100; l /= 100;
      var a = s * Math.min(l, 1 - l);
      function f(n) {
        var k = (n + h / 30) % 12;
        var c = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
        return Math.round(255 * c).toString(16).padStart(2, '0');
      }
      return '#' + f(0) + f(8) + f(4);
    }
    // 3 слоя: яркий акцент (верх), средний, тёмная база
    // l=22%/16%/10% + s=75%/60%/50% — заметно отличаются, но остаются тёмными для TV
    return [hsl2hex(h1, 75, 22), hsl2hex(h2, 60, 16), hsl2hex(h3, 50, 10)];
  }

  // Примечание: canvas extraction заблокирована CORS со стороны TMDB (http://lampa.mx без Access-Control-Allow-Origin)
  // Используем цвета на основе id (золотое сечение) — всегда дают вариацию цветов

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
      // Hero использует w1280 для баланса качества и производительности
      imgH:   item.backdrop_path ? IMG+'w1280'+item.backdrop_path : 'https://picsum.photos/seed/h'+item.id+'/1280/720',
      colors: itemColors(item.id),
      method: item.media_type === 'tv' ? 'tv' : (item.first_air_date ? 'tv' : 'movie'),
      card:   item
    };
  }

  function tmdbGet(url, cb) {
    try {
      var src = Lampa.Api && Lampa.Api.sources && Lampa.Api.sources.tmdb;
      if (!src) src = Lampa.Api && Lampa.Api.sources && Lampa.Api.sources[Object.keys(Lampa.Api.sources||{})[0]];
      if (src && typeof src.get === 'function') {
        // Lampa 3.x signature: get(urlString, params, onComplete, onError)
        src.get(url, {page: 1}, function(d) {
          cb((d && d.results || []).map(fromCard));
        }, function(e) {
          console.log('[LMP] src.get error for', url, e);
          cb(null);
        });
        return;
      }
    } catch(e) { console.log('[LMP] tmdbGet crash', url, e); }
    cb(null);
  }

  // ─── Структура секций по вкладкам ────────────────────────────
  var TAB_SECTIONS = {
    main:     ['Популярные фильмы', 'Популярные сериалы', 'Топ рейтинга'],
    movies:   ['Популярные', 'Сейчас в кино', 'Топ рейтинга'],
    series:   ['Популярные сериалы', 'Сейчас в эфире', 'Топ рейтинга'],
    cartoons: ['Популярные мультфильмы', 'Семейное кино', 'Мультсериалы'],
    anime:    ['Аниме сериалы', 'Аниме фильмы', 'Все аниме'],
    bookmarks:[]
  };

  // ─── Load real data via Lampa TMDB API ──────────────────────
  function loadRealData(contentEl, heroWrap, tab, setHero, setRows) {
    var tabId    = (tab && tab.id) || 'main';
    var TITLES   = TAB_SECTIONS[tabId] || ['Популярное', 'Сейчас идут', 'Топ рейтинга'];
    var listUrls = (tab && tab.listUrls) || ['movie/popular'];
    var heroUrl  = (tab && tab.heroUrl)  || listUrls[0];
    var got = {}, done = 0, total = listUrls.length + 1;

    function rebuild() {
      // Hero
      if (got._hero && got._hero.length) {
        var newHero = buildHero(got._hero.slice(0, 8), heroWrap);
        if (setHero) setHero(newHero);
      } else {
        var track = heroWrap.querySelector('.lmp-hero__track');
        if (track) track.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:#444">Нет данных</div>';
      }
      if (!contentEl) return;
      contentEl.innerHTML = '';
      var hasAny = listUrls.some(function(_,i){ return got[i] && got[i].length; });
      if (!hasAny) {
        contentEl.innerHTML = '<div class="lmp-empty">Не удалось загрузить данные. См. консоль [LMP]</div>';
        if (setRows) setRows([]);
        return;
      }
      var newRows = [];
      listUrls.forEach(function(url, i) {
        var items = got[i];
        if (!items || !items.length) return;
        var sec = buildSection(TITLES[i] || ('Раздел ' + (i+1)), items, url);
        contentEl.appendChild(sec);
        var cards = sec.querySelectorAll('.lmp-card');
        var head  = sec.querySelector('.lmp-section__title');
        cards.forEach(function(c, j) {
          c.style.opacity='0'; c.style.animation='none';
          setTimeout(function(){
            c.style.opacity='';
            c.style.animation='fadeUp .4s ease-out '+(j*22)+'ms both';
          }, 50);
          // Mouse hover → .focused
          c.addEventListener('mouseenter', function() {
            newRows.forEach(function(r){ r.cards.forEach(function(x){ x.classList.remove('focused'); }); });
            c.classList.add('focused');
          });
          c.addEventListener('mouseleave', function() {
            c.classList.remove('focused');
          });
        });
        // items с sentinel-объектом для карточки "Все ›"
        var rowItems = items.slice(0, 10).concat(url ? [{_all:true, _url:url, _title:TITLES[i]||'Все'}] : []);
        newRows.push({cards:Array.from(cards), items:rowItems, head:head});
        // Click handlers
        cards.forEach(function(c, j) {
          c.addEventListener('click', function() {
            var item = rowItems[j];
            if (item && item._all) {
              Lampa.Activity.push({url: item._url, title: item._title, component: 'catalog'});
            } else if (item && item.id) {
              openMovie(item);
            }
          });
        });
      });
      if (setRows) setRows(newRows);
    }

    function check() { if (++done >= total) rebuild(); }
    tmdbGet(heroUrl, function(r){ got._hero = r; check(); });
    listUrls.forEach(function(url,i){ tmdbGet(url, function(r){ got[i]=r; check(); }); });
  }

  // ─── Lampa Settings GUI ───────────────────────────────────
  var LMP_SETTINGS = [
    {
      name: 'lmp_hero_count', type: 'select', default: '8',
      values: {'4':'4 карточки','6':'6 карточек','8':'8 карточек','10':'10 карточек'},
      label: 'Новый UI: карточек в Hero',
      desc:  'Сколько постеров показывать в карусели'
    },
    {
      name: 'lmp_content_lang', type: 'select', default: 'ru',
      values: {ru:'Русский', en:'English'},
      label: 'Новый UI: язык контента',
      desc:  'Язык названий и описаний'
    },
    {
      name: 'lmp_image_quality', type: 'select', default: 'original',
      values: {original:'Оригинал', w1280:'1280px', w780:'780px'},
      label: 'Новый UI: качество фото Hero',
      desc:  'Разрешение фонов в карусели'
    }
  ];

  function registerSettings() {
    // Метод 1: Lampa.SettingsApi (новые сборки)
    if (Lampa && Lampa.SettingsApi && typeof Lampa.SettingsApi.addParam === 'function') {
      try {
        LMP_SETTINGS.forEach(function(s) {
          Lampa.SettingsApi.addParam({
            component: 'player',
            param: { name: s.name, type: s.type, values: s.values, default: s.default },
            field: { name: s.label, description: s.desc }
          });
        });
        console.log('[LMP] Settings via SettingsApi OK');
        return;
      } catch(e) { console.log('[LMP] SettingsApi err:', e); }
    }

    // Метод 2: Lampa.Settings (старые сборки)
    if (Lampa && Lampa.Settings && typeof Lampa.Settings.listener === 'object') {
      try {
        Lampa.Settings.listener.follow('open', function(e) {
          if (e.name !== 'general') return;
          LMP_SETTINGS.forEach(function(s) {
            Lampa.Settings.input({
              name: s.name,
              label: s.label,
              type: s.type,
              values: s.values,
              default: s.default,
              onChange: function() {}
            });
          });
        });
        console.log('[LMP] Settings via Settings.listener OK');
      } catch(e) { console.log('[LMP] Settings.listener err:', e); }
    }
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
    registerSettings();

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
