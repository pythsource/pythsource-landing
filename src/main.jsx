import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:windi.css'
import '@fontsource-variable/jetbrains-mono'
import './main.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './app'
import Error from './pages/error'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contacts from './pages/contacts'
import Jobs from './pages/jobs'
import Blog from './pages/blog'
import BlogPage from './pages/blog_page'
import Services from './pages/services.jsx'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <App>
        <Error />
      </App>
    ),
    children: [
      {
        path: '/:lang?',
        element: <Home />,
      },
      {
        path: '/:lang?/about',
        element: <About />,
      },
      {
        path: '/:lang?/projects',
        element: <Projects />,
      },
      {
        path: '/:lang?/contacts',
        element: <Contacts />,
      },
      {
        path: '/:lang?/jobs',
        element: <Jobs />,
      },
      {
        path: '/:lang?/blog',
        element: <Blog />,
      },
      {
        path: '/:lang?/services',
        element: <Services />,
      },
      {
        path: '/:lang?/blog/post/:pageName',
        element: <BlogPage />,
      },
    ],
  },
])

export const formatTitle = (pageName) => {
  return `PythSource — ${pageName}`
}

export const parseLocale = (languageCode) => {
  if (languageCode === 'ru') {
    return {
      code: languageCode,
      isRussian: true,
    }
  } else {
    return {
      code: '',
      isRussian: false,
    }
  }
}

// SEO-important component
export const MetaHead = ({ title, description }) => {
  return (
      <>
        <Helmet>
          <meta
              name="description"
              content={description}
          />
          <meta
              name="twitter:image"
              content="https://pythsource.com/images/pythsource_logo.png"
          />
          <meta name="twitter:site" content="@pythsource"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content={title}/>
          <meta
              name="twitter:description"
              content={description}
          />
          <meta
              name="og:image"
              content="https://pythsource.com/images/pythsource_logo.png"
          />
          <meta
              name="og:image:alt"
              content={description}
          />
          <meta name="og:site_name" content={title}/>
          <meta name="og:type" content="homepage"/>
          <meta name="og:title" content={title}/>
          <meta name="og:url" content="https://pythsource.com"/>
          <meta
              name="og:description"
              content={description}
          />
        </Helmet>
      </>
  )
}
MetaHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
)
