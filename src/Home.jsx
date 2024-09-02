import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Contact from './component/Contact'
import Service from './component/Service'
import Mission from './component/Mission'
import Testimonial from './component/Testimonial'

const home = () => {
  return (
    <div>

        <Navbar />
        <Hero />
        <Contact />
        <Service />
        <Mission />
        <Testimonial />


    </div>
  )
}

export default home