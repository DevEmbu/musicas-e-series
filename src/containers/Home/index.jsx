{/*INDEX HOME do container */}

import api from "../../services/api"

function Home(){
 async function getMovies(){
    const data = await api.get('/movie/popular')  
    console.log(data)  
  }
  getMovies()
    return(
        <div>
            
            <h1>Home</h1>
            <p>Esta é uma pagina Home</p>
            <h2>MODULO II REACT</h2>
            <h3>Routes Outlet</h3>
        </div>
    )
}
export default Home