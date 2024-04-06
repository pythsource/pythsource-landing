import { MetadataTemplate, formatTitle, parseLocale } from '@/lib/utilities'
import ProjectEntry from '@/components/project_entry'
import { MdCalendarMonth } from 'react-icons/md'
import hfactions from '@/assets/images/hfactions_title.png'
import { FaGithub } from 'react-icons/fa'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }]
}

export function generateMetadata({ params }) {
  const localeInfo = parseLocale(params['lang'])
  return MetadataTemplate(localeInfo.isRussian ? 'Список личных проектов PythSource: законченных и незаконченных.' : 'A list of PythSource\'s personal projects: finished or unfinished.', formatTitle(localeInfo.isRussian ? 'Проекты' : 'Projects'), localeInfo.isRussian, "/projects")
}

export default function Main({ params }) {
  const localeInfo = parseLocale(params['lang'])

  return (
    <>
      <div className="w-full overflow-auto h-full">
        <div className="flex flex-col p-5 gap-5 bg-default-darkl border border-color-default rounded-md">
          <div className="flex flex-col">
            <div className="flex flex-col text-center items-center border-b border-color-default mb-3">
              <h1 className="text-2xl"><a className='text-link' href={`/${localeInfo.code ? localeInfo.code + '/' : ''}projects/data-point`}>Data Point</a></h1>
              <h2 className="text-lg text-dark italic">
                {localeInfo.isRussian ? 'Вселенная, используемая PythSource для разработки различных мультимедийных проектов. Постоянно расширяется.' : 'A universe used by PythSource to develop various multimedia \
                projects. Constantly expanding.'}
              </h2>
            </div>
            <div className="flex logo-animation md:items-baseline flex-col md:flex-row gap-1.5">
              <ProjectEntry
                title="Global Information Repository"
                description={localeInfo.isRussian ? 'Вики-проект для Data Point, взятый с точки зрения МСОМЦ.' : 'A wiki for the Data Point project, taken from the perspective of the ITREWN.'}
                links={
                  <>
                    <MdCalendarMonth size={25} /> TBA
                  </>
                }
              />
              <ProjectEntry
                title="Project Seen"
                description={localeInfo.isRussian ? 'Source™ модификация, изображающая события революции в Целасе.' : 'A Source™ modification, depicting the events of the Celas\' Revolution.'}
                links={
                  <>
                    <MdCalendarMonth size={25} /> TBA
                  </>
                }
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex text-center flex-col items-center border-b border-color-default mb-3">
              <h1 className="text-2xl"><a className='text-link' href={`/${localeInfo.code ? localeInfo.code + '/' : ''}projects/world-factions`}>World Factions</a></h1>
              <h2 className="text-lg text-dark italic">
                {localeInfo.isRussian ? 'Заброшенная вселенная, ранее использовавшаяся PythSource. Предшественница Data Point.' : 'A scrapped universe previously used by PythSource. A predecessor \
                to Data Point.'}
              </h2>
            </div>
            <div className="flex logo-animation md:items-baseline flex-col md:flex-row gap-1.5">
              <ProjectEntry
                imgSrc={hfactions}
                title="HFactions"
                description={localeInfo.isRussian ? 'Модификация для Hearts Of Iron IV, изображающая события World Factions с 2019 по 2021 год.' : 'A Hearts Of Iron IV modification, depicting the events of World Factions from 2019 to 2021.'}
                links={
                  <>
                    <a href="https://github.com/pythsource/HFactions">
                      <FaGithub size={30} />
                    </a>
                  </>
                }
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex text-center flex-col items-center border-b border-color-default mb-3">
              <h1 className="text-2xl">{localeInfo.isRussian ? 'Другие проекты' : 'Miscellaneous Projects'}</h1>
              <h2 className="text-lg text-dark italic">
                {localeInfo.isRussian ? 'Проекты, которые не вписываются ни в какие другие категории.' : 'Projects that don\'t fit into any other categories.'}
              </h2>
            </div>
            <div className="flex logo-animation md:items-baseline flex-col md:flex-row gap-1.5">
              <ProjectEntry
                title="ZS-Navmeshes"
                description={localeInfo.isRussian ? 'Дополнительные navmesh\'и для использования с D3Bot - аддоном для Zombie Survival режима в Garry\'s Mod.' : 'Additional navmeshes to be used with D3Bot - a Zombie Survival addon for Garry\'s Mod.'}
                links={
                  <>
                    <a href="https://github.com/pythsource/ZS-Navmeshes">
                      <FaGithub size={30} />
                    </a>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}