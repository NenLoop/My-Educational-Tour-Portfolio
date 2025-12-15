import { useState, useEffect } from 'react'
import './App.css'
import WAVES from 'vanta/src/vanta.waves'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalSrc, setModalSrc] = useState('') // which image to show

  const openModal = (src) => {
    setModalSrc(src)
    setIsOpen(true)
  }

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
    <>
    <div className='fixed z-1 top-12 left-1/2 transform -translate-x-1/2 rounded-2xl border-gray-400 border-2 bg-black/12 backdrop-blur-2xl shadow-2xl w-full md:w-auto '>
      <div className="flex items-center justify-center space-x-12 px-6">
        <p className="font-bold text-xl text-neon-purple">Ren Louie Peralta</p>
        <div>
          <ul className="flex space-x-8 py-4 px-2">
          <li>
              <button className="text-lg text-off-white cursor-pointer font-medium" onClick={() => scrollToSection('home')}>Home</button>
            </li>
            <li>
              <button className="text-lg text-off-white cursor-pointer font-medium" onClick={() => scrollToSection('about')}>About</button>
            </li>
            <li>
              <button className="text-lg text-off-white cursor-pointer font-medium" onClick={() => scrollToSection('tour')}>Tour</button>
            </li>
            <li>
              <button className="text-lg text-off-white cursor-pointer font-medium" onClick={() => scrollToSection('footer')}>Contact</button>
            </li>
            <li>
              <a className="text-lg text-off-white font-medium" target="_blank" href="https://github.com/NenLoop">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="home" className="h-screen pt-16 relative flex items-center">
      <div className="h-screen absolute inset-0" id="vanta"></div>
      <div className="relative mx-auto max-w-2xl">
        <div className="text-center">
          <h1 className="text-7xl text-neon-purple font-bold">Ren Louie Peralta</h1>
          <h2 className="text-5xl text-soft-white font-semibold mt-6">Self Taught Web Developer</h2>
          <h3 className="text-2xl text-amber-gold font-medium mt-6">Davao City, Philippines</h3>
          {/* <h2 className="text-3xl text-off-white font-medium mt-4">I Specialized in sleeping</h2> */}
          <div className="flex flex-row justify-center mt-6 space-x-8">
            <button className="text-2xl px-6 py-4 bg-transparent border-2 border-magenta rounded-lg text-off-white font-medium cursor-pointer mt-2" onClick={() => scrollToSection('footer')}>Contact Me</button>
            <button className="text-2xl px-6 py-4 bg-transparent border-2 border-magenta rounded-lg text-off-white font-medium cursor-pointer mt-2">My Contributions</button>
          </div>
          <div className='mt-4'>
            <h1 className="text-2xl text-amber-gold font-medium mt-8">My Tech Stack</h1>
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
    <div id="about" className="min-h-screen bg-obsidian-black text-white scroll-mt-18 flex py-28">
      <div className="mx-auto w-full max-w-7xl px-6">

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-32">
          
          {/* Image */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/pictures/prof.png"
              alt="Profile"
              className="w-68 h-64 object-cover rounded-lg"
              onClick={() => openModal('/pictures/prof.png')}
            />
          </div>
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setIsOpen(false)} // clicking outside closes modal
            >
              <div className="relative">
                {/* Close button */}
                <button
                  className="absolute top-2 right-2 text-black text-2xl font-bold z-50 hover:text-amber-500"
                  onClick={() => setIsOpen(false)}
                >
                  ×
                </button>

                {/* Enlarged image */}
                <img
                  src={modalSrc}
                  alt="Enlarged"
                  className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
                  onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
                />
              </div>
            </div>
          )}

          {/* Text Content */}
          <div className="md:w-2/3 text-left">
            <p className="text-4xl text-white font-bold mb-4">
              Hello, I'm Ren Louie
            </p>
            <p className="text-2xl text-neon-purple font-semibold mb-4">
              Aspiring Network Engineer
            </p>

            <p className="text-lg text-slate-gray mb-4">
              My journey into web development began with a curiosity for how websites are built and function. Over the years, I've honed my skills in various technologies, including JavaScript, Tailwind CSS, Java, Python, Django, and PostgreSQL.
            </p>

            <p className="text-lg text-slate-gray mb-4">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and collaborating with fellow developers to create innovative solutions.
            </p>

            <p className="text-lg text-slate-gray mb-6">
              Feel free to explore my portfolio and get in touch if you'd like to collaborate or learn more about my work!
            </p>

            {/* Age / Info */}
          </div>
        </div>
        <div className="mx-auto max-w-4xl items-center flex flex-wrap justify-center mt-18 gap-16 text-sm text-gray-300 space-y-1">
          <div className="bg-violet-black rounded-xl w-48 py-6 text-center">
            <p className='mb-2 text-xl text-amber-gold'>20</p>
            <p className='text-xl text-slate-gray'>Years Old</p>
          </div>
          <div className="bg-violet-black rounded-xl w-48 py-6 text-center">
            <p className='mb-2 text-xl text-amber-gold'>Third</p>
            <p className='text-xl text-slate-gray'>Year Level</p>
          </div>
          <div className="bg-violet-black rounded-xl w-48 py-6 text-center">
            <p className='mb-2 text-xl text-amber-gold'>BSIT</p>
            <p className='text-xl text-slate-gray'>Course Program</p>
          </div>
        </div>
      </div>
    </div>
    <div className='w-full flex justify-center bg-black'>
      <div className="relative w-11/12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      </div>
    </div>
    <div id="tour" className='h-screen bg-obsidian-black'>
      <div className='mx-auto max-w-xl items-center text-center py-10'>
        <h2 className="text-2xl font-medium inline">Tour Experience</h2>
        <div className="flex flex-wrap justify-center">
          <button>Companies</button>
          <button>Certificate</button>
          <button>Reflection</button>
          
        </div>
      </div>

    </div>
    <div id="footer" className='max-h-48 overflow-hidden bg-black text-white text-center'>
      <p className="text-lg font-medium">© 2024 Ren Louie Peralta. All rights reserved.</p>
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
