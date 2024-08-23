import React from 'react';
import image from '../assets/img/img20.jpg';

const Contact = () => {
  return (
    <section className="flex justify-center items-center py-12 bg-black min-h-screen">
      <div className="flex bg-black rounded-xl overflow-hidden max-w-4xl w-full">
        <img className="w-1/2 object-cover rounded-full" src={image} alt="Scientist inspecting plants" />
        <div className="p-8 w-1/2 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Your Trusted Nigeria Food Consultancy</h2>
          <p className="mb-6">
            We specialise in guiding companies through the intricate landscape of global B2B sales, Nigeria Government and industry relations, global regulatory landscapes, food and nutrition industry trends, product innovation and leadership development.
          </p>
          <p className="mb-6">
            Our mission is to empower clients to navigate these complexities seamlessly, facilitating the establishment of their presence and where relevant the setup of cutting-edge R&D and manufacturing operations. With expertise spanning the fields of food innovation, food technology, facility design and project management, circular economy, and waste stream valorisation, we are committed to shaping a sustainable and prosperous future for the food industry.
          </p>
          <button className="mt-4 px-4 py-2 bg-[#86160b] border border-red-600 text-white rounded hover:bg-red-600 hover:text-white transition">CONTACT</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
