import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <div>
      <section id="experience">
        <h5 class='section-title'>Get To Know</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
          <div className="experience__data">
            <h3>Data Experience</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>SQL & NoSQL</h4>
                  <small className="text-light">Postgres,  MySQL,  MongoDB</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className="text-light">NumPy, Pandas, Seaborn</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Advanced Math</h4>
                  <small className="text-light">Probability & Statistics, Linear Algebra, Calculus</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Tableau & Looker</h4>
                  <small className="text-light">Real Time Reporting, Maps</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Data Management</h4>
                  <small className="text-light"> Data Prep, Consolidation, Warehousing, ETL</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Microsoft Excel</h4>
                  <small className="text-light">VBA/Macros</small>
                </div>
              </article>
            </div>
          </div>

          <div className="expereince__swe">
          <h3>Software Development Experience</h3>
            <div className="experience__content">

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">React, Node, Express</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>AWS</h4>
                  <small className="text-light">EC2, Lambda, RDS, AutoScaling</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Web Dev</h4>
                  <small className="text-light">HTML/CSS, PHP</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>CI/CD</h4>
                  <small className="text-light">Git, GitHub, GitLab, AWS Code Deploy</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Mobile Development</h4>
                  <small className="text-light"> Android Studio, Java/Kotlin</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Testing</h4>
                  <small className="text-light">Test Cases, Automating Tests</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
