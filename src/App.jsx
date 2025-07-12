import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Intro from './components/Intro'
import Client from './components/Client'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Intro />
      <Client />
    </>
  )
}

export default App
