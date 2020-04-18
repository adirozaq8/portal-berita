import {list_kurs, konversi_kurs, list_berita} from './functions'
import './component/top-bar'
import './component/kurs-rupiah'
import './component/berita-terbaru'
import './component/konversi-rupiah'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'


const url_kurs = "https://api.exchangeratesapi.io/latest?base=IDR"
const url_berita_ekonomi = "https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=f97b09fa0aed4a9e91547d77f620f45b"

list_kurs(url_kurs)
konversi_kurs(url_kurs)
list_berita(url_berita_ekonomi)