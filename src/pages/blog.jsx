import { changeTitle } from '../main'
import { useState } from 'react'

export default function Blog() {
  changeTitle('Blog')
  const [availableFilters, setAvailableFilters] = useState()
  const [blogPosts, setBlogPosts] = useState()
  const [searchPrompt, setSearchPrompt] = useState('')

  return (
    <>
      <div className="flex bg-default w-full h-full border border-color-default rounded-xl">
        <div className="flex bg-default-darkl flex-col border-r border-color-default w-1/5 p-3">
          <span>Search:</span>
          <input
            value={searchPrompt}
            onChange={(e) => setSearchPrompt(e.target.value)}
            className="bg-default-dark border border-color-default rounded p-1"
          ></input>
          <hr className="border-color-default mt-2 mb-2" />
          <span>Filters:</span>
          {availableFilters ?? 'TODO: Loading...'}
        </div>
        <div className="p-3 w-full">
          <div className="flex flex-col gap-2 slide-top">
            {blogPosts ?? 'TODO: Loading...'}
          </div>
        </div>
      </div>
    </>
  )
}
