class FooterBar extends HTMLElement {

  constructor() {
      super();
  }

  connectedCallback(){
      this.render();
  }

  render() {
      this.innerHTML = `
      <div class="card-footer text-muted text-center">
        <p class="h6 mb-1">
          Thanks to <a href="https://newsapi.org">News API</a>, 
          <a href="https://exchangeratesapi.io/">Foreign exchange rates API</a>, 
          <a href="https://id.wikipedia.org/">Wikipedia</a>, 
          <a href="https://www.alodokter.com/">Alodokter</a>, and 
          <a href="https://kawalcorona.com/api/">Kawal Corona</a>.
        </p>

        <p>Made by Rozaq Adi</p>
      </div>
      `;
  }
}

customElements.define("footer-bar", FooterBar);