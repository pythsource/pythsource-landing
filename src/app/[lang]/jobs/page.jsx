'use client'

import { parseLocale } from '@/lib/utilities'
import { useEffect, useRef, useState, Fragment } from 'react'
import JobListing from '@/components/job_listing'
import moment from 'moment'
import { MdNewReleases } from 'react-icons/md'

export default function Main({ params }) {
  const localeInfo = parseLocale(params['lang'])

  var rawPosts = useRef()
  const [jobPosts, setJobPosts] = useState()

  const [searchPrompt, setSearchPrompt] = useState('')
  const [availableFilters, setAvailableFilters] = useState()
  var enabledFilters = useRef([])

  const presentJobs = () => {
    if (rawPosts.current.length === 0) {
      setJobPosts(
        <div className="notification">
          {localeInfo.isRussian ? 'В настоящее время вакансий нет.' : 'There are currently no jobs available.'}
        </div>
      )
      return
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
                  {localeInfo.isRussian ? 'Свежее' : 'Recent'}
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

    if (filteredJobs.length === 0) {
      setJobPosts(
        <div className="notification">
          {localeInfo.isRussian ? 'По вашему запросу нет вакансий.' : 'There are no job postings available based off your search.'}
        </div>
      )
      return
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
                  {localeInfo.isRussian ? 'Свежее' : 'Recent'}
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
    const response = await fetch('https://api.pythsource.com/lnd/filter_jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Filters: enabledFilters.current }),
    })

    const responseBody = await response.json()
    if (responseBody.jobPosts.length === 0) {
      setJobPosts(
        <div className="notification">
          {localeInfo.isRussian ? 'Нет вакансий, соответствующих вашим предпочтениям.' : 'There are no job postings available based on your preferences.'}
        </div>
      )
      return
    }

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
                  {localeInfo.isRussian ? 'Свежее' : 'Recent'}
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
        { name: _inputElement.target.id, type: _type },
        ...enabledFilters.current,
      ]
    } else {
      enabledFilters.current = enabledFilters.current.filter(
        (_e) => _e.name !== _inputElement.target.id
      )
    }

    filterJobs()
  }

  const filterEntry = (_elementName, _category) => {
    return (
      <Fragment key={crypto.randomUUID()}>
        <div className="filter-box">
          <input
            type="checkbox"
            id={_elementName}
            onChange={(_i) => updateEnabledFilters(_i, _category)}
          ></input>
          <label htmlFor={_elementName}>{_elementName}</label>
        </div>
      </Fragment>
    )
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
          setJobPosts(localeInfo.isRussian ? 'Не удалось получить вакансии.' : 'Unable to fetch job postings.')
          return
        }

        const jsonResponse = await httpResponse.json()
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
          setAvailableFilters(localeInfo.isRussian ? 'Не удалось получить поисковые фильтры.' : 'Unable to fetch filters.')
          return
        }

        const jsonResponse = await httpResponse.json()
        if (jsonResponse.jobPosts.length === 0) {
          setAvailableFilters(
            <div className="notification">
              <i>{localeInfo.isRussian ? 'В настоящее время поисковые фильтры не доступны.' : 'There are currently no filters available.'}</i>
            </div>
          )
          return
        }

        var filters = []
        jsonResponse.jobCategories.map((_element) => {
          filters.push(filterEntry(_element, 'category'))
        })
        jsonResponse.jobEmployments.map((_element) => {
          filters.push(filterEntry(_element, 'employment'))
        })
        jsonResponse.jobProjects.map((_element) => {
          filters.push(filterEntry(_element, 'project'))
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
          <span>{localeInfo.isRussian ? 'Поиск' : 'Search'}:</span>
          <input
            value={searchPrompt}
            onChange={(e) => {
              updateSearch(e.target.value)
            }}
            className="bg-default-dark border border-color-default rounded p-1"
          ></input>
          <hr className="border-color-default mt-2 mb-2" />
          <span>{localeInfo.isRussian ? 'Фильтры' : 'Filters'}:</span>
          <div className="flex flex-col gap-1">
            {availableFilters ?? (
              <div className="notification">
                <i>Loading...</i>
              </div>
            )}
          </div>
        </div>
        <div className="p-3 w-full overflow-auto">
          <div className="flex flex-col gap-2 slide-top">
            {jobPosts ?? (
              <div className="notification">
                <i>Loading...</i>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
