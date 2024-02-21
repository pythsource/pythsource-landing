import { FaDiscord, FaGithub, FaTelegram, FaYoutube } from 'react-icons/fa'
import { BiSolidGame } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import Link from '../components/Link'

export default function Contact() {
  return (
    <>
      <div className="animation-appear">
        <h1 className="text-3xl font-bold mb-2.5">Contacts</h1>
        <div className="flex gap-5 mb-2.5">
          <div className="flex justify-evenly bg-default-dark border border-default-dark w-full">
            <div className="flex items-center gap-2.5 flex-col p-5">
              Telegram
              <Link
                href="https://t.me/pythsource"
                label={<FaTelegram size={45} />}
              />
            </div>
            <div className="flex items-center gap-2.5 flex-col p-5">
              ModDB
              <Link
                href="https://www.moddb.com/company/pythsource"
                label={<BiSolidGame size={45} />}
              />
            </div>
            <div className="flex items-center gap-2.5 flex-col p-5">
              YouTube
              <Link
                href="https://www.youtube.com/channel/UCgy0pqFWwiXrVxU8KXgb1RQ"
                label={<FaYoutube size={45} />}
              />
            </div>
            <div className="flex items-center gap-2.5 flex-col p-5">
              GitHub
              <Link
                href="https://github.com/pythsource"
                label={<FaGithub size={45} />}
              />
            </div>
            <div className="flex items-center gap-2.5 flex-col p-5">
              E-Mail
              <Link
                href="mailto:pythsource.official@gmail.com"
                label={<MdEmail size={45} />}
              />
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2.5">Members</h1>
        <div className="flex gap-5">
          <div className="flex w-1/3 bg-default-dark flex-col border border-default-dark p-5">
            <div className="flex gap-5">
              <img
                className="w-24 rounded-full"
                src="https://avatars.githubusercontent.com/u/41019056?v=4"
              ></img>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">URAKOLOUY5</span>
                <span className="text-lg -mt-2">Founder</span>
                <span className="text-sm text-gray-500">
                  Full-Stack (frontend specialization)
                </span>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <div className="flex items-center gap-3 border-t border-default-dark p-1">
                <FaDiscord size={30} /> urakolouy5
              </div>
              <div className="flex items-center gap-3 border-t border-default-dark p-1">
                <FaGithub size={30} />{' '}
                <Link
                  href="https://github.com/URAKOLOUY5"
                  label="https://github.com/URAKOLOUY5"
                  color={true}
                />
              </div>
            </div>
          </div>
          <div className="flex w-1/3 bg-default-dark flex-col border border-default-dark p-5">
            <div className="flex gap-5">
              <img
                className="w-24 rounded-full"
                src="https://avatars.githubusercontent.com/u/39655269?v=4"
              ></img>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">IDEXV</span>
                <span className="text-lg -mt-2">Founder</span>
                <span className="text-sm text-gray-500">
                  Full-Stack (backend specialization)
                </span>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <div className="flex items-center gap-3 border-t border-default-dark p-1">
                <FaDiscord size={30} /> maximkerkas123
              </div>
              <div className="flex items-center gap-3 border-t border-default-dark p-1">
                <FaGithub size={30} />{' '}
                <Link
                  href="https://github.com/IDEXV"
                  label="https://github.com/IDEXV"
                  color={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
