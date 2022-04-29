import Link from 'next/link'
import Layout from '@/components/layout'
import Head from 'next/head'
import { useTheme } from 'next-themes'
export default function Index() {
  const { theme } = useTheme()
  const rightArrowLink = `https://s.svgbox.net/hero-solid.svg?ic=arrow-right&fill=${
    theme === 'dark' ? '000' : 'fff'
  }`
  return (
    <>
      <Layout>
        <Head>
          <title>
            About - Mehmet Altuğ Akgül - Electrical-Electronics and Software
            Engineer
          </title>
          <meta rel="og:description" content="About Me | Mehmet Altuğ Akgül" />
          <meta name="description" content="About Me | Mehmet Altuğ Akgül" />
        </Head>
        <h1 className="page-title-design">About</h1>

        <div className="mt-6 text-2xl text-black lg:mt-16 dark:text-white  ">
          Education Info
        </div>
        <div className="mt-6 text-lg font-normal text-black lg:mt-16 dark:text-white">
          Management Information Systems 2021-... - Istanbul University <br />
          <br />
          MBA(Management of Business Administrations) - Atilim University
          Master`s Degree(2020-2021)
          <br />
          <br />
          Electrical and Electronics Engineering - Atilim University Bachelor`s
          Degree(2020)
          <br />
        </div>
        <div className="mt-6">
          <Link href="/Mehmet Altuğ Akgül-CV-Eng.pdf" passHref={true}>
            <button className="flex items-center p-4 mt-4 font-medium text-white transition duration-300 bg-black border-2 border-black cursor-pointer dark:bg-white dark:text-black rounded-xl hover:opacity-80">
              <div className="pr-2">My Resume</div>
              <div>
                <img
                  src={rightArrowLink}
                  width="20"
                  height="20"
                  alt="right arrow icon"
                />
              </div>
            </button>
          </Link>
        </div>
        <div className="mt-6 text-2xl text-black lg:mt-16 dark:text-white  ">
          Certificates
        </div>

        <div className="mt-2 text-lg font-normal text-black lg:mt-10 dark:text-white">
          Certificates that I have earned over time RD Engineering Certificate
          Program (RD / RD) // Qualification ID:
          UC-6d12a170-3b41-46fc-85af-fc715a4f8360 <br />
          <br />
          Electrical Project Training - Large-Scale Buildings - 15-Hour Training
          - Qualification ID: UC-ecdc5041-d922-4851-9cbb-d65cd411be1b
          <br />
          <br />
          Electrical Project Training - Housing Projects - 9.5 Hours Training -
          Qualification ID: UC-3cd717a8-7351-4914-b542-dda1e683bb54 <br />
          <br />
          Electrical Construction Site and Field Applications Training -
          Qualification ID:UC-5ab91e04-e98e-427e-842a-11658ea06111 <br />
          <br />
          ISO 9001: 2015 Quality Management System Standard Training -
          Qualification ID: UC-96842d2a-6216-4801-9977-75a3e0ae6cc7 <br />
          <br />
          ISO 19011 Internal Auditor (Auditor) Specialization Certificate
          Program - Qualification ID:UC-fd9b0375-bc01-44d6-a99f-a7e5683f2e63
          <br />
          <br />
          ISO 14001 Environmental Management System Expertise Certificate
          Program - Qualification ID:UC-367e3a46-e311-4568-8c02-2f31bf1886fb
          <br />
          <br />
          Basic Occupational Health and Safety Certificate - Qualification
          ID:160802760069 <br />
          <br />
          Google Analytics Individual Qualification Certificate
          <br />
          <br /> Internal Audit Training Certificate Basic Labor Law and Labor
          Law Education Certificate <br />
          <br />
          Export Development Training Certificate Neuromarketing Certificate
          <br />
          <br />
          Protocol and Social Code of Conduct Certificate 3D Visualization
          Certificate <br />
          <br />
          Talent Innovation Certificate Risk-Based Thinking Technique Training
          Certificate
          <br />
          <br />
        </div>
      </Layout>
    </>
  )
}
