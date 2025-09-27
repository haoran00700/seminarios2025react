import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import banana from './assets/banana.jfif'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <h1>Oficina react</h1>
    <h2>{Date()}</h2>
    <h3>{Number()}</h3> 
       <a id = "link" style={{color :"red"}} href = "https://www.google.com/">google</a>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JAVASCRIPT</li>
      <li>Introducao React </li>
      <li>Hello World</li>
    </ul>
    <p>lista estatica utilizando do react </p>
    <img src='/macaco.jfif' width="100" height="100"></img>
    <br/>
    <img src={banana} width="100" height="100"></img>
  </div>
  )
}

export default App
