import React from 'react'
import resume from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={resume} className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA
