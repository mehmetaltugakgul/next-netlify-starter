import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { HOME_OG_IMAGE_URL } from '@/lib/constants'
import Layout from '@/components/layout'
import TabsRender from '@/components/TabsRender'
import Tradingview from '@/components/Tradingview'
export default function Index() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  const twitterSvgTagLink = `https://s2.svgbox.net/social.svg?ic=linkedin&color=${
    theme === 'light' ? '000' : 'fff'
  }`
  return (
    <>
      <Layout>
        <Head>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta property="twitter:site" content="@altugakgul"></meta>
          <meta property="twitter:title" content="Mehmet Altuğ Akgül"></meta>
          <meta property="twitter:url" content="https://altug.dev" />
          <meta
            property="twitter:description"
            content="Selected Work and Writings by Altuğ"
          ></meta>
          <link rel="icon" type="image/png" href="/imzaa1white.png"></link>
          <meta property="twitter:image" content={HOME_OG_IMAGE_URL}></meta>

          <meta property="og:image" content={HOME_OG_IMAGE_URL}></meta>
          <meta
            property="og:description"
            content="Selected Work and Writings by Mehmet Altuğ Akgül"
          ></meta>
          <meta
            name="description"
            content="Selected Work and Writings by Mehmet Altuğ Akgül"
          ></meta>
          <title>Mehmet Altuğ Akgül</title>
          <meta property="og:title" content="Mehmet Altuğ Akgül"></meta>
        </Head>
        {/* <Fade bottom> */}
        <div className="mt-6 mb-12 lg:mt-16">
          <p className="mt-8 text-3xl font-medium text-left text-black md:text-4xl lg:text-6xl dark:text-white">
            Hello! I`m Mehmet Altuğ Akgül
          </p>{' '}
          <p className="mt-8 text-xl font-normal text-left text-black md:text-xl lg:text-xl dark:text-white">
            Electrical - Electronics / Software Engineer. I was born in
            1995/Ankara. Graduated from Master of Business Administration(MBA).
            I continue Management Information Systems as the second university.
            I work as a Software Engineer in the Product Strategy department of
            Papilon Savunma. I am an e-resident of Estonia since 2021.
          </p>
          <div className="flex mt-2">
            <Link href="/about" passHref={true}>
              <button className="p-4 mt-4 mr-4 font-medium text-white transition duration-300 transform bg-black border-2 border-black cursor-pointer dark:bg-white dark:border-white dark:text-black rounded-xl hover:opacity-80">
                Know More
              </button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/mehmetaltugakgul/"
              passHref={true}
            >
              <button className="flex items-center p-4 mt-4 text-black transition duration-300 transform border-2 border-black cursor-pointer dark:border-white dark:text-white rounded-xl hover:opacity-70">
                <div className="pr-2">
                  <img
                    src={twitterSvgTagLink}
                    width="22"
                    height="22"
                    alt="twitter logo"
                  />
                </div>
                <div className="font-medium"> Find me on LinkedIn</div>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-1 md:mt-36 lg:mt-1">
          {/* <div className="home-page-title">Selected Work</div>
          <div>
            <a
              target="_blank"
              href="https://glado8.notion.site/Designing-a-Marketplace-for-Notion-8ba5abea314e4620800d282762fcb024"
              rel="noreferrer"
            >
              <div className="mb-12 group">
                <div className="overflow-hidden duration-500 transform cursor-pointer group-hover:shadow-xl hover:scale-100 rounded-xl">
                  <Image
                    src="/images/notion-marketplace.png"
                    alt="Cover image for playground section"
                    width={1600}
                    height={900}
                    layout="responsive"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="mb-2 text-lg font-semibold leading-snug text-black group-hover:underline lg:text-xl dark:text-white">
                    Designing a Marketplace for Notion
                  </h3>
                  <p className="mb-2 text-base font-normal leading-snug text-black cursor-pointer lg:text-lg dark:text-white">
                    A case study on how would one go about building a
                    marketplace for Notion, made in Notion! Created as part of
                    Atlan's design assignment.
                  </p>
                </div>
              </div>
            </a>
          </div>
          {/* <ProjectList posts={allWork} /> */}
        </div>{' '}
        {/* <div>
          <Link href="https://www.behance.net/gallery/94684063/Zomato-A-UX-Review">
            <div className="group">
              <div className="overflow-hidden duration-500 transform cursor-pointer group-hover:shadow-xl hover:scale-100 rounded-xl">
                <Image
                  src="/images/zomato.png"
                  alt="Cover image for playground section"
                  width={1600}
                  height={900}
                  layout="responsive"
                />
              </div>
              <div className="mt-4">
                <h3 className="mb-2 text-lg font-semibold leading-snug text-black group-hover:underline lg:text-xl dark:text-white">
                  Zomato UX Teardown Challenge
                </h3>
                <p className="mb-2 text-base font-normal leading-snug text-black cursor-pointer lg:text-lg dark:text-white">
                  A thorough UX review of Zomato's 2019 redesign, conducted as
                  part of their UX Teardown Challenge.
                </p>
              </div>
            </div>
          </Link>
        </div> */}
        {/* <div className="mt-24 lg:mt-36">
          <div className="home-page-title">Selected Writings</div>

          <Link href="/writings" passHref={true}>
            <button className="mt-4 text-black underline cursor-pointer dark:text-white">
              Read More
            </button>
          </Link>
        </div> */}
        <div className="mt-12 lg:mt-24">
          {/* <div className="home-page-title">Playground</div>
          <Link href="/playground" passHref={true}>
            <div>
              <div className="overflow-hidden duration-500 transform cursor-pointer hover:shadow-xl hover:scale-100 rounded-xl">
                <Image
                  src="/images/playground.png"
                  alt="Cover image for playground section"
                  width={1600}
                  height={900}
                  layout="responsive"
                />
              </div>
              <div className="mt-4">
                <p className="mb-2 text-base font-normal leading-snug text-black cursor-pointer lg:text-lg dark:text-white">
                  I tinker around and create visuals on various design tools.
                  From icons, illustrations, concept UI to donuts and unfinished
                  ideas, you will find everything here!
                </p>
              </div>
            </div>
          </Link> */}
        </div>
        <TabsRender />
        <div>
          <rssapp-magazine id="tsYnCZIrvMrkZaUf"></rssapp-magazine>
          <script
            src="https://widget.rss.app/v1/magazine.js"
            type="text/javascript"
            async
          ></script>
        </div>
      </Layout>
    </>
  )
}

// export async function getStaticProps({ preview }) {
//   // const allPosts = await getAllPostsForHome(preview)
//   const allWork = await getAllProjectsForHome(preview)
//   return {
//     props: { allWork },
//   }
// }

const options = {
  defaultTabId: 'settings',
  activeClasses:
    'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
  inactiveClasses:
    'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
  onShow: () => {
    console.log('tab is shown')
  },
}
