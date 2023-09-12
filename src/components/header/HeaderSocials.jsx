import React from 'react'
import {BsLinkedin, BsCalendar2DateFill} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/mariagarcia-cs/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/MariaGarciaCS" target='_blank'><FaGithub/></a>
      <a href="https://calendly.com/marigarci" target='_blank'><BsCalendar2DateFill/></a>
    </div>
  )
}

export default HeaderSocials
