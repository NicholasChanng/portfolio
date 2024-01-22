import './index.scss'
import LogoS from '../../assets/images/FlamingLogo.png'
import Menu from '../Menu'
import Hamburger from './Hamburger'
import { useState } from 'react'

const Sidebar = () => {
  const [navbar, setNavbar] = useState(true)

  let lastScrollY = window.scrollY

  window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
      if (navbar) setNavbar(!navbar)
    } else {
      if (!navbar) setNavbar(!navbar)
    }

    lastScrollY = window.scrollY
  })

  return (
    <div id={`${navbar ? 'show-nav' : 'hidden-nav'}`} className="nav-bar">
      <div className="nav-bar-page">
        <div className="content-area">
          <div className="logo">
            <a href="#home">
              <img src={LogoS} alt="logo" />
            </a>
            <a href="#home">
              <h1 className="sub-logo">Nicholas Channg</h1>
            </a>
          </div>
          <div className="link-area">
            <nav className="links">
              <a href="#home">Home</a>

              <a href="#education">Education</a>

              <a href="#portfolio">Portfolio</a>

              <a href="#contact">Contact</a>
            </nav>
            <Hamburger />
            <Menu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
