/* EveryQA DS card loader: fetches sibling .jsx sources, strips ESM syntax,
   compiles with Babel, exposes components on window. Lets specimen cards and
   UI kits run without a bundler. */
window.__dsReady = false;
window.whenDS = function (cb) {
  if (window.__dsReady) cb();
  else window.addEventListener('ds-ready', cb, { once: true });
};
window.loadDS = async function (files) {
  for (const f of files) {
    const res = await fetch(f);
    if (!res.ok) { console.error('loadDS: not found', f); continue; }
    let code = await res.text();
    code = code.replace(/^import[^\n]*$/gm, '').replace(/^export /gm, '');
    const names = [...code.matchAll(/function ([A-Z][A-Za-z0-9]*)/g)].map(m => m[1]);
    const compiled = Babel.transform(code, { presets: ['react'], filename: f }).code;
    const fn = new Function('React', compiled + '\n' + names.map(n => `window.${n}=${n};`).join(''));
    fn(window.React);
  }
  window.__dsReady = true;
  window.dispatchEvent(new Event('ds-ready'));
};
