import './index.scss';
import LogoS from '../../assets/images/FlamingLogo.png';
import LogoSubtitle from '../../assets/images/nicholaschanng.png';
import {Link,NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faHome,
  faListCheck,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
  <div className = "nav-bar">
    <Link className="logo" to = "/">
        <img src={LogoS} alt = "logo"/>
        <img className = "sub-logo" src={LogoSubtitle} alt = "NicholasChanng"/>
    </Link>
    <nav>
      <NavLink exact = "true" activeclassname= "active" to = "/">
       <FontAwesomeIcon icon = {faHome} color = "#4d4d4e"/>
      </NavLink>
   
      <NavLink exact = "true" activeclassname= "active" className = "experience-link" to = "/experience">
       <FontAwesomeIcon icon = {faListCheck} color = "#4d4d4e"/>
      </NavLink>
   
      <NavLink exact = "true" activeclassname= "active" className = "contact-link"to = "/contact">
       <FontAwesomeIcon icon = {faEnvelope} color = "#4d4d4e"/>
      </NavLink>
    </nav>
  </div>
 )

export default Sidebar;