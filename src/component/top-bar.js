import Logo from '../images/article.png'

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
        <a class="navbar-brand align-items-center" href="./index.html"><img src=${Logo} style="height: 30px;"> Portal Berita</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="./index.html">Home</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./covid19.html">Fokus Covid-19</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./ekonomi.html">Ekonomi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./teknologi.html">Teknologi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./olahraga.html">Olahraga</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0" action="./search.html" method="GET">
            <input class="form-control mr-sm-2" type="search" placeholder="Cari berita..." aria-label="Search" name="q">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Cari</button>
          </form>
        </div>
      </nav>`;
  }
}

customElements.define("top-bar", TopBar);