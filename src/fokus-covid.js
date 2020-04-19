import {update_covid, list_berita_side} from './functions'
import './component/top-bar'
import './component/update-covid-bar'
import './component/berita-side'
import './component/konversi-rupiah'
import './component/footer-bar'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'

const url_berita_covid = "https://newsapi.org/v2/top-headlines?country=id&category=health&q=covid&apiKey=f97b09fa0aed4a9e91547d77f620f45b"

update_covid()
list_berita_side(url_berita_covid)