import React,{useState} from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(true);

  const toggleTheme =()=>{
    setTheme(!theme);
    document.body.classList.toggle("light-theme-variables")
  }
  return (
    <div className={theme? 'switch-mode':'switch-mode light'} onClick={()=>toggleTheme()}>
        <div></div>
    </div>
  )
}

export default ThemeToggle