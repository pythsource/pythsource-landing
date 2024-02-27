import { MdCalendarMonth } from 'react-icons/md'
import { changeTitle } from '../main'

export default function Projects() {
  changeTitle('Projects')

  return (
    <>
      <div className="w-full h-full">
        <div className="flex gap-5 flex-col">
          <div className="flex flex-col gap-1.5">
            <div className="border-b border-color-default border-l-5 pl-2.5">
              <h1 className="text-2xl">Data Point</h1>
              <h2 className="text-dark">
                A universe used by PythSource to develop multimedia projects.
                Constantly expanding.
              </h2>
            </div>
            <div className="grid grid-cols-4 logo-animation">
              <div className="flex flex-col bg-default-darkl border border-color-default rounded-lg">
                <div className="flex justify-center border-b border-color-default max-h-34">
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
            </div>
          </div>
          <div className="flex gap-5 flex-col">
            <div className="border-b border-color-default border-l-5 pl-2.5">
              <h1 className="text-2xl">World Factions</h1>
              <h2 className="text-dark">
                A scrapped universe previously used by PythSource.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
