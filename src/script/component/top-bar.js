class TopBar extends HTMLElement {

  constructor() {
      super();
  }

  connectedCallback(){
      this.render();
  }

  render() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <a class="navbar-brand" href="#">Portal Berita</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/index.html">Home</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Fokus Covid-19</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Ekonomi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Teknologi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sains</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Hiburan</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>`;
  }
}

customElements.define("top-bar", TopBar);