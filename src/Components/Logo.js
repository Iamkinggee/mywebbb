import React from 'react'
import ThemeToggle from '../ThemeToggle'
import { Link } from 'react-router-dom'


const Logo = () => {
 
  return (
    
    <div className='w-full fixed top-0 z-20 m-auto'>
        
        <div className='flex max-w-[1000px]  justify-between mx-auto p-10 bg-transparent'>
        <div className='font-[LexendZetta] text-[15px] md:text-2xl font-bold text-white ' id='text-black'> <Link to='/'>Godsent</Link>   
        <span className='font-bold font-[LexendZetta] text-blue-600 '>.</span>
        
        </div>
        <div className='flex space-x-3 text-white' >
         <ThemeToggle/>
        </div>
        </div>
        
        </div>
  )
}

export default Logo