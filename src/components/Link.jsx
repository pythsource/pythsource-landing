import PropTypes from 'prop-types'

export default function Link({ href, label, alt }) {
  return (
    <>
      <a aria-label={alt} href={href}>
        {label}
      </a>
    </>
  )
}
Link.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  alt: PropTypes.string,
}
