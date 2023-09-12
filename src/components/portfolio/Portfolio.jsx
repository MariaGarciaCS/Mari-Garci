import React from 'react'
import './portfolio.css'
import SDS from '../../assets/SDS.jpg'
import GOTV2023 from '../../assets/GOTV2023.png'
import MG from '../../assets/MG.png'

const Portfolio = () => {
  return (
      <section id="portfolio">
        <h5 className='section-title'>Check Out</h5>
        <h2>My Projects</h2>
        

        <div className="container portfolio__container">

        <div className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={MG}/>
          </div>
          <h3>This Website, Personal Project</h3>
          <p>Hope you like what you're seeing! I'll be adding more as I grow my skills!</p>
          <ul className='tech-used'>
            <li>AWS</li>
            <li>React</li>
            <li>Node.js</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>CI/CD</li>
          </ul>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MariaGarciaCS/react-pw" className='btn' target='_blank'>GitHub</a>
            {/* <a href="https://scarletstudio.github.io/transithealth/" className='btn btn-primary'target='_blank'>Site</a> */}
          </div>
        </div>

        <div className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={GOTV2023}/>
            </div>
            <h3>GOTV 2023, TTB Data Analyst</h3>
            <p className='project-description'>
              Created live maps to display field team's progress and voter metrics such as demographics, contact attempts and candidate leaning by precinct, county and individual level.
            </p>
              <ul className='tech-used'>
                <li>Looker</li>
                <li>Tableau</li>
                <li>Big Query</li>
                <li>SQL</li>
                <li>Python</li>
                <li>Excel</li>
              </ul>
            <div className="portfolio__item-cta">
              {/* <a href="https://github.com/scarletstudio/transithealth" className='btn' target='_blank'>GitHub</a>
              <a href="https://scarletstudio.github.io/transithealth/" className='btn btn-primary'target='_blank'>Site</a> */}
            </div>
          </div>

          <div className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={SDS}/>
            </div>
            <h3>Transit Health, SDS Intern</h3>
            <p className="project-description">
              Analyzed COVID-19's impact on individuals with disabilities
            </p>
            <ul className='tech-used'>
            <li>AWS</li>
            <li>Python</li>
            <li>SQL</li>
            <li>ETL</li>
            <li>Data Analysis</li>
            <li>RESTful API</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>CI/CD</li>
          </ul>
            <div className="portfolio__item-cta">
              <a href="https://github.com/scarletstudio/transithealth" className='btn' target='_blank'>GitHub</a>
              <a href="https://scarletstudio.github.io/transithealth/" className='btn btn-primary'target='_blank'>Site</a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Portfolio
