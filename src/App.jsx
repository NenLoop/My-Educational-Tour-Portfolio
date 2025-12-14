import { useState, useEffect } from 'react'
import './App.css'
import WAVES from 'vanta/src/vanta.waves'

function App() {

  useEffect(() => {
    WAVES({
      el: '#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x0E0816,
      shininess: 75.00,
      waveHeight: 40.00,
      waveSpeed: 0.10,
      zoom: 1.00

    })
  }, [])

  return (
    <>
    <div className='fixed z-1 top-12 left-1/2 transform -translate-x-1/2 rounded-2xl bg-white shadow-md w-full md:w-auto'>
      <div className="flex items-center justify-center space-x-12 px-6">
        <p className="font-bold text-xl">Ren Louie Peralta</p>
        <div>
          <ul class="flex space-x-8 py-4 px-2">
            <li><a className="text-lg font-medium" href="#home">Home</a></li>
            <li><a className="text-lg font-medium" href="#about">About</a></li>
            <li><a className="text-lg font-medium"  href="#tour">Tour</a></li>
            <li><a className="text-lg font-medium" href="#contact">Contact</a></li>
            <li><a className="text-lg font-medium" href="#">Github</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div id="home" className="h-screen pt-16 relative flex items-center">
      <div className="h-screen absolute inset-0" id="vanta"></div>
      <div className="relative mx-auto max-w-2xl">
        <div className="text-center">
          <h1 className="text-7xl text-amber-600 font-bold">Ren Louie Peralta</h1>
          <h2 className="text-5xl text-amber-600 font-bold mt-4">Self Taught Web Developer</h2>
          <h3 className="text-2xl text-amber-600 font-medium mt-4">Davao City, Philippines</h3>
          <h2 className="text-3xl text-amber-600 font-medium mt-4">I Specialized in sleeping</h2>
          <div className="mt-4">
            <button className="text-2xl text-amber-600 font-medium mt-2">Contact Me</button>
            <button className="text-2xl text-amber-600 font-medium mt-2">My Contributions</button>
          </div>
          <div>
            <h1 className="text-2xl text-amber-600 font-medium mt-8"> Tech Stack</h1>
            <div className="mt-4">
              <span className="text-2xl text-amber-600 font-medium">HTML</span>
              <span className="text-2xl text-amber-600 font-medium">CSS</span>
              <span className="text-2xl text-amber-600 font-medium">JavaScript</span>
              <span className="text-2xl text-amber-600 font-medium">React.js</span>
              <span className="text-2xl text-amber-600 font-medium">Vite.js</span>
              <span className="text-2xl text-amber-600 font-medium">Tailwind CSS</span>
              <span className="text-2xl text-amber-600 font-medium">GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="about" className='h-screen bg-amber-600'>
      <div className='mx-auto max-w-xl text-center'>
        <h2 className="text-2xl font-medium inline">Test Center</h2>
        <h2 className="text-2xl font-medium inline">Test Center</h2>
      </div>

    </div>
    <div id="tour" className='h-screen'>
      <div className='mx-auto max-w-xl text-center'>
        <h2 className="text-2xl font-medium inline">Tour Experience</h2>
        <div className="flex flex-wrap justify-center">
          <button>Companies</button>
          <button>Certificate</button>
          <button>Reflection</button>
          
        </div>
      </div>

    </div>
    <div id="contact" className='h-screen'>

    </div>
    <div id="footer" className='max-h-48 overflow-hidden bg-black text-white text-center'>
      <p className="text-lg font-medium">© 2024 Ren Louie Peralta. All rights reserved.</p>
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>

    </div>

    </>

  )
}

export default App
