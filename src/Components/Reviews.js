import React from 'react'
import MyPhoto2 from '../assets/images/MyPhoto2.png'

const Reviews = () => {
  return (
    <div className='mt-50 pt-30 h-60 block justify-center items-center m-auto  '>     
  
    <div>
    <h1 className='block text-gray-400  justify-center items-center text-center text-5xl font-bold  pt-10 font-mono  '>
    <span className='text-white '>Reviews</span>    
    <span className='opacity-40'>.</span>
    </h1>
    </div>




  <div className='flex w-[1240px]  m-auto gap-10'> 
 
         <div className='flex  pt-20   justify-center  h-60 m-auto '>

<div className='w-1/2 '>
<div className='pl-20'>
           <img className='justify-center h-[150px] ' src={MyPhoto2} alt="rrr" />
        </div>
</div>
<div>
  
  <p className='text-white text-wrap text-[14px] p-5 '>
    Lorem ipsum dolor sit, amet consectetur <br />
    adipisicing. Porro at repudiandae, eaque quod <br />
     id sapiente beatae possimus voluptatibus 
     consectetur recusandae 
    <h1 className='text-white font-bold text-2xl pt-3'>- King Ade</h1>
    
  </p>
</div>
   </div>





  
         <div className='flex  pt-20  item-center justify-center  h-60 m-auto '>

<div className='w-1/2 '>
<div className='pl-20'>
           <img className='justify-center  h-[150px]  ' src={MyPhoto2} alt="rrr" />
        </div>
</div>
<div>
  
  <p className='text-white text-wrap text-[14px] p-6'>
     Lorem ipsum dolor sit, amet consectetur <br />
    adipisicing. Porro at repudiandae, eaque quod <br />
     id sapiente beatae possimus voluptatibus 
     consectetur recusandae 
    <h1 className='text-white font-bold text-2xl mb-5 pt-3 '>- Olushola Davies</h1>
    
  </p>
</div>
   </div>
  </div>
   



     




















   
    </div>
   
  )
}

export default Reviews
