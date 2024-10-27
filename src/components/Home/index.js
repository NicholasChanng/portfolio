import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import About from '../About'
import Education from '../Education'
import Experience from '../Experience'
import Contact from '../Contact Me'

// import {
//     faListCheck,
//     faEnvelope,
//   } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import Loader from 'react-loaders'
import LogoS from '../../assets/images/nick2.png'
import wave from '../../assets/images/wave.png'
import { React } from 'react'
import StyleLine from '../StyleLine'

const Home = () => {
  return (
    <>
      <section d="" id="home" className="section home-section">
        <div className="page home-page">
          <div className="flex-box">
            <div className="home-text">
              <h1>
                <span className="welcome">Welcome!</span>
                <img src={wave} alt="wave" className="wave" />
                <br /> My name is <span className="name">Nicholas Channg </span>
                <br /> I am a CS student at Cornell University
              </h1>
              <div className="buttons">
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
                <Link
                  className="flat-button"
                  to="https://www.linkedin.com/in/nicholaschanng/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    color="white"
                    className="anchor-icon"
                  />
                  &nbsp; LinkedIn
                </Link>
                <Link
                  className="flat-button"
                  to="https://github.com/NicholasChanng/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    color="white"
                    className="anchor-icon"
                  />
                  &nbsp; GitHub
                </Link>
                <Link
                  className="flat-button"
                  to="https://drive.google.com/file/d/13TbE1b0SHkQw0ku0Hh589XYVrU9qAT9E/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFolderOpen}
                    color="white"
                    className="anchor-icon"
                  />
                  &nbsp; Resume
                </Link>
              </div>
            </div>
            <span className="photo-zone">
              <img src={LogoS} alt="logo" />
            </span>
          </div>
        </div>
      </section>

      <StyleLine />

      <About />

      <StyleLine />

      <Education />

      <StyleLine />

      <Experience />

      <StyleLine />

      <Contact />

      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Home
