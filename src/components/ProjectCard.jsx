import PropTypes from 'prop-types'

export function ProjectStatus({ projStatus, date }) {
  switch (projStatus) {
    case 'tbd':
      return <abbr title="To Be Decided">TBD</abbr>
    case 'tba':
      return <abbr title="To Be Announced">TBA</abbr>
    case 'cancel':
      return <p>Canceled</p>
    case 'soon':
      if (date) {
        return <p>Coming {new Date(date).toLocaleDateString()}</p>
      } else {
        return <p>Coming Soon</p>
      }
  }
}
ProjectStatus.propTypes = {
  projStatus: PropTypes.string.isRequired,
  date: PropTypes.string,
}

export default function ProjectCard({
  imageUrl,
  projectName,
  description,
  links,
}) {
  return (
    <>
      <div
        className={`border p-2 bg-[linear-gradient(to_bottom,rgba(17,19,21,0.5),rgba(17,19,21,1)),url('${imageUrl}')] border-default-dark rounded-lg bg-default-dark`}
      >
        <span className="text-2xl font-bold">{projectName}</span>
        <article className="text-sm">
          <p>{description}</p>
        </article>
        <div className="text-center border-t border-default-dark mt-2">
          {links}
        </div>
      </div>
    </>
  )
}
ProjectCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.string.isRequired,
}
