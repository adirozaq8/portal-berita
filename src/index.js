import {update_covid, headline, list_berita, load_berita_lagi} from './functions'
import './component/top-bar'
import './component/update-covid-bar'
import './component/berita-terbaru'
import './component/headline-section'
import './component/footer-bar'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'

const url_headline_main = "https://newsapi.org/v2/top-headlines?country=id&pageSize=50&apiKey=f97b09fa0aed4a9e91547d77f620f45b"

update_covid()
headline(url_headline_main, 0, 10)
list_berita(url_headline_main, 10)
load_berita_lagi(list_berita, url, 10)