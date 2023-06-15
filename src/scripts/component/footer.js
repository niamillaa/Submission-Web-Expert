class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="footer">
        <p>Copyright @ 2023 - My Eatery</p>
      </div>
        `;
  }
}

customElements.define('app-footer', AppFooter);
