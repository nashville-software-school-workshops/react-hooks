import { useContext } from 'react'
import ThemeContext from './ThemeContext'

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  
  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${theme}`}
    >
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  )
}

export default ThemeToggle