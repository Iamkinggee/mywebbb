import React from 'react'
// import React, { Children }  from 'react'
import NavBar from './components/NavBar'
import Logo from './components/Logo'
import {  BrowserRouter as Router} from 'react-router-dom';
// import FloatingBg from './components/FloatingBg'
import Pages from './Pages';
// import ReactGA from "react-ga4";
// import React, { Children } from 'react'
// import { ThemeProvider } from './components/DarkAndLight/ThemeContext';
// import {ThemeProvider, useTheme} from './components/DarkAndLight/ThemeContext'

// const TRACKING_ID = "G-5F7RMBE2C2"
// ReactGA.initialize(TRACKING_ID);
// const App = ({Children}) => {
const App = () => {
  
 
  return (



  
    <div> 
        <Router> 
          <Logo/>     
        <Pages/>    
        <NavBar/>      
      </Router>   
    </div>


























//     <>
//     <div> 
      
// <>
// <FloatingBg/>
// {Children}
// </> 
//         <Router>
//         <Logo/>

//         <>
//         <Pages/>   
//         </>

//         <NavBar/>
//       </Router>   
//     </div>
// </>





    // <div>  

    //   <>
    //     <FloatingBg/>
    //      {Children}
    //      </>
  
    //     <Router>
    //     <Logo/>
        
    //     <>
    //     <Pages/>
      
    //      </>

    //      <NavBar/>
    //     </Router>
 
    // </div>
   
    
  )
}

export default App
