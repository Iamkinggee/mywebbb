import React from 'react'
import { Link } from 'react-router-dom'
import {BsTelephone,BsGear} from 'react-icons/bs'
import {GoFileDirectory,GoHome,FileDirectoryFill} from 'react-icons/go'
import{AiOutlineUser} from 'react-icons/ai'

import{FaRegUser,FaUser} from 'react-icons/fa'


const NavBar = () => {
  const isActive = true;
  return (
    

<div className='fixed z-50  bottom-0 rounded  w-full font-[poppins]  text-[10px]'>
<div className='max-w-[1000px] flex justify-between items-center m-auto   border-gray-200 dark:bg-gray-700 dark:border-gray-600 opacity-90 '> 



    <div className="grid h-full  grid-cols-5  font-medium p-2 px-2 m-auto ">


    <Link to="/">  
        <button type="button" className="inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-700 group ">

   
        
         <GoHome className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white" aria-hidden="true"/>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white  text-[10px]">Home</span>
        </button>
        </Link>
  
    <Link to="/about">  
        <button type="button" className="inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-700 group ">
        
         <AiOutlineUser className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white" aria-hidden="true"/>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white  text-[10px]">About</span>
        </button>
        </Link>






        
        <Link to="/portfolio">
        <button type="button" className="inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-700 group ">

            <GoFileDirectory className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white" aria-hidden="true"/>




            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white ">Portfolio</span>
        </button>
        </Link>


         <Link to="/skills">
        <button type="button" className="inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-700 group px-5">

        <BsGear className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white" aria-hidden="true"/>

            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white ">Skills</span>
        </button>
        </Link>



          <Link to="/contact">
        <button type="button" className="inline-flex flex-col items-center justify-center  hover:bg-gray-50 dark:hover:bg-gray-700 group">


          
        <BsTelephone className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white" aria-hidden="true"/>


            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white ">Contact</span>
        </button>
        </Link>
    </div>
</div>
</div>


  )
}

export default NavBar
