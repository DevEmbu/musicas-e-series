{/* INDEX do Header */}

import { Link } from 'react-router-dom'
import Logo from '../../assets/DevEmbu-logo.png'
import { ContainerHeader, Menu, Li } from './styles'


function Header(){

    return(
        <ContainerHeader>
         <img src={Logo} alt="Logo-DevEmbu" />
          <Menu>
            <Li>
              <Link to='/'>Home</Link>
            </Li>
            <Li>
              <Link to='/filmes'>Series</Link>
            </Li>
            <Li>
              <Link to='series'>Filmes</Link>
            </Li>
          </Menu>
        </ContainerHeader>
    )
}
export default Header