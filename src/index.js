import {update_covid, headline, list_berita} from './functions'
import './script/component/top-bar'
import './script/component/update-covid-bar'
import './script/component/berita-terbaru'
import './script/component/headline-section'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'

const url_headline_main = "https://newsapi.org/v2/top-headlines?country=id&apiKey=f97b09fa0aed4a9e91547d77f620f45b"

update_covid()
headline(url_headline_main, 0, 10)
list_berita(url_headline_main, 10)