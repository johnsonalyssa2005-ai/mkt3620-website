const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const links = [
  { href: './index.html', label: 'Home', page: 'index.html' },
  { href: './about.html', label: 'About', page: 'about.html' },
  { href: './portfolio.html', label: 'Portfolio', page: 'portfolio.html' },
  { href: './contact.html', label: 'Contact', page: 'contact.html' }
];

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('#site-nav');
  if (nav) {
    nav.innerHTML = `<header class="site-header container"><a class="brand" href="./index.html" aria-label="Alyssa Johnson home"><span class="brand-mark">AJ</span><span>Alyssa Johnson</span></a><button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">Menu <span>☰</span></button><nav class="main-nav" aria-label="Main navigation">${links.map(link => `<a href="${link.href}" class="${currentPage === link.page ? 'active' : ''}">${link.label}</a>`).join('')}</nav></header>`;
    const toggle = nav.querySelector('.menu-toggle');
    const menu = nav.querySelector('.main-nav');
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  const footer = document.querySelector('#site-footer');
  if (footer) footer.innerHTML = `<footer class="site-footer"><div class="container footer-inner"><p>© ${new Date().getFullYear()} Alyssa Johnson</p><p>Marketing · Sales · Storytelling</p></div></footer>`;
});
