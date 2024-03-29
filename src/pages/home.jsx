import { TypeAnimation } from 'react-type-animation'
import hfactions from '../assets/images/hfactions_presentation.jpg'
import { useParams } from 'react-router'
import { MetaHead, parseLocale } from '../main.jsx'

export default function Home() {
    const params = useParams()
    const localeInfo = parseLocale(params['lang'])

  return (
    <>
      <MetaHead description={localeInfo.isRussian ? 'PythSource - небольшая команда, занимающаяся разработкой программного обеспечения/игр. Основана в 2018 году.' : 'PythSource is a small team that does software/game development. Founded in 2018.'} title='PythSource' />
      <div className="home-row">
        <div className="home-left">
          <div className="home-text">
            <h1 className="home-title">
              <TypeAnimation
                sequence={['PythSource', 2500]}
                cursor={false}
                speed={200}
              />
            </h1>
            <h2 className="home-subtitle">
              <TypeAnimation
                sequence={[
                    localeInfo.isRussian ? '> Разработка игр' : '> Game Development',
                  2500,
                  localeInfo.isRussian ? '> Веб-разработка' : '> Web Development',
                  2500,
                  localeInfo.isRussian ? '> Разработка ПО' : '> Software Development',
                  2500,
                ]}
                speed={200}
                repeat={Infinity}
              />
            </h2>
          </div>
        </div>
        <div className="home-right">
          <img
            alt="A showcase of PythSource's projects"
            src={hfactions}
            className="home-background"
          ></img>
          <div className="home-imagetext">
            <TypeAnimation
              sequence={['HFactions', 2500]}
              speed={200}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </>
  )
}
