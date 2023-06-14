class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    // penerapan lazyload pada img cover
    this.innerHTML = `
        <div class="hero">
        <picture>
            <source type="image/webp" srcset="../public/cover.webp">
            <source type="image/webp" srcset="../public/cover.jpg">
            <img data-src="../public/cover.jpg" alt="">
          </picture>
            <div class="hero__inner">
                <h1 class="hero__title">My Eatery</h1>
                <p class="hero__tagline">Find Your Favorite Restaurant</p>
                <a href="#main-content" class="hero__button">Explore</a>
            </div>
        </div>
        `;
  }
}

customElements.define('app-jumbotron', Jumbotron);
