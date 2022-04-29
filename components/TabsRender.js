import React from 'react'

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1)
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none text-center flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase text-center px-5 py-3 dark:text-white text-white shadow-lg rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-red-800 bg-' + color + '-600'
                    : 'text-white bg-red-800 ')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i> Tech
                Stack
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 dark:text-white py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 2
                    ? 'text-red-800 bg-' + color + '-600'
                    : 'text-white bg-red-800 ')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i> Technical Skills
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 dark:text-white shadow-lg rounded block leading-normal ' +
                  (openTab === 3
                    ? 'text-red-800 bg-' + color + '-600'
                    : 'text-white bg-red-800 ')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(3)
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i>Interests
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded dark:text-black ">
            <div className="px-4 py-5 flex-auto dark:text-black">
              <div className="tab-content tab-space dark:text-black">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <div
                    className={
                      'text-center dark:text-black ' +
                      (openTab === 1
                        ? 'text-black bg-black' + color + '-600'
                        : 'text-white' + color + '-600 bg-white')
                    }
                  >
                    Python <br />
                    Dart (w/ Flutter - Learning)
                    <br />
                    JavaScript (Jr. - Learning)
                    <br /> React.js <br />
                    Node.js <br />
                    Express.js <br />
                    MongoDB <br />
                    Docker <br />
                    C#/.NET (Newcomer) <br />
                    PHP/MySQL (Learning)
                  </div>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <div
                    className={
                      'text-center dark:text-black ' +
                      (openTab === 1
                        ? 'text-black bg-black' + color + '-600'
                        : 'text-white' + color + '-600 bg-white')
                    }
                  >
                    Technical skills Web Development (Jr. Full-Stack) <br />
                    Responsive Design UI/UX Design (Flutter- Adobe XD) <br />
                    Mobile Development (Learning - Flutter) <br />
                    3D Modelling (Learning)
                  </div>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <div
                    className={
                      'text-center dark:text-black ' +
                      (openTab === 1
                        ? 'text-black bg-black' + color + '-600'
                        : 'text-white' + color + '-600 bg-white')
                    }
                  >
                    Trading <br />
                    Music <br />
                    Art <br />
                    Entrepreneurship
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function TabsRender() {
  return (
    <>
      <Tabs color="blue" />
    </>
  )
}
