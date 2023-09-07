import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import {MdOutlineSchool} from 'react-icons/md'
import {BiLogoAws} from 'react-icons/bi'
import {HiCodeBracket} from 'react-icons/hi2'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
