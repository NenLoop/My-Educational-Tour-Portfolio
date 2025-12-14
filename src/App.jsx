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
    <div className='fixed bg-white z-1 mx-auto max-w-xl top-4 pointer-event-auto'>
      <div className="max-w-xl mx-auto flex items-center">
        <div className="flex items-center ">
          <a href="#home">Ren Louie Peralta</a>
          <nav className="flex justify-center gap-5">
            <a>Home</a>
            <a>About</a>
            <a>Tour</a>
            <a>Github</a>
          </nav>

        </div>
      </div>

    </div>
    
    <div id="home" className="h-screen pt-16 relative flex items-center">
      
      <div className="h-screen absolute inset-0" id="vanta"> 

      </div>
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
    <div id="about" className='h-screen'>

    </div>
    <div id="tour" className='h-screen'>

    </div>
    <div id="footer" className='h-screen'>

    </div>

    </>

  )
}

export default App
