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
    <section data-aos="fade-up" className="section about-section">
      <div className="page about-page">
        <div className="flex-box">
          <h1 className="header">About Me</h1>
          <div className="content-area">
            <div className="description-text">
              <p>
                I'm a passionate coder from central New Jersey. I have
                experience with languages such Javascript, HMTL, and CSS on the
                frontend and Java and Python on the backend. When I'm not
                immersed in lines of code, you'll find me watching the
                Washington Nationals with my dad or conquering virtual worlds in
                video games.
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
