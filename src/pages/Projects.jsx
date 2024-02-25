import ProjectCard, { ProjectStatus } from '../components/ProjectCard'
import { FaGithub } from 'react-icons/fa'
import { changeTitle } from '../main'

export default function Projects() {
  changeTitle('Projects')

  return (
    <>
      <div className="flex flex-col gap-5 animation-appear">
        <div className="flex flex-col">
          <div className="flex flex-col border-b border-default-dark mb-2">
            <h1 className="text-2xl font-bold -mb-1">Data Point:</h1>
            <h2 className="text-sm italic text-gray-400">
              A universe used by PythSource to develop different multimedia
              projects. Constantly expanding.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <ProjectCard
              projectName="Global Information Repository"
              description="A wiki for the Data Point project, taken from ITREWN's perspective."
              links={<ProjectStatus projStatus="tba" />}
            />
            <ProjectCard
              projectName="Project Seen"
              description="A modification for Half-Life 2, that depicts the events of the Celas' Revolution."
              links={<ProjectStatus projStatus="tba" />}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col border-b border-default-dark mb-2">
            <h1 className="text-2xl font-bold -mb-1">World Factions:</h1>
            <h2 className="text-sm italic text-gray-400">
              A scrapped universe, previously used by PythSource for project
              ideas.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <ProjectCard
              projectName="HFactions"
              description="A Hearts Of Iron IV mod, depicting the events of World Factions from 2019 to 2021."
              links={
                <a
                  aria-label="GitHub"
                  href="https://github.com/pythsource/HFactions"
                >
                  <FaGithub size={30} />
                </a>
              }
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col border-b border-default-dark mb-2">
            <h1 className="text-2xl font-bold -mb-1">Other:</h1>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <ProjectCard
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
