import './App.css'
import no_text from './assets/no_text.png'
import { Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'

function App({ children }) {
  return (
    <>
      <div className="flex flex-row">
        <div className="min-w-64 flex flex-col gap-2.5 h-screen w-64 border-r border-default-dark">
          <div className="border-b border-default-dark text-3xl font-semibold pb-2 text-center">
            <a href="/" aria-label="Navigate to home page">
              <img
                alt="PythSource Logo"
                className="w-3/5 ml-auto mr-auto"
                src={no_text}
              ></img>
            </a>
            <a
              className="hover:bg-indigo-300 hover:text-black hover:p-1 transition"
              href="/"
              aria-label="Navigate to home page"
            >
              PythSource
            </a>
          </div>
          <a
            href="/about"
            aria-label="Navigate to about page"
            className="text-center border-b border-t border-default-dark pb-1 pt-1 bg-default-dark-light hover:bg-indigo-800 transition duration-100"
          >
            About
          </a>
          <a
            href="/projects"
            className="text-center border-b border-t border-default-dark pb-1 pt-1 bg-default-dark-light hover:bg-indigo-800 transition duration-100"
            aria-label="Navigate to projects page"
          >
            Projects
          </a>
          <a
            href="/contacts"
            className="text-center border-b border-t border-default-dark pb-1 pt-1 bg-default-dark-light hover:bg-indigo-800 transition duration-100"
            aria-label="Navigate to contacts page"
          >
            Contacts
          </a>
        </div>
        <div className="flex flex-grow flex-col h-screen">
          <div className="w-50 h-full p-2 bg-default-dark-light overflow-auto">
            {children ?? <Outlet />}
          </div>
          <div className="flex flex-row justify-between w-50 h-5p border-t border-default-dark p-2">
            <i>© 2018 — {new Date().getFullYear()} PythSource</i>
          </div>
        </div>
      </div>
    </>
  )
}
App.propTypes = {
  children: PropTypes.any,
}

export default App
