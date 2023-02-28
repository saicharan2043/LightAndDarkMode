// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const color = isDarkTheme ? 'light-them-color' : 'dark-them-color'
      const bgColor = isDarkTheme ? 'dark-them-bgcolor' : 'light-them-bgcolor'

      return (
        <>
          <Navbar />
          <div className={`NotFound-container ${bgColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="NotFound-img"
            />
            <h1 className={`heading-Notfound ${color}`}>Lost Your Way?</h1>
            <p className={`paragraph ${color}`}>
              We cannot seem to find the page
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
