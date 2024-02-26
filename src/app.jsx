import { Outlet } from 'react-router'
import no_text from './assets/images/no_text.png'
import PropTypes from 'prop-types'
import { FaGitlab, FaGithub } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import perlin from './assets/images/perlin.png'

export default function App({ children }) {
  return (
    <>
      <div className="page-container">
        <header
          style={{ backgroundImage: `url(${perlin})`, backgroundSize: '50%' }}
          className="page-header border-color-default bg-default-dark"
        >
          <a href="/" className="logo-link logo-animation">
            <img
              className="header-logo"
              alt="PythSource logo"
              src={no_text}
            ></img>
            <h1 className="font-bold">PythSource</h1>
          </a>
          <div className="link-list">
            <a href="/about" className="header-link transition">
              About
            </a>
            <a href="/projects" className="header-link transition">
              Projects
            </a>
            <a href="/contacts" className="header-link transition">
              Contacts
            </a>
          </div>
        </header>
        <main className="page-body">{children ?? <Outlet />}</main>
        <footer
          style={{ backgroundImage: `url(${perlin})`, backgroundSize: '50%' }}
          className="page-footer border-color-default bg-default-dark text-footer"
        >
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
