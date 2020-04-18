const list_berita = url => {
  const berita_terbaru = document.querySelector("ul.list-unstyled")

  fetch(url)
    .then(response => response.json())
    .then(data => {
      filler = ""
      for (let i = 0; i < data.articles.length; i++){
        data.articles[i].title = data.articles[i].title.split("- ")
        const length = data.articles[i].title.length
        filler += `
        <li class="media mb-2 align-items-center list-berita">
          <a href="${data.articles[i].url} class="text-decoration-none">
            <img src="${data.articles[i].urlToImage}" class="mr-3 cover" alt="${data.articles[i].title}" style="height: 150px">
          </a>
          <div class="media-body">
            <a href="${data.articles[i].url}" class="text-decoration-none">
              <h5 class="mt-0 mb-1 text-dark">${data.articles[i].title[0]}</h5>
              <p class="text-dark">${data.articles[i].title[length-1]}</p>
            </a>
          </div>
        </li>
        `
      }
      berita_terbaru.innerHTML = filler
    })
}

const url = "https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=f97b09fa0aed4a9e91547d77f620f45b"
list_berita(url)