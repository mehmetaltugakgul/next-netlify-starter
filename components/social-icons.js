/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react'
export default function Index() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  var linkList = [
    'https://linkedin.com/in/mehmetaltugakgul',
    'https://github.com/mehmetaltugakgul',
    'https://www.instagram.com/mehmetaltugakgul/',
    'https://twitter.com/AltugAkgul',
  ]
  var iconList = ['linkedin', 'github', 'instagram', 'twitter']

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
    <div className="flex max-w-3xl my-8">
      {linkList.map((link, index) =>
        iconLinkGenerator(iconList[index], theme, link),
      )}
    </div>
  )
}
