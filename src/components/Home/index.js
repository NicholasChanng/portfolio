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
import LogoS from '../../assets/images/nick2.jpg'
import wave from '../../assets/images/wave.png'

const Home = () => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       console.log(entry)
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('show')
  //       } else {
  //         entry.target.classList.remove('show')
  //       }
  //     })
  //   })

  //   const hiddenElements = document.querySelectorAll('.hidden')
  //   hiddenElements.forEach((e1) => {
  //     observer.observe(e1)
  //   })
  return (
    <>
      <section id="home" className="container home-section">
        <div className="page home-page">
          <div className="flex-box">
            <div className="home-text">
              <h1>
                <span className="welcome">Welcome!</span>
                <img src={wave} alt="wave" className="wave" />
                <br /> My name is <span className="name">Nicholas Channg </span>
                <br /> I am a Computer Science student at Cornell University
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
                  to="https://docs.google.com/document/d/1X9eCtOV4b3hAHcveuq3-ebRm1y5h25T66c6AxbJhwh0/edit?usp=sharing"
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

      <section className="line" />

      <About />

      <section className="line" />

      <Education />

      <section className="line" />

      <Experience />

      <section className="line" />

      <Contact />

      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Home
