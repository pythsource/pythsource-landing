import { changeTitle } from '../main'
import datapoint from '../assets/images/datapoint.png'

export default function About() {
  changeTitle('About')

  return (
    <>
      <div className="flex flex-col items-center mt-3">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">PythSource</h1>
          <h2 className="text-2xl">
            A small, fully-remote development team from Europe.
          </h2>
          <h2 className="text-2xl">Active since 2018.</h2>
        </div>
        <div className="flex flex-col mt-1/5">
          <h1 className="text-2xl font-bold border-b border-color-default">
            Some of our most important projects
          </h1>
          <div className="flex justify-center flex-row gap-2 mt-3">
            <img className="w-1/5" src={datapoint}></img>
          </div>
        </div>
      </div>
    </>
  )
}
