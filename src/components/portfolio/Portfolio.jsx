import React from 'react'
import './portfolio.css'
import SDS from '../../assets/SDS.jpg'
import GOTV2023 from '../../assets/GOTV2023.png'
import MG from '../../assets/MG.png'

const Portfolio = () => {
  return (
    <div>
      <section id="portfolio">
      <h5>Check Out</h5>
      <h2>My Projects</h2>
      

      <div className="container portfolio__container">

      <div className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={MG}/>
        </div>
        <h3>This Website</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/scarletstudio/transithealth" className='btn' target='_blank'>GitHub</a>
          <a href="https://scarletstudio.github.io/transithealth/" className='btn btn-primary'target='_blank'>Site</a>
        </div>
      </div>

       <div className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={GOTV2023}/>
          </div>
          <h3>GOTV 2023</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/scarletstudio/transithealth" className='btn' target='_blank'>GitHub</a>
            <a href="https://scarletstudio.github.io/transithealth/" className='btn btn-primary'target='_blank'>Site</a>
          </div>
        </div>

        <div className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SDS}/>
          </div>
          <h3>Transit Health</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/scarletstudio/transithealth" className='btn' target='_blank'>GitHub</a>
            <a href="https://scarletstudio.github.io/transithealth/" className='btn btn-primary'target='_blank'>Site</a>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Portfolio
