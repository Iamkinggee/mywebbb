import React from 'react'


import TD from '../Bubble/images/TD.png'

import Slide from 'react-reveal/Slide';

function TodoProject() {
  return (
 
    <div id='Portfolio' className=' w-full  bg-neutral-900 text-teal-50  px-4  m-auto justify-center items-center mt-20 p-10'>

      <div className='pb-[40px]'>
      <h1 className='flex m-auto pt-10 text-gray-400  justify-center items-center text-center text-4xl font-bold font-mono  '>
<span className='opacity-40'>my</span>
<span className='text-white '>Projects</span>
</h1>
<p className='text-neutral-300 mt-3 text-center'>some of my latest projects</p>
      </div>



    <div className='max-w-[1024px] mx-auto grid md:grid-cols-2 gap-20 '>
     
       
          
          <div >
            <Slide left>
            <img className="w-[800px]  h-[300px] pt-10" src={TD} alt="cssIcon"/>
            
            </Slide>
          
          </div>

        <div className='flex flex-col  justify-center text-start'>
        
        
          <Slide right>
         
<h1 className='text-white font-bold text-xl mb-2'>TO-DO App</h1>
    <p className='text-white text-wrap text-[15px]'>

        JavaScript, Tailwind CSS, React Js.
      
    </p>
    

   
    <div className='p-3'>
                
            <button className='border border-blue-700  rounded mt-3 w-40 h-15 p-3  hover:scale-110 transition text-white text-[15px] font-mono'>
             view
           </button> 
            </div>
          </Slide>
        
        
      

        </div>
       
    </div>

</div>
  )
}

export default TodoProject;