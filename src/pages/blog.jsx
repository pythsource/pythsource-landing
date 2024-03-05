import { changeTitle } from '../main'
import { useState, useEffect, useRef } from 'react'
import BlogPost from '../components/blog_post'
import moment from 'moment'
import { MdNewReleases } from 'react-icons/md'

export default function Blog() {
  changeTitle('Blog')

  var rawPosts = useRef()
  const [blogPosts, setBlogPosts] = useState()

  const [searchPrompt, setSearchPrompt] = useState('')
  const [availableFilters, setAvailableFilters] = useState()
  var enabledFilters = useRef([])

  const presentBlog = () => {
    if (rawPosts.current.length === 0) {
      setBlogPosts('TODO: Empty response')
    }

    setBlogPosts(
      rawPosts.current.map((_post) => {
        return (
          <BlogPost
            key={_post.id}
            blogId={_post.id}
            blogAuthor={_post.author}
            blogCategory={_post.category}
            blogContent={_post.content}
            blogDate={_post.date}
            blogTitle={_post.title}
            blogBadge={
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

    var filteredBlogs
    if (_prompt !== '') {
      filteredBlogs = rawPosts.current.filter(
        (_e) => !_e.title.toLowerCase().indexOf(_prompt.toLowerCase())
      )
    } else {
      filteredBlogs = rawPosts.current
    }

    setBlogPosts(
      filteredBlogs.map((_post) => {
        return (
          <BlogPost
            key={_post.id}
            blogId={_post.id}
            blogAuthor={_post.author}
            blogCategory={_post.category}
            blogContent={_post.content}
            blogDate={_post.date}
            blogTitle={_post.title}
            blogBadge={
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

  const filterBlogs = async () => {
    const response = await fetch('http://localhost:5000/filter_blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filters: enabledFilters.current }),
    })

    const responseBody = await response.json()
    setBlogPosts(
      responseBody.blogPosts.map((_post) => {
        return (
          <BlogPost
            key={_post.postId}
            blogId={_post.postId}
            blogAuthor={_post.postAuthor}
            blogCategory={_post.postCategory}
            blogContent={_post.postContent}
            blogDate={_post.postDate}
            blogTitle={_post.postTitle}
            blogBadge={
              moment().isBefore(moment(_post.postDate).add(5, 'days')) ? (
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

    filterBlogs()
  }

  useEffect(() => {
    const populateBlog = async () => {
      try {
        const httpResponse = await fetch(
          'https://api.pythsource.com/lnd/index_blogs',
          {
            method: 'GET',
          }
        )

        if (httpResponse.status !== 200) {
          setBlogPosts('TODO: Unable to receive blogs')
        }

        const jsonResponse = await httpResponse.json()
        if (jsonResponse.length === 0) {
          setBlogPosts('TODO: Empty response')
        }

        rawPosts.current = jsonResponse.blogPosts.map((_post) => {
          return {
            id: _post.postId,
            title: _post.postTitle,
            content: _post.postContent,
            category: _post.postCategory,
            author: _post.postAuthor,
            date: _post.postDate,
          }
        })
        presentBlog()
      } catch (error) {
        console.error(
          'Encountered an unexpected error whilst populating the blogs:',
          error
        )
      }
    }

    const populateFilters = async () => {
      try {
        const httpResponse = await fetch(
          'https://api.pythsource.com/lnd/index_blogs',
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
        jsonResponse.blogCategories.map((_element) => {
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
        jsonResponse.blogAuthors.map((_element) => {
          filters.push(
            <>
              <div className="filter-box">
                <input
                  type="checkbox"
                  key={crypto.randomUUID()}
                  id={_element}
                  onChange={(_i) => updateEnabledFilters(_i, 'author')}
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

    populateBlog()
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
            {blogPosts ?? 'TODO: Loading...'}
          </div>
        </div>
      </div>
    </>
  )
}
