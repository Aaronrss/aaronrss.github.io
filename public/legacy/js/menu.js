const DEFAULT_REGION = 'home';
const ALLOWED_REGIONS = new Set(['home', 'about', 'contact']);

function selectedRegion() {
  const requestedRegion = window.location.hash.slice(1);
  return ALLOWED_REGIONS.has(requestedRegion) ? requestedRegion : DEFAULT_REGION;
}

function renderRegion() {
  const region = selectedRegion();

  document.querySelectorAll('.content-region').forEach((section) => {
    if (section instanceof HTMLElement) section.hidden = section.id !== region;
  });

  document.querySelectorAll('.main-menu a').forEach((link) => {
    const isCurrent = link.getAttribute('href') === `#${region}`;
    link.classList.toggle('active', isCurrent);
    if (isCurrent) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

window.addEventListener('hashchange', renderRegion);
renderRegion();
