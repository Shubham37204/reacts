import React from 'react'
import logo from '../images/10.jpg'
import Common from './Common'
import Footer from './Footer'

const About = () => {
  return (<>
    <Common name='welcome to about page' imgsrc={logo} visit="/Contact" btnname='Contact Now' />
    <Footer />
  </>
  )
}

export default About