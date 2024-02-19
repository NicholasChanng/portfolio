import { Link } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import StyleLine from '../StyleLine'

import portfolio from '../../assets/images/Portfolio.png'
import njccic from '../../assets/images/njccic.png'
import vizAsianHate from '../../assets/images/vizAsianHate.png'
import codology from '../../assets/images/codology.png'
import sky from '../../assets/images/SKY.png'
import flow from '../../assets/images/flow.png'
import prakriti from '../../assets/images/prakriti.png'

const Experience = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        id="portfolio"
        className="section experience-section"
      >
        <div className="page experience-page">
          <div className="flex-box">
            <h1 data-aos="fade-up" className="title">
              Experience
            </h1>
            <Experience1
              title="Flow"
              position="Front-End Engineer Intern"
              metaData="Remote | Jan 2024 - Present"
              description="Coming soon..."
              imagesrc={flow}
              imagetitle="flow"
              to="https://flowai.tech/"
              languageID="flow-lang"
              langlist="React DevOps JavaScript HTML CSS"
            />

            <Experience2
              title="Codology"
              position="Front-End Developer Intern"
              metaData="Remote | Oct 2022 - Dec 2023"
              description="As a web developer for Codology, my role involed creating and maintaining Codology's 
                    website with JavaScript, HTML, and CSS, and ensuring it is user-friendly and accessible to a wide 
                    audience. Additionally, I collaborated with the Codology team to implement digital solutions on the
                    website that enhance our online presence, engagement, and impact."
              imagesrc={codology}
              imagetitle="codology"
              to="https://www.codology.org/"
              languageID="codology-lang"
              langlist="JavaScript HTML CSS"
            />

            <Experience1
              title="New Jersey Cybersecurity and Communications Integration Cell"
              position="Intern"
              metaData="Remote | Jul 2022 - Aug 2022"
              description="As an intern at the NJCCIC (New Jersey Cybersecurity and Communications Integration Cell), 
                    I played a vital role in supporting their mission to enhance cybersecurity and critical infrastructure resilience. 
                    During my internship, I assisted in monitoring and analyzing cybersecurity threats and incidents, contributing to 
                    the organization's proactive defense efforts. This valuable experience provided me with real-world insights into the 
                    evolving landscape of cybersecurity and helped me develop essential skills for a career in this field.
                    "
              imagesrc={njccic}
              imagetitle="njccic"
              to="https://www.cyber.nj.gov/"
              languageID="njccic-lang"
              langlist="Cybersecurity"
            />
          </div>
        </div>
      </section>

      <StyleLine />

      <section data-aos="fade-up" className="section project-section">
        <div className="page project-page">
          <div className="flex-box">
            <h1 data-aos="fade-up" className="title">
              Projects
            </h1>
            <div className="project-area">
              <Project
                title="Prakriti"
                imagesrc={prakriti}
                imagetitle="prakriti"
                to="https://prakriti-hack.netlify.app/"
                description="1st Place @ Cornell Digital Agriculture Hackathon 2024"
                languageID="prakriti-lang"
                langlist="React JavaScript HTML CSS"
                github="https://github.com/NicholasChanng/prakriti"
              />
              <Project
                title="SKY Taekwondo"
                imagesrc={sky}
                imagetitle="sky"
                to="https://skytkd.us/"
                description="Storefront for Business with 430K+ Subscribers & 400M+ views on YT"
                languageID="sky-lang"
                langlist="React JavaScript HTML Sass 3CX"
                github="https://github.com/NicholasChanng/sky-taekwondo-website"
              />
              <Project
                title="Portfolio"
                imagesrc={portfolio}
                imagetitle="portfolio"
                to=""
                description="Personal Portfolio Website"
                languageID="portfolio-lang"
                langlist="React JavaScript HTML Sass Email.js"
                github="https://github.com/NicholasChanng/portfolio"
              />
              <Project
                title="vizAsianHate"
                imagesrc={vizAsianHate}
                imagetitle="vizAsianhate"
                to="https://stop-aapi-hate-dashboard.vercel.app/"
                description="Interactiivty Award & Wolfram Award @ Vizathon 2021"
                languageID="viz-lang"
                langlist="React JavaScript Next.js Chakra-UI Mapbox Recharts Vercel"
                github="https://github.com/rolandyangg/vizAsianHate"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const Experience1 = (prop) => {
  //title, position, description, imagesrc, imagetitle, to, languageID, langs, github

  let langlist = prop.langlist.split(' ')

  return (
    <div data-aos="fade-up" className="job-content">
      <div className="description-area">
        <h1 className="title-text">{prop.title}</h1>
        <p className="position-text">{prop.position}</p>
        <p className="meta-data"> {prop.metaData}</p>
        <p className="description-text">{prop.description}</p>
        <div id={prop.languageID} className="lang-area">
          {langlist.map((lang) => {
            return <div className="lang">{lang}</div>
          })}
        </div>
      </div>
      <div className="image-area" id="experience1">
        <Link to={prop.to} target="_blank" rel="noreferrer">
          <img
            src={prop.imagesrc}
            className="image-prop"
            alt={prop.imagetitle}
          />
        </Link>
      </div>
    </div>
  )
}

const Experience2 = (prop) => {
  //title, position, description, imagesrc, imagetitle, to, languageID, langs, github

  let langlist = prop.langlist.split(' ')

  return (
    <div data-aos="fade-up" className="job-content">
      <div className="image-area">
        <Link to={prop.to} target="_blank" rel="noreferrer">
          <img
            src={prop.imagesrc}
            className="image-prop"
            alt={prop.imagetitle}
          />
        </Link>
      </div>
      <div className="description-area">
        <h1 className="title-text">{prop.title}</h1>
        <p className="position-text">{prop.position}</p>
        <p className="meta-data"> {prop.metaData}</p>
        <p className="description-text">{prop.description}</p>
        <div id={prop.languageID} className="lang-area">
          {langlist.map((lang) => {
            return <div className="lang">{lang}</div>
          })}
        </div>
      </div>
    </div>
  )
}

const Project = (prop) => {
  //title, position, description, imagesrc, imagetitle, to, languageID, langs, github

  let langlist = prop.langlist.split(' ')

  return (
    <div data-aos="fade-up" className="project-content">
      <div className="description-area">
        <div className="project-flex">
          <a href={prop.to} target="_blank" rel="noreferrer">
            <img
              src={prop.imagesrc}
              className="image-prop"
              alt={prop.imagetitle}
            />
          </a>
          <h1 className="underline title-text">
            <a href={prop.to} target="_blank" rel="noreferrer">
              {prop.title}
            </a>
          </h1>
          <p>{prop.description}</p>
          <div id={prop.languageID} className="lang-area">
            {langlist.map((lang) => {
              return <div className="lang">{lang}</div>
            })}
          </div>
        </div>
        <div>
          <div>
            <Link
              className="github-button"
              to={prop.github}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                color="white"
                className="github-icon"
              />
            </Link>
          </div>
          <div className="live-site"></div>
        </div>
      </div>
      <div className="image-area" id="experience1"></div>
    </div>
  )
}

export default Experience
