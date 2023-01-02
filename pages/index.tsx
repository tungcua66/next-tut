import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next tutorial</title>
      </Head>
      <Link href="/about"> About</Link>
      <h1> hello this is index page</h1>
    </>
  )
}
