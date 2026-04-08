// Native Web Component for the Header
class SiteHeader extends HTMLElement {
  connectedCallback() {
    const path = window.location.pathname;
    const isTimeline = path.includes('timeline.html');
    const isSkills = path.includes('skills.html');
    const isBlog = path.includes('blog.html');
    const isHome = !isTimeline && !isSkills && !isBlog;

    this.innerHTML = `
      <header>
        <div class="container">
          <nav aria-label="Main Navigation">
            <a href="index.html" class="nav-brand">ST.</a>
            <div class="nav-links">
              <a href="index.html" class="${isHome ? 'active' : ''}">Personal</a>
              <a href="timeline.html" class="${isTimeline ? 'active' : ''}">Timeline</a>
              <a href="skills.html" class="${isSkills ? 'active' : ''}">Skills</a>
              <a href="blog.html" class="${isBlog ? 'active' : ''}">Blog</a>
              
              <button id="theme-toggle" class="btn-theme" aria-label="Toggle Dark/Light Mode">
                <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
    `;

    // Rebind theme toggle event listener
    const themeToggleBtn = this.querySelector('#theme-toggle');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        let currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
      });
    }
  }
}

// Native Web Component for the Footer
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="container">
        <p>&copy; ${new Date().getFullYear()} Sean Tyler. All rights reserved.</p>
      </footer>
    `;
  }
}

// Register the custom elements
customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);

// Handle Theme State immediately upon DOM Load
// By applying this directly to the document element early, we prevent FOUC (Flash of Unstyled Content)
document.addEventListener('DOMContentLoaded', () => {
  const preferDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  let currentTheme = localStorage.getItem('theme');
  if (!currentTheme) {
    currentTheme = preferDarkQuery.matches ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-theme', currentTheme);
});
