import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import {MdOutlineSchool} from 'react-icons/md'
import {BiLogoAws} from 'react-icons/bi'
import {HiCodeBracket} from 'react-icons/hi2'

const About = () => {
  return (
    <section id="about">
      <h5 className='section-title'>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdOutlineSchool className='about__icon'/>
              <h5>Education</h5>
              <small>B.S. Computer Science</small>
            </article>

            <article className='about__card'>
              <HiCodeBracket className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working in Tech</small>
            </article>

            <article className='about__card'>
              <BiLogoAws className='about__icon'/>
              <h5>Certified</h5>
              <small>AWS Cloud Practitioner</small>
            </article>
          </div>

          <p>
          As a data analyst with over three years of experience, I've developed a deep understanding of how data can be used to inform and drive decision-making. I've worked on political campaigns for progressive candidates, where I analyzed survey data, created interactive dashboards with live updates, and wrote regular reports to keep partners informed.
          </p>
          <p>
          If you're looking for a skilled data analyst who is eager to transition into software engineering, please don't hesitate to reach out. I'm excited about the opportunity to work on projects that make a difference and to collaborate with other skilled professionals to develop innovative solutions.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
