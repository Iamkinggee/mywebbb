import React from 'react'
import { FaArrowCircleDown } from 'react-icons/fa'
import { Link } from 'react-scroll'

const ArrowCircleDown = () => {
  return (
    <div className='flex justify-end pr-20 cursor-pointer '>
        {/* < FaArrowCircleDown className='text-red-600' size={25}/> */}



           <li >
                  <Link to="up" spy={true} smooth={true} offset={-50} duration={500} >
                  < FaArrowCircleDown  id='down' className='text-neutral-700' size={25}/>
                  </Link>
            </li>
    </div>
  )
}

export default ArrowCircleDown;