import { MdCategory, MdPerson, MdCalendarMonth, MdTag } from 'react-icons/md'
import PropTypes from 'prop-types'
export default function BlogPost({
  blogId,
  blogTitle,
  blogContent,
  blogCategory,
  blogAuthor,
  blogDate,
  blogBadge,
}) {
  // This should cover all cases (I hope (it won't cover retarded texts))
  const splitText = (text) => {
    var sentences = text.split(/[.!?]/)
    sentences = sentences.filter((_s) => _s.trim() !== '')
    sentences = sentences.slice(0, 2)
    sentences = sentences.join('. ') + '.'
    sentences = sentences.replace(/\*/g, '')
    return sentences
  }

  return (
    <>
      <div className="flex bg-default-darkl flex-row border border-color-default rounded">
        <div className="flex flex-col p-3 w-full">
          <h1 className="text-xl font-bold">{blogTitle}</h1>
          <h2 className="text-sm text-dark">{splitText(blogContent)}</h2>
          <div className="flex gap-5 justify-end text-footer mt-3 text-sm">
            <div className="flex gap-1 items-center">
              <MdTag size={15} />
              <p>{blogId}</p>
            </div>
            <div className="flex gap-1 items-center">
              <MdCategory size={15} />
              <p>{blogCategory}</p>
            </div>
            <div className="flex gap-1 items-center">
              <MdPerson size={15} />
              <p>{blogAuthor}</p>
            </div>
            <div className="flex gap-1 items-center">
              <MdCalendarMonth size={15} />
              <p>{blogDate}</p>
              {blogBadge ? blogBadge : ''}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-4 border-l border-color-default">
          <a className="button-link" href={`/blog/post/${blogId}`}>
            Read
          </a>
        </div>
      </div>
    </>
  )
}
BlogPost.propTypes = {
  blogId: PropTypes.string.isRequired,
  blogTitle: PropTypes.string.isRequired,
  blogContent: PropTypes.string.isRequired,
  blogCategory: PropTypes.string.isRequired,
  blogAuthor: PropTypes.string.isRequired,
  blogDate: PropTypes.string.isRequired,
  blogBadge: PropTypes.any,
}
