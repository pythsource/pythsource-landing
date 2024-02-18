export default function Projects() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <div className="flex flex-col border-b border-default-dark mb-2">
            <span className="text-2xl font-bold -mb-1">Data Point:</span>
            <span className="text-sm italic text-gray-400">
              A universe, used by Pythsource to develop different multimedia
              projects. Constantly expanding.
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="border p-2 bg-[linear-gradient(to_bottom,rgba(17,19,21,0.5),rgba(17,19,21,1)),url('https://upload.wikimedia.org/wikipedia/ru/d/db/Citadel_1_%28Half-Life_2_Episode_One%29.jpg')] border-default-dark rounded-lg bg-default-dark">
              <span className="text-2xl font-bold">
                Global Information Repository
              </span>
              <article className="text-sm">
                <p>
                  A wiki for Data Point, taken from the perspective of the
                  ITREWN.
                </p>
              </article>
              <div className="text-center border-t border-default-dark mt-2">
                TBA
              </div>
            </div>
            <div className="border p-2 bg-[linear-gradient(to_bottom,rgba(17,19,21,0.5),rgba(17,19,21,1)),url('https://upload.wikimedia.org/wikipedia/commons/f/fd/TDN-1_assault_drone_strikes_target_during_tests_in_Delaware_Bay_in_January_1943.jpg')] border-default-dark rounded-lg bg-default-dark">
              <span className="text-2xl font-bold">Project Seen</span>
              <article className="text-sm">
                <p>
                  A modification for Half-Life 2, that depicts the events of the
                  Celas' Revolution.
                </p>
              </article>
              <div className="text-center border-t border-default-dark mt-2">
                TBA
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
