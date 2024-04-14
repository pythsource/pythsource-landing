'use client'

import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'

export default function Main({ params }) {
  const [blogContent, setBlogContent] = useState()

  const fetchBlog = async () => {
    try {
      const response = await fetch(
        `https://api.pythsource.com/lnd/get_blogpost?_id=${params['id']}`,
        {
          method: 'POST',
        }
      )

      const responseData = await response.json()
      if (responseData.length === 0) {
        setBlogContent('There was an issue fetching the blog\'s content.')
      }

      setBlogContent(responseData.blogPost.blogContent)
    } catch (error) {
      console.error('Error encountered:', error)
    }
  }

  useEffect(() => {
    fetchBlog()
  }, [])

  return (
    <>
      {blogContent ? <Markdown>{blogContent}</Markdown> : (
        <div className="notification">
          <i>Loading...</i>
        </div>
      )}
    </>
  )
}
