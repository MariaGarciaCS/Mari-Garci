import React from 'react'
import './footer.css'
import {BsLinkedin, BsCalendar2DateFill} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">MARI GARCI</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contacts">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mariagarcia-cs/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/MariaGarciaCS" target='_blank'><FaGithub/></a>
        <a href="https://calendly.com/marigarci" target='_blank'><BsCalendar2DateFill/></a>
      </div>

      <div className="footer__copyright">A website by Maria Garcia</div>

    </footer>
  )
}

export default Footer
