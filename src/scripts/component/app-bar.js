class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    // penerapan lazyload pada img logo
    this.innerHTML = `
            <div class="app-bar_logo">
                <img data-src="logo.png" class="lazyload" alt="Logo">
            </div>

            <div class="app-bar__menu">
                <button id="hamburgerButton">☰</button>
            </div>

            <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#/favorite">Favorite</a></li>
                <li><a href="https://github.com/niamilla" rel="noopener" target='_blank'>About Us</a></li>
            </ul>
            </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);
