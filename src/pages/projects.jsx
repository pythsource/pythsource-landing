import { MdCalendarMonth } from 'react-icons/md'
import { changeTitle } from '../main'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {
  changeTitle('Projects')

  return (
    <>
      <div className="w-full h-full">
        <div className="flex gap-5 flex-col">
          <div className="flex flex-col gap-1.5">
            <div className="border-b border-color-default border-l-5 pl-2.5">
              <a href="/projects/data-point">
                <h1 className="text-2xl text-link">Data Point</h1>
              </a>
              <h2 className="text-dark">
                A universe used by PythSource to develop multimedia projects.
                Constantly expanding.
              </h2>
            </div>
            <div className="grid grid-cols-4 gap-3 logo-animation">
              <div className="flex flex-col bg-default-darkl border border-color-default rounded-lg">
                <div className="flex justify-center border-b border-color-default">
                  <img src="https://cdn.discordapp.com/attachments/293011429555044354/1212071293646540800/image.png?ex=65f0805b&is=65de0b5b&hm=348879192c8987272445c677129bba9569c24c5146c43bd7bf2a9f6c4f3a0a74&"></img>
                </div>
                <div className="flex flex-col p-3">
                  <h1 className="text-2xl mb-1">
                    Global Information Repository
                  </h1>
                  <h2 className="text-dark">
                    A wiki for the Data Point project, taken from the
                    perspective of the ITREWN.
                  </h2>
                </div>
                <div className="flex justify-end items-center border-t border-color-default p-1.5 text-sm text-footer">
                  <MdCalendarMonth size={20} /> TBA
                </div>
              </div>
              <div className="flex flex-col bg-default-darkl border border-color-default rounded-lg">
                <div className="flex justify-center border-b border-color-default">
                  <img src="https://cdn.discordapp.com/attachments/293011429555044354/1212104169083764777/image.png?ex=65f09ef9&is=65de29f9&hm=5dbf0b95f840a0f9f57a899cc3dd83593481a7a974c7677d8e067b4a2b3d25c3&"></img>
                </div>
                <div className="flex flex-col p-3">
                  <h1 className="text-2xl mb-1">Project Seen</h1>
                  <h2 className="text-dark">
                    A Source modification, depicting the events of the Celas'
                    Revolution.
                  </h2>
                </div>
                <div className="flex justify-end items-center border-t border-color-default p-1.5 text-sm text-footer">
                  <MdCalendarMonth size={20} /> TBA
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-1.5 flex-col">
            <div className="border-b border-color-default border-l-5 pl-2.5">
              <a href="/projects/world-factions">
                <h1 className="text-2xl text-link">World Factions</h1>
              </a>
              <h2 className="text-dark">
                A scrapped universe previously used by PythSource.
              </h2>
            </div>
            <div className="grid grid-cols-4 gap-3 logo-animation">
              <div className="flex flex-col bg-default-darkl border border-color-default rounded-lg">
                <div className="flex justify-center border-b border-color-default">
                  <img src="https://cdn.discordapp.com/attachments/293011429555044354/1212104999157497926/image.png?ex=65f09fbf&is=65de2abf&hm=0e22b54e922a3714362159e2997b2694d53a805f70a7d5adf2452bbe1239671c&"></img>
                </div>
                <div className="flex flex-col p-3">
                  <h1 className="text-2xl mb-1">HFactions</h1>
                  <h2 className="text-dark">
                    A Hearts Of Iron IV modification, that depicts the events of
                    World Factions from 2019 to 2021.
                  </h2>
                </div>
                <div className="flex justify-end items-center border-t border-color-default p-1.5 text-sm text-footer">
                  <a href="https://github.com/pythsource/HFactions">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-1.5 flex-col">
            <div className="border-b border-color-default border-l-5 pl-2.5">
              <h1 className="text-2xl">Miscellaneous Projects</h1>
              <h2 className="text-dark">
                Projects that don't fit into any other categories.
              </h2>
            </div>
            <div className="grid grid-cols-4 gap-3 logo-animation">
              <div className="flex flex-col bg-default-darkl border border-color-default rounded-lg">
                <div className="flex justify-center border-b border-color-default">
                  <img src="https://cdn.discordapp.com/attachments/293011429555044354/1212104999157497926/image.png?ex=65f09fbf&is=65de2abf&hm=0e22b54e922a3714362159e2997b2694d53a805f70a7d5adf2452bbe1239671c&"></img>
                </div>
                <div className="flex flex-col p-3">
                  <h1 className="text-2xl mb-1">ZS-Navmeshes</h1>
                  <h2 className="text-dark">
                    Additional navmeshes to be used with D3Bot - an addon for
                    Garry's Mod.
                  </h2>
                </div>
                <div className="flex justify-end items-center border-t border-color-default p-1.5 text-sm text-footer">
                  <a href="https://github.com/pythsource/ZS-Navmeshes">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
