import {
  MdViewKanban,
  MdCategory,
  MdTimelapse,
  MdCurrencyExchange,
  MdCalendarMonth,
  MdTag,
} from 'react-icons/md'
import PropTypes from 'prop-types'

export default function JobListing({
  jobId,
  jobTitle,
  jobDesc,
  jobProject,
  jobCategory,
  jobEmployment,
  jobSalary,
  jobDate,
  jobBadge,
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-default-darkl flex-row border border-color-default rounded">
        <div className="flex flex-col p-3 w-full">
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-footer mb-3 text-xs md:text-sm">
            <div className="flex items-center gap-1">
              <MdTag size={17} /> {jobId}
            </div>
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
              <MdCalendarMonth size={17} /> {jobDate} {jobBadge ? jobBadge : ''}
            </div>
          </div>
          <h1 className="text-lg md:text-xl font-bold">{jobTitle}</h1>
          <h2 className="text-xs md:text-sm text-dark">{jobDesc}</h2>
        </div>
        <div className="flex flex-col items-center md:justify-center p-2 md:p-4 border-t md:border-t-0 md:border-l border-color-default">
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
  jobId: PropTypes.string.isRequired,
  jobCategory: PropTypes.string.isRequired,
  jobDate: PropTypes.string.isRequired,
  jobDesc: PropTypes.string.isRequired,
  jobEmployment: PropTypes.string.isRequired,
  jobProject: PropTypes.string.isRequired,
  jobSalary: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  jobBadge: PropTypes.any,
}
