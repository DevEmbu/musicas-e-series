{/*INDEX HOME do container */}

import { useEffect, useState } from "react"
import api from "../../services/api"
import { Background, Info, Poster, Container } from "./styles"
import Button from "../../components/Buttons"

function Home(){
  const [movie, setMovie] = useState()

useEffect(() => {
  async function getMovies(){
    const {
      data: {results}
      } = await api.get('/movie/popular')  
      
       setMovie(results[7])
       console.log(movie)
  }
  
  getMovies()  
}, [])


    return(
      <>
      { movie &&  (

        <Background img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>            
          
         <Container>
         <Info>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <h3>MODULO II REACT</h3>
            <h3>Aprendendo Sobre Components no React</h3>
          <div>
            <button> Assista Agora </button>
            <button> Assista o Trailler </button>
          </div>
          </Info>
          
          <Poster>
            <img alt="poster-do-filme" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
          </Poster>          
          </Container>
          
        </Background>
               )}
        </>
    )
}
export default Home