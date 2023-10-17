import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'




const TypeWriter = () => {
    const [text] = useTypewriter({
        words: [ 'mobile Apps/>','websites/>','softwares/>' ],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 90,
    });

    const sym = '<';

  return (

        <h1 className='m-50 md:text-[25px] text-[20px] font-italic font-mono  text-blue-700'>{sym}I build 
        <span className=' font-mono'>{' '}
            {text} 
        </span>
        
        <span className='text-white font-extrabold '>
        <Cursor cursorStyle='|'/>
        </span>


        </h1>
    
  );
};

export default TypeWriter;
