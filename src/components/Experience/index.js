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
import mathgpt from '../../assets/images/mathgpt.png'
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
            <Experience2
              title="MathGPT"
              position="Software Developer Intern"
              metaData="Remote | May 2024 - Jun 2024"
              description="Coded an AI Calculus Calculator Chrome Extension"
              imagesrc={mathgpt}
              to="https://math-gpt.org"
              languageID="mathgpt-lang"
              langlist="React Plasmo APIs JavaScript HTML CSS"
            />

            <Experience1
              title="Flow"
              position="Software Engineer Intern"
              metaData="Remote | Jan 2024 - Jun 2024"
              description="Coded the Flow Turbo Platform and Flow Website"
              imagesrc={flow}
              imagetitle="flow"
              to="https://flowai.tech/"
              languageID="flow-lang"
              langlist="React DevOps RESTFUL-APIs JavaScript HTML CSS"
            />

            <Experience2
              title="Codology"
              position="Front-End Developer Intern"
              metaData="Remote | Oct 2022 - Dec 2023"
              description="Coded the Codology Website"
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
              description="1 out of 22 interns chosen in all of NJ"
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
                description="Storefront for Business with 430K+ Subscribers & 400M+ Views on YouTube"
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
                description="Interactivity Award & Wolfram Award @ Vizathon 2021"
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
            <a
              className="underline"
              href={prop.to}
              target="_blank"
              rel="noreferrer"
            >
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
