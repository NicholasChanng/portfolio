import './index.scss'
import LogoS from '../../assets/images/FlamingLogo.png'
import Menu from '../Menu'

const Sidebar = () => (
  <div className="nav-bar">
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
          <Menu />
        </div>
      </div>
    </div>
  </div>
)

export default Sidebar
