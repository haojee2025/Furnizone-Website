/* ===== drawer ===== */
const body = document.body;
const ham = document.getElementById('fzHam');
const scrim = document.getElementById('fzScrim');

function openFZ(){
  body.classList.add('fz-open','fz-noscroll');
  scrim.hidden = false;
  ham.setAttribute('aria-expanded','true');
}
function closeFZ(){
  body.classList.remove('fz-open','fz-noscroll');
  scrim.hidden = true;
  ham.setAttribute('aria-expanded','false');
}

ham.addEventListener('click', () => body.classList.contains('fz-open') ? closeFZ() : openFZ());
scrim.addEventListener('click', closeFZ);
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeFZ(); });

/* ===== drawer accordion ===== */
document.querySelectorAll('.fz-acc').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
  });
});

/* ===== desktop Products flyout ===== */
const flyBtn = document.querySelector('.fz-acc-inline');
const flyout = document.getElementById('fzFlyout');

if (flyBtn && flyout) {
  let hideTimer;
  const show = () => { clearTimeout(hideTimer); flyout.style.display = 'flex'; };
  const hide = () => { hideTimer = setTimeout(()=> flyout.style.display='none', 120); };

  flyBtn.addEventListener('mouseenter', show);
  flyBtn.addEventListener('mouseleave', hide);
  flyout.addEventListener('mouseenter', show);
  flyout.addEventListener('mouseleave', hide);
  // click toggles for accessibility
  flyBtn.addEventListener('click', () => {
    const open = flyout.style.display === 'flex';
    flyout.style.display = open ? 'none' : 'flex';
  });
}

/* ===== horizontal overflow dev guard (optional) ===== */
(function lockX(){
  const vw = document.documentElement.clientWidth;
  document.querySelectorAll('body *').forEach(el=>{
    const r = el.getBoundingClientRect();
    if (r.width > vw + 1) el.style.outline = '2px dashed red';
  });
})();



