import './index.scss'

const Education = () => {
  return (
    <section d="" id="education" className="section education-section">
      <div className="page education-page">
        <div className="flex-box">
          <h1 d="" className="title">
            Education
          </h1>
          <div className="description-area">
            <div d="" className="cornell">
              <span className="cornell-title">
                <h1 className="title">Cornell University</h1>
                <p>Expected Graduation, May 2026</p>
              </span>
              <span>
                B.A Computer Science, Minor in Artificial Intelligence, Minor in
                Data Science
              </span>
              <span>GPA: 3.7, Dean's List</span>
              <br />
              Relevant Coursework:
              <li>Introduction to Analysis of Algorithms</li>
              <li>Introduction to Database Systems (SQL) </li>
              <li>Data Structures and Functional Programming (OCaml)</li>
              <li>Object-Oriented Programming and Data Structures (Java)</li>
              <li>
                Introduction to Computing: A Design and Development Perspective
                (Python)
              </li>
              <br />
              Activities:
              <li>Software Developer at Cornell Webdev</li>
              <li>
                Member of Association of Computer Science Undergraduates (ACSU)
              </li>
              <li>Member of Chinese Student Association (CSA)</li>
            </div>
            <div d="" className="brhs">
              <span className="brhs-title">
                <h1 className="title">Bridgewater-Raritan High School</h1>
                <p>Graduated, June 2023</p>
              </span>
              <span>GPA: 4.7</span>
              <span>Graduated High Honors (Top 5%)</span>
              <br />
              Activities and Leadership:
              <li>President of Esports Club</li>
              <li>
                Marketing and Media Director of Mu Alpha Theta (Math Honor
                Society)
              </li>
              <li>Member of National Honor Society</li>
              <li>Member of Spanish National Honor Society</li>
              <li>Member of Code Club</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
