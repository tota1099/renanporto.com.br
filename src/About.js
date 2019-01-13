import React from 'react'

const About = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div className="my-auto">
              <h1 className="mb-0">Renan
                <span className="text-primary">Porto</span>
              </h1>
              <div className="subheading mb-5">
                <a href="mailto:renan.porto1099@gmail.com">renan.porto1099@gmail.com</a>
              </div>
              <p className="lead mb-5">Software developer and passionate about sports. Always in search of knowledge and new challenges, focused on solutions and personal development.</p>
              <div className="social-icons text-center">
                <a href="https://www.linkedin.com/in/renan-de-medeiros-porto" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/tota1099" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
        </section>
    )
}

export default About