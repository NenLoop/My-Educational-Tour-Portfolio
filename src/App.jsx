import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { MdOutlinePlace } from "react-icons/md";
import { GrCertificate } from "react-icons/gr"
import { FiMenu, FiX } from "react-icons/fi";
import { SiMinds } from "react-icons/si";
import 'devicon/devicon.min.css'
import { useState, useEffect } from 'react'
import WAVES from 'vanta/src/vanta.waves'
import './App.css'

function App() {
  const [activeCategory, setActiveCategory] = useState("companies");
  const [isOpen, setIsOpen] = useState(false)
  const [isNav, setIsNav] = useState(false)
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
    <div className="fixed z-50 top-12 left-1/2 -translate-x-1/2
                    rounded-2xl border border-white/20
                    bg-black/20 backdrop-blur-2xl shadow-2xl
                    w-[95%] md:w-auto">

      {/* Main Nav */}
      <div className="flex items-center justify-between md:justify-center
                      px-6 py-4 md:space-x-12">

        {/* Brand */}
        <p className="font-bold text-lg md:text-xl text-neon-purple">
          Ren Louie Peralta
        </p>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          <li><button className="text-lg text-off-white cursor-pointer font-medium" onClick={() => scrollToSection("home")}>Home</button></li>
          <li><button className="text-lg text-off-white cursor-pointer font-medium" onClick={() => scrollToSection("about")}>About</button></li>
          <li><button className="text-lg text-off-white cursor-pointer font-medium" onClick={() => scrollToSection("tour")}>Tour</button></li>
          <li><button className="text-lg text-off-white cursor-pointer font-medium" onClick={() => scrollToSection("footer")}>Contact</button></li>
          <li>
            <a href="https://github.com/NenLoop" target="_blank" rel="noreferrer">
              <i className="devicon-github-plain text-2xl text-gray-300 hover:text-purple-400 transition" />
            </a>
          </li>
        </ul>

        {/* Mobile Burger */}
        <button
          className="md:hidden text-off-white text-2xl"
          onClick={() => setIsNav(!isNav)}
        >
          {isNav ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isNav && (
        <div className="md:hidden border-t border-white/10
                        bg-black/40 backdrop-blur-xl
                        rounded-b-2xl">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li><button className="text-lg text-off-white cursor-pointer font-medium" onClick={() => scrollToSection("home")}>Home</button></li>
            <li><button className="text-lg text-off-white cursor-pointer font-medium" onClick={() => scrollToSection("about")}>About</button></li>
            <li><button className="text-lg text-off-white cursor-pointer font-medium" onClick={() => scrollToSection("tour")}>Tour</button></li>
            <li><button className="text-lg text-off-white cursor-pointer font-medium" onClick={() => scrollToSection("footer")}>Contact</button></li>
            <li>
              <a href="https://github.com/NenLoop" target="_blank" rel="noreferrer">
                <i className="devicon-github-plain text-2xl text-gray-300 hover:text-purple-400 transition" />
              </a>
            </li>
          </ul>
        </div>
      )}
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
    <div id="tour" className='h-full bg-obsidian-black scroll-mt-18 py-28'>
      <div className='mx-auto max-w-4xl items-center text-center text-off-white'>
      <div className="relative mt-6 p-2 max-w-4xl mx-auto
                  grid grid-cols-3 gap-2 sm:gap-4
                  rounded-2xl bg-gradient-to-r
                  from-purple-900/40 via-purple-800/30 to-purple-900/40
                  backdrop-blur-xl border border-white/10
                  shadow-lg shadow-purple-950/40"
      >
        {/* Active pill */}
        <div className={`absolute top-2 bottom-2 w-1/3 rounded-xl bg-gradient-to-r from-purple-600/60 to-fuchsia-600/60 backdrop-blur-xl shadow-lg transition-all duration-300
            ${activeCategory === "companies" && "left-0"}
            ${activeCategory === "certificate" && "left-1/3"}
            ${activeCategory === "reflection" && "left-2/3"}
          `}
        />
          <button onClick={() => setActiveCategory("companies")} className="relative z-10 flex flex-col items-center justify-center
               py-2 sm:py-3 text-xs sm:text-sm text-white/80">
            <div className="items-center flex flex-col">
              <MdOutlinePlace size={22}/>
              <span className="mt-1">Companies</span>
            </div>
          </button>

          <button onClick={() => setActiveCategory("certificate")} className="relative z-10 flex flex-col items-center justify-center
               py-2 sm:py-3 text-xs sm:text-sm text-white/80">
            <div className="items-center flex flex-col">
              <GrCertificate size={22}/>
              <span className="mt-1">Certificate</span>
            </div>
          </button>

          <button onClick={() => setActiveCategory("reflection")} className="relative z-10 flex flex-col items-center justify-center
               py-2 sm:py-3 text-xs sm:text-sm text-white/80">
          <div className="items-center flex flex-col">
              <SiMinds size={22}/>
              <span className="mt-1">Reflection</span>
            </div>
          </button>
  
        </div>
        {activeCategory === "companies" && 
        <div className='mx-auto max-w-7xl'>

          {/* PLDT and Vitro Inc.*/}

          <div className="flex flex-col md:flex-row py-10 items-center md:items-start gap-12 md:gap-16"> 
            <div className='flex-1 text-center md:text-left flex flex-col items-center md:items-start'> 
              <h1 className='text-2xl font-semibold max-w-md'>PLDT & Vitro INC. Tour</h1>
              <img src="/pictures/pldt-vitro.png"
              alt="Profile"
              className="w-full max-w-md object-cover rounded-lg mt-6"/>
            </div>
            <div className='flex-1 text-center md:text-left mt-6 md:mt-0'>
              <h1 className='text-lg tracking-wide text-slate-gray mb-3'>November 14, 2025 - 8:30 A.M</h1>
              <h1 className='text-md tracking-wide text-slate-gray mb-3'>
                PLDT and Vitro Inc. operate on the service provider and infrastructure side of the technology industry, playing a vital role in connecting Filipino households to the global digital space. Upon entering the facility, we experienced a strict seven-step security and verification process, reflecting the high standards required to protect sensitive data and critical systems. The visit continued with a seminar discussing PLDT’s services, its partner companies, and how Vitro Inc. uniquely functions as an infrastructure and data center provider that hosts and maintains servers for other organizations.
                </h1>
              <h1 className='text-md tracking-wide text-slate-gray mb-3'>
                Learnings: Through this visit, I learned the importance of security, reliability, and redundancy in large-scale technology operations. Vitro Inc.’s data centers demonstrated how server environments are carefully maintained using advanced cooling systems, strict access control, and continuous monitoring. These practices ensure long-term stability and minimize downtime, allowing the company to deliver near 100% service availability despite potential power or system disruptions.
                </h1>
              <h1 className='text-md tracking-wide text-slate-gray mb-3'>
                Observations: Seeing the protected servers firsthand highlighted the complexity behind services that users often take for granted. The level of maintenance, power backup systems, and physical security reinforced the reality that reliable internet services depend on massive infrastructure and precise engineering. This experience deepened my appreciation for the unseen backbone of the digital world.
                </h1>
            </div>
          </div>
          

          {/* JairoSoft */}

          <div className="flex flex-col md:flex-row py-10 items-center md:items-start gap-12 md:gap-16"> 
            <div className='flex-1 text-center md:text-left flex flex-col items-center md:items-start'> 
              <h1 className='text-2xl font-semibold max-w-md'>JairoSoft Company Tour</h1>
              <img src="/pictures/jairosoft.png"
              alt="Profile"
              className="w-full  max-w-md object-cover rounded-lg mt-6"/>
            </div>
            <div className='flex-1 text-center md:text-left mt-6 md:mt-0'>
              <h1 className='text-lg tracking-wide text-slate-gray mb-3'>November 14, 2025 - 2:00 P.M.</h1>
              <h1 className='text-md tracking-wide text-slate-gray mb-3'>
                JairoSoft is an emerging technology company aiming to become one of the first AI-driven organizations in the Philippines. During the visit, we were introduced to their products, including .bubble, a drag-and-drop website builder designed to simplify web development. The company operates through specialized teams that collaborate to build tailored applications for clients, supported by modern networking equipment and development tools.
              </h1>
              <h1 className='text-md tracking-wide text-slate-gray mb-3'>
                Learnings: The visit emphasized how innovation and adaptability define modern tech companies. JairoSoft’s workflow demonstrated how teamwork, creativity, and efficient tools contribute to rapid development cycles. Their approach showed that success in the tech industry relies not only on technical skill, but also on collaboration and problem-solving.
              </h1>
              <h1 className='text-md tracking-wide text-slate-gray mb-3'>
                Observations: What stood out most was the welcoming and professional culture within the company. The environment felt motivating and inclusive, making it a place where learning and growth are encouraged. This visit strengthened my interest in pursuing an internship at JairoSoft, as it aligns closely with my career aspirations in technology and software development.
              </h1>
            </div>
          </div>
          

          {/* DCCMERC */}

          <div className="flex flex-col md:flex-row py-10 gap-12 md:gap-16 
                items-center md:items-start"> 
            <div className='flex-1 text-center md:text-left flex flex-col items-center md:items-start'> 
              <h1 className='text-2xl font-semibold max-w-md'>Davao City Central Communications & Emergency Response Center Tour</h1>
              <img src="/pictures/central-911-1.png"
              alt="Profile"
              className="w-full max-w-md object-cover rounded-lg mt-6"/>
            </div>
            <div className='flex-1 text-center md:text-left mt-6 md:mt-0'>
              <h1 className='text-lg tracking-wide text-slate-gray mb-3'>November 14, 2025 - 4:00 P.M.</h1>
              <h1 className='text-md tracking-wide text-slate-gray mb-3'>
                The Davao City Central 911 operates as an advanced emergency response and monitoring center. Inside the facility, we observed a large multi-display system used to monitor CCTV feeds across the city, including rivers, coastal areas, and major roads. These systems help detect potential flooding, monitor sea levels, and ensure public safety. The center also utilizes a rescue management application developed internally over several years to coordinate emergency responses. 
              </h1>
              <h1 className='text-md tracking-wide text-slate-gray mb-3'>
                Learnings: This visit revealed how technology directly supports public safety and disaster response. The system tracks incidents in real time, identifies nearby responders, and sends immediate notifications to ensure rapid action. It demonstrated how software, data, and hardware integration can save lives and improve emergency efficiency.
              </h1>
              <h1 className='text-md tracking-wide text-slate-gray mb-3'>
                Observations: I was impressed by the scale and quality of the equipment used, some of which cost millions of pesos due to their advanced capabilities. High-resolution cameras with long-range zoom and automated lighting for nighttime river monitoring highlighted the government’s capacity to invest in modern technology. This experience showed how technology plays a crucial role not only in private industries, but also in public service and community protection.
              </h1>
            </div>
          </div>
          
        </div>
        }

        {activeCategory === "certificate" && (
          <div className="mx-auto max-w-5xl mt-16 px-4">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-purple-900/30 backdrop-blur-xl border border-white/10 shadow-lg shadow-purple-950/40">

              {/* Certificate Image */}
              <img
                src="/pictures/certificate.jpg"
                alt="Certificate"
                className="w-full h-auto object-contain max-h-[520px] mx-auto p-6"
              />

              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-obsidian-black/90 via-obsidian-black/60 to-transparent px-6 py-4">
                <h2 className="text-lg font-semibold text-off-white">
                  Certificate of Completion
                </h2>
                <p className="text-sm text-slate-gray">
                  Issued on November 20, 2025
                </p>
                <p className="mt-2 text-sm text-white/70 max-w-3xl">
                  Awarded for successfully completing the industry immersion and
                  company tour program, demonstrating active participation and
                  professional engagement.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeCategory === "reflection" && (
          <div className="mx-auto max-w-5xl mt-16 px-4">
            <div className="rounded-2xl bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-purple-900/30 backdrop-blur-xl border border-white/10 shadow-lg shadow-purple-950/40 p-10 text-left">

              <h1 className="text-2xl font-semibold text-off-white mb-6">
                Reflection on the Education Davao Industry Immersion
              </h1>

              <p className="text-slate-gray leading-relaxed mb-6">
                The Education Davao Industry Immersion broadened my perspective on the
                technology industry and challenged many of my initial assumptions.
                I once believed that opportunities in tech were limited and difficult
                to attain, but visiting real companies and interacting with professionals
                showed me that the industry is more accessible than I had imagined.
              </p>

              <p className="text-slate-gray leading-relaxed mb-6">
                Being immersed in real work environments allowed me to see how
                collaboration, discipline, and continuous learning shape success.
                Meeting individuals who are actively working in the field made the
                experience feel tangible and inspiring, transforming what was once
                only a future goal into a realistic career path.
              </p>

              <ul className="list-disc list-inside text-slate-gray space-y-3 mb-6">
                <li>Gained firsthand exposure to professional tech environments</li>
                <li>Realized that growth and adaptability are key industry values</li>
                <li>Strengthened my confidence in pursuing a tech-related career</li>
              </ul>

              <p className="text-slate-gray leading-relaxed">
                Overall, the immersion provided me with renewed motivation and a
                clearer sense of purpose. It reinforced my determination to continue
                developing my skills and move one step closer toward my goal of
                working in the technology industry.
              </p>

            </div>
          </div>
        )}
      </div>

    </div>
    <div className='w-full flex justify-center bg-black'>
      <div className="relative w-11/12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      </div>
    </div>
    <div
      id="footer"
      className="bg-black border-t border-white/10 text-off-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">

        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Ren Louie Peralta</h2>
          <p className="text-sm text-slate-gray leading-relaxed max-w-sm">
            Aspiring technology professional passionate about software development,
            continuous learning, and building meaningful digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-slate-gray">
            <li>
            <button className="hover:text-white transition" onClick={() => scrollToSection('home')}>
              Home
            </button>
            </li>
            <li>
            <button className="hover:text-white transition" onClick={() => scrollToSection('about')}>
              About Me
            </button>
            </li>
            <li>
            <button className="hover:text-white transition" onClick={() => scrollToSection('tour')}>
              Tour Experience
            </button>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-medium mb-4">Contact</h3>

          <ul className="space-y-4 text-sm text-slate-gray">
            <li className="flex items-center gap-3">
              <FaEnvelope />
              <a
                href="mailto:renlouie.peralta@hcdc.edu.ph"
                className="hover:text-white transition"
              >
                renlouie.peralta@hcdc.edu.ph
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaGithub />
              <a
                href="https://github.com/NenLoop"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                github.com/NenLoop
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaMapMarkerAlt />
              <span>Davao City, Philippines</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 text-center py-6 text-sm text-slate-gray">
        © 2025 Ren Louie Peralta. All rights reserved.
      </div>
    </div>

    </>

  )
}

export default App
