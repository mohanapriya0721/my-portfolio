import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>helldfeo</p>
       <Header /> 
       <Hero />
       <About />
       <Contact />
       <Footer />
    </>
  )
}

export default App
