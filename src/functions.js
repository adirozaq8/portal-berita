export const list_berita = (url, startIdx=0, endIdx=0) => {
  const berita_terbaru = document.querySelector("berita-terbaru section ul")
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let filler = ""
      if (!data.articles.length){
        filler = `<h4 class="mt-3 mb-1 text-dark">Berita tidak ditemukan satupun</h4>`
      }
      for (let i = startIdx; i < (endIdx || data.articles.length); i++){
        data.articles[i].title = data.articles[i].title.split("- ")
        const length = data.articles[i].title.length
        filler += `
        <li class="media mb-2 align-items-center list-berita">
          <a href="${data.articles[i].url}" class="text-decoration-none">
            <img src="${data.articles[i].urlToImage}" class="mr-3 cover">
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
      if(berita_terbaru.innerHTML.indexOf("<li") != -1){
        berita_terbaru.innerHTML += filler
      } else {
        berita_terbaru.innerHTML = filler
      }
    })
}

export const list_berita_side = url => {
  const berita_terbaru = document.querySelector("berita-side ul")
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let filler = ""
      for (let i = 0; i < 5; i++){
        data.articles[i].title = data.articles[i].title.split("- ")[0]

        filler += `
        <li class="media mb-2 align-items-center list-berita">
        <a href=${data.articles[i].url}>
          <div class="card">
            
              <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="${data.articles[i].title}">
            
            <div class="card-body p-2">
              <p class="card-text text-dark">${data.articles[i].title}</p>
            </div>
          </div>
        </a>
        </li>
        `
      }
      berita_terbaru.innerHTML = filler
    })
}

export const update_covid = () => {
  const url_update_covid = "https://api.kawalcorona.com/indonesia/"
  const update_covid_positif = document.querySelector("update-covid-bar section div div div h1.text-warning")
  const update_covid_sembuh = document.querySelector("update-covid-bar section div div div h1.text-success")
  const update_covid_meninggal = document.querySelector("update-covid-bar section div div div h1.text-danger")
  fetch(url_update_covid)
    .then(response => response.json())
    .then(data => {
      update_covid_positif.innerHTML = data[0].positif
      update_covid_sembuh.innerHTML = data[0].sembuh
      update_covid_meninggal.innerHTML = data[0].meninggal
    })
}

export const headline = (url, startIdx=0, endIdx=0) => {
  const headline_main = document.querySelector("headline-section div.carousel-section")
  const headline_list = document.querySelector("headline-section div.headline-list-section")
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let filler = ""
      filler += `<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators">`
      for (let i = 0; i < 5; i++){
        if(i == 0){
          filler += `<li data-target="#carouselExampleCaptions" data-slide-to="${i}" class="active"></li>`
        } else {
          filler += `<li data-target="#carouselExampleCaptions" data-slide-to="${i}"></li>`
        }
      }
      filler += `</ol><div class="carousel-inner">`
      for (let i = startIdx; i < 5; i++){
        data.articles[i].title = data.articles[i].title.split("- ")[0]
        if(i == 0){
          filler += `<div class="carousel-item active">`
        } else {
          filler += `<div class="carousel-item">`
        }
        filler += `
        <img src="${data.articles[i].urlToImage}" class="d-block mx-auto carousel-img" alt="${data.articles[i].title}" style="height: 400px;">
          <div class="carousel-caption d-none d-md-block">
            <div class="card text-white bg-light mb-3">
              <a href="${data.articles[i].url}" class="card-body text-dark">
                <h5 class="card-title">${data.articles[i].title}</h5>
              </a>
            </div>
          </div>
        </div>`
      }
      filler += `
      </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>`
      headline_main.innerHTML = filler

      filler = ""
      for (let i = 5; i < (endIdx || 10); i++){
        data.articles[i].title = data.articles[i].title.split("- ")[0]
        filler += `
        <div class="m-0">
          <div class="row no-gutters list-berita">
              <div class="col-md-4 align-self-center">
                <div>
                  <img src="${data.articles[i].urlToImage}" class="rounded-0 card-img" alt="${data.articles[i].title}">
                </div>
              </div>
              <div class="col-md-8">
                <div class="p-2">
                  <a href="${data.articles[i].url}" class="text-dark"><p class="card-text">${data.articles[i].title}</p></a>
                </div>
              </div>
          </div>
        </div>`
      }
      headline_list.innerHTML = filler
    })
}

export const list_kurs = url => {
  const kurs_terbaru = document.querySelector("kurs-rupiah ul")
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const currency = ["USD", "GBP", "EUR", "SGD", "AUD", "JPY", "CNY"]
      let filler = ""
      for (let i = 0; i < currency.length; i++){
        filler += `
        <li class="rounded-0 list-group-item list-group-item-action">Rp${Math.round(1/data.rates[currency[i]])} / ${currency[i]} </li>
        `
      }
      kurs_terbaru.innerHTML = filler
    })
}

export const konversi_kurs = url => {
  const idr = document.querySelector("konversi-rupiah #IDR")
  const usd = document.querySelector("konversi-rupiah #USD")
  fetch(url)
    .then(response => response.json())
    .then(data => {
      idr.addEventListener("keyup", function(e){
        usd.value = idr.value * data.rates.USD
      })
    })
}

export const getParam = () => {
  return window.location.search
}

export const load_berita_lagi = (fungsi_list_berita, url, start=20) =>{
  let counter = start
  window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      fungsi_list_berita(url, counter, counter+10)
      counter += 10
    }
  };
}