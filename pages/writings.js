import WritingList from '@/components/writinglist'
import Layout from '@/components/layout'
import { getOnlyBlogPosts } from '@/lib/api'
import { WRITING_OG_IMAGE_URL } from '@/lib/constants'
import Head from 'next/head'

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Writings</title>
          <meta rel="og:description" content="Writings by Mehmet Altuğ Akgül" />
          <meta property="og:image" content={WRITING_OG_IMAGE_URL} />
          <meta name="description" content="Writings by Mehmet Altuğ Akgül" />
          <link rel="icon" type="image/svg" href="/public/imzaa1.svg"></link>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@altugakgul" />
          <meta name="twitter:title" content="Writings | Mehmet Altuğ Akgül" />
          <meta
            name="twitter:description"
            content="Writings by Mehmet Altuğ Akgül"
          />
          <meta name="twitter:image" content={WRITING_OG_IMAGE_URL} />
        </Head>
        <h1 className="page-title-design">Writings</h1>
        <WritingList className="mt-6 lg:mt-16" posts={allPosts} />
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getOnlyBlogPosts(preview)) || []
  return {
    props: { allPosts },
  }
}
