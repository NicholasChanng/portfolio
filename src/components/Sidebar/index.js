import './index.scss';
import LogoS from '../../assets/images/FlamingLogo.png';
import {Link,NavLink} from 'react-router-dom';



const Sidebar = () => (
  <div className = "nav-bar">
    <Link className="logo" to = "/">
        <img src={LogoS} alt = "logo"/>
        <h1 className='sub-logo'>Nicholas Channg</h1>
    </Link>
    <nav className='nav'>
      <NavLink exact = "true" activeclassname= "active" to = "/">
       {/* <FontAwesomeIcon icon = {faHome} color = "#4d4d4e"/> */}
       Home
      </NavLink>
   
      <NavLink exact = "true" activeclassname= "active" className = "experience-link" to = "/experience">
       {/* <FontAwesomeIcon icon = {faListCheck} color = "#4d4d4e"/> */}
       Experience
      </NavLink>
   
      <NavLink exact = "true" activeclassname= "active" className = "contact-link"to = "/contact">
       {/* <FontAwesomeIcon icon = {faEnvelope} color = "#4d4d4e"/> */}
       Contact
      </NavLink>
    </nav>
  </div>
 )

export default Sidebar;