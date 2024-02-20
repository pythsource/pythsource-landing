import ProjectCard, { ProjectStatus } from '../components/ProjectCard'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <div className="flex flex-col border-b border-default-dark mb-2">
            <span className="text-2xl font-bold -mb-1">Data Point:</span>
            <span className="text-sm italic text-gray-400">
              A universe used by PythSource to develop different multimedia
              projects. Constantly expanding.
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <ProjectCard
              imageUrl="https://upload.wikimedia.org/wikipedia/ru/d/db/Citadel_1_%28Half-Life_2_Episode_One%29.jpg"
              projectName="Global Information Repository"
              description="A wiki for the Data Point project, taken from ITREWN's perspective."
              links={<ProjectStatus projStatus="tbd" />}
            />
            <ProjectCard
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/f/fd/TDN-1_assault_drone_strikes_target_during_tests_in_Delaware_Bay_in_January_1943.jpg"
              projectName="Project Seen"
              description="A modification for Half-Life 2, that depicts the events of the Celas' Revolution."
              links={<ProjectStatus projStatus="tbd" />}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col border-b border-default-dark mb-2">
            <span className="text-2xl font-bold -mb-1">Other:</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <ProjectCard
              imageUrl="https://upload.wikimedia.org/wikipedia/ru/d/db/Citadel_1_%28Half-Life_2_Episode_One%29.jpg"
              projectName="ZS Navmeshes"
              description="Additional navmeshes to be used with D3Bot - an addon for Garry's Mod."
              links={
                <a
                  aria-label="GitHub"
                  href="https://github.com/pythsource/ZS-Navmeshes"
                >
                  <FaGithub size={30} />
                </a>
              }
            />
          </div>
        </div>
      </div>
    </>
  )
}
