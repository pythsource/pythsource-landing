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

export const changeTitle = (pageTitle, bare = false) => {
  bare
    ? (document.title = 'PythSource')
    : (document.title = `PythSource - ${pageTitle}`)
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
