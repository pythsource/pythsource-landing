import ProjectCard from './components/ProjectCard'

export default function Projects() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <div className="flex flex-col border-b border-default-dark mb-2">
            <span className="text-2xl font-bold -mb-1">Data Point:</span>
            <span className="text-sm italic text-gray-400">
              A universe, used by Pythsource to develop different multimedia
              projects. Constantly expanding.
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <ProjectCard
              imageUrl="https://upload.wikimedia.org/wikipedia/ru/d/db/Citadel_1_%28Half-Life_2_Episode_One%29.jpg"
              projectName="Global Information Repository"
              description="A wiki for Data Point, taken from the perspective of the ITREWN."
              links="TBA"
            />
            <ProjectCard
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/f/fd/TDN-1_assault_drone_strikes_target_during_tests_in_Delaware_Bay_in_January_1943.jpg"
              projectName="Project Seen"
              description="A modification for Half-Life 2, that depicts the events of the Celas' Revolution."
              links="TBA"
            />
          </div>
        </div>
      </div>
    </>
  )
}
