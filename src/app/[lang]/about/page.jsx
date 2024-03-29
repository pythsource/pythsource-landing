import { parseLocale } from '@/lib/utilities'

export default function Main({ params }) {
  const localeInfo = parseLocale(params['lang'])

  return (
    <>
      <p>local raider</p>
    </>
  )
}