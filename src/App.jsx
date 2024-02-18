import './App.css'
import { useState } from 'react'
import { FaTelegram, FaGithub, FaYoutube } from 'react-icons/fa'
import no_text from './assets/no_text.png'

function App() {
  const populateProjects = () => {
    return (
      <>
        <div className='grid grid-cols-5 gap-2'>
          <div className='bg-slate-700 p-4 border'>
            <div className='text-2xl'>Data Point</div>
            <div className='text-gray-400'>Data Point is a universe used by PythSource to develop multimedia content.</div>
            <div className='flex justify-end text-blue-400'><a href="https://t.me/dp_proj"><FaTelegram/></a></div>
          </div>  
          <div className='bg-slate-700 p-4 border'>
            <div className='text-2xl'>Project Seen</div>
            <div className='text-gray-400'>A game depicting the events of the Celas' revolution.</div>
            <div className='flex justify-end text-blue-400'><a href="https://git.pythsource.org/pythsource/Project-Seen"><FaGithub/></a></div>
          </div>
        </div>
      </>
    )
  }

  const populateAbout = () => {
    return (
      <>
        <article className="border-l-2 border-dashed pl-5 border-gray-700">
          <h1 className="text-3xl font-bold">PythSource</h1>
          <p>Where no projects are released.</p>
          <div className="flex flex-row mt-2 mb-2">
            <div className="border-r border-gray-700 pr-5 pt-2 pb-2 pl-5">
              <span className="text-gray-400">Staff</span>
              <br />
              <span className="text-3xl font-bold">2</span>
            </div>
            <div className="border-r border-gray-700 pr-5 pt-2 pb-2 pl-5">
              <span className="text-gray-400">Budget</span>
              <br />
              <span className="text-3xl font-bold">0$</span>
            </div>
            <div className="pr-5 pt-2 pb-2 pl-5">
              <span className="text-gray-400">Projects</span>
              <br />
              <span className="text-3xl font-bold">
                800 unreleased projects and counting
              </span>
            </div>
          </div>
          <p>We are definitely hiring people for the Data Point project, and for Project Seen 2/3 DLC unavailable.</p>
        </article>
      </>
    )
  }

  const [body, setBody] = useState(populateAbout())
  const parseClick = (event, buttonName) => {
    switch (buttonName) {
      case 'projects':
        setBody(populateProjects())
        break
      case 'about':
        setBody(populateAbout())
        break
    }
  }

  return (
    <>
      <div className={'container'}>
        <div
          className={
            'top-header flex gap-2 items-center border-t-0 border-r-0 border-l-0 bg-slate-800 absolute top-0 w-full p-3 border border-slate-600'
          }
        >
          <img className="w-14" src={no_text}></img>
          <span className={'text-3xl transition-all font-mono border-r pr-2'}>
            PythSource
          </span>
          <button
            className={
              'border p-1 bg-slate-700 text-sm hover:bg-slate-500 transition-all'
            }
            onClick={(e) => parseClick(e, 'projects')}
          >
            Projects
          </button>
          <button
            className={
              'border p-1 bg-slate-700 text-sm hover:bg-slate-500 transition-all'
            }
            onClick={(e) => parseClick(e, 'about')}
          >
            About
          </button>
        </div>
        <div className={'web-body absolute top-20 p-2'}>{body}</div>
        <div
          className={
            'flex justify-between footer bg-slate-800 absolute bottom-0 border border-l-0 border-r-0 border-b-0 p-1.5 w-full border-slate-600'
          }
        >
          <span className={'font-mono'}>
            PythSource © 2018 — {new Date().getFullYear()}
          </span>
          <div className={'flex gap-2'}>
            <a
              className={'text-blue-400 text-2xl'}
              href={'https://t.me/pythsource'}
            >
              <FaTelegram />
            </a>
            <a
              className={'text-blue-400 text-2xl'}
              href={'https://github.com/pythsource'}
            >
              <FaGithub />
            </a>
            <a
              className={'text-blue-400 text-2xl'}
              href={'https://www.youtube.com/channel/UCgy0pqFWwiXrVxU8KXgb1RQ'}
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
