import { MdCalendarMonth } from 'react-icons/md'
import { changeTitle } from '../main'
import { FaGithub } from 'react-icons/fa'
import ProjectEntry from '../components/project_entry'
import hfactions from '../assets/images/hfactions_title.png'

export default function Projects() {
  changeTitle('Projects')

  return (
    <>
      <div className="w-full overflow-auto h-full">
        <div className="flex flex-col p-5 gap-5 bg-default-darkl border border-color-default rounded-md">
          <div className="flex flex-col">
            <div className="flex flex-col text-center items-center border-b border-color-default mb-3">
              <h1 className="text-2xl">Data Point</h1>
              <h2 className="text-lg text-dark italic">
                A universe used by PythSource to develop different multimedia
                projects. Constantly expanding.
              </h2>
            </div>
            <div className="flex logo-animation md:items-baseline flex-col md:flex-row gap-1.5">
              <ProjectEntry
                title="Global Information Repository"
                description="A wiki for the Data Point project, taken from the perspective of the ITREWN."
                links={
                  <>
                    <MdCalendarMonth size={25} /> TBA
                  </>
                }
              />
              <ProjectEntry
                title="Project Seen"
                description="A Source™ modification, depicting the events of the Celas' Revolution."
                links={
                  <>
                    <MdCalendarMonth size={25} /> TBA
                  </>
                }
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex text-center flex-col items-center border-b border-color-default mb-3">
              <h1 className="text-2xl">World Factions</h1>
              <h2 className="text-lg text-dark italic">
                A scrapped universe previously used by PythSource. A predecessor
                to Data Point.
              </h2>
            </div>
            <div className="flex logo-animation md:items-baseline flex-col md:flex-row gap-1.5">
              <ProjectEntry
                imgSrc={hfactions}
                title="HFactions"
                description="A Hearts Of Iron IV modification, depicting the events of World Factions from 2019 to 2021."
                links={
                  <>
                    <a href="https://github.com/pythsource/HFactions">
                      <FaGithub size={30} />
                    </a>
                  </>
                }
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex text-center flex-col items-center border-b border-color-default mb-3">
              <h1 className="text-2xl">Miscellaneous Projects</h1>
              <h2 className="text-lg text-dark italic">
                Projects that don't fit into any other categories.
              </h2>
            </div>
            <div className="flex logo-animation md:items-baseline flex-col md:flex-row gap-1.5">
              <ProjectEntry
                title="ZS-Navmeshes"
                description="Additional navmeshes to be used with D3Bot - a Zombie Survival addon for Garry's Mod."
                links={
                  <>
                    <a href="https://github.com/pythsource/ZS-Navmeshes">
                      <FaGithub size={30} />
                    </a>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
