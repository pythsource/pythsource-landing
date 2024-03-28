import { FaGithub, FaGitlab, FaJira, FaYoutube } from 'react-icons/fa'
import {changeTitle, parseLocale} from '../main'
import { MdAlternateEmail, MdGamepad } from 'react-icons/md'
import { useParams } from 'react-router'

export default function Contacts() {
  const params = useParams()
  const localeInfo = parseLocale(params['lang'])

  changeTitle(localeInfo.isRussian ? 'Контакты' : 'Contacts')

  return (
    <>
      <div className="w-full h-full">
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex pr-5 flex-col w-1/2 border-r border-color-default">
              <h1 className="text-lg md:text-2xl font-bold">
                {localeInfo.isRussian ? 'Для общих вопросов' : 'General Inquiries'}
              </h1>
              <hr className="border-color-default mb-3" />
              <div className="flex flex-col border-l-2 border-dashed border-color-default pl-3">
                <div className="md:text-lg truncate flex items-center gap-2">
                  <MdAlternateEmail size={35} />
                  <div className="flex flex-col">
                    <h1>{localeInfo.isRussian ? 'Напишите нам по электронной почте' : 'Message us by e-mail'}:</h1>
                    <a
                      className="text-link"
                      href="mailto:pythsource.official@gmail.com"
                    >
                      pythsource.official@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-5 flex flex-col w-1/2">
              <h1 className="text-lg md:text-2xl font-bold">{localeInfo.isRussian ? 'Для других вопросов' : 'Other Inquiries'}</h1>
              <hr className="border-color-default mb-3" />
              <div className="flex flex-col fancy-link-animation gap-1 border-l-2 border-dashed border-color-default pl-3">
                <h1 className="md:text-lg border-b border-color-default mb-1">
                  {localeInfo.isRussian ? 'Страницы в соц. сетях' : 'Social pages'}:
                </h1>
                <a
                  className="flex gap-2 items-center"
                  href="https://www.youtube.com/channel/UCgy0pqFWwiXrVxU8KXgb1RQ"
                >
                  <FaYoutube size={35} /> YouTube
                </a>
                <a
                  className="flex gap-2 items-center"
                  href="https://www.moddb.com/company/pythsource"
                >
                  <MdGamepad size={35} /> ModDB
                </a>
                <h1 className="md:text-lg border-b border-color-default mb-1">
                  {localeInfo.isRussian ? 'Для технических вопросов' : 'For technical inquiries'}:
                </h1>
                <a
                  className="flex gap-2 items-center"
                  href="https://github.com/pythsource"
                >
                  <FaGithub size={35} /> GitHub
                </a>
                <a
                  className="flex gap-2 items-center"
                  href="https://git.pythsource.com/explore"
                >
                  <FaGitlab size={35} /> GitLab
                </a>
                <a
                  className="flex gap-2 items-center"
                  href="https://issues.pythsource.com"
                >
                  <FaJira size={35} /> Jira
                </a>
              </div>
            </div>
          </div>
          <div className="text-center border-t border-color-default mt-5 pt-5">
            <h1 className="md:text-lg font-bold">
              {localeInfo.isRussian ? 'Вы также можете напрямую связаться с членами нашей команды. Некоторые из них могут разрешить прямые сообщения.' : 'You can also contact our team members directly. Some of them might \
              allow direct messaging.'}
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}
