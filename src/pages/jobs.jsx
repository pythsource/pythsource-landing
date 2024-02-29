import { changeTitle } from '../main'
import { useEffect, useState } from 'react'
import JobListing from '../components/job_listing'
import { MdNewReleases } from 'react-icons/md'
import moment from 'moment'

export default function Jobs() {
  changeTitle('Jobs')
  const [availableFilters, setAvailableFilters] = useState()
  const [jobPosts, setJobPosts] = useState()

  const populateFilters = async () => {
    try {
      const response = await fetch(
        'https://api.pythsource.com/lnd/index_jobs',
        {
          method: 'GET',
        }
      )

      const responseData = await response.json()
      if (responseData.length == 0) {
        setAvailableFilters('TODO: Empty response')
      }

      let filters = []

      responseData.jobCategories.map((_category) => {
        filters.push(<input type="checkbox" id={_category}></input>)
        filters.push(<label htmlFor={_category}>{_category}</label>)
      })

      responseData.jobEmployments.map((_employment) => {
        filters.push(<input type="checkbox" id={_employment}></input>)
        filters.push(<label htmlFor={_employment}>{_employment}</label>)
      })

      responseData.jobProjects.map((_project) => {
        filters.push(<input type="checkbox" id={_project}></input>)
        filters.push(<label htmlFor={_project}>{_project}</label>)
      })

      setAvailableFilters(filters)
    } catch (error) {
      console.error('Error encountered:', error)
    }
  }

  const populateJobs = async () => {
    try {
      const response = await fetch(
        'https://api.pythsource.com/lnd/index_jobs',
        {
          method: 'GET',
        }
      )

      const responseData = await response.json()
      if (responseData.length == 0) {
        setJobPosts('TODO: Empty response')
      }

      setJobPosts(
        responseData.jobPosts.map((_post, _index) => {
          return (
            <JobListing
              key={_index}
              jobId={_post.jobId}
              jobTitle={_post.jobTitle}
              jobDesc={_post.jobDesc}
              jobProject={_post.jobProject}
              jobCategory={_post.jobCategory}
              jobDate={_post.jobDate}
              jobEmployment={_post.jobEmployment}
              jobSalary={_post.jobSalary}
              jobBadge={
                moment().isBefore(moment(_post.jobDate).add(10, 'days')) ? (
                  <div className="job-badge rounded">
                    <MdNewReleases size={17} /> Recent Post
                  </div>
                ) : (
                  ''
                )
              }
            />
          )
        })
      )
    } catch (error) {
      console.error('Error encountered:', error)
    }
  }

  useEffect(() => {
    populateJobs()
    populateFilters()
  }, [])

  return (
    <>
      <div className="flex bg-default w-full h-full border border-color-default rounded-xl">
        <div className="flex bg-default-darkl flex-col border-r border-color-default w-1/5 p-3">
          <span>Search:</span>
          <input className="bg-default-dark border border-color-default rounded p-1"></input>
          <hr className="border-color-default mt-2 mb-2" />
          <span>Filters:</span>
          {availableFilters ?? 'TODO: Loading...'}
        </div>
        <div className="p-3 w-full">
          <div className="flex flex-col gap-2 slide-top">
            {jobPosts ?? 'TODO: Loading...'}
          </div>
        </div>
      </div>
    </>
  )
}
