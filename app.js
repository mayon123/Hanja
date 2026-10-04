(() => {
const DATA = window.HANJA_DATA || [];
const $ = s => document.querySelector(s);
const app = $('#app'), bar = $('#bar');
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };

// ---- storage (progress is keyed by hanja+word so editing data.js never loses it) ----
let store = { prog: {}, sel: [], mode: 'ko-en', fmt: 'choice', count: 10 };
try { Object.assign(store, JSON.parse(localStorage.getItem('hanja-v1') || '{}')); } catch (e) {}
const save = () => { try { localStorage.setItem('hanja-v1', JSON.stringify(store)); } catch (e) {} };
const key = (h, w) => h.hanja + '|' + w[0];
const P = k => store.prog[k] || (store.prog[k] = { c: 0, w: 0, s: 0 }); // s = current streak
const status = k => { const p = store.prog[k]; if (!p || !(p.c + p.w)) return 'new'; if (p.s >= 2) return 'known'; return p.s === 0 && p.w ? 'weak' : 'learning'; };
const mastery = h => h.words.length ? h.words.filter(w => status(key(h, w)) === 'known').length / h.words.length : 0;

const ALL = DATA.flatMap(h => h.words.map(w => ({ h, w, k: key(h, w) })));
const sections = [...new Set(DATA.map(h => h.reading))];

// ---- navigation ----
const stack = [];
function go(view, ...args) { stack.push([view, args]); render(); }
function back() { stack.pop(); render(); }
function render() { const [v, a] = stack[stack.length - 1] || [home, []]; scrollTo(0, 0); v(...a); }
function header(title, withBack) {
  bar.innerHTML = (withBack ? '<button id="bk">‹ Back</button>' : '') + `<h1>${esc(title)}</h1>`;
  if (withBack) $('#bk').onclick = back;
}

// ---- home: hanja grouped by syllable ----
function home() {
  header('漢字 Hanja Trainer');
  const total = ALL.length, known = ALL.filter(x => status(x.k) === 'known').length;
  let html = `<div class="small">${DATA.length} hanja · ${total} words · ${known} learned</div>`;
  for (const r of sections) {
    html += `<h2>${esc(r)}</h2>`;
    for (const h of DATA.filter(h => h.reading === r)) {
      const m = Math.round(mastery(h) * 100), on = store.sel.includes(h.hanja);
      html += `<div class="card hj" data-h="${esc(h.hanja)}"><div class="big">${esc(h.hanja)}</div>
        <div class="info"><div class="t">${esc(h.reading)} — ${esc(h.meaning)}</div>
        <div class="s">${h.words.length} words · ${m}% learned</div><div class="bar"><i style="width:${m}%"></i></div></div>
        <input type="checkbox" class="chk" ${on ? 'checked' : ''} aria-label="select"></div>`;
    }
  }
  html += `<div class="fab"><button class="sec" id="all">${store.sel.length ? 'Clear' : 'Select all'}</button>
    <button class="pri" id="go">${store.sel.length ? `Quiz ${store.sel.length} selected` : 'Quiz everything'}</button></div>`;
  html += `<h2>Data</h2><div class="card small">Add words by editing <b>data.js</b>. <a href="#" id="reset">Reset progress</a></div>`;
  app.innerHTML = html;
  app.querySelectorAll('.hj').forEach(el => {
    const hj = el.dataset.h;
    el.querySelector('.chk').onclick = e => { e.stopPropagation(); toggle(hj); };
    el.onclick = () => go(detail, hj);
  });
  $('#all').onclick = () => { store.sel = store.sel.length ? [] : DATA.map(h => h.hanja); save(); home(); };
  $('#go').onclick = () => go(setup);
  $('#reset').onclick = e => { e.preventDefault(); if (confirm('Erase all progress?')) { store.prog = {}; save(); home(); } };
}
function toggle(hj) { const i = store.sel.indexOf(hj); i < 0 ? store.sel.push(hj) : store.sel.splice(i, 1); save(); home(); }

// ---- detail: word list of one hanja ----
function detail(hj) {
  const h = DATA.find(x => x.hanja === hj);
  header(`${h.hanja}  ${h.reading}`, true);
  app.innerHTML = `<div class="card q"><div class="w cjk">${esc(h.hanja)}</div><div class="hint">${esc(h.reading)} — ${esc(h.meaning)}</div></div>
    <div class="card"><table>${h.words.map(w => { const s = status(key(h, w)); return `<tr><td><span class="dot ${{known:'g',weak:'r',learning:'y'}[s] || ''}"></span>${esc(w[0])}</td><td>${esc(w[1])}</td></tr>`; }).join('')}</table></div>
    <div class="fab"><button class="pri" id="q">Quiz this hanja</button></div>`;
  $('#q').onclick = () => { store.sel = [hj]; save(); go(setup); };
}

// ---- quiz setup ----
const MODES = [['ko-en', '한국어 → English'], ['en-ko', 'English → 한국어'], ['word-hanja', 'Word → which hanja?'], ['mix', 'Mix']];
const FMTS = [['choice', 'Multiple choice'], ['flip', 'Flashcards']];
const COUNTS = [[10, '10'], [20, '20'], [0, 'All']];
function setup() {
  header('Quiz', true);
  const pool = poolWords();
  const seg = (id, items, cur) => `<div class="seg" id="${id}">${items.map(([v, l]) => `<button data-v="${v}" class="${String(v) === String(cur) ? 'on' : ''}">${l}</button>`).join('')}</div>`;
  app.innerHTML = `<div class="small">${store.sel.length ? store.sel.map(esc).join(' ') : 'All hanja'} · ${pool.length} words</div>
    <h2>Question type</h2>${seg('m', MODES, store.mode)}<h2>Format</h2>${seg('f', FMTS, store.fmt)}
    <h2>Questions</h2>${seg('c', COUNTS, store.count)}
    <div class="small">Weak and new words are asked first.</div>
    <div class="fab"><button class="pri" id="start" ${pool.length ? '' : 'disabled'}>Start</button></div>`;
  [['m', 'mode'], ['f', 'fmt'], ['c', 'count']].forEach(([id, f]) => app.querySelectorAll('#' + id + ' button').forEach(b => b.onclick = () => {
    store[f] = f === 'count' ? +b.dataset.v : b.dataset.v; save(); setup();
  }));
  $('#start').onclick = startQuiz;
}
const poolWords = () => ALL.filter(x => !store.sel.length || store.sel.includes(x.h.hanja));

// ---- quiz engine ----
let Q;
function startQuiz() {
  let pool = shuffle(poolWords());
  const rank = x => { const s = status(x.k); return { weak: 0, new: 1, learning: 2, known: 3 }[s]; };
  pool.sort((a, b) => rank(a) - rank(b));
  const seenW = new Set(); // a word shared by two hanja (e.g. 상상) is asked once
  pool = pool.filter(x => !seenW.has(x.w[0]) && seenW.add(x.w[0]));
  if (store.count) pool = pool.slice(0, store.count);
  pool = shuffle(pool);
  const modes = store.mode === 'mix' ? ['ko-en', 'en-ko', 'word-hanja'] : [store.mode];
  const shared = x => ALL.some(y => y.h !== x.h && y.w[0] === x.w[0]);
  Q = { items: pool.map((x, i) => ({ ...x, mode: modes[i % modes.length] === 'word-hanja' && shared(x) ? 'ko-en' : modes[i % modes.length] })), i: 0, right: 0, missed: [] };
  go(question);
}
function distractors(item, field, n, bad = () => false) {
  // wrong options: same-pool first, then everything; unique by text, never equal to the answer
  const ans = field(item), seen = new Set([ans]);
  const out = [];
  for (const src of [poolWords(), ALL]) for (const x of shuffle(src)) {
    const t = field(x); if (!seen.has(t) && !bad(x)) { seen.add(t); out.push(t); }
    if (out.length >= n) return out;
  }
  return out;
}
function question() {
  const it = Q.items[Q.i];
  if (!it) return results();
  header(`${Q.i + 1} / ${Q.items.length}`, true);
  const h = it.h, w = it.w;
  let label, big, cjk = false, ans, opts, hint = '';
  if (it.mode === 'ko-en') { label = 'What does it mean?'; big = w[0]; ans = w[1]; opts = [ans, ...distractors(it, x => x.w[1], 3, x => x.w[0] === w[0])]; }
  else if (it.mode === 'en-ko') { label = 'How do you say…'; big = w[1]; ans = w[0]; opts = [ans, ...distractors(it, x => x.w[0], 3, x => x.w[1] === w[1])]; }
  else {
    label = 'Which hanja is in this word?'; big = w[0];
    ans = h.hanja + '|' + h.meaning;
    const hs = shuffle(DATA.filter(x => x.hanja !== h.hanja && !x.words.some(v => v[0] === w[0])));
    // prefer same reading so the choice is a real test
    hs.sort((a, b) => (b.reading === h.reading) - (a.reading === h.reading));
    opts = [ans, ...hs.slice(0, 3).map(x => x.hanja + '|' + x.meaning)];
  }
  opts = shuffle(opts);
  const disp = o => it.mode === 'word-hanja' ? `<span class="hh">${esc(o.split('|')[0])}</span><span class="small">${esc(o.slice(o.indexOf('|') + 1))}</span>` : esc(o);

  if (store.fmt === 'flip') {
    const reveal = it.mode === 'word-hanja' ? `<span class="hh" style="font-size:60px">${esc(h.hanja)}</span><br><span class="small">${esc(h.meaning)}</span>` : esc(ans);
    app.innerHTML = `<div class="prog"><span>${esc(h.hanja)} ${esc(h.reading)}</span><span>${Q.right} ✓</span></div>
      <div class="card q flip"><div class="lbl">${label}</div><div class="w">${esc(big)}</div><div id="a"><button class="pri" id="show" style="width:100%">Show answer</button></div></div>`;
    $('#show').onclick = () => {
      $('#a').innerHTML = `<div class="ans">${reveal}</div><div class="small" style="margin-top:6px">${esc(w[0])} · ${esc(w[1])}</div>
        <div class="row"><button class="sec" id="no">✗ Missed</button><button class="pri" id="yes">✓ Knew it</button></div>`;
      $('#no').onclick = () => finish(it, false); $('#yes').onclick = () => finish(it, true);
    };
    return;
  }
  app.innerHTML = `<div class="prog"><span>${esc(h.hanja)} ${esc(h.reading)}</span><span>${Q.right} ✓</span></div>
    <div class="card q"><div class="lbl">${label}</div><div class="w">${esc(big)}</div></div>
    ${opts.map((o, i) => `<button class="opt" data-i="${i}">${disp(o)}</button>`).join('')}<div id="next"></div>`;
  app.querySelectorAll('.opt').forEach(b => b.onclick = () => {
    const o = opts[+b.dataset.i], ok = o === ans;
    app.querySelectorAll('.opt').forEach((x, i) => { x.disabled = true; x.classList.toggle('ok', opts[i] === ans); });
    if (!ok) b.classList.add('bad');
    $('#next').innerHTML = `<div class="small" style="margin:8px 0">${esc(w[0])} — ${esc(w[1])} <b>(${esc(h.hanja)})</b></div>
      <div class="fab"><button class="pri" id="nx">${Q.i + 1 === Q.items.length ? 'Finish' : 'Next'}</button></div>`;
    record(it, ok);
    $('#nx').onclick = () => { Q.i++; stack[stack.length - 1] = [question, []]; render(); };
  });
}
function record(it, ok) {
  const p = P(it.k); ok ? (p.c++, p.s++, Q.right++) : (p.w++, p.s = 0, Q.missed.push(it)); save();
}
function finish(it, ok) { record(it, ok); Q.i++; stack[stack.length - 1] = [question, []]; render(); }
function results() {
  header('Results', false);
  const n = Q.items.length, pct = n ? Math.round(Q.right / n * 100) : 0;
  app.innerHTML = `<div class="card res"><div class="score">${Q.right}/${n}</div><div class="small">${pct}%</div></div>
    ${Q.missed.length ? `<h2>To review</h2><div class="card"><table>${Q.missed.map(x => `<tr><td>${esc(x.w[0])}</td><td>${esc(x.w[1])} <span class="small">(${esc(x.h.hanja)})</span></td></tr>`).join('')}</table></div>` : '<div class="card res">Perfect! 🎉</div>'}
    <div class="fab"><button class="sec" id="hm">Home</button><button class="pri" id="again">Again</button></div>`;
  $('#hm').onclick = () => { stack.length = 0; render(); };
  $('#again').onclick = () => { stack.pop(); startQuiz(); };
}

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
render();
})();
