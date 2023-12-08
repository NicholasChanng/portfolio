import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import {faFileLines} from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Bottombar = () => {
    return (
        <>
        <div className='bottom-bar'>
            <div className='container-area'>
                <div className='social-area'>
                    <Link className = "social-button" to = "https://www.linkedin.com/in/nicholaschanng/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                            icon = {faLinkedin}
                            color="white"
                            className="anchor-icon"/>
                    </Link>
                    <Link className = "social-button" to = "https://github.com/NicholasChanng/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                        icon = {faGithub}
                        color="white"
                        className="anchor-icon"/>
                    </Link>
                    <Link className = "social-button" to = "https://docs.google.com/document/d/1X9eCtOV4b3hAHcveuq3-ebRm1y5h25T66c6AxbJhwh0/edit?usp=sharing" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                        icon = {faFileLines}
                        color="white"
                        className="anchor-icon"/>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default Bottombar;