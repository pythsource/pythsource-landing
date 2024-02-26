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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (<App><Error /></App>),
    children: [
      {
        path: '/',
        element: <Home />
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
