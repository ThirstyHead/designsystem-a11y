/**
 * Japandi A11y Design System - Shared Web Components
 * Ensures consistency across all documentation pages.
 */

class DSHeader extends HTMLElement {
  connectedCallback() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    const navLinks = [
      { path: 'index.html', label: 'Overview', icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
      { path: 'colors.html', label: 'Colors', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z' },
      { path: 'typography.html', label: 'Typography', icon: 'M5 4h14v3H5V4zm0 5h14v3H5V9zm0 5h14v3H5v-3z' },
      { path: 'spacing.html', label: 'Spacing', icon: 'M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2z' },
      { path: 'agentic-interface.html', label: 'Agentic Protocol', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z' },
    ];

    const linksHtml = navLinks.map(link => {
      const isCurrent = currentPath === link.path;
      return `
        <li>
          <a href="${link.path}" class="nav-link" ${isCurrent ? 'aria-current="page"' : ''}>
            <svg class="mod-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
              <path d="${link.icon}"/>
            </svg>
            ${link.label}
          </a>
        </li>`;
    }).join('');

    this.innerHTML = `
      <header class="l-header">
        <div class="l-container l-header__nav">
          <h1>Japandi A11y</h1>
          <nav aria-label="Main Navigation">
            <ul class="l-header__links">
              ${linksHtml}
              <li>
                <button id="theme-toggle" class="mod-theme-toggle" aria-pressed="false">
                  <svg class="mod-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zM1.06-12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zM7.63 16.57a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06z"/>
                  </svg>
                  Toggle Dark Mode
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}

class DSFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="l-footer l-container">
        <p>&copy; 2026 <a href="https://thirstyhead.com">ThirstyHead</a> v1.0.0 Built for accessibility.</p>
      </footer>
    `;
  }
}

customElements.define('ds-header', DSHeader);
customElements.define('ds-footer', DSFooter);
