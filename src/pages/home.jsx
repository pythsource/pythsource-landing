import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  const [homeImage, setHomeImage] = useState(
    'https://cdn.discordapp.com/attachments/293011429555044354/1211733533601824908/image.png?ex=65ef45cb&is=65dcd0cb&hm=7b605983c30e059afa0b99d149c9c2843e74d8f599bfc13a1fb500bab7cba4d2&'
  )

  const updateImage = () => {
    console.log('New image.')
  }

  useEffect(() => {
    setInterval(() => updateImage(), 4500)
  }, [])

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
            src={homeImage}
            className="home-background"
          ></img>
          <div className="home-imagetext">
            <TypeAnimation
              sequence={[
                'Typical Project Seen Street',
                2500,
                'Praject Seenability',
                2500,
              ]}
              speed={200}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </>
  )
}
