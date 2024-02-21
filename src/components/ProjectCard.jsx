import PropTypes from 'prop-types'
import { MdCancel } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'

export function ProjectStatus({ projStatus, date }) {
  switch (projStatus) {
    case 'tbd':
      return <BsThreeDots title="To Be Decided" size={30} />
    case 'tba':
      return <BsThreeDots title="To Be Announced" size={30} />
    case 'cancel':
      return <MdCancel title="Canceled" size={30} />
    case 'soon':
      if (date) {
        return <p>Coming {new Date(date).toLocaleDateString()}</p>
      } else {
        return <p>Coming Soon™</p>
      }
  }
}
ProjectStatus.propTypes = {
  projStatus: PropTypes.string.isRequired,
  date: PropTypes.string,
}

export default function ProjectCard({ projectName, description, links }) {
  return (
    <>
      <div
        id={projectName.toLowerCase().replace(/ /g, '-')}
        className={
          'flex flex-col project-card transition-all hover:border-indigo-400 border-b-4 p-2 border-default-dark'
        }
      >
        <span className="text-2xl font-bold">{projectName}</span>
        <article className="text-sm flex-grow text-balance">
          <p>{description}</p>
        </article>
        <div className="flex flex-row justify-center border-t border-default-dark mt-2 pt-2">
          {links}
        </div>
      </div>
    </>
  )
}
ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.any.isRequired,
}
