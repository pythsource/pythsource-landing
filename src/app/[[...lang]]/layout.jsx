import "./main.scss";
import "@fontsource-variable/jetbrains-mono";
import { parseLocale } from '@/lib/utilities'
import Image from 'next/image'
import no_text from '../../assets/images/no_text.png'
import us_flag from '../../assets/images/us_flag.png'
import ru_flag from '../../assets/images/ru_flag.png'
import { FaGitlab, FaGithub } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'

export default function RootLayout({ params, children }) {
  const localeInfo = parseLocale(params['lang']);

  return (
    <html lang="en" className='bg-default text-default' prefix='og: https://ogp.me/ns#'>
      <head>
        <link rel='canonical' href='https://pythsource.com'/>
        <title>Shit...</title>
      </head>
      <body>
        <div id='root'>
          <div className='page-container'>
            <header className="page-header border-color-default bg-default-dark">
              <a href={`/${localeInfo.code}`} className="logo-link logo-animation">
                <Image
                  className="header-logo"
                  alt="PythSource logo"
                  src={no_text}
                ></Image>
                <h1 className="font-bold">PythSource</h1>
              </a>
              <div className="link-list">
                <a id="about" href={`/${localeInfo.code ? localeInfo.code + '/' : ''}about`}
                   className="header-link transition">
                  {localeInfo.isRussian ? 'О команде' : 'About'}
                </a>
                <a id="blog" href={`/${localeInfo.code ? localeInfo.code + '/' : ''}blog`}
                   className="header-link transition">
                  {localeInfo.isRussian ? 'Блог' : 'Blog'}
                </a>
                <a
                  id="projects"
                  href={`/${localeInfo.code ? localeInfo.code + '/' : ''}projects`}
                  className="header-link transition"
                >
                  {localeInfo.isRussian ? 'Проекты' : 'Projects'}
                </a>
                <a id="services" href={`/${localeInfo.code ? localeInfo.code + '/' : ''}services`}
                   className="header-link transition">
                  {localeInfo.isRussian ? 'Услуги' : 'Services'}
                </a>
                <a id="jobs" href={`/${localeInfo.code ? localeInfo.code + '/' : ''}jobs`}
                   className="header-link transition">
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
            <main className="page-body">{children}</main>
            <footer className="page-footer border-color-default bg-default-dark text-footer">
              <div>© {new Date().getFullYear()} PythSource</div>
              <div className="link-list_footer">
                <a href="https://pythsource.com">
                  <Image alt='US Flag' src={us_flag} className='h-3.5'></Image>
                </a>
                <a href="https://pythsource.com/ru">
                  <Image alt='Russian Flag' src={ru_flag} className='h-3.5'></Image>
                </a>
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
        </div>
      </body>
    </html>
  );
}
