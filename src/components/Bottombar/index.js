import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const Bottombar = () => {
  return (
    <>
      <div className="bottom-bar">
        <div className="bottom-bar-page">
          <div className="container-area">
            <div className="made-by">
              <Link
                to="https://github.com/NicholasChanng/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <h1>made by Nick</h1>
              </Link>
            </div>

            <div className="social-area">
              <Link
                className="social-button"
                to="https://www.linkedin.com/in/nicholaschanng/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="white"
                  className="anchor-icon"
                />
              </Link>
              <Link
                className="social-button"
                to="https://github.com/NicholasChanng/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  color="white"
                  className="anchor-icon"
                />
              </Link>
              <Link
                className="social-button"
                to="https://docs.google.com/document/d/1X9eCtOV4b3hAHcveuq3-ebRm1y5h25T66c6AxbJhwh0/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  color="white"
                  className="anchor-icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bottombar
