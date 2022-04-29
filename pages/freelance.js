import Head from 'next/head'
import Layout from './../components/layout'

export default function Freelance() {
  return (
    <>
      <Layout>
        <Head>
          <title>Freelance Work</title>
          <meta
            rel="og:description"
            content="Freelance work and Testimonials | Mehmet Altuğ Akgül"
          />
          <meta
            name="description"
            content="Freelance work and Testimonials | Mehmet Altuğ Akgül"
          />
        </Head>
        <h1 className="page-title-design">Freelance Work</h1>
      </Layout>
    </>
  )
}
