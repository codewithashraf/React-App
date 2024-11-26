import { useTheme } from "../hooks/useTheme"

export default function Header() {
  
  const [isDark, setIsDark] = useTheme()
  
  // this approach is not for best practics

  // if(isDark){
  //   document.body.classList.add('dark')
  // } else{
  //   document.body.classList.remove('dark')
  // }

  return (
    <header id="header" className={`${isDark ? 'dark' : ''}`}>
      <h2>Where in the worlds?</h2>
      <div id="dark-theme" onClick={() => {
        setIsDark(!isDark)
        localStorage.setItem('isDarkMode', !isDark)
      }}><span><i className={ `fa-solid fa-${isDark ? 'sun' : 'moon'}` }></i></span>
      <h4>{`${isDark ? 'Light' : 'Dark'} Mode`}</h4></div>
  </header>
  )
}
