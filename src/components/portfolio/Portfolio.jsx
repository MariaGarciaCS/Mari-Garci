import React from 'react'
import { Link } from 'react-router-dom'
import './portfolio.css'

import SDS from '../../assets/SDS.jpg'
import GOTV2023 from '../../assets/GOTV2023.png'
import MG from '../../assets/MG.png'
import TAB from '../../assets/Tab.png'
import CTSP from '../../assets/CTSP.png'

const Portfolio = () => {
  return (
      <section id="portfolio">
        <h5 className='section-title'>Check Out</h5>
        <h2>My Projects</h2>
        

        <div className="container portfolio__container">

        {/* CHI TOWN STADIUM PARKING */}
        <div className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={CTSP}/>
            </div>
            <h3>Chi-Town Stadium Parking</h3>
            <p className="project-description">
              Helps users evaluate if they can park on the street during events.
            </p>
            <ul className='tech-used'>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSSL</li>
            <li>API</li>
            <li>CI/CD</li>
          </ul>
            <div className="portfolio__item-cta">
              <a href="https://github.com/MariaGarciaCS/chi-town-stadium-parking" className='btn' target='_blank'>GitHub</a>
              {/* <Link to="/parking" className='btn btn-primary'>Site</Link> */}
            </div>
          </div>

        {/* PERSONAL WEBSITE */}
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

        {/* GOTV 2023 */}
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


          <div className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={TAB}/>
            </div>
            <h3>Chicago Towing Analysis, ongoing project</h3>
            <p className="project-description">
              Analyzed trends in vehicle relocations in Chicago
            </p>
            <ul className='tech-used'>
            <li>Tableau</li>
            <li>Postman</li>
            <li>API</li>
          </ul>
            <div className="portfolio__item-cta">
              {/* <a href="https://github.com/scarletstudio/transithealth" className='btn' target='_blank'>GitHub</a> */}
              <a href="https://prod-useast-b.online.tableau.com/#/site/chicagotrafficanalysis/collections/2e98f04b-7df1-4926-a072-e9ceb4587b51?:origin=card_share_link" className='btn btn-primary'target='_blank'>Site</a>
            </div>
          </div>
        </div>
      </section>


      
  )
}

export default Portfolio
