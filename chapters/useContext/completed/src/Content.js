import { useContext } from 'react'
import ThemeContext from './ThemeContext'

function Content() {
  const { theme } = useContext(ThemeContext)
  
  return (
    <main className={`content ${theme}`}>
      <h2>Welcome to the App</h2>
      <p>This content adapts to the current theme using useContext.</p>
      <p>Current theme: {theme}</p>
      <div className={`nested-content ${theme}`}>
        <h3>Nested Content</h3>
        <p>This box also adapts to the theme!</p>
      </div>
    </main>
  )
}

export default Content