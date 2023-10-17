import React from 'react'
import DT from '../Bubble/images/DT.png'
import Slide from 'react-reveal/Slide';






function Data() {
  return (
 
    <div id='Portfolio' className=' w-full  bg-neutral-900 text-teal-50  px-4  m-auto justify-center items-center p-10'>

    <div className='max-w-[1024px] mx-auto grid md:grid-cols-2 gap-20 '>
     
       
          
          <div >
            <Slide left>
            <img className="w-[800px]  h-[300px] pt-10" src={DT} alt="cssIcon"/>
            
            </Slide>
          
          </div>

        <div className='flex flex-col  justify-center text-start'>
        
        
          <Slide right>
         
<h1 className='text-white font-bold text-xl mb-2'>Data App</h1>
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

export default  Data;