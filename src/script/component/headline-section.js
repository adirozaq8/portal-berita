class HeadlineSection extends HTMLElement {

  constructor() {
      super();
  }

  connectedCallback(){
      this.render();
  }

  render() {
      this.innerHTML = `
        <div class="row mb-4">
          <div class="col-8">
            <h3 class="card-header rounded-0">Headline</h3>
            <div class="carousel-section">
              <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          <div class="headline-list-section col-4">
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      `;
  }
}

customElements.define("headline-section", HeadlineSection);