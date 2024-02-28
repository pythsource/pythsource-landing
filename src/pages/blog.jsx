import { changeTitle } from '../main'
import { MdCalendarMonth, MdCategory, MdPerson } from 'react-icons/md'
import { useEffect, useState } from 'react'

export default function Blog() {
  const [availableFilters, setAvailableFilters] = useState('TODO: Filters')
  const [blogPosts, setBlogPosts] = useState('TODO: API')
  changeTitle('Blog')

  const populatePosts = async () => {
    try {
      const response = await fetch(
        'https://api.pythsource.com/landing/index_blogs',
        {
          method: 'GET'
        }
      )

      var responseBody = await response.json()
    } catch (error) {
      
    }
  }

  useEffect(() => {
    
  }, [])

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
                <h1 className="text-xl font-bold">
                  Your project needs protobuf. Here's two reasons why.
                </h1>
                <h2 className="text-sm text-dark">
                  You never know if your project might need serialization. See
                  if your project falls into one of these categories.
                </h2>
                <div className="flex gap-5 justify-end text-footer mt-3 text-sm">
                  <div className="flex gap-1 items-center">
                    <MdCategory size={15} />
                    <p>PSA</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <MdPerson size={15} />
                    <p>URAKOLOUY5</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <MdCalendarMonth size={15} />
                    <p>2024-02-27</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-4 border-l border-color-default">
                <a className="button-link" href="/blog/post/protobuf">
                  Read
                </a>
              </div>
            </div>
            <div className="flex bg-default-darkl flex-row border border-color-default rounded">
              <div className="flex flex-col p-3 w-full">
                <h1 className="text-xl font-bold">
                  A rant about Rise Of Corporations.
                </h1>
                <h2 className="text-sm text-dark">
                  My honest opinion about Rise Of Corporations and it's owner -
                  Viktor Vuldemar.
                </h2>
                <div className="flex gap-5 justify-end text-footer mt-3 text-sm">
                  <div className="flex gap-1 items-center">
                    <MdCategory size={15} />
                    <p>General</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <MdPerson size={15} />
                    <p>IDEXV</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <MdCalendarMonth size={15} />
                    <p>2024-02-04</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-4 border-l border-color-default">
                <a
                  className="button-link"
                  href="/blog/post/rise-of-corporations-rant"
                >
                  Read
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
