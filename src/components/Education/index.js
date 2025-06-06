import './index.scss'

const Education = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-offset="200"
      id="education"
      className="section education-section"
    >
      <div className="page education-page">
        <div className="flex-box">
          <h1 className="title">Education</h1>
          <div className="description-area">
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-offset="200"
              className="cornell"
            >
              <span className="cornell-title">
                <h1 className="title">Cornell University</h1>
                <p>Expected Graduation, May 2026</p>
              </span>
              <span>
                B.A Computer Science, Minor in Artificial Intelligence, Minor in
                Data Science
              </span>
              <span>GPA: 3.7/4.0, Dean's List</span>
              <br />
              Relevant Coursework:
              <li>Object-Oriented Programming and Data Structures</li>
              <li>Data Structures and Functional Programming</li>
              <li>Introduction to Analysis of Algorithms</li>
              <li>Introduction to Database Systems </li>
              <br />
              Leadership and Activities:
              <li>Cornell Hack4Impact </li>
              <li>Cornell Custom Silicon Systems (C2S2)</li>
              <li>Cornell Webdev (Consulting Director)</li>
              <li>Association of Computer Science Undergraduates</li>
              <li>Chinese Student Association</li>
            </div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-offset="200"
              className="brhs"
            >
              <span className="brhs-title">
                <h1 className="title">Bridgewater-Raritan High School</h1>
                <p>Graduated, June 2023</p>
              </span>
              <span>GPA: 4.7</span>
              <span>Top 5% of Graduating Class</span>
              <br />
              Leadership and Activities:
              <li>Esports Club (President)</li>
              <li>Mu Alpha Theta (Marketing and Media Director)</li>
              <li>National Honor Society</li>
              <li>Spanish National Honor Society</li>
              <li>Code Club</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
