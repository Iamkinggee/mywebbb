import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


function ValForm() {
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
    <div className='flex  m-auto justify-start items-start '>
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
    <form onSubmit={handleSubmit} 
    ref={form}
    className='w-1/3 h-50% p-8 md: mt-10'>
      <div>
        <label htmlFor="name" className='text-white'>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          
          value={formData.name}
          onChange={handleInputChange}
          onBlur={validateForm}
          className='border-0 leading-tight bg-slate-300    rounded w-[300px] p-2'
          placeholder='Enter Name:' 
        
        />
      </div>
      <div>
        <label htmlFor="email" className='text-white '>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
        //   name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={validateForm}
          className='border-0 leading-tight bg-slate-300    rounded w-[300px] p-2'
          placeholder='Enter Email:' 
        />
      </div>

      <div className='mt-4'>
                 <label className='text-white'>Message:</label>
                 <textarea 
                 type="text"
                onChange={handleInputChange}
                onBlur={validateForm}
                value={formData.message}
                 name="message" 
                 id="message"
                  cols="30" 
                 rows="6" 
                 placeholder='Message'
                 className='rounded  w-[300px] p-2   pb-10 bg-slate-300 '>                   
                </textarea>
             </div>




     
      <button type="submit" 

      disabled={!isFormValid} 
      value="Send" 
      className='bg-blue-700  rounded mt-2 font-bold w-[300px] h-10 p-2   text-white text-[20px] font-mono'
      onClick={notify}

     
      
      
      >
        Submit
      </button>
    </form>
    </div>
  );
}

export default ValForm;


