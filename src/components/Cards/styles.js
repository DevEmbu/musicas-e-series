import styled from "styled-components";


export const ContainerCards = styled.div`
   display: flex; 
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding-right: 20px;

   img{
    border-radius: 20px; 
    width: 200px;
    height: 100%;
    transition: transform .3s; /* Animação */
    
    &:hover{
        box-shadow: 0px 0px 17px 5px rgba(250,250,250, 0.5);
        cursor: pointer;
        transform: scale(1.6); /* Zoom para a animação */
        }
         
   }

   h2{
    color: #ffffff;
    margin-top: 5px; 
    text-align: center;
    
   }

`