import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileLines} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import {
    faListCheck,
    faEnvelope,
  } from '@fortawesome/free-solid-svg-icons'
import './index.scss';
import Loader from 'react-loaders';

const Home = () =>{
    return (
        <>
        <div className = "container home-page">
            <div className = "text-zone">
                <h1>
                    <span className='welcome'> Welcome! </span><br/> My Name is Nicholas Channg <br/> 
                    I am a Freshman studying Computer Science at Cornell University
                </h1>
                <Link className = "flat-button" to = "/experience">
                <FontAwesomeIcon
                    icon = {faListCheck}
                    color="#4d4d4e"
                    className="anchor-icon"/>
                    &nbsp; Experience</Link>
                <Link className = "flat-button" to = "/contact">
                <FontAwesomeIcon
                    icon = {faEnvelope}
                    color="#4d4d4e"
                    className="anchor-icon"/>
                    &nbsp; Contact Me</Link>
                <Link className = "flat-button" to = "https://www.linkedin.com/in/nicholaschanng/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                    icon = {faLinkedin}
                    color="#4d4d4e"
                    className="anchor-icon"/>
                    &nbsp; LinkedIn</Link>
                <Link className = "flat-button" to = "https://github.com/NicholasChanng/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                    icon = {faGithub}
                    color="#4d4d4e"
                    className="anchor-icon"/>
                    &nbsp; GitHub</Link>
                <Link className = "flat-button" to = "https://docs.google.com/document/d/1X9eCtOV4b3hAHcveuq3-ebRm1y5h25T66c6AxbJhwh0/edit?usp=sharing" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                    icon = {faFileLines}
                    color="#4d4d4e"
                    className="anchor-icon"/>
                    &nbsp; Resume</Link>
             </div>
        </div>
        <Loader type="ball-pulse-sync" />
        </>
    );
}

export default Home;