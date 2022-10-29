import React from 'react'
import logo from '../images/03.png'
import Common from './Common'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Common name='Grow your business' imgsrc={logo} visit="/Service" btnname='Get started' />
      <Footer />
    </>
  )
}

export default Home