import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineCode} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdOutlineEmail} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className= {activeNav === '#' ? 'active' : ''} ><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className= {activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className= {activeNav === '#portfolio' ? 'active' : ''}><AiOutlineCode/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}><MdOutlineEmail/></a>
    </nav>
  )
}

export default Nav
