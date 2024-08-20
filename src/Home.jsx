import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Contact from './component/Contact'
import Service from './component/Service'

const home = () => {
  return (
    <div>

        <Navbar />
        <Hero />
        <Contact />
        <Service />

    </div>
  )
}

export default home