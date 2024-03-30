import BlogClient from '@/app/[lang]/blog/page.client'
import { formatTitle, MetadataTemplate, parseLocale } from '@/lib/utilities'

export function generateMetadata({ params }) {
  const localeInfo = parseLocale(params['lang'])
  return MetadataTemplate(localeInfo.isRussian ? 'Официальный блог PythSource. Новости, анонсы, дювлоги и многое другое.' : 'PythSource\'s official blog page. General news, announcements, devlogs and more.', formatTitle(localeInfo.isRussian ? 'Блог' : 'Blog'), localeInfo.isRussian)
}

export default function BlogServer({ params }) {
  return <BlogClient params={params}/>
}