/* CCS DO  BUTTON */
import styled, { css } from 'styled-components'

const buttonStyles= css`
   background: transparent;
   color: #ffffff;
   border: 3px solid #ffffff;
   border-radius: 30px;
   padding: 10px 20px;
   font-size: 20px;
   font-weight: 500;
   cursor: pointer;
  
   &:hover{
      background: #ffffff;
      color: #ff0000;
   }

   `
export const ButtonWhite = styled.button`
   ${buttonStyles}
`
export const ButtonRed = styled.button`
   ${buttonStyles}

   background: #ff0000;
   border: 4px solid transparent; 
   color: #ffffff;
   

   &:hover{
      box-shadow: 0px 0px 31px 9px rgba(204,197,59,1);
      
   }
`