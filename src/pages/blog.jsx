import { formatTitle, MetaHead, parseLocale } from '../main'
import { useState, useEffect, useRef, Fragment } from 'react'
import BlogPost from '../components/blog_post'
import moment from 'moment'
import { MdNewReleases } from 'react-icons/md'
import { useParams } from 'react-router'
import { Helmet } from 'react-helmet'

export default function Blog() {
  const params = useParams()
  const localeInfo = parseLocale(params['lang'])

  var rawPosts = useRef()
  const [blogPosts, setBlogPosts] = useState()

  const [searchPrompt, setSearchPrompt] = useState('')
  const [availableFilters, setAvailableFilters] = useState()
  var enabledFilters = useRef([])

  const presentBlog = () => {
    if (rawPosts.current.length === 0) {
      setBlogPosts(
        <div className="notification">
          {localeInfo.isRussian ? 'В настоящее время в блоге нет записей.' : 'There are currently no blog posts available.'}
        </div>
      )
      return
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

    var filteredBlogs
    if (_prompt !== '') {
      filteredBlogs = rawPosts.current.filter(
        (_e) => !_e.title.toLowerCase().indexOf(_prompt.toLowerCase())
      )
    } else {
      filteredBlogs = rawPosts.current
    }

    if (filteredBlogs.length === 0) {
      setBlogPosts(
        <div className="notification">
          {localeInfo.isRussian ? 'По вашему запросу не найдено ни одной записи в блоге.' : 'There are no blog posts available based off your search.'}
        </div>
      )
      return
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

  const filterBlogs = async () => {
    const response = await fetch('https://api.pythsource.com/filter_blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Filters: enabledFilters.current }),
    })

    const responseBody = await response.json()
    if (responseBody.blogPosts.length === 0) {
      setBlogPosts(
        <div className="notification">
          {localeInfo.isRussian ? 'Нет ни одной записи в блоге, основанной на ваших предпочтениях.' : 'There are no blog posts available based on your preferences.'}
        </div>
      )
      return
    }

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

    filterBlogs()
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
    const populateBlog = async () => {
      try {
        const httpResponse = await fetch(
          'https://api.pythsource.com/lnd/index_blogs',
          {
            method: 'GET',
          }
        )

        if (httpResponse.status !== 200) {
          setBlogPosts(localeInfo.isRussian ? 'Не удалось получить записи из блога.' : 'Unable to fetch the blog posts.')
          return
        }

        const jsonResponse = await httpResponse.json()
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
          'Encountered an unexpected error whilst populating the blog posts:',
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
          setAvailableFilters(localeInfo.isRussian ? 'Не удалось получить поисковые фильтры.' : 'Unable to fetch filters.')
          return
        }

        const jsonResponse = await httpResponse.json()
        if (jsonResponse.blogPosts.length === 0) {
          setAvailableFilters(
            <div className="notification">
              <i>{localeInfo.isRussian ? 'В настоящее время поисковые фильтры не доступны.' : 'There are currently no filters available.'}</i>
            </div>
          )
          return
        }

        var filters = []
        jsonResponse.blogCategories.map((_element) => {
          filters.push(filterEntry(_element, 'category'))
        })
        jsonResponse.blogAuthors.map((_element) => {
          filters.push(filterEntry(_element, 'author'))
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
      <MetaHead description={localeInfo.isRussian ? 'Официальный блог PythSource. Новости, анонсы, дювлоги и многое другое.' : 'PythSource\'s official blog page. General news, announcements, devlogs and more.'} title={formatTitle(localeInfo.isRussian ? 'Блог' : 'Blog')} />
      <Helmet>
        <title>{formatTitle(localeInfo.isRussian ? 'Блог' : 'Blog')}</title>
      </Helmet>
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
            {blogPosts ?? (
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
