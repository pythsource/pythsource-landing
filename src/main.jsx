import React from 'react'
import ReactDOM from 'react-dom/client'
import 'modern-normalize'
import './reset.scss'
import '@fontsource-variable/jetbrains-mono'
import './main.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './app'
import Error from './pages/error'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contacts from './pages/contacts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (<App><Error /></App>),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contacts',
        element: <Contacts />
      }
    ]
  },
])

export const changeTitle = (pageTitle, bare = false) => {
  bare
    ? (document.title = 'PythSource')
    : (document.title = `PythSource - ${pageTitle}`)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
