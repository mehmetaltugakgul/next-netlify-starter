/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Layout from '@/components/layout'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react'

export default function Podcasts() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  var iconNames = ['spotify', 'google-podcasts', 'apple-podcasts']

  function iconLinkGenerator(name, theme, link) {
    return (
      <a href={link} target="_blank" rel="noreferrer noopener">
        <img
          src={`https://s2.svgbox.net/social.svg?ic=${name}&color=${
            theme === 'light' ? '000' : 'fff'
          }`}
          className="social-icons"
        />
      </a>
    )
  }

  return (
    <div>
      <Layout>
        <Head>
          <title>Podcasts</title>
          <meta
            rel="og:description"
            content="Podcasts featuring Mehmet Altuğ Akgül"
          />
          <meta
            name="description"
            content="Podcasts featuring Mehmet Altuğ Akgül"
          />
        </Head>
        <h1 className="page-title-design">Podcasts</h1>
        <div className="mb-8 page-para-design">
          Podcasts I have been invited to talk on.
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div className="p-3 bg-gray-100 rounded-xl">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/includepeople.jpeg"
                alt="Neumorphic Concept art for Instagram"
                width={1000}
                height={1000}
                layout="responsive"
              />
            </div>

            <div className="flex flex-row items-center my-4">
              <div className="pr-3 text-lg">Listen on</div>
              {podcastTwoLinks.map((link, index) =>
                iconLinkGenerator(iconNames[index], theme, link),
              )}
            </div>
          </div>
          <div className="p-3 bg-gray-100 rounded-xl">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/technology-together.png"
                alt="Neumorphic Concept art for Instagram"
                width={1000}
                height={1000}
                layout="responsive"
              />
            </div>
            <div className="flex flex-row items-center my-4">
              <div className="pr-3 text-lg">Listen on</div>
              {podcastOneLinks.map((link, index) =>
                iconLinkGenerator(iconNames[index], theme, link),
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
