import { Link } from 'react-router-dom'
import './index.scss'
import portfolio from '../../assets/images/Portfolio.png'
import njccic from '../../assets/images/njccic.png'
import vizAsianHate from '../../assets/images/vizAsianHate.png'
import codology from '../../assets/images/codology.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Experience = () => {
  return (
    <>
      <section id="portfolio" className="container experience-section">
        <div className="page experience-page">
          <div className="flex-box">
            <h1 className="title">Experience</h1>
            <Experience1
              title="Codology"
              position="Frontend Developer - Software Engineer Intern"
              metaData="Remote | Oct 2022 - Present"
              description="As a web developer for Codology, my role involves creating and maintaining our 
                    organization's website with JavaScript, HTML, and CSS, and ensuring it is user-friendly and accessible to a wide 
                    audience. Additionally, I collaborate with the Codology team to implement digital solutions on the
                    website that enhance our online presence, engagement, and impact."
              imagesrc={codology}
              imagetitle="codology"
              to="https://www.codology.org/"
              languageID="codology-lang"
              lang1="JavaScript"
              lang2="HTML"
              lang3="CSS"
              lang4=""
              lang5=""
              lang6=""
              lang7=""
            />

            <Experience2
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
              lang1=""
              lang2=""
              lang3=""
              lang4=""
              lang5=""
              lang6=""
              lang7=""
            />
          </div>
        </div>
      </section>

      <section className="line" />

      <section className="container project-section">
        <div className="page project-page">
          <div className="flex-box">
            <h1 className="title">Projects</h1>
            <div className="project-area">
              <Project
                title="Portfolio Website"
                imagesrc={portfolio}
                imagetitle="portfolio"
                to=""
                languageID="portfolio-lang"
                lang1="React"
                lang2="JavaScript"
                lang3="HTML"
                lang4="Sass"
                lang5="Email.js"
                lang6=""
                lang7=""
                lang8=""
                github="https://github.com/NicholasChanng/portfolio"
              />
              <Project
                title="vizAsianHate"
                imagesrc={vizAsianHate}
                imagetitle="vizAsianhate"
                to="https://stop-aapi-hate-dashboard.vercel.app/"
                languageID="viz-lang"
                lang1="React"
                lang2="JavaScript"
                lang3="Next.js"
                lang4="Chakra-UI"
                lang5="Mapbox"
                lang6="Recharts"
                lang7="Vercel"
                lang8=""
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

  // let code = Languages(prop.languages);
  // document.getElementById("language-id").innerHTML = code;

  return (
    <div className="job-content">
      <div className="description-area">
        <h1 className="title-text">{prop.title}</h1>
        <p className="position-text">{prop.position}</p>
        <p className="meta-data"> {prop.metaData}</p>
        <p className="description-text">{prop.description}</p>
        <div id={prop.languageID} className="lang-area">
          <div className="lang">{prop.lang1}</div>
          <div className="lang">{prop.lang2}</div>
          <div className="lang">{prop.lang3}</div>
          <div className="lang">{prop.lang4}</div>
          <div className="lang">{prop.lang5}</div>
          <div className="lang">{prop.lang6}</div>
          <div className="lang">{prop.lang7}</div>
          <div className="lang">{prop.lang8}</div>
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

  return (
    <div className="job-content">
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
        <div className="language-area">
          <div className="lang">{prop.lang1}</div>
          <div className="lang">{prop.lang2}</div>
          <div className="lang">{prop.lang3}</div>
          <div className="lang">{prop.lang4}</div>
          <div className="lang">{prop.lang5}</div>
          <div className="lang">{prop.lang6}</div>
          <div className="lang">{prop.lang7}</div>
        </div>
      </div>
    </div>
  )
}

const Project = (prop) => {
  //title, position, description, imagesrc, imagetitle, to, languageID, langs, github

  // let codeArr = prop.languages.split();

  return (
    <div className="project-content">
      <div className="description-area">
        <div>
          <Link to={prop.to} target="_blank" rel="noreferrer">
            <img
              src={prop.imagesrc}
              className="image-prop"
              alt={prop.imagetitle}
            />
          </Link>
          <h1 className="title-text">{prop.title}</h1>
          <div id={prop.languageID} className="lang-area">
            <div className="lang">{prop.lang1}</div>
            <div className="lang">{prop.lang2}</div>
            <div className="lang">{prop.lang3}</div>
            <div className="lang">{prop.lang4}</div>
            <div className="lang">{prop.lang5}</div>
            <div className="lang">{prop.lang6}</div>
            <div className="lang">{prop.lang7}</div>
            <div className="lang">{prop.lang8}</div>
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
