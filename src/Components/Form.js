import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';




function Form(){
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const [isFormValid, setIsFormValid] = useState(false);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
  
      // Update the form data with the new input value
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const validateForm = () => {
      const { name, email, message } = formData;
  
      // Perform your form validation logic here
      const isNameValid = name.trim() !== '';
      const isMessageValid = message.trim() !== '';
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
      // Update the form validity state
      setIsFormValid(isNameValid && isEmailValid && isMessageValid);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zgs8pv5', 'template_yxgnvlf', form.current, 'R0l-7GvzuWc9QCLms')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      
      });
  
  
  
    };
  
  
    const notify = () => toast.success('Succesfully sent!'  );
  
  
    const form = useRef();
  
  
    
    return (
      <div className='w-full pb-10 m-auto justify-center items-center font-[poppins] text-[13px]'>
            <Toaster
          
          position='bottom-center'
          reverseOrder={false}
          toastOptions={{
              success:{
                  iconTheme: {
                      primary: 'green',
                      secondary: 'white',
                  },
              },
          }}
          
           />
  
           <div className='w-full justify-center items-center text-center text-3xl mt-10'>
         
           </div>
  
  
  <div className='w-full '>
      <form onSubmit={handleSubmit} 
      ref={form}
      className='w-full text-center items-center justify-center m-auto  '>
        <div className='w-full px-auto m-auto justify-center items-center'>
       
          <input
            type="text"
            id="name"
            name="name"
            
            value={formData.name}
            onChange={handleInputChange}
            onBlur={validateForm}
          
            className=' leading-tight  items-center m-auto justify-center   w-full p-2 border-b-[4px] border-black outline-none '
            placeholder='Enter Name:' 
          
          />
        </div>
        <div className='w-full m-auto justify-center items-center  py-3'>
          
          <input
            type="email"
            id="email"
            name="email"
          //   name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={validateForm}
           

            className=' leading-tight  items-center m-auto justify-center  w-full p-2 border-b-[4px] border-black outline-none '
            placeholder='Enter Email:' 
          />
        </div>
  
         <div className='w-full '>
                 
                   <textarea 
                  onChange={handleInputChange}
                  onBlur={validateForm}
                  value={formData.message}
                   name="message" 
                   id="message"
                    cols="30" 
                   rows="6" 
                   placeholder='Message'
                 
                   
                  className=' leading-tight  items-center m-auto justify-center   w-full p-2 border-b-[4px] border-black outline-none py-3   '
                   
                   >                   
                  </textarea>
               </div>
   
  
  
  
       
        <div className='w-full justify-center items-center m-auto'>
        <button type="submit" 
  
  disabled={!isFormValid} 
  value="Send" 
  className='bg-blue-700  rounded mt-2 font-semibold w-full h-10    text-white text-[12px] font-[LexendZetta]'
  onClick={notify}

 
  
  
  >
    Submit
  </button>
        </div>
      </form>
      </div>
      </div>

  )

  
  }

 export default Form;
  