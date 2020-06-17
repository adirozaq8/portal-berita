import {list_berita_side, list_berita, load_berita_lagi} from './functions'
import './component/top-bar'
import './component/berita-side'
import './component/berita-terbaru'
import './component/footer-bar'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'


const url = "http://newsapi.org/v2/top-headlines?country=id&category=technology&pageSize=50&apiKey=f97b09fa0aed4a9e91547d77f620f45b"
const url_berita_side = "http://newsapi.org/v2/top-headlines?country=id&apiKey=f97b09fa0aed4a9e91547d77f620f45b"

list_berita(url)
load_berita_lagi(list_berita, url)
list_berita_side(url_berita_side)