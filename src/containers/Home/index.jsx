{/*INDEX HOME do container */}

import { useState } from "react"
import api from "../../services/api"
import { Background } from "./styles"

function Home(){
  const [movie, setMovie] = useState()

 async function getMovies(){
    const data = await api.get('/movie/popular')  
    
    setMovie(data.data.results[1])
  }
  getMovies()
    return(
        <Background img="https://api.themoviedb.org/3/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg">            
            <h1>{movie.title}</h1>
            <p>Esta é uma pagina Home</p>
            <h2>MODULO II REACT</h2>
            <h3>useStates - REACT II</h3>
        </Background>
    )
}
export default Home