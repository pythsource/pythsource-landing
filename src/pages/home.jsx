import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  return (
    <>
        <div className="home-row">
            <div className="home-left">
                <div className="home-text">
                    <h1 className="home-title"><TypeAnimation sequence={['PythSource', 1000]} cursor={false}/></h1>
                    <h2 className="home-subtitle"><TypeAnimation sequence={['Software. Game Development.', 1000]} cursor={false}/></h2>
                    <h3 className="home-subtitle"><TypeAnimation sequence={['Since 2018.', 1000]} cursor={false}/></h3>
                </div>
            </div>
            <div className="home-right">
                <div className="home-background"></div>
                <div className="home-imagetext"><TypeAnimation sequence={['Typical Project Seen Street', 1000]}/></div>
            </div>
        </div>
    </>
  )
}
