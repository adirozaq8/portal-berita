class KonversiRupiah extends HTMLElement {

  constructor() {
      super();
  }

  connectedCallback(){
      this.render();
  }

  render() {
      this.innerHTML = `
      <h5 class="rounded-0 card-header mb-2">Konversi Rupiah -> US Dollar</h5>
      <div id="konversi-rupiah">
        <div class="input-group mb-1">
          <div class="input-group-prepend">
            <span class="input-group-text">Rp</span>
          </div>
          <input id="IDR" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">US$</span>
          </div>
          <input id="USD" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" disabled>
        </div>
      </div>
      `;
  }
}

customElements.define("konversi-rupiah", KonversiRupiah);