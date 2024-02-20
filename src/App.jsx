import './App.css'
import no_text from './assets/no_text.png'
import { useState } from 'react'
import About from './pages/About'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  const [content, setContent] = useState(<Home />)

  const parseClick = (eventName) => {
    switch (eventName) {
      case 'projects':
        setContent(<Projects />)
        break
      case 'about':
        setContent(<About />)
        break
      case 'home':
        setContent(<Home />)
        break
      case 'contact':
        setContent(<Contact />)
        break
    }
  }

  return (
    <>
      <div className="flex flex-row">
        <div className="min-w-64 flex flex-col gap-2.5 h-screen w-64 border-r border-default-dark">
          <div className="border-b border-default-dark text-3xl font-semibold pb-2 text-center">
            <a onClick={() => parseClick('home')} aria-label="Home" href="#">
              <img
                alt="PythSource Logo"
                className="w-3/5 ml-auto mr-auto"
                src={no_text}
              ></img>
            </a>
            <a
              className="hover:bg-indigo-300 hover:text-black hover:p-1 transition"
              onClick={() => parseClick('home')}
              aria-label="Home"
              href="#"
            >
              PythSource
            </a>
          </div>
          <button
            onClick={() => parseClick('about')}
            className="border-b border-t border-default-dark pb-1 pt-1 hover:bg-gray-800 transition duration-100"
          >
            About
          </button>
          <button
            onClick={() => parseClick('projects')}
            className="border-b border-t border-default-dark pb-1 pt-1 hover:bg-gray-800 transition duration-100"
          >
            Projects
          </button>
          <button
            onClick={() => parseClick('contact')}
            className="border-b border-t border-default-dark pb-1 pt-1 hover:bg-gray-800 transition duration-100"
          >
            Contacts
          </button>
        </div>
        <div className="flex flex-grow flex-col h-screen">
          <div className="w-50 h-full p-2 bg-default-dark-light">{content}</div>
          <div className="flex flex-row justify-between w-50 h-5p border-t border-default-dark p-2">
            <i>© 2018 — {new Date().getFullYear()} PythSource</i>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
