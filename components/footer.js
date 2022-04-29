import React from 'react'
import SocialLinks from './social-icons'
import { useTheme } from 'next-themes'

export default function Footer() {
  const { theme } = useTheme()

  //dark mode link styling for footer
  function darkModeLinkStyleTag(linkText, link) {
    return (
      <a
        className={`cursor-pointer hover:opacity-70 font-medium transition duration-300 ${
          theme === 'dark' ? 'link-styling-dark' : 'link-styling'
        }`}
        href={link}
        rel="noopener noreferrer"
        target="_blank"
      >
        {linkText}
      </a>
    )
  }

  return (
    <div className="bottom-0 max-w-4xl mx-auto my-4 lazy-renderer">
      <footer>
        <SocialLinks />
        <a href="mailto:info@altug.dev" target="_blank" rel="noreferrer">
          <div className="flex justify-start text-sm font-normal text-inactive-gray">
            © altug.dev
          </div>
        </a>
      </footer>
    </div>
  )
}
