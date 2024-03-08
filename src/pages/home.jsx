import { TypeAnimation } from 'react-type-animation'
import hfactions from '../assets/images/hfactions_presentation.png'

export default function Home() {
  return (
    <>
      <div className="home-row">
        <div className="home-left">
          <div className="home-text">
            <h1 className="home-title">
              <TypeAnimation
                sequence={['PythSource', 1000]}
                cursor={false}
                speed={200}
              />
            </h1>
            <h2 className="home-subtitle">
              <TypeAnimation
                sequence={[
                  '> Game Development',
                  2500,
                  '> Web Development',
                  2500,
                  '> Software Development',
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
