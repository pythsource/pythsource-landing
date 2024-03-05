import { changeTitle } from '../main'
import { useEffect, useRef, useState } from 'react'
import JobListing from '../components/job_listing'
import moment from 'moment'
import { MdNewReleases } from 'react-icons/md'

export default function Jobs() {
  changeTitle('Jobs')

  var rawPosts = useRef()
  const [jobPosts, setJobPosts] = useState()

  const [searchPrompt, setSearchPrompt] = useState('')
  const [availableFilters, setAvailableFilters] = useState()
  var enabledFilters = useRef([])

  const presentJobs = () => {
    if (rawPosts.current.length === 0) {
      setJobPosts('TODO: Empty response')
    }

    setJobPosts(
      rawPosts.current.map((_post) => {
        return (
          <JobListing
            key={_post.id}
            jobId={_post.id}
            jobTitle={_post.title}
            jobDesc={_post.desc}
            jobProject={_post.project}
            jobCategory={_post.category}
            jobEmployment={_post.employment}
            jobSalary={_post.salary}
            jobDate={_post.date}
            jobBadge={
              moment().isBefore(moment(_post.date).add(5, 'days')) ? (
                <div className="job-badge">
                  <MdNewReleases size={17} />
                  Recent
                </div>
              ) : (
                ''
              )
            }
          />
        )
      })
    )
  }

  const updateSearch = (_prompt) => {
    setSearchPrompt(_prompt)

    var filteredJobs
    if (_prompt !== '') {
      filteredJobs = rawPosts.current.filter(
        (_e) => !_e.title.toLowerCase().indexOf(_prompt.toLowerCase())
      )
    } else {
      filteredJobs = rawPosts.current
    }

    setJobPosts(
      filteredJobs.map((_post) => {
        return (
          <JobListing
            key={_post.id}
            jobId={_post.id}
            jobTitle={_post.title}
            jobDesc={_post.desc}
            jobProject={_post.project}
            jobCategory={_post.category}
            jobEmployment={_post.employment}
            jobSalary={_post.salary}
            jobDate={_post.date}
            jobBadge={
              moment().isBefore(moment(_post.date).add(5, 'days')) ? (
                <div className="job-badge">
                  <MdNewReleases size={17} />
                  Recent
                </div>
              ) : (
                ''
              )
            }
          />
        )
      })
    )
  }

  const filterJobs = async () => {
    const response = await fetch('http://localhost:5000/filter_jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filters: enabledFilters.current }),
    })

    const responseBody = await response.json()
    setJobPosts(
      responseBody.jobPosts.map((_post) => {
        return (
          <JobListing
            key={_post.jobId}
            jobId={_post.jobId}
            jobTitle={_post.jobTitle}
            jobDesc={_post.jobDesc}
            jobProject={_post.jobProject}
            jobCategory={_post.jobCategory}
            jobEmployment={_post.jobEmployment}
            jobSalary={_post.jobSalary}
            jobDate={_post.jobDate}
            jobBadge={
              moment().isBefore(moment(_post.jobDate).add(5, 'days')) ? (
                <div className="job-badge">
                  <MdNewReleases size={17} />
                  Recent
                </div>
              ) : (
                ''
              )
            }
          />
        )
      })
    )
  }

  const updateEnabledFilters = (_inputElement, _type) => {
    if (_inputElement.target.checked) {
      enabledFilters.current = [
        { name: _inputElement.target.name, type: _type },
        ...enabledFilters.current,
      ]
    } else {
      enabledFilters.current = enabledFilters.current.filter(
        (_e) => _e.name !== _inputElement.target.name
      )
    }

    filterJobs()
  }

  useEffect(() => {
    const populateJobs = async () => {
      try {
        const httpResponse = await fetch(
          'https://api.pythsource.com/lnd/index_jobs',
          {
            method: 'GET',
          }
        )

        if (httpResponse.status !== 200) {
          setJobPosts('TODO: Unable to receive jobs')
        }

        const jsonResponse = await httpResponse.json()
        if (jsonResponse.length === 0) {
          setJobPosts('TODO: Empty response')
        }

        rawPosts.current = jsonResponse.jobPosts.map((_post) => {
          return {
            id: _post.jobId,
            title: _post.jobTitle,
            desc: _post.jobDesc,
            project: _post.jobProject,
            category: _post.jobCategory,
            employment: _post.jobEmployment,
            salary: _post.jobSalary,
            date: _post.jobDate,
          }
        })
        presentJobs()
      } catch (error) {
        console.error(
          'Encountered an unexpected error whilst populating the job listing:',
          error
        )
      }
    }

    const populateFilters = async () => {
      try {
        const httpResponse = await fetch(
          'https://api.pythsource.com/lnd/index_jobs',
          {
            method: 'GET',
          }
        )

        if (httpResponse.status !== 200) {
          setAvailableFilters('TODO: Unable to receive filters')
        }

        const jsonResponse = await httpResponse.json()
        if (jsonResponse.length === 0) {
          setAvailableFilters('TODO: Empty response')
        }

        var filters = []
        jsonResponse.jobCategories.map((_element) => {
          filters.push(
            <>
              <div className="filter-box">
                <input
                  type="checkbox"
                  key={crypto.randomUUID()}
                  id={_element}
                  onChange={(_i) => updateEnabledFilters(_i, 'category')}
                ></input>
                <label htmlFor={_element}>{_element}</label>
              </div>
            </>
          )
        })
        jsonResponse.jobEmployments.map((_element) => {
          filters.push(
            <>
              <div className="filter-box">
                <input
                  type="checkbox"
                  key={crypto.randomUUID()}
                  id={_element}
                  onChange={(_i) => updateEnabledFilters(_i, 'employment')}
                ></input>
                <label htmlFor={_element}>{_element}</label>
              </div>
            </>
          )
        })
        jsonResponse.jobProjects.map((_element) => {
          filters.push(
            <>
              <div className="filter-box">
                <input
                  type="checkbox"
                  key={crypto.randomUUID()}
                  id={_element}
                  onChange={(_i) => updateEnabledFilters(_i, 'project')}
                ></input>
                <label htmlFor={_element}>{_element}</label>
              </div>
            </>
          )
        })
        setAvailableFilters(filters)
      } catch (error) {
        console.error(
          'Encountered an unexpected error whilst populating filters:',
          error
        )
      }
    }

    populateJobs()
    populateFilters()
  }, [])

  return (
    <>
      <div className="flex flex-col md:flex-row bg-default w-full h-full border border-color-default rounded-xl">
        <div className="flex bg-default-darkl flex-col border-b md:border-r md:border-b-0 border-color-default md:w-1/5 p-3">
          <span>Search:</span>
          <input
            value={searchPrompt}
            onChange={(e) => {
              updateSearch(e.target.value)
            }}
            className="bg-default-dark border border-color-default rounded p-1"
          ></input>
          <hr className="border-color-default mt-2 mb-2" />
          <span>Filters:</span>
          <div className="flex flex-col gap-1">
            {availableFilters ?? 'TODO: Loading...'}
          </div>
        </div>
        <div className="p-3 w-full overflow-auto">
          <div className="flex flex-col gap-2 slide-top">
            {jobPosts ?? 'TODO: Loading...'}
          </div>
        </div>
      </div>
    </>
  )
}
