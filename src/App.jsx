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

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="scroll-smooth">
    <div className='fixed z-1 top-12 left-1/2 transform -translate-x-1/2 rounded-2xl bg-white shadow-md w-full md:w-auto '>
      <div className="flex items-center justify-center space-x-12 px-6">
        <p className="font-bold text-xl">Ren Louie Peralta</p>
        <div>
          <ul className="flex space-x-8 py-4 px-2">
          <li>
              <button className="text-lg font-medium" onClick={() => scrollToSection('home')}>Home</button>
            </li>
            <li>
              <button className="text-lg font-medium" onClick={() => scrollToSection('about')}>About</button>
            </li>
            <li>
              <button className="text-lg font-medium" onClick={() => scrollToSection('tour')}>Tour</button>
            </li>
            <li>
              <button className="text-lg font-medium" onClick={() => scrollToSection('contact')}>Contact</button>
            </li>
            <li>
              <a className="text-lg font-medium" href="#">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="home" className="h-screen pt-16 relative flex items-center scroll-smooth">
      <div className="h-screen absolute inset-0" id="vanta"></div>
      <div className="relative mx-auto max-w-2xl">
        <div className="text-center">
          <h1 className="text-7xl text-amber-600 font-bold">Ren Louie Peralta</h1>
          <h2 className="text-5xl text-amber-600 font-bold mt-4">Self Taught Web Developer</h2>
          <h3 className="text-2xl text-amber-600 font-medium mt-6">Davao City, Philippines</h3>
          <h2 className="text-3xl text-amber-600 font-medium mt-4">I Specialized in sleeping</h2>
          <div className="flex flex-row justify-center mt-4 space-x-6">
            <button className="text-2xl p-4  bg-amber-600 font-medium mt-2">Contact Me</button>
            <button className="text-2xl p-4 bg-amber-600 font-medium mt-2">My Contributions</button>
          </div>
          <div>
            <h1 className="text-2xl text-amber-600 font-medium mt-8"> Tech Stack</h1>
            <div className="flex flex-wrap space-x-8 justify-center">
              <div className='relative group inline-block  mt-8'>
                <img src='/icons/javascript-logo-final.png' className='w-10 h-10'/>
                <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 whitespace-nowrap hidden group-hover:block">
                  JavaScript
                </span>
              </div>
              <div className='relative group inline-block  mt-8'>
                <img src='/icons/tailwind-logo.png' className='w-10 h-10'/> 
                <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 whitespace-nowrap hidden group-hover:block">
                 Tailwind
                </span>
              </div>
              <div className='relative group inline-block  mt-8'>
                <img src='/icons/java-logo.png' className='w-10 h-10'/>
                <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 whitespace-nowrap hidden group-hover:block">
                  Java
                </span>
              </div>
              <div className='relative group inline-block  mt-8'>
                <img src='/icons/python-logo-removebg-preview.png' className='w-10 h-10'/>
                <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 whitespace-nowrap hidden group-hover:block">
                  Python
                </span>
              </div>
              <div className='relative group inline-block  mt-8'>
                <img src='/icons/django-logo.png' className='w-10 h-10'/>
                <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 whitespace-nowrap hidden group-hover:block">
                  Django
                </span>
              </div>
              <div className='relative group inline-block  mt-8'>
                <img src='/icons/postgresql-logo-final.png' className='w-10 h-10'/>
                <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 whitespace-nowrap hidden group-hover:block">
                  PostgreSQL
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="about" className="min-h-screen bg-violet-black text-white scroll-mt-18 flex py-28 scroll-smooth">
      <div className="mx-auto w-full max-w-7xl px-6">

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-32">
          
          {/* Image */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/pictures/prof.png"
              alt="Profile"
              className="w-68 h-64 object-cover rounded-lg"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-2/3 text-left">
            <p className="text-4xl font-bold mb-4">
              Hello, I'm Ren Louie
            </p>
            <p className="text-2xl font-semi mb-4">
              Aspiring Network Engineer
            </p>

            <p className="text-lg mb-4">
              My journey into web development began with a curiosity for how websites are built and function. Over the years, I've honed my skills in various technologies, including JavaScript, Tailwind CSS, Java, Python, Django, and PostgreSQL.
            </p>

            <p className="text-lg mb-4">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and collaborating with fellow developers to create innovative solutions.
            </p>

            <p className="text-lg mb-6">
              Feel free to explore my portfolio and get in touch if you'd like to collaborate or learn more about my work!
            </p>

            {/* Age / Info */}
          </div>
        </div>
        <div className="mx-auto max-w-4xl items-center flex flex-wrap justify-center mt-18 gap-12 text-sm text-gray-300 space-y-1">
          <div className="bg-purple-600 w-48 py-8 text-center">
            <p className='mb-2 text-xl'>20</p>
            <p className='text-xl'>Years Old</p>
          </div>
          <div className="bg-purple-600 w-48 py-8 text-center">
            <p className='mb-2 text-xl'>Third</p>
            <p className='text-xl'>Year Level</p>
          </div>
          <div className="bg-purple-600 w-48 py-8 text-center">
            <p className='mb-2 text-xl'>BSIT</p>
            <p className='text-xl'>Course Program</p>
          </div>
        </div>
      </div>
    </div>

    <div id="tour" className='h-screen scroll-smooth'>
      <div className='mx-auto max-w-xl items-center text-center py-10'>
        <h2 className="text-2xl font-medium inline">Tour Experience</h2>
        <div className="flex flex-wrap justify-center">
          <button>Companies</button>
          <button>Certificate</button>
          <button>Reflection</button>
          
        </div>
      </div>

    </div>
    <div id="contact" className='h-screen scroll-smooth'>

    </div>
    <div id="footer" className='max-h-48 overflow-hidden bg-black text-white text-center'>
      <p className="text-lg font-medium">© 2024 Ren Louie Peralta. All rights reserved.</p>
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>
    </div>

    </div>

  )
}

export default App
