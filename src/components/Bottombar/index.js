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
                to="https://drive.google.com/file/d/13TbE1b0SHkQw0ku0Hh589XYVrU9qAT9E/view?usp=sharing"
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
