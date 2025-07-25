import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Intro from './components/Intro'
import Client from './components/Client'
import Manage from './components/Manage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen">
        <Header />
        <Intro />
        <Client />
        <Manage />
      </div>
    </>
  )
}

export default App
