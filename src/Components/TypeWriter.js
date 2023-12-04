import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'




const TypeWriter = () => {
    const [text] = useTypewriter({
        words: [  'mobile Apps/>', 'Websites/>', 'Softwares/>'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 90,
    });

    const sym = '<';

  return (

        <h1 className='text-xl w-full  m-auto justify-center items-center font-[LexendZetta] font-light text-center md:text-start'>{sym}I Build 
        <span className=' font-[LexendZetta] text-xl font-light'>{' '}
            {text} 
        </span>
        
        <span className='text-white font-extrabold '>
        <Cursor cursorStyle='|'/>
        </span>


        </h1>
    
  );
};

export default TypeWriter;
