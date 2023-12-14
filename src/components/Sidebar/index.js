import './index.scss';
import LogoS from '../../assets/images/FlamingLogo.png';
import {Link} from 'react-router-dom';
import Menu from '../Menu'



const Sidebar = () => (
  <div className='nav-bar'>
    <div className='nav-bar-page'>
      <div className = "content-area">
        <Link className="logo" to = "/">
            <img src={LogoS} alt = "logo"/>
            <h1 className='sub-logo'>Nicholas Channg</h1>
        </Link>
        <div className='link-area'>
          <nav className='links'>
            <a href = "#home">
              Home
            </a>

            <a href = "#education">
            Education
            </a>
        
            <a href = "#portfolio">
            Experience
            </a>
        
            <a href = "#contact">
            Contact
            </a>
          </nav>
          <Menu/>
        </div>
      </div>
    </div>
  </div>
 )

export default Sidebar;