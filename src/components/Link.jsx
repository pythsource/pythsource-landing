import PropTypes from 'prop-types'

export default function Link({ href, label, alt, color = false }) {
  if (!color) {
    return (
      <>
        <a aria-label={alt} href={href}>
          {label}
        </a>
      </>
    )
  } else {
    return (
      <>
        <a
          className="transition underline text-indigo-300 hover:text-white hover:bg-indigo-600"
          aria-label={alt}
          href={href}
        >
          {label}
        </a>
      </>
    )
  }
}
Link.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  alt: PropTypes.string,
  color: PropTypes.bool,
}
