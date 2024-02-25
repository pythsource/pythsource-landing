import { changeTitle } from '../main'

export default function About() {
  changeTitle('About')

  return (
    <>
      <div className="animation-appear">
        <h1 className="text-4xl font-bold">About Us</h1>
        <article className="pl-5 border-l-2 border-dashed border-default-dark pr-64">
          <p>We are a small team that does software and game development.</p>
        </article>
      </div>
    </>
  )
}
