import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource-variable/source-code-pro'
import App from './App.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <App>
        <NotFound />
      </App>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contacts',
        element: <Contact />,
      },
    ],
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
