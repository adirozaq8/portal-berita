class BeritaSide extends HTMLElement {

  constructor() {
      super();
  }

  connectedCallback(){
      this.render();
  }

  render() {
      this.innerHTML = `
      <ul class="list-unstyled">
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </ul>
      `;
  }
}

customElements.define("berita-side", BeritaSide);