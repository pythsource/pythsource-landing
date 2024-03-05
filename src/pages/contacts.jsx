import { FaGithub, FaGitlab, FaYoutube } from 'react-icons/fa'
import { changeTitle } from '../main'
import { MdAlternateEmail, MdGamepad, MdViewKanban } from 'react-icons/md'

export default function Contacts() {
  changeTitle('Contacts')

  return (
    <>
      <div className="w-full h-full">
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex pr-5 flex-col w-1/2 border-r border-color-default">
              <h1 className="text-lg md:text-2xl font-bold">
                General Inquiries
              </h1>
              <hr className="border-color-default mb-3" />
              <div className="flex flex-col border-l-2 border-dashed border-color-default pl-3">
                <div className="md:text-lg truncate flex items-center gap-2">
                  <MdAlternateEmail size={35} />
                  <div className="flex flex-col">
                    <h1>Message us by e-mail:</h1>
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
              <h1 className="text-lg md:text-2xl font-bold">Other Inquiries</h1>
              <hr className="border-color-default mb-3" />
              <div className="flex flex-col fancy-link-animation gap-1 border-l-2 border-dashed border-color-default pl-3">
                <h1 className="md:text-lg border-b border-color-default mb-1">
                  Social pages:
                </h1>
                <a
                  className="flex gap-2 items-center"
                  href="https://www.youtube.com/channel/UCgy0pqFWwiXrVxU8KXgb1RQ"
                >
                  <FaYoutube size={35} /> YouTube Channel
                </a>
                <a
                  className="flex gap-2 items-center"
                  href="https://www.moddb.com/company/pythsource"
                >
                  <MdGamepad size={35} /> ModDB
                </a>
                <h1 className="md:text-lg border-b border-color-default mb-1">
                  For technical inquiries:
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
                  <MdViewKanban size={35} /> Issue Tracker
                </a>
              </div>
            </div>
          </div>
          <div className="text-center border-t border-color-default mt-5 pt-5">
            <h1 className="md:text-lg font-bold">
              You can also contact our team members directly. Some of them might
              allow direct messaging.
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}
