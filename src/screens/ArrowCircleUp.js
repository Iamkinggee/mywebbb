import React from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import { Link } from 'react-scroll'

const ArrowCircleUp = () => {
  return (
    <div className='flex justify-end pr-20 p-10  bg-black cursor-pointer '>
        {/* < FaArrowCircleUp id='down' className='text-red-600' size={25}/> */}




        
        <li >
                  <Link to="down" spy={true} smooth={true} offset={-100} duration={500} >
                  < FaArrowCircleUp id='up'  className='text-red-600' size={25}/>
                  </Link>
            </li>
    </div>
  )
}

export default ArrowCircleUp