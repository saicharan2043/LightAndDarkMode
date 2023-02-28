// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const color = isDarkTheme ? 'light-them-color' : 'dark-them-color'
      const bgColor = isDarkTheme ? 'dark-them-bgcolor' : 'light-them-bgcolor'
      const AboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <>
          <Navbar />
          <div className={`About-container ${bgColor}`}>
            <img src={AboutImg} alt="about" className="About-img" />
            <h1 className={`heading-about ${color}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
