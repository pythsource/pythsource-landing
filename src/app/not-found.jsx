import { formatTitle } from '@/lib/utilities'

export const metadata = {
  title: formatTitle('404')
}

export default function NotFound() {
  return (
    <>
      <div className='flex flex-col justify-center p-5 border-b-2 border-dashed border-color-default items-center'>
        <h1 className='text-2xl font-bold'>Your requested page could not be found.</h1>
        <h2 className='text-xl'>If this {'shouldn\'t'} happen, <a href='mailto:pythsource.official@gmail.com' className='text-link'>contact us!</a></h2>
        <h2>You can return <a className='text-link' href='/en'>home</a>.</h2>
      </div>
    </>
  )
}