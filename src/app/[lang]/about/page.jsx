import { MetadataTemplate, formatTitle, parseLocale } from '@/lib/utilities'
import AboutClient from './page.client'

export function generateMetadata({ params }) {
  const localeInfo = parseLocale(params['lang'])
  return MetadataTemplate(localeInfo.isRussian ? 'Информационная страница об истории PythSource, членах команды и наиболее ценных проектах.' : 'An information page about PythSource\'s history, team members, and most valuable projects.', formatTitle(localeInfo.isRussian ? 'О команде' : 'About'), localeInfo.isRussian)
}

export default function AboutServer({ params }) {
  return <AboutClient params={params}/>
}