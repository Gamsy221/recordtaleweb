(() => {
  const activePage = document.body.dataset.page || '';

  const navItems = [
    { href: 'index.html', label: 'Home', key: 'home' },
    { href: 'about.html', label: 'About', key: 'about' },
    { href: 'services.html', label: 'Services', key: 'services' },
    { href: 'contact.html', label: 'Contact', key: 'contact' },
    { href: 'book-session.html', label: 'Book Session', key: 'book-session', cta: true },
  ];

  const renderLink = (item) => {
    const classes = [];
    if (item.cta) classes.push('nav-cta');
    if (activePage === item.key) classes.push('active');
    const classAttr = classes.length ? ` class="${classes.join(' ')}"` : '';
    return `<a href="${item.href}"${classAttr}>${item.label}</a>`;
  };

  const headerTarget = document.getElementById('site-header');
  if (headerTarget) {
    headerTarget.className = 'site-header';
    headerTarget.innerHTML = `
      <div class="container nav-wrap">
        <a class="logo" href="index.html" aria-label="Recordtale Home">
          <img src="assets/logo.png" alt="Recordtale Logo" />
        </a>

        <button class="menu-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="desktop-nav" aria-label="Primary">
          ${navItems.map(renderLink).join('')}
        </nav>
      </div>

      <nav id="mobile-nav" class="mobile-nav" aria-label="Mobile primary">
        ${navItems.map(renderLink).join('')}
      </nav>
    `;
  }

  const footerTarget = document.getElementById('site-footer');
  if (footerTarget) {
    footerTarget.className = 'site-footer';
    footerTarget.innerHTML = `
      <div class="container footer-inner">
        <div class="footer-spacer" aria-hidden="true"></div>
        <p class="footer-copy">Copyright Recordtale 2026</p>
        <div class="footer-social">
          <a href="https://example.com/instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
            <img src="assets/instagramsociallink.png" alt="Instagram" class="social-icon" />
          </a>
          <a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
            <img src="assets/facebooksociallink.png" alt="Facebook" class="social-icon" />
          </a>
        </div>
      </div>
    `;
  }

  const toggleButton = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (toggleButton && mobileNav) {
    toggleButton.addEventListener('click', () => {
      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', String(!isExpanded));
      mobileNav.classList.toggle('open');
    });
  }
})();
