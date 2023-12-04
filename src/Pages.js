import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Portfolio from './components/PagesFolder/Portfolio';
import ContactPage from './components/PagesFolder/ContactPage';
import Skills from './components/PagesFolder/Skills';
import HomePage from './components/PagesFolder/HomePage';
import About from './components/PagesFolder/About'



const Pages = () => {
    
  return (
   
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
    <Route path="/contact" element={<ContactPage/>}/>   
    <Route path="/skills" element={<Skills/>}/>
   
</Routes>

  )
}

export default Pages