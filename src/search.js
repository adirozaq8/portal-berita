import {list_berita, getParam} from './functions'
import './component/top-bar'
import './component/berita-terbaru'
import './component/footer-bar'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'

const param = getParam()

const url = "https://newsapi.org/v2/top-headlines" + param + "&country=id&pageSize=20&apiKey=f97b09fa0aed4a9e91547d77f620f45b"

list_berita(url)