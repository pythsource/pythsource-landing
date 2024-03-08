import { Outlet } from 'react-router'
import no_text from './assets/images/no_text.png'
import PropTypes from 'prop-types'
import { FaGitlab, FaGithub } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'

export default function App({ children }) {
  return (
    <>
      <div className="page-container">
        <header className="page-header border-color-default bg-default-dark">
          <a href="/" className="logo-link logo-animation">
            <img
              className="header-logo"
              alt="PythSource logo"
              src={no_text}
            ></img>
            <h1 className="font-bold">PythSource</h1>
          </a>
          <div className="link-list">
            <a id="about" href="/about" className="header-link transition">
              About
            </a>
            <a id="blog" href="/blog" className="header-link transition">
              Blog
            </a>
            <a
              id="projects"
              href="/projects"
              className="header-link transition"
            >
              Projects
            </a>
            <a id="jobs" href="/jobs" className="header-link transition">
              Jobs
            </a>
            <a
              id="contacts"
              href="/contacts"
              className="header-link transition"
            >
              Contacts
            </a>
          </div>
        </header>
        <main className="page-body">{children ?? <Outlet />}</main>
        <footer className="page-footer border-color-default bg-default-dark text-footer">
          <div>© {new Date().getFullYear()} PythSource</div>
          <div className="link-list_footer">
            <a href="https://git.pythsource.com/explore">
              <FaGitlab size={25} />
            </a>
            <a href="https://github.com/pythsource">
              <FaGithub size={25} />
            </a>
            <a href="mailto:pythsource.official@gmail.com">
              <MdAlternateEmail size={25} />
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}
App.propTypes = {
  children: PropTypes.any,
}
