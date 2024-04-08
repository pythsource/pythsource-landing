import { formatTitle, MetadataTemplate, parseLocale } from '@/lib/utilities'
import Image from 'next/image'
import world_factions from '@/assets/images/world_factions.png'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }]
}

export function generateMetadata({ params }) {
  const localeInfo = parseLocale(params['lang'])
  return MetadataTemplate(localeInfo.isRussian ? 'World Factions — упраздненная вселенная, ранее использовавшаяся PythSource для создания различных мультимедийных проектов. Вселенная также использовалась для проведения удаленных совместных мероприятий.' : 'World Factions is a discontinued universe previously used by PythSource to create various multimedia projects. The universe was also used for remote collaborative events.', formatTitle('World Factions'), localeInfo.isRussian, "/projects/world-factions")
}

export default function Main({ params }) {
  const localeInfo = parseLocale(params['lang'])

  return (
    <>
      <div className='w-full h-full'>
        <div className='flex flex-col items-center slide-top gap-2'>
          <Image src={world_factions} alt='World Factions logo' className='w-32'></Image>
          <div className='flex flex-col md:flex-row w-full justify-between items-center'>
            <div className='p-5 w-full border-b md:border-b-0 md:border-r border-color-default'>
              <article>
                {localeInfo.isRussian ? <p><b>World Factions</b> — упраздненный совместный писательский проект, ранее использовавшийся PythSource для разработки различных мультимедийных проектов и организации удаленных совместных мероприятий. Проект был создан примерно в 2018 году, и был заброшен в 2022 году с созданием проекта <b>Data Point</b>.</p> : <p><b>World Factions</b> is a discontinued collaborative writing project, previously used by PythSource to
                develop various multimedia content and to organise remote collaborative events. Created somewhere in
                  2018, it was then abandoned in 2022, with the creation of the <b>Data Point Project</b>.</p>}
              </article>
            </div>
            <div className='p-5 w-full'>
              <article>
                {localeInfo.isRussian ? <p>Действие проекта происходило на Земле, в альтернативной реальности, где негосударственные группировки и организации контролировали большие территории, часто вступая в ожесточенные вооруженные конфликты друг с другом.</p> : <p>Set on Earth, it depicted an alternative history, where non-state groups and factions controlled large
                  territories, frequently engaging in fierce armed conflicts with each other.</p>}
              </article>
            </div>
          </div>
          <div className='flex flex-col md:flex-row w-full justify-between items-center'>
            <div className='p-5 w-full border-b md:border-b-0 md:border-r border-color-default'>
              <article>
                {localeInfo.isRussian ? <p>Вселенная выступала в роли большого центра для ролевых игр. Другие участники проекта могли оказывать непосредственное влияние на ход истории.</p> : <p>The universe acted as a large roleplaying hub. Other members of the project were able to have a direct impact on the course of history.</p>}
              </article>
            </div>
            <div className='p-5 w-full'>
              <article>
                {localeInfo.isRussian ? <p>Из-за присущей конфликтности проекта, его участники часто вступали и в реальные конфликты, что привело к его распаду.</p> : <p>Due to its inherent conflictual nature, members of the project also engaged in real conflicts, which resulted in the dissolution of the universe.</p>}
              </article>
            </div>
          </div>
          <div className='text-center w-full border-t border-color-default p-5 italic font-bold'>
            {localeInfo.isRussian ? <p>Отдельное спасибо бывшим участникам World Factions, среди которых: IDEXV, URAKOLOUY5, Lomonosik, BruhAn, DisKripNeity/DEZONEIDZHI/Estpell, Vuldemar, LaXID (косвенный вклад) и другие.</p> : <p>Special thanks to former World Factions members, which include: IDEXV, URAKOLOUY5, Lomonosik, BruhAn, DisKripNeity/DEZONEIDZHI/Estpell, Vuldemar, LaXID (indirect contribution) and others.</p>}
          </div>
        </div>
      </div>
    </>
  )
}