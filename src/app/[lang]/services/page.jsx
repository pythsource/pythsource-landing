import { formatTitle, MetadataTemplate, parseLocale } from '@/lib/utilities'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }]
}

export function generateMetadata({ params }) {
  const localeInfo = parseLocale(params['lang'])
  return MetadataTemplate(localeInfo.isRussian ? 'Удаленный IT-аутсорсинг от PythSource. Разработка сайтов, игр, специализированного ПО; настройка и аудит Linux-серверов, разработка IT-инфраструктуры; переводы любого класса.' : 'Remote IT outsourcing from PythSource. Web development, game development, development of specialised software; Linux server configuration and auditing, IT infrastructure development; translations of any type.', formatTitle(localeInfo.isRussian ? 'IT-услуги' : 'IT Services'), localeInfo.isRussian, "/services")
}

function ServicesPage() {
  return (
    <>
      <div className='w-full h-full'>
        <div className='flex flex-col h-full gap-3'>
          <div className='border-color-default border-l-2 pl-2'>
            <h1 className='text-2xl font-bold border-b border-color-default mb-1 pb-1'>Услуги</h1>
            <h2>Мы предоставляем аутсорсинговые услуги в сфере IT.</h2>
            <h3>Чтобы связаться с нами по поводу услуги, напишите нам на электронную почту — <a className='text-link' href='mailto:pythsource.official@gmail.com'>pythsource.official@gmail.com</a></h3>
            <h3 className='mt-3'>Стоимость услуг зависит от сложности и размеров поставленной задачи. Средняя стоимость услуг предоставлена как ориентировочная и не является гарантированной.</h3>
          </div>
          <div className='flex flex-col gap-2 overflow-auto border border-color-default p-1'>
            <div className='border border-color-default p-3 bg-default-darkl'>
              <h1 className='font-bold text-xl'>Разработка сайтов</h1>
              <article className='text-dark'>Лёгкой, средней сложности. React, Next, Node.js, ASP.NET.
              </article>
              <div className='mt-3 flex gap-2'><h2 className='font-bold'>Средняя стоимость:</h2><p
                className='border-b border-green-600'>от 150₽</p></div>
            </div>
            <div className='border border-color-default p-3 bg-default-darkl'>
              <h1 className='font-bold text-xl'>Разработка игр</h1>
              <article className='text-dark'>Unity, Unreal Engine.
              </article>
              <div className='mt-3 flex gap-2'><h2 className='font-bold'>Средняя стоимость:</h2><p
                className='border-b border-green-600'>от 170₽</p></div>
            </div>
            <div className='border border-color-default p-3 bg-default-darkl'>
              <h1 className='font-bold text-xl'>Системное администрирование</h1>
              <article className='text-dark'>Настройка Linux серверов, исправление сбоев, ошибок.
                Модернизация серверного ПО. IT-инфраструктура.
              </article>
              <div className='mt-3 flex gap-2'><h2 className='font-bold'>Средняя стоимость:</h2><p
                className='border-b border-green-600'>от 125₽</p></div>
            </div>
            <div className='border border-color-default p-3 bg-default-darkl'>
              <h1 className='font-bold text-xl'>Переводы RU{'<=>'}ENG</h1>
              <article className='text-dark'>Переводы любых материалов (аудио, видео, тексты). Технические переводы.
              </article>
              <div className='mt-3 flex gap-2'><h2 className='font-bold'>Средняя стоимость:</h2><p
                className='border-b border-green-600'>от 100₽</p></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function UnavailablePage() {
  return (
    <>
      <div className='warning'>
        <h1 className='font-bold'>Unfortunately, due to the current situation in the world, we cannot provide
          services to users who do not reside in Russia, Belarus and other CIS countries.</h1>
        <h2 className='font-bold mt-5'>We are trying to resolve this problem.</h2>
      </div>
    </>
  )
}

export default function Main({ params }) {
  const localeInfo = parseLocale(params['lang'])

  return (
    <>
      {localeInfo.isRussian ? <ServicesPage/> : <UnavailablePage/>}
    </>
  )
}