{/*INDEX HOME do container */}

import api from "../../services/api"
import { Background } from "./styles"

function Home(){
 async function getMovies(){
    const data = await api.get('/movie/popular')  
    console.log(data)  
  }
  getMovies()
    return(
        <Background img="https://image.tmdb.org/t/p/original/kuf6dutpsT0vSVehic3EZIqkOBt.jpg">            
            <h1>Home</h1>
            <p>Esta é uma pagina Home</p>
            <h2>MODULO II REACT</h2>
            <h3>Estilizando o Background</h3>
        </Background>
    )
}
export default Home