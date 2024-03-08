import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { changeTitle } from '../main'
import Markdown from 'react-markdown'

export default function BlogPage() {
  const [blogContent, setBlogContent] = useState()
  const pageParams = useParams()

  const fetchBlog = async (_pageParams) => {
    try {
      const response = await fetch(
        `https://api.pythsource.com/lnd/get_blogpost?_id=${_pageParams.pageName}`,
        {
          method: 'POST',
        }
      )

      const responseData = await response.json()
      if (responseData.length == 0) {
        setBlogContent('There was an issue fetching the blog\'s content.')
      }

      setBlogContent(responseData.blogPost.blogContent)
      changeTitle(responseData.blogPost.blogTitle)
    } catch (error) {
      console.error('Error encountered:', error)
    }
  }

  useEffect(() => {
    fetchBlog(pageParams)
  }, [pageParams])

  return (
    <>
      <Markdown>{blogContent ?? 'Loading...'}</Markdown>
    </>
  )
}
