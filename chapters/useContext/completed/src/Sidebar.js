import { useContext } from 'react'
import ThemeContext from './ThemeContext'

function Sidebar() {
  const { theme } = useContext(ThemeContext)
  
  return (
    <aside className={`sidebar ${theme}`}>
      <h3>Sidebar</h3>
      <ul className="sidebar-nav">
        <li className="sidebar-nav-item">Home</li>
        <li className="sidebar-nav-item">About</li>
        <li className="sidebar-nav-item">Contact</li>
      </ul>
      <div className={`sidebar-info ${theme}`}>
        Theme affects all components!
      </div>
    </aside>
  )
}

export default Sidebar