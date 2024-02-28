import { changeTitle } from '../main'
import { useEffect, useState } from 'react'
import JobListing from '../components/job_listing'

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
        filters.push(<button>{_category}</button>)
      })

      responseData.jobEmployments.map((_employment) => {
        filters.push(<button>{_employment}</button>)
      })

      responseData.jobProjects.map((_project) => {
        filters.push(<button>{_project}</button>)
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
              jobTitle={_post.jobTitle}
              jobDesc={_post.jobDesc}
              jobProject={_post.jobProject}
              jobCategory={_post.jobCategory}
              jobDate={_post.jobDate}
              jobEmployment={_post.jobEmployment}
              jobSalary={_post.jobSalary}
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
          {availableFilters}
        </div>
        <div className="p-3 w-full">
          <div className="flex flex-col gap-2 slide-top">{jobPosts}</div>
        </div>
      </div>
    </>
  )
}
