// Write your code here

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const color = isDarkTheme ? 'light-them-color' : 'dark-them-color'
      const bgColor = isDarkTheme ? 'dark-them-bgcolor' : 'light-them-bgcolor'
      const navBgColor = isDarkTheme ? 'bg-color-navabar' : 'light-them-bgcolor'
      const logoImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const clickButton = () => {
        toggleTheme()
      }

      return (
        <nav className={`nav-bar ${navBgColor}`}>
          <img src={logoImg} className="logo" alt="website logo" />
          <ul className="container-home-and-about">
            <Link to="/" className="link">
              <li className={`text ${color}`}>Home</li>
            </Link>

            <Link to="/about" className="link">
              <li className={`text ${color}`}>About</li>
            </Link>
          </ul>

          <button
            className="button"
            type="button"
            onClick={clickButton}
            data-testid="theme"
          >
            <img src={themImg} className="logo" alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
