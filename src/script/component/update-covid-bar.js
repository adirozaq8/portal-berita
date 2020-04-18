class UpdateCovidBar extends HTMLElement {

  constructor() {
      super();
  }

  connectedCallback(){
      this.render();
  }

  render() {
      this.innerHTML = `
      <section class="mb-4">
        <h5 class="rounded-0 card-header">Update Covid-19</h5>
        <div class="card-group">
          <div class="rounded-0 card">
            <div class="card-body">
              <h5 class="card-title">Positif</h5>
              <h1 class="display-1 text-warning text-center">
                <div class="spinner-grow" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </h1>
            </div>
          </div>
          <div class="rounded-0 card">
            <div class="card-body">
              <h5 class="card-title">Sembuh</h5>
              <h1 class="display-1 text-success text-center">
                <div class="spinner-grow" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </h1>
            </div>
          </div>
          <div class="rounded-0 card">
            <div class="card-body">
              <h5 class="card-title">Meninggal</h5>
              <h1 class="display-1 text-danger text-center">
                <div class="spinner-grow" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </section>
      `;
  }
}

customElements.define("update-covid-bar", UpdateCovidBar);