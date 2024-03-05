import PropTypes from 'prop-types'

export default function ProjectEntry({ imgSrc, title, description, links }) {
  return (
    <>
      <div className="flex flex-col border border-color-default md:w-1/4">
        <div className="border-b border-color-default">
          <img
            className="object-cover w-full h-24"
            src={imgSrc ? imgSrc : 'https://pythsource.com/pythsource_logo.png'}
          ></img>
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
ProjectEntry.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.any.isRequired,
}
