import React from 'react'
import Nav from './screens/Nav'
import Hero1 from './screens/Hero1'
import MyStack from './Components/MyStack'
import Portfolio from './Components/Portfolio'
import Services1 from './screens/Services1'
import About3 from './screens/Hero1'
import Footer from './screens/Footer'

import Reviews from './Components/Reviews'
import About1 from './screens/About1'
import Footer1 from './screens/Footer1'
import Footer2 from './screens/Footer2'
import Projects from './screens/Projects'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContactForm from './screens/ContactForm'
import ArrowCircleUp from './screens/ArrowCircleUp'
import ArrowCircleDown from './screens/ArrowCircleDown'
import ValForm from './screens/ValForm'
import TodoProject from '../src/screens/ProjectsFolder/TodoProject'
import Data from './screens/ProjectsFolder/Data'
import TechStack from './screens/TechStack'




const App = () => {
  return (
    <div>
      <Nav/>
      <ArrowCircleDown/>
      <Hero1/>
      <About1/>
      <TechStack/>
      <Services1/>
      {/* <Projects/> */}
    <TodoProject/>
    <Data/>
      
      <Footer1/>
      < ArrowCircleUp/>
      <Footer2/>
      {/* <ValForm/> */}
      {/* <ContactForm/> */}

       




    {/* <Toaster /> */}
    </div>
  )
}

export default App
