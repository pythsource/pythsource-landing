import {
  MdCalendarMonth,
  MdCategory,
  MdCurrencyExchange,
  MdTimelapse,
  MdViewKanban,
} from 'react-icons/md'
import { changeTitle } from '../main'
import { useState } from 'react'

export default function Jobs() {
  changeTitle('Jobs')
  const [availableFilters, setAvailableFilters] = useState('TODO: Filters')

  return (
    <>
      <div className="flex bg-default w-full h-full border border-color-default rounded-xl">
        <div className="flex bg-default-darkl flex-col border-r border-color-default w-1/5 p-3">
          <span>Search:</span>
          <input className="bg-default-dark border border-color-default rounded p-1"></input>
          <hr className="border-color-default mt-2 mb-2" />
          <span>Filters:</span>
          {availableFilters}
        </div>
        <div className="p-3 w-full">
          <div className="flex flex-col gap-2 slide-top">
            <div className="flex bg-default-darkl flex-row border border-color-default rounded">
              <div className="flex flex-col p-3 w-full">
                <div className="flex gap-5 text-footer mb-3 text-sm">
                  <div className="flex items-center gap-1">
                    <MdViewKanban size={17} /> Project Seen
                  </div>
                  <div className="flex items-center gap-1">
                    <MdCategory size={17} /> Game Development
                  </div>
                  <div className="flex items-center gap-1">
                    <MdTimelapse size={17} /> On-demand
                  </div>
                  <div className="flex items-center gap-1">
                    <MdCurrencyExchange size={17} /> Volunteer/Unpaid
                  </div>
                  <div className="flex items-center gap-1">
                    <MdCalendarMonth size={17} /> 2024-04-28
                  </div>
                </div>
                <h1 className="text-xl font-bold">Voice Actor</h1>
                <h2 className="text-sm text-dark">
                  We need voice actors for NPCs and main characters. Most
                  characters are Bulgarian, so voices with an accent are
                  prefered. No resume or portfolio is required, but we wouldn't
                  mind one.
                </h2>
              </div>
              <div className="flex flex-col justify-center p-4 border-l border-color-default">
                <a
                  className="button-link"
                  href="mailto:pythsource.official@gmail.com"
                >
                  Message
                </a>
              </div>
            </div>
            <div className="flex bg-default-darkl flex-row border border-color-default rounded">
              <div className="flex flex-col p-3 w-full">
                <div className="flex gap-5 text-footer mb-3 text-sm">
                  <div className="flex items-center gap-1">
                    <MdViewKanban size={17} /> Project Seen
                  </div>
                  <div className="flex items-center gap-1">
                    <MdCategory size={17} /> Game Development
                  </div>
                  <div className="flex items-center gap-1">
                    <MdTimelapse size={17} /> On-demand
                  </div>
                  <div className="flex items-center gap-1">
                    <MdCurrencyExchange size={17} /> Volunteer/Unpaid
                  </div>
                  <div className="flex items-center gap-1">
                    <MdCalendarMonth size={17} /> 2024-04-28
                  </div>
                </div>
                <h1 className="text-xl font-bold">Playtester</h1>
                <h2 className="text-sm text-dark">
                  We need a small team of playtesters to provide constructive
                  criticism on the current state of the project.
                </h2>
              </div>
              <div className="flex flex-col justify-center p-4 border-l border-color-default">
                <a
                  className="button-link"
                  href="mailto:pythsource.official@gmail.com"
                >
                  Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
