import React from 'react'
import Hero from './Pages/Hero'
import ProductPage from './Pages/Product'
import Navbar from './Pages/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'




const App = () => {
  return (
    <div>
      <div className="mb-4"><Navbar/></div>
      <Hero/>
      <ProductPage/>
      <About/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
