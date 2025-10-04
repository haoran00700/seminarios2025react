import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PrimeiroComp from './components/PrimeiroCom.jsx'
import Mensagem from './components/mensagem.jsx'
import MensagemProps from './components/MensagemProps.jsx'
import Contador from './components/Contador';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeiroComp/>
   <Mensagem titulo = "ola haoran!" subtitulo = "Esse e um exemplo de props no React" />
    <MensagemProps titulo = "oficina" subtitulo = "react"/>
    <MensagemProps titulo = "oficina react " subtitulo = "turma noite"/>
    <Contador title = 'primeiro contador '/>
    <br></br>
    <Contador title = 'segundo contador'/>
      <br></br>
      <Contador title = 'terceiro contador'/>
        <br></br>
    <App />
  </StrictMode>
)
