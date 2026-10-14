// Age confirmation on the home page: asks visitors to confirm they are 18 or older.
// The page content stays in the HTML (search engines still read it);
// the overlay covers it until the visitor confirms.
(function () {
  var KEY = 'tsp-age-confirmed';
  function confirmed() {
    try { return localStorage.getItem(KEY) === 'yes'; } catch (e) { return false; }
  }
  if (confirmed()) return;

  var others = Array.prototype.slice.call(document.body.children);
  others.forEach(function (el) { el.setAttribute('inert', ''); el.setAttribute('aria-hidden', 'true'); });
  document.documentElement.classList.add('age-gate-open');

  var gate = document.createElement('div');
  gate.className = 'age-gate';
  gate.setAttribute('role', 'dialog');
  gate.setAttribute('aria-modal', 'true');
  gate.setAttribute('aria-labelledby', 'ageGateTitle');
  gate.innerHTML =
    '<div class="age-gate-box">' +
      '<p class="age-gate-name">Thirty-Sixth Parallel</p>' +
      '<h2 id="ageGateTitle">Are you 18 or older?</h2>' +
      '<p id="ageGateText">This website is for adults 18 and older.</p>' +
      '<div class="actions">' +
        '<button type="button" class="btn btn-primary" id="ageYes">Yes, I am 18 or older</button>' +
        '<button type="button" class="btn btn-outline" id="ageNo">No</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(gate);
  var yes = document.getElementById('ageYes');
  var no = document.getElementById('ageNo');
  yes.focus();

  yes.addEventListener('click', function () {
    try { localStorage.setItem(KEY, 'yes'); } catch (e) {}
    gate.remove();
    others.forEach(function (el) { el.removeAttribute('inert'); el.removeAttribute('aria-hidden'); });
    document.documentElement.classList.remove('age-gate-open');
  });
  no.addEventListener('click', function () {
    gate.querySelector('.age-gate-box').innerHTML =
      '<p class="age-gate-name">Thirty-Sixth Parallel</p>' +
      '<h2 id="ageGateTitle" tabindex="-1">This website is for adults 18 and older.</h2>' +
      '<p>Thank you for visiting.</p>';
    document.getElementById('ageGateTitle').focus();
  });
  gate.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    var f = gate.querySelectorAll('button');
    if (!f.length) { e.preventDefault(); return; }
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
})();
