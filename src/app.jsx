import { Outlet, useParams } from 'react-router'
import no_text from './assets/images/no_text.png'
import PropTypes from 'prop-types'
import { FaGitlab, FaGithub } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { parseLocale } from './main.jsx'

export default function App({ children }) {
  const params = useParams()
  const localeInfo = parseLocale(params['lang'])

  return (
    <>
      <div className="page-container">
        <header className="page-header border-color-default bg-default-dark">
          <a href={`/${localeInfo.code}`} className="logo-link logo-animation">
            <img
              className="header-logo"
              alt="PythSource logo"
              src={no_text}
            ></img>
            <h1 className="font-bold">PythSource</h1>
          </a>
          <div className="link-list">
            <a id="about" href={`/${localeInfo.code ? localeInfo.code + '/' : ''}about`} className="header-link transition">
              {localeInfo.isRussian ? 'О команде' : 'About'}
            </a>
            <a id="blog" href={`/${localeInfo.code ? localeInfo.code + '/' : ''}blog`} className="header-link transition">
              {localeInfo.isRussian ? 'Блог' : 'Blog'}
            </a>
            <a
                id="projects"
                href={`/${localeInfo.code ? localeInfo.code + '/' : ''}projects`}
                className="header-link transition"
            >
              {localeInfo.isRussian ? 'Проекты' : 'Projects'}
            </a>
            <a id="services" href={`/${localeInfo.code ? localeInfo.code + '/' : ''}services`} className="header-link transition">
              {localeInfo.isRussian ? 'Услуги' : 'Services'}
            </a>
            <a id="jobs" href={`/${localeInfo.code ? localeInfo.code + '/' : ''}jobs`} className="header-link transition">
              {localeInfo.isRussian ? 'Вакансии' : 'Jobs'}
            </a>
            <a
                id="contacts"
                href={`/${localeInfo.code ? localeInfo.code + '/' : ''}contacts`}
                className="header-link transition"
            >
              {localeInfo.isRussian ? 'Контакты' : 'Contacts'}
            </a>
          </div>
        </header>
        <main className="page-body">{children ?? <Outlet/>}</main>
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
