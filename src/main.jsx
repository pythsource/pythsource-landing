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
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
      {
        path: '/jobs',
        element: <Jobs />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blog/post/:pageName',
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

export const fakeButton = (buttonId) => {
  document.getElementById(buttonId).classList.add('bg-default-light')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
