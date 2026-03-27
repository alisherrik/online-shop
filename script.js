const menuButton = document.querySelector('[data-testid="mobile-nav-toggle"]');
const nav = document.querySelector('[data-testid="primary-nav"]');
const demoButton = document.querySelector('[data-testid="interactive-demo"]');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  nav?.classList.toggle('is-open');
});

demoButton?.addEventListener('click', () => {
  demoButton.textContent = 'Interaction preview ready for anyone interested in browsing and buying products online';
});