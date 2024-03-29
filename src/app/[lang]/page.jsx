'use client'

import { TypeAnimation } from 'react-type-animation'
import { parseLocale } from '@/lib/utilities'
import Image from 'next/image'
import hfactions from '@/assets/images/hfactions_presentation.jpg'

export default function Main({ params }) {
  const localeInfo = parseLocale(params['lang'])
  console.log(params)

  return (
    <>
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
          <Image
            alt="A showcase of PythSource's projects"
            src={hfactions}
            className="home-background"
          ></Image>
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
  );
}
