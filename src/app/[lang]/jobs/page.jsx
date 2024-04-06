import JobsClient from '@/app/[lang]/jobs/page.client'
import { formatTitle, MetadataTemplate, parseLocale } from '@/lib/utilities'

export function generateMetadata({ params }) {
  const localeInfo = parseLocale(params['lang'])
  return MetadataTemplate(localeInfo.isRussian ? 'Официальный список вакансий в PythSource.' : 'An official list of job openings in PythSource.', formatTitle(localeInfo.isRussian ? 'Вакансии' : 'Jobs'), localeInfo.isRussian, "/jobs")
}

export default function JobsServer({ params }) {
  return <JobsClient params={params}/>
}