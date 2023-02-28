// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const color = isDarkTheme ? 'light-them-color' : 'dark-them-color'
      const bgColor = isDarkTheme ? 'dark-them-bgcolor' : 'light-them-bgcolor'
      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      return (
        <>
          <Navbar />
          <div className={`home-container ${bgColor}`}>
            <img src={homeImg} alt="home" className="home-img" />
            <h1 className={`heading-home ${color}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
