import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileLines} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
// import {
//     faListCheck,
//     faEnvelope,
//   } from '@fortawesome/free-solid-svg-icons'
import './index.scss';
import Loader from 'react-loaders';
import LogoS from '../../assets/images/nick2.jpeg';
import wave from '../../assets/images/wave.png';
import codology from '../../assets/images/codology.png';
import html from '../../assets/images/logo1.png';
import css from '../../assets/images/logo2.png';
import javascript from '../../assets/images/logo3.png';
import react from '../../assets/images/logo192.png';
import java from '../../assets/images/java.png'
import python from '../../assets/images/python.png'
import njccic from '../../assets/images/njccic.png'




const Home = () =>{
    return (
        <>
        <section className='container home-section'>
            <div className="flex-box">
                <div className='left-text'>
                    <h1>
                        <span className='welcome'>Welcome!</span><img src={wave} alt = 'wave' className = 'wave'/>
                        <br/> My name is Nicholas Channg <br/> 
                        I am a Freshman studying Computer Science at Cornell University
                    </h1>
                    <div className='buttons'>
                        {/* <Link className = "flat-button" to = "/experience">
                        <FontAwesomeIcon
                            icon = {faListCheck}
                            color="white"
                            className="anchor-icon"/>
                            &nbsp; Experience</Link>
                        <Link className = "flat-button" to = "/contact">
                        <FontAwesomeIcon
                            icon = {faEnvelope}
                            color="white"
                            className="anchor-icon"/>
                            &nbsp; Contact Me</Link> */}
                        <Link className = "flat-button" to = "https://www.linkedin.com/in/nicholaschanng/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                            icon = {faLinkedin}
                            color="white"
                            className="anchor-icon"/>
                            &nbsp; LinkedIn</Link>
                        <Link className = "flat-button" to = "https://github.com/NicholasChanng/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                            icon = {faGithub}
                            color="white"
                            className="anchor-icon"/>
                            &nbsp; GitHub</Link>
                        <Link className = "flat-button" to = "https://docs.google.com/document/d/1X9eCtOV4b3hAHcveuq3-ebRm1y5h25T66c6AxbJhwh0/edit?usp=sharing" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                            icon = {faFileLines}
                            color="white"
                            className="anchor-icon"/>
                            &nbsp; Resume</Link>
                    </div>
                </div>
                <span className='photo-zone'>
                        <img src={LogoS} alt = "logo"/>
                </span>
            </div>
        </section>

        <section className='container skills-section'>
            <div className='skills-page'>
                <div className='flex-box'>
                    <h1 className='skills-text'>
                        Skills 🛠️
                    </h1>
                    <div className='skills-images'>
                        <img className = 'skill' src = {javascript} alt = 'skill'/>
                        <img className = 'skill' src = {css} alt = 'skill'/>
                        <img className = 'skill' src = {html} alt = 'skill'/>
                        <img className = 'skill' src = {react} alt = 'skill'/>
                        <img className = 'skill' src = {java} alt = 'skill'/>
                        <img className = 'skill' src = {python} alt = 'skill'/>
                    </div>
                </div>
            </div>

        </section>
        

        <section className='container experience-section'>
            <div className="experience-page">
                <div className='flex-box'>
                    <h1 className='title'>
                        Portfolio 💼
                    </h1>
                    <p className='title-sub'>
                        Here is some of my work experience!
                    </p>

                    <Experience1
                    title = 'Codology'
                    position = 'Frontend Developer' 
                    description = ""
                    imagesrc = {codology}
                    imagetitle = 'codology'
                    to = 'https://www.codology.org/'
                    />

                    <Experience2
                    title = 'New Jersey Cybersecurity and Communications Integration Cell'
                    position = 'Intern' 
                    description = ""
                    imagesrc = {njccic}
                    imagetitle = 'njccic'
                    to = "https://www.cyber.nj.gov/"
                    />

                </div>
            </div>
        </section>
        <Loader type="ball-pulse-sync" />
        </>
    );
}


const Experience1 = (prop) =>{
    //title, position, description, imagesrc, imagetitle

    return(
        <div className='job-content'>
            <div className='description-area'>
                <h1 className='title-text'>
                    {prop.title}
                </h1>
                <p className='position-text'>
                    {prop.position}
                </p>
                <p className='description-text'>
                    {prop.description}
                </p>
            </div>
            <div className='image-area'>
                 <Link to = {prop.to} target = "_blank" rel="noreferrer">
                  <img src = {prop.imagesrc} className = 'image-prop' alt = {prop.imagetitle}/>
                </Link>
            </div>
        </div>
    );
}

const Experience2 = (prop) =>{
    //title, position, description, imagesrc, imagetitle

    return(
        <div className='job-content'>
            <div className='image-area'>
                <Link to = {prop.to} target = "_blank" rel="noreferrer">
                  <img src = {prop.imagesrc} className = 'image-prop' alt = {prop.imagetitle}/>
                </Link>
            </div>
            <div className='description-area'>
                <h1 className='title-text'>
                    {prop.title}
                </h1>
                <p className='position-text'>
                    {prop.position}
                </p>
                <p className='description-text'>
                    {prop.description}
                </p>
            </div>
        </div>
    );
}

export default Home;