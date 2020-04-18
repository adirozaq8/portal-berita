

class KursRupiah extends HTMLElement {

  constructor() {
      super();
  }

  connectedCallback(){
      this.render();
  }

  render() {
      this.innerHTML = `
      <h5 class="rounded-0 card-header">Kurs Rupiah</h5>
      <ul id="kurs" class="list-group mb-4">
        <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </ul>
      `;
  }
}

customElements.define("kurs-rupiah", KursRupiah);