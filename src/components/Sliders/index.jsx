
//import { getPosterDeFilmes } from '../../Utils/getImages'
import Cards from '../Cards'
import { ContainerSlider } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'

function  Slider({info, title}) {
   //console.log(info, title)
    return (
                
        <>
        {/* Aqui mostra os Slider */}
        <ContainerSlider>
            <h2>{title}</h2>
           <Swiper 
                  grabCursor
                  spaceBetween={10}
                  slidesPerView={'auto'}
                  className='swiper'
                  >
            {info.map((item, index) => (  
            <SwiperSlide key={index}>
              <Cards item={item} />
            </SwiperSlide> 
            )) }           
           </Swiper>
        </ContainerSlider>
        </>
    )
}
export default Slider