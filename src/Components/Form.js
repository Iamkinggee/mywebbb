import React from 'react'

const Form = () => {
  return (
    <div className='mt-80 '>

     <div>
    <h1 className='block text-gray-400  justify-center items-center text-center text-5xl font-bold mt-30 pt-10 font-mono  '>
    <span className='text-white '>contact</span>    
    <span className='opacity-40'>Me</span>
    </h1>


    </div>


<div className='flex  m-auto justify-center items-center  h-[400px]'>
    
<form className='w-1/3 h-full p-8 mt-20'>
            <div>
                <label htmlFor="" className='text-white'>Name:</label>
                <input type="text" placeholder='Enter Name:' className='border-0 leading-tight bg-slate-300    rounded w-[400px] p-3' />
            </div>
            <div className='mt-4'>
                <label htmlFor="" className='text-white'>Email:</label>
                <input type="text" placeholder='Enter Email:' className='rounded w-[400px] p-3 bg-slate-300 ' />
            </div>

            <div className='mt-4'>
                <label htmlFor="" className='text-white'>Subject:</label>
                <input type="text" placeholder='Enter subject:' className='rounded w-[400px] p-3 bg-slate-300 ' />
            </div>


            <div className='mt-4'>
                <label htmlFor="" className='text-white'>Message:</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Message'
                className='rounded  w-[400px] p-3 pb-10  bg-slate-300 '>                   
                </textarea>
            </div>
             <div>
             <button className='bg-blue-700  rounded mt-2 font-bold w-40 h-15 p-2 hover:scale-110 transition text-black text-[20px] font-mono'>
       send
            </button>
             </div>
            
        </form>
</div>

      
    </div>
  )
}

export default Form
