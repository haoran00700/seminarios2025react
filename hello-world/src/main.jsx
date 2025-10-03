import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PrimeiroComp from './components/PrimeiroComp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeiroComp/>
    <App />
  </StrictMode>,
)
