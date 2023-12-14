import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
// import {
//     faListCheck,
//     faEnvelope,
//   } from '@fortawesome/free-solid-svg-icons'
import './index.scss';
import Loader from 'react-loaders';
import LogoS from '../../assets/images/nick2.jpg';
import wave from '../../assets/images/wave.png';
import codology from '../../assets/images/codology.png';
import html from '../../assets/images/logo1.png'
import css from '../../assets/images/logo2.png';
import javascript from '../../assets/images/logo3.png';
import react from '../../assets/images/logo192.png';
import java from '../../assets/images/java.png'
import python from '../../assets/images/python.png'
import njccic from '../../assets/images/njccic.png'
import vizAsianHate from '../../assets/images/vizAsianHate.png';
import sass from '../../assets/images/sass.png';
import portfolio from '../../assets/images/Portfolio.png'


const Home = () =>{
    
    
    return (
        <>
        <section className='container home-section'>
            <div className='page home-page'>
                <div className="flex-box">
                    <div className='home-text'>
                        <h1>
                            <span className='welcome'>Welcome!</span><img src={wave} alt = 'wave' className = 'wave'/>
                            <br/> My name is <span className='name'>Nicholas Channg </span>
                            <br/> I am a Computer Science student at Cornell University
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
                                icon = {faFolderOpen}
                                color="white"
                                className="anchor-icon"/>
                                &nbsp; Resume</Link>
                        </div>
                    </div>
                    <span className='photo-zone'>
                            <img src={LogoS} alt = "logo"/>
                    </span>
                </div>
            </div>
        </section>

        <section className='line'/>

        <section className='container about-section'>
            <div className='page about-page'>
                <div className='flex-box'>
                    <div className='header'>
                        About Me
                    </div>
                    <div className='content-area'>
                        <div className='description-text'>
                            <p>
                            I'm a passionate coder from central New Jersey. I have experience with languages such Javascript, HMTL, and CSS on the frontend and Java
                            and Python on the backend as When I'm not immersed in lines of code, you'll find me watching the Washington Nationals with my dad or 
                            conquering virtual worlds in video games. 
                            </p>
                        </div>
                        <div className='image-area'>
                            <div>
                                <h2>
                                    Skills 
                                </h2>
                            </div>
                            <div className='vertical-bar'/>
                            <div className='skills-images'>
                                <img className = 'skill' src = {javascript} alt = 'skill'/>
                                <img className = 'skill' src = {html} alt = 'skill'/>
                                <img className = 'skill' src = {css} alt = 'skill'/>
                                <img className = 'skill' src = {sass} alt = 'skill'/>
                                <img className = 'skill' src = {react} alt = 'skill'/>
                                <img className = 'skill' src = {java} alt = 'skill'/>
                                <img className = 'skill' src = {python} alt = 'skill'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section className='line'/>

        <section className='container education-section'>
            <div className='page education-page'>
                <div className='flex-box'>
                    <h1 className='title'>
                        Education
                    </h1>
                    <div className='description-area'>
                            <div className='cornell'>
                                <span className='cornell-title'> 
                                    <h1 className='title'>
                                    Cornell University 
                                    </h1>
                                    <p>
                                    Expected Graduation, Dec 2026
                                    </p>
                                </span>
                                B.A Computer Science - College of Arts and Sciences
                                <br/> <br/>
                                Relevant Coursework: 
                                <li>
                                    Data Structures and Functional Programming (OCaml)
                                </li> 
                                <li>
                                    Object-Oriented Programming and Data Structures (Java) 
                                </li>
                                <li>
                                Introduction to Computing: A Design and Development Perspective (Python)
                                </li>
                                <li>
                                    Discrete Structures
                                </li>
                                <li>
                                Basic Engineering Probability and Statistics
                                </li>
                                <li>
                                    Calculus I
                                </li>
                                <li>
                                    Calculus II
                                </li>
                                <li>
                                    Linear Algebra 
                                </li>
                                <br/>
                                    Activities: 
                                <li>
                                    Member of Association of Computer Science Undergraduates (ACSU)
                                </li>
                                <li>
                                    Member of Chinese Student Association (CSA)
                                </li>
                            </div>
                            <div className='brhs'>
                                <span className='brhs-title'>
                                    <h1 className='title'>
                                    Bridgewater-Raritan High School
                                    </h1>
                                    <p>
                                    Graduated, June 2023
                                    </p>
                                </span>
                            GPA - 4.6805 (Top 5%) <br/> <br/>
                            Activities and Leadership:
                            <li>
                                President of Esports Club
                            </li>
                            <li>
                                Marketing and Media Director of Mu Alpha Theta (Math Honor Society)
                            </li>
                            <li>
                                Member of National Honor Society 
                            </li>
                            <li>
                                Member of Spanish National Honor Society 
                            </li>
                            <li>
                                Member of Code Club
                            </li>
                            </div>
                    </div>
                </div>
            </div>

        </section>
        
        <section className='line'/>

        <section className='container experience-section'>
            <div className="page experience-page">
                <div className='flex-box'>
                    <h1 className='title'>
                        Experience
                    </h1>
                    <p className='title-sub'>
                        Here is my work experience!
                    </p>

                    <Experience1
                    title = 'Codology'
                    position = 'Frontend Developer - Software Engineer Intern' 
                    description = "As a web developer for Codology, my role involves creating and maintaining our 
                    organization's website with JavaScript, HTML, and CSS, and ensuring it is user-friendly and accessible to a wide 
                    audience. Additionally, I collaborate with the Codology team to implement digital solutions on the
                    website that enhance our online presence, engagement, and impact."
                    imagesrc = {codology}
                    imagetitle = 'codology'
                    to = 'https://www.codology.org/'
                    languageID = 'codology-lang'
                    lang1 = "JavaScript"
                    lang2 = "HTML"
                    lang3 = "CSS"
                    lang4 = ""
                    lang5 = ""
                    lang6 = ""
                    lang7 = ""
                    />

                    

                    <Experience2
                    title = 'New Jersey Cybersecurity and Communications Integration Cell'
                    position = 'Intern' 
                    description = "As an intern at the NJCCIC (New Jersey Cybersecurity and Communications Integration Cell), 
                    I played a vital role in supporting their mission to enhance cybersecurity and critical infrastructure resilience. 
                    During my internship, I assisted in monitoring and analyzing cybersecurity threats and incidents, contributing to 
                    the organization's proactive defense efforts. This valuable experience provided me with real-world insights into the 
                    evolving landscape of cybersecurity and helped me develop essential skills for a career in this field.
                    "
                    imagesrc = {njccic}
                    imagetitle = 'njccic'
                    to = "https://www.cyber.nj.gov/"
                    languageID = 'njccic-lang'
                    lang1 = ""
                    lang2 = ""
                    lang3 = ""
                    lang4 = ""
                    lang5 = ""
                    lang6 = ""
                    lang7 = ""
                    />
                </div>
            </div>
        </section>

        <section className='line'/>

        <section className='container project-section'>
            <div className='page project-page'>
                <div className='flex-box'>
                    <h1 className='title'> 
                        Projects
                    </h1>
                    <p className='title-sub'>
                            Here are my projects!
                    </p>
                    <div className='project-area'>
                        <Project 
                        title = "Peronsal Porftolio Website"
                        imagesrc = {portfolio}
                        imagetitle = 'portfolio'
                        to = ''
                        languageID = 'portfolio-lang'
                        lang1 = "React"
                        lang2 = "JavaScript"
                        lang3 = "HTML"
                        lang4 = "Sass"
                        lang5 = "Email.js"
                        lang6 = ""
                        lang7 = ""
                        lang8 = ""
                        />
                        <Project 
                        title = "vizAsianHate"
                        imagesrc = {vizAsianHate}
                        imagetitle = 'vizAsianhate'
                        to = 'https://stop-aapi-hate-dashboard.vercel.app/'
                        languageID = 'viz-lang'
                        lang1 = "React"
                        lang2 = "JavaScript"
                        lang3 = "Next.js"
                        lang4 = "Chakra-UI"
                        lang5 = "Mapbox"
                        lang6 = "Recharts"
                        lang7 = "Vercel"
                        lang8 = ""
                        />

                    </div>
                </div>
            </div>
        </section>
    
                   

        <Loader type="ball-pulse-sync" />
        </>
    );

    
}




const Experience1 = (prop) =>{
    //title, position, description, languages, imagesrc, imagetitle, to

    // let code = Languages(prop.languages);
    // document.getElementById("language-id").innerHTML = code;

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
                <div id = {prop.languageID} className='lang-area'>
                    <div className='lang'>
                        {prop.lang1}
                    </div>
                    <div className='lang'>
                        {prop.lang2}
                    </div>
                    <div className='lang'>
                        {prop.lang3}
                    </div>
                    <div className='lang'>
                        {prop.lang4}
                    </div>
                    <div className='lang'>
                        {prop.lang5}
                    </div>  
                    <div className='lang'>
                        {prop.lang6}
                    </div>  
                    <div className='lang'>
                        {prop.lang7}
                    </div>   
                    <div className='lang'>
                        {prop.lang8}
                    </div>                                            
                </div>
            </div>
            <div className='image-area' id='experience1'>
                 <Link to = {prop.to} target = "_blank" rel="noreferrer">
                  <img src = {prop.imagesrc} className = 'image-prop' alt = {prop.imagetitle}/>
                </Link>
            </div>
        </div>
    );
}

const Experience2 = (prop) =>{
    //title, position, description, languages, imagesrc, imagetitle, to

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
                <div className='language-area'>
                    <div className='lang'>
                        {prop.lang1}
                    </div>
                    <div className='lang'>
                        {prop.lang2}
                    </div>
                    <div className='lang'>
                        {prop.lang3}
                    </div>
                    <div className='lang'>
                        {prop.lang4}
                    </div>
                    <div className='lang'>
                        {prop.lang5}
                    </div>  
                    <div className='lang'>
                        {prop.lang6}
                    </div>        
                    <div className='lang'>
                        {prop.lang7}
                    </div>                                   
                </div>
            </div>
        </div>
    );
}

const Project = (prop) =>{
    //title, position, description, languages, imagesrc, imagetitle, to

    // let code = Languages(prop.languages);
    // document.getElementById("language-id").innerHTML = code;

    return(
        <div className='project-content'>
            <div className='description-area'>
                <Link to = {prop.to} target = "_blank" rel="noreferrer">
                  <img src = {prop.imagesrc} className = 'image-prop' alt = {prop.imagetitle}/>
                </Link>
                <h1 className='title-text'>
                    {prop.title}
                </h1>
                <div id = {prop.languageID} className='lang-area'>
                    <div className='lang'>
                        {prop.lang1}
                    </div>
                    <div className='lang'>
                        {prop.lang2}
                    </div>
                    <div className='lang'>
                        {prop.lang3}
                    </div>
                    <div className='lang'>
                        {prop.lang4}
                    </div>
                    <div className='lang'>
                        {prop.lang5}
                    </div>  
                    <div className='lang'>
                        {prop.lang6}
                    </div>  
                    <div className='lang'>
                        {prop.lang7}
                    </div>   
                    <div className='lang'>
                        {prop.lang8}
                    </div>                                            
                </div>
            </div>
            <div className='image-area' id='experience1'>

            </div>
        </div>
    );
}

export default Home;