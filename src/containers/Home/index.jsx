{/*INDEX HOME do container */}

import { useEffect, useState } from "react"
import api from "../../services/api"
import { Background, Info, Poster, Container, ContainerButton } from "./styles"

import Slider from '../../components/Sliders'
import Button from "../../components/Buttons"
import { getPosterDeFilmes } from "../../Utils/getImages"



function Home(){
  const [movie, setMovie] = useState()
  const [topMoviesPopular, setTopMoviesPopular] = useState()
  const [seriePrincipal, setSeriePrincipal] = useState()


useEffect(() => {
  //FUNÇÃO VAI CHAMAR O BACKGROUND DO SITE
  async function getMovies(){
    const {
      data: {results}
      } = await api.get('/movie/popular')  
      
       setMovie(results[5])
      // console.log(results[0])
  }
  // FUNÇÃO QUE VAI CHAMAR OS FILMES MAIS VOTADOS
  async function getTopMoviesPopular(){
        const {data: {results}
              } = await api.get('/movie/top_rated')
              //console.log(results)
              setTopMoviesPopular(results)
  }

  //FUNÇÃO VAI CHAMAR AS SERIES TOP DO FILME
  async function getSeriePrincipal(){
        const {data: {results}
        } = await api.get('/tv/top_rated')
         
        setSeriePrincipal(results)
  }


  
  getMovies() 
  getTopMoviesPopular() 
  getSeriePrincipal()
}, [])


    return(
      <>
      { movie &&  (
        <Background img={getPosterDeFilmes(movie.backdrop_path)}>            
          
         <Container>
         <Info>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <h3>MODULO III REACT</h3>
            <h3>Criando Header</h3>
              <ContainerButton>
                <Button red>Assista Agora</Button>
                <Button>Assista o Trailer</Button>
              </ContainerButton>
          </Info>
         
          <Poster>
            <img src={getPosterDeFilmes(movie.poster_path)} alt="poster-do-filme"  />
          </Poster>          
          </Container>
          
        </Background>
               )}
          {topMoviesPopular && <Slider info={topMoviesPopular} title={'Filmes Populares'} />}
          {seriePrincipal && <Slider info={seriePrincipal} title={'Series Principais'} />}
        </>
    )
}
export default Home