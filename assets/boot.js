/* Cosmetic intro only: navigation never depends on boot completion. */
(function () {
  'use strict';
  var timer;
  var dialog;
  var seen = false;
  try { seen = sessionStorage.getItem('xinqi-boot-seen') === '1'; } catch (e) {}
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  function finish() {
    clearTimeout(timer);
    if (dialog) {
      if (dialog.open) dialog.close();
      dialog.remove();
      dialog = null;
    }
  }

  function start() {
    finish();
    // Respect reduced motion even for an explicit replay.
    if (reduced.matches) return;
    seen = true;
    try { sessionStorage.setItem('xinqi-boot-seen', '1'); } catch (e) {}
    dialog = document.createElement('dialog');
    dialog.className = 'boot-screen';
    dialog.setAttribute('aria-label', '鑫启网安俱乐部终端启动动画');
    dialog.innerHTML = '<div class="boot-window"><div class="boot-top"><span>XINQI / BOOT SEQUENCE</span><button type="button" class="boot-skip" autofocus>跳过 ↗</button></div><div class="boot-body"><img src="assets/img/logo.png" alt="鑫启网安俱乐部"><div class="boot-prompt">❯ ./hello_xinqi<span aria-hidden="true">_</span></div><div class="boot-lines" aria-hidden="true"><p><b>[ OK ]</b> initializing curiosity...</p><p><b>[ OK ]</b> loading shared knowledge...</p><p><b>[ OK ]</b> opening new possibilities...</p></div><div class="boot-progress" aria-hidden="true"><i></i></div><div class="boot-welcome">保持好奇。欢迎来到鑫启网安俱乐部。</div></div><div class="boot-bottom">NINGXIA UNIVERSITY <span>LEARN. BUILD. SECURE.</span></div></div>';
    document.body.appendChild(dialog);
    if (typeof dialog.showModal !== 'function') { finish(); return; }
    dialog.querySelector('.boot-skip').addEventListener('click', finish);
    dialog.addEventListener('cancel', function (event) { event.preventDefault(); finish(); });
    dialog.showModal();
    timer = setTimeout(finish, 2400);
  }

  window.addEventListener('hashchange', finish);
  window.addEventListener('pagehide', finish);
  reduced.addEventListener('change', function () { if (reduced.matches) finish(); });
  var home = !location.hash || location.hash.split('?')[0] === '#/';
  if (home && !seen) start();
}());
