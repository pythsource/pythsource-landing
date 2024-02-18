import './App.css'
import { FaTelegramPlane, FaGithub, FaYoutube } from 'react-icons/fa'
import no_text from './assets/no_text.png'
import { useState } from 'react'
import About from './About'
import Projects from './Projects'

function App() {
  const [content, setContent] = useState(<About />)

  const parseClick = (eventName) => {
    switch (eventName) {
      case 'projects':
        setContent(<Projects />)
        break
      case 'about':
        setContent(<About />)
        break
    }
  }

  return (
    <>
      <div className="flex flex-row">
        <div className="min-w-64 flex flex-col gap-2.5 h-screen w-64 border-r border-default-dark p-2">
          <div className="border-b border-default-dark text-3xl font-semibold pb-2 text-center">
            <img className="w-3/5 ml-auto mr-auto" src={no_text}></img>
            PythSource
          </div>
          <button
            onClick={() => parseClick('projects')}
            className="border-b border-t border-default-dark pb-1 pt-1 hover:bg-gray-800 transition duration-100"
          >
            Projects
          </button>
          <button
            onClick={() => parseClick('about')}
            className="border-b border-t border-default-dark pb-1 pt-1 hover:bg-gray-800 transition duration-100"
          >
            About
          </button>
        </div>
        <div className="flex flex-grow flex-col h-screen">
          <div className="w-50 h-full p-2 bg-default-dark-light">{content}</div>
          <div className="flex flex-col gap-1 w-50 h-10p border-t border-default-dark p-2">
            PythSource 2018 - {new Date().getFullYear()}
            <div className="flex flex-row gap-1">
              <a className="text-sky-300" href="https://github.com/pythsource">
                <FaGithub />
              </a>
              <a className="text-sky-300" href="https://t.me/pythsource">
                <FaTelegramPlane />
              </a>
              <a
                className="text-sky-300"
                href="https://www.youtube.com/channel/UCgy0pqFWwiXrVxU8KXgb1RQ"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
