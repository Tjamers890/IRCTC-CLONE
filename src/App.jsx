import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Service from './components/Services'
import Cards from './components/Cards'
import Contact from './components/Contact'
import Footer from './components/Footer'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Service />
      <Cards />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
