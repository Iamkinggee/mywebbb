// import React from 'react'
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import toast, { Toaster } from 'react-hot-toast';
// import { FaCircleCheck } from 'react-icons/fa';


// const Form1 = () => {


//     const form = useRef();

//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs.sendForm('service_zgs8pv5', 'template_yxgnvlf', form.current, 'R0l-7GvzuWc9QCLms')
//         .then((result) => {
//             console.log(result.text);
//             console.log("message sent")
//             e.target.reset();
//         }, (error) => {
//             console.log(error.text);
//         });


//     };



//     const notify = () => toast.success('Succesfully sent to G!'  );





//   return (
//     <div className='w-full m-auto justify-center items-center  '>
//         <Toaster
        
//        position='bottom-center'
//        reverseOrder={false}
//        toastOptions={{
//            success:{
//                iconTheme: {
//                    primary: 'green',
//                    secondary: 'white',
//                },
//            },
//        }}
       
//         />

   


// <div className='flex  m-auto justify-start items-start  '>
    
// <form className='w-1/3 h-50% p-8 md: mt-10' ref={form} onSubmit={sendEmail}>
//             <div>
//                 <label className='text-white'>Name:</label>
//                 <input type="text"  name="user_name"  placeholder='Enter Name:' className='border-0 leading-tight bg-slate-300    rounded w-[300px] p-2' 
                
//                 />
//             </div>
//             <div className='mt-4'>
//                 <label className='text-white'>Email:</label>
//                 <input type="email" name="user_email" placeholder='Enter Email:' className='rounded w-[300px] p-2 bg-slate-300 ' />
//             </div>


//             <div className='mt-4'>
//                 <label className='text-white'>Message:</label>
//                 <textarea name="message" id="" cols="30" rows="6" placeholder='Message'
//                 className='rounded  w-[300px] p-2   pb-10 bg-slate-300 '>                   
//                 </textarea>
//             </div>
//              <div>
//              <button onClick={notify} type="submit" value="Send" className='bg-blue-700  rounded mt-2 font-bold w-[300px] h-10 p-2 hover:scale-110 transition text-black text-[20px] font-mono'>
//        send
//             </button>

//             {/* <input type="submit" value="Send" /> */}
//              </div>

    
//         </form>
      
       
// </div>




//     </div>
//   )
// }

// export default Form1
