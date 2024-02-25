import { changeTitle } from '../main'
import no_text from '/src/assets/no_text.png'

export default function Home() {
  changeTitle('', true)

  return (
    <>
      <div className="flex flex-col items-center gap-2 mt-16 animation-appear">
        <img alt='PythSource Logo' className='h-64' src={no_text}></img>
        <h1 className="text-5xl font-bold">PythSource</h1>
        <h2>Software. Game Development. Other Projects.</h2>
        <h2>Since 2018.</h2>
      </div>
    </>
  )
}
