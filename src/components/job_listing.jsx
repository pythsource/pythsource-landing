import {
  MdViewKanban,
  MdCategory,
  MdTimelapse,
  MdCurrencyExchange,
  MdCalendarMonth,
} from 'react-icons/md'
import PropTypes from 'prop-types'

export default function JobListing({
  jobTitle,
  jobDesc,
  jobProject,
  jobCategory,
  jobEmployment,
  jobSalary,
  jobDate,
}) {
  return (
    <>
      <div className="flex bg-default-darkl flex-row border border-color-default rounded">
        <div className="flex flex-col p-3 w-full">
          <div className="flex gap-5 text-footer mb-3 text-sm">
            <div className="flex items-center gap-1">
              <MdViewKanban size={17} /> {jobProject}
            </div>
            <div className="flex items-center gap-1">
              <MdCategory size={17} /> {jobCategory}
            </div>
            <div className="flex items-center gap-1">
              <MdTimelapse size={17} /> {jobEmployment}
            </div>
            <div className="flex items-center gap-1">
              <MdCurrencyExchange size={17} /> {jobSalary}
            </div>
            <div className="flex items-center gap-1">
              <MdCalendarMonth size={17} /> {jobDate}
            </div>
          </div>
          <h1 className="text-xl font-bold">{jobTitle}</h1>
          <h2 className="text-sm text-dark">{jobDesc}</h2>
        </div>
        <div className="flex flex-col justify-center p-4 border-l border-color-default">
          <a
            className="button-link"
            href="mailto:pythsource.official@gmail.com"
          >
            Apply
          </a>
        </div>
      </div>
    </>
  )
}
JobListing.propTypes = {
  jobCategory: PropTypes.string.isRequired,
  jobDate: PropTypes.string.isRequired,
  jobDesc: PropTypes.string.isRequired,
  jobEmployment: PropTypes.string.isRequired,
  jobProject: PropTypes.string.isRequired,
  jobSalary: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
}
