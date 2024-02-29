import { changeTitle } from '../main'
import moment from 'moment'
import { MdNewReleases } from 'react-icons/md'
import { useEffect, useState } from 'react'
import BlogPost from '../components/blog_post'

export default function Blog() {
  changeTitle('Blog')
  const [availableFilters, setAvailableFilters] = useState()
  const [blogPosts, setBlogPosts] = useState()

  const populateFilters = async () => {
    try {
      const response = await fetch(
        'https://api.pythsource.com/lnd/index_blogs',
        {
          method: 'GET',
        }
      )

      const responseData = await response.json()
      if (responseData.length == 0) {
        setAvailableFilters('TODO: Empty response')
      }

      let filters = []

      responseData.blogCategories.map((_category) => {
        filters.push(<button>{_category}</button>)
      })

      responseData.blogAuthors.map((_author) => {
        filters.push(<button>{_author}</button>)
      })

      setAvailableFilters(filters)
    } catch (error) {
      console.error('Error encountered:', error)
    }
  }

  const populateBlog = async () => {
    try {
      const response = await fetch(
        'https://api.pythsource.com/lnd/index_blogs',
        {
          method: 'GET',
        }
      )

      const responseData = await response.json()
      if (responseData.length == 0) {
        setBlogPosts('TODO: Empty response')
      }

      setBlogPosts(
        responseData.blogPosts.map((_post, _index) => {
          return (
            <BlogPost
              key={_index}
              blogId={_post.postId}
              blogTitle={_post.postTitle}
              blogContent={_post.postContent}
              blogCategory={_post.postCategory}
              blogAuthor={_post.postAuthor}
              blogDate={_post.postDate}
              blogBadge={
                moment().isBefore(moment(_post.postDate).add(10, 'days')) ? (
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
    populateBlog()
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
            {blogPosts ?? 'TODO: Loading...'}
          </div>
        </div>
      </div>
    </>
  )
}
