import React from 'react'

const Service = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto">
        <header className="text-6xl text-white font-semibold text-center mb-12">
          <p>Our Services</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Global B2B Sales Leadership</h3>
            <p className="text-gray-600">We offer comprehensive leadership strategies for global B2B sales, driving growth and maximizing market reach.</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Singapore Government & Industry Relations</h3>
            <p className="text-gray-600">Specialized consultancy for navigating government regulations and fostering industry relations in Singapore.</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Food, Beverage & Nutraceutical Innovation</h3>
            <p className="text-gray-600">Innovative solutions for product development and market differentiation in the food and beverage industry.</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Circular Economy and Waste Valorization</h3>
            <p className="text-gray-600">Promoting sustainability through circular economy principles and effective waste valorization strategies.</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Mentorship, Coaching & Leadership Development</h3>
            <p className="text-gray-600">Empowering leaders through personalized mentorship, coaching, and professional development programs.</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Research & Market Insights</h3>
            <p className="text-gray-600">Providing deep insights and research-based strategies to drive business decisions and growth.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
