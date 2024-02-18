import './App.css'
import {useState} from 'react'
import {FaTelegram, FaGithub, FaYoutube} from 'react-icons/fa'

function App() {
    const [body, setBody] = useState('')
    const ParseClick = (event, buttonName) => {
        switch (buttonName) {
            case 'projects':
                setBody('some projects rae freal')
                break
            case 'about':
                setBody('some abouts are not real')
                break
        }
    }

    return (
        <>
            <div className={'container'}>
                <div
                    className={'top-header flex gap-5 items-center bg-slate-800 absolute top-0 w-full p-3 border-2 border-slate-600'}>
                    <span className={'text-3xl font-mono'}>PythSource</span>
                    <button className={'border-2 p-1 bg-slate-700'}
                            onClick={(e) => ParseClick(e, 'projects')}>Projects
                    </button>
                    <button className={'border-2 p-1 bg-slate-700'} onClick={(e) => ParseClick(e, 'about')}>About
                    </button>
                </div>
                <div className={'web-body absolute top-16 p-2'}>
                    {body}
                </div>
                <div
                    className={'flex justify-between footer bg-slate-800 absolute bottom-0 border-2 p-1.5 w-full border-slate-600'}><span
                    className={'font-mono'}>PythSource © 2018 — {new Date().getFullYear()}</span>
                    <div className={'flex gap-2'}><a className={'text-blue-300 text-2xl'}
                                                     href={'https://t.me/pythsource'}><FaTelegram/></a><a
                        className={'text-blue-300 text-2xl'}
                        href={'https://github.com/pythsource'}><FaGithub/></a><a className={'text-blue-300 text-2xl'}
                                                                                 href={'https://www.youtube.com/channel/UCgy0pqFWwiXrVxU8KXgb1RQ'}><FaYoutube/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
