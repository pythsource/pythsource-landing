import { changeTitle } from '../main'

export default function NotFound() {
  changeTitle('404')

  return (
    <>
      <h1 className="text-2xl font-bold">
        The requested page could not be found.
      </h1>
    </>
  )
}
