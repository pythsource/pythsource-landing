import Image from 'next/image'
import pythsource_logo from '/public/images/official_logo.png'

export default function ProjectEntry({ imgSrc, title, description, links }) {
  return (
    <>
      <div className="flex flex-col border border-color-default md:w-1/4">
        <div className="border-b border-color-default">
          <Image
            className="object-cover w-full h-24"
            src={imgSrc ? imgSrc : pythsource_logo}
            alt='An interesting project-related image'
          ></Image>
        </div>
        <div className="basis-1/2 p-2 border-b border-color-default">
          <h1 className="text-xl font-bold">{title}</h1>
          <article className="text-dark">
            <p>{description}</p>
          </article>
        </div>
        <div className="flex p-1 text-sm items-center justify-end text-footer">
          {links}
        </div>
      </div>
    </>
  )
}