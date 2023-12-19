import styled from 'styled-components'

export const ContainerHeader = styled.div`
  z-index: 99;
  position: fixed; 
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #00ff;

  img{
    width: 70%; 

  }
`

export const Menu = styled.ul` 
  display: flex; 
  list-style: none; 
  gap: 20px;
`

export const Li = styled.li` 
  font-weight: 500; 
  cursor: pointer;
  font-size: 22px;
 
  a{
    color: #ffffff; 
    text-decoration: none;
    
  }
`