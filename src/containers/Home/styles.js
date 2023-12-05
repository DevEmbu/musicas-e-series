import styled from 'styled-components'

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height:100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

   

  &::before {
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.4);

  }
`
export const Container = styled.div` 
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: 100%;
   max-width: 1500px;

`



export const Info = styled.div` 
   z-index: 2;
   padding: 20px;
   width: 50%;
  h1{
    font-size: 3rem;
    font-weight: 700;
    color: #ffffff;
     }

  h3{
    font-size: 12px;
    font-weight: 500;
    color: #f0f496;
     }
  p{
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin: 20px 0 30px 0;
     }

`
export const Poster = styled.div`
   z-index: 3;
   img{
    width: 300px;
    border-radius: 20px;
    
   }

`