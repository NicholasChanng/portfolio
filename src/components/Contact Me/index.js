import './index.scss'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_icur91b',
        'template_702d8ul',
        form.current,
        'kN2GlYw0W2n_pNOHf'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <>
      <section
        data-aos="fade-up"
        id="contact"
        className="section contact-section"
      >
        <div className="page">
          <div className="text-zone">
            <h1>Contact Me</h1>
            <p>
              I am actively seeking internships and jobs in the tech field, but
              any opportunties are greatly appreciated. Please feel free to
              reach out using the form below.
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <li className="half">
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </li>
              <li className="half">
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </li>
              <li>
                <input
                  className="input"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea name="message" placeholder="Message" required />
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
