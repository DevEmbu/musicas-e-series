import { getPosterDeFilmes } from "../../Utils/getImages"
import { ContainerCards } from './styles'

function Cards({item}){
{/* Aqui mostra os CARDS do Slider */}
return (
<ContainerCards>
  <img src={getPosterDeFilmes(item.poster_path)} />
  <h3>{item.original_title}</h3>
</ContainerCards>

)
}
export default Cards