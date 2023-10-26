import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routs/routes.jsx'
import GlobalStyle from './styles/globalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Rotas />    
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>,
)
