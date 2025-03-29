import './index.scss'
import Skills from './Skills'
// import html from '../../assets/images/logo1.png'
// import css from '../../assets/images/logo2.png';
// import javascript from '../../assets/images/logo3.png';
// import react from '../../assets/images/logo192.png';
// import java from '../../assets/images/java.png'
// import python from '../../assets/images/python.png'
// import sass from '../../assets/images/sass.png';

const About = () => {
  return (
    <section className="section about-section">
      <div className="page about-page">
        <div className="flex-box">
          <h1
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-offset="200"
            className="header"
          >
            About Me
          </h1>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-offset="100"
            className="content-area"
          >
            <div className="description-text">
              <p>
                I'm a passionate coder from New Jersey looking for any tech
                opportunties. Besides coding, I love eating a variety of food,
                playing video games, and performing Taekwondo. Hope you enjoy my
                website!
              </p>
            </div>
            <div className="image-area">
              <div>
                <h2>Skills</h2>
              </div>
              <div className="vertical-bar" />
              {/* <divclassName='skills-images'>
                            <img className = 'skill' src = {javascript} alt = 'skill'/>
                            <img className = 'skill' src = {html} alt = 'skill'/>
                            <img className = 'skill' src = {css} alt = 'skill'/>
                            <img className = 'skill' src = {sass} alt = 'skill'/>
                            <img className = 'skill' src = {react} alt = 'skill'/>
                            <img className = 'skill' src = {java} alt = 'skill'/>
                            <img className = 'skill' src = {python} alt = 'skill'/>
                        </div> */}
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
