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
      
       setMovie(results[0])
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
            <h3>Aprendendo Sobre Components no React - pt 02</h3>
              <div>
                <Button red={true}>Assista Agora</Button>
                <Button red={false}>Assista o Trailer</Button>
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